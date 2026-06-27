import { Resend } from "resend"
import { getActiveCity } from "@/lib/cities"

// Route serveur qui reçoit un lead (formulaire de contact OU estimateur) et
// l'envoie par email via Resend. La clé API reste 100% côté serveur.
// Config via variables d'env (voir .env.local) :
//   RESEND_API_KEY   — clé Resend (secrète)
//   LEAD_TO_EMAIL    — boîte qui reçoit les leads
//   LEAD_FROM_EMAIL  — expéditeur (par défaut : envoi de test Resend)
export async function POST(req: Request) {
  let data: Record<string, string>
  try {
    data = await req.json()
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  const nom = (data.nom || "").trim()
  const email = (data.email || "").trim()
  const telephone = (data.telephone || "").trim()
  const commune = (data.commune || "").trim()
  const message = (data.message || "").trim()
  const source = (data.source || "Formulaire").trim()

  // Nom + au moins un moyen de recontact.
  if (!nom || (!email && !telephone)) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  const key = process.env.RESEND_API_KEY
  const to = process.env.LEAD_TO_EMAIL
  const from = process.env.LEAD_FROM_EMAIL || "Élagage Pau <onboarding@resend.dev>"
  if (!key || !to) {
    // Pas encore configuré (clé/destinataire manquants).
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 })
  }

  const city = getActiveCity()
  const subject = `Nouveau lead ${city.brand} — ${commune || city.city}`
  const body = [
    `Source : ${source}`,
    `Nom : ${nom}`,
    telephone && `Téléphone : ${telephone}`,
    email && `Email : ${email}`,
    commune && `Commune : ${commune}`,
    "",
    message || "(pas de message)",
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const resend = new Resend(key)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject,
      text: body,
    })
    if (error) {
      console.error("[lead] Resend error:", JSON.stringify(error))
      return Response.json({ ok: false, error: "send_failed" }, { status: 502 })
    }
    return Response.json({ ok: true })
  } catch (e) {
    console.error("[lead] exception:", e)
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 })
  }
}
