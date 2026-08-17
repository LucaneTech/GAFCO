# G.A.F.CO SARLU — site vitrine

Application vitrine bilingue (français / anglais) construite avec Next.js, TypeScript, Tailwind CSS v4 et Vinext.

## Démarrage

Prérequis : Node.js 22.13 ou plus récent.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Contrôles disponibles :

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Variables d’environnement

- `NEXT_PUBLIC_SITE_URL` : domaine final, avec protocole.
- `CONTACT_TO_EMAIL` : adresse de réception du formulaire.
- `EMAIL_API_KEY` : clé du futur fournisseur d’e-mail.

Le formulaire est validé côté client et côté serveur. Tant qu’aucun fournisseur d’e-mail n’est relié dans `lib/contact.ts`, l’interface indique explicitement que le message n’a pas été envoyé et propose le téléphone et l’e-mail comme alternatives.

## Structure principale

- `app/[locale]/` : pages localisées FR/EN.
- `components/` : composants partagés, navigation, sections et formulaire.
- `data/site.ts` : coordonnées, routes, services et chemins des images.
- `lib/i18n.ts` : dictionnaires français et anglais.
- `public/images/` : visuels WebP optimisés pour le projet.

## Informations à compléter avant mise en ligne finale

- adresse précise ;
- horaires ;
- e-mail définitif ;
- URLs des réseaux sociaux ;
- fournisseur d’e-mail ;
- témoignages réels ;
- références et projets validés ;
- zones d’intervention précises ;
- domaine final ;
- informations juridiques complémentaires.
