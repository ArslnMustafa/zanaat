# zanaat

Hizmet pazaryeri için ana sayfa (landing page). Next.js App Router + TypeScript +
Tailwind CSS v4. Bütün metinler Türkçe.

## Çalıştırma

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # üretim derlemesi
npm start       # derlenmiş hali çalıştırır
```

## Yapı

```
app/
  layout.tsx      yazı tipleri (Bricolage Grotesque + Inter), <html lang="tr">
  page.tsx        bölümleri sırayla dizer
  globals.css     tasarım sistemi: renkler ve yazı tipleri @theme içinde
components/
  Header.tsx  Hero.tsx  Categories.tsx  HowItWorks.tsx
  FeaturedGigs.tsx  TrustBand.tsx  SellerCta.tsx  Footer.tsx  Logo.tsx
lib/
  data.ts         kategoriler, hizmetler, adımlar, footer linkleri
```

İçerik değiştirmek için `lib/data.ts` yeterli; bileşenler diziyi map'liyor.
Görseller henüz yok, yerlerinde pastel kutular ve `[İş görseli]` gibi
etiketler duruyor.

## Tasarım sistemi

Renkler `app/globals.css` içinde `@theme` ile tanımlı, Tailwind sınıfı olarak
kullanılıyor: `bg-kagit`, `text-murekkep`, `border-cizgi`, `bg-vurgu`,
`text-turuncu`, `bg-bant`. Kategori ve kart zeminlerindeki pastel tonlar
içerikle birlikte `lib/data.ts` içinde duruyor.
