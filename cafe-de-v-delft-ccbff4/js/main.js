(function () {
  'use strict';
  var V = 'veg';
  function eur(p) { return p == null ? '' : p.toFixed(2).replace('.', ','); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // ---------- Menukaart ----------
  var MENU = [
    ['Voorgerechten', [
      ['Rundermuis Carpaccio', 12.95, 'citroenmayonaise, gepikkelde rode ui, cashew, rucola'],
      ['Gerookte zalm', 11.75, 'in whisky-sandelhout gerookt, basilicumolie, crème fraîche'],
      ["Pikante Gamba's", 12.5, 'Spaanse peper, koriander, naan'],
      ['Octopus frites', 13.5, 'citroen aioli'],
      ['Gemarineerde artisjokharten', 9.75, 'luchtige feta, amandelen, honing, munt', V],
      ['Camembert uit de oven', 12.5, 'honing, tijm, rozemarijn', V],
      ['Soep van het moment', 8, '', V]
    ]],
    ['Hoofdgerechten', [
      ['Saté de V', 18.5, 'vegan tempeh (+0,25) of kipfilet, frites, atjar, kroepoek, pindasaus'],
      ['Kogelbiefstuk', 20.5, 'kruidenboter, frites'],
      ['Spare-Ribs', 24.5, '1 hele rib, frites, coleslaw, aioli'],
      ['Hamburger', 19.75, 'pretzelbun, piccalillymayonaise, little gem, tomaat, bacon, cheddar, uienringen'],
      ['Sucade', 23.25, 'romige knolselderijcrème, geroosterde bimi, rode portjus'],
      ['Zalmfilet', 22.25, 'limoenrisotto, cherrytomaat, vadouvan beurre blanc, tuinkruidenolie'],
      ['Paddenstoel- en truffelravioli', 18.5, 'salieroomsaus, kastanjechampignons, Parmezaanse kaas, bieslookolie, hazelnoot', V],
      ['En papillote', 21.5, 'in de oven gegaard visje in een pakketje met tomaat, kappertjes, knoflook en olijven, jonge krieltjes, venkel']
    ]],
    ['Nagerechten', [
      ['Koffie Compleet', 9.75, 'koffie of thee, likeurtje, 2 bonbonnetjes'],
      ['Appel tarte tatin', 8.25, 'uit de oven'],
      ['Sorbet ijs', 8, 'mango, citroen, aardbei'],
      ['Chocolade tartelette', 7.5, 'passievrucht'],
      ['Stolp kaas', 13.5, 'drie kazen, chutney, vijgenbrood']
    ]]
  ];

  var BORREL = [
    ['Om te delen', [
      ['Brood & dips', 8, 'pesto, aioli, tapenade', V],
      ['Artisjokharten', 9.5, 'gegrild en gemarineerd', V],
      ['Olijven', 8, 'knoflook, chili, rode peper', V],
      ["Nacho's", 13.5, 'tortillachips, salsa Mexicana, jalapeño, ingelegde rode ui, koriander, chipotle-limoen crème fraîche', V],
      ['Vegan Gyoza', 8.75, 'sesam hoisin, sushi-mayonaise, Korean crumble, Spaanse peper, bosui', V],
      ['Zoete aardappel frites', 6.5, 'truffelmayonaise, Parmezaanse kaas', V],
      ['Koude borrelplank', 11.75, 'manchego, coppa di Parma, serranoham, gemarineerde olijven'],
      ['Grote borrelplank', 23.5, "bitterballen, zoete aardappelfriet, kaasstengels, artisjokharten, nacho's, brood met dips"]
    ]],
    ['Haute frituur', [
      ['Bitterballen', 10.5, '8 stuks, mosterd. Vegan: 11,25'],
      ['Bittergarnituur vegan', 10.5, '6 stuks: oesterzwam nugget, wakame mini kroketje, oesterzwam bitterbal, veganette, lasagnette, mini loempia', V],
      ['Kaasstengels', 8.5, '6 stuks, chilisaus', V],
      ['Bittergarnituur', 13.5, "12 stuks: kalfskroket, mini kaassoufflé, mini bami Oriëntal, mini Crispy Chick'n, mini frikandel"]
    ]]
  ];

  var DRANK = [
    ['Op tap', [
      ['Brand fluitje / vaasje / pint', null, '3,70 / 3,80 / 7,00'],
      ['Brand pitcher 1,7 L', 19.5], ['Brand Weizen', 5], ['Texels Skuumkoppe', 6], ['Oedipus Mannenliefde', 5.5],
      ['Brand IPA', 5.5], ['Lagunitas IPA', 5.5], ['Proeverij van de tap', 6, '3 proefglaasjes van de tap']
    ]],
    ['Op fles', [
      ['Corona', 4.5], ['Affligem Blond', 4.75], ['Affligem Dubbel', 5], ['Affligem Tripel', 5.5], ['Affligem Wit', 4.75],
      ['Brand Weizen', 4.5], ['Brand IPA', 5.25], ['Westmalle Tripel', 6.5], ['Texels Skuumkoppe', 5.75], ['Texels Overzee IPA', 6],
      ['Texels Tuunwal Tripel', 6], ['Mort Subite Kriek', 5.5], ['Amstel Radler', 4.5], ['Duvel', 6.5], ['Lagunitas IPA', 6]
    ]],
    ['Craft', [
      ['Oedipus Mannenliefde', 6, 'saison, limoengras, Szechuan-peper, Sorachi Ace-hop, 6%'],
      ['Oedipus Thai Thai', 6, 'spicy, gekruide tripel, 8%'],
      ['Oedipus Polyamorie', 6, 'fruitbier, sour, Berliner Weisse mix, 5%'],
      ["Muifel D'n Ossenbock", 7, 'karamel, toffee, geroosterde noten, 7%'],
      ['La Chouffe Bok', 7, 'chocolade, karamel, vers gebrande koffie, 6,66%'],
      ['IJbok', 6.5, 'geroosterde granen, koffie, donker fruit, 6,5%'],
      ['Moersleutel Crank the Juice', 6, 'NEIPA, tropisch fruit, citrus, 5,5%']
    ]],
    ['Glutenvrij', [
      ['Apple Bandit Appel', 5, 'classic, licht droog'],
      ['Apple Bandit Raspberry', 5, 'fris zoete smaak van framboos'],
      ['Estrella Daura', 5.5, 'fris en zacht, hop, licht gekarameliseerde mout'],
      ['Jopen Hop Zij Met Ons', 5.5, 'IPA, tropisch fruit, citrus, 6,0%']
    ]],
    ['Alcoholvrij bier', [
      ['Brand IPA 0.0', 4.75], ['Brand Weizen 0.0', 4.75], ['Affligem Blond 0.0', 5.25], ['Texels Skuumkoppe 0.0', 6.25], ['Heineken 0.0', 4.25],
      ['Motor Oil Non-Alcoholic Stout 0.5%', 8, 'rijke smaken van vanille, tonka en koffie, rozijnen en kaneel']
    ]],
    ['Wijn: wit', [
      ['Pinot Grigio · Libbre · Italië', 5, 'Licht en fris, met tonen van peer, groene appel en citrus.'],
      ['Sauvignon Blanc · Les Roucas, Foncalieu · Frankrijk', 5.75, 'Fris en fruitig, met citrus, kruisbes en groene kruiden.'],
      ['Chardonnay · Aurora, Le Cellier du Pic · Frankrijk', 5.5, 'Vol en romig, met rijpe perzik, tropisch fruit en een vleugje vanille.'],
      ['Grüner Veltliner · Sighardt Donabaum, Der Fuchs · Oostenrijk', 5.75, 'Fris en kruidig, met groene appel, citrus en een vleugje witte peper.'],
      ['Verdejo · Analivia, Pagos del Rey · Spanje', 5.75, 'Fris en fruitig, met perzik, tropisch fruit en subtiele kruiden.'],
      ['Mare Chiaro Cirò Bianco · Ippolito', 38.5, 'Kelderrestant. Fruitig wit met peer, perzik en witte bloemen. Per fles.'],
      ['Blanc de Noir Trocken · Weingut Weiler', 39.5, 'Kelderrestant. Droog wit met rode appel, rijpe peer en een minerale toets. Per fles.']
    ]],
    ['Wijn: rood', [
      ['Merlot · Libbre · Italië', 5, 'Zacht en soepel, met rijpe kersen, zwarte bessen en een vleugje kruiden.'],
      ['Cabernet Sauvignon · Finca El Origen · Argentinië', 6.25, 'Vol en krachtig, met zwarte bessen, bramen en kruidigheid.'],
      ['Pinot Noir · Jaffelin · Frankrijk', 5.5, 'Licht en elegant, met rode kersen, frambozen en subtiele aardse nuances.'],
      ['Primitivo · Libbre · Italië', 5.75, 'Vol en zwoel, met rijpe pruimen, donker fruit en zachte specerijen.'],
      ['Valpolicella DOC · Villa Borghetti (Pasqua)', 45, 'Kelderrestant. Fris rood met framboos en rode bes. Per fles.'],
      ['Compartir · Leo & Niné', 31.5, 'Kelderrestant. Sappig rood met braam, rijpe kers en peper. Per fles.']
    ]],
    ['Rosé & bubbels', [
      ['Rosé Pinot Grigio Rosato', 5, 'Licht en fris, met aardbei, framboos en citrus.'],
      ['Glas Spumante Prosecco', 6.25],
      ['La Brava Rosé Cava · Spanje', 32.5, 'Fris en droog, met fijne bubbels en tonen van aardbei, framboos en rode kers.'],
      ['Bio Spumante Prosecco · Italië', 45, 'Biologisch en fris, met fijne bubbels en tonen van groene appel, peer en citrus.']
    ]],
    ['Fris', [
      ['Pepsi / Pepsi Max', 3.5], ['Sourcy rood / blauw', 3.5], ['Gingerbeer', 5.5], ['Grapefruit Soda', 5.5], ['Sicilian Lemonade', 5.5],
      ['Rose Lemonade', 5.5], ['Ginger Ale', 3.5], ['Bitter Lemon', 3.5], ['Sisi Zero', 3.5], ['7-Up Zero', 3.5], ['Tonic', 3.5],
      ['Rivella', 3.5], ['Ice Tea sparkling / green', 3.5], ['Cassis', 3.5], ['Appelsap', 3.5]
    ]],
    ["Premium soda's (Galvanina)", [
      ['Ginger beer', 6, 'krachtige gembersmaak en een fris aroma van citroengras'],
      ['Aranciata', 6, 'bruisende sinaasappeldrank van Siciliaanse sinaasappels'],
      ['Aranciata Rossa', 6, 'bruisende bloedsinaasappeldrank met citroen en citrus'],
      ['Limonata', 6, 'bruisende citroenlimonade van Siciliaanse citroenen, met citruspulp. Intens fris en krachtig van smaak'],
      ['Pompelmo Rossa', 6, 'bruisende frisdrank van rode grapefruit. Fris, fruitig en licht zoet']
    ]],
    ['Cocktails', [
      ['Dark & Stormy', 9.5, 'Bacardi Negra, limoen, gingerbeer'], ['Mojito', 9.5, 'rum, limoen, munt, bruis'],
      ['Paloma', 9.5, 'tequila, grapefruit soda, limoen'], ['Pink Paloma', 9.5, 'tequila, Cointreau, Pompelmo Rossa'],
      ['Whiskey Ginger', 9.5, 'Jameson, lime, ginger beer'], ['Grand Orange', 9.5, 'Grand Marnier, Bacardi Blanca, Aranciata'],
      ['Amaretto Orange', 9.5, 'amaretto, Cointreau, Aranciata'], ['Rum grapefruit smash', 9.5, 'rum, grapefruit, limoensap, prosecco'],
      ['Pink Cadillac Margarita', 9.5, 'tequila, limoensap, siroop, Cointreau, cranberry']
    ]],
    ['Spritz', [
      ['De V Spritz', 8.75, 'Lillet, tonic, sinaasappel'], ['Aperol Spritz', 8.75, 'Aperol, prosecco, bruis'], ['Limoncello Spritz', 8.75, 'limoncello, prosecco, bruis']
    ]],
    ['Gin cocktails & tonic', [
      ['Tanqueray', 9.5, 'limoen'], ['Tanqueray Sevilla', 9.5, 'sinaasappel'], ['Roku', 9.5, 'gember'],
      ['Red Aperol Gin', 9.5, 'gin, Aperol, Aranciata Rossa'], ['Strawberry Rossa', 9.5, 'gin, aardbeiensiroop, Aranciata Rossa'],
      ['Italian Lemon', 9.5, 'gin, Cointreau, Limonata'], ['Citron Gin Fizz', 9.5, 'gin, lime cordial, Limonata'], ['Pink Gin Pompelmo', 9.5, 'gin, Pompelmo Rossa']
    ]],
    ['Vodka vibes', [
      ['Pornstar Martini', 9.5, 'vodka, passievrucht, limoen, vanille'], ['Moscow Mule', 9.5, 'vodka, gingerbeer, limoen'],
      ['Espresso Martini', 10.25, 'vodka, Kahlúa, espresso'], ['Chai Martini', 10.25, "vodka, Baileys, chai tea"],
      ['Blood Orange Cosmo', 9.5, 'vodka, Cointreau, Aranciata Rossa'], ['Sparkling Vodka Lemon', 9.5, 'vodka, Limonata'],
      ['Campari Grapefruit', 9.5, 'Campari, vodka, Pompelmo Rossa'], ['Orange 43', 9.5, 'Licor 43, vodka, Aranciata']
    ]],
    ['Mocktails', [
      ['Agave citrus cooler 0.0%', 8.5, 'Fluère Smoked Agave 0%, orange juice, lime juice, sparkling water'],
      ['Red Orange Gin 0.0%', 8.5, 'gin 0.0, citroen, Aranciata Rossa'], ['Italian Lemon Gin 0.0%', 8.5, 'gin 0.0, vlierbloesemlikeur, Limonata'],
      ['Lemon Mojito 0.0%', 8.5, 'mojito 0.0, munt, limoen, Limonata'], ['Pink Paloma 0.0%', 8.5, 'Fluère agave spirit, limoen, Pompelmo'],
      ['Dark & Stormy 0.0%', 8.5, 'Fluère spiced dark roast, limoen, ginger beer'], ['Ginger gin mule 0.0%', 8.5, 'gin 0.0, limoen, suikersiroop, ginger beer'],
      ['Orange gin fizz 0.0%', 8.5, 'gin 0.0, citroen, Aranciata'], ['Orange amaretto 0.0%', 8.5, 'Funny Amaretto 0%, citroen, Aranciata'],
      ['Orange passion 0.0%', 8.5, 'passievrucht, limoen, Aranciata']
    ]],
    ['Spritz 0%', [
      ['Grapefruit Spritz 0.0%', 8.5, 'Italian Spritz, vlierbloesemlikeur, Pompelmo'], ['Amalfi Lemon Spritz 0.0%', 8.5, 'Italian Spritz, citroen, Limonata'],
      ['Blood Orange Spritz 0.0%', 8.5, 'Italian Spritz, limoen, Aranciata Rossa'], ['Italian Spritz 0.0%', 8.5, 'Italian Spritz 0%, Galvanina Spritz 0%']
    ]],
    ['Warme dranken', [
      ['Koffie', 3], ['Espresso', 3], ['Cappuccino', 3.2], ['Flat White', 4.5], ['Latte Macchiato', 4.75],
      ['Speciale koffie', 8.75, 'Irish / Italian / French / Spanish / deV'], ['IJskoffie', 4.75],
      ['Koffie Compleet', 9.75, 'koffie of thee naar keuze, likeurtje naar keuze, 2 bonbonnetjes'],
      ['Chai Latte', 4.75], ['Matcha Latte', 4.75], ['Mango Matcha Latte', 5.25], ['Blueberry Matcha Latte', 5.25],
      ['Make it iced!', null]
    ]]
  ];

  function items(list) {
    return '<ul class="items">' + list.map(function (it) {
      return '<li><div class="it-row"><span class="it-name">' + esc(it[0]) + (it[3] === V ? ' <i class="veg" title="vegetarisch">V</i>' : '') +
        '</span><span class="it-dots" aria-hidden="true"></span><span class="it-price">' + eur(it[1]) + '</span></div>' +
        (it[2] ? '<p class="it-desc">' + esc(it[2]) + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
  }
  function cols(id, data) {
    var el = document.getElementById(id); if (!el) return;
    el.innerHTML = data.map(function (g) { return '<div class="col"><h4>' + esc(g[0]) + '</h4>' + items(g[1]) + '</div>'; }).join('');
  }
  cols('menu-cols', MENU);
  cols('borrel-cols', BORREL);
  var dl = document.getElementById('drank-list');
  if (dl) dl.innerHTML = DRANK.map(function (g, i) {
    return '<details' + (i < 2 ? ' open' : '') + '><summary>' + esc(g[0]) + '<span class="count">' + g[1].length + '</span></summary>' + items(g[1]) + '</details>';
  }).join('');

  // ---------- Tabs ----------
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

  // ---------- Agenda ----------
  var AG = [
    ['2026-11-29', 'Sunday Roast', 'vanaf 13:00 uur · 17,50', 'Gekruide kippenpoot met truffelmousseline, geglaceerde bospeen en Yorkshire pudding.', 'eten'],
    ['2026-12-05', 'Horse', 'live muziek', 'De avonden van de V: live muziek met Horse.', 'muziek'],
    ['2026-12-19', 'Aymar Torres', 'live muziek', 'De avonden van de V: live muziek met Aymar Torres.', 'muziek'],
    ['2026-12-24', 'Kerst: gesloten', '24, 25 en 26 december', 'Op 24, 25 en 26 december zijn wij gesloten. Fijne feestdagen! Team de V.', 'dicht', '2026-12-26'],
    ['2026-12-31', 'Oud & nieuw: gesloten', '31 december en 1 januari', 'Op 31 december en 1 januari zijn wij gesloten. Een mooi nieuwjaar gewenst! Team de V.', 'dicht', '2027-01-01'],
    ['2027-01-02', 'Nieuwjaarsfeest met Maral & DJ Robin', '21:30 – 00:30 uur', 'Dans het nieuwe jaar in bij de V. DJ Robin voelt aan wat de dansvloer nodig heeft en Maral brengt livezang, meezingers in meerdere talen en volop contact met het publiek. Van de eerste beat tot het laatste refrein gaan de dj-set en livezang in elkaar over.', 'muziek'],
    ['2027-01-16', 'Nieuwjaarsfeest met DJ Dion', '21:30 – 00:30 uur', 'DJ Dion draait van herkenbare klassiekers tot de nieuwste hits en voelt aan welke plaat de dansvloer nodig heeft. Met zijn aanstekelijke enthousiasme houdt hij het feest in beweging.', 'muziek'],
    ['2027-01-30', 'De Broer van Henk', '21:30 – 00:30 uur', 'De avonden van de V: live muziek met De Broer van Henk.', 'muziek'],
    ['2027-02-07', 'WijnSpijs Wandeling Delft', 'culinaire zondag', 'Wandel, proef en geniet. Proef de V tijdens een culinaire zondag in Delft.', 'eten', null, true],
    ['2027-02-12', 'The Barn Boys', 'Bluesfestival Delft · 21:30 – 00:30 uur', 'The Barn Boys spelen bij de V tijdens Bluesfestival Delft.', 'muziek'],
    ['2027-02-13', 'Tennessee Bob', 'live muziek', 'Country & Americana tijdens de avonden van de V.', 'muziek'],
    ['2027-02-27', 'Nikita & Daan', '21:30 – 00:30 uur', 'Een avond akoestische livemuziek met een gouden randje. Met Nikita’s warme stem en Daans gitaarspel hoor je feelgoodhits, romantische ballads en herkenbare meezingers.', 'muziek'],
    ['2027-03-06', 'Hopper', 'live muziek', 'De avonden van de V: live muziek met Hopper.', 'muziek'],
    ['2027-04-11', 'WijnSpijs Wandeling Delft', 'culinaire zondag', 'Wandel, proef en geniet. Proef de V tijdens een culinaire zondag in Delft.', 'eten', null, true],
    ['2027-06-13', 'WijnSpijs Wandeling Delft', 'culinaire zondag', 'Wandel, proef en geniet. Proef de V tijdens een culinaire zondag in Delft.', 'eten', null, true]
  ];
  var DAGEN = ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'];
  var MND = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  function d(s) { var p = s.split('-'); return new Date(+p[0], p[1] - 1, +p[2]); }
  var now = new Date(); var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var upcoming = AG.filter(function (a) { return d(a[5] || a[0]) >= today; });
  var ol = document.getElementById('ag-list');
  if (ol) {
    if (!upcoming.length) ol.innerHTML = '<li class="ag-empty">Er staat nu niets op de agenda. Volg ons op Instagram voor nieuwe avonden.</li>';
    else ol.innerHTML = upcoming.map(function (a) {
      var dt = d(a[0]);
      return '<li class="ag ag-' + a[4] + '"><time datetime="' + a[0] + '"><span class="ag-dag">' + DAGEN[dt.getDay()] + '</span><span class="ag-nr">' + dt.getDate() +
        '</span><span class="ag-mnd">' + MND[dt.getMonth()] + (dt.getFullYear() !== today.getFullYear() ? ' ' + dt.getFullYear() : '') + '</span></time><div class="ag-body"><h3>' + esc(a[1]) +
        '</h3><p class="ag-meta">' + esc(a[2]) + '</p><p>' + esc(a[3]) + '</p>' +
        (a[6] ? '<a class="ag-link" href="https://www.wijnspijs.nl/culinaire-wandeling/delft/">Tickets en informatie bij WijnSpijs</a>' : '') + '</div></li>';
    }).join('');
  }
  var nu = document.getElementById('nextup');
  var nxt = upcoming.filter(function (a) { return a[4] !== 'dicht'; })[0];
  if (nu && nxt) {
    var nd = d(nxt[0]);
    nu.innerHTML = '<span class="nu-lbl">Eerstvolgend op de agenda</span><span class="nu-what">' + esc(nxt[1]) + '</span><span class="nu-when">' + DAGEN[nd.getDay()] + ' ' + nd.getDate() + ' ' + MND[nd.getMonth()] + '</span>';
    nu.hidden = false;
  }

  // ---------- Open vandaag ----------
  var HRS = { 0: [13, 23], 1: [16, 23], 2: [16, 23], 3: [16, 23], 4: [16, 23], 5: [16, 25], 6: [13, 25] };
  var CLOSED = ['2026-12-24', '2026-12-25', '2026-12-26', '2026-12-31', '2027-01-01'];
  function key(x) { return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); }
  function hh(h) { return String(h % 24).padStart(2, '0') + ':00'; }
  var st = document.getElementById('status');
  if (st) {
    var h = now.getHours() + now.getMinutes() / 60, wd = now.getDay(), msg;
    var y = new Date(today); y.setDate(y.getDate() - 1);
    var yH = HRS[y.getDay()];
    if (h < 1 && yH[1] > 24 && CLOSED.indexOf(key(y)) < 0) msg = 'Nu open, tot ' + hh(yH[1]);
    else if (CLOSED.indexOf(key(today)) >= 0) msg = 'Vandaag gesloten (feestdagen)';
    else {
      var t = HRS[wd];
      if (h < t[0]) msg = 'Vandaag open van ' + hh(t[0]) + ' tot ' + hh(t[1]);
      else if (h < t[1]) msg = 'Nu open, tot ' + hh(t[1]);
      else msg = 'Nu gesloten. Morgen weer open';
    }
    st.textContent = msg;
    st.classList.add('live');
  }
  var rows = document.querySelectorAll('#uren tr[data-d]');
  [].forEach.call(rows, function (r) { if (r.getAttribute('data-d').split(',').indexOf(String(now.getDay())) >= 0) r.classList.add('vandaag'); });

  // ---------- Menu toggle ----------
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
  function sc() { top.classList.toggle('scrolled', scrollY > 40); }
  addEventListener('scroll', sc, { passive: true }); sc();
})();
