// Menukaart Publiek Food & Drinks, letterlijk van publiekfooddrinks.nl (19-11-2026).
// Item: [naam, prijs, omschrijving, vega]  vega: 'v' = vegetarisch (mogelijk), of een prijs = vegetarische variant voor die prijs.
(function () {
  var KLEIN = [
    ['Brood & dips', '7,8', '', 'v'],
    ['Bruschetta’s', '9,8', 'cherrytomaatjes · ui · knoflook · grana padano · + ansjovis extra 3,5', 'v'],
    ['Tomatensoep', '7,8', 'goedgevuld met verse groenten · brood · kruidenboter', 'v'],
    ['Carpaccio', '14,8', 'grana padano · pijnboompitten · truffelmayonaise'],
    ['Yakitorispiesjes', '9,5', 'houtskoolgegaarde kipspiesjes · kimchimayonaise'],
    ['Teriyaki chicken', '11,8', 'kippendij · paksoi · teriyakisaus'],
    ['Teriyaki chicken vega', '12,8', 'vegakip · paksoi · taugé · teriyakisaus', 'v'],
    ['Albondigas', '11,8', 'gehakballetjes · tomatensaus'],
    ['Calamares', '9,8', 'gefrituurde inktvis, garnalen en witvis · aioli'],
    ['Gamba’s al ajillo', '10,5', 'knoflookolie · rode peper · ui'],
    ['Gyoza', '11,5', 'Japanse dumplings met groente · bosui · wasabi crumble', 'v'],
    ['Camembert uit de oven', '9,8', 'honing · walnoot · brood', 'v']
  ];
  var SALADES = [
    ['Carpaccio salade', '18,5', 'grana padano · zongedroogde tomaat · truffelmayonaise'],
    ['Caesar salade', '17,5', 'kip · gekookt ei · grana padano · gekruide croutons', '13,5'],
    ['Geitenkaas salade', '16,5', 'tomaat · balsamico · walnoot · honing', 'v']
  ];
  var BURGERS = [
    ['Publiekburger', '19,5', 'bacon · tomaat · gesmoorde ui · cheddar · frites'],
    ['Crunchy chicken burger', '19,5', 'chili mango salsa · bacon of crispy butterfly shrimps · coleslaw · chips'],
    ['Crispy nacho burger', '18', 'tomaat · salsa · guacamole · nachochips · frites', 'v']
  ];

  window.KAART = [
    { id: 'lunch', t: 'Lunch', img: 'img/stock-burger.jpg', groups: [
      { t: 'Lunchgerechten', items: [
        ['Lunchspecial', '14,5', 'tomatensoep · Brabantse kroket · kleine uitsmijter', 'v'],
        ['Tomatensoep', '7,8', 'goedgevuld met verse groenten · brood · kruidenboter', 'v'],
        ['Club sandwich', '14,5', 'gemarineerde kip · bacon · tomaat · mayonaise'],
        ['Uitsmijter', '11,5', 'ham & kaas', 'v'],
        ['Twee Brabantse kroketten', '11,5', 'brood · mosterd', 'v'],
        ['Breakfast special', '13', 'gebakken ei · bacon/gerookte zalm · croissant met jam · yoghurt & granola', 'v']
      ] },
      { t: 'Lunchbroodjes', items: [
        ['Brie & bacon', '14', 'honing · rode ui · bieslook'],
        ['Carpaccio', '14,5', 'grana padano · truffelmayonaise'],
        ['Pulled pork', '13,5', 'brioche bun · slow cooked pulled pork · jalapeños · coleslaw'],
        ['Teriyaki chicken', '13,5', 'gemarineerde kip of vegakip · paksoi · sesam · teriyakisaus', '14,5'],
        ['Gerookte zalm', '14', 'wasabimayonaise · wakame · soy crumble · limoen'],
        ['Tosti', '7,8', 'ham en/of kaas', 'v'],
        ['Tosti Publiek', '9,8', 'mozzarella · serrano ham · tomaat · pesto', 'v']
      ] },
      { t: 'Hamburgers', items: BURGERS },
      { t: 'Salades', items: SALADES }
    ] },
    { id: 'diner', t: 'Diner',
      intro: 'Gerechten met verse seizoensgebonden producten voor een eerlijke prijs. Wij houden er van en onze chef heeft er een menukaart vol van samengesteld. Internationaal georiënteerd, voor ieder wat wils en met verrassende keuzes.',
      groups: [
      { t: 'Kleine gerechten', items: KLEIN },
      { t: 'Hoofdgerechten', items: [
        ['Chicken teriyaki', '19,5', 'gemarineerde kip of vega kip · paksoi · sesam · teriyakisaus · pandan rijst', '20,5'],
        ['Saté', '19,5', 'gemarineerde varkenshaas · kroepoek · gebakken uitjes · frites'],
        ['Spare ribs', '24,5', 'bbq saus · koolsla · lente ui · frites'],
        ['Gegrilde Black Angus steak', '27,5', 'peper- of champignontruffelsaus · frites'],
        ['Surf & turf', '29,5', 'steak (150 gr) · gamba’s · kruidenboter · frites'],
        ['Chicken & cauliflower curry', '19,5', 'chicken of vega · bloemkool · sugarsnaps · naan · kokosrijst', '15'],
        ['Fish & chips', '19,5', 'gefrituurde kabeljauwfilets · ravigotesaus · frites'],
        ['Risotto met gamba’s', '22,5', 'bospaddenstoelen · parmezaan · limoen', '15,5']
      ] },
      { t: 'Salades', items: SALADES },
      { t: 'Hamburgers', items: BURGERS },
      { t: 'Zoet', items: [
        ['Tiramisu', '8,8', 'vanilleijs · slagroom', 'v'],
        ['Choco moelleux', '9,5', 'chocolade moelleux · vanille ijs · caramelsaus · slagroom', 'v'],
        ['New York cheesecake', '9,5', 'vanille ijs · bosvruchten · slagroom', 'v']
      ] }
    ] },
    { id: 'borrel', t: 'Borrel & tapas', img: 'img/stock-tapasplank.jpg', groups: [
      { t: 'Fingerfood', items: [
        ['Tapasplank', '32,5', 'garnaaltjes · kippinchos · albondigas · fritto misto · Spaanse ham · Manchego kaas · olijven · brood'],
        ['Borrelplankje', '19,5', 'bitterballen · cauliflower bites · oude kaas · Spaanse ham · nacho’s met guacamole · pinda’s · olijven', 'v'],
        ['Nachos uit de oven', '8,8 / 13,8', 'jalapeño-pepers · rode ui · crème fraîche · tomatensalsa · kaas', 'v'],
        ['Nachos pulled pork', '12,8 / 19,8', 'jalapeño-pepers · rode ui · crème fraîche · tomatensalsa · kaas · pulled pork'],
        ['Fully loaded fries', '11,5 / 14,5', 'normaal / zoete frites · cheddarkaas · lenteui · jalapeños', 'v'],
        ['Loaded fries parmezaan', '14 / 16,5', 'normaal / zoete frites · bacon · parmezaanse kaas · truffelmayonaise · lenteui'],
        ['Bittergarnituur', '11,5 / 18,5', 'bitterballen · frikandelletjes · chicken bites · kaassticks']
      ] },
      { t: 'Kleine gerechten', items: KLEIN }
    ] },
    { id: 'cocktails', t: 'Cocktails & gin', img: 'img/stock-cocktails.jpg', groups: [
      { t: 'Cocktails', items: [
        ['Pornstar martini', '12', 'virgin 9,5'],
        ['Pink pornstar martini', '12', ''],
        ['Sex on the beach', '12', 'virgin 9,5'],
        ['Piña colada', '12', ''],
        ['Blue lagoon', '12', ''],
        ['Long Island ice tea', '12,5', ''],
        ['Amaretto sour', '12,5', 'virgin 9,5'],
        ['Mojito', '12', 'virgin 9,5'],
        ['Passion fruit mojito', '12', ''],
        ['Moscow mule', '12', ''],
        ['Pineapple margarita', '13', ''],
        ['Spicy margarita', '13', ''],
        ['Espresso martini', '12', ''],
        ['Negroni', '13,5', ''],
        ['Wisselcocktail', '11', '']
      ] },
      { t: 'Bubbels & spritz', items: [
        ['Martini bellini', '8,5 / 35', ''],
        ['Mimosa', '6', ''],
        ['Aperol spritz', '9', 'karaf 33'],
        ['Limoncello spritz', '9', ''],
        ['Bloodorange spritz', '9', 'karaf 33']
      ] },
      { t: 'Gin tonics', items: [
        ['Bombay Sapphire gin tonic', '10', ''],
        ['Gordon’s pink gin tonic', '11', ''],
        ['Hendrick’s gin tonic', '12', ''],
        ['Seedlip gin tonic', '8,5', '']
      ] }
    ] },
    { id: 'wijn', t: 'Wijn', note: 'Prijzen per glas / per fles.', groups: [
      { t: 'Wit', items: [
        ['Chardonnay', '5,8 / 29', 'Les Bertholets Grande Réserve, Frankrijk'],
        ['Sauvignon blanc', '6 / 30', 'Misty Cove Estate, Nieuw-Zeeland'],
        ['Pinot grigio', '5,8 / 29', 'Terre del Noce, Italië'],
        ['Verdejo', '5,8 / 29', 'El Coto, Spanje'],
        ['Garnacha blanca macabeo', '37,5', 'La Font del Mosquit'],
        ['Moezel', '5,3 / 24', 'Bereich Bernkastel, Duitsland']
      ] },
      { t: 'Rosé', items: [
        ['Estandon Gris des Seigneurs', '5,8 / 29', 'Frankrijk'],
        ['AIX Rosé', '38', 'Aix-en-Provence, Frankrijk'],
        ['AIX Rosé 1,5 l', '75', 'Aix-en-Provence, Frankrijk']
      ] },
      { t: 'Rood', items: [
        ['Grenache syrah mourvèdre', '5,8 / 29', 'Les Bertholets Grande Réserve, Frankrijk'],
        ['Negroamaro', '5,8 / 29', 'Bio Integro, Italië'],
        ['Valpolicella Ripasso Superiore', '33', 'Torre del Noce, Italië'],
        ['Amarone della Valpolicella', '46', 'Torre del Falasco, Italië']
      ] }
    ] }
  ];

  window.BIER = [
    ['Jopen Blurred Lines', 'New England IPA · 5,3% · van de tap', '5,5'],
    ['Hoegaarden', 'Belgisch witbier · 4,9%', '6'],
    ['Mongozo Coconut', 'glutenvrij · 3,6%', '7,5'],
    ['Mongozo Mango', 'glutenvrij · 3,6%', '7,5'],
    ['Jopen Gua’ve got the love', 'fruited session IPA · 3,5%', '7'],
    ['Jopen Sour n’ Sweet', 'fruited sour · 4,5%', '7'],
    ['Jopen Chapter 11 So Fresh So Clean', 'fresh hop cold IPA · 6,0%', '7'],
    ['Jopen Dipa Love', 'DDH double IPA · 8,5%', '7'],
    ['Palm', 'amber · 5,2%', '4,5'],
    ['Oedipus Mannenliefde', 'saison · 6,0%', '7'],
    ['La Trappe Trappist Bockbier', '7%', '6,8']
  ];
})();
