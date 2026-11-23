// Menukaart Peking: nummers en prijzen van pekingapeldoorn.nl/bestellen/ + afhaalkaart-PDF 2026.
var SERVE = 'Geserveerd met een kleine witte rijst, nasi of bami naar keuze. Liever grote nasi of grote bami? + € 2,00.';
var MENU = [
  { id: 'specialiteiten', name: 'Specialiteiten v/h huis', note: 'Bij de specialiteiten krijg je gratis salade. Ti Pan met zwarte bonensaus of Gon Bao saus (pittig), naar keuze.', items: [
    ['150', 'Ti Pan Chinese Garnalen', '', 28.50],
    ['151', 'Ti Pan Ossenhaas', '', 28.50],
    ['152', 'Gekruide Chinese Garnalen', '', 28.50],
    ['153', 'Gekruide Lamskoteletten', '', 32.50],
    ['154', 'Zalmfilet met Teriyakisaus', '', 32.50]
  ]},
  { id: 'soepen', name: 'Soepen', items: [
    ['1', 'Kippensoep', '', 4.20],
    ['2', 'Tomatensoep', '', 4.20],
    ['3', 'Champignonsoep', '', 5.20],
    ['4', 'Wan Tan Soep', '', 7.20],
    ['5', 'Haaienvinnensoep', '', 5.20],
    ['6', 'Sun La Soep', 'Gebonden zoetzure soep, pittig', 7.20]
  ]},
  { id: 'bijgerechten', name: 'Bijgerechten', items: [
    ['10', 'Kroepoek', '2 stuks', 3.80],
    ['11', 'Cassave Kroepoek', 'Gekruide, scherpe kroepoek van de cassaveplant. Geschikt voor vegetariërs', 3.80],
    ['12', 'Atjar', 'Huisgemaakt', 4.00],
    ['13', 'Pindasaus', 'Beker 250 ml', 3.50],
    ['14', 'Saté Ayam', 'Kipsaté, 4 stuks', 8.00],
    ['15', 'Mini Loempia', '10 stuks, vegetarisch', 6.00],
    ['16', 'Vietnamese Kip Loempia', '3 stuks', 6.50],
    ['17', 'Vietnamese Vegetarische Loempia', '3 stuks', 6.50],
    ['18', 'Chinese Loempiaatjes', '4 stuks, medium grootte', 7.00],
    ['19', 'Pisang Goreng', 'Gebakken banaan, 6 stuks', 6.50],
    ['20', 'Pangsit Goreng', '6 stuks', 6.50],
    ['21', 'Chicken Wings', '10 stuks', 11.00],
    ['22', 'Gebakken Kippenpoot', '2 stuks', 11.00],
    ['23', 'Gepaneerde Garnaal', '10 stuks', 12.00],
    ['24', 'Kleine Witte Rijst', 'Gestoomde witte rijst', 4.00],
    ['25', 'Grote Witte Rijst', '', 5.50]
  ]},
  { id: 'nasi', name: 'Nasi', items: [
    ['30', 'Nasi Groot', 'Vegetarisch', 5.50],
    ['30A', 'Nasi Klein', 'Vegetarisch', 4.00],
    ['31', 'Nasi Saté', 'Met 3 stokjes saté', 11.50],
    ['32', 'Yan Chow Fan', 'Authentiek Chinese nasi met erwten, mais, garnalen en vlees', 18.50],
    ['33', 'Nasi Singapore', 'Met vlees, garnalen en kerrie', 18.50]
  ]},
  { id: 'bami', name: 'Bami', items: [
    ['40', 'Bami Groot', 'Vegetarisch', 5.50],
    ['40A', 'Bami Klein', 'Vegetarisch', 4.00],
    ['41', 'Bami Saté', 'Met 3 stokjes saté ayam', 11.50]
  ]},
  { id: 'udon', name: 'Udon noedels', items: [
    ['50', 'Vegetarische Udon Noedels', '', 15.50],
    ['51', 'Udon Noedels met Ossenhaas', '', 18.50],
    ['52', 'Udon Noedels met Chinese Garnalen', '', 18.50],
    ['53', 'Udon Noedels met Kipfilet', '', 15.50]
  ]},
  { id: 'ei', name: 'Eiergerechten', serve: true, items: [
    ['70', 'Foe Yong Hai met Kipfilet', '', 15.50],
    ['71', 'Foe Yong Hai met Ossenhaas', '', 18.50],
    ['72', 'Foe Yong Hai met Chinese Garnalen', '', 18.50]
  ]},
  { id: 'groente', name: 'Groente', serve: true, items: [
    ['80', 'Tjap Tjoy met Kipfilet', '', 15.50],
    ['81', 'Tjap Tjoy met Ossenhaas', '', 18.50],
    ['82', 'Tjap Tjoy met Chinese Garnalen', '', 18.50]
  ]},
  { id: 'eend', name: 'Peking eend', serve: true, items: [
    ['90', 'Geroosterde Peking Eend', '', 21.50],
    ['91', 'Peking Eend met Gon Bao Saus', 'Met pittig sausje', 21.50],
    ['92', 'Peking Eend met Champignons', '', 21.50],
    ['93', 'Peking Eend met Ananas', '', 21.50]
  ]},
  { id: 'salade', name: 'Salades', items: [
    ['100', 'Vegetarische Salade', '', 12.50],
    ['101', 'Salade met Kipfilet', '', 14.20],
    ['102', 'Salade met Chinese Garnalen', '', 16.50]
  ]},
  { id: 'varken', name: 'Varkensvlees', serve: true, items: [
    ['110', 'Babi Pangang', '', 17.50],
    ['111', 'Babi Pangang met Pindasaus', '', 17.50],
    ['112', 'Babi Pangang met Ketjapsaus', '', 17.50],
    ['113', 'Cha Sieuw', 'Chinese babi pangang', 18.50],
    ['114', 'Geroosterd Varkensspek', 'Speenvarken, ook bekend als For Nam of buikspek', 18.50],
    ['115', 'Koe Loe Yuk', 'Gepaneerd varkensvlees in zoetzure saus', 17.50],
    ['116', 'Varkenshaas met Champignons', '', 17.50]
  ]},
  { id: 'rund', name: 'Rundvlees', serve: true, items: [
    ['120', 'Ossenhaas met Kerriesaus', '', 20.50],
    ['121', 'Ossenhaas met Champignons', '', 20.50],
    ['122', 'Ossenhaas met Zwarte Bonensaus', 'Ook bekend als Taossi saus', 20.50],
    ['123', 'Gon Bao Ossenhaas', 'Ossenhaas in pikante chilisaus', 20.50]
  ]},
  { id: 'kip', name: 'Kip', serve: true, items: [
    ['130', 'Kipfilet met Kerriesaus', 'Ook bekend als Kip Kerrie', 17.50],
    ['131', 'Kipfilet met Champignons', '', 17.50],
    ['132', 'Kipfilet met Zwarte Bonensaus', 'Ook bekend als Taossi Kai', 17.50],
    ['133', 'Kipfilet met Ananas', '', 17.50],
    ['134', 'Ayam Pangang', 'Gebraden kip met pikante saus', 17.50],
    ['135', 'Gon Bao Kai', 'Kipfilet in pikante chilisaus', 17.50],
    ['136', 'Ayam Ketjap', 'Gebraden kip met ketjapsaus', 17.50],
    ['137', 'Ayam met Pindasaus', '', 17.50]
  ]},
  { id: 'garnalen', name: 'Garnalen', serve: true, items: [
    ['140', 'Chinese Garnalen met Zwarte Bonensaus', '', 20.50],
    ['141', 'Chinese Garnalen met Champignons', '', 20.50],
    ['142', 'Chinese Garnalen met Kerriesaus', '', 20.50],
    ['143', 'Chinese Garnalen met Ananas', '', 20.50],
    ['144', 'Gon Bao Ha', 'Chinese garnalen in pikante chilisaus', 20.50]
  ]},
  { id: 'vega', name: 'Vegetarisch', items: [
    ['160', 'Lou Han Zai', 'Authentiek Chinese tjap tjoy', 17.50],
    ['161', 'Vegetarische Tjap Tjoy', '', 15.50],
    ['162', 'Vegetarische Foe Yong Hai', '', 15.50],
    ['163', 'Tofu met Gon Bao Saus', '', 17.50],
    ['164', 'Tofu met Zwarte Bonensaus', '', 17.50]
  ]},
  { id: 'dranken', name: 'Dranken', items: [
    ['B1A', 'Coca-Cola', '330 ml', 2.70],
    ['B1B', 'Coca-Cola Zero', '330 ml', 2.70],
    ['B2', 'Fanta Orange', '330 ml', 2.70],
    ['B3', 'Sprite Zero', '330 ml', 2.70],
    ['B4', 'Fuze Tea Green Tea', '330 ml', 2.70],
    ['B5', 'Fuze Tea Black Tea Peach Hibiscus', '', 2.70],
    ['B6', 'Fuze Tea Green Tea Mango Chamomile', '', 2.70],
    ['B7', 'Monster Energy Mango Loco', '50 cl', 3.70],
    ['B8', 'Red Bull Energy', '250 ml', 3.00],
    ['B9', 'Spa Reine', '500 ml', 2.70],
    ['', 'Lipton Ice Tea Sparkling', '250 ml', 2.70]
  ]}
];
