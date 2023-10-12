# Aufgabe: Entwicklung einer Webanwendung für die Berechnung von Body-Mass-Index (BMI)

## Ziel der Übung

Das Ziel dieser Übung ist, das Konzept des **Test-Driven Developments** zu verstehen und anzuwenden. Es ist wichtig, zuerst die Testfälle zu definieren und dann den Code entsprechend zu schreiben. Dies trägt dazu bei, sauberen und fehlerfreien Code zu schreiben.

Deine Aufgabe besteht darin, eine einfache Webanwendung zur Berechnung des Body-Mass-Index (BMI) aufzusetzen. Der Fokus liegt dabei auf dem Test-Driven-Development (TDD)-Ansatz. Die Anwendung soll in Javascript geschrieben sein und die Tests sollen mit Jest erstellt und durchgeführt werden.

## Setup

Nun kannst du folgende Befehle auf deinem Terminal ausführen:

- `npm install`: um alle Abhängigkeiten zu installieren
- `npm start`: um deinen Server zu starten
- `npx cypress install`: um Cypress zu installieren
- `npm test`: um Cypress zu starten und deine Tests auszuführen

Die Übung funktioniert entweder lokal unter Windows oder in einem `dev container` (also z.B. in einem GitHub Codespace)

Viel Spaß beim TDD-Üben!

## Vorgehensweise

### Schritt 1: Testfälle definieren

Definiere zunächst die Testfälle, die in der Anwendung erfüllt sein sollen. Einige Beispiele könnten folgende sein:

- Die Anwendung wird korrekt gerendert
- Wenn die Eingabefelder leer gelassen werden, sollte eine entsprechende Fehlermeldung ausgegeben werden.
- Wenn eine nicht-numerische Eingabe gemacht wird, sollte eine Fehlermeldung ausgegeben werden.
- Die maximale Länge der Eingabe soll auf 3 Zeichen beschränkt sein, um unnatürliche Eingaben zu verhindern
- Die Anwendung sollte korrekt den BMI berechnen und das Ergebnis ausgeben.

### Schritt 2: Testfälle schreiben

Schreibe nun Test für jeden der definierten Fälle. Verwende dafür das Jest-Framework.

### Schritt 3: Implementierung der Anwendung

Implementiere die Anwendung in TypeScript. Der Code sollte den in den Tests definierten Fällen entsprechen.

### Schritt 4: Test und Refactoring

Führe die Jest-Tests aus und überprüfe, ob alle Testfälle korrekt sind. Falls Fehler auftreten, überarbeite den Code entsprechend und führe die Test erneut aus. Wiederhole diesen Schritt, bis alle Tests erfolgreich sind.
