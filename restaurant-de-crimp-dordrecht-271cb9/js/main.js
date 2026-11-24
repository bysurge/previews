(function () {
  // ---------- Menukaarten (overgenomen van de kaarten oktober 2026) ----------
  // item: [naam, prijs, omschrijving, kenmerken, extra]  kenmerken: 'v' = vegetarisch, '*' = zie legenda
  var delen = { t: 'Om te delen', items: [
    ['Zuurdesembrood', '7,5', 'olijfolie, roomboter', 'v'],
    ['Oesters', '4 / 11,5 / 42', 'rauw: rode wijnazijn, sjalot', '', 'per 1 / 3 / 12'],
    ['Garnalenkroketjes', '16,5', 'citroen, sriracha mayonaise', '', '3 st'],
    ['Pata Negra', '18,5', 'ham van het ibericovarken, marcona amandelen', '', '50 gr'],
    ['Borrelplank', 'p.p. 16,5', 'assortiment mediterraanse vleeswaren, mosterd, olijven, kaas, bitterballen, crostini, nootjes, krokante kip', '', 'vanaf 2 pers.'],
    ['BBQ chicken', '13,5', 'krokante kip, BBQ lak, bosui, rode peper', '', '6 st'],
    ['Bitterballen', '8,5', 'ambachtelijk, mosterd', '', '6 st'],
    ['Beef tataki', '16', 'licht aangezette rundermuis, teriyaki, rode peper, bosui, gefrituurde ui'],
    ['Kaastengels', '10,5', 'chilisaus', 'v', '8 st'],
    ['Brioche met paling', '18', 'brioche toast, paling, crème fraîche, zalmeitjes, bieslook', '', '3 st'],
    ["Nacho's", '12,5', 'cheddar, crème fraîche, guacamole, tomatensalsa, jalapeño', 'v'],
    ["Gamba's pil pil", '16,5', 'rode peper, knoflook, bosui'],
    ['Spring rolls', '12,5', 'chilisaus', 'v', '5 st']
  ]};

  var menus = {
    lunch: { title: 'Lunch', cols: [
      [delen],
      [{ t: 'Brood', items: [
        ['Crimp-carpaccio', '16', 'truffelmayonaise, Parmezaanse kaas, pijnboompitten, rucola'],
        ['Kroketten', '11,5', 'ambachtelijk, mosterd', '', '2 st'],
        ['Gerookte zalm', '17,5', 'brioche toast, dille roomkaas, rucola, bieslook, zoetzure rode ui, gepocheerd ei'],
        ['Crimp omelet', '15', 'truffel, paddenstoelen, peterselie', 'v'],
        ['Uitsmijter de luxe', '16', 'carpaccio, bosui, rucola, basilicummayonaise'],
        ['Krokante kip', '16', 'cheddar, little gem, zoetzure rode ui, sriracha mayonaise'],
        ['Croque monsieur of madame', '10,5', 'Croque monsieur: Franse tosti van brioche, ham, kaas, gegratineerd met bechamelsaus. Croque madame: Franse tosti van brioche, ham, kaas, gebakken ei'],
        ['Truffel paddenstoelkroket', '12,5', 'ambachtelijk, truffelmayonaise', 'v', '2 st'],
        ['Classic cheese/bacon burger', '19,5', 'brioche, Romeinse sla, tomaat, augurk, cheddar, rode ui, home made ketchup'],
        ['Sandwich burrata', '14,5', 'gebakken paddenstoelen, gekarameliseerde ui, tijm, hazelnoot crunch', 'v'],
        ['Crimp-12 uurtje', '16,5', 'rundvleeskroket, kaas, boerenham, dagsoepje, gekookt ei (optioneel vega)']
      ]}],
      [{ t: 'Salades', items: [
          ['Caesar salade', '14,5', 'Romeinse sla, Parmezaanse kaas, ansjovis, croutons, gekookt eitje, caesar dressing (optioneel vega). Supplement krokante kippendij +5'],
          ['Salade burrata', '14,5', 'Romeinse sla, burrata, walnoten, balsamico, tomaat, vijg, peer', 'v']
        ]},
        { t: 'Soep', items: [
          ['Bisque', '15,5', 'garnalenbisque, Noorse garnalen, crème fraîche, peterselie olie, citroen, krokante brioche'],
          ['Dagsoep', '10,5', 'vraag het team naar onze dagsoep']
        ]},
        { t: 'Sides', items: [
          ['Frieten', '5', 'huisgemaakte mayonaise'],
          ['Truffelfrieten', '7,5', 'truffelolie, Parmezaanse kaas, truffelmayonaise, peterselie'],
          ['Gemengde salade', '6', 'honing mosterd dressing']
        ]},
        { t: 'Gebakkie & na', items: [
          ['Appeltaart', '5,5', 'huisgemaakt, slagroom'],
          ['Hazelnootgebak', '5,5', 'van Brokking'],
          ['4 kazen', '16,5', 'notenmelange, chutney, noten/vijgenbrood'],
          ['Crimp-café gourmand', '12,5', 'koffie met 4 verschillende zoete lekkernijen']
        ]}]
    ]},
    diner: { title: 'Diner', badge: 'Dagspecials: vraag de crew voor meer info', cols: [
      [delen],
      [{ t: 'Menu', items: [
          ['3-gangen Crimp menu', '48,5', 'keuzemogelijkheden aangeduid met een *']
        ]},
        { t: 'Voor', items: [
          ['Crimp-carpaccio', '16', 'truffelmayonaise, pijnboompitten, rucola, Parmezaanse kaas', '*'],
          ['Caesar salade', '14,5', 'Romeinse sla, croutons, Parmezaanse kaas, gekookt ei, ansjovis (optioneel vega). Supplement krokante kippendij +5'],
          ['Licht geroosterde tonijn', '16', 'sesam, avocado, wasabimayonaise, koraal tuile, cress', '*'],
          ['Vegetarische gravad lax', '14,5', 'dille roomkaas, zoetzure rode ui, kappertjes, peterselie', 'v*'],
          ['Steak tartaar', '16,5', 'sjalot, augurk, kappertjes, huisgemaakte mayonaise, eidooier, peterselie, krokantje van zuurdesem'],
          ['Bisque', '15,5', 'garnalenbisque, Noorse garnalen, crème fraîche, peterselie olie, citroen, krokante brioche'],
          ['Garnalencocktail', '18,5', 'Marie Rose saus, citroen, peterselie, little gem'],
          ['Gerookte eendenborst', '16,5', 'sinaasappel gel, hazelnoot crumble, vijgencompote, venkel'],
          ['Tortellini paddenstoel', '17', 'gebakken paddenstoelen, rode wijn saus, Parmezaan, hazelnoot crumble, rucola, tartufo', 'v']
        ]},
        { t: 'Sides', items: [
          ['Frieten', '5', 'huisgemaakte mayonaise'],
          ['Truffelfrieten', '7,5', 'truffelolie, Parmezaanse kaas, truffelmayonaise, peterselie'],
          ['Gemengde salade', '6', 'Romeinse sla, komkommer, tomaat, rode ui, honing mosterd dressing'],
          ['Seizoensgroenten', '7,5', 'wisselend assortiment aan geroosterde groenten']
        ]}],
      [{ t: 'Hoofd', note: 'Alle hoofdgerechten worden geserveerd met frieten & mayonaise.', items: [
          ['Tournedos Rossini', '39,5', 'ganzenlever, truffel Madeira saus, krokantje van koningsoesterzwam, brioche crouton'],
          ['Runderentrecôte', '28', 'pepersaus, rozemarijn'],
          ['Vegetarische tournedos', '24,5', 'romige paddenstoelsaus, spinazie, krokantje van kingoyster', 'v'],
          ['Op de huid gebakken zalm', '27,5', 'limoen katsuobushi crunch, gebrande bieslook botersaus, zeebanaan', '*'],
          ['Kip De Crimp', '27,5', 'Café de Paris boter', '*'],
          ['Ravioli kreeft', '24', 'bisque, venkelcress, peterselie olie, Noorse garnalen'],
          ['Classic cheese/bacon burger', '19,5', 'brioche, Romeinse sla, tomaat, augurk, cheddar, rode ui, homemade ketchup', '*'],
          ['Herten biefstuk', '28', 'rode wijn saus'],
          ['Zeetong à la meunière', '39,5', 'citroen, peterselie'],
          ['Ravioli pompoen', '19,5', 'beurre blanc, geroosterde spruitjes, pecan, oude kaas, spinazie', 'v*']
        ]},
        { t: 'Dessert', items: [
          ['Crème brûlée', '10,5', 'rietsuiker, vanille'],
          ['Dame blanche', '10,5', 'vanille ijs, chocoladesaus, gesuikerde amandelen', '*'],
          ['Crimp-café gourmand', '12,5', 'koffie met 4 verschillende zoete lekkernijen'],
          ['4 kazen', '16,5', 'notenmelange, chutney, vijgen/notenbrood'],
          ['Gepocheerde peer', '12,5', 'karamel, vanille ijs, pecan, kruim van speculaas'],
          ['Chocolade mousse', '9,5', 'hazelnootpraliné, krokante cacao, zeezout', '*']
        ]}]
    ], foot: '* Keuze binnen het 3-gangen Crimp menu. Ook hebben wij aan de kleine smullers gedacht: vraag naar ons kindermenu.' },
    bites: { title: 'Bites', cols: [
      [{ t: '', items: delen.items.slice(0, 7) }],
      [{ t: '', items: delen.items.slice(7) }]
    ]},
    koffie: { title: 'Koffie & gebak', cols: [
      [{ t: 'Koffie', note: 'Alle koffies kunnen cafeïnevrij.', items: [
        ['Koffie', '3,3'], ['Cappuccino', '3,5'], ['Espresso', '3,3'], ['Dubbele espresso', '4'],
        ['Latte macchiato', '4'], ['Flat white', '4'], ['Havermelk', '0,5'],
        ['Thee', '3,3'], ['Verse munt thee', '4'], ['Gember thee', '4'], ['Chai latte', '4,5'],
        ['IJskoffie', '5,5'], ['Warme chocolademelk', '3,8'], ['Koffie siroop', '0,5'], ['Affogato', '6']
      ]}],
      [{ t: 'Speciale koffie', items: [
          ['Irish coffee', '9,5', 'Jameson'], ['Spanish coffee', '9,5', 'Tia Maria'],
          ['French coffee', '9,5', 'Grand Marnier'], ['Italian coffee', '9,5', 'Amaretto']
        ]},
        { t: 'Gebakkie', items: [
          ['Appeltaart', '5,5', 'huisgemaakt, slagroom'], ['Hazelnootgebak', '5,5', 'van Brokking']
        ]},
        { t: 'Marktdeal', deal: true, items: [
          ['Koffie met gebak', '7,5', 'appelgebak of Brokking met koffie, cappuccino, espresso of thee. Alleen geldig op marktdagen (vrijdag en zaterdag). Vraag de crew voor meer info.']
        ]}]
    ]},
    bar: { title: 'Bar', cols: [
      [{ t: 'Bier van de tap', items: [
          ['Heineken', '4'], ['Gaia Oedipus IPA', '6,5'], ['Affligem blond', '6'], ['Noordt tripel', '6,5'], ['Texels Skuumkoppe', '6']
        ]},
        { t: 'Bier op fles', items: [
          ['Liefmans', '5,5'], ['IJwit', '6'], ['Affligem blond 0,0%', '4,5'], ['Heineken 0.0', '4'], ['Radler 0.0', '4,5']
        ]},
        { t: 'Homemade drinks', items: [
          ['Homemade ice tea', '4,5'], ['Fresh lemonade', '4,5']
        ]}],
      [{ t: 'Gin & cocktail', note: 'Zin in een klassieke cocktail? Vraag de crew naar de mogelijkheden.', items: [
          ['Gin-tonic', '11,5', "vraag de crew naar het assortiment. Hendrick's of Bobby's +1", '*'],
          ['Pornstar martini', '12,5', 'vodka, vanille, passievrucht', '*'],
          ['Espresso martini', '12,5', 'Tia Maria, vodka, espresso'],
          ['Negroni', '12', 'rode vermouth, gin, Campari'],
          ['Amaretto sour', '11,5', 'amaretto, suiker, citroen', '*'],
          ['Moscow mule', '11,5', 'gemberbier, vodka, limoen'],
          ['Old fashioned', '12', 'bourbon, suiker, bitters'],
          ['Crimp spritz', '11', 'Aperol, limoncello of arancello, Spa rood']
        ]}]
    ], foot: '* Ook verkrijgbaar als alcoholvrij.' }
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function renderItem(it) {
    var flags = it[3] || '';
    var mark = '';
    if (flags.indexOf('v') > -1) mark += '<span class="v" title="vegetarisch">V</span>';
    if (flags.indexOf('*') > -1) mark += '<span class="star" aria-label="zie toelichting">*</span>';
    return '<li class="dish">' +
      '<div class="dish-row"><span class="dish-name">' + (mark ? '<span class="marks">' + mark + '</span>' : '') + esc(it[0]) +
      (it[4] ? ' <em>' + esc(it[4]) + '</em>' : '') + '</span>' +
      '<span class="dish-dots" aria-hidden="true"></span><span class="price">' + esc(it[1]) + '</span></div>' +
      (it[2] ? '<p class="dish-desc">' + esc(it[2]) + '</p>' : '') + '</li>';
  }

  function renderGroup(g) {
    return '<section class="group' + (g.deal ? ' group-deal' : '') + '">' + (g.t ? '<h3 class="group-title">' + esc(g.t) + '</h3>' : '') +
      (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
      '<ul class="dishes">' + g.items.map(renderItem).join('') + '</ul></section>';
  }

  document.querySelectorAll('.panel').forEach(function (p) {
    var m = menus[p.getAttribute('data-menu')];
    var html = '<div class="panel-head"><h3 class="panel-title">' + esc(m.title) + '</h3>' +
      (m.badge ? '<p class="panel-badge">' + esc(m.badge) + '</p>' : '') + '</div>';
    html += '<div class="cols cols-' + m.cols.length + '">' + m.cols.map(function (c) {
      return '<div class="col">' + c.map(renderGroup).join('') + '</div>';
    }).join('') + '</div>';
    if (m.foot) html += '<p class="panel-foot">' + esc(m.foot) + '</p>';
    p.innerHTML = html;
  });

  // ---------- Tabs ----------
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key, n = null;
      if (k === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (k === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (k === 'Home') n = tabs[0];
      if (k === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });
  // Diner standaard na 16.00
  if (new Date().getHours() >= 16) select(document.getElementById('tab-diner'));

  // ---------- Mobiel menu ----------
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function close() { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Menu openen'); }
  btn.addEventListener('click', function () {
    var open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  // ---------- Header schaduw bij scrollen ----------
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
