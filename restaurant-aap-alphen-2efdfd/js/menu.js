// Menukaarten Restaurant Aap 2026, letterlijk uit hun PDF's (bewuste Afrikaanse schrijfwijze).
// item: [naam, omschrijving, toeslag, label]  label: 'p' = plantaardig, 'v' = vegetarisch
window.AAP_MENU = [
  {
    id: 'diner', tab: 'Dinermenu',
    head: { big: '3 gangen 39,50', small: 'Voor-, hoofd- en nagerecht of koffie/thee' },
    prices: ['Voorgerecht 15,--', 'Soep 8,50', 'Hoofdgerecht 25,--', 'Nagerecht 9,50'],
    pdf: 'https://www.restaurantaap.nl/uploads/00MU65GX/Dinermenu2026.pdf',
    groups: [
      { t: 'Voorgeregte', items: [
        ['Salm & Paling & Garnaal', 'Gerookte salm, mousse van gerookte paling en roze garnaaltjes met ryke cocktailsous'],
        ['Knollentuin', 'In Marokkaanse kruiden gemarineerde seldery op bietencreme, met gecaramelliseerde ui, zoete regendruppel-peppers en crispy mix van gepofte granen', '', 'p'],
        ['Truffelslaai', 'Truffelpaté, broccolirijst, gerookte en gedroogde tuinbonen', '', 'p'],
        ['Krummelkaasslaai', 'De Jong\'s geitenkaas, zonnebloempitten, couscous, dadelstukjes', '', 'v'],
        ['Salige Salmcocktail', 'Heerlijke kombinasie van sashimi van zalm met een romerige tonynsous', '', 'p'],
        ['Botervis', 'Carpaccio van botervis met tonijnsalade'],
        ['Afrikaanse Poké', 'Afrikaanse versie van de poké bowl met quinoa, hummus, avocado, bloue bessen, mango en vijg', '', 'p'],
        ['Biltong', 'Gedroogde runderham, droë wors (droge worst), soetpatats en soetrissie (paprika)'],
        ['Kreef Kelkie', 'Cocktail van rivierkreeft en crabflakes met een tropiese kruidige sous van mango en curry'],
        ['Carpaccio', 'Gesneden koeivleis (rund), notenmelange, kaas en truffelmayonaise'],
        ['Tamatiesop', 'Tomatensoep met een scheutje room en runderballetjes', 'soep 8,50']
      ]},
      { t: 'Hoofdgeregte', note: 'Standaard geserveerd met friet, rijst, warme groente, rauwkost en mayonaise.', items: [
        ['Smoorvis', 'Victoriabaarsfilet, gemarineerd in paprika, knoflook en rooiboskruiden met Kaapverdische saus (sweet & sour)'],
        ['Pienk Salm', 'Roze zalmfilet op die vel gebraai (op de huid gebakken)'],
        ['Saté & Wors', 'Verdraaid lekkere plantaardige saté en braadworst met pindasaus, atjar en gebakken uitjes', '', 'p'],
        ['Jackpot', 'Rendang van jackfruit (Afrikaanse vrucht), gestoofd in boemboe en santen, met gebakken pynappel en ananassaus', '', 'p'],
        ['Broodje AAP', 'Terug op veler verzoek: niet van echt te onderscheiden hamburger met kaas en smokey bbq-saus', '', 'p'],
        ['Oesterzwamkebab', 'Geroosterde en gekruide oestersampioene met een plantgebaseerde biefstuk', '', 'p'],
        ['Chakalaka-kip', 'Bietjie skerp: op lage temperatuur gegaarde kipfilet met pittige Zuid-Afrikaanse groente-chillisaus'],
        ['Bobotie', 'Grof maalvleis van diverse lokale wildsoorten (hert, haas, ree) met abrikoos, rozijn, bobotiekruiden en Mrs. Balls Original chutney'],
        ['Chicken in Pyjama', 'Kipfilet gevuld met oude kaas en overgoten met ryke tomatensous'],
        ['Hoender', 'Dikke kipschnitzel van 220 gram met goed gevulde sampioenroomsous'],
        ['Takbok', 'Malse hertenbiefstuk met een sous van 3 kleuren pepers', '+ 5,--'],
        ['Tournedos', 'Biefstuk van de haas met rodeport-sous', '+ 10,--'],
        ['Krokodil', 'In Afrikaanse kruiden gemarineerde krokodil van de Thaba Kwena Crocodile Farm en een wildworstje van lokaal geschoten wild met pepersaus', '+ 7,50']
      ]},
      { t: 'Nageregte', items: [
        ['Heuningtert', 'Warme honingtaart met vanieljeroomys en geklitste room'],
        ['Melktert', 'Baksel van melk, boter en kaneel, lauwwarm geserveerd'],
        ['Dom Pedro', 'Vanieljeroomys, geklutst met koffielikeur, room en sjokola', '+ 2,50'],
        ['Dame Blanche', 'Vanieljeroomys met sjokoladesous en geklitste room'],
        ['Brownie', 'Sjokoladebrownie met vanieljeroomys en geklitste room'],
        ['Sorbet', 'Vanieljeroomys, vrugjes, aarbeisous en geklitste room'],
        ['Notencoupe', 'Vanieljeroomys met pecannoten, karamelsous en geklitste room'],
        ['Coco Dream', 'Kokosyoghurt met ovengebakken granola, aarbeisous en bloue bessen'],
        ['Fris toe', 'Waterijs: mango en aarbei met bloue bessen']
      ]}
    ]
  },
  {
    id: 'kids', tab: 'Kindermenu',
    head: { big: '3 gangen 18,50', small: 'Voor de kleine avonturiers' },
    pdf: 'https://www.restaurantaap.nl/uploads/7UurVwJp/Kindermenu2026.pdf',
    groups: [
      { t: 'Voorgerechten', items: [
        ['Bakje popcorn zoet'], ['Vitamientje', 'Tomaat, komkommer, ananas, druiven zonder pit'],
        ['Vers fruit', 'Cantaloupe, gele meloen, ananas, sinaasappel, watermeloen en druiven'],
        ['Tomatensoep'], ['Gerookte zalm', '', '+ 2,--'], ['Garnalencocktail', '', '+ 2,--']
      ]},
      { t: 'Hoofdgerechten', items: [
        ['Nuggets', '', '', 'p'], ['Bitterballen', '', '', 'p'], ['Kipfrikadel'], ['Pannenkoek', 'Met poedersuiker en stroop'],
        ['Spaghetti', 'Met rode saus en kaas'], ['Witvis', 'Victoriabaarsfilet', '+ 2,--'], ['Kipschnitzel']
      ]},
      { t: 'Nagerechten', items: [
        ['Brownie'], ['Dame Blanche'], ['Kinderijsje', 'Met vruchtjes en slagroom'], ['Suikerwafeltjes', 'Met slagroom'],
        ['IJsjes', 'Aardbei-waterys, mango-waterys, chocolade-ys of vanille-ys']
      ]}
    ]
  },
  {
    id: 'gluten', tab: 'Glutenvrij',
    head: { big: '3 gangen 39,50', small: 'Voor-, hoofd- en nagerecht of koffie/thee' },
    prices: ['Voorgerecht 15,--', 'Soep 8,50', 'Hoofdgerecht 25,--', 'Nagerecht 9,50'],
    pdf: 'https://www.restaurantaap.nl/uploads/cJ74Uf5C/Glutenvrijmenu2026.pdf',
    groups: [
      { t: 'Voorgeregte', items: [
        ['Afrikaanse Poké Slaai', 'Quinoa, avocado, bloue bessen en vijg'],
        ['Kreef Kelkie', 'Cocktail van rivierkreeft en crabflakes met tropiese kruidige sous van mango en curry'],
        ['Truffelslaai', 'Truffelpaté, broccolirijst, gerookte en gedroogde tuinbonen'],
        ['Knollentuin', 'Seldery op bietencreme, gecarameliseerde ui, zoete regendruppel-peppers en crispy mix van gepofte granen'],
        ['Salm & Paling & Garnaal', 'Gerookte salm, mousse van gerookte paling, roze garnaaltjes met ryke cocktailsous. Kan ook lactosevrij, zonder paling'],
        ['Botervis', 'Carpaccio met tonijnsalade. Ook lactosevrij'],
        ['Carpaccio', 'Gesneden koeivleis met notenmelange, truffelmayonaise en geschaafde kaas. Kan ook lactosevrij']
      ]},
      { t: 'Hoofdgeregte', items: [
        ['Oesterzwamkebab'], ['Jackpot', '"Rendang" van jackfruit met gebakken pynappel en ananassaus'], ['Pienk Salm'],
        ['Chicken in Pyjama', 'Op lage temperatuur gegaarde kipfilet gevuld met oude kaas, ryke tomatensous'],
        ['Takbok', 'Hertenbiefstuk met saus naar keuze', '+ 5,--'],
        ['Tournedos', 'Biefstuk van de haas met rodeport-sous', '+ 10,--'],
        ['Krokodil', 'Krokodil van Thaba Kwena Crocodile Farm met saus naar keuze']
      ]},
      { t: 'Sauzen', note: 'Glutenvrij en lactosevrij.', items: [
        ['Kaapverdische saus', 'Fris, zoetzuur met een vleugje kokos, chili en gember'], ['Ryke tomatensous'], ['Periperisous'],
        ['Rodeport-sous'], ['Mango chutney'], ['Mrs. Balls original chutney']
      ]},
      { t: 'Desserts', items: [
        ['Dame Blanche'], ['Notencoupe'], ['Heuningtert'], ['Sorbet'], ['Fris toe', 'Waterijs mango/aardbei met bloue bessen'], ['Coco Dream'],
        ['Dom Pedro', 'Vanielje-ys geklutst met Kahlua, room en sjokola', '+ 2,50']
      ]},
      { t: 'Kindermenu glutenvrij', note: '3 gangen 18,50', items: [
        ['Voorgerechten', 'Popcorn, garnalencocktail (+ 2,--), gerookte salm (+ 2,--), vitamientje, vers fruit'],
        ['Hoofdgerechten', 'Pannenkoek, kroket, frikadel, kipfilet, victoriabaarsfilet (+ 2,--), 100 gram witvis'],
        ['Bijgerechten en sauzen', 'Ketchup, curry, cocktailsaus, appelmoes, bakje snoeptomaatjes en komkommer'],
        ['Desserts', 'Chocolade-cocos-roomys met chocoladesaus en slagroom, kinderijs, Dame Blanche, aardbei- of mango-waterys met slagroom, vers fruit']
      ]}
    ]
  },
  {
    id: 'kerst', tab: 'Krismis 2026',
    head: { big: '3 gangen 55,--', small: '1e en 2e kerstdag vanaf 16.00 uur. Reserveren via info@restaurantaap.nl' },
    pdf: 'https://www.restaurantaap.nl/uploads/6lbGcuUj/YouviaKERSTMENU2026.pdf',
    groups: [
      { t: 'Voorgeregte', items: [
        ['Salm & Paling & Garnaal'], ['Knollentuin'], ['Truffeltompoes', 'Truffelpaté, broccolirijst, gerookte tuinbonen'], ['Botervis'], ['Biltong'], ['Carpaccio']
      ]},
      { t: 'Hoofdgeregte', note: 'Standaard met friet, rijst, warme groente, rauwkost en mayonnaise.', items: [
        ['Smoorvis'], ['Rendang', 'Spitskoolragout op bloemkoolrijst met quinoa-patty en maisribbetje'],
        ['Groentecurry', 'Milde curry van sperziebonen, wortel, adukibonen met een plantaardige steak'],
        ['Chakalaka-kip'], ['Bobotie'], ['Hoender'], ['Takbok', '', '+ 5,--'], ['Krokodil', '', '+ 7,50']
      ]},
      { t: 'Nageregte', items: [
        ['Heuningtert'], ['Dame Blanche'], ['Brownie'], ['Sorbet'], ['Notencoupe'], ['Coco Dream'], ['Fris toe']
      ]},
      { t: 'Of koffie "mee iets erin"', note: 'Allemaal met bruine basterdsuiker, koffie en geklitste room.', items: [
        ['Sjokokoekiekoffie', 'Alcoholvrij, met chocoladekoekielikeur'], ['Toffiekoffie', 'Alcoholvrij, met toffeelikeur'],
        ['Amandels koffie', 'Met Amaretto, kan ook alcoholvrij'], ['Irish Coffee', 'Met Ierse whisky'],
        ['Afrikaanse koffie', 'Met Amarula Cream'], ['Wildebees koffie', 'Met safarilikeur'],
        ['Brabantse koffie', 'Met Schrobbeler'], ['Marakesh koffie', 'Met koffielikeur en bruine rum']
      ]},
      { t: 'Kinderkerstmenu', note: '3 gangen 25,--', items: [
        ['Voorgerechten', 'Bakje popcorn zoet, vitamientje, vers fruit, tomatensoep met balletjes, gerookte zalm, garnalencocktail (Noorse garnalen)'],
        ['Hoofdgerechten', 'Nuggets, bitterballen, kipfrikadel (minder zout, minder vet), pannenkoek, spaghetti met rode saus en kaas, witvis victoriabaarsfilet, kipschnitzel'],
        ['Nagerechten', 'Brownie, Dame Blanche (vanilleroomys met chocoladesaus en slagroom), kinderijsje met vruchtjes en slagroom, suikerwafeltjes met slagroom, aardbei- of mango-waterys, chocolade-ys of vanille-ys']
      ]}
    ]
  }
];

