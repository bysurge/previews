// Menukaart volgens de prijslijst van Willem Geerts Super Snack.
// Prijzen die niet zeker uit de prijslijst te lezen waren, staan er bewust niet bij.
var MENU = [
  ['broodjes', 'Broodjes', [
    ['Belegde broodjes', [
      ['Jonge kaas'], ['Oude kaas'], ['Ham'], ['Ham/kaas'], ['Gezond'], ['Mozzarella/tomaat'], ['Kipfilet'],
      ['Gegrilde kip'], ['Fricandeau'], ['Rosbief'], ['Tartaar'], ['Carpaccio'], ['Ossenworst'], ['Salami'],
      ['Roombrie'], ['Roomkaas'], ['Filet americain'], ['Verse zalm'], ['Zalmsalade'], ['Tonijnsalade'],
      ['Ei gekookt'], ['Ei gebakken'], ['Eiersalade'], ['Kipkerrie'], ['Paté']
    ], 'Op een zachte bol, pistolet, ciabatta of waldkorn. De zachte bol, pistolet en ciabatta zijn er in wit of bruin. Vraag ons naar de prijs per broodsoort.'],
    ['Panini\'s', [['Panini ham & kaas'], ['Panini salami & kaas'], ['Panini mozzarella & tomaat']], 'Panini\'s vanaf € 4,95.']
  ]],
  ['warm', 'Warme broodjes', [
    ['Warme broodjes', [
      ['Broodje kroket', '2,90'], ['Broodje goulash kroket', '3,25'], ['Broodje kalfs kroket', '3,25'],
      ['Broodje bourgondische kroket', '3,25'], ['Broodje satékroket', '3,25'], ['Broodje frikandel', '2,90'],
      ['Broodje kaassoufflé', '3,15'], ['Broodje bal gehakt', '4,25'], ['Broodje knakworst', '3,75'],
      ['Broodje warm vlees', '6,75'], ['Broodje warm vlees speciaal', '6,95'], ['Broodje shoarma', '6,50'],
      ['Broodje bamibal', '3,50'], ['Broodje bami oriental', '3,50'], ['Broodje viandel', '3,40'],
      ['Broodje braadworst', '3,75'], ['Broodje kipcorn', '3,50'], ['Broodje groentekroket', '3,25'],
      ['Broodje mexicano', '3,50'], ['Broodje pikanto', '3,50'], ['Pistoletje hete kip', '5,95']
    ]]
  ]],
  ['eieren', 'Omeletten & uitsmijters', [
    ['Omeletten & uitsmijters', [
      ['Omelet', '6,95'], ['Omelet zalm', '8,95'], ['Boeren omelet', '8,95'], ['Uitsmijter ham', '7,50'],
      ['Uitsmijter kaas', '7,50'], ['Uitsmijter ham/kaas', '7,95'], ['Uitsmijter ham/kaas/bacon', '8,50'],
      ['Uitsmijter rosbief', '7,95'], ['Uitsmijter bacon', '7,50'], ['Diverse uitsmijters', '8,50']
    ]]
  ]],
  ['schotels', 'Schotels', [
    ['Schotels', [
      ['Bal gehakt', '13,95'], ['Kipsaté', '13,95'], ['Varkenssaté', '13,95'], ['Loempia', '13,95'],
      ['Schnitzel', '13,95'], ['Halve kip', '13,95'], ['Shoarma', '13,95'], ['Bami', '14,95'], ['Nasi', '14,95'],
      ['Hamburger speciaal', '13,95'], ['Kipnuggets', '13,95']
    ], 'Bij al onze schotels serveren wij salade, frites en saus.']
  ]],
  ['burgers', 'Hamburgers', [
    ['Hamburgers', [
      ['Broodje hamburger', '5,95'], ['Broodje hamburger speciaal', '5,95'], ['Broodje bacon burger', '5,95'],
      ['Broodje hawaï burger', '5,95'], ['Broodje cheese burger', '5,95'], ['Broodje joppie burger', '5,95'],
      ['Broodje chicken burger', '5,95'], ['Broodje Willems burger', '7,95'], ['Losse hamburger', '3,50']
    ]]
  ]],
  ['patat', 'Patat', [
    ['Patat frites, klein / groot', [
      ['Patat zonder', '2,75 / 4,25'], ['Patat mayo', '3,45 / 4,95'], ['Patat curry', '3,45 / 4,95'],
      ['Patat mayo/curry', '3,75 / 5,25'], ['Patat ketchup', '3,45 / 4,95'], ['Patat speciaal', '3,75 / 5,25'],
      ['Patat joppie', '3,75 / 5,25'], ['Patat pindasaus', '3,75 / 5,25'], ['Patat oorlog', '3,85 / 5,35'],
      ['Patat super', '3,95 / 5,45']
    ]],
    ['Per zak en voor het gezin', [
      ['Patat per zak', '5,25 / 7,75 / 10,00 / 14,75'],
      ['Gezinspakket: 4 pers. patat incl. 4 snacks (frikandel of kroket)', '14,95']
    ]],
    ['Specialiteiten', [
      ['Kapsalon kip klein / groot', '9,50 / 11,95'], ['Kapsalon kebab klein / groot', '9,50 / 11,95'],
      ['Frietje hete kip', '7,95'], ['Kidsmenu', '5,95']
    ], 'Diverse salades op aanvraag.']
  ]],
  ['superfrites', 'Super frites', [
    ['Super frites', [
      ['Patat met mexicano & pindasaus', '7,50'], ['Patat met crizly & pindasaus', '7,50'],
      ['Patat met 2 shoarmarollen & knoflooksaus', '7,50'], ['Patat met vlampijp & nasischijf & chilisaus', '7,50'],
      ['Patat met berehap & pindasaus', '7,50'], ['Catamaran met saus', '7,50'], ['Catalina met saus', '7,50'],
      ['Friket met saus', '7,50'], ['Boerenpatat', '7,50'], ['Patat met varkenssaté', '8,50'],
      ['Patat met kipsaté', '8,50'], ['Patat met warm vlees', '7,50'], ['Patat met schnitzel & saus', '9,10'],
      ['Patat met shoarma', '8,50'], ['Patat met halve kip', '9,10']
    ]]
  ]],
  ['snacks', 'Snacks', [
    ['Snacks', [
      ['Kroket', '2,20'], ['Kalfs kroket', '2,50'], ['Saté kroket', '2,50'], ['Goulash kroket', '2,50'],
      ['Groente kroket', '2,50'], ['Kaas kroket', '2,50'], ['Bourgondische kroket', '2,50'], ['Frikandel', '2,20'],
      ['Frikandel XXL', '4,50'], ['Viandel', '2,75'], ['Berehap', '3,50'], ['Bamibal', '2,75'],
      ['Bami oriental', '2,75'], ['Nasischijf', '2,75'], ['Nasi oriental', '2,75'], ['Kaassoufflé', '2,50'],
      ['Ham/kaassoufflé', '2,50'], ['Kipcorn', '2,90'], ['Loempia', '4,25'], ['Loempia speciaal', '5,75'],
      ['Hotwings 5 stuks', '4,25'], ['Smulrol', '2,95'], ['Crizly', '3,50'], ['Knakworst', '2,75'],
      ['Lihanboutje', '2,95'], ['Sitostick', '2,95'], ['Bal gehakt', '3,50'], ['Kipnuggets', '3,75'],
      ['Kipfingers', '3,75'], ['Bitterballen', '3,25'], ['Braadworst', '2,95'], ['Loempidel', '2,95'],
      ['Shoarmarol', '3,25'], ['Pikanto', '2,75'], ['Mexicano', '2,75'], ['Hete donder', '2,95'],
      ['Saterol', '2,75'], ['Vlammetjes', '4,25'], ['Vlampijp', '3,25'], ['Halve kip', '6,75'],
      ['Schnitzel', '6,95'], ['Varkenssaté', '6,75'], ['Kipsaté', '6,75']
    ]],
    ['Glutenvrij', [['Kroket', '3,25'], ['Frikandel', '3,25'], ['Kaassoufflé', '3,50'], ['Kipnuggets', '4,50']]],
    ['Borrelhapjes', [['Bittergarnituur incl. saus, vanaf 25 stuks', '19,50']]]
  ]],
  ['saus', 'Sauzen', [
    ['Sauzen, klein of groot', [
      ['Mayonaise'], ['Curry'], ['Ketchup'], ['Pindasaus'], ['Ui'], ['Speciaal'], ['Chilisaus'], ['Joppie'],
      ['Knoflook'], ['Oorlog'], ['Sambal'], ['Super']
    ], 'Vraag ons naar de prijzen van de sauzen.']
  ]],
  ['ijs', 'IJs & shakes', [
    ['IJs', [['Kinderijsje'], ['Reuzebeker'], ['Oeblie normaal'], ['Oeblie groot'], ['Sundae + 1 saus'], ['Sorbet'], ['Shuffle'], ['Extra dip']]],
    ['Milkshakes', [['Aardbei'], ['Banaan'], ['Vanille'], ['Chocolade'], ['Wisselende seizoenssmaak']]],
    ['Slush', [['Slush']]]
  ]],
  ['dranken', 'Dranken', [
    ['Fris', [['Coca Cola'], ['Coca Cola Zero'], ['Fanta'], ['Sprite'], ['Ice Tea'], ['Ice Tea green'], ['Chaudfontaine rood'], ['Chaudfontaine blauw'], ['Capri-Sun'], ['Red Bull'], ['Blikje bier']]],
    ['Koffie, thee en zuivel', [['Koffie'], ['Thee'], ['Cappuccino'], ['Latte macchiato'], ['Beker melk'], ['Literpak melk'], ['Beker karnemelk'], ['Literpak karnemelk'], ['Literpak jus d\'orange']]]
  ]]
];

