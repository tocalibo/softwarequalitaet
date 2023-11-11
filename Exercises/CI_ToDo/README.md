# Praktikumsaufgabe - Continuous Integration zur Verbesserung von Softwarequalität

## Aufgabe

In dieser Praktikumsaufgabe befassen Sie sich mit dem Thema Continuous Integration (CI) im Kontext von Softwarequalität. Die Basis hierfür bildet eine einfache 'ToDo'-Anwendung, die auf GitHub unter folgendem Link bereitsteht: https://github.com/fhswf/todo.

Ihre Aufgabe besteht darin, eine GitHub-Action zu erstellen, die automatisierte Tests und eine Qualitätsprüfung mit SonarQube durchführt. 
**Bitte bearbeiten Sie die Aufgabe in Gruppen à 2–3 Personen!**

### Vorbereitung

1. **Clonen des Repositories**: Legen Sie (**als Gruppe!**) einen Clone des [Repositories https://github.com/fhswf/todo](https://github.com/fhswf/todo) an. 
   Die Übung des Umgang mit GitHub in einem Entwicklerteam ist eines der Ziele der Aufgabe. 
   > **Achtung**: Änderungen am Code sollten Sie **nicht** auf dem *main branch* vornehmen. Legen Sie für Ihre individuellen Aufgaben *feature branches* an und erstellen Sie jeweils *pull requests*!

1. **Verstehen Sie die Anwendung**: Die Anwendung beruht auf der Beispielanwendung im letzten Semester. Machen Sie sich mit dem Code vertraut und verstehen Sie, wie die Anwendung funktioniert. 
   Bevor Sie mit der Aufgabe fortfahren, sollte Ihnen klar sein, was die Anwendung tut und wie sie das tut. 
   <br>Finden Sie bereits einen Fehler? Falls ja, **beheben Sie ihn jetzt noch nicht**!

### Aufgabenschritte

1. **Erstellen Sie automatisierte Tests**: Der nächste Schritt ist die Erstellung automatisierter Tests. Hierfür sollten Sie zunächst Tests für wichtige Funktionen der Anwendung erstellen und diese lokal ausführen. Gewährleisten Sie dabei eine gute Testabdeckung und achten Sie auf unterschiedliche Testarten (Unit-Tests für das Backend, End2End-Tests für die gesamte Anwendung).
<br>Erstellen Sie unter anderem auch einen Testfall für die Aktualisierung des Status eines ToDos über den Status-Button. Dieser sollte fehlschlagen.

3. **Einrichten einer GitHub-Action**: Nun sollen Sie eine GitHub-Action erstellen. In dieser soll automatisch bei jedem Push oder Pull Request auf das Repository der erstellte Test-Suite durchgeführt werden. 

4. **Integration von SonarQube**: Neben den Tests wollen wir auch eine statische Code-Analyse durchführen. Verwenden Sie hierzu die SonarQube-Instanz [hopper.fh-swf.de/sonarqube](https://hopper.fh-swf.de/sonarqube). 
   Dort können Sie sich mit Ihrem GitHub-Account anmelden und ein Projekt anlegen.
   Passen Sie die GitHub-Action so an, dass nach den Tests automatisch SonarQube gestartet wird und den Code analysiert.<br>
   > **Tipp**: Dafür gibt es fertige Actions. Schauen Sie gerne [github.com/fhswf/book_me](https://github.com/fhswf/book_me) nach, wie man sie verwendet.

   > **HINWEIS**: Sie benötigen im Workflow folgende zusätzliche Einstellung 

   ```yaml
       env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Needed to get PR information
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }} # Generate a token on SonarQube, add it to the secrets of this repo with the name SONAR_TOKEN (Settings > Secrets > Actions > add new repository secret)
          SONAR_HOST_URL: ${{ vars.SONAR_HOST_URL }}
          SONAR_ROOT_CERT: ${{ vars.SONAR_ROOT_CERT }}
   ```
   
   und eine entsprechende Variable `SONAR_ROOT_CERT` im Repository:
   ```
   -----BEGIN CERTIFICATE-----
   MIIG5TCCBM2gAwIBAgIRANpDvROb0li7TdYcrMTz2+AwDQYJKoZIhvcNAQEMBQAw
   gYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpOZXcgSmVyc2V5MRQwEgYDVQQHEwtK
   ZXJzZXkgQ2l0eTEeMBwGA1UEChMVVGhlIFVTRVJUUlVTVCBOZXR3b3JrMS4wLAYD
   VQQDEyVVU0VSVHJ1c3QgUlNBIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MB4XDTIw
   MDIxODAwMDAwMFoXDTMzMDUwMTIzNTk1OVowRDELMAkGA1UEBhMCTkwxGTAXBgNV
   BAoTEEdFQU5UIFZlcmVuaWdpbmcxGjAYBgNVBAMTEUdFQU5UIE9WIFJTQSBDQSA0
   MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApYhi1aEiPsg9ZKRMAw9Q
   r8Mthsr6R20VSfFeh7TgwtLQi6RSRLOh4or4EMG/1th8lijv7xnBMVZkTysFiPmT
   PiLOfvz+QwO1NwjvgY+Jrs7fSoVA/TQkXzcxu4Tl3WHi+qJmKLJVu/JOuHud6mOp
   LWkIbhODSzOxANJ24IGPx9h4OXDyy6/342eE6UPXCtJ8AzeumTG6Dfv5KVx24lCF
   TGUzHUB+j+g0lSKg/Sf1OzgCajJV9enmZ/84ydh48wPp6vbWf1H0O3Rd3LhpMSVn
   TqFTLKZSbQeLcx/l9DOKZfBCC9ghWxsgTqW9gQ7v3T3aIfSaVC9rnwVxO0VjmDdP
   FNbdoxnh0zYwf45nV1QQgpRwZJ93yWedhp4ch1a6Ajwqs+wv4mZzmBSjovtV0mKw
   d+CQbSToalEUP4QeJq4Udz5WNmNMI4OYP6cgrnlJ50aa0DZPlJqrKQPGL69KQQz1
   2WgxvhCuVU70y6ZWAPopBa1ykbsttpLxADZre5cH573lIuLHdjx7NjpYIXRx2+QJ
   URnX2qx37eZIxYXz8ggM+wXH6RDbU3V2o5DP67hXPHSAbA+p0orjAocpk2osxHKo
   NSE3LCjNx8WVdxnXvuQ28tKdaK69knfm3bB7xpdfsNNTPH9ElcjscWZxpeZ5Iij8
   lyrCG1z0vSWtSBsgSnUyG/sCAwEAAaOCAYswggGHMB8GA1UdIwQYMBaAFFN5v1qq
   K0rPVIDh2JvAnfKyA2bLMB0GA1UdDgQWBBRvHTVJEGwy+lmgnryK6B+VvnF6DDAO
   BgNVHQ8BAf8EBAMCAYYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHSUEFjAUBggr
   BgEFBQcDAQYIKwYBBQUHAwIwOAYDVR0gBDEwLzAtBgRVHSAAMCUwIwYIKwYBBQUH
   AgEWF2h0dHBzOi8vc2VjdGlnby5jb20vQ1BTMFAGA1UdHwRJMEcwRaBDoEGGP2h0
   dHA6Ly9jcmwudXNlcnRydXN0LmNvbS9VU0VSVHJ1c3RSU0FDZXJ0aWZpY2F0aW9u
   QXV0aG9yaXR5LmNybDB2BggrBgEFBQcBAQRqMGgwPwYIKwYBBQUHMAKGM2h0dHA6
   Ly9jcnQudXNlcnRydXN0LmNvbS9VU0VSVHJ1c3RSU0FBZGRUcnVzdENBLmNydDAl
   BggrBgEFBQcwAYYZaHR0cDovL29jc3AudXNlcnRydXN0LmNvbTANBgkqhkiG9w0B
   AQwFAAOCAgEAUtlC3e0xj/1BMfPhdQhUXeLjb0xp8UE28kzWE5xDzGKbfGgnrT2R
   lw5gLIx+/cNVrad//+MrpTppMlxq59AsXYZW3xRasrvkjGfNR3vt/1RAl8iI31lG
   hIg6dfIX5N4esLkrQeN8HiyHKH6khm4966IkVVtnxz5CgUPqEYn4eQ+4eeESrWBh
   AqXaiv7HRvpsdwLYekAhnrlGpioZ/CJIT2PTTxf+GHM6cuUnNqdUzfvrQgA8kt1/
   ASXx2od/M+c8nlJqrGz29lrJveJOSEMX0c/ts02WhsfMhkYa6XujUZLmvR1Eq08r
   48/EZ4l+t5L4wt0DV8VaPbsEBF1EOFpz/YS2H6mSwcFaNJbnYqqJHIvm3PLJHkFm
   EoLXRVrQXdCT+3wgBfgU6heCV5CYBz/YkrdWES7tiiT8sVUDqXmVlTsbiRNiyLs2
   bmEWWFUl76jViIJog5fongEqN3jLIGTG/mXrJT1UyymIcobnIGrbwwRVz/mpFQo0
   vBYIi1k2ThVh0Dx88BbF9YiP84dd8Fkn5wbE6FxXYJ287qfRTgmhePecPc73Yrzt
   apdRcsKVGkOpaTIJP/l+lAHRLZxk/dUtyN95G++bOSQqnOCpVPabUGl2E/OEyFrp
   Ipwgu2L/WJclvd6g+ZA/iWkLSMcpnFb+uX6QBqvD6+RNxul1FaB5iHY=
   -----END CERTIFICATE-----
   ```

5. **Auswertung der Ergebnisse**: Schauen Sie sich die Ergebnisse der Tests und die SonarQube-Berichte an. Falls es Fehler gibt, sollten Sie diese jetzt beheben und den Prozess erneut durchführen.

6. **Dokumentation**: Im letzten Schritt sollen Sie Ihre Arbeit dokumentieren. Tragen Sie dazu in der Datei `BERICHT.md` die Namen Ihrer Teammitglieder ein. 
Präsentieren Sie in dieser Datei
-  Ihre Vorgehensweise, 
- die gewählten Lösungen, 
- alle Probleme, die Sie hatten und wie Sie diese gelöst haben, erklären und 
- die Ergebnisse der automatisierten Tests und SonarQube-Analysen.

### Abgabe

Zur Abgabe erstellen Sie bitte einen Pull-Request im [Original-Repository https://github.com/fhswf/todo](https://github.com/fhswf/todo).

### Lernziele

- Kenntnisse in der Verwendung von GitHub und GitHub Actions
- Vertiefen Ihrer Kenntnisse in der Erstellung automatisierter Tests
- Kenntnisse in der Verwendung von SonarQube zur Durchführung von Code-Qualitätsprüfungen
- Fähigkeit, Probleme zu identifizieren und Lösungen zu implementieren
- Fähigkeit, Ihre Arbeit in Form eines Berichts zu dokumentieren

### Bewertung

Die Bewertung Ihrer Arbeit basiert auf
- der Vollständigkeit und Funktionalität Ihrer GitHub-Action,
- der Qualität und Abdeckung Ihrer Tests,
- der korrekten Einbindung und Nutzung von SonarQube,
- der Qualität Ihrer Dokumentation,
- Ihrem Umgang mit auftretenden Problemen und Ihrer Fähigkeit, diese zu lösen.
