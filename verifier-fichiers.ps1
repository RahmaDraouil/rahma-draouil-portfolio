# Script de vérification des fichiers photo et CV
# Portfolio Rahma Draouil

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     VÉRIFICATION DES FICHIERS - PORTFOLIO RAHMA DRAOUIL    ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Vérification de la photo
Write-Host "📸 VÉRIFICATION DE LA PHOTO" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

$photoPath = "public\images\photo-rahma.png"
$photoExists = Test-Path $photoPath

if ($photoExists) {
    Write-Host "✅ Photo trouvée !" -ForegroundColor Green
    $photoInfo = Get-Item $photoPath
    $photoSizeKB = [math]::Round($photoInfo.Length / 1KB, 2)
    $photoSizeMB = [math]::Round($photoInfo.Length / 1MB, 2)
    
    Write-Host "   Nom      : $($photoInfo.Name)" -ForegroundColor White
    Write-Host "   Taille   : $photoSizeKB KB ($photoSizeMB MB)" -ForegroundColor White
    Write-Host "   Chemin   : $($photoInfo.FullName)" -ForegroundColor Gray
    
    if ($photoSizeKB -gt 500) {
        Write-Host "   ⚠️  Attention : La photo est volumineuse (> 500 KB)" -ForegroundColor Yellow
        Write-Host "   💡 Conseil : Compressez-la avec TinyPNG ou Squoosh" -ForegroundColor Yellow
    } else {
        Write-Host "   ✓ Taille optimale" -ForegroundColor Green
    }
} else {
    Write-Host "❌ Photo MANQUANTE" -ForegroundColor Red
    Write-Host ""
    Write-Host "   Comment l'ajouter :" -ForegroundColor Yellow
    Write-Host "   1. Enregistrez votre photo" -ForegroundColor White
    Write-Host "   2. Nommez-la : photo-rahma.png" -ForegroundColor White
    Write-Host "   3. Placez-la dans : public\images\" -ForegroundColor White
    Write-Host ""
    Write-Host "   Chemin complet attendu :" -ForegroundColor Yellow
    Write-Host "   $((Get-Location).Path)\public\images\photo-rahma.png" -ForegroundColor Gray
}

Write-Host ""

# Vérification du CV
Write-Host "📄 VÉRIFICATION DU CV" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

$cvPath = "public\documents\CV_Rahma_Draouil.pdf"
$cvExists = Test-Path $cvPath

if ($cvExists) {
    Write-Host "✅ CV trouvé !" -ForegroundColor Green
    $cvInfo = Get-Item $cvPath
    $cvSizeKB = [math]::Round($cvInfo.Length / 1KB, 2)
    $cvSizeMB = [math]::Round($cvInfo.Length / 1MB, 2)
    
    Write-Host "   Nom      : $($cvInfo.Name)" -ForegroundColor White
    Write-Host "   Taille   : $cvSizeKB KB ($cvSizeMB MB)" -ForegroundColor White
    Write-Host "   Chemin   : $($cvInfo.FullName)" -ForegroundColor Gray
    
    if ($cvSizeMB -gt 2) {
        Write-Host "   ⚠️  Attention : Le CV est volumineux (> 2 MB)" -ForegroundColor Yellow
        Write-Host "   💡 Conseil : Compressez-le avec un compresseur PDF en ligne" -ForegroundColor Yellow
    } else {
        Write-Host "   ✓ Taille optimale" -ForegroundColor Green
    }
} else {
    Write-Host "❌ CV MANQUANT" -ForegroundColor Red
    Write-Host ""
    Write-Host "   Comment l'ajouter :" -ForegroundColor Yellow
    Write-Host "   1. Localisez votre CV" -ForegroundColor White
    Write-Host "   2. Renommez-le : CV_Rahma_Draouil.pdf" -ForegroundColor White
    Write-Host "   3. Placez-le dans : public\documents\" -ForegroundColor White
    Write-Host ""
    Write-Host "   Chemin complet attendu :" -ForegroundColor Yellow
    Write-Host "   $((Get-Location).Path)\public\documents\CV_Rahma_Draouil.pdf" -ForegroundColor Gray
}

Write-Host ""

# Résumé
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                          RÉSUMÉ                            ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

if ($photoExists -and $cvExists) {
    Write-Host "🎉 PARFAIT ! Tous les fichiers sont en place !" -ForegroundColor Green
    Write-Host ""
    Write-Host "Prochaines etapes :" -ForegroundColor Yellow
    Write-Host "1. npm run dev    - Tester localement" -ForegroundColor White
    Write-Host "2. npm run build  - Creer le build" -ForegroundColor White
    Write-Host "3. vercel         - Deployer en ligne" -ForegroundColor White
} elseif ($photoExists -or $cvExists) {
    Write-Host "Il manque encore des fichiers" -ForegroundColor Yellow
    Write-Host ""
    if (-not $photoExists) {
        Write-Host "Photo manquante" -ForegroundColor Red
    }
    if (-not $cvExists) {
        Write-Host "CV manquant" -ForegroundColor Red
    }
    Write-Host ""
    Write-Host "Consultez : GUIDE_AJOUT_FICHIERS.md" -ForegroundColor Cyan
} else {
    Write-Host "❌ Aucun fichier ajouté" -ForegroundColor Red
    Write-Host ""
    Write-Host "📖 Consultez : GUIDE_AJOUT_FICHIERS.md" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Les fichiers à ajouter :" -ForegroundColor Yellow
    Write-Host "  • Photo : public\images\photo-rahma.png" -ForegroundColor White
    Write-Host "  • CV    : public\documents\CV_Rahma_Draouil.pdf" -ForegroundColor White
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Gray
Write-Host ""
