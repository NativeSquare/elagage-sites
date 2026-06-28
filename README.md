# elagage-sites — machine rank & rent (élagage local)

Un seul repo → N sites « métier + ville ». Chaque ville est une `CityConfig`
(`lib/cities/<ville>.ts`) ; la variable d'env **`NEXT_PUBLIC_CITY`** sélectionne
la ville active. Un **projet Vercel par ville/domaine**, branché sur ce repo,
chacun avec son `NEXT_PUBLIC_CITY`.

## Stack
Next.js (App Router) · Tailwind v4 · shadcn (base-ui) · Resend (leads par email).

## Lancer en local
```bash
npm install
npm run dev            # http://localhost:3000  (ville par défaut : pau)
```

## Variables d'environnement
| Var | Rôle |
|-----|------|
| `NEXT_PUBLIC_CITY` | ville active (ex. `pau`) |
| `RESEND_API_KEY` | clé Resend (envoi des leads) |
| `LEAD_TO_EMAIL` | boîte qui reçoit les leads |
| `LEAD_FROM_EMAIL` | expéditeur (domaine vérifié Resend) |

`.env.local` est gitignoré — ne jamais committer les clés.

## Ajouter une ville (clone)
1. Créer `lib/cities/<ville>.ts` (réécrire 55-65 % du contenu, champs locaux réels).
2. L'enregistrer dans `lib/cities/index.ts`.
3. `node scripts/check-similarity.mjs` → similarité < 35 %.
4. Créer le projet Vercel, brancher ce repo, poser `NEXT_PUBLIC_CITY=<ville>`.

## Sites en ligne
- Pau — https://elagage-pau.fr

## Déploiement
Auto-deploy : un `git push` sur `master` redéploie les projets Vercel connectés.
Les commits doivent utiliser un email rattaché au compte GitHub (sinon Vercel
bloque le build). Repo hébergé sous l'org GitHub **NativeSquare**.
