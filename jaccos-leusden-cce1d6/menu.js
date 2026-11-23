// Prijslijst Jacco's (bron: jaccosleusden.nl/prijslijst/particulieren, november 2026)
// rij: [naam, prijs | [prijzen per kolom], opties]  v = vegetarisch, n = nieuw
window.MENU = [
  { id: 'patat', tab: 'Patat', groups: [
    { title: 'Bakjes patat of raspatat', note: 'Patat en raspatat hebben dezelfde prijs.', cols: ['Enkel', 'Dubbel'], rows: [
      ['Patat zonder', ['2,95', '5,90']], ['Patat mayonaise', ['3,75', '7,50']], ['Patat mayonaise + ui', ['3,95', '7,90']],
      ['Patat currysaus', ['3,75', '7,50']], ['Patat tomatenketchup', ['3,75', '7,50']], ['Patat speciaal', ['4,10', '8,20']],
      ['Patat satésaus', ['4,20', '8,40']], ['Patat satésaus + ui', ['4,40', '8,80']], ['Patat oorlog', ['4,20', '8,40']],
      ['Patat oorlog met ui', ['4,40', '8,80']], ['Patat joppiesaus', ['4,10', '8,20']], ['Patat knoflooksaus', ['4,10', '8,20']],
      ['Patat jambalasaus', ['4,10', '8,20']], ['Patat truffelmayonaise', ['4,25', '']]
    ]},
    { title: 'Rijk belegd', rows: [
      ['Patat stoofvlees', '7,75'], ['Patat shoarma met saus', '9,25'], ['Patat gyros met saus', '9,25'], ['Boerenpatat met saus', '9,25'],
      ['Patat warmvlees met saus', '9,25'], ['Patat kapsalon döner met saus', '11,50'], ['Mexicaanse kapsalon', '10,95'], ['Patat met pulled chicken', '10,95']
    ]},
    { title: 'Gezinszakken', cols: ['Patat', 'Raspatat'], rows: [
      ['1,5 persoon', ['4,35', '']], ['2 personen', ['5,80', '5,80']], ['2,5 persoon', ['7,25', '']], ['3 personen', ['8,70', '8,70']],
      ['4 personen', ['11,60', '11,60']], ['5 personen', ['14,50', '14,50']]
    ]}
  ]},
  { id: 'snacks', tab: 'Snacks', groups: [
    { title: 'Snacks', rows: [
      ['Vleeskroket', '2,60'], ['Kwekkeboom kroket (rundvlees)', '2,95'], ['Kwekkeboom satékroket', '2,95'], ['Kalfskroket', '2,70'],
      ['Groentekroket', '2,70', 'v'], ['Goulashkroket', '2,70'], ['Kaaskroket', '3,10', 'v'], ['Frikandel', '2,60'], ['Frikandel speciaal', '3,30'],
      ['Kip-frikandel', '2,70'], ['Kip-frikandel speciaal', '3,40'], ['XXL frikandel 250 gram', '4,90'], ['XXL frikandel speciaal 250 gram', '6,30'],
      ['Kaassoufflé', '2,70', 'v'], ['Kaassoufflesse', '2,80', 'v'], ['Bamischijf', '2,70', 'v'], ['Nasischijf (extra pittig)', '2,70'],
      ['Bamischijf oriëntal', '2,70', 'v'], ['Nasischijf oriëntal', '2,70', 'v'], ['Kipcorn', '3,10'], ['Knakworst', '3,20'], ['Braadworst', '3,20'],
      ['Shaslick met saus', '6,25'], ['Triostick', '2,60'], ['Berenpoot met saus', '4,75'], ['Shoarmarol', '3,95'], ['Sitostick met saus', '4,30'],
      ['Pikanto', '2,90'], ['Mexicano', '3,50'], ['Loempia', '4,80'], ['Loempia speciaal', '6,65'], ['Loempia vegetarisch', '3,90', 'v'],
      ['Gehaktbal', '4,25'], ['Smulrol', '3,80'], ['Lihan boutje', '2,60'], ['Viandel', '2,90'], ['Cheesecrack', '2,90', 'v'], ['Vlamvreter', '3,75'],
      ['Hotdog', '3,10'], ['Hotdog speciaal', '3,80']
    ]},
    { title: 'Mini snacks', rows: [
      ['Bitterballen (7 stuks)', '3,85'], ['Kipnuggets (vanaf 6 stuks)', '4,20'], ['Kipfingers (6 stuks)', '4,50'], ['Bittergarnituur (8 stuks)', '4,80'],
      ['Mini kaassouffletjes (5 stuks)', '4,50', 'v'], ["Mini loempia's met saus (5 stuks)", '4,50', 'v'], ['Vlammetjes (6 stuks)', '5,70'],
      ['Kaasstengels (5 stuks)', '4,75', 'v'], ["Mini mexicano's (5 stuks)", '4,75'], ['Rundvlees bitterbal (5 stuks)', '5,75']
    ]}
  ]},
  { id: 'broodjesnack', tab: 'Broodje snack', groups: [
    { title: 'Snack op een broodje', cols: ['Bolletje', 'Kl. pistolet', 'Gr. pistolet'], rows: [
      ['Vleeskroket', ['3,50', '3,65', '6,45']], ['Kwekkeboom kroket (rundvlees)', ['3,85', '4,00', '6,65']], ['Satékroket Kwekkeboom', ['3,85', '4,00', '6,65']],
      ['Goulashkroket', ['3,60', '3,75', '6,55']], ['Groentekroket', ['3,60', '3,75', '6,55']], ['Kalfskroket', ['3,60', '3,75', '6,55']], ['Kaaskroket', ['4,00', '', '']],
      ['Frikandel', ['3,50', '3,65', '4,05']], ['Frikandel speciaal', ['4,20', '4,35', '4,75']], ['Kip-frikandel', ['3,60', '3,75', '4,15']],
      ['Kip-frikandel speciaal', ['4,30', '4,45', '4,85']], ['Kaassoufflé', ['3,60', '3,75', '']], ['Kaassoufflesse', ['3,70', '3,85', '']],
      ['Knakworst', ['4,10', '4,25', '']], ['Braadworst', ['4,10', '4,25', '']], ['Mexicano', ['4,40', '4,55', '4,95']], ['Pikanto', ['3,80', '3,95', '']],
      ['Kipcorn', ['4,00', '4,15', '']], ['Kaas-kipcorn', ['4,00', '', '']], ['Viandel', ['3,80', '3,95', '4,25']], ['Bamischijf', ['3,60', '3,75', '']],
      ['Gehaktbal', ['4,00', '4,15', '6,95']], ['Kroket draadjes (vegetarisch)', ['4,00', '4,15', ''], 'v'], ['Frikandel (vegetarisch)', ['4,00', '4,15', '4,45'], 'v'],
      ['Frikandel speciaal (vegetarisch)', ['4,70', '4,85', '5,15'], 'v'], ['Kipcorn (vegetarisch)', ['4,00', '4,15', '4,45'], 'v'],
      ['Warm vlees met saus', ['4,10', '5,00', '6,50']], ['Warm vlees ui/champignons', ['5,30', '5,80', '6,50']]
    ]}
  ]},
  { id: 'burgers', tab: 'Burgers', groups: [
    { title: 'Hamburgers', rows: [
      ['Black Angus Burger', '12,50', '', '170 gram, 100% puur rundvlees'], ['Broodje kipburger Max', '9,25', 'n', '160 gram'],
      ['Hamburger met saus', '4,50'], ['Hamburger speciaal', '5,50'], ['Hamburger ui/champignons', '6,00'], ['Hamburger cheese', '6,50'],
      ['Hamburger hawaï', '6,00'], ['Hamburger egg', '6,00'], ['Hamburger ui bacon', '6,75'], ['Bickyburger', '5,50'], ['Kipburger', '4,75'],
      ['Dubbelburger cheese', '6,25'], ['Boerenhamburger', '7,50'], ['Avocado burger', '7,50', 'v'], ['Mexicano burger classic', '7,50'], ['Mexicano burger oriental', '6,75']
    ]}
  ]},
  { id: 'maaltijden', tab: 'Maaltijden', groups: [
    { title: 'Menu\'s', rows: [
      ['Menu karbonade', '13,50'], ['Menu kipschnitzel', '13,50'], ['Menu varkensschnitzel', '13,50'], ['Menu halve kip', '14,50'], ['Menu kipsaté', '14,50'],
      ['Menu varkenssaté', '14,50'], ['Menu spareribs', '19,50'], ['Menu hamburger', '13,50'], ['Menu Black Angus Burger', '16,50'], ['Menu kip cordon bleu', '15,50'],
      ['Menu kipshoarma', '13,50'], ['Menu gyros', '13,50'], ['Menu hawaïschnitzel', '15,50'], ['Menu jägerschnitzel', '16,50'], ['Menu varkenshaas zonder saus', '17,50'],
      ['Menu varkenshaas met champignonroomsaus', '19,50'], ['Menu varkenshaas met pepersaus', '19,50'], ['Menu shaslick', '13,25', 'n'], ['Menu kipburger Max', '13,25', 'n']
    ]},
    { title: 'Voor de kinderen', rows: [
      ['Kinder funbox', '7,25', '', 'Kinderfrietje met zakje mayonaise en keuze uit frikandelletjes, bitterballen, kipnuggets of kaassoufflé. Nieuw: een kleine milkshake met meer inhoud.']
    ]},
    { title: 'Erbij', rows: [['Rundvlees slaatje', '2,50']] }
  ]},
  { id: 'vlees', tab: 'Vlees & döner', groups: [
    { title: 'Vleesgerechten', rows: [
      ['Karbonade', '6,50'], ['Kipschnitzel', '6,95'], ['Varkensschnitzel', '6,95'], ['Hawaïschnitzel', '8,95'], ['Spareribs', '12,50'], ['Halve kip', '7,95'],
      ['Kip cordon bleu', '8,25'], ['Kipsaté (portie)', '6,95'], ['Varkenssaté (portie)', '7,25'], ['Kipsaté (portie) met brood', '7,95'],
      ['Varkenssaté (portie) met brood', '8,25'], ['Kipsaté spies met stokbrood', '6,95'], ['Italiaanse bol kipshoarma', '8,00'], ['Italiaanse bol gyros', '8,00'],
      ['Kippenvleugels (portie)', '6,00']
    ]},
    { title: 'Döner', rows: [
      ['Italiaanse bol döner', '9,50'], ['Turkse pizza met döner', '10,50'], ['Patat kapsalon döner', '11,50'], ['Menu döner', '13,50']
    ]}
  ]},
  { id: 'broodjes', tab: 'Broodjes & tosti\'s', groups: [
    { title: 'Belegde broodjes', wide: true, cols: ['Bolletje', 'Kl. pistolet', 'Gr. pistolet', 'It. bol', 'Rustiek'], rows: [
      ['Italiaanse bol warm (alleen wit)', ['', '', '', '6,25', ''], '', 'Kaas, salami, chorizo, komkommer en paprika'], ['Italiaanse bol gezond (alleen wit)', ['', '', '', '6,35', '']],
      ['Jong belegen kaas', ['3,30', '3,80', '5,20', '5,30', '5,50']], ['Oud belegen kaas', ['3,50', '4,00', '5,40', '5,50', '5,70']],
      ['Jong belegen kaas en tomaat', ['3,60', '4,00', '5,50', '5,60', '5,79']], ['Oud belegen kaas en tomaat', ['3,80', '4,30', '5,80', '5,80', '6,00']],
      ['Boerenham', ['3,60', '4,10', '5,50', '5,80', '6,00']], ['Beenham (warm)', ['3,95', '4,75', '5,80', '6,25', '6,45']], ['Ham en kaas', ['3,85', '4,35', '5,85', '5,85', '6,05']],
      ['Ham, kaas en ananas', ['4,35', '4,85', '7,15', '7,25', '7,45']], ['Ham en brie (warm)', ['4,20', '4,75', '7,05', '7,15', '7,35']],
      ['Ham, brie en ananas (warm)', ['4,60', '5,25', '7,25', '7,35', '7,55']], ['Kaas en salami', ['3,85', '4,35', '5,85', '5,95', '6,15']],
      ['Rosbief', ['3,75', '4,25', '5,75', '5,85', '6,05']], ['Fricandeau', ['3,65', '4,15', '5,55', '5,65', '5,85']], ['Salami', ['3,60', '4,10', '5,50', '5,60', '5,80']],
      ['Grillworst', ['3,60', '4,10', '6,40', '6,50', '6,70']], ['Filet americain', ['4,35', '4,85', '7,15', '7,25', '6,75']], ['Filet americain + ei', ['4,95', '5,65', '7,75', '7,85', '7,35']],
      ['Tartaar', ['4,25', '4,75', '7,05', '7,15', '6,65']], ['Tartaar speciaal', ['4,95', '5,45', '7,75', '7,85', '7,25']], ['Gezond', ['4,00', '4,50', '6,50', '6,85', '6,25']],
      ['Ossenworst', ['3,85', '4,35', '5,75', '5,90', '5,95']], ['Ei', ['2,75', '3,25', '4,65', '4,75', '4,95']], ['Eiersalade', ['3,75', '4,25', '5,75', '5,85', '6,50']],
      ['Kipkerriesalade', ['3,75', '4,25', '5,75', '5,85', '6,50']], ['Tonijnsalade', ['3,95', '4,50', '6,00', '6,10', '6,75']], ['Gerookte zalm', ['5,75', '6,40', '8,20', '8,30', '7,95']],
      ['Gerookte zalm + roomkaas bieslook', ['5,95', '6,60', '8,40', '8,50', '8,25']], ['Brie', ['4,00', '4,50', '5,80', '5,90', '6,75']],
      ['Verse roomkaas met bieslook', ['3,80', '4,30', '5,60', '5,70', '6,05']], ['Kipfilet naturel', ['3,75', '4,25', '5,75', '5,85', '6,05']],
      ['Broodje (los)', ['0,95', '1,00', '1,40', '1,50', '2,35']]
    ]},
    { title: 'Uitsmijters', note: 'Op wit of bruin brood, zelfde prijs.', rows: [
      ['Uitsmijter kaas', '9,00'], ['Uitsmijter ham', '9,00'], ['Uitsmijter ham en kaas', '10,00'], ['Uitsmijter rosbief', '10,00'], ['Uitsmijter spek', '10,00']
    ]},
    { title: 'Tosti\'s', note: 'Op wit of bruin brood, zelfde prijs.', rows: [
      ['Tosti kaas incl. saus', '4,50'], ['Tosti ham incl. saus', '4,50'], ['Tosti ham/kaas incl. saus', '5,25'], ['Tosti hawaï incl. saus', '5,75'], ['Franse tosti', '6,50']
    ]}
  ]},
  { id: 'vega', tab: 'Vega & glutenvrij', groups: [
    { title: 'Vegetarische snacks', rows: [
      ['Kroket draadjes (vegetarisch)', '3,10'], ['Frikandel (vegetarisch)', '3,10'], ['Frikandel speciaal (vegetarisch)', '3,80'], ['Groentekroket', '2,70'],
      ['Kaaskroket', '3,10'], ['Kaassoufflé', '2,70'], ['Kaassoufflesse', '2,80'], ['Bamischijf', '2,70'], ['Bamischijf oriëntal', '2,70'], ['Nasischijf oriëntal', '2,70'],
      ['Kipcorn (vegetarisch)', '3,10'], ['Cheesecrack', '2,90'], ['Mini kaassouffletjes (5 stuks)', '4,50'], ["Mini loempia's met saus (5 stuks)", '4,50'],
      ['Kaasstengels (5 stuks)', '4,75'], ['Loempia vegetarisch', '3,90'],
      ['Vegetarische hamburger', 'vanaf 4,75', '', 'Diverse soorten: speciaal (alleen uien), ui/champignons, cheese, hawaï, champignons en egg'], ['Avocado burger', '7,50']
    ]},
    { title: 'Glutenvrij', note: 'Gebakken in een aparte oven en pan, die we alleen voor glutenvrij gebruiken.', rows: [
      ['Glutenvrije frikandel', '3,85'], ['Glutenvrije rundvleeskroket', '3,85'], ['Glutenvrij pistoletje wit (los)', '3,25']
    ]}
  ]},
  { id: 'shakes', tab: 'Shakes & ice coffee', groups: [
    { title: 'Milkshake en yoghurtshake', note: 'Smaken: aardbeien, banaan, vanille, chocolade, citroen, mocca, kersen, pistache, kiwi en sinaasappel.', cols: ['Klein', 'Middel', 'Groot'], rows: [
      ['Milkshake', ['2,95', '3,60', '4,15']], ['Yoghurtshake', ['3,25', '4,00', '4,75']]
    ]},
    { title: 'Ice coffees en smoothies', rows: [
      ['Xtra Energy', '4,95', 'n'], ['Tropical Twist', '4,95', 'n'], ['Berry Energiser', '4,95', 'n'], ['Morning Glory (op = op)', '4,95'], ['Blue Beauty', '5,95', 'n'],
      ['Ice Coffee', '5,75', 'n'], ['Caramel Ice Coffee', '5,95', 'n'], ['Chocolate Ice Coffee', '5,95', 'n']
    ]}
  ]},
  { id: 'meer', tab: 'Sauzen & dranken', intro: 'Ook te bestellen. De prijzen ziet u bij het online bestellen of in de zaak.', groups: [
    { title: 'Bakje saus', list: ['Mayonaise', 'Mayonaise/ui', 'Curry/mayonaise', 'Curry', 'Curry/ui', 'Ketchup/mayonaise', 'Tomatenketchup', 'Speciaal', 'Uien', 'Satésaus', 'Satésaus/ui', 'Oorlog', 'Oorlog + ui', 'Joppiesaus', 'Knoflooksaus', 'Hotsaus', 'Jambalasaus', 'Chilisaus', 'Zigeunersaus', 'Sambal'] },
    { title: 'Soepen', list: ['Tomatensoep', 'Groentesoep', 'Tomatensoep in de pan (vanaf 10 personen)', 'Groentesoep in de pan (vanaf 10 personen)'] },
    { title: 'Frisdrank en bier', list: ['Chocomel 0,25 l (blikje)', 'Fristi 0,25 l (blikje)', 'Ice Tea Sparkling 0,33 l (blikje)', 'Amstel Radler 0.0% (flesje)', 'Texels 0.0% (flesje)', 'Heineken (flesje, blikje of krat)', 'Hertog Jan (flesje of krat)'] },
    { title: 'Overige', list: ['Melk (liter)', 'Karnemelk (liter)', "Jus d'orange (1,5 liter)"] }
  ]}
];
