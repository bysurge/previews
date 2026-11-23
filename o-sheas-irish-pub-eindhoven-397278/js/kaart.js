// Kaarten O'Sheas: overgenomen uit hun food- en drinks-PDF (namen origineel, omschrijvingen vertaald).
// item: [naam, omschrijving, prijs, vega?]
var FOOD = [
  { id: 'snacks', name: 'Snacks & sides', items: [
    ['Chorizo croquettes', '5 stuks', '8,50'],
    ['Beef or vega bitterballen', '8 stuks, rund of vega', '9,00', 1],
    ['Chicken or vega spring rolls', '2 stuks, kip of vega', '6,50', 1],
    ['Onion rings', '10 stuks', '7,50', 1],
    ['Mozzarella sticks', '6 stuks', '8,50', 1],
    ['Jalapeño poppers', '6 stuks', '9,00', 1],
    ['Popcorn chicken', 'Met BBQ-saus', '9,95']
  ]},
  { id: 'sharing', name: 'Sharing is caring', note: 'Prijzen voor klein / groot.', items: [
    ['Classic nachos', 'Tortillachips, nachokaas, tomatensalsa, guacamole en zure room', '8,00 / 12,50', 1],
    ['Loaded pulled pork nachos', 'Tortillachips, nachokaas, tomatensalsa, guacamole, zure room en pulled pork', '12,50 / 16,50'],
    ['Chilli beef nachos', 'Tortillachips, nachokaas, tomatensalsa, guacamole, zure room, jalapeños en chilli beef', '12,50 / 16,50']
  ]},
  { id: 'dogs', name: 'The dogs', items: [
    ['Classic dog', 'Hotdog met varkensworst op een broodje, gebakken ui, ketchup en mosterd. Met chips', '8,90'],
    ['Dirty dog', 'Hotdog met varkensworst op een broodje, chilli beef en kaas. Met chips', '9,90']
  ]},
  { id: 'burgers', name: 'Burgers', note: 'Onze beefburgers worden vers gemaakt van 100% grasgevoerd Angus-rund. Alle burgers met handgesneden friet.', items: [
    ['Veg fusion burger', 'Vegaburger, sla, tomaat, ui, augurk en burgersaus op een briochebol', '15,95', 1],
    ['The Village Idiot', '100% huisgemaakte beefburger, gerookte krokante bacon, Irish cheddar, sla, tomaat, augurk en burgersaus op een briochebol', '15,95'],
    ['BBQ pulled pork burger', 'Langzaam gegaard varkensvlees in BBQ-saus, sla, tomaat en krokante uitjes op een briochebol', '15,95'],
    ['Smashed cheese burger', 'Beefburger met Irish cheddar, burgersaus, ui en augurk op een broodje', '12,95']
  ]},
  { id: 'specials', name: 'House specials', items: [
    ['Fish + chips', 'Gefrituurde heekfilet in bierbeslag met citroen, tartaarsaus en handgesneden friet. Mushy peas erbij voor 1 euro', '17,95'],
    ["Murphy's fried chicken", '24 uur in buttermilk gemarineerde stukken kip, vers gefrituurd met een krokant korstje. Met handgesneden friet en chipotle-mayo', '16,95'],
    ["O'Sheas schnitzel", 'Onze populaire varkensschnitzel van 300 gram, vers gepaneerd en goudbruin gebakken. Met handgesneden friet en jus', '15,95']
  ]},
  { id: 'fries', name: 'Fries & loaded fries', items: [
    ['Hand-cut fries', 'Handgesneden friet', '4,50', 1],
    ['Loaded fries', 'Handgesneden friet met kaas en knoflook', '6,50', 1],
    ['Tater tots', 'Met bacon, kaas en Frank’s Hot Sauce', '8,95'],
    ['Pulled pork fries', 'Handgesneden friet met pulled pork, BBQ-saus en hennepmayo', '9,95'],
    ['Chilli beef fries', 'Handgesneden friet met chilli beef, jalapeños en kaas', '8,95']
  ]},
  { id: 'fryup', name: 'Fry-up (weekend)', note: 'Zaterdag en zondag van 12.00 tot 14.00 uur.', items: [
    ['Mini brekkie', 'Worstje, bacon, gebakken ei, bonen en toast', '9,95'],
    ['Irish brekkie', 'Varkensworstje, bacon, black en white pudding, gebakken champignons, hash brown, gebakken ei, tomaat, bonen en toast', '15,95']
  ]}
];

