(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var M = window.HAPPY_MENU || {};
  ['lunch', 'diner'].forEach(function (k) {
    document.getElementById('panel-' + k).innerHTML = '<div class="cols">' + (M[k] || []).map(function (g) {
      return '<section class="mgroup"><h3>' + esc(g.t) + '</h3>' + (g.note ? '<p class="mnote">' + esc(g.note) + '</p>' : '') + '<ul>' +
        g.items.map(function (it) { return '<li><span class="mn">' + esc(it[0]) + '</span><span class="dots" aria-hidden="true"></span><span class="mp">' + esc(it[1]) + '</span></li>'; }).join('') +
        '</ul></section>';
    }).join('') + '</div>';
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t) { tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; }); }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });
  // Na 15:00 opent de dinerkaart standaard
  if (new Date().getHours() >= 15) sel(document.getElementById('tab-diner'));

  // Openingstijden: vandaag markeren
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) {
    row.classList.add('is-today');
    var t = row.querySelector('td').textContent, el = document.getElementById('today');
    el.textContent = t === 'gesloten' ? 'Vandaag zijn we gesloten' : 'Vandaag open van ' + t.replace(' - ', ' tot ');
    el.hidden = false;
  }

  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });

  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 30); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
