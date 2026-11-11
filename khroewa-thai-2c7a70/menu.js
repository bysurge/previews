// Menukaart van Patthamawan Khroewa Thai, overgenomen uit hun pdf "Menu Khroewa Thai.pdf".
// Prijzen per keuze komen uit de prijstabel onderaan die pdf ("Prijzen hoofdgerechten en
// rijst, mie & bami gerechten").
window.PRIJS = {
  kip: 12, varken: 12, krab: 12, biefstuk: 14, ossenhaas: 16.5, inktvis: 16, vis: 16, eend: 16.5, gamba: 16.5
};
var ALLES = ['kip', 'varken', 'biefstuk', 'ossenhaas', 'vis', 'gamba', 'inktvis'];
var ZONDER_VIS = ['kip', 'varken', 'biefstuk', 'ossenhaas', 'gamba', 'inktvis'];

window.MENU = [
  {
    id: 'voor', tab: 'Voorgerechten & soepen',
    intro: 'Om mee te beginnen, of om te delen.',
    items: [
      { n: '1', name: 'Loempia', desc: 'Kip of vegetarisch, 3 stuks. Gevuld met groenten, vermicelli en worteltjes', price: 5 },
      { n: '2', name: 'Saté kai', desc: 'Gemarineerde kip in zelfgemaakte satésaus (pittig of mild), 4 stuks', price: 6.5 },
      { n: '3', name: 'Kiew krob', desc: 'Pasteitje gevuld met krab en kip, 7 stuks', price: 6 },
      { n: '4', name: 'Koeng tjoep peng thod krop', desc: 'Grote garnalen in meel gedompeld (droog gebakken), 5 stuks', price: 7 },
      { n: '5', name: 'Koeng hoh thoeng thong', desc: 'Grote garnalen in deeg (droog gebakken), 5 stuks', price: 7.5 },
      { n: '6', name: 'Jam khroewa thai', desc: "Salade van koolrabi, tomaatjes, worteltjes, kousenband en gestampte nootjes, met 3 grote gamba's", price: 9 },
      { n: '7', name: 'Jam mhoewa', desc: 'Pittige salade met o.a. ijsbergsla, tomaatjes, worteltjes, komkommer en maïs', price: 7.5 },
      { n: '8', name: 'Yam yam yam', desc: 'Pittige vleessalade met uien, tomaatjes, bosui en koriander', opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'inktvis', 'gamba'] },
      { n: '8.1', name: 'Yam woen sen', desc: "Pittige salade van glasnoedel met o.a. ui, tomaat en pinda's", opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'inktvis', 'gamba'] },
      { n: '9', name: 'Thod man pla', desc: 'Viskoekjes van witte vis met stukjes kousenband en limoenblaadjes, 4 stuks', price: 7 },
      { n: '10', name: 'Tom jam', desc: 'Pittige Thaise soep', prices: [['kip', 6], ['gamba', 7]] },
      { n: '11', name: 'Tom jam hid roewam', desc: 'Pittige Thaise soep met diverse soorten paddenstoelen', price: 6 },
      { n: '12', name: 'Tom gha', desc: 'Pittige kokossoep', prices: [['kip', 6.5], ['gamba', 7.5]] },
      { n: '13', name: 'Tom jam neua sod', desc: 'Pittige Thaise soep met biefstuk', price: 6.5 },
      { n: '13.1', name: 'Khanom pang na kai', desc: 'Fijngehakte kip op stukjes brood, krokant gefrituurd, 8 stuks', price: 6.5 },
      { n: '13.2', name: 'Khanom pang na thalee', desc: 'Fijngehakte garnalen, inktvis en krab op stukjes brood, krokant gefrituurd, 8 stuks', price: 7 },
      { n: '13.3', name: 'Som tam thai', desc: 'Pittige papajasalade met (fijngestampte) gedroogde garnalen en cashewnoten', price: 9.5 },
      { n: '13.4', name: 'Mix van voorgerechten', desc: "Loempia's (kip of vegetarisch), garnalen in deeg, pasteitjes en viskoekjes, elk 2 stuks", price: 10.5 },
      { n: '13.5', name: 'Tom jam thalee', desc: 'Soep van zeevruchten', price: 7 },
      { n: '13.6', name: 'Salade rol', desc: 'Per 2 stuks. Saus naar keuze: sweet chili, pindasaus of seafood pittig', prices: [['vegetarisch', 6.5], ['kip', 7], ['gamba', 7.5]] }
    ]
  },
  {
    id: 'curry', tab: "Curry's & roerbak",
    intro: 'Gerechten 14 t/m 34.5 zijn inclusief witte rijst. Kies je vlees, vis of gamba; de prijs hangt af van je keuze.',
    items: [
      { n: '14', name: 'Keng pa', desc: 'Pittig gerecht met rode curry en o.a. Thaise aubergine, bamboe en kousenband', opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'gamba', 'inktvis', 'vis'] },
      { n: '15', name: 'Keng deng', desc: 'Pittig gerecht met rode curry en o.a. kokosmelk, bamboe, Thaise aubergine en basilicum', opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'gamba', 'inktvis', 'vis'] },
      { n: '16', name: 'Keng kieuw waan', desc: 'Pittig gerecht met groene curry en o.a. kokosmelk, kousenband, bamboe en Thaise aubergine', opts: ['kip', 'biefstuk', 'ossenhaas', 'gamba', 'inktvis', 'vis'] },
      { n: '17', name: 'Keng phit pet yang', desc: 'Pittige rode curry met geroosterde eend in kokosmelk en o.a. groene appels en tomaten', opts: ['eend'] },
      { n: '18', name: 'Massaman', desc: "Mild gerecht met curry en o.a. kokosmelk, aardappel, ui en pinda's", opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'vis', 'gamba'] },
      { n: '19', name: 'Chu chi', desc: 'Pittig currygerecht in kokosmelk met prei, paprika en basilicum', opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'vis', 'gamba'] },
      { n: '20', name: 'Paneng', desc: 'Pittig currygerecht in kokosmelk met citroenblaadjes en paprika', opts: ['kip', 'varken', 'biefstuk', 'ossenhaas', 'vis', 'gamba'] },
      { n: '21', name: 'Pla saam rod', desc: 'Pittig visgerecht in hete saus met paprika, rode peper en basilicum', opts: ['vis'] },
      { n: '22', name: 'Phat phit keng deng', desc: 'Pittig roergebakken rode curry met o.a. bamboe en kousenband', opts: ALLES },
      { n: '23', name: 'Phat phit keng deng pet', desc: 'Pittige rode curry met eend en stukjes mango', opts: ['eend'] },
      { n: '24', name: 'Phat phit keng deng pla bod', desc: 'Pittig roergebakken gemalen vis in rode curry met Thaise aubergine', opts: ['vis'] },
      { n: '25', name: 'Phat priek hollapa', desc: 'Pittig roergebakken met o.a. verse peper en knoflook, champignon, kousenband, bamboe en jonge maïs', opts: ALLES },
      { n: '26', name: 'Kratiem priek thai', desc: 'Roergebakken met prei, knoflook en witte peper in oestersaus', opts: ALLES },
      { n: '27', name: 'Pieuw waan', desc: 'Roergebakken groenten in zoetzure saus met o.a. komkommer, tomaten, stukjes ananas en jonge maïs', opts: ALLES },
      { n: '28', name: 'Phat priek sod hollapa', desc: 'Roergebakken in oestersaus met o.a. uien, champignon en prei', opts: ZONDER_VIS },
      { n: '29', name: 'Phat sapparod', desc: 'Roergebakken in oestersaus met o.a. ananas, uien en prei', opts: ZONDER_VIS },
      { n: '30', name: 'Phat naman hoi', desc: 'Roergebakken in oestersaus met broccoli, champignon en uien', opts: ZONDER_VIS },
      { n: '31', name: 'Kai phat mid ma muang', desc: 'Roergebakken kip met o.a. uien en cashewnoten in Khroewa Thai-stijl (met een beetje wijn bereid)', price: 13 },
      { n: '32', name: 'Phat nam priek phauw', desc: 'Roergebakken met uien, broccoli en cashewnoten in een mild pittige pastasaus (bijzondere smaak)', opts: ALLES },
      { n: '33', name: 'Phat phak ruam mied', desc: 'Roergebakken groenten: broccoli, spitskool, peultjes, worteltjes, champignon, jonge maïs en kousenband in oestersaus', opts: ZONDER_VIS },
      { n: '34', name: 'Phat whoen sen sai gai', desc: 'Roergebakken rijstvermicelli met o.a. Chinese kool en ei', opts: ZONDER_VIS },
      { n: '34.1', name: 'Phad khing sod', desc: 'Roergebakken vlees of vis naar keuze met verse gember, bosui, uien en sojabonen', opts: ALLES },
      { n: '34.2', name: 'Kadoek moe kratiem priek thai', desc: 'Gekruid gebakken spareribs met knoflook en witte peper', price: 13 },
      { n: '34.3', name: 'Keng pa phad phit', desc: 'Pittig roergebakken met rode curry en o.a. Thaise aubergine, bamboe en kousenband', opts: ALLES },
      { n: '34.4', name: 'Keng kari', desc: 'Pittige gele curry met aardappel, ui en kokosmelk', opts: ALLES },
      { n: '34.5', name: 'Hid phat prik sod', desc: 'Mild pittig met beukenpaddenstoelen, Thaise basilicum, uien en Spaanse peper', opts: ALLES }
    ]
  },
  {
    id: 'rijst', tab: 'Gebakken rijst',
    intro: 'Roergebakken rijstgerechten.',
    items: [
      { n: '35', name: 'Ghauw phad', desc: 'Roergebakken rijst met o.a. prei', opts: ZONDER_VIS },
      { n: '36', name: 'Ghauw phad poe', desc: 'Roergebakken rijst met o.a. krab, ei, prei en ui', opts: ['krab'] },
      { n: '37', name: 'Ghauw phad khie mau', desc: 'Pittig roergebakken nasi met o.a. kousenband en jonge maïs', opts: ZONDER_VIS },
      { n: '38', name: 'Ghauw phad sapparod', desc: 'Kruidig roergebakken nasi met gele curry en o.a. ananas', opts: ZONDER_VIS },
      { n: '39', name: 'Ghauw phad keng kiew waan', desc: 'Pittig roergebakken nasi met groene curry, Thaise aubergine en o.a. kousenband', opts: ZONDER_VIS },
      { n: '39.1', name: 'Ghauw phad keng deng', desc: 'Roergebakken rijst met rode curry en o.a. Thaise aubergine, bamboe, paprika en basilicum', opts: ALLES },
      { n: '39.2', name: 'Ghauw phad nam priek phauw', desc: 'Roergebakken rijst met spitskool, broccoli, ui en cashewnoten in een mild pittige pastasaus', opts: ALLES }
    ]
  },
  {
    id: 'mie', tab: 'Mie & bami',
    intro: 'Rijstmie en bami uit de wok.',
    items: [
      { n: '40', name: 'Phad thai senlek', desc: 'Roergebakken smalle rijstmie met o.a. bosui, taugé, gestampte nootjes en ei', opts: ZONDER_VIS },
      { n: '41', name: 'Phad seieuw sen jay', desc: 'Roergebakken brede rijstmie met broccoli, spitskool en prei', opts: ZONDER_VIS },
      { n: '42', name: 'Koitieuw phad khie mau', desc: 'Pittig roergebakken brede rijstmie met o.a. broccoli, kousenband, jonge maïs en jonge peper', opts: ZONDER_VIS },
      { n: '43', name: 'Senlek tom yam phat heng', desc: 'Roergebakken smalle rijstmie in tom yam-pasta', opts: ALLES },
      { n: '44', name: 'Senlek phad keng kiew waan', desc: 'Roergebakken smalle rijstmie met groene curry, kokosmelk en groente', opts: ALLES },
      { n: '45', name: 'Bami phad heng', desc: 'Roergebakken bami met ei, peultjes, champignons en spitskool. Naar keuze pittig of niet pittig, met of zonder nootjes', opts: ALLES }
    ]
  },
  {
    id: 'extra', tab: 'Extra & drinken',
    intro: '',
    items: [
      { name: 'Extra portie witte rijst', price: 3.5 },
      { name: 'Nasi in plaats van witte rijst', desc: 'Meerprijs', price: 3.5 },
      { name: 'Smalle rijstmie of bami in plaats van witte rijst', desc: 'In diepe bak, meerprijs', price: 5 },
      { name: 'Portie cassavekroepoek', price: 3 },
      { name: 'Alle frisdranken en bronwater', desc: 'Tenzij anders aangegeven', price: 2 },
      { name: 'Thais bier', desc: 'Singha of Chang', price: 3 }
    ]
  }
];

