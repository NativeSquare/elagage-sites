import type { CityConfig, Service } from "@/lib/types"
import { pau } from "@/lib/cities/pau"

// Le registre des villes. Une entrée par site.
// Pour ajouter Nantes : créer lib/cities/nantes.ts, l'importer ici,
// et déployer avec NEXT_PUBLIC_CITY=nantes.
export const cities: Record<string, CityConfig> = {
  pau,
}

const DEFAULT_CITY = "pau"

/** La ville active, choisie par la variable d'env du déploiement. */
export function getActiveCity(): CityConfig {
  const slug = process.env.NEXT_PUBLIC_CITY ?? DEFAULT_CITY
  return cities[slug] ?? cities[DEFAULT_CITY]
}

export function getService(slug: string): Service | undefined {
  return getActiveCity().services.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return getActiveCity().services.map((s) => s.slug)
}
