// Menukaart Twins Lunch & Diner, overgenomen van hun menukaart (sept 2025) op twinslunchendiner.nl.
// Item: [naam, omschrijving, prijs, tags]  tags: v = kan vegetarisch, g = kan glutenvrij
const SOEPEN = {
  title: 'Soepen', note: 'Alle soepen met stokbrood, kruidenboter en huisgemaakte rouille.',
  items: [
    ['Romige tomatensoep', '', '7,50', 'v'],
    ['Grove mosterd/briesoep', 'geserveerd met een bitterbal', '7,95', 'v'],
    ['Soep à la Chef', 'een wekelijks wisselende soep', '7,50', ''],
    ['Goedgevulde runderbouillon', '', '7,50', 'g'],
    ['Aspergesoep', 'alleen in het seizoen', 'dagprijs', 'v']
  ]
};

window.MENU = [
  { id: 'lunch', label: 'Lunch', groups: [
    SOEPEN,
    { title: "Tosti's", note: "De tosti's worden geserveerd met een frisse salade.", items: [
      ['Ham en/of kaas', '', '7,75', 'v'],
      ['Hawai', 'ham, kaas en ananas', '8,00', 'v'],
      ['The legend', 'gerookte kip, kaas, bacon, rode ui, paprika en een kerriemayonaise', '8,95', ''],
      ['Tosti brie', 'brie, ham, ananas en mosterdsaus', '8,95', 'v'],
      ['Mexicaanse tosti', 'gehakt op Mexicaanse wijze, kaas en crème fraîche', '8,95', '']
    ]},
    { title: 'Luxe broodjes (koud)', note: 'Keuze uit een bruine of witte bol (clubs: wit of bruin brood). Glutenvrij broodje: € 1,25 meerprijs.', items: [
      ['Brie', 'brie met luxe sla en honing', '14,50', 'vg'],
      ['Carpaccio', 'rundercarpaccio met truffelmayonaise, luxe sla, pijnboompitjes en oude kaas', '14,50', 'g'],
      ['Geitenkaas', 'geitenkaas met luxe sla en een vijgencompote', '14,50', 'vg'],
      ['Tuna', 'frisse tonijnsalade met rode ui, kappertjes en augurk', '14,50', 'g'],
      ['Club de Mer', 'gerookte zalm, forel, garnaaltjes, roomkaas, luxe sla, rode ui en limoen-koriandermayonaise', '14,50', 'g'],
      ['Club Pollo', 'gerookte kipfilet, uitgebakken spek, komkommer, gebakken ei, tomaat en huisgemaakte kerriemayonaise', '14,50', 'g'],
      ['Club steaktartaar', 'steaktartaar, ei, augurk, Amsterdamse uitjes, luxe sla en een limoen-koriandermayonaise', '14,50', 'g'],
      ['Focaccia 3-Way', '3 kleine belegde focacciabroodjes: rundercarpaccio met truffelmayonaise, gerookte zalm en roomkaas, brie met vijgencompote (kan niet aangepast worden)', '14,50', '']
    ]},
    { title: 'Warm & stevig', note: '', items: [
      ['Twaalfuurtje', 'klein kopje tomatensoep, 1 kroket met een sneetje brood en 2 minibroodjes (een met rundercarpaccio en een met zalm en roomkaas); kan niet aangepast worden', '14,95', ''],
      ['Flatbread (warm)', 'shredded chicken, taugé, champignons, ui en een srirachamayonaise', '14,95', ''],
      ['Flatbread vega (warm)', 'ui, champignons, bosui, taugé, sesamzaadjes en oesterzwammen afgeblust met een oosterse saus', '14,50', 'v'],
      ['Oerbol Kip', 'bruine of witte bol met gebakken kipfilet, champignons, ui, taugé in een piri piri saus', '14,95', 'g'],
      ['Oerbol Ossenhaas', 'bruine of witte bol met gebakken ossenhaas, champignons, taugé, ui in een oosterse saus', '15,50', 'g'],
      ['Uitsmijter', 'ham en/of kaas, op wit of bruin brood', '12,50', 'vg'],
      ['Boerenuitsmijter', '3 eieren met tomaat, champignons, ui, spek en gegratineerd met kaas, op wit of bruin brood', '13,95', 'vg'],
      ['2 kroketten / 2 frikandellen', 'met brood (wit of bruin) of frites', '11,75', '']
    ]},
    { title: 'Salades', note: 'Geserveerd met stokbrood, kruidenboter en een huisgemaakte rouille.', items: [
      ['Rundercarpaccio', 'rundercarpaccio met truffelmayonaise, luxe sla, pijnboompitjes, oude kaas en een balsamicodressing', '17,50', 'g'],
      ['Spicy chicken', 'shredded chicken, luxe sla, tomaat, komkommer, rode ui, champignons, taugé en sriracha-mayonaise', '18,25', 'g'],
      ['Asian beef', 'ossenhaaspuntjes, taugé, sesamzaadjes, ui, luxe sla, champignons, limoen-korianderdressing en gefrituurde uitjes', '18,75', ''],
      ['Salade de mer', 'met diverse soorten vis', '18,75', 'g'],
      ['Burratasalade', 'burrata, luxe sla, tomaat, komkommer, rode ui, perzik, pijnboompitten met een balsamicostroopdressing', '18,50', 'vg']
    ]}
  ]},
  { id: 'diner', label: 'Diner', groups: [
    SOEPEN,
    { title: 'Voorgerechten', note: 'Met stokbrood, kruidenboter en een huisgemaakte rouille.', items: [
      ['Steaktartaar', 'steaktartaar, luxe sla, zongedroogde tomaat, augurk, ei en truffelmayonaise', '14,95', 'g'],
      ['Carpaccio', 'rundercarpaccio met truffelmayonaise, rucola, pijnboompitjes en oude kaas', '14,95', 'g'],
      ['Crunchy sushi', 'keuze uit vis of vega', '14,75', 'v'],
      ['Viscocktail', 'garnalen, gerookte zalm, krab, luxe sla, rode ui, bosui, augurk en cocktailsaus', '14,95', '']
    ]},
    { title: 'Hoofdgerechten', note: 'Met een bijpassend groentengarnituur, frisse salade en keuze uit rijst of frites.', items: [
      ['Black Angus steak', '200 gram, met champignonroomsaus of peperroomsaus', '25,50', 'g'],
      ['Varkenshaasmedaillons', 'omwikkeld met spek, met champignonroomsaus of peperroomsaus', '23,95', 'g'],
      ['Aziatisch wokpotje', 'ossenhaaspuntjes, champignons, ui, taugé, sesamzaadjes, gefrituurde uitjes en een scampi-spiesje', '25,50', 'g'],
      ['Zalmfilet', 'in een kruidenkorstje, met crème fraîche', '25,50', 'g'],
      ['Garnalenpotje', 'garnalen, knoflook, ui, tomaat en prei in een roomsaus', '24,95', 'g']
    ]},
    { title: 'Twins klassiekers', note: '', items: [
      ['Schnitzel', 'met champignonroomsaus of peperroomsaus, frites en een frisse salade', '21,50', ''],
      ['Boerenschnitzel', 'gegratineerd met groenten en kaas, met frites en een frisse salade', '22,50', ''],
      ['Tortellini ovenschotel', 'tortellini, diverse groenten, tomatensaus, pesto, rucola, zongedroogde tomaat, pijnboompitjes en burrata', '21,50', 'v'],
      ['Saté à la Twins', 'kipsaté met atjar en kroepoek, frites en een frisse salade', '21,50', ''],
      ["Huisgemaakte vegetarische loempia's", 'gegratineerd met brie, met een chilisaus, frites en een frisse salade', '21,50', 'v']
    ]},
    { title: 'Desserts', note: '', items: [
      ['Cheesecake', 'met een bolletje vanille-ijs, rood fruit en slagroom', '6,75', ''],
      ['Verse aardbeien', 'met 2 bollen vanille-ijs en slagroom (alleen in het seizoen)', '7,00', ''],
      ['Dame blanche', '2 bollen vanille-ijs, chocoladesaus en slagroom', '7,00', ''],
      ['Pecan Toffee ijsschuimtaart', 'met slagroom € 7,50', '6,95', 'g'],
      ['Apfelstrudel', 'met een bolletje vanille-ijs, vanillesaus en slagroom', '7,75', ''],
      ['Coupe karamel', '1 bol vanille-ijs, 1 bol karamel-ijs, karamelsaus, karamelblokjes en slagroom', '7,00', '']
    ]}
  ]},
  { id: 'kids', label: 'Kinderen', groups: [
    { title: 'Soepje', note: '', items: [
      ['Soepje naar keuze', 'uit de grote kaart, wat kleiner, met stokbrood, kruidenboter en een huisgemaakte rouille', '6,25', '']
    ]},
    { title: 'Hoofdgerechten', note: '', items: [
      ['Kroket', 'met frites, appelmoes, mayonaise en een verrassing', '8,50', ''],
      ['Frikandel', 'met frites, appelmoes, mayonaise en een verrassing', '8,50', ''],
      ['Kipnuggets', 'met frites, appelmoes, mayonaise en een verrassing', '8,50', ''],
      ['Poffertjes', '12 poffertjes met poedersuiker en een verrassing', '8,50', '']
    ]},
    { title: 'Dessert', note: '', items: [
      ['Kinderbeker', 'met 1 bol vanille-ijs en slagroom; de beker mag mee naar huis', '5,25', '']
    ]}
  ]},
  { id: 'lekker', label: 'Gebak & borrel', groups: [
    { title: 'Gewoon lekker', note: '', items: [
      ['Appeltaart', 'met slagroom € 5,75', '5,00', ''],
      ['Seizoensgebak', 'vraag de bediening; met slagroom € 5,75', '5,00', ''],
      ['Cheesecake', 'met slagroom € 5,75', '5,00', ''],
      ['Pecan Toffee ijsschuimtaart', 'met slagroom € 7,50', '6,95', ''],
      ['Apfelstrudel met vanillesaus', 'met vanillesaus en slagroom € 7,25', '6,50', '']
    ]},
    { title: 'Bij de borrel', note: '', items: [
      ['Portie bitterballen (6 stuks)', '', '5,00', ''],
      ['Portie bitterballen (12 stuks)', '', '10,00', ''],
      ['Bittergarnituur (12 stuks)', '', '10,00', ''],
      ['Puntzak frites', 'met mayonaise', '5,50', ''],
      ["Nacho's", 'met tomatensalsa, kaas, bosui, rode ui en crème fraîche, geserveerd met chilisaus', '11,75', '']
    ]}
  ]},
  { id: 'dranken', label: 'Dranken', groups: [
    { title: 'Warme dranken', note: '', items: [
      ['Koffie', '', '3,30', ''], ['Decafé', '', '3,30', ''], ['Thee "or tea"', 'diverse smaken, biologisch', '3,30', ''],
      ['Verse muntthee', '', '4,50', ''], ['Verse gemberthee', '', '4,50', ''],
      ['Cappuccino', 'karamel of hazelnoot € 4,00', '3,70', ''], ['Espresso', '', '3,30', ''], ['Koffie verkeerd', '', '3,95', ''],
      ['Latte macchiato', 'karamel of hazelnoot € 4,80', '4,50', ''], ['Chai latte macchiato', '', '4,50', ''], ['Flatwhite', '', '4,50', ''],
      ['Extra shot espresso', '', '2,20', ''],
      ['Warme chocolademelk', 'Rousseau chocolade: melk, wit en puur; met slagroom € 5,00', '4,25', '']
    ]},
    { title: 'À la Twins', note: '', items: [
      ['Koffie/thee à la Twins', 'koffie met diverse lekkernijen', '7,25', ''],
      ['Cappuccino à la Twins', '', '7,50', ''],
      ['Latte macchiato à la Twins', '', '8,00', '']
    ]},
    { title: 'Speciale koffies', note: '', items: [
      ['Dutch Coffee', 'stroopwafellikeur', '9,00', ''], ['French Coffee', 'Grand Marnier', '9,00', ''],
      ['Irish Coffee', 'Jameson', '9,00', ''], ['Spanish Coffee', 'likeur 43', '9,00', ''], ['Italian Coffee', 'Amaretto', '9,00', '']
    ]},
    { title: 'Frisdranken', note: '', items: [
      ['Coca-Cola / Coca-Cola zero', 'flesje', '3,50', ''], ['Chaudfontaine rood of blauw', 'flesje', '3,40', ''],
      ['Fanta / Sprite / Cassis', 'flesje', '3,50', ''], ['Bitter lemon / Tonic', 'flesje', '3,60', ''],
      ['Ginger Ale / Appelsap / Rivella light', 'flesje', '3,50', ''], ["Jus d'orange", 'flesje', '3,50', ''],
      ["Jus d'orange", 'versgeperst', '4,50', ''], ['Fristi / Chocomel', 'flesje', '3,70', ''],
      ['Fuze tea sparkling lemon / green', 'glas', '3,95', ''], ['Ranja', 'kleine beker', '2,00', ''], ['Melk', 'glas', '3,00', ''],
      ['IJscappuccino', 'alleen in het seizoen, indien voorradig', '6,50', '']
    ]},
    { title: 'Wijnen', note: '', items: [
      ['Huiswijn wit', 'Grüner Veltliner', '5,50', ''], ['Pinot Grigio', '', '5,95', ''], ['Chardonnay', '', '5,95', ''],
      ['Zoete witte wijn', '', '5,50', ''], ['Huiswijn rood', 'Primitivo', '5,50', ''], ['Shiraz', '', '5,95', ''],
      ['Huiswijn rosé', "D'anjou", '5,50', ''], ['Blush rosé', '', '5,95', ''],
      ['Aperol spritz', '', '9,25', ''], ['Limoncello spritz', '', '9,25', ''], ['Fizzy peachtree', '', '9,25', '']
    ]},
    { title: 'Bieren', note: 'Wisselend bier van de tap: vraag de bediening.', items: [
      ['Hertog Jan van de tap', '0,25 l', '3,60', ''], ['Hertog Jan van de tap', '0,45 l', '6,35', ''],
      ['Alcoholvrij bier', '', '3,60', ''], ['Radler citroen 0%', '', '4,50', ''], ['Leffe blond', '', '5,75', ''],
      ['Leffe blond 0.0%', '', '5,50', ''], ['Leffe dubbel', '', '5,75', ''], ['Tripel Karmeliet', '', '6,25', ''],
      ['Texels', 'wisselend', '5,75', ''], ['Liefmans', '', '4,95', ''], ['Franziskaner', '0,33 l', '5,95', ''],
      ['Franziskaner 0.0%', '0,33 l', '5,75', '']
    ]},
    { title: 'Sterke drank', note: '', items: [
      ['Cognac/whisky', 'Rémy Martin, Famous Grouse, Jameson, Glenfiddich malt', '7,25', ''],
      ['Gedistilleerd', 'Grand Marnier, Amaretto, Baileys, Bacardi, Likeur 43, Limoncello', '6,25', ''],
      ['Rode port', '', '4,50', ''], ['Mixdrankje', '', '9,50', '']
    ]}
  ]}
];

