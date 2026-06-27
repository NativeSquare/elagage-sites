import Image from "next/image"
import Link from "next/link"
import { Check, ShieldCheck, MapPin, Leaf } from "lucide-react"
import { getActiveCity } from "@/lib/cities"
import { CallButton } from "@/components/site/call-button"
import { ServicesGrid } from "@/components/site/services-grid"
import { FaqSection } from "@/components/site/faq-section"
import { Container } from "@/components/site/container"
import { EstimatorSection } from "@/components/site/estimator-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  const city = getActiveCity()

  return (
    <>
      {/* HÉRO — photo plein écran en fond + texte par-dessus */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/hero.jpg"
          alt={`Élagueur-grimpeur en intervention sur un arbre ${city.inCity}`}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Voile dégradé : sombre à gauche (texte lisible), clair à droite (on voit le grimpeur) */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950/92 via-emerald-950/72 to-emerald-950/25" />
        {/* Renfort bas pour ancrer les puces sur fond sombre */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-emerald-950/70 to-transparent" />

        <Container className="py-24 text-white sm:py-32">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="gap-1.5 border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-emerald-50 backdrop-blur"
            >
              <Leaf className="size-3" />
              Élagueurs-grimpeurs · {city.dept}
            </Badge>
            <h1 className="mt-5 font-heading text-4xl leading-[1.08] font-bold tracking-tight text-balance drop-shadow-sm sm:text-5xl lg:text-[3.4rem]">
              {city.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-emerald-50/90">
              {city.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CallButton
                phoneDisplay={city.phoneDisplay}
                phoneHref={city.phoneHref}
                label={`Appeler — ${city.phoneDisplay}`}
              />
              <Link
                href="#estimateur"
                className="inline-flex h-12 items-center rounded-lg border border-white/30 bg-white/10 px-6 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Estimer mon devis
              </Link>
            </div>
            <ul className="mt-10 grid gap-x-6 gap-y-3 border-t border-white/15 pt-7 sm:grid-cols-2">
              {city.hero.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-emerald-50">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-300/40">
                    <Check className="size-3 text-emerald-200" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="border-b border-emerald-900/5 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-700 uppercase">
              <span className="h-px w-7 bg-emerald-600/50" />
              Nos prestations
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Nos services d&apos;élagage {city.inCity}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              De la taille d&apos;entretien à l&apos;abattage technique, nous prenons
              soin de tous vos arbres {city.inCity} et dans le {city.dept}.
            </p>
          </div>
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      {/* CONFIANCE */}
      <section className="border-b border-emerald-900/5 bg-emerald-50/40 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-700 uppercase">
              <span className="h-px w-7 bg-emerald-600/50" />
              La confiance d&apos;un artisan
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Pourquoi nous confier vos arbres
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {city.trust.map((t) => (
              <Card
                key={t.title}
                className="border-l-4 border-l-emerald-600 bg-card/80 ring-emerald-900/10 transition-shadow hover:shadow-md"
              >
                <CardHeader className="gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="size-5" />
                  </div>
                  <CardTitle className="mt-1 text-lg">{t.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {t.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ESTIMATEUR — lead magnet */}
      <EstimatorSection
        subtitle={`Élagage, abattage, taille de haie… Obtenez une fourchette de prix tout de suite pour vos arbres ${city.inCity}. On vous confirme ensuite le devis exact — gratuit et sans engagement.`}
      />

      {/* CONTEXTE LOCAL — contenu unique */}
      <section className="py-16 sm:py-20">
        <Container prose>
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-700 uppercase">
              <MapPin className="size-4" />
              Ancrés en {city.region}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              L&apos;élagage {city.inCity}, en {city.region}
            </h2>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-5 text-sm leading-relaxed">
            <p className="font-medium text-emerald-950">{city.local.geography}</p>
            <p className="mt-2 text-emerald-900">{city.local.climateRisk}</p>
          </div>

          <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {city.local.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 border-l-3 border-emerald-600 pl-3 font-heading text-lg font-semibold text-foreground">
            Les arbres de la région
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.local.species.map((sp) => (
              <Badge key={sp} variant="outline" className="border-emerald-200 bg-white px-2.5 py-1 text-emerald-900">
                {sp}
              </Badge>
            ))}
          </div>

          <h3 className="mt-12 border-l-3 border-emerald-600 pl-3 font-heading text-lg font-semibold text-foreground">
            Repères arborés {city.inCity}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {city.local.landmarks.map((l) => (
              <Badge key={l} variant="secondary" className="bg-emerald-100 px-2.5 py-1 text-emerald-900">
                {l}
              </Badge>
            ))}
          </div>

          <h3 className="mt-12 border-l-3 border-emerald-600 pl-3 font-heading text-lg font-semibold text-foreground">
            Ce que dit la loi
          </h3>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {city.local.regulations.national.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-8 border-l-3 border-emerald-600 pl-3 font-heading text-lg font-semibold text-foreground">
            Les règles {city.inCity}
          </h3>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {city.local.regulations.local.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 border-l-3 border-emerald-600 pl-3 font-heading text-lg font-semibold text-foreground">
            Quand intervenir
          </h3>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {city.local.season.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="border-y border-emerald-900/5 bg-emerald-50/40 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wide text-emerald-700 uppercase">
              <span className="h-px w-7 bg-emerald-600/50" />
              Où nous intervenons
            </p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Notre zone d&apos;intervention
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Nous intervenons {city.inCity} et dans tout le {city.dept} :
            </p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {[city.city, ...city.local.towns].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-background px-3 py-1.5 text-sm font-medium text-emerald-950 shadow-xs"
              >
                <MapPin className="size-3.5 text-emerald-600" />
                {t}
              </span>
            ))}
          </div>
          <div className="mt-7 text-center">
            <Link
              href="/zone-intervention"
              className="inline-flex items-center gap-1 rounded text-sm font-semibold text-emerald-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              Voir toute la zone d&apos;intervention →
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FaqSection items={city.faq} />

      {/* CTA FINAL — le nœud LocalBusiness JSON-LD est rendu globalement (layout) */}
      <section className="relative isolate overflow-hidden bg-emerald-800 text-white">
        {/* Texture organique subtile, sans image (perf) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-emerald-300/30" />
        <Container className="py-20 text-center sm:py-24">
          <h2 className="mx-auto max-w-2xl font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Un arbre à élaguer ou à abattre {city.inCity} ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-emerald-50/90">
            Devis gratuit sous 24 h. Appelez-nous, on évalue vos arbres et on
            s&apos;occupe de tout.
          </p>
          <div className="mt-8 flex justify-center">
            <CallButton
              phoneDisplay={city.phoneDisplay}
              phoneHref={city.phoneHref}
              label={`Appeler — ${city.phoneDisplay}`}
              className="bg-white text-emerald-800 shadow-lg shadow-emerald-950/20 hover:bg-emerald-50"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
