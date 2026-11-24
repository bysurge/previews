// Menukaarten van POPS (overgenomen van de lunch-, diner- en drankenkaart op pops.nl, april 2026)
// i = [naam, omschrijving, prijs, vega(1)]
var BURGER_NOTE = 'Alle burgers worden belegd met tomaat en sla (100% rundvlees, 160 gr, medium gebakken).';
var SALADES = { t: 'Salades', note: 'Geserveerd met brood.', i: [
  ['Caesar salade krokante kip', 'bacon, komkommer, sla, tomaat, ei, Parmezaan, sugar snaps, croutons', '18,50'],
  ['Vis Caesar salade', 'gerookte zalm, calamares, komkommer, sla, tomaat, ei, Parmezaan, sugar snaps, croutons', '19,75'],
  ['Vega Caesar salade krokante ‘kip’', 'vega kip, vega bacon, sla, komkommer, tomaat, ei, Parmezaan, sugar snaps, croutons', '19,75', 1],
  ['Salade Caprese', 'mozzarella, rucola, tomaat, olijfolie, pijnboompitten, sla, pesto', '18,50', 1]
]};
var SIDES = { t: 'Sides', i: [
  ['Mac & cheese', '', '4,75'], ['Twister friet', '', '4,75'], ['Uienringen', '', '4,75'],
  ['Zoete aardappelfriet', '', '5,25'],
  ['Maiskolf', '', '4,00'], ['Oma’s friet', '', '4,00'], ['Koolsalade', '', '4,00']
]};
var KIDS = function (note) { return { t: 'Kindermenu', note: 'T/m 12 jaar. ' + note, i: [
  ['Mini burger', 'kaas, sla, tomaat, ketchup, mayo', '10,75'],
  ['Kipnuggets', '', '10,75'], ['Kaasstengels', '', '10,75'], ['Broodje hotdog', '', '10,75'],
  ['Mac & cheese', 'zonder friet', '10,75']
]}; };

