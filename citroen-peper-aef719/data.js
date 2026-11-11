// Kaarten van Citroen & Peper, overgenomen uit hun pdf's (lunchkaart, drankenkaart, vitrinemenu).
// v: true = blaadje (vegetarisch) op hun lunchkaart. tag = handgeschreven noot op de kaart.
window.LUNCH = [
  { id: 'brood', tab: 'Brood', note: 'Kies je broodsoort: ciabatta wit of bruin, zuurdesem wit of bruin, of een glutenvrij broodje (+ € 1).', items: [
    ['Oude of jonge kaas', 'Met honing-mosterd-tijmsaus, ei & komkommer', '8,25', { v: true }],
    ['Caprese', 'Met pestomayo, tomaat, mozzarella, pijnboompitjes & basilicum', '8,25', { v: true }],
    ['Gegrilde groenten', 'Paprika, courgette, aubergine met tomatenspread & feta', '8,25', { v: true }],
    ['Club Italiano', '3 plakken brood met pestomayo, kaas, ei, tomaat, mozzarella, pijnboompitjes en basilicum + chips', '11', { v: true }],
    ['Tonijnsalade', 'Appel & tomaat', '8,50', { tag: 'meest gekozen broodje' }],
    ['Clubsandwich', '3 plakken brood met mayo, kaas, ei, beenham, spek & tomaat + chips', '11'],
    ['Parmaham', 'Met pestomayo, rucola & mozzarella', '8,50'],
    ['Thaise kipsalade (broodsalade)', 'Gember, koriander, kokos, courgette & limoen', '8,50'],
    ['Carpaccio', 'Met pestomayo, rucola, zontomaatjes & oude kaas', '9,25'],
    ['Filet americain', 'Met ei, zilveruitjes & aioli', '8,50'],
    ['Ossenworst', 'Met rucola, lente-ui, honing-mosterd-tijmsaus en zonnebloempitjes', '8,50'],
    ['Vitello tonnato', 'Kalfsvlees, tonijnsaus, dragon, gemarineerde rode ui en kappertjes, zongerijpte olijven & rucola', '9,50', { tag: 'favoriet van Sebastiaan' }],
    ['Club Carpaccio', '3 plakken brood met pestomayo, oude kaas, ei, rucola, carpaccio', '13']
  ]},
  { id: 'tosti', tab: "Zuurdesem tosti's", note: "Wit of bruin zuurdesem. Tosti's worden geserveerd met chips en huisgemaakte citroen & peper saus.", items: [
    ['Tosti kaas', 'Oude of jonge kaas', '7,50', { v: true }],
    ['Tosti beenham/kaas', '', '8'],
    ['Tosti verse geitenkaas & spek', 'Met honing', '8,75'],
    ['Tosti hete kip', 'Met kaas, courgette & gekarameliseerde ui', '9,50']
  ]},
  { id: 'soep', tab: 'Soep & baksels', note: '', items: [
    ['Vraag naar onze dagsoep', '', '5', { v: true }],
    ['Lekker erbij: brood met aioli', '', '3,50'],
    ['Taartpunt', 'Dagelijks wisselend taartassortiment', '3,75', { group: "Myrthe's baksels" }],
    ['Citroen boterkoek', '', '2,75'],
    ['Brownie', '', '3']
  ]},
  { id: 'sap', tab: 'Verse sappen', note: 'IJskoude mixsappen.', items: [
    ['Verse sinaasappelsap', '', '3,75'],
    ['Wortel, mandarijn, gember en sinaasappel', '', '5,50'],
    ['Mango, meloen, munt, yoghurt en sinaasappel', '', '5,50'],
    ['Aardbei, framboos, banaan en appelsap', '', '5,50']
  ]}
];

