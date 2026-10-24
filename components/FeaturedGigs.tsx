import { Star } from 'lucide-react'
import { oneCikanHizmetler } from '@/lib/data'

export default function FeaturedGigs() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-baslik text-[32px] font-extrabold tracking-[-0.02em] sm:text-[40px]">
          Öne çıkan hizmetler
        </h2>
        <a
          href="#"
          className="text-[15px] font-semibold text-vurgu underline-offset-4 hover:underline"
        >
          Daha fazlası
        </a>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {oneCikanHizmetler.map((hizmet) => (
          <li key={hizmet.baslik}>
            <a
              href="#"
              className="flex h-full flex-col overflow-hidden rounded-[20px] border border-cizgi bg-kart transition-colors hover:border-murekkep"
            >
              <div
                className="relative grid h-40 place-items-center"
                style={{ backgroundColor: hizmet.zemin }}
              >
                <span className="text-sm font-medium text-murekkep-az">[İş görseli]</span>
                <span className="absolute right-3 top-3 rounded-full bg-kart px-2.5 py-1 text-xs font-semibold text-murekkep">
                  {hizmet.rozet}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2">
                  <span
                    className="h-7 w-7 shrink-0 rounded-full"
                    style={{ backgroundColor: hizmet.avatarZemin }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-murekkep-az">{hizmet.satici}</span>
                </div>

                <h3 className="mt-3 text-[15px] font-semibold leading-snug text-murekkep">
                  {hizmet.baslik}
                </h3>

                <p className="mt-2 flex items-center gap-1.5 text-sm text-soluk">
                  <Star className="h-4 w-4 fill-turuncu-acik text-turuncu-acik" aria-hidden="true" />
                  <span>
                    {hizmet.puan} · {hizmet.yorum} yorum
                  </span>
                </p>

                <p className="mt-auto border-t border-cizgi pt-3 text-sm text-murekkep-az">
                  Başlangıç{' '}
                  <span className="font-semibold text-murekkep">{hizmet.fiyat}</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
