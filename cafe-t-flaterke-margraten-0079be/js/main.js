(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus(); n.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  });

  // highlight today in the opening hours
  var opens = { 0: '11.00', 1: '14.00', 2: null, 3: '17.00', 4: '17.00', 5: '17.00', 6: '12.00' };
  var day = new Date().getDay();
  var row = document.querySelector('.hours__list [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('vandaag');
  if (today) {
    today.textContent = opens[day]
      ? 'Vandaag open vanaf ' + opens[day] + ' uur, keuken tot 20.00 uur'
      : 'Vandaag (dinsdag) zijn we gesloten';
    if (opens[day]) today.classList.add('is-open');
  }
})();