window.DRANK = [
 {
  "id": "borrel",
  "tab": "Borrel",
  "items": [
   [
    "Brood & dip",
    "Huisgemaakte pesto & aioli dip",
    "7"
   ],
   [
    "Nacho's",
    "Kaas, sriracha-crème fraîche en tomatensalsa",
    "8"
   ],
   [
    "Borrelplank",
    "Vanaf 2 personen. Parmaham, oude kaas, geitenkaas, brie, brood, crackers, aioli, tonijnsalade, chips, geroosterde noten, dadels, rucola & komkommer",
    "9 p.p."
   ],
   [
    "IJsjes op stok",
    "Vraag naar onze smaken",
    ""
   ]
  ]
 },
 {
  "id": "cocktail",
  "tab": "Cocktails",
  "note": "Alle cocktails 9,50.",
  "items": [
   [
    "Gin-tonic",
    "Bombay gin, komkommer",
    "9,50"
   ],
   [
    "Mojito",
    "Havana añejo rum, munt, limoen",
    "9,50"
   ],
   [
    "Limoncello",
    "Limoncello, tonic, citroen, rozemarijn",
    "9,50"
   ],
   [
    "Hot choconut",
    "Frangelico, chocolade, slagroom",
    "9,50"
   ],
   [
    "Espresso martini",
    "Espresso, vodka, Kahlúa",
    "9,50"
   ]
  ]
 },
 {
  "id": "bier",
  "tab": "Bier & wijn",
  "items": [
   [
    "Heineken",
    "",
    "3"
   ],
   [
    "Vedett white",
    "Witbier, België, 4,7%",
    "4,50"
   ],
   [
    "De Drie Ringen, Zilver",
    "Dunkel Hefe-Weizen, Amersfoort, 5%",
    "5,75",
    {
     "tag": "lekker en lokaal"
    }
   ],
   [
    "Vedett IPA",
    "IPA, België, 5,5%",
    "4,50"
   ],
   [
    "De Drie Ringen, Ruige Ruud",
    "Pale ale, Amersfoort, 5,5%",
    "5,75",
    {
     "tag": "lekker en lokaal"
    }
   ],
   [
    "Leffe blond",
    "Blond, België, 6,6%",
    "4,75"
   ],
   [
    "La Chouffe",
    "Blond, België, 8%",
    "5,25"
   ],
   [
    "De Drie Ringen Vuurvogel",
    "Tripel, Amersfoort, 7,5%",
    "5,75",
    {
     "tag": "lekker en lokaal"
    }
   ],
   [
    "Freo gemberbier",
    "Amersfoorts alcoholisch gemberbier, 4,5%",
    "5,50"
   ],
   [
    "Amstel Radler 0.0",
    "Alcoholvrij",
    "3"
   ],
   [
    "Leffe blond 0.0",
    "Alcoholvrij",
    "4,25"
   ],
   [
    "Verdejo",
    "Spanje, perzik, meloen, bloemig. Glas / fles",
    "5,50 / 27,50"
   ],
   [
    "Rosé",
    "Fruitig rosé. Glas / fles",
    "5,50 / 27,50"
   ],
   [
    "Tempranillo",
    "Spaanse Rioja, rood fruit, eiken, vanille. Glas / fles",
    "5,50 / 27,50"
   ]
  ]
 },
 {
  "id": "fris",
  "tab": "Fris & sappen",
  "items": [
   [
    "Coca-Cola, zero",
    "",
    "3"
   ],
   [
    "Royal Club",
    "Cassis, tonic of rivella",
    "3"
   ],
   [
    "Lipton ice tea",
    "Sparkling of green",
    "3"
   ],
   [
    "San Pellegrino",
    "Limonata of aranciata",
    "3,50"
   ],
   [
    "Chocomel",
    "",
    "3,50"
   ],
   [
    "Flevosap appel",
    "",
    "3,50"
   ],
   [
    "Water bruisend 0,5 L",
    "",
    "2,50"
   ],
   [
    "Verse jus d'orange",
    "",
    "3,75"
   ],
   [
    "Wortel, mandarijn, gember en sinaasappel",
    "Vers sap",
    "5,50"
   ],
   [
    "Mango, meloen, munt, yoghurt en sinaasappel",
    "Vers sap",
    "5,50"
   ],
   [
    "Braam, aardbei, kers en appelsap",
    "Vers sap",
    "5,50"
   ],
   [
    "Soof limonade (suikervrij)",
    "Met bruisend of plat water. Gember & citroen (gember, citroen, peper & appel), of peer & citroen (citroengras, peer, limoen & citroen)",
    "4,75",
    {
     "tag": "gember boost"
    }
   ]
  ]
 },
 {
  "id": "koffie",
  "tab": "Koffie & thee",
  "items": [
   [
    "Koffie, espresso",
    "",
    "3"
   ],
   [
    "Cappuccino",
    "",
    "3,50"
   ],
   [
    "Koffie verkeerd",
    "",
    "3,75"
   ],
   [
    "Latte macchiato, dubbele espresso",
    "",
    "4"
   ],
   [
    "Chai latte",
    "",
    "4,25"
   ],
   [
    "Thee",
    "",
    "2,75"
   ],
   [
    "Verse thee",
    "Munt, gember of citroen",
    "3,50"
   ],
   [
    "Warme choco",
    "Melk, puur of mokka (+ 0,50)",
    "5"
   ],
   [
    "IJskoffie",
    "",
    "5,50"
   ]
  ]
 }
];