window.AAP_ALLERGEEN = {
  pdf: 'https://www.restaurantaap.nl/uploads/olTXrZN5/Allergenen2026.pdf',
  lijst: ['Ei', 'Glutenbevattende granen', 'Lupine', 'Melk (inclusief lactose)', 'Mosterd', 'Noten', "Pinda's", 'Schaaldieren', 'Selderij', 'Sesam', 'Soja', 'Sulfiet', 'Vis', 'Weekdieren'],
  groepen: [
    { t: 'Voorgerechten', rows: [
      ['Krummelkaasslaai', 'melk, gluten, soja'], ['Salige Salmcocktail', 'gluten, soja'], ['Truffelslaai', 'gluten, mosterd (kan glutenvrij zonder toast)'],
      ['Afrikaanse Poké', 'sesam (hummus)'], ['Kreef Kelkie', 'soja, mosterd (dressing)'], ['Knollentuin', 'sesam, selderij'],
      ['Salm & Paling & Garnaal', 'vis, schaaldier, melk, mosterd'], ['Botervis', 'vis, ei, mosterd, sulfiet'],
      ['Biltong', 'gluten, mosterd, selderij, soja, sulfiet'], ['Carpaccio', 'melk, noten'],
      ['Tomatensoep', 'gluten, ei, melk, soja, selderij, mosterd, sulfiet']
    ]},
    { t: 'Hoofdgerechten', rows: [
      ['Bobotie', 'gluten, ei, soja'], ['Saté & Wors', 'saté: gluten, sesam, soja, mosterd; braadworst: geen; pindasaus: gluten, pinda, mosterd, soja'],
      ['Broodje AAP', 'gluten, sesam, mosterd'], ['Oesterzwamkebab', 'mosterd, selderij'], ['Jackpot', 'geen'], ['Smoorvis', 'vis'],
      ['Pienk Salm', 'vis'], ['Chicken in Pyjama', 'melk (kaas)'], ['Chakalaka-kip', 'saus: gluten'],
      ['Hoender', 'schnitzel: gluten; saus: gluten, ei, melk'], ['Takbok', 'saus: melk, ei'], ['Tournedos', 'saus: sulfiet'], ['Krokodil', 'worst: gluten']
    ]},
    { t: 'Sauzen en garnituren', rows: [
      ['Pepersaus', 'melk, ei'], ['Rodeportsaus', 'sulfiet'], ['Pindasaus', 'gluten, pinda, mosterd, soja'], ['Champignonsaus', 'gluten, ei, melk'],
      ['Soete uisous', 'geen'], ['Kaapverdische saus', 'geen'], ['Ryke tomatensous', 'geen'], ['Mango-relish', 'geen'],
      ['Mrs. Balls chutney', 'sulfiet'], ['Rauwkost', 'mosterd'], ['Mayonaise', 'geen'], ['Rijst', 'geen']
    ]},
    { t: 'Nagerechten', rows: [
      ['Heuningtert', 'melk, ei, noten'], ['Zuid-Afrikaanse melktert', 'gluten, ei, soja, lupine (gemaakt met sojamelk)'], ['Dom Pedro', 'soja'],
      ['Dame Blanche', 'soja'], ['Brownie', 'gluten, melk, ei, soja'], ['Sorbet', 'soja'], ['Notencoupe', 'noten, soja'],
      ['Coco Dream', 'noten, soja'], ['Fris toe', 'geen'], ['Vanieljeroomys', 'soja'], ['Slagroom', 'geen']
    ]},
    { t: 'Kindermenu', rows: [
      ['Popcorn', 'geen'], ['Tomatensoep', 'gluten, ei, melk, soja, selderij, mosterd'], ['Vitamientje', 'geen'], ['Vers fruit', 'geen'],
      ['Gerookte zalm', 'ei, melk, vis'], ['Kipfrikadel', 'gluten'], ['Pannenkoek', 'gluten, ei, melk'],
      ['Bitterballen (plantaardig)', 'gluten, selderij, soja, lupine'], ['Spaghetti', 'gluten, melk'], ['Nuggets (plantaardig)', 'gluten'],
      ['Kipschnitzel 115 gram', 'gluten'], ['Witvis 100 gram', 'vis'], ['Brownie', 'gluten, ei, melk, soja'], ['Dame Blanche', 'soja'],
      ['Chocolade-ys', 'geen'], ['IJsje met vruchtjes', 'soja'], ['Waterys', 'geen'], ['Suikerwafeltje met roomijs', 'gluten, ei, melk']
    ]},
    { t: 'Sauzen kindermenu', rows: [
      ['Cocktailsaus', 'geen'], ['Joppiesaus', 'gluten, ei, soja, selderij, mosterd'], ['Ketchup', 'geen'], ['Curry (Hela)', 'mosterd, selderij'],
      ['Spaghettisaus', 'geen'], ['Appelmoes', 'geen'], ['Champignonroomsaus', 'gluten, ei, melk'], ['Pepersaus', 'geen']
    ]}
  ]
};
