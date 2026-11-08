# Guide de déploiement

Ce guide vous explique comment déployer votre portfolio sur différentes plateformes.

## 📝 Avant de déployer

1. **Ajoutez votre photo professionnelle**
   - Placez votre photo dans : `public/images/photo-rahma.png`
   - Format recommandé : PNG ou JPG, minimum 400x400px

2. **Ajoutez votre CV**
   - Placez votre CV dans : `public/documents/CV_Rahma_Draouil.pdf`
   - Le bouton de téléchargement du CV pointera vers ce fichier

3. **Testez localement**
   ```bash
   npm run dev
   ```
   Vérifiez que tout fonctionne correctement

4. **Créez un build de production**
   ```bash
   npm run build
   ```
   Vérifiez qu'il n'y a pas d'erreurs

## 🚀 Déploiement sur Vercel (Recommandé)

### Méthode 1 : Via l'interface web
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement Vite
5. Cliquez sur "Deploy"

### Méthode 2 : Via la CLI
```bash
# Installez Vercel CLI
npm install -g vercel

# Connectez-vous
vercel login

# Déployez
vercel
```

**Configuration automatique** : Le fichier `vercel.json` est déjà configuré.

## 🌐 Déploiement sur Netlify

### Méthode 1 : Via l'interface web
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist/` après avoir fait `npm run build`

### Méthode 2 : Via Git
1. Connectez votre repository GitHub à Netlify
2. Configuration automatique avec `netlify.toml`
3. Build command : `npm run build`
4. Publish directory : `dist`

### Méthode 3 : Via la CLI
```bash
# Installez Netlify CLI
npm install -g netlify-cli

# Connectez-vous
netlify login

# Déployez
netlify deploy --prod
```

**Configuration automatique** : Le fichier `netlify.toml` est déjà configuré.

## 📦 Déploiement sur GitHub Pages

### Prérequis
- Repository GitHub public ou compte GitHub Pro
- Activez GitHub Pages dans les paramètres du repository

### Étapes

1. **Modifiez `vite.config.ts`**
   Remplacez `base: './'` par :
   ```ts
   base: '/nom-de-votre-repo/'
   ```
   (Par exemple : `base: '/portfolio-rahma/'`)

2. **Poussez votre code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```

3. **Déploiement automatique**
   Le fichier `.github/workflows/deploy.yml` est déjà configuré.
   À chaque push sur la branche `main`, le site sera automatiquement déployé.

4. **Activez GitHub Pages**
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : `gh-pages` / root
   - Cliquez sur Save

### Déploiement manuel
```bash
npm run build
# Poussez le contenu de dist/ sur la branche gh-pages
```

## 🔧 Dépannage

### Le site ne s'affiche pas correctement
- Vérifiez le `base` dans `vite.config.ts`
- Sur GitHub Pages, assurez-vous qu'il correspond au nom du repo
- Sur Vercel/Netlify, utilisez `base: './'`

### Les images ne s'affichent pas
- Vérifiez que les chemins d'images commencent par `/images/`
- Vérifiez que les fichiers sont bien dans `public/images/`

### Le CV ne se télécharge pas
- Vérifiez que le fichier existe dans `public/documents/CV_Rahma_Draouil.pdf`
- Le nom du fichier doit correspondre exactement

### Erreurs de build
```bash
# Supprimez node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstallez
npm install

# Rebuild
npm run build
```

## 📊 Performances

Après le déploiement, testez les performances :
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🔐 Domaine personnalisé

### Sur Vercel
1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine
3. Suivez les instructions DNS

### Sur Netlify
1. Allez dans Domain Settings
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS selon les instructions

### Sur GitHub Pages
1. Ajoutez un fichier `CNAME` dans `public/`
2. Contenu : `votredomaine.com`
3. Configurez vos DNS vers GitHub Pages

## ✅ Checklist finale

Avant de partager votre portfolio :
- [ ] Photo professionnelle ajoutée
- [ ] CV téléchargeable disponible
- [ ] Tous les liens fonctionnent (LinkedIn, GitHub)
- [ ] Responsive testé sur mobile/tablette/desktop
- [ ] Mode sombre fonctionnel
- [ ] Pas d'erreurs dans la console
- [ ] Temps de chargement rapide
- [ ] Testé sur différents navigateurs

## 🎉 Après le déploiement

1. Partagez le lien sur LinkedIn
2. Ajoutez le lien dans votre CV
3. Partagez sur GitHub
4. Envoyez aux recruteurs

**URL du portfolio** : Notez-la ici après déploiement
- Vercel : _______________________
- Netlify : _______________________
- GitHub Pages : _______________________

## 📞 Besoin d'aide ?

En cas de problème :
1. Consultez les logs de déploiement
2. Vérifiez la documentation de la plateforme
3. Testez localement avec `npm run preview`

Bon déploiement ! 🚀