window.CATERING = [
  { naam: 'Menu 1', pp: 17, voor: [['Koeng hoh thoeng thong', 'Grote garnalen in deeg, droog gebakken (2 stuks p.p.)'], ['Saté kai', 'Gemarineerde kip in zelfgemaakte saus (2 stokjes p.p.)']],
    hoofd: [['Phad thai senlek gamba', 'Smalle rijstmie met gamba en o.a. bosui, taugé, gestampte nootjes en ei'], ['Phat phak ruam mied, kip of varkensvlees', 'Roergebakken groenten in oestersaus, met pandanrijst'], ['Phat phit keng deng, biefstuk', 'Pittig roergebakken rode curry met biefstuk, bamboe en kousenband, met pandanrijst']] },
  { naam: 'Menu 2', pp: 16, voor: [['Loempia (kip of vegetarisch)', 'Gevuld met groenten, vermicelli en worteltjes (2 stuks p.p.)'], ['Saté kai', 'Gemarineerde kip in zelfgemaakte saus (2 stokjes p.p.)']],
    hoofd: [['Phad seieuw sen jay, kip of varkensvlees', 'Brede rijstmie met o.a. broccoli, spitskool en prei'], ['Phat phak ruam mied, kip of varkensvlees', 'Roergebakken groenten in oestersaus, met pandanrijst'], ['Phat priek hollapa met biefstuk', 'Pittig roergebakken met verse peper, knoflook, champignons, kousenband, bamboe en jonge maïs, met pandanrijst']] },
  { naam: 'Menu 3', pp: 16.5, voor: [['Saté kai', 'Gemarineerde kip in zelfgemaakte saus (2 stokjes p.p.)'], ['Kiew krob', 'Pasteitje gevuld met krab en kip (3 stuks p.p.)']],
    hoofd: [['Phat nam priek phauw, kip of varkensvlees', 'Met uien, broccoli en cashewnoten in mild pittige pastasaus, met pandanrijst'], ['Keng kiew waan met gamba', "Gamba's in groene curry met kokosmelk, kousenband, bamboe en Thaise aubergine, met pandanrijst"], ['Phat sapparod, kip of varkensvlees', 'In oestersaus met o.a. ananas, uien en prei, met pandanrijst']] },
  { naam: 'Menu 4', pp: 16, voor: [['Saté kai', 'Gemarineerde kip in zelfgemaakte saus (2 stokjes p.p.)'], ['Koeng tjoep peng thod krop', 'Grote garnalen in meel gedompeld, droog gebakken (2 stuks p.p.)']],
    hoofd: [['Phat phak ruam mied, kip of varkensvlees', 'Roergebakken groenten in oestersaus, met pandanrijst'], ['Keng kiew waan met biefstuk', 'Biefstuk in groene curry met kokosmelk, kousenband, bamboe en Thaise aubergine, met pandanrijst'], ['Massaman, kip of varkensvlees', "Mild pittige curry met kokosmelk, aardappel, uien en pinda's, met pandanrijst"]] },
  { naam: 'Menu 5', veg: true, pp: 15.5, voor: [['Loempia', 'Gevuld met groenten, vermicelli en worteltjes (2 stuks p.p.)'], ['Jam mhoewa', 'Pittige salade met ijsbergsla, tomaatjes, worteltjes, komkommer en maïs']],
    hoofd: [['Phat phak ruam mied', 'Roergebakken groenten met tofu in oestersaus, met pandanrijst'], ['Phat priek hollapa', 'Pittig roergebakken met tofu, verse peper, knoflook, champignons, kousenband, bamboe en jonge maïs, met pandanrijst'], ['Phad thai senlek', 'Smalle rijstmie met o.a. tofu, bosui, taugé, gestampte nootjes en ei']] }
];
