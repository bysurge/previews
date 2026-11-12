// Menukaart Grieks Restaurant Kreta, overgenomen van hun menukaart (afbeelding menu20260625) op kreta-ede.nl.
// Item: [naam, omschrijving, prijs, vegetarisch?]
const SALADEBAR = 'U kunt gebruik maken van onze saladebar.';
window.MENU = [
  { id: 'voor', label: 'Voorgerechten', groups: [
    { title: 'Koude voorgerechten', note: 'Voorgerechten worden geserveerd met brood.', items: [
      ['Tzatziki', 'yoghurt met komkommer en knoflook', '8,75', 1],
      ['Taramas', 'Griekse viskuitsalade', '7,75'],
      ['Tonosalata', 'tonijnsalade', '7,75'],
      ['Trio Elinique', 'bolletje tzatziki, taramas en tonosalata', '7,75'],
      ['Garides cocktail', 'garnalensalade', '9,50'],
      ['Feta', 'Griekse witte kaas', '9,75', 1],
      ['Eliès kai piperiès', 'olijven en pepertjes', '7,00', 1],
      ['Griekse salade', 'met feta', '9,50', 1],
      ['Meloen met parmaham', '', '9,00'],
      ['Kruidenboter', '', '4,50', 1]
    ]},
    { title: 'Soepen', note: '', items: [
      ['Bonensoep', '', '6,45', 1],
      ['Uiensoep', '', '6,45', 1]
    ]},
    { title: 'Warme voorgerechten', note: 'Voorgerechten worden geserveerd met brood.', items: [
      ['Keftedes', 'gehaktballetjes in tomatensaus', '8,45'],
      ['Dolmadakia', 'wijnbladeren gevuld met rijst en gehakt, geserveerd met tzatziki', '9,75'],
      ['Spanakopita', 'spinazie en feta in bladerdeeg', '7,75', 1],
      ['Garides saganaki', 'op Griekse wijze in knoflook gebakken garnalen, geblust met ouzo en citroen', '13,95'],
      ['Feta saganaki', 'gebakken fetakaas in filodeeg, met honing en sesamzaad', '10,95', 1],
      ['Feta fournou', 'combinatie van feta en Griekse kaas met paprika, tomaat, ui en oregano uit de oven', '11,95', 1],
      ['Midia saganaki', 'gepaneerde mosselen met whiskeysaus', '10,00'],
      ['Kalamarakia', 'gefrituurde inktvisringen met knoflooksaus', '11,95'],
      ['Pikilia', 'samenstelling van diverse warme en koude voorgerechten; ook voor meerdere personen verkrijgbaar', 'p.p. 14,75']
    ]}
  ]},
  { id: 'visvega', label: 'Vis & vegetarisch', groups: [
    { title: 'Visgerechten', note: 'Alle visgerechten worden geserveerd met knoflooksaus, rijst en frites. ' + SALADEBAR, items: [
      ['Solomos-schotel', 'zalmfilet, tilapiafilet, scampi en kalamaria', '22,50'],
      ['Kalamaria', 'gefrituurde inktvisringen', '22,00'],
      ['Tsipoura psiti', 'gegrilde dorade met olijfolie-citroendressing', '24,50'],
      ['Gegrilde zalm', '', '24,50'],
      ["Scampi's", "6 grote gamba's", '28,50']
    ]},
    { title: 'Vegetarisch', note: SALADEBAR, items: [
      ['Kritharaki', 'Griekse pasta in tomatensaus met kaas uit de oven', '15,00', 1],
      ['Gemista', 'met rijst gevulde paprika en tomaat uit de oven, geserveerd met frites', '19,50', 1],
      ['Mix-schotel', 'sperziebonen, gigantes, aubergine, rijst en frites', '19,50', 1],
      ['Vegetarische mousaka', 'geserveerd met rijst', '22,50', 1]
    ]}
  ]},
  { id: 'oven', label: 'Uit de oven', groups: [
    { title: 'Uit de oven', note: SALADEBAR, items: [
      ['Mousaka', 'klassieke auberginesschotel met gehakt, geserveerd met rijst', '22,50'],
      ['Mytilini-schotel', 'gestoofd lams- of rundvlees met kritharaki (Griekse pasta)', '23,00'],
      ['Stifado', 'gestoofd lams- of rundvlees met sjalotjes in een rode wijnsaus, met frites', '25,00']
    ]}
  ]},
  { id: 'grill', label: 'Van de grill', groups: [
    { title: 'Van de grill', note: 'Alle grillgerechten worden geserveerd met rijst en frites. ' + SALADEBAR, items: [
      ['Kretaspies speciaal', 'een luxe spies met varkenshaas, biefstuk, kipfilet en groente', '20,50'],
      ['Ouzo-schotel', 'gyros, 2 souvlaki van kophaas en tzatziki', '21,50'],
      ['Alexandros-schotel', 'souzouki, kipdijfilet, gyros en tzatziki', '21,75'],
      ['Hermes-schotel', 'souvlaki van kophaas, souzouki, kipdijfilet, gyros en tzatziki', '23,35'],
      ['Dorps-schotel', 'souzouki, 2 stuks lever en gyros', '21,50'],
      ['Platamonas-schotel', 'entrecote, gyros en tzatziki', '21,25'],
      ['Delphi-schotel', 'souvlaki van kophaas, lamskotelet, kipdijfilet, gyros en tzatziki', '24,50'],
      ['Gyros-schotel', 'kleine stukjes geroosterd vlees met ui en tzatziki', '20,50'],
      ['Kipfilet-schotel', 'kipfilet met champignonsaus', '20,75'],
      ['Bifteki-schotel', 'Grieks gekruid gehakt, gevuld met feta, in tomatensaus', '21,00'],
      ['Knossos-schotel', 'entrecote, lamskotelet en kipdijfilet', '28,00'],
      ['Paidakia-schotel', '5 lamskoteletten', '29,00'],
      ['Chersonissos-schotel', 'souzouki, souvlaki van kophaas, lamskotelet, kipdijfilet en gyros', '28,00']
    ]}
  ]},
  { id: 'samen', label: 'Voor twee', groups: [
    { title: 'Speciale schotels (vanaf 2 personen)', note: SALADEBAR, items: [
      ['Marina gia dio', '2 stukjes mousaka, 2 souvlaki, 2 kipdijfilet, 2 entrecote en gyros, geserveerd met tzatziki, gigantes, rijst en frites', '62,00'],
      ['Agios Nikolaos gia dio', "2 kipdijfilet, 2 souzouki, gyros en 2 gamba's, 2 tilapiafilet en kalamarakia, geserveerd met tzatziki, knoflooksaus, rijst en frites", '62,00']
    ]}
  ]},
  { id: 'extra', label: "Kinderen & extra's", groups: [
    { title: 'Kindermenu tot 12 jaar', note: 'Geserveerd met frites, mayonaise en appelmoes.', items: [
      ['Kindermenu', 'keuze uit gyros, souzouki, souvlaki, kipfilet, hamburger, frikandel of vissticks', '9,95']
    ]},
    { title: "Extra's", note: '', items: [
      ['Frites', '', '4,00', 1], ['Rijst', '', '3,00', 1],
      ['Gigantes', 'grote witte bonen in tomatensaus', '5,00', 1],
      ['½ portie gyros', '', '10,30'], ['¼ portie gyros', '', '5,65'],
      ['Souzouki, lever of souvlaki', 'per stuk', '5,25'], ['Lamskotelet of kipfilet', 'per stuk', '5,90'],
      ['Pita los', '', '2,00', 1], ['Mandje brood', '', '3,00', 1],
      ['Pita gyros', 'alleen voor afhalen', '9,25']
    ]},
    { title: 'Sauzen', note: '', items: [
      ['Bol tzatziki', '', '3,00', 1], ['Champignonsaus', '', '2,50', 1], ['Knoflooksaus', '', '1,70', 1],
      ['Mayonaise, ketchup, mosterd, appelmoes, sambal of curry', '', '0,75', 1]
    ]}
  ]}
];
window.UREN = [ // index 0 = zondag
  ['Zondag', '15:30', '22:00'], ['Maandag', '16:00', '22:00'], ['Dinsdag', '16:00', '22:00'], ['Woensdag'],
  ['Donderdag', '16:00', '22:00'], ['Vrijdag', '16:00', '22:00'], ['Zaterdag', '16:00', '22:30']
];
