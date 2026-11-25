(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Menu openen'); }
  });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      if (e.key === 'ArrowRight') { e.preventDefault(); select(tabs[(i + 1) % tabs.length], true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length], true); }
    });
  });

  // today's hours (0 = zondag)
  var shop = { 2: '09:00 – 18:00', 3: '09:00 – 18:00', 4: '09:00 – 18:00', 5: '09:00 – 19:00', 6: '09:00 – 17:00' };
  var cantina = { 2: '09:00 – 17:00', 3: '10:30 – 17:00', 4: '10:30 – 21:00', 5: '10:30 – 21:00', 6: '10:30 – 21:00' };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay();
  document.getElementById('today-day').textContent = 'Vandaag, ' + names[d];
  document.getElementById('today-shop').textContent = shop[d] || 'gesloten';
  document.getElementById('today-cantina').textContent = cantina[d] || 'gesloten';
  [].forEach.call(document.querySelectorAll('.hours [data-days]'), function (row) {
    if (row.getAttribute('data-days').split(',').indexOf(String(d)) > -1) row.classList.add('is-today');
  });
})();
