/* Afhaal-prijslijst 2026 van Chinees Restaurant Lotus, overgenomen uit bestanden/Lotusafhaal2026.pdf.
   s = pikantheid (1 = zacht pikant, 2 = pikant, 3 = zeer pikant), r = inclusief witte rijst */
window.AFHAAL = [
  { t: "Soepen", items: [
    ["1", "Tomatensoep", "", "5,00"],
    ["2", "Kippensoep", "", "5,00"],
    ["3", "Haaienvinnensoep met krab", "", "5,70"],
    ["4", "Champignonsoep", "", "5,70"],
    ["5", "Groentensoep", "vegetarisch", "5,20"],
    ["6", "Wan tan soep", "vleesflensjes met groenten", "6,80"],
    ["7", "Peking-soep", "pikant / zuur", "6,80"],
    ["8", "Soep “van het huis”", "krab, Chinese champignons", "6,80"]
  ]},
  { t: "Voor- en bijgerechten", items: [
    ["9", "Pikante kroepoek", "", "4,30"],
    ["10", "Kroepoek", "", "3,90"],
    ["11", "Loempia", "", "8,00"],
    ["11a", "Loempia kip", "", "8,50"],
    ["12", "Loempia “Peking”", "Babi Pangang, 2 stokjes saté", "16,50"],
    ["13", "Mini loempia", "4 stuks met saus", "8,00"],
    ["13a", "Vegetarische mini loempia's", "8 stuks met saus", "7,00"],
    ["13b", "Kerrie driehoekjes", "8 stuks, krokant gefrituurd, vegetarisch, met saus", "7,00"],
    ["14", "Saté Babi", "varkensvlees, 4 stokjes", "8,00"],
    ["15", "Saté Ajam", "kipfilet, 4 stokjes", "8,00"],
    ["16", "Pangsit Goreng", "gebakken deeg met vlees en saus, 6 stuks", "5,60"],
    ["17", "Pisang Goreng", "gebakken banaan, 5 stuks", "5,60"],
    ["18", "Garnalen in deeglapjes gefrituurd", "4 stuks", "8,80"],
    ["20", "Tja Wan Tan", "gebakken vleespasteitjes", "6,00"],
    ["21", "Saus", "saté-, zoetzure of Babi Pangang saus", "4,00"],
    ["22 / 22a", "Patat / witte rijst", "", "4,00"]
  ]},
  { t: "Nasi of bami goreng", items: [
    ["23", "Nasi of Bami “van het huis”", "Babi Pangang, saté, rundvlees, Foe Yong Hai en vegetarische mini loempia's", "23,00"],
    ["24", "Nasi of Bami compleet", "Babi Pangang, Tjap Tjoy, kip en saté", "21,50"],
    ["25", "Nasi of Bami goreng", "", "8,80"],
    ["26", "Nasi of Bami speciaal", "½ kip en saté", "13,80"],
    ["27", "Nasi of Bami met 3 stokjes saté", "", "13,80"],
    ["28", "Nasi of Bami met gesneden kip en groenten", "", "16,00"],
    ["29", "Nasi of Bami met varkensvlees en groenten", "", "16,00"],
    ["30", "Nasi of Bami met ossenhaas en groenten", "", "19,50"],
    ["31", "Nasi of Bami met Chinese garnalen en groenten", "", "19,50"],
    ["32", "Tjou Fan", "gebakken rijst, garnaaltjes, vlees en groenten", "18,50"],
    ["33", "Tjou Ming", "Chinese bami, garnaaltjes, vlees en groenten", "19,00"]
  ]},
  { t: "Combinatiegerechten", note: "Met nasi of bami.", items: [
    ["34", "Koe You Fan / Mie", "Babi Pangang, Koe Loe Yuk en 2 stokjes saté", "20,50"],
    ["35", "Foe You Fan / Mie", "Babi Pangang, Foe Yong Hai en 2 stokjes saté", "20,50"],
    ["36", "Kai You Fan / Mie", "Babi Pangang, ½ kip en 2 stokjes saté", "20,50"],
    ["37", "Ha You Fan / Mie", "Babi Pangang, gebakken Chinese garnalen en 2 stokjes saté", "20,50"],
    ["38", "Tjap You Fan / Mie", "Babi Pangang, Tjap Tjoy en 2 stokjes saté", "21,00"],
    ["39", "Kip Kerrie You Fan / Mie", "Babi Pangang, kip kerrie en 2 stokjes saté", "22,50"],
    ["40", "Daging You Fan / Mie", "Babi Pangang, rundvlees en 2 stokjes saté", "22,50"],
    ["41", "Foe Tjap Fan / Mie", "Foe Yong Hai, Tjap Tjoy en 2 stokjes saté", "21,00"],
    ["42", "Mau You Fan / Mie", "Babi Pangang, kip met champignons en 2 stokjes saté", "21,00"],
    ["43", "Combinatiemenu speciaal", "Babi Pangang, Koe Loe Yuk, Tjap Tjoy en Foe Yong Hai", "24,50"]
  ]},
  { t: "Mihoen (mifang)", items: [
    ["44", "Mihoen speciaal", "kipfilet, varkenshaas en groenten", "17,50"],
    ["45", "Mihoen met kipfilet", "", "16,50"],
    ["46", "Mihoen met varkenshaas", "", "16,50"],
    ["47", "Mihoen met Chinese garnalen", "", "21,00"],
    ["48", "Mihoen met ossenhaas", "", "22,00"],
    ["49", "Mihoen “Singapore”", "garnaaltjes, kipfilet, Tja Sieuw en kerrie", "22,50"],
    ["50", "Mihoen “van het huis”", "Babi Pangang, Foe Yong Hai, rundvlees, saté en vegetarische mini loempia's", "26,50"],
    ["51", "Mihoen compleet", "Babi Pangang, Tjap Tjoy, kip en saté", "26,00"]
  ]},
  { t: "Chinese bami", items: [
    ["52", "Chinese bami met kipfilet en groenten", "", "17,50"],
    ["53", "Chinese bami met varkensvlees en groenten", "", "17,50"],
    ["54", "Chinese bami met ossenhaas en groenten", "", "22,00"],
    ["55", "Chinese bami met Chinese garnalen en groenten", "", "21,50"]
  ]},
  { t: "Groentengerechten", r: 1, items: [
    ["56", "Tjap Tjoy “van het huis”", "Babi Pangang en 2 stokjes saté", "23,50"],
    ["57", "Tjap Tjoy speciaal", "kipfilet en varkenshaas", "17,50"],
    ["58", "Tjap Tjoy met kipfilet", "", "16,50"],
    ["59", "Tjap Tjoy met varkenshaas", "", "16,50"],
    ["60", "Tjap Tjoy met ossenhaas", "", "23,50"],
    ["61", "Tjap Tjoy met Chinese garnalen", "", "22,50"]
  ]},
  { t: "Eiergerechten", r: 1, items: [
    ["62", "Foe Yong Hai “van het huis”", "Babi Pangang en 2 stokjes saté", "23,50"],
    ["64", "Foe Yong Hai met kip", "", "16,50"],
    ["65", "Foe Yong Hai", "", "16,00"],
    ["67", "Foe Yong Hai met Chinese garnalen", "", "22,00"]
  ]},
  { t: "Vegetarisch", r: 1, items: [
    ["68", "Exclusief groentenmaal", "vers gemengde groenten", "18,80"],
    ["69", "Vegetarische Tjap Tjoy", "", "16,50"],
    ["70", "Tahoe met Chinese champignons", "", "17,50"],
    ["71", "Vegetarische Foe Yong Hai", "", "16,00"],
    ["72", "Vegetarische mihoen", "", "16,00"],
    ["72a", "Vegetarische Chinese bami", "", "17,00"],
    ["73", "Vegetarische nasi of bami", "", "8,70"]
  ]},
  { t: "Varkensvlees", r: 1, items: [
    ["74", "Babi Pangang", "", "19,00"],
    ["76", "Babi Pangang met satésaus", "", "19,50"],
    ["77", "Babi Pangang met kerriesaus", "", "20,00"],
    ["78", "Babi Pangang met Bali-saus", "", "20,00"],
    ["79", "Babi Ketjap", "", "21,00"],
    ["80", "Babi Pangang spek (speenvarken)", "gemarineerde, geroosterde speklappen", "23,00"],
    ["81", "Varkenshaas met Chinese garnalen en champignons", "", "22,50"],
    ["82", "Varkenshaas met cashewnoten", "", "20,50"],
    ["83", "Varkenshaas met champignons", "", "19,00"],
    ["84", "Varkenshaas met kerriesaus", "", "19,00"],
    ["85", "Tausi Yuk", "vlees met zwarte sojabonensaus", "21,00"],
    ["86", "Tja Sieuw", "gemarineerde, geroosterde Kantonese Babi Pangang", "21,50"],
    ["87", "Koe Loe Yuk", "gepaneerde vleesballetjes met zoetzure saus", "17,50"]
  ]},
  { t: "Kip", r: 1, items: [
    ["88", "Kipfilet met kerriesaus", "", "18,80"],
    ["89", "Kipfilet met ananas in zoetzure saus", "", "18,70"],
    ["90", "Kipfilet met champignons", "", "18,70"],
    ["91", "Kipfilet met cashewnoten", "", "20,50"],
    ["92", "Kipfilet met pikante knoflooksaus", "", "21,00"],
    ["93", "Kipfilet met zoete ketjapsaus", "", "19,70"],
    ["94", "Kipfilet met pikante Bali-saus", "", "19,50"],
    ["95", "Kipfilet met Chinese garnalen en champignons", "", "22,50"],
    ["96", "Tausi Kai", "kipfilet met zwarte sojabonensaus", "21,00"],
    ["97", "Peking Kai", "gepaneerde kipfilet met zoetzure ketjapsaus", "21,00"],
    ["98", "Koe Loe Kai", "gepaneerde kipballetjes met zoetzure saus", "18,50"]
  ]},
  { t: "Vis en garnalen", r: 1, items: [
    ["99", "Gepaneerde Chinese garnalen", "", "18,50"],
    ["100", "Chinese garnalen met kerriesaus", "", "21,50"],
    ["101", "Chinese garnalen met pikante knoflooksaus", "", "22,50"],
    ["102", "Chinese garnalen met Chinese champignons", "", "22,00"],
    ["103", "Grote garnalen met champignons", "", "21,50"],
    ["104", "Gepaneerde tongfilet met pikante Bali-saus", "", "24,50"],
    ["105", "Gepaneerde tongfilet met oestersaus", "", "24,50"]
  ]},
  { t: "Peking-eend", r: 1, items: [
    ["106", "Peking-eend met zoetzure saus", "", "22,50"],
    ["107", "Peking-eend met Chinese champignons", "", "23,00"],
    ["108", "Peking-eend met verse champignons", "", "22,50"],
    ["109", "Peking-eend met pikante Bali-saus", "", "23,00"]
  ]},
  { t: "Ossenhaas", r: 1, items: [
    ["110", "Ossenhaas met verse champignons", "", "23,50"],
    ["111", "Ossenhaas met kerriesaus", "", "23,50"],
    ["112", "Ossenhaas met broccoli", "", "23,50"],
    ["112a", "Ossenhaas met zoete ketjapsaus", "", "23,50"],
    ["113", "Ossenhaas met zwarte sojabonensaus", "", "25,50"],
    ["114", "Ossenhaas met pittig gekruide Hui-Ko saus", "", "25,50"]
  ]},
  { t: "Tipan (hotpan)", r: 1, note: "Tipan is een zeer speciale manier van bereiden, waarbij het gerecht op een gloeiend hete gietijzeren kookplaat wordt gegrild.", items: [
    ["115", "Tipan Chinese garnalen", "", "24,00"],
    ["116", "Tipan kipfilet", "", "21,00"],
    ["117", "Tipan varkenshaas", "", "21,00"],
    ["118", "Tipan ossenhaas en champignons", "", "26,00"],
    ["119", "Tipan “van het huis”", "garnalen, vlees en kip", "26,00"]
  ]},
  { t: "Indische gerechten", r: 1, items: [
    ["121", "Daging Ketjap", "gestoofd rundvlees in zoete ketjapsaus", "22,00"],
    ["122", "Halve haan met pikante saus", "", "11,80"],
    ["123", "Halve haan met zoetzure saus", "", "11,80"],
    ["126", "Gado-Gado", "groentenmix in satésaus", "12,50"],
    ["127", "Ajam Pangang", "geroosterde kip", "19,80"]
  ]},
  { t: "Kindermenu", items: [
    ["128", "Patat met frikandel en mayonaise", "", "7,30"],
    ["129", "Patat met knakworst en mayonaise", "", "7,30"],
    ["130", "Patat met saté en mayonaise", "", "8,00"],
    ["131", "Patat met ½ kip en mayonaise", "", "8,00"],
    ["132", "Patat met kipnuggets en mayonaise", "", "8,00"]
  ]},
  { t: "Rijsttafels", items: [
    ["141", "Chinese rijsttafel", "vanaf 2 personen: tomaten- of kippensoep, Koe Loe Yuk, Babi Pangang, Foe Yong Hai, Tjap Tjoy, kip kerrie, saté, kroepoek en rijst", "24,80 p.p."],
    ["143", "Chinese Indische rijsttafel compleet", "vanaf 4 personen: mini loempia's, Babi Pangang, Foe Yong Hai, kip kerrie, Pangsit Goreng, Tjap Tjoy, Daging Ketjap, saté, gebakken banaan en rijst", "24,80 p.p."],
    ["145", "Kantonese rijsttafel", "vanaf 2 personen: WanTan soep, vleesflensjes (krokant), Gon Bao garnalen (donker pittig gekruid), King Do Kai (licht gepaneerde kipfilet met zoetzure, pikante saus), ossenhaas met zwartebonensaus en rijst", "28,80 p.p."]
  ]},
  { t: "Chinese specialiteiten", r: 1, note: "Originele Chinese specialiteiten uit 4 culinaire keukens: Peking, Shanghai, Sichuan en Kanton.", items: [
    ["201", "Tiyan Kai", "droog gebakken kipfilet met 5 kruiden, peper/zout en groenten", "21,50", 2],
    ["202", "King Do Kai", "licht gepaneerde kipfilet in zoetzure, pikante saus", "21,50", 1],
    ["203", "Gon Bao Kai", "kipfilet met verse pepers, groenten en cashewnoten in Sichuan-stijl", "22,50", 3],
    ["205", "Sichuan Kai", "kipfilet met hete pepers in Sichuan-saus", "21,00", 3],
    ["206", "Hui Ko Kai", "kipfilet met groenten in speciaal gekruide saus", "20,50", 2],
    ["207", "King Do Yuk", "licht gepaneerde varkenshaas in zoetzure, pikante saus", "21,50", 1],
    ["208", "Gon Bao Yuk", "varkenshaas met verse pepers, groenten en cashewnoten in Sichuan-stijl", "22,50", 3],
    ["213", "Chao Sang Xian", "combinatie van garnalen, kip en vlees", "23,00"],
    ["214", "Sang Kwak", "tongfilet, Chinese garnalen en krab in pikante chilisaus", "28,80", 1],
    ["215", "Peking-eend in Peking-stijl", "", "24,50"],
    ["216", "Gon-Bao Naug", "ossenhaas in donker pittige saus, Sichuan-stijl", "26,00", 3],
    ["217", "Sichuan Naug", "ossenhaas met verse chili in Sichuan-saus", "26,00", 3],
    ["219", "Gon Bao Ha", "Chinese garnalen met cashewnoten in Sichuan-stijl", "25,50", 3],
    ["220", "Vlees in 3 variëteiten", "geroosterd speenvarken, Babi Pangang en Tja Sieuw uit drie verschillende Chinese keukens", "26,50"]
  ]},
  { t: "Thaise specialiteiten", r: 1, items: [
    ["221", "Bankok Ha", "Thaise garnalen met verse pepers, knoflook en groenten", "24,00", 3],
    ["222", "Bankok Yuk", "varkenshaas met verse pepers, knoflook en groenten", "21,50", 3],
    ["223", "Bankok Naug", "ossenhaas met verse pepers, knoflook en groenten", "26,00", 3],
    ["224", "Kip à la Thailand", "kipfilet met verse pepers, knoflook en groenten", "21,50", 3]
  ]}
];
