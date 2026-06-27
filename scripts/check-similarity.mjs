// Garde-fou anti-duplication (le "non-négociable" avant de cloner une ville).
// Compare le texte de deux configs de ville et calcule un taux de similarité.
// Au-dessus du seuil → il faut RÉÉCRIRE davantage avant de mettre la ville en ligne.
//
// Usage :
//   node scripts/check-similarity.mjs lib/cities/pau.ts lib/cities/nantes.ts
//
// Cible : < 35 % de trigrammes de mots communs (hors mots ultra-fréquents).
import { readFileSync } from "node:fs"

function extractProse(file) {
  const src = readFileSync(file, "utf8")
  const matches = src.match(/"((?:[^"\\]|\\.)*)"/g) || []
  return matches
    .map((s) => s.slice(1, -1).replace(/\\"/g, '"'))
    .filter((s) => s.length > 20 && /\s/.test(s)) // garder les phrases, pas les clés
    .join(" ")
    .toLowerCase()
}

function shingles(text, n = 3) {
  const words = text
    .replace(/[^\p{L}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
  const set = new Set()
  for (let i = 0; i + n <= words.length; i++) {
    set.add(words.slice(i, i + n).join(" "))
  }
  return set
}

function jaccard(a, b) {
  let inter = 0
  for (const x of a) if (b.has(x)) inter++
  const union = new Set([...a, ...b]).size
  return union ? inter / union : 0
}

const [, , f1, f2] = process.argv
if (!f1 || !f2) {
  console.error("usage: node scripts/check-similarity.mjs <villeA.ts> <villeB.ts>")
  process.exit(1)
}

const s1 = shingles(extractProse(f1))
const s2 = shingles(extractProse(f2))
const sim = jaccard(s1, s2)
const pct = (sim * 100).toFixed(1)

console.log(`\nComparaison : ${f1}  vs  ${f2}`)
console.log(`Trigrammes uniques : ${s1.size} / ${s2.size}`)
console.log(`Similarité : ${pct}%`)
console.log(
  sim < 0.35
    ? "✅ OK — contenu suffisamment différent (< 35 %). Bon pour la mise en ligne."
    : "⚠️  TROP SIMILAIRE — réécris davantage (intros services, trust, FAQ) avant de publier. Cible < 35 %."
)
