# Guide de personnalisation

Ce guide vous aide à personnaliser facilement votre portfolio.

## 📸 Images et médias

### Photo professionnelle
**Fichier** : `public/images/photo-rahma.png`
- Format : PNG ou JPG
- Dimensions recommandées : 800x800px minimum
- Poids : < 500 KB
- Fond : Uniforme et professionnel

### CV téléchargeable
**Fichier** : `public/documents/CV_Rahma_Draouil.pdf`
- Format : PDF uniquement
- Nom du fichier : Respectez exactement le nom
- Poids : < 2 MB

### Favicon
**Fichier** : `public/favicon.svg`
- Déjà créé avec votre initiale "R"
- Modifiable dans un éditeur SVG

## 🎨 Couleurs

**Fichier** : `tailwind.config.js`

```js
colors: {
  primary: '#1593D0',        // Bleu principal
  'primary-dark': '#17324D', // Bleu foncé
  accent: '#1B8A88',         // Turquoise
  'text-main': '#202124',    // Texte principal
  'text-secondary': '#666A70', // Texte secondaire
  'bg-light': '#F7FAFC',     // Fond clair
}
```

Pour changer une couleur, modifiez sa valeur hexadécimale.

## ✏️ Contenu texte

### Section Hero
**Fichier** : `src/components/Hero.tsx`

- Nom
- Titre
- Accroche
- Présentation
- Badge stage

### Section À propos
**Fichier** : `src/components/About.tsx`

- Texte de présentation
- Coordonnées
- Domaines d'expertise

### Expériences
**Fichier** : `src/components/Experience.tsx`

Modifier le tableau `experiences` :
```ts
{
  title: 'Votre titre',
  company: 'Nom entreprise',
  location: 'Ville',
  year: '2026',
  description: 'Description...',
  achievements: ['Point 1', 'Point 2'],
  technologies: 'Tech1, Tech2',
}
```

### Projets
**Fichier** : `src/components/Projects.tsx`

Modifier le tableau `projects` :
```ts
{
  title: 'Nom du projet',
  description: 'Description...',
  image: '/images/projects/mon-projet.svg',
  technologies: ['Tech1', 'Tech2'],
  highlights: ['Point 1', 'Point 2'],
}
```

### Compétences
**Fichier** : `src/components/Skills.tsx`

- `technicalSkills` : Compétences techniques par catégorie
- `languages` : Langues parlées
- `softSkills` : Compétences professionnelles

### Formation
**Fichier** : `src/components/Education.tsx`

Modifier le tableau `education` :
```ts
{
  degree: 'Diplôme',
  school: 'École',
  specialization: 'Spécialité',
  period: '2023 - 2026',
  location: 'Ville',
}
```

### Certifications
**Fichier** : `src/components/Certifications.tsx`

Modifier le tableau `certifications` :
```ts
{
  title: 'Nom certification',
  issuer: 'Organisme',
  image: '/images/certifications/cert.svg',
  description: 'Description',
}
```

### Contact
**Fichier** : `src/components/Contact.tsx`

Modifier le tableau `contactInfo` avec vos informations.

## 🔗 Liens externes

### Liens sociaux
À modifier dans :
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Remplacez :
- `https://github.com/RahmaDraouil`
- `https://linkedin.com/in/rahmadraouil`

## 🖼️ Ajouter de nouveaux visuels

### Nouveau projet

1. **Créez le visuel SVG**
   Placez-le dans : `public/images/projects/mon-nouveau-projet.svg`

2. **Ajoutez le projet**
   Dans `src/components/Projects.tsx`, ajoutez une entrée dans le tableau

### Nouvelle certification

1. **Créez le visuel**
   Placez-le dans : `public/images/certifications/ma-cert.svg`

2. **Ajoutez la certification**
   Dans `src/components/Certifications.tsx`

## 🌐 Métadonnées SEO

**Fichier** : `index.html`

Modifiez :
```html
<title>Votre Nom - Portfolio</title>
<meta name="description" content="Votre description" />
<meta name="keywords" content="vos, mots, clés" />
<meta name="author" content="Votre Nom" />
```

## 📱 Navigation

**Fichier** : `src/components/Navigation.tsx`

Pour ajouter/retirer des sections, modifiez le tableau `navItems`.

## 🎭 Animations

### Désactiver les animations
Dans `src/index.css`, les animations respectent automatiquement `prefers-reduced-motion`.

### Modifier la vitesse
Dans les fichiers des composants, cherchez :
```ts
transition={{ duration: 0.6 }}
```
Changez `0.6` pour ajuster la vitesse.

## 🔤 Police de caractères

Par défaut, le portfolio utilise les polices système.

Pour ajouter une police personnalisée :

1. **Importez dans `src/index.css`** :
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

2. **Modifiez `tailwind.config.js`** :
```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

## 🌍 Langue

Le portfolio est en français. Pour le traduire :

1. Remplacez tout le contenu texte
2. Modifiez `index.html` : `<html lang="fr">` → `<html lang="en">`

## 📊 Analytics

### Google Analytics

Dans `index.html`, ajoutez avant `</head>` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Mode sombre

Le mode sombre est automatique et mémorisé.

Pour modifier les couleurs du mode sombre, cherchez `dark:` dans les composants :
```tsx
className="bg-white dark:bg-gray-900"
```

## 🔧 Configuration avancée

### Modifier le port de développement
**Fichier** : `vite.config.ts`
```ts
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000, // Changez le port ici
  },
})
```

### Optimiser les images
Pour de meilleures performances, optimisez vos images avant de les ajouter :
- PNG : utilisez TinyPNG
- JPG : qualité 85%
- SVG : optimisez avec SVGOMG

## ✅ Liste de vérification

Avant de déployer, vérifiez :
- [ ] Toutes les informations personnelles sont correctes
- [ ] Tous les liens fonctionnent
- [ ] La photo est ajoutée
- [ ] Le CV est disponible
- [ ] Les couleurs sont à votre goût
- [ ] Le contenu est sans fautes
- [ ] Test sur mobile
- [ ] Test du mode sombre

## 💡 Conseils

1. **Faites des commits réguliers** si vous utilisez Git
2. **Testez après chaque modification** avec `npm run dev`
3. **Gardez le design cohérent** avec la palette de couleurs
4. **Optimisez les performances** en limitant la taille des images
5. **Restez professionnel** dans le contenu et les visuels

Bonne personnalisation ! 🎨
