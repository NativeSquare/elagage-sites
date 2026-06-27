import type { MetadataRoute } from "next"
import { getActiveCity } from "@/lib/cities"

export default function robots(): MetadataRoute.Robots {
  const city = getActiveCity()
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${city.domain}/sitemap.xml`,
  }
}
