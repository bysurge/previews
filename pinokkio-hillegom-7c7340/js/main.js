(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var tidy = function (t) { return t.replace(/\s*,\s*/g, ', ').replace(/\s+/g, ' ').trim(); };

  // Mobile menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var open = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', open); document.body.classList.toggle('menu-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
  });

  // Header shadow after scrolling
  var bar = document.getElementById('top-bar');
  var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 20); document.body.classList.toggle('past-hero', window.scrollY > 650); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Menukaart
  var NOTES = {
    'Visgerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Vleesgerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Shoarma gerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Gegrilde vlees gerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Kip gerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Vegetarische gerechten': 'In het restaurant geserveerd met aardappelen en gegrilde groenten.',
    'Kindermenu': 'Geserveerd met friet en appelmoes. In het restaurant kunnen kinderen ook kiezen voor spare-ribs.',
    'Vegetarische pizza\'s': 'Op maandag is het pizzadag: alle pizza\'s € 12,00.',
    'Vleespizza\'s': 'Op maandag is het pizzadag: alle pizza\'s € 12,00.',
    'Vispizza\'s': 'Op maandag is het pizzadag: alle pizza\'s € 12,00.'
  };
  var SHORT = { 'Gegrilde vlees gerechten': 'Van de grill', 'Shoarma gerechten': 'Shoarma', 'Kip gerechten': 'Kip', 'Vegetarische gerechten': 'Vegetarisch', 'Vegetarische pizza\'s': 'Pizza vegetarisch', 'Vleespizza\'s': 'Pizza met vlees', 'Vispizza\'s': 'Pizza met vis', 'Koude voorgerechten': 'Koude voorgerechten', 'Warme voorgerechten': 'Warme voorgerechten' };
  var data = window.KAART || [];
  var cats = document.getElementById('k-cats'), list = document.getElementById('k-list'), title = document.getElementById('k-title');
  var note = document.getElementById('k-note'), q = document.getElementById('k-q'), empty = document.getElementById('k-empty');
  var cur = 0;
  data.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'pill'; b.textContent = SHORT[c.t] || c.t; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () {
      cur = i; q.value = ''; render();
      Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); });
    });
    cats.appendChild(b);
  });
  var isDrink = function (c) { return c === 'Dranken'; };
  var row = function (it, cat) {
    var d = isDrink(cat) && it[1].length > 40 ? '' : tidy(it[1]);
    return '<li><span class="nm">' + esc(tidy(it[0])) + '</span><span class="dots" aria-hidden="true"></span><span class="pr">€ ' + esc(it[2]) + '</span>' +
      (d ? '<span class="ds">' + esc(d) + '</span>' : '') + (cat ? '<span class="cat">' + esc(SHORT[cat] || cat) + '</span>' : '') + '</li>';
  };
  var norm = function (t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  function render() {
    var term = norm(q.value.trim());
    var html = '', n = 0;
    if (!term) {
      var c = data[cur];
      title.textContent = c.t;
      if (NOTES[c.t]) { note.textContent = NOTES[c.t]; note.hidden = false; } else note.hidden = true;
      html = c.items.map(function (it) { return row(it.slice(0, 2).concat(it[2]), isDrink(c.t) ? 'Dranken' : null).replace('<span class="cat">Dranken</span>', ''); }).join('');
      n = c.items.length;
    } else {
      title.textContent = 'Zoekresultaten';
      note.hidden = true;
      data.forEach(function (c) {
        c.items.forEach(function (it) {
          if (norm(it[0] + ' ' + it[1]).indexOf(term) > -1) { html += row(it, c.t); n++; }
        });
      });
    }
    list.innerHTML = html;
    empty.hidden = n > 0;
  }
  q.addEventListener('input', function () {
    Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', !q.value.trim() && j === cur); });
    render();
  });
  render();

  // Today's hours
  var d = new Date().getDay();
  var tr = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (tr) { tr.classList.add('today'); tr.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="vandaag">vandaag</span>'); }
})();
