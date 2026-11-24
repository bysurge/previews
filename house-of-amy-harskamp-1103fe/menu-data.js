// Letterlijk overgenomen van de menukaarten van House of Amy (Menukaart, Sushi, Cafetaria, Dranken & IJs).
// [nummer, naam, prijs, omschrijving]
window.AMY_MENU = [
  { id: 'menus', tab: "Menu's", groups: [
    { t: 'Vier gangen menu', note: 'Vanaf 2 personen.', items: [
      ['', 'Vier gangen menu', '47,50 p.p.', 'Sashimi zalmtartaar, Iberico salade, Dry Aged entrecote 150 gram p.p. (geserveerd met nasi of bami, frites en salade), ijs met vers fruit of koffie']]},
    { t: 'Onbeperkt tapas menu', note: 'Vanaf 2 personen. Tapas en sushi: laten verrassen of eigen keuze uit de menukaart.', items: [
      ['', 'Onbeperkt tapas menu', '65,00 p.p.', 'Tapas en sushi, laat je verrassen, grand dessert'],
      ['', '10 gangen tapas inclusief grand dessert', '55,00 p.p.']]},
    { t: 'Kinder menu', items: [
      ['', 'Frites met een snack naar keuze', '11,00', 'Frikandel, kroket, knakworst, kaassoufflé, kipnuggets. Met ijs']]}
  ]},
  { id: 'soep', tab: 'Soep & tapas', groups: [
    { t: 'Soep', items: [
      [1, 'Chinese tomatensoep (zoet)', '7,00'], [2, 'Crème kreeftensoep', '17,00'], [3, 'Bospaddenstoelensoep', '9,00'],
      [4, 'Wan Tan soep', '9,00'], [5, 'Peking soep (zoet, zuur en pikant)', '9,00'], [6, 'Erwtensoep met roggenbrood en spek (seizoen)', '9,00']]},
    { t: 'Tapas + voor- en bijgerechten', items: [
      [7, 'Tipan Teriyaki ossenhaas', '16,50'], [8, 'Beef roll (runder ribeye) 2 stuks', '9,40'], [9, 'Teriyaki kipspies 3 stuks', '11,60'],
      [10, 'Teriyaki iberico salade', '22,60'], [11, 'Ebi fry (tempura garnalen) 3 stuks', '9,30'], [12, "Home made loempia's 2 stuks midi", '7,00'],
      [13, 'Sate met pindasaus 3 stuks', '10,80'], [14, 'Eend met flensjes 2 stuks', '9,40'], [15, 'Teriyaki kip op gietijzeren plaat', '13,80'],
      [16, 'Eendenborstfilet met champignons en honingmosterdsaus', '20,40'], [17, 'Morue Carré (witvis) met szechuanpeper', '8,30'],
      [18, 'Gamba salade met avocado en mango 3 stuks', '12,70'], [19, "Gamba's op traditionele wijze (zoetzuur) 6 stuks", '18,70'],
      [20, 'Mongoolse kip (pittig en licht zoet)', '14,30'], [21, 'Geroosterd varkensspek', '11,30'], [22, 'Spareribs op Aziatische wijze (zoetzuur of pikant)', '9,60'],
      [23, 'Carpaccio rucola, pijnboompitten, parmezaan en croutons', '16,00'], [24, "Trio visschotel (gerookte zalm, gamba's en tonijn sashimi)", '17,60'],
      [25, 'Dumpling met kip (gyoza) 4 stuks', '7,90'], [26, 'Gefrituurde siu mai 4 stuks', '8,30'], [27, "Mini loempia's 6 stuks", '5,00'],
      [28, 'Mini kerry triangels 6 stuks', '5,00'], [29, 'Gebakken banaan 4 stuks', '5,50'], [30, 'Borrel kroepoek/casava kroepoek', '4,50'],
      [31, 'Gemengde salade', '7,00'], [32, 'Sojabonen (edamame)', '5,00'], [33, 'Kleine nasi/bami goreng of frites', '5,50'],
      [34, 'Witte rijst', '4,00'], [35, 'Kleine miehoen goreng', '6,50'], [36, 'Kleine groenten mix', '7,50'], [37, 'Rendang', '16,00'],
      [38, 'Thaise groene curry kip', '14,90'], [39, "Thaise groene curry gamba's", '18,70'], [40, 'Zalmtartaar met salade', '19,70'],
      [41, 'Tonijntartaar met salade', '21,50'], [42, 'Sate varkenshaas', '17,60'], [43, 'Koreaanse kip', '14,90'],
      [44, 'Krokante reepjes fricandeau', '16,00'], [45, 'Frites of gebakken aardappeltjes of zoete aardappel frites', '5,50'],
      [46, 'Crispy prawn bite (chili saus) 3 stuks', '7,50'], [47, 'Gebakken garnalen (butterfly garnalen) 2 stuks', '7,50'],
      [48, 'Coquille op bed van glas noedels (soja saus en zwarte knoflook)', '9,20'], [49, 'Krokant gebakken oesterzwam met knoflook dressing en chili olie', '7,00'],
      [50, 'Gevulde courgette met geitenkaas/walnoot rijst', '7,00']]}
  ]},
  { id: 'sushi', tab: 'Sushi & poke', groups: [
    { t: 'Nigiri', items: [[51, 'Zalm', '3,50'], [52, 'Tonijn', '4,50'], [53, 'Ebi', '3,50']]},
    { t: 'Sushi roll vegetarisch 8 stuks', items: [[54, 'Komkommer met yuzu mayo', '9,90'], [55, 'Avocado met wasabi mayo', '10,00']]},
    { t: 'Ebi sushi roll met topping, inside out 8 stuks', items: [[56, 'Zalm', '20,00'], [57, 'Tonijn', '21,00'], [58, 'Beef', '21,00'], [59, 'Mango', '19,00']]},
    { t: 'Maki roll klein 6 stuks', items: [[60, 'Komkommer', '4,50'], [61, 'Avocado', '5,00'], [62, 'Zalm', '7,00'], [63, 'Tonijn', '8,50']]},
    { t: 'Maki roll inside out 8 stuks', items: [[64, 'Kushi', '16,00'], [65, 'California', '14,00'], [66, 'Spiced tonijn', '15,00'], [67, 'Spiced zalm', '14,50'], [68, 'Spiced crispy chicken', '15,00']]},
    { t: 'Sushi mix en sets', items: [
      [69, 'Sushi mix luxe groot 16 stuks', '32,50'],
      ['', 'Sake Maguro 16 stuks', '16,00', 'Kleine maki zalm 6 st., maki tonijn 6 st., 2 st. nigiri zalm en 2 st. nigiri tonijn'],
      ['', 'Maki Mix 24 stuks', '30,00', '8 st. kushi, 8 st. spiced zalm en 8 st. spiced chicken'],
      ['', 'Maki set 42 stuks', '42,50', "Mix maki rol en nigiri's"],
      ['', 'Maki set 64 stuks', '55,00', 'Luxe sushi mix']]},
    { t: 'Poke bowl', items: [
      [70, 'Zalm', '17,50', 'Sushi rijst, zalm, avocado, komkommer en edamame'], [71, 'Tonijn', '18,50', 'Sushi rijst, tonijn, avocado, komkommer en edamame'],
      [72, 'Kip', '16,90', 'Sushi rijst, kip, avocado, komkommer en edamame'], [73, 'Ebi', '16,90', 'Sushi rijst, ebi, avocado, komkommer en edamame'],
      [74, 'Vega', '15,00', 'Sushi rijst, tamago, avocado, komkommer en edamame']]}
  ]},
  { id: 'hoofd', tab: 'Hoofdgerechten', groups: [
    { t: 'Tipan gietijzeren plaat', items: [
      [75, 'Teriyaki kip', '23,70'], [76, 'Teriyaki iberico procureur', '31,80'], [77, 'Wilde garnalen 6 stuks', '31,80'], [78, 'Babipangang', '20,40'], [79, 'Teriyaki ossenhaas', '25,50']]},
    { t: 'Hoofdgerechten', note: 'Alle hoofdgerechten worden geserveerd met rijst +1,00, nasi of bami goreng, frites of zoete aardappel frites met mayo +3,00, miehoen goreng +5,00.', items: [
      [80, 'Kipfilet met saus naar keuze', '19,90', 'Oestersaus, szechuanpepersaus, gon bao saus, kerrie- en zwarte bonensaus'],
      [81, 'Kip met Thaise rode currysaus met koriander', '21,50'], [82, 'Gan Chao Ji Si', '21,50', 'Reepjes krokante kipfilet op Hongkongse wijze bereid'],
      [83, 'Ossenhaas met saus naar keuze', '24,20', 'Oestersaus, szechuanpepersaus, gon bao saus, kerriesaus, zwarte bonensaus'],
      [84, 'Gan Chao Niu Si', '24,20', 'Reepjes krokante runderhaas op Hongkongse wijze bereid'],
      [85, 'Grote garnalen met chilisaus', '24,20'], [86, 'Grote garnalen Mongoolse wijze (licht pikant en licht zoet)', '24,20'],
      [87, 'Zalm (wild gekweekt) 200 gram', '24,20'], [88, 'Kabeljauwfilet 200 gram', '24,20'], [89, 'Geroosterde varkensspek', '19,50'],
      [90, 'Varkensschnitzel', '22,00', 'Met champignonroomsaus en frites, mayo en salade'], [91, 'Kipschnitzel', '22,00', 'Met zoete pikante saus, frites, mayo en salade'],
      [92, 'Ambachtelijke gehaktbal uit jus', '16,50', 'Met pinda, mayo, frites en salade'], [93, 'Biefstuk van de haas 250 gram', '34,70', 'Geserveerd met pepersaus, frites en salade'],
      [94, 'Dry Aged runderentrecote 300 gram', '33,00', 'Geserveerd met teriyakisaus, frites en salade'], [95, 'Dry Aged ribeye 300 gram', '36,50', 'Geserveerd met teriyakisaus, frites en salade'],
      [96, 'Koreaanse kip', '21,50'], [97, 'Rendang', '24,80']]},
    { t: 'Vegetarische gerechten', items: [
      [98, 'Foe yong hai met groenten', '16,00'], [99, 'Groentenmix', '16,00'], [100, 'Tofu met Chinese champignons', '17,50'],
      [101, 'Miehoen met groenten', '15,00'], [102, 'Gebakken oesterzwam met chili olie op bed van aubergine', '20,00'],
      [103, 'Vegetarische trio', '22,50', 'Gevulde paprika (vegetarisch gehakt), gevulde courgette (geitenkaas, walnoot en rijst), gevulde tofu (ei en champignon)']]}
  ]},
  { id: 'lunch', tab: 'Lunch', groups: [
    { t: 'Lunch', items: [
      [104, 'Tosti kaas', '7,50'], [105, 'Tosti ham en kaas', '8,20'], [106, 'Tosti @ home met frites', '12,80'],
      [107, 'Broodje gezond', '8,00', 'Kaas, ham, komkommer, tomaat, sla, gekookt ei'], [108, 'Smashburger menu (Black Angus) dubbele 200 gr burger', '16,50'],
      [109, 'Ambachtelijke kroketten', '10,50', '2 ambachtelijke kroketten met brood'], [110, 'Uitsmijter ham en kaas', '12,50'],
      [111, 'Broodje warmvlees', '8,50', 'Kipfilet met ui, gebakken ei en pindasaus'], [112, 'Broodje gerookte zalm', '17,00', 'Met limoencrème'],
      [113, 'Nasi of bami sate', '6,00', 'Nasi of bami goreng met 3 stokjes sate, pindasaus, gebakken ei, kroepoek en atjar'],
      [114, 'Broodje carpaccio', '16,50', 'Rundercarpaccio, rucola, pijnboompitten, parmezaan, truffelmayo en croutons, salade'],
      [115, 'Iberico salade met frites', '23,00'], [116, 'Trio visschotel', '19,50', "Gerookte zalm, gamba's, tonijntartaar"],
      [117, 'Teriyaki kip geserveerd op gietijzeren plaat met frites', '16,50'], [118, 'Tipan teriyaki ossenhaas op gietijzeren plaat met frites', '18,50'],
      [119, 'Zalmmoot met salade en frites', '20,00'], [120, 'Eendenborstfilet', '20,50', 'Op bed van champignons en honingmosterdsaus'],
      [121, 'Zalmtartaar met salade en rijst', '20,50'], [122, 'Tonijntartaar met salade en rijst', '22,50'], [123, 'Maaltijdsalade zalm met brood', '16,80'],
      [124, 'Maaltijdsalade tonijn met brood', '17,80'], [125, 'Maaltijdsalade krokante kip met brood', '17,00'], [126, 'Appelgebak', '3,90'],
      [127, '12 uurtje vlees met tomatensoep', '16,00', '(broodje carpaccio of broodje rundvlees)'],
      [128, '12 uurtje vis met bospaddenstoelensoep', '16,00', '(garnalen kroket of gerookte zalm)'],
      [129, 'Clubsandwich zalm (wit en bruin brood)', '15,50', 'Zalm, roomkaas, botersla, bieslook, advocado, gepocheerd ei'],
      [130, 'Clubsandwich kip (wit en bruin brood)', '15,00', 'Krokante kip, botersla, tomaat, advocado, bacon en mayonaise'],
      [131, 'Geitenkaas salade met brood', '14,50'], [132, 'Kip teriyaki salade met brood', '16,50'],
      [133, 'Broodje hamburger speciaal', '8,50', '100% rundvlees, gebakken ei, tomaat, sla, augurk, komkommer, mayonaise en curry']]}
  ]},
  { id: 'cafetaria', tab: 'Cafetaria', groups: [
    { t: "Menu's", note: "Alle menu's worden geserveerd met frites en salade en saus.", items: [
      ['', 'Babipangang', '17,50'], ['', 'Nasi/bami sate', '15,00'], ['', 'Sate', '14,00'], ['', 'Halve haan', '14,50'],
      ['', 'Smashburger (Black Angus)', '16,00'], ['', 'Ambachtelijke gehaktbal', '14,80'], ['', 'Carpaccio', '16,00'],
      ['', 'Kipschnitzel home made', '20,50'], ['', 'Varkensschnitzel champignonroomsaus', '20,50'], ['', 'Biefstuk van de haas met pepersaus', '33,50'],
      ['', 'Kindermenu', '11,00', 'Frites met snack naar keuze: frikandel, kroket, knakworst, kipnuggets of kaassoufflé. Softijs met een verrassing']]},
    { t: 'Frites', items: [
      ['', 'Klein', '3,00'], ['', 'Klein met saus naar keuze', '3,50'], ['', 'Normaal', '3,80'], ['', 'Frites normaal met saus naar keuze', '4,30'],
      ['', 'Groot', '4,80'], ['', 'Frites groot met saus naar keuze', '5,50'], ['', 'Waterfiets', '8,00'], ['', 'Boerenfrites', '6,80'],
      ['', 'Rendang', '9,00'], ['', 'Babipangang', '9,00'], ['', 'Gezinszak friet 2 pers.', '6,50'], ['', 'Gezinszak friet 4 pers.', '13,00'],
      ['', 'Gezinszak friet 6 pers.', '19,50'], ['', 'Gezinszak friet 8 pers.', '26,00']]},
    { t: 'Saus', items: [
      ['', 'Mayo, curry, ui, pinda, speciaal, joppie, ketchup, knoflook, chilli, oorlog, spicy mayo', '1,00'], ['', 'Grote beker', '3,50']]},
    { t: 'Snacks', items: [
      ['', 'Frikandel', '2,40'], ['', 'Frikandel mayo', '2,90'], ['', 'Frikandel speciaal', '3,00'], ['', 'Frikandel XXL', '5,30'],
      ['', 'Vleeskroket', '2,50'], ['', 'Kwekkeboom kroket', '3,10'], ['', 'Goulash kroket', '3,00'], ['', 'Kalfskroket', '2,90'],
      ['', 'Vega kroket', '3,30'], ['', 'Glutenvrije kroket', '3,30'], ['', 'Glutenvrije frikandel', '3,30'], ['', 'Kaassoufflé', '2,50'],
      ['', 'Ham-kaas', '2,70'], ['', 'Kipcorn', '3,00'], ['', 'Braadworst', '3,50'], ['', 'Viandel', '3,20'], ['', 'Mexicano', '3,10'],
      ['', 'Mexicano XXL', '5,40'], ['', 'Satérol', '3,70'], ['', 'Shoarmarol', '3,70'], ['', 'Berehap met pindasaus', '3,50'],
      ['', 'Loempia', '5,00'], ['', 'Loempia speciaal met ei en ham', '6,50'], ['', 'Lihanbout', '2,90'], ['', 'Nasischijf', '2,90'],
      ['', 'Bamischijf', '2,90'], ['', 'Sitostick', '3,80'], ['', 'Pikanto', '3,00'], ['', 'Souflesse pikant', '2,90'],
      ['', 'Souflesse tomaat mozzarella', '2,90'], ['', 'Ambachtelijke gehaktbal uit jus', '5,00'], ['', 'Loempidel', '3,70'],
      ['', 'Vlammetjes 6 stuks', '5,80'], ['', 'Hotwings 6 stuks', '6,40'], ['', 'Kaasstengels oude kaas 6 stuks', '5,20'],
      ['', 'Kaasstengels oude kaas 9 stuks', '7,50'], ['', 'Kipnuggets 6 stuks', '4,70'], ['', 'Mini loempias 6 stuks', '4,50'],
      ['', 'Mini kerrie triagel', '4,50'], ['', 'Bitterbal 6 stuks', '4,50'], ['', 'Ambachtelijke bitterbal 6 stuks', '6,50'],
      ['', 'Sate 3 stokjes', '9,50'], ['', 'Home made loempia (midi) 2 stuks', '7,00'], ['', 'Bittergarnituur 12 stuks', '11,00'],
      ['', 'Borrel / casava kroepoek', '4,50'], ['', 'Slaatje', '4,00']]},
    { t: 'Broodjes', items: [
      ['', 'Uitsmijter ham en kaas', '12,50'], ['', 'Tosti @ home met frites', '13,00'], ['', 'Tosti kaas', '7,50'], ['', 'Tosti kaas/ham', '8,20'],
      ['', 'Broodje kroket of frikandel', '3,50'], ['', 'Smashburger (dubbele burger)', '9,00'], ['', 'Crispy chickenburger met andalousesaus', '7,00'],
      ['', 'Hamburger', '7,00'], ['', 'Hamburger speciaal met ei', '7,90'], ['', 'Cheeseburger', '7,00'], ['', 'Broodje kaas', '3,30'],
      ['', 'Broodje ham', '3,30'], ['', 'Broodje ei (gekookt of gebakken)', '2,70'], ['', 'Broodje ham en kaas', '4,00'], ['', 'Broodje rosbief', '5,20'],
      ['', 'Broodje gezond', '7,50'], ['', 'Broodje warmvlees (kip)', '8,00'], ['', 'Extra ei', '1,00'], ['', 'Extra cheddar', '0,80']]}
  ]},
  { id: 'dessert', tab: 'IJs & dessert', groups: [
    { t: 'IJs en fruit', items: [
      ['', 'Vanille ijs', '8,50', '2 bollen met slagroom'], ['', 'Mango', '8,50', '2 bollen met slagroom'], ['', 'Cocos', '8,50', '2 bollen met slagroom'],
      ['', 'Chocolade', '8,50', '2 bollen met slagroom'], ['', 'Citroen sorbet', '8,50', 'met slagroom'], ['', 'IJs mix', '9,00', '3 smaken met slagroom'],
      ['', 'Vers fruit', '9,00', 'seizoensgebonden'], ['', 'Café glacé', '9,00', 'slagroom, vanille ijs, koffie en koffielikeur'],
      ['', 'Dame blanche', '9,00'], ['', 'Dame blanche speciaal', '9,50'], ['', 'Coupe aardbeien', '9,50', 'enkel met de zomermaanden'],
      ['', 'Grand dessert', '12,50'], ['', 'Crème brûlée', '9,50', 'met vanille ijs en slagroom'], ['', 'Kaasplankje', '9,50', 'kaas uit de regio'],
      ['', 'Kaasplankje met dessertwijn', '13,50', 'kaas uit de regio'], ['', 'Slagroom', '1,00']]}
  ]},
  { id: 'dranken', tab: 'Dranken', groups: [
    { t: 'Warme dranken', items: [
      ['', 'Diverse smaken thee', '3,20'], ['', 'Verse muntthee', '3,50'], ['', 'Chinese thee pot', '4,00'], ['', 'Koffie zwart', '3,30'],
      ['', 'Espresso', '3,30'], ['', 'Cappuccino', '3,80'], ['', 'Koffie verkeerd', '4,20'], ['', 'Latte macchiato', '4,20'],
      ['', 'Dubbele espresso', '4,50'], ['', 'Warme chocomel', '3,50'], ['', 'Appelgebak', '3,90']]},
    { t: 'Koffie speciaaltje', items: [
      ['', 'D.O.M. coffee', '9,00'], ['', 'French coffee', '9,00'], ['', 'Irish coffee', '9,00'], ['', 'Italian coffee', '9,00'],
      ['', 'Spanish coffee', '9,00'], ['', 'Likeur 43 coffee', '9,00'], ['', 'Brazilian coffee', '9,00']]},
    { t: 'Sapjes', items: [['', "Verse jus d'orange", '3,75'], ['', "Jus d'orange", '3,30'], ['', 'Appelsap', '3,30']]},
    { t: 'Frisdrank', items: [
      ['', 'Lipton ice tea sparkling/green/peach', '3,30'], ['', 'Sinas', '3,30'], ['', 'Ranja', '3,00'], ['', 'Sprite', '3,30'], ['', 'Cassis', '3,30'],
      ['', 'Bitter lemon Royal Club', '3,30'], ['', 'Ginger ale tonic Royal Club', '3,30'], ['', 'Tonic Royal Club', '3,30'], ['', 'Rivella', '3,30'],
      ['', 'Melk', '3,00'], ['', 'Sourcy rood/blauw', '3,20'], ['', 'Cola/cola zero', '3,30'], ['', 'Fristi', '3,30'], ['', 'Chocomel', '3,30'],
      ['', 'Karaf water', '1,50'], ['', 'Sourcy rood/blauw 0,75 L', '5,50']]},
    { t: 'Huiswijnen', items: [
      ['', 'Huiswijn wit/rood/rosé/zoet per glas', '5,50'], ['', 'Huiswijn per fles', '27,00'], ['', 'Merlot rood per glas', '5,50'],
      ['', 'Chardonnay per glas', '5,50'], ['', 'Shiraz per glas', '5,50'], ['', 'Karaf wijn', '17,50'], ['', 'Dessertwijn', '6,90']]},
    { t: 'Aperitief', items: [['', 'Jenever', '4,50'], ['', 'Port rood/wit', '4,50'], ['', 'Martini rood/wit', '4,50'], ['', 'Campari', '5,00']]},
    { t: 'Sterke dranken', items: [
      ['', 'Jenever oud of jong', '4,20'], ['', 'Vieux', '4,20'], ['', 'Amaretto', '5,00'], ['', 'Likeur 43', '6,00'], ['', 'Tia Maria', '6,00'],
      ['', 'D.O.M. Benedictine', '6,00'], ['', 'Cointreau', '6,00'], ['', 'Grand Marnier', '6,00'], ['', 'Pisang Ambon', '4,00'], ['', 'Baileys', '5,50'],
      ['', 'Safari', '4,50'], ['', 'Passoã', '4,50'], ['', 'Malibu', '6,00'], ['', 'Sambuca', '6,00'], ['', 'Whisky', '7,00'], ['', 'Vodka', '5,00'],
      ['', 'Bacardi', '5,30'], ['', 'Limoncello', '4,50'], ['', 'Jägermeister', '4,50'], ['', 'Remy Martin', '9,00'], ['', 'Gin', '5,30']]}
  ]}
];
