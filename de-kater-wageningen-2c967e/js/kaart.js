/* Kater&Co: volledige kaart, overgenomen uit hun PDF's (lunch, diner, drinks).
   Item: [naam, prijs (zoals op de kaart), omschrijving]. Prijzen "x / y" staan er zo op. */
window.KAART = {
  burgers: {
    note: 'Bij lunch en diner. Bij de meeste burgers kun je kiezen voor Nederlands rundvlees of een plant based burger.',
    groups: [
      { t: 'Burgers', items: [
        ['Classic', '14.5', 'Nederlands rundvlees / plant based burger, sla, tomaat, augurk, ui, burgersaus, friet, ketchup & mayonaise'],
        ['Cheese', '15.5', 'Nederlands rundvlees / plant based burger, sla, tomaat, augurk, ui, burgersaus, cheddar, friet, ketchup & mayonaise'],
        ['Barbecue', '14.5', 'Nederlands rundvlees / plant based burger, sla, tomaat, augurk, ui, barbecuesaus, friet, ketchup & mayonaise'],
        ['Bacon & Cheese', '16', 'Nederlands rundvlees, sla, tomaat, augurk, ui, burgersaus, cheddar, bacon, friet, ketchup & mayonaise'],
        ['Pulled pork', '15.5', 'Nederlands rundvlees, sla, tomaat, augurk, ui, burgersaus, pulled pork, friet, ketchup & mayonaise'],
        ['Mexican', '14.5', 'Nederlands rundvlees, sla, tomaat, cheddar, augurk, ui, sweet chili chipotle saus, nacho\'s & crème fraîche'],
        ['Signature', '17.5', 'Nederlands rundvlees / plant based burger, sla, tomaat, augurk, burgersaus, gebakken ei, gebakken ui, champignon, satésaus, friet, ketchup & mayonaise'],
        ['Crispy chicken', '15.5', 'Kipburger / no chicken burger, sla, tomaat, augurk, ui, chickenburgersaus, friet, ketchup & mayonaise']
      ] }
    ]
  },
  snacks: {
    note: 'Snacks zijn er tot 00:00, ook naast de lunch en het diner.',
    groups: [
      { t: 'Snacks', items: [
        ['Snack plank', '30', '20 warme snacks, fuet, kaas, brood, nacho\'s, dips, bitters'],
        ['Warme snacks', '22', '20 warme snacks, dips'],
        ['Bitterballen', '9.5', '9 bitterballen, mosterd'],
        ['Vegan bitterballen', '9.5', '9 vegan bitterballen, mosterd'],
        ['Vlammetjes', '9.5', '9 vlammetjes, vlammensaus, curry'],
        ['Kip nuggets', '9.5', '9 kipnuggets, hete saus, curry'],
        ['Gyoza', '9.5', '9 kip-groente gyoza, hete saus'],
        ['Nacho\'s', '9', 'nacho\'s, kaas, crème fraîche, guacamole, hete saus'],
        ['Brood & smeersels', '8', 'kruidenboter, tapenade, knoflooksaus'],
        ['Frietjes', '5.5', 'frietjes, ketchup, mayonaise'],
        ['Churros', '9.5', '9 churros ringen, chocoladesaus, poedersuiker']
      ] }
    ]
  },
  lunch: {
    note: 'Lunch van 11:00 tot 16:30. Ook de burgers en snacks staan op de lunchkaart.',
    groups: [
      { t: 'Sandwiches', items: [
        ['Gerookte zalm', '16', 'gerookte zalm, mosterd-dillesaus, cherry tomaat, ui, mesclun, gekookt ei & citroen'],
        ['Carpaccio', '16', 'rundercarpaccio, truffelmayonaise, ui, rucola, zongedroogde tomaatjes, oude kaas & pitten'],
        ['Gesmolten brie', '16', 'warme brie & bacon, honing, noten, rucola'],
        ['Geitenkaas', '16', 'warme geitenkaas, honing, noten, zongedroogde tomaatjes, rucola, balsamico'],
        ['Grolsche Kater', '16', 'warm vlees, champignons, ui, gebakken ei, satésaus, mesclun, cherry tomaat'],
        ['Pittige kip', '16', 'gemarineerde pittige warme kip, mesclun, cherry tomaat & ui'],
        ['Kroketten (vegan)', '15', '2 rundvlees of vegan kroketten, mesclun, cherry tomaat, mosterd'],
        ['Uitsmijter', 'vanaf 14', '3 gebakken eieren & brood. Opties: ham, kaas, groente, pulled pork'],
        ['Omelet', 'vanaf 14', '3 eitjes & brood. Opties: ham, kaas, groente'],
        ['Chefs soep', '8.5', 'wisselende soep van de chef']
      ] },
      { t: 'Flat toasted', items: [
        ['Co\'s Club', '14.5', 'gerookte kip, bacon, avocado, tomaat, pesto, rucola'],
        ['Spicy Tuna', '13.5', 'tonijnmousse, pesto, jalapeño, avocado, tomaat, rucola'],
        ['Tunacado', '13.5', 'tonijnmousse, pesto, avocado, tomaat, rucola'],
        ['Avocado Goat', '13.5', 'geitenkaas, pesto, avocado, tomaat, rucola'],
        ['Ham-Kaas', '9.5', 'ham, kaas']
      ] },
      { t: 'Loaded fries', items: [
        ['Pulled pork', '16', 'frietjes, pulled pork, knoflooksaus, sriracha saus'],
        ['Spicy chicken', '16', 'frietjes, hete kip, ui, knoflooksaus, sriracha saus'],
        ['Kip sate', '16', 'frietjes, 2 stokjes kip sate, satésaus, gebakken uitjes, mayonaise']
      ] },
      { t: 'Salads', items: [
        ['Co\'s Caesar', '16', 'gerookte kip, mesclun, cherry tomaat, gekookt ei, ui, crouton, bacon, caesar dressing, brood'],
        ['Gerookte zalm', '16', 'zalm, gekookt ei, cherry tomaat, mesclun, ui, mosterd-dille saus, brood'],
        ['Krokante kip', '16', 'krokante kip, mesclun, cherry tomaat, ui, crouton, chickenburgersaus of hete saus, brood'],
        ['Geitenkaas', '16', 'geitenkaas, zongedroogde tomaat, rucola, mesclun, noten, pitten, ui, balsamico, brood']
      ] }
    ]
  },
  diner: {
    note: 'Diner van 17:00 tot 21:30. Ook de burgers en snacks staan op de dinerkaart.',
    groups: [
      { t: 'Appetizers', items: [
        ['Brood & smeersels', '8', 'kruidenboter, tapenade, knoflooksaus'],
        ['Carpaccio', '13.5', 'carpaccio van rund, truffelmayonaise, zongedroogde tomaatjes, oude kaas, ui, rucola, pitten, zaden'],
        ['Chefs soep', '8.5', 'wisselende soep van de chef'],
        ['Nacho\'s', '9', 'nacho\'s, kaas, crème fraîche, guacamolesaus, hete saus'],
        ['Gyoza', '9.5', '9 kip-groente gyoza, hete saus']
      ] },
      { t: 'Main', after: 'Geserveerd met super crunch frieten en mayonaise.', items: [
        ['Kip Sate', '21.5 / 28', '3 of 5 stuks à 50 gram, pindasaus, atjar, cassave'],
        ['Shakshuka', '21.5', 'tomaat, ui, geitenkaas, ei, kruiden, brood'],
        ['Zalmfilet', '25', 'gebakken zalm, chimichurri, groente, witte wijn saus'],
        ['Schnitzel', '21.5', '200 gram Wiener varkensschnitzel, gebakken ui & champignons'],
        ['Biefstuk', '25', '180 gram rumpsteak, groente, kruidenboter of pepersaus'],
        ['Fish&Chips', '21.5', 'heekfilet, ravigottesaus, coleslaw'],
        ['Spareribs', '25', 'barbecuesaus, knoflooksaus, coleslaw']
      ] },
      { t: 'Salads', items: [
        ['Co\'s Caesar', '16', 'gerookte kip, mesclun, cherry tomaat, gekookt ei, ui, crouton, bacon, caesar dressing, brood'],
        ['Gerookte zalm', '16', 'zalm, gekookt ei, cherry tomaat, mesclun, ui, mosterd-dille saus, brood'],
        ['Krokante kip', '16', 'krokante kip, mesclun, cherry tomaat, ui, crouton, chickenburgersaus of hete saus, brood'],
        ['Geitenkaas', '16', 'geitenkaas, zongedroogde tomaat, rucola, mesclun, noten, pitten, ui, balsamico, brood']
      ] },
      { t: 'Loaded fries', items: [
        ['Pulled pork', '16', 'frietjes, pulled pork, knoflooksaus, sriracha saus'],
        ['Spicy chicken', '16', 'frietjes, ui, hete kip, knoflooksaus, sriracha saus'],
        ['Kip sate', '16', 'frietjes, 2 stokjes kip sate, satésaus, mayonaise']
      ] },
      { t: 'Sweet', items: [
        ['Apfelstrudel', '9.5', 'warme apfelstrudel, vanillesaus, bolletje vanille-ijs, slagroom'],
        ['Dame Blanche', '8.5', 'vanille-ijs, chocoladesaus, slagroom'],
        ['Chocolade lava cake', '8', 'chocolade lava cake, slagroom'],
        ['Pornstar Cheesecake', '8', 'cheesecake, passievrucht schuim, slagroom'],
        ['Churros', '9', 'churros ringen, vanille-ijs, chocoladesaus, poedersuiker']
      ] }
    ]
  },
  drinks: [
    { id: 'warm', t: 'Koffie & thee', groups: [
      { t: 'Hot drinks (Illy)', compact: true, items: [
        ['Espresso', '4.2'], ['Lungo', '4.2'], ['Americano', '5.4'], ['Cappuccino', '4.3 / 5.6'], ['Koffie verkeerd', '4.3'], ['Flat white', '5'], ['Latte', '5.2'],
        ['Chai latte', '4.2'], ['Matcha latte', '5.2'], ['Verse munt', '4.6'], ['Gember', '4.6'], ['Glühwein', '5.4'], ['Warme chocomel', '5.4']
      ], after: 'Extra: havermelk + 0,30, shot espresso + 1,50, decafé + 0,30, salted caramel, caramel, vanille, chocolade & chai + 0,40. Slagroom + 1,50.' },
      { t: 'Warm specials', items: [
        ['Salted caramel latte', '6.9', 'slagroom & salted caramel topping'],
        ['Tompoes latte', '6.9', 'slagroom & tompoes topping'],
        ['Chocolade latte', '6.9', 'slagroom & chocolade topping'],
        ['Matcha latte pistache', '7', 'slagroom, matcha & pistache topping'],
        ['Clipper thee', '4.2', 'earl grey, english, peppermint, chamomile, lemon-ginger, green tea, berry burst & rooibos; organic & fairtrade'],
        ['Likeur koffie', '9', 'Jameson, Grand Marnier, Amaretto, Tia Maria']
      ] },
      { t: 'Sweets', compact: true, items: [
        ['Week special', '5.2'], ['Cheesecake', '5.2'], ['Appeltaart', '5.2'], ['Apfelstrudel', '6.2'], ['Lava cake', '5.2']
      ], after: 'Slagroom + 1,50.' }
    ] },
    { id: 'cold', t: 'Cold brew', groups: [
      { t: 'Illy Cold Brew', items: [
        ['Vanille Cream', '7.6', 'vanille-ijs, slagroom & cacaopoeder'],
        ['Fresco veg', '6.6', 'havermelk'],
        ['Lemon & orange', '7', 'fritz-lemon, citroen & orange'],
        ['Almond Maple', '7.6', 'amandelsiroop, slagroom & pistache topping'],
        ['Coconut Mojito', '7', 'mojito mix, cocossiroop & munt'],
        ['Iced matcha latte', '5.2', 'havermelk of koemelk, ijs & matcha'],
        ['Frapino', '7', 'vanille slush met slagroom (april - september); chocolade, tompoes, caramel, pistache of salted caramel topping']
      ] }
    ] },
    { id: 'wijn', t: 'Wijn', groups: [
      { t: 'Rood', items: [
        ['Campo San Victorio', '5.2 / 23', 'easy & fruity. Tempranillo, Spanje'],
        ['Croix d\'Or', '5.7 / 27', 'elegant & rich. Merlot, Frankrijk'],
        ['Epicuro', '6.2 / 30', 'full & round. Negroamaro, Italië']
      ] },
      { t: 'Rosé', items: [
        ['Campo San Victorio', '5.2 / 23', 'full & fresh. Tempranillo, Spanje'],
        ['Sacchetto', '5.7 / 28', 'dry & fruity. Pinot Grigio Blush, Italië']
      ] },
      { t: 'Wit', items: [
        ['Campo San Victorio', '5.2 / 23', 'dry & fruity. Sauvignon Blanc, Spanje'],
        ['Croix d\'Or', '5.7 / 27', 'fruity & full. Chardonnay, Frankrijk'],
        ['Epicuro', '6.2 / 30', 'fresh & soft. Pinot Grigio, Italië'],
        ['Josef Drathen', '4.8 / 22', 'sweet. Chenin Blanc, Duitsland']
      ] },
      { t: 'Mousserend', items: [
        ['Porta Leone frizzante', '5.7 / 27', 'mild & easy. Chenin, Italië']
      ] }
    ] },
    { id: 'fris', t: 'Fris & sap', groups: [
      { t: 'Fritz', compact: true, items: [
        ['Kola 330ml', '5'], ['Superzero kola 330ml', '5'], ['Lemon limo 330ml', '5'], ['Apple-cherry limo 330ml', '5'], ['Melon limo 200ml', '4.5'], ['Rhubarb spritz organic 330ml', '5'], ['Grapes spritz 330ml', '5'], ['Orange limo organic 330ml', '5'], ['Apple spritz organic 330ml', '5']
      ] },
      { t: 'Spa water', compact: true, items: [
        ['Spa Intense sparkling 250ml', '4'], ['Spa Reine flat 250ml', '4'], ['Spa Intense sparkling 750ml', '9'], ['Spa Reine flat 750ml', '9']
      ] },
      { t: 'Energy', compact: true, items: [['Club Mate 330ml', '5'], ['Red Bull 250ml', '6.2']] },
      { t: 'Lipton Ice Tea', compact: true, items: [['Sparkling 200ml', '4.2'], ['Green 200ml', '4.2'], ['Green zero 200ml', '4.2'], ['Peach 200ml', '4.2']] },
      { t: 'Sparkling', compact: true, items: [
        ['Sisi 200ml', '4.2'], ['7up 200ml', '4.2'], ['Tonic 200ml', '4.2'], ['Ginger beer 200ml', '4.2'], ['Coca-Cola zero 200/330ml', '4.2 / 5.5'], ['Cassis 200ml', '4.2'], ['Rivella 200ml', '4.2'], ['Bitter lemon 200ml', '4.2'], ['Ginger ale 200ml', '4.2'], ['Crodino 175ml', '4.5']
      ] },
      { t: 'Juice', compact: true, items: [
        ['Appelsap 200ml', '4.2'], ['Perensap Schulp organic 200ml', '5'], ['Tomaat Schulp organic 200ml', '5'], ['Verse jus d\'orange 200/300ml', '4.5 / 6']
      ] }
    ] },
    { id: 'cocktails', t: 'Cocktails', groups: [
      { t: 'Cocktails', items: [
        ['Pina Colada', '9.5', 'tropical, cocos & fruity. Rum, cocos, pina colada & pineapple juice'],
        ['Apple Sour', '9.5', 'sweet & sour. Rum, apple, sour & soda'],
        ['Summer breeze', '9.5', 'summery & fresh. Rum, pisang, Bols strawberry & apple-cherry juice'],
        ['Mojito', '9.5', 'minty & fresh. Rum, fresh mint, lime juice, sugar & club soda'],
        ['Melon love', '9.5', 'sour & fresh. White rum, Bols melon & melon soda'],
        ['Strawberry daiquiri', '9.5', 'spiced & fruity. Spiced rum, strawberry & lime'],
        ['Blue lagoon', '9.5', 'fresh & cool. Gin, blue curaçao, lime & soda'],
        ['Gin Tonic', '9.5', 'bitter & cool. Gin, tonic, lime & soda'],
        ['Whiskey Sour', '9.5', 'sour & smokey. Bourbon, lime juice & sirup'],
        ['Tequila sunrise', '8.5', 'sour-fruity & strong. Tequila, jus d\'orange & grenadine'],
        ['Margarita', '9', 'sour & bitter. Tequila, Cointreau & lime juice'],
        ['Cosmopolitan', '9.5', 'sour & fresh. Cranberry, vodka & triple sec'],
        ['Espresso martini', '8.5', 'coffee & strong. Vodka, coffee liqueur & espresso'],
        ['Moscow mule', '9.5', 'gingery & refreshing. Vodka, lime juice & ginger beer'],
        ['Sex on the beach', '9.9', 'tropical & fruity. Bols peach, vodka, Bols melon, cranberry & pineapple juice'],
        ['Pornstar martini', '9.9', 'passionate, sweet & vanilla. Vanille vodka, passion fruit liqueur & prosecco'],
        ['Long Island iced tea', '11', 'strong & fresh. Vodka, tequila, gin, triple sec & cola'],
        ['Aperol spritz', '9', 'bitter, sparkling & dry. Aperol & prosecco'],
        ['Limoncello spritz', '9', 'sour, sparkling & dry. Limoncello & prosecco'],
        ['Sangria', '8.5', 'fresh & sparkling. Iced sangria, prosecco, fruit & soda']
      ] },
      { t: 'Alcoholvrij', items: [
        ['Gin Tonic', '7.5', 'gin & bitter. Gin (0.0), lime & lemon'],
        ['Pornstar martini', '8.5', 'passionate, sweet & vanilla. Vanille, passion fruit'],
        ['Sex on the beach', '8.5', 'tropical & fruity. Peach, melon, cranberry & pineapple juice'],
        ['Mojito', '7.5', 'minty & fresh. Fresh mint, lime juice, sugar & club soda'],
        ['Strawberry daiquiri', '7.5', 'spiced & fruity. Strawberry & lime'],
        ['Moscow mule', '7.5', 'gingery & refreshing. Lime juice & ginger beer']
      ] }
    ] },
    { id: 'sterk', t: 'Shots & sterk', groups: [
      { t: 'Shots', compact: true, items: [
        ['Tequila silver', '4.2'], ['Tequila gold', '4.2'], ['Rocketshot', '4.2'], ['Trojka pink', '4.2'], ['Sourz green', '4.2'], ['Sourz red', '4.2'], ['Fireman', '4.2'], ['Boswandeling', '4.2'], ['Dropshot', '4.2'], ['Fisk', '4.2'], ['Jägermeister', '4.5']
      ] },
      { t: 'Distilled', compact: true, items: [
        ['Vodka', '5.5'], ['Bacardi rum', '5.5'], ['Gordon\'s gin', '5.5'], ['Captain Morgan', '5.5'], ['Courvoisier', '7.5'], ['Rémy Martin', '7.5'], ['Johnnie Walker', '6.5'], ['Jameson', '6.5'], ['Jack Daniel\'s', '6.5'], ['Glenfiddich', '7'], ['Dimple', '7.5'], ['Ketel jenever', '14.5'], ['Beerenburg', '4.5']
      ] }
    ] },
    { id: 'tap', t: 'Bier van de tap', beer: true, groups: [
      { t: 'Draft', items: [
        ['Grolsch pilsner', '4.2 / 8', 'lager, 5% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Peroni', '4.6 / 8.5', 'lager, 5% alc.', 'Peroni IT'],
        ['Wageningse Kater', '5.8', 'blond, local, 6,1% alc.', 'Speciaal gebrouwen voor de Kater NL', true],
        ['Disco Daisy blond', '5.8', 'blond, funky & swinging, 6,7% alc.', 'Ondersteboven NL'],
        ['La Chouffe', '6', 'blond, fresh & full, 8% alc.', 'Brasserie d\'Achouffe BE'],
        ['Liefmans', '5.8', 'fruitbeer, cherry & fruity, 3,8% alc.', 'Brouwerij Liefmans BE'],
        ['Somersby Cider', '5.8', 'cider, apple, fruity, 4,5% alc.', 'Carlsberg DK'],
        ['Weizen', '5 / 8.5', 'weizen, heavy, full, fresh, 5,1% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Skuumkoppe', '6', 'weissbier, fresh & full, 6% alc.', 'Texels Bierbrouwerij NL'],
        ['Witte Kat', '5.8', 'whitebeer, fruity & fresh, 6% alc.', 'Alken-Maes Brouwerij BE'],
        ['Grimbergen dubbel', '5.8', 'double, bitter & sweet, 6,5% alc.', 'Alken-Maes Brouwerij BE'],
        ['Bolleke De Koninck', '5.5', 'amber, smooth & light, 5,2% alc.', 'De Koninck BE'],
        ['Grimbergen tripel', '5.8', 'triple, herbs & fresh, 8,3% alc.', 'Alken-Maes Brouwerij BE'],
        ['Hangende Harry', '5.8', 'IPA, fresh & full, 5,9% alc.', 'Ondersteboven NL'],
        ['Vedett', '6', 'IPA, fruity & ale, 5,5% alc.', 'Duvel Moortgat BE'],
        ['Wisseltap', '5.8', 'wisselend per seizoen', '']
      ] }
    ] },
    { id: 'fles', t: 'Bier op fles', beer: true, groups: [
      { t: 'White & weizen', items: [
        ['Vedett white', '6.5', 'white, cloudy & citrus, 4,7% alc.', 'Vedett BE'],
        ['Dunkel Weizenbock', '6', 'dunkelweizen, roasted malt & caramel, 6% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Hoegaarden wit', '6', 'white, soft & fresh, 5% alc.', 'Hoegaarden']
      ] },
      { t: 'Blond & lager', items: [
        ['Duvel', '6.5', 'blond, light, sweet & hoppy, 8,5% alc.', 'Duvel Moortgat Brouwerij BE'],
        ['Goudkoppe', '6.5', 'blond, full, 6% alc.', 'Texels Bierbrouwerij NL'],
        ['Springtij', '6.5', 'saison, unfiltered, 7,5% alc.', 'Texels Bierbrouwerij NL'],
        ['Gouden IJ', '6.5', 'blond, sweetly & herbs, 6,8% alc.', 'Brouwerij \'t IJ NL'],
        ['La Trappe Blond', '6', 'blond, easy & sweet-bitter, 6,5% alc.', 'Brouwerij de Koningshoeven NL'],
        ['Corona', '6.5', 'lager, fresh & sweet, 4,6% alc.', 'Anheuser-Busch MEX'],
        ['Brugse Zot', '6', 'blond, full & herbs, 6% alc.', 'Halve Maan BE'],
        ['Glutenvrij pils', '4.8', 'lager, gluten free', 'Royal Swinckels Brewery NL']
      ] },
      { t: 'Amber & tripel', items: [
        ['Vuurbaak', '6.2', 'amber ale, malty, 5,5% alc.', 'Texels Bierbrouwerij NL'],
        ['IJ Zatte', '6.5', 'tripel, unfiltered & idiosyncratic, 8% alc.', 'Brouwerij \'t IJ NL'],
        ['Quadrupel', '6', 'amber, dark & heavy, 10% alc.', 'Brouwerij de Koningshoeven NL'],
        ['De Koninck Tripel d\'Anvers', '6.5', 'tripel, hoppy & fruity, 8% alc.', 'De Koninck BE'],
        ['Isid\'or', '6', 'amber, spiced & complex, 7,5% alc.', 'Brouwerij de Koningshoeven NL'],
        ['Tuunwal tripel', '6.5', 'tripel, full, spiced, 8,5% alc.', 'Texels Bierbrouwerij NL'],
        ['La Trappe tripel', '6', 'tripel, caramel & malty, 7% alc.', 'Brouwerij de Koningshoeven NL']
      ] },
      { t: 'Fruity & cider', items: [
        ['Apple Bandit', '5.8', 'cider, fruity, 4,5% alc.', 'Heineken Brouwerijen NL'],
        ['Radler citroen', '5', 'radler, fresh & lemon, 2% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Kriek', '5.8', 'kriek, sweet, sour & fruity, 4% alc.', 'Kasteel Brouwerij Vanhonsebrouck BE'],
        ['Lowlander Tropical Ale', '6.6', 'ale, tropical & sunny, 3,8% alc.', 'Lowlander NL'],
        ['Magners Pear Cider', '6', 'cider, pears & fresh, 4,7% alc.', 'Magners IER']
      ] },
      { t: 'Double & more', items: [
        ['La Trappe dubbel', '5.9', 'double, caramel & sweet dry fruit, 6,5% alc.', 'Brouwerij de Koningshoeven NL'],
        ['Mc Chouffe', '6', 'double, spicy & sweet, 8% alc.', 'Brasserie d\'Achouffe BE'],
        ['Kanon', '5.5', 'dark, heavy & hangover, 11,6% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Noorderwiend', '6.3', 'winterbeer, robust & nutritious, 7,5% alc.', 'Texels Bierbrouwerij NL']
      ] },
      { t: 'IPA', items: [
        ['IJ IPA', '6.3', 'IPA, hoppy & bitter, 6,5% alc.', 'Brouwerij \'t IJ NL'],
        ['Duvel Tripel Hop', '6.5', 'IPA, extra hoppy & bitter, 9,5% alc.', 'Duvel Moortgat Brouwerij BE'],
        ['Overzee', '6.3', 'IPA, bitter & spiced, 6% alc.', 'Texels Bierbrouwerij NL']
      ] }
    ] },
    { id: 'nul', t: 'Alcoholvrij bier', beer: true, groups: [
      { t: 'Non alcohol', items: [
        ['Skuumkoppe', '5', 'weissbier, summery & spiced, 0% alc.', 'Texels Bierbrouwerij NL'],
        ['Weizen', '5', 'weizen, heavy, full, fresh, 0% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Bavaria IPA', '5', 'IPA, hoppy & sweet-bitter, 0% alc.', 'Royal Swinckels Brewery'],
        ['Radler citroen', '5', 'radler, fresh & lemon, 0% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Grolsch pilsner', '4.8', 'lager, 0% alc.', 'Koninklijke Grolsch, Enschede NL'],
        ['Bavaria wit', '5', 'white, fresh & summery, 0% alc.', 'Royal Swinckels Brewery'],
        ['Leffe blond', '5', 'blond, sweet & bitter, 0% alc.', 'Brewery Leffe BE'],
        ['Corona', '5.5', 'blond, fresh & citrus, 0% alc.', 'Corona Extra MEX'],
        ['Liefmans', '5', 'fruitbeer, cherry & fruity, 0% alc.', 'Brouwerij Liefmans BE'],
        ['La Trappe Nillis', '5', 'trappist, malty & sweet-bitter, 0% alc.', 'Brouwerij de Koningshoeven NL'],
        ['Peroni Nastro Azzurro', '5', 'lager, 0% alc.', 'Peroni IT'],
        ['Apple Bandit', '5', 'cider, apple & fresh, 0% alc.', 'Heineken NL'],
        ['La Chouffe', '5', 'blond, fresh & full, 0% alc.', 'Brasserie d\'Achouffe BE']
      ] }
    ] }
  ]
};
