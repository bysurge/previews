/* Menukaart 't Pannekoekhuis Westendorp, overgenomen uit hun PDF "Menukaart 10-2026" (9 pagina's).
   Vorm: [naam, prijs, omschrijving?] ; groepen: {t: titel, n: noot?, items: [...]} */
window.MENU = {
  pannenkoeken: [
    { t: 'Hartig, speciaal aanbevolen', items: [
      ['Achterhoekse', '15,75', 'ham, meegebakken ei met een frisse salade'],
      ['Auvergne', '17,00', 'spek, prei, champignons en oude kaas'],
      ['Boeren', '14,25', 'spek, champignons, meegebakken ei'],
      ['Burger', '16,75', 'huisgemaakte ragout van rundvlees met een frisse salade'],
      ['Carpaccio', '19,75', 'rundercarpaccio, rucola, grana padano, pijnboompitten en truffel mayo'],
      ['Country', '16,75', 'ham, kaas, taugé, prei en ei'],
      ['Française', '16,60', 'walnoten, bieslook, brie en honing'],
      ['Franse Extra', '15,25', 'bieslook, ananas, brie en kruidenboter'],
      ['Herfst', '16,00', 'kaas, champignons, ui, oregano en een meegebakken ei'],
      ['Hongaarse', '16,75', 'huisgemaakte Hongaarse rundergoulash met een frisse salade'],
      ['Italiaanse', '16,50', 'spek, kaas, tomaten, ui en oregano'],
      ['Jagers', '23,50', 'champignons, kaas, ui, paprika, spek, prei, tomaten, ketjap en ei'],
      ['Jubileum Hartig', '17,40', 'rösti, spek, kaas, prei, tomaat en een meegebakken ei'],
      ['Lente', '16,25', 'rösti, spek, kaas, ui en prei'],
      ['Rommel', '23,00', 'champignons, ham, kaas, salami, paprika, tomaten, ui, knoflook en chillies'],
      ['Saté pannenkoek', '19,25', 'kipsaté met heerlijke satésaus, kroepoek en salade'],
      ['Stroganoff', '16,75', 'huisgemaakte ragout van varkensvlees met een frisse salade'],
      ['Vegetarische', '21,25', 'champignons, tomaten, prei, taugé en bieslook met een frisse salade'],
      ['Verschrikkelijk', '20,25', 'champignons, kaas, ui, paprika, bosui, spek en salami'],
      ['Westendorpse', '18,25', 'ham, kaas, tomaten, ui en champignons'],
      ['Wild', '16,75', 'huisgemaakte wildragout met een frisse salade'],
      ['Wild-West', '19,50', 'champignons, spek, kaas, paprika, bosui en kruidenboter']
    ]},
    { t: 'Zoet, speciaal aanbevolen', items: [
      ['Bastogne', '15,10', 'Bastognekruimels, banketbakkersroom en een schaaltje vanille-ijs met slagroom'],
      ['Blue Berry Hill', '13,75', 'bosbessen, banaan en poedersuiker'],
      ['Bos de luxe', '13,50', 'bosbessen, appel en poedersuiker'],
      ['Grootmoeders pannenkoek', '15,90', 'appel, stoofpeertjes, kaneel, poedersuiker en kaneelijs met slagroom'],
      ['Jubileum Zoet', '14,25', 'met ananas, appel, banaan en kersen'],
      ['Snoepers', '17,25', 'bosbessen, appel, ananas, abrikozen en poedersuiker'],
      ['Surfers', '14,00', 'ananas, ham en kaas'],
      ['Winter', '14,00', 'banaan, ananas en spek'],
      ['Zomerkoning (seizoen)', '12,75', 'aardbeien en poedersuiker']
    ]},
    { t: 'Vispannenkoeken', items: [
      ['Bretagne', '17,50', 'prei, ui, gerookte zalm en kruidenkaas'],
      ['Wadden', '18,25', 'garnalen, tonijn, ansjovis en ui']
    ]},
    { t: 'Extra bij de pannenkoek', items: [
      ['Portie ijs', '5,00', 'twee bolletjes vanille-roomijs met slagroom'],
      ['Portie roggebrood', '3,00', 'twee plakjes roggebrood met roomboter'],
      ['Frisse salade', '4,00', 'portie ijsbergsla, rauwkost, croutons en dressing']
    ]}
  ],
  hartig: [
    ['ansjovis','2,50'],['bieslook','1,00'],['bosui','1,50'],['brie','2,50'],['champignons','2,50'],['chillies','1,00'],
    ['ei','1,50'],['garnalen','3,00'],['ham','2,00'],['hasse (uitgebakken vetspek)','3,50'],['kaas (jong belegen)','2,00'],
    ['kaas (oud)','2,75'],['ketjap','0,75'],['knoflook','0,75'],['kruidenboter','1,75'],['kruidenkaas','1,85'],['oregano','0,75'],
    ['paprika','1,50'],['prei','1,50'],['rösti','1,50'],['salami','1,50'],['snijworst (cervelaat)','1,25'],['spek','2,00'],
    ['taugé','1,50'],['tomaat','2,50'],['tonijn','3,50'],['ui','1,00'],['walnoten','4,00'],['zalm (gerookt)','4,75']
  ],
  zoet: [
    ['aardbeien (seizoen)','4,50'],['aardbeiensaus','1,00'],['abrikozen','2,00'],['advocaat','2,15'],['ananas','1,75'],['appel','1,75'],
    ['banaan','2,00'],['banketbakkersroom','2,25'],['Bastogne kruimels','1,50'],['boerenjongens','2,75'],['bosbes','3,50'],
    ['chocoladesaus (donker)','1,00'],['chocoladesaus (wit)','1,75'],['frambozensaus','1,00'],['gember','1,75'],['honing','0,85'],
    ['1 bol vanille-roomijs','1,75'],['jam (aardbeien)','1,20'],['kaneel','0,30'],['kersen','2,00'],['kokos','1,10'],['mandarijnen','1,75'],
    ['notenrasp (gesuikerd)','0,70'],['perzik','1,85'],['poedersuiker','0,00'],['rozijnen','1,25'],['slagroom','1,35'],['stoofpeertjes','2,50']
  ],
  kinderen: [
    { t: 'Voor alle kinderen tot 12 jaar', items: [
      ['Kinderpannenkoek met surprise', '8,50'],
      ['Kinderpannenkoek met knuffel', '11,00', 'keuze uit Pipo, Nijntje, Beertje of Plop'],
      ['Kinderfrites met frikandel, kroket of kipnuggets', '9,25', 'cadeaudoosje met een beetje patat, snack naar keuze, appelmoes en mayonaise']
    ]},
    { t: 'Acties voor kinderen tot 12 jaar', n: 'Op = op.', items: [
      ['Buurman & Buurman pannenkoek', '14,75', 'met een Buurman & Buurman-knuffel naar keuze'],
      ['Diep in de zee pannenkoek', '13,50', 'met WWF-schildpadknuffel'],
      ['Hup Holland Hup pannenkoek', '12,50', 'met poedersuiker en een hoed met muziek']
    ]}
  ],
  meer: [
    { t: 'Voorgerechten', items: [
      ['Breekbrood (warm)', '5,50', 'met kruidencrème en knoflookmayo'],
      ['Carpaccio (rund)', '12,95', 'met rucola, padano, pijnboompitten en truffelmayo'],
      ['Tomatensoep, groentesoep of dagsoep', '4,75'],
      ['Garnalenkroketjes', '6,50', 'met honing-mosterdsaus en garnering']
    ]},
    { t: 'Eiergerechten', n: 'Geserveerd met wit of bruin brood en een frisse salade.', items: [
      ['Uitsmijter naturel', '8,50'], ['Uitsmijter ham', '10,50'], ['Uitsmijter kaas', '10,50']
    ]},
    { t: 'Plate service', n: 'Alle plates worden geserveerd met een frisse salade.', items: [
      ['Frikandel- of kroketplate', '18,25', 'twee frikandellen of twee kroketten met friet en mayonaise'],
      ['Saté plate', '19,50', 'kipsaté met satésaus en friet'],
      ['Schnitzel plate', '19,50', 'een schnitzel met friet en mayonaise'],
      ['Tosti ham/kaas', '6,00', 'met ketchup of curry (wijzigingen niet mogelijk)']
    ]},
    { t: 'Extra te bestellen', items: [
      ['Portie frietjes', '5,00'], ['Portie appelmoes', '2,50'], ['Mayonaise, ketchup, curry of mosterd', '1,00']
    ]}
  ],
  ijs: [
    { t: 'IJskaart', items: [
      ['Kinderijsje met surprise', '4,25', 'vanille-roomijs, vruchtjes en slagroom'],
      ['Kindersorbet met surprise', '4,25', 'vanille-roomijs, vruchtjes, aardbeiensaus en slagroom'],
      ['Schatkistje', '4,00', 'vanille- en chocolade-ijs in een kistje met verrassing'],
      ['Raketijsje', '2,25', 'waterijsje op een stokje'],
      ['Banaan Royal', '7,75', 'vanille-roomijs, banaan, bananensaus en slagroom'],
      ['Coupe ijs', '5,75', 'vanille-roomijs, vruchtjes en slagroom'],
      ['Coupe Aardbei (seizoen)', '8,75', 'vanille-roomijs, verse aardbeien en slagroom'],
      ['Coupe Bitterzoet', '7,75', 'vanille-roomijs, zachte bitterkoekjes, karamelsaus en slagroom'],
      ['Coupe Cerise', '8,75', 'vanille-roomijs, warme kersen en slagroom'],
      ['Coupe Florida', '7,75', 'vanille-roomijs, ananas, aardbeiensaus, kiwisaus en slagroom'],
      ['Coupe Los Angeles', '7,75', 'vanille-roomijs, koekjes, chocoladekrullen, chocoladesaus en slagroom'],
      ['Coupe Mandy', '7,75', 'vanille-roomijs, bosbessen, kersensaus en slagroom'],
      ['Coupe Robin', '7,75', 'vanille-roomijs, gemengde noten, mokkasaus en slagroom'],
      ['Coupe Westendorp', '7,25', 'vanille-roomijs, advocaat, chocoladesaus en slagroom'],
      ['Dame Blanche', '7,25', 'vanille-roomijs, warme chocoladesaus en slagroom'],
      ['Dronken Sultan', '7,75', 'vanille-roomijs, boerenjongens en slagroom'],
      ['Omgekeerde Dame', '7,25', 'chocolade-roomijs, warme witte chocoladesaus en slagroom'],
      ['Peche Melba', '7,25', 'vanille-roomijs, halve perzik, aardbeiensaus en slagroom'],
      ['Perelaar', '7,25', 'vanille-roomijs, stoofpeertjes en slagroom'],
      ['Sorbet', '7,75', 'gemengd ijs, vruchtjes, aardbeiensaus en slagroom'],
      ['Suikervrij ijs', '5,75', 'ijs met bananenpartjes']
    ]},
    { t: 'Heerlijk toetje', items: [
      ['Chocolademousse met slagroom', '4,95'],
      ['Warm chocolade-lavataartje', '7,50', 'met stracciatella-ijs en frambozensaus'],
      ['Cheesecake met frambozensaus', '4,25']
    ]},
    { t: 'Dessertkoffie', n: 'Ook mogelijk met een andere likeur naar uw keuze.', items: [
      ['Irish koffie', '8,50', 'met Irish whisky'],
      ['French koffie', '8,50', 'met Grand Marnier'],
      ['Spanish koffie', '8,50', 'met Tia Maria'],
      ['Caribbean koffie', '8,50', 'met Kahlua'],
      ['Koffiedessert', '6,25', 'verse koffie met bonbons en een koffielikeurtje']
    ]}
  ],
  dranken: [
    { t: 'Koude dranken', items: [
      ['Coca-Cola (regular/zero), Fanta Sinas of Sprite, ranja', '3,10'],
      ['Chaudfontaine blauw/rood, Dubbel Frisss', '2,60'],
      ['Cassis (Fanta)', '3,20'],
      ['Royal Bliss Tonic, Bitter Lemon', '3,40'],
      ['Fuze Tea green/sparkling', '3,30'],
      ['Fristi, Chocomel, appelsap', '4,00'],
      ['Rivella light', '4,00'],
      ['Verse jus d’orange', '4,00'],
      ['Melk', '2,75']
    ]},
    { t: 'Warme dranken', items: [
      ['Vers kopje koffie of espresso', '3,10'],
      ['Thee (TwisTea)', '3,10'],
      ['Cappuccino, warme chocolademelk, koffie verkeerd', '3,30'],
      ['Latte macchiato', '3,95', 'warme melk, espresso en schuimmelk']
    ]},
    { t: 'Voor bij de koffie', items: [
      ['Appelgebak met of zonder slagroom', '4,00'],
      ['Cheesecake met frambozensaus', '4,25'],
      ['Slagroom (bar)', '1,00']
    ]},
    { t: 'Bieren', items: [
      ['Fluitje (18 cl)', '3,10'],
      ['Amsterdammertje (25 cl)', '3,75'],
      ['Bavaria alcoholvrij (fles 30 cl)', '3,95'],
      ['Bavaria IPA 0%', '5,75'],
      ['Pul bier (50 cl)', '6,75'],
      ['Radler 2.0 of 0.0 (fles 30 cl)', '4,75'],
      ['Rodenbach Fruitage (fles 25 cl)', '4,95', 'met of zonder ijs'],
      ['Weihenstephaner Hefeweissbier (fles 33 cl)', '5,75', '5,4% of 0,5%'],
      ['Texels Skuumkoppe (fles 30 cl)', '6,25', '6,0% of 0%'],
      ['BrewDog Punk IPA 5,4% (fles 33 cl)', '6,25']
    ]},
    { t: 'La Trappe (fles 33 cl)', items: [
      ['Trappist Nillis (donker) 0% of Epos (blond) 0,0%', '5,95'],
      ['Trappist Blond 6,5%', '5,95'],
      ['Witte Trappist 5,5%', '5,95'],
      ['Trappist Dubbel 7%', '5,95'],
      ['Trappist Bockbier 7% of Tripel 8%', '6,25']
    ]},
    { t: 'Wijn', items: [
      ['Per glas (rood, rosé, wit droog/zoet)', '4,50'],
      ['Per karaf 0,25 l (rood, rosé, wit droog/zoet)', '8,00']
    ]},
    { t: 'Aperitief', items: [
      ['Crodino 0.0', '3,00'],
      ['Aperol Spritz', '5,75'],
      ['Martini (rood/wit), port (rood/wit)', '4,25'],
      ['Sherry (dry/medium)', '4,25']
    ]},
    { t: 'Likeur', items: [
      ['Licor 43, Tia Maria, Grand Marnier, Cointreau', '5,25'],
      ['Passoa, Safari, Baileys, Drambuie, Amaretto, Kahlua', '5,25']
    ]},
    { t: 'Gedistilleerd', n: 'Of vraag naar uw favoriete drankje, wellicht hebben we dat ook.', items: [
      ['Berenburg, vieux, jenever (jonge/oude)', '4,25'],
      ['Advocaat, brandewijn (citroen, frambozen, kersen)', '4,25'],
      ['Apfelkorn, Campari, Jägermeister', '4,25'],
      ['Cognac, whiskey, rum, wodka, gin', '5,25']
    ]}
  ]
};
