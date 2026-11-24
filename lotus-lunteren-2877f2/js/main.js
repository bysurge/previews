(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* Afhaalkaart */
  var data = window.AFHAAL || [];
  var list = document.getElementById('afh-list'), cats = document.getElementById('afh-cats');
  var q = document.getElementById('afh-q'), count = document.getElementById('afh-count');
  var cur = 0;

  data.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'pill'; b.textContent = c.t; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () { pick(i); });
    cats.appendChild(b);
  });

  function pick(i) {
    cur = i; q.value = ''; render();
    Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); });
  }

  var chili = function (n) { return n ? '<span class="chili" title="' + ['', 'zacht pikant', 'pikant', 'zeer pikant'][n] + '">' + '●●●'.slice(0, n) + '<span class="sr"> ' + ['', 'zacht pikant', 'pikant', 'zeer pikant'][n] + '</span></span>' : ''; };
  var row = function (it, c) {
    var p = esc(it[3]).replace(/^(\d+,\d\d)/, '€ $1');
    return '<li class="afh-item"><span class="nr">' + esc(it[0]) + '</span><span class="body"><span class="nm">' + esc(it[1]) + chili(it[4]) +
      (c.r ? '<span class="rice-dot" title="inclusief witte rijst"></span>' : '') + '</span>' +
      (it[2] ? '<span class="ds">' + esc(it[2]) + '</span>' : '') + '</span><span class="pr">' + p + '</span></li>';
  };
  var block = function (c, items) {
    return '<h3 class="afh-cat">' + esc(c.t) + '</h3>' + (c.note ? '<p class="afh-note">' + esc(c.note) + '</p>' : '') +
      '<ul class="afh-ul">' + items.map(function (it) { return row(it, c); }).join('') + '</ul>';
  };
  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  function render() {
    var term = norm(q.value.trim());
    if (!term) {
      list.innerHTML = block(data[cur], data[cur].items);
      count.textContent = '';
      cats.classList.remove('dim');
      return;
    }
    cats.classList.add('dim');
    var html = '', n = 0, isNum = /^\d+[a-z]?$/.test(term);
    data.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return isNum ? it[0].split(' / ').some(function (x) { return x === term || x.indexOf(term) === 0; }) : norm(it[1] + ' ' + it[2]).indexOf(term) > -1;
      });
      if (hits.length) { n += hits.length; html += block(c, hits); }
    });
    list.innerHTML = html || '<p class="afh-empty">Geen gerecht gevonden. Zoek op een nummer (bijv. 74) of een woord (bijv. babi, garnalen, vegetarisch).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  q.addEventListener('input', render);
  render();

  Array.prototype.forEach.call(document.querySelectorAll('[data-cat]'), function (b) {
    b.addEventListener('click', function () {
      var i = data.map(function (c) { return c.t; }).indexOf(b.getAttribute('data-cat'));
      if (i < 0) return;
      pick(i);
      document.getElementById('afh-cats').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });
  });

  /* Vandaag open */
  var hours = { 0: '11:45 – 21:00', 1: null, 2: '16:00 – 21:00', 3: '16:00 – 21:00', 4: '16:00 – 21:00', 5: '11:45 – 21:00', 6: '11:45 – 21:00' };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay(), today = document.getElementById('today');
  today.textContent = hours[d] ? 'Vandaag (' + names[d] + ') open van ' + hours[d].replace(' – ', ' tot ') + ' uur' : 'Vandaag (maandag) gesloten, behalve op feestdagen. Dinsdag weer open vanaf 16:00.';
  var tr = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (tr) tr.classList.add('is-today');

  /* Navigatie */
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
  var top = document.querySelector('.top');
  var onScroll = function () {
    top.classList.toggle('scrolled', window.scrollY > 30);
    document.body.classList.toggle('past-hero', window.scrollY > window.innerHeight * 0.9);
  };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
