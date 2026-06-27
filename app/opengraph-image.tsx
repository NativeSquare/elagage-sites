import { ImageResponse } from "next/og"
import { getActiveCity } from "@/lib/cities"

// Image Open Graph générée (1200×630), dynamique par ville.
// Sert d'aperçu au partage social (LinkedIn, WhatsApp, X…). Pas besoin de photo :
// une carte texte de marque suffit et reste cohérente avec le choix "site sans images".
const city = getActiveCity()

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = `${city.brand} — Élagage & abattage ${city.inCity}`

export default function OpengraphImage() {
  const c = getActiveCity()
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #047857 0%, #064e3b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, opacity: 0.85 }}>
          {c.dept} · Élagueurs-grimpeurs
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          Élagage &amp; abattage {c.inCity}
        </div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 30 }}>
          Devis gratuit · {c.phoneDisplay}
        </div>
      </div>
    ),
    { ...size }
  )
}
