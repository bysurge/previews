/* Kaarten van Valentino (tekst en prijzen uit hun PDF-kaarten, versie 03.2026) */
const fmt = s => String(s).replace(/\d+\.\d+/g, n => Number(n).toFixed(2).replace('.', ','));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const L = s => s.trim().split('\n').map(l => l.split('|').map(x => x.trim()));

/* regel: naam | omschrijving | prijs (of: grande / piccolo) */
const li = ([n, d, p]) => `<li><div class="r-top"><span class="r-n">${esc(n)}</span><span class="r-dots" aria-hidden="true"></span><span class="r-p">${esc(fmt(p || ''))}</span></div>${d ? `<p class="r-d">${esc(d)}</p>` : ''}</li>`;
const blok = (t, note, rows, head) => `<section class="kb"><h3>${esc(t)}</h3>${note ? `<p class="kb-n">${esc(note)}</p>` : ''}${head ? `<p class="kb-h"><span>grande</span><span>piccolo</span></p>` : ''}<ul>${L(rows).map(li).join('')}</ul></section>`;

const PIZZA_TRAD = `Margherita|tomaat, mozzarella en basilicum|12.75
Cipolle|tomaat, mozzarella en rode ui|14.00
Funghi|tomaat, mozzarella en champignons|16.00
Tonno|tomaat, mozzarella, tonijn, paprika, olijven en kappertjes|17.50
Salami|tomaat, mozzarella en salami|16.50
Prosciutto Cotto|tomaat, mozzarella, gekookte ham en champignons|16.50
Primavera|tomaat, mozzarella, Prosciutto Crudo, rucola en Parmezaan|17.75
Quattro Stagioni|tomaat, mozzarella, artisjok, gekookte ham, champignons en paprika|17.50
Napoletana|tomaat, mozzarella, kappertjes, ansjovis en oregano|15.50
Capricciosa|tomaat, mozzarella, gekookte ham, champignons, artisjok en olijven|16.75
Boscaiola|tomaat, mozzarella, gekruid gehakt, knoflook en paddenstoelen|18.75`;
const PIZZA_EXTRA = `'Valentino'|tomaat, mozzarella, Prosciutto Crudo, rucola, burrata en aceto|20.75
Frutti di Mare|tomaat, mozzarella, zeevruchten en garnalen|20.75
'Nduja Calabrese|tomaat, buffelmozzarella, gedroogde tomaatjes en 'nduja (pittig)|18.50
Quattro Formaggi|tomaat en 4 soorten kaas|20.75
Pollo Affumicata|tomaat, mozzarella, gerookte kippendijen en aceto|20.00
Capra e Miele|tomaat, mozzarella, geitenkaas, vijgen, walnoten en honing|18.50
Calzone|tomaat, mozzarella, ham, salami, uien, paprika en gekruid gehakt (dubbelgevouwen pizza)|20.00
Salame ventricina picante|tomaat, mozzarella, pikante salami, gekruid gehakt en pepertjes|19.50
Stagionale|wisselende pizza van het seizoen. Vraag ernaar bij de bediening|20.50`;
const PIZZA_BIANCO = `Pesto e Burrata|witte pizzasaus van Tallegio, pesto, pijnboompitjes, cherrytomaatjes en burrata|20.50
Tartufo e Kinara|witte pizzasaus van Tallegio, champignon, rucola, rode ui en schaafsel van Kinara|21.50
Mortadella e Aceto|witte pizzasaus van Tallegio, mortadella, rucola en aceto|21.50
Salmone affumicato|witte pizzasaus van Tallegio, huis gerookte zalm, rode ui en basilicum|22.50`;
const PASTA = `Spaghetti AOP|met knoflook, rode peper en olijfolie|12.50 / 9.00
Spaghetti Bolognese|met gehaktsaus|17.50 / 14.50
Spaghetti Carbonara|pancetta, ei en Parmigiano Reggiano|17.50 / 14.50
Spaghetti Carbonara Tartufo|pancetta, ei, Parmigiano Reggiano en truffeltapenade|19.50 / 16.50
Spaghetti Puttanesca|tomaat, ansjovis, kappertjes en olijven|15.50 / 12.50
Spaghetti Puttanesca met extra gerookte kippendijen||17.50 / 14.50
Rigatoni con la 'Nduja Calabrese|tomaat, pittige 'nduja en gehakt|20.50 / 17.50
Rigatoni alla Genovese|basilicum, pijnboompitten en Parmigiano Reggiano|16.50 / 13.50
Rigatoni all'Amatriciana|pancetta, Grana Padano en tomaat|17.50 / 14.50
Rigatoni Burrata|tomatensaus, Parmigiano Reggiano, burrata, pistache en basilicumolie|21.50 / 18.50
Tagliatelle all'Arrabbiata|pittige tomatensaus met pepertjes|15.50 / 12.50
Tagliatelle Polpette|gehaktballetjes in tomatensaus|17.50 / 14.50
Tagliatelle Gamberi|grote garnalen, knoflook en peper|22.50 / 19.50
Cappellacci e Zucca|pasta gevuld met pompoen, ricotta, Grana Padano, biscotti amaretto, tomatensaus, room en basilicum|20.50 / 16.50`;
const PASTA_LUNCH = PASTA.split('\n').filter(l => !/^(Spaghetti Carbonara Tartufo|Rigatoni con|Rigatoni Burrata|Tagliatelle all|Cappellacci)/.test(l)).join('\n');
const RISOTTO = `Risotto Pollo Affumicata|riso carnaroli met gerookte kippendijen|19.50 / 15.50
Risotto Funghi|riso carnaroli met paddestoelen|18.50 / 14.50
Risotto Frutti di Mare|riso carnaroli met zeevruchten|20.50 / 16.50`;
const SOEP_SALADE = `Zuppa di Pomodoro|traditionele Italiaanse tomatensoep met basilicum|8.00 / 7.00
Zuppa del Giorno|wisselende soep van de dag|8.00 / 7.00
Insalata Cesare|romeinse sla, kippendijen, Caesar-dressing, ei en ansjovis|17.50 / 14.50
Insalata Mare e Nostrum|salade met gerookte zalm, tonijnsalade, gamba, kappertjes en zongedroogde tomaat|19.50 / 16.50
Insalata Quattro Formaggi|salade met 4 soorten kaas, vijgen en walnoten|19.50 / 16.50`;
const MEENEEM = `<p class="kaart-noot">Gewenst om de pasta, risotto of pizza mee te nemen? Dit is geen probleem! Wij vragen een kleine vergoeding van € 1,00 voor de verpakkingsmaterialen.</p>`;
const pdf = (h) => `<p class="pdf">Origineel: <a href="https://www.valentino-someren.nl/_files/ugd/4e13c7_${h}.pdf" target="_blank" rel="noopener">de kaart als PDF</a> (versie 03.2026)</p>`;

