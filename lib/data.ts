import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Camera,
  Code2,
  Headphones,
  Megaphone,
  Music4,
  Palette,
  PenLine,
  ShieldCheck,
  Clapperboard,
  BadgeCheck,
} from 'lucide-react'

/* Sayfadaki bütün içerik burada duruyor; bileşenler yalnızca map'liyor.
   Yeni kategori ya da hizmet eklemek için tek yapılacak şey bu dizilere
   bir satır eklemek. */

export type MenuLinki = { ad: string; href: string }

export const menuLinkleri: MenuLinki[] = [
  { ad: 'Kategoriler', href: '#kategoriler' },
  { ad: 'Nasıl çalışır?', href: '#nasil-calisir' },
  { ad: 'Satıcı ol', href: '#satici-ol' },
]

export const populerAramalar: string[] = [
  'Logo tasarımı',
  'Video kurgu',
  'Çeviri',
  'Web sitesi',
  'Sosyal medya',
]

export type Kategori = {
  ad: string
  aciklama: string
  ikon: LucideIcon
  zemin: string
}

export const kategoriler: Kategori[] = [
  { ad: 'Grafik & Tasarım', aciklama: 'Logo, kartvizit, afiş', ikon: Palette, zemin: '#e7e2f7' },
  { ad: 'Video & Animasyon', aciklama: 'Kurgu, reels, intro', ikon: Clapperboard, zemin: '#f7dcc8' },
  { ad: 'Yazı & Çeviri', aciklama: 'İçerik, metin, çeviri', ikon: PenLine, zemin: '#d6ebe6' },
  { ad: 'Yazılım & Web', aciklama: 'Site, uygulama, e-ticaret', ikon: Code2, zemin: '#dce6f5' },
  { ad: 'Dijital Pazarlama', aciklama: 'Reklam, SEO, sosyal medya', ikon: Megaphone, zemin: '#f3e6b9' },
  { ad: 'Müzik & Ses', aciklama: 'Seslendirme, miks, jingle', ikon: Music4, zemin: '#f2d6dd' },
  { ad: 'Yapay Zekâ Hizmetleri', aciklama: 'Chatbot, otomasyon', ikon: Bot, zemin: '#e2eed3' },
  { ad: 'Fotoğraf', aciklama: 'Ürün, etkinlik, portre', ikon: Camera, zemin: '#e5e1da' },
]

export type Adim = { numara: string; baslik: string; metin: string }

export const adimlar: Adim[] = [
  {
    numara: '01',
    baslik: 'Hizmeti bul',
    metin:
      'Ara ya da kategorilere göz at. Paketleri, teslim sürelerini ve yorumları karşılaştır.',
  },
  {
    numara: '02',
    baslik: 'Sipariş ver',
    metin:
      'Paketini seç ve öde. Paran platformda emanette bekler, satıcı çalışmaya başlar.',
  },
  {
    numara: '03',
    baslik: 'Onayla, ödeme aktarılsın',
    metin:
      'Teslimatı incele, gerekirse revizyon iste. Onayladığında ödeme satıcıya geçer.',
  },
]

export type Hizmet = {
  baslik: string
  rozet: string
  satici: string
  puan: string
  yorum: string
  fiyat: string
  zemin: string
  avatarZemin: string
}

export const oneCikanHizmetler: Hizmet[] = [
  {
    baslik: 'Markana özel minimal logo ve kurumsal kimlik',
    rozet: 'Popüler',
    satici: '[Satıcı adı]',
    puan: '[Puan]',
    yorum: '[Yorum sayısı]',
    fiyat: '[FİYAT]',
    zemin: '#e7e2f7',
    avatarZemin: '#d6ebe6',
  },
  {
    baslik: 'Instagram ve TikTok için dikkat çeken reels kurgusu',
    rozet: 'Hızlı teslim',
    satici: '[Satıcı adı]',
    puan: '[Puan]',
    yorum: '[Yorum sayısı]',
    fiyat: '[FİYAT]',
    zemin: '#f7dcc8',
    avatarZemin: '#dce6f5',
  },
  {
    baslik: 'Web siten için Türkçe-İngilizce profesyonel çeviri',
    rozet: 'Yeni satıcı',
    satici: '[Satıcı adı]',
    puan: '[Puan]',
    yorum: '[Yorum sayısı]',
    fiyat: '[FİYAT]',
    zemin: '#d6ebe6',
    avatarZemin: '#f2d6dd',
  },
  {
    baslik: 'İşletmen için yapay zekâ destekli müşteri chatbotu',
    rozet: 'Popüler',
    satici: '[Satıcı adı]',
    puan: '[Puan]',
    yorum: '[Yorum sayısı]',
    fiyat: '[FİYAT]',
    zemin: '#e2eed3',
    avatarZemin: '#f3e6b9',
  },
]

export type Guvence = { baslik: string; metin: string; ikon: LucideIcon }

export const guvenceler: Guvence[] = [
  {
    baslik: 'Emanetli ödeme',
    metin: 'Ödeme, sen teslimatı onaylayana kadar satıcıya geçmez.',
    ikon: ShieldCheck,
  },
  {
    baslik: 'Doğrulanmış satıcılar',
    metin: 'Kimlik doğrulaması yapılan satıcılar profillerinde rozet taşır.',
    ikon: BadgeCheck,
  },
  {
    baslik: 'Destek ekibi',
    metin: 'Anlaşmazlık olursa ekibimiz iki tarafı dinleyip çözüm sunar.',
    ikon: Headphones,
  },
]

export type FooterSutunu = { baslik: string; linkler: MenuLinki[] }

export const footerSutunlari: FooterSutunu[] = [
  {
    baslik: 'Kategoriler',
    linkler: [
      { ad: 'Grafik & Tasarım', href: '#' },
      { ad: 'Video & Animasyon', href: '#' },
      { ad: 'Yazılım & Web', href: '#' },
    ],
  },
  {
    baslik: 'Satıcılar için',
    linkler: [
      { ad: 'Satıcı ol', href: '#satici-ol' },
      { ad: 'Satıcı rehberi', href: '#' },
      { ad: 'Topluluk', href: '#' },
    ],
  },
  {
    baslik: 'Şirket',
    linkler: [
      { ad: 'Hakkımızda', href: '#' },
      { ad: 'Yardım merkezi', href: '#' },
      { ad: 'Gizlilik ve KVKK', href: '#' },
    ],
  },
]
