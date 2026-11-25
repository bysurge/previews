(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // open today (Mon-Sat 10-15)
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours li[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var open = d !== 0 && m >= 600 && m < 900;
  var line = document.getElementById('openline');
  if (open) { document.getElementById('opendot').classList.add('open'); line.textContent = 'Nu open tot 15:00'; }
  else if (d !== 0 && m < 600) line.textContent = 'Vandaag open van 10:00 tot 15:00';
  else line.textContent = 'Maandag t/m zaterdag 10:00 - 15:00';

  // demo form
  document.getElementById('vraag').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
