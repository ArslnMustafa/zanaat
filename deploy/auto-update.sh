#!/usr/bin/env bash
# Yeni commit'leri alir ve siteyi o surume getirir. Sunucuda cron'a konuyor,
# boylece telefondan yapilan bir degisiklik kendiliginden yayina giriyor:
#
#   */2 * * * * /home/zanaat.mustafaarslan.com/zanaat/deploy/auto-update.sh >> /var/log/zanaat-update.log 2>&1
#
# Yeni surum once ayri bir klasore derleniyor; calisan site yarim kalmis bir
# derlemeyi hic gormuyor. Derleme ya da site patlarsa eski surum yerine
# geri konuyor - hic site olmamasindansa onceki surum.
set -uo pipefail

APP_DIR="${ZANAAT_APP_DIR:-/home/zanaat.mustafaarslan.com/zanaat}"
BRANCH="${ZANAAT_BRANCH:-main}"
RESTART="${ZANAAT_RESTART:-pm2 restart zanaat --update-env}"
HEALTH_URL="${ZANAAT_HEALTH_URL:-http://127.0.0.1:4300/}"
DENEME="${ZANAAT_HEALTH_TRIES:-6}"

say() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$1"; }

cd "$APP_DIR" 2>/dev/null || { say "HATA: $APP_DIR yok."; exit 1; }

if ! git diff --quiet || ! git diff --cached --quiet; then
  say "IPTAL: dizinde elle yapilmis degisiklikler var, guncelleme onlari silerdi."
  exit 1
fi

git fetch --quiet origin "$BRANCH" || { say "HATA: git fetch olmadi."; exit 1; }

ESKI="$(git rev-parse HEAD)"
YENI="$(git rev-parse "origin/$BRANCH")"

# En sik durum: yeni bir sey yok. O zaman log'a satir da yazmiyoruz.
[ "$ESKI" = "$YENI" ] && exit 0

say "Yeni surum: ${ESKI:0:7} -> ${YENI:0:7}"
git log --oneline "$ESKI..$YENI" | sed 's/^/           /'

if ! git merge --ff-only "origin/$BRANCH" --quiet; then
  say "HATA: ileri sarma yapilamadi (yerel commit?). Elle bakmak gerek."
  exit 1
fi

if ! git diff --quiet "$ESKI" "$YENI" -- package-lock.json package.json; then
  say "Paketler degismis, npm install calisiyor."
  npm install --no-audit --no-fund >/dev/null 2>&1 || say "UYARI: npm install hata verdi."
fi

# --- derleme: once ayri klasore ------------------------------------------
say "Derleniyor."
rm -rf .next-yeni
if ! NEXT_DIST_DIR=.next-yeni npm run build >/dev/null 2>&1; then
  say "HATA: derleme basarisiz. Site eski surumde kaliyor."
  rm -rf .next-yeni
  git reset --hard "$ESKI" --quiet
  exit 1
fi

rm -rf .next-eski
[ -d .next ] && mv .next .next-eski
mv .next-yeni .next

say "Yeniden baslatiliyor: $RESTART"
$RESTART >/dev/null 2>&1 || say "UYARI: yeniden baslatma hata bildirdi."

# Siteye "ayakta misin" diye soruyor. curl yoksa node ile soruyor, yoksa her
# guncelleme bozuk sayilip geri alinirdi.
kapiyiCal() {
  if command -v curl >/dev/null 2>&1; then
    curl -fsS --max-time 8 "$HEALTH_URL" >/dev/null 2>&1
  else
    node -e '
      fetch(process.argv[1], { signal: AbortSignal.timeout(8000) })
        .then((a) => process.exit(a.ok ? 0 : 1))
        .catch(() => process.exit(1));
    ' "$HEALTH_URL" >/dev/null 2>&1
  fi
}

saglikli() {
  for _ in $(seq "$DENEME"); do
    sleep 3
    kapiyiCal && return 0
  done
  return 1
}

if saglikli; then
  say "Site ${YENI:0:7} surumunde calisiyor."
  rm -rf .next-eski
  exit 0
fi

say "Site yanit vermiyor - ${ESKI:0:7} surumune donuluyor."
git reset --hard "$ESKI" --quiet
rm -rf .next
[ -d .next-eski ] && mv .next-eski .next
$RESTART >/dev/null 2>&1

if saglikli; then
  say "Eski surum yeniden calisiyor. Yeni commit depoda duruyor ama sitede degil."
else
  say "HATA: eski surumle de yanit yok. pm2 logs zanaat."
fi
exit 1
