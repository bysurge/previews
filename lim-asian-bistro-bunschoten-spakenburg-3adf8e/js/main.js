(function () {
  var D = window.LIM;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // mobiel menu
  var body = document.body, toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // hero slideshow (rustig, pauzeert bij reduced motion)
  var slides = document.querySelectorAll('.slide'), si = 0;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1) {
    setInterval(function () {
      slides[si].classList.remove('is-on');
      si = (si + 1) % slides.length;
      slides[si].classList.add('is-on');
    }, 6500);
  }

  // open vandaag
  var H = { 0: [900, 1260], 1: [900, 1260], 2: null, 3: [900, 1260], 4: [900, 1260], 5: [900, 1260], 6: [720, 1320] };
  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60; return h + ':' + (mm < 10 ? '0' : '') + mm; }
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
  var on = document.getElementById('open-now'), h = H[d];
  if (h && mins < h[0]) on.textContent = 'Vandaag open vanaf ' + fmt(h[0]);
  else if (h && mins < h[1]) on.textContent = 'Nu open tot ' + fmt(h[1]);
  else on.textContent = 'Nu gesloten';

  // gerechten renderen
  function dishHTML(it) {
    var long = it.p && it.p.length > 14;
    return '<li class="dish' + (it.nr ? '' : ' no-nr') + '" data-q="' + esc((it.nr + ' ' + it.n + ' ' + it.d).toLowerCase()) + '">' +
      (it.nr ? '<span class="nr">' + esc(it.nr) + '</span>' : '') +
      '<span class="n">' + esc(it.n) + '</span>' +
      (it.p ? '<span class="p' + (long ? ' long' : '') + '">' + esc(it.p) + '</span>' : '') +
      (it.d ? '<span class="d">' + esc(it.d) + '</span>' : '') + '</li>';
  }
  function sectionHTML(s) {
    return (s.note ? '<p class="panel-note">' + esc(s.note) + '</p>' : '') + '<ul class="dishes">' + s.items.map(dishHTML).join('') + '</ul>';
  }
  function tabbed(key, panelId) {
    var bar = document.querySelector('.tabs[data-menu="' + key + '"]'), panel = document.getElementById(panelId);
    var secs = D[key];
    secs.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'tab'); b.textContent = s.t;
      b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.addEventListener('click', function () {
        bar.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        panel.innerHTML = sectionHTML(s);
      });
      bar.appendChild(b);
    });
    panel.setAttribute('role', 'tabpanel');
    panel.innerHTML = sectionHTML(secs[0]);
  }
  tabbed('kaart', 'kaart-panel');
  tabbed('sushi', 'sushi-panel');

  // afhaallijst
  var list = document.getElementById('afh-list');
  list.innerHTML = D.afhaal.map(function (s, i) {
    return '<details class="afh-cat"' + (i === 0 ? ' open' : '') + '><summary>' + esc(s.t) + '<span class="cnt">' + s.items.length + ' gerechten</span></summary><div class="afh-body">' + sectionHTML(s) + '</div></details>';
  }).join('');
  var search = document.getElementById('afh-search'), none = document.getElementById('afh-none');
  var cats = list.querySelectorAll('.afh-cat');
  var openState = Array.prototype.map.call(cats, function (c) { return c.open; });
  search.addEventListener('input', function () {
    var q = search.value.trim().toLowerCase(), any = false;
    cats.forEach(function (c, ci) {
      var hits = 0;
      c.querySelectorAll('.dish').forEach(function (li) {
        var nr = (li.querySelector('.nr') || {}).textContent || '';
        var m = !q || (/^\d+[a-z]?$/.test(q) ? nr.toLowerCase() === q || nr.toLowerCase().indexOf(q) === 0 : li.dataset.q.indexOf(q) > -1);
        li.hidden = !m; if (m) hits++;
      });
      c.hidden = q && !hits;
      c.open = q ? hits > 0 : openState[ci];
      if (hits) any = true;
    });
    none.hidden = !q || any;
  });
})();
