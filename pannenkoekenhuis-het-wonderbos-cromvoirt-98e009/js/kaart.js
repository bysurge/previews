// Menukaart Pannenkoekenhuis het Wonderbos, letterlijk van pannenkoekenhuishetwonderbos.nl (19-11-2026).
// Item: [naam, prijs, omschrijving]
window.KAART = [
  { id: 'pannenkoeken', t: 'Pannenkoeken', groups: [
    { t: 'De klassiekers', wide: true, sub: [
      [
        ['Naturel met poedersuiker', '8,50'], ['Naturel met kaneelsuiker', '8,95'], ['Naturel met ahornsiroop', '8,95'], ['Naturel met nutella', '9,50']
      ], [
        ['Kaas', '9,95'], ['Kaas, ham', '10,50'], ['Kaas, salami', '10,50'], ['Kaas, gember', '9,50'], ['Kaas, champignon', '9,95'],
        ['Kaas, tomaat, pesto, rucola', '12,50'], ['Kaas, ui, paprika, champignon', '11,95']
      ], [
        ['Spek', '9,50'], ['Spek, kaas', '10,50'], ['Spek, appel', '10,50'], ['Spek, ananas', '10,95'], ['Spek, ui, paprika, champignon', '12,95']
      ], [
        ['Appel, poedersuiker', '9,50'], ['Appel, kaneelsuiker', '9,95'], ['Appel, gember', '9,95'], ['Appel, walnoten, honing', '11,50']
      ], [
        ['Banaan, poedersuiker', '10,50'], ['Ananas, poedersuiker', '10,50'], ['Warme kersen, poedersuiker', '10,95'],
        ['Aardbeien*, poedersuiker', '12,50'], ['Banaan, nutella', '11,50']
      ]
    ], extra: '+ vanille-ijs 1,95  ·  + slagroom 0,95  ·  + chocoladesaus 0,95' },
    { t: 'Hartige specialiteiten', items: [
      ['Boerenpannenkoek', '13,95', 'met spek, ham, champignons, ui, paprika en kaas'],
      ['Goulashpannenkoek', '15,50', 'met rundvlees, paprika, tomaat, ui, kaas, rucola en knoflook'],
      ['Balkanpannenkoek', '15,50', 'met gedroogd rundvlees, salami, kaas, ui, paprika, ajvar en knoflooksaus'],
      ['Shoarmapannenkoek', '14,50', 'met shoarmavlees, paprika, ui, kaas, salade en knoflooksaus'],
      ['Briepannenkoek', '15,95', 'met spek, walnoten, cashewnoten en stroop'],
      ['Briepannenkoek vegetarisch', '15,95', 'met champignons, ui, paprika, rucola, kaas, walnoten en cashewnoten'],
      ['Mexicaanse pannenkoek', '14,50', 'met kip, kaas, cajunkruiden, ui, paprika, tortillachips en chilisaus'],
      ['Alpenpannenkoek', '15,95', 'met geitenkaas uit de oven, spek, appel, walnoten, cashewnoten en honing'],
      ['Alpenpannenkoek vegetarisch', '15,50', 'met geitenkaas uit de oven, appel, walnoten, cashewnoten, honing en balsamicodressing']
    ] },
    { t: 'Zoete specialiteiten', items: [
      ['Aardbeienpannenkoek*', '13,95', 'met poedersuiker, amandelschaafsel, vanille-ijs, slagroom en chocoladesaus'],
      ['Zoete Liefde-pannenkoek', '13,95', 'met banaan, walnoten, vanille-ijs, poedersuiker, slagroom en chocoladesaus'],
      ['Schwarzwalderpannenkoek', '13,95', 'met warme kersen, chocoladesaus, slagroom en vanille-ijs'],
      ['Appelpannenkoek specialiteit', '13,95', 'met walnoten, krenten, rozijnen, kaneelsuiker en honing']
    ] },
    { t: 'Kun je niet kiezen?', note: 'Ga voor half zoet, half hartig!', items: [
      ['½ appel-kaneelsuiker, ½ spek-kaas', '12,95'],
      ['½ appel, ½ spek-kaas', '12,50'],
      ['½ appel-kaneelsuiker, ½ kaas', '12,50']
    ] }
  ] },
  { id: 'kinderen', t: 'Kinderkaart', groups: [
    { t: 'Kinderpannenkoeken', items: [
      ['Feestpannenkoek', '8,25', 'met snoep, M&M’s, spekjes en poedersuiker'],
      ['Appelpannenkoek speciaal', '7,95', 'met rozijnen, krenten, poedersuiker'],
      ['Kaas', '6,95'], ['Spek', '7,25'], ['Ham, kaas', '7,50'], ['Spek, kaas', '7,50'], ['Salami, kaas', '7,50']
    ] },
    { t: 'Meer kinderpannenkoeken', items: [
      ['Naturel', '5,75'], ['Poedersuiker', '5,95'], ['Kaneelsuiker', '6,25'], ['Aardbeienjam', '6,25'], ['Ahornsiroop', '6,50'],
      ['Nutella', '6,95'], ['Appel, poedersuiker', '6,95'], ['Banaan, poedersuiker', '7,25'], ['Aardbei, poedersuiker', '7,95']
    ], extra: '+ vanille-ijs 1,95  ·  + slagroom 0,95  ·  + chocoladesiroop 0,95' },
    { t: 'Kindermenu’s', items: [
      ['Kipnuggets, frietjes, appelmoes en ranja', '7,50'],
      ['Frikandel, frietjes, appelmoes en ranja', '7,50'],
      ['Fish & chips, appelmoes en ranja', '7,95'],
      ['Vegetarische kroket met appelmoes en ranja', '7,50']
    ] },
    { t: 'Toetjes', items: [
      ['IJs met slagroom en chocoladesaus', '3,50'],
      ['Feestijs met snoep, spekjes, M&M’s, slagroom', '4,50'],
      ['Verse aardbeien met slagroom', '4,95'],
      ['Verse vruchten met slagroom', '4,95']
    ] }
  ] },
  { id: 'anders', t: 'Iets anders dan pannenkoek', short: 'Lunch & diner', groups: [
    { t: 'Lunch- en voorgerechten', items: [
      ['Tomaat-basilicumsoep', '6,50', 'Vers bereid volgens klassiek recept, geserveerd met brood en knoflooksaus'],
      ['Montenegrijnse goulashsoep', '6,95', 'Onze familiespecialiteit met rundvlees, paprika, tomaat, ui en knoflook. Geserveerd met brood en knoflooksaus'],
      ['Salade geitenkaas', '12,50', 'Met warme geitenkaas uit de oven, balsamicodressing, honing, appel en noten'],
      ['Salade kip', '11,50', 'Kip gemarineerd in ketjap manis, chili en sambal, geraspte kaas en kerriedressing'],
      ['Broodplateau', '5,95', 'Vers brood met knoflooksaus, paprikadip en olijven']
    ] },
    { t: 'Broodjes', note: 'We serveren onze broodjes tot 16.00 uur. Keuze uit wit of bruin broodje.', items: [
      ['Broodje rundvleeskroketten', '8,95', 'Twee kroketten met mosterd en salade'],
      ['Broodje vegetarische kroketten', '8,95', 'Twee vegetarische kroketten met mosterd en salade'],
      ['Broodje geitenkaas', '8,95', 'Geitenkaas uit de oven, appel, noten, honing, balsamicodressing en salade']
    ] },
    { t: 'Hoofdgerechten', note: 'Onze hoofdgerechten worden geserveerd met frietjes, mayonaise en salade.', items: [
      ['Goulash', '19,95', 'Onze familiespecialiteit uit Montenegro, met liefde bereid'],
      ['Kipsaté', '15,95', 'Gemarineerde kip met pindasaus, atjar, gebakken uitjes en kroepoek'],
      ['Fish & chips', '16,95', 'Versgebakken lekkerbekjes met knoflooksaus'],
      ['Vegetarische quiche', '17,50', 'Met artisjok, tomaat, ui, geitenkaas en knoflooksaus'],
      ['Classic beefburger', '16,50', 'Burger met cheddarkaas, bacon, burgersaus, sla en augurk']
    ] }
  ] },
  { id: 'toe', t: 'Nagerechten, koffie & thee', short: 'Toe, koffie & thee', groups: [
    { t: 'Nagerechten', items: [
      ['Banaan Royaal', '7,50', 'met banaan, ijs, chocoladesaus en slagroom'],
      ['Verse vruchten met slagroom', '6,95'],
      ['Verse aardbeien* met slagroom', '7,50'],
      ['Dame Blanche', '6,95', 'met roomijs, chocoladesaus en slagroom'],
      ['IJscoupe', '6,50', 'met drie bollen ijs en slagroom'],
      ['Appelgebak', '4,95', 'met slagroom en chocoladesaus'],
      ['IJskoffie', '6,95', 'met vanille-ijs, koffie en slagroom'],
      ['Irish coffee', '7,95', 'met Irish whiskey en slagroom'],
      ['Baileys coffee', '7,50', 'met likeur en slagroom']
    ] },
    { t: 'Koffie', items: [
      ['Koffie', '2,75'], ['Espresso', '2,75'], ['Cappuccino', '3,20'], ['Latte macchiato', '3,80']
    ] },
    { t: 'Koffie-specialiteiten', items: [
      ['Irish coffee', '7,95'], ['Baileys coffee', '7,50'], ['IJskoffie met vanille-ijs en slagroom', '6,95']
    ] },
    { t: 'Lekker bij de koffie!', items: [
      ['Appelgebak met slagroom en chocoladesaus', '4,50']
    ] },
    { t: 'Verse thee', items: [
      ['Verse muntthee met honing', '3,95'], ['Verse gemberthee met honing', '3,95']
    ] },
    { t: 'Thee, klassiekers', items: [
      ['Earl Grey', '3,20', 'Lekkere thee met een vleugje jasmijn'],
      ['Zuid-Afrikaanse rooibos', '3,20', 'Lichtzoet en kruidig'],
      ['Groene gunpowderthee', '3,20', 'Groene krulletjesthee'],
      ['English breakfast', '3,20', 'Een mix van ceylon en assam, krachtig en vol van smaak']
    ] },
    { t: 'Thee, specialiteiten', items: [
      ['Verveine citroenthee', '3,50', 'Heerlijke frisse thee met verveine, wilde kamille, citroengras en melisseblad. Voor een fruitig en opgewekt gevoel.'],
      ['Liefdevol', '3,50', 'Zoete thee op basis van pai mu tan. Boordevol bloemen en exotisch fruit: een thee vol liefde.'],
      ['Sterrenmix', '3,50', 'Zeer populaire kruidenthee met steranijs, jeneverbes, pepermunt, venkel, zoethout en zoethoutwortel.'],
      ['Vreedzaam', '3,50', 'Een prettige thee voor in de avond met onder andere melisse, kamille en pepermunt. Zorgt voor een vredig gevoel.'],
      ['Bosvruchten', '3,50', 'Zwarte thee met bosvruchten en bramenblad']
    ] }
  ] }
];
