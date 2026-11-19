(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var eur = function (p) { return '€ ' + p; };

  // Header
  var bar = document.getElementById('top-bar');
  var onScroll = function () { bar.classList.toggle('solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  // Afhaalkaart
  var groups = window.KAART || [], cats = [], cur = 0;
  groups.forEach(function (g) { g.items.forEach(function (c) { c.group = g.g; cats.push(c); }); });
  var wrap = document.getElementById('k-cats'), list = document.getElementById('k-list'), q = document.getElementById('k-q');

  groups.forEach(function (g) {
    var row = document.createElement('div'); row.className = 'k-group'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', g.g);
    row.innerHTML = '<span class="k-glabel">' + esc(g.g) + '</span>';
    g.items.forEach(function (c) {
      var i = cats.indexOf(c), b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.textContent = c.t; b.setAttribute('aria-pressed', i === cur);
      b.addEventListener('click', function () {
        cur = i; q.value = ''; render();
        wrap.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      });
      row.appendChild(b);
    });
    wrap.appendChild(row);
  });

  var item = function (it) {
    return '<li class="k-item"><span class="nr">' + esc(it[0]) + '</span><span class="nm">' + esc(it[1]) +
      (it[3] ? '<span class="ds">' + esc(it[3]) + '</span>' : '') + '</span><span class="pr">' + eur(esc(it[2])) + '</span></li>';
  };
  var labels = ['Klein', 'Groot', 'Super'];
  var table = function (c) {
    return '<table class="k-table"><thead><tr><th scope="col">Gerecht</th>' + labels.map(function (l) { return '<th scope="col">' + l + '</th>'; }).join('') +
      '</tr></thead><tbody>' + c.rows.map(function (r) {
        return '<tr><th scope="row">' + esc(r.n) + (r.d ? '<span class="ds">' + esc(r.d) + '</span>' : '') + '</th>' + r.c.map(function (x, j) {
          return x ? '<td data-l="' + labels[j] + '"><span><span class="nr">' + esc(x[0]) + '</span><span class="pr">' + eur(x[1]) + '</span></span></td>'
                   : '<td class="none" data-l="' + labels[j] + '"><span class="sr">niet beschikbaar</span>–</td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table>';
  };
  // Vlakke lijst voor zoeken
  var flat = function (c) {
    if (!c.tabel) return c.items;
    var out = [];
    c.rows.forEach(function (r) { r.c.forEach(function (x, j) { if (x) out.push([x[0], r.n + ' (' + labels[j].toLowerCase() + ')', x[1], r.d]); }); });
    return out.concat(c.extra || []);
  };
  var norm = function (t) { return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };

  function render() {
    var term = norm(q.value.trim());
    if (!term) {
      wrap.classList.remove('dim');
      var c = cats[cur];
      list.innerHTML = '<div class="k-cat"><h3>' + esc(c.t) + '</h3><span class="g">' + esc(c.group) + '</span></div>' +
        (c.note ? '<p class="k-note">' + esc(c.note) + '</p>' : '') +
        (c.tabel ? table(c) + '<ul class="k-ul">' + c.extra.map(item).join('') + '</ul>' : '<ul class="k-ul">' + c.items.map(item).join('') + '</ul>');
      return;
    }
    wrap.classList.add('dim');
    var isNum = /^\d+s?$/.test(term), html = '', n = 0;
    cats.forEach(function (c) {
      var hits = flat(c).filter(function (it) { return isNum ? norm(it[0]) === term : norm(it[1] + ' ' + (it[3] || '')).indexOf(term) > -1; });
      if (hits.length) { n += hits.length; html += '<p class="k-search-cat">' + esc(c.t) + '</p><ul class="k-ul">' + hits.map(item).join('') + '</ul>'; }
    });
    list.innerHTML = n ? html : '<p class="k-empty">Geen gerecht gevonden voor "' + esc(q.value) + '". Probeer een ander woord of nummer, of bel ons: 070 388 92 99.</p>';
  }
  q.addEventListener('input', render);
  render();

  // Openingstijden: vandaag markeren
  var row = document.querySelector('.hours tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');

  // Formulier: voorbeeld
  var form = document.getElementById('c-form'), msg = document.getElementById('form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel of mail ons gerust.';
  });
})();
