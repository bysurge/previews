/* Menukaart Kopi Kopi, overgenomen van kopikopi.nl/menu (prijzen eten in het eethuis).
   v = vegetarisch, g = glutenvrij, p = 1 (mild pittig) of 2 (pittig) */
window.KOPI_MENU = [
  { id: 'alacarte', naam: 'A la carte', items: [
    ['Mie Ayam Istimewa', '18,50', 'Dunne noedels met ayam garing of ayam kalio pedes of ayam paniki of ayam kecap met champignons en groenten. Geserveerd met gehaktballen (rund) en lente-uitjes', {}],
    ['Ayam Bakar Kalasan', '16,50', 'Gemarineerde en gegrilde kippenpoot. Geserveerd met witte rijst', {}],
    ['Tahu Telor', '16,50', 'Indonesische omelet gevuld met tofu en groente. Geserveerd met zelfgemaakte pindasaus dressing', { v: 1 }],
    ['Siomay Bandung', '16,00', 'Indonesische gestoomde dumpling, bestaand uit kingfish, kip en garnalen in tapiocameel, eieren en tofu. Geserveerd met zelfgemaakte pindasaus', {}],
    ['Ketoprak', '16,00', 'Vegetarisch gerecht bestaand uit tofu, groenten, blokjes rijst en rijstvermicelli. Geserveerd in zelfgemaakte pindasaus dressing', { v: 1 }],
    ['Tahu Petis', '16,00', 'Lontong (blokjes rijst) met tofu, tauge en een huisgemaakte pindasaus, gemengd met een petis udang-dressing (garnalenpasta)', { v: 1 }],
    ['Gado-Gado', '14,00', 'Een mix van gestoomde tauge, spitskool en boontjes, een hardgekookt ei en gefrituurde tofu en tempe. Geserveerd met zelfgemaakte pindasaus dressing', { v: 1 }]
  ]},
  { id: 'sate', naam: "Saté's", noot: 'De prijzen zijn per portie (3 stokjes), zonder rijst.', items: [
    ['Sate Ayam', '12,50', 'Kipspiesjes met zelfgemaakte pindasaus', {}],
    ['Sate Vega', '12,50', 'Vegetarische saté (tofu en tempe) met zelfgemaakte pindasaus', { v: 1 }],
    ['Sate Kambing', '18,50', 'Gemarineerde, tedere geitenspiesjes met zelfgemaakte kecapsaus', {}]
  ]},
  { id: 'rames', naam: 'Rames schotel', noot: 'In plaats van nasi putih (witte rijst): nasi goreng (gebakken rijst met ei), bami goreng (gebakken noedels met ei), nasi kuning (gele rijst met kokos) of lontong (gekookte rijst in blokjes), + € 2,00.', items: [
    ['Rames Bandung', 'v.a. 18,00', 'Nasi putih, ayam gula tradisional, daging semur Jakarta, sambal goreng buncis, sambal goreng telor, kerupuk', {}],
    ['Rames Vega', 'v.a. 18,00', 'Nasi putih, kacang panjang, sayur lodeh, tempe tahu taoco, acar ketimun, emping', { v: 1 }],
    ['Rames Cirebon', 'v.a. 21,00', 'Nasi putih, daging semur Jakarta, ayam kalio pedes, tumis tahu tauge, kacang panjang, sambal goreng telor, acar ketimun, kerupuk', {}],
    ['Rames Kopi Kopi Speciaal', 'v.a. 23,00', 'Nasi putih, ayam semur Betawi, daging rendang, sambal goreng buncis, sate ayam (2 stokjes), sambal goreng telor, acar ketimun, kerupuk', {}],
    ['Rames Kopi Kopi Speciaal Vega', 'v.a. 23,00', 'Nasi putih, sayur lodeh, sambal goreng buncis, tempe cabe ijo, sambal goreng tahu pete, sate vega (2 stokjes), acar ketimun, emping', { v: 1 }]
  ]},
  { id: 'soep', naam: 'Soep', noot: '* In plaats van nasi putih (witte rijst): nasi goreng, bami goreng, nasi kuning of lontong, + € 2,00.', items: [
    ['Soto Ayam met witte rijst*', '15,00', 'Aromatische kippensoep vol Indonesische kruiden, kurkuma en rijstvermicelli', { g: 1 }],
    ['Soto Betawi met witte rijst*', '16,00', 'Romige rundvleessoep met kokosmelk, Indonesische kruiden en geurige specerijen', { g: 1 }],
    ['Soto Mie', '16,00', 'Noedelsoep met rundvlees, spitskool, tomaat, lente-uitjes en risol (lumpia met mihoen)', {}],
    ['Tongseng Sapi met witte rijst*', '16,00', 'Zoete en pittige rundvleessoep van verse kruiden en kokosmelk, met kool en tomaat als groenten', { p: 1 }],
    ['Tongseng Kambing met witte rijst*', '17,00', 'Zoete en pittige geitenvleessoep van verse kruiden en kokosmelk, met kool en tomaat als groenten', { p: 1 }]
  ]},
  { id: 'kip', naam: 'Kip', noot: 'Kleine porties, zonder rijst.', items: [
    ['Ayam Kalio Pedes', '8,95', 'Malse kipreepjes gestoofd in een rijke, kruidige kokosmelk', {}],
    ['Ayam Cashew', '8,95', 'Zoete kip met cashewnoten, paprika en uien', {}],
    ['Ayam Kecap Manis', '8,95', 'Zoete kipfilet met kecap manis (zoete sojasaus)', {}],
    ['Ayam Garing', '8,95', 'Pittige en zoete kippendij in Jakarta-saus, omhuld met tapiocameel en rode en groene pepers en ui', { p: 1 }],
    ['Ayam Paniki', '8,95', 'Frisse en pittige kippendij met de smaken van citroenbasilicum, citroengras en citroenblad', { g: 1, p: 2 }]
  ]},
  { id: 'rund', naam: 'Rundvlees', noot: 'Kleine porties, zonder rijst.', items: [
    ['Daging Semur Jakarta', '9,95', 'Gestoofd rundvlees in een rijke, kruidige kecap manis (zoete sojasaus)', {}],
    ['Daging Belado Pete', '9,95', 'Zoet en pittig rundvlees met petebonen', { p: 1 }],
    ['Daging Rendang', '10,95', 'Pittig rundvlees gestoofd in smaakvolle kokosmelk', { g: 1, p: 1 }]
  ]},
  { id: 'vis', naam: 'Vis', noot: 'Kleine porties, zonder rijst.', items: [
    ['Sambal Goreng Udang Pete', '15,95', 'Hete garnalen met petebonen', { g: 1, p: 2 }],
    ['Ikan Bumbu Bali', 'prijs per gewicht', 'Pittige makreel', { p: 1 }]
  ]},
  { id: 'groenten', naam: 'Groenten', noot: 'Kleine porties, zonder rijst.', items: [
    ['Sambal Goreng Buncis', '6,95', 'Mild pittige boontjes met uien', { v: 1, g: 1, p: 1 }],
    ['Kacang Panjang', '6,95', 'Roergebakken kouseband met tempe', { v: 1, g: 1 }],
    ['Tumis Tahu Tauge', '6,95', 'Roergebakken tauge met tofu', { v: 1, g: 1 }],
    ['Orak Arik', '6,95', 'Een mix van spitskool, boontjes, fijngesneden winterpeen en maïs met ei', { v: 1, g: 1 }],
    ['Sayur Lodeh', '6,95', 'Een mix van spitskool, boontjes, winterpeen en maïs in kokossaus', { v: 1, g: 1 }],
    ['Sambal Goreng Terong', '9,95', 'Pittige aubergine met zelfgemaakte sambalsaus', { v: 1, p: 1 }],
    ['Tempe Tahu Tauco', '9,95', 'Mild pittige tempe en tahu met taucosaus', { v: 1, p: 1 }],
    ['Tempe Cabe Ijo', '9,95', 'Zoete, pittige gefrituurde tempe met groene peper', { v: 1, p: 1 }],
    ['Tempe Kering', '9,95', 'Zoete, krokante tempe', { v: 1 }],
    ['Sambal Goreng Tahu Pete', '9,95', 'Mild pittige tofu met petebonen in kokossaus', { v: 1, g: 1, p: 1 }],
    ['Acar Ketimun', '4,75', 'Zoetzure komkommer met paprika en uien', { v: 1, g: 1 }],
    ['Sambal Goreng Telor', '4,75', 'Gefrituurd ei in pittige saus', { g: 1, p: 1 }]
  ]},
  { id: 'rijsttafel', naam: 'Rijsttafel', noot: 'Rijsttafels zijn verkrijgbaar vanaf 2 personen en ook vegetarisch. In plaats van nasi putih (witte rijst), + € 2,00: nasi goreng mild of pittig (gebakken rijst met roergebakken ei), bami goreng mild of pittig (gebakken noedels met roergebakken ei), nasi kuning (gele rijst met kokos) of lontong (gekookte rijst in blokjes).', items: [
    ['Prasmanan Jakarta', 'v.a. 26,50 p.p.', 'Nasi putih, daging semur Jakarta, ayam gula tradisional, sayur lodeh, tumis tahu tauge, sate ayam, sambal goreng telor, acar ketimun, serundeng, kerupuk, Indonesische zoetigheid', {}],
    ['Prasmanan Vega', 'v.a. 26,50 p.p.', 'Nasi putih, kacang panjang, sayur lodeh, tempe tahu tauco, tumis tahu tauge, sate vega, sambal goreng telor, acar ketimun, serundeng, emping, Indonesische zoetigheid', { v: 1 }],
    ['Prasmanan Bali', 'v.a. 28,50 p.p.', 'Nasi putih, daging belado pete, ayam kalio pedes, sambal goreng buncis, orak arik, tempe cabe ijo, sate ayam, sambal goreng telor, acar ketimun, serundeng, kerupuk, Indonesische zoetigheid', {}],
    ['Prasmanan Kopi Kopi Speciaal', 'v.a. 30,50 p.p.', 'Nasi putih, daging rendang, ayam cashew, sambal goreng udang pete of daging belado pete of ayam paniki, gado-gado, sambal goreng buncis, sate ayam, sambal goreng telor, acar ketimun, serundeng, kerupuk, Indonesische zoetigheid', {}]
  ]},
  { id: 'bij', naam: 'Bijgerechten', items: [
    ['Nasi Putih', '5,50', 'Witte rijst', {}],
    ['Bami Goreng mild of pittig', '6,50', '', {}],
    ['Nasi Goreng mild of pittig', '6,50', '', {}],
    ['Nasi Kuning', '6,50', 'Gele rijst met kokos', {}],
    ['Bami Goreng Ikan Roa', '8,50', 'Pittige gebakken noedels met gerookte vissmaak uit Noord-Manado', { p: 1 }],
    ['Nasi Goreng Ikan Roa', '8,50', 'Pittige gebakken rijst met gerookte vissmaak', { p: 1 }],
    ['Lontong', '6,50', 'Gekookte rijst in blokjes', {}],
    ['Kerupuk', '4,95', 'Kroepoek van garnalen', {}],
    ['Emping', '5,95', 'Kroepoek van melinjonoten', {}],
    ['Serundeng', '4,50', 'Gefrituurde kokosvlokken', {}],
    ['Pindasaus', '5,50', '', {}]
  ]},
  { id: 'snacks', naam: 'Snacks', noot: 'Onze Indotreats, huisgemaakt door mama Debby. Stel je eigen box samen: 12 stuks met 10% korting.', items: [
    ['Lumpia (kip / vega)', '5,95', 'Loempia gevuld met bamboescheuten, tofu en (kip)', {}],
    ['Pisang Goreng', '5,95', 'Gebakken banaan', {}],
    ['Rissoles (kip / vega)', '5,95', 'Rechthoekige kroket gevuld met kipragout of groenteragout en wortel', {}],
    ['Pastei', '5,95', 'Pastei gevuld met rijstvermicelli, kip en groente', {}],
    ['Lemper', '5,95', 'Kleefrijst gevuld met gekruide, versnipperde kip', {}],
    ['Dadar Gulung', '5,95', 'Indonesische zoete pannenkoek gevuld met geraspte kokos in gula jawa', {}],
    ['Bolu Pandan (sponscake)', '6,95', 'Indonesische luchtige cake met pandansmaak', {}],
    ['Lapis Surabaya', '6,95', 'Indonesische drielaagse cake met aardbeienjam', {}],
    ['Lapis Legit (Indonesische spekkoek)', '6,95', 'Rijke en zoete Indonesische cake met een kruidige smaak en meerdere lagen', {}],
    ['Arem-Arem', '6,95', 'Pittige, gestoomde rijstrol in pandanblad, gevuld met kip en groenten', { p: 1 }],
    ['Perkedel Lombok', '6,95', 'Pittige Indonesische aardappelkoek met rundvlees', { p: 1 }]
  ]},
  { id: 'drinks', naam: 'Virgin cocktails', noot: 'Alle bereid zonder alcohol.', items: [
    ['Es Lemon Grass', '5,95', 'Huisgemaakte ijskoude thee van verse citroen, gember en citroengras', {}],
    ['Hot Lemon Grass', '5,95', 'Huisgemaakte warme thee van verse citroen, gember en citroengras', {}],
    ['Hot / Es Teh Pandan', '5,95', '', {}],
    ['Es Shanghai', '7,50', 'Fruitcocktail met jackfruit en kokosmelk', {}],
    ['Es Cendol', '7,50', 'Typisch Indonesische drank van kokosmelk en palmsuiker met groene pandanbubbels en jackfruit', {}],
    ['Es Kelapa Muda', '7,50', 'Indonesische zoete, rood gekleurde drank met jackfruit en geraspte kokosnoot', {}],
    ['Es Bali Exotic (alleen zomertijd)', '7,50', 'Frisse kokosdrank met verse stukjes watermeloen en een vleugje citroen', {}],
    ['Es Teler Durian', '8,95', 'Een mix van avocado, jackfruit, geraspte kokos, gelei (agar-agar) en durian met kokosmelk', {}]
  ]}
];
