(function () {
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  function onScroll() { header.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('open', open);
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
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
      select(n); n.focus();
    });
  });

  // Openingstijden van vandaag
  var day = new Date().getDay();
  var row = document.querySelector('#hoursTable tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var openFrom = (day >= 1 && day <= 3) ? 16 * 60 : 12 * 60, closeAt = 21 * 60 + 30;
  var now = new Date(), mins = now.getHours() * 60 + now.getMinutes();
  var fromTxt = (day >= 1 && day <= 3) ? '16:00' : '12:00';
  var p = document.getElementById('today'), txt = document.getElementById('todayText');
  if (mins >= openFrom && mins < closeAt) { p.classList.add('open'); txt.textContent = 'Nu open, vandaag tot 21:30'; }
  else if (mins < openFrom) { txt.textContent = 'Vandaag open van ' + fromTxt + ' tot 21:30'; }
  else { txt.textContent = 'Morgen weer open vanaf ' + (((day + 1) % 7 >= 1 && (day + 1) % 7 <= 3) ? '16:00' : '12:00'); }

  // Rustige diavoorstelling
  var slides = document.querySelectorAll('.hero-slides > *');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }
})();
