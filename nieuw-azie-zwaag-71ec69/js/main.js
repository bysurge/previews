(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Today line + hours highlight
  var d = new Date().getDay();
  var todayRow = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (todayRow) todayRow.classList.add('is-today');
  var t = document.getElementById('today');
  t.textContent = d === 1 ? 'Vandaag (maandag) alleen bezorgen, bestel online' : 'Vandaag geopend van 16:30 tot 20:30';

  // Afhaalkaart (afhaalkaart maart 2025)
  var V = true;
  var kaart = [
    { cat: 'Soepen', items: [
      ['1', 'Kippensoep', '', '5,30'],
      ['2', 'Tomatensoep', '', '5,30'],
      ['4', 'Sun la thong', 'Peking soep, pikant gekruid', '6,50'],
      ['5', 'Wan tang thong', 'Heldere bouillon met flensjes', '6,50']
    ]},
    { cat: 'Voor- en bijgerechten', items: [
      ['6', 'Kroepoek', '', '3,50'],
      ['6a', 'Cassave kroepoek', '', '4,30'],
      ['7a', 'Kip loempia', '', '6,00'],
      ['8', 'Pangsit goreng', '6 stuks', '7,00'],
      ['9', 'Gebakken banaan', '4 stuks', '5,50', V],
      ['11', 'Saté kip', '3 stokjes van kippendijen', '9,60'],
      ['12', 'Saté garnalen', '3 stokjes', '15,00'],
      ['13', 'Gado gado', 'Indische salade', '7,50', V],
      ['14', 'Pindasaus', '', '3,50', V],
      ['15', 'Zure atjar', '', '3,50', V],
      ['16', "Mini loempia's", '8 stuks', '5,50', V],
      ['17', "Kleine Chinese loempia's", '2 stuks', '5,50'],
      ['18', 'Patat', '', '5,50', V],
      ['19', 'Frikandel', '', '3,90'],
      ['20', 'Kroket', '', '3,90'],
      ['21', 'Pin pee ap', 'Voor 2 personen. Flensjes gevuld met geroosterde peking eend en groenten', '22,50'],
      ['21a', 'Dim sum', "Mix van 12 stuks: 4 mini loempia's en pasteitjes van kip, garnalen, rundvlees en varkensvlees", '19,50'],
      ['22', 'Tsa sieuw mai', '6 stuks krokant gebakken varkensvlees pasteitjes', '9,00'],
      ['23', 'Au yuk kau', '6 stuks krokant gebakken rundvlees pasteitjes', '9,00'],
      ['25', 'Gefrituurde garnalen', '4 stuks, met zoetzure saus', '11,00']
    ]},
    { cat: 'Nasi', items: [
      ['26', 'Nasi gewoon', '', '8,00'],
      ['27', 'Nasi speciaal', 'Met 2 stokjes saté', '13,40'],
      ['28', 'Nasi Nieuw Azië', 'Met 2 stokjes saté en babi pangang', '16,50'],
      ['30', 'Nasi met garnalen', '', '19,50'],
      ['31', 'Nasi yuen chow', 'Gebakken rijst, varkensvlees, kip, ei en groenten', '14,70'],
      ['32', 'Nasi Amerikan', 'Met garnalen, ossenhaas, kip, varkensvlees en groenten', '16,00']
    ]},
    { cat: 'Bami', items: [
      ['33', 'Bami gewoon', '', '8,00'],
      ['34', 'Bami speciaal', 'Met 2 stokjes saté', '13,40'],
      ['35', 'Bami Nieuw Azië', 'Met 2 stokjes saté en babi pangang', '16,50'],
      ['37', 'Bami met garnalen', '', '19,50'],
      ['38', 'Chow min', 'Gebakken Chinese bami met kip en groenten', '15,70'],
      ['38a', 'Bami Amerikan', 'Met garnalen, ossenhaas, kip, varkensvlees en groenten', '16,00']
    ]},
    { cat: 'Mihoen', items: [
      ['39', 'Mihoen met varkensvlees', '', '14,00'],
      ['40', 'Mihoen met gesneden kip', '', '14,70'],
      ['41', 'Mihoen met garnalen', '', '20,50'],
      ['42', 'Mihoen Singapore', 'Gebakken mihoen met kerrie, vlees en groenten', '15,70']
    ]},
    { cat: 'Gevogelte', items: [
      ['43', 'Ajam roedjak', 'Gebakken kip met ketjapsaus', '15,90'],
      ['44', 'Ajam pangang', 'Gebakken kip met babi pangang saus', '15,90'],
      ['45', 'Sit jap kai', 'Kip met knoflook en zwarte bonensaus', '15,50'],
      ['46', 'Kip met kerriesaus', '', '15,10'],
      ['47', 'Kip met ananas', '', '15,10'],
      ['48', 'Kip met champignons', '', '15,10'],
      ['49', 'Koe lo kai', 'Krokant gebakken kipballetjes met zoetzure saus', '15,50'],
      ['50', 'Sa tja kai', 'Kip gebakken met groenten in sa tja saus', '18,30'],
      ['51', 'Kong po kai ting', "Kip met rode szechuan-pepers in pikante saus en pinda's", '18,30'],
      ['52', 'La kai', 'Stukjes krokant gebakken kip in een licht zoete, pikante saus', '19,30'],
      ['62', 'San chow kai', 'Stukjes krokant gebakken kip met paprika en ananas in zoetzure saus', '20,40'],
      ['52a', 'Peking eend', 'Keuze uit hoi-sin saus, pikante pruimensaus en een lichte sojasaus', '22,00']
    ]},
    { cat: 'Varkensvlees', items: [
      ['53', 'Babi pangang', '', '15,80'],
      ['54', 'Babi ketjap', '', '15,80'],
      ['55', 'Varkensvlees met kerriesaus', '', '15,10'],
      ['56', 'Foo nam', 'Krokant gebakken varkensspek', '16,50'],
      ['57', 'Gehaktballetjes in ketjapsaus', '', '15,50'],
      ['58', 'Sit jap yuk', 'Varkensvlees met knoflook en zwarte bonensaus', '15,50'],
      ['59', 'Yuk si', 'Reepjes krokant gebakken varkenshaas', '18,50'],
      ['60', 'Tja sieuw', 'Geroosterd varkensvlees op Cantonese wijze bereid', '16,50'],
      ['61', 'Sa tja yuk', 'Varkenshaas gebakken met groenten in sa tja saus', '18,70']
    ]},
    { cat: 'Ossenhaas', items: [
      ['64', 'Ossenhaas met kerriesaus', '', '16,90'],
      ['65', 'Ossenhaas met ui', '', '16,90'],
      ['65a', 'Sit jap au', 'Ossenhaas met knoflook en zwarte bonensaus', '19,40'],
      ['65b', 'Ossenhaas met zwarte pepersaus', '', '20,50'],
      ['66', 'Sa tja au', 'Ossenhaas gebakken met groenten in sa tja saus', '20,50'],
      ['67', 'Tjong sjik au', 'Ossenhaas in een milde zoete saus gesmoord', '20,50'],
      ['68', 'Sun la au', 'Ossenhaas met verse pepers, gesmoord in pikante saus', '20,50'],
      ['69', 'Ossenhaas in een lichte sojasaus en zwarte peper', '', '20,50']
    ]},
    { cat: 'Garnalen', items: [
      ['71', 'Sit jap ha', 'Garnalen met knoflook en zwarte bonensaus', '22,10'],
      ['72', 'Garnalen met kerriesaus', '', '22,10'],
      ['73', 'La tjap ha', 'Licht krokant gebakken garnalen in een licht zoete, pikante saus', '23,10'],
      ['74', 'Sa tja ha', 'Garnalen gebakken met groenten in sa tja saus', '22,10'],
      ['75', 'Kong po ha', "Garnalen met rode szechuan-pepers in pikante saus en pinda's", '22,10']
    ]},
    { cat: 'Groente en ei', items: [
      ['77', 'Tjap tjoy met varkensvlees', '', '14,60'],
      ['78', 'Tjap tjoy met kip', '', '14,60'],
      ['79', 'Tjap tjoy met garnalen', '', '20,70'],
      ['80', 'Tjap tjoy met ossenhaas', '', '17,00'],
      ['81', 'So choi kai', 'Roergebakken groenten van het seizoen met kip', '17,90'],
      ['82', 'Foe yong hai met varkensvlees', '', '14,60'],
      ['83', 'Foe yong hai met kip', '', '14,60'],
      ['84', 'Foe yong hai met garnalen', '', '20,70']
    ]},
    { cat: 'Vegetarisch', items: [
      ['90', 'Vegetarische foe yong hai', '', '14,00', V],
      ['91', 'Lo hon tsai', 'Boeddhistisch gerecht met diverse groenten en paddenstoelen', '17,60', V],
      ['92', 'Chow so tjoy', 'Roergebakken seizoensgroenten', '16,60', V]
    ]}
  ];

  var tabs = document.getElementById('tabs');
  var lijst = document.getElementById('lijst');
  var zoek = document.getElementById('zoek');
  var current = 0;

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function row(it) {
    return '<li class="dish"><span class="nr">' + it[0] + '</span><span class="dn"><span class="name">' + esc(it[1]) +
      (it[4] ? ' <i class="v" title="Vegetarisch">V</i>' : '') + '</span>' +
      (it[2] ? '<span class="desc">' + esc(it[2]) + '</span>' : '') + '</span><span class="pr">€ ' + it[3] + '</span></li>';
  }
  function render() {
    var q = zoek.value.trim().toLowerCase();
    if (q) {
      var html = '';
      kaart.forEach(function (c) {
        var hits = c.items.filter(function (it) { return it[0].toLowerCase() === q || (it[1] + ' ' + it[2]).toLowerCase().indexOf(q) > -1; });
        if (hits.length) html += '<h3 class="cat">' + c.cat + '</h3><ul class="dishes">' + hits.map(row).join('') + '</ul>';
      });
      lijst.innerHTML = html || '<p class="empty">Geen gerecht gevonden voor "' + esc(q) + '". Probeer een ander woord of nummer, of bekijk de rijsttafels hierboven.</p>';
      tabs.classList.add('dim');
      return;
    }
    tabs.classList.remove('dim');
    var c = kaart[current];
    lijst.innerHTML = '<ul class="dishes">' + c.items.map(row).join('') + '</ul>';
  }
  kaart.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.textContent = c.cat;
    b.addEventListener('click', function () {
      current = i; zoek.value = '';
      [].forEach.call(tabs.children, function (x, j) { x.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
      render();
    });
    tabs.appendChild(b);
  });
  zoek.addEventListener('input', render);
  render();
})();
