(function () {
  // Mobile menu
  var tg = document.querySelector('.burger'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Today
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
  var op = document.querySelector('[data-open]');
  if (op) op.textContent = (d === 1 || d === 2) ? 'Vandaag gesloten, woensdag weer open vanaf 17:00' : 'Vandaag open van 17:00 tot 22:00, keuken tot 21:00';

  // Menu
  var M = window.FLORES_MENU; if (!M) return;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function tags(t) {
    if (!t) return '';
    var out = '';
    if (t.indexOf('c') > -1) out += '<span class="tag tag-c">chef</span>';
    if (t.indexOf('v') > -1) out += '<span class="tag tag-v">vega</span>';
    var lv = [];
    if (t.indexOf('m') > -1) lv.push(['h1', 'mild']);
    if (t.indexOf('p') > -1) lv.push(['h2', 'pittig']);
    if (t.indexOf('s') > -1) lv.push(['h3', 'scherp']);
    lv.forEach(function (l) { out += '<span class="heat ' + l[0] + '" title="' + l[1] + '"><span class="sr">' + l[1] + '</span></span>'; });
    return '<span class="tags">' + out + '</span>';
  }
  function dish(it) {
    return '<li class="dish"><div class="d-top"><span class="d-n">' + esc(it[0]) + '</span>' + tags(it[3]) + '<span class="d-p">' + esc(it[2]) + '</span></div>' +
      (it[1] ? '<p class="d-d">' + esc(it[1]) + '</p>' : '') + '</li>';
  }
  function panel(s) {
    var h = '';
    if (s.intro) h += '<p class="p-intro">' + esc(s.intro) + '</p>';
    if (s.rice) {
      h += '<div class="rice">' + s.rice.map(function (r) {
        return '<article class="rt"><div class="rt-head"><h3>' + esc(r.n) + '</h3>' + tags(r.tags) + '<span class="rt-p">' + esc(r.p) + '</span></div><p class="rt-d">' + esc(r.d) + '</p>' +
          '<ul class="rt-list">' + r.list.split(', ').map(function (x) {
            var m = x.match(/^([^(]+)(\((.+)\))?$/); var nm = m[1].trim(); nm = nm.charAt(0).toUpperCase() + nm.slice(1); return '<li><b>' + esc(nm) + '</b>' + (m[3] ? ' <span>' + esc(m[3]) + '</span>' : '') + '</li>';
          }).join('') + '</ul></article>';
      }).join('') + '</div>';
      if (s.after) h += '<p class="p-after">' + esc(s.after) + '</p>';
    }
    if (s.courses) {
      h += '<div class="courses">' + s.courses.map(function (c) {
        return '<article class="course"><h3>' + esc(c.n) + '</h3><p class="c-p">€ ' + esc(c.p) + (c.was ? ' <span>' + esc(c.was) + '</span>' : '') + '</p><p>' + esc(c.d) + '</p><dl>' +
          c.c.map(function (x) { return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>'; }).join('') + '</dl></article>';
      }).join('') + '</div>';
    }
    if (s.items) h += '<ul class="dishes">' + s.items.map(dish).join('') + '</ul>';
    if (s.groups) h += s.groups.map(function (g) { return '<h3 class="g-h">' + esc(g.g) + '</h3><ul class="dishes">' + g.items.map(dish).join('') + '</ul>'; }).join('');
    if (s.kids) h += '<div class="kids"><h3>Kindermenu <span>t/m 12 jaar, € 19,50 p.p.</span></h3><p>Sateh ajam (kipsaté) met gebakken rijst of friet, gebakken banaan, gebakken ei en komkommer. En we sluiten af met een kinderijsje!</p></div>';
    if (s.coffee) h += '<h3 class="g-h">Special koffie\'s</h3><ul class="dishes">' + s.coffee.map(function (c) { return dish([c[0], c[1], c[2], '']); }).join('') + '</ul><p class="p-after">Zin in een glas dessertwijn? Onze bediening adviseert u graag.</p>';
    return h;
  }
  var tabs = document.getElementById('menu-tabs'), panels = document.getElementById('menu-panels');
  tabs.innerHTML = M.map(function (s, i) {
    return '<button type="button" role="tab" id="mt-' + s.id + '" aria-controls="mp-' + s.id + '" aria-selected="' + (i === 0) + '">' + esc(s.t) + '</button>';
  }).join('');
  panels.innerHTML = M.map(function (s, i) {
    return '<div class="m-panel" role="tabpanel" id="mp-' + s.id + '" aria-labelledby="mt-' + s.id + '"' + (i ? ' hidden' : '') + '>' + panel(s) + '</div>';
  }).join('');
  var btns = tabs.querySelectorAll('[role=tab]');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { var on = x === b; x.setAttribute('aria-selected', on); document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
  });
})();
