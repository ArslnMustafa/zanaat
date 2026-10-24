import { Triangle } from 'lucide-react'

/* Logo birkaç yerde geçiyor (başlık, altbilgi), tek yerde dursun. */
export default function Logo({ koyu = true }: { koyu?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-vurgu">
        <Triangle className="h-4 w-4 fill-white text-white" aria-hidden="true" />
      </span>
      <span
        className={`font-baslik text-[22px] font-extrabold tracking-tight ${
          koyu ? 'text-murekkep' : 'text-white'
        }`}
      >
        zanaat
      </span>
    </span>
  )
}
