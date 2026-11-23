(function () {
  // Mobiel menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });

  // Tabs van de kaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });

  nav.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a) return;
    var key = a.getAttribute('data-tab');
    if (a.getAttribute('href') === '#kaart') select(document.getElementById('t-' + (key || 'friet')));
    setMenu(false);
  });

  // Vandaag open? (dag 0 = zondag)
  var hours = {
    0: [[16, 0, 22, 0]], 1: [], 2: [[16, 0, 22, 0]], 3: [[11, 30, 13, 30], [16, 0, 22, 0]],
    4: [[16, 0, 22, 0]], 5: [[11, 30, 13, 30], [16, 0, 22, 0]], 6: [[16, 0, 22, 0]]
  };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('open-now');
  var text = '', open = false;
  var today = hours[d];
  for (var i = 0; i < today.length; i++) {
    var s = today[i][0] * 60 + today[i][1], e = today[i][2] * 60 + today[i][3];
    if (m >= s && m < e) { open = true; text = 'Nu open, tot ' + pad(today[i][2]) + ':' + pad(today[i][3]); break; }
    if (m < s) { text = 'Vandaag open vanaf ' + pad(today[i][0]) + ':' + pad(today[i][1]); break; }
  }
  if (!text) {
    for (var k = 1; k <= 7; k++) {
      var nd = (d + k) % 7;
      if (hours[nd].length) {
        var h = hours[nd][0];
        text = 'Nu gesloten, ' + (k === 1 ? 'morgen' : names[nd]) + ' vanaf ' + pad(h[0]) + ':' + pad(h[1]);
        break;
      }
    }
  }
  el.textContent = text;
  el.classList.add(open ? 'is-open' : 'is-closed');
})();
