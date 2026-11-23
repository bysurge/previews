// Kaarten van De Groene Vlinder, overgenomen van degroenevlinder.nl (22-11-2026).
// [naam, omschrijving, prijs] ; prijs null = geen vaste prijs op hun kaart.
window.KAART = {
  lunch: [
    { cat: 'Wisselende maandgerechten', special: true, items: [
      ['Koffie: Pumpkin spice latte', 'Een romige latte met de warme, kruidige smaak van pumpkin, afgemaakt met kaneel en zachte pompoenspekjes.', '5.95'],
      ['Gebak: Schuimgebak', 'Luchtig schuimgebak met hazelnoot meringue en royaal pure chocoladeschaafsel.', '8.45'],
      ['Tosti: Rendang', 'Stevige tosti met rendang en jonge kaas, met piccalilly mayonaise.', '11.95'],
      ['Bite: La Trappe bitterballen', 'Krokante bitterbal gevuld met stoofvlees met La Trappe Dubbel, met piccalilly mayonaise.', '7.95'],
      ['Broodje: Tuna Melt', 'Knapperig ciabatta broodje met tonijn en gesmolten kaas, warm uit de oven.', '14.95'],
      ['Soep: Champignon', 'Champignonsoep met malse kipreepjes en five spices room.', '8.45']
    ]},
    { cat: 'Specialiteiten', items: [
      ['Zomerkaart: Crispy chicken sandwich', "Luchtig 'Schiacciata Romana' broodje met brandermayonaise, gemengde sla, krokante 'Kara age' kip en spicy Mississippi saus", '15.95'],
      ["Broodje 'De Groene Vlinder'", 'kipblokjes | ui | champignons | kruidenkaas | spekjes', '14.95'],
      ['Kip-teriyaki', 'Malse kipfilet in teriyakisaus | taugé | champignons | sesamzaad | bosui', '14.95'],
      ['Pulled-spare-ribs', 'Italiaanse bol | sla | coleslaw | spare-rib vlees | barbecuesaus', '15.95'],
      ['Biefstukpuntjes', 'Gemarineerde biefstukpuntjes | champignon | rode ui | sla | knoflooksaus | Italiaanse bol', '15.95'],
      ['Twee kroketten desembrood', 'Rundvlees, garnaal of kaas kroketten', '13.50'],
      ['Mandje Steppegras met snack', 'Snack naar keuze: frikandel | kroket | kipkorn | viandel | kaassoufflé | mexicano', '9.95'],
      ['Broodje van de maand', "Zie 'Wisselende maandgerechten'", null]
    ]},
    { cat: 'Twaalf uurtje', items: [
      ['Twaalf uurtje vlees', 'drie sneetjes brood | kaas | ham | Bourgondische kroket | spiegelei | mosterd-mayonaise | kopje tomatensoep', '14.45'],
      ['Twaalf uurtje vis', 'drie sneetjes brood | gerookte zalm | krabsalade | garnalenkroket | cocktailsaus | kopje vissoep', '16.45']
    ]},
    { cat: 'Belegde broodjes', items: [
      ['Martino', 'filet Americain | gefrituurde uitjes | augurk | ei | martinosaus', '10.95'],
      ['Roombrie', 'honing | vers gebrande noten | rucola', '10.95'],
      ['Tonijnsalade', 'Komkommer | kappertjes | gemengde sla', '10.95'],
      ['Stokbroodje gezond', 'ham | kaas | sla | tomaat | komkommer | augurk | ananas | ei | ui | mosterd-dilledressing', '11.95'],
      ['Carpaccio', 'Parmezaanse kaas | spekjes | gemengde pitten | truffeldressing', '13.75'],
      ['Gerookte zalm', 'roomkaas | kappertjes | rode ui | mosterd-dilledressing', '14.75']
    ]},
    { cat: 'Lekkere trek', items: [
      ['Tosti ham/kaas', 'Focaccia brood | tostisaus', '7.95'],
      ['Tosti Truffel', 'Focaccia brood | Kaas | kipblokjes | truffelsaus', '9.75'],
      ['Tosti van de maand', "Zie 'Wisselende maandgerechten'", null]
    ]},
    { cat: 'Eiergerechten', items: [
      ['Uitsmijter naturel', '', '10.75'],
      ["Uitsmijter 'De Groene Vlinder'", 'ui | champignon | gesmolten kaas', '13.00'],
      ['Beleg', 'Keuze uit: ham | kaas | spek | champignon | ui', '1.50']
    ]},
    { cat: 'Salades', note: 'Ingrediënten van onze salades: gemengde sla, rauwkost, komkommer, tomaat, rode ui, croûtons, gemengde pitten.', items: [
      ['Keuze salade', 'Wij hebben een eigen saladekaart. Hiermee kunt u zelf uw eigen salade geheel samenstellen.', '15.25'],
      ['Kip-sesam salade', 'Spekjes | sesamdressing | Parmezaanse kaas', '15.25'],
      ['Salade carpaccio', 'spekjes | Parmezaanse kaas | gemengde pitten | truffeldressing', '15.25'],
      ['Quattro formaggi salade', 'Gebakken brie | Parmezaanse kaas | cheddar | geitenkaas | honing-mosterd-dressing | notenmix', '15.25']
    ]},
    { cat: 'Soepen', items: [
      ['Tomatensoep', 'gehaktballetjes | pestoroom | croutons', '8.25'],
      ['Rijkelijk gevulde vissoep', 'diverse vissoorten | gamba | room | croutons', '9.25'],
      ['Soep van de maand', "Zie 'Wisselende maandgerechten'", null]
    ]},
    { cat: 'Gebak', items: [
      ['Zomerkaart: Aardbeien monchou', 'Glaasje met een bodem van Bastogne, monchou en slagroom, afgetopt met aardbeiengelei, witte chocolade en verse aardbeien', '8.25'],
      ['Appelgebak', 'warm of koud | slagroom', '5.75'],
      ['Nougatinegebak', 'hazelnootschuimpje | slagroom | nootjes', '4.95'],
      ['Brownie', 'chocoladesaus | slagroom', '8.95'],
      ['Cheesecake', 'aardbeien saus | slagroom', '8.95'],
      ['Pecan toffee ijstaartje', 'caramelsaus | slagroom', '7.95'],
      ['Citroen meringue ijstaartje', 'lemoncurd saus | slagroom', '7.95'],
      ['Gebak van de maand', "Zie 'Wisselende maandgerechten'", null]
    ]},
    { cat: 'Voor de kids', items: [
      ['Worstenbroodje', 'van Floor van Lieshout', '3.50'],
      ['Kinderlunch', '2 boterhammen | zoet beleg', '3.95'],
      ['Poffertjes', 'poedersuiker | stroop | roomboter | speelgoedje', '5.95'],
      ['Frites met snack', 'Frites | snack naar keuze: frikandel, fantasie stick, kipnuggets, bitterballen, kipfingers | appelmoes | speelgoedje', '9.50'],
      ['Steppegras met snack', 'Steppegras | appelmoes | snack naar keuze: frikandel, fantasie stick, kaassoufflé, kipnuggets of kipfingers | speelgoedje', '9.95']
    ]}
  ],
  bites: [
    { cat: 'Burgers', note: 'Portie friet erbij? + € 3,50. Op een Italiaanse bol? + € 1,50.', items: [
      ['De Vlinder Burger', 'Onze Vlinderburger, een icoon in de Reeshof! Brioche broodje met 100% rundvlees burger, gebakken champignon, gebakken ui, bacon, gebakken ei, cheddar en Joppiesaus. Met gemengde sla, komkommer, tomaat en augurk', '14.25'],
      ['The Giant Baconater', 'Durf jij hem aan? 3 stuks van onze 100% rundvlees burgers, cheddar, veel bacon en een gebakken eitje. Met gemengde sla, komkommer, tomaat, augurk en onze burgersaus', '15.95'],
      ['Truffel-Parmezaan', '100% rundvleesburger met Parmezaanse kaas en zwarte truffel mayonaise. Met gemengde sla, komkommer, tomaat, augurk op een brioche broodje', '12.25'],
      ['Spicy Cheesy Chicken', 'Brioche broodje met kruidig-gepaneerde kipburger, gesmolten jonge kaas, sriracha-mayonaise, gemengde sla, komkommer, tomaat, augurk', '12.25'],
      ['Fish Burger', 'Krokant gebakken visburger in eigen bierbeslag en uit eigen keuken! Brioche broodje met komkommer, gemengde sla, augurk, tomaat en frisse remouladesaus', '12.25'],
      ['Avocado burger (V)', '100% vegetarische burger van avocado, mais en quinoa. Getoast brioche broodje met guacamole, kaassaus, gemengde sla, komkommer, tomaat en augurk', '12.25']
    ]},
    { cat: 'Klassieke bites', items: [
      ['Bitterballen', '8 stuks | 100% rundvlees | mosterd | mayonaise', '9.95'],
      ['Mini frikandelletjes', '8 stuks | mayonaise | curry', '7.75'],
      ['Bittergarnituur', '8 stuks | mayonaise | curry', '9.95']
    ]},
    { cat: 'Luxe friet', items: [
      ['Krul frites', 'Cajun kruiden | Brandermayonaise', '7.50'],
      ['Zoete aardappel frites (V)', 'Pesto mayonaise | Parmezaanse kaas', '7.50'],
      ['Loaded fries: Truffel-Parmezaan (V)', 'Zwarte truffel mayonaise | Parmezaanse kaas', '6.95'],
      ["Loaded fries: 'Kaas-bacon'", 'Cheddar | Gouda | spek flakes | rode ui', '6.95']
    ]},
    { cat: 'Vegetarische bites', items: [
      ['Old Amsterdam bitterballen', '6 stuks | Brandermayonaise | mosterd', '7.50'],
      ['Risotto-truffel bitterballen', '5 stuks | zwarte truffelmayonaise | truffelkroepoek', '7.95'],
      ['Kaas bittergarnituur', '8 stuks totaal | kaaskroket | kaassoufflé | kaasnuggets | mini nacho cheese bite | Brandermayonaise', '9.95']
    ]},
    { cat: "Nacho's", items: [
      ['Nacho Cheese', 'Tortilla chips | cheddar en Gouda kaas | bacon | rode ui | chilisaus | guacamole | crème fraîche', '10.95']
    ]},
    { cat: 'Luxe bites', items: [
      ['Bite van de maand', 'Elke maand een wisselende bite van de maand. Vraag ernaar bij een van onze medewerkers!', null],
      ['Iberico ribfingers', 'In ketjap-gember marinade | bosuitjes | gefrituurde uitjes', '10.25'],
      ['Buikspek', 'In Oosterse marinade | soja-wasabi crumble', '9.95'],
      ['Chicken bites', '5 stuks | kara age kip | sesam-mayonaise | teriyaki | rode-curry kroepoek | truffel-balsamico crumble', '8.50'],
      ['Torpedo garnalen', '4 stuks | limoen-koriander mayonaise | wasabi crumble', '7.95'],
      ['Gyoza', '5 stuks | gyoza gevuld met kip en groenten | teriyaki | sesamzaadjes | bosui', '7.45'],
      ['Chorizo kroketjes', '5 stuks | kerrie-mayonaise', '7.95'],
      ['Kibbeling', 'In eigen bierbeslag klaargemaakt | remouladesaus', '7.45'],
      ['Amerikaanse tenders', '3 stuks | southern fried chicken tenders | knoflook-sriracha mayonaise', '6.95'],
      ['Serranoham kroketjes', '5 stuks | brandermayonaise', '7.95'],
      ['Japanse variatie', "2 chicken bites | 2 gyoza kip | 2 tempura-gamba's | sesam-soja mayonaise", '10.25']
    ]}
  ],
  diner: [
    { cat: 'Brood & soep', items: [
      ['Broodplank', '5 mini broodjes | kruidenboter | aioli | extra mini broodje € 1,00', '6.50'],
      ['Tomatensoep', 'gehaktballetjes | pestoroom | croutons', '8.25'],
      ['Rijkelijk gevulde vissoep', 'diverse vissoorten | gamba | room | croutons', '9.25'],
      ['Soep van de maand', "Zie 'Wisselende maandgerechten'", null]
    ]},
    { cat: 'Voorgerechten', items: [
      ['Rundercarpaccio', 'gemengde pitten | Parmezaanse kaas | spekjes | truffeldressing', '12.75'],
      ['Nacho cheese', 'Tortilla chips | kip | bacon | rode ui | roomkaas', '10.95'],
      ["Gamba's", 'warme knoflooksaus', '11.95']
    ]},
    { cat: 'Salades', note: 'Ingrediënten van onze salades: gemengde sla, rauwkost, komkommer, tomaat, rode ui, croûtons, gemengde pitten.', items: [
      ['Keuze salade', 'Wij hebben een eigen saladekaart. Hiermee kunt u zelf uw eigen salade geheel samenstellen.', '15.25'],
      ['Kip-sesam salade', 'Spekjes | sesamdressing | Parmezaanse kaas', '15.25'],
      ['Salade carpaccio', 'Spekjes | Parmezaanse kaas | gemengde pitten | truffeldressing', '15.25'],
      ['Quattro formaggi salade', 'Gebakken brie | Parmezaanse kaas | cheddar | geitenkaas | honing-mosterd-dressing | notenmix', '15.25']
    ]},
    { cat: 'Vleesgerechten', note: 'Geserveerd met verse frites en salade.', items: [
      ['Spare-ribs', 'knoflook-kruiden marinade | mais-ribs | frites | salade | knoflooksaus. XL + € 5,-', '25.50'],
      ['Kipsaté 200 gram', 'kroepoek | atjar | taugé | gefrituurde uitjes. 300 gram + € 3,-', '19.95'],
      ['Biefstuk', 'Diamanthaas | groenten garnituur | chimichurri | frites | saus naar keuze', '23.95'],
      ['Wienerschnitzel', 'Saus naar keuze | frites | salade', '19.95'],
      ['Varkenshaas met saus', 'Saus naar keuze | verse frites | salade', '20.95'],
      ['Varkenshaas brie & spek', 'Gesmolten brie | spek | verse frites | salade', '20.95']
    ]},
    { cat: 'Visgerechten', note: 'Geserveerd met verse frites en salade.', items: [
      ['Vispotje', 'Diverse vissoorten van het seizoen | vissaus | frites | mini broodje', '21.50'],
      ["Gamba's", 'Warme knoflooksaus | 2 mini broodjes', '21.50'],
      ['Fish & Chips', 'In beslag gebakken witvis | remouladesaus | verse frites', '19.95']
    ]},
    { cat: 'Supplementen', items: [
      ['Warme saus', 'champignon | pepersaus | Stroganoffsaus | stoofvlees | satésaus', '1.50'],
      ['Gebakken champignons', '', '1.50'],
      ['Koude saus', 'mayonaise | curry | tomatenketchup | appelmoes | joppiesaus', '0.60'],
      ['Kruidenboter', '', '0.60']
    ]},
    { cat: 'Kindergerechten', items: [
      ['Steppegras met snack', 'Steppegras | appelmoes | snack naar keuze: frikandel, fantasie stick, kipnuggets of kipfingers | speelgoedje', '9.95'],
      ['Frites met snack', 'Frites | snack naar keuze: frikandel, fantasie stick, kipnuggets, bitterballen | appelmoes | speelgoedje', '9.50'],
      ['Poffertjes', 'Poedersuiker | stroop | roomboter | speelgoedje', '5.95']
    ]},
    { cat: 'Nagerechten', items: [
      ['Bastogne toren', 'Monchou-bastogne ijs | caramel parels | bastogne | caramelsaus', '10.95'],
      ['American cheesecake', 'Biscuit bodem | zacht-romige vulling | aardbeiensaus | chocolade ijs | slagroom', '10.95'],
      ['Brownie', 'Brownie | chocoladesaus | slagroom | crumble', '10.95'],
      ['Pecan toffee ijstaartje', 'caramelsaus | slagroom', '7.95'],
      ['Citroen meringue ijstaartje', 'Lemoncurdsaus | slagroom', '7.95'],
      ['Dame Blanche', 'vanille ijs | warme chocoladesaus | slagroom', '8.95'],
      ['Coupe Stroopwafel', 'stroopwafel ijs | vanille ijs | stroopwafel | caramelsaus', '8.95'],
      ['Coupe Oreo', "Oreo ijs | chocolade ijs | oreo's | crumble | caramelsaus", '8.95'],
      ['Coupe Sorbet (seizoensproduct)', 'Mango ijs | aardbei ijs | citroen ijs | aardbeien | slagroom', '8.95'],
      ["Sundae's", 'keuze uit: chocolade | aardbei | caramel | kersen', '8.95'],
      ['Ice coffee', 'huisgemaakt | diverse smaken', '5.95'],
      ['Milkshake', 'keuze uit: vanille | banaan | chocolade | aardbei', '5.95']
    ]},
    { cat: 'Kindernagerechten', items: [
      ['Poffertjes', 'poedersuiker | roomboter', '5.95'],
      ['Kinderijsje met snoepjes', 'Loop naar onze IJssalon en zoek een lekker ijsje uit in onze ijsvitrine!', null]
    ]}
  ],
  dranken: [
    { cat: 'Warme dranken', items: [
      ['Koffie crème', '', '3.10'], ['Espresso', '', '3.10'], ['Cappuccino', '', '3.45'], ['Koffie verkeerd', '', '3.60'],
      ['Latte macchiato', 'Ook verkrijgbaar in een lekker smaakje! Of met havermelk + € 0,50', '3.75'],
      ['Thee', "'The Art of Tea Collection'", '3.10'], ['Verse munt-thee', '', '3.95'], ['Verse gember-thee', '', '3.95'],
      ['Warme chocomel', '', '4.25'], ['Slagroom', '', '0.75']
    ]},
    { cat: 'Specialiteiten', items: [
      ['Caramel macchiato', 'ook in andere verrassende smaken verkrijgbaar!', '4.75'],
      ['White chocolate latte macchiato', '', '4.75'], ['Chai spice latte', '', '4.75'],
      ['Ice coffee', 'huisgemaakt | diverse smaken', '5.95'],
      ['Koffie van de maand', "Zie 'Wisselende maandgerechten'", null],
      ['Irish coffee', 'Irish Whisky | slagroom', '7.75'], ['Italian coffee', 'Amaretto | slagroom', '7.75'], ['French coffee', 'Grand Marnier | slagroom', '7.75']
    ]},
    { cat: 'Frisdranken', items: [
      ['Zomerkaart: Huisgemaakte ice-tea', 'Langzaam getrokken van gember, sinaasappel, citroen en Earl-grey thee', '4.75'],
      ['Zomerkaart: Bubble tea', 'IJskoude thee met een scheutje melk en bubbeltjes. Smaken: aardbei-mango of passievrucht-framboos', '5.25'],
      ['Coca-Cola', '', '3.50'], ['Coca-Cola zero', '', '3.50'], ['Fuze-tea lemon', '', '3.60'], ['Fuze-tea green', '', '3.60'], ['Fuze-tea peach hibiscus', '', '3.60'],
      ['Fanta orange', '', '3.60'], ['Fanta cassis', '', '3.60'], ['Sprite', '', '3.60'], ['Chaudfontaine still', '', '3.30'], ['Chaudfontaine bruisend', '', '3.30'],
      ['Ranja aardbei-framboos', '', '3.30'], ['Chaudfontaine still', 'fles 1 liter', '6.95'], ['Chaudfontaine bruisend', 'fles 1 liter', '6.95'],
      ['Fristi', '', '3.60'], ['Chocomel', '', '3.60'], ['Minute Maid appelsap', '', '3.60'], ['Rivella light', '', '3.60'],
      ['Royal Bliss tonic', '', '3.60'], ['Royal Bliss lemon', '', '3.60'], ['Royal Bliss ginger ale', '', '3.60']
    ]},
    { cat: 'Vruchtensappen', items: [
      ["Versgeperste jus d'orange", '', '4.95'], ['Smoothie', 'strawberry delight', '5.95']
    ]},
    { cat: 'Bieren van het vat', items: [
      ['Hertog Jan 0,25 liter', '', '3.70'], ['Hertog Jan 0,50 liter', '', '7.00'], ['Hertog Jan weizener 0,3 liter', '', '5.75'], ['Hertog Jan weizener 0,5 liter', '', '9.00'],
      ['Brugse Zot 0,3 liter', '', '5.75'], ['Wisseltap', 'Vraag naar ons wisselend assortiment speciaalbier van het vat', null]
    ]},
    { cat: 'Bieren van de fles', items: [
      ['Hertog Jan', '', '3.85'], ['Hoegaarden radler 2.0', '', '4.35'], ['Hoegaarden rosébier', '', '4.85'], ['Liefmans fruitesse', '', '4.85'], ['Leffe dubbel', '', '5.35'],
      ['Palm', '', '4.35'], ['La Chouffe', '', '5.85'], ['Duvel', '', '5.85'], ['Tripel Karmeliet', '', '6.15'], ['Desperados', '', '5.35'], ['Erdinger 0,5 liter', '', '7.75']
    ]},
    { cat: 'Tilburgse bieren', items: [
      ['La Trappe blond', '', '5.95'], ['La Trappe dubbel', '', '5.95'], ['La Trappe tripel', '', '5.95'], ['La Trappe quadrupel', '', '6.15'],
      ["La Trappe Isid'or", '', '5.95'], ['La Trappe witte trappist', '', '5.95'], ['La Trappe Nillis 0.0', '', '5.95'], ['La Trappe Epos 0.0', '', '5.95']
    ]},
    { cat: 'Alcoholvrije bieren', items: [
      ['Hertog Jan 0.0', '', '3.85'], ['Hoegaarden radler 0.0', '', '4.35'], ['Hoegaarden rosébier 0.0', '', '4.35'], ['Liefmans 0.0', '', '4.35'],
      ['La Trappe Nillis 0.0', '', '5.95'], ['La Trappe Epos 0.0', '', '5.95']
    ]},
    { cat: 'Wijnen & port', items: [
      ['Droge witte wijn', 'La Femme Chardonnay (frisse afdronk)', '4.95'], ['Droge witte wijn', 'La Femme Sauvignon blanc (vol | fruitig)', '4.95'],
      ['Droge witte wijn', 'La Femme Pinot Grigio', '4.95'], ['Rosé', 'La Femme Élégante (licht fruitig | soepel)', '4.95'],
      ['Zoete witte wijn', 'Green Wine company (banaan | meloen)', '4.95'], ['Rode wijn', 'La Femme Merlot (krachtige kruiden | rood fruit)', '4.95'],
      ['Cava', 'Flesje 187 ml', '5.95'], ['Fles wijn', '', '21.95'], ['Rode port', 'Ruby', '3.95']
    ]},
    { cat: 'Cocktails', items: [
      ['Bacardi Mojito', 'Bacardi | munt | limoen | suiker | soda', '9.25'],
      ['Pornstar Martini', '42Below Vodka | passievruchtsap | limoensap | vanille', '9.25'],
      ['Espresso Martini', '42Below Vodka | koffie | koffielikeur', '9.25'],
      ['Piña Colada', 'Bacardi | kokosroom | ananassap | limoen', '9.25'],
      ['Bombay Sapphire & Tonic', 'Bombay Sapphire | tonic | limoen | munt', '9.25'],
      ['Bosford Rosé Gin & Tonic', 'Bosford Rosé Gin | tonic | rood fruit', '8.75']
    ]}
  ]
};
window.STEPPEGRAS = { cat: 'Steppegras', note: 'Saus naar keuze: champignonsaus, pepersaus, Stroganoffsaus, stoofvlees of satésaus.', items: [
  ['Steppegras Biefstuk', 'Diamanthaas | Steppegras friet | saus naar keuze', '23.95'],
  ['Steppegras Varkenshaas', 'Varkenshaas | Steppegras friet | saus naar keuze', '20.95'],
  ['Steppegras Wienerschnitzel', 'Saus naar keuze | Steppegras friet | salade', '19.95'],
  ['Steppegras Kipsaté', 'Steppegras friet | 200 gram kipsaté | satésaus | seroendeng | gefrituurde uitjes | salade | taugé', '19.95'],
  ['Steppegras Fish', 'In beslag gebakken witvis | remouladesaus | Steppegras friet', '19.95'],
  ['Steppegras met 2 snacks', 'Snack naar keuze: frikandel | kroket | kipkorn | viandel | kaassoufflé | mexicano', '13.95']
]};
window.KAART.diner.unshift(window.STEPPEGRAS);
