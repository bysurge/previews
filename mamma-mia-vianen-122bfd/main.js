(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

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
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });
  // from 17:00 the dinner card is the natural default
  var now = new Date();
  if (now.getHours() >= 17) select(document.getElementById('tab-diner'));

  // today's hours
  var hours = { 0: [14, 22], 2: [12, 22], 3: [12, 22], 4: [12, 22], 5: [12, 22], 6: [12, 22] };
  var d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) {
    el.textContent = 'Nu open, vandaag tot 22.00 uur';
    el.classList.add('is-open');
  } else if (t && h < t[0]) {
    el.textContent = 'Vandaag open vanaf ' + t[0] + '.00 uur';
  } else if (!t) {
    el.textContent = 'Vandaag gesloten, morgen vanaf 12.00 uur';
  }

  // demo form
  var form = document.getElementById('resform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = document.getElementById('formmsg');
    m.hidden = false;
  });
})();
