(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var euro = function (p) { return esc(p).replace(/(\d+,\d\d)/g, '€ $1'); };

  // Menu's
  document.getElementById('menu-grid').innerHTML = (window.MENUS || []).map(function (m) {
    return '<article class="menu-card"><div class="mc-head"><h3>' + esc(m.t) + '</h3>' + (m.nr ? '<span class="mc-nr">' + m.nr + '</span>' : '') + '</div>' +
      '<p class="mc-sub">' + esc(m.sub) + '</p><ul>' + m.lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>' +
      '<p class="mc-price">' + euro(m.p) + '</p></article>';
  }).join('');

  // Restaurantkaart tabs
  var data = window.RESTAURANT || [], tt = document.getElementById('kaart-tabs'), tp = document.getElementById('kaart-panels');
  var row = function (it) {
    return '<li class="dish"><span class="nr">' + esc(it[0]) + '</span><span class="body"><span class="nm">' + esc(it[1]) + '</span>' +
      (it[2] ? '<span class="ds">' + esc(it[2]) + '</span>' : '') + '</span><span class="pr">' + euro(it[3]) + '</span></li>';
  };
  data.forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'kt-' + s.id; b.setAttribute('aria-controls', 'kp-' + s.id); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); b.tabIndex = i ? -1 : 0;
    b.textContent = s.t; tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'kaart-panel'; p.id = 'kp-' + s.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
    var html = '<div class="kp-head">' + (s.zh ? '<span class="kp-zh" aria-hidden="true">' + s.zh + '</span>' : '') + '<h3>' + esc(s.t) + '</h3>' + (s.intro ? '<p>' + esc(s.intro) + '</p>' : '') + '</div>';
    html += '<ul class="dishes">' + s.items.map(row).join('') + '</ul>';
    if (s.menu) {
      html += '<div class="veg-menu"><h4>' + esc(s.menu.t) + '</h4><p class="mc-sub">' + esc(s.menu.sub) + ', ' + euro(s.menu.p) + '</p><ul>' +
        s.menu.lines.map(function (l) { return '<li><strong>' + esc(l[0]) + '</strong> ' + esc(l[1]) + '</li>'; }).join('') + '</ul></div>';
    }
    p.innerHTML = html; tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    var l = t.offsetLeft - 16; if (tt.scrollWidth > tt.clientWidth) tt.scrollTo({ left: l, behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });
  // Streken openen de juiste kaart
  Array.prototype.forEach.call(document.querySelectorAll('.region'), function (r) {
    r.addEventListener('click', function () {
      var t = document.getElementById('kt-' + r.getAttribute('data-cat'));
      if (!t) return; sel(t);
      document.getElementById('kaart').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });

  // Afhaalkaart
  var afh = window.AFHAAL || [], list = document.getElementById('afh-list'), cats = document.getElementById('afh-cats');
  var q = document.getElementById('afh-q'), count = document.getElementById('afh-count'), cur = 0;
  afh.forEach(function (c, i) {
    var b = document.createElement('button'); b.className = 'pill'; b.type = 'button'; b.textContent = c.t; b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
    b.addEventListener('click', function () { cur = i; q.value = ''; render(); Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i ? 'true' : 'false'); }); });
    cats.appendChild(b);
  });
  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function render() {
    var term = norm(q.value.trim());
    if (!term) {
      var c = afh[cur];
      list.innerHTML = '<h4 class="afh-cat">' + esc(c.t) + '</h4><ul class="dishes">' + c.items.map(row).join('') + '</ul>';
      count.textContent = ''; cats.classList.remove('dim'); return;
    }
    cats.classList.add('dim');
    var html = '', n = 0, isNum = /^\d+$/.test(term);
    afh.forEach(function (c) {
      var hits = c.items.filter(function (it) { return isNum ? it[0] === term : norm(it[1] + ' ' + it[2]).indexOf(term) > -1; });
      if (hits.length) { n += hits.length; html += '<h4 class="afh-cat">' + esc(c.t) + '</h4><ul class="dishes">' + hits.map(row).join('') + '</ul>'; }
    });
    list.innerHTML = html || '<p class="afh-empty">Geen gerecht gevonden. Zoek op een nummer (bijv. 151) of een woord (bijv. babi, garnalen).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  q.addEventListener('input', render);
  render();

  // Formulier (voorbeeld)
  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });

  // Navigatie
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o ? 'true' : 'false'); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