const PANELEN = {};

PANELEN['p-diner'] = `
<div class="kaart-intro"><p>Dineren bij Valentino gaat om genieten naar eigen ingeving. Met inspiratie uit de klassiek Italiaanse keuken hebben wij ons menu samengesteld. Lekkere eerlijke gerechten om uit te kiezen. Dinerkaart (mangiare) van 17:00 tot 22:00.</p></div>
<div class="kaart-grid">
<section class="kb kb-shared"><h3>Condividere insieme</h3><p class="kb-n">3-gangen shared dining, vanaf 2 personen en per gehele tafel te bestellen.</p>
<ul class="kb-lijst"><li>Antipasti Valentino</li><li>Pizza of pasta naar keuze, om te delen</li><li>Dolce Sorpresa</li></ul>
<p class="shared-p"><span>Ma, di, do</span><b>36,50 p.p.</b></p><p class="shared-p"><span>Vr, za, zo</span><b>39,50 p.p.</b></p></section>
${blok('Antipasti', 'Voorgerechten', `Carpaccio 'Valentino'|rucola, Parmezaan, truffelmayo en pijnboompitten|15.75
Vitello tonnato|kalfsrosbief met een crème van tonijn en ansjovis|16.75
Tonno e gamberi|gegrilde tonijn en scampi, salade van gepickelde venkel, kappertjes en olijven|17.75
Crostini salmone affumicato|crostini met huis gerookte zalm, venkel, ricotta en citroen|16.75
Fico e pomodoro pistacchio|burrata, verse vijg, cherrytomaatjes, pistache, dressing van honing en balsamico|16.50
Antipasti 'Valentino'|selectie van verschillende voorgerechtjes van vlees, vis en kazen (minimaal 2 personen). Genieten op zijn Italiaans!|17.50 p.p.`)}
${blok('Minestra e insalate', 'Soepen en salades', SOEP_SALADE + `
Pane e Burro|broodplankje met boter en aioli|7.00 / 5.00`, true)}
${blok('Secondi', 'Hoofdgerechten', `Melanzane Parmigiana|aubergine met gegrilde groente, bimi, saus van tomaat en Parmigiano Reggiano|24.50
Pesce del giorno|vis van het moment met bijpassend garnituur en saus|28.50
Tonno alla griglia|tonijn van de grill, gremolata en cherrytomaat|30.50
Porchetta arrosto|geroosterd buikspek met saus van mosterd en aceto-uitjes|25.50
Pollo parmigiano|pannetje met kippendijen, saus van tomaat, Parmigiano Reggiano en pangrattato (broodkruim)|25.50
Tagliata di manzo|rundersteak met rucola, Parmezaan en aceto balsamico|30.50
Bistecca 'Valentino'|rundersteak met truffelrisotto en saus van eekhoorntjesbrood|30.50
Grigliata mista di carne|grillplatter to share met 3 soorten vlees (± 300 gram p.p.), uienringen, een warme saus (maffiaboter) en aioli (vanaf 2 personen)|33.50 p.p.`)}
${blok('Contorni', 'Bijgerechten. Hoeveelheid voor 2 personen en alleen te bestellen als toevoeging van het hoofdgerecht.', `Patate e Rosmarino|ovenaardappeltjes met rozemarijn, knoflook en zeezout|4.50
SAOP|spaghetti met knoflook, rode peper en olijfolie|4.50
Patate Fritti|friet met mayonaise|4.50
Patate Fritti Tartufo|friet met truffelmayonaise en Parmezaan|5.50
Verdure al Forno|groenten uit de oven|4.50
Insalata Misto|groene gemengde salade|4.50
Insalata RPA|salade van rucola, Parmezaan en aceto balsamico|5.50
Due Contorni|combinatie rozemarijn-aardappeltjes en ovengroenten|6.50`)}
${blok('Pasta', '', PASTA, true)}
${blok('Risotto', '', RISOTTO, true)}
${blok('Pizze traditionale', '', PIZZA_TRAD)}
${blok('Pizze extravaganza', '', PIZZA_EXTRA)}
${blok('Pizze bianco', '', PIZZA_BIANCO)}
${blok('Dolce e formaggi', 'Nagerechten en kazen', `Quattro Formaggi|4 Italiaanse kazen met vijgenbrood en vijgencompote|14.50
Tiramisu|mascarpone, lange vingers, espresso en amaretto|8.00
Cannoli Negroni|cannoli met ricotta, mascarpone, sinaasappel, Negroni, chocoladecrumble en witte chocolade-ijs|11.00
Semifreddo al Maracuja|parfait van citroen, witte chocolade, passievruchtganache en crumble|11.00
Sgroppino|verfrissend ijsdrankje met limoncello, prosecco en sorbetijs|9.00
Dolce Valentino Sorpresa|verrassende zoetigheden om samen te delen (vanaf 2 personen)|13.50 p.p.
Geen trek in een heel dessert?|koffie of thee naar keuze met één cannoli Negroni (sinaasappel, Negroni en chocoladecrumble)|6.75`)}
</div>${MEENEEM}${pdf('8a8ef3a103ba455396db0c849f939e4e')}`;

