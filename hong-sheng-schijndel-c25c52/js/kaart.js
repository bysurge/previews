// Afhaal- en à-la-cartekaart Hong Sheng ("Speciale afhaal prijslijst 2026"), nummers zoals op hun kaart.
// [nummer, naam, omschrijving, prijs]
window.KAART = [
  { id: "soep", t: "Soepen", items: [
    ["1", "Wan tan soep", "", "6,00"], ["2", "Soto ayam", "Indische kippensoep", "4,80"], ["3", "Hete Peking soep", "", "5,80"],
    ["4", "Kippensoep", "", "4,50"], ["5", "Haaienvinnensoep", "", "4,80"], ["6", "Tomatensoep", "", "4,50"],
    ["7", "Champignonsoep", "", "5,00"], ["9", "Soep “Hong Sheng”", "gebonden vissoep", "5,80"]
  ]},
  { id: "voor", t: "Voor- en bijgerechten", items: [
    ["10", "Loempia “Hong Sheng”", "extra gevuld met garnalen, vlees en champignons", "6,50"], ["11", "Loempia speciaal", "", "5,50"],
    ["11a", "Loempia kip", "", "6,50"], ["12", "Mini loempia's (4 stuks)", "", "5,60"], ["12k", "Vegetarische mini loempia's met saus (10 stuks)", "", "5,30"],
    ["13", "Kroepoek (2 vellen)", "", "4,50"], ["14", "Cassave crackers", "", "4,00"], ["15", "Kipsaté (4 stokjes)", "", "8,00"],
    ["16", "Saté babi", "varkenshaas", "8,00"], ["17", "Saté garnalen", "", "11,50"], ["18", "Pindasaus", "", "4,00"],
    ["19", "Pikante saus", "", "4,00"], ["20", "Witte rijst klein", "", "4,20"], ["21", "Atjar", "", "4,00"],
    ["22", "Pisang goreng (6 stuks)", "", "5,50"], ["23", "Pangsit goreng (6 stuks)", "", "6,00"], ["25", "Kerriedriehoekjes (10 stuks)", "", "5,30"]
  ]},
  { id: "nasi", t: "Nasi", items: [
    ["26", "Nasi goreng met ei en ham", "", "8,00"], ["27", "Nasi goreng speciaal", "kip, saté en atjar", "12,00"],
    ["28", "Nasi goreng met saté (3 stokjes)", "", "12,00"], ["29", "Nasi goreng met gesneden kip", "", "12,50"],
    ["31", "Nasi goreng Java", "gebakken rijst met groenten, vlees, garnalen en kerriepoeder", "13,50"],
    ["32", "Chinese nasi", "nasi met garnalen, tsja sieuw en groenten", "13,50"], ["33", "Nasi goreng met Chinese garnalen", "", "17,00"],
    ["34", "Nasi goreng “Hong Sheng”", "babi pangang, foe yong hai, 1/4 kip, saté en kroepoek", "21,80"],
    ["35", "Nasi goreng compleet (2 personen)", "", "29,00"], ["36", "Nasi goreng met babi pangang en foe yong hai", "", "15,00"],
    ["37", "Nasi goreng met babi pangang en koe loe yuk", "", "15,00"]
  ]},
  { id: "bami", t: "Bami", items: [
    ["38", "Bami goreng met ei en ham", "", "8,00"], ["39", "Bami goreng speciaal", "", "12,00"], ["40", "Bami goreng met saté", "", "12,00"],
    ["41", "Bami goreng met gesneden kip", "", "12,50"], ["43", "Bami goreng Java", "", "13,50"], ["44", "Bami goreng met Chinese garnalen", "", "17,00"],
    ["45", "Bami goreng met babi pangang en foe yong hai", "", "15,00"], ["46", "Bami goreng met babi pangang en koe loe yuk", "", "15,00"],
    ["47", "Chinese bami speciaal", "", "13,50"], ["48", "Bami goreng “Hong Sheng”", "", "21,80"], ["49", "Indische bami goreng", "", "13,00"],
    ["50", "Bami goreng compleet (2 personen)", "", "29,00"]
  ]},
  { id: "mihoen", t: "Mihoen", items: [
    ["61", "Mihoen goreng met vlees", "", "14,00"], ["62", "Mihoen goreng speciaal met gesneden kip", "", "14,00"],
    ["64", "Mihoen goreng met Chinese garnalen", "", "17,50"], ["64a", "Mihoen goreng met ossenhaas", "", "17,50"],
    ["65", "Mihoen Java", "", "16,50"], ["66", "Mihoen goreng “Hong Sheng”", "", ""], ["67", "Mihoen goreng compleet (2 personen)", "", "31,50"]
  ]},
  { id: "combi", t: "Combinatieschotels", note: "Met één grote rijst, nasi of bami. Alle combinaties 22,00.", items: [
    ["K1", "Babi pangang, Chinese garnalen, saté", "", "22,00"], ["K2", "Koe loe yuk, babi spek, saté", "", "22,00"],
    ["K3", "Babi pangang, kip kerrie, saté", "", "22,00"], ["K4", "Babi pangang, tjap choy, saté", "", "22,00"],
    ["K5", "Koe loe yuk, tjap choy, saté", "", "22,00"], ["K6", "Koe loe yuk, kip kerrie, saté", "", "22,00"],
    ["K7", "Koe loe yuk, foe yong hai, saté", "", "22,00"], ["K8", "Babi pangang, koe loe yuk, saté", "", "22,00"],
    ["K9", "Foe yong hai, babi pangang, saté", "", "22,00"], ["K10", "Foe yong hai, tjap choy, saté", "", "22,00"]
  ]},
  { id: "groente", t: "Groenten en omelet", items: [
    ["138", "Tofu", "", "16,00"], ["63", "Tjap choy vegetarisch", "", "13,80"], ["68", "Tjap choy met varkenshaas", "", "14,80"],
    ["69", "Tjap choy met gesneden kip", "", "14,80"], ["70", "Tjap choy met runderhaas", "", "17,80"], ["71", "Tjap choy met garnalen", "", "17,80"],
    ["72", "Foe yong hai", "", "14,50"], ["76", "Foe yong hai met varkenshaas", "", "15,50"],
    ["73", "Foe yong hai speciaal met gesneden kip", "", "15,50"], ["75", "Foe yong hai met Chinese garnalen", "", "18,50"]
  ]},
  { id: "varken", t: "Varkensvlees", items: [
    ["77", "Babi pangang", "pikante, zoetzure saus", "17,00"], ["78", "Babi spek met pikante saus", "", "17,50"], ["79", "Tja sieuw", "", "17,50"],
    ["80", "Babi pangang “Hong Sheng”", "", "19,50"], ["81", "Koe loe yuk", "", "16,50"], ["82", "Varkenshaas met kerriesaus", "", "16,30"],
    ["83", "Babi ketjap", "", "17,30"], ["84", "Varkenshaas met pikante saus", "", "16,50"], ["85", "Varkenshaas met champignons", "", "16,50"],
    ["86", "Varkenshaas met ketjapsaus", "", "16,50"], ["87", "Indische babi ketjap", "", "17,30"], ["89", "Varkenshaas met Chinese champignons", "", "16,50"],
    ["143", "Babi sambal", "", "17,50"], ["146", "Babi pangang boemboe Bali", "", "18,00"]
  ]},
  { id: "kip", t: "Kip", items: [
    ["90", "Kipfilet met speciale chilisaus", "", "17,50"], ["91", "Kipfilet met ananas", "", "16,50"], ["92", "Kipfilet met kerriesaus", "", "16,50"],
    ["93", "Kipfilet teriyaki", "", "17,50"], ["94", "Koe loe kai", "", "16,80"], ["95", "Kipfilet met pikante saus", "", "16,50"],
    ["96", "Kipfilet met champignons", "", "16,50"], ["97", "Kipfilet met ketjapsaus", "", "16,80"], ["98", "Kipfilet met cashewnoten", "", "16,80"],
    ["98a", "Kipfilet met knoflooksaus en groenten", "", "16,50"], ["99", "Kipfilet met Chinese champignons", "", "16,50"],
    ["100", "Kipfilet met Chinese zwartebonensaus", "", "17,30"], ["101", "Kung po kai", "", "17,50"], ["145b", "Thaise kip", "", ""],
    ["146b", "King do kai", "", ""], ["145", "Ajam Bali", "", "17,30"], ["145a", "Ajam pangang", "", "17,30"]
  ]},
  { id: "rund", t: "Runderhaas", items: [
    ["2a", "Lembu Bali", "", "19,80"], ["87a", "Runderhaas teriyaki", "", "20,80"], ["42", "Runderhaas met oestersaus", "", "19,80"],
    ["89a", "Hap tsun niu rou", "", "19,80"], ["102", "Runderhaas met pikante saus", "", "19,80"], ["102a", "Runderhaas met ketjapsaus", "", "19,80"],
    ["103", "Runderhaas met kerriesaus", "", "19,80"], ["104", "Runderhaas met kung po saus", "", "20,80"],
    ["105", "Runderhaas met Chinese champignons", "", "19,80"], ["106", "Runderhaas met paprika in zwartebonensaus", "", "19,80"],
    ["160", "Runderhaas met broccoli", "", "19,80"]
  ]},
  { id: "vis", t: "Garnalen en vis", items: [
    ["37a", "Chinese garnalen met knoflooksaus", "", "21,50"], ["46a", "Chinese garnalen met Thaise saus", "", "21,50"],
    ["107", "Chinese garnalen met ketjapsaus", "", "21,50"], ["108", "Chinese garnalen met kerriesaus", "", "21,50"],
    ["109", "Chinese garnalen met pikante saus", "", "21,50"], ["110", "Chinese garnalen met champignons", "", "21,50"],
    ["111", "Chinese garnalen met Chinese champignons", "", "21,50"], ["112", "Chinese garnalen met zwartebonensaus", "", "21,50"],
    ["113", "Tjar tai ha", "", "21,50"], ["114", "Sam sin", "", "20,50"], ["115", "Sang kwart", "", ""], ["116", "Kung po ha", "", "21,50"],
    ["118", "Tongfilet met pikante saus", "", "20,50"], ["119", "Tongfilet met kerriesaus", "", "20,50"]
  ]},
  { id: "eend", t: "Peking eend", items: [
    ["117", "Geroosterde Peking eend met hoisinsaus", "", "20,50"], ["120", "Peking eend met ananas", "", "20,50"],
    ["139", "Pat po ab", "", "20,50"], ["140", "Peking eend met gon bao saus", "", "20,50"], ["161", "Peking eend met Chinese champignons", "", "20,50"]
  ]},
  { id: "indisch", t: "Indisch", items: [
    ["130", "Nasi rames gewoon", "", "14,00"], ["131", "Nasi rames met 2 stokjes saté", "", "16,00"], ["132", "Nasi rames speciaal", "", "16,00"],
    ["133", "Bami rames gewoon", "", "14,00"], ["134", "Bami rames met 2 stokjes saté", "", "16,00"], ["135", "Bami rames speciaal", "", "16,00"],
    ["136", "Gado gado", "", "13,50"]
  ]},
  { id: "teppan", t: "Teppanyaki", note: "Van de ijzeren plaat.", items: [
    ["147", "Teppanyaki kipfilet", "", "21,30"], ["148", "Teppanyaki ossenhaas", "", "23,00"],
    ["149", "Teppanyaki tongfilet", "", "23,00"], ["150", "Teppanyaki garnalen", "", "23,00"]
  ]},
  { id: "rijst", t: "Rijsttafels", note: "Inclusief nasi, bami of witte rijst.", items: [
    ["123", "Chinese rijsttafel, 1 persoon", "", "25,00"], ["124", "Chinese rijsttafel, 2 personen", "", "46,00"], ["125", "Chinese rijsttafel, 4 personen", "", "80,00"],
    ["126", "Indische rijsttafel, 1 persoon", "", "25,00"], ["127", "Indische rijsttafel, 2 personen", "", "46,00"], ["128", "Indische rijsttafel, 4 personen", "", "80,00"],
    ["129a", "Chinees-Indische rijsttafel, 2 personen", "", "48,50"], ["129b", "Chinees-Indische rijsttafel, 4 personen", "", "90,00"]
  ]},
  { id: "kind", t: "Kindermenu's", items: [
    ["24", "Patates frites", "", "4,50"], ["162", "1/4 kip met frites en appelmoes", "", "7,50"],
    ["163", "Saté met frites en appelmoes", "", "7,50"], ["164", "Frikandel of kroket met frites en appelmoes", "", "7,50"]
  ]}
];
