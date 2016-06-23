# dag 2
Ik heb mijn project definitie afgerond en ben mijn dataset aan het afronden.
In de README.md staat beschreven welke visuele onderdelen er op mijn pagina komen.
Vanmiddag maak ik een begin aan mijn DESIGN document. Daarvoor moet ik
nog wel wat extra sketches maken.

Ik heb al een d3 map van Europa in mijn pagina gemaakt om mee te beginnen.
Morgen ga ik de advanced sketches maken voor in het design document en de mark-up
maken voor mijn scatterplot.

# dag 3
Vandaag heb ik mijn dataset voor de temperaturen afgemaakt en in de juiste format
geplaatst. Ik liep tegen het probleem aan dat er geen data was over de gemiddelde
temperaturen in Europa. Hierdoor had ik alles met de hand uit moeten uitzoeken
tussen duizenden data sheets van weerstations in Europa. In plaats hiervan kon ik
op https://weatherspark.com/ data van vrijwel alle landen krijgen in de jaren die
ik nodig heb. Deze moest ik nog steeds van een grafiek overnemen naar een excel.

Ik heb ook de advanced sketches in mijn design document geplaatst en nog wat
aangepast aan de libraries die ik zal gebruiken. Later deze week zal er nog
een diagram bij komen waarin mijn datastructuren zullen staan.

# dag 4
Ik heb vandaag mijn volledige dataset af. Ik ben begonnen aan het maken van mijn
kaar van Europa. Ik liep hier tegen wat problemen aan m.b.t het updaten van de
gegevens. Na overleg met Sascha heb ik besloten om 3 aparte bestanden te maken
voor iedere map aangezien ik de kleurverdeling niet variabel kon maken met mijn data.

De 3 documenten van de 3 kaarten zijn klaar en doen het ook. Ik moet nu alleen
zorgen dat de kaart update wanneer er op de knop wordt gedrukt i.p.v steeds een
nieuwe kaart maken.

De kleuren zijn:
emission: geel-groen tot aan donkerder groen voor de "greenhouse gasses".
life: licht roze tot donker roze voor roze, "kleur van leven".
Temperature: tinten van geel, oranje en rood zoals ook op weerkaarten gebruikt wordt.

# dag 5
Op de presentatie kreeg ik goede feedback op mijn kleurgebruik en op de manier waarop
ik de kaart presenteer. Tevens was er ook wat discussie over de accuraatheid van
mijn data aangezien deze alleen over de hoofdsteden gaat. En de temperatuur in
Moskou is wel wat anders dan dat ik die van Siberië zou hebben. Daarom is het beter
als ik ook nog een disclaimer op de pagina om duidelijk te maken dat deze data alleen
de hoofdsteden representeerd als het gaat om temperatuur en niet het hele land.

Verder heb ik vrijdag de kaart zo gemaakt dat deze veranderd wanneer er op de knop voor
een andere dataset wordt gedrukt. In een verder statium zal ik nog wel de functie
die daar achter zit moeten aanpaasen zodat ik geen dubbele stukken code nodig heb.
Maar dat is iets voor als ik alle drie de onderdelen heb.

# weekend 1
kleine aanpassingen gedaan in de css en wat dingen uitgezocht voor de lijngrafiek en
over de json die daar bij moet worden gemaakt.

# dag 6
Eerste stappen gezet om de lijngrafiek in beeld te krijgen. Wanneer er op de kaart een
land wordt geselecteerd verschijnt er een lijngrafiek die de Co2 en de temperatuur/levensverwachting
data laat zien van dat land. Dit is dan verdeeld over het tijdvak van 1980 tot 2010.

Er is een lijngrafiek te zien, alleen wordt de lijn nog niet juist getekend. Ik heb
een test json file staan met de data van slechts 2 landen er in om te testen of deze
opbouw goed werkt voor wat ik wil bereiken.

# dag 7
De lijngrafiek doet het! Er wordth een grafiek getekend van de ingegeven data uit de
test json. De json moet nu nog worden uitgebreid en van de grafiek moet ik een
functie maken die variabel met de data uit de json kan werken. Daarna kan ik in de
al gemaakt onlick funtie van de kaart de juiste info meegeven aan de functie van de grafiek.