PANELEN['p-lunch'] = `
<div class="kaart-intro"><p>Een rijk samengestelde lunchkaart om een middagje onbezorgd te genieten. Met klassiek Italiaanse producten en gerechten kun jij je middag smaakvol invullen. Lunchkaart (pranzo) van 12:00 tot 15:00.</p></div>
<div class="kaart-grid">
${blok('Bruschetta rustica', 'Ambachtelijk brood', `Caprese|tomaat, mozzarella, basilicum en aceto|10.50
Tallegio|romige Noord-Italiaanse kaas|12.50
Tonno|tonijnsalade, olijf, kappertjes en paprika|11.50
Pollo Croccante|krokante kip, rucola en pikante mayonaise|12.50`)}
${blok('Focaccia', 'Italiaans platbrood', `Capra e Miele|rucola, geitenkaas, honing, walnoot en vijg|13.50
Salmone|huis gerookte zalm, ricotta, gepickelde rode ui en zongedroogde tomaat|13.50
Pollo Pesto|gerookte kippendijen, pesto, rucola en aceto|12.50
Prosciutto Cotto|mozzarella en gekookte ham|11.50
Carpaccio (koud)|rucola, Parmezaan, truffelmayo en pijnboompitten|13.50`)}
${blok('Pane calzone', 'Valentino Classico', `Salmone|Romeinse sla, ricotta, huis gerookte zalm, zongedroogde tomaat en gepickelde rode ui|16.50
Prosciutto Crudo|ruw gedroogde ham, burrata, pesto, rucola en zongedroogde tomaat|16.50
Mortadella|mortadella, rucola, truffelmayonaise, Parmigiano Reggiano en aceto|14.50`)}
${blok('Mini soepje', '', `Mini soepje|tomaat of dagsoep, voor bij je broodje|3.50`)}
${blok('Piatto pranzo', 'Italiaanse lunchplankjes. Iedere zondag alle lunchplankjes 13,50.', `Piatto Italiana Pesce|kopje soep, bruschetta tonijn, focaccia zalm en viskroketje|16.00
Piatto Italiana Carne|kopje soep, bruschetta Prosciutto Crudo, focaccia mortadella en vleeskroketje|15.00
Piatto Italiana Vegetariana|kopje soep, bruschetta tomaat, focaccia Tallegio en arancini (risottoballetje)|14.00`)}
${blok('Buttafuori e omelette', 'Eiergerechten', `Uovo Prosciutto Cotto|gebakken eieren met gekookte ham|12.50
Uovo Pomodoro e Cipolle|omelet met tomaat, ui en Parmezaan|12.50`)}
${blok('Minestra e insalate', 'Soepen en salades', SOEP_SALADE.replace('traditionele Italiaanse tomatensoep met basilicum', 'tomatensoep met basilicum en brood') + `
Pane e Burro|breekbrood, 2 stuks, met boter|3.00`, true)}
${blok('To share', '', `Olive Marinate|schaaltje gemarineerde olijfjes|4.50
Bruschetta pomodoro|tomaat, knoflook en basilicum (2 st.)|7.50
Prosciutto Crudo|plankje met dun gesneden ruw gedroogde ham|7.50
Strisce di Pollo|krokante kipreepjes met pikante dipper (8 st.)|8.50
Arancini|gefrituurde risottoballetjes gevuld met mozzarella (6 st.)|7.50
Patate Fritti|friet met mayonaise|4.50
Patate Fritti Tartufo|friet met Parmezaan en truffelmayonaise|5.50
Pane e Burro|breekbrood met boter en aioli (6 st. of 4 st.)|7.00 / 5.00`)}
${blok('Pasta', '', PASTA_LUNCH, true)}
${blok('Pizze traditionale', '', PIZZA_TRAD)}
${blok('Pizze extravaganza', '', PIZZA_EXTRA)}
${blok('Pizze bianco', '', PIZZA_BIANCO)}
${blok('Dolce', 'Nagerechten', `Tiramisu|mascarpone, lange vingers, espresso en amaretto|8.00
Cannoli Negroni|cannoli met ricotta, mascarpone, sinaasappel, Negroni, chocoladecrumble en witte chocolade-ijs|11.00
Sgroppino|verfrissend ijsdrankje met limoncello, prosecco en sorbetijs|9.00
Affogato|een bol vanille-ijs met een shot espresso|5.75
Geen trek in een heel dessert?|koffie of thee naar keuze met één cannoli Negroni (sinaasappel, Negroni en chocoladecrumble)|6.75`)}
</div>${MEENEEM}${pdf('ace953f1bf78439fafa8b2239bc8f410')}`;

