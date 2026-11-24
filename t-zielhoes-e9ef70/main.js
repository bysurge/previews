(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // Vandaag open?
  var hours = { 0: [10, 17], 4: [11, 15], 5: [11, 18], 6: [10, 18] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var el = document.getElementById('today');
  var fmt = function (x) { return (x < 10 ? '0' : '') + x + '.00'; };
  if (hours[day] && h < hours[day][1]) {
    el.textContent = h >= hours[day][0]
      ? 'Nu open, tot ' + fmt(hours[day][1]) + ' uur'
      : 'Vandaag open van ' + fmt(hours[day][0]) + ' tot ' + fmt(hours[day][1]) + ' uur';
  } else {
    var next = day;
    for (var k = 1; k <= 7; k++) { next = (day + k) % 7; if (hours[next]) break; }
    el.textContent = (hours[day] ? 'Nu gesloten. ' : 'Vandaag gesloten, op afspraak open. ') + 'Weer open op ' + names[next] + ' vanaf ' + fmt(hours[next][0]) + ' uur';
    el.classList.add('closed');
  }
  document.querySelectorAll('#hours tr').forEach(function (tr) {
    if (+tr.getAttribute('data-day') === day) tr.classList.add('is-today');
    if (!hours[+tr.getAttribute('data-day')]) tr.classList.add('closed');
  });
})();
