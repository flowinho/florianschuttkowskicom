---
layout: post
title: "Midnight Commander: Bilder und Videos mit Standard-Applikation öffnen"
categories: devDiary
tags: [cli, midnight-commander]
excerpt: >
    Midnight Commander (MC) ist ein Splitpane-Filemanager für das CLI, der auch über SSH genutzt werden kann. Um Dateien lokal mit den Standard-Anwendungen zu öffnen, muss die Datei mc.ext.ini angepasst werden. Dies erfolgt durch Einfügen spezifischer Befehle für Dateitypen, um die Konfigurationsdatei anzupassen und Dateien mit den im System verbundenen Anwendungen zu öffnen.
---

![](/assets/images/midnight-commander.png)

[Midnight Commander](https://midnight-commander.org/) ist ein genialer Splitpane-Filemanager für das CLI. Der Einfachheit halber werde ich im kommenden Beitrag „Midnight Commander“ mit „MC“ abkürzen.

MC wird für nahezu alle Plattformen[^1] entwickelt und für die Nutzung über SSH optimiert. Das hat Nachteile. Wird Midnight Commander als lokaler Dateimanager verwendet, macht es Sinn, Dateien mit der auf dem System mit diesem Dateityp verbundenen Standard-Anwendung zu öffnen. 
Diese Funktionalität umzusetzen, ist leider nicht trivial. Deshalb möchte ich Sie gerne hier dokumentieren.

Der Schlüssel liegt in der Datei `mc.ext.ini`, welche sich unter macOS in `~/.config/mc/` befindet[^2]. Die Lösung besteht daraus, einen der folgenden Befehle in dieser Datei für die gewünschten Dateitypen zu hinterlegen.

```bash
# %s bezieht sich auf alle markierten Dateien
Open=(open %s &)

# %f bezieht sich auf die aktuell selektierte Datei
Open=(open %f &)
```

Der schwierigere Teil dieser Prozedur liegt darin, den Aufbau der Konfigurationsdatei zu verstehen. Die wichtigsten Punkte:

- Es gibt Makros, die sich auf allgemeine Dateitypen beziehen, wie Bilder und Videos.
- Spezifische Dateiendungen werden durch Regex ermittelt.
- MC unterscheidet zwischen den Aktionen `Open`, zur Bearbeitung öffnen und `View`, zur Betrachtung öffnen.

Möchte man alle von MC als Bilddateien und Videodateien klassifizierten Dateien mit der im Host-System festgelegten Standard-Applikation öffnen, sollte einer der oberen Befehle idealerweise im Makro `[Images]` und im Makro `[Video]` hinterlegt werden.

```bash
[Include/image]
Open=(open %s &) 
View=(open %s &)

[Include/video]
Open=(open %s &) 
View=(open %s &)
```

Sollten Probleme entstehen, lohnt es sich, Midnight Commander und im Zweifel die gesamte CLI-Instanz neu zu starten.

[^1]: Desktop. Aktuelle sehe ich keinerlei Anwendungsfälle für Midnight Commander auf einem Smartphone oder Tablet.
[^2]: Leider scheint sich diese Datei innerhalb verschiedener Linux-Flavours an unterschiedlichen Stellen zu befinden, weshalb ich auf eine Auflistung anderer Betriebssysteme verzichten.