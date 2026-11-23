// Menukaart Munzur, overgenomen uit hun menu-PDF NL 2026 (prijzen gecontroleerd tegen de EN-PDF).
// Gerecht 13 staat zonder naam en prijs in beide PDF's en is weggelaten.
window.MENU = [
  { id: 'voor', tab: 'Voorgerechten', groups: [
    { t: 'Çorba', s: 'Soep', items: [
      ['1', 'Mercimek çorbası', 'Linzensoep', '7,50'],
      ['', 'Sebze çorbası', 'Groentesoep', '8,00'],
      ['', 'İşkembe', 'Penzensoep', '8,50']
    ]},
    { t: 'Soğuk mezeler', s: 'Koude mezzes', note: 'Alle koude mezzes worden geserveerd met brood.', items: [
      ['2', 'Cacık', 'Fijngesneden komkommer en knoflook in Turkse yoghurt', '7,50'],
      ['3', 'Haydari', 'Fijngesneden wortels in Turkse yoghurt met peterselie en knoflook', '7,50'],
      ['4', 'Soslu patlıcan', 'Aubergine met tomaten, Turkse pepers, knoflook en kruiden', '8,50'],
      ['5', 'Humus', 'Tapenade van kikkererwten met sesamolie en knoflook', '8,00'],
      ['6', 'Patlıcan ezme', 'Tapenade van gefrituurde aubergine met Turkse yoghurt en knoflook', '8,50'],
      ['7', 'Antep ezme', 'Tapenade van tomaten, ui, Turkse pepers, peterselie en kruiden', '8,50'],
      ['8', 'Peynir ezme', 'Tapenade van fetakaas met tomatenpuree', '8,75'],
      ['9', 'Rus salatası', 'Huisgemaakte huzarensalade', '8,50'],
      ['10', 'Çerkez tavuğu', 'Gestoofde kipfilet met lente-ui, dille, gemalen walnoten en frietsaus', '9,95'],
      ['11', 'Kavun peynir tabağı', 'Fetakaas met meloen', '11,50'],
      ['12', 'Karides kokteyl', 'Gepelde garnalen, sla met cocktailsaus', '14,50'],
      ['14', 'Piyaz', 'Salade van witte bonen met rode ui, peterselie en olijfolie', '9,00'],
      ['15', 'Peynir söğüş', 'Fetakaas, tomaten en komkommer', '8,75'],
      ['16', 'Yaprak sarma', 'Huisgemaakte wijnbladeren gevuld met rijst, ui, pijnboompitten, knoflook, yoghurt, krenten en kruiden', '8,50'],
      ['17', 'Ordövr tabağı bir kişilik', 'Mix van koude voorgerechten, voor één persoon', '18,95'],
      ['18', 'Ordövr tabağı iki kişilik', 'Mix van koude voorgerechten, voor twee personen', '26,95'],
      ['19', 'Ordövr tabağı üç kişilik', 'Mix van koude voorgerechten, voor drie personen', '32,95']
    ]},
    { t: 'Sıcak mezeler', s: 'Warme mezzes', note: 'Alle warme mezzes worden geserveerd met brood, behalve sigara böreği, içli köfte, paçanga böreği en kalamar.', items: [
      ['20', 'Sigara böreği (4 stuks)', 'Gefrituurd filodeeg gevuld met fetakaas en peterselie', '9,00'],
      ['21', 'Paçanga böreği (2 stuks)', 'Filodeeg gevuld met pastrami en kaas', '8,00'],
      ['22', 'İçli köfte (2 stuks)', 'Bulgur gevuld met gehakt, walnoten en kruiden', '9,00'],
      ['23', 'Patlıcan kızartma', 'Gefrituurde aubergine met Turkse yoghurt en knoflook', '9,50'],
      ['24', 'Kabak kızartma', 'Gefrituurde courgette met Turkse yoghurt en knoflook', '9,50'],
      ['25', 'Kalamar tava', 'Gefrituurde inktvisringen met cocktailsaus', '11,50'],
      ['26', 'Midye sote', 'Gebakken mosselen met ui, Turkse pepers en kruiden in combinatie met tomaten-roomsaus', '15,50'],
      ['27', 'Karides sote', 'Gebakken garnalen met Turkse pepers, knoflook en tomatensaus', '16,95']
    ]},
    { t: 'Salatalar', s: 'Salades', items: [
      ['28', 'Kaşık salatası', 'Fijngesneden tomaten, komkommer, rode ui, hete Turkse pepers, peterselie en dressing', '11,50'],
      ['29', 'Gavurdağı salatası', 'Tomaten, rode ui, Turkse pepers, rucola, gemalen walnoten en dressing', '11,50'],
      ['30', 'Çoban salatası', 'Grove salade met tomaten, komkommer, rode ui, peterselie, Turkse pepers en fetakaas', '11,50']
    ]}
  ]},
  { id: 'oven', tab: 'Uit de oven', groups: [
    { t: 'Fırın güveç', s: 'Ovenspecialiteiten', note: 'Alle ovenspecialiteiten worden geserveerd met rijst en salade.', items: [
      ['31', 'Karides güveç', 'Garnalen met tomaten, Turkse pepers, knoflook, kruiden en kaas', '26,95'],
      ['32', 'Sebzeli güveç', 'Vegetarische groenteschotel', '20,95', 'vega'],
      ['33', 'Etli patlıcan güveç', 'Lamsvlees met aubergine, tomaten, ui, Turkse pepers, knoflook, kruiden en kaas', '27,50'],
      ['34', 'Et sote', 'Lamsvlees met champignons, Turkse pepers, ui, kruiden en tomatensaus', '27,50'],
      ['35', 'Tavuk güveç', 'Dijenfilet met verschillende groenten en kruiden', '23,95'],
      ['36', 'Tavuk sote', 'Dijenfilet met champignons, Turkse pepers, kruiden en tomatensaus', '23,95'],
      ['37', 'Etli karnıyarık', 'Gefrituurde aubergine gevuld met lamsvlees, knoflook, ui, Turkse pepers, tomaten en kruiden', '26,95'],
      ['38', 'Sebzeli karnıyarık', 'Gefrituurde aubergine gevuld met champignons, Turkse pepers, ui, courgette, tomaten en kruiden', '20,95', 'vega']
    ]}
  ]},
  { id: 'grill', tab: 'Van de grill', groups: [
    { t: 'Izgaralar', s: 'Grillspecialiteiten', note: 'Alle grillspecialiteiten worden geserveerd met rijst en salade.', items: [
      ['39', 'Adana kebab', 'Pittig gekruid lamsgehakt aan spies', '21,95'],
      ['40', 'Munzur iskender, lams of kip', 'Gekruid lamsvlees met Turkse yoghurt, knoflook en tomatensaus, geserveerd op lavas brood en boter', '27,95'],
      ['41', 'Kuzu şiş', 'Gekruid lamsvlees aan spies', '27,95'],
      ['42', 'Tavuk şiş', 'Gekruide dijenfilet aan spies', '23,95'],
      ['43', 'Çöp şiş', 'Gekruid lamsvlees aan satéstokjes', '27,95'],
      ['44', 'Munzur köfte', 'Gekruide lams/rund gehaktballetjes', '21,95'],
      ['45', 'Munzur kebab', 'Gekruid gehakt opgerold (beyti kebab) in yufka (wrap) met Turkse yoghurt, kruiden en tomatensaus', '23,95'],
      ['46', 'Piliç ızgara', 'Kipkoteletjes van de grill', '23,95'],
      ['47', 'Pirzola', 'Magere lamskoteletjes van de grill', '29,95'],
      ['48', 'Kaburga ızgara', 'Lams spare-ribs van de grill', '28,95'],
      ['49', 'Kaşarlı köfte', 'Gekruide lams/rund gehaktballetjes gemengd met kaas', '22,95'],
      ['50', 'Tavuk kanat', 'Kipvleugels van de grill', '22,95'],
      ['51', 'Mantar soslu bonfile ızgara', 'Gegrilde ossenhaas met champignonroomsaus', '34,95'],
      ['52', 'Domates soslu bonfile', 'Gegrilde ossenhaas met tomatensaus, Turkse peper en knoflook', '34,95'],
      ['53', 'Mantar soslu tavuk', 'Gegrilde kipkotelet met champignonroomsaus', '25,95'],
      ['54', 'Domates soslu tavuk', 'Gegrilde kipkotelet met tomatensaus, Turkse pepers en knoflook', '25,95'],
      ['55', 'Yoğurtlu adana kebab', 'Pittig gekruid gehakt met Turkse yoghurt en knoflook op lavas brood', '23,95'],
      ['56', 'Karışık şiş', 'Gegrilde spies van dijenfilet en lamsvlees', '24,95'],
      ['57', 'Yarım ay köfte', 'Gegrild gehakt gevuld met kaas en groente, geserveerd met tomatensaus', '24,95'],
      ['58', 'Saray kebabı', 'Gegrilde ossenhaas gevuld met kaas en diverse groenten, geserveerd met tomatensaus', '34,95'],
      ['59', 'Munzur speciaal (1 persoon)', 'Specialiteit van Munzur: dijenfilet, lamsvlees, lamskotelet, lamsrib en köfte (gehaktbal)', '29,50', 'huis'],
      ['60', 'Munzur speciaal (2 personen)', 'Specialiteit van Munzur: dijenfilet, lamsvlees, lamskotelet, lamsrib en köfte (gehaktbal)', '59,00', 'huis']
    ]},
    { t: 'Onze kleine gasten', s: 'Kindermenu', items: [
      ['61', 'Kindermenu', 'Kipnuggets of köfte (gehaktballetjes) met friet', '14,00'],
      ['', 'Kindermenu', 'Lamsvlees met friet', '15,50']
    ]}
  ]},
  { id: 'pan', tab: 'Uit de pan', groups: [
    { t: 'Tava çeşitleri', s: 'Pangerechten', note: 'Alle pangerechten worden geserveerd met rijst en salade.', items: [
      ['62', 'Saç kavurma', 'Fijngesneden lamsvlees roergebakken met tomaten, Turkse pepers en champignons, geserveerd in een wok', '28,95'],
      ['63', 'Çoban kavurma', 'Grofgesneden lamsvlees roergebakken met tomaten, Turkse pepers en champignons, geserveerd in een wok', '28,95'],
      ['64', 'Tavuk yahni', 'Dijenfilet met champignons, tomaten, ui, Turkse pepers en kruiden, geserveerd in een wok', '24,95'],
      ['65', 'Hünkar beğendi', 'Gebakken lamsvlees met tomaten, Turkse pepers en kruiden, geserveerd op een bedje van gefrituurde en vervolgens in roomsaus gebakken aubergine', '28,95'],
      ['66', 'Ali nazik', 'Lamsvlees met Turkse pepers, aubergine, yoghurt en tomaat', '28,95'],
      ['67', 'Parmak kebabı', 'Ossenhaas met tomaten, ui, aubergine, knoflook, Turkse pepers en kruiden', '34,95']
    ]}
  ]},
  { id: 'vis', tab: 'Vis', groups: [
    { t: 'Balıklar', s: 'Visspecialiteiten', note: 'Alle visspecialiteiten worden geserveerd met salade en gebakken groente.', items: [
      ['68', 'Çupra ızgara', 'Dorade royal van de grill', '28,50'],
      ['69', 'Levrek ızgara', 'Zeebaars van de grill', '28,50'],
      ['70', 'Gegrilde zalm', 'Gegrilde zalm geserveerd met groente', '28,95'],
      ['71', 'Karides tava', "Gebakken scampi's met tomatensaus, knoflook, kruiden, boter en room", '32,95'],
      ['72', 'Karides ızgara', "Gegrilde scampi's", '32,95'],
      ['73', 'Fırında levrek', 'Zeebaars uit de oven, geserveerd met tomaten, ui, aardappels, Turkse peper en kruiden', '28,50']
    ]}
  ]},
  { id: 'dessert', tab: 'Desserts', groups: [
    { t: 'Tatlılar', s: 'Nagerechten', items: [
      ['74', 'Sade dondurma', 'Vanille roomijs', '9,95'],
      ['75', 'Çikolatalı dondurma', 'Chocolade roomijs', '9,95'],
      ['76', 'Çilekli dondurma', 'Aardbeien roomijs', '9,95'],
      ['77', 'Karışık dondurma', 'Diverse smaken roomijs', '9,95'],
      ['78', 'Dame blanche', 'Vanille roomijs met warme chocoladesaus', '10,50'],
      ['79', 'Meyveli dondurma', 'Tuttifrutti met vanille roomijs', '10,50'],
      ['80', 'Munzur yoğurt', 'Speciale dikke Turkse yoghurt met honing en sesamzaadjes', '8,95'],
      ['81', 'Baklava', 'Krokant bladerdeeg met pistache en siroop', '9,95'],
      ['82', 'Dondurmalı baklava', 'Baklava met vanille roomijs', '16,95'],
      ['83', 'Sütlaç', 'Turkse rijstpudding', '8,95'],
      ['84', 'Künefe (20 min.)', 'Huisgemaakt engelenhaar gebakken met kaas en siroop', '11,95'],
      ['85', 'Dondurmalı künefe (20 min.)', 'Vanille-ijs met huisgemaakt engelenhaar gebakken met kaas en siroop', '13,95'],
      ['86', 'Ayva tatlısı (seizoensgebonden)', 'Kweepeer met ijs en siroop', '8,95'],
      ['87', 'Kabak tatlısı (seizoensgebonden)', 'Pompoen met walnoten en siroop', '8,95']
    ]}
  ]}
];
