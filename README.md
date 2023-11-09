# Softwarequalität

Material zum Modul Softwarequalität

## Praktikum 2

Im zweiten Praktikumstermin geht es um das Thema Softwarequalität aus Entwicklersicht. 

- Wie misst man Softwarequalität in der Praxis?<br> 
  Darum geht es in der [Gruppenübung zum Thema Softwarequalität](Exercises/Gruppenübung_Qualität.md).
- Testen von Anfang an: Test-Driven-Development<br>
  Dazu bearbeiten Sie die [Übungsaufgabe zu TDD](Exercises/TDD_BMI/).


## Praktikum 3

Um das Thema Qualität im Softwareentwicklungsprozess zu verankern, ist es wichtig, während der Entwicklung eines Softwareprodukts 
*regelmäßig* und *kontinuierlich* zu testen.
Mittels *[Continuous Integration (CI)](https://de.wikipedia.org/wiki/Kontinuierliche_Integration)* wird dazu die Software regelmäßig gebaut und getestet.

Gute Praxis ist es, dass dies bei der Verwendung einer Versionsverwaltung wie GitHub oder GitLab bei jedem *pull request* auf den *main branch* automatisch geschieht. Im Falle eines Fehlers in den Tests wird der *merge* eines *pull request* abgebrochen.
Dadurch wird gewährleistet, dass der *main branch* stets eine (laut den Tests) funktionierende Version des Softwareproduktsliefert.



