---
layout: post
title: "Wireguard basiertes VPN automatisch in unbekannten Netzwerken aktivieren (iOS, Mullvad)"
---

Menschen, die sich für Datenschutz etwas sensibilisiert haben, verstehen, welche Gefahren potentiell von öffentlichen Netzwerken wie Hotel-WiFis ausgehen können. Da diese WiFi's meistens nicht durch ein Passwort verschlüsselt sind, können Hotelbetreiber:innen und andere Gäste potentiell, sofern sie böse Absichten haben, die Datenpakete der Hotel-Gäste und jeder weiteren Person innerhalb des WiFi-Netzwerks mitschneiden[^wireshark] und gegebenenfalls auswerten. Zudem sind sogenannte Captive Portals,  also in den meisten Fällen die Website zur Zustimmung der AGB des Netzwerkbetreibers, anfällig für bestimmte Angriffe und trainieren Nutzer:innen dazu, gefährliche Sicherheitspraktiken zu lernen, wie das automatische Ignorieren von Sicherheitswarnungen[^captivePortal].

In diesem Artikel möchte ich erläutern, warum ein automatisierte Verbindungsaufbau so wichtig ist, und wie Nutzer:innen diesen einrichten können, am Beispiel des schwedischen VPN-Betreibers [Mullvad](https://mullvad.net/de) und dem [Wireguard-Protokoll](https://de.wikipedia.org/wiki/WireGuard). Die Inhalte des Artikels sollten auf andere VPN-Dienstleister, die ihre Netzwerk über Mullvad realisieren, übertragbar sein, auch wenn die  Erstellung der Konfigurationsdateien aller Vorraussicht nach abweichen wird.

## Die Problematik

Der gute Vorsatz, unbekannte WiFi-Netzwerke nur noch über ein vertrauenswürdiges VPN zu nutzen, ist daher Gebot. Allerdings lassen sich VPN-Verbindungen unter iOS weder einfach automatisieren, noch ist es einfach, den Überblick über den Zustand der VPN Verbindung zu behalten -- zumindest auf neueren Geräten. Apples gestalterische Entscheidung, den Zustand der VPN-Verbindung auf iPhones, die über einen Notch oder ein Dynamic Island verfügen[^notchPhones], auszublenden, kann ich bedingt nachvollziehen, da viele Nutzer:innen mutmaßlich wenig Erfahrung mit der Nutzung von VPNs haben. Allerdings bedeutet dies in der Konsequenz, dass Personen, die ein VPN aus beruflichen oder privaten Gründen nutzen möchten, diese Verbindung nicht mehr auf einen Blick werten können. 

|![](/assets/images/ios-vpn-status.jpg)|
|:-:|
|**Links**: Auf dem Homescreen ist nicht erkennbar ob VPN verbunden ist. **Rechts:** Erst bei Zugriff auf das Kontrollzentrum wird eine potentiell vorhandene VPN-Verbindung angezeigt.|

Das meiner Meinung nach größte Problem, welches durch die gewählte Gestaltung erzeugt wird ist die Tatsache, dass **Nutzer:innen nicht mehr sicher sein können, ob ihre Verbindung noch aktiv ist**. Das dadurch potentiell entstehende Risiko ist schwer abzuschätzen. Während es für Privatpersonen bedeuten kann, dass Hotelgäste und / oder Hotelbetreiber:innen private Daten mitschneiden, kann eine gekappte VPN-Verbindung beispielsweise eine:n Dissident:in in ernsthafte Probleme bringen. Auch abbrechende Verbindungen zu Firmen-Netzwerken können Gefahren beinhalten.

## Download der Konfigurationsdatei über die Mullvad-Konfigurationswebsite

Für die Umsetzung eines Wireguard Tunnels werden die [Wireguard iOS App](https://apps.apple.com/de/app/wireguard/id1441195209) und ein Konfigurationsprofil von Mullward benötigt. Das Konfigurationsprofil lässt sich auf der [Wireguard-Konfigurationsseite von Mullvad](https://mullvad.net/en/account/login?platform=ios&next=%2Fen%2Faccount%2Fwireguard-config) herunterladen. Nach Eingabe einer gültigen Mullvad-Kundennummer gelangt man in das Konfigurationsmenü der Website.

**Wichtig**: Wird die Konfigurations-Website auf einem iPhone besucht, ist notwendig, diese mit Safari aufzurufen, um die korrekte Generierung der Profile zu gewährleisten.

Auf der Konfigurationsseite muss ein neuer Wireguard-Schlüssel angelegt werden. Nach einem Klick auf "Schlüssel generieren" präsentiert uns die Seite allerhand Optionen, hier ein paar Beispiel-Einstellungen, die so übernommen werden können, aber nicht müssen.

1. **Wireguard-Schlüssel verwalten**  
Hier können alle bisher erzeugten Schlüssel eingesehen und invalidiert werden. Bei einem ersten Besuch der Website findet sich hier nur der gerade generierte Schlüssel.
1. **Wählen Sie einen oder mehrere Ausgangsorte aus**  
  - Ein Land auswählen  
    Das Land, in welches der Tunnel geöffnet werden soll.  
    Beispiel: _Deutschland_
  - Eine Stadt auswählen  
    Die Stadt innerhalb des gewählten Landes.  
    Beispiel: _Frankfurt_ 
  - Bitte wählen Sie einen Server  
    Einer der Mullvad-Server die in einem Rechenzentrum der gewählten Stadt aufgestellt sind.  
    Beispiel: _de-fra-wg-001_
1. **Erweiterte Einstellungen**  
  - Multihop  
    Wird Multihop aktiviert, verbindet sich der Wireguard-Tunnel über einen weiteren, ausgewählten Server mit Zielserver. _In den meisten Fällen ist die Auswahl eines weiteren Servers nicht notwendig, insbesondere dann nicht, wenn die VPN-Verbindung hauptsächlich zur Verschlüsselung das Datenverkehrs dient[^vpnDatenverkehr].
  - Serverbindungsprotokoll  
    dasda
  - Tunnel-Datenverkehr  
    dasdasdas
  - Eigener Port  
    dasdas
  - Killswitch aktivieren (nur Linux) 
1. **Inhaltssperre konfigurieren**  

Durch Drücken auf den Knopf "Datei herunterladen" landet die Konfigurationsdatei im Ordner "Downloads". Damit sind die auf der Konfigurationsseite notwendigen Schritte abgeschlossen.

## Einrichten der Wireguard iOS-App



Wichtig: Nach einem Neustart des Telefons muss die App gestartet werden und das VPN aktiviert werden.

## Ein Wort der Warnung

VPN-Verbindungen können abreißen. VPN-Verbindungen können auch auf Seiten des Wifi-Betreibers unterbunden werden. Selbst mit den in diesem Artikel beschrieben Maßnahmen und Vorgehensweisen lässt sich keine permamente Verbindung _garantieren_. Sollten Personen die Notwendigkeit der absoluten Sicherheit haben, stellt sich die Frage, ob ein iPhone die richtige Wahl ist. Desktop-Software hält die Verbindung erfahrungsgemäß um einiges stabiler und es gibt die Möglichkeit, einen Killswitch, also einen sofortigen Abbruch der Netzwerkaktivität zuverlässiger abzubilden.

[^captivePortal]: Electronic Frontier Foundation, _How Captive Portals interfere with Wireless Security and Privacy_, 2017, [https://www.eff.org/de/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy](https://www.eff.org/de/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy)
[^wireshark]: Richard Sharpe, Ed Warnicke, Ulf Laming, _Wireshark User's Guide - Chapter 4: Capturing Live Network Data_, [https://www.wireshark.org/docs/wsug_html_chunked/ChapterCapture.html](https://www.wireshark.org/docs/wsug_html_chunked/ChapterCapture.html)
[^notchPhones]: Alle iPhones bis zum heutigen Zeitpunkt veröffentlichen Geräte ab dem iPhone X, exklusive iPhone SE und SE2
[^vpnDatenverkehr]: In diesem Fall ist es eine Überlegung wert, bei vorhandenem KnowHow und entsprechender Hardware, sich die Kosten eines Mullvad VPNs sparen zu können, indem eine Verbindung zum Heimnetz aufgebaut wird.