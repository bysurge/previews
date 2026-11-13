/* Menukaart Robuust IJsselstein, overgenomen uit Robuust-menu-2026-web.pdf ("NIEUW!") en
   Robuust-dranken-web.pdf. Item: [naam, omschrijving, prijs, vega(true/false)]; ['h', titel, tekst] = tussenkop. */
window.ROBUUST_MENU = [
  { id: 'lunch', name: 'Lunch', groups: [
    { name: 'Belegde broodjes', items: [
      ['Pulled Chicken', 'Pulled chicken, frisse coleslaw, crispy ui, pickles en een flinke klap BBQ-saus. Sappig, plakkerig en precies zoals het hoort.', '10,50'],
      ['Zalm Benedict', 'Crème fraîche, sla, gerookte zalm, een zacht gepocheerd ei en warme hollandaisesaus.', '15,50'],
      ['Warme Geitenkaas', 'Warme geitenkaas met hot honey, rode ui en komkommer. Met bacon?', '13,00', true],
      ['Carpaccio', 'Flinterdun rund met kappertjes, zongedroogde tomaat, zoetzure rode ui, geroosterde pitten, rucola en Parmezaan. Klassiek.', '13,95'],
      ['Tonijnsalade', 'Romige tonijnsalade met rode ui, komkommer, geroosterde paprika en crispy ui.', '11,50'],
      ['Club Sandwich Robuust', 'Brander mayonaise, kaas, gerookte kipfilet, tomaat, geroosterde paprika, sla, gebakken ei en bacon. Geserveerd met friet. Ook mogelijk als vega.', '14,50'],
      ['Rundvleeskroketten met brood of friet', '', '11,50'],
      ['Garnalenkroketten met brood of friet', '', '13,50'],
      ['Kaaskroketten met brood of friet', '', '12,00', true]
    ]},
    { name: 'Robuust bagels', items: [
      ['Late Breakfast', 'Gebakken ei, bacon, uiennest, gebakken tomaat, sla en romige avocadosmash.', '11,00'],
      ['Gerookte Zalm', 'Crème fraîche, sla en komkommer. Fris. Zacht. Vol.', '12,00'],
      ['Carpaccio Bagel', 'Kappertjes, zongedroogde tomaat, zoetzure rode ui, geroosterde pitten, rucola en Parmezaan.', '9,50'],
      ['Vega Bagel', 'Avocadospread, tomaat, rode ui, gepocheerd eitje.', '8,25', true]
    ]},
    { name: 'Have it all', note: 'Omdat je niet wilt kiezen!', items: [
      ['Classic', 'Carpaccio, tonijnsalade en een rundvleeskroket.', '16,50'],
      ['Fish', 'Gerookte zalm, tonijnsalade en een garnalenkroket.', '19,00'],
      ['Vega', 'Geitenkaas met hot honey, avocadosmash en een kaaskroket.', '16,00', true]
    ]},
    { name: 'Het 12-uurtje', items: [
      ['Het 12-uurtje', 'Halve bagel met zalm en roomkaas of carpaccio, tomatensoep, friet, mini salade en een broodje kroket. Geen keuzes. Gewoon alles.', '16,50']
    ]},
    { name: 'Verse soep', items: [
      ['Kreeftenbisque', "Vol en romig, met gamba's en getoast knoflookbrood.", '14,50'],
      ['Tomatensoep', 'Rijk van smaak, met brood en boter.', '7,95']
    ]},
    { name: 'Robuuste uitsmijters', items: [
      ['Uitsmijter', 'Eieren zoals ze bedoeld zijn: gebakken op vers brood, belegd met kaas, ham, spek of gewoon alles tegelijk. Geen poespas, gewoon goed.', 'vanaf 12,00']
    ]},
    { name: "Tosti's met een twist", items: [
      ['Gamba Tosti', 'Kaas, gamba, tomaat en chimichurri.', '12,75'],
      ['De klassieker', 'Puur kaas, perfect gegrild.', '8,50', true],
      ['Ham kaas', 'Ham en kaas, perfect gegrild.', '10,00'],
      ['Kaas en ui', 'Met uiennest bovenop. Upgrade met bacon.', '10,50', true]
    ]},
    { name: 'Fresh salades', items: [
      ['Crispy Chicken', 'Gemengde salade met frisse dressing, crispy chicken, bacon, zoetzure ui, komkommer en tomaat.', '13,50'],
      ['h', 'Ook mogelijk als salade', 'Carpaccio, tonijn, gerookte zalm of warme geitenkaas.']
    ]},
    { name: 'Loaded pancake', items: [
      ['Loaded pancake', 'Sticky pecan toffee, rood fruit en gebrande marshmallow fluff.', '8,95']
    ]}
  ]},
  { id: 'burgers', name: 'Burgers & fries', groups: [
    { name: 'Burgerlicious', note: 'Op een pretzel bun, tenzij anders vermeld. Onze hamburgers worden rosé gebakken; wil je een andere garing, geef dat even aan.', items: [
      ['Jalapeño Mac Burger', "Burger met stuffed jalapeño's, mac & cheese en hot honey.", '22,50'],
      ['Bacon & Cheese', 'Burger, baconjam, cheddar en ijsbergsla.', '19,50'],
      ['Cheese Burger', 'Burger, cheddar en ijsbergsla. Single, double of triple. Meer is beter.', 'vanaf 18,50'],
      ['Cowboy Burger', 'Burger met uiennest, ranch en ijsbergsla.', '18,50'],
      ['Sweet Sriracha Chicken', 'Kipburger met hot honey, sriracha mayonaise en ijsbergsla.', '16,50'],
      ['Smash Burger', 'Smashburger met gebakken ui en BBQ-saus. Single 13,00, double 18,00, triple 23,00.', 'vanaf 13,00'],
      ['Korean Chicken Burger', 'KFC coleslaw, Korean BBQ-saus, koriander en bosui.', '15,00'],
      ['Truffelburger (op bagel)', 'Burger met baconjam, uiennest, truffelmayonaise en Parmezaan.', '19,50'],
      ['Fried Avocado Burger', 'Avocadoburger met BBQ-saus, ijsbergsla, uiennest en cheddar.', '16,00', true],
      ['h', 'Diner burgers', 'Tijdens het diner zijn onze hamburgers € 5 duurder, omdat ze standaard worden geserveerd met friet en mayonaise.']
    ]},
    { name: 'Loaded fries', note: 'Friet waar je voor blijft zitten!', items: [
      ['Pulled Chicken', 'Friet met pulled chicken en fried pickles.', '11,50'],
      ['Crispy Chicken Parmesan', 'Friet, cheddar, crispy kip, bacon, truffelmayonaise, Parmezaan en rucola.', '14,50'],
      ['Vega', 'Friet met vega saté, pindasaus, gebakken uitjes en seroendeng.', '14,50', true],
      ['Crazy Dog', 'Friet, cheddar, hotdog, sriracha mayonaise en crispy ui.', '14,50']
    ]}
  ]},
  { id: 'starters', name: 'Starters', groups: [
    { name: 'Delicious starters', items: [
      ['Steak Tartaar', 'Klassiek gesneden met sjalot, kappertjes, augurk, ei en mosterd. Met toast. Zoals het hoort.', '14,00'],
      ['Gerookte Zalm Bonbon', 'Gerookte zalm met crème fraîche, kappertjes, rode ui en gepocheerd ei.', '14,50'],
      ['Carpaccio', 'Kappertjes, zongedroogde tomaat, zoetzure rode ui, geroosterde pitten, rucola en Parmezaan.', '14,00'],
      ['Meter-carpaccio om te delen', 'De carpaccio als meter, om samen te delen.', '29,50'],
      ['Hotwings', 'Sticky wings met ranch of Korean glaze. Vies worden mag.', '11,50'],
      ['Brood met huisgemaakte dips', 'Gewoon goed.', '7,50'],
      ['Cheesy bread', 'Een plukbroodje uit de oven overgoten met knoflookolie en kaas.', '7,50', true],
      ["Mini Maistaco's", "Gefrituurde maistaco's met coleslaw, pulled chicken, Korean BBQ-saus, rode peper en koriander.", '7,50'],
      ["Stuffed & Crispy Jalapeño's", 'Met sriracha mayonaise.', '7,50', true]
    ]},
    { name: 'Filled soups', items: [
      ['Kreeftenbisque', "Vol en romig, met gamba's en getoast knoflookbrood.", '14,50'],
      ['Tomatensoep', 'Rijk van smaak, met brood en boter. Simpel. Sterk.', '7,95', true]
    ]}
  ]},
  { id: 'main', name: 'Main', groups: [
    { name: 'Stoer en vol karakter', note: 'Geserveerd met friet, tenzij anders vermeld.', items: [
      ['Chicken Skewer', 'Kippendij gemarineerd in oosterse kruiden en yoghurt, van de grill met yoghurtsaus.', '22,00'],
      ['Steak & Shrimps', 'Steak & shrimps, chimichurri en brood om te dippen.', '33,00'],
      ['Zalm', 'Met avocadosmash, chimichurri en mangorelish. Fris met power.', '25,50'],
      ['Bavette van de Grill', 'Met saus naar keuze en dagverse groenten. Recht van het vuur.', '29,00'],
      ['Kogelbiefstuk', 'Altijd goed gebakken zoals jij hem wilt. Top hem af met saus naar keuze.', '26,50'],
      ['Halve Meter Saté', 'Stok van 50 cm met 250 gram kippendijsaté met pindasaus, crispy ui, seroendeng, kroepoek, atjar en zoetzure komkommer.', '23,50'],
      ['Vega saté', 'Net zo lekker, met pindasaus, seroendeng, knapperige uitjes, cassave, atjar en zoetzure komkommer.', '24,50', true]
    ]},
    { name: 'Food: our favorite F-word', items: [
      ['Spare Ribs', 'Sweet of spicy. Met coleslaw en friet. Valt van het bot. Zoals het moet.', '27,50'],
      ['Kipsalon Robuust', 'Friet met kippendij, kaas, ijsbergsla, komkommer, tomaat, augurk, rode ui en knoflooksaus. Vanaf dag 1 een topper.', '17,00'],
      ['Asian Style Beef Ribfingers', 'Langzaam gegaard in Aziatische marinade. Met seroendeng, crispy ui en rode peper.', '21,50']
    ]},
    { name: 'Fingerlicking sauces', items: [
      ['h', 'Saus naar keuze', 'Champignonsaus, pepersaus of kersenbiersaus.']
    ]}
  ]},
  { id: 'specials', name: 'Specials', groups: [
    { name: 'Good food, good mood', items: [
      ['Crazy deelplank (per 2 personen)', "Bavette, mini chicken skewers, rib, ranch hotwings, stuffed jalapeño's, mac & cheese, friet en coleslaw. Dit is geen plank. Dit is een tafel vol vuur, vlees en alles wat je eigenlijk tegelijk wilt.", '55,00'],
      ['Tomapork', "Van de grill, standaard met kersenbiersaus (wisselen mag), met friet en dagverse groenten. Stevig, sappig vlees met een diepe grillsmaak en het zoete van kers dat 'm perfect afmaakt.", '24,50'],
      ['Pinwheel', 'Bavette gevuld met chorizo en kaas, van de grill, met chimichurri. Vanwege de exclusiviteit slechts beperkt per dag beschikbaar. Medium rare geserveerd; wil je een andere garing, geef dat even aan.', '29,95']
    ]},
    { name: 'Loaded mac & cheese', items: [
      ['Lekker naturel', '', '12,50'],
      ['Burnt Ends', 'Met burnt ends, BBQ-saus en crispy ui.', '17,50'],
      ['Crispy chicken', 'Met crispy chicken, BBQ-saus en crispy ui.', '17,50']
    ]},
    { name: 'Stuffed bun', items: [
      ['Stuffed Bun', 'Pulled chicken, burnt ends en spare rib, afgetopt met kaas en cowboyboter. Uit de oven. Met friet of mac & cheese.', '21,50']
    ]}
  ]},
  { id: 'desserts', name: 'Desserts', groups: [
    { name: "Spoons up, it's dessert time", items: [
      ['Zomer in een Glas', 'Frambozenhangop, brownie, frambozensaus en rood fruit.', '5,95'],
      ['American Apple Pie', 'Sticky toffee pecan saus, vanille-ijs en slagroom.', '8,95'],
      ['Lemon Cheesecake', 'Met lemon swirl, citroenijs en slagroom.', '7,50'],
      ['Wisselende IJscoupe', 'Altijd royaal.', '7,95'],
      ['Wisselende Rocky Road', 'Met vanille-ijs en slagroom.', '7,95'],
      ['Affogato', 'Vanille-ijs met koffie, chocoladesaus, koekkruim en gebrande marshmallow fluff.', '7,95'],
      ['Loaded Pancakes', 'Sticky pecan toffee, rood fruit en gebrande marshmallow fluff.', '8,95'],
      ['Koffie Compleet', 'De perfecte afsluiter. Kies jouw koffie of thee en geniet van drie zoete lekkernijen.', '7,95']
    ]},
    { name: 'Sweets (drankenkaart)', items: [
      ['Appeltaart', 'Rijkelijk gevuld met frisse appels, rozijnen en een vleugje kaneel. Met slagroom 5,00.', '4,50'],
      ['Blueberry cheesecake', '', '6,00'],
      ['Koffie compleet', 'Drie zoete lekkernijen met koffie of thee naar keuze.', '7,50'],
      ['The bomb', 'Brownie, warm geserveerd met slagroom en overgoten met caramel en chocolade.', '7,00'],
      ['New York baked cheesecake (glutenvrij)', 'Romige New York baked cheesecake met een koekbodem van crunchy granola.', '7,00'],
      ['Wafel Oreo', 'Chocoladesaus, Oreo-kruim, slagroom.', '4,50'],
      ['Wafel Caramel', 'Caramelsaus, mini caramelblokjes, slagroom.', '4,50']
    ]}
  ]},
  { id: 'borrel', name: 'Borrelhapjes', groups: [
    { name: 'Fingerfoods', items: [
      ['Borrelplank', 'Goed gevulde borrelplank met verschillende warme en koude hapjes.', '18,75'],
      ['Bittergarnituur', 'Mini nasi, bami, frikandel, kipnuggets, vlammetjes etc. Met mosterd en chilisaus. 8 stuks 6,50, 16 stuks 12,75.', 'vanaf 6,50'],
      ['Vega bittergarnituur (8 stuks)', 'Chili cheese nuggets en uienringen. Met chilisaus.', '7,00', true],
      ['Uienringen (8 stuks)', 'Knapperig gebakken uienringen overgoten met cheddar. Met tomatenchutney.', '6,50'],
      ['Kaastengels (8 stuks)', 'Met chilisaus.', '9,95'],
      ['Bitterballen (8 stuks)', 'De lekkerste! Met mosterd.', '8,00'],
      ['Hotwings (8 stuks)', 'Malse wings in een krokant spicy jasje met smokey BBQ-saus.', '10,00'],
      ['Korean fried chicken (8 stuks)', 'Super mals, goed gekruid en met een heerlijke saus.', '8,50'],
      ["Nacho's kaas", "Nacho's gegratineerd met kaas, met tomatenchutney, guacamole en crème fraîche. Groot / klein: 7,50 / 9,50 (zo op de kaart).", 'vanaf 7,50'],
      ["Loaded nacho's", 'Kaas, pulled chicken, bonen en mais, tomatenchutney, guacamole en crème fraîche. Groot / klein: 11,50 / 13,50 (zo op de kaart).', 'vanaf 11,50'],
      ['Cheesy bread', 'Plukbroodje met knoflookolie en kaas.', '5,00', true],
      ['Crispy torpedo garnalen (6 stuks)', 'Met limoenmayonaise.', '11,00'],
      ['Mini kroketjes', 'Een geitenkaaskroketje, chorizokroketje en een rendangkroketje.', '7,00'],
      ['Shortrib', 'Zo mals, zo lekker! Met smokey BBQ-saus en truffelmayonaise.', '11,50']
    ]}
  ]},
  { id: 'dranken', name: 'Dranken', groups: [
    { name: 'Frisdrank', items: [
      ['Coca-Cola / Zero', '', '3,30'], ['Coca-Cola / Zero large', '', '4,45'], ['Sprite', '', '3,30'], ['Fanta orange / cassis', '', '3,30'],
      ['Fuze tea sparkling / green', '', '3,40'], ['Chaudfontaine blauw / rood', '', '3,30'], ['Chaudfontaine 0,75 blauw / rood', '', '6,90'],
      ['Rivella', '', '3,55'], ['Finley bitter lemon / tonic / ginger ale', '', '3,45'], ['Fever-Tree ginger beer', '', '3,95'], ['Fristi', '', '3,40'], ['Chocomel', '', '3,40']
    ]},
    { name: 'Juices & smoothies', items: [
      ["Jus d'orange", '', '4,10'], ['Schulp appelsap', '', '3,40'], ['Melk', '', '3,00'], ['Smoothie ananas kokos', '', '4,95'],
      ['Smoothie aardbei yoghurt', '', '4,95'], ['Robuust lemonade', '', '4,95'], ['Season lemonade', '', '4,95']
    ]},
    { name: 'Koffie & thee', items: [
      ['Koffie', '', '3,15'], ['Espresso', '', '3,15'], ['Cappuccino', '', '3,40'], ['Latte macchiato', '', '4,10'], ['Koffie verkeerd', '', '3,50'],
      ['Flat white', '', '4,15'], ['Espresso macchiato', '', '3,30'], ['Bradleys thee', '', '3,20'], ['Verse munt- / gemberthee', '', '3,65']
    ]},
    { name: 'Chilled coffee', items: [
      ['Ice coffee', '', '4,75'], ['Caramel fudge coffee', '', '5,90'], ['Chocolat crunch coffee', '', '5,90'], ['Vanilla swirl coffee', '', '5,80']
    ]},
    { name: 'Special coffee', items: [
      ['Irish coffee', 'Jameson', '7,50'], ['Spanish coffee', 'Licor 43', '7,50'], ['French coffee', 'Grand Marnier', '7,50'], ['Italian coffee', 'Disaronno', '7,50']
    ]},
    { name: 'Shake it like a pornstar', note: 'Cocktails', items: [
      ['Pornstar martini', 'Met prosecco on the side.', '12,50'], ['Mojito', '', '9,50'], ['Paloma', '', '10,50'], ['Moscow mule', '', '10,00'],
      ['Sex on the beach', '', '10,50'], ['Blue lagoon', '', '9,00'], ['Espresso martini', '', '12,00']
    ]},
    { name: 'Mocktails to relax', items: [
      ['Virgin Mojito', 'Limoensap, rietsuikersiroop, Spa rood, crushed ice.', '6,00'], ['Gin & tonic 0.0', 'Copperhead 0.0, tonic naar keuze.', '9,50'],
      ['Moscow mule 0.0', 'Limoensap, ginger beer, crushed ice.', '6,00'], ['Virgin Paloma', '', '6,80']
    ]},
    { name: 'Spritz', items: [
      ['Aperol spritz', 'Aperol, cava, Spa rood.', '9,00'], ['Limoncello spritz', 'Limoncello, cava, Spa rood.', '9,50'], ['Amaretto spritz', 'Amaretto, cava, Spa rood.', '9,50']
    ]},
    { name: 'Gin & tonic', items: [
      ["Hendrick's", 'Met Fever-Tree elderflower.', '10,75'], ['Tanqueray', 'Met Fever-Tree raspberry rhubarb.', '10,50'],
      ['Sir Edmond', 'Met Fever-Tree clementine.', '11,75'], ['Copperhead', 'Met Fever-Tree mediterranean.', '11,75']
    ]},
    { name: 'Wijn', note: 'Prijs per glas / per fles.', items: [
      ['h', 'Wit'],
      ['Niersteiner Gutes Domtal', 'Mildzoet, Duitsland. Müller-Thurgau, Silvaner en Kerner; appel, citrus, peer, abrikoos en kweepeer. Perfect bij Aziatische gerechten en milde kazen.', '4,95 / 22,00'],
      ['Pasquiers Sauvignon Blanc / Vermentino', 'Zuid-Frankrijk, 80% Sauvignon Blanc en 20% Vermentino. Fris en levendig, groene appel en meloen.', '5,10 / 25,75'],
      ['Domaine Guenault Sauvignon Blanc', 'Loire, Frankrijk. Steenvruchten, groene appel, mineraliteit.', '6,50 / 27,50'],
      ['Romi & Lola Pinot Grigio', 'Sappige, zachtgele huiswijn uit Noord-Italië; fruit en een amandelbittertje.', '5,00 / 22,25'],
      ['Fugaz Vinho Verde', 'Portugal, 100% Loureiro. Citrus en een knisperend mondgevoel.', '4,95 / 22,00'],
      ['Forte Alto Chardonnay', 'Droog, uit de Dolomieten. Appel, abrikoos, meloen.', '5,10 / 25,75'],
      ['Hoya de Cadenas Oaked Chardonnay', 'Houtgerijpt, Valencia, Spanje. Bloemen, perzik, patisserie.', '7,00 / 32,00'],
      ['h', 'Rosé'],
      ['Villa Lauza Provence Rosé', 'Fris en elegant, Provence. Per fles.', '32,00'],
      ['Rosé Forte Alto, Pinot Grigio', 'Dolomieten. Rode bes, citrus, roze grapefruit.', '5,25 / 22,50'],
      ['h', 'Rood'],
      ['Roccialta Chianti 2021', 'Soepel en fruitig, zachte specerijen.', '5,25 / 22,50'],
      ['GSM Grande Reserve', 'Zuid-Frankrijk. Grenache, Syrah, Mourvèdre.', '6,20 / 26,50'],
      ['Cantina Castiadas Cannonau', 'Sardinië. Kruiden en fruit.', '6,50 / 28,00'],
      ['Alto de Bayna DO Jumilla Barrica', 'Spanje. Monastrell, Cabernet Sauvignon, Syrah; zwart fruit, drop, vanille, chocola. Per fles.', '32,00'],
      ['h', 'Sangria'],
      ['Sangria, kannetje 0,5 l', 'Een kannetje vrolijkheid, met vers fruit.', '12,50']
    ]},
    { name: 'Bier', items: [
      ['h', 'Van de tap'],
      ['Heineken 0,25', '', '3,65'], ['Heineken 0,5', '', '7,20'], ['Affligem blond', '', '5,90'], ['Brand Weizen', '', '5,95'], ['Texels Skuumkoppe', '', '5,70'], ['Heineken 0.0', '', '3,80'],
      ['h', 'Beer and drive'],
      ['Texels Skuumkoppe 0.0', '', '4,90'], ['Amstel Radler 0.0', '', '3,90'], ['Affligem blond 0.0', '', '4,60'],
      ['h', 'Van de fles'],
      ['Birra Moretti', '', '3,95'], ['Affligem tripel', '', '6,20'], ['Affligem dubbel', '', '5,95'], ['Mannenliefde', '', '5,95'],
      ['Lagunitas IPA', '', '5,90'], ['Desperados', '', '5,30'], ['Mort kriek', '', '5,30'], ['Affligem Belgisch wit', '', '5,90']
    ]},
    { name: 'Sterk', items: [
      ['h', 'Whiskey & bourbon'],
      ['Johnnie Walker Black Label', '', '6,50'], ["Jack Daniel's", '', '6,20'],
      ['h', 'Likeuren'],
      ['Amaretto Disaronno', '', '4,80'], ['Licor 43', '', '4,80'], ['Malibu', '', '4,80'], ['Grand Marnier', '', '4,80'],
      ['Cointreau', '', '4,80'], ['Baileys', '', '4,80'], ['Tia Maria', '', '4,80'], ['Limoncello', '', '4,80'],
      ['h', 'Gedistilleerd'],
      ['Ketel 1', '', '3,60'], ['Ketel 1 vodka', '', '3,90'], ['Bacardi', '', '4,80'], ['Captain Morgan', '', '4,80'], ['Tequila', '', '3,80'],
      ['h', 'Cognac'],
      ['Rémy Martin', '', '7,20']
    ]}
  ]}
];

