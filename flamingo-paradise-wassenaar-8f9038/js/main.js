(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    if (tab.scrollIntoView && window.innerWidth < 640) tab.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  // Seasonal (Kerst 2026) content disappears automatically after 27 December 2026
  var now = new Date();
  var expired = now >= new Date('2026-12-28T00:00:00');
  if (expired) {
    document.querySelectorAll('[data-until], [data-season]').forEach(function (el) { el.setAttribute('data-expired', ''); });
  }

  // Opening hours: highlight today, short status in the hero
  var slots = { 0: [[12, 21]], 3: [[17, 22]], 4: [[17, 22]], 5: [[12, 14], [17, 22]], 6: [[12, 14], [17, 22]] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = now.getDay();
  document.querySelectorAll('.hours tr').forEach(function (r) {
    var k = r.getAttribute('data-day');
    if (!slots[k]) r.classList.add('closed');
    if (+k === d) r.classList.add('today');
  });
  var el = document.getElementById('vandaag');
  if (!el) return;
  var h = now.getHours() + now.getMinutes() / 60;
  var today = slots[d] || [];
  var cur = today.filter(function (s) { return h >= s[0] && h < s[1]; })[0];
  var next = today.filter(function (s) { return h < s[0]; })[0];
  if (cur) { el.textContent = 'Nu geopend tot ' + cur[1] + '.00 uur'; el.classList.add('is-open'); }
  else if (next) { el.textContent = 'Vandaag geopend vanaf ' + next[0] + '.00 uur'; }
  else {
    var k = 1;
    while (k < 7 && !slots[(d + k) % 7]) k++;
    var nd = (d + k) % 7;
    el.textContent = 'Weer geopend ' + (k === 1 ? 'morgen' : 'op ' + names[nd]) + ' vanaf ' + slots[nd][0][0] + '.00 uur';
  }
})();