PANELEN['p-borrel'] = `
<div class="kaart-intro"><p>Maak kennis met de heerlijk Italiaanse cicchetti. Hapjes om heerlijk te delen met elkaar! Stel zelf je borrelplank samen, gepaard met een lekker drankje. Bourgondisch genieten! Als aperitief of voor tijdens de borrel.</p><p><b>Cicchetti tussen 15:00 en 17:00 uur en tussen 20:00 en 21:30 uur.</b> Italiaanse hapjes, uitstekend bij een aperitief voorafgaand aan de maaltijd. (V) is vegetarisch.</p></div>
<div class="kaart-grid">
${blok('Hapjes tot 21:00 uur', '', `Bruschetta Pomodoro (V)|tomaat, knoflook, basilicum (2 st.)|7.50
Bruschetta Prosciutto Crudo|Prosciutto crudo, mozzarella, rucola (2 st.)|9.50
Bruschetta Tonno|tartaar van tonijn, kappertjes, olijven (2 st.)|9.50
Bruschetta Diverso|tonijn, ham, salami, tomaat (4 st.)|16.00
Polpette|gehaktballetjes in pittige tomatensalsa (6 st.)|8.50
Gamberi Piccante|pikante garnalen in chilolie, knoflook (8 st.)|10.00
Formaggio (V)|Italiaanse kazen, brood, vijgencompote|13.50
Focaccia al Forno (V)|pizzabrood uit de oven met aioli|11.50
Piatto Aperitivo Italiana|borrelplank met verschillende warme en koude Italiaanse borrelhapjes (vanaf 2 personen)|16.50 p.p.`)}
${blok('Hapjes tot 21:30 uur', '', `Portie gemarineerde olijfjes (V)||4.50
Pane e Burro (V)|Italiaans brood met smeersel|5.00 / 7.00
Calamari Fritto|gefrituurde inktvis, citroen, aioli (8 st.)|7.50
Arancini (V)|gefrituurde risotto gevuld met mozzarella (6 st.)|7.50
Strisce di Pollo|krokante kipreepjes met pikante dipper (8 st.)|8.50
Elite Snacks (niet tegen Nona zeggen)|portie gemengde bittergarnituur (8 st.)|9.50
Prosciutto Crudo|Prosciutto crudo met brood en aioli|15.50
Prosciutto e Burrata|burrata met Prosciutto crudo en brood|16.50`)}
</div>${pdf('a7c4c1820f1c47c9815046e443a38b37').replace('de kaart als PDF', 'de drankenkaart met borrelkaart als PDF')}`;

