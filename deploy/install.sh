#!/usr/bin/env bash
# zanaat kurulumu (CyberPanel + PM2 olan sunucular icin).
# Calistirma:  bash install.sh
set -euo pipefail

REPO_URL="https://github.com/ArslnMustafa/zanaat.git"
BRANCH="${ZANAAT_BRANCH:-main}"
BASE_DIR="${ZANAAT_BASE_DIR:-/home/zanaat.mustafaarslan.com}"
APP_DIR="$BASE_DIR/zanaat"
PM2_NAME="${ZANAAT_PM2:-zanaat}"
PORT="${PORT:-4300}"

say() { printf "\n\033[1m==> %s\033[0m\n" "$1"; }
fail() { printf "\n\033[31mHATA: %s\033[0m\n" "$1" >&2; exit 1; }

say "Gereksinimler"
for arac in git node npm pm2; do
  command -v "$arac" >/dev/null || fail "$arac kurulu degil."
done

# Next.js 16 icin Node 20.9+ gerekiyor.
node -e 'const [a,b]=process.versions.node.split(".").map(Number); if(a<20||(a===20&&b<9)) { console.error("Node 20.9+ gerekli, kurulu:", process.versions.node); process.exit(1); }' \
  || fail "Node surumu yetersiz."

[ -d "$BASE_DIR" ] || fail "$BASE_DIR yok. Once CyberPanel'de siteyi olustur."

say "Kod indiriliyor"
if [ -d "$APP_DIR/.git" ]; then
  git -C "$APP_DIR" fetch origin "$BRANCH"
  git -C "$APP_DIR" checkout "$BRANCH"
  git -C "$APP_DIR" pull origin "$BRANCH"
else
  [ -e "$APP_DIR" ] && fail "$APP_DIR var ama git deposu degil."
  git clone --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

# Derleme icin typescript ve tailwind de lazim, bu yuzden --omit=dev yok.
say "Bagimliliklar"
npm install --no-audit --no-fund

say "Derleme"
npm run build

say "PM2"
if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
  PORT="$PORT" pm2 restart "$PM2_NAME" --update-env
else
  PORT="$PORT" pm2 start npm --name "$PM2_NAME" -- start
fi
pm2 save

sleep 3
say "Kontrol"
node -e '
  fetch("http://127.0.0.1:" + process.argv[1] + "/")
    .then((r) => process.exit(r.ok ? 0 : 1))
    .catch(() => process.exit(1));
' "$PORT" || fail "Uygulama yanit vermiyor:  pm2 logs $PM2_NAME"

cat <<INFO

================================================
 Kurulum tamam.
 Dizin : $APP_DIR
 Port  : $PORT
 PM2   : $PM2_NAME

 SIRADAKI ADIMLAR
 1) CyberPanel > Websites > zanaat.mustafaarslan.com > Manage > vHost Conf:
    deploy/vhost.conf icindekini yapistir, kaydet, sonra:
      systemctl restart lsws
 2) SSL: CyberPanel > SSL > Issue SSL
 3) Otomatik guncelleme icin crontab -e:
    */2 * * * * $APP_DIR/deploy/auto-update.sh >> /var/log/zanaat-update.log 2>&1
================================================
INFO
