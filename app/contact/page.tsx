import type { Metadata } from "next"
import { Phone, Clock, Calculator, Mail } from "lucide-react"
import { getActiveCity } from "@/lib/cities"
import { CallButton } from "@/components/site/call-button"
import { ContactForm } from "@/components/site/contact-form"
import { Estimator } from "@/components/site/estimator"
import { Container } from "@/components/site/container"

const city = getActiveCity()

export const metadata: Metadata = {
  title: "Contact & devis gratuit",
  description: `Contactez ${city.brand} pour un devis gratuit d'élagage, abattage ou entretien d'arbres ${city.inCity} et dans le ${city.dept}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact & devis gratuit — ${city.brand}`,
    description: `Devis gratuit d'élagage et d'abattage ${city.inCity} et dans le ${city.dept}.`,
    url: "/contact",
    type: "website",
    locale: "fr_FR",
    images: ["/opengraph-image"],
  },
}

export default function ContactPage() {
  const c = getActiveCity()
  const communePlaceholder = `${[c.city, ...c.local.towns].slice(0, 3).join(", ")}…`

  return (
    <article className="py-12">
      <Container prose>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact &amp; devis gratuit {c.inCity}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Un arbre à élaguer, à abattre, une haie à tailler ? Appelez-nous, ou
          estimez votre devis en ligne en 30 secondes — c&apos;est gratuit et sans
          engagement.
        </p>

        {/* Appel direct — le canal prioritaire */}
        <div className="mt-8 rounded-xl border border-emerald-900/10 bg-emerald-50 p-6">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-800">
            <Phone className="size-4" />
            Appel direct — le plus rapide
          </div>
          <div className="mt-3">
            <CallButton
              phoneDisplay={c.phoneDisplay}
              phoneHref={c.phoneHref}
              label={`Appeler — ${c.phoneDisplay}`}
            />
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4" />
            {c.hours}
          </p>
        </div>

        {/* Estimateur de prix */}
        <h2 className="mt-14 flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight">
          <Calculator className="size-5 text-emerald-700" />
          Estimez votre devis en ligne
        </h2>
        <p className="mt-2 text-muted-foreground">
          Une fourchette de prix indicative en 30 secondes. Notre équipe vous
          confirme ensuite le devis exact.
        </p>
        <div className="mt-6">
          <Estimator
            phoneDisplay={c.phoneDisplay}
            phoneHref={c.phoneHref}
            brand={c.brand}
          />
        </div>

        {/* Formulaire message */}
        <h2 className="mt-14 flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight">
          <Mail className="size-5 text-emerald-700" />
          Ou écrivez-nous un message
        </h2>
        <p className="mt-2 text-muted-foreground">
          Laissez vos coordonnées et quelques détails, on vous recontacte.
        </p>
        <div className="mt-6">
          <ContactForm communePlaceholder={communePlaceholder} />
        </div>
      </Container>
    </article>
  )
}
