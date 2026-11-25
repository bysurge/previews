(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // tabs
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });
  document.querySelectorAll('[data-open]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById(a.getAttribute('data-open')); if (t) select(t); });
  });

  // opening hours: today + open now
  var H = { 0: [960, 1200], 1: null, 2: [960, 1200], 3: [690, 1230], 4: [690, 1230], 5: [690, 1230], 6: [690, 1230] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes(), h = H[d];
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var status = document.getElementById('status'), tH = document.getElementById('today-h'), tP = document.getElementById('today-p');
  var text, cls;
  if (h && m >= h[0] && m < h[1]) { text = 'Nu open, tot ' + fmt(h[1]); cls = 'open'; }
  else if (h && m < h[0]) { text = 'Vandaag open vanaf ' + fmt(h[0]); cls = 'later'; }
  else {
    var k = 1; while (!H[(d + k) % 7]) k++;
    var nd = (d + k) % 7;
    text = 'Nu gesloten, ' + (k === 1 ? 'morgen' : names[nd]) + ' open vanaf ' + fmt(H[nd][0]); cls = 'closed';
  }
  status.textContent = text; status.classList.add(cls);
  tH.textContent = 'Vandaag, ' + names[d];
  tP.textContent = h ? 'Open ' + fmt(h[0]) + ' - ' + fmt(h[1]) : 'Gesloten';

  // sample form
  var form = document.getElementById('sollicitatie');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
  });
})();