// Afwijkende openingstijden, letterlijk van hun pagina "afwijkend_gesloten".
window.AFWIJKEND = [
  { periode: 'December 2026', regels: [
    ['5 december', 'open tot 17:00, keuken tot 16:00'],
    ['24 december', 'open tot 16:00, keuken tot 15:00'],
    ['25 december (1e Kerstdag)', 'gesloten'],
    ['26 december (2e Kerstdag)', 'gesloten'],
    ['31 december', 'open tot 16:00, keuken tot 15:00']
  ]},
  { periode: '2027', regels: [
    ['Zondag 17 januari', 'gesloten'],
    ['Maandag 18 januari', 'gesloten'],
    ['Woensdag 20 januari', 'gesloten'],
    ['Donderdag 21 januari', 'gesloten'],
    ['Zaterdag 6 februari (carnaval)', 'open tot 16:00, keuken tot 15:00'],
    ['Zondag 7 februari (carnaval)', 'gesloten'],
    ['Maandag 8 februari (carnaval)', 'gesloten'],
    ['Zondag 28 maart (1e Paasdag)', 'gesloten'],
    ['Maandag 29 maart (2e Paasdag)', 'gesloten'],
    ['Maandag 17 mei (2e Pinksterdag)', 'gesloten'],
    ['18 juli (daags na de Tour)', 'open van 16:00 tot 19:00'],
    ['Zondag 5 december', 'open tot 17:00, keuken tot 16:00'],
    ['Vrijdag 24 december', 'open tot 16:00, keuken tot 15:00'],
    ['Zaterdag 25 december (1e Kerstdag)', 'gesloten'],
    ['Zondag 26 december (2e Kerstdag)', 'gesloten'],
    ['Vrijdag 31 december', 'open tot 16:00, keuken tot 15:00']
  ]}
];

// Reguliere openingstijden. Index 0 = zondag.
window.UREN = [
  { dag: 'Zondag', open: '12:00', dicht: '20:30', keuken: '19:00' },
  { dag: 'Maandag', open: '11:30', dicht: '19:30', keuken: '18:30' },
  { dag: 'Dinsdag', dicht: null },
  { dag: 'Woensdag', open: '10:00', dicht: '20:00', keuken: '19:00' },
  { dag: 'Donderdag', open: '10:00', dicht: '20:00', keuken: '19:00' },
  { dag: 'Vrijdag', open: '10:00', dicht: '20:30', keuken: '19:00' },
  { dag: 'Zaterdag', open: '10:00', dicht: '20:30', keuken: '19:00' }
];
