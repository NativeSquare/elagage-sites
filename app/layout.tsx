import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { getActiveCity } from "@/lib/cities"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { BusinessJsonLd } from "@/components/site/business-jsonld"

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] })

const city = getActiveCity()

export const metadata: Metadata = {
  metadataBase: new URL(`https://${city.domain}`),
  title: {
    default: `${city.brand} — Élagage & abattage d'arbres ${city.inCity} (${city.deptCode})`,
    template: `%s | ${city.brand}`,
  },
  description: city.hero.subtitle,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${city.brand} — Élagage & abattage ${city.inCity}`,
    description: city.hero.subtitle,
    url: `https://${city.domain}`,
    locale: "fr_FR",
    type: "website",
  },
  // Pas de title/description figés ici : Next les dérive du title/description de
  // CHAQUE page (sinon les pages enfant héritent du Twitter de la home).
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BusinessJsonLd />
      </body>
    </html>
  )
}
