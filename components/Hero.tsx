import { Lock, Search } from 'lucide-react'
import { populerAramalar } from '@/lib/data'

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 pt-10 pb-12 sm:pt-16 lg:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* --- sol sütun: metin ve arama --- */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-turuncu">
            Yetenekli insanlar, güvenli ödeme
          </p>

          <h1 className="mt-5 font-baslik text-[44px] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-[56px] lg:text-[72px]">
            İşini ustasına bırak.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-murekkep-az">
            Logodan video kurguya, çeviriden web sitesine: ihtiyacını yaz, doğru kişiyi bul.
            Ödemen, işi onaylayana kadar güvende kalır.
          </p>

          <form className="mt-8 max-w-xl" action="#">
            <label htmlFor="arama" className="sr-only">
              Ne yaptırmak istiyorsun?
            </label>
            <div className="flex items-center gap-2 rounded-full border-2 border-murekkep bg-kart p-1.5 pl-5">
              <Search className="h-5 w-5 shrink-0 text-soluk" aria-hidden="true" />
              <input
                id="arama"
                name="arama"
                type="search"
                placeholder="Ne yaptırmak istiyorsun? Ör: kafem için logo"
                className="min-w-0 flex-1 bg-transparent py-3 text-[15px] text-murekkep outline-none placeholder:text-soluk"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-vurgu px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Ara
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-soluk">Popüler:</span>
            {populerAramalar.map((arama) => (
              <a
                key={arama}
                href="#"
                className="rounded-full border border-cizgi bg-kart px-3.5 py-1.5 text-sm text-murekkep-az transition-colors hover:border-murekkep hover:text-murekkep"
              >
                {arama}
              </a>
            ))}
          </div>
        </div>

        {/* --- sağ sütun: kolaj --- */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:h-[440px]">
          <div
            className="row-span-2 flex flex-col justify-end rounded-[20px] p-4"
            style={{ backgroundColor: '#e7e2f7' }}
          >
            <div className="flex flex-1 items-center justify-center">
              <span className="text-sm font-medium text-murekkep-az">[Satıcı fotoğrafı]</span>
            </div>
            <p className="rounded-xl bg-kart px-3.5 py-2.5 text-sm font-medium text-murekkep">
              [Satıcı adı] · Video kurgu
            </p>
          </div>

          <div
            className="grid min-h-[140px] place-items-center rounded-[20px] p-4"
            style={{ backgroundColor: '#f7dcc8' }}
          >
            <span className="text-sm font-medium text-murekkep-az">[İş görseli]</span>
          </div>

          <div className="flex min-h-[140px] flex-col justify-between rounded-[20px] bg-murekkep p-5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
              <Lock className="h-4.5 w-4.5 text-turuncu-acik" aria-hidden="true" />
            </span>
            <p className="text-[15px] font-medium leading-snug text-white">
              Paran, sen onaylayana kadar emanette.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
