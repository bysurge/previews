/* Afhaalmenu (versie augustus 2025) en sushikaart van De Nieuwe Pauw, overgenomen uit hun eigen PDF's.
   Per regel: [nummer, naam, omschrijving, prijs] ; naam eindigt op " (V)" = vegetarisch */
window.PAUW_MENU = {
  chinees: [
    { t: 'Soepen', items: [
      ['1', 'Kippensoep', '', '5,00'], ['2', 'Haaienvinnensoep', '', '5,00'], ['3', 'Tomatensoep', '', '5,00'],
      ['4', 'Wan tan soep', '', '7,00'], ['5', 'Chilisoep', '', '7,00'], ['6', 'Soep de Pauw', 'met krab, kip, vlees en Chinese champignons', '7,00']]},
    { t: 'Voor- en bijgerechten', items: [
      ['7', 'Mini loempia\'s (V)', '8 stuks', '4,85'], ['8', 'Vietnamese loempia\'s', '3 stuks', '5,55'], ['9', 'Loempia speciaal', 'varkensvlees', '6,50'],
      ['9v', 'Vegetarische loempia speciaal (V)', '', '6,50'], ['10', 'Loempia de Pauw', 'met tsa sieuw', '10,50'], ['11', 'Kroepoek', '', '3,50'],
      ['11a', 'Cassave kroepoek', '', '3,50'], ['12', 'Pisang goreng (V)', '4 stuks banaan', '4,85'], ['13', 'Pangsit', '6 stuks', '5,45'],
      ['14', 'Saté ajam', '4 stokjes (kip)', '7,25'], ['15', 'Saté babi', '4 stokjes (varkensvlees)', '7,25'], ['16', 'Saté kambing', '3 stokjes (lamsvlees)', '10,25'],
      ['17', 'Spareribs', '1 rib (varken), te bestellen na 16:00 uur', '13,00'], ['18', 'Tempura garnalen', '4 stuks', '8,95'], ['18a', 'Atjar', '', '3,55'],
      ['22a', 'Friet', '', '3,90'], ['24a', 'Witte rijst', 'klein', '3,65'], ['25a', 'Saté saus', 'kleine beker', '3,50'], ['25s', 'Sambal beker', 'kleine beker', '4,35']]},
    { t: 'Nasi', items: [
      ['19', 'Nasi goreng', '', '7,65'], ['19v', 'Vegetarische nasi goreng (V)', '', '7,65'], ['20', 'Nasi speciaal', '1/4 kip en 1 stokje saté', '12,00'],
      ['21', 'Nasi de Pauw', 'saté, babi pangang, koe lou yuk en foe yong hai', '16,25'], ['22', 'Nasi de Pauw speciaal', 'saté, babi pangang, koe lou yuk, foe yong hai, 1/4 kip en pisang goreng', '18,25'],
      ['24', 'Nasi Singapore', 'met kerrie, tsa sieuw, garnalen en kip', '15,00'], ['25', 'Tjau fang', 'met tsa sieuw, garnalen en kip', '15,00'],
      ['26', 'Nasi Fine Eastern', 'bedekt met ossenhaas, garnalen, kip en paprika in tausi saus (in 1 bak)', '16,50'],
      ['27', 'Kai you fang', 'kipfilet champignons, babi pangang en saté', '15,50'], ['28', 'Foe you fang', 'foe yong hai, babi pangang en saté', '15,50'],
      ['29', 'Koe you fang', 'koe lou yuk, babi pangang en saté', '15,50'], ['30', 'Chop you fang', 'tjap tjoy, babi pangang en saté', '15,50'],
      ['31', 'So ya fang', '1/4 kip, gepaneerde garnalen, babi pangang en saté', '17,50']]},
    { t: 'Bami', items: [
      ['32', 'Bami goreng', '', '7,65'], ['32v', 'Vegetarische bami goreng (V)', '', '7,65'], ['33', 'Bami speciaal', '1/4 kip en 1 stokje saté', '12,00'],
      ['34', 'Bami de Pauw', 'saté, babi pangang, koe lou yuk en foe yong hai', '16,25'], ['35', 'Bami de Pauw speciaal', 'saté, babi pangang, koe lou yuk, foe yong hai, 1/4 kip en pisang goreng', '18,25'],
      ['37', 'Bami Singapore', 'krulbami met kerrie, tsa sieuw en garnalen', '15,00'], ['38', 'Tjau ming', 'krulbami met tsa sieuw, garnalen en kip', '15,00'],
      ['39', 'Bami Fine Eastern', 'bedekt met ossenhaas, garnalen, kip en paprika in tausi saus (in 1 bak)', '16,50'],
      ['40', 'Kai you ming', 'kipfilet champignons, babi pangang en saté', '15,50'], ['41', 'Foe you ming', 'foe yong hai, babi pangang en saté', '15,50'],
      ['42', 'Koe you ming', 'koe lou yuk, babi pangang en saté', '15,50'], ['43', 'Chop you ming', 'tjap tjoy, babi pangang en saté', '15,50'],
      ['44', 'So ya ming', '1/4 kip, gepaneerde garnalen, babi pangang en saté', '17,50'], ['45', 'Chinese krulbami met kipfilet', '', '14,00'],
      ['45v', 'Vegetarische Chinese krulbami (V)', '', '14,00'], ['46', 'Chinese krulbami met varkenshaas', '', '14,00']]},
    { t: 'Mihoen', items: [
      ['47', 'Mihoen met kipfilet', '', '12,50'], ['47v', 'Mihoen vegetarisch (V)', '', '12,50'], ['48', 'Mihoen met varkenshaas', '', '12,50'],
      ['49', 'Mihoen met grote garnalen', '', '17,50'], ['50', 'Mihoen de Pauw', 'saté, babi pangang, kou lou yuk en foe yong hai', '18,50'],
      ['51', 'Mihoen Fine Eastern', 'bedekt met ossenhaas, garnalen, kip en paprika in tausi saus (in 1 bak)', '17,50'], ['52', 'Mihoen Singapore', 'met kerrie, tsa sieuw en garnalen', '16,00']]},
    { t: 'Groenten', items: [
      ['53', 'Tjap tjoy met kipfilet', '', '12,50'], ['53v', 'Tjap tjoy vegetarisch (V)', '', '12,50'], ['54', 'Tjap tjoy met varkenshaas', '', '12,50'],
      ['55', 'Tjap tjoy met ossenhaas', '', '15,50'], ['56', 'Tjap tjoy met grote garnalen', '', '17,50'], ['57', 'Tjap tjoy compleet', 'met kipfilet, varkenshaas en ossenhaas', '15,50'],
      ['58', 'Tjap tjoy de Pauw', 'met saté, babi pangang, koe lou yuk, 1/4 kip en pisang goreng', '19,00'], ['59', 'Low han tsai (V)', 'diverse groenten met tofu', '15,00'],
      ['59a', 'Gewokte aardappeltjes (V)', '', '11,95'], ['60', 'Tofu pao', 'tofu met diverse groenten, vis en vlees', '17,00'], ['60a', 'Gewokte broccoli met knoflook (V)', '', '12,00']]},
    { t: 'Ei', items: [
      ['61', 'Foe yong hai met kipfilet', '', '12,50'], ['61v', 'Foe yong hai vegetarisch (V)', '', '12,50'], ['62', 'Foe yong hai met varkensvlees', '', '12,50'],
      ['63', 'Foe yong hai met garnalen', '', '17,50'], ['64', 'Foe yong hai de Pauw', 'saté, babi pangang, koe lou yuk, 1/4 kip en pisang goreng', '19,00']]},
    { t: 'Varkenshaas', items: [
      ['65', 'Babi pangang', '', '15,50'], ['66', 'Babi pangang in satésaus', '', '15,50'], ['67', 'Babi spek', 'krokant geroosterde buikspek', '16,00'],
      ['68', 'Babi ketjap', '', '15,50'], ['69', 'Babi ketjap de Pauw stijl', 'zacht gegaard varkensvlees', '17,50'], ['70', 'Koe lou yuk', 'bolletjes gepaneerd varkensvlees', '15,00'],
      ['71', 'Tsa sieuw met Bali saus', 'saus apart', '16,75'], ['72', 'Tsa sieuw met paprika in tausi saus', '', '16,75'], ['73', 'Varkenshaas met knoflooksaus', '', '15,50'],
      ['74', 'Varkenshaas met pikante saus', '', '15,50'], ['75', 'Varkenshaas met champignons', '', '15,50'], ['76', 'Varkenshaas met verse paprika', '', '15,50'],
      ['77', 'Varkenshaas met kerriesaus', '', '15,50'], ['78', 'Varkenshaas met ananas', '', '16,00'], ['79', 'Varkenshaas met tausi saus', '', '16,75']]},
    { t: 'Kip', items: [
      ['80', 'Ajam pangang', '', '15,50'], ['81', 'Ajam ketjap', '', '15,50'], ['82', 'Ajam Malakka', 'licht gepaneerd met ketjapsaus', '18,00'],
      ['83', 'Koe lou kai', 'bolletjes gepaneerde kipfilet', '15,50'], ['84', 'Lai zi kai', 'met zoetpittige sambalsaus', '16,25'], ['85', 'Kipfilet met oestersaus', '', '15,50'],
      ['86', 'Kipfilet met knoflooksaus', '', '15,50'], ['87', 'Kipfilet met pikante saus', '', '15,50'], ['88', 'Kipfilet met champignons', '', '15,50'],
      ['89', 'Kipfilet met verse paprika', '', '15,50'], ['90', 'Kipfilet met kerriesaus', '', '15,50'], ['91', 'Kipfilet met ananas', '', '16,00'], ['92', 'Kipfilet met tausi saus', '', '16,75']]},
    { t: 'Ossenhaas', items: [
      ['93', 'Szechuan how yuk', 'met uitjes en peper', '19,50'], ['94', 'Ossenhaas met broccoli', '', '19,00'], ['95', 'Ossenhaas met oestersaus', '', '18,50'],
      ['96', 'Ossenhaas met knoflooksaus', '', '18,50'], ['97', 'Ossenhaas met pikante saus', '', '18,50'], ['98', 'Ossenhaas met champignons', '', '18,50'],
      ['99', 'Ossenhaas met verse paprika', '', '18,50'], ['100', 'Ossenhaas met kerriesaus', '', '18,50'], ['101', 'Ossenhaas met tausi saus', '', '19,00']]},
    { t: 'Vis en garnalen', items: [
      ['102', 'Gepaneerde garnalen', '10 stuks', '19,50'], ['103', 'Garnalen met knoflooksaus', '', '19,50'], ['104', 'Garnalen met pikante saus', '', '19,50'],
      ['105', 'Garnalen met champignonsaus', '', '19,50'], ['106', 'Garnalen met verse paprika', '', '19,50'], ['107', 'Garnalen met kerriesaus', '', '19,50'],
      ['108', 'Garnalen met botersaus', '', '19,50'], ['109', 'Garnalen met tausi saus', '', '19,75'], ['110', 'Tongfilet met vruchtensaus', '', '19,75'],
      ['111', 'Tongfilet met kerriesaus', '', '19,75'], ['112', 'Tongfilet met pikante saus', '', '19,75']]},
    { t: 'Kong Pao', note: 'De Pauw Kong Pao stijl: specialiteit met pepers en cashewnoten.', items: [
      ['113', 'Kong Pao kipfilet', '', '16,75'], ['114', 'Kong Pao varkenshaas', '', '16,75'], ['115', 'Kong Pao ossenhaas', '', '19,25'],
      ['116', 'Kong Pao garnalen', '', '19,25'], ['117', 'Kong Pao mix', 'garnalen, kipfilet en varkenshaas', '19,50']]},
    { t: 'Kantonees', note: 'Kantonese en Chinese specialiteiten.', items: [
      ['118', 'Hot wok beef', 'zoetpittige ketjapsaus met peultjes', '19,00'], ['119', 'Chiu yin kai', 'kipstukjes gebakken met pepers en kruiden', '16,75'],
      ['120', 'Chiu yin yuk', 'varkensvlees gebakken met pepers en kruiden', '16,75'], ['121', 'Chiu yin ha', 'garnalen gebakken met pepers en kruiden', '19,50'],
      ['122', 'Canton kou lou kai', 'licht gepaneerde kipstukjes in zoetzuursaus', '17,50'], ['123', 'Canton kou lou yuk', 'licht gepaneerde varkensvleesstukjes in zoetzuursaus', '17,50'],
      ['124', 'Chinese fa foek', 'diverse groenten met garnalen, varkenshaas, kipfilet en tsa sieuw', '19,50'], ['125', 'Thah wai', 'mix van tsa sieuw en krokant geroosterde spek', '17,50'],
      ['126', 'Chow san sien', 'combinatie van groenten, garnalen, kipfilet en varkenshaas in een pikante saus', '19,25']]},
    { t: 'Peking eend', items: [
      ['127', 'Geroosterde eend met babi pangang saus', '', '20,50'], ['128', 'Geroosterde eend met vruchtensaus', '', '20,50'], ['129', 'Geroosterde eend met Chinese champignons', '', '20,50']]},
    { t: 'Tipan', items: [
      ['130', 'Tipan ossenhaas in zwarte pepersaus', '', '19,00'], ['131', 'Tipan yuk', 'varkenshaas met paprika en pepers', '18,75'],
      ['132', 'Tipan Indonesian beef', 'met pittige ketjap en pepers', '20,00'], ['133', 'Tipan kip', 'met pikante saus', '18,75'], ['134', 'Tipan seafood', 'tongfilet en garnalen in pikante saus', '21,00']]},
    { t: 'Indisch', items: [
      ['135', 'Nasi rames speciaal', 'daging smoor, daging roedjak, 1/4 kip, saté en atjar', '15,50'],
      ['136', 'Nasi rames de Pauw', 'babi pangang, foe yong hai, saté, daging roedjak, pisang goreng en atjar', '19,00'],
      ['137', 'Bami rames speciaal', 'daging smoor, daging roedjak, 1/4 kip, saté en atjar', '15,50'],
      ['138', 'Bami rames de Pauw', 'babi pangang, foe yong hai, saté, daging roedjak, pisang goreng en atjar', '19,00'],
      ['139', 'Gado gado (V)', 'taugé, komkommer en ei in satésaus', '12,50']]},
    { t: 'Rijsttafels', items: [
      ['140', 'Chinese rijsttafel voor 1 persoon', 'foe yong hai, tjap tjoy, babi pangang, koe lou yuk, gepaneerde garnalen, mini loempia\'s en saté', '24,75'],
      ['141', 'Chinese rijsttafel voor 2 personen', 'foe yong hai, tjap tjoy, babi pangang, koe lou yuk, gepaneerde garnalen, mini loempia\'s en saté', '43,00'],
      ['142', 'Indische rijsttafel voor 1 persoon', 'daging roedjak, daging smoor, atjar, babi pangang, fou yong hai, ajam roedjak, pinda\'s, pisang goreng en saté', '24,75'],
      ['143', 'Indische rijsttafel voor 2 personen', 'daging roedjak, daging smoor, babi pangang, foe yong hai, ajam roedjak, pinda\'s, pisang goreng, atjar en saté', '43,00'],
      ['144', 'Chinees-Indische rijsttafel voor 2 personen', 'babi pangang, foe yong hai, daging smoor, saté, gado gado, koe lou yuk, ajam malakka en pisang goreng', '46,00'],
      ['145', 'De Pauw rijsttafel voor 2 personen', 'mini loempia\'s, tempura garnalen, pangsit, tipan yuk, saté, kung pao kip, hot wok beef en tongfilet in vruchtensaus', '50,00']]}
  ],
  sushi: [
    { t: 'Nigiri (2 st.)', items: [
      ['A1', 'Nigiri zalm', '', '4,30'], ['A2', 'Nigiri tonijn', '', '5,50'], ['A3', 'Nigiri paling', '', '5,50'], ['A4', 'Nigiri ebi', '', '4,60'],
      ['A5', 'Nigiri krab', '', '4,30'], ['A6', 'Nigiri omelet', '', '4,00'], ['A7', 'Nigiri avocado', '', '4,30'], ['A8', 'Nigiri flamed salmon', '', '4,90']]},
    { t: 'Uramaki (8 st.)', items: [
      ['A14', 'California roll', '', '11,00'], ['A15', 'Spicy tuna roll', '', '13,50'], ['A16', 'Salmon roll', '', '11,00'], ['A17', 'De Pauw roll', '', '12,50'],
      ['A18', 'Cream cheese roll', '', '11,00'], ['A19', 'Tempura ebi roll', '', '12,50'], ['A20', 'Chicken roll', '', '12,50'], ['A21', 'Spicy chicken roll', '', '12,50'],
      ['A22', 'Veggie roll', '', '11,00'], ['A23', 'Tuna roll', '', '13,00'], ['A24', 'Spicy salmon roll', '', '11,50']]},
    { t: 'Temaki', items: [
      ['A25', 'California temaki', '', '5,00'], ['A26', 'Spicy tuna temaki', '', '6,00'], ['A27', 'Spicy salmon temaki', '', '5,50'], ['A28', 'De Pauw temaki', '', '5,50'],
      ['A29', 'Paling temaki', '', '6,00'], ['A30', 'Tempura temaki', '', '5,50'], ['A31', 'Chicken temaki', '', '5,50']]},
    { t: 'Maki (6 st.)', items: [
      ['A32', 'Maki komkommer', '', '3,90'], ['A33', 'Maki avocado', '', '4,20'], ['A34', 'Maki omelet', '', '4,20'], ['A35', 'Maki tonijn', '', '6,50'],
      ['A36', 'Maki krab', '', '5,00'], ['A37', 'Maki zalm', '', '5,50']]},
    { t: 'Special rolls', items: [
      ['A38', 'Beef roll', '', '16,50'], ['A39', 'Dragon roll', '', '16,50'], ['A40', 'Mango salmon', '', '14,50'], ['A41', 'Flamed salmon ebi', '', '16,50'],
      ['A42', 'Carpaccio ebi roll', '', '16,50'], ['A43', 'Unagi cheese roll', '', '15,50'], ['A44', 'Futo maki', '4 stuks', '10,50']]},
    { t: 'Sashimi', items: [
      ['A45', 'Sashimi zalm', '6 st.', '7,90'], ['A46', 'Sashimi tonijn', '6 st.', '8,90'], ['A47', 'Sashimi mix', '8 st.', '11,50']]},
    { t: 'Poké bowl', note: 'Elke poké bowl bevat komkommer, wakame, avocado, mango, edamame, maïs, sesam, unagi saus en oranje Japanse mayo.', items: [
      ['A48', 'Poké bowl veggie', '', '12,50'], ['A49', 'Poké bowl zalm', '', '14,50'], ['A50', 'Poké bowl ebi', '', '15,50'], ['A51', 'Poké bowl chicken', '', '15,50'], ['A52', 'Poké bowl tuna', '', '16,50']]},
    { t: 'Combi menu\'s', note: '* Combi menu\'s min. 18 stuks incl. 1 paar stokjes, 15 ml soja saus en cupje wasabi. ** Combi menu\'s min. 32 stuks incl. 2 paar stokjes, 30 ml soja saus en cupje wasabi.', items: [
      ['A53', 'Maki box (24 st.)', 'komkommer, zalm, avocado, tonijn', '15,00*'],
      ['A54', 'California mix (18 st.)', 'california roll, maki zalm, maki komkommer, nigiri tonijn, nigiri zalm', '20,95*'],
      ['A55', 'Spicy samurai box (40 st.)', 'spicy chicken roll, spicy tuna roll, tempura roll, maki komkommer, maki zalm, nigiri zalm, nigiri tonijn', '42,50**'],
      ['A56', 'Uramaki lovers box (32 st.)', 'salmon cheese roll, california roll, tuna roll, tempura roll', '36,95**'],
      ['A57', 'Sensation box (40 st.)', 'california roll, tempura roll, chicken roll, maki zalm, maki komkommer, nigiri zalm', '40,50**'],
      ['A58', 'Box de Pauw (40 st.)', 'california roll, pauw roll, tempura roll, maki zalm, maki komkommer, nigiri zalm', '44,50**']]},
    { t: 'Bijgerechten', items: [
      ['A9', 'Gember', '', '2,85'], ['A10', 'Wakame', '', '6,80'], ['A11', 'Tafelfles Kikkoman', '', '4,50'], ['A12', 'Soja klein 30 ml', '', '1,00'], ['A13', 'Wasabi cupje', '', '0,50']]}
  ]
};
