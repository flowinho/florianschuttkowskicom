---
layout: post
title: "Jekyll sauber unter macOS installieren"
---

Jekyll ist ein aus guten Gründen sehr verbreiteter Static Site Generator. Leider ist die Dokumentation etwas fehlerbehaftet bzw. beschreibt nicht den mMn. optimalen Weg zum Ruby on Rails zu installieren und anschließend Jekyll selbst.

Für diese Installation wird [Homebrew](https://brew.sh), eine Package Manager, der auf keinem macOS-System fehlen sollte. Wichtig ist die initiale Installation von Homebrew und anschließend das Herunterladen und Konfigurieren von `rbenv`, einer Software zur Installation und Verwaltung von Ruby on Rails Umgebungen.

Hier der vollständige Ablauf:

```bash
brew update && brew install rbenv # Installation von rbenv
rbenv install -l # Auflistung der durch rbenv verfügbaren Ruby Versionen.
rbenv install 3.2.2 # Installation von Ruby 3.2.2, der aktuell neuesten Version.
rbenv global 3.2.2 # Aktivierung von Ruby 3.2.2 systemweit.
# WICHTIG: Terminalsession neu starten um Ruby 3.2.2 zu übernehmen
gem install bundler jekyll # Jekyll und seine Dependency Bundler installieren
```
