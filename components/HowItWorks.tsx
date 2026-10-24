import { adimlar } from '@/lib/data'

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="scroll-mt-24 bg-murekkep py-20">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <h2 className="font-baslik text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[40px]">
          Nasıl çalışır?
        </h2>
        <p className="mt-3 max-w-xl text-[17px] text-white/70">
          Üç adımda işini hallet. Sürpriz yok, gizli ücret yok.
        </p>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {adimlar.map((adim) => (
            <li
              key={adim.numara}
              className="rounded-[20px] border border-white/15 p-6"
            >
              <span className="font-baslik text-[40px] font-extrabold leading-none text-turuncu-acik">
                {adim.numara}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{adim.baslik}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{adim.metin}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
