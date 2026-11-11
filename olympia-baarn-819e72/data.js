// Kaarten van Grieks Restaurant Olympia, overgenomen uit hun pdf's.
// RESTAURANT: "Restaurantmenu2023.pdf" (zonder prijzen). AFHAAL: "Afhaalmenu_2025.pdf" (met prijzen).
window.RESTAURANT = [
  { id: 'r-voor', tab: 'Voorgerechten', groups: [
    { kop: 'Koude voorgerechten', items: [
      ['1', 'Tzatziki'], ['2', 'Fetakaas'], ['3', 'Olijven & pepers'], ['4', 'Taramosalata', 'Gepureerde viskuit'],
      ['6', 'Melizanosalata', 'Gepureerde aubergine'], ['7', 'Gerookte zalm'], ['8', 'Garnalensalade'],
      ['9', 'Tirosalata', 'Gepureerde fetamousse'], ['10', 'Pikilia', 'Diverse koude voorgerechten'], ['10a', 'Kruidenboter']
    ]},
    { kop: 'Warme voorgerechten', items: [
      ['5', 'Dolmadakia', 'Wijnbladeren met gehakt en feta'], ['11', 'Spanakotiropita', 'Bladerdeeg met feta en spinazie'],
      ['12', 'Tiropita', 'Bladerdeeg met feta'], ['13', 'Midia tiganita', 'Gebakken mosselen met tomatensaus'],
      ['13a', 'Feta saganaki', 'Gebakken feta'], ['16', 'Keftedakia', 'Gehaktballetjes in tomatensaus'],
      ['17', 'Garides tiganites', 'Gebakken scampi in tomatensaus'], ['30', 'Florinis', "Vleespaprika's gevuld met feta"]
    ]},
    { kop: 'Salades', items: [['20', 'Witte koolsalade'], ['21', 'Griekse salade']] }
  ]},
  { id: 'r-gril', tab: 'Van de gril', note: 'Alle gerechten geserveerd met frites en koolsalade.', groups: [
    { kop: 'Specialiteiten van de gril', items: [
      ['45', 'Sirtaki', 'Halve mousaka, giros en tzatziki'], ['49', 'Païdakia', 'Lamskoteletjes en giros'],
      ['53', 'Kipsouvlaki', 'Kipspiesjes met fetasaus'], ['56', 'Rhodos', 'Varkensmedaillons met spek aan de spies, giros en pepersaus'],
      ['67', 'Mezes tou bekri', 'Stukjes varkenshaas met champignon-paprikasaus, afgeblust met rode wijn'],
      ['68', 'Souvlaki speciaal', 'Varkenshaas aan de spies met tomatensaus en giros'],
      ['69', 'Olympia', 'Mixed grill met souvlaki, souzouki, lamskoteletje, stukje biefstuk en giros, en Griekse salade'],
      ['73', 'Filetto', 'Ossenhaas met champignon-paprikasaus']
    ]},
    { kop: 'Gerechten van de gril', items: [
      ['40', 'Soetzoeki', 'Soetzoeki (gekruid gehakt), giros, tzatziki'], ['41', 'Bifteki', 'Soetzoeki gevuld met feta, giros'],
      ['42', 'Soevlaki', 'Soevlaki (spiesjes), giros'], ['43', 'Giros schotel', 'Giros, tzatziki'],
      ['62', 'Athene schotel', 'Soetzoeki, soevlaki, giros']
    ]}
  ]},
  { id: 'r-trad', tab: 'Traditioneel, vis & vega', note: 'Alle gerechten geserveerd met frites en koolsalade.', groups: [
    { kop: 'Traditionele gerechten', items: [
      ['74', 'Stifado', 'Lamsstoofvlees met sjalotjes, brood'], ['75', 'Kleftiko', 'Lamsstoofvlees met groenten, brood'],
      ['76', 'Mousaka', 'Ovenschotel met aardappel, courgette, aubergine, gehakt, bechamelsaus, met rijst, tzatziki en Griekse salade'],
      ['79', 'Kokkinisto', 'Lamsstoofvlees met spaghetti']
    ]},
    { kop: 'Visgerechten', items: [
      ['35', 'Kalamaria', 'Gebakken inktvisringen'], ['37', 'Garides tiganites', 'Gebakken ongepelde scampi'],
      ['38', 'Olympia psaria', 'Gemengde visschotel met scampi, inktvisringen, witvis, zalm, frites en Griekse salade'],
      ['39', 'Solomos tiganitos', 'Gebakken zalmfilet']
    ]},
    { kop: 'Vegetarische gerechten', items: [
      ['33', 'Gemista', "Paprika's en tomaten uit de oven gevuld met rijst, met frietjes"],
      ['34a', 'Vegetarische mousaka', 'Ovenschotel met aardappel, courgette, aubergine en plantaardig gehakt, bechamelsaus, tzatziki, rijst en Griekse salade']
    ]}
  ]},
  { id: 'r-kind', tab: 'Kinderen & desserts', groups: [
    { kop: "Kindermenu's", items: [
      ['A', 'Spiderman', 'Soevlaki, frites en appelmoes'], ['B', 'Mickey', 'Soetzoeki, frites en appelmoes'], ['C', 'Nemo', 'Giros, frites en appelmoes']
    ]},
    { kop: 'Desserts', items: [
      ['83', 'Kinderijsje'], ['89', 'IJs met karamelsaus', 'Stukjes karamel en slagroom'], ['90', 'Baklava', 'Met vanille-ijs en slagroom'],
      ['91', 'Griekse yoghurt', 'Met honing en walnoten'], ['93', 'Dame blanche', 'Vanille-ijs met warme chocoladesaus en slagroom'],
      ['96', 'Sokolatina', 'Luchtig chocoladetaartje met chocomousse']
    ]}
  ]},
  { id: 'r-extra', tab: "Extra's", groups: [
    { kop: "Extra's", items: [
      ['22', 'Extra portie giros'], ['23', 'Rijst'], ['24', 'Frites'],
      ['25', 'Fasolakia', 'Sperziebonen in tomatensaus'], ['26', 'Gigantes', 'Grote witte bonen in tomatensaus'],
      ['27', 'Bamiës', 'Okrabonen in tomatensaus'],
      ['', 'Sauzen', 'Knoflooksaus, fetasaus, pepersaus, champignon-paprikasaus'], ['', 'Mayonaise / ketchup'], ['', 'Extra brood']
    ]}
  ]}
];

