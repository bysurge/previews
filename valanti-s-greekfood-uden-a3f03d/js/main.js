(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
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
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      var next = tabs[(n + tabs.length) % tabs.length];
      next.focus(); select(next); e.preventDefault();
    });
  });

  // today's hours (Ma, Wo-Zo 15:00-21:00, di gesloten)
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#times tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  if (today) {
    if (d === 2) { today.textContent = 'Vandaag (dinsdag) zijn we gesloten · morgen weer open vanaf 15:00'; today.classList.add('is-closed'); }
    else if (mins >= 900 && mins < 1260) { today.textContent = 'Nu open · vandaag tot 21:00 · bezorgen vanaf 15:30'; today.classList.add('is-open'); }
    else if (mins < 900) { today.textContent = 'Vandaag open van 15:00 tot 21:00'; }
    else { today.textContent = 'Nu gesloten · ' + (d === 1 ? 'woensdag' : 'morgen') + ' weer open vanaf 15:00'; today.classList.add('is-closed'); }
  }
})();
