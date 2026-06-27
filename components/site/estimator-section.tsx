import { Calculator } from "lucide-react"
import { getActiveCity } from "@/lib/cities"
import { Estimator } from "@/components/site/estimator"
import { Container } from "@/components/site/container"

// Section "lead magnet" : l'estimateur de prix dans un bandeau sombre qui
// ressort, réutilisable sur toutes les pages (accueil, services, zone…).
// La carte blanche de l'estimateur pop sur le fond emerald-900 → vrai aimant.
export function EstimatorSection({
  title,
  subtitle,
}: {
  title?: string
  subtitle?: string
}) {
  const c = getActiveCity()
  return (
    <section
      id="estimateur"
      className="relative isolate scroll-mt-20 overflow-hidden bg-emerald-900 py-16 text-white sm:py-20"
    >
      {/* Texture organique subtile, sans image (perf) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.1] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-emerald-300/30" />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-sm font-medium text-emerald-50">
            <Calculator className="size-4" />
            Estimateur gratuit
          </p>
          <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {title ?? "Estimez votre devis en ligne en 30 secondes"}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-emerald-50/85">
            {subtitle ??
              "Une fourchette de prix indicative tout de suite. On vous confirme ensuite le devis exact — gratuit et sans engagement."}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <Estimator
            phoneDisplay={c.phoneDisplay}
            phoneHref={c.phoneHref}
            brand={c.brand}
          />
        </div>
      </Container>
    </section>
  )
}
