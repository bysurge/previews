(function () {
  // mobile menu
  var body = document.body, toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // tabs (menu + drinks)
  document.querySelectorAll('.tabs').forEach(function (bar) {
    var btns = bar.querySelectorAll('button');
    function show(id) {
      btns.forEach(function (b) {
        var on = b.dataset.tab === id;
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(b.dataset.tab).hidden = !on;
      });
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.tab); }); });
    show(btns[0].dataset.tab);
  });

  // opening hours: [open, close] in minutes, close may pass midnight
  var H = { 0: [720, 1440], 1: [840, 1440], 2: null, 3: [840, 1440], 4: [840, 1440], 5: [720, 1560], 6: [720, 1560] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var open = false, until = '';
  var t = H[d];
  if (t && m >= t[0] && m < t[1]) { open = true; until = t[1]; }
  var y = H[(d + 6) % 7];
  if (!open && y && y[1] > 1440 && m < y[1] - 1440) { open = true; until = y[1]; }
  function fmt(x) { x = x % 1440; return ('0' + Math.floor(x / 60)).slice(-2) + ':' + ('0' + x % 60).slice(-2); }
  var st = document.getElementById('status'), tx = document.getElementById('status-text');
  if (open) { st.classList.add('open'); tx.textContent = 'Nu open, tot ' + fmt(until); }
  else {
    for (var i = 0; i < 8; i++) {
      var dd = (d + i) % 7, h = H[dd];
      if (h && (i > 0 || m < h[0])) {
        var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        tx.textContent = 'Nu gesloten · ' + (i === 0 ? 'vandaag' : i === 1 ? 'morgen' : names[dd]) + ' open vanaf ' + fmt(h[0]);
        break;
      }
    }
  }

  // agenda: hide nights that have passed
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var left = 0;
  document.querySelectorAll('#events li[data-date]').forEach(function (li) {
    var p = li.dataset.date.split('-');
    var dt = new Date(+p[0], +p[1] - 1, +p[2]);
    if (dt < today) li.hidden = true; else left++;
  });
  if (!left) document.querySelector('#events .events-end').hidden = false;
})();
