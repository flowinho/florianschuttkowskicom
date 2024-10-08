---
layout: post
title: "Blog-Images mit Imagemagick komprimieren"
image: /assets/images/post-images/imagemagick-komprimieren.jpg
categories: devDiary
tags: [macos, homebrew]
excerpt: >
    Imagemagick beeindruckt mich immer wieder. Mit dem Befehl convert -strip -interlace Plane -quality 70% -sampling-factor 4:2:0 -define jpeg:dct-method=float source.jpg output.jpg kann man Bilder konvertieren und optimieren. Installation: sudo apt install imagemagick (Linux) oder brew install imagemagick (macOS).
---

Das tolle Tool `imagemagick` überzeugt mich immer wieder. 

```bash
#Linux
sudo apt update && sudo apt install imagemagick # Sollte imagemagick nicht bereits installiert sein.

# macOS
brew update && brew install imagemagick

# Der Befehl
magick -strip -interlace Plane -quality 70% -sampling-factor 4:2:0 -define jpeg:dct-method=float source.jpg output.jpg
```

Wie setzt sich dieser Befehl zusammen?

- `convert` konvertiert das Bild mit `imagemagick`
- `-strip` entfernt die EXIF-Informationen des Bildes (Aufnahmedatum, Aufnahmeort, etc)
- `-interlace Plane` definiert progressive Komprimierung
- `-quality 70%` setzt die Ausgabequalität auf 70%
- `-sampling-factor 4:2:0` reduziert die Auflösung des Chroma-Kanals um die Hälfte
- `-define jpeg:dct-method=float` übergibt dem JPG-Algorithmus die etwas genauere Floating Point Conversion, statt der Standard Integer conversion.
