import type { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { getActiveCity } from "@/lib/cities"
import { CallButton } from "@/components/site/call-button"
import { Container } from "@/components/site/container"
import { EstimatorSection } from "@/components/site/estimator-section"

const city = getActiveCity()

export const metadata: Metadata = {
  title: "Zone d'intervention",
  description: `Élagage, abattage et entretien d'arbres ${city.inCity} et dans l'agglomération : ${city.local.towns
    .slice(0, 6)
    .join(", ")} et les communes du ${city.dept}.`,
  alternates: { canonical: "/zone-intervention" },
  openGraph: {
    title: `Zone d'intervention — ${city.city} et agglomération`,
    description: `Élagage et abattage ${city.inCity} et dans les communes du ${city.dept}.`,
    url: "/zone-intervention",
    type: "website",
    locale: "fr_FR",
    images: ["/opengraph-image"],
  },
}

export default function ZonePage() {
  const c = getActiveCity()
  const communes = [c.city, ...c.local.towns]

  return (
    <>
    <article className="py-12">
      <Container prose>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Zone d&apos;intervention — {c.city} et agglomération
      </h1>

      <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>
          Nos élagueurs-grimpeurs interviennent {c.inCity} et dans toute
          l&apos;agglomération, sur le {c.dept}. Que vous habitiez en centre-ville,
          en périphérie ou dans une commune voisine, nous nous déplaçons pour
          évaluer vos arbres et vous remettre un devis gratuit.
        </p>
        <p>
          Vous ne voyez pas votre commune dans la liste ci-dessous ? Appelez-nous :
          si vous êtes dans le secteur, nous intervenons probablement chez vous.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-semibold tracking-tight">
        Communes desservies
      </h2>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {communes.map((t) => (
          <li
            key={t}
            className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm"
          >
            <MapPin className="size-4 shrink-0 text-emerald-700" />
            {t}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-xl font-semibold tracking-tight">
        Quartiers de {c.city}
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {c.local.neighborhoods.map((n) => (
          <span key={n} className="rounded-lg bg-muted px-3 py-1.5 text-sm">
            {n}
          </span>
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-emerald-50 p-6 text-center">
        <p className="font-medium">
          Votre commune est dans la liste ? Demandez votre devis gratuit.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <CallButton
            phoneDisplay={c.phoneDisplay}
            phoneHref={c.phoneHref}
            label={`Appeler — ${c.phoneDisplay}`}
          />
          <Link
            href="#estimateur"
            className="inline-flex h-12 items-center rounded-lg border bg-background px-6 text-base font-medium hover:bg-muted"
          >
            Estimer mon devis
          </Link>
        </div>
      </div>
      </Container>
    </article>

      {/* ESTIMATEUR — lead magnet */}
      <EstimatorSection />
    </>
  )
}