Ik heb ook een begin gemaakt met de comparison functie waar een gebruiker 2 landen
invoert die hij met elkaar kan vergelijken. Ook heb ik een bootstrap thema toegevoegd.
Hiermee is het navigeren op de pagina beter en overzichtelijker.

#dag 8
Veel problemen gehad met het maken van de compare functie. Jsons moeten veranderen
zodat de data voor verschillende grafieken kon worden geladen. Om de een of andere
reden kwamen mn barcharts nog steeds niet in beeld. Wel heb ik vast de kaarten aangepast
in andere kleuren adhv de feedback die ik kreeg bij de vorige presentatie.

# dag 9
Vandaag eindelijk de compare functie werkend gekregen. De landen kunnen in upper
en lowercase worden ingegeven. Daarna wordt er met die 2 landen een barchart gemaakt.
Deze wordt ook aangepast als de landen worden gewisseld.

# dag 10
In de compare functie moet nog worden aangepast hoe de barcharts worden geupdate.
Momenteel wordt of alles verwijderd of geen van allen. Bij de presentatie kreeg ik
goede feedback op mn visualisatie. Voor de invoervelden ga ik dropdowns maken met een
zoekbalk er in zodat de user niet constant de volledige landnaam moet zoeken.

#weekend 2
Kleine aanpassingen gemaakt aan de update functie en de css.

# dag 11
Implementeren van de scatterplot en het maken van de labels aan en titels aan de barcharts.

# dag 12
Heb ruzie met het maken van de scatterplot, om de een of andere reden append de plot niet.
wanneer ik een andere functie op de zelfde div gebruik werkt het wel....

# dag 13
Scatterplot is in beeld! Met nog steeds een bug er in, de plot komt alleen in beeld
wanneer ik deze aanroep vanaf de compare functie(wanneer ik de compare knop indruk).
Roep ik de functie ergens anders aan of on load dan komt er niets in beeld..
Nu zorgen dat de dataset juist wordt doorgegeven.

update: scatterplot werkt! er kan gekozen worden tussen de verschillende jaren, en
of er gekozen wordt tussen temperatuur of levensverwachting. Wel moet ik nog zorgen
dat dots die en datapunt missen niet worden getoond. Ook hebben de barcharts hun
tooltips.

# dag 14
alle onderdelen van de scatterplot werken, de onlcick op de map geeft aan hoe welk
land je hebt geselecteerd van de scatterplot. Ook is er een reset knop om alle dots
weer zichtbaar te maken. Barchart titels staan er in en de wordt correct vernieuwd.

# dag 15
kleine aanpassingen voor testen van de scatterplot functies voor de presentatie.

# weekend 3

# dag 16
input velden van de compare pagina vervangen voor dropdowns. Barcharts krijgen nu
ook een code mee om de kleur van de 3 verschillende barcharts te veranderen. knoppen
staan nu in het midden van de pagina met een korte titel er boven.

css files staan nu in een aparte map om zo het overzicht tussen alle soorten files
te bewaren. ook zijn de files nu uit elkaar gehaald om de grote bende die main.css was
op te ruimen.

Ook de map pagina is nu gecentreerd alleen wilt de datamaps legend daar niet aan
mee doen... proberen dat morgen te fixen samen met de hoverinfo bug van de
scatterplot. daarna nummers afronden en wat text schrijven.

# dag 17
De dots van de scatterplot verdwijnen wanneer er een datapunt mist. hierdoor
zijn er geen dots meer die tegen de y as aan plakken omdat er een punt mist.

# dag 18
Selectors opgemaakt zodat ze beter bij de rest van de opmaak passen.
De discailmer, index en kleine titels geschreven. Navbar moet nog over de hele
breedte van de pagina komen.

# dag 19
Laatste aanpassing gemaakt aan de scatterplot om console errors te voorkomen.
Index text is nu af en de er wordt nu een error naar de user gegeven ipv in de console.

Maken van het verslag, de license en nog wat kleine veranderingen.
