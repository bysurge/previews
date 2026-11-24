(function () {
  'use strict';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function eur(p) { return p == null ? '' : p.toFixed(2).replace('.', ','); }

  var DINER = [
    ['Voorgerechten koud', [
      ['Breekbrood', 6.5, 'brood met boter of olijfolie'],
      ['Nan-o-Panir-o-Sabzi', 12.5, 'verse kruiden met Iraans brood, feta en walnoten'],
      ['Salad Olivieh', 8, 'Perzische kipsalade'],
      ['Borani Bademjan', 9.5, 'yoghurt met gegrilde aubergine en knoflook'],
      ['Carpaccio', 12.5, 'rundercarpaccio']
    ]],
    ['Voorgerechten warm', [
      ['Soep', 7, 'dagverse soep'],
      ['Khask-m-Bademjan', 12.5, 'gebakken aubergine met knoflook, munt en dragon'],
      ['Mirza Ghasemi', 12.5, 'gegrilde aubergine met tomaat, ei en verse kruiden'],
      ['Kuku Sabzi', 12.5, 'groenteomeletjes met walnoten'],
      ['Megu', 15, 'in knoflook gebakken tijgergarnalen']
    ]],
    ['Grillgerechten', [
      ['Kubideh', 27, 'gegrild rundergehakt (2 spiesen)'],
      ['Djudje', 28, 'gegrilde kipfilet'],
      ['Djenje', 30, 'gegrilde lamshaas'],
      ['Bareh', 34, 'gegrilde lamsracks'],
      ['Barg', 30, 'gegrilde lamsfilet'],
      ['Soltani', 34, 'gegrilde lamsfilet en rundergehakt'],
      ['Shiraz', 34, 'gegrilde lamshaas en rundergehakt'],
      ['Esfehan', 32.5, 'gegrilde kipfilet en rundergehakt']
    ]],
    ['Stoofgerechten', [
      ['Khoreste Alo Esfenaj', 28, 'gestoofde sukade met pruimen en spinazie'],
      ['Fesenjan', 26, 'gestoofde kip in granaatappel- en walnotensaus'],
      ['Mahiche', 30, 'gestoofde lamsschenkel'],
      ['Ghormeh Sabzi', 28, 'gestoofde sukade met bruine bonen en gedroogde limoen'],
      ['Khoreste Rooz', 28, 'stoofgerecht van de dag']
    ]],
    ['Visgerechten', [
      ['Megu', 27.5, 'gebakken tijgergarnalen met chilidressing en zwarte sesam'],
      ['Mahi', 27.5, 'gebakken victoriabaarsfilet'],
      ['Dorade', 35, 'gebakken hele dorade'],
      ['Zeebaars', 35, 'gebakken hele zeebaars'],
      ['Mix van Megu & Mahi', 35, 'tijgergarnalen en victoriabaarsfilet']
    ]],
    ['Vegetarisch & veganistisch', [
      ['Vegetarisch menu', 27.5, 'mix van vegetarische gerechten'],
      ['Veganistisch menu', 27.5, 'mix van veganistische gerechten']
    ]],
    ['Bijgerechten', [
      ['Mast Musir', 5.5, 'yoghurt met daslook'],
      ['Mast Khiar', 5.5, 'yoghurt met komkommer'],
      ['Sir Torshi', 5.5, '7 jaar oude ingemaakte knoflook'],
      ['Torshi', 5.5, 'ingemaakte groente in zuur'],
      ['Salad-E-Fasl', 9.5, 'verse salade'],
      ['Salad Shirazi', 5.5, 'tomaat, komkommer, ui en limoendressing'],
      ['Berendj', 5, 'rijst met saffraan'],
      ['Zereshk Polo', 6.5, 'rijst met saffraan en zuurbessen'],
      ['Tadik', 6.5, 'gebakken rijst'],
      ['Lawash', 3, 'Iraans platbrood'],
      ['Sibzamini', 3.8, 'patat']
    ]],
    ['Kindermenu', [
      ['Kubideh', 14.5, 'gegrild gehakt met rijst'],
      ['Djudje', 16, 'gegrilde kip met rijst'],
      ['Kip nuggets', 12.5, 'met patat']
    ]]
  ];

  var LUNCH = [
    ['Brood', [
      ['Breekbrood', 6.5, 'brood met boter of olijfolie'],
      ['Nan-o-Panir-o-Sabzi', 12.5, 'verse kruiden met Iraans brood, feta en walnoten']
    ]],
    ['Aubergine', [
      ['Khask-m-Bademjan', 12.5, 'gebakken aubergine met knoflook, munt en dragon'],
      ['Mirza Ghasemi', 12.5, 'gegrilde aubergine met tomaat, ei en verse kruiden'],
      ['Borani Bademjan', 12.5, 'yoghurt met gegrilde aubergine en knoflook']
    ]],
    ['Omelet', [
      ['Kuku Sabzi', 12.5, 'groenteomelet met walnoten'],
      ['Omelet Goje', 12.5, 'omelet met tomaat en uien'],
      ['Omelet Khorma', 12.5, 'omelet met dadels']
    ]],
    ['Salades', [
      ['Carpaccio', 14.5, 'rundercarpaccio met Parmezaanse kaas en huisgemaakte pesto'],
      ['Megu', 14.5, 'tijgergarnalen met chilidressing en zwarte sesam'],
      ['Salad-E-Fasl', 9.5, 'verse salade'],
      ['Salad Shirazi', 5.5, 'tomaat, komkommer, ui en limoendressing'],
      ['Salad Olivieh', 8, 'Perzische kipsalade']
    ]],
    ['Grillgerechten', [
      ['Kubideh', 20, 'gegrild rundergehakt'],
      ['Djudje', 21, 'gegrilde kipfilet'],
      ['Djenje', 23, 'gegrilde lamshaas'],
      ['Bareh', 26.5, 'gegrilde lamsracks'],
      ['Barg', 23, 'gegrilde lamsfilet'],
      ['Soltani', 27, 'gegrilde lamsfilet en rundergehakt'],
      ['Shiraz', 27, 'gegrilde lamshaas en rundergehakt'],
      ['Esfehan', 24, 'gegrilde kipfilet en rundergehakt']
    ]],
    ['Stoofgerechten', [
      ['Khoreste Alo Esfenaj', 22.5, 'gestoofde sukade met pruimen en spinazie'],
      ['Fesenjan', 21, 'gestoofde kip in granaatappel- en walnotensaus'],
      ['Ghormeh Sabzi', 22.5, 'gestoofde sukade met bruine bonen en gedroogde limoen'],
      ['Mahiche', 25, 'gestoofde lamsschenkel'],
      ['Ghemeh', 22.5, 'gestoofde sukade met spliterwten en gedroogde limoen']
    ]],
    ['Visgerechten', [
      ['Mahi', 23, 'gebakken victoriabaarsfilet'],
      ['Dorade', 26, 'gebakken hele dorade']
    ]],
    ['Vegetarisch', [
      ['Vegetarisch of veganistisch menu', 22, '']
    ]],
    ['Menu’s om te delen', [
      ['Parande Mix, bij 2 personen', 27.5, 'hoofdgerecht: Fesenjan, Megu, Kubideh en Djudje'],
      ['Parande Mix, bij 3 personen', null, 'menu voor 2 personen, met Khoreste Alo Esfenaj erbij (gestoofde sukade met gedroogde pruimen en spinazie)'],
      ['Parande Mix, bij 4 of meer personen', null, 'menu voor 2 personen, met Djenje (gegrilde lamshaas) en Khoreste Alo Esfenaj erbij'],
      ['Tehran Mix, mixed grill (min. 2 personen)', 60, 'Kubideh, Djudje, Djenje en Bareh: gegrild rundergehakt, kipfilet, lamshaas en lamsracks. Prijs voor 2 personen']
    ]],
    ['Bijgerechten', [
      ['Mast Musir', 5.5, 'yoghurt met daslook'],
      ['Mast Khiar', 5.5, 'yoghurt met komkommer'],
      ['Sir Torshi', 5.5, '7 jaar oude ingemaakte knoflook']
    ]]
  ];

  var DESSERT = [
    ['Desserts', [
      ['Faloodeh Bastani', 9, 'bevroren rijstnoedels met saffraanijs, limoensap en rozenwater'],
      ['Havij Bastani', 12, 'vers geperst wortelsap met saffraanijs'],
      ['Crème brûlée', 9, 'met roomijs'],
      ['Appeltaart', 9, 'lauwwarme appeltaart met roomijs'],
      ['Advocaatje', 8.5, 'advocaat met slagroom en roomijs'],
      ['Warme kersen', 10, 'met slagroom en roomijs'],
      ['Cheesecake', 9, 'met bosvruchtenyoghurtijs'],
      ['Dame blanche', 8, 'roomijs met slagroom en chocoladesaus'],
      ['Hot & Frozen', 7, 'espresso met een bolletje roomijs'],
      ['Kinderijsje', 5, 'bolletje roomijs met slagroom']
    ]],
    ['Speciale koffie & thee', [
      ['Irish Coffee', 9, 'koffie met Ierse whisky'],
      ['Spanish Coffee', 9, 'koffie met Tia Maria'],
      ['Italian Coffee', 9, 'koffie met amaretto'],
      ['Jamaican Coffee', 9, 'koffie met witte rum'],
      ['Dom Coffee', 9, 'koffie met Dom Bénédictine'],
      ['French Coffee', 9, 'koffie met Grand Marnier'],
      ['Paris Coffee', 9, 'koffie met Cointreau'],
      ["Baileys Coffee", 9, 'koffie met Baileys'],
      ['Iraanse thee', 2.5, 'per glas'],
      ['Verse munt- of gemberthee', 3.5, 'per glas']
    ]]
  ];

  // name, grape, country, glass, bottle, tagline, note, region
  var WIJN = [
    ['Mousserend', [
      ['Vilarnau Cava Brut Reserva 20 cl', 'Macabeo, Parellada, Xarel-lo', 'Spanje', null, 8.5, 'Heerlijkheid in een mini flesje', 'Frisse aroma’s van citroen, limoen, grapefruit en groene appel, met een hint van anijs, toast en honing. Gemaakt volgens de metodo tradicional, met de tweede gisting op de fles.', 'Penedès'],
      ['Boschendal Brut', 'Chardonnay, Pinot Noir', 'Zuid-Afrika', null, 45, 'Feestwijn van Boschendal', 'Verfijnde aroma’s van citroen, amandel en grapefruit met een hint van biscuit en toast. Vol en romig, gemaakt volgens de Cap Classique-methode.', 'Franschhoek'],
      ['Nicolas Feuillatte Réserve Exclusive Brut', 'Pinot Meunier, Pinot Noir, Chardonnay', 'Frankrijk', null, 60, 'Frisse, feestelijke champagne', 'Aroma’s van peer, perzik en groene appel met een hint van brioche en toast. Strak, met een zachte mousse en een lange afdronk.', 'Champagne']
    ]],
    ['Wit', [
      ['Bodega Norton Finca La Colonia Sauvignon Blanc', 'Sauvignon Blanc', 'Argentinië', 5.5, 29.5, 'Fraaie, stuivende Sauvignon Blanc', 'Roze grapefruit, limoen, citroen en groene appel met een hint van vers gemaaid gras. Strak, met een fruitige afdronk.', 'Mendoza'],
      ['Bodega Norton Finca La Colonia Chardonnay', 'Chardonnay', 'Argentinië', 5.5, 29.5, 'Aangenaam verrassende Chardonnay', 'Groene appel, ananas, limoen en mango met een hint van vuursteen. Gegroeid op 1100 meter hoogte, sappig en fris.', 'Mendoza'],
      ['Masi Pinot Grigio', 'Pinot Grigio', 'Italië', 6, 32.5, 'Een van de bekendste Pinot Grigio’s', 'Groene appel, grapefruit, perzik en peer met een lichte hint van amandel. Strak, met een zachte fruitige afdronk.', 'Veneto'],
      ['Boschendal 1685 Sauvignon Blanc Grande Cuvée', 'Sauvignon Blanc', 'Zuid-Afrika', null, 37.5, 'Top Sauvignon Blanc uit Zuid-Afrika', 'Kruisbes, grapefruit, limoen, passievrucht en witte peer met een hint van gras en vuursteen.', 'Franschhoek'],
      ['Boschendal 1685 Chenin Blanc', 'Chenin Blanc', 'Zuid-Afrika', null, 39.5, 'Zuid-Afrikaanse trots', 'Mango, perzik, ananas en limoen met een hint van cashewnoten. Licht romig door rijping op de gistcellen.', 'Franschhoek'],
      ['Antinori Guado al Tasso Vermentino', 'Vermentino', 'Italië', null, 49, 'Elegante Vermentino', 'Citroen, abrikoos, kruisbes en gele perzik met een hint van amandel en vuursteen.', 'Toscane, Bolgheri'],
      ['Bodega Norton Chardonnay Reserva', 'Chardonnay', 'Argentinië', null, 45, 'Fantastische Chardonnay uit Argentinië', 'Citroen, grapefruit, limoen en gele appel met een hint van vuursteen. Houtgelagerd, met een fris randje.', 'Mendoza'],
      ['Fournier Sancerre Les Belles Vignes', 'Sauvignon Blanc', 'Frankrijk', null, 52, 'Prachtig zuivere Sancerre', 'Grapefruit, mandarijn, groene appel en peer met een hint van vuursteen en anijs. Strak en ziltig.', 'Loire'],
      ['Antinori Bramìto della Sala Chardonnay', 'Chardonnay', 'Italië', null, 49, 'Baby Cervaro', 'Gele appel, witte bloesem, citroen en ananas met een hint van kamille en vanille. In Bourgondische stijl gemaakt.', 'Umbrië'],
      ['Jean-Marc Brocard Chablis 1er Cru Vau de Vey', 'Chardonnay', 'Frankrijk', null, 60, 'De perfecte Chablis', 'Citroen, appel en limoen met een hint van witte bloesem, gras en vuursteen. Verfijnd en fris.', 'Chablis'],
      ['Antinori Cervaro della Sala', 'Chardonnay, Grechetto', 'Italië', null, 110, 'De meest bekroonde wijn van Italië', 'Citroen, limoen, grapefruit, ananas en mango met tonen van toast, kamille, vanille en boter. Rijk en vol.', 'Umbrië'],
      ['Faiveley Meursault 1er Cru ‘Charmes’', 'Chardonnay', 'Frankrijk', null, 115, 'Voortreffelijke Chardonnay uit de Meursault', 'Gele appel, rijpe peer en citroen met een hint van witte bloesem, vanille en eikenhout.', 'Bourgogne']
    ]],
    ['Rosé', [
      ['Gentry Rosé', 'Grenache', 'Frankrijk', 5.5, 29.5, 'Zomerse Grenache rosé', 'Aardbeien, rode kersen en frambozen met een lichte hint van sinaasappelschil. Sappig, met een fruitige afdronk.', "Pays d'Oc"],
      ['Boschendal Chardonnay Pinot Noir', 'Chardonnay, Pinot Noir', 'Zuid-Afrika', null, 38.5, 'Een rosé in ‘stille champagne’-stijl', 'Aardbeien, rijpe frambozen, aalbessen en rode kersen met een hint van toast en brioche.', 'Coastal Region']
    ]],
    ['Rood', [
      ['Finca La Colonia Merlot', 'Merlot', 'Argentinië', 5.5, 29.5, 'Sappige Merlot uit Argentinië', 'Rode kers, braam en bosbes met een hint van viooltjes en eucalyptus.', 'Mendoza'],
      ['Finca La Colonia Malbec', 'Malbec', 'Argentinië', 5.5, 29.5, 'Heerlijke Malbec voor elke dag', 'Rijpe kers, framboos en aalbes met een hint van zwarte peper. Zachte tannines.', 'Mendoza'],
      ['Boschendal Lanoy', 'Cabernet Sauvignon, Merlot', 'Zuid-Afrika', null, 35, 'Mooie Bordeaux-blend uit Zuid-Afrika', 'Moerbei, cassis, pruim en zwarte kers met een hint van tabak en cederhout.', 'West-Kaap'],
      ['Boschendal 1685 Shiraz', 'Shiraz', 'Zuid-Afrika', null, 42, 'Peperige, kruidige Shiraz', 'Bosbessen, bramen, zwarte pruimen en zwarte kersen met een hint van witte peper, tabak en chocolade.', 'Franschhoek'],
      ['Columbia Crest Grand Estates Cabernet Sauvignon', 'Cabernet Sauvignon, Merlot, Syrah', 'Verenigde Staten', null, 43, 'Krachtige Amerikaanse Cabernet', 'Bosbessen, braam en zwarte pruim met een hint van chocolade, cederhout, leer en vanille.', 'Washington State'],
      ['Antinori Pèppoli Chianti Classico', 'Merlot, Sangiovese, Syrah', 'Italië', null, 45, 'Chianti Classico', 'Sinaasappelschil, rode kers, rode pruim en bosbes met een hint van cederhout en cacao.', 'Toscane'],
      ['Beronia Edición de Autor Reserva', 'Tempranillo', 'Spanje', null, 45, 'Unieke Reserva uit Rioja', 'Bramen, zwarte kers, cassis en zwarte pruim met een hint van kaneel en vanille. 36 maanden gerijpt.', 'Rioja'],
      ['Bodega Norton Privada', 'Cabernet Sauvignon, Malbec, Merlot', 'Argentinië', null, 55, 'Privéwijn van de familie', 'Cassis, zwarte kers en bosbes met een hint van koffie, cederhout, vanille en tabak.', 'Mendoza'],
      ['Dominio Fournier Reserva', 'Tempranillo', 'Spanje', null, 55, 'Topkwaliteit uit Ribera del Duero', 'Braam, bosbes en zwarte kersen met een hint van zoethout, vanille en eikenhout.', 'Ribera del Duero'],
      ['Olivier Leflaive Bourgogne Rouge ‘Cuvée Margot’', 'Pinot Noir', 'Frankrijk', null, 68, 'Cuvée speciale uit de Bourgogne', 'Rode kersen, rode pruimen, aardbeien en frambozen met een lichte hint van toast en kruidnagel.', 'Bourgogne'],
      ['Prunotto Barolo', 'Nebbiolo', 'Italië', null, 75, 'Koning der wijnen', 'Rozen, rode kers, aalbes en framboos met een hint van tabak en anijs.', 'Piemonte'],
      ['Masi Costasera Amarone Classico', 'Corvina, Molinara, Rondinella', 'Italië', null, 80, 'Amarone om bij weg te dromen', 'Rode pruim, rode kers en vijgen met een hint van koffie, kaneel, kruidnagel en cacao.', 'Veneto'],
      ['Lapostolle Clos Apalta 2013', 'Cabernet Sauvignon, Carménère, Merlot', 'Chili', null, 150, 'Dé icoonwijn van Chili', 'Zwarte kers, braam, rode pruim en vijg met een hint van kruidnagel, zwarte peper, toffee en chocolade.', 'Colchagua Valley']
    ]]
  ];

  function items(list) {
    return '<ul class="items">' + list.map(function (it) {
      return '<li><div class="it-row"><span class="it-name">' + esc(it[0]) + '</span><span class="it-price">' + eur(it[1]) + '</span></div>' +
        (it[2] ? '<p class="it-desc">' + esc(it[2]) + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
  }
  function groups(id, data) {
    var el = document.getElementById(id); if (!el) return;
    el.innerHTML = data.map(function (g) { return '<div class="grp"><h3>' + esc(g[0]) + '</h3>' + items(g[1]) + '</div>'; }).join('');
  }
  groups('diner', DINER); groups('lunch', LUNCH); groups('dessert', DESSERT);

  var wl = document.getElementById('wijnlijst');
  if (wl) wl.innerHTML = WIJN.map(function (g) {
    return '<div class="wgrp"><h3>' + g[0] + '<span class="wcols"><span>glas</span><span>fles</span></span></h3>' + g[1].map(function (w) {
      return '<details class="w"><summary><span class="w-name">' + esc(w[0]) + '<small>' + esc(w[1]) + ' · ' + esc(w[2]) + '</small></span><span class="w-p">' + eur(w[3]) + '</span><span class="w-p">' + eur(w[4]) + '</span></summary>' +
        '<div class="w-note"><b>' + esc(w[5]) + '</b><p>' + esc(w[6]) + '</p><p class="w-reg">' + esc(w[2]) + ', ' + esc(w[7]) + '</p></div></details>';
    }).join('') + '</div>';
  }).join('');

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; sel(nt); nt.focus(); }
    });
  });

  // date-bound notice
  var now = new Date();
  [].forEach.call(document.querySelectorAll('[data-until]'), function (el) {
    var p = el.getAttribute('data-until').split('-');
    if (now >= new Date(+p[0], p[1] - 1, +p[2])) el.remove();
  });

  // form (preview only)
  var f = document.getElementById('form');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: het formulier verstuurt nog niets. Bel of app ons gerust.';
  });

  // menu toggle
  var mt = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  mt.addEventListener('click', function () {
    var open = mt.getAttribute('aria-expanded') !== 'true';
    mt.setAttribute('aria-expanded', open); document.body.classList.toggle('nav-open', open);
    mt.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  [].forEach.call(nav.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { mt.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); });
  });
  var top = document.querySelector('.top');
  function sc() { top.classList.toggle('scrolled', scrollY > 30); }
  addEventListener('scroll', sc, { passive: true }); sc();
})();
