---
layout: toc
title: Dateien ablegen. Wie, wo und warum - mein System ausführlich erklärt
---


## Die Ausgangssituation

Wenn wir ehrlich sind, haben die meisten Menschen keine Strategie, um Daten sinnvoll zu katalogisieren. Auch ich habe lange nach einem System gesucht, dass für mich funktioniert. Es durfte nicht zu aufwendig sein, leicht zugänglich, und die Ordnerstruktur durfte nicht zu tief ausfallen. 
Und — das war mir wichtig — es musste ein System werden, welches ich ohne Bedenken an beliebige Menschen weiterempfehlen konnte. Es musste also unabhängig von Beruf oder Hobbies funktionieren. 

Es gibt unzählige Foreneinträge, Subreddits und Slack-Chats, die sich mit genau diesem Thema beschäftigen. Menschen fragen sich: „Wohin mit all den Datenmengen?“ Allein diese Frage erzeugt bereits viele Folgefragen, beispielsweise:
- In welchem Format lege ich Bilder / Videos ab, damit sie idealerweise noch in 10-20 Jahren geöffnet werden können?
- In welchem Format lege ich Archive mit großen Mengen einzelner Dateien ab, um Platz zu sparen?
- Welche Ordnerstruktur bietet sich an, wenn ich extrem viele Source-Codes habe?
- Welche Ordnerstruktur bietet sich für meine privaten Fotos an?

Ich werde versuchen, in diesem Beitrag meine Verfahrensweise darzustellen, und auf potenzielle Vorteile, aber auch die damit verbundenen Nachteile hinweisen.

### Anforderungen an ein Ablagesystem
### Suche vs Ablagesystem
### Meine Entscheidung

## Die initiale Ordnerstruktur

Inspiriert wurde ich zu dieser Datenstruktur von einigen Usern des Subreddits [](https://reddit.com/r/DataHoarder "r/datahoarder") und einigen Mastodon-Beiträgen. Sie beruht auf Erfahrungswerten von Menschen, deren Datensammlungen sich im Terabyte-Bereich befinden. Für normale Anwender:innen sind diese Mengen zwar äußerst unwahrscheinlich, es ist aber zielführend, eine konsistente Ordnerstruktur für Festplatten zu verwenden, um Daten schnell zu finden und entsprechend ablegen zu können.

### Warum überhaupt eine Verzeichnisstruktur

### Meine Anforderungen an eine Verzeichnisstruktur

### Das Ergebnis

```bash
/
├── archive
│  ├── assets
│  ├── backups
│  └── datensammlungen
├── audio
│  ├── aufnahmen
│  ├── hoerbuecher
│  ├── musik
│  ├── podcasts
│  └── soundtracks
├── bilder
│  ├── animierteBilder
│  ├── artworks
│  ├── memes
│  ├── nutzungsorientiert
│  │  ├── profilBilder
│  │  └── wallpaper
│  │     ├── landscape
│  │     └── portrait
│  ├── photos
│  │  ├── arbeit
│  │  ├── freundeUndFamilie
│  │  ├── persoenlich
│  │  └── verein
│  └── screenshots
├── dokumente
├── literatur
├── nsfw
│  ├── bilder
│  │  ├── persoenlich
│  │  └── web
│  ├── software
│  └── videos
│     ├── persoenlich
│     └── web
├── software
│  ├── anwendungen
│  ├── quellCodes
│  └── schriftarten
├── spiele
└── video
   ├── filme
   ├── konzerte
   ├── personal
   ├── tv-anime
   ├── tv-serien
   └── web
```

## Die Verzeichnisse im Einzelnen

### Archive
### Audio
### Bilder
### Dokumente
### Literatur
### NSFW
### Software
### Spiele
### Video

## Fazit