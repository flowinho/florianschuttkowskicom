---
layout: post
title: "Jekyll/Minima: Seiten im Navigation Header sortieren"
---

Nutzer von Jekyll[^1] und Minima[^2] können auf einfache Art und Weise definieren, welche Seiten im Header von Minima auftauchen sollen, und in welcher Reihenfolge diese dargestellt werden
sollen.

Die Konfiguration erfolgt durch den Key `header_pages` in der zentralen Konfigurationsdatei `_config.yml`.

```yaml
theme: minima
include: 
  - _pages

header_pages:
  - _pages/cv.md
  - _pages/my-work.md
  - _pages/kontakt.md
  - _pages/downloads.md
```

[^1]: Jekyll, MIT, Github.com, [https://github.com/jekyll/jekyll](https://github.com/jekyll/jekyll)
[^2]: Minima, MIT, Github.com, [https://github.com/jekyll/minima](https://github.com/jekyll/minima) 