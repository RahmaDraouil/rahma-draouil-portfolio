# 🚀 Démarrage rapide

Ce guide vous permet de lancer votre portfolio en quelques minutes.

## ⚡ Installation et lancement (3 commandes)

```bash
# 1. Accédez au dossier
cd portfolio-rahma

# 2. Installez les dépendances (une seule fois)
npm install

# 3. Lancez le serveur de développement
npm run dev
```

Le portfolio sera accessible sur : **http://localhost:5173**

## 📋 Checklist avant de commencer

### Obligatoire
- [ ] Node.js installé (version 16+)
- [ ] npm installé

### Recommandé pour un portfolio complet
- [ ] Photo professionnelle prête (format PNG/JPG)
- [ ] CV au format PDF prêt
- [ ] Liens LinkedIn et GitHub à jour

## 📁 Fichiers à ajouter (optionnel mais recommandé)

### 1. Votre photo professionnelle
```
Placez votre photo dans :
portfolio-rahma/public/images/photo-rahma.png

Caractéristiques :
- Format : PNG ou JPG
- Taille : Minimum 400x400px, idéal 800x800px
- Fond : Uniforme et professionnel
- Poids : < 500 KB
```

### 2. Votre CV
```
Placez votre CV dans :
portfolio-rahma/public/documents/CV_Rahma_Draouil.pdf

Caractéristiques :
- Format : PDF uniquement
- Nom : Respectez exactement "CV_Rahma_Draouil.pdf"
- Poids : < 2 MB
```

**Note** : Sans ces fichiers, le portfolio utilisera des placeholders automatiquement.

## 🎯 Commandes principales

### Développement
```bash
npm run dev
```
Lance le serveur local avec rechargement automatique.
Accès : http://localhost:5173

### Build de production
```bash
npm run build
```
Crée les fichiers optimisés dans le dossier `dist/`

### Prévisualiser le build
```bash
npm run preview
```
Teste le build de production localement

## ✨ Fonctionnalités déjà configurées

✅ Design moderne et professionnel  
✅ Responsive (mobile, tablette, desktop)  
✅ Mode sombre / Mode clair automatique  
✅ Animations fluides  
✅ Navigation intelligente  
✅ Visuels SVG créés localement  
✅ Optimisé pour l'accessibilité  
✅ Prêt pour le déploiement  

## 📱 Test responsive

Une fois le serveur lancé :

1. **Sur ordinateur** : Ouvrez http://localhost:5173
2. **Sur mobile** : 
   - Trouvez votre IP locale : `ipconfig` (Windows) ou `ifconfig` (Mac/Linux)
   - Accédez à : http://VOTRE-IP:5173

Ou utilisez les outils de développement Chrome (F12) → Mode appareil

## 🎨 Personnalisation rapide

### Modifier vos informations
Les fichiers principaux à éditer :
- `src/components/Hero.tsx` - Section d'accueil
- `src/components/Contact.tsx` - Informations de contact
- `src/components/Experience.tsx` - Expériences professionnelles
- `src/components/Projects.tsx` - Projets

Consultez `PERSONNALISATION.md` pour le guide complet.

### Changer les couleurs
Éditez `tailwind.config.js` :
```js
colors: {
  primary: '#1593D0',        // Votre couleur principale
  'primary-dark': '#17324D', // Variante foncée
  accent: '#1B8A88',         // Couleur d'accent
}
```

## 🚀 Déploiement en 5 minutes

### Option 1 : Vercel (Recommandé - Gratuit)
1. Créez un compte sur https://vercel.com
2. Connectez votre repository GitHub
3. Cliquez sur "Deploy"
4. C'est prêt ! 🎉

### Option 2 : Netlify (Gratuit)
1. Créez un compte sur https://netlify.com
2. Glissez-déposez le dossier `dist/` (après `npm run build`)
3. C'est en ligne ! 🎉

Consultez `DEPLOIEMENT.md` pour plus d'options.

## ❓ Problèmes courants

### "npm: command not found"
→ Installez Node.js depuis https://nodejs.org

### "Port 5173 already in use"
→ Un autre processus utilise le port. Fermez-le ou changez le port dans `vite.config.ts`

### Les images ne s'affichent pas
→ Vérifiez que les fichiers sont dans `public/images/`
→ Les chemins doivent commencer par `/images/`

### Erreurs de compilation
```bash
# Supprimez et réinstallez
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation complète

- `README.md` - Documentation générale
- `PERSONNALISATION.md` - Guide de personnalisation
- `DEPLOIEMENT.md` - Guide de déploiement complet

## 💡 Prochaines étapes

1. ✅ Lancez le portfolio : `npm run dev`
2. ✅ Explorez l'interface
3. ✅ Ajoutez votre photo et CV
4. ✅ Personnalisez le contenu
5. ✅ Testez sur mobile
6. ✅ Déployez en ligne
7. ✅ Partagez aux recruteurs !

## 🎓 Structure du portfolio

Le portfolio contient 9 sections :
1. **Accueil** - Présentation et appels à l'action
2. **À propos** - Profil et expertise
3. **Expériences** - Parcours professionnel (timeline)
4. **Projets** - Projets académiques et techniques
5. **Compétences** - Technologies et compétences
6. **Formation** - Parcours académique
7. **Certifications** - Badges et certifications
8. **Contact** - Coordonnées complètes
9. **Footer** - Liens sociaux

## ⚙️ Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styles utility-first
- **Framer Motion** - Animations
- **Lucide React** - Icônes modernes

## 🎯 Vous êtes prêt !

```bash
cd portfolio-rahma
npm install
npm run dev
```

Votre portfolio sera accessible sur **http://localhost:5173** 🚀

Pour toute question, consultez la documentation ou les fichiers de guide.

**Bon lancement !** 🎉
