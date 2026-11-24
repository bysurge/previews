(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('menu-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // tabs
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
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // today
  var hours = { 0: ['10:00', '16:00'], 1: null, 2: ['09:00', '16:00'], 3: ['09:00', '16:00'], 4: ['09:00', '16:00'], 5: ['09:00', '16:00'], 6: ['09:00', '16:00'] };
  var day = new Date().getDay();
  var h = hours[day];
  var el = document.getElementById('today');
  if (h) { el.textContent = 'Vandaag open van ' + h[0] + ' tot ' + h[1]; }
  else { el.textContent = 'Maandag gesloten, dinsdag vanaf 09:00 weer open'; el.classList.add('closed'); }
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('is-today');

  // demo form
  var form = document.getElementById('resform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formmsg').hidden = false;
  });
})();
