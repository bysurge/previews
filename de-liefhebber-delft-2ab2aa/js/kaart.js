// Kaart De Liefhebber, overgenomen van liefhebber-delft.nl (zonder prijzen, die staan niet op hun site).
// [naam, nl, en, label]
window.ETEN = [
  { id: 'sandwiches', naam: 'Sandwiches', items: [
    ["Surf 'N Turf", 'Clubsandwich met tonijn, chorizo en paprika', 'Club sandwich with tuna, chorizo and bell pepper'],
    ['BLT', 'Clubsandwich met bacon, sla en tomaat', 'Club sandwich with bacon, lettuce and tomato'],
    ['Hummus', 'Vers gebakken bol met hummus en gegrilde groente', 'Fresh bun with hummus and grilled vegetables', 'Vegan'],
    ['Goatcheese', 'Vers gebakken bol met geitenkaas, honing en walnoten', 'Fresh bun with goat cheese, honey and walnuts', 'Vegetarisch'],
    ['Salmon', 'Vers gebakken bol met gerookte zalm, roomkaas en rucola', 'Fresh bun with smoked salmon, cream cheese and rocket'],
    ['Croquettes', 'Twee ambachtelijke kroketten, met brood', 'Two artisanal croquettes, served with bread'],
  ]},
  { id: 'toasties', naam: 'Toasties', items: [
    ['Kies je toppings', 'Jonge kaas, oude kaas, brie, ham, salami, chorizo, tomaat, ananas', 'Choose your toppings: mild cheese, aged cheese, brie, ham, salami, chorizo, tomato, pineapple'],
  ]},
  { id: 'eggs', naam: 'Eggs', items: [
    ['Uitsmijter', 'Drie gebakken eieren', 'Three fried eggs', 'Vegetarisch'],
    ['Uitsmijter met ham, kaas, bacon', '', ''],
    ['Farmers Omelet', 'Boerenomelet met groente, ham en kaas', 'Omelet with vegetables, ham and cheese'],
  ]},
  { id: 'salads', naam: 'Salads', items: [
    ['Niçoise', 'Salade met ansjovis, tonijn, ei, olijven, haricots verts en paprika', 'Salad with anchovies, tuna, olives, green beans and bell pepper'],
    ['Goatcheese', 'Salade met geitenkaas, walnoten, granaatappel, appel en druiven', 'Salad with goat cheese, walnuts, pomegranate, apple and grapes', 'Vegetarisch'],
    ['Falafel', 'Salade met falafel, haricots verts en muhamarra', 'Salad with falafel, green beans and muhamarra', 'Vegan'],
  ]},
  { id: 'soup', naam: 'Soup', items: [
    ['Chicken Soup', 'Huisgemaakte kippensoep', 'Homemade chicken soup'],
    ['Tomato Soup', 'Huisgemaakte tomatensoep met gehaktballetjes', 'Homemade tomato soup with meatballs'],
    ['Beef-Vegetable Soup', 'Huisgemaakte stevige rundvlees-groentesoep', 'Homemade beef-vegetable soup'],
    ['Goulash Soup', 'Huisgemaakte rijke goulashsoep', 'Homemade goulash soup'],
  ]},
  { id: 'sweets', naam: 'Sweets', items: [
    ['Pannenkoek naturel', '', '', 'Vegetarisch'],
    ['Pannenkoek met spek', '', 'With bacon'],
    ['Pannenkoek met kaas', '', 'With cheese', 'Vegetarisch'],
    ['Pannenkoek met spek en kaas', '', 'With bacon and cheese'],
    ['Appeltaart', '', 'Apple pie', 'Vegetarisch'],
    ['Strawberry Cheesecake', '', '', 'Vegetarisch'],
  ]},
  { id: 'snacks', naam: 'Snacks', items: [
    ['Bitterballen', '8 stuks', ''],
    ['Kaastengels', '8 stuks', '', 'Vegetarisch'],
    ['Mixed Snacks', '8 stuks', ''],
    ['Portie Falafel', '8 stuks', '', 'Vegan'],
    ['Brood met smeersels', '', '', 'Vegetarisch'],
    ['Portie Friet', '', '', 'Vegan'],
    ['Borrelplank', 'Met diverse kaas- en vleeswaren, olijven en brood', ''],
    ["Mexicano's", '', ''],
    ['Calamaris', '', ''],
    ['Knolselderij kroketjes', '6 stuks', '', 'Vegan'],
    ['Vlammetjes', '', '', 'Ook vegan optie'],
  ]},
  { id: 'hoofd', naam: 'De Liefhebber', items: [
    ["Gamba's Pil Pil", 'Garnalen in pittige knoflookolie, geserveerd met brood of friet', 'Shrimps in spicy garlic oil served with fries or bread'],
    ['Schnitzel XL', 'Schnitzel geserveerd met gebakken eitjes, sla en friet', 'Schnitzel served with fried eggs, fries and salad'],
    ['Classic Burger', 'Ambachtelijke hamburger met kaas, ui, tomaat en augurk, geserveerd met friet en salade', 'Homemade hamburger with cheese, onions, tomato and pickles. Served with salad and fries', 'Ook vegan mogelijk'],
    ['Saté', 'Saté van kippendijen met pindasaus en gebakken uitjes, geserveerd met brood of friet, kroepoek en salade', 'Chicken saté with peanut sauce and fried onions, served with bread or fries and salad', 'Ook vegan optie'],
    ['Spicy Chicken', 'Pittige kippendijen met gebakken ui en paprika, geserveerd met salade, friet of brood', 'Spicy chicken thighs with bell pepper and onions. Served with salad, bread or fries', 'Ook vegan optie'],
  ]},
];

