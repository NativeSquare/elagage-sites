"use client"

import { useState, type FormEvent } from "react"
import { Phone, MailCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

// Estimateur de prix — lead magnet. L'estimation n'est PAS affichée à l'écran :
// elle est envoyée UNIQUEMENT par email (c'est ce qui pousse le prospect à
// laisser son vrai email). À la soumission, /api/lead envoie 2 mails : un au
// prospect (son estimation) + un à l'entreprise (notif de lead).
const INTERVENTIONS: Record<string, { label: string; base: [number, number] }> = {
  elagage: { label: "Élagage / taille d'arbre", base: [150, 450] },
  abattage: { label: "Abattage", base: [300, 1100] },
  dessouchage: { label: "Dessouchage", base: [90, 350] },
  "taille-de-haie": { label: "Taille de haie", base: [120, 500] },
  debroussaillage: { label: "Débroussaillage", base: [200, 800] },
  evacuation: { label: "Évacuation de déchets verts", base: [60, 300] },
}
const SIZES: Record<string, { label: string; f: number }> = {
  petit: { label: "Petit (moins de 5 m)", f: 0.6 },
  moyen: { label: "Moyen (5 à 10 m)", f: 1 },
  grand: { label: "Grand (plus de 10 m)", f: 1.7 },
}
const QTYS: Record<string, { label: string; f: number }> = {
  un: { label: "1", f: 1 },
  quelques: { label: "2 à 3", f: 2.4 },
  beaucoup: { label: "4 et plus", f: 4 },
}
const ACCESS: Record<string, { label: string; f: number }> = {
  facile: { label: "Facile (dégagé)", f: 1 },
  difficile: { label: "Difficile (proche maison, encombré)", f: 1.4 },
}

const round10 = (n: number) => Math.round(n / 10) * 10
const selectCls =
  "h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"

export function Estimator({
  phoneDisplay,
  phoneHref,
  brand,
}: {
  phoneDisplay: string
  phoneHref: string
  brand: string
}) {
  const [submitting, setSubmitting] = useState(false)
  const [sentTo, setSentTo] = useState<string | null>(null)
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    if (!d.intervention) return setError("Choisissez un type d'intervention.")
    // L'email est obligatoire : c'est par là que part l'estimation.
    if (!d.email?.trim())
      return setError("Indiquez votre email — c'est là qu'on vous envoie votre estimation.")
    // Le téléphone est obligatoire : c'est par là que le devis se conclut.
    if (!d.telephone?.trim())
      return setError("Indiquez votre téléphone pour qu'on puisse vous rappeler.")
    if (!d.consent)
      return setError("Merci de cocher l'autorisation d'être recontacté.")
    setError("")

    const it = INTERVENTIONS[d.intervention]
    const sf = SIZES[d.taille]?.f ?? 1
    const qf = QTYS[d.quantite]?.f ?? 1
    const af = ACCESS[d.acces]?.f ?? 1
    const low = round10(it.base[0] * sf * qf * af)
    const high = round10(it.base[1] * sf * qf * af)

    const recap = `ESTIMATEUR — ${it.label} · taille ${SIZES[d.taille]?.label ?? "?"} · nombre ${QTYS[d.quantite]?.label ?? "?"} · accès ${ACCESS[d.acces]?.label ?? "?"}`

    setSubmitting(true)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: (d.nom || "").trim() || "Lead estimateur",
          email: d.email,
          telephone: d.telephone,
          message: recap,
          source: "Estimateur en ligne",
          estimateLow: low,
          estimateHigh: high,
          interventionLabel: it.label,
          tailleLabel: SIZES[d.taille]?.label ?? "",
          quantiteLabel: QTYS[d.quantite]?.label ?? "",
          accesLabel: ACCESS[d.acces]?.label ?? "",
        }),
      })
      if (!res.ok) throw new Error()
      setSentTo(d.email.trim())
    } catch {
      setError(
        "Une erreur est survenue, votre estimation n'a pas pu être envoyée. Réessayez, ou appelez-nous directement."
      )
    } finally {
      setSubmitting(false)
    }
  }

  // Écran de confirmation — pas de prix affiché, l'estimation est dans le mail.
  if (sentTo) {
    return (
      <div className="rounded-2xl border border-emerald-900/10 bg-card p-6 text-center text-foreground">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <MailCheck className="size-6" />
        </div>
        <p className="mt-4 font-heading text-lg font-bold text-emerald-900">
          Votre estimation a été envoyée à l&apos;adresse email indiquée
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Vérifiez votre boîte de réception (et vos spams).
        </p>
        <p className="mx-auto mt-4 max-w-md rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900">
          ⚠️ Ceci est une <strong>simple estimation</strong>, basée sur des fourchettes
          moyennes. <strong>Le devis définitif — gratuit et sans engagement — est établi
          après un échange téléphonique ou une visite</strong>, car le prix réel dépend de
          l&apos;état des arbres, de l&apos;accès et des contraintes du chantier.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          Pour aller plus vite vers un devis précis, appelez-nous&nbsp;:
        </p>
        <a
          href={phoneHref}
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg bg-emerald-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
        >
          <Phone className="size-4" />
          {phoneDisplay}
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-card p-6 text-foreground">
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="intervention">Type d&apos;intervention</Label>
          <select id="intervention" name="intervention" className={selectCls} defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            {Object.entries(INTERVENTIONS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="taille">Taille des arbres</Label>
          <select id="taille" name="taille" className={selectCls} defaultValue="moyen">
            {Object.entries(SIZES).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="quantite">Nombre</Label>
          <select id="quantite" name="quantite" className={selectCls} defaultValue="un">
            {Object.entries(QTYS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="acces">Accès au chantier</Label>
          <select id="acces" name="acces" className={selectCls} defaultValue="facile">
            {Object.entries(ACCESS).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="est-email">
            Email <span className="text-emerald-700">*</span>
          </Label>
          <Input
            id="est-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@email.fr"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="est-tel">
            Téléphone <span className="text-emerald-700">*</span>
          </Label>
          <Input
            id="est-tel"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 12 34 56 78"
          />
        </div>

        <label className="flex items-start gap-2.5 text-sm text-muted-foreground sm:col-span-2">
          <input
            type="checkbox"
            name="consent"
            value="oui"
            className="mt-0.5 size-4 shrink-0 accent-emerald-700"
          />
          <span>
            J&apos;autorise {brand} à me recontacter au sujet de ma demande. Vous
            pouvez demander la suppression de vos données à tout moment.
          </span>
        </label>

        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={submitting}
            className="h-11 bg-emerald-700 px-6 text-base text-white hover:bg-emerald-800"
          >
            {submitting ? "Envoi…" : "Recevoir mon estimation par email"}
          </Button>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Votre estimation vous est envoyée par email. Le devis définitif &mdash;
            gratuit et sans engagement &mdash; est donné après un appel ou une visite.
          </p>
        </div>
        {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
      </form>
    </div>
  )
}
