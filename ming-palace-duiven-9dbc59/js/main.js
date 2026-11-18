(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
  (window.KAART || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 't' + i; b.setAttribute('aria-controls', 'p' + i);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = s.t;
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 't' + i); p.hidden = i !== 0;
    p.innerHTML = (s.note ? '<p class="panel-note">' + esc(s.note) + '</p>' : '') +
      '<ul class="dishes">' + s.items.map(function (it) {
        return '<li><div class="d-head"><span class="d-name">' + esc(it[0]) + '</span><span class="d-dots" aria-hidden="true"></span><span class="d-price">' + it[2] + '</span></div>' + (it[1] ? '<p class="d-desc">' + esc(it[1]) + '</p>' : '') + '</li>';
      }).join('') + '</ul>';
    panels.appendChild(p);
  });
  var list = Array.prototype.slice.call(tabs.querySelectorAll('[role=tab]'));
  function sel(t) { list.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; }); }
  list.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = list[(i + k + list.length) % list.length]; sel(n); n.focus(); e.preventDefault(); });
  });

  var nav = document.getElementById('nav'), tg = document.querySelector('.nav-toggle');
  tg.addEventListener('click', function () { var o = document.body.classList.toggle('nav-open'); tg.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); tg.setAttribute('aria-expanded', false); } });
})();
