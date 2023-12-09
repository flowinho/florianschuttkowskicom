---
layout: post
title: "Blog-Images mit Imagemagick komprimieren"
---

Das tolle Tool `imagemagick` überzeugt mich immer wieder. 

```bash
sudo apt update && sudo apt install imagemagick # Sollte imagemagick nicht bereits installiert sein.
convert -strip -interlace Plane -quality 70% -sampling-factor 4:2:0 -define jpeg:dct-method=float source.jpg output.jpg
```

Wie setzt sich dieser Befehl zusammen?

- `convert` konvertiert das Bild mit `imagemagick`
- `-strip` entfernt die EXIF-Informationen des Bildes (Aufnahmedatum, Aufnahmeort, etc)
- `-interlace Plane` definiert progressive Komprimierung
- `-quality 70%` setzt die Ausgabequalität auf 70%
- `-sampling-factor 4:2:0` reduziert die Auflösung des Chroma-Kanals um die Hälfte
- `-define jpeg:dct-method=float` übergibt dem JPG-Algorithmus die etwas genauere Floating Point Conversion, statt der Standard Integer conversion.
