// Menukaarten LOOF 2025, overgenomen uit de kaarten op restaurantloof.nl (lunch, diner, borrel, wijn).
// Per gerecht: [naam, bestemming, omschrijving, prijs, vega]
window.LOOF_MENU = {
  lunch: {
    note: 'Lunch wordt geserveerd van 12.00 tot en met 17.00 uur.',
    groups: [
      { t: 'Broodjes', s: 'Keuze uit: baguette wit of meergranen', items: [
        ['Johnny Jordaan', 'Amsterdam', 'Old Amsterdam, sla, tomaat, komkommer en mosterdmayo', '9.75', 1],
        ['La Caprese', 'Campania', 'Buffelmozzarella, trostomaat, rucola en basilicum pesto', '11.00', 1],
        ['Thanksgiving', 'Amerika', 'Gerookte kalkoen, pikante saus, zoetzure paprika reepjes en taugé', '11.00'],
        ['Top of the Rock', 'Cork', 'Gerookte Ierse zalm, dille, rode ui, kappertjes, slasoorten en Irish Whisky-saus', '12.50'],
        ['Bunschoten', 'Spakenburg', 'Tonijnsalade (huisgemaakt), mesclunsla, zwarte olijf', '12.50'],
        ['La Classico', 'Venezia', 'Runderhaascarpaccio, truffelmayonaise, parmigiano, rucola en pijnboompitten', '13.50']
      ]},
      { t: 'Tosti’s', items: [
        ['Tosti Casino Royale', 'London', 'Kaastosti van Casino brood en ketchup', '7.50', 1],
        ['Tostada Mexicana', 'Guadalajara', 'Wrap tosti met een vulling van guacamole, paprika, mais en Parmezaanse kaas', '11.00', 1],
        ['Croque Napoleon', 'Paris', 'Franse petit baguette-tosti met Bokkesprong geitenkaas, truffel, walnoten, tijm, bloemenhoning en een gebakken ei erop geserveerd', '13.00', 1],
        ['Tost el Turco', 'Kayseri', 'Turkse brood, Turkse Erciyes runderworst en jong belegen kaas, tomaat, sumak en peterselie', '10.50']
      ]},
      { t: 'Salades', s: 'Geserveerd met brood', items: [
        ['Taboulee Healthy', 'Beyrut', 'Libanese bulgursalade gevuld met tomaat, lente ui, paprika, peterselie, munt, olijfolie en citroen', '12.50', 1],
        ['Chevre Chaud', 'Provence', 'Gemengde salade met trostomaatjes, rode ui en olijven met daarboven warm gegratineerde geitenkaas op toast met walnoten, honing en tijm', '13.50', 1],
        ['Vitello Tonato', 'Piemonte', 'Dungesneden kalfsmuis besmeerd met dikke tonijnmayonaise en een slamix', '13.00'],
        ['Classico', 'Venezia', 'Dungesneden runderhaas carpaccio, truffelmayonaise, parmigiano, rucola en pijnboompitten', '14.00'],
        ['Albacore', 'Pacific', 'Gemengde salade met daarboven huisgemaakte tonijnsalade in combinatie met gemarineerde verse Albacore tonijn en zeekraal', '13.75']
      ]},
      { t: 'Specials', items: [
        ['Kadayif geitenkaas wafel', 'Antakya', 'Engelenhaar-wafel gevuld met geitenkaas en honing, gedroogde tomaatjes, pistache en kruidige salade', '14.00', 1],
        ['‘Sashimi plate’', 'Hong Kong', 'Tonijn-zalm sashimi, garnaal in tempura, rettich-wortelsalade, zeewier in sesamdressing, wasabi, sojasaus en krokante cassave', '15.50'],
        ['Karides', 'Mediterranee', 'Gambastoof uit de oven met shiitake, zongedroogde tomaat, rode ui, knoflook en dille (geserveerd met brood)', '14.50'],
        ['Oyster', 'Yrseke', 'Half dozijn oesters met daarbij een vinegraitte van frambozenazijn en sjalot', '18.00']
      ]},
      { t: 'Soepen', s: 'Geserveerd met brood', items: [
        ['Tomatensoep', 'Lissabon', 'Portugese tomatencrème-soep met rundergehaktknikkers, piri piri, oregano, knoflook, lente ui en peterselie (vegetarisch ook mogelijk)', '9.00'],
        ['Kreeftensoep', 'Frankrijk', 'Een romige en luxueuze soep, bereid met verse kreeft, zachte room en een verfijnde mix van kruiden', '13.50']
      ]},
      { t: 'Warme lunch', items: [
        ['2x Van Dobben kroketten', 'Utrecht bij de Dom!', 'Rundvleeskroketten met boerenbrood en mosterd', '12.50'],
        ['Uitsmijter', 'Barneveld', 'Uitsmijter van 3 scharreleieren bedekt met gesmolten kaas op wit- of bruinbrood (extra optie: kalkoen-ham 2.00 euro)', '12.50'],
        ['Omelet', 'Barneveld', 'Omelet bereid met champignons, spinazie en cherrytomaten geserveerd met brood', '12.50', 1],
        ['Tagliatelle al funghi', 'Umbria', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano', '20.00', 1],
        ['Tagliatelle al funghi', 'Umbria (zalm)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano met zalmstukjes', '24.50'],
        ['Tagliatelle al funghi', 'Umbria (garnalen)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano met garnalen', '24.50'],
        ['Tagliatelle al funghi', 'Umbria (kip)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème van Hollandaise saus, champignons, broccoli, ui, paprika en parmigiano met kip', '23.50'],
        ['LOOF ‘Falafel burger’', 'Loran', 'Falafelburger, hummus, gegrilde paprika, kropsla, en frieten', '15.00', 1],
        ['LOOF ‘Köfte burger’', 'Inegöl', 'Rundvlees köfteburger, cheddar kaas, rode ui, tomaat, kropsla, Jalapeño en frieten', '17.50'],
        ['Pastramă somon', 'București', 'Zalmfilet geroosterd in Roemeense pastrami kruiden, saus van lente ui en mascarpone', '25.00'],
        ['Black Angus a la Bordelaise', 'Bordeaux', 'Op de Green Egg gegrilde Black Angus entrecote met een saus van bordeauxwijn, gekarameliseerde rode ui en rozemarijn', '30.00']
      ]},
      { t: 'Gebak', items: [
        ['Appelgebak', 'Rotterdam', 'Heerlijke appelgebak warm geserveerd met slagroom', '5.50'],
        ['Carrot cake', 'Engeland', 'Wortel taart', '6.00']
      ]},
      { t: 'Nagerechten', items: [
        ['Monte Scroppino', 'Venezia', 'IJskoude spoom uit Venetië bereid met wodka, prosecco en limoensorbetijs', '9.50'],
        ['Cheesecake', 'San Sebastiaan', 'Een romige cheesecake', '9.75'],
        ['Marbre', 'Lyon', 'Straciatella ijstaart gelaagd met kruidkoek en een churro met een dip', '11.00'],
        ['Creme brulee - Amaretto', 'Catalonie', 'Crème brûlée geparfumeerd met vanille en Amaretto', '11.50'],
        ['Chocolade mousse', 'Antwerpen', 'Luchtige mousse van pure chocolade op spekkoek met gekonfijte mango', '11.50'],
        ['Baklava', 'Antep', 'Baklava geserveerd met pistache-ijs en slagroom', '12.00'],
        ['Cheese-fromage-kaas', 'Internationaal', 'Selectie van vijf verschillende kaassoorten, geserveerd met notenbrood en appelstroop', '16.50']
      ]}
    ]
  },
  diner: {
    note: 'Diner wordt geserveerd van 17.00 tot en met 22.00 uur.',
    groups: [
      { t: 'Voorgerechten', items: [
        ['Vitello Tonato', 'Piemonte', 'Dungesneden kalfsmuis besmeerd met dikke tonijnmayonaise en shiitake', '13.00'],
        ['Classico', 'Venezia', 'Dungesneden runderhaas carpaccio, truffelmayonaise, parmigiano, rucola, pijnboompitten en zongedroogde tomaat', '14.00'],
        ['Samurai', 'Osaka', 'Met dille gemarineerde zwaardviscarpaccio, rivierkreeftjes en zeekraal', '13.00'],
        ['天ぷら Tempura', 'Tokyo', 'Albacore tonijn met gemarineerde gamba’s, paprika, haringkaviaar, couscous op een avocadopuree en groene mosterdmayonaise', '14.00'],
        ['Burrata', 'Puglia', 'Buffelburrata op een bodem van rode bieten, verse vijgen, geroosterde amandelen en een balsamico honingdressing', '13.50', 1],
        ['Reuze gamba’s', 'Ballina', 'Reuze gamba’s in een krokant jasje van kadayif, geserveerd op een bodem van hummus en tomatensalsa', '14.00'],
        ['Coquilles', 'Schotland', 'Coquilles afgebakken in zwarte truffelolie op een laagje van erwtenpuree, geserveerd met artisjok, knapperige toast en hollandaisesaus', '14.50'],
        ['Kadayif geitenkaas wafel', 'Antakya', 'Engelenhaar-wafel gevuld met geitenkaas en honing, zongedroogde tomaten, pistache en kruidige salade', '14.00', 1],
        ['Karides', 'Mediterranee', 'Gambastoof uit de oven met champignons, tomaat, rode ui, knoflook en dille', '14.50'],
        ['‘Sashimi plate’', 'Hong Kong', 'Tonijn-zalm sashimi, garnaal in tempura, rettich-wortelsalade, zeewier in sesamdressing, wasabi, sojasaus en krokante cassave', '15.50'],
        ['Oyster', 'Yrseke', 'Half dozijn oesters met daarbij een vinaigrette van frambozenazijn en sjalot', '18.00']
      ]},
      { t: 'Soepen', items: [
        ['Tomatensoep', 'Lissabon', 'Portugese tomatencrème-soep met rundergehaktknikkers, piri piri, oregano, knoflook, lente ui en peterselie (vegetarisch mogelijk)', '9.00'],
        ['Kreeftensoep', 'Frankrijk', 'Romige en luxueuze soep, bereid met verse kreeft, zachte room en een verfijnde mix van kruiden', '13.50']
      ]},
      { t: 'Hoofdgerechten', s: 'Gegarneerd met groenten', items: [
        ['Portobello', 'Porto', 'Reuze champignon gevuld met wilde spinazie gegratineerd met geitenkaas, tomatensaus en pompoenpitten (vegetarisch)', '21.50', 1],
        ['Tagliatelle al funghi', 'Umbria (vegetarisch)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano', '20.00', 1],
        ['Tagliatelle al funghi', 'Umbria (zalm)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano met zalmstukjes', '24.50'],
        ['Tagliatelle al funghi', 'Umbria (garnalen)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème met zwarte truffel ‘Umbrië’, paddenstoelen, spinazie en parmigiano met garnalen', '24.50'],
        ['Tagliatelle al funghi', 'Umbria (kip)', 'Tagliatelle pasta uit de regio Emilia-Romagna, in crème van Hollandaise saus, champignons, broccoli, ui, paprika en parmigiano met kip', '23.50'],
        ['Pastramă somon', 'București', 'Zalmfilet geroosterd in Roemeense pastrami kruiden met een saus van lente ui en mascarpone', '25.00'],
        ['Zeebaars', 'Benelux', 'Gebakken zeebaarsfilet met een saus van Noilly Prat', '24.50'],
        ['Roodbaars', 'IJsland', 'Gegrilde roodbaars met een smaakvolle dille-citroen saus', '23.50'],
        ['Canard a l’orange', 'France', 'Tamme eendenborst op zijn vet uitgebakken met een saus van sinaasappel en Cointreau', '26.00'],
        ['Kwartet van vis', 'Atlantic', 'Combinatie van zeebaars, roodbaars, zalm en een gekruide gamba', '29.50'],
        ['Black Angus a la Bordelaise', 'Bordeaux', 'Op de Green Egg gegrilde Black Angus entrecote met een saus van bordeauxwijn, gekarameliseerde rode ui en rozemarijn', '30.00'],
        ['Lamsrack', 'Texel', 'Op de Green Egg gegrilde lamsrack met tijm/rozemarijnmarinade en paddenstoelen', '32.00'],
        ['Bife de lomo Argentina (ossenhaas)', 'Buenos Aires', 'Op de Green Egg gegrilde tournedos van ossenhaas op Argentijnse wijze met een fris-pikante saus van vleesjus, tabasco, limoen en gedroogde munt', '34.00']
      ]},
      { t: 'Bijgerechten', items: [
        ['Patattekes', 'Vlaanderen', 'Vlaamse frieten en mayonaise', '5.50'],
        ['Roseval aardappels uit de oven', 'Louisiana', 'Roseval aardappeltjes uit de oven en op smaak gebracht met cajunkruiden en aioli', '5.50'],
        ['Frisse seizoenssalade', '', 'Klein gesneden en verfrissende seizoen salade', '5.50'],
        ['Groenten', '', 'Een mix van knapperige groenten', '5.50'],
        ['Warm brood', '', 'Geserveerd met olijventapenade, olijven en aioli', '5.50']
      ]},
      { t: 'Nagerechten', items: [
        ['Monte Scroppino', 'Venezia', 'IJskoude spoom uit Venetië bereid met wodka, prosecco en limoensorbetijs', '9.50'],
        ['Cheesecake', 'San Sebastiaan', 'Romige cheesecake, die perfect balans biedt tussen rijkdom en zoetheid', '9.75'],
        ['Marbre', 'Lyon', 'Straciatella ijstaart gelaagd met kruidkoek en een churro met pistachedip', '11.00'],
        ['Creme brulee - Amaretto', 'Catalonie', 'Crème brûlée geparfumeerd met vanille en Amaretto', '11.50'],
        ['Chocolade mousse', 'Antwerpen', 'Luchtige mousse van pure chocolade op spekkoek met gekonfijte mango', '11.50'],
        ['Baklava', 'Antep', 'Baklava geserveerd met pistache-ijs en slagroom', '12.00'],
        ['Kaasplankje', 'Internationaal', 'Selectie van vijf verschillende kaassoorten, geserveerd met notenbrood en appelstroop', '16.50']
      ]}
    ]
  },
  borrel: {
    note: 'Lekker borrelen op het Domplein, binnen of op het terras.',
    groups: [
      { t: 'Borrelhappen', items: [
        ['Mandje', '', 'Turkse pide brood geserveerd met olijven en tapenade', '5.50'],
        ['Bakje', '', 'Olijven zwart en groen gemarineerd in Midden-Oosten specerijen', '5.00'],
        ['Kaasie', '', 'Blokjes van jong belegen met mosterd', '5.00'],
        ['Nacho’s', '', 'Warm uit de oven met avocado dip', '9.00']
      ]},
      { t: 'Uit de frituur', items: [
        ['Patattekes', '', 'Vlaamse frieten en mayonaise', '5.50'],
        ['Bitterballen', '', 'Van Dobben bitterballen met mosterd, 6 stuks', '6.00'],
        ['Loempiaatjes', '', 'Groenten vulling met chilisaus, 6 stuks', '6.00'],
        ['Kaas', '', 'In krokant jasje met chili saus, 6 stuks', '6.00'],
        ['Kip', '', 'Nuggets met bijpassend saus, 6 stuks', '6.00'],
        ['Gamba', '', 'Dim sum met ponzudressing, 6 stuks', '6.00'],
        ['Bitter mix', '', 'Bittergarnituur combinatie van 12 of 18 stuks', '11.50 - 17.00']
      ]}
    ]
  },
  wijn: {
    note: 'Prijzen per fles, en per glas waar vermeld.',
    wine: true,
    groups: [
      { t: 'Mousserend', items: [
        ['Terre dei Buth, Prosecco Frizzante', 'Italië', 'Verfrissende witte wijn uit Noord-Italië. Met een elegante, zachte mousse. Mooi, fris en fruitig van smaak', '37,50', '7,00'],
        ['De Pró, Cava', 'Spanje', 'Krachtig mousserende wijn. Met een verfijnd aroma van rijp fruit en toast. De droge smaak heeft een stevige mousse en een lekker fris aanhoudende finale', '37,50', '7,00'],
        ['De Sousa & Fils, Champagne Brut Tradition', 'Frankrijk', 'Delicaat geurende Champagne die van biologisch verbouwde druiven wordt gemaakt. Lekker droog van smaak met een krachtige mousse en heerlijk frisse finale', '75,00']
      ]},
      { t: 'Wit', items: [
        ['Domaine des Cassagnoles, Sauvignon Blanc', 'Frankrijk', 'Uitbundig geurende Sauvignon Blanc uit de Gascogne. Met een fruitige, sappige smaak die mooi droog en fris is', '32,50', '6,00'],
        ['Cave de Pomerols, Le Jade Chardonnay', 'Frankrijk', 'Aangenaam geurende Chardonnay. Met veel rijp fruit en groene appeltjes in de neus. Lekker vol, rond en mollig van smaak. Met een geurige afdronk die lang blijft hangen', '32,50', '6,00'],
        ['Castelo de Medina, Rueda Verdejo', 'Spanje', 'Geurige Spaanse Verdejo die een sterk fruitig en bloemig aroma heeft. De fruitige, sappige smaak heeft een verkwikkende, frisse afdronk', '37,50', '6,50'],
        ['Azienda Agricola Marco Cecchini, D’Orsaria Pinot Grigio', 'Italië', 'Verleidelijk geurende Pinot Grigio met een aangenaam aroma van rijp fruit, zoals appels en peren. De geurige smaak is mooi droog en heerlijk fris; heeft een fijne mineraliteit en veel rijp fruit. De plezierige afdronk blijft lang hangen', '37,50', '6,50'],
        ['De Morgenzon, DMZ Chardonnay', 'Zuid-Afrika', 'Lichtgeel van kleur en met rijp geel fruit en wat toast in het aantrekkelijke aroma. De volle, ronde en geurige smaak heeft een sappige finale die lang blijft hangen', '42,50'],
        ['Michel Gassier, Viognier', 'Frankrijk', 'Verrukkelijke Viognier gemaakt van biologisch geteelde druiven. Uitbundig geurend, mooi vol, droog en fris van smaak', '47,50'],
        ['Weingut Huber, Grüner Veltliner Obere Steigen', 'Oostenrijk', 'Typische Grüner Veltliner met een stuivend aroma van rijp wit fruit. Mooi droog en fris van smaak, met een fijne mineraliteit en een geurig aanhoudende afdronk', '52,50'],
        ['Sébastien Dampt, Chablis', 'Frankrijk', 'Klassieker uit de Bourgogne-streek die verfijnd geurt naar groene appeltjes en een vleugje boter. De smaak is mooi vol en fris, bevat veel fruit, fijne mineralen en eindigt in een lange afdronk', '59,50'],
        ['Villota, Rioja Blanco', 'Spanje', 'Krachtige witte Rioja met een intens en complex aroma. De smaak is stevig en krachtig. Met voldoende frisheid en een welhaast eindeloos lange afdronk', '69,50']
      ]},
      { t: 'Rosé', items: [
        ['Monte del Fra, Bardolino Chiaretto', 'Italië', 'Verfrissende rosé uit Noord-Italië. Verleidelijk geurend naar verse rode vruchten. Lekker sappig en fruitig van smaak', '32,50', '6,50'],
        ['Domaine de Rimauresq, Côtes de Provence Cru Classé Rosé', 'Frankrijk', 'Licht gekleurde, gastronomische rosé uit de Provence met een pittig fruitige aroma en een volle, droge smaak', '42,50']
      ]},
      { t: 'Rood', items: [
        ['Abbots & Delauny, Merlot', 'Frankrijk', 'Donkerrood gekleurde Merlot met veel geuren van rijp rood fruit in de neus. De smaak is mooi vol, soepel en rond. De zijdezachte afdronk blijft lang en prettig hangen', '32,50', '6,00'],
        ['Cantine Due Palme, Salente Primitivo Doncosimo', 'Italië', 'Verleidelijk geurend, met aroma’s van rijp en overrijp fruit. Heerlijk vol en sappig van smaak. Aangenaam kruidig en met een lekker lang aanhoudende finale', '37,50', '6,50'],
        ['La Cour des Dames, Malbec', 'Frankrijk', 'Geurige Malbec met veel rijp fruit in de neus. Lekker stevig en krachtig van smaak. Met een plezierige afdronk die lang blijft hangen', '37,50', '6,50'],
        ['Domaine de Gournier, Mas Bres Pinot Noir', 'Frankrijk', 'Pure Pinot Noir die barst van het fruit. De geurige, elegante smaak is mooi sappig en rond. De aangename afdronk blijft prettig hangen', '42,50'],
        ['Cantina Tollo, Montepulciano d’Abruzzo Riserva', 'Italië', 'Stoere Italiaanse rode wijn met veel geuren van rijp zwart fruit en eikenhout in de neus. Lekker stevig en krachtig van smaak. De pittige afdronk blijft lang hangen', '47,50'],
        ['Domaine de l’Arjolle, Equinoxe Cabernet Syrah', 'Frankrijk', 'Smeuïge rode wijn met in zijn rijke aroma veel geuren van rijp rood en zwart fruit, subtiel eikenhout, koffie en cacao. De heerlijk zachte smaak is mooi vol, soepel en rond', '53,50'],
        ['Vivanco, Rioja Reserva', 'Spanje', 'Prachtige Rioja Reserva. Aangenaam geurend naar rijp zwart fruit en fraai gedoseerd eikenhout. Lekker stevig en krachtig van smaak. Mooi droog, mondvullend, sappig, geurig, rijk en weelderig. Met een lange finale waarin een fraaie, zijdezachte tannine is versmolten', '59,50'],
        ['Domaine Besson, Givry 1er Cru Les Gautiers', 'Frankrijk', 'Fraai geurend naar rijp fruit, rode rozen en een vleugje eikenhout. Heerlijk vol en sappig van smaak. Met veel structuur en een frisse afdronk', '72,50']
      ]},
      { t: 'Dessertwijn', items: [
        ['Chateau Gravas, Sauternes', 'Frankrijk', 'Een diep goudgeel gekleurde wijn met weelderig aroma van rijp geel fruit en gedroogde abrikozen. De rijke, volle en elegante smaak heeft tonen van honing en abrikozen in zich en eindigt met een lang aanhoudende afdronk', '', '7,00'],
        ['Bodegas Alvear, PX1927', 'Spanje', 'Dikke stroperige wijn, intens geurend naar gekonfijt fruit. De volzoete smaak is geurend en heeft voldoende frisheid in het complex aanhoudende afdronk', '', '7,00']
      ]}
    ]
  }
};
