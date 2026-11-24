(function () {
  // mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function closeNav() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menu openen');
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  // tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab); });
    tab.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  // openingstijden: vandaag markeren
  var hours = { 3: [9, 16], 4: [9, 16], 5: [9, 19], 6: [9, 19] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    var d = +tr.getAttribute('data-day');
    if (!hours[d]) tr.classList.add('closed');
    if (d === day) tr.classList.add('today');
  });
  var el = document.getElementById('vandaag');
  if (el) {
    var t = hours[day];
    if (t && h >= t[0] && h < t[1]) {
      el.textContent = 'Nu open, vandaag tot ' + t[1] + '.00 uur';
      el.classList.add('is-open');
    } else if (t && h < t[0]) {
      el.textContent = 'Vandaag open van 9.00 tot ' + t[1] + '.00 uur';
    } else {
      for (var i = 1; i <= 7; i++) {
        var nd = (day + i) % 7;
        if (hours[nd]) {
          el.textContent = 'Nu gesloten. ' + (i === 1 ? 'Morgen' : 'Op ' + names[nd]) + ' vanaf 9.00 uur weer open';
          break;
        }
      }
    }
  }
})();
