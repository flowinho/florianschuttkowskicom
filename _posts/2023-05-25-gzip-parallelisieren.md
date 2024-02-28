---
layout: post
title: "GZIP parallelisieren mit PIGZ"
---

tar.gz ist eine Quelloffene, schnelle und zuverlässige Methode um Daten komprimiert zu archivieren, weswegen sich dieses Format
ungebrochener Beliebtheit erfreut. Standardmäßig nutzt gzip leider nur einen Prozessorkern. Die alternative GZIP-Implementierung "PIGZ" (gesprochen: pick-si), 
beschleunigt den Archivierungsvorgang um ein Vielfaches.

Für den folgenden Befehl werden sowohl pigz als auch pv benötigt.

```bash
tar --use-compress-program="pigz --best --recursive | pv" -cf archive.tar.gz
```
