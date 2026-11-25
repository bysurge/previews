(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // open today
  var hours = { 0: [9, 23], 1: [8, 23], 2: [8, 23], 3: [8, 23], 4: [8, 23], 5: [8, 24], 6: [9, 23] };
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var el = document.querySelector('[data-today]');
  var fmt = function (x) { return (x === 24 ? '00' : x) + ':00'; };
  if (el) {
    var t = hours[day];
    if (h >= t[0] && h < t[1]) el.textContent = 'Nu open, vandaag tot ' + fmt(t[1]);
    else if (h < t[0]) el.textContent = 'Vandaag open vanaf ' + fmt(t[0]);
    else { var nx = hours[(day + 1) % 7]; el.textContent = 'Morgen weer open vanaf ' + fmt(nx[0]); el.classList.add('closed'); }
  }
  document.querySelectorAll('[data-days]').forEach(function (li) {
    if (li.getAttribute('data-days').split(',').indexOf(String(day)) > -1) li.classList.add('is-today');
  });

  // demo form
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg'); if (m) m.hidden = false;
    });
  });
})();
