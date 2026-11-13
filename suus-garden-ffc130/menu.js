/* Menukaarten Suus' Garden, overgenomen uit Suus-Garden-menu-2026.pdf (restaurant)
   en Suus-Garden-afhaalmenu-2026.pdf (afhalen). Item: [nummer, naam, omschrijving, prijs].
   Een item met nummer 'h' is een tussenkop binnen de rubriek. */
window.SUUS_MENUS = {
  restaurant: {
    label: 'Restaurantkaart',
    sub: 'Aan tafel in ons restaurant',
    intro: 'Let op: deze kaart geldt in het restaurant, niet voor afhalen. Voor afhalen gebruikt u de afhaalkaart, met eigen nummers en prijzen.',
    foot: 'Bent u allergisch voor iets? Meld het ons, dan passen we het gerecht voor u aan!',
    pdf: 'https://www.suusgarden.nl/wp-content/uploads/2026/01/Suus-Garden-menu-2026.pdf',
    cats: [
      { id: 'r-soep', name: 'Soep', items: [
        ['1', 'Tomatensoep', '', '5,50'],
        ['2', 'Kippensoep', '', '5,75'],
        ['3', 'Haaievinnensoep', '', '5,75'],
        ['4', 'Champignonsoep', '', '5,75'],
        ['9', 'Wan tan soep', '', '7,75'],
        ['11', 'Soep "Suus Garden"', '', '8,75']
      ]},
      { id: 'r-voor', name: 'Voor- en bijgerechten', items: [
        ['12', 'Loempia speciaal', '', '7,80'],
        ['13', 'Loempia "Suus Garden"', 'met babi pangang of gestoofd rundvlees', '11,50'],
        ['14', "Mini loempia's", '4 stuks', '5,50'],
        ['15', 'Chinese loempia', 'gevuld met o.a. geroosterd vlees en groente, 2 stuks', '5,70'],
        ['16', 'Kroepoek', '', '3,95'],
        ['17', 'Saté ajam', '3 stokjes', '8,25'],
        ['18', 'Saté babi', '3 stokjes', '8,25'],
        ['19', 'Gebakken garnalen', '4 stuks', '8,25'],
        ['20', 'Pisang goreng', 'gebakken banaan, 4 stuks', '6,00'],
        ['27', 'Pindasaus', '', '3,50'],
        ['28', 'Pikante saus', '', '3,50'],
        ['28a', 'Dim Sum', '4 stuks', '8,50']
      ]},
      { id: 'r-spec', name: 'Specialiteiten', note: 'Met witte rijst. Met nasi of bami + € 0,50; met mihoen of Chinese bami of nasi + € 3,00.', items: [
        ['29', 'Ketjap Tjap Tuk', 'mix van kip, ossenhaas en varkenshaas in ketjapsaus', '20,50'],
        ['30', 'Bar Ab', 'gebakken Peking eend met Chinese garnalen, tja sieuw, kippenvlees en groente', '21,50'],
        ['32', 'Gongbao Kai of Yuk', 'kipfilet of varkenshaas met diverse groente en cashewnoten in gongbaosaus, licht gekruid', '18,50'],
        ['33', 'Gongbao Ha', 'Chinese garnalen met diverse groente en cashewnoten in gongbaosaus, licht gekruid', '21,50'],
        ['34', 'Yu Siang Kai of Yuk', 'kipfilet of varkenshaas met diverse groente in licht pikante yusian saus', '18,50'],
        ['35', 'Hoi Kuo Kai of Yuk', 'kipfilet of varkenshaas met speciale scherpe hui kuo saus', '18,50'],
        ['37', 'Szechuan Ngau Yuk', 'ossenhaas in Szechuan stijl, pittig gekruid met knoflook en pepers', '20,95'],
        ['38', 'San Cha Ngau Yuk', 'ossenhaas met diverse groente in originele san cha saus met knoflook en pepers', '20,95'],
        ['41', 'Tao Si Kai of Yuk', 'roergebakken kipfilet of varkenshaas met zwarte sojabonensaus', '18,50'],
        ['42', 'Sun Yun Ha', 'Chinese garnalen met verse knoflooksaus, licht gekruid', '21,50'],
        ['44', 'Kingdou Kai of Yuk', 'gepaneerde kipfilet of varkenshaas met zoete vruchtensaus', '20,00'],
        ['45', 'Lo Hang Tsai', 'vegetarische schotel met diverse groente en taufu', '16,50'],
        ['46', 'Ma Po Tau Fu', 'taufu, fijn gesneden ossenhaas en groente met ma po saus', '19,95'],
        ['47', 'For Nam', 'geroosterd speenvarken met zoet-pikante saus', '19,95'],
        ['48', 'Tja Sieuw', 'geroosterd mager varkensvlees met zoet-pikante saus', '20,95'],
        ['h', 'Te Pang (49)', 'Een oud Oosters gerecht op een hete ijzeren schaal, waardoor het gerecht een hele fijne aparte smaak krijgt. Keuze uit de volgende sauzen: zwarte bonensaus, ketjapsaus of pittige hui kou saus.'],
        ['49A', 'Te Pang Ngau Yuk', 'ossenhaas', '23,50'],
        ['49B', 'Te Pang Sang Sien', 'garnalen, kipfilet en varkensvlees', '24,50'],
        ['49C', 'Te Pang Ha', 'garnalen', '24,90'],
        ['49D', 'Te Pang Kai of Yuk', 'kipfilet of varkensvlees', '20,95'],
        ['49E', 'Te Pang Yu', 'tongfilet', '25,50'],
        ['49F', 'Te Pang Tjak Yuk', 'mix van kipfilet, ossenhaas en varkensvlees', '23,95']
      ]},
      { id: 'r-nasi', name: 'Nasi en bami', items: [
        ['50', 'Nasi of Bami met saté', '3 stokjes', '13,50'],
        ['51', 'Nasi of Bami Speciaal', 'met kip en saté', '13,50'],
        ['52', 'Nasi of Bami "Suus Garden"', 'babi pangang, foe yong hai, koe lou yuk en saté', '21,50'],
        ['53', 'Nasi of Bami met kipfilet en groente', '', '14,50'],
        ['54', 'Nasi of Bami met varkenshaas', '', '15,00'],
        ['55', 'Nasi of Bami met ossenhaas', '', '17,00'],
        ['56', 'Nasi of Bami met Chinese garnalen', '', '18,00'],
        ['57', 'Yang Chow Fang', 'Chinese nasi met garnaaltjes, tja sieuw en groente', '18,00']
      ]},
      { id: 'r-comb', name: 'Combinatie', note: 'Met nasi (fang) of bami (ming).', items: [
        ['58', 'Koe Yu Fang / Ming', 'koe lu yuk, babi pangang en saté', '18,75'],
        ['59', 'Tjap Yu Fang / Ming', 'tjap tjoy, babi pangang en saté', '18,75'],
        ['60', 'Foe Yu Fang / Ming', 'foe yong hai, babi pangang en saté', '18,75'],
        ['61', 'Ha Yu Fang / Ming', 'garnalen, babi pangang en saté', '18,75'],
        ['62', 'Kai Yu Fang / Ming', 'gebraden kip, babi pangang en saté', '18,75'],
        ['63', 'Fang / Ming Compleet voor 2 personen', 'babi pangang, foe yong hai, gon bao kip, daging ketjap, koe lou yuk en saté', '38,50']
      ]},
      { id: 'r-varken', name: 'Varkenshaas', note: 'Met rijst.', items: [
        ['64', 'Babi Pangang', 'in zoet-pikante saus', '19,90'],
        ['66', 'Babi Ketjap', 'babi pangang in ketjapsaus', '19,90'],
        ['68', 'Varkenshaas met champignons', '', '18,90'],
        ['69', 'Varkenshaas met kerriesaus', '', '18,90'],
        ['71', 'Varkenshaas met ketjapsaus', '', '18,90'],
        ['73', 'Varkenshaas met Chinese champignons', '', '18,90'],
        ['75', 'Babi Pangang mix', '3 soorten vlees: babi pangang, spek, chashieuw', '21,00']
      ]},
      { id: 'r-kip', name: 'Kipfilet', note: 'Met rijst.', items: [
        ['76', 'Ajam Ketjap', 'met zoete ketjapsaus', '17,90'],
        ['76a', 'Ajam Pangang', 'gebakken kip in pikante saus', '17,90'],
        ['77', 'Kipfilet met champignons', '', '18,90'],
        ['78', 'Kipfilet met kerriesaus', '', '18,90'],
        ['79', 'Kipfilet in knoflooksaus', '', '18,90'],
        ['80', 'Kipfilet met ketjapsaus', '', '18,90'],
        ['82', 'Kipfilet met Chinese champignons', '', '18,90'],
        ['83', 'Koe Lou Kai', 'gepaneerde kipbolletjes in zoetzure saus', '18,90'],
        ['84', 'Kip "Azia"', 'kipfilet met zoet-pikante chilisaus', '19,90']
      ]},
      { id: 'r-os', name: 'Ossenhaas', note: 'Met rijst.', items: [
        ['85', 'Ossenhaas met champignons', '', '21,50'],
        ['86', 'Shi Chuan Tjap Yuk', 'mix met kip, ossenhaas en varkenshaas in pittige shichuan saus', '21,50'],
        ['87', 'Ossenhaas met kerriesaus', '', '21,50'],
        ['88', 'Ossenhaas met Chinese champignons', '', '21,50'],
        ['89', 'Ossenhaas met zwarte sojabonensaus', '', '21,50'],
        ['90', 'Ossenhaas met broccoli', '', '21,50']
      ]},
      { id: 'r-ei', name: 'Eiergerechten', note: 'Met rijst.', items: [
        ['91', 'Foe Yong Hai met varkenshaas', '', '16,50'],
        ['92', 'Foe Yong Hai met kipfilet', '', '16,50'],
        ['93', 'Foe Yong Hai met ossenhaas', '', '18,50'],
        ['94', 'Foe Yong Hai met Chinese garnalen', '', '19,95']
      ]},
      { id: 'r-groente', name: 'Groente', note: 'Met rijst.', items: [
        ['95', 'Tjap Tjoy met varkenshaas', '', '17,50'],
        ['96', 'Tjap Tjoy met kipfilet', '', '16,00'],
        ['97', 'Tjap Tjoy met Chinese garnalen', '', '20,90'],
        ['98', 'Tjap Tjoy met ossenhaas', '', '19,50'],
        ['99', 'Tjap Tjoy met tja sieuw', '', '18,50']
      ]},
      { id: 'r-mihoen', name: 'Chinese bami en mihoen', items: [
        ['100', 'Mihoen Goreng met varkenshaas', '', '14,90'],
        ['101', 'Mihoen Goreng met kipfilet', '', '14,90'],
        ['102', 'Mihoen Goreng met ossenhaas', '', '18,00'],
        ['103', 'Mihoen Goreng met Chinese garnalen', '', '18,50'],
        ['104', 'Mihoen Goreng "Suus Garden"', 'babi pangang, foe yong hai, koe lou yuk en saté', '22,80'],
        ['105', 'Mihoen Goreng Singapore', '', '18,00'],
        ['106', 'Chinese Bami met varkenshaas', '', '15,50'],
        ['107', 'Chinese Bami met kipfilet', '', '15,50'],
        ['108', 'Chinese Bami met ossenhaas', '', '19,00'],
        ['109', 'Chinese Bami met Chinese garnalen', '', '19,50'],
        ['110', 'Chinese Bami "Suus Garden"', 'babi pangang, foe yong hai, koe lou yuk en saté', '22,80']
      ]},
      { id: 'r-vis', name: 'Vis', note: 'Met rijst.', items: [
        ['111', 'Gepaneerde grote garnalen met zoet-pikante saus', '', '20,95'],
        ['112', 'Chinese garnalen met champignons', '', '20,95'],
        ['113', 'Chinese garnalen met kerriesaus', '', '20,95'],
        ['114', 'Chinese garnalen met Chinese champignons', '', '20,95'],
        ['116', 'Gepaneerde tongfilet in oestersaus', '', '20,95'],
        ['117', 'Gepaneerde tongfilet met kerriesaus', '', '20,95'],
        ['118', 'Gepaneerde tongfilet met vruchten in zoetzure saus', '', '20,95'],
        ['119', 'Gepaneerde tongfilet met Chinese champignons', '', '20,95']
      ]},
      { id: 'r-eend', name: 'Peking eend', note: 'Met rijst.', items: [
        ['120', 'Geroosterde Peking eend', '', '21,50'],
        ['121', 'Peking eend met ananas en zoetzure saus', '', '22,50'],
        ['122', 'Peking eend met Chinese champignons', '', '22,50']
      ]},
      { id: 'r-indisch', name: 'Indisch', items: [
        ['128', 'Nasi of Bami Rames met saté', '', '14,95'],
        ['129', 'Nasi of Bami Rames speciaal', 'kip en saté', '16,50'],
        ['132', 'Gado Gado', '', '13,50'],
        ['133', 'Daging Rodjak', 'pittig gekruid', '18,25'],
        ['134', 'Daging Smoor', 'ketjapsaus', '18,25']
      ]},
      { id: 'r-rijst', name: 'Rijsttafels', note: '* Alle gerechten worden geserveerd met witte rijst. Meerprijs voor nasi of bami (i.p.v. witte rijst) € 1,00. Meerprijs voor mihoen of Chinese bami (i.p.v. witte rijst) € 4,00.', items: [
        ['', 'Cantonese rijsttafel (exclusief), voor 2 personen', 'Wan tan soep, Chinese loempia, Pa Tsang eend, King dou kai, Te pang ha (Chinese garnalen in lichte knoflooksaus), nasi, bami of rijst, ijs met fruit of koffie', '58,50'],
        ['', 'Szechuanse rijsttafel, voor 2 personen', 'Sun la soep, Chinese loempia, Tipan kai, ossenhaas in Szechuan stijl (pittig gekruid), Forlaam (gebakken spek), nasi, bami of rijst, ijs met fruit of koffie', '58,50'],
        ['', 'Indische rijsttafel *, voor 2 personen', 'Kroepoek, daging smoor, babi pangang, ajam ketjap, pisang goreng, saté, gon bao kai (kip in lichtpikante saus), atjar', '40,50'],
        ['', 'Chinese rijsttafel *, voor 2 personen', 'Kroepoek, tomatensoep, babi pangang, koe loe yuk, saté, foe yong hai, gepaneerde garnalen, hui kou kai (kipfilet met groente in pittige shichuan saus)', '40,50'],
        ['', 'Chinese Indische rijsttafel *, voor 4 personen', 'Tomatensoep, Chinese loempia\'s, babi pangang, foe yong hai, hete kip, saté, ajam ketjap, daging smoor, gado gado, pisang goreng, koe loe yuk, atjar', '82,00']
      ]},
      { id: 'r-kind', name: 'Kindermenu', items: [
        ['125', 'Friet met frikandel, fites en appelmoes', '', '8,50'],
        ['126', 'Friet met saté', '', '8,50'],
        ['127', 'Nasi of Bami met saté', '', '9,50']
      ]},
      { id: 'r-dessert', name: 'Dessert', items: [
        ['', 'Sorbet', '', '6,50'],
        ['', 'Dame blanche', '', '6,50'],
        ['', 'Bananensplit', '', '6,50'],
        ['', 'Kinderijsje', '', '4,25']
      ]},
      { id: 'r-drank', name: 'Dranken', items: [
        ['h', 'Frisdranken'],
        ['', 'Spa blauw', '', '3,00'],
        ['', 'Spa rood', '', '3,00'],
        ['', 'Cola, sinas, cassis', '', '3,00'],
        ['', 'Lipton ice tea', '', '3,00'],
        ['', 'Bitter lemon', '', '3,00'],
        ['', 'Tonic', '', '3,00'],
        ['', 'Appelsap', '', '3,00'],
        ['h', 'Bier en wijn'],
        ['', 'Bier (fles)', '', '3,50'],
        ['', 'Alcoholvrij bier', '', '3,50'],
        ['', 'Witte of rode wijn', '', '4,20'],
        ['h', 'Warme dranken'],
        ['', 'Koffie', '', '3,00'],
        ['', 'Cappuccino', '', '3,50'],
        ['', 'Thee', '', '3,00'],
        ['', 'Chinese thee', '', '3,00'],
        ['', 'Warme chocolademelk', '', ''],
        ['', 'Warme chocolademelk met slagroom', '', '4,00'],
        ['', 'Irish coffee', '', '6,50'],
        ['', 'French coffee', '', '6,50'],
        ['h', 'Gedistilleerd'],
        ['', 'Jenever', '', '4,00'],
        ['', 'Whiskey', '', '5,00'],
        ['', 'Cognac', '', '6,50'],
        ['', 'Rum', '', '4,00'],
        ['', 'Rum cola', '', '6,50'],
        ['', 'Likeur', '', '6,50']
      ]}
    ]
  },

  afhaal: {
    label: 'Afhaalkaart',
    sub: 'Bestellen en meenemen',
    intro: 'Alle hoofdgerechten en rijsttafels zijn incl. witte rijst. In plaats van witte rijst: met nasi of bami € 1,00 extra, met grote nasi of bami € 4,00 extra, met mihoen, Chinese bami of Chinese nasi € 4,00 extra, met grote mihoen, Chinese bami of Chinese nasi € 8,00 extra. Prijzen incl. btw.',
    foot: 'Bestel telefonisch, via WhatsApp of online. Uw bestelling is doorgaans binnen 30 minuten klaar; op zondag en feestdagen graag één uur vooraf bestellen. Wijzigingen en drukfouten voorbehouden.',
    pdf: 'https://www.suusgarden.nl/wp-content/uploads/2026/01/Suus-Garden-afhaalmenu-2026.pdf',
    cats: [
      { id: 'a-soep', name: 'Soepen', items: [
        ['1', 'Tomatensoep', '', '4,95'],
        ['2', 'Kippensoep', '', '4,95'],
        ['3', 'Haaienvinnensoep', '', '4,95'],
        ['4', 'Groentesoep', '', '5,20'],
        ['5', 'Kip champignonsoep', '', '5,20'],
        ['6', 'Wan tan soep', '', '6,95'],
        ['7', 'Soep van het Huis', 'licht gebonden met garnalen, kip en varkenshaas', '7,50']
      ]},
      { id: 'a-voor', name: 'Voor- en bijgerechten', items: [
        ['8', 'Kroepoek', '', '3,95'],
        ['9', 'Cassave kroepoek', '', '3,70'],
        ['10', 'Loempia speciaal', '', '6,50'],
        ['11', 'Loempia met Babi Pangang', 'apart', '11,00'],
        ['12', 'Loempia met Daging Roedjak', 'apart', '11,00'],
        ['13', 'Chinese kerrie koek', '6 stuks', '4,20'],
        ['14', 'Mini-loempia', '6 stuks', '4,20'],
        ['15', "Chinese loempia's", '3 stuks', '4,50'],
        ['16', 'Saté Babi', '4 stuks', '7,95'],
        ['17', 'Saté Ajam', '4 stuks', '7,95'],
        ['18', 'Kipvleugels', '6 stuks', '5,45'],
        ['19', 'Pangsit Goreng', 'Chinees, 6 stuks', '5,45'],
        ['20', 'Gebakken banaan', '6 stuks', '5,45'],
        ['22', 'Gebakken garnalen', '5 stuks', '7,95'],
        ['23', 'Diverse sauzen', '', '3,50'],
        ['24', 'Atjar', '', '3,90'],
        ['25', 'Witte rijst', '', '4,50']
      ]},
      { id: 'a-nasi', name: 'Nasi of bami goreng', items: [
        ['26', 'Gewoon', 'met ei, vlees, ham en prei', '7,95'],
        ['27', 'Speciaal', 'met 1/4 kip en 2 st. saté', '13,00'],
        ['28', 'Met 3 st. saté', '', '13,00'],
        ['29', 'Met kipfilet en groente', 'in een bak', '13,50'],
        ['30', 'Met varkenshaas en groente', 'in een bak', '13,50'],
        ['31', 'Met ossenhaas en groente', 'in een bak', '15,95'],
        ['32', 'Met garnalen en groente', 'in een bak', '16,25'],
        ['33', 'Young Chow', 'met garnalen, cha sieuw en erwtjes, in een bak', '14,75'],
        ['34', 'Compleet voor 2 personen', 'met Babi Pangang, Foe Yong Hai, kip, 2 st. saté', '19,95'],
        ['35', 'Van het Huis voor 2 personen', 'Babi Pangang, Koe Loe Yuk, Foe Yong Hai, gebakken garnalen, kip en 2 st. saté', '22,00']
      ]},
      { id: 'a-mihoen', name: 'Mihoen of Chinese bami', items: [
        ['36', 'Met kipfilet en diverse groente', 'in een bak', '13,90'],
        ['37', 'Met varkenshaas en groente', 'in een bak', '13,90'],
        ['38', 'Met ossenhaas en groente', 'in een bak', '17,95'],
        ['39', 'Met garnalen en groente', 'in een bak', '17,95'],
        ['40', 'Singapore', 'met Cha Sieuw, garnalen, kerrie en groente, in een bak', '15,95'],
        ['41', 'Compleet voor 2 personen', 'met Babi Pangang, Foe Yong Hai, kip, 2 st. saté', '22,50'],
        ['42', 'Van het Huis', 'Babi Pangang, Koe Loe Yuk, Foe Yong Hai, saté, kip en garnalen', '24,50']
      ]},
      { id: 'a-comb', name: 'Combinatie', note: 'Met nasi of bami (groot) € 19,95. Met mihoen of Chinese bami € 4,00 extra.', items: [
        ['44', 'Babi Pangang, Tjap Tjoy, 2 st. saté', '', '19,95'],
        ['45', 'Babi Pangang, Koe Loe Yuk, 2 st. saté', '', '19,95'],
        ['46', 'Babi Pangang, kip, 2 st. saté', '', '19,95'],
        ['47', 'Babi Pangang, Daging Roedjak, 2 st. saté', '', '19,95'],
        ['48', 'Foe Yong Hai, Tjap Tjoy, 2 st. saté', '', '19,95'],
        ['49', 'Foe Yong Hai, Koe Loe Yuk, 2 st. saté', '', '19,95'],
        ['50', 'Babi Pangang, Foe Yong Hai, 2 st. saté', '', '19,95']
      ]},
      { id: 'a-indisch', name: 'Indisch', note: 'Met witte rijst.', items: [
        ['51', 'Rames gewoon met saté', '', '13,95'],
        ['52', 'Rames speciaal met saté en kip', '', '15,25'],
        ['53', 'Rames van het Huis', 'met Babi Pangang, Foe Yong Hai, kip, saté, Daging Roedjak en atjar', '23,00'],
        ['54', 'Daging Roedjak', 'gestoofd rundvlees, in kerrie gekruid', '18,00'],
        ['55', 'Daging Smoor', 'ketjap maak', '18,00'],
        ['56', 'Gado Gado', '', '12,50']
      ]},
      { id: 'a-ei', name: 'Eiergerechten', note: 'Met witte rijst.', items: [
        ['57', 'Foe Yong Hai met kipfilet en groente', '', '13,75'],
        ['58', 'Foe Yong Hai met varkenshaas en groente', '', '13,75'],
        ['59', 'Foe Yong Hai met garnalen en groente', '', '17,75'],
        ['60', 'Foe Yong Hai met groente', 'vegetarisch', '12,75']
      ]},
      { id: 'a-groente', name: 'Groente', note: 'Met witte rijst.', items: [
        ['61', 'Tjap Tjoy met varkenshaas', '', '14,25'],
        ['62', 'Tjap Tjoy met kipfilet', '', '14,25'],
        ['63', 'Tjap Tjoy met ossenhaas', '', '17,75'],
        ['64', 'Tjap Tjoy met garnalen', '', '18,75'],
        ['65', 'Tjap Tjoy speciaal', 'met garnalen, kipfilet en varkenshaas', '18,25'],
        ['66', 'Tau Fu Pao', 'vegetarisch, met diverse groente en tofu', '14,20'],
        ['67', 'Lu Han Chai', 'met diverse groente', '14,20'],
        ['68', 'Tjap Tjoy vegetarisch', '', '13,20']
      ]},
      { id: 'a-vlees', name: 'Vlees', note: 'Met witte rijst.', items: [
        ['69', 'Babi Pangang', '', '18,50'],
        ['70', 'Babi Pangang mix', 'Cha Sieuw, Babi Pangang en Babi Spek', '20,70'],
        ['72', 'Babi Ketjap', '', '18,50'],
        ['73', 'Babi Spek', 'krokante speklapjes', '18,25'],
        ['74', 'Cha Sieuw', 'geroosterd mager speenvarken', '18,25'],
        ['75', 'Koe Loe Yuk', '', '15,00'],
        ['76', 'Tau Sie Yuk', 'varkenshaas met diverse groente in zwarte bonensaus', '16,00'],
        ['77', 'Sun Yong Yuk', 'varkenshaas met groente in knoflooksaus', '16,00'],
        ['78', 'King Do Yuk', 'gepaneerde varkenshaas met paprika in zoetzure saus', '16,95'],
        ['79', 'Si Jing Yuk', 'varkenshaas met diverse groente in milde saus', '16,00'],
        ['80', 'Gon Bao Yuk', 'varkenshaas met groente en cashewnoten in een licht gekruide pittige saus', '17,25'],
        ['81', 'Hui Kou Yuk', 'varkenshaas met groente in een pittige shi chuansaus', '17,25'],
        ['82', 'Ketjap Tjap Yuk', 'mix van ossenhaas, kippenvlees en varkenshaas in ketjapsaus', '18,50'],
        ['83', 'Shi Chuan Tjap Yuk', 'mix van ossenhaas, kipfilet en varkenshaas met groente in pittige Shi Chuan saus', '18,50']
      ]},
      { id: 'a-os', name: 'Ossenhaas', note: 'Met witte rijst.', items: [
        ['84', 'Gon Bao Ngou Yuk', 'plakjes ossenhaas met cashewnoten in een licht pittige saus', '19,45'],
        ['85', 'Hui Kou Ngau Yuk', 'plakjes ossenhaas in pittige Shi Chuan saus', '19,45'],
        ['87', 'Tau Sie Ngau Yuk', 'plakjes ossenhaas in zwarte bonensaus', '19,45'],
        ['88', 'Ossenhaas met groente in zoet pikante saus', '', '19,00'],
        ['89', 'Ossenhaas met groente in kerriesaus', '', '19,00'],
        ['90', 'Ossenhaas met champignons, paprika en uien', '', '19,45'],
        ['91', 'Ossenhaas met broccoli', '', '19,45'],
        ['91a', 'Ossenhaas in ketjapsaus', '', '19,00']
      ]},
      { id: 'a-kip', name: 'Kip', note: 'Met witte rijst.', items: [
        ['92', 'Gon Bao Kai', 'kipfilet met groente en cashewnoten in licht pikante saus', '17,25'],
        ['93', 'Hui Kou Kai', 'kipfilet met groente op Shi Chuan wijze, pittig gekruid', '17,25'],
        ['94', 'Tau Sie Kai', 'kipfilet met groente in zwarte bonensaus', '16,25'],
        ['95', 'King Do Kai', 'gepaneerde kipfilet in zoetzure saus', '17,00'],
        ['96', 'Shi Jing Kai', 'kipfilet met diverse groente in milde saus', '16,50'],
        ['97', 'Kipfilet in pikante saus', 'hete kip', '16,50'],
        ['97a', 'Kipfilet in zoet pikante saus', '', '16,50'],
        ['98', 'Kipfilet met groente in kerriesaus', '', '16,25'],
        ['99', 'Kipfilet met groente in ketjapsaus', '', '16,25'],
        ['100', 'Kipfilet met champignons', '', '16,25'],
        ['101', 'Sun Yong Kai', 'kipfilet met knoflooksaus', '16,25'],
        ['102', 'Tjieuw Yun Kai', 'gepaneerde kipfilet met peper, uien en knoflook, droog gekruid', '17,25'],
        ['103', 'Pa Wong Kai', 'kip voor een woeste koning, met een scherpe saus van gember, prei en gesneden rawit, zeer pittig', '17,25'],
        ['104', 'Ajam Pangang', 'gefrituurde kippendij in zoet pikante saus', '17,00'],
        ['105', 'Ajam Ketjap', 'gefrituurde kippendij in ketjapsaus', '17,00'],
        ['105b', 'Kipfilet met broccoli', '', '17,25']
      ]},
      { id: 'a-zee', name: 'Seafood', note: 'Met witte rijst.', items: [
        ['106', 'Gon Bao Ha', 'Chinese garnalen met cashewnoten in een licht pikante saus', '19,95'],
        ['107', 'Hui Kou Ha', 'Chinese garnalen met groente in pittige Shi Chuan saus', '19,95'],
        ['108', 'Tau Sie Ha', 'Chinese garnalen met groente in zwarte bonensaus', '19,95'],
        ['109', 'Garnalen met champignons', '', '19,95'],
        ['109a', 'Garnalen met groente in knoflooksaus', '', '19,95'],
        ['110', 'Garnalen met kerriesaus', '', '19,95'],
        ['113', 'Garnalen met broccoli', '', '19,95'],
        ['112', 'Garnalen in zoete pikante saus', '', '19,95'],
        ['114', 'Gepaneerde tongfilet met zoet pikante saus', '', '19,95'],
        ['115', 'Ketjap Ha', 'garnalen met ketjapsaus', '19,95']
      ]},
      { id: 'a-eend', name: 'Eend', items: [
        ['116', 'Peking Eend', 'krokant gebakken, met zoet pikante saus', '19,70'],
        ['117', 'Shi Jing Eend', 'eend met diverse groente', '19,70'],
        ['118', 'Pa Tsang Eend', 'gebakken eend op originele Kantonese wijze bereid met fijn gesneden kip, garnalen en varkenshaas in oestersaus', '21,70']
      ]},
      { id: 'a-rijst', name: 'Rijsttafels', items: [
        ['121', 'Chinese rijsttafel, voor 1 persoon', "Mini-loempia's, Koe Loe Yuk, gepaneerde garnalen, Babi Pangang, kipfilet in Gon Bao saus (licht pikant), Foe Yong Hai, saté en cassave kroepoek", '20,50'],
        ['123', 'Indische rijsttafel, voor 1 persoon', 'Rundvlees in ketjapsaus, Koe Loe Yuk, Babi Pangang, Ajam Ketjap, saté, kipfilet in Gon Bao saus (licht pikant), atjar, gebakken banaan en cassave kroepoek. Vanaf 2 personen extra Daging Roedjak (gestoofd vlees).', '21,50'],
        ['124', 'Chinees Indische rijsttafel, vanaf 4 personen', 'Babi Pangang, Koe Loe Yuk, Ajam Ketjap, gepaneerde garnalen, 2 soorten gestoofd rundvlees, gebakken banaan, saté, Foe Yong Hai, Gon Bao Kai en kroepoek', '19,50 p.p.'],
        ['125', 'Rijsttafel van Suus Garden, vanaf 4 personen', 'Mini voorgerecht, Babi Spek, Cha Sieuw, Gon Bao Yuk (varkenshaas in licht pittige saus), Latjap Kai (hete kipfilet in pikante saus), Hui Kou Ha (garnalen in pittige saus), Tausie Ngau Yuk (ossenhaas in zwarte bonensaus) en kroepoek', '23,00 p.p.'],
        ['126', 'Shi Chuan rijsttafel, voor 2-3 personen', "Met gratis kroepoek. Chinese hors d'oeuvre, Shi Chuan Ha (garnalen in scherpe shi chuansaus), Latjap Kai (hete kipfilet in licht pikante saus), Ajam Ketjap (gefrituurde kippendij), Tau Sie Ngau (ossenhaas in zwarte bonensaus)", '50,00'],
        ['127', 'Vegetarische rijsttafel, voor 2-3 personen', "Met gratis kroepoek. Tomatensoep, mini-loempia's, Foe Yong Hai, Pisang Goreng, Tau Fu Pao (tofu met groente), Lu Han Chai (diverse groente)", '39,50']
      ]}
    ]
  }
};
