import Logo from './Logo'
import { footerSutunlari } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-cizgi">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-murekkep-az">
              Yetenekli insanları, işini dert etmeyecek ellere arayanlarla buluşturur.
            </p>
          </div>

          {footerSutunlari.map((sutun) => (
            <nav key={sutun.baslik} aria-label={sutun.baslik}>
              <h2 className="text-[13px] font-semibold uppercase tracking-wider text-soluk">
                {sutun.baslik}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {sutun.linkler.map((link) => (
                  <li key={link.ad}>
                    <a
                      href={link.href}
                      className="text-sm text-murekkep-az transition-colors hover:text-murekkep"
                    >
                      {link.ad}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
