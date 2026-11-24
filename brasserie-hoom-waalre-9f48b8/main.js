(function () {
  var top = document.getElementById('top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    top.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Menu tabs
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // Open today?
  var d = new Date(), day = d.getDay(), mins = d.getHours() * 60 + d.getMinutes();
  var row = document.querySelector('#hoursTable tr[data-d="' + day + '"]');
  if (row) row.classList.add('now');
  var today = document.getElementById('today');
  if (day === 1) today.textContent = 'Vandaag gesloten, morgen weer open vanaf 11:30';
  else if (mins >= 690 && mins < 1290) { today.textContent = 'Nu open tot 21:30, keuken tot 20:30'; today.classList.add('open'); }
  else if (mins < 690) today.textContent = 'Vandaag open van 11:30 tot 21:30';
  else today.textContent = day === 0 ? 'Dinsdag weer open vanaf 11:30' : 'Morgen weer open vanaf 11:30';

  // Demo form
  var form = document.getElementById('resForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt je reservering hier bij HOOM binnen.';
  });
})();