(function () {
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  var tabsEl = document.getElementById('tabs'), panel = document.getElementById('menu-panel');
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function show(id, focus) {
    MENU.forEach(function (t) {
      var b = document.getElementById('tab-' + t[0]), on = t[0] === id;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      if (!on) return;
      panel.innerHTML = t[2].map(function (grp) {
        var noPrices = grp[1].every(function (it) { return !it[1]; });
        return '<div class="menu-group' + (noPrices ? ' names' : '') + '"><h3>' + esc(grp[0]) + '</h3><ul>' +
          grp[1].map(function (it) {
            return '<li><span class="dish">' + esc(it[0]) + '</span>' + (it[1] ? '<span class="price">' + esc(it[1]) + '</span>' : '') + '</li>';
          }).join('') + '</ul>' + (grp[2] ? '<p class="group-note">' + esc(grp[2]) + '</p>' : '') + '</div>';
      }).join('');
      panel.setAttribute('aria-labelledby', 'tab-' + id);
      if (focus) b.focus();
    });
  }
  MENU.forEach(function (t) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.id = 'tab-' + t[0];
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'menu-panel');
    b.textContent = t[1];
    b.addEventListener('click', function () { show(t[0]); });
    tabsEl.appendChild(b);
  });
  tabsEl.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var ids = MENU.map(function (t) { return t[0]; });
    var cur = ids.indexOf(document.activeElement.id.replace('tab-', ''));
    show(ids[(cur + (e.key === 'ArrowRight' ? 1 : -1) + ids.length) % ids.length], true);
  });
  show('warm');

  // Vandaag open?
  var day = new Date().getDay();
  var hours = { 2: '11.00 - 19.30', 3: '11.00 - 19.30', 4: '11.00 - 19.30', 5: '10.00 - 20.00', 6: '11.00 - 20.00' };
  var el = document.getElementById('today-hours');
  el.textContent = hours[day] ? 'Vandaag open ' + hours[day] + ' uur' : 'Vandaag gesloten';
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('today');
  });
})();
