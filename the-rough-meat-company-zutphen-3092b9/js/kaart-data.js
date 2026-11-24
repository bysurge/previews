// Alle gerechten en prijzen overgenomen van roughmeat.nl/kaart/diner/ en /kaart/take-away/ (stand feb 2026)
window.RMC_KAART = {
  diner: [
    { t: "Bites & starters", items: [
      ["Runderbitterballen van de BallenBar Amsterdam", "7 stuks", "€ 9,25"],
      ["Flammkuchen traditioneel", "met spek, prei & ui. Ook zonder vlees te bestellen", "€ 11,65"],
      ["Tatsuta kip", "gefrituurde kippendij, 7 stuks met chili mayo", "€ 12,25"]
    ]},
    { t: "Planken (also) to share", items: [
      ["Broodje kruidenboter", "brood, boter & kruidenboter", "€ 6,-"],
      ["Broodje deluxe", "brood, boter, kruidenboter & 2 soorten tapenades", "€ 9,-"],
      ["Lekker plankje", "brood, boter, kruidenboter, 2 soorten tapenades, olijfjes & rillette", "€ 12,-"],
      ["Porc-on-wood", "specialiteiten van het kloostervarken met boerenbrood", "€ 16,80"],
      ["Beef-on-wood", "pulled beef, roast rib & ossenworst met boerenbrood", "€ 17,60"],
      ["Vleesplank 'RMC'", "charcuterie van 4 verschillende soorten hammetjes, geserveerd met mosterd, cornichons & crostini's", "€ 15,85"],
      ["Super Plank", "hammetjes, paté, worst, ossenworst, pastrami, rillette & olijfjes, geserveerd met mosterd, crostini's, brood, tapenades, boter & kruidenboter", "€ 37,90"],
      ["Selectie voorgerechten", "bitterballen, Tatsuta kip, hammetjes, flammkuchen, broodje deluxe. Vanaf 2 personen te bestellen", "€ 17,80 p.p."],
      ["Kaasplank van onze wagen", "met bijpassende garnituren & notenbrood", "€ 16,25"]
    ]},
    { t: "Koude voorgerechten", items: [
      ["Caesar salade", "met Romaine sla, croutons, Caesar dressing & malse kip van de houtskooloven", "€ 14,25"],
      ["Steak tartaar", "op eigen wijze; met huisgemaakte piccalilly, fijne augurk en ui, frisse en croutons", "€ 16,50"],
      ["Rundercarpaccio", "met pijnboompitten, pesto, pluksla & parmezaan", "€ 16,75"],
      ["Rundercarpaccio Xtra Large", "met pijnboompitten, pesto, pluksla & parmezaan", "€ 18,90"],
      ["Zacht gegaard gebarbecued buikspek", "met bloemkool, Amsterdamse uitjes en pijnboompitdressing (warm). Met gerookte paling voor een meerprijs van € 3,-", "€ 19,70"]
    ]},
    { t: "Burgers & hotdogs", items: [
      ["Hotdog deluxe, pulled pork", "gestoofde uitjes, tomatensalsa & relish", "€ 14,50", "€ 16,75 met friet"],
      ["Black Angus beef burger classic", "sla, zuur, tomaatjes, gestoofde uitjes & gebakken ei", "€ 17,-", "€ 19,50 met friet"],
      ["Black Angus beef burger deluxe", "als de classic, met extra pulled pork, bacon & kaas", "€ 23,50", "€ 25,50 met friet"],
      ["Vegetarische burger van wortel en biet", "met zoet/zure bietjes, sla, tomaat, gestoofde uitjes, kaas, pittige mayonaise en een gebakken ei", "€ 17,-", "€ 19,50 met friet"]
    ]},
    { t: "Rough & tough kids", intro: "Natuurlijk hebben we voor de kleintjes ook vlees op de kaart… ook de kids vinden lekker gewoon lekker!", items: [
      ["Mini burger & friet", "", "€ 8,50"],
      ["Mini kip & friet", "", "€ 8,50"],
      ["Mini spareribs & friet", "1 rack", "€ 17,75"]
    ]},
    { t: "Porc & mixed grill", intro: "Spareribs zijn ook per 1,5 rack te bestellen.", items: [
      ["Spare ribs original", "per rack", "€ 21,75"],
      ["Spare ribs smoke rub", "per rack", "€ 21,75"],
      ["Spare ribs ultra hot", "per rack", "€ 21,75"],
      ["Mixed grill", "diverse stukjes vlees 200 gr: ribbetje, venkelworstje, kippendij & stukje steak", "€ 28,50"]
    ]},
    { t: "Steaks", steaks: true, intro: "Friet, 2 soorten salades en mayonaise worden standaard bij de warme hoofdgerechten geserveerd (kijk ook bij de xtra's).", breeds: [
      { b: "Hollands Weiderund", s: "gras gevoerd", items: [
        ["Diamanthaas", "200 gr", "€ 27,80"], ["Picanha", "200 gr", "€ 29,40"], ["Entrecote", "200 gr", "€ 31,25"], ["Rib eye", "220 gr", "€ 38,50"], ["Dry aged Tomahawk", "750 gr", "€ 140,-", "geschikt voor 2 personen"]
      ]},
      { b: "Hereford", s: "pul grass fed beef", items: [
        ["“RMC-plate”", "200 gr", "€ 31,-", "steak met gebakken kippenlevertjes, ui & spek"], ["Lady steak", "160 gr", "€ 41,50"], ["Ossenhaas", "220 gr", "€ 48,60"]
      ]},
      { b: "USA Black Angus", s: "corn fed beef", items: [
        ["Bavette", "220 gr", "€ 38,75"], ["Wagyu bavette", "180 gr", "€ 48,25", "Australisch graan gevoerd"], ["Prime rib", "500 gr", "€ 91,-", "geschikt voor 2 personen"], ["Porterhouse", "750 gr", "€ 152,50", "geschikt voor 2 personen"], ["Dry aged entrecote", "240 gr", "€ 54,90"], ["Dry aged rib eye", "240 gr", "€ 60,25"]
      ]},
      { b: "Black Angus Ocean", s: "grass fed beef", items: [
        ["Flank", "200 gr", "€ 35,50"], ["House steak", "200 gr", "€ 39,95"], ["Brisket", "200 gr", "€ 39,95", "zacht gegaard borststuk"]
      ]}
    ]},
    { t: "Chef's specials to share", items: [
      ["Tasting van bavette", "3 stuks bavette van verschillende runderrassen: Hollands, Amerikaans, Wagyu. 600 gr totaal, op 1 plank voor 2 personen te bestellen", "€ 54,95 p.p."],
      ["Chef's choice classic", "Rijke selectie van Patron Cuisinier Rinaldo van verschillende cuts van de diverse topkwaliteit runderrassen. Op een grote plank in het midden van de tafel, ongeveer 250 gr p.p. Vanaf 3 personen", "€ 44,95 p.p."],
      ["Chef's choice deluxe", "Rijke selectie van de chef met verschillende cuts van diverse topkwaliteit runderrassen, met dry aged vlees. Op een grote plank in het midden van de tafel, ongeveer 250 gr p.p. Vanaf 3 personen", "€ 54,95 p.p."],
      ["Plank leeg maar nog niet genoeg?", "Vraag ons team voor meer! De prijs is afhankelijk van het soort vlees en de hoeveelheid die je wilt.", ""]
    ]},
    { t: "Xtra's", items: [
      ["Aardappels uit de oven", "", "€ 5,85"], ["Aardappelgratin", "", "€ 5,85"], ["Seizoensgroenten", "haricots verts met spek en ui", "€ 5,85"], ["Kippenlevers met spek en ui", "", "€ 9,05"], ["Truffelrisotto", "± 200 gram", "€ 9,50"], ["Pepersaus / stroganoffsaus / paddenstoelensaus / bearnaisesaus", "", "€ 3,25"], ["Kruidenboter", "", "€ 2,35"], ["Knoflookmayonaise", "", "€ 2,-"], ["Truffelmayonaise", "", "€ 2,-"]
    ]},
    { t: "Nagerechten", items: [
      ["IJsje voor de kids", "", "€ 2,90"], ["Chocolade dessert", "", "€ 9,-"], ["Crème brûlée", "", "€ 9,-"], ["Seizoensdessert", "", "€ 9,-"], ["Drie bollen ijs", "smaken naar keuze", "€ 9,-"], ["Kaas van onze kaaswagen", "met bijpassende garnituren & notenbrood", "€ 16,25"], ["Huisgemaakte friandises", "", "€ 4,85"]
    ]}
  ],
  takeaway: [
    { t: "Burgers & hotdogs", items: [
      ["Hotdog deluxe, pulled pork", "pulled pork, gestoofde uitjes, tomatensalsa & dog sauce", "€ 14,50", "€ 16,75 met friet"],
      ["Black Angus beef burger classic", "sla, zuur, tomaatjes, gestoofde uitjes & gebakken ei", "€ 17,-", "€ 19,50 met friet"],
      ["Black Angus beef burger deluxe", "als de classic, met extra pulled pork, bacon & kaas", "€ 23,50", "€ 25,50 met friet"],
      ["Vegetarische burger van wortel en biet", "met zoet/zure bietjes, sla, tomaat, gestoofde uitjes, kaas, pittige mayonaise en een gebakken ei", "€ 17,-", "€ 19,50 met friet"]
    ]},
    { t: "Porc", items: [
      ["Spare ribs original", "per rack", "€ 21,75"],
      ["Spare ribs smoke rub", "per rack", "€ 21,75"],
      ["Spare ribs ultra hot", "per rack", "€ 21,75"]
    ]}
  ]
};
