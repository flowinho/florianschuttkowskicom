---
layout: post
title: "Zeilen alphabetisch sortieren in VIM"
---

VIM ist ein toller Editor, ich nutze ihn für sehr vieles. Da ich todo.txt als mein Framework zur Organisation von Aufgaben nutze, profitiere ich davon, die Zeilen in meiner `todo.txt` möglichst schnell alphabetisch sortieren zu können. Die schnellste Variant die ich bisher finden konnte ist:

```bash
ggvG :sort
```

- `gg` springt an den Anfang des Dokuments
- `v` startet den Modus zur visuellen Auswahl
- `G` springt an das Ende des Dokuments
- `:sort` sortiert die Zeilen der Datei alphabetisch

