---
layout: post
title: "TPM - Tmux Plugin Manager einrichten"
---

|![](/assets/images/tmux-dracula.jpg)|
|:-:|
|tmux mit tmux-dracula Theme|

`tmux`[^1] ist ein wundervolles Programm, dass es erlaubt, innerhalb einer Terminal-Session mehrere Fenster und Panes zu erstellen und dadurch insbesondere über SSH wesentlicher produktiver arbeiten zu können. Tmux kann erweitert werden durch den Plugin-Manager tpm[^2] welcher es erlaubt weitere Zusatzprogramme und Themes zu installieren. 

Interessante, von mir genutzte Plugins:

- **tmux-sensible[^3]**  
  Ein Plugin dass Tmux-Einstellungen beinhaltet die "für alle Nutzer akzeptabel sein sollten". Weitere Infos finden sich im GitHub-Repository, prinzipiell handelt es sich um TMUX-Einstellungen,
  die Sinn machen.
- **dracula[^4]**  
  In den meisten meiner Programme nutze ich diese Theme, da es eine fast ideale Farbgebung für mich ist. tmux-dracula kommt mit netten Konfigurationsmöglichkeiten, wie beispielsweise
  der Möglichkeit CPU-Auslastung, RAM-Nutzung, Wetter, etc in der tmux-statusbar anzuzeigen.

TPM installieren, die jeweils aktuellste Version findet sich im TPM-GitHub-Repo[^2]:

```bash
# Das Repository klonen
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# Füge diese Zeile hinzu.
set -g @plugin 'tmux-plugins/tpm'

# Das muss zwingend in der letzten Zeile stehen.
run '~/.tmux/plugins/tpm/tpm'
```

Nach dem Hinzufügen dieser Datei und dieser Zeile(n) muss tmux darüber informiert werden, dass es Änderungen in dem Setup gibt:

```bash
tmux source-file ~/.tmux.conf
```

Manchmal kann es notwendig werden, tmux neuzustarten. Um dies zu erreichen, sollte man sich von der aktuellen Session detachen und tmux neu starten.

```bash
# [CTRL] + [d] um sich von der aktuellen Session zu trennen.
# tmux beenden
tmux kill-server

# Neue Tmux-Session starten
tmux
```

Nach dem Hinzufügen von TPM und dem Einlesen der `.tmux.conf` muss TPM noch aktiviert werden, indem innerhalb einer tmux-Session [PREFIX] + [I] gedrückt werden.

---

[^1]: [https://github.com/tmux/tmux/wiki](https://github.com/tmux/tmux/wiki)
[^2]: [https://github.com/tmux-plugins/tpm](https://github.com/tmux-plugins/tpm)
[^3]: [https://github.com/tmux-plugins/tmux-sensible](https://github.com/tmux-plugins/tmux-sensible)
[^4]: [https://draculatheme.com/tmux](https://draculatheme.com/tmux)
