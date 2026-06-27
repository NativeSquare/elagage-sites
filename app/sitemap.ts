import type { MetadataRoute } from "next"
import { getActiveCity, getServiceSlugs } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const city = getActiveCity()
  const base = `https://${city.domain}`
  const paths = [
    "",
    "/zone-intervention",
    "/contact",
    ...getServiceSlugs().map((s) => `/${s}`),
  ]
  const now = new Date()
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }))
}
