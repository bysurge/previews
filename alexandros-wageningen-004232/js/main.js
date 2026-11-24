(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var data = window.KAART || [], tt = document.getElementById('tabs'), tp = document.getElementById('panels');
  data.forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 't' + i; b.setAttribute('aria-controls', 'p' + i); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); b.tabIndex = i ? -1 : 0;
    b.textContent = s.t; tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
    p.innerHTML = '<h3 class="panel-h">' + esc(s.t) + '</h3>' + (s.note ? '<p class="panel-note">' + esc(s.note) + '</p>' : '') +
      '<ul class="dishes">' + s.items.map(function (it) {
        return '<li><span class="nm">' + esc(it[0]) + '</span><span class="dots" aria-hidden="true"></span><span class="pr">€ ' + esc(it[2]) + '</span>' +
          (it[1] ? '<span class="ds">' + esc(it[1]) + '</span>' : '') + '</li>';
      }).join('') + '</ul>';
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    if (tt.scrollWidth > tt.clientWidth) tt.scrollTo({ left: t.offsetLeft - 16, behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });

  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o ? 'true' : 'false'); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