PANELEN['p-drank'] = `
<div class="kaart-grid">
${blok('Frisdrank', '', `Pepsi Cola / Zero||3.25
Sisi / 7 Up / Cassis||3.25
Ice tea / Green||3.50
Tonic / Bitter lemon||3.50
Ginger ale / Ginger beer||3.50
Rivella||3.50
Chocomel / Fristi||3.50
Appelsap||3.75
Flesje Ranja||3.00
Mineraalwater plat of bruis (250 ml)|Aqua Panna / San Pellegrino|3.50
Mineraalwater plat of bruis (750 ml)|Aqua Panna / San Pellegrino|8.50`)}
${blok('Warme dranken', 'Alle koffievarianten kunnen in decafé (+ 0.60). Lactosevrije melk (+ 0.60).', `Koffie||3.25
Espresso||3.25
Dubbele espresso||4.25
Cappuccino||3.85
Latte macchiato|ook met white chocolate, karamel of tiramisu (+ 0.75) en slagroom (+ 0.75)|4.75
Koffie verkeerd||4.75
Chai latte||4.95
Dirty chai latte||5.25
Irish coffee / French coffee||8.75
Italian coffee / Spanish coffee||8.75
Caffè Valentino|met likeur naar keuze|8.75
Warme chocomel||3.75
Warme chocomel met slagroom||4.50
Thee||3.25
Verse muntthee of gemberthee||4.00`)}
<section class="kb"><h3>Zin in gebak?</h3><p class="kb-n">Vraag het personeel naar ons assortiment!</p></section>
${blok('Bier van de tap', '', `Brand pilsener (0,22 / 0,3 / 0,5 l)||3.25 / 4.20 / 7.00
Birra Moretti pilsener (0,25 / 0,5 l)||3.75 / 7.50
Affligem Blond||5.75
Brand seizoensbieren|Dubbelbock, Winterbock, Lentebock, Weizen|5.75
Texels Skuumkoppe (0,3 / 0,5 l)||5.25 / 8.75
Oedipus Mannenliefde||5.75
Texels Tuunwal Tripel||5.95`)}
${blok('Bier op fles', '', `Brand Weizen||4.95
Affligem Tripel||5.95
Affligem Dubbel||5.75
Lagunitas IPA||5.95
Affligem Belgisch Wit||4.95
Mort Subite Kriek||4.95
Oedipus Pais Tropical IPA||5.95
Oedipus Thai Thai||5.95
Duvel||5.75
Rufus Prufus (blond), streekbier||5.75
Rufus 't Ism (tripel), streekbier||5.95`)}
${blok('Alcoholvrije bieren', '', `Amstel Radler 0.0%||3.75
Birra Moretti Zero||3.75
Brand IPA 0.0%||5.95
Brand Weizen 0.0%||4.95
Affligem Blond 0.0%||5.50
Texels Skuumkoppe 0.0%||5.25`)}
${blok('Cocktails, classics', 'Friday night cocktail night: iedere vrijdagavond alle cocktails 10,00.', `Espresso Martini|wodka, Frangelico, koffielikeur, sucre de canne, dubbele espresso|12.50
Pornstar Martini|vanillevodka, passievruchtsap, limoensap, prosecco|12.50
Amaretto Sour|amaretto, limoensap, sucre de canne, foamee, citroenwiel|10.50
Whiskey Sour|bourbon, limoensap, sucre de canne, foamee, citroenwiel|10.50
43 Sour|Licor 43, limoensap, sucre de canne, foamee, sinaasappel|10.50
Moscow Mule|wodka, ginger beer, aromatic bitters, limoenschijf|10.50
The Clover Club|framboos, gin, limoensap|10.50
The Botanist|wodka, limoensap, rose lemonade, limoenwiel|10.50
Mojito|rum, sucre de canne, munt, limoen|10.50
Dark 'n Stormy|spiced rum, ginger beer, aromatic bitters, limoenwiel|11.50
Sex on the Beach|vanillevodka, jus d'orange, Peachtree, grenadine|10.50`)}
${blok('Gin en tonic', '', `Hendrick's Gin||12.50
Malfy Originale||13.00
Bobby's||12.50
Gordon's Pink Gin||13.50`)}
${blok('Cocktail spritz', '', `Aperol Spritz|Aperol, San Pellegrino, prosecco, sinaasappelwiel|9.75
Limoncello Spritz|limoncello, prosecco, citroenwiel, munt|9.75
Specialynno (ginger beer spritz)|limoncello, ginger beer, prosecco, sinaasappel, gember|9.75
Vanille Spritz|Licor 43, rosé prosecco, bitter lemon, sinaasappel|10.75
Bellini Spritz|perzikstroop, prosecco, schijf sinaasappel|9.75`)}
${blok('Alcoholvrij', '', `Limonata|vlierbessenbloesemsiroop, Rivella, citroenwiel en munt|6.75
Rose Lemonade|rose lemonade, vanillesiroop, limoen|7.00
Nona&Tonic|Nona June, Fever-Tree Indian tonic, citroenwiel|7.25
Mimosa|Nona June, Fever-Tree Indian tonic, sinaasappelsap, sinaasappelschijf|7.75
Mojito|sucre de canne, munt, limoen|7.75
Spiced Mule|groene appel, limoen, basilicum, jalapeño, chili|8.75
Passion Mojito|passievrucht, limoen, munt|8.75
Pornstar Martini|passievruchtsap, limoensap|10.50`)}
<section class="kb kb-shared"><h3>Cocktailboom</h3><p class="kb-n">Gezellig tafelen met een groter gezelschap! Bestel de Valentino Cocktailboom. Keuze uit 8 of 12 cocktails.</p>
<p class="shared-p"><span>8 cocktails</span><b>79,50</b></p><p class="shared-p"><span>12 cocktails</span><b>119,50</b></p></section>
</div>${pdf('a7c4c1820f1c47c9815046e443a38b37').replace('de kaart als PDF', 'de drankenkaart als PDF')}`;

PANELEN['p-wijn'] = `
<div class="kaart-intro"><p>Met onze wijnkaart maken we een wijnreis door Italië. Met de diverse 'open' wijnen bij Valentino Someren past er altijd wel een bij jouw gerecht. Voor bij de borrel hebben we heerlijke gangbare wijnen die voor zichzelf spreken. De echte klassiekers proberen? Op onze wijnkaart staan de beste wijnen uit Italië. Proef de inheemse smaken samen met onze heerlijke hapjes.</p></div>
<div class="kaart-grid">
${blok('Witte wijnen', 'Per glas', `Decanal Chardonnay|fris en fruitig aroma, elegant en zuiver van smaak|5.75
Gregoris Pinot Grigio|verfijnd aroma waarin iets van hooi en tonen van geroosterde amandelen, soepele en heerlijke elegante smaak|6.75
Valerio 'Viabore'|kruidig en bloemig aroma, hinten van appel, een zuurtje in de afdronk|6.50
Verdicchio 'Albiano'|frisse zuren en levendig, rijk met iets venkel en rijp wit fruit van appels|6.95
Chardonnay 'Naumakos'|elegant en fruitig aroma met iets van banaan, ananas en vanille met een zachte houttoon; de smaak is rond, bescheiden met hint van vanille en licht citrusfruit in de afdronk|8.50`)}
${blok('Zoete witte wijn', 'Per glas', `Muschiato Moscato Dolce|lichte frisse zoete wijn, impressies van verse muskaatdruiven in de geur en smaak, afdronk met tonen van abrikoos, perzik en bloemen|6.25`)}
${blok('Rosé wijn', 'Per glas', `Bardolino Chiaretto Classico (rosé)|elegante neus, waarin rood fruit en viooltjes; zachte zoete inzet, sappig rood fruit, heerlijk rond, dorstlessend|6.50`)}
${blok('Mousserende wijnen', 'Per glas', `Prosecco Lunetta|in de neus groene appel, limoen, bloesem; zachte inzet, goede mousse, zacht droog, frisse smaak, mooie balans met een schone afdronk|6.75
Rosemari Spumante|delicaat aroma waarin gist en rood fruit; levendig, rond, zuiver en heerlijk fris met impressies van framboos, gist en romigheid|7.50`)}
${blok('Rode open wijnen', 'Per glas', `Decanal Merlot|in het aroma en smaak sappig rood fruit, zacht en een aangename frisheid|5.75
Appassimento 'Marosso'|aroma van gestoofde pruimen en rijp fruit; een ronde inzet, veel fruit met een klein zoetje|7.75
Montepulciano d'Abruzzo Becco Reale|robijnrode, intense kleur, geur met zwarte bessen, viooltjes en zoethout; rijke, volle smaak, waarin heerlijk donker fruit, zachte tannines, vanille en een hint van cacao|8.00
Chianti Colli Fiorentini 'Il Castelvecchio'|tikje specerijen in het aroma; intense smaak waarin tonen van rood fruit en zwarte bes|9.00`)}
</div>${pdf('a7c4c1820f1c47c9815046e443a38b37').replace('de kaart als PDF', 'de drankenkaart als PDF')}`;

PANELEN['p-afhaal'] = `
<div class="kaart-intro"><p><b>Geef je bestelling telefonisch door via <a href="tel:+31493782789">0493 782 789</a>.</b> Let op: afhalen is op basis van beschikbaarheid. U bent altijd welkom om te informeren naar de mogelijkheden.</p></div>
<div class="kaart-grid">
${blok('Antipasti', 'Voorgerechten', `Carpaccio 'Valentino'|rucola, Parmezaan, truffelmayo en pijnboompitten|15.75
Vitello tonnato|kalfsrosbief met een crème van tonijn en ansjovis|16.75
Antipasti 'Valentino'|selectie van verschillende voorgerechtjes van vlees, vis en kazen (minimaal 2 personen)|17.50 p.p.
Pane e Burro|brood met boter en aioli|7.00`)}
${blok('Insalate', 'Salades', `Insalata Cesare|romeinse sla, kippendijen, Caesar-dressing, ei en ansjovis|17.50
Insalata Mare e Nostrum|salade met gerookte zalm, tonijnsalade, gamba, kappertjes en zongedroogde tomaat|19.50
Insalata Quattro Formaggi|salade met 4 soorten kaas, vijgen en walnoten|19.50`)}
${blok('Bruschetta to share', '', `Bruschetta pomodoro|geroosterd brood, tomaat, knoflook en basilicum (2 st.)|7.50`)}
${blok('Pasta', '', PASTA, true)}
${blok('Risotto', '', RISOTTO, true)}
${blok('Pizze traditionale', 'Traditionele pizza\'s', PIZZA_TRAD)}
${blok('Pizze extravaganza', 'Bijzondere pizza\'s', PIZZA_EXTRA + '\n' + PIZZA_BIANCO)}
</div><p class="pdf">Origineel: <a href="https://www.valentino-someren.nl/_files/ugd/4e13c7_7201ad1090604b32b3bab23db8b93b68.pdf" target="_blank" rel="noopener">de afhaalkaart als PDF</a> (versie 03-2026)</p>`;

Object.keys(PANELEN).forEach(id => { document.getElementById(id).innerHTML = PANELEN[id]; });
