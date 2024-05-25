---
layout: post
title: GIT History eines Repository löschen aber die Dateien behalten
---

Manchmal bedarf es Aufräumarbeiten innerhalb eines GIT-Repos, beispielsweise wenn ein altes Projekt migriert werden soll, ohne tausende von Commits
zu übertragen. Zu diesem Zweck kann es sinnvoll sein, alle bisherigen Commits zu entfernen und alles konsolidiert zu pushen.

```bash
git checkout --orphan cleanup_branch
git add .
git commit -am "Initial commit"
git branch -D main
git branch -m main
git push -f origin main
```