---
layout: post
title: "GIT History löschen und pushen" 
---

Manchmal kommt es vor, dann man aus Versehen Murks commited und, noch schlimmer, vielleicht sogar aus Versehen sensible Informationen veröffentlich hat. 
Die History eines GIT-Repos lässt sich löschen und neu initialisieren mit folgendem Befehlen:

```bash
rm -rf .git
git init
git add .
git commit -m "Removed history, due to sensitive data"
git remote add origin <repo.git>
git push -u force origin main
```