// Vitrinemenu woensdag 4 t/m zaterdag 14 november (pdf "Vitrine menu")
window.VITRINE = [
  ['Gehaktbal met vleesjus', '', '4,50', ''],
  ['Lasagne bolognese', 'Met gehaktbolognesesaus, groene kruiden, bechamel, courgette, mozzarella & parmezaan', '2,50', 'per 100 g'],
  ['Kip pinda', 'Kip in pindasaus met huisgemaakte seroendeng', '2,75', 'per 100 g'],
  ['Nasi goreng', 'Met wortel, ei, bosui & taugé', '2,25', 'per 100 g'],
  ['Indiase kardemomcurry', 'Kardemom-tomatencurry met zongedroogde tomaatjes, kikkererwten, spinazie, dadels & pompoenpitjes', '2,25', 'per 100 g'],
  ['Lasagne', 'Met gepofte knoflook-mascarpone-tomatensaus, zoete aardappel, courgette, brie, mozzarella & parmezaan', '2,25', 'per 100 g'],
  ['Spinaziestamppot', 'Met spinazie, zongedroogde tomaten en oude kaas', '2,25', 'per 100 g'],
  ['Gegrilde groenten', 'Gegrilde courgette, aubergine & paprika', '2,25', 'per 100 g'],
  ['Ovenaardappeltjes', 'Met rozemarijn en knoflook', '1,75', 'per 100 g'],
  ['Rijst', '', '1,25', 'per 100 g']
];

window.TAARTEN = [
  ['Brown velvet', 'Tweelaagse smeuïge chocoladecake gevuld en bedekt met een roomkaasglazuur. Gegarneerd met chocoladeschaafsel'],
  ['Mango yoghurt', 'Een koekbodem met daarop een frisse yoghurtmousse, gemarmerd met mangopuree'],
  ['Monchou kers', 'Een bodem van kandijkoek bedekt met romige monchoumousse met daarop kersen in gelei'],
  ['Monchou aardbei', 'Een koekbodem bedekt met romige monchoumousse met daarop aardbeien in gelei'],
  ['Monchou bosvruchten', 'Een koekbodem bedekt met romige monchoumousse met daarop bosvruchten in gelei'],
  ['Citroen mascarpone', 'Een koekbodem gevuld met een mengsel van lemon curd & mascarpone, gegarneerd met slagroom'],
  ['Chocolade karamel', 'Chocoladekoekbodem gevuld met een laag karamel en daarbovenop chocoladeganache'],
  ['Koffie chocolade', 'Een chocoladekoekbodem met een espresso-roommousse en een dun laagje espressochocolade, gegarneerd met mokkachocoladebonen'],
  ['Noten dadel', 'Een deegbodem, dadel-sinaasappelvulling & geroosterde noten']
];
