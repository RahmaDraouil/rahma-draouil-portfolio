# Portfolio de Rahma Draouil

Portfolio professionnel moderne et responsive développé avec React, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - JavaScript typé pour un code plus robuste
- **Vite** - Build tool rapide et moderne
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides et modernes
- **Lucide React** - Icônes élégantes et légères

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez le repository ou extrayez les fichiers
2. Naviguez vers le dossier du projet :
   ```bash
   cd portfolio-rahma
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## 🚀 Commandes disponibles

### Développement
Lance le serveur de développement avec hot reload :
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build
Compile le projet pour la production :
```bash
npm run build
```
Les fichiers de production seront dans le dossier `dist/`

### Preview
Prévisualise le build de production localement :
```bash
npm run preview
```

## 📁 Structure du projet

```
portfolio-rahma/
├── public/
│   ├── images/
│   │   ├── hero-background.svg
│   │   ├── about-illustration.svg
│   │   ├── profile-placeholder.svg
│   │   ├── project-placeholder.svg
│   │   ├── projects/
│   │   │   ├── ecg-analysis.svg
│   │   │   ├── microservices-elearning.svg
│   │   │   ├── job-search-mobile.svg
│   │   │   └── makeria-ecommerce.svg
│   │   └── certifications/
│   │       ├── aws-cloud.svg
│   │       ├── hedera-developer.svg
│   │       └── hedera-foundations.svg
│   ├── documents/
│   │   └── CV_Rahma_Draouil.pdf (à ajouter)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Mode sombre / Mode clair
- ✅ Animations fluides
- ✅ Navigation fixe avec détection de section active
- ✅ Menu hamburger accessible sur mobile
- ✅ Visuels SVG originaux générés localement
- ✅ Optimisé pour l'accessibilité (WCAG)
- ✅ Support de prefers-reduced-motion
- ✅ SEO optimisé

## 📝 Personnalisation

### Ajouter la photo professionnelle
Placez votre photo dans :
```
public/images/photo-rahma.png
```

### Ajouter le CV
Placez votre CV dans :
```
public/documents/CV_Rahma_Draouil.pdf
```

### Modifier les couleurs
Éditez le fichier `tailwind.config.js` :
```js
colors: {
  primary: '#1593D0',
  'primary-dark': '#17324D',
  accent: '#1B8A88',
  // ...
}
```

## 🌐 Déploiement

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Glissez-déposez le dossier dist/ sur netlify.com
```

### GitHub Pages
1. Modifiez `vite.config.ts` :
```ts
base: '/nom-du-repo/'
```
2. Build et déploiement :
```bash
npm run build
```
3. Déployez le contenu du dossier `dist/`

## 📱 Sections du portfolio

1. **Accueil** - Présentation et CTA
2. **À propos** - Profil et domaines d'expertise
3. **Expériences** - Parcours professionnel
4. **Projets** - Projets académiques et techniques
5. **Compétences** - Compétences techniques et langues
6. **Formation** - Parcours académique
7. **Certifications** - Badges et certifications
8. **Contact** - Informations de contact

## 🔧 Support navigateurs

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## 📄 Licence

Ce projet est un portfolio personnel. Tous droits réservés.

## 👤 Contact

**Rahma Draouil**
- Email: rahmadraouil2020@gmail.com
- LinkedIn: [linkedin.com/in/rahmadraouil](https://linkedin.com/in/rahmadraouil)
- GitHub: [github.com/RahmaDraouil](https://github.com/RahmaDraouil)
