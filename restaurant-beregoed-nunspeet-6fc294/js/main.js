(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  function setMenu(open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function show(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + tabs.length) % tabs.length; tabs[n].focus(); show(tabs[n]); e.preventDefault();
    });
  });

  // open today
  var H = { 0: null, 1: [12, 0, 21, 0], 2: [11, 0, 21, 0], 3: [11, 0, 21, 0], 4: [9, 30, 21, 0], 5: [9, 30, 21, 0], 6: [9, 30, 21, 0] };
  var now = new Date(), d = now.getDay(), h = H[d];
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
  var el = document.getElementById('today'), pad = function (n) { return n < 10 ? '0' + n : n; };
  if (el) {
    if (!h) el.innerHTML = '<b>Vandaag gesloten.</b> Dorpsstraat 43, Nunspeet';
    else {
      var m = now.getHours() * 60 + now.getMinutes(), o = h[0] * 60 + h[1], c = h[2] * 60 + h[3];
      el.innerHTML = (m >= o && m < c ? '<b>Nu geopend</b> tot ' + h[2] + ':' + pad(h[3]) : m < o ? '<b>Vandaag open</b> vanaf ' + h[0] + ':' + pad(h[1]) : '<b>Nu gesloten</b>') + ' · Dorpsstraat 43, Nunspeet';
    }
  }

  // demo form
  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
