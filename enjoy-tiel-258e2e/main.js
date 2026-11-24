(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menu openen');
    }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  // opening hours today
  var hours = { 0: null, 1: [11, 17], 2: [9.5, 17], 3: [9.5, 17], 4: [9.5, 17], 5: [9.5, 17], 6: [9, 17] };
  var label = { 11: '11.00', 9.5: '9.30', 9: '9.00', 17: '17.00' };
  var now = new Date();
  var d = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) {
    el.textContent = 'Nu open, vandaag tot 17.00 uur';
  } else if (t && h < t[0]) {
    el.textContent = 'Vandaag open van ' + label[t[0]] + ' tot 17.00 uur';
    el.classList.add('closed');
  } else {
    var nd = (d + 1) % 7, guard = 0;
    while (!hours[nd] && guard++ < 7) nd = (nd + 1) % 7;
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    var when = nd === (d + 1) % 7 ? 'morgen' : names[nd];
    el.textContent = 'Nu gesloten, ' + when + ' weer open vanaf ' + label[hours[nd][0]] + ' uur';
    el.classList.add('closed');
  }

  // newsletter (example only)
  var form = document.getElementById('news');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('news-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
  });
})();
