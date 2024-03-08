---
layout: post
title: Commits auf GitHub mittels PGP signieren (macOS)
---

**Achtung!** In diesem Artikel werden die Begrifflichkeiten **PGP** und **GPG** benutzt. Diese sind _nicht_ interoperabel und können nicht beliebig genutzt werden.
**P**retty **G**ood **P**rivacy ist das von Phil Zimmermann[^1] entwickelte und mittlerweile größtenteils standardisierte Verfahren, Text zu verschlüsseln, welches im Laufe der Zeit auch um die 
Funktionalitäten Verschlüsselung, Signierung und Authentifizierung erweitert wurde. Bei **G**nu **P**rivacy **G**uard[^2] handelt es sich um eine moderne Ablösung der alten PGP-Software.

Um diesem Artikel folgen zu können, werden die Tools `gpg`, `git` und `keepassxc` oder ein beliebiger anderer Passwort-Manager benötigt. Sollten diese nicht vorhanden sein, 
können sie über [homebrew](https://brew.sh) installiert werden:

```bash
brew update && brew upgrade
brew install gpg git
brew install --cask keepassxc
```



[^1]: Pretty Good Privacy, Wikipedia, 06.12.2023, [https://de.wikipedia.org/wiki/Pretty_Good_Privacy](https://de.wikipedia.org/wiki/Pretty_Good_Privacy).
[^2]: Gnu Privacy Guard, Wikipedia, 26.02.204 [https://de.wikipedia.org/wiki/GNU_Privacy_Guard](https://de.wikipedia.org/wiki/GNU_Privacy_Guard).