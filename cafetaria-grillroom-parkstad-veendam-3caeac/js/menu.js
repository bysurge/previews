// Menukaart Cafetaria Grillroom De Parkstad, overgenomen van deparkstad.nl (nummers zoals op hun site).
// cols: kopjes voor twee prijskolommen; p: [kolom1, kolom2] (null = niet van toepassing).
window.PARKSTAD_MENU = [
  { id: 'snacks', name: 'Snacks', items: [
    [1,'Frikandel','2,40'],[2,'Frikandel Speciaal','2,95'],[3,'XXL Frikandel','4,50'],[4,'XXL Frikandel Speciaal','5,50'],
    [5,'Kipfrikandel','2,60'],[6,'Kipfrikandel Speciaal','3,25'],[7,'Berehap','3,25'],[8,'Trio','3,25'],
    [9,'Boerenbrok','3,25'],[10,'Braadworst','3,25'],[11,'Hete Donder','3,25'],[12,'Gehaktbal (uit jus)','4,50'],
    [13,'Halve Kip','7,95'],[14,'Kipburger','3,10'],[15,'Kipcorn','2,50'],[16,'Hamburger','3,10'],
    [17,'Hamburger uit eigen keuken','3,95'],[18,'Kaassoufflé','2,45'],[19,'Ham-kaassoufflé','2,45'],[20,'Varkensschnitzel','5,25'],
    [21,'Kipschnitzel','5,25'],[22,'Kikastick','3,50'],[23,'Kipsaté 3 stokjes','7,50'],[24,'Bamischijf','2,60'],
    [25,'Nasischijf','2,60'],[26,'Pikanto','3,15'],[27,'Mexicano','3,15'],[28,'Loempia','4,25'],
    [29,'Satérol','3,25'],[30,'Shoarmarol','3,25'],[31,'Smulrol','3,25'],[32,'Loempidel','3,25'],
    [33,'Shaslick','3,95'],[34,'Bitterballen 6 stuks','3,40'],[35,'Kipnuggets 6 stuks','3,40'],[36,'Kipfingers 6 stuks','3,40'],
    [37,"Mini Loempia's 6 stuks",'3,40'],[38,'Twijfelaar 8 stuks','6,50']
  ]},
  { id: 'kroketten', name: 'Kroketten', items: [
    [39,'Vleeskroket','2,40'],[40,'Goulashkroket','2,90'],[41,'Kalfskroket','2,90'],[42,'Satékroket','2,90'],
    [43,'Vegakroket','2,90'],[44,'Kwekkeboom kroket','2,90'],[45,'Kaaskroket','2,90'],[46,'Elite Rundvleeskroket','2,90'],
    [47,'Kipshoarma kroket','2,90']
  ]},
  { id: 'broodjes', name: 'Broodjes', items: [
    [48,'Broodje Hamburger','3,95'],[49,'Broodje Hamburger speciaal','4,50'],[50,'Broodje Hamburger uit eigen keuken','4,75'],
    [51,'Broodje Hamburger uit eigen keuken speciaal','5,25'],
    [52,'Broodje Joppieburger','4,75','sla, komkommer, boerenbrok, joppiesaus'],
    [53,'Broodje Kipburger','4,75','sla, komkommer, tomaat en wimpiesaus'],
    [54,'Broodje Kroket','3,25'],[55,'Broodje Frikandel','3,25'],[56,'Broodje Gehaktbal','5,35'],[57,'Broodje Kipcorn','3,35']
  ]},
  { id: 'vega', name: 'Vegetarisch', items: [
    [58,'Griekse Salade','5,50'],[59,'Eierbal Kerrie','3,40'],[60,'Bamischijf (pittig)','2,95'],[61,'Vegakroket','2,90'],
    [62,'Kaaskroket','2,90'],[63,'Kaassoufflé','2,45'],[64,"Mini Loempia's 6 stuks",'3,40']
  ]},
  { id: 'kids', name: 'Kindermenu', items: [
    [65,'Kids menu','7,95','met patat, drinken* en een verrassing, plus keuze uit: frikandel, kipnuggets, kipfingers, kaassoufflé of kroket. Met appelmoes of saus naar keuze. *Fristi, Chocomel, Capri-Sun of milkshake']
  ]},
  { id: 'overig', name: 'Drinken & ijs', items: [
    [66,'Frisdranken','vanaf 2,75'],[67,'Milkshake klein','3,00','diverse smaken'],[68,'Milkshake middel','3,50','diverse smaken'],
    [69,'Milkshake groot','4,00','diverse smaken'],[70,'Softijs','vanaf 1,50','diverse dip € 0,50'],[71,'Sundae','3,00','diverse smaken'],
    [72,'Appelmoes','1,25']
  ]},
  { id: 'doner', name: 'Kipdöner', cols: ['Normaal','Extra vlees'], items: [
    [73,'Broodje Kipdöner',['8,50','12,00']],
    [74,'Broodje Kipdöner Kaas',['10,00','13,50'],'met kaas'],
    [75,'Broodje Kipdöner Mix',['11,00','14,50'],'met paprika, champignons en uien'],
    [76,'Broodje Kipdöner Mix Kaas',['12,00','15,50'],'met paprika, champignons, uien en kaas'],
    [77,'Dürüm (wrap) Kipdöner',['8,50','12,00']],
    [78,'Dürüm (wrap) Kipdöner Kaas',['10,00','13,50'],'met kaas'],
    [79,'Dürüm (wrap) Kipdöner Mix',['11,00','14,50'],'met paprika, champignons en uien'],
    [80,'Dürüm (wrap) Kipdöner Mix Kaas',['12,00','15,50'],'met paprika, champignons, uien en kaas']
  ]},
  { id: 'shoarma', name: 'Shoarma', cols: ['Normaal','Extra vlees'], items: [
    [81,'Broodje Shoarma',['8,50','12,00']],
    [82,'Broodje Shoarma Kaas',['10,00','13,50'],'met kaas'],
    [83,'Broodje Shoarma Mix',['11,00','14,50'],'met paprika, champignons en uien'],
    [84,'Broodje Shoarma Mix Kaas',['12,00','15,50'],'met paprika, champignons, uien en kaas'],
    [85,'Dürüm (wrap) Shoarma',['8,50','12,00']],
    [86,'Dürüm (wrap) Shoarma Kaas',['10,00','13,50'],'met kaas'],
    [87,'Dürüm (wrap) Shoarma Mix',['11,00','14,50'],'met paprika, champignons en uien'],
    [88,'Dürüm (wrap) Shoarma Mix Kaas',['12,00','15,50'],'met paprika, champignons, uien en kaas']
  ]},
  { id: 'kapsalon', name: 'Kapsalon', cols: ['Normaal','Groot'], items: [
    [89,'Kapsalon Kipdöner',['11,00','13,50'],'patat, kipdöner, salade, kaas'],
    [90,'Kapsalon Shoarma',['11,00','13,50'],'patat, shoarma, salade, kaas'],
    [91,'Patatje Parkstad',['11,00','13,50'],'patat, shoarma met speciaalsaus']
  ]},
  { id: 'schotels', name: 'Schotels', cols: ['Normaal','Extra vlees'], note: 'Schotels worden geserveerd met aardappelschijfjes of patat, salade, slaatje en saus naar keuze.', items: [
    [92,'Kipdöner',['14,50','18,00']],
    [93,'Kipdöner Kaas',['16,00','19,50'],'met kaas'],
    [94,'Kipdöner Mix',['16,50','20,00'],'met paprika, champignons en uien'],
    [95,'Kipdöner Mix Kaas',['17,50','21,00'],'met paprika, champignons, uien en kaas'],
    [96,'Shoarma',['14,50','18,00']],
    [97,'Shoarma Kaas',['16,00','19,50'],'met kaas'],
    [98,'Shoarma Mix',['16,50','20,00'],'met paprika, champignons en uien'],
    [99,'Shoarma Mix Kaas',['17,50','21,00'],'met paprika, champignons, uien en kaas']
  ]},
  { id: 'tostis', name: "Tosti's", cols: ['Pita','Turks brood'], items: [
    [100,'Met kaas',['3,50','6,50']],
    [101,'Met kaas & Turkse worst',['4,00','7,00']],
    [102,'Met kaas & Turkse worst & shoarma',[null,'11,50']],
    [103,'Met kaas & Turkse worst & groente',['4,50','7,50']]
  ]},
  { id: 'lahmacun', name: 'Lahmacun', items: [
    [104,'Met kaas','8,00'],[105,'Met groente','6,00'],[106,'Met kaas & Turkse worst','9,25'],[107,'Met kipdöner','11,50'],
    [108,'Met kipdöner & kaas','12,50'],[109,'Met shoarma','11,50'],[110,'Met shoarma & kaas','12,50']
  ]},
  { id: 'patat', name: 'Patat', cols: ['Normaal','Groot'], note: 'Patat of raspatat.', items: [
    [111,'Kinderpatat',['2,85',null]],
    [112,'Patat zonder',['3,00','4,00']],
    [113,'Patat mayo',['3,35','4,20']],
    [114,'Patat curry/ketchup',['3,40','4,30']],
    [115,'Patat speciaal/joppie',['3,50','4,35']],
    [116,'Patat oorlog/pindasaus',['3,60','4,45']],
    [117,'Aardappelschijfjes',['3,60','4,45']],
    [118,'Gezinszak patat',['11,00',null]],
    [119,'Patat stoofvlees',['8,95',null]],
    [120,'Patat shoarma',['11,00','13,50']]
  ]},
  { id: 'menus', name: "Menu's", note: "Menu's worden geserveerd met aardappelschijfjes of patat, salade, slaatje en saus naar keuze.", items: [
    [121,'Frikandel menu (2 stuks)','11,00'],[122,'Kroket menu (2 stuks)','11,00'],[123,'Berehap menu','11,00'],
    [124,'Loempia menu','12,50'],[125,'Gehaktbal menu','12,50'],[126,'Shaslick menu (2 stuks)','12,50'],
    [127,'Halve kip menu','12,50'],[128,'Kipschnitzel menu','12,50'],[129,'Kipsaté menu','12,50'],[130,'Varkensschnitzel menu','12,50']
  ]}
];
