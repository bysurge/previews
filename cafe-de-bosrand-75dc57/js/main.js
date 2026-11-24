(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus(); e.preventDefault();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // Today: highlight the row and show a short status line
  var hours = { 0: [10, 20], 1: [10, 23], 3: [10, 23], 5: [10, 25], 6: [10, 25] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var fmt = function (h) { return (h % 24 < 10 ? '0' : '') + (h % 24) + '.00'; };
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  if (!el) return;
  var prev = hours[(day + 6) % 7];
  var msg;
  if (prev && prev[1] > 24 && h < prev[1] - 24) {
    msg = 'Nu open, tot <strong>' + fmt(prev[1]) + ' uur</strong>.';
  } else if (hours[day] && h < hours[day][0]) {
    msg = 'Vandaag open van <strong>' + fmt(hours[day][0]) + ' tot ' + fmt(hours[day][1]) + ' uur</strong>.';
  } else if (hours[day] && h < hours[day][1]) {
    msg = 'Nu open, vandaag tot <strong>' + fmt(hours[day][1]) + ' uur</strong>.';
  } else {
    var d = 1;
    while (!hours[(day + d) % 7]) d++;
    var nd = (day + d) % 7;
    msg = (hours[day] ? 'Nu gesloten. ' : 'Vandaag gesloten. ') + 'We zijn er weer ' + (d === 1 ? 'morgen' : names[nd]) + ' vanaf <strong>' + fmt(hours[nd][0]) + ' uur</strong>.';
  }
  el.innerHTML = msg;
})();
