(function () {
  // mobiel menu
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setNav(false); });

  // open/gesloten (tijden van hun site)
  var hours = { 0: [16, 0, 20, 0], 1: null, 2: [16, 0, 20, 0], 3: [12, 0, 20, 0], 4: [12, 0, 20, 0], 5: [11, 30, 20, 0], 6: [12, 0, 20, 0] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var st = document.getElementById('status'), h = hours[d];
  function t(hh, mm) { return hh + ':' + (mm < 10 ? '0' : '') + mm; }
  if (!h) { st.textContent = 'Vandaag gesloten, dinsdag weer open'; st.classList.add('closed'); }
  else if (m < h[0] * 60 + h[1]) { st.textContent = 'Vandaag open vanaf ' + t(h[0], h[1]); }
  else if (m < h[2] * 60 + h[3]) { st.textContent = 'Nu open, tot ' + t(h[2], h[3]); st.classList.add('open'); }
  else { st.textContent = 'Nu gesloten, vandaag open tot ' + t(h[2], h[3]); st.classList.add('closed'); }

  // belknop onderin op telefoon, zodra de hero uit beeld is
  var callbar = document.querySelector('.callbar');
  var hero = document.querySelector('.hero');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { callbar.classList.toggle('show', !es[0].isIntersecting); }, { threshold: 0.15 }).observe(hero);
  }

  // menukaart
  var data = window.PARKSTAD_MENU || [];
  var tabs = document.getElementById('menuTabs');
  var board = document.getElementById('menuBoard');
  var search = document.getElementById('menuSearch');
  var current = data[0] && data[0].id;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function eur(p) { return /^vanaf /.test(p) ? 'vanaf € ' + p.slice(6) : '€ ' + p; }
  function itemHtml(cat, it) {
    var price;
    if (Array.isArray(it[2])) {
      price = '<span class="prices">' + it[2].map(function (p) { return p ? '<span class="price">' + eur(p) + '</span>' : '<span class="price na" aria-hidden="true">–</span>'; }).join('') + '</span>';
    } else price = '<span class="price">' + eur(it[2]) + '</span>';
    return '<li class="item"><span class="num">' + it[0] + '</span><span class="name">' + esc(it[1]) + '</span>' + price +
      (it[3] ? '<span class="desc">' + esc(it[3]) + '</span>' : '') + '</li>';
  }
  function catHtml(cat, items) {
    return '<div class="cat' + (cat.cols ? ' has-cols' : '') + '"><div class="cat-head"><h3>' + esc(cat.name) + '</h3>' +
      (cat.cols ? '<span class="cat-cols">' + cat.cols.map(function (c) { return '<span>' + esc(c) + '</span>'; }).join('') + '</span>' : '') + '</div>' +
      (cat.note ? '<p class="cat-note">' + esc(cat.note) + '</p>' : '') +
      '<ul class="items">' + items.map(function (it) { return itemHtml(cat, it); }).join('') + '</ul></div>';
  }
  function render() {
    var q = search.value.trim().toLowerCase();
    if (q) {
      var html = '';
      data.forEach(function (cat) {
        var hits = cat.items.filter(function (it) {
          return /^\d+$/.test(q) ? String(it[0]) === q || String(it[0]).indexOf(q) === 0 : (it[1] + ' ' + (it[3] || '') + ' ' + cat.name).toLowerCase().indexOf(q) > -1;
        });
        if (hits.length) html += catHtml(cat, hits);
      });
      board.innerHTML = html || '<p class="empty">Niets gevonden voor “' + esc(q) + '”. Probeer een ander woord of nummer.</p>';
    } else {
      var cat = data.filter(function (c) { return c.id === current; })[0];
      board.innerHTML = catHtml(cat, cat.items);
    }
    Array.prototype.forEach.call(tabs.children, function (b) {
      b.setAttribute('aria-selected', !q && b.dataset.id === current ? 'true' : 'false');
    });
  }
  data.forEach(function (cat) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.setAttribute('role', 'tab'); b.dataset.id = cat.id;
    b.textContent = cat.name;
    b.addEventListener('click', function () { current = cat.id; search.value = ''; render(); });
    tabs.appendChild(b);
  });
  search.addEventListener('input', render);
  if (current) render();
})();