window.AFHAAL = [
  { id: 'a-voor', tab: 'Voorgerechten', items: [
    ['1', 'Tzatziki', '', '5,50'], ['2', 'Fetakaas', '', '7,50'], ['3', 'Olijven & pepers', '', '8,00'],
    ['6', 'Gepureerde aubergine', '', '8,00'], ['7', 'Gerookte zalm', '', '12,00'], ['9', 'Gepureerde fetamousse', '', '8,00'],
    ['10', 'Pikilia', 'Samengestelde koude voorgerechten', '13,00'], ['10a', 'Kruidenboter', '', '3,50'],
    ['11', 'Spanakotiropita', 'Bladerdeeg gevuld met feta en spinazie', '10,00'],
    ['16', 'Keftedakia', 'Gehaktballetjes met uitjes en tomatensaus', '9,50'],
    ['20', 'Koolsalade', '', '5,00'], ['21', 'Griekse salade', '', '6,00']
  ]},
  { id: 'a-schotel', tab: 'Schotels', items: [
    ['40', 'Souzouki schotel', 'Souzouki (gekruid gehakt), giros, tzatziki, frites en koolsalade', '19,00'],
    ['41', 'Bifteki schotel', 'Souzouki gevuld met feta, giros, frites en koolsalade', '19,00'],
    ['42', 'Souvlaki schotel', 'Souvlaki (spiesjes), giros, frites en koolsalade', '20,00'],
    ['43', 'Giros schotel', 'Giros, tzatziki, frites en koolsalade', '20,00'],
    ['45', 'Sirtaki schotel', 'Halve mousaka, giros, tzatziki, frites en koolsalade', '21,00'],
    ['49', 'Païdakia', 'Lamskoteletjes, giros, frites en koolsalade', '25,00'],
    ['53', 'Kipsouvlaki', 'Kipspiesjes met frites, fetasaus en koolsalade', '21,00'],
    ['62', 'Athene schotel', 'Souzouki, souvlaki, giros, frites en koolsalade', '24,00'],
    ['69', 'Olympiaschotel', 'Souzouki, souvlaki, lamskoteletje, stukje biefstuk, giros, frites en Griekse salade', '26,00']
  ]},
  { id: 'a-gerecht', tab: 'Ovenschotels & stoof', items: [
    ['33', 'Gemista', "Vegetarische ovenschotel van gevulde paprika's en tomaten met rijst en groente, met frites en koolsalade", '17,00'],
    ['35', 'Kalamaria', 'Gebakken inktvisringen met frites en koolsalade', '19,00'],
    ['74', 'Stifado', 'Lamsstoofvlees met sjalotjes, brood en koolsalade', '20,00'],
    ['75', 'Kleftiko', 'Lamsstoofvlees met groenten, brood en koolsalade', '20,00'],
    ['76', 'Mousaka', 'Ovenschotel met aardappel, courgette, aubergine, gehakt, bechamelsaus met rijst, tzatziki en Griekse salade', '21,00']
  ]},
  { id: 'a-extra', tab: "Extra's & dranken", items: [
    ['22', 'Extra portie giros', '', '10,00'], ['23', 'Rijst', '', '2,50'], ['24', 'Frites', '', '3,00'],
    ['28', 'Knoflooksaus', '', '1,80'], ['', 'Mayonaise', '', '0,50'], ['90', 'Baklava', '', '6,00'],
    ['', 'Ouzo, flesje 200 ml', '', '11,00'],
    ['', 'Huiswijn rood: syrah', 'Fles', '16,00'], ['', 'Huiswijn rood: merlot', 'Fles', '16,00'],
    ['', 'Huiswijn wit: chardonnay', 'Fles', '16,00'], ['', 'Huiswijn wit: sauvignon blanc', 'Fles', '16,00']
  ]}
];
