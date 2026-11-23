/* Kaarten van Het Pleidooi: lunch en diner (PDF oktober 2026), wijnen en bier (PDF februari 2026). */
window.KAART = {
  lunch: [
    { t: "Sandwiches", note: "Op desembrood. Glutenvrij brood + 1,50", items: [
      ["12-uurtje", "15,75", "kroket, soepje en tonijnsalade (ook vega mogelijk)"],
      ["Tonijnsalade", "13,50", "melted tuna + 1,50"],
      ["BLAT", "15,75", "bacon, sla, tomaat, avocado en mostermayo (gebakken ei + 1,50)"],
      ["Gerookte rib eye", "16,75", "truffelmayonaise en parmezaan"],
      ["Gerookte zalm", "16,75", "smashed avocado en gepocheerd ei"],
      ["Geitenkaas", "15,50", "bietjes, dukkah en balsamico"],
      ["Humus", "15,50", "geroosterde aubergine en tahindressing"]
    ]},
    { t: "Salades", items: [
      ["Caesar salade", "14,50", "gepocheerd ei, parmezaan en croutons (met kip + 3,50, met bacon + 2,50)"],
      ["Salade gerookte zalm", "18,50", "rivierkreeftjes, avocado en ei"],
      ["Salade tonijn tataki", "18,50", "wasabimayonaise, furikake en ingelegde wortel"],
      ["Salade geitenkaas", "17,50", "bietjes, walnoten en honing"]
    ]},
    { t: "Omelet of uitsmijter", items: [
      ["Omelet of uitsmijter", "11,50", "extra: ham + 1,50, kaas + 1,50, tomaat + 1,50, spek + 2,50, gerookte zalm + 5,00, gerookte rib eye + 5,00"]
    ]},
    { t: "Warme lunchgerechten", items: [
      ["Soep van de week", "9,25", "vegetarisch, met brood"],
      ["Pasta van de week", "18,50", ""],
      ["2 kroketten met brood", "14,25", "Van Dobben"],
      ["2 vegan kroketten met brood", "14,25", "Cas&Cas"],
      ["Kipsaté", "19,75", "atjar, pindasaus en friet"],
      ["Licht gegratineerde mosselen", "15,75", "witte wijn, bieslook en stokbrood"],
      ["Steak friet", "28,50", "portsaus en friet"],
      ["Friet", "5,50", "met mayonaise"]
    ]}
  ],
  lunchNote: "Desserts? Vraag naar onze dessertkaart. Voor de specials: zie ons krijtbord.",
  diner: [
    { t: "Voorgerechten", items: [
      ["Brood met tahin-sojaboter", "7,50", "", "V"],
      ["Bruschetta (3 st.)", "12,50", "caponata en stracciatella", "V"],
      ["Soep van de week", "9,50", "", "V"],
      ["Carpaccio van knolselderij", "15,75", "mousse van kastanje, zwarte knoflook en truffelvinaigrette", "vegan"],
      ["Tonijn tataki", "17,25", "furikake, wasabi en wakame"],
      ["Cannelloni van krab", "17,25", "courgette, brioche en kervel-citroenmayonaise"],
      ["Steak tartare", "16,75", "mayonaise met merg, zure sjalot en krokante kappertjes"],
      ["Salade met hertenham", "16,75", "vijgencompote en duindoorndressing"]
    ]},
    { t: "Hoofdgerechten", items: [
      ["Diamanthaas", "28,50", "gratin en seizoensgroente, met keuze uit rode portsaus, pepersaus of chimichurri"],
      ["Tartiflette met reblochon", "24,50", "shiitake, radicchiosalade en appel-verjussaus", "V"],
      ["Duo van Iberico", "27,75", "gestoofde wang en in pancetta gerolde filet, sherrysaus en pastinaakpuree"],
      ["Pompoenrisotto met gamba's", "26,50", "compote van pompoen, bimi en citroen-peterselieolie"],
      ["Friet met mayonaise", "5,75", "bijgerecht"]
    ]},
    { t: "Desserts", items: [
      ["Crème brûlée", "10,75", "rozemarijn, compote van bramen, hazelnoot en bramenijs"],
      ["Namelaka van pure chocolade", "11,00", "stoofpeer, cacaocrumble en witte-chocolade-ijs"],
      ["Affogato", "7,50", "espresso met vanille-ijs"],
      ["Scroppino", "10,50", "limoensorbet, vodka en cava"],
      ["Espresso martini", "11,50", "espresso, kahlua en vanillevodka"],
      ["Coupe Pleidooi", "9,75", "roomijs (2), chocoladesaus, nootjes en slagroom, of sorbetijs (2), gemarineerd fruit en slagroom"],
      ["Koffie of thee compleet", "8,50", "met 3 soorten friandises"]
    ]},
    { t: "Kaas van 't Proefhuys", items: [
      ["Kaasplateau, 3 stuks", "11,75", ""],
      ["Kaasplateau, 5 stuks", "17,75", ""]
    ]}
  ],
  dinerNote: "Wij serveren duurzaam Eco tap water, bruisend of plat, à 5,00 per fles en vullen onbeperkt bij. V = vegetarisch.",
  dranken: [
    { t: "Koffie", items: [
      ["Koffie", "3,85"], ["Cafeïnevrije koffie", "3,85"], ["Espresso", "3,85"], ["Espresso macchiato", "4,00"], ["Dubbele espresso", "5,50"],
      ["Cappuccino", "4,00"], ["Latte", "4,75"], ["Latte macchiato", "4,75"], ["Chai latte", "4,75"], ["Warme chocomel", "3,75"], ["Slagroom", "0,75"]
    ]},
    { t: "Thee", items: [
      ["Thee (per zakje)", "3,75"], ["Verse munt", "4,25"], ["Verse gember", "4,25"], ["Thee Pleidooi", "4,75", "gember, munt, sinaasappel en citroen"]
    ]},
    { t: "Fris en sappen", items: [
      ["Halfvolle melk", "2,50"], ["Karnemelk", "2,50"], ["Verse jus, small", "4,95"], ["Verse jus, large", "5,95"],
      ["Cola", "4,00"], ["Cola zero", "4,00"], ["7up", "4,00"], ["Tonic", "4,25"], ["Bitter lemon", "4,00"], ["Ginger ale", "4,25"],
      ["Rivella", "4,00"], ["Ice tea sparkling", "4,25"], ["Ice tea green", "4,25"], ["Fanta sinas", "4,00"], ["Fanta cassis", "4,00"],
      ["Appelsap", "4,25"], ["Tomatensap", "4,25"], ["Gemberbier", "6,95"], ["Spa rood", "3,75"], ["Spa blauw", "3,75"],
      ["Eco tap water, plat of bruisend", "5,50"]
    ]},
    { t: "Bier van de tap", items: [
      ["Tapbier (0,30 l)", "4,50", "voor speciaalbier: zie Wijn & bier"]
    ]}
  ],
  wijn: [
    { t: "Wit", items: [
      ["Bachellery Chardonnay Oaked", "Languedoc, Frankrijk", "vanille, rijp geel fruit, romig, toast, subtiel hout", "6,00", "29,50"],
      ["Dominio de la Granadilla Rueda Verdejo", "Rueda, Spanje", "citrus, venkel, grapefruit, bloemig, fris", "6,75", "32,50"],
      ["Pinot Grigio", "Azienda Agricola Zenato, Italië", "fris, groene appel, witte bloemen", "7,50", "35,00"],
      ["Bodegas Madai Godello", "Bierzo, Spanje", "witte perzik, appel, mineralig, zacht citrus, fris", "8,50", "40,00"],
      ["Sauvignon Blanc “Mount Riley”", "Marlborough, Nieuw-Zeeland", "expressief, aromatisch, passievrucht, knisperend", "7,75", "37,50"],
      ["Clos Mont Blanc Unic Chardonnay", "Catalunya, Spanje", "tropisch fruit, vanille, lichte toast, rond, elegant", "8,75", "42,50"]
    ]},
    { t: "Rosé", items: [
      ["Paul Mas rosé de Syrah", "Languedoc, Frankrijk", "rood zomerfruit, lichte citrus, zacht, soepel", "6,50", "30,50"],
      ["Château de Beaupré Rosé", "Aix-en-Provence, Frankrijk", "aardbei, framboos, citrus, licht kruidig, droog en fris", "8,75", "42,50"]
    ]},
    { t: "Rood", items: [
      ["La Belle Angèle Pinot Noir", "VdF, Frankrijk", "kers, rood fruit, licht kruidig, soepel, elegant", "7,50", "35,00"],
      ["Baglio Gibellina U Passimiento", "Sicilië", "zacht, fluweel, rijpe kersen, pruimen, rozijnen", "7,50", "35,00"],
      ["Bousquet Malbec", "Argentinië", "violet, zwarte bessen, chocolade, soepele finish", "7,75", "36,50"],
      ["Valpolicella Superiore", "Zenato, Italië", "soepel, sappig, wilde bessen, kruiden", "8,00", "37,50"],
      ["Paco Garcia Crianza", "Rioja, Spanje", "rijpe kers, vanille, specerijen, zacht hout, rond", "8,75", "42,50"]
    ]},
    { t: "Bubbels", items: [
      ["Borgo Fulvia Spumante Brut", "Lombardije, Italië", "groene appel, citrus, brioche, verfijnde mousse, fris", "6,75", "32,50"],
      ["Moillard Grivot Crémant de Bourgogne Chardonnay Prestige", "Bourgogne, Frankrijk", "wit fruit, citrus, brioche, romig, verfijnd", "11,50", "45,00"]
    ]},
    { t: "Dessertwijn", glas: true, items: [
      ["Domaine Les Roumanis Muscat St. Jean Minervois", "Languedoc, Frankrijk", "oranjebloesem, druif, honing, aromatisch, zacht zoet", "7,50", ""],
      ["Pedro Ximenez Eminencia", "Spanje", "intensief, donkerbruin, noten, rozijnen, vijgen, dadels, chocolade, mokka", "7,50", ""],
      ["J.P. Alsem Finest Reserve port 6 years", "", "fruitkruidig, chocolade, zoete afdronk", "7,50", ""]
    ]}
  ],
  bier: [
    ["Blond", "7,5% | 33 cl", "De kleur is diepgoud, het schuim fijn en luchtig. Aromatische hopsoorten en specerijen met een fruitige toets van citrusvruchten.", "6,50"],
    ["IPA", "6,2% | 33 cl", "India pale ale met hop, een bittertje en een donkere amberkleur.", "6,75"],
    ["Dubbel", "8,0% | 33 cl", "Volle schuimkraag. Fruitgeuren in harmonie met zoethout en gebrande suiker.", "6,75"],
    ["Tripel", "9,0% | 33 cl", "Wit, fijn en zeer dicht schuim, lichte amberkleur en een nadrukkelijke toets mout, met hoparoma's, kruiden en fruitige gistingsgeuren.", "7,50"]
  ]
};