var KAART = [
 { id: 'lunch', label: 'Lunch', intro: 'Lunch bestellen voor thuis kan tussen 12:00 en 17:00.', groups: [
  { t: 'Om mee te beginnen', i: [
    ['Nachos', 'salsa, guacamole, zure room, Cheddar. Extra topping: pulled pork + 4,75, kipstukjes + 4,75, jalapeño + 2,00', '9,75'],
    ['Maissoep', 'met kip', '7,50', 1],
    ['Breekbrood', 'kruidenboter & pesto, half 5,75 / heel', '8,75']
  ]},
  { t: 'Sandwiches & broodjes', i: [
    ['Sandwich BLT', 'spek, sla, tomaat, mayo', '9,75', 1],
    ['Sandwich kip', 'bacon, ei, kaas, kip, sla, tomaat, kerriesaus', '11,75', 1],
    ['Broodje carpaccio', 'rundercarpaccio, sla, pijnboompitten, Parmezaan, truffelsaus', '14,25'],
    ['Wrap zalm', 'zalm, calamares, cocktailsaus, sla, tomaat, komkommer, ui, salsa', '13,75'],
    ['Broodje ‘gezond’', 'sla, komkommer, tomaat, ham, ei, Nellesteijn kaas, mayo', '11,25', 1],
    ['New York pastrami sandwich', 'pastrami, sla, kool, augurk, ui, lichte mosterdsaus', '14,25', 1],
    ['Bagel kip', 'kip, kerriesaus, bacon. Keuze uit wit of meergranen', '9,50'],
    ['Bagel gerookte zalm', 'zalm, cocktailsaus, avocado. Keuze uit wit of meergranen', '10,75'],
    ['Bagel Parmaham', 'Parmaham, pijnboompitten, pesto. Keuze uit wit of meergranen', '10,25'],
    ['Tosti ham & kaas', 'keuze uit wit of bruin', '8,25'],
    ['Tosti kaas & tomaat', 'keuze uit wit of bruin', '8,25'],
    ['Tosti mozzarella', 'mozzarella, pesto, tomaat. Keuze uit wit of bruin', '8,75']
  ]},
  { t: 'Eggs & pancakes', i: [
    ['Bacon and eggs', 'spek en ei op toast', '9,00', 1],
    ['Ham and cheese eggs', 'ham, kaas en ei op toast', '10,75'],
    ['Sunny side up', 'zalm, ei en avocado op toast', '13,75'],
    ['Pancakes aardbeienjam', '', '8,25'], ['Pancakes OREO', '', '8,25'], ['Pancakes naturel', '', '7,00'],
    ['Churros', 'Nutella & kaneelsuiker (4 st)', '5,75']
  ]},
  { t: 'Frietjes', i: [
    ['Frietje mac & cheese', 'friet, mac & cheese, bbq-saus, spek', '11,50'],
    ['Frietje Caesar', 'friet, kip, bacon, sla, Parmezaan, Caesarsaus', '12,50', 1],
    ['Loaded fries', 'friet, salade, tomaat, pulled pork, spek, kaas, bbq-saus', '13,75', 1],
    ['Frietje truffel', 'Parmezaan, friet, truffelsaus', '8,75']
  ]},
  { t: 'Burgers', note: BURGER_NOTE, i: [
    ['Classic', 'burger, spek, Cheddar, ui, augurk, mayo, ketchup', '13,50'],
    ['Cheesy chili chicken', 'kip, Cheddar, augurk, ui, crispy chilimayo', '14,25', 1],
    ['Crispy chicken', 'kip, augurk, ui, cocktailsaus', '13,75'],
    ['New York', 'burger, pastrami, honingmosterdsaus, ui, augurk, kool', '15,75'],
    ['Italian', 'burger, mozzarella, Parmaham, truffelmayo', '15,25', 1],
    ['Veggie ‘chicken’', 'plantaardige ‘kip’, ui, augurk, cocktailsaus', '15,25', 1],
    ['POPS', 'burger, pulled pork, koolsla, Kansas City bbq-saus', '16,00'],
    ['Beyond Meat', 'plantaardige burger, Cheddar, ui, mayo, ketchup, augurk', '15,75', 1],
    ['Old Amsterdam', 'burger, ui, augurk, Old Amsterdam kaas, ‘Zeedijk’ saus', '15,25', 1],
    ['Pulled pork', 'langzaam gegaard varkensvlees, Kansas City bbq-saus', '13,75', 1],
    ['Tex mex', 'burger, salsa, zure room, jalapeño, guacamole', '14,25', 1],
    ['Smash burger', 'burger, baconjam, spek, kaas, POPS hamburgersaus. Enkele burger (100 gr) 11,50 / dubbele burger (200 gr)', '15,50']
  ]},
  { t: 'Specials', i: [
    ['Hotdog classic style', 'mayo, ketchup, Amerikaanse mosterd, uitjes', '8,50', 1],
    ['Hotdog New York', 'hotdog, pastrami, lichte mosterdsaus, augurk, kool, ui', '11,75'],
    ['Fajitas', 'kip, maïs, Cheddar, ui, paprika, sauzen', '14,00'],
    ['Vega(n) fajitas', '‘kip’ van De Vegetarische Slager, maïs, Cheddar, ui, paprika, sauzen', '16,25', 1],
    ['Southern fried fish', 'kabeljauw (fish and chips), friet, cocktailsaus', '16,50']
  ]},
  SALADES, SIDES,
  KIDS('Geserveerd met friet en maïs, als dessert een ijsje of popcorn en een kadootje.'),
  { t: 'Voor de kleintjes', i: [['Boterham Nutella of kaas', '', '3,25']] }
 ]},
 { id: 'diner', label: 'Diner', intro: 'Alles van de dinerkaart kun je ook afhalen of laten bezorgen.', groups: [
  { t: 'Voorgerechten', i: [
    ['Nachos', 'salsa, guacamole, zure room, Cheddar. Extra topping: pulled pork + 4,75, kipstukjes + 4,75, jalapeños + 2,00', '9,75'],
    ['Breekbrood', 'kruidenboter & pesto, half 5,75 / heel', '8,75'],
    ['Empanada', 'Mexicaanse specialiteit, kip (6 st)', '7,50'],
    ['Calamares', 'inktvisringen, cocktailsaus', '7,50'],
    ['Rundercarpaccio', 'rundvlees, Parmezaan, truffelmayo, sla, pijnboompitten, toast', '12,50'],
    ['Maissoep', 'met kip', '7,50', 1],
    ['POPS platter', 'selectie van hartige hapjes: nachos, empanadas, pulled beef bitterbal, soep, gerookte zalm, carpaccio, calamares. Per persoon, vanaf 2 personen', '13,75']
  ]},
  SALADES,
  { t: 'Frietjes', i: [
    ['Frietje mac & cheese', 'friet, mac & cheese, bbq-saus, spek', '11,50', 1],
    ['Frietje Caesar', 'friet, Parmezaan, sla, kip, bacon, Caesarsaus', '12,50', 1],
    ['Loaded fries', 'friet, sla, tomaat, pulled pork, bacon, kaas, bbq-saus', '13,75', 1],
    ['Frietje truffel', 'friet, Parmezaan, truffelmayo', '8,75', 1]
  ]},
  { t: 'Burgers', note: BURGER_NOTE, i: [
    ['Classic', 'burger, spek, Cheddar, ui, augurk, mayo, ketchup', '18,50'],
    ['Cheesy chili chicken', 'kip, Cheddar, augurk, ui, crispy chilimayo', '19,25', 1],
    ['Crispy chicken', 'kip, augurk, ui, cocktailsaus', '18,00'],
    ['New York', 'burger, pastrami, honingmosterdsaus, ui, augurk, kool', '20,75', 1],
    ['Italian', 'burger, mozzarella, Parmaham, truffelmayo', '20,25', 1],
    ['Veggie ‘chicken’', 'plantaardige ‘kip’, ui, augurk, cocktailsaus', '20,25', 1],
    ['POPS', 'burger, pulled pork, coleslaw, Kansas City bbq-saus', '21,00'],
    ['Beyond Meat', 'plantaardige burger, Cheddar, ui, mayo, ketchup, augurk', '20,75', 1],
    ['Old Amsterdam', 'burger, ui, augurk, Old Amsterdam kaas, ‘Zeedijk’ saus', '20,25', 1],
    ['Pulled pork', 'langzaam gegaard varkensvlees, Kansas City bbq-saus', '18,75', 1],
    ['Tex mex', 'burger, salsa, zure room, jalapeño, guacamole', '19,25', 1],
    ['Smash burger', 'burger, baconjam, spek, kaas, POPS hamburgersaus. Enkele burger (100 gr) 16,50 / dubbele burger (200 gr)', '20,50']
  ]},
  { t: 'Specials', note: 'Geserveerd met friet, salade en maïs.', i: [
    ['Steak', 'graangevoerd rundvlees, medium, pepersaus', '27,50'],
    ['Mixed grill', 'steak, spareribs, burger, kip, sauzen', '29,50'],
    ['Spareribs BBQ', 'rub van Grate Goods, POPS glaze', '22,50'],
    ['Southern fried fish', 'kabeljauw (fish and chips), cocktailsaus', '16,50'],
    ['Wrap zalm & calamares', 'wrap, gerookte zalm, calamares, tomaat, komkommer, sla, cocktailsaus, salsa', '18,50'],
    ['Fajitas', 'kip, maïs, Cheddar, ui, paprika, sauzen', '19,00'],
    ['Vega(n) fajitas', '‘kip’ van De Vegetarische Slager, maïs, Cheddar, ui, paprika, sauzen', '21,25', 1],
    ['Hotdog classic style', 'mayo, ketchup, Amerikaanse mosterd, crispy uitjes', '13,50', 1],
    ['Hotdog New York style', 'hotdog, pastrami, kool, lichte mosterdsaus, augurk, ui', '16,75']
  ]},
  SIDES,
  KIDS('Geserveerd met friet, maïs en een ijsje of popcorn als dessert, en een klein kadootje.')
 ]},
 { id: 'zoet', label: 'Desserts & shakes', groups: [
  { t: 'Nagerechten', i: [
    ['Iced coffee', '', '5,50'],
    ['Espresso martini', 'espresso, vodka, Kahlúa', '9,00'],
    ['Dubai chocoladebol', 'pistacheijs, knafeh, slagroom', '8,75'],
    ['Lemon meringue', 'kokosijs, slagroom', '8,75'],
    ['Frambozen cheesecake', 'mangoijs, slagroom', '8,75'],
    ['OREO cheesecake', 'salted caramelijs, slagroom', '8,75'],
    ['Bolletje ijs', 'diverse smaken (slagroom + 0,70)', '2,25'],
    ['Ben & Jerry’s ijsjes', 'diverse smaken', '3,50'],
    ['Churros', 'Nutella, kaneelsuiker (4 st)', '5,75'],
    ['Kinderijsje', 'mini donut, ‘birthday cake’ ijs, slagroom', '3,75']
  ]},
  { t: 'Milkshakes', note: 'Alle milkshakes 5,50.', i: [
    ['Bosvruchten', '', '5,50'], ['Nutella', '', '5,50'], ['Banaan', '', '5,50'], ['Aardbei', '', '5,50'],
    ['Oreo', '', '5,50'], ['Stroopwafel', '', '5,50'], ['IJskoffie POPS', '', '5,50'], ['Mango', '', '5,50'], ['Vanille', '', '5,50']
  ]},
  { t: 'Smoothies', i: [
    ['Sinaasappel, banaan, aardbei', '', '5,50'], ['Mango, kiwi, banaan', '', '5,50']
  ]},
  { t: 'Taarten', i: [
    ['Huisgemaakte appeltaart', 'slagroom + 0,70', '4,75'],
    ['Lemon meringue', '', '4,75'], ['Frambozen cheesecake', '', '4,75'], ['OREO cheesecake', '', '4,75'],
    ['American cookie', '', '2,50']
  ]}
 ]},
 { id: 'bites', label: 'Bits & bites', intro: 'Hartige hapjes voor bij de borrel.', groups: [
  { t: 'Bits & bites', i: [
    ['POPS snacks', 'nachos, uienringen, empanadas, kaasstengels, krokante kipstukjes, bitterballen, calamares', '13,25'],
    ['Brood', 'kruidenboter & pesto, klein 5,75 / groot', '8,75'],
    ['Nachos', 'salsa, zure room, guacamole, Cheddar. Extra topping: pulled pork + 4,75, kip + 4,75, jalapeños + 2,00', '9,75'],
    ['Uienringen', 'witte BBQ-saus (6 st)', '4,75'],
    ['Calamares', 'inktvisringen, cocktailsaus', '7,50'],
    ['Empanadas', 'Mexicaanse deeghapjes met kip, salsa, guacamole (6 st)', '7,50'],
    ['Pulled beef ‘bitterballen’', 'draadjesvlees (8 st)', '8,00'],
    ['Krokante kipstukjes', 'crispy chicken bites, chilisaus (8 st)', '7,75'],
    ['Kaasstengels', 'cheese fingers, chilisaus (8 st)', '7,75']
  ]},
  { t: 'Cocktails & gin', i: [
    ['Aperol spritz', 'Aperol, prosecco, sinaasappel, bruiswater', '9,00'],
    ['Limoncello spritz', 'limoncello, prosecco, citroen, bruiswater', '9,00'],
    ['Espresso martini', 'espresso, vodka, Kahlúa', '9,00'],
    ['Pornstar martini', 'Passoã, vodka, vanille, passievrucht', '12,00'],
    ['Mojito', 'rum, limoen, munt, bruiswater', '10,50'],
    ['Strawberry mojito', 'rum, aardbei, munt, bruiswater', '10,50'],
    ['Long Island iced tea', 'rum, vodka, gin, limoen, tequila, Cointreau, Coca-Cola', '10,50'],
    ['Moscow mule', 'vodka, ginger beer, limoen', '10,50'],
    ['Piña colada', 'rum, kokos, ananas', '11,00'],
    ['Strawberry daiquiri', 'rum, limoen, aardbei', '11,00'],
    ['Pink gin tonic', 'Gordon’s pink gin, rood fruit, tonic', '10,50'],
    ['Gin tonic', 'Tanqueray gin, citroen, tonic', '10,50'],
    ['Virgin mojito', 'limoen, munt, bruiswater', '6,50'],
    ['Virgin gin tonic', 'gin 0.0, citroen, tonic', '8,00']
  ]}
 ]},
 { id: 'dranken', label: 'Dranken', groups: [
  { t: 'Warme dranken', i: [
    ['Koffie', '', '3,25'], ['Grote koffie', '', '4,85'], ['Espresso', '', '3,25'], ['Dubbele espresso', '', '4,25'],
    ['Espresso macchiato', '', '3,50'], ['Cappuccino', '', '3,70'], ['Grote cappuccino', '', '5,00'], ['Flat white', '', '4,25'],
    ['Koffie verkeerd', '', '4,10'], ['Latte macchiato', '', '4,10'], ['Chai latte', '', '4,10'], ['IJskoffie', '', '5,50'],
    ['Thee', '', '3,20'], ['Verse muntthee', '', '3,75'], ['Verse gemberthee', '', '3,75'],
    ['Warme chocomel', '', '4,00'], ['Glühwein', '', '5,50'],
    ['Havermelk', 'extra', '+ 0,50'], ['Karamel-, hazelnoot- of kaneelsiroop', 'extra', '+ 0,50'], ['Slagroom', 'extra', '+ 0,70']
  ]},
  { t: 'Speciale koffie', i: [
    ['Irish coffee', 'Irish whiskey', '8,50'], ['Spanish coffee', 'Tia Maria', '8,50'], ['Italian coffee', 'Amaretto', '8,50'],
    ['French coffee', 'Grand Marnier', '8,50'], ['D.O.M. coffee', 'Bénédictine', '8,50']
  ]},
  { t: 'American sodas', i: [
    ['Cream soda', '', '4,50'], ['Root beer', '', '4,50'], ['Ginger beer', '', '4,50'],
    ['Fanta blueberry / strawberry', '', '4,50'], ['Dr Pepper cherry / vanilla', '', '4,50'],
    ['Arizona iced tea peach', '', '5,00'], ['Arizona iced tea green', '', '5,00']
  ]},
  { t: 'Frisdranken & sappen', i: [
    ['Coca-Cola / Zero', '', '3,40'], ['Fanta / Sprite / Cassis', '', '3,40'], ['Ice tea black / green', '', '3,50'],
    ['Bitter lemon / Tonic', '', '3,50'], ['Ginger ale / Rivella', '', '3,50'],
    ['Mineraalwater plat of bruisend', '0,2 l 2,75 / 0,75 l', '6,00'],
    ['Verse jus d’orange', '', '3,80'], ['Appelsap', '', '3,50'], ['Chocomel', '', '3,50'], ['Fristi', '', '3,50'], ['Melk', '', '3,00']
  ]},
  { t: 'Bier', i: [
    ['Heineken klein', '', '3,50'], ['Heineken groot', '', '6,50'], ['Lagunitas IPA', '', '5,20'], ['Seizoensbier', 'vanaf', '5,20'],
    ['Affligem Tripel', 'fles', '5,00'], ['Apple Bandit cider', 'fles', '5,00'], ['Liefmans', 'fles', '5,00'], ['Corona', 'fles', '5,50'], ['Budweiser', 'fles', '4,00'],
    ['Radler / 0.0', '', '4,25'], ['Heineken 0.0', '', '3,50'], ['Affligem 0.0', '', '5,00'], ['Brand Weizen 0.0', '', '5,00'], ['Texels Skuumkoppe 0.0', '', '5,00'],
    ['Bucket of Coronas', '6 flesjes', '23,50'], ['Bucket of Buds', '6 flesjes', '17,50']
  ]},
  { t: 'Wijn', note: 'Per glas 5,50, per fles 27,50.', i: [
    ['Romi & Lola chardonnay', 'wit, Italië, fris en licht', '5,50 / 27,50'],
    ['Romi & Lola pinot grigio', 'wit, Italië, droog en fruitig', '5,50 / 27,50'],
    ['Serengeti sauvignon blanc', 'wit, Zuid-Afrika, fris en fruitig', '5,50 / 27,50'],
    ['Freude müller-thurgau, silvaner, kerner', 'wit, Duitsland, zoet en licht', '5,50 / 27,50'],
    ['Pictor merlot', 'rood, Italië, soepel en rond', '5,50 / 27,50'],
    ['Pablo y Walter malbec', 'rood, Argentinië, stevig en diep', '5,50 / 27,50'],
    ['Pasquiers grenache, cinsault', 'rosé, Frankrijk, fris en licht', '5,50 / 27,50'],
    ['Ca’Neri prosecco', 'mousserend, glera, Italië, zacht en droog. 0,2 l 8,00 / 0,75 l', '31,50']
  ]},
  { t: 'Gedistilleerd', i: [
    ['Jonge / oude jenever', '', '4,00'], ['Vieux', '', '5,00'], ['Rode port / Campari', '', '4,50'], ['Martini bianco / rosso', '', '4,50'],
    ['Bacardi / lemon', '', '4,50'], ['Bruine rum', '', '4,50'], ['Malibu / gin / Sambuca / limoncello', '', '4,50'],
    ['Amaretto / Baileys / Licor 43 / Grand Marnier / Cointreau / Drambuie / D.O.M. Bénédictine', '', '5,50']
  ]},
  { t: 'Whiskey & cognac', i: [
    ['Jack Daniel’s', '', '5,50'], ['Johnnie Walker Red', '', '5,00'], ['Tullamore Dew', '', '5,00'], ['Jim Beam', '', '5,00'],
    ['Courvoisier VS', 'cognac', '6,00'], ['Rémy Martin VSOP', 'cognac', '6,50']
  ]}
 ]}
];
