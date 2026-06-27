// Le modèle de données qui pilote chaque site "élagage + ville".
// Un seul template, un objet CityConfig par ville. Le contenu est UNIQUE
// par ville (pas de copier-coller avec le nom échangé) — c'est la règle SEO n°1.

export type FAQItem = { q: string; a: string }

export type ServiceSection = {
  heading: string
  body: string[] // un paragraphe par entrée
}

export type Service = {
  slug: string // "elagage", "abattage"...
  name: string // "Élagage"
  navLabel: string // libellé court (nav, cartes)
  tagline: string // une ligne pour la carte service
  icon: string // nom d'icône lucide
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string[] // paragraphes d'ouverture
  sections: ServiceSection[]
  faq: FAQItem[]
}

export type TrustPoint = { title: string; body: string }

export type CityConfig = {
  slug: string // "pau"
  city: string // "Pau"
  inCity: string // "à Pau"
  dept: string // "Pyrénées-Atlantiques"
  deptCode: string // "64"
  region: string // "Nouvelle-Aquitaine"
  domain: string // "elagage-pau.fr"
  brand: string // "Élagage Pau"
  phoneDisplay: string // "05 59 00 00 00"
  phoneHref: string // "tel:+33559000000"
  email: string
  postalCode: string
  hours: string // texte libre des horaires
  geo: { lat: number; lng: number } // coordonnées de la ville (JSON-LD LocalBusiness)

  hero: {
    title: string
    subtitle: string
    points: string[] // 3-4 puces de réassurance
  }

  trust: TrustPoint[] // bloc "pourquoi nous faire confiance"

  // ⚠️ ANTI-DUPLICATION — À LIRE AVANT DE CLONER.
  // C'est CE bloc qui rend chaque site unique aux yeux de Google. Pour chaque
  // nouvelle ville, TOUT `local` doit être RÉÉCRIT (jamais copier-coller-renommer).
  // Cible : ≥ 55-65 % du texte du site réellement différent d'une ville à l'autre.
  // Règle : au moins un point de `trust[]` doit aussi citer un élément local,
  // et `geography` / `climateRisk` / `landmarks` / `regulations.local` sont
  // OBLIGATOIREMENT propres à la ville (sinon le clone devient une page satellite).
  local: {
    geography: string // 1 phrase : relief, cours d'eau, climat dominant — force l'ancrage local
    climateRisk: string // 1 phrase : la contrainte climatique n°1 pour les arbres (vent, gel, sécheresse…)
    intro: string[]
    neighborhoods: string[] // quartiers de la ville
    landmarks: string[] // repères arborés RÉELS (parcs, avenues plantées) propres à la ville
    towns: string[] // communes de la zone d'intervention
    species: string[] // essences d'arbres typiques de la région
    regulations: {
      national: string[] // cadre national (Code civil…) — paraphrasable, NE compte PAS comme unique
      local: string[] // règles propres à la ville (PLU, EBC, arrêtés) — OBLIGATOIREMENT spécifique
    }
    season: string[] // saisonnalité propre à la région
  }

  services: Service[]
  faq: FAQItem[] // FAQ de la page d'accueil
}
