(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var nt = tabs[(i + n + tabs.length) % tabs.length];
      select(nt); nt.focus();
    });
  });

  // today's opening hours
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var el = document.getElementById('today');
  if (el) {
    if (d === 1) { el.textContent = 'Vandaag (maandag) gesloten, morgen weer open vanaf 11:00'; el.classList.add('closed'); }
    else if (mins < 660) { el.textContent = 'Vandaag open van 11:00 tot 18:00'; }
    else if (mins < 1080) { el.textContent = 'Nu open, tot 18:00'; }
    else { el.textContent = d === 0 ? 'Nu gesloten, dinsdag weer open vanaf 11:00' : 'Nu gesloten, morgen weer open vanaf 11:00'; el.classList.add('closed'); }
  }
})();
