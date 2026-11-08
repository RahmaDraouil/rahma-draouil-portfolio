# 📁 Guide : Ajouter votre photo et votre CV

## 🎯 Vue d'ensemble

Vous devez ajouter 2 fichiers dans le portfolio :
1. ✅ Votre **photo professionnelle**
2. ✅ Votre **CV en PDF**

---

## 📸 ÉTAPE 1 : Ajouter votre photo

### Méthode A : Depuis l'image partagée dans le chat

1. **Cliquez droit** sur votre photo dans le chat
2. Sélectionnez **"Enregistrer l'image sous..."** ou **"Télécharger"**
3. **Nommez-la EXACTEMENT** : `photo-rahma.png`
4. **Enregistrez-la** sur votre Bureau ou Downloads

5. **Copiez la photo** dans le dossier :
   ```
   C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images\photo-rahma.png
   ```

### Méthode B : Si vous avez la photo ailleurs

1. **Localisez** votre photo sur votre ordinateur
2. **Renommez-la** en : `photo-rahma.png`
3. **Copiez-la** dans :
   ```
   C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images\
   ```

### Instructions détaillées (Windows)

```
📂 C:\Users\hp\Desktop\portflio\
   └─ 📂 portfolio-rahma\
       └─ 📂 public\
           └─ 📂 images\
               └─ 📄 photo-rahma.png  ← PLACEZ VOTRE PHOTO ICI
```

#### Option 1 : Via l'Explorateur Windows
1. Ouvrez l'**Explorateur de fichiers** (touche Windows + E)
2. Naviguez vers : `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images`
3. **Copiez** votre photo dans ce dossier
4. **Renommez-la** en `photo-rahma.png`

#### Option 2 : Glisser-déposer
1. Ouvrez **deux fenêtres de l'Explorateur** :
   - Fenêtre 1 : Votre photo (Bureau ou Downloads)
   - Fenêtre 2 : `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images`
2. **Glissez** la photo de la Fenêtre 1 vers la Fenêtre 2
3. **Renommez** en `photo-rahma.png`

### ✅ Vérification photo

Une fois la photo ajoutée, vérifiez :

```bash
# Ouvrez PowerShell dans le dossier portfolio-rahma
# Puis tapez :
Test-Path "public\images\photo-rahma.png"
```

Résultat attendu : **True** ✅

Si **False** ❌, la photo n'est pas au bon endroit.

---

## 📄 ÉTAPE 2 : Ajouter votre CV

### Où placer le CV

```
📂 C:\Users\hp\Desktop\portflio\
   └─ 📂 portfolio-rahma\
       └─ 📂 public\
           └─ 📂 documents\
               └─ 📄 CV_Rahma_Draouil.pdf  ← PLACEZ VOTRE CV ICI
```

### Instructions détaillées

1. **Localisez** votre CV sur votre ordinateur
2. **Renommez-le EXACTEMENT** : `CV_Rahma_Draouil.pdf`
   - ⚠️ Respectez les majuscules et les underscores
3. **Copiez-le** dans :
   ```
   C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents\
   ```

### Via l'Explorateur Windows

1. Ouvrez l'**Explorateur de fichiers** (Windows + E)
2. Naviguez vers : `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents`
3. **Copiez** votre CV dans ce dossier
4. **Renommez-le** en `CV_Rahma_Draouil.pdf`

### ✅ Vérification CV

```bash
# Dans PowerShell :
Test-Path "public\documents\CV_Rahma_Draouil.pdf"
```

Résultat attendu : **True** ✅

---

## 🚀 ÉTAPE 3 : Tester le portfolio

Une fois les 2 fichiers ajoutés :

### 1. Ouvrez PowerShell ou Terminal

```bash
# Naviguez vers le dossier
cd C:\Users\hp\Desktop\portflio\portfolio-rahma

# Lancez le serveur
npm run dev
```

### 2. Ouvrez votre navigateur

Allez sur : **http://localhost:5173**

### 3. Vérifications visuelles

✅ **Photo** : Doit apparaître dans la section Hero (en haut)
✅ **CV** : Le bouton "Télécharger mon CV" doit fonctionner

---

## 🔍 Vérification rapide (PowerShell)

Copiez-collez ces commandes dans PowerShell :

```powershell
cd C:\Users\hp\Desktop\portflio\portfolio-rahma

Write-Host "`n=== VERIFICATION DES FICHIERS ===" -ForegroundColor Cyan

