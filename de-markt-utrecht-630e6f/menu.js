// Menukaarten De Markt, overgenomen uit hun PDF's (lunch V4.1, diner V4.2, dranken V4.2, september 2026).
// Item: [naam, omschrijving, prijs, klassieker?]
window.MENU = {
  lunch: [
    { title: 'Antipasti Bar', hand: 'perfect om te delen', sub: 'Per twee personen', items: [
      ['Antipasti Plateau Mercato', 'Het lekkerste van de Italiaanse markt: ambachtelijke vleeswaren, vis en vega delicatessen', '14,95 p.p.'],
      ['Antipasti Plateau Carne', 'Ambachtelijke vleeswaren op Italiaanse wijze', '14,95 p.p.'],
      ['Antipasti Plateau Pesce', 'Een mix van onze favoriete vis en zeevruchten', '14,95 p.p.'],
      ['Antipasti Plateau Legume', 'Een mix van vegetarische gerechten, kazen en groenten', '14,95 p.p.']
    ]},
    { title: 'Soep', items: [
      ['Toscaanse Tomatensoep', 'Met crème fraîche en bieslook', '8,95'],
      ['Pompoensoep', 'Met pompoenpitten en peterselie-olie', '8,95']
    ]},
    { title: 'Broodjes', sub: 'Keuze uit wit, bruin of Italiaanse bol (+0,95)', items: [
      ['Carpaccio', 'Flinterdun gesneden carpaccio met parmezaan, truffelmayonaise, krokante macadamia, rucola en zongedroogde tomaat', '15,95', true],
      ['Caesar Chicken', 'Met little gem, gekookt ei, gerookte pancetta, parmezaan en caesardressing', '14,95'],
      ['Huisgemaakte Tonijnsalade', 'Met gekookt ei, kappertjes, rode ui, cherrytomaat en komkommer', '14,95'],
      ['Kroketten', 'Met cornichons, rucola en mosterd', '13,95'],
      ['Romige Burrata', 'Met rucola, tomaat, groene pesto, pijnboompitten en balsamico', '14,95']
    ]},
    { title: 'Gegrilde Ciabatta', items: [
      ['Chorizo', 'Met gesmolten cheddar, jalapeño, geroosterde paprika, rode ui en lichtpittige chilimayonaise', '11,95'],
      ['Frittata', 'Rijk gevulde frittata met blauwe kaas, zongedroogde tomatenspread en een frisse pestomayonaise', '11,95']
    ]},
    { title: 'Salade', items: [
      ['Gerookte Zalm Salade', 'Met quinoa, edamame, radijs, cherrytomaten, komkommer en frisse citrusvinaigrette', '20,95'],
      ['Caesar Salade', 'Met little gem, kip, gerookte pancetta, croutons en caesardressing', '20,95'],
      ['Burrata Salade', 'Met cherrytomaten, komkommer, croutons, pijnboompitten, granaatappel en balsamico', '20,95']
    ], after: 'lekker met gepelde gamba\'s +5,-' },
    { title: 'Pizza', items: [
      ['Burrata en Gerookte Zalm', 'Met courgette, munt en gerookte amandelen', '25,95'],
      ['Mozzarella', 'Met verse tomaat, parmezaan en basilicum', '18,95'],
      ['Parmaham', 'Met cherrytomaten, rucola en parmezaan', '19,95']
    ], after: 'liever glutenvrij? geen probleem! +3,50' },
    { title: 'Extra toppings', plain: [
      'Truffelolie, rucola of pesto: +1,75 per topping',
      'Cherrytomaat, olijf, jalapeño of paprika: +2,-',
      'Pijnboompitten, salami of parmaham: +3,-',
      'Gepelde gamba\'s of burrata: +5,-'
    ]},
    { title: 'Pasta', items: [
      ['Spaghetti Carbonara', 'Zoals in Italië: met krokant gebakken guanciale, pecorino en eigeel', '19,95'],
      ['Traditionele Lasagne', 'Met rundvlees, bechamel, frisse salade, pijnboompitten en balsamicostroop', '19,95'],
      ['Ravioli Cacio e Pepe', 'Met romige kaas-pepersaus, spinazie en zongedroogde tomaten', '20,95'],
      ['Gnocchi alla Norma', 'Met marinarasaus, ricottacrème, geroosterde aubergine, amandelen en basilicum', '21,95']
    ]},
    { title: 'Bijgerechten', items: [
      ['Salade De Markt', 'Met cherrytomaat, radijs, komkommer, parmezaan en huisgemaakte dressing', '6,95'],
      ['Gegrilde Groenten', 'Diverse seizoensgroenten', '6,95'],
      ['Friet met mayonaise', 'of met truffelmayonaise 6,25', '5,95'],
      ['Italiaanse Friet', 'Met truffelmayo en parmezaan', '6,95']
    ]},
    { title: 'Bambini', items: [
      ['Spaghetti Bambini', 'Met tomatensaus, gehaktballetjes en een raketje toe', '13,95'],
      ['Pizza Bambini', 'Pizza met tomatensaus, kaas en een raketje toe', '13,95']
    ]},
    { title: 'Gebak', items: [
      ['Appeltaart', '', '5,95'],
      ['Cheesecake', '', '5,95'],
      ['Tiramisu', '', '5,95']
    ]}
  ],

  diner: [
    { title: 'Voorgerechten', items: [
      ['Brood met Dips', 'Met tomaat-basilicum dip en Italiaanse olijfolie met citroenpeper', '6,95'],
      ['Carpaccio', 'Flinterdun gesneden rundercarpaccio met romige truffelmayonaise, krokante macadamia, rucola, parmezaan en zongedroogde tomaat', '15,95', true],
      ['Tonijntartaar', 'Met avocadocrème, knapperige papadum, mango, sesam en ponzudressing', '14,95'],
      ['Romige Burrata', 'Op bietenhummus met gepekelde biet, krokante crostini, balsamico en pistache', '14,95']
    ]},
    { title: 'Antipasti Bar', hand: 'perfect om te delen', sub: 'Vanaf 2 personen', items: [
      ['Antipasti Plateau Mercato', 'Het lekkerste van de Italiaanse markt op één plank: ambachtelijke vleeswaren, vis en vega delicatessen', '14,95 p.p.', true],
      ['Antipasti Plateau Carne', 'Ambachtelijke vleeswaren op Italiaanse wijze', '14,95 p.p.'],
      ['Antipasti Plateau Pesce', 'Een combinatie van onze favoriete vis en zeevruchten', '14,95 p.p.'],
      ['Antipasti Plateau Legume', 'Een mix van vegetarische gerechten, kazen en groenten', '14,95 p.p.']
    ]},
    { title: 'Soepen', items: [
      ['Toscaanse Tomatensoep', 'Met crème fraîche en bieslook', '8,95'],
      ['Pompoensoep', 'Met pompoenpitten en peterselie-olie', '8,95']
    ]},
    { title: 'Pasta', items: [
      ['Spaghetti Carbonara', 'Zoals in Italië: met krokant gebakken guanciale, pecorino en eigeel', '19,95'],
      ['Traditionele Lasagne', 'Met rundvlees en bechamel, geserveerd met frisse salade, pijnboompitten en balsamicostroop', '19,95'],
      ['Ravioli Cacio e Pepe', 'Met romige kaas-pepersaus, spinazie en zongedroogde tomaten', '20,95'],
      ['Gnocchi alla Norma', 'Met marinarasaus, geroosterde aubergine, ricottacrème, amandelen en basilicum', '21,95']
    ]},
    { title: 'Secondi', items: [
      ['Entrecôte van de Grill 350 gr', 'Malse runderentrecôte met krokant gebakken rosevalaardappels, maïs en pepersaus', '32,95'],
      ['Krokante Buikspek', 'Met shiitake paddenstoelen, zoete aardappelpuree, appel en mosterdsaus', '25,95'],
      ['Maïskip', 'Met pastinaakpuree, babymaïs, romanesco en pestosaus', '25,95'],
      ['Zeebaarsfilet', 'Met Siciliaanse caponata, spruiten, frisse salsa verde en radijs', '24,95'],
      ['Gebakken Zalmfilet', 'Met inktvisbulgur, asperges, venkel, sinaasappel en beurre blanc', '24,95'],
      ['Porcini Risotto', 'Met paddenstoelen, parmezaancrème, gepekelde shimeji en truffelolie', '18,95', true]
    ], after: 'lekker met gepelde gamba\'s +5,-' },
    { title: 'Salade', items: [
      ['Gerookte Zalm Salade', 'Gerookte zalm met quinoa, edamame, cherrytomaten, komkommer, radijs en frisse citrusvinaigrette', '20,95'],
      ['Burrata Salade', 'Met cherrytomaten, komkommer, croutons, pijnboompitten, granaatappel en balsamico', '20,95'],
      ['Caesar Salade', 'Met kip, little gem, gerookte pancetta, croutons en caesardressing', '20,95']
    ], after: 'lekker met gepelde gamba\'s +5,-' },
    { title: 'Pizza', items: [
      ['Burrata en Gerookte Zalm', 'Met courgette, munt en gerookte amandelen', '25,95'],
      ['Mozzarella', 'Met verse tomaat, parmezaan en basilicum', '18,95'],
      ['Bianca al Tartufo', 'Met truffelmascarpone, spek en verschillende paddenstoelen', '19,95'],
      ['Parmaham', 'Met cherrytomaten, rucola en parmezaan', '19,95'],
      ['Salsiccia', 'Met Italiaanse worst, aardappel, rozemarijn, chilivlokken en bieslook', '19,95'],
      ['Tonijn', 'Met rode ui, kappertjes, olijven en rucola', '19,95']
    ], after: 'liever een glutenvrije bodem? geen probleem! +3,50' },
    { title: 'Pizza toppings', hand: 'maak \'m compleet', plain: [
      'Truffelolie, rucola of pesto: 1,75 per topping',
      'Cherrytomaat, olijf, jalapeño of paprika: 2,-',
      'Pijnboompitten, salami of parmaham: 3,-',
      'Gepelde gamba\'s of burrata: 5,-'
    ]},
    { title: 'Bijgerechten', items: [
      ['Salade De Markt', 'Met cherrytomaat, radijs, komkommer, parmezaan en huisgemaakte dressing', '6,95'],
      ['Gegrilde Groenten', 'Diverse seizoensgroenten', '6,95'],
      ['Friet', 'Met mayonaise, of met truffelmayonaise 6,25', '5,95'],
      ['Italiaanse Friet', 'Met parmezaan en truffelmayonaise', '6,95']
    ]},
    { title: 'Bambini', hand: 'voor de kids', items: [
      ['Spaghetti Bambini', 'Met tomatensaus, gehaktballetjes en een raketje toe', '13,95'],
      ['Pizza Bambini', 'Pizza met tomatensaus, kaas en een raketje toe', '13,95']
    ]},
    { title: 'Desserts', items: [
      ['Nonna\'s Tiramisu', 'Op traditionele wijze', '10,95', true],
      ['Speculoos Cheesecake', 'Met speculoossaus en karamelijs', '9,95'],
      ['Chocolade Brownie', 'Met chocoladesaus en vanille-ijs', '9,95'],
      ['Sgroppino', '', '10,95'],
      ['Kaasplateau', 'Een selectie van kazen met vijgenbrood en appelstroop', '12,95']
    ]}
  ],

  dranken: [
    { title: 'De Markt favorieten', items: [
      ['Aperol Spritz', 'Met een schaaltje olijven en chips', '11,95'],
      ['Oudaen Wit', 'Zacht, romig en fris witbier uit onze eigen brouwerij, met tonen van sinaasappel en koriander. 30 cl of 50 cl', '5,95 / 8,95'],
      ['Grillo & Viognier', 'Rijke, elegante, tropische witte wijn uit Sicilië. Glas of fles', '6,25 / 31,95'],
      ['Teroldego, Merlot & Cabernet Sauvignon', 'Frisse maar krachtige rode wijn vol met bessen. Glas of fles', '6,25 / 31,95']
    ]},
    { title: 'Warme dranken', items: [
      ['Koffie', '', '3,70'], ['Cappuccino', '', '4,10'], ['Espresso / Espresso Macchiato', '', '3,70'],
      ['Dubbele Espresso', '', '4,70'], ['Latte Macchiato', '', '4,60'], ['Koffie Verkeerd', '', '4,10'],
      ['Flat White', '', '4,85'], ['Cortado', '', '3,45'], ['Chai Latte', '', '4,10'], ['Dirty Chai', '', '4,60'],
      ['Iced Latte', 'Lekker met karamel +0,50', '4,50'],
      ['Verse Muntthee / Verse Gemberthee', '', '4,25'],
      ['Thee', 'Earl Grey, English Breakfast, Green Lemon, Jasmijn, Bosvruchten of Rooibos', '3,60'],
      ['Warme Chocomel', 'Met slagroom +0,50', '3,95']
    ], after: 'liever decafé? +0,10 · liever havermelk? +0,50' },
    { title: 'Frisdranken', items: [
      ['Frisdranken', 'Coca-Cola, Coca-Cola Zero, Fanta Orange, Fanta Cassis, Sprite Zero, Fuze Tea Sparkling Lemon, Fuze Tea Green, Fuze Tea Peach, Rivella of Crodino', '3,95'],
      ['Royal Bliss', 'Bitter Lemon, Tonic Water, Ginger Ale of Ginger Beer', '4,50'],
      ['Tropic Glow', 'Mango, passievrucht en kokosnoot', '5,50'],
      ['Berry Blossom', 'Aardbei, framboos en rozemarijn', '5,50'],
      ['Plat water', '0,25 L of 0,5 L', '3,95 / 5,95'],
      ['Bruiswater', '0,25 L of 0,5 L', '3,95 / 5,95']
    ]},
    { title: 'Sappen & zuivel', items: [
      ['Jus d\'Orange', '', '4,95'], ['Appelsap', '', '4,10'], ['Tomatensap', '', '4,10'],
      ['Perensap', '', '4,10'], ['Melk', '', '2,95'], ['Chocomel / Fristi', '', '3,95']
    ]},
    { title: 'Bieren van de tap', items: [
      ['Birra Moretti', '0,25 L / 0,33 L / 0,5 L', '3,95 / 4,95 / 7,50'],
      ['Oudaen Wit', 'Uit eigen brouwerij. 0,3 L / 0,5 L', '5,95 / 8,95'],
      ['Affligem Blond', '', '6,25'],
      ['Wisseltaps', '', 'vanaf 6,25']
    ]},
    { title: 'Flesbieren', items: [
      ['La Chouffe', 'Fruitig, kruidig en stevig', '6,50'],
      ['Duvel', 'Sterk, fruitig en droog', '6,95'],
      ['Affligem Blond 0%', 'Fruitig, zacht en licht kruidig', '6,25'],
      ['Affligem Dubbel', 'Donker, moutig en lichtzoet', '6,25'],
      ['Affligem Tripel', 'Vol, kruidig en krachtig', '6,25'],
      ['Liefmans Fruitesse', 'Fruitig, fris en lichtzoet', '6,25'],
      ['Radler', 'Fris, citrusachtig en lichtzoet', '4,95'],
      ['Radler 0%', 'Fris, citrusachtig en lichtzoet', '4,95'],
      ['Sol', 'Licht, fris en soepel', '6,25'],
      ['Brouwerij \'t IJ IPA', 'Hoppig, fruitig en bitter', '6,95'],
      ['Van de Streek Playground IPA 0,3%', 'Hoppig, fruitig en fris bitter', '6,95'],
      ['Brand Weizen 0%', 'Fris, fruitig en zacht', '6,25'],
      ['Birra Moretti 0%', 'Fris, zacht en licht bitter', '3,95']
    ]},
    { title: 'Cocktails & gin-tonics', plain: [
      'Voor onze cocktails, gin-tonics en spritzen: vraag naar de borrelkaart.'
    ]},
    { title: 'Mousserend', wine: true, items: [
      ['Prosecco, Pizzolato Spumante Brut', 'Veneto, Italië. Citrus, groene appel, zachte bruis', '7,95 / 39,95']
    ]},
    { title: 'Witte wijnen', wine: true, items: [
      ['Pinot Grigio, Masilio', 'Veneto, Italië. Fris, appel, peer, meloen', '6,95 / 24,95 / 34,95'],
      ['Garganega, Torre del Falasco', 'Veneto, Italië. Perzik, nectarines, citrus, zachte afdronk', '5,95 / 20,95 / 29,95'],
      ['Sauvignon Blanc, Plaimont', 'Côtes de Gascogne, Frankrijk. Expressief, sappig, exotisch fruit', '6,25 / 21,95 / 31,95'],
      ['Pecorino, Lunaria', 'Abruzzen, Italië. Levendig, wit fruit, licht kruidig, lange afdronk', '7,95 / 28,95 / 39,95'],
      ['Grillo & Viognier, Feudo Arancio', 'Sicilië, Italië. Rijk, elegant, tropisch fruit, acaciahoning', '6,25 / 21,95 / 31,95'],
      ['Verdejo, Puerta Adalia', 'Rueda, Spanje. Wit fruit, frisse zuren, licht bittertje', '6,95 / 24,95 / 34,95'],
      ['Chardonnay, Ante Cime', 'Pays d\'Oc, Frankrijk. Vol, rijp fruit, amandel, brioche', '7,25 / 25,95 / 36,95']
    ]},
    { title: 'Rosé', wine: true, items: [
      ['Pinot Grigio Blush, Forte Alto', 'Dolomiti, Italië. Fris, rood fruit, grapefruit, licht bloemig', '6,25 / 21,95 / 31,95']
    ]},
    { title: 'Rode wijnen', wine: true, items: [
      ['Primitivo, Masilio', 'Puglia, Italië. Gebalanceerd, rijp zwart fruit, licht kruidig', '6,95 / 24,95 / 34,95'],
      ['Merlot, Forte Alto', 'Dolomiti, Italië. Rijp rood fruit, elegant, vleugje eiken', '6,25 / 21,95 / 31,95'],
      ['Valpolicella Ripasso Superiore, Torre del Falasco', 'Veneto, Italië. Kruidkoek, rozijnen, zoethout, gestoofd fruit', '7,95 / 28,95 / 39,95'],
      ['Montepulciano, Lunaria', 'Abruzzen, Italië. Vol, amandelen, bramen, pruimen', '6,95 / 24,95 / 34,95'],
      ['Teroldego, Merlot & Cabernet Sauvignon, Castel Firmian', 'Trentino, Italië. Fris, krachtig, bosbessen, rode bessen', '6,25 / 21,95 / 31,95'],
      ['Pinot Noir, Feudo Arancio', 'Sicilië, Italië. Elegant, zachte tannines, rabarber, kreupelhout', '6,25 / 21,95 / 31,95'],
      ['Sangiovese, Primitivo & Negroamaro, 3Passo Rosso', 'Vino d\'Italia, Italië. Intens, tabak, gedroogd fruit, lange afdronk', '7,25 / 25,95 / 36,95']
    ]},
    { title: 'Likeuren', items: [
      ['Amaretto', '', '5,95'], ['Limoncello', '', '5,95'], ['Santa Maria Limoncino', '', '6,95'], ['Sambuca', '', '5,95'],
      ['Frangelico', '', '5,95'], ['Tia Maria', '', '5,95'], ['Licor 43', '', '5,95'], ['Kahlúa', '', '5,95'],
      ['Baileys', '', '5,95'], ['Cointreau', '', '5,95'], ['Grand Marnier', '', '5,95'], ['Drambuie', '', '5,95'],
      ['D.O.M. Bénédictine', '', '5,95'], ['Southern Comfort', '', '5,95']
    ]},
    { title: 'Whiskey, cognac & port', items: [
      ['Jameson', '', '5,95'], ['Bulleit Bourbon', '', '5,95'], ['Johnnie Walker Red Label', '', '5,95'],
      ['Johnnie Walker Black Label', '', '6,95'], ['The Famous Grouse', '', '5,95'],
      ['Courvoisier V.S.', '', '5,95'], ['Courvoisier V.S.O.P.', '', '8,50'],
      ['Port Ruby', '', '5,95'], ['Port Tawny', '', '5,95'], ['Port Tawny 10 yrs', '', '7,95']
    ]}
  ]
};
