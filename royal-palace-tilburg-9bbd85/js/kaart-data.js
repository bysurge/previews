// Kaarten van Royal Palace, overgetypt uit de menukaart-afbeeldingen op royalpalacetilburg.nl (22-11-2026).
// [nummer, naam, omschrijving, prijs] ; prijs null = onderdeel van all you can eat.
window.KAART = {
  ayce: [
    { cat: 'Nigiri', items: [
      ['1','Sake','zalm'],['2','Maguro','tonijn'],['3','Tamago','zoete omelet'],['4','Ebi','garnaal'],['5','Ama Ebi','zoete garnaal'],['6','Kani','krab'],['7','Tako','octopus'],['8','Inari','tofu'],['9','Avocado',''],['10','Unagi','paling'],['11','Flamed Sake','geflambeerde zalm'],['12','Flamed Maguro','tonijn'],['13','Flamed Ribeye',''],['14','Flamed Ebi Cheese','garnaal kaas'],['15','Flamed Bacon Cheese','spek kaas'],['16','Flamed Tamago','omelet'],['17','Flamed Duck','eendenborstfilet'],['18','Strawberry','aardbei'],['19','Kiwi','']
    ]},
    { cat: 'Gunkan', items: [
      ['20','Spicy Tuna Gunkan','pittige tonijn'],['21','Wakame Gunkan','zeewier'],['22','Kani & Corn Gunkan','krab en mais'],['23','Tobiko Gunkan','viskuit'],['24','Spicy Salmon Gunkan','pittige zalm']
    ]},
    { cat: 'Maki', items: [
      ['25','Kappa','komkommer'],['26','Sake','zalm'],['27','Maguro','tonijn'],['28','Kani','krab'],['29','Avocado',''],['30','California','viskuit'],['31','Spicy Tuna','pittige tonijn'],['32','Gegrilde Sake','gegrilde zalm met avocado'],['33','Sake Sesam','rauwe zalm met avocado'],['34','Ebi Tempura','krokante garnalen'],['35','Spicy Chicken','krokante pikante kip'],['36','Crispy Roll','krokante rol'],['37','Banana Roll','banaan']
    ]},
    { cat: 'Temaki', items: [
      ['38','Sake Temaki','zalm handrol'],['39','Maguro Temaki','tonijn handrol'],['40','Kani Temaki','krab handrol'],['41','Avocado Temaki',''],['42','Unagi Temaki','paling handrol'],['43','Tori Temaki','kip handrol']
    ]},
    { cat: 'Soep', items: [
      ['44','Chinese tomatensoep',''],['45','Chinese kippensoep',''],['46','Chinese wan tan soep',''],['47','Misosoep met tofu',''],['48','Thaise Tom Yam soep','pikante kruidige kippensoep'],['49','Ramen','Japanse noodlesoep']
    ]},
    { cat: 'Salades', items: [
      ['50','Asia Carpaccio','rauwe biefstuk met sojadressing'],['51','Sake Sarada','zalmsalade'],['52','Wakame Sarada','zeewiersalade'],['53','Ebi Sarada','garnalensalade'],['54','Tori Sarada','kipsalade'],['55','Kani Sarada','krabsalade'],['56','Aigamo','eendenborstfilet salade'],['57','Kyuri Tsukemono','zure komkommer'],['58','Thai Shrimp Sarada','Thaise garnalensalade'],['59','Thai Beef Sarada','biefsalade'],['60','Edamame','sojabonen']
    ]},
    { cat: 'Gefrituurd', items: [
      ['61','Debasaki','gefrituurde kippenvleugels'],['62','Gefrituurde vis','met cocktailsaus'],['63','Gefrituurde Suzuki','witvis in zout en peper'],['64','Kipschnitzel',''],['65','Banana Katsu','gefrituurde bananen'],['66','Sweet Buns','zoete broodjes'],['67','Frites',''],['68','Frikandel',''],['69','Kroket',''],['70','Kipnuggets',''],['71','Ebi Fry','gefrituurde garnalen'],['72','Ika Ringu','inktvisringen'],['73','Spareribs',''],['74','Chinese pangsit goreng',''],['75','Siu Mai','varkensvleesballetjes'],['76','Harumaki','mini loempia'],['77','Potato Balls','aardappelkoekjes']
    ]},
    { cat: 'Rijst & noodles', items: [
      ['78','Yaki Meshi','Japanse gebakken rijst'],['79','Yasi Udon','Japanse gebakken udon'],['80','Nasi',''],['81','Bami',''],['82','Mihoen',''],['83','Witte rijst','']
    ]},
    { cat: 'Hoofdgerechten', items: [
      ['84','Yaki Mushroom','champignon'],['85','Yasai Mori','courgette'],['86','Yaki Yasai','groentenmix'],['87','Varkenshaas','knoflooksaus'],['88','Tongfilet','sesamkipjapsaus'],['89','Kip met kerriesaus','kip curry'],['90','Babi pangang',''],['91','Babi pangang spek',''],['92','Foe yong hai',''],['93','Saté','kipsaté met pindasaus'],['94','Indisch rundvlees','pikante saus'],['95','Indisch rundvlees','ketjapsaus']
    ]},
    { cat: 'Teppan yaki', items: [
      ['96','Yakitori','kipspies'],['97','Sake Teriyaki','gegrilde zalm'],['98','Gegrilde witvis',''],['99','Koreaanse kip','pikant gekruide kipfilet'],['100','Koreaanse bacon','pikant gekruid spek'],['101','Gyoza','kip dumplings']
    ]},
    { cat: 'Dinner only', items: [
      ['102',"Chef's Choice",'gerecht van de chef'],['103','Sake Sashimi',''],['104','Red Sake Cheese','zalm en roomkaas'],['105','Spicy Beef','biefstuk en avocado'],['106','Sake Tobiko','zalm en viskuit'],['107','Unagi Roll','paling'],['108','Sake Cheese','zalm en kaas'],['109','Mango Maguro','mango en tonijn'],['110','Ebi Tempura','gefrituurde garnalen'],['111','Yasai Tempura','gefrituurde groenten'],['112','Ha Kau','garnalen dim sum'],['113','Teppanyaki Gyu Niku','biefstuk met bakplaat'],['114','Ossenhaas in oestersaus',''],['115','Kanguru','met zwarte pepersaus'],['116','Peking eend','met ananas'],['117','Thaise ossenhaas','rode kokossaus'],['118','Gyuniku','ossenhaas'],['119','Usuyaki','biefrol'],['120','Ebi Yaki','gegrilde garnalen'],['121','Thaise inktvis',''],['122','Thaise garnalen',''],['123','Thaise gegrilde kabeljauw','in chilisaus'],['124','Ebi Onion','garnalen met uien en bonen'],['125','Yaki Gyu Niku','ossenhaasspies'],['126','Kohitsuji Kushi','lamsspies'],['127','Tsui Yin Ha','speciaal gekruide garnalen'],['128','Ika','gegrilde inktvis'],['129','Murukai','mosselen'],['130','Kohitsuji','lamskotelet']
    ]},
    { cat: 'Side order (met toeslag)', items: [
      ['131','Maguro Sashimi','tonijn sashimi, 4 stuks','+ 2.50'],['132','Maguro Tataki','licht gegrilde tonijn, 4 stuks','+ 3.00'],['133','Sashimi Mix','10 stuks','+ 6.00'],['134','Rainbow Roll','regenboogrol','+ 2.50'],['135','Ebi Avocado Roll','garnalen-avocadorol','+ 3.00'],['136','Hotategai','coquille','+ 2.00']
    ]}
  ],
  sushi: [
    { cat: 'Sushi boxen', items: [
      ['A','Nigiri Box A, 8 stuks','4 tonijn nigiri, 4 zalm nigiri','11.00'],
      ['B','Sushi Mix B, 18 stuks','6 krab maki, 6 zalm maki, 6 komkommer maki','9.50'],
      ['C','Sushi Mix C, 15 stuks','3 zalm sashimi, 3 zalm maki, 3 zalm nigiri, 3 flamed zalm nigiri, 3 sake sesam maki','16.50'],
      ['D','Sushi Mix D, 15 stuks','3 tonijn sashimi, 3 tonijn maki, 3 tonijn nigiri, 3 flamed tonijn nigiri, 3 spicy tuna maki','17.50'],
      ['E','Sushi Mix E Veggie, 20 stuks','2 tamago nigiri, 2 avocado nigiri, 2 inari nigiri, 2 wakame gunkan, 12 avocado maki','19.50'],
      ['F','Sushi Mix F, 16 stuks','8 krokante pikante kip, 8 krokante garnalen','19.50'],
      ['G','Sushi Mix G, 34 stuks','3 zalm maki, 3 zalm sashimi, 3 komkommer maki, 3 California maki, 3 gegrilde sake maki, 3 sake sesam maki, 3 red sake cheese maki, 2 unagi nigiri, 2 tonijn nigiri, 2 zalm nigiri','36.50']
    ]},
    { cat: 'Nigiri (2 stuks)', items: [
      ['1','Sake','zalm','3.60'],['2','Maguro','tonijn','3.90'],['3','Tamago','zoete omelet','3.80'],['4','Ebi','garnaal','3.80'],['5','Ama Ebi','zoete garnaal','3.90'],['6','Kani','krab','3.80'],['9','Avocado','','3.80'],['10','Unagi','paling','4.10'],['11','Flamed Sake','','4.10'],['12','Flamed Maguro','','4.10'],['13','Flamed Ribeye','','4.10'],['14','Flamed Ebi Cheese','','4.10'],['15','Flamed Bacon Cheese','','4.10'],['16','Flamed Tamago','','4.10'],['17','Flamed Duck','','4.10'],['18','Strawberry','aardbei','3.80'],['19','Kiwi','','3.80']
    ]},
    { cat: 'Gunkan', items: [
      ['20','Spicy Tuna Gunkan','','2.30'],['21','Wakame Gunkan','','2.30'],['22','Kani & Corn Gunkan','','2.30'],['23','Tobiko Gunkan','','2.30'],['24','Spicy Salmon Gunkan','','2.30']
    ]},
    { cat: 'Maki (6 stuks)', items: [
      ['25','Kappa','komkommer','4.50'],['26','Sake','zalm','4.70'],['27','Maguro','tonijn','4.70'],['28','Kani','krab','4.50'],['29','Avocado','','4.50']
    ]},
    { cat: 'Speciale maki (3 of 8 stuks)', items: [
      ['30','California','viskuit','4.00 / 9.00'],['31','Spicy Tuna','','4.00 / 9.50'],['32','Gegrilde Sake','','4.00 / 9.50'],['33','Sake Sesam','','4.00 / 9.50'],['34','Red Sake Cheese','','4.00 / 9.50'],['35','Spicy Beef','','4.50 / 10.00'],['36','Banana Roll','','3.50 / 8.00'],['37','Unagi Roll','','4.50 / 13.00'],['38','Sake Cheese','','4.50 / 13.00'],['38a','Mango Maguro','','4.50 / 13.00'],['39','Ebi Tempura','','4.80 / 11.50'],['40','Spicy Chicken','','4.50 / 11.50'],['41','Crispy Roll','','4.50 / 11.00'],['42','Rainbow Roll','','5.50 / 13.00'],['43','Ebi Avocado Roll','','5.00 / 14.00'],['43a','Sake Tobiko','3 stuks','5.50']
    ]},
    { cat: 'Sashimi', items: [
      ['44','Sake Sashimi','rauwe zalm, 5 stuks','6.50'],['45','Maguro Sashimi','rauwe tonijn, 5 stuks','7.50'],['45a','Maguro Tataki','licht gegrilde tonijn, 5 stuks','8.00']
    ]},
    { cat: 'Temaki', items: [
      ['46','Sake Temaki','','3.50'],['47','Maguro Temaki','','3.90'],['48','Kani Temaki','','3.50'],['49','Avocado Temaki','','3.50'],['50','Unagi Temaki','','3.90'],['51','Tori Temaki','','3.90']
    ]},
    { cat: 'Poke bowl', note: 'Met rijst, sojabonen, avocado, zeewier, mais en dressing.', items: [
      ['60','Pokebowl Zalm','','11.50'],['61','Pokebowl Tonijn','','11.50'],['62','Pokebowl Garnalen','','12.00'],['63','Pokebowl Krokante Pikante Kip','','11.50'],['64','Pokebowl Avocado','','9.50']
    ]},
    { cat: 'Salades & groenten', items: [
      ['65','Sake Sarada','zalmsalade','4.80'],['66','Wakame Sarada','zeewiersalade','4.80'],['67','Ebi Sarada','garnalensalade','4.80'],['68','Tori Sarada','kipsalade','4.80'],['69','Thai Shrimp Sarada','garnalen, 8 stuks','10.80'],['70','Thai Beef Sarada','biefsalade','9.30'],['71','Kyuri Tsukemono','zure komkommer','4.50'],['72','Edamame','sojabonen','4.50']
    ]},
    { cat: 'Gebakken udon & rijst', items: [
      ['73','Japanse Ebi Udon Noodles','','12.50'],['74','Sake Teriyaki Udon Noodles','','12.50'],['75','Kip Teriyaki Udon Noodles','','12.50'],['76','Ossenhaas Udon Noodles','','12.50'],['77','Veggie Udon Noodles','','9.00'],['78','Japanse gebakken rijst','','10.00']
    ]},
    { cat: 'Warme gerechten', items: [
      ['79','Yaki Mushroom','champignon','6.50'],['80','Yasai Mori','courgette','6.50'],['81','Yakitori','kipspies, 4 stuks','6.90'],['82','Yaki Gyu Niku','ossenhaasspies, 4 stuks','7.10'],['83','Kohitsuji Kushi','lamsspies, 4 stuks','7.10'],['84','Sake Teriyaki','gegrilde zalm, 2 stuks','6.00'],['85','Gegrilde witvis','2 stuks','6.00'],['86','Gyoza','kip dumplings, 6 stuks','7.00'],['87','Gyuniku','gegrilde ossenhaas','10.50'],['88','Usuyaki','biefrol, 4 stuks','7.50'],['89','Kohitsuji','lamskotelet, 2 stuks','8.00'],['90','Debasaki','gefrituurde kippenvleugels, 4 stuks','4.50'],['91','Sweet Buns','zoete broodjes, 2 stuks','4.00'],['92','Kipnuggets','6 stuks','4.00'],['93','Ebi Fry','gefrituurde garnalen, 4 stuks','6.50'],['94','Ika Ringu','inktvisringen, 3 stuks','4.50'],['95','Siu Mai','varkensvleesballetjes, 4 stuks','5.50'],['96','Ebi Tempura','gefrituurde garnalen, 4 stuks','8.00'],['97','Harumaki','mini loempia, 8 stuks','4.50']
    ]}
  ],
  chinees: [
    { cat: 'Soepen', items: [
      ['101','Kippensoep','','4.50'],['102','Tomatensoep','','4.50'],['103','Haaienvinnensoep','','4.50'],['104','Champignonsoep','','4.50'],['106','Wan tan soep','','6.50'],['107','Soep "Royal Palace"','pikant','6.50']
    ]},
    { cat: 'Voor- en bijgerechten', items: [
      ['111','Kroepoek','','3.90'],['112','Loempia','ham','5.20'],['113','Saté babi','varkensvlees, 4 stokjes','6.90'],['114','Saté ajam','kip, 4 stokjes','6.90'],['115','Saté oedang','garnalen, 4 stokjes','9.50'],['116','Pisang goreng','6 stuks','6.20'],['117','Chinese pangsit goreng','stukjes vlees in krokant deeg met zoetzure saus','6.20'],['118','Chinese mini loempia','8 stuks','4.80'],['119','Chinese kerriekoekjes','8 stuks','4.80'],['120','Portie witte rijst','','3.90'],['121','Portie satésaus','','3.70'],['122','Portie babi pangang saus','','3.70'],['123','Portie patates frites','','3.90'],['124','Portie atjar','zoetzure groenten','3.90'],['126','Kiploempia','','6.20'],['130','Dim sum','','8.20'],['131a','Loempia "Royal Palace"','met rundvlees en pikante saus','8.10'],['131b','Loempia speciaal','2 stokjes saté','8.10']
    ]},
    { cat: 'Nasi', items: [
      ['302','Nasi goreng','','7.20'],['303','Nasi speciaal','kip/saté','11.00'],['304','Nasi met saté','3 stokjes','11.70'],['305','Nasi met varkensvlees en groenten','','11.50'],['306','Nasi met kip en groenten','','11.50'],['307','Nasi met biefstuk en groenten','','15.50'],['308','Nasi met garnalen en groenten','','18.90'],['311','Nasi compleet','met koe lo yuk, babi pangang, 2 stokjes saté','16.90'],['312','Nasi "Royal Palace"','met koe lo yuk, babi pangang, tjap tjoy, 2 st. saté en ebi fry','19.90'],['313','Yong Chow Fan','','17.00']
    ]},
    { cat: 'Bami', items: [
      ['402','Bami goreng','','7.20'],['403','Bami speciaal','kip/saté','11.00'],['404','Bami met saté','3 stokjes','11.70'],['406','Bami met varkensvlees en groenten','','11.50'],['407','Bami met kip en groenten','','11.50'],['408','Bami met biefstuk en groenten','','15.50'],['409','Bami met garnalen en groenten','','18.90'],['411','Bami compleet','met koe lo yuk, babi pangang, 2 st. saté','16.90'],['412','Bami "Royal Palace"','met koe lo yuk, babi pangang, tjap tjoy, 2 st. saté en ebi fry','19.90']
    ]},
    { cat: 'Foe yong hai', note: 'Omeletgerechten, met witte rijst.', items: [
      ['501','Met vlees','','13.50'],['502','Met kip','','13.50'],['503','Met garnalen','','18.70'],['505','Met biefstuk','','15.40'],['506','"Royal Palace"','met garnalen, kip en vlees','16.40']
    ]},
    { cat: 'Tjap tjoy', note: 'Groentegerechten, met witte rijst.', items: [
      ['521','Met vlees','','13.50'],['522','Met kip','','13.50'],['523','Met garnalen','','18.70'],['525','Met biefstuk','','15.40'],['526','"Royal Palace"','met garnalen, kip en vlees','16.40']
    ]},
    { cat: 'Chinese bami', items: [
      ['541','Met vlees','','13.90'],['542','Met kip','','13.90'],['543','Met garnalen','','18.50'],['545','Met biefstuk','','15.90'],['546','Compleet','met koe lo yuk, babi pangang, 2 st. saté','19.90'],['547','"Royal Palace"','met koe lo yuk, babi pangang, tjap tjoy, 2 st. saté en ebi fry','21.90']
    ]},
    { cat: 'Mihoen', items: [
      ['561','Mihoen goreng met vlees','','13.90'],['562','Mihoen goreng met kip','','13.90'],['563','Mihoen goreng met garnalen','','18.50'],['565','Mihoen goreng met biefstuk','','15.90'],['566','Mihoen goreng "Singapore"','','16.20'],['567','Mihoen goreng compleet','','19.90'],['568','Mihoen goreng "Royal Palace"','','21.90'],['569','Thaise mihoen','cha sieuw, kleine garnalen en Thaise kerrie','17.00']
    ]},
    { cat: 'Vleesgerechten', note: 'Met rijst.', items: [
      ['601','Spareribs','','17.30'],['602','Babi pangang','','16.50'],['603','Babi ketjap','','16.50'],['604','Babi pangang speciaal mix','','16.50'],['605','Cha sieuw','gemarineerd en geroosterd varkensvlees naar origineel recept','17.10'],['606','Babi pangang spek','','17.30'],['607','Koe lo yuk','gebakken varkensvleesballetjes met zoetzure saus','15.50'],['608','Varkensvlees met kerriesaus','','13.90'],['609','Varkensvlees met champignons','','13.90'],['610','Varkensvlees met asperges','','13.90'],['611','Varkensvlees met babi pangang saus','','13.90'],['612','Varkensvlees met tausi saus','Chinese zwarte bonen en knoflook','13.90']
    ]},
    { cat: 'Kipgerechten', note: 'Met rijst.', items: [
      ['621','Kipbout met champignons','','13.50'],['622','Kipbout met kerriesaus','','13.50'],['623','Kipbout met pikante saus','','13.50'],['624','Ajam pangang','kip','14.90'],['625','Gesneden kip met champignons','','14.50'],['626','Gesneden kip met kerriesaus','','14.50'],['628','Gesneden kip met babi pangang saus','','14.50'],['630','Ajam Malakka','kip, pikant','14.50'],['631','Koe lo kai','kipballetjes in zoetzure saus','15.50'],['633','Gesneden kip met ananas','','14.50'],['634','Gesneden kip met zwarte bonensaus','','14.50']
    ]},
    { cat: 'Biefstukgerechten', note: 'Biefstuk van de haas, met rijst.', items: [
      ['641','Met champignons','','16.90'],['642','Met kerriesaus','','16.90'],['643','Met paprika en tausi saus','','16.90'],['644','Met ananas en zoetzure saus','','16.90'],['645','Met Chinese champignons en oestersaus','','16.90'],['651','Met broccoli','','17.30']
    ]},
    { cat: 'Vis, garnalen & inktvis', note: 'Met rijst.', items: [
      ['702','Tongfilet met Chinese champignons','','18.80'],['703','Tongfilet met "picasso"','diverse vruchten','18.80'],['704','Chinese garnalen met champignons','','18.80'],['705','Chinese garnalen met kerriesaus','','18.80'],['706','Chinese garnalen met babi pangang saus','','18.80'],['707','Chinese garnalen met asperges','','18.80'],['709','Koe lo ha','gepaneerde garnalen en zoetzure saus','18.80'],['710','Ha lok','gepelde garnalen en oestersaus','20.80'],['711','Gebakken inktvis in pikante saus','','18.50']
    ]},
    { cat: 'Chinese specialiteiten', note: 'Met rijst. Szechuan is licht pikant van smaak.', items: [
      ['721','Szechuan Kai','kipfilet in Szechuan saus','15.50'],['722','Szechuan Yuk','varkenshaas in Szechuan saus','15.50'],['723','Szechuan Ngauw','biefstuk in Szechuan saus','17.90'],['724','Szechuan Ha','garnalen in Szechuan saus','20.80'],['725','Tsui Yin Kai','speciaal gekruide kipfilet met diverse groenten','15.80'],['726','Tsui Yin Yul','speciaal gekruide varkenshaas met diverse groenten','15.80'],['727','Tsui Yin Ngauw','speciaal gekruide biefstuk van de haas met diverse groenten','18.10'],['728','Tsui Yin Ha','speciaal gekruide Chinese garnalen met diverse groenten','21.80'],['729','Tsui Yin Yaw','speciaal gekruide inktvis met diverse groenten','18.50'],['731','Peking eend met ananas','','19.20'],['732','Chinese seizoensgroenten met kip','','16.30'],['733','Broccoli met kip','','16.30'],['756','Ma Po Tau Fu','','15.30']
    ]},
    { cat: 'Vegetarisch', note: 'Met rijst.', items: [
      ['751','Foe yong hai','','10.50'],['752','Tjap tjoy','','10.50'],['753','Mihoen met groenten','','11.50'],['754','Gado gado','groenten, satésaus en kroepoek','10.50'],['755','Chinese bami met groenten','','11.50']
    ]},
    { cat: 'Indische schotels', items: [
      ['761','Nasi rames','','12.20'],['762','Nasi rames speciaal','met kip en saté','15.80'],['763','Bami rames','','12.20'],['764','Bami rames speciaal','met kip en saté','15.80'],['765','Nasi "Moksi Metik"','rijst met spek, ajam pangang, cha sieuw en ketjapsaus','19.50'],['766','Indisch rundvlees en ketjapsaus','','18.50'],['767','Indisch rundvlees en pikante saus','','18.50']
    ]},
    { cat: 'Rijsttafels', note: 'Met rijst.', items: [
      ['801','Indische rijsttafel, 1 persoon','daging roedjak, daging smoor, pisang goreng, gado gado, kipsaté, Indische groente, spiegelei, champignons, kippenbout','22.50'],
      ['802','Indische rijsttafel, 2 personen','alle gerechten voor één persoon + spareribs en babi pangang met ananas en kroepoek','41.50'],
      ['803','Chinees-Indische rijsttafel, 2-3 personen','kippen- of tomatensoep, kroepoek, atjar, babi pangang, koe lo yuk, foe yong hai, tjap tjoy, gado gado, pisang goreng, daging roedjak, daging smoor en 2 st. saté','51.50'],
      ['804','Chinese rijsttafel, 1 persoon','kippen- of tomatensoep, mini loempia, ebi fry, babi pangang, koe lo yuk, foe yong hai, tjap tjoy met kip','24.50'],
      ['805','Chinese rijsttafel, 2 personen','kippen- of tomatensoep, mini loempia, ebi fry, babi pangang, koe lo yuk, foe yong hai, tjap tjoy met kip','46.50'],
      ['807','Thaise rijsttafel, 2 personen','mie krop (krokante mihoen, vlees en garnalen), kau kiap (gebakken garnalenmeel), ken masman (rundvlees in Thaise saus en gemengde salade), phat prik satoh (speciaal gekruide tongfilet), keng kai (kip in kerriesaus), kei phat prik (pikant kippenvlees), phat prak (warme gemengde groenten), phat pria oewan kai (kip in zoetzure saus), moe pha loo (speciaal gekruide garnalen), phat kung (groenten en garnalen), moe saté (stokjes geroosterd kippenvlees)','55.00']
    ]},
    { cat: 'Kantonese specialiteiten', note: 'Met rijst.', items: [
      ['901','Sang Kwak','gebakken tongfilet met krab, kleine garnalen in pikante tomatensaus','21.50'],['902','Shun Zhi Yoek','licht gepaneerde varkenshaas in boter- en knoflooksaus','18.00'],['903','Tan Chu Yoek','licht gepaneerde varkenshaas in verse vruchtensaus','16.40'],['904','Mi Tjan Kei','gefrituurde kipfilet met ananas, paprika in zoete pikante tomatensaus','17.00'],['905','Shiu Zhi Kei','kipfilet in boter- en knoflooksaus','18.00'],['907','Siuwhin Ngau','ossenhaas met groenten in rijstwijnsaus','18.70'],['908','Zhi Man Yu','licht gepaneerde tongfilet met sesam in ketjapsaus','19.40'],['909','Tan Chu Yu','licht gepaneerde tongfilet in verse vruchtensaus','19.40'],['910','Tjap Woo Tjoy','Kantonese tjap tjoy met Chinese garnalen en kipfilet','18.70'],['911','Shun Zhi Gah','gebakken grote Chinese garnalen in boter-knoflooksaus','20.70'],['912','Hoi Sin Tjap Tjoy','groenten met gepaneerde tongfilet, Chinese garnalen en krab','20.40']
    ]},
    { cat: 'Szechuan specialiteiten', note: 'Met rijst.', items: [
      ['920','Yu Hsiang Yoek','varkensvlees met diverse groenten in Szechuan saus','16.40'],['921','Yu Hsiang Pai Kwak','spareribs met Yu Hsiang saus','16.60'],['922','Kei Ting','kipfilet met Chinese champignons, bamboe, paprika en nootjes in pittige gon-bao saus','17.40'],['923','Hui Guo Kei','kipfilet in licht gekruide sojasaus','17.40'],['924','Koreaanse kip','pikant gekruide kipfilet','18.40'],['925','Chei Pi Eend','Peking eend met chei pi saus','19.10'],['926','Chei Pi Ngau','ossenhaas in chei pi saus','19.10'],['927','Gon Bao Gah','Chinese garnalen in gon bao saus','21.00']
    ]},
    { cat: 'Thaise specialiteiten', note: 'Met rijst.', items: [
      ['930','Kaeng Chud Ma Kai','pikante kippensoep','7.50'],['931','Kung Tom Yam','pikante garnalensoep','8.40'],['932','Salade Yam Nua','Thaise rundvleessalade','11.50'],['933','Salade Gung','Thaise garnalensalade','13.00'],['934','Khau Put','op Thaise wijze gebakken rijst met verse ananas en garnalen','16.10'],['935','Spicy Garlic Chicken','in olie gebakken, pittig gemarineerde kipfilet','18.10'],['936','Poulet au Cari','Thaise kip met kerriesaus','18.10'],['937','Poulet au Lait de Coco','kipfilet in blanke kokossaus','18.10'],['938','Kaeng Phet Nuer','ossenhaas in een rode kokossaus','20.10'],['939','Nua au Coco','ossenhaas in een blanke kokossaus','20.10'],['940','Beef Panang','ossenhaas in panang curry met erwten en kokosmelk','20.10'],['941','Kaeng Khieu Wan Pet','','20.10'],['942','Kaeng Phet Kung','grote garnalen in rode kokossaus','21.60']
    ]},
    { cat: 'Mini porties met rijst', items: [
      ['950','Foe yong hai, tjap tjoy of koe lo yuk','','9.50'],['951','Babi pangang, kipfilet, biefstuk of garnalen','','10.50']
    ]}
  ]
};
