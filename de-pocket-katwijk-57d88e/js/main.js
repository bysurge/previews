(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // header logo only after the big hero logo has scrolled away
  var top = document.getElementById('top');
  var heroLogo = document.querySelector('.hero-logo');
  function onScroll() {
    var r = heroLogo.getBoundingClientRect();
    top.classList.toggle('at-hero', r.bottom > 70 && !nav.classList.contains('open'));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  burger.addEventListener('click', onScroll);
  onScroll();

  // opening hours: every day from 14:30; closes 01:00, Fri and Sat 03:00 (next morning)
  var closeHour = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 3, 6: 3 };
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var d = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var prev = (d + 6) % 7;
  var row = document.querySelector('#hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');

  var msg, open = false;
  var pad = function (h) { return (h < 10 ? '0' : '') + h + ':00'; };
  if (mins < closeHour[prev] * 60) {
    open = true; msg = 'Nu open tot ' + pad(closeHour[prev]);
  } else if (mins >= 14 * 60 + 30) {
    open = true; msg = 'Nu open tot ' + pad(closeHour[d]) + ' vannacht';
  } else {
    msg = 'Vandaag (' + dayNames[d] + ') open vanaf 14:30 tot ' + pad(closeHour[d]);
  }
  var el = document.getElementById('open-now');
  if (el) { el.textContent = msg; el.classList.toggle('is-open', open); }

  // hide events that have passed
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  document.querySelectorAll('#events li[data-date]').forEach(function (li) {
    var p = li.getAttribute('data-date').split('-');
    if (new Date(+p[0], p[1] - 1, +p[2]) < today) li.remove();
  });
})();
