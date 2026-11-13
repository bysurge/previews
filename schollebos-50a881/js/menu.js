/* Menukaart Schollebos, augustus 2026. Bron: menukaart (pdf) van schollebos.nl. v = vegetarisch, h = halal */
window.MENU = [
  { id: 'pannenkoeken', tab: 'Pannenkoeken', intro: 'Oer-Hollandse pannenkoeken volgens oud familierecept. Al onze pannenkoeken zijn ook glutenvrij, lactosevrij en vegan te bestellen.', groups: [
    { title: 'Pannenkoeken', items: [
      ['Kinderpannenkoek', '', '7,50'], ['Naturel', '', '8,95'], ['Nutella', '', '11,20'], ['Appel', '', '10,95'], ['Appel rozijn', '', '12,95'],
      ['Ananas', '', '10,95'], ['Ananas kaas', '', '13,45'], ['Banaan', '', '10,95'], ['Kersen', '', '10,95'], ['Kersen slagroom', '', '12,95'],
      ['Vers fruit slagroom', 'seizoensgebonden', '14,95'], ['Gember', '', '10,95'], ['Gember kaas', '', '13,45'], ['Rozijnen', '', '10,95'],
      ['Rozijnen rum', '', '15,90'], ['Ham', '', '11,20'], ['Ham kaas', '', '13,70'], ['Ham kaas spek', '', '15,95'], ['Hawaii', '', '15,70'],
      ['Kaas', '', '11,45'], ['Spek', '', '11,20'], ['Spek kaas', '', '13,70'], ['Spek appel', '', '13,20'], ['Salami', '', '11,20'], ['IJs met slagroom', '', '14,95']
    ] },
    { title: 'Speciale pannenkoeken', feature: true, items: [
      ['Brie', 'walnoten, honing en rucola', '16,95', 'v'],
      ['Appel speciaal', 'appel, kaneelijs, bruine basterdsuiker, kaneel en slagroom', '16,95', 'v'],
      ['Boeren', 'ham, spek, champignons, ui, doperwtjes en worteltjes', '16,95'],
      ['Pizza', 'salami, ui, champignons, tomaat, kaas en oregano', '16,95'],
      ['Shoarma', 'kippendijfilet, sla, knoflooksaus en sambal', '16,95', 'h'],
      ['Mexicano', 'gehakt, maïs, paprika, champignons, chilisaus en sla', '16,95'],
      ['Pittig gehakt', 'gekruid gehakt, kaas, paprika en rauwe ui', '17,95'],
      ['Pittige kip', 'kippendijfilet, paprika, ui, champignons, chilisaus en sla', '17,95', 'h'],
      ['Zalm', 'gerookte zalm, roomkaas, kappertjes en rucola', '18,95'],
      ['Schollebos', 'ham, kaas, tomaat, bieslook en twee spiegeleieren', '16,95'],
      ['Roti', 'kippendijfilet, aardappel, kousenband, gekookt ei, zoetzure komkommer en roti-sambal', '18,95', 'h'],
      ['Pannenkoek van de maand', 'vraag onze medewerkers naar de pannenkoek van de maand', '16,95']
    ] }
  ] },
  { id: 'poffertjes', tab: 'Poffertjes', intro: 'Verse poffertjes van de plaat.', grid: {
    head: ['', 'Klein', 'Middel', 'Groot'], sub: ['', '10 stuks', '15 stuks', '25 stuks'],
    rows: [['Naturel', '4,95', '6,95', '11,50'], ['Appel en kaneel', '6,75', '8,85', '13,50', 'wordt mee gebakken'], ['Banaan', '6,75', '8,85', '13,50', 'wordt mee gebakken'], ['Slagroom', '5,70', '7,95', '12,75']]
  }, groups: [
    { title: 'Voor erbij', items: [['Cointreau of Grand Marnier', '', '4,95'], ['Warme kersen', '', '2,00'], ['Chocoladesaus', '', '2,00'], ['IJs', 'per bol', '2,00']] }
  ] },
  { id: 'ontbijt', tab: 'Ontbijt', intro: 'Te bestellen tot 11:00 uur.', groups: [
    { title: 'Ontbijt', items: [
      ['Schollebos ontbijt', 'croissant, 2 boterhammen (bruin en wit), boter, jam, nutella, kaas, ham, gekookt eitje en een glaasje verse jus d’orange', '9,95'],
      ['Schollebos ontbijt deluxe', 'croissant, 2 boterhammen (bruin en wit), boter, jam, nutella, kaas, ham, gerookte zalm, roerei, vers fruit, flensje en een glaasje verse jus d’orange', '14,95']
    ] }
  ] },
  { id: 'lunch', tab: 'Lunch', intro: 'Te bestellen van 10:00 tot 17:00 uur.', groups: [
    { title: 'Brood', note: 'Keuze uit wit of bruin brood', items: [
      ['Brie', 'walnoten, honing en rucola', '10,25'],
      ['Carpaccio', 'truffelmayonaise, parmezaanse kaas, pijnboompitten en rucola', '12,95'],
      ['Gerookte zalm', 'roomkaas, rode ui, kappertjes, rucola en bieslook', '12,95'],
      ['Geitenkaas', 'uitgebakken spek, walnoten, zongedroogde tomaten, honing en rucola; ook vegetarisch mogelijk', '11,95'],
      ['Gezond', 'ham of kipfilet, sla, kaas, ei, komkommer, tomaat en honing-mosterddressing; ook vegetarisch mogelijk', '10,25'],
      ['Huisgemaakte tonijnsalade', 'appel, rode ui, kappertjes en rucola', '10,95'],
      ['Kip kerrie', 'sla en komkommer', '11,95'],
      ['Kroketten', 'twee rundvleeskroketten op brood', '10,95'],
      ['Pittige kip', 'gebakken kippendijfilet, paprika, ui, champignons, chilisaus en sla', '12,95']
    ] },
    { title: 'Eieren', note: '3 stuks', items: [
      ['Uitsmijter naturel', 'extra ham, kaas, spek of kipfilet + 2,00', '8,95'],
      ['Omelet naturel', 'extra ham, kaas, spek of kipfilet + 2,00', '8,95'],
      ['Schollebos omelet', 'kaas, ui, tomaat, champignons en rucola', '13,95'],
      ['Boerenomelet', 'ham, spek, champignons, ui, doperwtjes en worteltjes', '13,95']
    ] },
    { title: 'Sandwich en uurtjes', items: [
      ['Clubsandwich', 'pulled chicken, spek, kaas, tomaat, sla, komkommer, ei, pittige mayonaise en chips', '13,95'],
      ['Twaalfuurtje', 'drie boterhammen met gebakken ei, kaas en een rundvleeskroket', '14,95'],
      ['Dertienuurtje', 'drie boterhammen met gerookte zalm, tonijnsalade en een garnalenkroket', '16,95'],
      ['Extra uurtje', 'drie boterhammen met brie of geitenkaas, eiersalade, een groentekroket en paprikasoep', '17,95', 'v']
    ] },
    { title: 'Tosti’s', note: 'Wit of bruin brood, met ketchup of curry', items: [['Kaas', '', '4,95'], ['Ham kaas', '', '5,25'], ['Hawaii', '', '5,50']] },
    { title: 'Maaltijdsalades', note: 'Te bestellen van 10:00 tot 20:30 uur', items: [
      ['Carpacciosalade', 'truffelmayonaise, parmezaanse kaas, pijnboompitten, groentechips en een stukje brood', '15,95'],
      ['Geitenkaassalade', 'uitgebakken spek, walnoten, zongedroogde tomaat, rode ui, honing en een stukje brood; ook vegetarisch mogelijk', '15,95'],
      ['Mosselsalade', 'in kruidenboter gebakken, ui, paprika, croutons, cocktailsaus en een stukje brood', '15,95'],
      ['Zalmsalade', 'rode ui, komkommer, ei, kappertjes, croutons, honing-mosterddressing en een stukje brood', '15,95']
    ] }
  ] },
  { id: 'diner', tab: 'Diner', groups: [
    { title: 'Voorgerechten', items: [
      ['Tafelbrood', 'rode pesto-kruidenboter, oude-kaasdip en aioli', '7,25', 'v'],
      ['Huisgemaakte tomaten-groentesoep', 'met een stukje brood', '7,95', 'v'],
      ['Huisgemaakte seizoenssoep', 'met een stukje brood', '7,95'],
      ['Carpaccio', 'truffelmayonaise, parmezaanse kaas, pijnboompitten, rucola en een stukje brood', '13,95'],
      ['Gamba’s', 'gepeld, gebakken in de olie, knoflook, rode peper en een stukje brood', '9,95']
    ] },
    { title: 'Hoofdgerechten', note: 'Alle hoofdgerechten worden geserveerd met garnering. Keuze uit verse friet, wedges of brood.', items: [
      ['Kogelbiefstuk', '', '20,95'], ['Schnitzel', '', '17,95'], ['Varkenshaassaté', '', '19,95'],
      ['Krokante kipburger', 'sla, komkommer, tomaat en pittige mayonaise; ook vegetarisch mogelijk', '18,95', 'h'],
      ['Schollebos burger', 'sla, tomaat, gefrituurde uitjes, gebakken ei, bacon, cheddar en truffelmayonaise; ook vegetarisch mogelijk', '20,95'],
      ['Visstoofpotje', 'zalm, garnalen, pangasiusfilet en mosselen in roomsaus', '17,95'],
      ['Kindermenu', 'met friet en mayonaise; keuze uit een kroket, frikandel, kaassoufflé of kipnuggets', '8,95']
    ] },
    { title: 'Voor erbij', items: [['Sperziebonen', '', '3,95'], ['Gebakken uien', '', '2,45'], ['Gebakken champignons', '', '2,45'], ['Champignonroomsaus', '', '2,75'], ['Peperroomsaus', '', '2,75']] }
  ] },
  { id: 'desserts', tab: 'Desserts', groups: [
    { title: 'Desserts', items: [
      ['Schollebos coupe', 'chocolade-ijs, kaneelijs, witte-chocolade-ijs, karamelsaus en slagroom', '9,95'],
      ['Pistachecoupe', 'pistache-ijs, witte-chocolade-ijs, witte chocoladesaus, slagroom en pistachecrunch', '9,95'],
      ['Vers fruit coupe', 'seizoensgebonden; met vanille-ijs en slagroom', '10,95'],
      ['Aardbeiencoupe', 'seizoensgebonden; met vanille-ijs en slagroom', '10,95'],
      ['Hazelnoot-mokka coupe', 'hazelnoot-mokka-ijs, karamelsaus, slagroom en hazelnootdip', '9,95'],
      ['Dame blanche', 'vanille-ijs, warme chocoladesaus en slagroom', '9,95'],
      ['Bananensplit', 'vanille-ijs, bananenijs, stukjes banaan, chocoladesaus en slagroom', '9,95'],
      ['Blondie of brownie', 'van Koekela, met vanille-ijs en slagroom', '7,95'],
      ['Lava cake', 'met vanille-ijs en slagroom', '7,95'],
      ['Cookie dough', 'Ben & Jerry’s: vanille-ijs met stukjes chocolate chips en koekjesdeeg, met slagroom', '5,95'],
      ['Wisselende huisgemaakte taart', 'met een bolletje ijs en slagroom', '7,95']
    ] },
    { title: 'Voor de kinderen', items: [
      ['Schatkistje', 'vanille- en chocolade-ijs en slagroom', '3,95'],
      ['Bolletje ijs met slagroom', 'aardbei, vanille, banaan of chocolade', '2,95']
    ] }
  ] },
  { id: 'borrel', tab: 'Borrel', intro: 'Niet te bestellen tijdens het diner. Eén gezelschap is één rekening; we rekenen niet per persoon af, maar kunnen het geheel wel delen.', groups: [
    { title: 'Borrelhapjes', items: [
      ['Bitterballen', '6 stuks, met mosterd; ook vegetarisch mogelijk', '6,25'],
      ['Bittergarnituur', '10 stuks, met mayonaise, mosterd en chilisaus', '10,50'],
      ['Kaastengels', '6 stuks, met chilisaus', '7,75'],
      ['Chorizokroketjes', '6 stuks, met aioli', '7,75'],
      ['Mini loempia’s', '6 stuks, met chilisaus', '5,95'],
      ['Loaded fries', 'met truffelmayonaise en parmezaanse kaas', '5,95'],
      ['Loaded wedges', 'met pittige kip, geraspte kaas, pittige mayonaise en bosui', '9,95']
    ] },
    { title: 'Cocktails', items: [['Gin tonic', '', '9,95'], ['Pornstar martini', '', '9,95'], ['Mojito', '', '9,95'], ['Aperol spritz', '', '9,95'], ['Limoncello spritz', '', '9,95']] },
    { title: 'Mocktails', items: [['Gin tonic 0.0', '', '7,95'], ['Pornstar martini 0.0', '', '7,95'], ['Mojito 0.0', '', '7,95']] }
  ] },
  { id: 'dranken', tab: 'Dranken', groups: [
    { title: 'Frisdrank', items: [
      ['Coca-Cola', '', '3,25'], ['Coca-Cola Zero', '', '3,25'], ['Fanta', '', '3,25'], ['Cassis', '', '3,25'], ['Sprite', '', '3,25'], ['Rivella', '', '3,25'],
      ['Tonic', '', '3,25'], ['Bitter lemon', '', '3,25'], ['Ginger ale', '', '3,25'], ['Ranja', '', '2,75'],
      ['Chaudfontaine rood of blauw', '', '2,95'], ['Chaudfontaine rood of blauw', 'fles 0,7 l', '7,95']
    ] },
    { title: 'Fuze Tea', items: [['Sparkling', '', '3,50'], ['Green tea', '', '3,50'], ['Peach hibiscus', '', '3,50'], ['Mango chamomile', '', '3,50']] },
    { title: 'Vruchtensappen', items: [['Puur appelsap', '', '3,25'], ['Puur appel-perensap', '', '3,25'], ['Verse jus d’orange', 'klein / groot', '4,95 / 6,50']] },
    { title: 'Zuivel', items: [['Fristi', '', '3,25'], ['Chocomel', '', '3,25'], ['Halfvolle melk', '', '2,50']] },
    { title: 'Smoothies', note: 'Aangemaakt met appel-perensap', items: [
      ['Xtra Energy', 'aardbeien met banaan, zacht en zoet van smaak', '6,50'],
      ['Tropical Twist', 'ananas, mango en papaya', '6,50'],
      ['Mad Berry', 'aardbei, framboos en bramen', '6,50']
    ] },
    { title: 'Sterke dranken', items: [
      ['Amaretto', '', '5,95'], ['Baileys', '', '5,95'], ['Cointreau', '', '5,95'], ['Grand Marnier', '', '5,95'], ['Licor 43', '', '5,95'],
      ['Limoncello', '', '5,95'], ['Tia Maria', '', '5,95'], ['Bacardi', '', '5,95'], ['Ballantine’s', '', '5,95'], ['Courvoisier', '', '6,95'],
      ['Jenever jong of oud', '', '4,95'], ['Tullamore Dew', '', '5,95'], ['Vieux', '', '4,95'], ['Wodka', '', '5,95']
    ] }
  ] },
  { id: 'warm', tab: 'Koffie & thee', groups: [
    { title: 'Warme dranken', items: [
      ['Koffie', '', '3,00'], ['Espresso', '', '3,00'], ['Cappuccino', '', '3,50'], ['Koffie verkeerd', '', '3,85'], ['Latte macchiato', '', '3,85'],
      ['Flat white', '', '4,45'], ['Dubbele espresso', '', '4,25'], ['Warme chocomel', '', '3,20'], ['Warme chocomel met slagroom', '', '4,15'],
      ['Havermelk', 'extra', '+ 0,75'], ['Thee', '', '2,95'], ['Muntthee met honing', '', '3,85'], ['Gemberthee met citroen en honing', '', '3,85']
    ] },
    { title: 'Koffie met drank', items: [
      ['Schollebos coffee', 'Licor 43', '7,95'], ['Irish coffee', 'Tullamore Dew', '7,95'], ['French coffee', 'Grand Marnier', '7,95'],
      ['Bailey coffee', 'Baileys', '7,95'], ['Spanish coffee', 'Tia Maria', '7,95'], ['Italian coffee', 'amaretto', '7,95']
    ] },
    { title: 'Specials met slagroom', items: [
      ['IJskoffie met slagroom', 'classic, karamel of chocolade', '6,50'],
      ['Speciale koffie met slagroom', 'karamel, pumpkin spice, vanille, speculoos of crème brûlée', '6,50']
    ] },
    { title: 'Lekker voor erbij', items: [
      ['Appelgebak', '', '4,25'], ['Huisgemaakte taart', '', '4,95'], ['Koekela gebak', '', '4,95'], ['Blondie of brownie', 'van Koekela', '3,95'], ['Slagroom', '', '0,95']
    ] }
  ] }
];
