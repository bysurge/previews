/* Kaart van In de Blaauwe Hand, overgenomen uit hun eigen PDF's:
   eetkaart 31-10-2026 en drankkaart 2-11-2026. v = vegetarisch, vg = veganistisch.
   Item: [naam, omschrijving, prijs (tekst of [[maat, prijs], ...]), label, alcohol] */
window.KAART = {
  eten: [
    { t: 'Hapjes', items: [
      ['Borrelnootjes', '', '3,90'],
      ['Nachos met salsadip en bieslooksaus', '', '4,70', 'v'],
      ['Gemarineerde olijven', '', '6,50', 'vg'],
      ['Padrón pepers met srirachamayonaise', '', '7,90', 'vg'],
      ['Jonge kaas en oude kaas', 'Gepasteuriseerd, met mieriksmosterd', '9,90', 'v'],
      ['Mixplankje', 'Jonge kaas, padrón pepers, olijven en fuet, met mieriksmosterd en srirachamayonaise', '13,50'],
      ['Fuet met zilveruitjes en mieriksmosterd', '', '9,90'],
      ["Huisgemaakte zoute karamel", "Met pinda's en pure chocolade", '3,90', 'vg'],
      ['Warme gehaktballetjes in chili-ketjapsaus', '8 stuks', '9,90']
    ]},
    { t: 'Warme hapjes', when: 'Tot 20:00 uur', items: [
      ['Meergranen pistoletje met olijfolie en zeezout', '', '6,60', 'vg'],
      ['Nachos uit de oven', 'Met groenten, cheddar, salsadip en zure room', '10,90', 'v'],
      ['Loaded nachos uit de oven', 'Met gemengd gehakt, groenten, cheddar en srirachamayonaise', '11,90'],
      ['Bitterballen met mieriksmosterd', '10 stuks', '7,90'],
      ['Veganistische bitterballen met mieriksmosterd', '8 stuks', '12,90', 'vg'],
      ['Gyoza dumplings met sojasaus', '8 stuks', '10,90', 'vg'],
      ['Uienringen met bieslooksaus', '10 stuks', '6,90', 'v'],
      ["Samosa's met chilisaus", '10 stuks', '6,90', 'vg'],
      ['Mini frikandellen met mayonaise', '10 stuks', '6,90'],
      ['Mini kaassouflés met srirachamayonaise', '10 stuks', '9,50', 'v'],
      ['Gemengde garnituur', '', [['12 stuks', '12,40'], ['25 stuks', '23,20']]],
      ['Veganistische gemengde garnituur', '', [['12 stuks', '12,40'], ['25 stuks', '23,20']], 'vg'],
      ['Friet met mayonaise', '', [['klein (1p)', '3,90'], ['middel (2-3p)', '6,90'], ['groot (4p+)', '8,90']], 'v']
    ]},
    { t: 'Flammkuchen', when: 'Van één uur na opening tot 20:00 uur',
      intro: 'Uit de oven, met een bodem van dun brooddeeg en plantaardige zure room. Klein 7,10, middel 11,80, groot 14,90.',
      items: [
      ['Elzasser', 'Met prei, rode ui en spek (ook te bestellen met veganistische bacon)', [['klein', '7,10'], ['middel', '11,80'], ['groot', '14,90']]],
      ['Mexicaans', 'Met gekruid gehakt, jalapeño peper, prei, paprika, cheddar en srirachamayonaise (ook te bestellen zonder gehakt)', [['klein', '7,10'], ['middel', '11,80'], ['groot', '14,90']]],
      ['Pulled chicken', 'Met geroosterde radijs, rucola en truffelmayonaise', [['klein', '7,10'], ['middel', '11,80'], ['groot', '14,90']]],
      ['Vergeten groenten', 'Met een pittenmix, rucola en tahindressing', [['klein', '7,10'], ['middel', '11,80'], ['groot', '14,90']], 'vg'],
      ['Spinazie', 'Met Gorgonzola en een pittenmix (ook te bestellen met plantaardige blauwe kaas)', [['klein', '7,10'], ['middel', '11,80'], ['groot', '14,90']], 'v']
    ]},
    { t: 'Warme gerechten', when: 'Van één uur na opening tot 20:00 uur', items: [
      ['Snert van Gert', 'Rijkgevulde erwtensoep met rookworst, geserveerd met een soepbroodje', '8,90'],
      ['Wilde Ierse hertenstoof', 'Met paddenstoelen en Guinness-saus', '15,90'],
      ['Pittige kaasfondue van Gorgonzola', 'Geserveerd met rauwkost en brood', '18,90', 'v'],
      ['Linzen-bourguignon', 'Met winterpeen, champignon en flespompoen, geserveerd met bladerdeegstengels', '9,90', 'vg']
    ]},
    { t: 'Bijgerechten', items: [
      ['Bulgursalade', 'Met komkommer, paprika, rode ui, tomaat, plantaardige witte kaas en citroensap', [['klein (1p)', '4,70'], ['groot (2-3p)', '8,10']], 'vg'],
      ['Friet met mayonaise', '', [['klein (1p)', '3,90'], ['middel (2-3p)', '6,90'], ['groot (4p+)', '8,80']], 'v'],
      ['Rijst', '', [['klein (1p)', '2,90'], ['groot (2-3p)', '4,90']], 'vg']
    ]},
    { t: 'Dagschotel', intro: 'Vraag de bediening of kijk op de krijtborden voor onze actuele dagschotel.', items: [] }
  ],

  tap: [
    ['Hertog Jan Pilsener', 'Goudkleurig pils; volmondig met een bittere afdronk', [['25 cl', '4,10'], ['45 cl', '7,30'], ['50 cl', '8,10']], '', '5,1%'],
    ['Maneblusser', 'Zacht, mildzoet bier met toetsen van citrus, koriander en groene appel. Fris met een klein bittertje in de afdronk', [['25 cl', '5,30']], '', '5,8%'],
    ['Schneider Helles', "Frisse, subtiel moutige lager uit Beieren met bloemige hoparoma's", [['30 cl', '4,30'], ['50 cl', '7,10']], '', '4,9%'],
    ['St. Bernardus Wit', "Belgische stijl witbier met aroma's van koriander, sinaasappel en kruidnagel. Zachtromig en fris van smaak", [['30 cl', '5,20'], ['50 cl', '8,50']], '', '5,5%'],
    ['Rooie Tieptop', 'Onze eigen rossige tripel wordt al sinds 1996 gebrouwen bij De Hemel uit Nijmegen. Lichtzoet en kruidig van smaak', [['25 cl', '5,90']], 'huis', '7,8%'],
    ['Hemels Blaauwe Waaghals', 'De Hemel, In de Blaauwe Hand en platenzaak de Waaghals sloegen de handen ineen voor dit tarweblonde bier. Fris, kruidig en fruitig met een aromatische hoptoets', [['25 cl', '5,20']], 'huis', '5,5%'],
    ['Wisseltap Oersoep', 'Vraag de bediening of kijk op de krijtborden voor de wisseltap van deze Nijmeegse brouwers', ''],
    ['Overige wisseltaps', 'Vraag de bediening of kijk op de krijtborden', '']
  ],

  fles: [
    { t: 'Alcoholvrij', items: [
      ['Guinness 0.0', 'Donkere stout met toetsen van geroosterde koffie en chocolade. Goede balans tussen zoet en bitter', [['44 cl', '6,70']], '', '0,0%'],
      ['Kasteel Rouge 0.0', 'Zoet robijnrood fruitbier met toetsen van kersen en vlierbes', [['33 cl', '6,50']], '', '0,0%'],
      ['La Trappe Epos Trappist', 'Fris, lichtblond bier met toetsen van banaan en kruiden. Klein zuurtje in het mondgevoel; mild bittere afdronk', [['33 cl', '4,70']], '', '0,0%'],
      ['La Trappe Nillis Trappist', "Amberkleurig bier met aroma's van rood fruit, mout, zoethout en karamel en met een mild bittere afdronk", [['33 cl', '5,00']], '', '0,0%']
    ]},
    { t: 'Alcoholarm', items: [
      ['De Kromme Haring Sand Diver 0.3', 'Alcoholarme ale. Fris, lichtzurig en ziltig. Met een citrustoets', [['33 cl', '7,00']], '', '<0,3%'],
      ['Jever Fun', 'Fris alcoholarm pils met stevige hopbitters', [['33 cl', '3,90']], '', '<0,5%'],
      ['Franziskaner Alkoholfrei', "Volle, alcoholarme weizen. Aroma's van banaan en kruiden", [['50 cl', '5,00']], '', '<0,5%'],
      ['Krombacher Radler Alkoholfrei', 'Radler; mix van citroenlimonade en alcoholarm pils', [['33 cl', '3,90']], '', '<0,5%'],
      ['Sandford Red Zero Glutenvrij', 'Verfrissende en gebalanceerde cider; sappig en een beetje wrang', [['50 cl', '11,10']], '', '<0,5%'],
      ['VandeStreek Playground Non Alcoholic IPA', 'Alcoholarme IPA met tropische fruittonen en bittere finish', [['33 cl', '6,40']], '', '<0,5%']
    ]},
    { t: 'Blond', items: [
      ['Pilsner Urquell', 'Het oorspronkelijke pils uit Tsjechië. Licht en verfrissend, met een subtiele karameltoets en een robuuste bitterheid', [['50 cl', '6,90']], '', '4,4%'],
      ['Chimay Goud Trappist', 'Licht patersbier met bloemige hoparoma\'s, koriander, een uitgesproken citrustoets en een droge, mild bittere afdronk', [['33 cl', '5,60']], '', '4,8%'],
      ['Reissdorf Kölsch', 'Bovengistend alternatief voor pils, dat in vergelijking wat meer body heeft. Licht granig, licht kruidig, zacht en droog', [['50 cl', '6,90']], '', '4,8%'],
      ['Leffe Blond', 'Zoetmoutig blond met een subtiele bitter in de afdronk', [['33 cl', '4,50']], '', '6,6%'],
      ['De Ranke XX-Bitter', "Deze Hoppy Blonde bevat veel intense bitters en aroma's van bloemige hop, hooi, gist en citrus. Aards en droog", [['33 cl', '6,80']], '', '6,0%']
    ]},
    { t: 'Zwaar blond', items: [
      ['Poperings Hommelbier', 'Koolzuurrijk en zachtzoet. Met toetsen van hop, citrus, sinaasappel, karamel en komijn. Droogbitter in de afdronk', [['25 cl', '5,00']], '', '7,5%'],
      ['Barbãr', 'Honingbier. Bloemig in geur en smaak met hints van honing, citrus en koriander. Zachtzoet en lichtzuur', [['33 cl', '6,80']], '', '8,0%'],
      ['Gouden Carolus Hopsinjoor', "Bloemige Hoppy Blonde met aroma's als rijp fruit en citrus. Met een mild alcoholzoetje en een droogbittere afdronk", [['33 cl', '6,80']], '', '8,0%'],
      ['Duvel', 'Koolzuurrijk en bloemig bier met veel citrustonen en een goede balans tussen alcoholzoet en hopbitterheid', [['33 cl', '6,50']], '', '8,5%'],
      ['St. Feuillien Grand Cru', "Krachtig met fruitige hoparoma's. Gistig in geur en smaak en met een droogbittere afdronk. Zonder toegevoegde kruiden", [['33 cl', '7,90']], '', '9,5%']
    ]},
    { t: 'Tripel', items: [
      ['Fourchette', 'Deze volmondige en bloemige tripel bevat geuren en smaken van tarwe, citrus, koriander, kruidnagel en pompelmoes', [['33 cl', '6,80']], '', '7,5%'],
      ['De Ranke Guldenberg', "Zacht met een goede balans tussen fruit, kruiden, alcohol en bitters. Aroma's als Belgische gist, banaan en vanille", [['33 cl', '7,60']], '', '8,0%'],
      ['Tripel Karmeliet', 'Romige, fruitige en zachte tripel. Met toetsen van vanille, rietsuiker, banaan, perzik en citrus', [['33 cl', '5,70']], '', '8,4%'],
      ['Westmalle Tripel Trappist', "Zachtzoet en complex met fruitaroma's als rijpe banaan en citrus en een mildbittere finish. De moeder aller tripels", [['33 cl', '7,30']], '', '9,5%']
    ]},
    { t: 'Saison & IPA', items: [
      ['VandeStreek Hop Art Glutenvrij', "Frisse West Coast IPA met aroma's als mango, passievrucht en perzik", [['33 cl', '7,30']], '', '5,0%'],
      ['Frontaal Juice Punch', 'Deze NEIPA is mistig, fris, bloemig en grassig. Met toetsen van grapefruit, sinaasappel, passievrucht, kokos en ananas', [['33 cl', '6,80']], '', '5,8%'],
      ['Saison Dupont', 'Stijlicoon onder de saisons. In geur en smaak vind je appel, peer, vanille, kruiden en citrus terug. Droog en mildbitter', [['33 cl', '5,40']], '', '6,5%'],
      ['Dochter van de Korenaar Crime Passionnel', 'Wheat IPA dat de smaken combineert van een zachtromig tarwebier met fruitige toetsen als passievrucht en abrikoos', [['33 cl', '7,40']], '', '7,5%'],
      ['Outer Range Brewing Co. Mountain Drips', "Hazy DIPA met aroma's als oranjebloesem, meloen, witte druif en lychee. Zoetmoutige ondertoon; mild bittere finish", [['33 cl', '9,10']], '', '7,7%']
    ]},
    { t: 'Amber', items: [
      ['Boltens Alt', 'Koperkleurig Altbier met toetsen van karamel, biscuit en gebrande mout. Fris, gebalanceerd en zeer doordrinkbaar', [['33 cl', '5,40']], '', '4,8%'],
      ['Special De Ryck', 'Naar het originele recept uit 1920. Floraal, gistig en moutig. Zachtzoet met toetsen van brood en citrus. Droge afdronk', [['33 cl', '6,70']], '', '5,5%'],
      ["La Trappe Isid'or Trappist", 'Zachte en zoete amber ale met toetsen van karamel, kruiden, rozijnen en lichte bitters. De nasmaak is zacht en fruitig', [['33 cl', '6,40']], '', '7,5%'],
      ['Pauwel Kwak', "Zachtzoet en fruitig met aroma's en smaken als biscuit, banaan, karamel en zoethout. Klein bittertje in de afdronk", [['33 cl', '6,70']], '', '8,4%']
    ]},
    { t: 'Donker', items: [
      ['Köstritzer Schwarzbier', "Zwartkleurig, ondergistend bier met aroma's en smaken van koffie, gebrande mouten en wat drop. Droge afdronk", [['50 cl', '6,90']], '', '4,8%'],
      ['Aecht Schlenkerla Rauchbier - Märzen', 'Ondergistend bier met een uitgesproken rokerig aroma en een droge, frisse afdronk', [['50 cl', '6,90']], '', '5,2%'],
      ['Chimay Rood', 'Zachtromige dubbel met toetsen van nougat, biscuit, karamel, sinaasappel, perzik en abrikoos. Mild bittere afdronk', [['33 cl', '5,60']], '', '7,0%'],
      ['Westmalle Dubbel Trappist', 'Dit donkere bier bevat toetsen van karamel en banaan, heeft een zacht mondgevoel en een droge finish', [['33 cl', '5,80']], '', '7,0%'],
      ['Tynt Meadow Trappist', 'Zacht met tonen van chocolade, amandel en kersen. Licht droppig, licht peperig en een soepele, droge afdronk', [['33 cl', '9,30']], '', '7,4%'],
      ['Rochefort 6 Trappist', 'Donkerkleurig, zachtzoet bier met tonen van chocolade, sinaasappel, donker fruit en karamel', [['33 cl', '6,30']], '', '7,6%']
    ]},
    { t: 'Zwaar donker & gerstewijn', items: [
      ['Gouden Carolus Classic', "Zwaar en goed gebalanceerd; met aroma's van karamel, rozijn en licht gebrande bitters. Met een fruitige afdronk", [['33 cl', '6,60']], '', '8,5%'],
      ['Chimay Blauw Trappist', 'Verwarmend bier met hints van karamel, pruimen, donker fruit, alcohol, chocolade en mout. Licht bittere afdronk', [['33 cl', '7,30']], '', '9,0%'],
      ['De Hemel Nieuw Ligt', 'Zacht, fruitig en volmondig bier van Brouwerij De Hemel uit Nijmegen. Koperbruin, met tonen van kandijsuiker', [['30 cl', '8,60']], '', '10,0%'],
      ['St. Bernardus Abt 12', 'Zacht en volmondig. Met toetsen van karamel, rozijnen, banaan, rode appel, amandel en kruiden. Bitterzoete afdronk', [['33 cl', '7,20']], '', '10,0%'],
      ['Gouden Carolus Whisky Infused', 'Gerstewijn met Gouden Carolus Single Malt Whisky-infusie. Krachtig en vol; met toetsen als vanille, hout en chocolade', [['33 cl', '7,90']], '', '11,7%']
    ]},
    { t: 'Porter & stout', items: [
      ['Guinness Draught', 'Irish Dry Stout. Zachtromig met hints van espresso, karamel, chocolade en walnoot. Bitterzoete en droge afdronk', [['44 cl', '7,90']], '', '4,2%'],
      ['Viven Smoked Porter', 'Dit bier combineert rokerige tonen, chocolade, laurier, koffie en bessen. Het heeft een zachte, bittere afdronk', [['33 cl', '7,40']], '', '7,0%'],
      ['Scheldebrouwerij Oesterstout', 'Zachte, licht ziltige Belgische stout met toetsen van karamel, nougat, rozijnen en chocolade. Licht bittere afdronk', [['33 cl', '7,90']], '', '8,5%'],
      ['Lervig Midnight Snack', 'Imperial Pastry Stout met toetsen van chocolade, karamel en pindakaas. Dik en zoet', [['33 cl', '13,90']], '', '11%']
    ]},
    { t: 'Wilde en gemengde gisting', items: [
      ['Berliner Kindl Weisse', 'Droog, fris en vooral zuur bier met tonen van appel, yoghurt en limoen. Bleek van kleur; gebrouwen met gerste- en tarwemout en vermengd met melkzuurbacteriën', [['33 cl', '5,60']], '', '3,0%'],
      ['Lindemans Kriek', 'Op basis van 1 jaar oude lambiek. Zachtzoet met hele lichte bitters; fruitige tonen van kers en lichte zuren', [['25 cl', '5,10']], '', '3,5%'],
      ['VanderGhinste Roodbruin', "Dit Vlaams roodbruin van gemengde gisting is fris, zachtzuur en mildzoet. Met aroma's en smaken als kers, pruim, hout, karamel en azijn", [['25 cl', '4,20']], '', '5,5%'],
      ['Cuvée des Jacobins Rouge', 'Vlaams roodbruin met een complexe, zachtzure smaak. Met toetsen als vanille, cacao en zure krieken. Dit onversneden lambiekenbier heeft 18 maanden op eiken vaten gerijpt', [['33 cl', '8,50']], '', '5,5%'],
      ['Orval Trappist', 'Gistig en droogbitter. Koolzuurrijk en complex. Toetsen van citrus, kruiden, karamel en leer. Bevat wilde gist die het bier na verloop van tijd iets zuurder kan maken', [['33 cl', '7,00']], '', '6,2%'],
      ['Oude Geuze Boon', "Op eiken gerijpte geuze; met meerdere brouwsels van wilde gisting gemengd. Zuurfruitige tonen van Granny Smith-appels, aardse aroma's en een droge afdronk", [['25 cl', '6,10']], '', '7,0%'],
      ['Boon Geuze Mariage Parfait', 'Van spontane vergisting, verkregen door het vermengen van 3 jaar oude, houtgerijpte lambiek. Vineus, zacht en vol. Met toetsen van citrus, vanille, kruidnagel en jonge appels', [['37,5 cl', '13,30']], '', '8,0%'],
      ['Liefmans Goudenband', 'Diep roodbruin bier van gemengde gisting waarbij rijp bier is versneden met jong bier. Appel, kers, rabarber en hout. Lichtzuur met subtiele bitters, noten en rozijnen', [['33 cl', '8,00']], '', '8,0%']
    ]},
    { t: 'Weizen', items: [
      ['SchneiderWeisse Original (Tap 07)', 'Klassieke Dunkel Weisse. Romig en volfruitig, met toetsen van banaan, kruidnagel en nootmuskaat', [['50 cl', '6,20']], '', '5,4%'],
      ['SchneiderWeisse Festweisse (Tap 04)', 'Helder tarwebier. Fris, fruitig, zachtmoutig en lichtbitter. Met toetsen van banaan, citrus en kruidnagel', [['50 cl', '7,10']], '', '6,2%'],
      ['Weihenstephaner Vitus', "Robuuste Weizenbock met aroma's en smaken als abrikoos, banaan, nootmuskaat, kruidnagel en peper. Vol en zacht", [['50 cl', '7,50']], '', '7,7%'],
      ['SchneiderWeisse Hopfenweisse Weizendoppelbock (Tap 05)', 'Vol, zachtmoutig en bloemig. Een traditionele Weizen gecombineerd met een tropisch fruitige, lichtbittere toets', [['50 cl', '7,80']], '', '8,2%']
    ]},
    { t: 'Cider & overig', items: [
      ["Henney's England's Pride Medium Cider Glutenvrij", 'Gebalanceerde, zachtzoete, halfdroge appelcider met een milde appelsmaak en zachte tannines in de afdronk', [['50 cl', '11,60']], '', '6,0%'],
      ['Sandford Reserve Glutenvrij', "Vatgerijpte, milddroge appelcider met een zoet mondgevoel. Bevat aroma's als perzik, eiken en sherry. Vineus, mild zuur, leer, tannines en hout", [['50 cl', '12,70']], '', '7,4%'],
      ['Kasteel Rouge', 'Zacht fruitbier; blend van Kasteel Donker met zoete kersenlikeur. Toetsen van kers, rode bes en chocolade', [['33 cl', '7,30']], '', '8,0%']
    ]}
  ],

  wijn: [
    { t: 'Rode wijnen', items: [
      ["Domaine de l'Arjolle Côtes de Thongue Rouge", 'Merlot, Cabernet Sauvignon. Languedoc, Frankrijk. Jeugdige wijn met een intens aroma van rood fruit. Sappig, vol en zeer soepel. Lekker bij licht kruidige gerechten of een borrelplankje', [['glas', '5,50'], ['fles', '29,60']]],
      ['La Cour des Dames Syrah', "Syrah. Pays d'Oc, Frankrijk. Fruitige wijn met aroma's van bosbessen, bramen en eikenhout. Rond met een lange afdronk. Lekker voor bij de borrel of bij pittige hapjes en kruidige stoofpot", [['glas', '5,90'], ['fles', '31,80']]],
      ["Lupi Reali Montepulciano d'Abruzzo Organic", 'Montepulciano. Abruzzo, Italië. Deze droge, biologische wijn heeft tonen van donker fruit, kruiden en leer (brett) van wilde gisten. Lekker bij de borrel en licht kruidige gerechten', [['glas', '6,30'], ['fles', '33,90']]],
      ['Heredad Pangua Sodupe Rioja Crianza', 'Tempranillo. Rioja, Spanje. Volle, zachte en rijpe wijn met tonen van donker fruit, vanille en kruiden. Lekker om zo te drinken, maar ook als stevige begeleider van vlees', [['glas', '7,40'], ['fles', '39,80']]]
    ]},
    { t: 'Rosé', items: [
      ['Florès Côtes de Thau Blue Blanc Thau Rosé', 'Cinsault, Merlot. Languedoc, Frankrijk. Frisse en fruitige rosé met subtiele smaken van aardbei, aalbessen en framboos. Lekker als aperitief en bij Aziatische gerechten', [['glas', '6,00'], ['fles', '32,20']]]
    ]},
    { t: 'Droge witte wijnen', items: [
      ['Bodegas Don Diego Anarian Verdejo', 'Verdejo. Castilla y León, Spanje. In geur en smaak vind je bij deze frisse Verdejo minerale tonen, passievrucht, limoen en grapefruit. Lekker om zo te drinken of bij salades en visgerechten', [['glas', '5,50'], ['fles', '29,60']]],
      ['Dissegna Pinot Grigio', 'Pinot Grigio. Venetië, Italië. Een biologische, harmonieuze en zachte wijn met toetsen van rijp wit fruit, honing, een subtiel amandelbittertje en een mild zuurtje. Lekker bij lichte gerechten en om zo te drinken', [['glas', '6,00'], ['fles', '32,30']]],
      ['Martin Reinfeld Grüner Veltliner', 'Grüner Veltliner. Burgenland, Oostenrijk. Frisfruitige Veltliner met tonen van appel, peer en een hint van witte peper. Bevat ook de nodige mineraliteit. Lekker voor bij de borrel, maar ook bij kaasfondue, romige soepen en salades', [['glas', '6,40'], ['fles', '34,40']]],
      ["Domaine de l'Arjolle Côtes de Thongue Equilibre Chardonnay", "Chardonnay. Languedoc, Frankrijk. Een Chardonnay met aroma's van groene appels, boter en licht eiken. Vol en krachtig van smaak met een frisdroge afdronk. Lekker bij vis en schaaldieren of een kaasplankje", [['glas', '6,90'], ['fles', '37,10']]]
    ]},
    { t: 'Zoete witte wijn', items: [
      ['Peter Meyer Bereich Bernkastel', "Müller-Thurgau. Mosel, Duitsland. Frisse, mildzoete witte wijn met aroma's van rijp geel fruit. Lekker om zo te drinken, maar ook bij visgerechten", [['glas', '5,00'], ['fles', '34,40']]]
    ]},
    { t: 'Mousserende wijn', items: [
      ['Cava Flama Roja Brut', "Xarel-lo, Macabeo, Parellada. Catalonië, Spanje. Gebalanceerde, droge wijn met aroma's van appel, peer en citrus. Lekker om zo te drinken, maar past ook goed bij lichte gerechten", [['fles', '27,50']]]
    ]}
  ],

  overig: [
    { t: 'Warme dranken', items: [
      ['Koffie (lungo) of espresso', '', '3,40'],
      ['Dubbele espresso', '', '4,70'],
      ['Espresso macchiato', '', '3,50'],
      ['Cappuccino', '', '3,80'],
      ['Koffie verkeerd', '', '3,90'],
      ['Flat white', '', '4,90'],
      ['Latte macchiato', '', '4,50'],
      ['IJskoffie', 'Espresso, melk en ijsklontjes', '4,80'],
      ['Koffie speciaal', 'Irish e.d.', '8,50'],
      ['Losse thee van het Maldense Puritea', '', '3,20'],
      ['Verse muntthee of verse gemberthee met citroen', '', '3,90'],
      ['Chocolademelk', '', '3,90'],
      ['Glühwein', '', '3,90'],
      ['Decafé', '', '+0,50'],
      ['Havermelk', '', '+0,50'],
      ['Slagroom', '', '0,90']
    ]},
    { t: 'Frisdranken', items: [
      ['Coca-Cola, Coca-Cola Zero, Chaudfontaine Sparkling, Fanta Orange, Fanta Cassis, Fuze Tea Sparkling Black Tea, Fuze Tea Green Tea, Royal Bliss Bitter Lemon, Ginger Ale en Tonic, Sprite Zero Sugar Lemon-Lime', '', '3,40'],
      ['Bundaberg Ginger Beer', '330 ml', '6,90'],
      ['Bionade Vlierbes', '330 ml', '6,20'],
      ['Fritz Sprits bio Rabarber', '330 ml', '5,60'],
      ['Zoem appel-perensap, Schulp sinaasappelsap of Schulp tomatensap', '', '4,80'],
      ['Appel-perenschorle', '450 ml', '6,40'],
      ['Witte wijn-schorle', 'Alcoholhoudend, 390 ml', '6,90']
    ]},
    { t: 'Jenevers & korenwijn', items: [
      ['Ketel 1 jonge jenever', '', '3,30'],
      ['Zuidam oude jenever', '', '3,40'],
      ['Zuidam 3 jaar oude jenever', '', '4,70'],
      ['Zuidam 5 jaar oude jenever', '', '5,40'],
      ['Rutte Koornwyn', '', '5,40']
    ]},
    { t: 'Gins', items: [
      ['Dutch Courage Gin', '', '4,40'],
      ['Rutte Dry Gin', '', '6,80']
    ]},
    { t: 'Likeuren', items: [
      ['Zuidam Honing-whiskeylikeur', '', '6,80'],
      ['Disaronno', '', '3,90'],
      ['Isolabella Sambuca', '', '3,90'],
      ['Licor 43', '', '4,30'],
      ['Villa Massa Limoncello', '', '4,50'],
      ['Tia Maria', '', '4,70'],
      ['Baileys', '', '4,30'],
      ['Cointreau', '', '5,20'],
      ['Salmari Premium Salmiak Liquor', '', '3,70']
    ]},
    { t: 'Versterkte zuidwijnen', items: [
      ['Kopke Port Tawny', '', '3,90'],
      ['Martini bianco', '', '3,90'],
      ['Lustau San Emilio Sherry PX', '', '7,60']
    ]},
    { t: 'Digestieven', items: [
      ['Ménard Cognac VSOP', '', '6,70'],
      ['Busnel Calvados Trois Lys', '', '5,40']
    ]},
    { t: 'Overig gedistilleerd', items: [
      ['Absenthe', '', '5,70'],
      ['Jägermeister', '', '3,60'],
      ['Grasovka Bisongrass Vodka', '', '4,20'],
      ['Becherovka', '', '4,20'],
      ['Bacardi Carta Blanca', '', '3,80'],
      ['Zuidam Flying Dutchman Rum', '', '5,00'],
      ['Herradura Reposado Tequila', '', '8,60'],
      ['Nevel Stil', '', '6,70'],
      ["Roger's Mead", '', '4,90']
    ]},
    { t: 'Whisk(e)ys', items: [
      ['Jameson, Ierland', 'Milde en zachte blended whiskey met toetsen van kruiden, noten, vanille en sherry', '4,90'],
      ['Nikka From The Barrel, Japan', 'Deze malt whisky wordt gemaakt door gerijpte malt whisky te vermengen met graanwhisky en deze opnieuw te laten rijpen. Vol en stevig; je herkent mokka, chocolade en vanille', '9,70']
    ]},
    { t: 'Single malt whisk(e)ys', items: [
      ['Laphroaig, 10 jaar, Schotland', 'Veel rook, zeewier en een vleugje zoetheid kenmerken deze zeer krachtige Islay whisky. Rond van smaak met een beetje ziltigheid', '8,30'],
      ['Caol Ila, 12 jaar, Schotland', 'Krachtige en rokerige Islay whisky. Ziltig en sappig; met zoete fruittonen en een droge afdronk', '8,30'],
      ['Glenfarclas, 15 jaar, Schotland', 'Volle, zachtzoete Speyside whisky met tonen van sherry, butterscotch, gedroogd fruit en subtiele invloeden van mout', '13,90'],
      ["Aberlour A'Bunadh, Schotland", 'Volle, romige cask strength Speyside whisky (61,2%) met tonen van sherry, pralines, gember en bramen. Lange, krachtige afdronk met hints van exotische kruiden en eikenhout', '13,50'],
      ['Glenkinchie, 12 jaar, Schotland', "Deze Lowland whisky bevat aroma's als gras, karamel, vanille en citrus en smaken van rijp fruit en gember. Zachtzoet met een milddroge afdronk", '6,00'],
      ['Dalwhinnie, 15 jaar, Schotland', 'Zachte, romige Highland whisky met toetsen van vanille, honing en een beetje rook', '8,30'],
      ['Oban, 14 jaar, Schotland', 'Soepel, zoet en kruidig; met een rokerige toets. Deze Highland whisky heeft onder andere toetsen van vijgen en honing', '12,00'],
      ['Glenmorangie Quinta Ruban, 14 jaar, Schotland', "Zeer zachte Highland whisky gerijpt op portvaten. Met aroma's en smaken van pure muntchocolade, Turks fruit, bittere en zoete sinaasappels, walnoten en hints van peper en nootmuskaat", '12,20']
    ]}
  ]
};
