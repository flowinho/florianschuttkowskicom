---
layout: post
title: "Nerdfonts auf iPadOS installieren"
---

Das iPad ist, leider, noch kein vollwertiger Ersatz für einen Computer oder Mac. Aber es ist ein verdammt praktischer, sehr mobiler SSH-Client. Wer auf seinem Server oder dem Rechner zu dem er:sie sich verbindet gerne Icons nutzt, beispielsweise durch `exa --icons` oder oh-my-zshell mit einem powerline-Skin, der benötigt sogenannte Nerdfonts, also Schriftarten, die einige Icons bereits beinhalten.

|![](/assets/images/shellfish-ipados.jpg)|
|:-:|
|Shellfish auf iPadOS, oh-my-zsh|

Apple hat mit dem Release von iOS 13 und iPadOS 13 die Möglichkeit geliefert, eigene Schriftarten auf den Geräten zu installieren. Leider ist die Vorgehensweise extrem kompliziert. Abhilfe schafft das Tool [Fontcase](https://apps.apple.com/app/id1205074470), welches auch von ShellFish beispielhaft in den Einstellungen erwähnt wird.

Die Vorgehensweise ist dadurch immer noch nicht trivial, aber Fontcase vereinfacht den Prozess stark.

1. Fontcase herunterladen
1. Nerdfont herunterladen, beispielsweise Fira Code NF Regular
1. In Fontcase importieren und auf "Installieren" drücken.
1. In dein Einstellungen des iPads das Verwaltungsprofil von Fontcase akzeptieren.
1. Innerhalb von Shellfish die neue Schriftart aktivieren.
