# Script pour copier votre CV dans le portfolio

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          ASSISTANT POUR AJOUTER VOTRE CV                  ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Dossier de destination
$destinationFolder = "public\documents"
$destinationFile = "$destinationFolder\CV_Rahma_Draouil.pdf"

# Vérifier si le CV existe déjà
if (Test-Path $destinationFile) {
    Write-Host "Un CV est deja present !" -ForegroundColor Green
    $cvInfo = Get-Item $destinationFile
    $cvSize = [math]::Round($cvInfo.Length / 1KB, 2)
    Write-Host "  Fichier : $($cvInfo.Name)" -ForegroundColor White
    Write-Host "  Taille  : $cvSize KB" -ForegroundColor White
    Write-Host ""
    $replace = Read-Host "Voulez-vous le remplacer ? (O/N)"
    if ($replace -ne "O" -and $replace -ne "o") {
        Write-Host "Operation annulee." -ForegroundColor Yellow
        exit
    }
}

Write-Host ""
Write-Host "Ou se trouve votre CV actuellement ?" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Sur le Bureau" -ForegroundColor White
Write-Host "2. Dans Documents" -ForegroundColor White
Write-Host "3. Dans Telechargements" -ForegroundColor White
Write-Host "4. Autre emplacement (je vais le chercher)" -ForegroundColor White
Write-Host ""

$choix = Read-Host "Votre choix (1-4)"

switch ($choix) {
    "1" {
        $searchPath = "$env:USERPROFILE\Desktop"
        Write-Host "`nRecherche sur le Bureau..." -ForegroundColor Cyan
    }
    "2" {
        $searchPath = "$env:USERPROFILE\Documents"
        Write-Host "`nRecherche dans Documents..." -ForegroundColor Cyan
    }
    "3" {
        $searchPath = "$env:USERPROFILE\Downloads"
        Write-Host "`nRecherche dans Telechargements..." -ForegroundColor Cyan
    }
    "4" {
        Write-Host "`nOuvrez l'Explorateur et trouvez votre CV..." -ForegroundColor Cyan
        Write-Host "Glissez-deposez le fichier dans cette fenetre PowerShell" -ForegroundColor Yellow
        Write-Host "puis appuyez sur Entree..." -ForegroundColor Yellow
        Write-Host ""
        $customPath = Read-Host "Chemin du CV"
        $customPath = $customPath.Trim('"')
        
        if (Test-Path $customPath) {
            Copy-Item $customPath $destinationFile -Force
            Write-Host "`nCV copie avec succes !" -ForegroundColor Green
            Write-Host "Emplacement : $((Get-Item $destinationFile).FullName)" -ForegroundColor White
            exit
        } else {
            Write-Host "`nFichier introuvable !" -ForegroundColor Red
            exit
        }
    }
    default {
        Write-Host "`nChoix invalide !" -ForegroundColor Red
        exit
    }
}

# Rechercher les fichiers PDF
Write-Host "Recherche des fichiers PDF..." -ForegroundColor Cyan
$pdfFiles = Get-ChildItem -Path $searchPath -Filter "*.pdf" -ErrorAction SilentlyContinue | 
            Sort-Object LastWriteTime -Descending

if ($pdfFiles.Count -eq 0) {
    Write-Host "`nAucun fichier PDF trouve dans ce dossier !" -ForegroundColor Red
    Write-Host "Verifiez l'emplacement de votre CV." -ForegroundColor Yellow
    exit
}

Write-Host "`nFichiers PDF trouves :" -ForegroundColor Green
Write-Host ""
for ($i = 0; $i -lt $pdfFiles.Count -and $i -lt 10; $i++) {
    $num = $i + 1
    $size = [math]::Round($pdfFiles[$i].Length / 1KB, 2)
    Write-Host "$num. $($pdfFiles[$i].Name) ($size KB)" -ForegroundColor White
}

if ($pdfFiles.Count -gt 10) {
    Write-Host "   ... et $($pdfFiles.Count - 10) autres fichiers" -ForegroundColor Gray
}

Write-Host ""
$selection = Read-Host "Quel fichier est votre CV ? (Numero)"

try {
    $index = [int]$selection - 1
    if ($index -ge 0 -and $index -lt $pdfFiles.Count) {
        $selectedFile = $pdfFiles[$index]
        
        Write-Host "`nCopie de $($selectedFile.Name)..." -ForegroundColor Cyan
        Copy-Item $selectedFile.FullName $destinationFile -Force
        
        Write-Host "`nCV copie avec succes !" -ForegroundColor Green
        Write-Host "Emplacement : $((Get-Item $destinationFile).FullName)" -ForegroundColor White
        
        $size = [math]::Round((Get-Item $destinationFile).Length / 1KB, 2)
        Write-Host "Taille     : $size KB" -ForegroundColor White
        
        Write-Host "`nProchaine etape :" -ForegroundColor Yellow
        Write-Host "npm run dev" -ForegroundColor White
        Write-Host "puis testez le bouton 'Telecharger mon CV' !" -ForegroundColor White
    } else {
        Write-Host "`nNumero invalide !" -ForegroundColor Red
    }
} catch {
    Write-Host "`nErreur : entrez un numero valide !" -ForegroundColor Red
}

Write-Host ""
