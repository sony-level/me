<a name="readme-top"></a>

# Un portfolio moderne UI/UX utilisant Next.JS

![Un portfolio moderne UI/UX utilisant Next.JS](/.github/images/img_main.png "Un portfolio moderne UI/UX utilisant Next.JS")

[![Demandez-moi n'importe quoi!](https://img.shields.io/badge/Demandez%20moi-n'importe%20quoi-1abc9c.svg)](https://github.com/sony-level "Demandez-moi n'importe quoi!")
[![Licence GitHub](https://img.shields.io/github/license/sony-level/me)](https://github.com/sony-level/me/blob/main/LICENSE "Licence GitHub")
[![Maintenance](https://img.shields.io/badge/Maintenu%3F-oui-green.svg)](https://github.com/sony-level/me/commits/main "Maintenance")
[![Branches GitHub](https://badgen.net/github/branches/sony-level/me)](https://github.com/sony-level/me/branches "Branches GitHub")
[![Commits Github](https://badgen.net/github/commits/sony-level/me/main)](https://github.com/sony-level/me/commits "Commits Github")
[![Problèmes GitHub](https://img.shields.io/github/issues/sony-level/me)](https://github.com/sony-level/me/issues "Problèmes GitHub")
[![Demandes de tirage GitHub](https://img.shields.io/github/issues-pr/sony-level/me)](https://github.com/sony-level/me/pulls "Demandes de tirage GitHub")
[![Statut Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sanidhy.vercel.app/ "Statut Vercel")

<!-- Table des matières -->
<details>

<summary>

# :notebook_with_decorative_cover: Table des matières 

</summary>

- [Structure des dossiers](#bangbang-structure-des-dossiers)
- [Pour commencer](#toolbox-pour-commencer)
- [Captures d'écran](#camera-captures-d'écran)
- [Stack technologique](#gear-stack-technologique)
- [Statistiques](#wrench-statistiques)
- [Contribuer](#raised_hands-contribuer)
- [Remerciements](#gem-remerciements)
- [Achetez-moi un café](#coffee-achetez-moi-un-café)
- [Suivez-moi](#rocket-suivez-moi)
- [En savoir plus](#books-en-savoir-plus)
- [Déployer sur Vercel](#page_with_curl-déployer-sur-vercel)
- [Donnez une étoile](#star-donnez-une-étoile)
- [Historique des étoiles](#star2-historique-des-étoiles)
- [Donnez une étoile](#star-donnez-une-étoile)

</details>

## :bangbang: Structure des dossiers

Voici la structure des dossiers de Mon Portfolio.

```bash
me/
  |- public/
  |- app/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- page.tsx
  |- components/
    |-- about.tsx
    |-- contact.tsx
    |-- experience.tsx
    |-- footer.tsx
    |-- header.tsx
    |-- index.ts
    |-- intro.ts
    |-- projects.ts
    |-- section-divider.ts
    |-- section-heading.ts
    |-- skills.ts
    |-- theme-switch.ts
  |- constants/
    |-- index.ts
  |- context/
    |-- active-section-context.tsx
    |-- theme-context.tsx
  |- lib/
    |-- hooks.ts
    |-- types.ts
  |- public/
    |-- icons/
  |- .env.example
  |- .env.local
  |- .eslintrc.json
  |- .gitignore
  |- environment.d.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.cjs
  |- tailwind.config.cjs
  |- tsconfig.json
```

<br />

## :toolbox: Pour commencer

1. Assurez-vous que **Git** et **NodeJS** sont installés.
2. Clonez ce dépôt sur votre ordinateur local.
3. Créez un fichier `.env.local` dans le dossier racine.
4. Contenu de `.env.local`:

```
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# email.js id and key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX

# google verification key (optional) - used for domain verification on https://search.google.com/search-console
NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

5. Créez un nouveau compte sur [EmailJS](https://www.emailjs.com/ "EmailJS").
6. Depuis le tableau de bord, choisissez Services de messagerie > Ajouter un nouveau service et connectez votre messagerie à emailjs.
7. Une fois le nouveau service configuré, copiez votre **ID de service** dans `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.
8. Maintenant, allez dans Modèles de messagerie > Créer un nouveau modèle pour créer votre modèle de messagerie. Une fois terminé, vous pouvez copier **l'ID du modèle** dans `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.
9. Pour obtenir votre **clé publique**, cliquez sur votre nom d'utilisateur dans la barre de navigation, puis accédez aux paramètres du compte > Copiez la clé publique dans `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. 
10. Ouvrez le terminal dans le répertoire racine. Exécutez `npm install --legacy-peer-deps` ou `yarn install --legacy-peer-deps`.

![Copy Public Key](/.github/images/step_emailjs.png "Copy Public Key")

11. Maintenant, l'application est entièrement configurée :+1: et vous pouvez commencer à l'utiliser en utilisant `npm run dev` ou `yarn dev`.

**REMARQUE:** Assurez-vous de ne pas partager ces clés publiquement.

## :camera: Captures d'écran:

![Un portfolio moderne UI/UX utilisant Tailwind CSS](/.github/images/img1.png "Un portfolio moderne UI/UX utilisant Tailwind CSS")

![Présentation des projets](/.github/images/img2.png "Présentation des projets")

![Parlez de vos expériences](/.github/images/img3.png "Parlez de vos expériences")

![Formulaire de contact fonctionnel](/.github/images/img4.png "Formulaire de contact fonctionnel")

## :gear: Stack technologique

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :wrench: Statistiques

[![Statistiques pour cette application](/.github/images/stats.svg "Statistiques pour cette application")](https://pagespeed-insights-svg.glitch.me/?url=https://www.level-sony.fr/ "Statistiques pour cette application")

## :raised_hands: Contribuer

Vous pourriez rencontrer quelques bugs lors de l'utilisation de cette application. Vous êtes plus que bienvenu pour contribuer. Il suffit de soumettre des modifications via une demande de pull et je les examinerai avant de les fusionner. Assurez-vous de suivre les directives de la communauté.

## :gem: Remerciements

Ressources et bibliothèques utiles utilisées dans Mon Portfolio

- [Email JS](https://www.emailjs.com/ "Email JS")
- [Framer Motion](https://www.framer.com/motion/ "Framer Motion")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [React Icons](https://react-icons.github.io/react-icons/ "React Icons")
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component "React Vertical Timeline Component")
- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast "React Hot Toast")
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer "React Intersection Observer")
- [Next PWA](https://www.npmjs.com/package/next-pwa "Next PWA")

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/level "Buy me a Coffee")

## :rocket: Suivez-moi

[![Abonnés GitHub](https://img.shields.io/github/followers/sony-level?style=social&label=Suivre&maxAge=2592000)](https://github.com/sony-level "Suivez-moi")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsony-level%2Fme "Tweeter")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCAnWzCumjcoF2RXTPAGqrQg "Abonnez-vous à ma chaîne")

## :books: En savoir plus

Pour en savoir plus sur Next.js, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) - apprenez les fonctionnalités et l'API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - un tutoriel interactif sur Next.js.

Vous pouvez consulter [le dépôt GitHub de Next.js](https://github.com/vercel/next.js/) - vos commentaires et contributions sont les bienvenus !

## :page_with_curl: Déployer sur Vercel

La manière la plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) des créateurs de Next.js.

Consultez notre [documentation de déploiement Next.js](https://nextjs.org/docs/deployment) pour plus de détails.

## :star: Donnez une étoile

Vous pouvez également donner une étoile à ce dépôt pour le montrer à plus de personnes et qu'elles puissent l'utiliser.

## :star2: Historique des étoiles

<a href="https://star-history.com/#sony-level/me&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sony-level/me&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sony-level/me&type=Timeline" />
    <img alt="Graphique de l'historique des étoiles" src="https://api.star-history.com/svg?repos=sony-level/me&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top">retour en haut</a>)</p>
