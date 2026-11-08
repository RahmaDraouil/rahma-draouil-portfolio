# 📄 Comment ajouter votre CV au portfolio

## 🎯 Méthode Simple (Glisser-Déposer)

### Étape 1 : Ouvrir le dossier
1. Appuyez sur **Windows + E** (Explorateur de fichiers)
2. Naviguez vers : `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents`
3. Gardez cette fenêtre ouverte

### Étape 2 : Glisser votre CV
1. Trouvez votre CV sur votre ordinateur (Bureau, Documents, Téléchargements...)
2. **Glissez-le** dans la fenêtre ouverte à l'étape 1
3. **Renommez-le** : Clic droit → Renommer → `CV_Rahma_Draouil.pdf`

✅ **C'est terminé !**

---

## 📂 Méthode avec Copier-Coller

### Si votre CV est sur le Bureau :
```powershell
Copy-Item "$env:USERPROFILE\Desktop\MonCV.pdf" "C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents\CV_Rahma_Draouil.pdf"
```

### Si votre CV est dans Documents :
```powershell
Copy-Item "$env:USERPROFILE\Documents\MonCV.pdf" "C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents\CV_Rahma_Draouil.pdf"
```

### Si votre CV est dans Téléchargements :
```powershell
Copy-Item "$env:USERPROFILE\Downloads\MonCV.pdf" "C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents\CV_Rahma_Draouil.pdf"
```

**Note :** Remplacez `MonCV.pdf` par le nom actuel de votre fichier CV

---

## ✅ Vérification rapide

Après avoir ajouté le CV, vérifiez avec PowerShell :

```powershell
cd C:\Users\hp\Desktop\portflio\portfolio-rahma
Test-Path "public\documents\CV_Rahma_Draouil.pdf"
```

**Résultat attendu :** `True` ✅

---

## 🚀 Tester le téléchargement

Une fois le CV ajouté :

```powershell
npm run dev
```

Ouvrez : http://localhost:5173

Cliquez sur le bouton **"Télécharger mon CV"** → Votre CV doit se télécharger !

---

## ⚠️ Important

- **Nom exact** : `CV_Rahma_Draouil.pdf` (respectez les majuscules et underscores)
- **Format** : PDF uniquement
- **Taille** : Idéalement < 2 MB
- **Emplacement** : `portfolio-rahma\public\documents\`

---

## 🆘 Si vous ne trouvez pas votre CV

Utilisez la recherche Windows :
1. Appuyez sur **Windows + S**
2. Tapez : `*.pdf`
3. Filtrez par **"Documents"** ou **"Date de modification récente"**
4. Trouvez votre CV
5. Clic droit → **Copier**
6. Allez dans `C:\Users\hp\Desktop\portflio\portfolio-rahma\public\documents`
7. Clic droit → **Coller**
8. Renommez en `CV_Rahma_Draouil.pdf`

---

## 📋 Checklist

- [ ] CV trouvé sur mon ordinateur
- [ ] CV copié dans `portfolio-rahma\public\documents\`
- [ ] Renommé en `CV_Rahma_Draouil.pdf`
- [ ] Vérification avec `Test-Path` → True
- [ ] Testé avec `npm run dev`
- [ ] Bouton "Télécharger mon CV" fonctionne

---

✅ **Votre CV est prêt !**
