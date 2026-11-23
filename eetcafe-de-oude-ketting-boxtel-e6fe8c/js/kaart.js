// Menukaart De Oude Ketting (herfst/winter), overgenomen van hun PDF's.
// [naam, omschrijving, prijs]
window.KAART = {
  lunch: {
    noot: "Lunch is te bestellen tot 16:00 uur.",
    pdf: "https://deoudeketting.nl/wp-content/uploads/2026/10/lunch.pdf",
    groepen: [
      { t: "Soepen", s: "Met stokbrood en kruidenboter", items: [
        ["Tomatensoep (vega optie)", "soepballen, bosui", "7,00"],
        ["Franse uiensoep", "croutons met kaas", "7,00"],
        ["Bospaddenstoelensoep (v)", "room, bosui", "7,00"],
        ["Erwtensoep", "roggebrood, katenspek, rookworst, bosui", "7,50"],
        ["Soep van de dag", "seizoenssoep", "7,00"]
      ]},
      { t: "Tosti's", items: [
        ["Tosti Ketting (v)", "kaas, tomaat, rode ui, basilicumpesto, ketchup", "8,50"],
        ["Tosti Brie (v)", "brie, honing, tomaat, walnoot", "9,95"],
        ["Tosti ham/kaas", "ham, kaas, ketchup", "7,95"],
        ["Madammeke", "ham, kaas, gebakken ei, ketchup", "8,95"]
      ]},
      { t: "Specials", items: [
        ["Gehaktbal 'De Oude Ketting'", "uit de jus, augurk, stokbrood, mosterdmayonaise", "11,95"],
        ["Willy's Special", "2 sneetjes brood, gehaktbal, gesmoorde ui, cheddar, gebakken ei, sla, passend garnituur, mosterdmayonaise", "16,95"],
        ["12-uurtje", "2 sneetjes brood, gebakken ei, ham, mini gehaktbal, kopgarnituur, mosterdmayonaise, tomatensoep", "16,50"]
      ]},
      { t: "Eiergerechten", s: "Geserveerd met passend garnituur", items: [
        ["Uitsmijter", "2 sneetjes brood, 3 eieren, ham of kaas of spek", "10,95"],
        ["Boerenomelet", "2 sneetjes brood, 3 eieren, paprika, spek, ui, champignon", "13,50"],
        ["Uitsmijter 'De Oude Ketting'", "3 sneetjes brood, 2 eieren, ham, kroket, huzarensalade, ei, mayonaise, mosterd", "15,50"]
      ]},
      { t: "Warme gerechten", items: [
        ["Schnitzel (200 | 350 gr.)", "champignon-, peper- of stroganoffsaus, salade, friet, mayonaise", "15,95 | 17,95"],
        ["Saté van kippendij", "satésaus, gefrituurde uitjes, atjar, kroepoek, stokbrood", "17,95"],
        ["Fish & chips", "kibbeling, ravigottesaus, salade, friet, mayonaise", "19,95"],
        ["Biefstuk met brood", "kogelbiefstuk, 2 sneetjes brood, jus, kruidenboter", "19,50"],
        ["Black Angus Burger 'De Ketting'", "100% Black Angus, Italiaanse bol, uiensaus, cheddar, bacon, sla, pomodori, augurk, salade, friet, mayonaise", "17,50"],
        ["Vega Burger 'De Ketting'", "vegaburger, Italiaanse bol, uiensaus, sla, pomodori, augurk, salade, friet, mayonaise", "17,50"]
      ]},
      { t: "Op de boterham", s: "2 sneetjes desembrood, wit of bruin, met sla en passend garnituur", items: [
        ["Gerookte zalm", "ei, rode ui, mosterd-dillesaus", "15,50"],
        ["Carpaccio", "rucola, truffelmayonaise, zongedroogde tomaat, pecorino, gefrituurde uitjes", "14,50"],
        ["Geitenkaas (vega optie)", "gegratineerde geitenkaas, honing, appel, walnoot, spekjes, mosterd-dillesaus", "12,95"],
        ["Brie uit de oven (v)", "rucola, honing, walnoot, tomaat", "12,95"],
        ["Trio van hummus (vegan)", "met toast", "12,95"],
        ["Karaage kip", "sticky zoetzure saus met sesamzaadjes", "13,50"],
        ["Proeverij van kroketjes", "3 kleine broodjes, garnaal, kaas, pulled pork", "15,50"],
        ["Warme beenham", "van de plaat, gebakken ui, champignons, mosterd-dillesaus", "12,50"],
        ["2 kroketten op brood", "keuze uit Bourgondische of vega", "10,95"],
        ["Worstenbroodje", "van het lokale Broodwinkeltje", "3,75"],
        ["Half om half deluxe", "boterham carpaccio, boterham gerookte zalm", "16,50"]
      ]},
      { t: "Maaltijdsalades", s: "Met sla en passend garnituur. Stokbrood en kruidenboter + 3,50", items: [
        ["Geitenkaas (vega optie)", "gegratineerde geitenkaas, honing, appel, walnoot, spekjes, mosterd-dillesaus", "15,95"],
        ["Carpaccio", "truffelmayonaise, zongedroogde tomaat, pecorino, gefrituurde uitjes", "16,50"]
      ]}
    ]
  },
  diner: {
    noot: "Diner is te bestellen vanaf 16:00 uur. Bij alle hoofdgerechten serveren we frietjes, gebakken aardappelen en een schaaltje warme groente of sla.",
    pdf: "https://deoudeketting.nl/wp-content/uploads/2026/10/diner.pdf",
    groepen: [
      { t: "Voorgerechten", s: "Stokbrood en kruidenboter + 3,50", items: [
        ["Broodplankje 'De Ketting'", "versgebakken breekbrood, truffelmayonaise, kruidenboter, aioli", "7,50"],
        ["Camembert uit de oven (v)", "versgebakken breekbrood, honing", "11,50"],
        ["Carpaccio", "rucola, truffelmayonaise, pecorino, zongedroogde tomaat, gefrituurde uitjes", "13,00"],
        ["Gamba's pil pil", "gebakken in knoflookolie en chili, stokbrood", "14,95"]
      ]},
      { t: "Soepen", s: "Stokbrood en kruidenboter + 3,50", items: [
        ["Tomatensoep (vega optie)", "", "7,00"],
        ["Franse uiensoep", "", "7,00"],
        ["Bospaddenstoelensoep (v)", "", "7,00"],
        ["Erwtensoep", "", "7,50"],
        ["Soep van de dag", "", "7,00"]
      ]},
      { t: "Vis", items: [
        ["Gegrilde zalmfilet", "citroen-dillesaus, seizoensgroenten", "21,95"],
        ["Fish & chips", "", "19,95"],
        ["Pasta gamba", "gamba's, tagliatelle, chili-roomsaus, seizoensgroenten", "22,50"]
      ]},
      { t: "Vlees", items: [
        ["Schnitzel 'De Oude Ketting' (200 | 350 gr.)", "gebakken ui, champignons, kaas", "19,95 | 21,95"],
        ["Schnitzel 'Boer' (200 | 350 gr.)", "gebakken ui, champignons, spek, paprika, uienjus", "19,95 | 21,95"],
        ["Gehaktbal 'De Oude Ketting' speciaal", "gebakken ui, champignons, cheddar", "19,95"],
        ["Varkenshaasmedaillons", "seizoensgroenten, champignon-, peper- of stroganoffsaus", "19,95"],
        ["Stoofpotje van wild", "aardappelpuree, seizoensgroente", "23,50"],
        ["Biefstuk", "kogelbiefstuk, champignon-, peper- of stroganoffsaus", "24,50"],
        ["Stamppotje van de dag", "wisselend, bijpassend vlees, uienjus, met zuur", "19,95"],
        ["Pasta kip", "kippendij, tagliatelle, roomsaus, pecorino", "19,95"],
        ["Saté van kippendij", "satésaus, gefrituurde uitjes, atjar, kroepoek", "19,95"],
        ["Oertijd sabel", "varkenshaas, kogelbiefstuk, kippendij, mini gehaktbal, aioli, satésaus", ""],
        ["Spareribs", "ribs, aioli", "24,50"],
        ["Black Angus Burger 'De Ketting'", "Black Angus, Italiaanse bol, uiensaus, cheddar, bacon, ui, sla, pomodori, augurk", "19,95"]
      ]},
      { t: "Vegetarisch en vegan", items: [
        ["Vega Burger 'De Ketting'", "", "19,95"],
        ["Gegrilde groenten uit de oven", "diverse groenten, aardappel, pestomarinade", "21,95"],
        ["Pasta met bospaddenstoelen", "bospaddenstoelenroomsaus, broccoli, pecorino", "19,50"]
      ]},
      { t: "Voor de kids", s: "De hele dag te bestellen", items: [
        ["Worstenbroodje", "", "3,75"],
        ["Klein soepje", "", "5,50"],
        ["Spareribs", "kleine portie ribs, aioli, salade, friet, mayonaise", "14,50"],
        ["Fish & chips", "", "14,50"],
        ["Kroket, frikandel of kipnuggets", "appelmoes, friet, mayonaise", "9,95"],
        ["Poffertjes", "stroop, poedersuiker, toppings", "9,95"],
        ["Pannenkoek (ook glutenvrij)", "stroop, poedersuiker, toppings", "9,95"]
      ]},
      { t: "Nagerechten", s: "Vanaf 16:00 uur", items: [
        ["Chocolade duo", "lavacake, chocolade-ijs, witte chocoladesaus", "9,50"],
        ["Stoofperen parfait", "parfait van Bastognekoek, stoofpeer", "7,50"],
        ["Huisgemaakte tiramisu", "lange vingers, koffie, mascarpone, cacao", "7,50"],
        ["Mini-appeltaartje", "kaneelijs, vanillesaus, slagroom", "8,50"],
        ["Pecan toffee meringue (glutenvrij)", "meringueschuim, toffee, pecannoot, karamelsaus", "6,50"]
      ]},
      { t: "Gebak", s: "De hele dag", items: [
        ["Schuimgebak", "hazelnoot, advocaat, tiramisu, karamel, witte chocolade of Christoffel", "4,95"],
        ["Appelgebak", "met slagroom + 0,50", "4,50"],
        ["Apfelstrudel", "kaneelijs, vanillesaus, poedersuiker, slagroom", "6,95"],
        ["Pecan toffee meringue (glutenvrij)", "", "6,50"],
        ["Seizoensgebak", "wisselend gebak", "5,00"]
      ]}
    ]
  },
  borrel: {
    noot: "De borrelkaart is de hele dag te bestellen.",
    pdf: "https://deoudeketting.nl/wp-content/uploads/2026/10/borrel.pdf",
    groepen: [
      { t: "Borrelkaart", items: [
        ["Gemengde nootjes", "", "4,50"],
        ["Camembert uit de oven", "versgebakken breekbrood, honing", "11,50"],
        ["Mini frikandellen (5 | 10 st.)", "mayonaise, curry", "4,95 | 9,50"],
        ["Bourgondische bitterballen (5 | 10 st.)", "mosterdmayonaise", "5,50 | 11,00"],
        ["Borrelmaatjes gemengd (10 st.)", "mayonaise, curry", "11,00"],
        ["Kaasmaatjes (v) (8 st.)", "mayonaise", "9,95"],
        ["Karaage kip", "sticky zoetzure saus met sesamzaadjes", "9,50"],
        ["Tempura garnalen (6 st.)", "chilisaus", "8,95"],
        ["Truckersplank (3 à 4 pers.)", "charcuterie, kazen, Bourgondische bitterballen, karaage kip, groentedippers, brood, dipjes", "27,50"]
      ]}
    ]
  },
  dranken: {
    noot: "Wijn per glas of per fles.",
    pdf: "https://deoudeketting.nl/wp-content/uploads/2025/11/Drankenkaart-De-Oude-Ketting.pdf",
    groepen: [
      { t: "Van de tap", items: [["Hertog Jan", "", "3,30"], ["Brugse Zot", "", "5,40"], ["Seizoensbier", "", "5,60"]] },
      { t: "Pils en fris bier", items: [["Hertog Jan (fles)", "", "3,30"], ["Amstel Pilsner", "", "3,30"], ["Liefmans Fruitesse", "met ijsblokjes", "4,50"], ["Amstel Radler", "", "3,50"], ["Hoegaarden Wit", "", "4,50"]] },
      { t: "Weizen en IPA", items: [["Hertog Jan Weizener", "", "5,20"], ["Franziskaner Weissbier", "", "6,00"], ["Texels Skuumkoppe", "", "5,80"], ["Vedett IPA", "", "5,50"]] },
      { t: "Blond, bruin en trappist", items: [["Leffe Blond", "", "5,80"], ["Omer Blond", "", "6,30"], ["La Chouffe Blond", "", "5,80"], ["Leffe Bruin", "", "5,80"], ["La Trappe Witte Trappist", "", "5,00"], ["Westmalle Dubbel", "", "5,80"]] },
      { t: "Tripel en quadrupel", items: [["Karmeliet Tripel", "", "5,50"], ["Lefort Tripel", "", "6,00"], ["Westmalle Tripel", "", "6,00"], ["Hertog Jan Grand Prestige", "", "6,00"], ["William's Schatkistje", "verrassend; vraag het personeel", "8,00 | 10,00"]] },
      { t: "Alcoholvrij bier", items: [["Liefmans Fruitesse 0%", "", "4,60"], ["Amstel Radler 0%", "", "3,50"], ["Bavaria Wit 0%", "", "3,80"], ["Jupiler 0%", "", "3,70"], ["Leffe Blond 0%", "", "5,80"], ["Leffe Bruin 0%", "", "5,80"], ["Texels Skuumkoppe 0%", "", "5,50"]] },
      { t: "Wijnen", s: "Glas | fles", items: [["Val C. Sauvignon Blanc", "", "4,75 | 23,75"], ["Codex Chardonnay", "", "4,75 | 23,75"], ["Pasque Pinot Grigio", "", "4,75 | 23,75"], ["Bereich Bernkastel Mosel", "", "4,50 | 22,50"], ["Val C. Rosé", "", "4,75 | 23,75"], ["Bodegas Artero Tempranillo", "", "4,75 | 23,75"], ["Chaudfontaine plat of bruisend (0,75 l)", "on the side", "8,50"]] },
      { t: "Cocktails", items: [["Aperol Spritz", "", "7,50"], ["Limoncello Spritz", "", "7,50"], ["Gin tonic", "", "7,50"]] },
      { t: "Frisdrank", items: [["Coca-Cola of Coca-Cola Zero (200 | 330 ml)", "", "3,20 | 4,40"], ["Fanta Orange, Fanta Cassis, Sprite Zero", "", "3,20"], ["Fuze Tea mango, green of sparkling", "", "3,40"], ["Minute Maid appelsap", "", "3,20"], ["Chaudfontaine plat of bruisend", "", "3,20"], ["Rivella", "", "3,20"], ["Chocomel", "", "3,50"], ["Fristi", "", "3,50"], ["Melk", "", "3,00"], ["Verse jus", "", "4,50"], ["Ranja", "", "2,90"]] },
      { t: "Premium soda's van Royal Bliss", items: [["Ginger beer", "oranjebloesem", "3,40"], ["Tonic water", "citroen, limoen, citroengras", "3,40"], ["Ginger ale", "rozemarijn; favoriet", "3,40"], ["Bitter lemon", "lavendel", "3,40"]] },
      { t: "Koffie", items: [["Koffie", "", "3,10"], ["Espresso", "", "3,20"], ["Dubbele espresso", "", "3,90"], ["Cappuccino", "", "3,30"], ["Latte macchiato", "", "3,90"], ["Koffie verkeerd", "", "3,90"], ["Cafeïnevrije koffie", "", "3,20"], ["Cafeïnevrije cappuccino", "", "3,40"], ["Cafeïnevrije latte macchiato", "", "4,00"], ["Cafeïnevrije koffie verkeerd", "", "4,00"], ["Warme Chocomel (zonder | met slagroom)", "", "3,70 | 4,00"]] },
      { t: "Speciale koffie", items: [["Koffie de Ketting", "", "6,95"], ["IJskoffie", "seizoensgebonden", "6,20"], ["Irish coffee", "Jameson whiskey", "7,50"], ["French coffee", "Grand Marnier", "7,50"], ["Italian coffee", "amaretto", "7,50"], ["Spanish coffee", "Tia Maria", "7,50"]] },
      { t: "Thee", items: [["T's Lovely Lady Grey", "", "3,00"], ["T's Masala Chai loose leaf", "", "3,00"], ["T's Ginger Lemon", "", "3,00"], ["T's Berry White", "", "3,00"], ["T's Al'coco'mond", "", "3,00"], ["T's Seasonal", "", "3,00"], ["Verse gemberthee", "", "4,00"], ["Verse muntthee", "", "4,00"]] }
    ]
  }
};
