// Afhaalprijslijst Lung Fung, vanaf 1 december 2025. Nummers en prijzen exact zoals op hun PDF.
// Lijst: [nr, naam, prijs, omschrijving?]. Tabel: rijen {n, d?, c:[[nr,prijs]|null, ...]}.
window.KAART = [
 { g: 'Surinaams', items: [
  { t: 'Bruine nasi', tabel: true,
    note: 'Groot = grote bak nasi en kleine bak vlees. Super = grote bak nasi en grote bak vlees.',
    rows: [
     { n: 'Bruine nasi zonder vlees', c: [['69','4,50'],['70','6,50'],null] },
     { n: 'Bruine nasi met kip', d: 'kip bovenop de nasi', c: [['71','11,50'],['72','15,00'],['73','19,50']] },
     { n: 'Bruine nasi met moksie metie', d: 'vlees bovenop de nasi', c: [['74','13,50'],['75','18,00'],['76','21,50']] },
     { n: 'Bruine nasi met moksie metie varkensvlees', d: 'vlees bovenop de nasi', c: [['77','13,50'],['78','18,50'],['78s','21,50']] },
     { n: 'Bruine nasi met tja sieuw', c: [['79','13,50'],['80','18,50'],['81','21,50']] },
     { n: 'Bruine nasi met spek', c: [['82','14,00'],['83','19,00'],['84','22,00']] },
     { n: 'Bruine nasi met Chinese fa chong', c: [['85','15,00'],['86','19,50'],['87','22,00']] }
    ],
    extra: [
     ['88','Bruine nasi met garnalen','19,80','kleine bak nasi en kleine bak garnalen'],
     ['89','Bruine nasi met sate','12,00','grote bak nasi en drie stokjes kipsate']
    ] },
  { t: 'Bruine bami', tabel: true,
    note: 'Groot = grote bak bami en kleine bak vlees. Super = grote bak bami en grote bak vlees.',
    rows: [
     { n: 'Bruine bami zonder vlees', c: [['90','4,50'],['91','6,50'],null] },
     { n: 'Bruine bami met kip', d: 'kip bovenop de bami', c: [['92','11,50'],['93','15,00'],['94','19,50']] },
     { n: 'Bruine bami met moksie metie', c: [['95','13,50'],['96','18,00'],['97','21,50']] },
     { n: 'Bruine bami met moksie metie varkensvlees', c: [['98','13,50'],['99','18,50'],['100','21,50']] },
     { n: 'Bruine bami met tja sieuw', c: [['101','13,50'],['102','18,50'],['103','21,50']] },
     { n: 'Bruine bami met spek', c: [['104','14,00'],['105','18,50'],['106','22,00']] },
     { n: 'Bruine bami met Chinese fa chong', c: [['107','15,00'],['108','19,50'],['109','22,00']] }
    ],
    extra: [
     ['110','Bruine bami met garnalen','19,80','kleine bak bami en kleine bak garnalen'],
     ['111','Bruine bami met sate','12,00','grote bak bami en drie stokjes kipsate']
    ] },
  { t: 'Met rijst', items: [
     ['112','Moksie metie','14,00'], ['113','Moksie metie speciaal','18,00'],
     ['114','Moksie metie varkensvlees','14,00'], ['115','Moksie metie varkensvlees speciaal','18,00'],
     ['116',"Lo's agoe",'14,00','buikspek'], ['117',"Lo's agoe speciaal",'18,50','spek'],
     ['118','Tja sieuw','14,00','mager'], ['119','Tja sieuw speciaal','18,00'],
     ['120','Fa chong','15,00'], ['121','Fa chong speciaal','19,00'],
     ['122',"Lo's foroe",'13,50','geroosterde kip'], ['123',"Lo's foroe speciaal",'16,50','geroosterde kip']
  ] },
  { t: 'Specialiteiten', items: [
     ['124','Pom','16,00','Surinaamse ovenschotel van pomtayer met kip'],
     ['125','Surinaamse kip kerrie','16,00','kip kluiven met kousenband'],
     ['126','Gestoofd varkensvlees','16,50'],
     ['127','Bruine bonen met zoutvlees en kousenband','17,00'],
     ['128','Bruine bonen met kip en kousenband','16,00']
  ] },
  { t: 'Eend (doksie)', items: [
     ['129',"Lo's doksie",'19,00','geroosterde Peking eend'], ['130','Peper doksie','19,00'], ['131','Swa doksie','19,00']
  ] },
  { t: 'Roti', items: [ ['37','Roti kip','13,50','met bot'], ['38','Roti kipfilet','13,50'] ] },
  { t: 'Bara en roti-rol', items: [
     ['26','Bara kip kerrie','9,00'], ['27','Bara hete kip','9,00'], ['28','Bara bakkeljauw','9,50'], ['29','Bara tja sieuw','9,50'],
     ['30','Bara spek','9,50'], ['31','Bara moksie','10,00'], ['32','Bara zoutvlees','10,00'], ['33','Bara steak','10,00'],
     ['34','Roti rol met kip kerrie','9,00'], ['35','Roti rol met hete kip','9,00'], ['36','Roti rol met tempeh kousenband','9,00']
  ] },
  { t: 'Broodjes', items: [
     ['6','Broodje kip kerrie','4,80'], ['7','Broodje hete kip','4,80'], ['8','Broodje zoetzure kip','4,80'], ['9','Broodje geroosterde kip','5,00'],
     ['10','Broodje kip sate','4,80'], ['11','Broodje kippenlever','4,80'], ['12','Broodje tja sieuw','5,50'], ['13','Broodje gestoofd varken','5,00'],
     ['14','Broodje fa chong','5,50'], ['15',"Broodje lo's agoe",'5,50'], ['16','Broodje moksie','5,50'], ['17','Broodje diverse','5,50'],
     ['18','Broodje kerrie ei','4,80'], ['19','Broodje tahoe','4,80'], ['20','Broodje tempeh','4,80'], ['21','Broodje pom','5,00'],
     ['22','Broodje bakkeljauw','5,00'], ['23','Broodje zoutvlees','6,00'], ['24','Broodje steak','6,00'], ['25','Broodje garnalen kousenband','6,00']
  ] }
 ] },
 { g: 'Chinees', items: [
  { t: 'Nasi', note: 'Chinese witte nasi goreng.', items: [
     ['135','Nasi goreng zonder vlees, klein','4,50'], ['136','Nasi goreng zonder vlees, groot','6,50'],
     ['137','Nasi goreng','11,50','met kip en ei'], ['138','Nasi goreng groot','17,00'],
     ['139','Nasi goreng sate','16,50','met 3 stokjes sate'], ['140','Hongkong nasi','16,00'],
     ['141','Nasi goreng met gesneden kipfilet','16,50'], ['142','Nasi goreng met gesneden varkensvlees','16,50'],
     ['143','Nasi goreng met gesneden rundvlees','17,50'], ['145','Nasi goreng met zoetzure kip','16,00'],
     ['146','Nasi goreng met hete kip','16,00'], ['147','Nasi goreng met kip kerrie','16,00'], ['148','Nasi goreng met garnalen','19,00']
  ] },
  { t: 'Bami', note: 'Chinese witte bami goreng.', items: [
     ['149','Bami goreng zonder vlees, klein','4,50'], ['150','Bami goreng zonder vlees, groot','6,50'],
     ['151','Bami goreng','11,50','met kip en ei'], ['152','Bami goreng groot','17,00'],
     ['153','Bami goreng sate','16,50','met 3 stokjes sate'], ['154','Bami goreng met gesneden kipfilet','16,50'],
     ['155','Bami goreng met gesneden varkensvlees','16,50'], ['156','Bami goreng met gesneden rundvlees','17,50'],
     ['158','Bami goreng met zoetzure kip','16,00'], ['159','Bami goreng met hete kip','16,00'],
     ['160','Bami goreng met kip kerrie','16,00'], ['161','Bami goreng met garnalen','19,00']
  ] },
  { t: 'Mihoen', note: 'Chinese vermicelli.', items: [
     ['162','Mihoen zonder vlees, klein','7,00'], ['163','Mihoen zonder vlees, groot','12,00'],
     ['164','Mihoen goreng met gesneden kipfilet','16,50'], ['168','Mihoen goreng met tja sieuw','16,50'],
     ['169','Mihoen goreng met gesneden rundvlees','17,50'], ['171','Mihoen goreng Singapore','17,00'], ['172','Mihoen goreng met garnalen','19,00']
  ] },
  { t: 'Kip', items: [
     ['173','Kipfilet met cashewnoten','17,50'], ['174','Koe low kai','16,00'], ['175','Chiew yim kai','16,00','met been'],
     ['176','Foe yong hai','16,00','met kipfilet'], ['177','Kipfilet met szechuan saus','16,00'], ['178','Kipfilet met kerriesaus','16,00'],
     ['179','Kipfilet met zoetzure saus','16,00'], ['180','Kipfilet met kong-po saus','16,00'], ['181','Kipfilet met zwarte bonensaus','16,00'],
     ['184','Kipfilet met tjap tjop','16,00'], ['186','Kipfilet met broccoli','16,00']
  ] },
  { t: 'Garnalen', items: [
     ['198','Chiew yim ha','19,00'], ['199','Garnalen met szechuan saus','19,00'], ['200','Garnalen met kerriesaus','19,00'],
     ['203','Garnalen met zoetzure saus','19,00'], ['206','Garnalen met tjap tjop','19,00'], ['207','Garnalen met ananas','19,00'], ['208','Garnalen met broccoli','19,00']
  ] },
  { t: 'Rundvlees', items: [
     ['210','Rundvlees met szechuan saus','18,00'], ['211','Rundvlees met kerriesaus','18,00'], ['213','Rundvlees met zwarte bonensaus','18,00'],
     ['214','Rundvlees met tomaten','18,00'], ['217','Rundvlees met tjap tjop','18,00'], ['219','Rundvlees met broccoli','18,00']
  ] },
  { t: 'Varkensvlees', items: [ ['221','Babi pangang spek','18,00'], ['222','Babi pangang mager','18,00'] ] },
  { t: 'Wok', note: 'Kies uw basis: witte rijst, nasi of bami. Kies uw saus: zoetzuur, pikant, kerrie, oestersaus, teriyaki of satesaus.', items: [
     ['58','Wok kipfilet','11,00'], ['59','Wok varkensvlees','12,00'], ['60','Wok rundvlees','12,50'],
     ['61','Wok garnalen','12,50'], ['62','Wok vegetarisch','11,00'], ['63','Wok vis','11,00']
  ] },
  { t: 'Noodle soep', note: 'Met ramen (mihoen: 3,00 extra). Soep naar keuze: basis of pittig.', items: [
     ['64','Geroosterde kip','11,00'], ['65','Rundvlees','12,50'], ['66','Tja sieuw','11,50'], ['67','Wonton','11,00'], ['68','Tahoe met ei','11,00']
  ] },
  { t: 'Vegetarisch', items: [
     ['237','Tjap tjoy met tahoe','15,00'], ['238','Tjap tjoy met tahoe en kerrie','15,00'], ['239','Tjap tjoy met tahoe en zwarte bonensaus','15,00'],
     ['241','Vegetarische foe yong hai','15,00'], ['242','Vegetarische roti','12,00'], ['243','Gado gado','12,00'],
     ['244','Vege szechuan beef','15,00'], ['245','Bruine bonen met kousenband','13,00']
  ] }
 ] },
 { g: 'Soep, hapjes en erbij', items: [
  { t: 'Soepen', items: [ ['1','Wonton soep','7,00'], ['2','Saoto soep','8,00'], ['3','Kippen soep','7,00'], ['4','Groenten soep','7,00'], ['5','Tomaten soep','7,00'] ] },
  { t: 'Kleine hapjes', items: [
     ['39','Mini loempia','5,00','10 stuks'], ['40','Kip loempia','5,00'], ['41','Telo','4,00'], ['42','Telo met bakkeljauw','8,00'],
     ['43','Baka bana','3,20'], ['44','Bara gekruid','4,00'], ['45','Bara mild','3,50'], ['46','Sate ajam','5,50'],
     ['47','Bloedworst','3,00'], ['48','Kip vleesworst','3,50'], ['49','Frita','3,50'], ['50','Spekkoek','3,20'],
     ['51','Kroepoek klein','3,00'], ['52','Kroepoek lang','3,50'], ['53','Pastei','3,50'], ['54','Maizena custard koekjes','3,00'],
     ['55','Spareribs','8,00'], ['56','Kippenbout','4,50']
  ] },
  { t: 'Bijgerecht', items: [ ['246','Witte rijst, klein','3,00'], ['247','Witte rijst, groot','5,00'] ] }
 ] }
];
