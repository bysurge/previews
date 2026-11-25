(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // date-bound items: hide once the date has passed
  var today = new Date(); today.setHours(0, 0, 0, 0);
  document.querySelectorAll('[data-date]').forEach(function (el) {
    if (new Date(el.getAttribute('data-date') + 'T23:59:59') < today) el.classList.add('is-past');
  });
  document.querySelectorAll('[data-until]').forEach(function (el) {
    if (new Date(el.getAttribute('data-until') + 'T00:00:00') <= new Date()) el.remove();
  });

  // opening hours today
  var hours = { 0: '12:00 – 00:30', 1: '16:00 – 00:30', 2: '16:00 – 00:30', 3: '16:00 – 00:30', 4: '16:00 – 02:00', 5: '16:00 – 03:00', 6: '12:00 – 03:00' };
  var d = new Date().getDay();
  document.getElementById('today-label').textContent = 'Vandaag open';
  document.getElementById('today-hours').textContent = hours[d];
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');

  // calm hero slideshow
  var slides = document.querySelectorAll('.hero-slides img');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6500);
  }
})();
