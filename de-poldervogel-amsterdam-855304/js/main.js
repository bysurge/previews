(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // Wine tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // Today's opening hours
  var hours = { 0: null, 1: null, 2: '17:00', 3: '17:00', 4: '17:00', 5: '16:00', 6: '15:00' };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  if (el) {
    if (hours[d]) {
      el.innerHTML = 'Vandaag open van <strong>' + hours[d] + ' tot 0:00</strong>';
    } else {
      var n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
      el.innerHTML = 'Vandaag gesloten, ' + names[n] + ' weer open vanaf <strong>' + hours[n] + '</strong>';
    }
  }
})();
