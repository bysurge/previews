(function () {
  // mobile menu
  var body = document.body, toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', false); });
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
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
      select(next); next.focus(); e.preventDefault();
    });
  });

  // opening hours: today + open now (0 = zondag)
  var hours = {
    wassenaar: { 0: null, 1: [16, 20], 2: [12, 20], 3: [12, 20], 4: [12, 20], 5: [12, 20], 6: [12, 20] },
    voorburg:  { 0: [16, 20], 1: null, 2: [12, 20], 3: [12, 20], 4: [12, 20], 5: [12, 20], 6: [12, 20] }
  };
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  function pad(n) { return (n < 10 ? '0' : '') + n + ':00'; }
  function nextOpen(shop) {
    for (var i = 1; i <= 7; i++) {
      var day = (d + i) % 7, slot = hours[shop][day];
      if (slot) return (i === 1 ? 'morgen' : dayNames[day]) + ' vanaf ' + pad(slot[0]);
    }
  }
  Object.keys(hours).forEach(function (shop) {
    var slot = hours[shop][d], li = document.querySelector('.today [data-shop=' + shop + ']');
    var state = li.querySelector('.today-state'), text;
    if (slot && h >= slot[0] && h < slot[1]) { text = 'nu open, tot ' + pad(slot[1]); li.classList.add('open'); }
    else if (slot && h < slot[0]) text = 'vandaag open vanaf ' + pad(slot[0]);
    else text = 'gesloten, weer open ' + nextOpen(shop);
    state.innerHTML = '<span class="dot" aria-hidden="true"></span>' + text;
    var row = document.querySelector('.shop[data-shop=' + shop + '] tr[data-day="' + d + '"]');
    if (row) row.classList.add('is-today');
  });

  // catering form options (from their own order form)
  var vlees = ['Rendang', 'Bandung', 'Semoer', 'Blado', 'Blado pete', 'Kip cashew', 'Ayam manado', 'Kip zoetzuur', 'Ayam kalio', 'Ayam kecap', 'Ayam ritja-ritja', 'Babi kecap'];
  var groente = ['S.G. Boontjes', 'Sayur lodeh', 'Tumis tauge', 'Orak arik', 'Kouseband', 'Boontjes tahu pete', 'Oerap', 'S.G. Rebung', 'S.G. Terong', 'Paksoy', 'Tahu tempe taoco', 'S.G. Tempe kering', 'S.G. Tempe pete', 'S.G. Tahu'];
  function fill(sel, list) { sel.innerHTML = list.map(function (x) { return '<option>' + x + '</option>'; }).join(''); }
  document.querySelectorAll('.sel-vlees').forEach(function (s) { fill(s, vlees); });
  document.querySelectorAll('.sel-groente').forEach(function (s) { fill(s, groente); });
  var menu = document.getElementById('f-menu'), persons = document.querySelector('[name=personen]');
  function syncMenu() {
    var m1 = menu.value === '1';
    document.querySelectorAll('.only-m1').forEach(function (l) {
      l.classList.toggle('off', !m1);
      l.querySelector('select').disabled = !m1;
    });
    persons.min = m1 ? 10 : 15;
    if (+persons.value < +persons.min) persons.value = persons.min;
  }
  menu.addEventListener('change', syncMenu); syncMenu();
  var form = document.querySelector('.order-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.form-msg'); msg.hidden = false;
  });
})();