// [naam, detail, extra]
window.DRINKEN = [
  { id: 'warm', naam: 'Warme dranken', groepen: [
    ['Koffie', [['Koffie'], ['Espresso'], ['Dubbele espresso'], ['Cappuccino'], ['Koffie verkeerd'], ['Latte macchiato'], ['Flat white'], ['Irish / Spanish coffee'], ['Warme Chocomel']]],
    ['Thee', [['Yunnan F.O.P.', 'zwart'], ['London Earl Grey'], ['Rooibos', 'citrus'], ['Gunpowder', 'groen'], ['Rood fruit'], ['Kamille'], ['Verse munt']]],
  ]},
  { id: 'fris', naam: 'Fris, sap & zuivel', groepen: [
    ['', [['Coca-Cola'], ['Coca-Cola Zero'], ['Sprite (Zero)'], ['Fanta Orange'], ['Fanta Cassis'], ['Ice Tea'], ['Ice Tea Green'], ['Ginger Beer'], ['Chaudfontaine still'], ['Chaudfontaine sparkling'], ["Verse jus d'orange"], ['Appelsap', 'biologisch'], ['Perensap', 'biologisch'], ['Fristi'], ['Chocomel'], ['Melk'], ['Tonic San Pellegrino'], ['Limonata San Pellegrino']]],
  ]},
  { id: 'bier', naam: 'Bier', groepen: [
    ['Van de tap', [['Hertog Jan', '', '5%'], ['Leffe Blond', '', '6%'], ['Hoegaarden Wit', '', '5%'], ['2 wisseltaps', 'Vraag ernaar!']]],
    ['(Zwaar) blond', [['Duvel', '', '8%'], ['La Chouffe', '', '8%']]],
    ['Dubbel & tripel', [['La Trappe Dubbel', 'dubbel', '7%'], ['Westmalle Dubbel', 'dubbel', '7%'], ['Westmalle Tripel', 'tripel', '9,5%'], ['La Trappe Tripel', 'tripel', '8%']]],
    ['Gerstewijn', [['St. Bernardus Abt', '', '10%'], ['Cuvée de Chateau', '', '11%']]],
    ['Wit / weizen', [['Texels Skuumkoppe', '', '6%'], ['La Trappe Wit', '', '5,5%']]],
    ['IPA', [['Jopen Mooie Nel', '', '6,5%'], ['Punk IPA', '', '5,6%']]],
    ['Kriek, geuze & cider', [['Boon Geuze', '', '6%'], ['Liefmans Cuvée Brut', '', '6%'], ['Kasteel Rouge', '', '8%'], ['Magners Cider', '', '4,5%'], ['Somersby Apple', '', '4,5%'], ['Liefmans Fruitesse', '', '3%']]],
    ['Alcoholvrij', [['Jupiler 0.0'], ['Hoegaarden Radler']]],
  ]},
  { id: 'wijn', naam: 'Wijn', groepen: [
    ['Rood', [['Sangiovese', 'Conte di Campiano, Italië'], ['Touriga Nacional', 'Vihna da Fonte, Portugal']]],
    ['Wit', [['Sauvignon Blanc', 'Antares, Chili'], ['Chardonnay', 'Antares, Chili'], ['Spätlese (zoet)', 'Rheinhessen, Duitsland'], ['Grauburgunder', 'Steffen, Duitsland']]],
    ['Rosé', [['Cinsault-Grenache', 'J.C. Mas, Frankrijk'], ['Merlot', 'Calalenta, Fantini']]],
    ['Cava & specials', [['Bienvenido', 'cava'], ['Hugo'], ['Aperol Spritz']]],
    ['Port & vermouth', [['Port', 'rood of wit'], ['Vermouth', 'rood of wit']]],
  ]},
  { id: 'gin', naam: 'Gin & tonic', groepen: [
    ['Gin', [["Bobby's Dry Gin"], ['Dutch Courage Aged Gin'], ['Sylvius Gin'], ["Nolet's Silver Dry Gin"], ['Gastro Gin']]],
    ['Tonic', [['Hibiscus Tonic'], ['San Pellegrino'], ['Fever-Tree Tonic']]],
  ]},
  { id: 'jenever', naam: 'Jenever', groepen: [
    ['Zuidam', [['Graan'], ['Spelt'], ['Rogge', '1 jaar'], ['Oude', '5 jaar'], ['Korenwijn', '1 jaar']]],
    ['Rutte', [['Barrel Aged'], ['Haver Genever'], ['Old Simon'], ['Paradyswyn'], ['Oude Jenever']]],
    ['Hooghoudt', [['Kever Genever'], ['Premium'], ['Oude Graan'], ['Korenwijn'], ['De Borgen Old']]],
    ['Lucas Bols', [['Frans Eiken Lagering'], ['Corenwyn', '6 jaar']]],
    ['Nolet', [['Ketel 1 Genever'], ['Ketel 1 Matuur']]],
    ['Van Kleef', [['Graan Genever'], ['Korenwijn'], ['Korenwijn', '5 jaar']]],
    ['Herman Jansen', [["Bobby's Jenever"], ['By The Dutch Old']]],
    ['Golden Arch', [['Jajem Genever'], ['Jajem', '1 jaar']]],
    ['Boompjes', [['Old Dutch', '3 years old'], ['Korenwijn', '4 jaar'], ['100% Malt', '5 jaar']]],
    ['En verder', [["Baker's Best", 'De Stokers'], ['Delfts Zwart', 'De Klomp']]],
  ]},
  { id: 'gedestilleerd', naam: 'Gedestilleerd', groepen: [
    ['Whiskey', [['Millstone 100 Rye Whiskey'], ['Millstone Peated PX'], ['Millstone 5 jaar Light Peat'], ['Millstone 5 jaar Single Malt'], ['Millstone 10 jaar American Oak'], ['Jameson'], ['Jack Daniels'], ["Hibiki Master's Select"], ['Laphroaig Brodir'], ['Balvenie Triple Cask']]],
    ['Cognac / brandy', [['Chat. Montifaud VS'], ['Rooster & Wolf'], ['Rémy Martin VSOP']]],
    ['Vodka', [['Ketel One Vodka'], ['Ketel One Orange'], ['Grey Goose']]],
    ['Pastis / absinthe', [['Angelique', '68%'], ['Ricard']]],
    ['Rum', [['Flying Dutchman'], ['Bacardi Superior'], ['Diplomatico Reserva'], ['Zacapa', '23 jaar']]],
    ['Likeuren en meer', [['Amaretto, Limoncello, Baileys, Sayah Spekkoek, Licor 43, Grand Marnier, Southern Comfort, Sambuca, Cointreau, Jägermeister, enzovoort']]],
  ]},
];
