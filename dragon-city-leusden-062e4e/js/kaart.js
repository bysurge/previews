// Afhaalkaart 2026 van Dragon City (nummers en prijzen uit de afhaalkaart, aangevuld met de online bestellijst)
window.KAART = [
  { t: 'Soepen', items: [
    ['31', 'Chinese kippensoep', '', '4,60'],
    ['32', 'Chinese tomatensoep', '', '4,60'],
    ['35', 'Szechuan soep', 'Licht-zure pikante soep met kip en groenten', '8,00'],
    ['36', 'Wan Ton soep', 'Heldere soep met Chinese kippasteitje en groenten', '8,00']
  ]},
  { t: "Loempia's", items: [
    ['38', 'Chinese loempia (2 st.)', 'Varkensvlees', '5,00'],
    ['39', 'Kip loempia', '', '7,90'],
    ['46', 'Loempia Dragon City', 'Met 1 st. saté en atjar', '10,20'],
    ['40', "Mini loempia's (8 st.)", '', '5,00']
  ]},
  { t: 'Voor- en bijgerechten', items: [
    ['41', 'Pangsit goreng (4 st.)', 'Gebakken flensjes', '5,30'],
    ['42', 'Gebakken banaan (4 st.)', '', '5,30'],
    ['43', 'Kippenbout', '', '5,50'],
    ['45', 'Gebakken garnalen (5 st.)', 'Met saus', '11,00'],
    ['47', 'Geroosterde spareribs (5 st.)', '', '11,00'],
    ['48', 'Witte rijst', '', '5,90'],
    ['', 'Halve witte rijst', '', '4,20'],
    ['49', 'Atjar', '', '4,00'],
    ['50', 'Kroepoek', '', '3,80'],
    ['51', 'Pindasaus of diverse saus (250 ml)', '', '3,50'],
    ['', 'Zoetzure saus (250 cc)', '', '3,50'],
    ['52', 'Patat', '', '4,00'],
    ['53', 'Frikandel', '', '3,00'],
    ['54', 'Cassave kroepoek', '', '4,00'],
    ['56', 'Saté kip (4 st.)', '', '8,00']
  ]},
  { t: 'Varkensvlees', note: 'Met witte rijst', items: [
    ['97', 'Babi pangang met pikante saus', '', '17,90'],
    ['98', 'Babi pangang met pindasaus', '', '18,50'],
    ['99', 'Babi pangang met zoetzure saus', '', '18,50'],
    ['100', 'Babi pangang met ketjapsaus', '', '18,80'],
    ['102', 'Varkensvlees met champignons', '', '16,50'],
    ['103', 'Varkensvlees met kerriesaus', '', '16,50'],
    ['104', 'Babi ketjap', 'Varkensvlees met ketjapsaus', '16,50'],
    ['105', 'Koe Loe Yuk', 'Gebakken vleesbolletjes met zoetzure saus', '17,50']
  ]},
  { t: 'Kip', note: 'Met witte rijst', items: [
    ['108', 'Kipfilet met champignons', '', '16,50'],
    ['110', 'Kipfilet met broccoli', '', '16,90'],
    ['111', 'Kip kerry', '', '16,50'],
    ['26', 'Kipfilet met ananas', '', '16,50'],
    ['27', 'Kipfilet met ketjapsaus', '', '16,50'],
    ['112', 'Koe Loe Kai', 'Gebakken kipbolletjes met zoetzure saus', '17,50']
  ]},
  { t: 'Ossenhaas', note: 'Met witte rijst', items: [
    ['113', 'Ossenhaas met champignons', '', '20,50'],
    ['114', 'Ossenhaas met Chinese groente', '', '21,50'],
    ['115', 'Ossenhaas met kerriesaus', '', '20,50'],
    ['116', 'Ossenhaas met pindasaus', '', '20,50'],
    ['141', 'Ossenhaas met broccoli', '', '22,00']
  ]},
  { t: 'Garnalen', note: 'Met witte rijst', items: [
    ['117', 'Garnalen met champignons', '', '21,00'],
    ['118', 'Garnalen met kerriesaus', '', '21,00'],
    ['120', 'Garnalen met oestersaus', '', '22,00'],
    ['121', 'Garnalen met broccoli', '', '22,00']
  ]},
  { t: 'Kantonese specialiteiten', note: 'Met witte rijst', items: [
    ['K1', 'Cha Sieuw', 'Geroosterd varkensvlees met Hoi Sin saus', '19,50'],
    ['K2', 'Vo Nam', 'Krokant buikspek met saus (apart)', '19,80'],
    ['K5', 'Sieuw Ab', 'Geroosterde Pekingeend met balisaus', '21,90'],
    ['K10', 'Yieuw Ko Kai', 'Kipfilet met cashewnoten en groente', '17,80'],
    ['K11', 'King Do Kai', 'Krokante kipreepjes met zoetzure saus', '18,50'],
    ['K13', 'Tau Sie Yuk', 'Varkensvlees met zwarte bonensaus', '17,50'],
    ['K14', 'Tau Sie Kai', 'Kipfilet met zwarte bonensaus', '17,50'],
    ['K15', 'Tau Sie Ngau', 'Ossenhaas met zwarte bonensaus', '21,00'],
    ['K16', 'Tau Sie Ha', 'Garnalen met zwarte bonensaus', '21,50'],
    ['K21', 'Ga Tjieuw Yuk', 'Varkensvlees met zwarte pepersaus', '17,50'],
    ['K22', 'Ga Tjieuw Kai', 'Kipfilet met zwarte pepersaus', '17,50'],
    ['K23', 'Ga Tjieuw Ngau', 'Ossenhaas met zwarte pepersaus', '21,00'],
    ['K24', 'Ga Tjieuw Ha', 'Garnalen met zwarte pepersaus', '21,50']
  ]},
  { t: 'Szechuanese specialiteiten', note: 'Met witte rijst', items: [
    ['S3', 'Szechuan Yuk', 'Varkensvlees met zoet pikante saus', '17,50'],
    ['S4', 'Szechuan Kip', 'Kipfilet met zoet pikante saus', '17,50'],
    ['S5', 'Szechuan Ngau', 'Ossenhaas met zoet pikante saus', '21,00'],
    ['S6', 'Szechuan Ha', 'Garnalen met zoet pikante saus', '21,50'],
    ['S7', 'Kong Po Yuk', 'Varkensvlees met pittige saus en cashewnoten', '18,00'],
    ['S8', 'Kong Po Kai', 'Kipfilet met pittige saus en cashewnoten', '18,00'],
    ['S9', 'Kong Po Ngau', 'Ossenhaas met pittige saus en cashewnoten', '22,00'],
    ['S10', 'Kong Po Ha', 'Garnalen met pittige saus en cashewnoten', '22,50'],
    ['S15', 'Tjieuw Jim Kai', 'Krokant kipreepje met Spaanse peper', '18,50']
  ]},
  { t: 'Indisch', note: 'Met witte rijst', items: [
    ['126', 'Nasi of bami rames met saté', '', '15,50'],
    ['128', 'Gado gado', '', '13,80'],
    ['129', 'Daging smoor', 'Gestoofd rundvlees in tomatensaus', '19,00'],
    ['130', 'Daging jawa', 'Gestoofd rundvlees in kerriesaus', '19,00']
  ]},
  { t: 'Nasi of bami', items: [
    ['59', 'Nasi of bami', 'Spiegelei, ham en vlees', '8,00'],
    ['241', 'Nasi of bami klein', '', '5,50'],
    ['61', 'Nasi of bami speciaal', 'Met 1/4 kip en 1 st. saté', '14,50'],
    ['66', 'Nasi of bami kerrie', 'Spiegelei, ham en vlees', '12,00'],
    ['67', 'Nasi of bami Yeung Chow', 'Gevuld met kipblokjes, vlees en groenten', '15,50']
  ]},
  { t: 'Mihoen en Chinese bami', items: [
    ['70', 'Mihoen met kipfilet', '', '14,00'],
    ['71', 'Mihoen met ossenhaas', '', '18,00'],
    ['72', 'Mihoen met garnalen', '', '18,50'],
    ['73', 'Mihoen Singapore', 'Noordzeegarnalen, Cha Sieuw en kipblokjes', '18,50'],
    ['76', 'Chinese bami met kipfilet', '', '14,00'],
    ['77', 'Chinese bami met ossenhaas', '', '18,00'],
    ['78', 'Chinese bami met garnalen', '', '18,50']
  ]},
  { t: 'Groenten en eieren', note: 'Met witte rijst', items: [
    ['81', 'Tjap tjoi met kipfilet', '', '15,00'],
    ['83', 'Tjap tjoi met ossenhaas', '', '19,00'],
    ['84', 'Tjap tjoi met garnalen', '', '19,50'],
    ['86', 'Foe yong hai met kipfilet', '', '15,00'],
    ['88', 'Foe yong hai met garnalen', '', '19,50'],
    ['89', 'Foe yong hai met ossenhaas', '', '19,00']
  ]},
  { t: 'Vegetarisch', note: 'Met witte rijst', items: [
    ['142', 'Nasi of bami vegetarisch', '', '8,00'],
    ['90', 'Loempia vegetarisch', '', '8,00'],
    ['91', 'Foe yong hai vegetarisch', '', '15,00'],
    ['92', 'Tjap tjoi vegetarisch', '', '15,00'],
    ['93', 'Mihoen vegetarisch', '', '14,50'],
    ['94', 'Chinese bami vegetarisch', '', '14,50'],
    ['95', 'Lo Hon Chai', 'Diverse Chinese groenten', '15,50'],
    ['96', 'Tao Fu', 'Gebakken tao fu met Chinese groenten', '16,50']
  ]},
  { t: 'Rijsttafels', note: 'Met witte rijst', items: [
    ['136', 'Indische rijsttafel, 2 personen', 'Kroepoek, saté, pisang goreng, babi pangang, atjar, ei, pinda\'s, daging smoor, gado gado, daging jawa', '27,50'],
    ['137', 'Chinese rijsttafel, 2 personen', 'Chinese kippensoep of tomatensoep, mini loempia\'s, foe yong hai kip, babi pangang, kip met groente, kroepoek, saté, tjap tjoi kip, Koe Loe Yuk (vleesbolletjes)', '30,50'],
    ['138', 'Kantonese rijsttafel, 2 personen', 'Chinese tomatensoep, Chinese loempia\'s (2 st.), Vo Nam (speenvarken), Tau Sie Ngau (ossenhaas in zwarte bonensaus), kroepoek', '45,00']
  ]},
  { t: 'Combinatiemenu', note: 'Met witte rijst. Kies uw schotels uit: 1 Chinese loempia\'s (4 st.), 2 spareribs (4 st.), 3 saté ajam (4 st.), 4 babi pangang, 5 babi ketjap, 6 Koe Loe Yuk, 7 varkensvlees met champignons, 8 Cha Sieuw, 10 tjap tjoi (kip), 11 foe yong hai (kip), 12 kip kerry, 13 Szechuan kip (licht pikante saus), 14 Tau Sie kip (zwarte bonensaus), 15 Ga Tjieuw kip (zwarte pepersaus), 17 kipfilet met ananas, 18 gado gado, 19 daging smoor (scherpe tomatensaus), 20 daging jawa (kerriesaus).', items: [
    ['134', '2 schotels naar keuze', 'Voor 2 personen', '23,00'],
    ['135', '3 schotels naar keuze', 'Voor 3 personen', '35,00']
  ]}
];
