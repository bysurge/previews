(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // mobiel menu
  var btn = document.getElementById('menu-btn'), nav = document.getElementById('nav');
  function setMenu(open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menukaart
  var tabsEl = document.getElementById('menu-tabs'), panelsEl = document.getElementById('menu-panels');
  var dish = function (d) {
    return '<li class="dish"><span class="dish-n">' + esc(d[0]) + (d[1] ? '<span class="dish-d">' + esc(d[1]) + '</span>' : '') + '</span><span class="dish-p">' + esc(d[2]).replace(/(\d+,\d\d)/, '€ $1') + '</span></li>';
  };
  (window.MENU || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab-' + s.id; b.setAttribute('aria-controls', 'p-' + s.id);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = s.t;
    tabsEl.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + s.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
    var html = s.note ? '<p class="panel-note">' + esc(s.note) + '</p>' : '';
    if (s.items) html += '<ul class="dishes">' + s.items.map(dish).join('') + '</ul>';
    (s.groups || []).forEach(function (g) { html += '<h3 class="group-h">' + esc(g.h) + '</h3><ul class="dishes">' + g.items.map(dish).join('') + '</ul>'; });
    p.innerHTML = html;
    panelsEl.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault();
    });
  });

  // zwevende bestelknop (telefoon) na de hero
  var fl = document.querySelector('.float-order'), hero = document.querySelector('.hero');
  if (fl && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { fl.classList.toggle('show', !en[0].isIntersecting); }).observe(hero);
  }
})();
