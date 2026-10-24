import { guvenceler } from '@/lib/data'

export default function TrustBand() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
      <div className="rounded-[28px] bg-bant px-6 py-10 sm:px-10">
        <ul className="grid gap-8 md:grid-cols-3">
          {guvenceler.map((guvence) => {
            const Ikon = guvence.ikon
            return (
              <li key={guvence.baslik}>
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-kart">
                  <Ikon className="h-5 w-5 text-murekkep" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-semibold text-murekkep">{guvence.baslik}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-murekkep-az">{guvence.metin}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
