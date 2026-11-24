(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // afhaalmenu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    if (t.scrollIntoView && window.innerWidth < 900) t.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key, n = null;
      if (k === 'ArrowRight' || k === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      if (k === 'ArrowLeft' || k === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  // opening hours: today
  var hours = { 0: ['14:00', '21:00'], 1: ['16:00', '21:00'], 4: ['16:00', '21:00'], 5: ['14:00', '21:30'], 6: ['14:00', '21:30'] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var el = document.getElementById('today');
  if (el) {
    var h = hours[d];
    if (h) {
      el.innerHTML = '<span class="dot"></span>Vandaag (' + names[d] + ') open van <strong>' + h[0] + ' tot ' + h[1] + '</strong>';
    } else {
      var n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
      el.innerHTML = '<span class="dot off"></span>Vandaag gesloten. ' + names[n].charAt(0).toUpperCase() + names[n].slice(1) + ' weer open vanaf <strong>' + hours[n][0] + '</strong>';
    }
  }
})();
