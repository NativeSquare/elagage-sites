import Link from "next/link"
import type { ComponentType } from "react"
import {
  TreeDeciduous,
  Axe,
  Shovel,
  Scissors,
  Sprout,
  Truck,
  ArrowRight,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { getActiveCity } from "@/lib/cities"

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  "tree-deciduous": TreeDeciduous,
  axe: Axe,
  shovel: Shovel,
  scissors: Scissors,
  sprout: Sprout,
  truck: Truck,
}

export function ServicesGrid() {
  const city = getActiveCity()
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {city.services.map((s) => {
        const Icon = ICONS[s.icon] ?? TreeDeciduous
        return (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            <Card className="relative h-full justify-between ring-emerald-900/10 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:ring-emerald-600/40">
              {/* Filet de couleur en tête de carte */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-emerald-600 transition-transform duration-200 group-hover:scale-x-100" />
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 ring-1 ring-emerald-600/10 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="mt-3 text-lg">{s.name}</CardTitle>
                <CardDescription className="leading-relaxed">{s.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                En savoir plus
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
