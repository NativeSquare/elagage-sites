import type { Metadata } from "next"
import { getActiveCity } from "@/lib/cities"
import { Container } from "@/components/site/container"

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
}

// TODO : compléter avec la raison sociale, le SIRET et l'adresse réels
// (dépend de la structure / de l'artisan partenaire) avant mise en ligne.
export default function MentionsLegalesPage() {
  const city = getActiveCity()
  return (
    <article className="py-12">
      <Container prose className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Mentions légales</h1>

        <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">Éditeur du site</h2>
          <p>
            {city.brand} — [Raison sociale à compléter], [SIRET à compléter].
            Contact : {city.phoneDisplay}. Zone d&apos;activité : {city.city} et
            agglomération ({city.dept}).
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">Hébergement</h2>
          <p>
            Site hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
            91723, États-Unis. Nom de domaine géré via Hostinger.
          </p>
        </section>

        <section className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <h2 className="text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site est protégé. Toute
            reproduction sans autorisation est interdite.
          </p>
        </section>
      </Container>
    </article>
  )
}
