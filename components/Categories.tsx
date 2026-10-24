import { kategoriler } from '@/lib/data'

export default function Categories() {
  return (
    <section id="kategoriler" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-6 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-baslik text-[32px] font-extrabold tracking-[-0.02em] sm:text-[40px]">
          Kategoriler
        </h2>
        <a
          href="#"
          className="text-[15px] font-semibold text-vurgu underline-offset-4 hover:underline"
        >
          Tümünü gör
        </a>
      </div>

      <ul className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
        {kategoriler.map((kategori) => {
          const Ikon = kategori.ikon
          return (
            <li key={kategori.ad}>
              <a
                href="#"
                className="block h-full rounded-[20px] border border-cizgi bg-kart p-5 transition-colors hover:border-murekkep"
              >
                <span
                  className="mb-4 grid h-11 w-11 place-items-center rounded-xl"
                  style={{ backgroundColor: kategori.zemin }}
                >
                  <Ikon className="h-5 w-5 text-murekkep" aria-hidden="true" />
                </span>
                <h3 className="text-[15px] font-semibold text-murekkep">{kategori.ad}</h3>
                <p className="mt-1 text-sm text-soluk">{kategori.aciklama}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
