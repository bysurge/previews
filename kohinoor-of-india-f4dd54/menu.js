// Menukaart en wijn & dessert van Kohinoor of India, overgenomen van kohinoorofindia.nl/menukaart/ en /wijn_dessert/
// (opgehaald 2026-11-10). Prijzen, namen en omschrijvingen zoals op hun site; alleen spelfouten licht rechtgezet.
window.KOH = {
  menu: [
    { id: 'voor', tab: 'Voorgerechten', intro: 'Onze voorgerechten zijn zeker de moeite waard om de Indiase keuken als eerste te proeven.', groups: [
      { name: 'Vlees', items: [
        ['Mixed Kabab', '7,50', 'Verschillende gemarineerde gerechten die in de tandoori-kleioven worden bereid'],
        ['Tandoori Murgh', '6,00', 'Beroemde gemarineerde, gegrilde rode Indiase kip uit de tandoori-oven'],
        ['Murgh Mirchi', '6,50', 'De beste stukjes van een gemarineerde kip in een geurig kruidenmengsel, extra pittig van smaak'],
        ['Boti Kabab', '6,75', 'Een traditioneel Indiaas gerecht van zacht lamsvlees, extra pittig van smaak, bijzonder lekker'],
        ['Sheek Kabab', '6,50', 'Gegrilde rolletjes lamsgehakt met verse kruiden, een Noord-Indiase specialiteit uit de tandoori-oven']] },
      { name: 'Vis', items: [
        ['Fish Pakora', '8,00', 'Gemarineerde stukjes vis, gefrituurd en geserveerd met salade en saus'],
        ['Butterfly', '9,00', 'Krokant voorgerecht van grote gemarineerde garnalen in een bijzonder deegbeslag van kikkererwten'],
        ['Bhuna Prawn Puree', '8,50', 'Fijn gekruide, kleine garnalen met zacht brood, een speciaal voorgerecht']] },
      { name: 'Vegetarisch', items: [
        ['Dal soep', '4,75', 'Een smakelijke linzensoep uit Noord-India, gekruid met verse koriander en citroensap'],
        ['Mulligatawny soep', '4,75', 'Pittige soep uit Zuid-India, getrokken van specerijen uit Madras en op smaak gebracht met kokosnoot, citroen en verse kruiden'],
        ['Baingan Masala', '5,50', 'Aubergine bereid met verse specerijen, geserveerd met een yoghurt-raitha'],
        ['Onion Bhaji', '5,00', 'Gebakken balletjes ui met peper, erwtenmeel, ei en Indiase kruiden, heel apart van smaak'],
        ['Samosa', '5,50', 'Driehoekjes van zelfgemaakt bladerdeeg gevuld met groenten en kruiden'],
        ['Chana Puree', '5,50', 'Kikkererwten gekruid met verse specerijen, met heerlijk zacht brood']] }
    ]},
    { id: 'thali', tab: "Thali's", intro: 'De traditionele manier van Indiaas eten: een unieke kans om de veelzijdige smaken uit het noorden en zuiden van India te beleven. Deze Indiase invulling van de rijsttafel bestaat uit zeven speciaal voor u samengestelde gerechten, die op een bijzondere wijze worden gepresenteerd.', groups: [
      { name: '', items: [
        ['Thali Royaal Vlees', '19,50', 'Een verrassing van de chef, door hem samengestelde gerechten'],
        ['Thali Royaal Vega', '18,50', 'Een verrassing van de chef, door hem samengestelde gerechten'],
        ['Thali Royaal Vis', '21,50', 'Een verrassing van de chef, door hem samengestelde gerechten']] }
    ]},
    { id: 'curry', tab: "Curry's", builder: true, intro: 'De Indiase curry\'s worden op smaak gebracht met een mengsel van specerijen: de masala. Ze lopen van zoet en mild via medium tot heet. Iedere curry kan naar keuze met vlees, vis of vegetarisch worden bereid en wordt geserveerd met basmatirijst.' },
    { id: 'tandoori', tab: 'Tandoori', intro: 'Uit de traditionele tandoori-kleioven, die we nog ouderwets op houtskool stoken. Vóór het roosteren geeft een marinade van verse kruiden het vlees of de vis zijn aroma. Geserveerd met basmatirijst, groentecurry en saus.', groups: [
      { name: '', items: [
        ['Royal Tandoori Mixed Grill', '19,00', 'Een complete introductie in de Noord-Indiase tandoori-grillkeuken'],
        ['Tandoori Murgh', '16,75', 'Malse kip gemarineerd in verschillende verse kruiden, bereid in de beroemde tandoori-oven. Een lievelingsgerecht van veel Indiërs'],
        ['Murgh Tikka', '17,50', 'De beste stukjes kip, gemarineerd in een geurig kruidenmengsel'],
        ['Lamb Tikka', '18,75', 'Een traditioneel Indiaas gerecht van zacht lamsvlees, vóór het roosteren gemarineerd in verse kruiden'],
        ['Jhinga Tandoori', '21,50', 'Grote garnalen uit de Golf van Bengalen. Na een bad in fijne kruiden licht geroosterd in de tandoori-oven'],
        ['Paneer en Sabji Tikka', '17,50', 'Huisgemaakte Indiase kaas en verse groenten, gemarineerd met verse specerijen en gegrild in de tandoori-kleioven']] }
    ]},
    { id: 'biryani', tab: 'Biryani', intro: 'Biryani is een smakelijk gerecht van basmati-saffraanrijst, rozijnen, amandelen, verse kruiden en koriander, gecombineerd met vlees, vis, groenten of Indiase kaas. Geserveerd met een groentecurry. Traditioneel en populair in heel India.', groups: [
      { name: 'Huisspecialiteit', items: [['Kohinoor Biryani', '18,50', 'Met lam, kip, garnalen en groenten']] },
      { name: 'Vlees', items: [['Kip Biryani', '16,50'], ['Kip Tikka Biryani', '17,50'], ['Lam Biryani', '17,50'], ['Lam Tikka Biryani', '18,50']] },
      { name: 'Vis', items: [['Grote Garnalen Biryani', '20,50'], ['Zalm Biryani', '18,50']] },
      { name: 'Vegetarisch', items: [['Vegetarische Biryani', '16,50']] }
    ]},
    { id: 'vega', tab: 'Vegetarisch', intro: 'De Indiase keuken biedt vegetariërs en veganisten een ruime keuze. Al onze curry\'s hebben een vegetarische variant, en bijna al onze gerechten kunnen ook veganistisch worden bereid. Daarnaast deze bijzondere vegetarische gerechten.', groups: [
      { name: '', items: [
        ['Pallak Paneer', '16,50', 'Spinazie met zelfgemaakte Indiase kaas'],
        ['Aloo Gobi', '15,50', 'Een medium pittig gerecht met aardappel en bloemkool, bereid met verse specerijen'],
        ['Bhindi Masala', '16,00', 'Vers gebakken okra met uien, tomaten, kruiden en specerijen'],
        ['Mushroom Mutter', '15,50', 'Gebakken champignons en groene erwten in een kruidige ui-tomatensaus'],
        ['Paneer Korma', '16,00', 'Zelfgemaakte Indiase kaas in roomsaus met cashewnoten en amandelen; licht zoet maar kruidig'],
        ['Kolhapuri', '15,50', 'Een beroemde pittige, semi-droge groenteschotel met kruiden, rode chili en kokos'],
        ['Aubergine Balti', '16,00', 'Curry van aubergine met zelfgemaakte balti-pasta, pittig maar zacht van smaak'],
        ['Chana Masala', '15,50', 'Een beroemd gerecht uit Punjab: kruidige curry van witte kikkererwten met tomaten, koriander en uien']] }
    ]},
    { id: 'bij', tab: 'Bijgerechten & brood', intro: 'In de Indiase keuken spelen bijgerechten een bijzondere rol. Voor uitgebreid eten zijn er verschillende groenten en broden die goed bij de gerechten passen.', groups: [
      { name: 'Groenten', items: [
        ['Kohinoor Salade', '3,75', 'Een verse Indiase salade'],
        ['Pallak Bhaji', '5,00', 'Spinazie gestoofd met Indiase specerijen'],
        ['Pallak Paneer', '6,50', 'Spinazie met zelfgemaakte Indiase kaas'],
        ['Pallak Aloo', '5,50', 'Spinazie met aardappelen'],
        ['Bombay Aloo', '5,00', 'Stukjes gekruide aardappel met ui, tomaat en verse koriander'],
        ['Dal Tarka', '5,00', 'Linzen met garam masala, komijn en chili'],
        ['Dal Makhani', '5,50', 'Populair Punjabi-gerecht, gemaakt van urad dal'],
        ['Mushroom Bhaji', '5,50', 'Medium heet gekruide champignons, gebakken met groene peper en koriander'],
        ['Mix Vegetables', '5,00', 'Gemengde groenten met een keur aan kruiden'],
        ['Chana Masala', '5,00', 'Kikkererwten in een overheerlijke masala'],
        ['Aubergine Masala', '6,00', 'Een mild gerecht met verse specerijen en tomaten']] },
      { name: 'Brood', items: [
        ['Naan', '2,50', 'Warm zacht brood met sesam- en uienzaad, gebakken in de tandoori-oven'],
        ['Garlic Naan', '3,75', 'Naan met knoflook'],
        ['Cheese Naan', '3,75', 'Naan met kaas'],
        ['Kulcha Naan', '3,50', 'Naan met groenten'],
        ['Peshwari Naan', '4,00', 'Naan met honing, kokos, amandelen en rozijnen'],
        ['Keema Naan', '4,50', 'Naan met lamsgehakt'],
        ['Roti', '2,75', 'Niet-gerezen brood van volkorenmeel, gevuld met gemalen linzen']] },
      { name: 'Overige bijgerechten', items: [
        ['Papadum', '1,50', 'Knapperige Indiase chips'],
        ['Raitha', '2,50', 'Frisse, kruidige yoghurtsaus met tomaten, komkommer en mosterdzaad'],
        ['Mango Pickle', '1,50', 'Mango in het zuur met chili (heet)'],
        ['Lime Pickle', '1,50', 'Limoenen in het zuur met chili (heet)']] }
    ]},
    { id: 'chef', tab: 'Verrassing van de chef', chef: true, intro: 'Elke maand stelt onze chef een speciaal driegangenmenu samen, met gerechten die niet op de kaart staan. Een culinaire reis door de Indiase keuken.' }
  ],
  bases: [
    { g: 'Vlees', n: 'Kip', p: '16,75' }, { g: 'Vlees', n: 'Lam', p: '17,75' },
    { g: 'Vis', n: 'Grote garnalen', p: '21,00' }, { g: 'Vis', n: 'Zalm', p: '19,00' },
    { g: 'Vegetarisch', n: 'Gemengde groenten', p: '16,00' }
  ],
  // heat: 1 zoet/mild, 2 medium, 3 heet, 4 zeer heet; label = hun eigen omschrijving
  curries: [
    ['Tikka Masala', 1, 'zoet', 'Zeer beroemd zoet gerecht met een speciale masalasaus van zorgvuldig gekozen verse ingrediënten zoals verse koriander, tandooripasta en gebakken garam masala'],
    ['Marco Polo', 1, 'zoet', 'Een combinatie van de tandoori-kleioven en een zoete curry. Het aroma dankt dit gerecht aan kardemom, kaneel, gemalen vruchten, noten en garam masala'],
    ['Korma', 1, 'romig', 'Een romige curry met kokos, cashewnoten en amandelen'],
    ['Butter Curry', 1, 'romig', 'Een romige Indiase curry met komijn, fenegriekblad, tomaten, roomboter en cashewnoten'],
    ['Tawa', 1, 'mild', 'Een gebonden curry met gebakken ui, gember, knoflook en verse komijn'],
    ['Karai', 1, 'mild', 'Met tomaat, paprika en verse kruiden, geserveerd in een speciaal braadpannetje'],
    ['Methi Curry', 1, 'mild', 'Met fenegriekblad, garam masala, tomaat en ui'],
    ['Razala', 2, 'medium', 'Een romige curry met gemalen kardemom, knoflook-gembermix, fijngesneden ui, room en noten'],
    ['Rogan Josh', 2, 'medium heet', 'Met gebakken knoflook en verse tomaten'],
    ['Tikka Patia', 2, 'medium pittig', 'Combinatie van de tandoori-kleioven en een zoetzure curry met kokos en citroensap'],
    ['Balti', 2, 'medium pittig', 'Bereid in een bijzondere balti-kruidenpasta, met ui, paprika, groene peper en verse koriander'],
    ['Jalfrezi', 3, 'medium tot heet', 'Met groene peper, tomaten, ui en paprika'],
    ['Madras', 3, 'pittig', 'Met een pittige currysaus, verse citroen en koriander'],
    ['Vindaloo', 4, 'zeer heet', 'Met een zeer hete currysaus, aardappelen, koriander en verse chili']
  ],
  drinks: [
    { id: 'huis', tab: 'Huiswijnen', intro: 'Per glas € 3,25 · per fles € 18,00', items: [
      ['Cortechiara Soave Classico', 'wit', 'Lichtgeel, met een delicate geur van citrus, perzik, abrikoos en peer. Ongecompliceerd, zacht en fris met een bittertje op het eind.'],
      ['Cortechiara Valpolicella Superiore', 'rood', 'In de geur krenten, rozijnen en tuttifrutti. Vol van smaak zonder stroef te zijn. Alleen Molinara- en Rondinella-druiven van de beste wijngaarden.'],
      ['Cortechiara Bardolino Chiaretto Rosé', 'rosé', 'Roomzacht, met de verleidelijke geur en smaak van aardbeienkwark. Delicaat, fris en licht.'],
      ["Marquis d'Alban Bordeaux Blanc Moelleux", 'halfdroog wit', 'Voor liefhebbers van halfdroge witte wijn: door Sémillon en Sauvignon sappig, verkwikkend en lekker fruitig.']] },
    { id: 'wit', tab: 'Witte wijn', items: [
      ['Sierra Pie de Palo · Sauvignon Blanc-Torrontés', 'fles € 18,50', 'San Juan, Argentinië. Helder geel met groene tinten; frisse aroma\'s van grapefruit met bloemige tonen.'],
      ['Dr. Pauly Bergweiler · Riesling Classic', 'fles € 19,50', 'Frisse tonen van citrusvruchten; sappigheid en mineraliteit strijden om voorrang in deze subtiele wijn.'],
      ['Chemin des Seigneurs · Pinot Gris', 'fles € 25,50', 'Een eigen aroma met rook, noten en rozijnen. Ter plekke bijgenaamd "de sultan", om zijn bijna exotische karakter.'],
      ['Yering Station · Chardonnay', 'fles € 28,50', 'Yarra Valley, Victoria, Australië. Citrus met zachte mineraliteit; veel structuur, frisse zuren en lengte.']] },
    { id: 'rood', tab: 'Rode wijn', items: [
      ['Sierra Pie de Palo · Malbec-Syrah', 'fles € 18,50', 'San Juan, Argentinië. Rood fruit als kersen en pruimencompote met rode peper; goed gestructureerd met een lange afdronk.'],
      ['Surani · Primitivo di Manduria', 'fles € 19,50', 'Costarossa, Puglia. Zwarte bessen en blauwe pruimen; rond en vol met zijdezachte tannines.'],
      ['Luis Cañas · Crianza', 'fles € 25,50', 'Rioja. Diep kersrood; balsamico, pruimen en hout. Complex en gestructureerd met rijp rood fruit in de afdronk.'],
      ['Yering Station · Shiraz-Viognier', 'fles € 28,50', 'Yarra Valley, Victoria, Australië. Rijp rood fruit en zwarte peper, pruimen, zwarte bessen en een vanilletoets.']] },
    { id: 'bubbels', tab: 'Mousserend', items: [
      ['Prosecco dei Pronol', 'flesje 20 cl € 6,50', ''],
      ['Prosecco DOC Spumante', 'fles € 24,50', 'Uit Veneto: mooi fris en zuiver, met een aangename mousse.'],
      ['Piper-Heidsieck Champagne Brut', 'fles € 62,50', 'Parelwit met een fijne mousse; citrus, appel en meloen met tonen van brioche. Droog, maar vol en romig.'],
      ['Piper-Heidsieck Cuvée Sublime Demi-Sec', 'fles € 62,50', 'Pinot Noir, Pinot Meunier en Chardonnay. Warm, zacht, vol en fris, met geflambeerde ananas, gebak, vanille en kaneel.']] },
    { id: 'dessert', tab: 'Desserts', intro: 'In de Indiase keuken mag een nagerecht niet ontbreken. Aan te bevelen: onze kulfi.', items: [
      ['Vers gemengd fruit met slagroom', '€ 7,50'], ['Verse mango met slagroom', '€ 6,50'], ['Lychee met slagroom', '€ 4,50'],
      ['Verse ananas met slagroom', '€ 5,50'], ['Papaya met slagroom', '€ 5,50'], ['Fruit met likeur', '€ 8,50'],
      ['Lovers ice met slagroom (2 pers.)', '€ 9,50'], ['Mango-ijs met slagroom', '€ 5,50'], ['Kokosijs met slagroom', '€ 5,50'],
      ['Coupe Kohinoor', '€ 7,50'], ['Kulfi (Indiaas ijs, onze eigen stijl)', '€ 6,00'], ['Gemengd ijs met likeur', '€ 8,50']] },
    { id: 'koffie', tab: 'Koffie & thee', items: [
      ['Indiase chai', '€ 2,50', 'Met melk en kruiden'], ['Thee', '€ 2,00'], ['Koffie', '€ 2,20'], ['Koffie verkeerd', '€ 2,50'],
      ['Cappuccino', '€ 2,50'], ['Espresso', '€ 2,00'], ['Dubbele espresso', '€ 3,20'], ['Irish coffee', '€ 6,50'],
      ['French coffee', '€ 6,50'], ['Koffie Maharaja', '€ 6,50', 'Koffie met Indiase likeur']] }
  ]
};
