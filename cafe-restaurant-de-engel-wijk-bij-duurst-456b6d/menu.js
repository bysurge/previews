// Kaarten De Engel (bron: menukaart-PDF's oktober 2026 op engelrestaurant.nl)
// rij: [naam, prijs, omschrijving]
window.KAART = [
  { id: 'lunch', tab: 'Lunch', foot: 'Onze lunchgerechten kunnen we ook op een glutenvrij broodje serveren.', groups: [
    { t: 'Soepen', r: [
      ['Paddenstoelensoep', '9,50', 'Romige soep, paddenstoelen, spek, bosui'],
      ['Tomaat-paprikasoep', '9,50', 'Pestomascarpone, groene kruidenolie']
    ]},
    { t: 'Broodjes', r: [
      ['Broodje van de Markt', '14,50', 'Wij vertellen je hier graag meer over!'],
      ['Geitenkaas', '14,50', 'Desembrood, veldsla, walnoot, spek, honing'],
      ['Utrechtse Grachtenkaas', '13,50', 'Boerenlandbrood, balsamico, kruidensla, komkommer, zontomaat'],
      ['Gerookte zalm', '14,50', 'Desembrood, tatsoi, rettich, komkommer, hoisin-limoendressing'],
      ['Pulled chicken', '14,50', 'Desembrood, hoisin, shiitake, bosui, komkommer, spek, kruidensla'],
      ['Carpaccio', '14,50', 'Boerenlandbrood, rucola, zontomaat, rode ui, parmezaan, pijnboompitten, truffeldressing']
    ]},
    { t: 'Lunchgerechten', r: [
      ['Ambachtelijke rundvleeskroketten', '1 st. 8,00 / 2 st. 12,00', 'Wijks vloerbrood of friet, mosterd'],
      ['Uitsmijter', 'vanaf 11,50', 'Wijks vloerbrood, 3 gebakken eieren, ham, spek, kaas'],
      ['Omelet paddenstoelen', '14,50', 'Wijks vloerbrood, spek, paddenstoelen, bosui, kaas, truffel'],
      ['Omelet zalm', '15,50', 'Wijks vloerbrood, gerookte zalm, tomaat, bosui, kaas, pesto']
    ]},
    { t: 'Lunchspecials', r: [
      ['Lunchplankje', '17,50', 'Paddenstoelensoep, boerenlandbrood, reepaté en peer, salade gerookte zalm, crostini met geitenkaas en honing'],
      ['Salade pulled chicken', '18,50', 'Maaltijdsalade, hoisin, shiitake, bosui, komkommer, spek'],
      ['Salade vis', '18,50', "Maaltijdsalade, gerookte forel, gamba's, gerookte zalm, kruidendressing"],
      ['Salade carpaccio', '18,50', 'Royale maaltijdsalade, parmezaanse kaas, pijnboompitten, zontomaat, rucola, truffeldressing'],
      ['Classic beefburger', '18,50', 'Burgerbroodje, rucola, zontomaat, parmezaan, spek, truffelmayonaise, friet'],
      ['Kipdijsaté', '22,50', 'Teriyaki, sesam, pindasaus, kroepoek, zoetzure groenten, friet'],
      ['Witlof tarte tatin', '22,50', 'Geroosterde groenten, blauwe kaas, vijgentapenade, walnoot, kruidensla, balsamico']
    ]},
    { t: 'Extra erbij', r: [
      ['Friet met mayonaise', '4,50 / 6,00'],
      ['Truffelfriet', '5,50 / 7,50', 'Truffelmayonaise, bosuitjes, parmezaan']
    ]},
    { t: 'Nagerechten', r: [
      ['Brookie', '9,50', 'Brownie met cookie dough, amaretto-koffiesaus, cookie dough-roomijs'],
      ['Chocolade en vanille', '9,50', 'Vanillecrème, chocolate chip roomijs, vanilleroomijs, chocolade krokant, chocoladesaus'],
      ['Kaasplateau', '14,50', '5 kazen, appelstroop, noten-kruidkoek'],
      ['Bonbons', '5,00', 'Per 2 stuks, lekker bij de koffie']
    ]}
  ]},
  { id: 'diner', tab: 'Diner', groups: [
    { t: 'Om te delen, of als voorgerecht', r: [
      ['Coppa di Parma', '10,00', 'Macadamia, vijgentapenade, balsamico'],
      ['Gerookte forel', '10,00', '4 stuks, wasabikroepoek, misomayonaise, cress'],
      ['Truffelkroketjes', '10,00', '4 stuks, paddenstoelen, kaaskrokantje, aioli'],
      ['Crostini', '10,00', '4 stuks, geitenkaas, vijg, balsamico'],
      ['Brood en dips', '7,50', 'Tapenade, kruidenboter, aioli']
    ]},
    { t: 'Voorgerechten', r: [
      ['Okonomiyaki', '13,50', 'Japans pannenkoekje, kool, paksoi, kimchi, taugé, bosui, shiitake, misomayonaise'],
      ['Carpaccio', '14,50', 'Parmezaan, pijnboompitten, zontomaat, rucola, truffeldressing'],
      ['Reepaté', '14,50', 'Veldsla, stoofpeer, gele rozijn, amandel, speculaascrumble, cranberrygelei, balsamico'],
      ['Gerookte zalm', '14,50', 'Licht gebrand, gamba, tatsoi, rettich, komkommer, hoisin-limoendressing'],
      ['Paddenstoelensoep', '9,50', 'Romige soep, paddenstoelen, spek, bosui'],
      ['Tomaat-paprikasoep', '9,50', 'Pestomascarpone, groene kruidenolie']
    ]},
    { t: 'Dutch Prime Beef', note: 'Een mooie selectie van kwalitatief Nederlands rundvlees, mooie marmering en perfect gegrild. Geserveerd met seizoensgroenten en aardappeltaart. Keuze saus: truffeljus of kruidenboter.', r: [
      ['Steak van de Markt', '26,00', 'Wisselende steak'],
      ['Diamanthaas', '26,00'],
      ['Surf & Turf', '32,50', "Diamanthaas en gamba's"]
    ]},
    { t: 'Hoofdgerechten', r: [
      ['Zeebaarsfilet', '27,50', 'Inktvisfalafel, zwarte rijst, spinazie, zeekraal, saffraansaus'],
      ['Wisselend visgerecht', '27,50', 'Wij vertellen je hier graag meer over!'],
      ['Witlof tarte tatin', '22,50', 'Geroosterde groenten, blauwe kaas, vijgentapenade, walnoot, kruidensla, balsamico'],
      ['Parelhoen suprême', '26,00', '5 spice-lak, pompoen, spruitjes, kimchi, yaki onigiri, yuzusaus'],
      ['Hertenbiefstuk', '26,00', 'Pastinaakmousseline, hertenstoof in bockbier, gestoofde witte kool, appelcidersaus'],
      ['Kipdijsaté', '22,50', 'Teriyaki, sesam, paksoi, boontjes met seroendeng, pindasaus, kroepoek, zoetzure groenten']
    ]},
    { t: 'Salades', r: [
      ['Pulled chicken', '18,50', 'Maaltijdsalade, hoisin, shiitake, bosui, komkommer, spek'],
      ['Carpaccio', '18,50', 'Maaltijdsalade, parmezaan, pijnboompitten, zontomaat, rucola, truffeldressing'],
      ['Gerookte vis', '18,50', "Maaltijdsalade, gerookte forel, gerookte zalm, gamba's, kruidendressing"]
    ]},
    { t: 'Extra erbij', r: [
      ['Geroosterde groenten', '6,50'], ['Frisse salade', '6,50'], ['Friet met mayonaise', '4,50 / 6,00'],
      ['Truffelfriet', '5,50 / 7,50', 'Truffelmayonaise, bosuitjes, parmezaan']
    ]},
    { t: 'Nagerechten', r: [
      ['Sinaasappelmousse', '9,50', 'Kaneel-whisky-marshmallow, honeycomb, speculaasijs, sinaasappel-whiskygelei'],
      ['Brookie', '9,50', 'Brownie met cookie dough, amaretto-koffiesaus, cookie dough-roomijs'],
      ["Dark 'n stormy pannacotta", '10,50', 'Cannoli, ananas-rumsaus, kokosijs'],
      ['Chocolade en vanille', '9,50', 'Vanillecrème, chocolate chip roomijs, vanilleroomijs, chocolade krokant, chocoladesaus'],
      ['Kaasplateau', '14,50', '5 kazen, appelstroop, noten-kruidkoek'],
      ['Bonbons', '5,00', 'Per 2 stuks, lekker bij de koffie']
    ]},
    { t: 'Koffie na het eten', r: [
      ['Espresso Martini', '11,50', 'Tia Maria, wodka, espresso'],
      ['Irish coffee', '9,00', 'Bushmills, koffie, bruine suiker, room'],
      ['French coffee', '9,00', 'Grand Marnier, koffie, room'],
      ['Spanish coffee', '9,00', 'Tia Maria, koffie, room'],
      ['Salted caramel macchiato', '4,70', 'Zout, karamel, espresso, melk']
    ]},
    { t: 'Port', r: [
      ['Portproeverij', '15,00', 'Voor als je niet kunt kiezen: drie kleine glaasjes port'],
      ['Badoxa Ruby Port', '4,70', 'Fruitig, wilde bessen, hint van chocolade, ronde smaak'],
      ['Quinta do Sagrado 10 YO Tawny', '7,50', 'Aroma van kaneel, nootachtig zoet, cacaozachte structuur'],
      ['Quinta do Sagrado 20 YO Tawny', '9,50', 'Complexe smaak, gebrande noten, eeuwigdurende afdronk']
    ]}
  ]},
  { id: 'borrel', tab: 'Borrel', foot: 'Onze bites zijn tot 21.30 uur te bestellen.', groups: [
    { t: 'Borrelgarnituur', r: [
      ['Warm bittergarnituur, klein', '15,00', "12 stuks. Diverse gefrituurde hapjes, zoals bitterballen, kaassoufflé en loempia's, met drie sausjes"],
      ['Warm bittergarnituur, groot', '27,00', '24 stuks'],
      ['Ambachtelijke bitterballen', '11,00', '8 stuks met mosterd'],
      ['Kaasstengels', '11,00', '8 stuks met chilisaus'],
      ['Krommerijnse ossenworst', '9,00', 'Met mosterd'],
      ['Portie Utrechtse oude kaas', '8,50', 'Met mosterd'],
      ["Nacho's", '12,00', 'Gegratineerd met kaas, drie sausjes'],
      ['Notenmix', '5,00', 'Luxe notenmix, licht gekruid']
    ]},
    { t: 'Bites om te delen', note: 'Variërend in vlees, vis of kaas. Lekker om samen van te genieten bij de borrel.', r: [
      ['Borrelplank', '22,50', "2 soorten kaas, ossenworst, coppa di Parma, bitterballen, nacho's, nootjes, broodje met dip"],
      ['Kaasplank', '14,50', '5 kazen, appelstroop, noten-kruidkoek'],
      ['Coppa di Parma', '10,00', 'Macadamia, vijgentapenade, balsamico'],
      ['Gerookte forel', '10,00', '4 stuks, wasabikroepoek, misomayonaise, cress'],
      ['Truffelkroketjes', '10,00', '4 stuks, paddenstoelen, kaaskrokantje, aioli'],
      ['Crostini', '10,00', '4 stuks, geitenkaas, vijg, balsamico'],
      ['Brood en dips', '7,50', 'Tapenade, kruidenboter, aioli']
    ]}
  ]},
  { id: 'koffie', tab: 'Koffie & thee', groups: [
    { t: 'Warme dranken', r: [
      ['Koffie, espresso', '3,50'], ['Dubbele espresso', '4,60'], ['Cappuccino', '3,80'], ['Latte macchiato', '4,00'], ['Koffie verkeerd', '4,00'],
      ['Espresso macchiato', '3,80', 'Espresso, melkschuim'], ['Flat white', '4,90', 'Cappuccino, dubbel shot espresso'], ['Sojamelk', '+ 0,90'],
      ['Thee', '3,60', 'Earl grey, jasmijn, rooibos, chai, groen, bosvruchten'], ['Verse munt- of gemberthee', '3,90', 'Met honing'],
      ['Warme chocomel', '3,70'], ['Warme chocomel met slagroom', '4,50']
    ]},
    { t: 'Specials', r: [
      ['Chai latte', '4,70', 'Chaisiroop, melk, kaneel, munt'], ['Shot espresso voor een dirty chai', '+ 1,10'],
      ['Café noisette', '4,70', 'Koffie verkeerd, notensiroop, slagroom'], ['Salted caramel macchiato', '4,70', 'Zout, karamel, espresso, melk'],
      ['Pumpkin spiced latte', '4,70', 'Pumpkin, kaneel, espresso, melk'], ['Glühwein', '5,00', 'Met sinaasappel'],
      ['Chocorum', '8,50', 'Chocomel, bruine rum, slagroom'], ['Choco-Baileys', '8,50', 'Chocomel, Baileys, slagroom, karamel']
    ]},
    { t: 'Lekkers bij de koffie', r: [
      ['Appelgebak', '5,00', 'Van bakkerij Lakerveld'], ['Appelgebak met slagroom', '5,90'], ['Brownie', '5,00', 'Huisgemaakt, karamelsaus'],
      ['Seizoensgebak', '5,20', 'Wij vertellen je hier graag meer over!'], ['Bonbons', '5,00', 'Per 2 stuks']
    ]}
  ]},
  { id: 'bier', tab: 'Bier', intro: 'Wij hebben twee wisseltaps en houden rekening met de seizoenen en de nieuwste trends. Vraag ons welke bieren we op dit moment tappen.', groups: [
    { t: 'De Wijkse Dikke', note: 'Ook vroeger was Wijk een bierstad met veel brouwerijen. In een mooi pand aan de Veldpoortstraat brouwt microbrouwerij De Dikke ons eigen Wijkse bier.', r: [
      ['De Wijkse Dikke', '6,00', 'Ons eigen Wijkse kuytbier, volgens origineel recept uit 1495, gebrouwen op basis van haver, 7%'],
      ['Dikke OPA', '6,30', 'Lokale oat pale ale, 5,5%'], ['Dikke Prik', '6,80', 'Goudgele, ongefilterde honingtripel, 9,5%'], ['Dikke Dreun', '7,00', 'Barley wine, gemoute haver, 10,5%']
    ]},
    { t: 'Pils', r: [
      ['Heineken', '3,70', 'Pils gebrouwen met uniek A-gist, 5%'], ['Amstel fluitje', '3,60'], ['Amstel vaasje', '3,70'], ['Brand pils', '3,80', 'Gebrouwen met Saazerhop, 5%']
    ]},
    { t: 'Fris & fruitbier', r: [
      ['Desperados', '5,80', 'Bier, tequila, limoen, 5,9%'], ['Liefmans Fruitesse', '5,00', 'Rood, fruitig, aangenaam zoet, sprankelend, 4,2%'],
      ['Mort Subite kriek', '5,30', 'Kriekenbier, gerijpt op eikenhouten vaten, 4,5%'], ['Amstel Radler', '4,30', 'Amstel bier, citroenwater, 2%']
    ]},
    { t: 'Wit & weizen', r: [
      ['Erdinger', '5,30 / 7,80', 'Friszuur weizen, licht bittere afdronk, 5,3%'], ['Texels Skuumkoppe', '6,00', 'Karaktervolle dunkelweizen, 6%'], ['IJwit', '6,30', 'Stevig Amsterdams witbier, 6,5%']
    ]},
    { t: 'Blond', r: [
      ['Affligem blond', '6,30', 'Helder, vol blond abdijbier, frisse afdronk, 6,8%'], ['La Chouffe blond', '6,50', 'Belgisch goudblond bier, bruisend sterk karakter, 8%'],
      ['Brugse Zot blond', '5,90', 'Goudblond, fruitige smaak, makkelijk doordrinkbaar, 6%'], ['Orval', '6,80', 'Klassiek trappistenbier, gebrouwen met de wilde gist Brettanomyces, 6,2%'],
      ['Duvel', '6,50', 'Natuurlijk bier, volle schuimkraag, nagist op fles, 8,5%'], ['Hapkin', '6,00', 'Bloemrijk aroma, zacht moutig karakter, romige schuimkraag, 8,5%']
    ]},
    { t: 'Tripel', r: [
      ['Affligem tripel', '6,30', 'Koning der abdijbieren, mooie schuimkraag, 9,5%'], ['Westmalle tripel', '6,80', 'Klassiek en krachtig trappistenbier, 9,5%'],
      ['Maredsous tripel', '6,80', 'Amberkleurige tripel, rijke witte schuimkraag, 10%'], ['Straffe Hendrik tripel', '6,80', 'Goudkleurige tripel, krachtige smaak, 9%']
    ]},
    { t: 'Donker', r: [
      ['Westmalle dubbel', '5,80', 'Klassiek donker trappistenbier, volle smaak, 7%'], ['Affligem dubbel', '5,80', 'Roodbruin abdijbier, gebrouwen met donkere mout, 6,8%'],
      ['Straffe Hendrik Quadrupel', '7,00', 'Intens, donker, volmondig gevoel, 11%']
    ]},
    { t: 'IPA en APA', r: [
      ['Lagunitas IPA', '6,30', 'Amerikaanse IPA, westcoast style, 6,2%'], ['Oedipus Pais Tropical', '6,50', 'Session IPA, tropisch fruit, 4,3%'],
      ["Brouwerij 't IJ IPA", '6,50', 'Donkerblond, uitgesproken hopsmaak, fruitig, bittere afdronk, 7%']
    ]},
    { t: 'Alcoholvrij en -arm', list: ['Heineken 0.0%', 'Affligem blond 0.0%', 'Amstel Radler 0.0%', 'Erdinger 0.5%', 'Vrijwit witbier 0.5%', 'Skuumkoppe 0.0%'] }
  ]},
  { id: 'wijn', tab: 'Wijn', intro: 'Via onze wijnleverancier W3 wijnen hebben we een gevarieerd aanbod mooie wijnen: zowel de klassiekers als interessante ontdekkingen uit de nieuwe wereld. Vraag ons gerust om meer informatie!', groups: [
    { t: 'Open wijnen wit', note: 'Glas / fles', r: [
      ['Verdejo', '5,80 / 29,00', 'Pagos del Rey Blume, D.O. Rueda, Spanje'],
      ['Sauvignon Blanc', '', 'Marisco Curious Kiwi, Marlborough, Nieuw-Zeeland'],
      ['Pinot Grigio', '', 'Cantina Aldeno, Trentino, Italië'],
      ['Chardonnay Grand Réserve', '', 'Vignerons du Narbonnais, Les Colimonts, Frankrijk']
    ]},
    { t: 'Open wijnen rosé', note: 'Glas / fles', r: [
      ['Grenache', '5,80 / 29,00', 'Rocca Maura Effet Mer, Rhône, Frankrijk'],
      ['Montepulciano', '6,80 / 34,00', "Giuliana Vicini Rosato, Colline Pescaresi, Abruzzo, Italië"]
    ]},
    { t: 'Open wijnen rood', note: 'Glas / fles', r: [
      ['Merlot', '5,80 / 29,00', "Vignerons Catalan Grand Cépage, IGP Pays d'Oc, Frankrijk"],
      ['Negroamaro', '', 'Puglia, Italië'],
      ['Tempranillo', '', 'Bodega Rioja Vega, Rioja, Spanje'],
      ['Malbec', '', 'La Puerta Clásico, Famatina Valleys, Argentinië']
    ]},
    { t: 'Bubbels', r: [
      ['Cava Canals Nadal', 'glas 6,80 / fles 34,00', 'D.O. Penedès, Spanje. Groene appel, groene peer, bloesem, nootachtig, romig'],
      ['Champagne Ruinart Brut', '110,00', 'Chardonnay, pinot noir en meunier. Klassiek, fris, delicaat'],
      ['Pierre Zero Sparkling Chardonnay', '8,50', 'Alcoholvrij']
    ]},
    { t: 'Bijzondere wijnen', note: 'Drie witte en drie rode wijnen uit het luxere segment, bewaard in onze klimaatkasten en geserveerd in een passend glas. Per fles.', r: [
      ['Château de Melin', '55,00', 'Bourgogne Blanc A.O.C. Hautes Côtes de Beaune. Zacht, rijk en filmend, met geel en wit fruit en nuances van 10 maanden houtrijping.'],
      ['Guillaume & Baptiste', '55,00', "Cuvée L'Apogée AOC Sancerre. Expressief en fris, met florale aroma's, witte perzik, ananas en passievrucht."],
      ['Bodega Rioja Vega', '69,50', 'Cuvée Especiale Tempranillo Blanco Reserva D.O.C. Rioja. Complex en zalvend, met tonen van thee, honing, citroen en steenfruit.'],
      ['Château Grand Pey Lescours', '65,00', 'A.O.C. St. Emilion Grand Cru. Krachtige bordeaux met bessenfruit, kokos en een vleugje chocolade.'],
      ['Bodega Rioja Vega', '55,00', 'Maturana Limitada D.O.C. Rioja Alta. Fris en fluweelzacht, met rood fruit, zoethout en eucalyptus.'],
      ['Famiglia Triacca', '47,50', 'Bello Stento D.O.C.G. Chianti Classico. Warm oranje en rood fruit, kaneel en een zwoele geur van kersen.']
    ]}
  ]},
  { id: 'cocktails', tab: 'Cocktails & fris', groups: [
    { t: 'Gin-tonic & spritz', r: [
      ['Winter Aperol Spritz', '10,00', 'Aperol, cava, cranberrysap, kaneel, bruiswater, sinaasappel'], ['Aperol Spritz', '10,00', 'Aperol, cava, bruiswater, sinaasappel'],
      ['Limoncello Spritz', '10,00', 'Limoncello, cava, bruiswater, limoen'], ['Bombay cinnamon orange', '10,50', 'Tonic, Bombay gin, kaneel, sinaasappel'],
      ['Tanqueray London red fruit', '10,00', 'Tanqueray gin, tonic, frozen raspberry'], ['Tanqueray classic', '10,00', 'Tanqueray gin, tonic, limoen'],
      ["Hendrick's gin", '11,00', 'Double Dutch tonic, komkommer']
    ]},
    { t: 'Cocktails', r: [
      ['Moscow mule', '11,00', 'Wodka, gingerbeer, limoen, angostura bitters'], ['Espresso Martini', '11,50', 'Ketel 1, Kahlúa, espresso'],
      ["Dark 'n Stormy", '', 'Bruine rum, gingerbeer, limoen'], ['Baileys Martini', '', 'Baileys, Kahlúa, room, chocolade'],
      ['Pornstar Martini', '', 'Wodka, passievrucht, vanille'], ['Licor 43 Sunrise', '', "Licor 43, jus d'orange, grenadine"]
    ]},
    { t: 'Alcoholvrij', r: [
      ['Virgin Tanqueray Tonic', '10,00', 'Tanqueray 0.0, Double Dutch tonic, limoen'], ['Orange angel virgin', '9,50', 'Ginger ale, Crodino, sinaasappel, raspberry'],
      ['Spritz 0.0', '8,50', 'Spritz, bruiswater, sinaasappel'], ['Crodino', '5,50', 'Hét alcoholvrije aperitief']
    ]},
    { t: 'Frisdranken', r: [
      ['Coca-Cola, Coca-Cola Zero, Fanta orange, Fanta cassis, Sprite, ginger ale, bitter lemon, tonic', 'vanaf 3,70'],
      ['Lipton ice tea, Lipton green tea, Rivella', '3,70'], ['Chaudfontaine rood of blauw', '25 cl 3,70 / 75 cl 7,50'],
      ['Double Dutch pink grapefruit of ginger beer', '5,00'], ['Fristi, chocomel, appelsap', '3,70'], ['Verse halfvolle melk', '3,20'], ["Jus d'orange, tomatensap", '4,50']
    ]}
  ]}
];