# Vérifier la photo
$photo = Test-Path "public\images\photo-rahma.png"
if ($photo) {
    Write-Host "✅ Photo trouvée !" -ForegroundColor Green
    $photoSize = (Get-Item "public\images\photo-rahma.png").Length / 1KB
    Write-Host "   Taille: $([math]::Round($photoSize, 2)) KB"
} else {
    Write-Host "❌ Photo MANQUANTE" -ForegroundColor Red
    Write-Host "   Placez photo-rahma.png dans: public\images\" -ForegroundColor Yellow
}

# Vérifier le CV
$cv = Test-Path "public\documents\CV_Rahma_Draouil.pdf"
if ($cv) {
    Write-Host "✅ CV trouvé !" -ForegroundColor Green
    $cvSize = (Get-Item "public\documents\CV_Rahma_Draouil.pdf").Length / 1KB
    Write-Host "   Taille: $([math]::Round($cvSize, 2)) KB"
} else {
    Write-Host "❌ CV MANQUANT" -ForegroundColor Red
    Write-Host "   Placez CV_Rahma_Draouil.pdf dans: public\documents\" -ForegroundColor Yellow
}

Write-Host "`n=== FIN VERIFICATION ===" -ForegroundColor Cyan
```

---

## ⚠️ Erreurs courantes

### La photo ne s'affiche pas

**Causes possibles :**
1. ❌ Nom incorrect : Doit être `photo-rahma.png` (tout en minuscules)
2. ❌ Mauvais dossier : Doit être dans `public/images/`
3. ❌ Format non supporté : Utilisez PNG, JPG ou WEBP

**Solution :**
```powershell
# Vérifiez le nom exact
Get-ChildItem "public\images\" | Where-Object {$_.Name -like "*photo*"}
```

### Le CV ne se télécharge pas

**Causes possibles :**
1. ❌ Nom incorrect : Doit être `CV_Rahma_Draouil.pdf` (respectez les majuscules)
2. ❌ Mauvais dossier : Doit être dans `public/documents/`
3. ❌ Format incorrect : Doit être un PDF

**Solution :**
```powershell
# Vérifiez le nom exact
Get-ChildItem "public\documents\"
```

### Après ajout, rien ne change

**Solution :**
1. Arrêtez le serveur (Ctrl+C)
2. Relancez : `npm run dev`
3. Rechargez la page (Ctrl+F5)

---

## 📋 Checklist finale

Avant de déployer, vérifiez :

### Fichiers
- [ ] `photo-rahma.png` est dans `public/images/`
- [ ] `CV_Rahma_Draouil.pdf` est dans `public/documents/`
- [ ] Les noms sont EXACTS (majuscules, underscores)

### Test local
- [ ] `npm run dev` fonctionne
- [ ] La photo s'affiche dans Hero
- [ ] Le bouton CV télécharge le fichier
- [ ] Testé sur mobile (menu responsive)
- [ ] Tous les liens fonctionnent

### Build
- [ ] `npm run build` réussit
- [ ] Aucune erreur dans la console

---

## 🎯 Résumé visuel

```
AVANT (fichiers manquants) :
public/
├── images/
│   ├── about-illustration.svg
│   ├── hero-background.svg
│   ├── profile-placeholder.svg  ← Placeholder affiché
│   └── [autres SVG]
└── documents/
    └── README.txt

APRÈS (fichiers ajoutés) :
public/
├── images/
│   ├── about-illustration.svg
│   ├── hero-background.svg
│   ├── photo-rahma.png          ← VOTRE PHOTO ✅
│   ├── profile-placeholder.svg
│   └── [autres SVG]
└── documents/
    ├── CV_Rahma_Draouil.pdf     ← VOTRE CV ✅
    └── README.txt
```

---

## 🆘 Besoin d'aide ?

### Option 1 : Vérification automatique

Exécutez ce script PowerShell pour diagnostiquer :

```powershell
cd C:\Users\hp\Desktop\portflio\portfolio-rahma
.\verifier-fichiers.ps1
```

### Option 2 : Vérification manuelle

Ouvrez l'Explorateur et vérifiez visuellement :
1. Allez dans `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images`
2. Vous devez voir `photo-rahma.png`
3. Allez dans `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents`
4. Vous devez voir `CV_Rahma_Draouil.pdf`

---

## ✅ Une fois terminé

Lorsque les 2 fichiers sont en place :

```bash
# 1. Testez localement
npm run dev

# 2. Vérifiez que tout fonctionne

# 3. Créez le build
npm run build

# 4. Déployez !
vercel
```

---

## 📞 Rappel des chemins exacts

### Photo :
```
C:\Users\hp\Desktop\portflio\portfolio-rahma\public\images\photo-rahma.png
```

### CV :
```
C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents\CV_Rahma_Draouil.pdf
```

---

**Votre portfolio sera complet une fois ces 2 fichiers ajoutés !** 🎉
