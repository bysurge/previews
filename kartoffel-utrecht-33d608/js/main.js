(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  // menu tabs
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // today's opening hours (open, kitchen, closing time)
  var open = { 0: [12, 22], 1: [17, 23], 2: [17, 23], 3: [17, 23], 4: [17, 24], 5: [17, 25], 6: [12, 25] };
  var kitchen = { 0: [12, 21], 1: [17, 22], 2: [17, 22], 3: [17, 22], 4: [17, 22], 5: [17, 22], 6: [12, 22] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hh(h) { return (h % 24 < 10 ? '0' : '') + (h % 24) + ':00'; }
  var now = new Date();
  var day = now.getDay();
  var hour = now.getHours() + now.getMinutes() / 60;
  // after midnight we are still in yesterday's evening
  var prev = (day + 6) % 7;
  var el = document.getElementById('today');
  var txt = document.getElementById('today-text');
  var m = now.getMonth(), d = now.getDate();
  var xmasClosed = m === 11 && d >= 25;
  if (xmasClosed) {
    el.classList.add('closed');
    txt.textContent = 'Gesloten t/m 31 december. 1 januari zijn we weer open!';
  } else if (hour < open[prev][1] - 24) {
    txt.textContent = 'Nu open, tot ' + hh(open[prev][1]);
  } else {
    var o = open[day], k = kitchen[day];
    if (hour >= o[0] && hour < o[1]) {
      txt.textContent = 'Nu open tot ' + hh(o[1]) + (hour < k[1] ? ' · keuken tot ' + hh(k[1]) : ' · keuken is dicht');
    } else if (hour < o[0]) {
      txt.textContent = 'Vandaag (' + names[day] + ') open van ' + hh(o[0]) + ' tot ' + hh(o[1]) + ', keuken tot ' + hh(k[1]);
    } else {
      var t = (day + 1) % 7;
      el.classList.add('closed');
      txt.textContent = 'Nu gesloten · morgen open vanaf ' + hh(open[t][0]);
    }
  }
  document.querySelectorAll('tr[data-days]').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('is-today');
  });
})();
