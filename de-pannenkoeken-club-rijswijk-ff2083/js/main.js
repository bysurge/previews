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
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById(a.getAttribute('data-tab')); if (t) select(t); });
  });

  // Opening hours: highlight today and show a short status in the hero
  var hours = { 0: [12, 21], 4: [16, 21], 5: [16, 21], 6: [12, 21] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  document.querySelectorAll('.hours tr').forEach(function (r) { if (!hours[r.getAttribute('data-day')]) r.classList.add('closed'); });
  var el = document.getElementById('vandaag');
  if (el) {
    var h = now.getHours() + now.getMinutes() / 60;
    var t = hours[d];
    if (t && h >= t[0] && h < t[1]) {
      el.textContent = 'Nu open tot 21.00 uur, de keuken sluit om 20.00 uur';
      el.classList.add('is-open');
    } else if (t && h < t[0]) {
      el.textContent = 'Vandaag open vanaf ' + t[0] + '.00 uur';
    } else {
      var k = 1;
      while (k < 7 && !hours[(d + k) % 7]) k++;
      var nd = (d + k) % 7;
      el.textContent = 'Weer open ' + (k === 1 ? 'morgen' : 'op ' + names[nd]) + ' vanaf ' + hours[nd][0] + '.00 uur';
    }
  }
})();
