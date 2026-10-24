import Link from 'next/link'
import Logo from './Logo'
import { menuLinkleri } from '@/lib/data'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cizgi bg-kagit/90 backdrop-blur">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <div className="flex items-center gap-4 py-4">
          <Link href="#" aria-label="zanaat ana sayfa">
            <Logo />
          </Link>

          <nav aria-label="Ana menü" className="hidden flex-1 justify-center gap-8 md:flex">
            {menuLinkleri.map((link) => (
              <a
                key={link.ad}
                href={link.href}
                className="text-[15px] font-medium text-murekkep-az transition-colors hover:text-murekkep"
              >
                {link.ad}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-4 md:ml-0">
            <a
              href="#"
              className="text-[15px] font-medium text-murekkep-az transition-colors hover:text-murekkep"
            >
              Giriş yap
            </a>
            <a
              href="#"
              className="rounded-full bg-murekkep px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-black"
            >
              Kayıt ol
            </a>
          </div>
        </div>

        {/* Dar ekranda menü başlığın altına sarmalanıyor. */}
        <nav aria-label="Ana menü" className="flex flex-wrap gap-x-6 gap-y-2 pb-4 md:hidden">
          {menuLinkleri.map((link) => (
            <a
              key={link.ad}
              href={link.href}
              className="text-sm font-medium text-murekkep-az transition-colors hover:text-murekkep"
            >
              {link.ad}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
