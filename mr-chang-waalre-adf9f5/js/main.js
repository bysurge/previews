(function () {
  var M = window.MRCHANG_MENU;
  var LB = { v: ['lb-veg', 'vegetarisch'], ve: ['lb-vegan', 'veganistisch'], g: ['lb-gf', 'glutenvrij'], m: ['lb-mild', 'mild'], p: ['lb-hot', 'pittig'], s: ['lb-star', 'uitgelicht'] };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function item(r) {
    var tags = (r[4] || '').split(' ').filter(Boolean);
    var star = tags.indexOf('x') > -1 ? '<sup class="x" title="keuze bijgerecht">*</sup>' : '';
    var lbs = tags.filter(function (t) { return LB[t]; }).map(function (t) { return '<span class="lb ' + LB[t][0] + '">' + LB[t][1] + '</span>'; }).join('');
    return '<li' + (tags.indexOf('s') > -1 ? ' class="hl"' : '') + '>' +
      '<span class="nr">' + esc(r[0]) + '</span>' +
      '<div class="it"><p class="d"><b>' + esc(r[1]) + star + '</b><span class="pr">' + esc(r[3]) + '</span></p>' +
      (r[2] ? '<p class="o">' + esc(r[2]) + '</p>' : '') + (lbs ? '<p class="lbs">' + lbs + '</p>' : '') + '</div></li>';
  }
  function list(rows, cls) { return '<ul class="items ' + (cls || '') + '">' + rows.map(item).join('') + '</ul>'; }
  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  fill('p-menus', '<h3>Samengestelde menu\'s</h3>' + list(M.menus, 'wide'));
  fill('p-gerechten', '<h3>Gerechten</h3>' + list(M.gerechten));
  fill('p-bij', '<h3>Bijgerechten</h3>' + list(M.bij) + '<p class="note">Bij gerechten met een * kiest u een bijgerecht: witte rijst, gebakken rijst, bami of mifang.</p>');
  fill('p-poke', '<h3>Poké bowls</h3>' + list(M.poke, 'wide'));
  fill('p-sushi', '<h3>Sushi</h3><p class="note top">Prijzen per stuk, tenzij anders vermeld.</p>' + M.sushi.map(function (g) {
    return '<div class="sgroup"><h4>' + g.t + '</h4>' + list(g.items) + '</div>';
  }).join(''));
  fill('p-sushimenu', '<h3>Sushi-menu\'s</h3>' + list(M.sushimenu, 'wide'));

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Reservation form (same options as their own form)
  var tijd = document.getElementById('tijd');
  for (var h = 17; h <= 20; h++) for (var q = 0; q < 60; q += 15) {
    if (h === 20 && q > 15) break;
    var v = h + ':' + (q ? q : '00');
    tijd.add(new Option(v, v));
  }
  var volw = document.getElementById('volw');
  for (var n = 1; n <= 18; n++) volw.add(new Option(n, n));
  volw.add(new Option('Meer dan 18', '>18'));
  volw.value = '2';
  var kind = document.getElementById('kind');
  kind.add(new Option('Geen', '0'));
  for (var k = 1; k <= 6; k++) kind.add(new Option(k, k));
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });

  // Today in opening hours
  var row = document.querySelector('.hours tr[data-day="' + new Date().getDay() + '"]');
  if (row) row.classList.add('is-today');
})();
