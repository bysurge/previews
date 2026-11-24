(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Mobile menu
  var tog = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () { var t = document.getElementById('t-' + a.getAttribute('data-tab')); if (t) sel(t); });
  });

  // Afhaallijst
  var data = window.AFHAAL || [], list = document.getElementById('afh-list'), cats = document.getElementById('afh-cats');
  var q = document.getElementById('afh-q'), count = document.getElementById('afh-count'), cur = 0;
  data.forEach(function (c, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'pill'; b.textContent = c.t; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () {
      cur = i; q.value = ''; render();
      Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); });
    });
    cats.appendChild(b);
  });
  var row = function (it) {
    return '<li class="afh-item"><span class="nr">' + esc(it.nr) + '</span><span class="body"><span class="nm">' + esc(it.n) + '</span>' +
      (it.d ? '<span class="ds">' + esc(it.d) + '</span>' : '') + '</span><span class="pr">€ ' + esc(it.p) + '</span></li>';
  };
  var block = function (c, items) {
    return '<h3 class="afh-cat">' + esc(c.t) + '</h3>' + (c.s ? '<p class="afh-sub">' + esc(c.s) + '</p>' : '') +
      '<ul class="afh-ul">' + items.map(row).join('') + '</ul>' + (c.note ? '<p class="afh-catnote">' + esc(c.note) + '</p>' : '');
  };
  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function render() {
    var term = norm(q.value.trim());
    if (!term) { list.innerHTML = block(data[cur], data[cur].items); count.textContent = ''; cats.classList.remove('dim'); return; }
    cats.classList.add('dim');
    var html = '', n = 0;
    data.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return norm(it.nr) === term || norm(it.nr).indexOf(term) === 0 || norm(it.n + ' ' + it.d).indexOf(term) > -1;
      });
      if (hits.length) { n += hits.length; html += block(c, hits); }
    });
    list.innerHTML = html || '<p class="afh-empty">Geen gerecht gevonden. Zoek op een nummer (bijv. 86) of een woord (bijv. eend, garnalen).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  q.addEventListener('input', render);
  if (data.length) render();

  // Voorbeeldformulier
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel of mail ons om te reserveren.';
  });
})();
