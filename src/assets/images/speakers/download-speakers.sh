#!/bin/bash
# Speaker-Bilder Download Script für NG-DE 2025
# Ausführen im Verzeichnis: src/assets/images/speakers/

echo "=== NG-DE 2025 Speaker-Bilder Download ==="
echo ""

# 1. Robin Götz (Instagram - direkt downloadbar)
echo "📥 Lade Robin Götz..."
curl -L -o robin-goetz.jpg "https://scontent-muc2-1.cdninstagram.com/v/t51.2885-19/471356445_1261295178482325_2292084567883923598_n.jpg?_nc_ht=scontent-muc2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QFKwcoqEHvRDjUm_PPH9VYuqh-O2BioLcQuF_EoOAUuF3KXtxcnkDx489LwgO6eosB7a1daedRNAL5S5vJ2qv1j&_nc_ohc=2Ah5kuRS3uoQ7kNvwGncTlH&_nc_gid=FYfGdCKCFbb2ILnMrLwZ4w&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfHZTdOEJWgvawJX-rFAeaP6i4Yp9O8ZXae-0ZSrUA4HfA&oe=6816A7BF&_nc_sid=7a9f4b"

# 2. Brygida Fiejdasz (Google Drive - Workaround versuchen)
echo "📥 Versuche Brygida Fiejdasz..."
curl -L -o brygida-fiejdasz.jpg "https://drive.google.com/uc?export=download&id=15O3XBMulIrUWf8UsmY6TPXfGSZKVScAL"

# 3. Eliran Eliassy (Google Drive - Workaround versuchen)
echo "📥 Versuche Eliran Eliassy..."
curl -L -o eliran-eliassy.jpg "https://drive.google.com/uc?export=download&id=1aJOhlkhPwdDgJHSzYXku5ntm4g2RwB2p"

# 4. Marko Stanimirović (Google Drive - Workaround versuchen)
echo "📥 Versuche Marko Stanimirović..."
curl -L -o marko-stanimirovic-new.jpg "https://drive.google.com/uc?export=download&id=1TWJsptEHPwRg2CzrRDjbMieuzrjDwsRU"

# 5. Kasia Biernat-Kluba (LinkedIn - direkt downloadbar)
echo "📥 Lade Kasia Biernat-Kluba..."
curl -L -o kasia-biernat-kluba.jpg "https://media.licdn.com/dms/image/v2/C4D03AQFOe8ZqEdxjAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648558543647?e=1749686400&v=beta&t=aZlIrfdnWtmJtexrbkLme38DV0koKC3RMCrm07c3aLY"

echo ""
echo "=== STATUS ===" 
echo ""

# Überprüfe heruntergeladene Dateien
files=("robin-goetz.jpg" "brygida-fiejdasz.jpg" "eliran-eliassy.jpg" "marko-stanimirovic-new.jpg" "kasia-biernat-kluba.jpg")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        size=$(ls -lh "$file" | awk '{print $5}')
        echo "✅ $file - $size"
    else
        echo "❌ $file - nicht gefunden"
    fi
done

echo ""
echo "=== MANUELL HERUNTERLADEN ===" 
echo ""
echo "📷 Nicolas Frizzarin (Google Photos):"
echo "   URL: https://photos.app.goo.gl/gBGjt1ffxWkpEhJX8"
echo "   Speichern als: nicolas-frizzarin.jpg"
echo ""

# Prüfe ob alle Google Drive Downloads erfolgreich waren
failed_google_drive=()
google_drive_files=("brygida-fiejdasz.jpg" "eliran-eliassy.jpg" "marko-stanimirovic-new.jpg")

for file in "${google_drive_files[@]}"; do
    if [ -f "$file" ]; then
        # Prüfe ob die Datei größer als 1KB ist (Google Drive gibt manchmal HTML-Fehlerseiten zurück)
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        if [ "$size" -lt 1000 ]; then
            failed_google_drive+=("$file")
            echo "⚠️  $file ist zu klein - möglicherweise fehlgeschlagen"
        fi
    else
        failed_google_drive+=("$file")
    fi
done

if [ ${#failed_google_drive[@]} -gt 0 ]; then
    echo ""
    echo "🔄 ALTERNATIVE: Google Drive manuell herunterladen:"
    echo ""
    echo "Brygida Fiejdasz:"
    echo "  https://drive.google.com/file/d/15O3XBMulIrUWf8UsmY6TPXfGSZKVScAL/view?usp=sharing"
    echo ""
    echo "Eliran Eliassy:"
    echo "  https://drive.google.com/file/d/1aJOhlkhPwdDgJHSzYXku5ntm4g2RwB2p/view?usp=sharing"
    echo ""
    echo "Marko Stanimirović:"
    echo "  https://drive.google.com/file/d/1TWJsptEHPwRg2CzrRDjbMieuzrjDwsRU/view?usp=sharing"
    echo ""
    echo "➡️  Rechtsklick auf das Bild -> 'Bild speichern unter...'"
fi

echo ""
echo "🎉 Download-Vorgang abgeschlossen!"
echo "📂 Alle Bilder sollten im Verzeichnis src/assets/images/speakers/ sein" 