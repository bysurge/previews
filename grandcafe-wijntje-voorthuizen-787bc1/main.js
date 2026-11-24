(function () {
  // Header background after scrolling
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // Hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var k = 0;
    setInterval(function () {
      slides[k].classList.remove('is-on');
      k = (k + 1) % slides.length;
      slides[k].classList.add('is-on');
    }, 6500);
  }

  // Today's opening hours
  var hours = { 0: [12, 23], 1: [11, 24], 2: [11, 24], 3: [11, 24], 4: [11, 24], 5: [10, 24], 6: [10, 24] };
  var now = new Date();
  var day = now.getDay();
  var h = hours[day];
  var hNow = now.getHours() + now.getMinutes() / 60;
  var el = document.getElementById('today');
  var fmt = function (x) { return (x < 10 ? '0' : '') + x + ':00'; };
  if (el) {
    if (hNow >= h[0] && hNow < h[1]) {
      el.textContent = 'Nu open, vandaag tot ' + fmt(h[1]);
    } else if (hNow < h[0]) {
      el.textContent = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]);
    } else {
      var nd = (day + 1) % 7;
      el.textContent = 'Morgen weer open vanaf ' + fmt(hours[nd][0]);
      el.classList.add('closed');
    }
  }
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
})();
