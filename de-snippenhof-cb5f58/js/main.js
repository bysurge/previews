(function () {
  var M = {}; (window.MENU || []).forEach(function (s) { M[s.id] = s; });
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var price = function (p) { return p ? '<span class="pr">' + esc(p) + '</span>' : '<span class="pr pr-board">wisselend</span>'; };
  var row = function (it, tag) {
    return '<li class="dish"' + (tag ? ' data-cat="' + tag + '"' : '') + '><div class="dish-line"><span class="dn">' + esc(it.n) + '</span><span class="dots" aria-hidden="true"></span>' + price(it.p) + '</div>' + (it.d ? '<p class="dd">' + esc(it.d) + '</p>' : '') + '</li>';
  };

  // Simple panels
  [['p-kids', ['kids']], ['p-voor', ['voor']], ['p-ei', ['ei']], ['p-vlees', ['vlees']], ['p-na', ['na']]].forEach(function (cfg) {
    var el = document.getElementById(cfg[0]); var html = '';
    cfg[1].forEach(function (id) {
      var s = M[id]; if (!s) return;
      html += '<ul class="dish-list">' + s.items.map(function (it) { return row(it); }).join('') + '</ul>';
      s.notes.forEach(function (n) { html += '<p class="sec-note">' + esc(n.charAt(0).toUpperCase() + n.slice(1)) + '.</p>'; });
    });
    el.innerHTML = html;
  });

  // Pancake finder
  var groups = [['special', 'Specials'], ['zoet', 'Klassiek zoet'], ['hartig', 'Klassiek hartig'], ['inter', 'Internationale pannenkoeken']];
  var list = document.getElementById('pk-list');
  list.innerHTML = groups.map(function (g) {
    var s = M[g[0]]; if (!s) return '';
    return '<section class="pk-group" data-group="' + g[0] + '"><h3>' + g[1] + '</h3><ul class="dish-list">' + s.items.map(function (it) { return row(it, g[0]); }).join('') + '</ul></section>';
  }).join('');
  var dishes = Array.prototype.slice.call(list.querySelectorAll('.dish'));
  dishes.forEach(function (d) { d._t = d.textContent.toLowerCase(); });
  var q = document.getElementById('q'), count = document.getElementById('count'), empty = document.getElementById('empty');
  var cat = 'all', ing = '';
  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function wordHit(text, w) { return new RegExp('(^|[^a-z])' + w).test(text); }
  function apply() {
    var term = norm(q.value.trim()), n = 0;
    dishes.forEach(function (d) {
      var t = norm(d._t);
      var ok = (cat === 'all' || d.dataset.cat === cat) && (!term || t.indexOf(term) > -1) && (!ing || wordHit(t, ing));
      d.hidden = !ok; if (ok) n++;
    });
    list.querySelectorAll('.pk-group').forEach(function (g) { g.hidden = !g.querySelector('.dish:not([hidden])'); });
    empty.hidden = n > 0;
    var filtered = term || ing || cat !== 'all';
    count.textContent = filtered ? (n === 1 ? '1 pannenkoek gevonden' : n + ' pannenkoeken gevonden') : 'Alle ' + n + ' pannenkoeken van de kaart';
  }
  q.addEventListener('input', apply);
  document.querySelectorAll('.cat').forEach(function (b) {
    b.addEventListener('click', function () {
      cat = b.dataset.cat;
      document.querySelectorAll('.cat').forEach(function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', x === b); });
      apply();
    });
  });
  document.querySelectorAll('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      ing = ing === b.dataset.ing ? '' : b.dataset.ing;
      document.querySelectorAll('.chip').forEach(function (x) { var on = x.dataset.ing === ing; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on); });
      apply();
    });
  });
  apply();

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = i ? -1 : 0;
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var nx = tabs[(i + k + tabs.length) % tabs.length]; select(nx); nx.focus(); e.preventDefault();
    });
  });

  // Mobile nav
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });

  // Header shadow on scroll
  var top = document.querySelector('.top');
  window.addEventListener('scroll', function () { top.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
})();
