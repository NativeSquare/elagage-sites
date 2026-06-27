import Link from "next/link"
import { Phone, TreeDeciduous } from "lucide-react"
import { getActiveCity } from "@/lib/cities"
import { CallButton } from "@/components/site/call-button"
import { Container } from "@/components/site/container"

export function SiteHeader() {
  const city = getActiveCity()
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      {/* Bandeau de réassurance + numéro visible en permanence */}
      <div className="bg-emerald-800 text-emerald-50">
        <Container className="flex items-center justify-between gap-2 py-2 text-xs">
          <span className="hidden sm:inline">
            Devis gratuit · Élagueurs-grimpeurs assurés · {city.city} et agglomération
          </span>
          <a
            href={city.phoneHref}
            className="inline-flex items-center gap-1.5 font-medium tracking-wide hover:underline"
          >
            <Phone className="size-3.5" />
            {city.phoneDisplay}
          </a>
        </Container>
      </div>

      {/* Barre principale : marque, navigation services, bouton d'appel */}
      <Container className="flex items-center justify-between gap-4 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-700 text-emerald-50 shadow-sm ring-1 ring-emerald-900/10">
            <TreeDeciduous className="size-5" />
          </span>
          <span className="text-[15px] leading-tight">{city.brand}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {city.services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-muted-foreground transition-colors hover:text-emerald-800"
            >
              {s.navLabel}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-emerald-800"
          >
            Contact
          </Link>
        </nav>

        <CallButton
          phoneDisplay={city.phoneDisplay}
          phoneHref={city.phoneHref}
          className="hidden sm:inline-flex"
        />
      </Container>
    </header>
  )
}
