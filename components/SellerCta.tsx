export default function SellerCta() {
  return (
    <section id="satici-ol" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-6 py-8">
      <div className="flex flex-col gap-8 rounded-[28px] bg-vurgu px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <div className="max-w-2xl">
          <h2 className="font-baslik text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[40px]">
            Yeteneğini kazanca dönüştür.
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-white/80">
            Profilini oluştur, hizmetini paketle, ilk siparişini al. Komisyon yalnızca
            kazandığında kesilir.
          </p>
        </div>

        <a
          href="#"
          className="shrink-0 self-start rounded-full bg-kart px-7 py-3.5 text-[15px] font-semibold text-vurgu transition-opacity hover:opacity-90 lg:self-auto"
        >
          Satıcı olarak başla
        </a>
      </div>
    </section>
  )
}
