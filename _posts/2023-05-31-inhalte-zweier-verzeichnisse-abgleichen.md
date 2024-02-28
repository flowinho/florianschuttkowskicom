---
layout: post
title: Inhalte zweiter Verzeichnisse inkl. ihrer Unterverzeichnisse abgleichen
---

Manchmal ist es sehr praktisch die Inhalte zweier Verzeichnisse direkt miteinander vergleichen zu können. Das praktische Tool `diff` funktioniert nicht nur mit Dateien, sondern auch mit Ordnern, und ist daher prädestiniert für diesen Anwendungsfall.

Will ich zum Beispiel sicherstellen, dass meine tragbare SSD, denselben Inhalt haben wie meine HDD, funktioniert das sehr einfach über:

```bash
diff -r /media/flowinho/T7\ Shield /media/flowinho/passport
```