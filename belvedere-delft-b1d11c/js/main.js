(function () {
  'use strict';
  var fmt = function (n) { return n.toFixed(2).replace('.', ','); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- Tap list (bierkaart, november 2026) ---------- */
  var TAP_VAST = [
    ['Stella Artois', 'Lager', 5, [[25, 4.5], [50, 8.5]]],
    ['Leffe Blonde', 'Blond', 6.6, [[25, 6.6]]],
    ['Leffe Brune', 'Bruin', 6.5, [[25, 6.6]]],
    ['Blanche de Namur', 'Witbier', 4.5, [[25, 5], [50, 9]]],
    ['Bolleke De Koninck', 'Pale ale', 5.2, [[25, 5.2]]],
    ['Vedett Extra IPA', 'IPA', 5.5, [[25, 5.2]]],
    ['La Chouffe Blonde', '', 8, [[25, 6.2]]],
    ['Duvel', '', 8.5, [[25, 6.2]]],
    ['Karmeliet Grand Cru Brut', '', 10, [[25, 7.5]]],
    ['Kasteel Rouge', 'Fruitbier', 8, [[25, 6.5]]],
    ['Maneblusser', 'Blond', 5.8, [[25, 5.2]]]
  ];
  var TAP_WISSEL = [
    ['Cuvée des Trolls', '', 7, [[25, 5.6]]],
    ['Kwaremont Bokbier', 'Bokbier', 6.6, [[25, 5.8]]],
    ['Karmeliet Grand Cru Brut', '', 10, [[25, 7.5]]],
    ['Leute Bokbier', 'Bokbier', 7.5, [[33, 6.5]]],
    ['Chouffe Bok', 'Bokbier', 6.7, [[25, 6.3]]],
    ['Averbode Extra', '', 4.8, [[25, 5]]],
    ['Maneblusser', 'Blond', 5.8, [[25, 5.2]]]
  ];
  function tapRow(t) {
    var meta = (t[1] ? esc(t[1]) + ', ' : '') + String(t[2]).replace('.', ',') + '%';
    var prices = t[3].map(function (p) { return '<span><small>' + p[0] + ' cl</small> ' + fmt(p[1]) + '</span>'; }).join('');
    return '<li><span class="tap-name">' + esc(t[0]) + '</span><span class="tap-meta">' + meta + '</span><span class="tap-price">' + prices + '</span></li>';
  }
  var tv = document.getElementById('tap-vast'), tw = document.getElementById('tap-wissel');
  if (tv) tv.innerHTML = TAP_VAST.map(tapRow).join('');
  if (tw) tw.innerHTML = TAP_WISSEL.map(tapRow).join('');

  /* ---------- Bottles: search, filter, sort ---------- */
  var CATS = ['Pils & lager', '75 cl om te delen', 'Trappisten', 'Blond', 'IPA', 'Dubbel', 'Tripel & zwaar blond', 'Saison', 'Fruit, geuze & kriek', 'Witbier', 'Amber', 'Porter & stout', 'Gerstewijn', 'Vlaams bruin', 'Alcoholvrij & -arm', 'Cider', 'Wisselfles'];
  var STYLE = {
    'Pilsner - Other': 'Pilsener', 'Lager - IPL (India Pale Lager)': 'India pale lager', 'Lager - Pale': 'Lager',
    'Belgian Tripel': 'Tripel', 'Belgian Strong Golden Ale': 'Sterk blond', 'Belgian Quadrupel': 'Quadrupel',
    'Belgian Dubbel': 'Dubbel', 'Belgian Strong Dark Ale': 'Sterk donker', 'Pale Ale - Belgian': 'Belgische pale ale',
    'Belgian Enkel': 'Enkel', 'Belgian Blonde': 'Blond', 'Historical Beer - Other': 'Historisch bier',
    'IPA - Belgian': 'Belgische IPA', 'IPA - Imperial': 'Imperial IPA', 'IPA - American': 'Amerikaanse IPA',
    'IPA - New England': 'New England IPA', 'IPA - White': 'Witte IPA', 'IPA - Other': 'IPA',
    'Brown Ale - Belgian': 'Bruin', 'Historical Beer - Gruit': 'Gruitbier', 'Honey Beer': 'Honingbier',
    'Farmhouse Ale - Saison': 'Saison', 'Fruit Beer': 'Fruitbier', 'Lambic - Kriek': 'Kriek', 'Shandy': 'Radler',
    'Wheat Beer - Fruited': 'Fruitig witbier', 'Lambic - Gueuze': 'Oude geuze', 'Wheat Beer - Witbier': 'Witbier',
    'Specialty Grain': 'Speciaal graan', 'Porter - Smoked': 'Gerookte porter', 'Stout - Belgian': 'Stout',
    'Sour - Flanders Red Ale': 'Vlaams rood', 'Cider - Traditional': 'Cider', 'Cider - Dry': 'Droge cider'
  };
  var data = window.BOTTLES || { beers: [] };
  var beers = data.beers.map(function (b, i) {
    b.idx = i; b.sn = STYLE[b.s] || b.s;
    b.hay = [b.n, b.b, b.p, b.r, b.s, b.sn, CATS[b.c]].join(' ').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    return b;
  });
  var state = { q: '', cat: -1, sort: 'kaart' };
  var list = document.getElementById('bottle-list');
  var chipsEl = document.getElementById('beer-chips');
  var countEl = document.getElementById('bottle-count');
  var search = document.getElementById('beer-search');
  var sortSel = document.getElementById('beer-sort');

  if (chipsEl) {
    var chips = [['-1', 'Alles']].concat(CATS.map(function (c, i) { return [String(i), c]; }));
    chipsEl.innerHTML = chips.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c[0] + '" aria-pressed="' + (c[0] === '-1') + '">' + esc(c[1]) + '</button>';
    }).join('');
    chipsEl.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      state.cat = +b.dataset.cat;
      chipsEl.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      render();
    });
  }

  function beerRow(b) {
    var abv = String(b.a).replace('.', ',') + '%';
    return '<li class="bottle">' +
      '<div class="b-main"><span class="b-name">' + esc(b.n) + '</span>' +
      '<span class="b-brew">' + esc(b.b) + ', ' + esc(b.p) + '</span></div>' +
      '<div class="b-style">' + esc(b.sn) + '</div>' +
      '<div class="b-abv">' + abv + '</div>' +
      '<div class="b-vol">' + b.v + ' cl' + (b.t === 'tap' ? ' tap' : '') + '</div>' +
      '<div class="b-price">' + fmt(b.e) + '</div></li>';
  }

  function render() {
    if (!list) return;
    var q = state.q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
    var terms = q ? q.split(/\s+/) : [];
    var res = beers.filter(function (b) {
      if (state.cat >= 0 && b.c !== state.cat) return false;
      return terms.every(function (t) { return b.hay.indexOf(t) !== -1; });
    });
    countEl.textContent = res.length === 1 ? '1 bier' : res.length + ' bieren';
    if (!res.length) {
      list.innerHTML = '<div class="empty"><p>Geen bier gevonden voor &lsquo;' + esc(state.q) + '&rsquo;' + (state.cat >= 0 ? ' in ' + esc(CATS[state.cat]) : '') + '. Probeer een brouwerij, een stijl of een andere soort.</p><button type="button" class="btn btn-line" id="reset-beer">Toon alle bieren</button></div>';
      document.getElementById('reset-beer').addEventListener('click', function () {
        state.q = ''; state.cat = -1; search.value = '';
        chipsEl.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', String(x.dataset.cat === '-1')); });
        render();
      });
      return;
    }
    if (state.sort === 'kaart') {
      var html = '';
      CATS.forEach(function (c, i) {
        var g = res.filter(function (b) { return b.c === i; });
        if (!g.length) return;
        html += '<section class="b-group"><h4>' + esc(c) + ' <span>' + g.length + '</span></h4><ul>' + g.map(beerRow).join('') + '</ul></section>';
      });
      list.innerHTML = html;
      var full = state.cat < 0 && !terms.length;
      list.classList.toggle('is-collapsed', full && !state.expanded);
      if (full && !state.expanded) {
        list.insertAdjacentHTML('beforeend', '<div class="more"><button type="button" class="btn btn-amber" id="more-beer">Toon alle ' + res.length + ' flessen</button></div>');
        document.getElementById('more-beer').addEventListener('click', function () { state.expanded = true; render(); });
      }
    } else {
      list.classList.remove('is-collapsed');
      var sorted = res.slice().sort(function (a, b) {
        if (state.sort === 'prijs') return a.e - b.e || a.n.localeCompare(b.n);
        if (state.sort === 'sterk') return b.a - a.a || a.n.localeCompare(b.n);
        return a.n.localeCompare(b.n, 'nl');
      });
      list.innerHTML = '<section class="b-group"><ul>' + sorted.map(beerRow).join('') + '</ul></section>';
    }
  }
  if (search) search.addEventListener('input', function () { state.q = search.value; render(); });
  if (sortSel) sortSel.addEventListener('change', function () { state.sort = sortSel.value; render(); });
  render();

  /* ---------- Opening hours: highlight today ---------- */
  var HOURS = { 1: [16, 24], 2: [16, 24], 3: [11, 24], 4: [11, 25], 5: [11, 25], 6: [11, 25], 0: [12, 24] };
  var now = new Date(), day = now.getDay();
  var row = document.querySelector('#hours-table tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var todayEl = document.getElementById('today');
  if (todayEl) {
    var h = HOURS[day], hr = now.getHours() + now.getMinutes() / 60;
    var prev = HOURS[(day + 6) % 7];
    var lbl = function (x) { return (x >= 24 ? x - 24 : x).toString().padStart(2, '0') + ':00'; };
    if (hr < prev[1] - 24) todayEl.textContent = 'Nu open, tot ' + lbl(prev[1]);
    else if (hr >= h[0]) todayEl.textContent = 'Nu open, tot ' + lbl(h[1]);
    else todayEl.textContent = 'Vandaag open vanaf ' + lbl(h[0]);
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle'), mnav = document.getElementById('mobile-nav');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
      mnav.hidden = open;
    });
    mnav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { mnav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); } });
  }

  /* ---------- Header state ---------- */
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Reservation dialog + sample forms (nothing is sent) ---------- */
  var dlg = document.getElementById('res-dialog');
  document.querySelectorAll('.open-res').forEach(function (b) {
    b.addEventListener('click', function () { if (dlg && dlg.showModal) dlg.showModal(); else location.hash = 'reserveren'; });
  });
  if (dlg) {
    dlg.querySelector('.dlg-close').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }
  document.querySelectorAll('.sample-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg'); if (m) m.hidden = false;
    });
  });
})();
