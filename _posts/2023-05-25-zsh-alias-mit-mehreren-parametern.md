---
layout: post
title: "ZSH Alias mit mehreren Parametern erzeugen"
---

Programmierer:innen sind faul. Das müssen Sie auch sein. Ich wollte aber nicht nur faul sein, sondern auch schneller. Eine gute Methode um faul **und** schneller zu sein, sind Terminal-Alias, die lange Befehlsketten zu kurzen bündeln können. Dank zshell ist es möglich in diesen Alias auch eine Funktionen legen zu können, die Parameter erwartet.

Mein Ziel war es, so einfach wie möglich eine Datei oder ein Verzeichnis zuerst möglichst effizient zu komprimieren, und danach per gpg zu verschlüsseln.

Hier die Befehle im Einzelnen:

```bash
# Dateien komprimieren
tar --use-compress-program="pigz --best --recursive | pv" -cf - <dieDaten>
# Das Archiv verschlüsseln
gpg -ear <empfängerKey> <derArchivName> > <derArchivName>.gpg 
```

Das war mir alles zu umständlich. Ich wollte einen simplen Befehl, dem ich einen Ordner oder eine Datei übergeben kann, und den Key des Empfängers. Glücklicherweise lassen sich in zshell Funktionen deklarieren. Der Hack? Die Funktion sofort als Teil des Alias ausführen.

```bash
alias compressEncrypt='e(){ tar --use-compress-program="pigz --best --recursive | pv -p -t -e" -cf - $1 | gpg -ear $2 > $1.tar.gz.gpg };e'
```