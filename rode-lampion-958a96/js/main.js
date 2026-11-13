(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Tafelkaart tabs
  var tt = document.getElementById('tafel-tabs'), tp = document.getElementById('tafel-panels');
  (window.TAFEL || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'tt' + i; b.setAttribute('aria-controls', 'tp' + i); b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0;
    b.textContent = s.t; tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'tafel-panel'; p.id = 'tp' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'tt' + i); p.hidden = i !== 0;
    p.innerHTML = (s.note ? '<p class="tafel-note">' + esc(s.note) + '</p>' : '') + '<ul class="num-list">' + s.items.map(function (it) {
      return '<li><span class="nr">' + it[0] + '</span><span class="nm">' + esc(it[1]) + '</span></li>';
    }).join('') + '</ul>';
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) { tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; }); }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });

  // Afhaalkaart
  var data = window.AFHAAL || [], list = document.getElementById('afh-list'), cats = document.getElementById('afh-cats');
  var q = document.getElementById('afh-q'), count = document.getElementById('afh-count');
  var short = function (t) { return t.replace(/ (Gerechten|gerechten)$/, '').replace(' / Bijgerechten', ' & bijgerechten').replace('Specialiteiten van het huis', 'Specialiteiten'); };
  var cur = 0;
  data.forEach(function (c, i) {
    var b = document.createElement('button'); b.className = 'pill'; b.textContent = short(c.t); b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () { cur = i; q.value = ''; render(); Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); }); });
    cats.appendChild(b);
  });
  var row = function (it) {
    return '<li class="afh-item"><span class="nr">' + esc(it.nr) + '</span><span class="body"><span class="nm">' + esc(it.n) + '</span>' + (it.d ? '<span class="ds">' + esc(it.d) + '</span>' : '') + '</span><span class="pr">' + esc(it.p).replace(/(\d+,\d\d)/g, '€ $1') + '</span></li>';
  };
  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function render() {
    var term = norm(q.value.trim());
    if (!term) {
      var c = data[cur];
      list.innerHTML = '<h3 class="afh-cat">' + esc(short(c.t)) + '</h3><ul class="afh-ul">' + c.items.map(row).join('') + '</ul>';
      count.textContent = '';
      cats.classList.remove('dim');
      return;
    }
    cats.classList.add('dim');
    var html = '', n = 0, isNum = /^\d+$/.test(term);
    data.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return isNum ? it.nr.split('/').indexOf(term) > -1 || it.nr.indexOf(term) === 0 : norm(it.n + ' ' + it.d).indexOf(term) > -1;
      });
      if (hits.length) { n += hits.length; html += '<h3 class="afh-cat">' + esc(short(c.t)) + '</h3><ul class="afh-ul">' + hits.map(row).join('') + '</ul>'; }
    });
    list.innerHTML = html || '<p class="afh-empty">Geen gerecht gevonden. Zoek op een nummer (bijv. 86) of een woord (bijv. babi, garnalen).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  q.addEventListener('input', render);
  render();

  // Dranken
  var dr = document.getElementById('drank');
  dr.innerHTML = (window.DRANK || []).map(function (g) {
    return '<div class="drank-col"><h4>' + esc(g.t) + '</h4><ul>' + g.items.map(function (it) { return '<li><span>' + esc(it[0]) + '</span><span class="pr">€ ' + it[1] + '</span></li>'; }).join('') + '</ul></div>';
  }).join('');

  // Form (preview only)
  var f = document.getElementById('form');
  f.addEventListener('submit', function (e) { e.preventDefault(); var m = document.getElementById('form-msg'); m.hidden = false; });

  // Nav
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });
  var top = document.querySelector('.top');
  window.addEventListener('scroll', function () { top.classList.toggle('scrolled', window.scrollY > 40); }, { passive: true });
})();
