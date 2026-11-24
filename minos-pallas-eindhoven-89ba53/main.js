(function () {
  // ---------- menu data (from their menukaart + dessertkaart, 2025) ----------
  var M = [
    { tab: 'Dips & starters', groups: [
      { t: 'Pre-starters', items: [
        ['Tzatziki', '8,50', 'Griekse yoghurt - komkommer - olijfolie - verse knoflook'],
        ['Tirosalata', '9,50', 'Fetamousse'],
        ['Melitzanosalata', '9,00', 'Auberginemousse'],
        ['Taramosalata', '9,00', 'Viskuitmousse'],
        ['Tonosalata', '11,00', 'Tonijnsalade'],
        ['Tapenades Minos', '15,50', 'Keur van bovenstaande dipjes'],
        ['Elies ke piperies', '7,00', 'Olijven en groene pepers'],
        ['Kruidenboter', '4,75', ''],
        ['Pitabrood', '2,75', '']
      ]},
      { t: 'Soep', items: [
        ['Domatosoupa', '8,00', 'Tomaat - prei - kaas - room'],
        ['Soupa imeras', '9,00', 'Dagelijks wisselende soep']
      ]},
      { t: 'Salades', items: [
        ['Choriathiki', '12,50', 'Griekse salade - feta - olijfolie'],
        ['Salata tou Kaisara', '15,50', 'Groene salade - gegrilde kipfilet - Parmezan - croutons - Caesardressing']
      ]}
    ]},
    { tab: 'Voorgerechten', groups: [
      { t: 'Koude voorgerechten', items: [
        ['Bruschetta me domata', '9,75', 'Toast - tomaat - basilicum - knoflook - feta'],
        ['Bruschetta me piperia Florinis', '11,50', 'Toast - geroosterde paprika - feta - knoflook'],
        ['Feta', '10,50', 'Griekse schapenkaas'],
        ['Carpaccio truffelmayonaise', '17,00', 'Dun gesneden ossenhaas - pijnboompitten - rucola - Parmesan - truffelmayo'],
        ['Solomos kapnistos', '14,00', 'Gerookte zalm - toast - tarama - kappertjes - ui - citroendressing'],
        ['Garithosalata', '13,00', 'Garnaaltjes - appel - whiskeysaus']
      ]},
      { t: 'Warme voorgerechten', items: [
        ['Feta saganaki', '11,50', 'Gebakken feta - honing - sesam'],
        ['Feta fournou', '11,50', 'Feta uit de oven - tomaat - ui - olijf - groene pepers'],
        ['Halloumi', '12,00', 'Gegrilde halloumikaas - honing - sesam'],
        ['Courgette frietjes', '10,00', 'Gebakken courgette - tzatziki'],
        ['Kolokithokeftedes', '11,00', 'Courgette/fetaballetjes - tzatziki - pita'],
        ['Pastitsio me spanaki', '10,50', 'Pastablad - wilde spinazie - champignons - feta'],
        ['Saligaria', '16,50', 'Escargots - ouzoroom'],
        ['Dolmadakia', '11,50', 'Wijnbladeren - gehakt - rijst - citroenroom'],
        ['Octapodi', '17,50', 'Octopus - olijfolie - balsamico'],
        ['Keftedakia', '10,50', 'Gehaktballetjes - komijn - tomaat'],
        ['Garides saganaki', '16,50', "Gamba's - tomaat - feta"],
        ['Garides me skordo', '16,00', "Gamba's - knoflookolie"],
        ['Kochilia', '19,75', 'Coquilles Saint Jacques - groentebouquet - balsamicoroom'],
        ['Piperia Florinis', '10,50', 'Geroosterde paprika - feta - knoflook - balsamico'],
        ['Gyros wrap', '10,50', 'Gyros - groentebouquet - tzatziki - chili'],
        ['Manitaria ala krem', '10,50', 'Gebakken champignons - mosterdroom'],
        ['Kalamaria tiganita', '12,50', 'Gebakken inktvis - knoflook - tzatziki']
      ]}
    ]},
    { tab: 'Van de grill', groups: [
      { t: 'Grillspecialiteiten', items: [
        ['Bifteki', '23,50', 'Gekruid gehakt - feta - gyros'],
        ['Gyros', '21,50', 'Geroosterde stukjes varkensvlees - pita'],
        ['Souflaki', '22,50', 'Souflaki - gyros'],
        ['Souzouki', '22,50', 'Souzouki - gyros'],
        ['Ermis', '24,50', 'Souflaki - souzouki - kipfilet - gyros'],
        ['Minos', '26,50', 'Souflaki - souzouki - kipfilet - lamsrack - gyros'],
        ['Orpheas', '32,50', 'Ossenhaas - peperroom - puree'],
        ['Roumelis', '30,50', 'Gegrilde lamsracks']
      ]},
      { t: 'Souflaki specials', items: [
        ['Souflaki Minos', '26,50', 'Varkenshaasspies - paprika - ui - champignonsaus - gyros'],
        ['Souflaki Fedra', '29,50', 'Ossenhaasspies - paprika - ui - pepersaus - gyros'],
        ['Souflaki Thesseus', '24,50', 'Kipfiletspies - paprika - ui - mosterdmayo - gyros'],
        ['Souflaki trio', '29,50', 'Ossenhaasspies - varkenshaasspies - kipfiletspies - gyros - sausjes']
      ]}
    ]},
    { tab: 'Hoofdgerechten', groups: [
      { t: 'Traditionele gerechten', items: [
        ['Pastitsada', '25,50', 'Kalfssucade - tomaat - laurier - Mavrodaphnewijn - kritharaki (Griekse pasta)'],
        ['Arnaki kokinisto', '25,50', 'Lamsschenkel - tomaat - knoflook - selderij - aardappelpuree'],
        ['Stifado', '25,50', 'Gemarineerd wild - sjalotjes - kruidnagel - kaneel - rode wijn - aardappelpuree'],
        ['Mousakas', '22,50', 'Gekruid gehakt - aubergines - aardappelen - kaas - bechamelsaus']
      ]},
      { t: 'Pangerechten', items: [
        ['Tiganaki kotopoulo', '23,50', 'Kipfilet - feta - olijven - roomjus - puree'],
        ['Tiganaki chirino', '25,50', 'Varkenshaas - champignons - roomjus'],
        ['Tiganaki Minos', '28,50', 'Ossenhaas - groentebouquet - wijnjus - puree'],
        ['Gyros fournou', '22,50', 'Gyros - champignonsaus - gesmolten kaas']
      ]},
      { t: 'Vis en schaaldieren', items: [
        ['Neraida', '29,50', "Gamba's - witte wijn - knoflook - garnaaltjes - kreeftenjus"],
        ['Garides sto gril', '28,50', "Gamba's van de grill"],
        ['Solomos papillotte', '26,50', 'Zalmfilet uit de oven - tomaat - knoflook - ui - witte wijn'],
        ['Bakaliaros', '27,50', 'Kabeljauwfilet - aardappelpuree - witte wijnjus'],
        ['Tsipoura', '26,50', 'Dorade royal - olijfolie - citroen']
      ]},
      { t: "Pasta's", items: [
        ['Makaronada me kotopoulo', '22,50', 'Pasta - kipfilet - groentebouquet - mosterdroom - Parmesan'],
        ['Makaronada me solomo', '25,50', 'Pasta - zalm - room - wodka'],
        ['Makaronada me garides', '28,50', "Pasta - gamba's - tomaat - witte wijn - knoflook"]
      ]},
      { t: 'Vegetarische gerechten', items: [
        ['Pastitsio me spanaki', '22,50', 'Pastablad - wilde spinazie - champignons - feta'],
        ['Makaronada Mediterranea', '22,50', 'Pasta - mediterrane groenten - tomatensaus - knoflook - feta']
      ]}
    ]},
    { tab: "Plateau's & kids", groups: [
      { t: "Plateau's voor 2 of meer personen", items: [
        ['Philoxenia', '32,50 p.p.', 'Ossenhaasspies - varkenshaasspies - kipfiletspies - lamsracks - gyros - pepersaus'],
        ['Minos Pallas', '28,50 p.p.', 'Souflaki - souzouki - kipfilet - lamsracks - gyros - champignonsaus'],
        ['Surf & turf', '36,50 p.p.', "Ossenhaasspies - lamsracks - gyros - gamba's - zalm"]
      ]},
      { t: "Kindermenu's (tot 12 jaar)", items: [
        ['Apollo', '13,50', 'Kipfilet - frietjes - appelmoes - mayo'],
        ['Zeus', '13,50', 'Inktvisringetjes - frietjes - appelmoes - mayo'],
        ['Hercules', '13,50', 'Gyros - frietjes - appelmoes - mayo'],
        ['Pegasus', '13,50', 'Pasta - gehaktballetjes - tomatensaus - feta'],
        ['Mickey', '13,50', 'Frikandel - frietjes - appelmoes - mayo'],
        ['Minnie', '13,50', 'Souzouki - frietjes - appelmoes - mayo']
      ]}
    ]},
    { tab: 'Desserts', groups: [
      { t: 'Desserts', items: [
        ['Giaourti à la Greque', '8,50', 'Griekse natuuryoghurt - honing - walnoten'],
        ['Crème brûlée', '9,50', 'Vanilleroom - gekarameliseerde suiker - ginger - karameljus'],
        ['Souffle sokolatas', '8,50', 'Soufflé - chocolade - warm'],
        ['Baklavas', '9,00', 'Philodeeg - walnoten - siroop - vanilleijs'],
        ['Minos special', '10,00', 'Cassis- en citroensorbetijs - seizoensfruit - slagroom'],
        ['Tiramisu', '9,00', 'Mascarpone - lange vingers - espresso - Amaretto']
      ]},
      { t: ' ', items: [
        ['Pagoto sokolata', '8,50', 'Vanilleijs - chocoladesaus - slagroom'],
        ['Sokolatina', '10,00', 'Griekse chocoladetaart'],
        ['Cheesecake', '9,50', 'Roomkaas - biscuit - vruchtencompote'],
        ['Dessert Minos', '18,50', 'Een selectie van onze desserts'],
        ['Pediko pagoto', '6,50', 'Kinderijsje']
      ]}
    ]},
    { tab: 'Koffie & digestief', groups: [
      { t: 'Koffie & thee', items: [
        ['Thee', '3,50'], ['Verse muntthee', '4,50'], ['Koffie', '3,50'], ['Decafé', '3,75'],
        ['Espresso', '3,50'], ['Espresso decafé', '3,75'], ['Dubbele espresso', '5,00'],
        ['Cappuccino', '4,00'], ['Cappuccino decafé', '4,25'], ['Koffie verkeerd', '4,00'],
        ['Koffie verkeerd decafé', '4,25'], ['Latte macchiato', '4,75'], ['Ristretto', '3,50'],
        ['Griekse koffie', '4,00'], ['Freddo espresso', '5,00'], ['Freddo cappuccino', '5,50'],
        ['Warme chocomel', '4,00'], ['Warme chocomel met slagroom', '4,75']
      ]},
      { t: 'Speciale koffies', items: [
        ['Frappe pagoto', '8,50', 'IJskoffie - vanilleijs - slagroom'],
        ['Frappe Baileys', '10,50', 'IJskoffie - vanilleijs - Baileys - slagroom'],
        ['Café Frangelico', '10,50', 'Espresso - vanilleijs - Frangelico - slagroom'],
        ['Café Santorini', '10,50', 'Espresso - vanilleijs - Ouzo - slagroom'],
        ['Corfu Coffee', '9,50', 'Koffie - Kumquat - slagroom'],
        ['Minos Coffee', '9,50', 'Koffie - Metaxa - slagroom'],
        ['Irish Coffee', '9,50', 'Koffie - Jameson - bruine suiker - slagroom'],
        ['French Coffee', '9,50', 'Koffie - Grand Marnier - slagroom'],
        ['Italian Coffee', '9,50', 'Koffie - Amaretto - slagroom'],
        ['Spanish Coffee', '9,50', 'Koffie - Tia Maria - slagroom']
      ]},
      { t: 'Griekse likeuren', items: [
        ['Kumquat', '6,50', 'Mandarijnenlikeur'], ['Banana', '6,50', 'Bananenlikeur'],
        ['Masticha - Skinos', '8,00', 'Dennenharslikeur'], ['Tentura - Vantana', '7,50', 'Kaneellikeur']
      ]},
      { t: 'Griekse cognac', items: [
        ['Metaxa 5*', '7,50'], ['Metaxa 7*', '8,00'], ['Metaxa Grande Fine', '11,00'], ['Metaxa Private Reserve', '12,50']
      ]},
      { t: 'Likeuren', items: [
        ['Amaretto', '7,00'], ['Baileys', '7,00'], ['Cointreau', '7,50'], ['Drambuie', '7,50'],
        ['Frangelico', '7,50'], ['Grand Marnier', '7,50'], ['Licor 43', '7,50'], ['Tia Maria', '7,00'],
        ['Limoncello', '7,00'], ['Sambuca', '7,00'], ['Safari', '6,75'], ['D.O.M. Benedictine', '7,50']
      ]},
      { t: 'Cognac', items: [
        ['Calvados', '7,00'], ['Armagnac V.S.O.P.', '7,75'], ['Courvoisier V.S.O.P.', '8,50'],
        ['Remy Martin V.S.O.P.', '8,50'], ['Remy Martin X.O.', '17,50'],
        ['Hennessy V.S.O.P.', '9,50'], ['Hennessy X.O.', '19,50']
      ]}
    ]}
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  var tabsEl = document.getElementById('menu-tabs');
  var panelsEl = document.getElementById('menu-panels');
  if (tabsEl && panelsEl) {
    var tabsHtml = '', panelsHtml = '';
    M.forEach(function (sec, i) {
      tabsHtml += '<button type="button" role="tab" id="tab-' + i + '" aria-controls="panel-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(sec.tab) + '</button>';
      panelsHtml += '<div class="panel" role="tabpanel" id="panel-' + i + '" aria-labelledby="tab-' + i + '"' + (i === 0 ? '' : ' hidden') + '>';
      sec.groups.forEach(function (g) {
        panelsHtml += '<div class="group' + (g.t === ' ' ?' cont' : '') + '"><h3>' + esc(g.t) + '</h3>';
        g.items.forEach(function (it) {
          panelsHtml += '<div class="dish"><span class="n">' + esc(it[0]) + '</span><span class="p">€ ' + esc(it[1]) + '</span>' + (it[2] ? '<span class="d">' + esc(it[2]) + '</span>' : '') + '</div>';
        });
        panelsHtml += '</div>';
      });
      panelsHtml += '</div>';
    });
    tabsEl.innerHTML = tabsHtml;
    panelsEl.innerHTML = panelsHtml;
    var tabs = tabsEl.querySelectorAll('[role=tab]');
    function select(i) {
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById('panel-' + j).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(i); t.scrollIntoView({ block: 'nearest', inline: 'nearest' }); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          select(n); tabs[n].focus();
        }
      });
    });
  }

  // ---------- header + mobile menu ----------
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var toggle = document.querySelector('.menu-toggle');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  document.querySelectorAll('#nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // ---------- hero slideshow ----------
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var slides = document.querySelectorAll('.slide');
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-active');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-active');
    }, 6500);
  }

  // ---------- today in opening hours ----------
  var row = document.querySelector('#hours tr[data-day="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');

  // ---------- reveal on scroll (once) ----------
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // ---------- example form ----------
  var form = document.getElementById('reserve-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-note').textContent = 'Dit is een voorbeeld: er is niets verstuurd. In de echte site komt uw reservering direct bij Minos Pallas binnen.';
  });
})();
