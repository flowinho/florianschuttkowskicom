---
layout: post
title: Zwei Verzeichnisse synchronisieren - PARANOID mode
categories: devDiary
image: /assets/images/post-images/verzeichnisse-vergleichen.jpg
tags: [cli, bash, rsync]
mermaid: true
excerpt: >
    Dieser Beitrag beschreibt die Anforderungen für das Vergleichen und Kopieren von Dateien zwischen Verzeichnissen, ohne neuere Dateien zu überschreiben oder Dateien im Zielverzeichnis zu löschen. Er erläutert den Prozess grafisch und erklärt die wichtigsten Rsync-Switches, die benötigt werden, um diesen Vorgang korrekt durchzuführen. Ein Rsync-Befehl für eine Simulation wird bereitgestellt, um sicherzustellen, dass der Vorgang wie gewünscht abläuft, bevor echte Änderungen vorgenommen werden.
---

## Anforderungen

- Alle Verzeichnisse und Unterverzeichnisse sollen verglichen werden.
- Nur Dateien die auf dem Ziel nicht vorhanden sind, sollen kopiert werden.
- Wenn im Ziel eine neuere Version einer Datei vorliegt, soll die ältere Version der Datei die neuere Datei nicht ersetzen.
- Im Zielverzeichnis soll nichts gelöscht werden.

## Grafische Aufschlüsselung

<div class="mermaid">
graph TD
    startLoop[Wird für jede Datei ausgeführt]
    doesExist{Existiert die Datei im Ziel?}
    isNewer{Datei im Ziel aktueller?}
    willBeCopied[Datei wird kopiert]
    willNotBeCopied[Datei wird nicht kopiert]

    startLoop --> doesExist
    doesExist -- Datei existiert --> isNewer
    doesExist -- Datei existiert nicht --> willBeCopied
    isNewer -- Datei ist neuer --> willBeCopied
    isNewer -- Datei ist älter oder gleich alt --> willNotBeCopied

    willBeCopied --> startLoop
    willNotBeCopied --> startLoop
</div>

## Rsync-Switches ausführlicher erklärt

- `a` steht **Archive**. Dieser Befehl ist eine Kurzform von `rlptgoD`. Kopiert rekursiv und behält Nutzer, Gruppen, Dateiberechtigungen und Zeitstempel bei.
    - `r` steht für **recursive**, geht in jedes Verzeichnis und dessen Unterverzeichnisse und untersucht deren Inhalte.
    - `l` kopiert Sym**links** als Symlinks
    - `p` steht für **permissions**. bewahrt also die Zugriffsberechtigungen der Dateien.
    - `t` bewahrt die **timestamps**, also die Zeitstempel wann die Dateien geändert wurden (enorm wichtig).
    - `g` bewahrt die **groups**, also die Nuzergruppen der Datei,
    - `o` verhindert, dass der **owner** der Datei geändert wird.
    - `D` steht für:
        - `--devices` bewahrt Dateien die zu einem bestimmten Gerät gehören.
        - `--specials` sonstige Dateien, die vielleicht relevant sein könnten.
- `u`, oder auch `--update` kopiert nur Dateien, die **neuer sind als auf dem Zielgerät**.
- `v` Gibt den aktuellen Stand aus, listet Dateien auf.
- `h`, Ausgabe wird lesbarer für Menschen
- `p` oder `--progress` gibt den Gesamtfortschritt aus.
- `--dry-run` führt den gesamten Vorgang erstmal als Simulation aus, ohne wirklich Dateien zu verschieben.

Das Problem mit `ignore existing` und `update` im selben Befehl: Wenn bereits existierende Dateien ignoriert werden, werden sie nicht mehr verglichen. Neuere Änderungen werden also nicht übernommen.

Der gesamte Befehl für die Simulation wäre also:

```bash
rsync -avhpu --dry-run source/ destination/
```

Der eigentliche Vorgang dann natürlich ohne `--dry-run`.
