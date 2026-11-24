(function () {
  'use strict';

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menu data (menukaart april 2024 + drankenkaart 2024) ---------- */
  // item: [name, price, description?]
  var MENU = [
    { id: 'lunch', tab: 'Lunch', groups: [
      { t: 'Broodjes', time: '12:00 tot 17:00', items: [
        ['Pistolet kaas', '5.95'],
        ['Pistolet ham', '5.95'],
        ['Pistolet gezond', '8.25', 'Ham, kaas, sla, komkommer, tomaat, gekookt ei'],
        ['Broodje gehaktbal', '6.95', 'Met jus of satésaus']
      ]},
      { t: 'Twee boterhammen, wit of bruin', time: '12:00 tot 17:00', items: [
        ['Uitsmijter kaas', '8.95', '3 eieren'],
        ['Uitsmijter ham en kaas', '9.70', '3 eieren'],
        ['Omelet naturel', '8.50', '3 eieren'],
        ["d'Oude Enghe omelet", '10.95', '3 eieren, ui, champignons en paprika'],
        ['Twee kroketten', '8.95', 'Ook vegetarisch te verkrijgen']
      ]},
      { t: "d'Oude Enghe 12-uurtje", time: '12:00 tot 21:00', feature: true, items: [
        ["d'Oude Enghe 12-uurtje", '12.95', 'Tomatensoep en twee boterhammen (wit of bruin) met keuze uit één kroket, ham/kaas of een gebakken ei. Geserveerd met salade, tomaat en komkommer.']
      ]},
      { t: 'Tussendoortjes', time: '12:00 tot 21:00', items: [
        ['Broodje frikandel', '3.95', 'Met mayonaise'],
        ['Broodje kroket', '4.50', 'Met mosterd'],
        ['Frikandel speciaal', '3.45'],
        ["d'Oude Enghe Special snack", '6.50', 'Frikandel met kaastengel en joppiesaus'],
        ['Gehaktbal', '5.50', 'Met jus of satésaus'],
        ['Friet', '3.95', 'Met mayonaise'],
        ['Zoete aardappelfriet', '4.95', 'Met truffelmayonaise']
      ]},
      { t: "Tosti's", items: [
        ['Tosti kaas', '4.50'],
        ['Tosti ham en kaas', '4.95'],
        ['Tosti Caprese', '6.95', 'Tomaat, mozzarella, basilicum'],
        ['Vlamtosti', '5.45']
      ]},
      { t: 'Soep', note: 'Met stokbrood en kruidenboter', items: [
        ['Tomatensoep', '8.95'],
        ['Champignonsoep', '9.95']
      ]}
    ]},
    { id: 'diner', tab: 'Diner & pizza', groups: [
      { t: 'Diner', time: '12:00 tot 21:00', foot: 'Alle gerechten worden geserveerd met friet. Zoete aardappelfriet + 1.00', items: [
        ['Gegrilde kipsaté', '15.95', 'Huisgemaakte satéstokjes van kipdijfilet met satésaus en kroepoek. Kleine buikenportie 10.95'],
        ['Broodje hamburger', '13.95', 'Sla, tomaat, augurk, gebakken uitjes, BBQ-saus'],
        ['Cheeseburger', '14.95', 'Cheddarkaas, sla, tomaat, augurk, gebakken uitjes en BBQ-saus'],
        ['Vegaburger', '13.95', 'Sla, tomaat, augurk, gebakken uitjes en BBQ-saus. Optie: cheddarkaas + 1.00'],
        ["Schnitzel à la d'Oude Enghe", '15.95', 'Champignons, ui, prei en geraspte cheddarkaas. Kleine buikenportie 10.95'],
        ["d'Oude Enghe spareribs", '19.95', 'Overheerlijk huisgemaakt en supermals, met knoflooksaus']
      ]},
      { t: 'Verse pizza', time: '12:00 tot 21:00', foot: 'Alle pizzasoorten zijn ook te krijgen als pinsella (kleine pizza). Ook om mee te nemen.', items: [
        ['Margherita', '11.95', 'Mozzarella, tomaat, basilicum'],
        ['Tonno', '13.95', 'Tonijn, kappertjes, rode ui en peterselie'],
        ['Di Parma', '13.95', 'Rauwe ham, buffelmozzarella, parmezaan, tomaten en rucola. Optie: truffelroomsaus + 1.00'],
        ['Pepperoni', '12.95', 'Mozzarella, pepperoni'],
        ['Tartufo', '15.95', 'Truffelroomsaus, gegrilde groenten, buffelmozzarella, parmezaan en rucola. Optie: parmaham + 1.00']
      ]}
    ]},
    { id: 'borrel', tab: 'Borrelhappen', groups: [
      { t: 'Bittergarnituur', time: 'tot 00:00', items: [
        ['Gemengd, 8 stuks', '7.95', 'Frikandel, kipnugget, bitterbal en bamihapje'],
        ['Gemengd, 16 stuks', '13.95', 'Frikandel, kipnugget, bitterbal en bamihapje'],
        ['Bitterballen', '8.50', 'Fat Angus'],
        ['Kaastengels', '8.50'],
        ['Vlammetjes', '8.50'],
        ['Mini frikandellen', '7.50'],
        ['Kipnuggets', '7.50'],
        ['Chickenwings', '8.95']
      ]},
      { t: "Borrel-pinsella's", note: 'Kleine Italiaanse pizza voor bij de borrel', items: [
        ['Pinsella Focaccia', '7.50', 'Rozemarijn, grana padano, olijfolie en zeezout. Optie: zongedroogde tomaat + 1.00'],
        ['Pinsella Di Parma', '9.95', 'Parmezaan, parmaham, mozzarella, tomaat, zongedroogde tomaat en rucola'],
        ['Pinsella Tartufo', '10.95', 'Truffelroomsaus, gegrilde groenten, truffelolie en rucola. Optie: parmaham + 1.00']
      ]},
      { t: 'Koude hapjes', items: [
        ['Portie jonge kaas', '4.75', 'Met mosterd'],
        ['Portie oude kaas', '5.50', 'Met mosterd'],
        ['Portie worst', '4.25', 'Gekookte gelderse en leverworst']
      ]},
      { t: 'Warme hapjes', items: [
        ["Nacho's uit de oven", '10.95', 'Geraspte kaas, cheddarkaas, guacamole, chilidip, crème fraîche, lente-ui en tomatenblokjes'],
        ['Stokbroodje uit de oven', '8.95', 'Tomatentapenade, kruidenboter en aioli'],
        ['Jalapeño worstjes', '7.95', '2 stuks, gesneden'],
        ['Kip mini saté stokjes', '10.95', '6 stuks met satésaus']
      ]},
      { t: 'Borrelplanken', note: 'Klein of groot', items: [
        ['Hollandse borrelplank', '17.95 | 32.95', 'Jonge kaas, oude kaas, leverworst, gelderse worst, komkommer, snoeptomaatjes, salami met augurk en mosterd'],
        ['Italiaanse borrelplank', '19.95 | 36.95', 'Focaccia met aioli en tapenade, olijven, rauwe ham, salami en mosterd'],
        ["d'Oude Enghe borrelplank", '24.95 | 44.95', 'Focaccia met aioli en tapenade, kipspiesjes met satésaus en bittergarnituur gemengd']
      ]}
    ]},
    { id: 'kids', tab: 'Kids & dessert', groups: [
      { t: 'Kindermenu', note: 'Met verrassing!', items: [
        ['Frikandel', '7.95', 'Frietjes, mayonaise en appelmoes'],
        ['Kroket', '7.95', 'Frietjes, mayonaise en appelmoes'],
        ['4 kipnuggets', '7.95', 'Frietjes, mayonaise en appelmoes'],
        ['Pinsella Margherita', '8.95', 'Mozzarella, tomaat en basilicum']
      ]},
      { t: 'Dessert', items: [
        ['IJscoupe, 1 bol', '4.95', 'Vanille, aardbei of chocolade, met karamel-, chocolade- of aardbeiensaus'],
        ['IJscoupe, 2 bollen', '5.95'],
        ['IJscoupe, 3 bollen', '6.95'],
        ['Menorquina Caprizzio', '9.50', 'Bol roomijs gevuld met karamelsaus, laagje witte chocolade en stukjes amandel'],
        ['Waterijsje voor de kleintjes', '2.75', 'Raketje of perenijsje'],
        ['Appeltaart uit de oven', '4.75', 'Iets lekkers bij de koffie']
      ]}
    ]},
    { id: 'koffie', tab: 'Koffie & fris', groups: [
      { t: 'Warme drank', foot: 'Koffie cafeïnevrij + 0.50', items: [
        ['Koffie', '3.10'], ['Cappuccino', '3.40'], ['Koffie verkeerd', '3.30'], ['Espresso', '2.75'],
        ['Dubbele espresso', '3.50'], ['Latte macchiato', '3.95'], ['Espresso macchiato', '3.00'], ['Flat white', '3.50'],
        ['Thee', '2.90'], ['Verse muntthee', '3.95'], ['Verse gemberthee', '3.95'], ['Warme chocolademelk', '3.75'],
        ['Chocolademelk met slagroom', '4.50'], ['Chocolademelk met rum en slagroom', '6.50']
      ]},
      { t: 'Speciale koffie', items: [
        ['Coffee Brasil', '7.95', 'Tia Maria en Grand Marnier'],
        ['Irish Coffee', '7.95', 'Jameson en bruine suiker'],
        ['Spanish Coffee', '7.95', 'Tia Maria'],
        ['Italian Coffee', '7.95', 'Amaretto'],
        ['American Coffee', '7.95', 'Baileys'],
        ['French Coffee', '7.95', 'Grand Marnier'],
        ['IJskoffie', '4.75']
      ]},
      { t: 'Frisdranken', items: [
        ['Cola of Cola zero', '3.25'], ['Fanta of Cassis', '3.25'], ['Fuzetea', '3.25', 'Sparkling, green of peach'],
        ['Chaudfontaine', '3.25', 'Rood of blauw'], ['Chaudfontaine, fles 1 liter', '9.50'], ['Sprite', '3.25'], ['Rivella', '3.50'],
        ['Royal Bliss', '3.75', 'Bitter lemon, tonic, ginger beer, ginger ale of aromatic berry'],
        ['Red Bull', '4.25'], ['Red Bull suikervrij of watermeloen', '4.75']
      ]},
      { t: 'Zuivel en sappen', items: [
        ['Chocomel', '3.50'], ['Fristi', '3.50'], ['Halfvolle melk', '3.00'],
        ['Appelsap', '3.50'], ['Sinaasappelsap', '3.50'], ['Tomatensap', '3.50'], ['Verse jus d\'orange', '4.75']
      ]},
      { t: 'Smoothies', items: [
        ['Aardbei-banaan', '4.80'], ['Perzik-passievrucht-mango', '5.20'], ['Avocado-peer-kiwi-appel-munt', '5.80']
      ]}
    ]},
    { id: 'bier', tab: 'Bier & wijn', groups: [
      { t: 'Bier van de tap', items: [
        ['Vaasje Amstel', '3.50'], ['Fluitje Amstel', '3.10'], ['Bolletje Amstel', '3.10'], ['Kleintje Amstel', '2.70'],
        ['Halve liter Amstel', '6.45'], ['Pitcher Amstel', '18.75'], ['Fluitje Amstel rosé bier', '3.60'], ['Vaasje Amstel rosé bier', '4.00'],
        ['Birra Moretti Sale di Mare', '5.50'], ['Affligem Blond', '5.75'], ['Texels Skuumkoppe', '5.75'], ['Brand Weizen', '5.90'], ['Bier van het moment', '5.90']
      ]},
      { t: 'Bier van de fles', items: [
        ['Affligem Dubbel', '5.75'], ['Affligem Tripel', '5.75'], ['Texels Skiller Wit', '5.75'], ['Oedipus Mannenliefde', '5.90'],
        ['Apple Bandit Juicy Apple', '4.50'], ['Apple Bandit Raspberry', '5.00'], ['Amstel Radler 2.0', '3.90'], ['Heineken', '3.75'],
        ['Desperados Original', '5.00'], ['Desperados Strawberry Margarita', '5.50']
      ]},
      { t: '0.0 bieren', items: [
        ['Heineken 0.0, van de tap', '3.75'], ['Amstel Radler 0.0', '3.90'], ['Affligem Blond 0.0', '3.90'], ['Texels Skuumkoppe 0.0', '4.50'],
        ['Apple Bandit Raspberry 0.0', '3.90'], ['Brand Weizen 0.0', '4.50'], ['Brand IPA 0.0', '4.50']
      ]},
      { t: 'Buckets', note: '6 halen, 5 betalen', feature: true, items: [
        ['Heineken', '18.75'], ['Desperados Original', '25.00'], ['Desperados Strawberry Margarita', '28.50']
      ]},
      { t: 'Wijn', note: 'Per glas | per fles', items: [
        ['Mancura Etnia Chardonnay', '4.95 | 27.50', 'Wit, droog'],
        ['Mancura Etnia Sauvignon', '4.95 | 27.50', 'Wit, droog'],
        ['Vespa Paololeo Pinot Grigio', '5.45 | 30.50', 'Wit, droog'],
        ['Romeo Jumilla Verdejo', '6.25 | 34.50', 'Wit, droog'],
        ['Moselland Bereich Bernkastel', '4.95 | 29.50', 'Wit, zoet'],
        ['Le Vigneron Catalan Rosé IGP OC', '4.95 | 29.50', 'Rosé'],
        ["Bosco del Merlo Pinot Grigio 'blush' Rosato", '6.25 | 34.50', 'Rosé'],
        ['Mancura Etnia Cabernet Sauvignon-Merlot', '5.00 | 29.50', 'Rood'],
        ['Kazayak Malbec', '5.75 | 33.50', 'Rood'],
        ['Cava Marques de Terrabona brut', '5.50 | 35.00', 'Bubbels'],
        ['Bosco del Merlo Prosecco Millesimato Rosato', 'fles 39.50', 'Bubbels']
      ]}
    ]},
    { id: 'sterk', tab: 'Sterke drank', groups: [
      { t: 'Gin', items: [['Gordon\'s Gin', '5.00'], ['Bombay Gin', '5.50'], ['Hendrick\'s Gin', '5.95'], ['Pink Gin', '5.25']] },
      { t: 'Whisky', items: [['Jameson', '5.95'], ['Red Label', '5.95'], ['Black Label', '7.25'], ['Jack Daniels', '5.95']] },
      { t: 'Vodka', items: [['Eristoff Vodka', '5.45'], ['Eristoff Vodka Red', '5.45'], ['Eristoff Vodka Black', '5.45']] },
      { t: 'Rum', items: [['Bacardi Carta Blanca', '5.45'], ['Bacardi Lemon', '5.45'], ['Bacardi Razz', '5.45'], ['Captain Morgan', '5.45'], ['Havana wit', '5.95'], ['Havana bruin', '5.95']] },
      { t: 'Gedestilleerd', items: [
        ['Malibu', '5.45'], ['Campari', '4.50'], ['Corenwijn', '3.75'], ['Apfelkorn', '4.95'], ['Jonge jenever', '3.75'], ['Oude jenever', '3.75'],
        ['Hoppe Vieux', '3.95'], ['Bessenjenever', '3.50'], ['Sonnema Berenburg', '4.00'], ['Jägermeister', '4.00'], ['Schrobbeler', '3.75']
      ]},
      { t: 'Likeur', items: [
        ['Southern Comfort', '5.45'], ['Tia Maria', '4.95'], ['Grand Marnier', '4.95'], ['Amaretto', '4.95'], ['Pisang Ambon', '4.95'], ['Blue Curaçao', '4.95'],
        ['Safari', '4.95'], ['Licor 43', '5.70'], ['Passoa', '4.95'], ['Baileys', '5.25'], ['Cointreau', '4.95'], ['Kahlua', '4.95'], ['Drambuie', '4.95']
      ]},
      { t: 'Port, sherry en vermout', items: [['Rode port', '4.50'], ['Witte port', '4.00'], ['Sherry dry', '4.50'], ['Martini wit', '4.00'], ['Martini rood', '4.00']] },
      { t: 'Digestief', items: [['Limoncello', '3.95'], ['Courvoisier Cognac', '5.95']] }
    ]},
    { id: 'cocktails', tab: 'Cocktails', groups: [
      { t: 'Cocktails', items: [
        ['Pornstar Martini', '9.75'], ['Sex on the Beach', '9.75'], ['Aperol Spritz', '9.50'], ['Gin Melon', '9.75'],
        ['Espresso Martini', '9.75'], ['Strawberry Daiquiri', '9.50'], ['Moscow Mule', '9.75'], ['Gin Tonic', '9.50'],
        ['Berry Sensation', '9.75'], ['Yuzu Spritzer', '9.50'], ['Dutch Mule', '9.75'], ['Tropical Mule', '9.75']
      ]},
      { t: 'Mocktails', items: [['Gin Tonic 0.0%', '7.50'], ['Mojito 0.0%', '7.50'], ['Pornstar Martini 0.0%', '7.50']] },
      { t: "Licor 43 sangria's", feature: true, items: [
        ['Sangria Rosé', '28.95', 'Licor 43, fruitige rosé, bitter lemon, vers fruit'],
        ['Sangria Cava', '29.95', 'Licor 43, cava, bitter lemon, vers fruit'],
        ['Sangria Rood', '28.95', 'Licor 43, Fanta, rode wijn, vers fruit']
      ]}
    ]}
  ];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var tabsEl = document.getElementById('tabs');
  var panelsEl = document.getElementById('panels');
  var tabs = [];

  MENU.forEach(function (sec, i) {
    var b = el('button', 'tab', sec.tab);
    b.type = 'button';
    b.id = 'tab-' + sec.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'panel-' + sec.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i === 0 ? 0 : -1;
    tabsEl.appendChild(b);
    tabs.push(b);

    var p = el('div', 'panel');
    p.id = 'panel-' + sec.id;
    p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id);
    p.tabIndex = 0;
    if (i !== 0) p.hidden = true;

    sec.groups.forEach(function (g) {
      var box = el('div', 'grp' + (g.feature ? ' grp-feature' : ''));
      var h = el('h3', 'grp-t', g.t);
      box.appendChild(h);
      if (g.time || g.note) {
        var meta = el('p', 'grp-meta', [g.time, g.note].filter(Boolean).join('. '));
        box.appendChild(meta);
      }
      var ul = el('ul', 'items');
      g.items.forEach(function (it) {
        var li = el('li', 'item');
        var row = el('div', 'item-row');
        row.appendChild(el('span', 'item-n', it[0]));
        row.appendChild(el('span', 'item-dots'));
        row.appendChild(el('span', 'item-p', it[1]));
        li.appendChild(row);
        if (it[2]) li.appendChild(el('p', 'item-d', it[2]));
        ul.appendChild(li);
      });
      box.appendChild(ul);
      if (g.foot) box.appendChild(el('p', 'grp-foot', g.foot));
      p.appendChild(box);
    });
    panelsEl.appendChild(p);
  });

  function select(i, focus) {
    tabs.forEach(function (t, j) {
      var on = i === j;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tabs[i].focus();
    var t = tabs[i];
    var bar = tabsEl;
    var left = t.offsetLeft - (bar.clientWidth - t.offsetWidth) / 2;
    bar.scrollTo({ left: left, behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i, false); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
    });
  });

  /* ---------- today / open now ---------- */
  // minutes since midnight; close past midnight is > 1440
  var HOURS = {
    0: [13 * 60, 24 * 60], 1: [14 * 60, 21 * 60], 2: [12 * 60, 24 * 60], 3: [12 * 60, 25 * 60],
    4: [14 * 60, 25 * 60], 5: [12 * 60, 27 * 60 + 30], 6: [12 * 60, 27 * 60 + 30]
  };
  var DAYS = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
  function fmt(m) { m = m % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }

  var now = new Date();
  var d = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var prev = (d + 6) % 7;
  var status, showDay = d;
  if (mins + 1440 < HOURS[prev][1]) {
    showDay = prev;
    status = 'Nu open, tot ' + fmt(HOURS[prev][1]);
  } else if (mins >= HOURS[d][0] && mins < HOURS[d][1]) {
    status = 'Nu open, tot ' + fmt(HOURS[d][1]);
  } else if (mins < HOURS[d][0]) {
    status = 'Vandaag open vanaf ' + fmt(HOURS[d][0]);
  } else {
    var nd = (d + 1) % 7;
    status = 'Morgen weer open vanaf ' + fmt(HOURS[nd][0]);
  }
  document.getElementById('today-hours').textContent = DAYS[showDay] + ' ' + fmt(HOURS[showDay][0]) + ' tot ' + fmt(HOURS[showDay][1]);
  document.getElementById('today-status').textContent = status;
  var row = document.querySelector('#hours-table tr[data-d="' + showDay + '"]');
  if (row) row.classList.add('is-today');
})();
