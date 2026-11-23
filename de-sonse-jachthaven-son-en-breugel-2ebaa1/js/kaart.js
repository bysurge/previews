// Alle kaarten van De Sonse Haven, overgenomen uit hun eigen PDF's (menukaart, borrelkaart, drankenkaart).
// [naam, prijs, omschrijving, vega]
window.KAART = {
  menu: [
    { t: 'Voorgerechten', n: 'Geserveerd met schiacciata-brood en dips. Heeft u dieetwensen? Geef het ons door.', open: true, items: [
      ['Carpaccio', '15,50', 'Ossenhaas, pijnboompitten, Parmezaan, truffelmayo, pesto'],
      ['Havenbordje', '17,50', 'Zalm, tonijnsalade, paling van rokerij Rijpelaal, Black Tiger-garnalen'],
      ['Tonijn tataki', '16,75', '5 stuks tonijn, nori-krokantje, wasabimayo, gember-sojamayo, wakame, sojabonen'],
      ['Brioche paling rokerij Rijpelaal', '16,75', '5 brioches, paling, kerriemayo, sriracha'],
      ['Black Tiger-garnalen', '12,25', '5 stuks, knoflookolie, Spaanse peper'],
      ['Ovenpotje champignons', '11,50', 'Champignons, knoflookroomsaus, gegratineerd met kaas', 1],
      ['Chicken strips', '9,75', '5 stuks, chilimayo'],
      ['Torpedogarnaal', '9,95', '8 stuks, chilisaus'],
      ['Bruschetta', '8,75', '6 stuks, tomaat, ui, knoflook, olijfolie, balsamico', 1],
      ['Brood met dips', '8,75', 'Bol robuust met dips', 1]
    ]},
    { t: 'Soepen', items: [
      ['Tomatensoep', 'klein 6,25 · groot 8,25', 'Pesto, room, soepballen', 1],
      ['Uiensoep', 'klein 6,25 · groot 8,25', 'Kaascrouton', 1],
      ['Kleine vissoep', '9,25', 'Gamba']
    ]},
    { t: 'Hoofdgerechten', n: 'Keuken geopend tot 20:00 uur.', items: [
      ['Black Tiger-garnalen', '24,00', '9 stuks, knoflookolie, Spaanse peper, friet, mayo, groenten'],
      ['Zalmfilet met pomme Anette', '24,25', 'Kreeftensaus, friet, mayo, groenten'],
      ['Fish & chips', '21,75', 'Kerrie-chilisaus, friet, mayo, groenten'],
      ['Goed gevulde maaltijdsoep vis', '19,75', 'Zalm, kabeljauw, gamba, brood, dips'],
      ['Biefstukpuntjes', '25,50', 'Oosterse saus, bosui, sesam, cashewnoten, friet, mayo, groenten'],
      ['Tournedos', '31,75', 'Saus naar keuze: champignonsaus, peper of rode portsaus; friet, mayo, groenten'],
      ['Ovenpotje champignons', '20,25', 'Champignons, knoflookroomsaus, gegratineerd met kaas, friet, mayo, groenten', 1],
      ['Kipsaté', '22,00', '3 stokjes saté, kroepoek, satésaus, atjar, gebakken uitjes, friet, mayo'],
      ['Stoofpotje rundvlees', '22,50', 'Friet, mayo, groenten'],
      ['Schnitzel', '21,75', 'Saus naar keuze: champignonsaus, peper of rode portsaus; friet, mayo, groenten'],
      ['Gehaktbal uit eigen keuken', '18,00', 'Met jus, friet, mayo, groenten'],
      ['Spareribs', '24,25', 'Cocktailsaus, chilisaus, friet, mayo, groenten'],
      ['Surf & turf met kreeftensaus', '36,50', "Tournedos, 4 gamba's, friet, mayo, groenten"],
      ['Quiche van spinazie en geitenkaas', '19,75', 'Frisse salade, walnoten, bietjes, friet, mayo', 1],
      ['Vegan curry met rijst', '18,50', 'Curry, witte rijst, seizoensgroenten', 1],
      ['Spaghetti bolognese', '18,00', 'Tomatensaus, gehakt, Parmezaan']
    ]},
    { t: 'Burgers', n: 'Geserveerd met friet en mayo.', items: [
      ['Cruiseburger', '18,25', 'Runderburger met uienchutney, cheddar, burgersaus, augurk'],
      ['Truffelburger', '18,25', 'Runderburger, Parmezaan, truffelmayo'],
      ['Krokante kipburger', '17,25', 'Kipburger, burgersaus, rode ui, tomaat'],
      ['Vegaburger', '17,25', 'Uienchutney, cheddarkaas, burgersaus, augurk', 1],
      ['Burgerproeverij', '18,25', 'Mini-cruiseburger, mini-truffelburger, mini-kipburger']
    ]},
    { t: 'Salades', items: [
      ['De Haven', '20,25', 'Zalm, paling van rokerij Rijpelaal, tonijnsalade, Black Tiger-garnalen'],
      ['Carpaccio', '19,50', 'Ossenhaas, Parmezaan, pijnboompitten, truffelmayo, pesto'],
      ['Biefpuntjes', '20,25', 'Oosterse saus, bosui, sesam, cashewnoten'],
      ['Chicken strips', '18,75', 'Rode ui, chilimayo, Parmezaan, mango'],
      ['Truffle chicken', '18,75', 'Kiphaasjes, champignons, truffelmayo, Parmezaan'],
      ['Tonijn tataki', '20,75', 'Gember-sojamayo, wasabimayo, wakame, sesamzaad, nori-krokantje, sojabonen'],
      ['Gegrilde groenten', '18,75', 'Hummus, avocado, cashewnoten, rode ui', 1],
      ['Warme geitenkaas', '18,75', 'Honing, walnoten, bietjes', 1]
    ]},
    { t: 'Bijgerechten', items: [
      ['Friet met mayo', '4,25'], ['Gebakken aardappels met mayo', '4,25'], ['Gemengde salade', '5,75'],
      ['Warme seizoensgroenten', '5,75'], ['Witte rijst', '4,25'], ['Friet in plaats van brood', '3,50']
    ]},
    { t: 'Desserts & gebak', n: 'Te bestellen tot 21:00 uur.', items: [
      ['Monchou-kersentaart', '4,85'], ['Appeltaart', '4,85'], ['Nougatine-ijstaart', '4,85'], ['Slagroom', '0,85'],
      ['Griekse yoghurt', '9,50', 'Granola, honing, rood fruit'],
      ['Dame blanche', '9,50', '3 bollen vanille-ijs, warme chocoladesaus, slagroom'],
      ['Bolletje vanille-ijs', '5,50', 'Slagroom, keuze uit chocoladesaus, karamelsaus, aardbeiensaus'],
      ['Brownie', '8,75', 'Slagroom, vanille-ijs, crumble, karamelsaus'],
      ['Salted caramel crème brûlée', '9,75', 'Slagroom']
    ]},
    { t: 'Broodjes', n: 'Schiacciata wit of bruin, standaard belegd met sla, komkommer, tomaat en dressing.', items: [
      ['Tonijnsalade', '10,75', 'Gekookt ei'],
      ['Paling van rokerij Rijpelaal', '11,25', 'Wit puntje, kerriemayo'],
      ['Carpaccio', '14,75', 'Parmezaan, pijnboompitten, truffelmayo, pesto'],
      ['Gerookte zalm', '14,75', 'Roomkaas, mosterd-dilledressing'],
      ['Truffle chicken', '12,75', 'Kiphaasjes, champignons, truffelmayo, Parmezaan'],
      ['Biefpuntjes', '15,75', 'Oosterse saus, bosui, sesam, cashewnoten'],
      ['Asian pulled chicken', '12,75', 'Gemarineerde pulled chicken'],
      ['Gegrilde groenten', '12,75', 'Hummus, avocado, cashewnoten, rode ui', 1],
      ['Warme geitenkaas', '12,75', 'Honing, walnoten, bietjes', 1]
    ]},
    { t: 'Lunchbordjes', n: 'Keuze uit wit of bruin brood.', items: [
      ['Vlees', '17,25', 'Tomatensoep met balletjes, gebakken ei, vleeskroket, mini-cruiseburger'],
      ['Vis', '19,25', 'Bisque met stukjes gamba, gebakken ei, garnalenkroket, tonijn tataki'],
      ['Vega', '17,25', 'Uiensoep, gebakken ei, groentekroket, puntje quiche van spinazie en geitenkaas', 1]
    ]},
    { t: 'Schiacciata-tosti', n: 'Wit of bruin.', items: [
      ['Ham en/of kaas', '8,10'], ['Hawaï', '8,25', 'Ham, kaas, ananas'], ['Geitenkaas', '9,75', 'Serranoham, honing, walnoten']
    ]},
    { t: 'Boterhammen & broodjes', n: 'Wit of bruin.', items: [
      ['2 vleeskroketten', '11,25', 'Mosterd'], ['2 garnalenkroketten', '13,25', 'Cocktailsaus'],
      ['Bal uit eigen keuken', '12,25', 'Jus'], ['6 groentekroketjes', '11,75', 'Hummus', 1],
      ['Broodje kroket of frikandel', '5,95', 'Wit puntje']
    ]},
    { t: 'Eiergerechten', n: '3 eieren, op wit of bruin brood.', items: [
      ['Uitsmijter naturel', '11,25', 'Met kaas + € 0,80, met ham + € 0,80, met spek + € 1,60', 1],
      ['Uitsmijter carpaccio', '16,75', 'Parmezaan, pijnboompitten, truffelmayo, pesto'],
      ['Boerenuitsmijter', '13,75', 'Gebakken groenten en kaas', 1],
      ['Havenomelet', '13,75', 'Gebakken groenten', 1]
    ]}
  ],
  borrel: [
    { t: 'Kleine hap, kinder- & seniorenporties', n: 'Keuken geopend tot 20:00 uur.', open: true, items: [
      ['Friet met een snack', '9,25', 'Friet, mayo, appelmoes en keuze uit kroket, frikandel, kaassoufflé of kipnuggets'],
      ['Mini-cruiseburger', '11,50', 'Runderburger met uienchutney, cheddar, burgersaus, augurk, friet, mayo'],
      ['1 stokje saté', '13,50', 'Kroepoek, atjar, satésaus, gebakken uitjes, friet, mayo'],
      ['Halve sparerib', '13,50', 'Cocktailsaus, chilisaus, friet, mayo, groenten'],
      ['Spaghetti bolognese (klein)', '14,25', 'Tomatensaus, gehakt, Parmezaan'],
      ['Worstenbroodje', '4,50'], ['Boterham met jam of Nutella', '3,50'], ['Wit puntje jonge kaas', '3,75'],
      ['Kinderijsje: Schatkistje', '4,50'], ['Kinderijsje: Raketje', '3,00'], ['Kinderijsje: Calippo', '3,50']
    ]},
    { t: 'Koude borrelhapjes', items: [
      ['Tonijn tataki', '16,75', '5 stuks tonijn, nori-krokantje, wakame, gember-sojamayo, wasabimayo, sojabonen'],
      ['Bruschetta', '8,75', '6 stuks met tomaat, ui, knoflook, olijfolie, balsamico', 1],
      ['Brood met dips', '8,75', 'Bol robuust met dips', 1],
      ['Brioche paling rokerij Rijpelaal', '16,75', '5 brioches, paling, kerriemayo, srirachamayo']
    ]},
    { t: 'Warme borrelhapjes', n: 'Te bestellen tot 21:00 uur.', items: [
      ['Chicken strips', '9,75', '5 stuks, chilimayo'],
      ['Torpedogarnaal', '9,95', '8 stuks, chilisaus'],
      ["Nacho's", '11,25', "Jalapeño's, lente-ui, tomatensalsa, kaas, crème fraîche en guacamole"],
      ["Nacho's pulled chicken", '14,50', "Asian style pulled chicken, jalapeño's, lente-ui, tomatensalsa, kaas, crème fraîche en guacamole"],
      ['Bitterballen', '8,85', '10 stuks, mosterd'],
      ['Gemengde snacks', '10,50', '10 stuks, curry, mayo'],
      ['Frikandellen', '7,95', '10 stuks, mayo, curry'],
      ['Vlammetjes', '8,95', '10 stuks, chilisaus'],
      ['Kaastengels', '8,95', '10 stuks, chilisaus'],
      ['Groentekroketjes', '8,95', '8 stuks, hummus'],
      ['Hapjesplank voor 2 personen', '25,00', 'Door onze koks samengesteld']
    ]}
  ],
  drank: [
    { t: 'Warme dranken', open: true, items: [
      ['Koffie', '3,35'], ['Espresso', '3,35'], ['Dubbele espresso', '4,75'], ['Cappuccino', '3,45'], ['Flat white', '4,75'],
      ['Cafeïnevrije koffie', '3,35'], ['Latte macchiato', '3,55'], ['Latte macchiato met karamel, witte chocolade of vanille', '4,55'],
      ['Thee, smaak naar keuze', '3,25'], ['Verse muntthee', '3,95'], ['Verse gemberthee', '3,95']
    ]},
    { t: 'Speciale koffie', items: [
      ['Spanish coffee', '8,25', 'Licor 43'], ['French coffee', '8,25', 'Grand Marnier'], ['Irish coffee', '8,25', 'Jameson'], ['Italian coffee', '8,25', 'Amaretto']
    ]},
    { t: 'Sappen & zuivel', items: [
      ['Chocomel', '3,50'], ['Fristi', '3,50'], ['Tomatensap', '3,50'], ['Appelsap', '3,50'], ["Verse jus d'orange", '4,00'], ['Melk', '3,30'], ['IJskoffie', '5,50']
    ]},
    { t: 'Frisdranken', items: [
      ['Coca-Cola, Coca-Cola Zero', '3,30'], ['Sprite Zero', '3,30'], ['Fanta Orange, Cassis', '3,30'], ['Ginger ale, ginger beer', '3,50'],
      ['Tonic, bitter lemon', '3,50'], ['Rivella', '3,50'], ['Chaudfontaine blauw / rood', '3,30'], ['Chaudfontaine 0,5 liter', '6,50'],
      ['Fuze Tea, Fuze Tea Green', '3,75'], ['Homemade lemonade', '4,50'], ['Ranja', '2,00']
    ]},
    { t: 'Spritz & cocktails', n: 'Vraag ook naar de cocktail van het moment.', items: [
      ['Aperol spritz', '9,50'], ['Limoncello spritz', '9,50'], ['Pink & tonic', '11,50'], ['Gin & tonic original', '11,50'],
      ['Pornstar martini', '9,50'], ['Mojito', '10,00'], ['Sangria', 'glas 10,00 · liter 28,50']
    ]},
    { t: 'Cocktails & wijn 0,0%', items: [
      ['Droge witte wijn 0,0%', '4,90'], ['Mojito, Aperol spritz, pink & tonic, gin & tonic of pornstar martini mocktail', '7,00'], ['Crodino', '6,00']
    ]},
    { t: 'Bier van de tap', n: 'Plus een wisseltap.', items: [
      ['Bavaria Pilsener 5,0%', 'fluitje 3,20 · vaasje 3,40 · pul 6,80', 'Fluitje 0,2 l, vaasje 0,25 l, pul 0,5 l'],
      ['Weihenstephaner 5,4%', '0,33 l 5,10 · 0,5 l 8,00'],
      ['La Trappe Witte Trappist 5,5%', '4,95'], ['La Trappe Dubbel 7,0%', '4,95']
    ]},
    { t: 'Bier uit de fles', items: [
      ['La Trappe Blond 6,5%', '5,40'], ['La Trappe Tripel 8,0%', '5,40'], ['La Trappe Quadrupel 10,0%', '6,00'], ['Tripel Karmeliet 8,0%', '5,80'],
      ['Liefmans 3,8%', '4,90'], ['Cornet 8,5%', '5,80'], ['Texels Skuumkoppe 6,0%', '5,40']
    ]},
    { t: 'Alcoholvrij bier', items: [
      ['Bavaria Original', '3,90'], ['Bavaria Radler', '4,00'], ['Bavaria Wit', '4,00'], ['Rodenbach', '4,00'], ['La Trappe Epos', '5,25'], ['La Trappe Nillis', '5,25']
    ]},
    { t: 'Port, sherry, vermout & borrel', items: [
      ['Port wit / rood', '5,50'], ['Sherry medium / dry', '5,50'], ['Martini wit / rood', '5,50'], ['Jenever jong / oud', '4,00'], ['Jägermeister', '4,00']
    ]},
    { t: 'Likeuren & gedistilleerd', items: [
      ['Likeuren', '6,00', 'Sambuca, Tia Maria, Baileys, Grand Marnier, Cointreau, Frangelico, Licor 43, limoncello, amaretto, Malibu'],
      ['Gedistilleerd', '6,00', 'Jack Daniels, Johnnie Walker Red Label, Jameson, Bacardi Superior / Razz / Lemon, gin, wodka, grappa'],
      ['Rémy Martin', '9,00'], ['Mixdranken', 'vanaf 6,50']
    ]},
    { t: 'Huiswijnen', items: [
      ['Wit droog: Kaapmoed Chenin Blanc', 'glas 4,90 · fles 24,50', 'Zuid-Afrika'],
      ['Wit zoet: Oude Kaap Moscato', 'glas 4,90 · fles 24,50', 'Zuid-Afrika'],
      ['Rood: Les Vignerons Grenache Pinot Noir', 'glas 4,90 · fles 24,50', 'Frankrijk'],
      ['Rosé: Octerra Syrah Grenache', 'glas 5,10 · fles 25,00', 'Frankrijk']
    ]},
    { t: 'Mousserend', items: [
      ['Anna White Piccolo', 'flesje 20 cl 7,95', 'Spanje. Frisse en fruitige mousserende wijn uit Catalonië']
    ]},
    { t: 'Witte wijn', items: [
      ["Baptiste Gazeau 'Generation 7'", 'glas 5,75 · fles 28,00', 'Frankrijk. Biologisch, chardonnay'],
      ['Dominio de la Grandadilla Verdejo', 'glas 5,75 · fles 28,00', 'Spanje. Biologisch, crispy en fris, licht kruidige afdronk'],
      ['Boira Pinot Grigio', 'glas 5,75 · fles 28,00', 'Italië. Lichte tot medium body, wit fruit, citrus, mineraliteit'],
      ["Finca Albret 'El Alba' Chardonnay 2022", 'fles 42,50', 'Spanje. Citrus, peer, subtiel eikenhout']
    ]},
    { t: 'Rosé', items: [
      ["Solstice d'Été", 'glas 5,75 · fles 28,00', 'Frankrijk. Fris, sappig en delicaat, lekker bij een salade']
    ]},
    { t: 'Rode wijn', items: [
      ['Corte Ottone Brindisi Riserva DOC', 'glas 5,75 · fles 28,00', 'Italië. Robuust en kruidig; malvasia nera, negroamaro, sangiovese'],
      ["Negroamaro del Salento IGT 'Morando'", 'glas 4,90 · fles 24,50', 'Puglia. Zwoel, lichte kruiden, kersen, levendig zuurtje']
    ]}
  ]
};
