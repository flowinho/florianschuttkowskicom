---
layout: post
title: "Ubuntu: Die Inhalte des Home-Folders auf dem Desktop ausblenden"
---

Mehr als einmal begegnete mir ein Phänomen unter Ubuntu + Gnome: trotz deaktivierter Einstellung "Den persönlichen Ordner anzeigen" wurden die **Inhalte** des Home-Folders auf meinem Desktop angezeigt. Die Gnome-App `gnome-extensions` hilft dabei, das Problem zu beseitigen.

|![](/assets/images/gnome-shell-extensions.jpg)|
|:-:|
|Gnome-App "Erweiterungen"|

Installation wie gewohnt über `apt`:

```bash
sudo apt update && sudo apt install gnome-shell-extension-pref -y
```

Danach kann die App "Erweiterungen" bzw. "Extensions" geöffnet werden, und die Desktop-Icons deaktiviert werden.
