(function () {
  // Selectie zoals op de homepage van indianhut.nl (volledige kaart staat in de sitedish-shop)
  var M = {
    voor: [
      ['Dal soup', '4,99', 'Heerlijke soep op basis van linzen, citroen, curryblaadjes en kurkuma. Glutenvrij en veganistisch.', 'vegan'],
      ['Onion bhajee (3 st.)', '3,95', 'Knapperige Indiase pasteitjes van uien en kikkererwtenbeslag, met koriander- en zoete chutney.'],
      ['Pani puri (6 st.)', '7,50', 'Knapperige deegballetjes gevuld met aardappel en spruitjes, met pittig water of zoete chutney.'],
      ['Veg samosa (2 st.)', '4,99', 'Krokante pasteitjes met een gekruide vulling van aardappel en erwten, geserveerd met heerlijke sauzen.', 'veg'],
      ['Paneer pakora', '6,50', 'Indiase kaas gedoopt in gekruid beslag, geserveerd met romige munt en zoete saus.']
    ],
    tandoor: [
      ['Tandoori chicken', '17,95', 'Met bot. Malse kip, gemarineerd in speciale tandoorikruiden en gegrild in de kleioven.'],
      ['Chicken lasooni', '17,95', 'Malse stukjes kipfilet met knoflooksmaak, gekruid in kerriesaus en aan spiesjes gebakken in de kleioven.'],
      ['Lamb tikka tandoori', '19,95', 'Sappige stukjes lamsvlees, gemarineerd in traditionele Indiase kruiden en aangebraden in de kleioven.'],
      ['Chicken tikka tandoori', '17,95', 'Malse stukjes gemarineerde kipfilet, aan spiesjes gebakken in de kleioven.'],
      ['Lamb sheekh kabab', '19,95', 'Gemalen lamsvlees met gember, knoflook, aromatische kruiden en koriander. Gegrild in de kleioven.'],
      ['Chicken sheekh kabab', '18,95', 'Sappige stukjes kip, gemarineerd met traditionele Indiase kruiden en aangebraden in de kleioven.']
    ],
    vis: [
      ['King prawn jhalfrezi', '21,95', 'Grote garnalen bereid in romige kokossaus, rozijnen en geschaafde amandelen en cashewnoten.'],
      ['King prawn vindaloo', '21,95', 'Populair en zeer pittig gerecht uit Goa met tijgergarnalen en aardappel in specerijen uit Zuid-India.', 'hot'],
      ['Fish jhalfrezi', '19,95', 'Authentiek Indiaas visgerecht, gebakken met paprika, ui, gember, tomaat, kruiden en specerijen.'],
      ['Fish masala', '19,95', 'Visfilet bereid in een traditionele kruidenmelange met medium hete currysaus.'],
      ['Fish madras', '19,95', 'Traditionele Zuid-Indiase viscurry met hete currysaus, citroen en groene peper.']
    ],
    lam: [
      ['Lamb curry', '19,95', 'Lamsvlees bereid in milde Indiase currysaus met verse tomaat en koriander.', 'mild'],
      ['Lamb tikka masala', '19,95', 'Mals lamsvlees gemarineerd in knoflook, cashewnoten en kruiden. Gegrild en gekookt in masalasaus.', 'mild'],
      ['Lamb kadahi', '19,95', 'Traditioneel, mild pittig gerecht, gestoofd in een sappige mix van vers gemalen kruiden.'],
      ['Lamb korma', '19,95', 'Mals lamsvlees bereid in romige kokossaus, rozijnen en geschaafde amandelen en cashewnoten.', 'mild / zoet'],
      ['Lamb rogan josh', '19,95', 'Lamsfilet gestoofd met ui, knoflook, gember, chili, venkel, koriander, kardemom, kaneel en tomaat.'],
      ['Palak gosht', '19,95', 'Fijne stukjes lam bereid met verse spinazie en mosterdblad in gemengde kerriekruiden.']
    ],
    biryani: [
      ['Vegetable biryani', '19,95', 'Verse seizoensgroenten met Indiase specerijen en kruiden in een melange van basmatirijst.', 'veg'],
      ['Lamb dum biryani', '19,95', 'Lamsvlees en basmatirijst gekookt met verse kruiden en specerijen. Geserveerd met muntyoghurt-raita.'],
      ['Chicken dum biryani', '19,95', 'Kip en geurige basmatirijst gekookt met verse kruiden en specerijen. Geserveerd met muntyoghurt-raita.'],
      ['King prawn biryani', '21,95', 'Gamba’s gekookt met heerlijke basmatirijst in een melange van specerijen.']
    ]
  };
  var TAG = { veg: 'vegetarisch', vegan: 'veganistisch', hot: 'zeer pittig', mild: 'mild', 'mild / zoet': 'mild en zoet' };
  document.querySelectorAll('[data-cat]').forEach(function (p) {
    p.innerHTML = '<ul class="dishes">' + M[p.getAttribute('data-cat')].map(function (d) {
      return '<li><div class="d-top"><h3>' + d[0] + '</h3><span class="d-price">€ ' + d[1] + '</span></div>' +
        '<p>' + d[2] + '</p>' + (d[3] ? '<span class="tag tag-' + d[3].replace(/\W+/g, '') + '">' + TAG[d[3]] + '</span>' : '') + '</li>';
    }).join('') + '</ul>';
  });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  var btn = document.querySelector('.menu-toggle');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
