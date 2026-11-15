// Kaarten van De Tijd, overgenomen uit hun PDF's (lunchkaart en dinerkaart winter 2026).
// Prijzen precies zoals in de PDF (ook 16,96 bij de Spaanse pannenkoek op de lunchkaart).
// i = [naam, omschrijving, prijs, vegetarisch?]
window.KAART = {
  lunch: {
    label: 'Lunchkaart',
    sub: 'Van 12.00 tot 17.00 uur',
    cats: [
      { id: 'soep', name: 'Soep & uitsmijters', groups: [
        { title: 'Lunchsoepen', price: '8,25', note: 'Bij onze soepen serveren wij brood en kruidenboter.', items: [
          ['Pomodori', 'Met room en pitjes'],
          ['Wortel kerrie crème', 'Met crispy bacon'],
          ['Soep van het seizoen', 'Een variërende seizoenssoep. Vraag ernaar bij de bediening']
        ]},
        { title: 'Uitsmijters', items: [
          ['Ham of kaas', '', '8,95'],
          ['Ham en kaas', '', '10,75'],
          ['De Tijd', 'Ham, kaas, spek, ui en champignons', '12,95']
        ]}
      ]},
      { id: 'brood', name: "Salades, tosti's & broodjes", groups: [
        { title: 'Lunchsalades', price: '16,95', items: [
          ['Krokante kipreepjes', 'Bacon, rode ui en tomatenchutney'],
          ['Warme geitenkaas', 'Honing en gekarameliseerde peer']
        ]},
        { title: "Tosti's", items: [
          ['Ham of kaas', '', '6,95'],
          ['Ham en kaas', '', '7,25'],
          ['Kaas, tomaat, rucola en brie', '', '8,25'],
          ['Kaas, spek, tomaat en gebakken ei', '', '8,25']
        ]},
        { title: 'Broodjes', items: [
          ['Boerenslofje brie', 'Met honing, walnoot en gekarameliseerde peer', '10,95'],
          ['Carpaccio', 'Met pitjes, zongedroogde tomaat, Grana Padano en truffelmayonaise', '12,75'],
          ['Hete kip', 'Licht pikante kipdijenfilet met rode ui en een kerriesausje', '12,75'],
          ['Huisgemaakte tonijnsalade', 'Gemaakt van rode ui, augurk, kappertjes en chilisaus', '12,75']
        ]}
      ]},
      { id: 'burger', name: 'Burgers & snacks', groups: [
        { title: 'Burgers', price: '18,90', note: 'Onze burgers kunnen geserveerd worden met een puntzak friet voor € 4,75.', items: [
          ['Big American burger', 'Rundvleesburger met knapperige sla, rode ui, gebakken tomaat, crispy bacon en cheddar'],
          ['Kipburger', 'Kipburger met rucola, oude kaas, crispy bacon, tomaat, augurk en BBQ honey saus'],
          ['Red Vega burger', 'Bietenburger met rucola, geitenkaas, rode ui, cherry tomaat en munt dip'],
          ['De Tijd Burger', 'Beefburger, knapperige sla, spekjes, champignons, gekarameliseerde ui en BBQ-sweetpepper saus'],
          ['True Dutch', 'Rundvleesburger met sla, gebakken ui, gegrilde augurk, jonge kaas en honingmosterdsaus']
        ]},
        { title: 'Snacks', items: [
          ['Frikandellen met brood', '', '10,25'],
          ['Kroketten met brood', '', '10,25'],
          ['Frikandellen met friet', '', '12,20'],
          ['Kroketten met friet', '', '12,20']
        ]}
      ]},
      { id: 'pannenkoek', name: 'Pannenkoeken', groups: [
        { title: 'Pannenkoeken', note: 'Een extra topping is mogelijk voor € 1,50.', items: [
          ['Naturel', '', '8,50'], ['Kaas', '', '10,00'], ['Spek', '', '10,00'], ['Appel', '', '10,00'],
          ['Ananas', '', '10,00'], ['Rozijnen', '', '10,00'], ['Champignons', '', '10,00'], ['Spek en appel', '', '10,00'],
          ['Appel en kaneel', '', '9,95'], ['Rozijnen en appel', '', '10,00'], ['Ham en kaas', '', '10,00'], ['Spek en kaas', '', '10,00']
        ]},
        { title: 'Speciale pannenkoeken', items: [
          ['Spaans', 'Chorizo, kaas, paprika en rode ui', '16,96'],
          ['Frans', 'Geitenkaas, spinazie en tomatensalsa', '16,95'],
          ['Italiaans', 'Mozzarella, tomaat en rucola', '16,95'],
          ['Turks', 'Shoarma, paprika, ui en knoflooksaus', '16,95'],
          ['Banaan en Nutella', '', '12,75'],
          ['Brie', 'Noten en gekarameliseerde peer', '16,95'],
          ['Gerookte zalm', 'Rode ui, rucola en roomkaas', '16,95'],
          ['De Tijd', 'Ham, kaas, spek, ui en champignons', '16,95']
        ]},
        { title: 'Kinderpannenkoek', note: 'Voor onze kleine gasten serveren wij een pannenkoek die te decoreren is. En als afsluiter mogen ze een cadeautje grabbelen!', items: [] }
      ]},
      { id: 'zoet', name: 'IJs & koffie', groups: [
        { title: 'IJstijd', items: [
          ["Sorbet 'De Tijd'", 'Verschillende smaken sorbetijs, vers fruit en slagroom', '7,95'],
          ['Coupie Coupie', 'Met vanille- en karamelijs, warme chocosaus en slagroom', '7,95'],
          ['Omgekeerde dame blanche', 'Chocolade-ijs, slagroom en vanillesaus', '7,95'],
          ['Junglefiguurtje', 'Een junglefiguurtje gevuld met ijs', '6,75']
        ]},
        { title: 'Koffie met iets lekkers', note: 'Slagroom? Serveren wij er standaard bij!', items: [
          ['Koffie/thee met appelgebak', ''],
          ['Koffie/thee met het gebak van de maand', '']
        ]}
      ]},
      { id: 'borrel', name: 'Snacktime', groups: [
        { title: 'Snacktime', items: [
          ['Bitterballen', '8 of 16 stuks', '8,75 / 15,00'],
          ['Bittergarnituur', '12 of 24 stuks', '10,75 / 16,00'],
          ['Say Cheese', '', '7,75'],
          ['Mandje brood met tapenades', '', '6,75'],
          ['Nootjes', '', '3,75'],
          ["Vegetarische loempia's", '', '8,75'],
          ['Kaasplankje', '', '13,00']
        ]}
      ]}
    ]
  },
  diner: {
    label: 'Dinerkaart',
    sub: 'Winter 2026',
    cats: [
      { id: 'voor', name: 'Voorgerechten & soep', groups: [
        { title: 'Voorgerechten', price: '12,50', items: [
          ['Zalm rijst balletjes', 'Met roomkaas, surimi, gerookte zalm, tobiko (kleine knapperige viseitjes) met kimchi mayonaise'],
          ['Onze klassieke runder carpaccio', 'Met pesto, truffelmayonaise, pitjes, Grana Padano en zongedroogde tomaatjes'],
          ['Khachapuri à la baba ganoush', 'Warm kaaspasteitje op een romige auberginedip', '', 1],
          ["Pot pie 'cocotte'", 'Warme champignon-kaas-kippenragout'],
          ['Dimsum/dumpling', 'Gefrituurde en gestoomde kleine hapjes met Japanse sesamdip']
        ]},
        { title: 'Soepen', price: '7,90', note: 'Andere soepen? Onze bediening informeert u graag over de keuzes.', items: [
          ['Pompoensoep', "Met coco's kruimels", '', 1],
          ['Oekraïense borsjtsj', 'Met rode biet', '', 1]
        ]}
      ]},
      { id: 'hoofd', name: 'Hoofdgerechten', groups: [
        { title: 'Hoofdgerechten', price: '26,00', note: 'Al onze hoofdgerechten worden geserveerd met friet, salade en garnituur.', items: [
          ['Gegrilde Hollandse biefstuk', 'Peperroomsaus'],
          ['Varkenshaas omwikkeld met spek', 'Gevuld met abrikoos en pruimen, met een krachtige bospaddenstoelensaus'],
          ['Gebakken kabeljauwhaasje', 'Met een flinke toef bbq-mousseline'],
          ['Thaise geroosterde rode eend', 'Op een tom kha-saus'],
          ['Franse boeuf bourguignon', 'Klassieke stoofschotel van rib-eye, spekjes en champignons'],
          ['Cocido vegetariano', 'Groente-, kikkererwten- en bospaddenstoelenstoof met gefrituurde aubergine', '', 1],
          ['Mexicaanse gepofte zoete aardappel', 'Gevuld met chili con carne, avocadomousse en crème fraîche']
        ]}
      ]},
      { id: 'plates', name: 'Plates', groups: [
        { title: 'Plates', price: '24,95', note: 'Onze plates worden geserveerd met friet, salade en saus naar keuze: champignonsaus, BBQ zigeunersaus of frisse remouladesaus.', items: [
          ['Kipsaté met satésaus', ''],
          ['Huisgemaakte reuzenschnitzel', ''],
          ['Fish & chips', ''],
          ['Gemarineerde spareribs', '']
        ]}
      ]},
      { id: 'pannenkoek', name: 'Pannenkoeken', groups: [
        { title: 'Pannenkoeken', items: [
          ['Naturel', '', '8,80'], ['Kaas', '', '10,00'], ['Spek', '', '10,00'], ['Appel', '', '10,00'],
          ['Ananas', '', '10,00'], ['Rozijnen', '', '10,00'], ['Gember', '', '10,00'], ['Gember kaas', '', '10,50'],
          ['Appel kaas', '', '10,50'], ['Gebakken champignons', '', '10,00'], ['Spek en appel', '', '10,00'], ['Appel en kaneel', '', '9,95'],
          ['Rozijnen en appel', '', '10,00'], ['Ham en kaas', '', '10,00'], ['Spek en kaas', '', '10,00'], ['Banaan en Nutella', '', '12,75']
        ]},
        { title: 'Speciale pannenkoeken', price: '16,95', items: [
          ['Spaans', 'Chorizo, kaas, paprika en rode uienringen'],
          ['Frans', 'Geitenkaas, spinazie en tomatenchutney'],
          ['Italiaans', 'Mozzarella, tomaat en rucola'],
          ['Turks', 'Shoarma, paprika, ui en knoflooksaus'],
          ['Brie', 'Noten en gekarameliseerde peer'],
          ['Gerookte zalm', 'Rode ui, rucola en roomkaas'],
          ['De Tijd', 'Ham, kaas, spek, ui en champignons']
        ]},
        { title: 'Voor de kinderen', items: [
          ['Kinderpannenkoek', 'Zelf versieren en decoreren. Na afloop iets leuks uitkiezen uit de grabbelton', '6,50']
        ]}
      ]},
      { id: 'burger', name: 'Burgers', groups: [
        { title: 'Burgers', price: '18,90', note: 'Puntzakje friet erbij: € 4,75.', items: [
          ['Big American!', 'Rundvleesburger met sla, rode ui, gebakken tomaat, crispy bacon en cheddar'],
          ['De Tijd burger!', 'Rundvleesburger met sla, spekjes, champignons, gekarameliseerde ui en cream-pepersaus'],
          ['Kipburger', 'Kipburger met rucola, oude kaas, crispy bacon, tomaat, augurk en BBQ honey saus'],
          ['Red Vega burger', 'Bietenburger met rucola, geitenkaas, rode ui, cherrytomaat en crème fraîche', '', 1],
          ['Paddo burger', 'Champignonburger met sla, tomaat, kaas, truffelmayonaise en pitjes', '', 1]
        ]}
      ]},
      { id: 'dessert', name: 'Desserts & koffie', groups: [
        { title: 'Desserts', price: '8,25', items: [
          ['XL-soes', 'Gevuld met vanille-karamelijs, slagroom en overgoten met chocoladesaus'],
          ['Kaasplankje', 'Diverse kazen, zorgvuldig uitgekozen door onze chefs'],
          ['Sinaasappel crème brûlée', 'Met een bol tutti frutti-ijs'],
          ['Meringue-ijstaart', "'Ube'-chocolade en gepofte rijst"],
          ['Trio mochi', 'Japanse lekkernijen gevuld met ijs, slagroom en rozenblaadjes'],
          ['Cremoso al pistacchio', 'Pistachecrème-taartje samen met mango-sorbetijs']
        ]},
        { title: 'Speciale koffie', price: '8,35', items: [
          ['Irish coffee', 'Whiskey'],
          ['Italian coffee', 'Amaretto'],
          ['French coffee', 'Grand Marnier'],
          ['Spanish coffee', 'Tia Maria of Licor Cuarenta y Tres']
        ]}
      ]}
    ]
  }
};
