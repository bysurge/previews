(function () {
  /* Header + mobiel menu */
  var top = document.querySelector('.top');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    top.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); top.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Huidig seizoen in de hero */
  var m = new Date().getMonth(); // 0 = jan
  var d = new Date().getDate();
  var idx = (m < 2 || (m === 2 && d < 21) || (m === 11 && d >= 21)) ? 3 : (m < 5 || (m === 5 && d < 21)) ? 0 : (m < 8 || (m === 8 && d < 22)) ? 1 : 2;
  var sl = document.querySelectorAll('.seasons li');
  if (sl[idx]) sl[idx].classList.add('nu');

  /* Kaarten */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function item(it) {
    var naam = it[0], veg = '';
    if (naam.indexOf('V ') === 0) { veg = '<span class="veg" title="vegetarisch">V</span>'; naam = naam.slice(2); }
    return '<div class="item"><span class="naam">' + veg + esc(naam) + (it[2] ? '<span class="sub">' + esc(it[2]) + '</span>' : '') + '</span><span class="prijs">' + esc(it[1]) + '</span></div>';
  }
  function groepen(list) {
    return '<div class="cols">' + list.map(function (g) {
      return '<div class="groep"><h3>' + g[0] + '</h3>' + g[1].map(item).join('') + '</div>';
    }).join('') + '</div>';
  }
  var bites = [
    ['Oester', 'p.st. 3,85'], ['Oester Seasons', 'p.st. 4,75'], ['Brood met olijfolie', '6,25'], ['Brood met dips', '7,25'],
    ['Serranoham', '50 gr. 8,50 · 100 gr. 15,00'], ['Pekingeend loempia’s mini met hoisin', '4 st. 8,50'],
    ['Sashimi tonijn & zalm met soja en wakame', '17,50'], ['Verse friet met mayonaise', 'kl. 4,95 · gr. 6,25']
  ];
  var DINER = [
    ['Bites', bites],
    ['Koud', [
      ['Salade krokante gamba met togarashi en unagi', '3 st. 13,50 · 5 st. 17,95'],
      ['Garnalencocktail met avocado en kwartelei', '19,50'],
      ['Brioche paling met crème fraîche en haring kaviaar', '18,50'],
      ['Vitello met tonijn, paddenstoel en teriyaki', '19,50'],
      ['Pâté en croûte met truffel en aceto balsamico', '19,95'],
      ['Tataki van rund met rettich en zwarte sesam', '18,50'],
      ['V Oesterzwam met kastanje, miso en rucola', '17,50']
    ]],
    ['Warm', [
      ['Soto ajam met noedels, ei en bosui', '10,50', 'Ook als ‘go big’ te bestellen: 17,50'],
      ['Grietfilet met zuurkool, mosterd en schorseneren', '27,50', 'Ook als ‘go big’ te bestellen: 37,50'],
      ['Gebakken zeetong met huisgemaakte friet en salade', 'dagprijs'],
      ['Snoekbaars met paddenstoelen, aardpeer en dashi beurre blanc', '26,50', 'Ook als ‘go big’ te bestellen: 35,50'],
      ['Gegrilde bavette met pastinaak, ui en pepersaus', '27,95', 'Ook als ‘go big’ te bestellen: 37,95'],
      ['Wilde eend met biet, bramen en rode port saus', '29,50'],
      ['Gegrilde ribeye met verse friet, warme groenten en Café de Paris boter', '38,50', '+/- 200 gr.'],
      ['V Pompoen risotto met Parmezaan, salie en crispy chili', '24,50'],
      ['Supplement gebakken eendenlever', '8,50']
    ]],
    ['Zoet', [
      ['Lotuskoekjes parfait met karamel en stoofpeer', '12,50'],
      ['Tarte tatin van appel met crème anglaise', '11,50'],
      ['Dame Blanche “a la Seasons”', '10,50'],
      ['Kaas, fromagerie Guillaume', '17,50'],
      ['Bonbons, Cerisette Oisterwijk', '1 st. 1,35 · 6 st. 7,50'],
      ['Scroppino', '9,50'],
      ['Espresso Martini', '9,50']
    ]]
  ];
  var LUNCH = [
    ['Bites', bites],
    ['Brioche', [
      ['Roerei met truffel, crème fraîche en brioche', '15,00'],
      ['Brioche verse krab tartaar met tandoori en rode kool', '18,50'],
      ['Brioche garnalen kroketten met cocktailsaus', '16,50'],
      ['Brioche zalm met huisgemaakte piccalilly en kerrie', '16,50']
    ]],
    ['Salades', [
      ['Salade tonijn met avocado en bonito flakes', '17,50'],
      ['Salade krokante gamba met togarashi en unagi', '3 st. 18,50 · 5 st. 23,00'],
      ['Salade krokante kip met Koreaanse chili en radijs', '17,50'],
      ['Salade pata negra met truffel en gepocheerd ei', '18,50']
    ]],
    ['Koud', [
      ['Brioche paling met crème fraîche en haring kaviaar', '18,50'],
      ['Vitello met verse tonijn, harissa en kappertjes', '19,50'],
      ['Tataki van rund met rettich en zwarte sesam', '18,50'],
      ['Carpaccio met rucola, Parmezaanse kaas en pijnboompitten', '16,50'],
      ['V Oesterzwam met kastanje, miso en rucola', '17,50']
    ]],
    ['Warm', [
      ['Soto ajam met noodles, ei en bosui', '10,50'],
      ['Gebakken zeetong met huisgemaakte friet en salade', 'dagprijs'],
      ['Gegrilde bavette met pastinaak, ui en pepersaus', '27,95'],
      ['Wilde eend met biet, bramen en rode port saus', '29,50'],
      ['V Pompoen risotto met Parmezaan, salie en crispy chili', '24,50']
    ]],
    ['Zoet', [
      ['Lotus parfait met karamel en stoofpeer', '12,50'],
      ['Dame Blanche “a la Seasons”', '10,50'],
      ['Kaas, fromagerie Guillaume', '17,50'],
      ['Appeltaart, Heeren van Oisterwijk', '5,95'],
      ['Nougatine, huisgemaakt', '4,95'],
      ['Bossche bol, de Groot', 'kl. 4,25 · gr. 5,75'],
      ['Bonbons, Cerisette Oisterwijk', '1 st. 1,60 · 6 st. 9,00']
    ]]
  ];
  var BORREL = [
    ['Borrelhapjes', [
      ['Brood met olijfolie', '6,25'], ['Brood met dips', '7,25'], ['Serranoham', '50 gr. 8,50 · 100 gr. 15,00'],
      ['Oester', 'p.st. 3,85'], ['Oester Seasons', 'p.st. 4,75'],
      ['Krokante gamba met togarashi en unagi', '5 st. 12,50'],
      ['Krokante sushi met togarashi en unagi', '15,50'],
      ['Sashimi tonijn met soja en avocado', '100 gr. 14,50'],
      ['Bourgondische bitterbal met truffelmayonaise', '6 st. 8,00 · 10 st. 12,50'],
      ['Gefrituurde kaasstengels met chilisaus', '6 st. 8,00'],
      ['Chicken bites met dip', '6 st. 8,00'],
      ['Gyoza’s met unagi en bosui', '6 st. 8,00'],
      ['Pekingeend springroll met hoisin', '6 st. 14,50'],
      ['Vegetarische mini loempia’s met chilisaus', '6 st. 6,00']
    ]]
  ];
  document.getElementById('k-diner').innerHTML = groepen(DINER);
  document.getElementById('k-lunch').innerHTML = groepen(LUNCH);
  document.getElementById('k-borrel').innerHTML = groepen(BORREL);

  /* Wijnkaart: [naam, prijs, herkomst, omschrijving] */
  var GLAS = [
    ['Bubbels', [
      ['Cava Brut blanc de blancs', '7,75 / 35,00', 'Cofama, Sabadell, Catalunya, Spanje', 'Zeer fijne mousse, zacht aroma van rijp fruit en subtiele citrustonen. Heerlijk als aperitief en bij schaal- en schelpdieren.'],
      ['Champagne Moutard Grande Cuvée Brut', '15,00 / 85,00', 'Champagne, Côte des Bar, Frankrijk', '100% Pinot Noir. De neus is fris en zeer fijn, vol met aroma’s van boter, amandelen en brioche. De mousse is fijn en elegant. Heerlijk als aperitief of bij oester en kreeft.']
    ]],
    ['Witte wijn', [
      ['Sauvignon Blanc', '5,95 / 28,50', 'Kiphu, Central Valley, Chili', 'Fruitige aroma’s van passievrucht en grapefruit en wat mineralige tonen. Droge, ‘crispy’ smaak met een pittige zuurgraad en in de afdronk citrus smaken.'],
      ['Touraine Sauvignon Blanc', '7,50 / 32,50', 'Danielle de l’Ansée, Loire, Frankrijk', 'Zeer aromatische wijn met een optimale fruitconcentratie. In de neus aroma’s van groene appeltjes en buxus. Heel fris, sappig en smakelijk. Fijn aperitief.'],
      ['Pinot Grigio', '8,50 / 39,50', 'Alturis, Friuli, Italië', 'Een verfijnd boeket, breed en complex, met hints van tropisch fruit, citrus, hooi, broodkorst en geroosterde amandelen typisch voor deze druif. De smaak draagt de aroma’s uit en is intens, vol en fruitig. Een opmerkelijke elegantie en plezierigheid. Lekker bij vis en groentegerechten.'],
      ['Chardonnay', '5,95 / 28,50', 'Kiphu, Central Valley, Chili', 'Elegante Chardonnay met tonen van meloen en perzik. Frisse, volle en fruitige smaak met een uitstekende zuurgraad balans.'],
      ['Astobiza Txakoli', '8,50 / 39,50', 'Bodega Astobiza, DO Chacoli, Spanje', 'Wijn uit Baskenland, strogeel van kleur met een groene schittering. Intense aroma’s van wit- en steenfruit, zoals peer, appel en perzik. Geur van citrus en grapefruit. Aangenaam fris in de mond, met levendige zuren, mooi in balans. Lange aromatische afdronk, licht bittertje en wat ziltigheid. Heerlijk bij zeevruchten, met name oesters.'],
      ['Semillon 1912 Vines', '9,50 / 45,00', 'Casa Silva, Colchagua Valley, Chili', 'Semillon van uitzonderlijk oude wijnstokken, diepgang en complexiteit. In de neus tonen van limoen, mango en dille, aangevuld met rijpe perzik en mandarijn. Elegante houtinvloed voegt subtiele finesse toe. Volle smaak, krachtig en gelaagd, balans tussen fruit, frisheid en structuur. Gedeeltelijk gerijpt op Frans eikenhout met een verfijnde afdronk. Heerlijk bij vis met vette saus.'],
      ['Verdejo “Ademan Adalia”', '7,75 / 35,00', 'Bodegas y Vinedos Maires, Toro, Spanje', '30 jaar oude wijnstokken, met de hand geplukt. Verdejo heeft 2 maanden op zijn gistcellen gerijpt en vervolgens nog 2 maanden op nieuw Frans eiken. Kruidige neus, wat venkeltonen. Zachte zuren komen door de subtiele houtlagering naar boven. Net als de lichte bitters, een eigenschap die verdejo-druiven bezitten. Visgerechten en licht pittige gerechten.'],
      ['Viognier', '6,50 / 29,50', 'Les Collines du Bourdic, Pays d’Oc, Frankrijk', 'Heerlijk aromatische wijn met de geur van bloemen en tropisch fruit, waarbij abrikoos en perzik de boventoon voeren. Het hout van de vaten zorgt voor extra aroma. Vriendelijke zachte witte wijn met licht tropisch fruit en lange afdronk. Verder is de smaak zacht en vol.'],
      ['Panamera Chardonnay', '8,75 / 42,50', 'Rutherford Winery, St. Helena, USA', 'Aangename aroma’s van room, tropisch fruit en een subtiele hint van vanille, mooie mineralen en botertje.']
    ]],
    ['Rode wijn', [
      ['Merlot', '5,95 / 28,50', 'Kiphu, Central Valley, Chili', 'Zijdezacht met veel rood fruit tonen en een hint van munt, fluwelen textuur.'],
      ['Cabernet Sauvignon', '5,95 / 28,50', 'Kiphu, Central Valley, Chili', 'Volle, diepe granaatrode kleur. In de neus aroma’s van rood fruit, zoete kruiden en een hint van munt. Goed gebalanceerde smaak met een fluwelen textuur. Heerlijk bij rood vlees.'],
      ['Pinot Noir Salcuta', '6,75 / 30,00', 'Salcuta wine company, Stefan Voda, Moldavië', 'De Pinot Noir druiven zijn van topkwaliteit, in de neus bosbessen, zwarte bessen en iets van frambozen. Een zweem van vanille verraadt de houtlagering van 6 maanden. De smaak is typisch Pinot Noir: intens, fruitig en wat aards. Perfect bij kalfsvlees en pasta.'],
      ['Primitivo', '6,75 / 30,00', 'Antico Fuoco, Puglia, Italië', 'Boeket van zwarte bessen en chocola. Zachte tannines, verfijnde smaken en een mooie balans. Fruitig en romig karakter, aangename afdronk. Heerlijk bij rijke en aromatische gerechten.'],
      ['Monte Cascas', '7,50 / 32,50', 'Casca Wines, Douro, Portugal', 'Touriga Nacional, Touriga Franca en Tinta Roriz rijpt 9 maanden op Frans eiken. In zijn geur veel zwart fruit, zoals bessen en bramen. Daarnaast ook florale tonen. De wijn heeft een stevige body, medium tannine en een lange afdronk. Rood vlees en wild.'],
      ['Montepulciano d’Abruzzo', '8,00 / 37,50', 'Salvatore Lilli, Abruzzo, Italië', 'Krachtig, diepgekleurd rood met een intens fruitig bouquet met aroma’s van rode bessen, kersen en viooltjes. Perfect bij rood vlees en wild, of bij oude kaas.'],
      ['Le Prestige Merlot, Cabernet Sauvignon', '8,00 / 37,50', 'Bourdic, Pays d’Oc, Frankrijk', 'Volle en krachtige geur, vele hints van eiken, mokka en zwart fruit. De smaak is vol en stevig met in de mond een boeket van zwart fruit, chocolade, vanille en kruiden. Top afdronk!'],
      ['Malbec', '7,50 / 32,50', 'Finca San Carlos, Mendoza, Argentinië', 'De wijn is rijk en goed gestructureerd, fruitige kern die perfect in balans is met verfijnde tannines en een lange, aanhoudende afdronk. Donker fruit, koffie, tabak, chocolade en een discrete houttoon. Uitstekend bij gegrild rood vlees, oude kazen en hartige gerechten uit de Italiaanse keuken.'],
      ['Rioja Reserva ‘Gran Domino’ 2018', '9,50 / 45,00', 'Bodegas Lan, Rioja Alta, Spanje', '12 maanden in eiken vaten gerijpt en vervolgens nog eens 18 maanden in de fles. De wijn heeft een kersenrode kleur met een bruin-oranje tint. In de neus ruik je rijp rood fruit met zachte geuren van vanille. De smaak is fluwelig met veel fruit zoals cassis, bramen en vanille. De afdronk is lang en mooi in balans. Rood vlees.']
    ]],
    ['Rosé', [
      ['Gemme', '5,95 / 28,50', 'Les Costieres de Pomerols, Cotes de Thau, Frankrijk', 'Zachte vriendelijke wijn met aangename tonen van rood fruit.'],
      ['Les Délices Du Vin Teres', '7,50 / 32,50', 'Château Rouët, Vin de Pays de Méditerranée, Frankrijk', 'Verfrissend gevoel met veel rood fruit en lichte citrustonen, limoen en munt.']
    ]]
  ];
  var FLES = [
    ['Bubbels', [
      ['Cava Brut blanc de blancs', '35,00', 'Cofama, Sabadell, Catalunya, Spanje'],
      ['Moutard Grande Cuvée', '85,00', 'Champagne, Côte des Bar, Frankrijk'],
      ['Champagne “R” de Ruinart', '120,00', 'Champagne, Reims, Frankrijk']
    ]],
    ['Witte wijn', [
      ['Pouilly Fumé Chaumiennes', '47,50', 'Domaine Figeat, Loire, Frankrijk'],
      ['Bernardus Sauvignon “Griva Vineyard”', '60,00', 'Ben Pon’s Winery, Monterey County, USA'],
      ['Grüner Veltliner Stokstal', '35,00', 'Ecker, Wagram Donauland, Oostenrijk'],
      ['Furmint', '35,00', 'Chateau Dereszla, Tokaj-Hegyalja, Hongarije'],
      ['Pinot Grigio', '39,50', 'Alturis, Friuli, Italië'],
      ['Muskat Ottonel', '45,00', 'Jakob Buchinger, Wachau, Oostenrijk'],
      ['Pinot Blanc', '35,00', 'Rolly Gassmann, Elzas, Frankrijk'],
      ['Riesling Classic', '45,00', 'Prinz von Hessen, Rheingau, Duitsland'],
      ['Riesling “Les Princes Abbés”', '46,00', 'Domaine Schlumberger, Elzas, Frankrijk'],
      ['Di Sipio Colline Teatine Bianco “Falanghina-Trebbiano-Pecorino”', '39,50', 'Di Sipio, Abruzzen, Italië'],
      ['Roero Arneis DOCG', '37,50', 'Cascina Ghercina, Piemonte, Italië'],
      ['Malagouzia Geometria', '42,50', 'Lafazanis winery, Nemea Peloponnese, Griekenland'],
      ['Falkenstein Weissburgunder Reserve', '45,00', 'Weingut Dürnberg, Weinviertel, Oostenrijk'],
      ['Viognier', '47,50', 'McManis Family Vineyards, Lodi, USA'],
      ['Rioja “Barrel Fermented”', '42,50', 'Hacienda el Ternero, Rioja, Spanje'],
      ['Petellia Greco Bianco, Mantonico', '45,00', 'Roberto Ceraudo, Calabrië, Italië'],
      ['Chenin Blanc', '47,50', 'Carinus Family Vineyards, Swartland, Zuid-Afrika'],
      ['Anjou La Grande Croix “Chenin Blanc”', '45,00', 'Domaine de la Bougrie, Loire, AOP Anjou, Frankrijk'],
      ['Muscat 2019', '37,50', 'Rolly Gassmann, Elzas, Frankrijk'],
      ['Gewürztraminer 2016', '65,00', 'Rolly Gassmann, Elzas, Frankrijk'],
      ['Le Prestige Chardonnay', '39,50', 'Bourdic, Pays d’Oc, Frankrijk'],
      ['Mâcon-Uchizy', '45,00', 'Talmard, Bourgogne, Frankrijk'],
      ['Saint-Véran', '52,50', 'André Goichot, Bourgogne, Frankrijk'],
      ['Pouilly-Fuissé “Les Crays” Fuissé 1er Cru 2021', '80,00', 'Domaine des Gerbeaux, Bourgogne, Frankrijk'],
      ['Saint-Aubin “Champ Tirant” 2020', '95,00', 'Gerard Thomas, Bourgogne, Frankrijk'],
      ['Bernardus Chardonnay', '75,00', 'Ben Pon’s Winery, Monterey County, USA'],
      ['Chardonnay', '52,50', 'Thelema, Stellenbosch, Zuid-Afrika']
    ]],
    ['Rosé', [
      ['Les Délices Du Vin Teres', '32,50', 'Château Rouët, Vin de Pays de Méditerranée, Frankrijk'],
      ['Les Délices Du Vin Teres, magnum', '55,00', 'Château Rouët, Vin de Pays de Méditerranée, Frankrijk'],
      ['Bernardus rosé Californië & Provence, magnum', '99,00', 'Bernardus en La Coste, Provence, Frankrijk']
    ]],
    ['Rode wijn', [
      ['Pinot Noir', '30,00', 'Peter & Peter, Pfalz QbA Trocken, Duitsland'],
      ['Coteaux Bourguignons', '37,50', 'André Goichot, Bourgogne, Frankrijk'],
      ['Savigny-Lès-Beaune ‘Serrignyssime’', '90,00', 'Domaine de Serrigny, Bourgogne, Frankrijk'],
      ['Mercurey Rouge', '80,00', 'Regnard, Bourgogne, Frankrijk'],
      ['Maranges 1er Cru “La Fussière”', '85,00', 'Roger Belland, Bourgogne, Frankrijk'],
      ['Volnay 2015', '110,00', 'Léonce Bocquet, Bourgogne, Frankrijk'],
      ['Chassagne-Montrachet, Château de Chassagne-Montrachet', '115,00', 'Bader-Mimeur, Bourgogne, Frankrijk'],
      ['Zweigelt Brillant', '35,00', 'Ecker, Wagram Donauland, Oostenrijk'],
      ['Bernardus Pinot Noir “Santa Lucia Highlands”', '82,50', 'Ben Pon’s Winery, Monterey County, USA'],
      ['Magnum Bernardus Pinot Noir', '155,00', ''],
      ['Pinot Noir', '47,50', 'McManis Family Vineyards, Lodi, USA'],
      ['Pinot Noir Jnoir', '60,00', 'Fattoria Mancini, Marche, Italië'],
      ['Adro da Sé Reserva “Touriga Nacional-Touriga Roriz”', '39,50', 'Dão, Portugal'],
      ['Montepulciano d’Abruzzo', '37,50', 'Salvatore Lilli, Abruzzo, Italië'],
      ['Valpolicella Ripasso', '49,00', 'Villa Loren, Veneto, Italië'],
      ['Barbaresco DOCG 2020', '60,00', 'Cascina Ghercina, Piemonte, Italië'],
      ['Amarone Classico della Valpolicella 2016', '150,00', 'Tommasi, Veneto, Italië'],
      ['Barolo DOCG 2019', '75,00', 'Cascina Ghercina, Piemonte, Italië'],
      ['Barolo DOCG Ciabot Tanasio 2016', '120,00', 'Sobrero Francesco, Piemonte, Italië'],
      ['Ribera del Duero “Ebano 6”', '39,50', 'Bodegas Ebano, Spanje'],
      ['Rioja Crianza ‘Lealtanza’', '45,00', 'Bodega Exopto, Rioja, Spanje'],
      ['Malbec', '37,50', 'Zolo, Mendoza, Argentinië'],
      ['Le Prestige Merlot, Cabernet Sauvignon', '37,50', 'Bourdic, Pays d’Oc, Frankrijk'],
      ['Syrah', '47,50', 'Carinus Family Vineyards, Stellenbosch, Zuid-Afrika'],
      ['Shiraz', '37,50', 'Glenwood, Franschhoek, Zuid-Afrika'],
      ['Côtes du Rhône Villages Valréas rouge', '39,50', 'Domaine La Decelle, Rhône, Frankrijk'],
      ['Zinfandel', '45,00', 'McManis Family Vineyards, Lodi, USA'],
      ['Cabernet Sauvignon', '57,50', 'Lapis Luna, Lodi California, USA'],
      ['Rosso e Nero “Zweigelt, Merlot, Cabernet Sauvignon”', '79,50', 'Pöckl, Neusiedlersee, Burgenland'],
      ['Château D’Anielle 2019', '69,50', 'Saint-Émilion Grand Cru, Bordeaux, Frankrijk'],
      ['Château Maucaillou 2019', '115,00', 'Moulis-en-Médoc, Bordeaux, Frankrijk'],
      ['Château Belles Graves 2014', '75,00', 'Lalande de Pomerol, Bordeaux'],
      ['Château Cazauviel 2017', '105,00', 'Margaux, Bordeaux, Frankrijk'],
      ['Château Tour Blanquet 2017', '72,50', 'Saint-Estèphe, Bordeaux, Frankrijk'],
      ['Château Pedesclaux 2017', '140,00', 'Pauillac 5e Grand Cru Classé, Bordeaux, Frankrijk']
    ]]
  ];
  var DESSERT = [
    ['Dessertwijn', [
      ['Elysium black muscat', '8,50 / 60,00', 'Andrew Quady, Madera, Californië'],
      ['Banyuls Rimage', '7,00 / 50,00', 'La Galline, Banyuls, Frankrijk'],
      ['Muscat de Rivesaltes', '8,00 / 60,00', 'Dom Brial, Languedoc-Roussillon, Frankrijk'],
      ['Monbazillac', '6,00 / 42,50', 'Domaine de Moulin-Pouzy, Bergerac, Frankrijk'],
      ['Moscato ‘Il Vino Del Amore’', '6,00 / 42,50', 'Bottega, Veneto, Italië'],
      ['Rooi Muskadel', '9,95 / 60,00', 'Orange River Cellars, Orange River Valley, Zuid-Afrika'],
      ['Pedro Ximénez', '8,50 / 60,00', 'Bodega Gutierrez Colosia, Jerez, Spanje'],
      ['Moscatel de Setúbal “Dona Helena”', '6,00 / 42,50', 'Saven, Setúbal, Portugal'],
      ['10 Year old Tawny', '9,95', 'Dow’s, Portugal'],
      ['LBV 2012', '8,50', 'Dow’s, Portugal']
    ]],
    ['Alcoholvrije wijn en sparkling tea', [
      ['Veuve du Vernay, Vin Brut zero', '7,95 / 37,50', 'Frankrijk', '100% Muscat, bloemig en zacht, aromatisch en goed in balans.'],
      ['Pinot Grigio Null Nummer Dr. Zenzen 0.0', '6,25 / 30,00', 'Hongarije', 'Aroma’s van geel fruit en meloen. In de smaak verfrissend en fruitig.'],
      ['Grüner Veltliner Benita Sophie 0.0', '8,00 / 37,50', 'Oostenrijk', 'Hints van appel, kruidige en levendige zuren, soepele stijl die verrassend dicht bij wijn blijft.'],
      ['Natureo 0.0 Torres, Grenache Syrah', '6,25 / 30,00', 'Spanje', 'Aroma’s van granaatappel, rode bessen en een vleugje vanille; de smaak is vol en zuiver.'],
      ['Sparkling Tea ‘Grüner Tee & Jasmin’', '7,75 / 35,00', 'C. Kloss, Moezel, Duitsland', 'Droog en verfijnd met delicate jasmijnaroma’s en frisse zuren. Zachte mousse en elegante stijl.'],
      ['Sparkling Tea ‘Frucht-Tee-Hibiskus’', '7,75 / 35,00', 'C. Kloss, Moezel, Duitsland', 'Droog en verfijnd, met subtiele aroma’s en een delicate zuurgraad. De combinatie van fruitigheid en frisheid zorgt voor een elegante en volwassen drinkervaring.']
    ]]
  ];
  function wijn(it) {
    return '<div class="item"><span class="naam">' + esc(it[0]) + (it[2] ? '<small>' + esc(it[2]) + '</small>' : '') + (it[3] ? '<span class="desc">' + esc(it[3]) + '</span>' : '') + '</span><span class="prijs">' + esc(it[1]) + '</span></div>';
  }
  function wijngroepen(list) {
    return '<div class="cols">' + list.map(function (g) { return '<div class="groep"><h3>' + g[0] + '</h3>' + g[1].map(wijn).join('') + '</div>'; }).join('') + '</div>';
  }
  document.getElementById('w-glas').innerHTML = wijngroepen(GLAS);
  document.getElementById('w-fles').innerHTML = wijngroepen(FLES);
  document.getElementById('w-dessert').innerHTML = wijngroepen(DESSERT);

  /* Tabs */
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role="tab"]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (o) {
          var on = o === t;
          o.setAttribute('aria-selected', on);
          document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
        });
      });
    });
  });

  /* Openingstijden: vandaag */
  var day = new Date().getDay();
  var row = document.querySelector('.uren tr[data-d="' + day + '"]');
  if (row) row.classList.add('vandaag');
})();
(function () {
  /* Private dining: open het menu van het huidige seizoen */
  var namen = ['pd-lente', 'pd-zomer', 'pd-herfst', 'pd-winter'];
  var nu = document.querySelector('.seasons li.nu');
  if (!nu) return;
  var i = Array.prototype.indexOf.call(nu.parentNode.children, nu);
  var b = document.querySelector('[aria-controls="' + namen[i] + '"]');
  if (b) b.click();
})();