window.RIB_EXPRESS = [
  { name: 'Ribs', note: 'Valt van het bot. Kies je marinade: Sweet, Spicy, Korean BBQ of Sweet & Sour. Maak er een menu van: + 5,50 (friet, saus en drankje).', items: [
    ['Small (300 g)', '', '14,50'], ['Medium (600 g)', 'Meest gekozen', '21,50'], ['Large (900 g)', '', '28,50']
  ]},
  { name: 'Deals', note: 'Samen genieten.', items: [
    ['Rib deal for two', 'Beste keuze voor 2 personen: 2x medium ribs, 2x friet, 2x saus.', '44,50'],
    ['Rib deal for three', '3x medium ribs, 3x friet, 3x saus.', '66,50']
  ]},
  { name: 'Burgers', note: 'Maak er een menu van: + 5,50 (friet, saus en drankje). Extra burger + 4,00.', items: [
    ['Cheeseburger', 'Mosterd, ketchup, rode ui, tomaat, augurk en cheddar.', '9,50'],
    ['Bacon cheeseburger', 'Favoriet. BBQ-saus, bacon, cheddar, onion rings, tomaat en augurk.', '11,50'],
    ['Crispy chicken burger', 'Krokante kip, BBQ-saus, cheddar, rode ui, tomaat en augurk.', '10,50'],
    ['Smashburger', 'Mosterd, ketchup, cheddar, tomaat, augurk en rode ui. Single 7,50, double 10,00, triple 12,50.', 'vanaf 7,50']
  ]},
  { name: 'Loaded fries', items: [
    ['Loaded fries crispy chicken', 'Hardloper. Friet met crispy chicken, BBQ- en srirachasaus.', '11,50'],
    ['Loaded fries pulled chicken', 'Friet met pulled chicken, crispy ui, rode ui en BBQ-saus.', '11,50'],
    ['Loaded fries bacon cheese', 'Friet met cheddarsaus, bacon en BBQ-saus.', '10,50'],
    ['The full mess: loaded fries to share', 'Met crispy chicken, pulled chicken, cheddarsaus, bacon, onion rings, crispy ui en BBQ- en srirachasaus.', '14,50']
  ]},
  { name: 'The classics', items: [
    ['Kipsalon', 'Altijd goed. Friet, kip, kaas, rauwkost en knoflooksaus.', '12,50'],
    ['Kipdij saté', 'Malse kipdij saté inclusief friet.', '14,50'],
    ['Chicken & fries', 'Friet met 2 krokante kipdijstukken en srirachasaus.', '10,50']
  ]},
  { name: 'Kids', note: 'Inclusief verrassing, fritessaus en Wicky.', items: [
    ['Kids nuggets + friet', '', '6,75'], ['Kids kroket + friet', '', '6,75'], ['Kids frikandel + friet', '', '6,75']
  ]},
  { name: 'Sides', items: [
    ['Friet', '', '3,95'], ['Nuggets (6)', '', '5,50'], ['Hotwings (6)', '', '7,95'], ['Chicken tenders (5)', '', '8,50'], ['Crispy chicken bites (6)', '', '7,25'],
    ['Frikandel', '', '2,95'], ['Kroket', '', '2,95'], ['Onion rings', '', '5,95'], ['Diverse sauzen', '', '1,50']
  ]},
  { name: 'Sweets & drinks', items: [
    ['Luxe Razzle', 'Softijs met topping naar keuze: Oreo, KitKat, M&M of brownie.', '4,50'],
    ['Canned Shake', 'Keuze uit matcha, popcorn of Dubai chocolate.', '5,75'],
    ['Milkshake', '', 'vanaf 3,50'],
    ['Frisdrank', 'Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Fuze Tea, Red Bull o.a.', 'vanaf 2,85'],
    ['Blik Heineken', '', '3,00'], ['Sixpack Heineken', '', '17,00'],
    ['Fles wijn wit (droog), rood of rosé', '', '14,50']
  ]}
];