// [naam, detail, prijs]
var DRINKS = [
  { id: 'tap', name: 'Van de tap', note: 'Prijzen voor klein / groot glas. Vraag ook naar de wisseltap.', items: [
    ['Grolsch', '5,0% · Nederland', '3,80 / 7,30'],
    ['Peroni', '4,7% · Italië', '4,00 / 7,60'],
    ['Guinness Irish Stout', '4,2% · Ierland', '4,00 / 8,20'],
    ['Kilkenny Irish Red', '4,3% · Ierland', '4,00 / 8,00'],
    ['Grolsch Hefeweizen', '5,1%', '5,00 / 7,90'],
    ['Old Speckled Hen Ale', '5,0% · Morland, Engeland', '4,00 / 7,20'],
    ['Stowford Press Cider', '4,5% · Westons, Engeland', '4,00 / 7,80'],
    ['Hangende Harry IPA', '5,9% · Ondersteboven, Nederland', '5,90'],
    ['Texels Skiller Wit', '5,0%', '6,40'],
    ["Murphy's Law Rose Beer", "4,4% · O'Sheas Eindhoven", '5,50']
  ]},
  { id: 'flessen', name: 'Flessen', groups: [
    ['IPA', [
      ['Milkshake IPA', '6,2% · Garden Brewery, Kroatië', '7,20'],
      ['Papa Beer NEIPA', '5,5% · Eleven, Nederland', '7,20'],
      ['Gilda Hazy IPA', '5,5% · Basqueland, Spanje', '7,50'],
      ['Elvis Juice', '6,5% · Brewdog, Schotland', '6,80'],
      ['Hazy Sunrise NEIPA', '7,1% · Kees, Nederland', '7,20'],
      ['Orchestra of Angels', '6,3% · 100 Watt, Nederland', '7,50'],
      ['Wrench IPA', '5,5% · Moersleutel, Nederland', '7,50'],
      ['Calypso Session IPA', '4,0% · IJ Brewery, Nederland', '5,90']
    ]],
    ['Wit', [
      ['White Mamba', '5,0% · Two Chefs, Nederland', '6,70'],
      ['Blanche de Namur', '4,5% · Du Bocq, België', '4,60'],
      ['Uiltje Wit', '6,0% · Nederland', '7,00'],
      ['Weihenstephaner', '5,4% · Duitsland', '6,50']
    ]],
    ['Tripel', [
      ['Fourchette', '7,5% · Van Steenberge, België', '6,50'],
      ["Triple d'Anvers", '8,0% · De Koninck', '7,20'],
      ['Organicus', '8,5% · Lupulus', '7,20']
    ]],
    ['Cider & glutenvrij', [
      ['Somersby Apple', '4,5%', '6,20'],
      ['Somersby Blackberry', '4,5%', '6,20'],
      ['Magners Cider', '4,5% · C&C, Ierland', '8,00'],
      ['Cool Earth Lager', '4,0% · Lowlander, Nederland', '6,80']
    ]],
    ['Stout', [
      ['Caramel Fudge Stout', '11,5% · Kees, Nederland', '7,30']
    ]],
    ['Fruit & zuur', [
      ['Kriek Max', '3,5%', '5,20'],
      ['Kasteel Rouge', '8,0%', '7,00'],
      ['Delirium Red Fruit', '8,0%', '7,00']
    ]],
    ['Belgische klassiekers', [
      ['La Chouffe', '8,0%', '6,70'],
      ['Duvel', '8,5%', '6,70'],
      ['Bar Bar Blond', '8,0%', '6,00'],
      ['Omer Traditional Blond', '8,0%', '6,30'],
      ['Orval', '6,2%', '6,70']
    ]],
    ['Trappisten', [
      ['Westmalle Dubbel', '7,0%', '6,00'],
      ['Rochefort 6', '7,5%', '6,00'],
      ['Rochefort 8', '9,2%', '6,50'],
      ['Rochefort 10', '11,3%', '7,50']
    ]],
    ['Alcoholarm & alcoholvrij', [
      ['Grolsch 0.0', '', '4,00'],
      ['Lowlander Wit 0,0%', '', '6,50'],
      ['Wanderlust IPA', '0,3% · Van Moll', '6,60'],
      ['Radler', '2,0% · Grolsch', '4,00'],
      ['Weizen 0,0%', 'Grolsch', '4,00'],
      ['Playground IPA', '0,5% · Van De Streek', '6,40'],
      ['Be Wise Weizen', '0,3% · Kees', '5,50'],
      ['Guinness 0.0', '', '6,70'],
      ['Peroni 0.0', '', '4,00']
    ]]
  ]},
  { id: 'wijn', name: 'Wijn & seltzers', groups: [
    ['Wijn (glas 5,40 · fles 21,00)', [
      ['Marquis de Alfamen Chardonnay', 'Wit · Spanje · tropisch, fris, gebalanceerd', ''],
      ["Croix d'Or Sauvignon Blanc", 'Wit · Frankrijk · citrus, licht, fris', ''],
      ['Villa Fiore Pinot Grigio', 'Wit · Italië · fruitig, droog, mineraal', ''],
      ['Laurent Miquel Cazal Viel Cinsault Syrah', 'Rosé · Frankrijk · levendig, fris, fruitig', ''],
      ['Epicuro Negroamaro-Cabernet Sauvignon', 'Rood · Italië · zacht, vol, rood fruit', '']
    ]],
    ['Hard seltzers', [
      ['Viper Hard Ice Tea Mango/Green', '4,0%', '6,50'],
      ['Viper Hard Seltzer Peach', '4,0%', '6,50']
    ]]
  ]},
  { id: 'scotch', name: 'Scotch whisky', note: 'Prijzen per glas.', groups: [
    ['Highlands: eik, graan, rook, vruchtencake', [
      ['Aberfeldy 12', '', '6,50'], ['Aberlour 10', '', '6,00'], ['Dalwhinnie 15', '', '8,00'], ['Dalwhinnie Winter Gold', '', '8,00'], ['Edradour 10', '', '8,00'], ['Glenmorangie Original', '', '6,50'], ['Highland Park 10', '', '8,00'], ['Highland Park 12', '', '7,00'], ['Loch Lomond Signature', '', '5,50'], ['Loch Lomond Single Grain', '', '5,50'], ['Loch Lomond Single Malt', '', '5,50'], ['Oban 14', '', '9,80'], ['Royal Brackla 12', '', '7,00'], ['Singleton Tailfire', '', '6,50'], ['Singleton Sunray', '', '6,50'], ['Singleton Cascade', '', '6,50'], ['Smokey Joe', '', '8,00'], ['Tomatin Earth', '', '8,00'], ['Tomatin Fire', '', '8,00']
    ]],
    ['Lowlands: bloemig, gras, citrus, toast, gember', [
      ['Aerstone Sea Cask', '', '6,00'], ['Aerstone Land Cask', '', '6,00'], ['Auchentoshan 12', '', '7,00'], ['Glenkinchie 12', '', '7,00']
    ]],
    ['Speyside: vanille, karamel, appel, vleugje turf', [
      ['The Balvenie Doublewood 12', '', '8,50'], ['Cardhu 12', '', '6,00'], ['Cardhu 15', '', '8,00'], ['Chivas Regal 12', '', '5,00'], ['Chivas Regal 18', '', '9,80'], ['Caol Ila 12', '', '8,00'], ['Cragganmore 12', '', '8,00'], ['Glen Elgin 12', '', '8,00'], ['Glenfarclas 10', '', '6,50'], ['Glenfiddich 12', '', '6,70'], ['Glenfiddich IPA', '', '9,80'], ['Glenlivet 12', '', '6,50'], ['Glenlivet 15', '', '9,00'], ['Glenlivet Founders Reserve', '', '7,00'], ['Glenrothes 10', '', '7,00'], ['Glenrothes 12', '', '8,50'], ['Knockando 12', '', '5,50'], ['Longmorn', '', '8,00'], ['Monkey Shoulder', '', '6,00'], ['The Laddie 10', '', '8,00']
    ]],
    ['Islay & Skye: turf, rook, jodium, zout, zeewier', [
      ['Ardbeg 10', '', '8,00'], ['Ardbeg An Oa', '', '9,80'], ['Bowmore 12', '', '6,50'], ['Bowmore Legend', '', '7,50'], ['Finlaggan Cask Strength', '', '8,00'], ['Finlaggan Original Peaty', '', '6,50'], ['Jura 10', '', '5,50'], ['Laphroaig 10', '', '6,00'], ['Laphroaig Quarter Cask', '', '7,90'], ['Laphroaig Select', '', '7,00'], ['Scapa Glansa', '', '12,00'], ['Scapa Skiren', '', '12,00'], ['Talisker 10', '', '8,00'], ['Talisker Storm', '', '8,00'], ['The Arran Malt', '', '7,50']
    ]]
  ]},
  { id: 'irish', name: 'Irish & world whiskey', note: 'Prijzen per glas.', groups: [
    ['Irish single malt: room, vanille, mout, hout', [
      ['Connemara', '', '6,00'], ['The Irishman 12', '', '7,00'], ['Teeling', '', '6,50'], ['Writers Tears', '', '6,00']
    ]],
    ['Irish single pot still: eik, kruiden, bloemig, vleugje menthol', [
      ['Green Spot', '', '7,00'], ['Redbreast 12', '', '8,00']
    ]],
    ['Irish blended: gerst, fruit, karamel, kruiden', [
      ['Jameson Black Barrel', '', '6,00'], ['Jameson Cask Mates Stout', '', '8,00'], ['Hapenny', '', '6,00'], ['Kilbeggan', '', '5,50'], ['Roe & Co', '', '6,00'], ['Tyrconnell', '', '6,20'], ['Bushmills The Original', '', '5,20'], ['Bushmills Black Bush', '', '5,20'], ['Silkie', '', '5,50'], ['Tullamore Dew', '', '6,00'], ['Wild Geese', '', '6,50'], ['The Pogues', '', '5,70']
    ]],
    ['World whisky', [
      ['Amrut Fusion', 'India', '9,80'], ['Amrut Single Malt', 'India', '7,00'], ['Frysk Hynder Red Wine', 'Nederland', '8,00'], ['Kavalan Classic', 'Taiwan', '9,50'], ['Nikka Pure Malt', 'Japan', '9,00'], ['Penderyn Madeira', 'Wales', '8,50']
    ]]
  ]},
  { id: 'gin', name: 'Gin, rum & bourbon', groups: [
    ['Gin, met Royal Bliss Indian tonic', [
      ["Hendrick's", '41,4% · Schotland', '9,50'], ['Gin Mare', '42,7% · Spanje', '9,50'], ['V2C', '42% · Nederland', '9,50'], ['Blooms Pink', '40% · Verenigd Koninkrijk', '9,50']
    ]],
    ['Rum', [
      ['Appleton Estate 12', '43% · Jamaica', '6,50'], ['El Dorado 12', '40% · Guyana', '6,50'], ['Don Papa', '40% · Filipijnen', '6,50'], ['Kraken', '40% · Trinidad & Tobago', '6,50'], ['Doorly XO', '43% · Barbados', '6,50'], ['Ron Abuelo 12', '40% · Panama', '6,50']
    ]],
    ['Kentucky bourbon', [
      ['Woodford Reserve', '43,2%', '6,00'], ['Elijah Craig', '47%', '7,50'], ["Michter's Sour Mash", '43%', '9,50']
    ]]
  ]},
  { id: 'shots', name: 'Shots & bombs', items: [
    ['Baby Guinness', '', '5,50'],
    ['Jägermeister, Tequila Gold, Drop Shot of Sambuca', '', '5,00'],
    ['Apfelkorn, Flügels, Frangelico of Limoncello', '', '4,50'],
    ['Box of Flügels', '', '75,00'],
    ['Jäger Bomb of Skittle Bomb', '', '5,50']
  ]}
];
