/* Menukaart Flores (digitaal-menukaart-november-2025.pdf), visueel overgenomen.
   tags: c = aanbevolen door de chef, v = vegetarisch, m = mild, p = pittig, s = scherp */
window.FLORES_MENU = [
  { id: 'rijsttafels', t: 'Rijsttafels', intro: 'Vanaf 2 personen. Geurende rijst, kruidige sauzen, gemarineerd vlees en smaakvolle groentegerechten: de rijsttafel is een uitgebreide, feestelijke maaltijd van authentieke Indonesische gerechten.', rice: [
    { n: 'Rijsttafel Flores', p: '39,50 p.p.', tags: 'cm', d: 'Verschillende heerlijke gerechtjes van vlees en groente.',
      list: 'Sateh ajam (sateh van kippendij met pindasaus), sateh babi (sateh van varkenshaas in ketjapsaus), daging rendang (gestoofd rundvlees in scherpe saus), daging semor (gestoofd rundvlees in zoete sojasaus), babi tijen (varkensvlees in ketjap en steranijssaus), ajam kerrie (kip in een kerrie kokossaus), gado gado (verse groenten met pindasaus), sambal goreng boontjes (sperzieboontjes), sambal goreng telor (ei met kruidige saus), nasi putih (witte rijst), nasi goreng (gebakken rijst), pisang goreng (gebakken banaan), atjar (zoetzure komkommersalade), serundeng (geroosterde kruidige kokosrasp), kroepoek, emping' },
    { n: 'Rijsttafel Sayoeran (vegetarisch)', p: '38,50 p.p.', tags: 'vm', d: 'Verschillende heerlijke vegetarische gerechtjes.',
      list: 'Sateh tahoe (sateh van tahoe met pinda), sateh tahoe (sateh van tahoe met ketjapsaus), terong belado (aubergine met pittige saus), sagur asem manis (gegrilde groente met zoetzure saus), sayur kerrie (groente in een kerriesaus), jamur rendang (champignons met pittige kokossaus), roedjak manis (gemengd fruit in pittige Javaanse saus), gado gado (verse groenten met pindasaus), sambal goreng boontjes (sperzieboontjes), sambal goreng telor (ei met kruidige saus), nasi putih (witte rijst), nasi goreng (gebakken rijst), pisang goreng (gebakken banaan), atjar (zoetzure komkommersalade), serundeng (geroosterde kruidige kokosrasp), kroepoek, emping' },
    { n: 'Rijsttafel Sumba', p: '39,50 p.p.', tags: 'm', d: 'Rijsttafel van sateh en meer.',
      list: 'Sateh ajam (sateh van kippendij met pindasaus), sateh babi (sateh van varkenshaas in ketjapsaus), sateh kambing (sateh van geitenvlees in pittige ketjapsaus), sateh udang (sateh van garnalen met zoete sesamsaus), daging rendang (gestoofd rundvlees in scherpe saus), gado gado (verse groenten met pindasaus), sambal goreng boontjes (sperzieboontjes), sambal goreng telor (ei met kruidige saus), nasi putih (witte rijst), nasi goreng (gebakken rijst), pisang goreng (gebakken banaan), atjar (zoetzure komkommersalade), serundeng (geroosterde kruidige kokosrasp), kroepoek, emping' },
    { n: 'Rijsttafel Ikan', p: '42,50 p.p.', tags: 'cm', d: 'Verschillende heerlijke gerechtjes van vis en garnalen.',
      list: 'Ikan bali (vis in een pittige Balinese saus), ikan ketjap (vis in een ketjapsaus), udang rica rica (kleine garnalen in een romige kokossaus), udang goreng (krokant gebakken garnalen met knoflook), pittige ikan kerrie (vis in een kerriesaus), gado gado (verse groenten met pindasaus), sambal goreng boontjes (sperzieboontjes), sambal goreng telor (ei met kruidige saus), nasi putih (witte rijst), nasi goreng (gebakken rijst), pisang goreng (gebakken banaan), atjar (zoetzure komkommersalade), serundeng (geroosterde kruidige kokosrasp), kroepoek, emping' }
  ], after: 'Uitbreiden met vis-, calamares- of garnalengerechtjes: 5,50 p.p. (vanaf 2 personen): ikan ketjap (vis in een ketjapsaus), udang goreng (krokant gebakken garnalen met knoflook), cumi cumi (calamares in dabu dabu saus). Nasi goreng of bami goreng in plaats van witte rijst: 3,00 (voor 2 personen).' },

  { id: 'driegangen', t: '3-gangenmenu', intro: 'Kies uit onze twee 3-gangenmenu\'s, traditioneel of exclusief, en geniet van de smaken van Indonesië. Vanaf 2 personen, alleen per tafel te bestellen.', courses: [
    { n: 'Tradisi Indonesia', p: '55,50 p.p.', was: 'i.p.v. 61,50', d: 'Een authentieke reis door de Indonesische keuken met geliefde klassiekers, zorgvuldig bereid door onze chef.',
      c: [['Voorgerecht', 'Verschillende hapjes uit onze streetfoodselectie'], ['Hoofdgerecht', 'Traditionele rijsttafel: een selectie van klassieke Indonesische gerechten, rijk aan vertrouwde smaken en kruiden'], ['Dessert', 'Spekkoek met ijs']] },
    { n: 'Exclusief Nusantara', p: '74,50 p.p.', d: 'Laat u verrassen door onze chef met een exclusieve selectie van gerechten die de rijkdom van de Indonesische keuken weerspiegelen. Een verfijnde culinaire ervaring, bereid met de beste ingrediënten en met liefde gepresenteerd.',
      c: [['Voorgerecht', 'Voorgerecht van de chef: een verrassende creatie met authentieke Indonesische smaken'], ['Hoofdgerecht', 'Rijsttafel exclusief van de chef: een verfijnde samenstelling van premium gerechten, met bijzondere sauzen, verfijnde presentatie en subtiele balans van smaken'], ['Dessert', 'Dessert van de chef: een elegante afsluiting met een overheerlijk grand dessert']] }
  ]},

  { id: 'voor', t: 'Voorgerechten', items: [
    ['Soto ajam', 'Javaanse kippensoep geserveerd met taugé, stukjes kip, lente-ui, selderijblad en ei.', '10,50', 'm'],
    ['Laksa soep', 'Kruidige kokosmelksoep geserveerd met gamba\'s en taugé.', '11,50', 'm'],
    ['Tomatensoep', 'Tomatencrèmesoep met basilicum.', '10,50', 'v'],
    ['Martabak', 'Krokant deeg gevuld met rundergehakt, ei, lente-ui en kerrie masala.', '10,50', 'm'],
    ['Pangsit goreng', 'Krokant gebakken flensjes, gevuld met kip en garnalenmousse met een sesamsaus.', '10,50', 'm'],
    ['Lemper kip', 'Rolletjes kleefrijst met kippenvlees in bananenbladeren.', '9,50', 'm'],
    ['Sateh ajam', 'Drie stokjes gegrilde kip met een pittige pindasaus.', '12,50', 'm'],
    ['Sateh babi', 'Drie stokjes gegrild varkensvlees met een ketjapsaus.', '12,50', 'm'],
    ['Loempia', 'Loempia van witte kool, wortel en tahoe met pindasaus.', '9,50', 'v'],
    ['Sateh kambing', 'Drie stokjes gegrild geitenvlees met een pittige sojasaus.', '15,50', 'p'],
    ['Compositie', 'Drie verschillende hapjes: martabak, pangsit goreng, sateh kambing.', '14,50', 'm'],
    ['Udang goreng', 'Gebakken garnalen met zoetzure saus.', '12,50', 'm'],
    ['Bebek roedjak manis', 'Krokant gebakken eendenfilet met gemengd fruit in pittige Javaanse saus.', '14,50', 'p'],
    ['Indonesische streetfoodplank', 'Borrelplank vanaf 2 personen. Laat je verrassen door de chef: een proeverij van onze selectie mooie smaken uit onze streetfood, 4 verschillende borrelhapjes.', '16,50 p.p.', 'cm']
  ]},

  { id: 'carte', t: 'À la carte', intro: 'Deze gerechten worden geserveerd met nasi putih, atjar en serundeng. Nasi goreng of bami goreng tegen een meerprijs van 1,50 p.p.', groups: [
    { g: 'Vleesgerechten', items: [
      ['Daging semoor', 'Rundvlees in zoete sojasaus en tomaten.', '26,50', 'm'],
      ['Daging rendang Padang', 'Rundvlees gestoofd in een kruidige en scherpe saus met kokos.', '26,50', 's'],
      ['Bistek Flores', 'Gegrilde ossenhaas in een delicate boter-ketjapsaus.', '32,50', 'mc'],
      ['Babi tjien', 'Varkensspeklappen in milde anijssaus.', '26,50', 'm'],
      ['Sambal goreng daging kentang', 'Gestoofd rundvlees in pittige peper-tomatensaus met gekookte aardappel.', '29,50', 'p']]},
    { g: 'Kipgerechten', items: [
      ['Ajam bawang', 'Gegrilde kippendijfilet met gember en lente-ui in een zoete sojasaus.', '26,50', 'm'],
      ['Ajam kerrie', 'Kip in een pittige kerrie-kokossaus.', '26,50', 'p'],
      ['Ajam lombok', 'Geroosterde kip in een zeer scherpe saus met lombok, Spaanse peper, citroengras en tomaat.', '26,50', 's'],
      ['Ajam kacang', 'Gegrilde kippendijen in pinda-kokossaus.', '25,50', 'p'],
      ['Bebek gula Djawa', 'Eendenfilet in een zoet-scherpe Javaanse suikersaus.', '29,50', 'p']]},
    { g: 'Garnalen en vis', items: [
      ['Udang dabu dabu', 'Gebakken gamba\'s met dabu-dabusaus van sjalotjes, rode peper, groene peper en tomaten.', '32,50', 'pc'],
      ['Ikan ketjap', 'Gebakken kabeljauw in een boter-zoete sojasaus en citroenblad.', '29,50', 'm'],
      ['Ikan dabu dabu', 'Gebakken kabeljauw met dabu-dabusaus van sjalotjes, rode peper, groene peper en tomaten.', '29,50', 'pc'],
      ['Ikan pepes', 'Makreelfilet gestoomd in een zeer pittige saus van Spaanse pepers.', '29,50', 's']]},
    { g: 'Vegetarisch', items: [
      ['Gado gado', 'Verschillende verse groenten met een pindasaus.', '21,50', 'vm'],
      ['Terong belado', 'Aubergine met pittige saus.', '21,50', 'vp'],
      ['Sayur kerrie', 'Groente in een kerriesaus.', '21,50', 'vm'],
      ['Jamur rendang', 'Champignons met pittige kokossaus.', '21,50', 'vp']]}
  ]},

  { id: 'rames', t: 'Nasi rames', items: [
    ['Nasi rames special', 'Combinatie van vlees- en groentegerechten en sateh van kip, op één bord geserveerd met nasi goreng, atjar, serundeng en kentang.', '29,50', 'mps'],
    ['Nasi rames vegetarisch', 'Combinatie van groentegerechten, sateh van tahoe en ei, op één bord geserveerd met nasi goreng, atjar, serundeng en kentang.', '28,50', 'vm']
  ], kids: true },

  { id: 'bij', t: 'Bijgerechten', intro: 'Te bestellen bij de à-la-cartegerechten.', items: [
    ['Nasi kuning', 'Gele kokosrijst.', '6,50', ''], ['Kroepoek', 'Garnalenkroepoek.', '4,50', ''], ['Pisang goreng', 'Gebakken banaan.', '7,50', ''],
    ['Emping', 'Notenchips van de melindjeboom.', '4,50', ''], ['Gado gado', 'Verschillende verse groenten met een pindasaus.', '9,50', 'vm'],
    ['Sambal goreng telor', 'Ei met kruidige kokossaus.', '9,50', ''], ['Sajoer tumis', 'Roergebakken Chinese kool met gember en tomaat.', '9,50', 'vp'],
    ['Sambal goreng boontjes', 'Sperzieboontjes met sambal.', '9,50', 'vp'], ['Pindasaus', '', '3,50', ''], ['Ketjapsaus', '', '3,50', ''], ['Sambal', '', '2,50', '']
  ]},

  { id: 'dessert', t: 'Desserts & koffie', items: [
    ['Spekkoek', 'Indonesische specialiteit spekkoek met slagroom.', '7,50', ''],
    ['Spekkoek met ijs', 'Indonesische specialiteit spekkoek met kaneelijs en slagroom.', '9,50', ''],
    ['Pisang goreng royale', 'Gebakken banaan geflambeerd met Grand Marnier, met ijs en slagroom.', '11,50', ''],
    ['Es kelapa', 'Kokosijs gegarneerd met rozensiroop en stukjes jonge kokos.', '9,50', ''],
    ['Es kue dadar', 'Groene pannenkoek met een vulling van kokos, Javaanse suiker en ijs.', '10,50', ''],
    ['Dame blanche', 'Vanille-ijs met warme chocoladesaus.', '9,50', ''],
    ['Sorbetijs', 'Drie smaken: aardbei, mango en citroen.', '9,50', ''],
    ['Tjendol', 'Indonesische verfrissende kokosdrank met pandan, palmsuiker, pandansliertjes en jackfruit.', '9,50', ''],
    ['Grand dessert van de chef', 'Minimaal 2 personen. Laat onze chef u nog een keer verrassen: een prachtig grand dessert met een selectie van de heerlijkste nagerechten.', '13,50 p.p.', '']
  ], coffee: [
    ['Koffie speciaal', 'Koffie met whisky, cognac of likeur.', '9,50'], ['Koffie Flores', 'Lungo met cognac of gemberlikeur en slagroom.', '9,50'],
    ['Irish coffee', 'Lungo met Ierse whisky, bruine suiker en slagroom.', '9,50'], ['Italian coffee', 'Lungo met amaretto en slagroom.', '9,50'],
    ['Spanish coffee', 'Lungo met Tia Maria en slagroom.', '9,50']
  ]}
];
