(function () {
  // header: solid after scrolling
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    onScroll();
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
      onScroll();
    });
  });

  // hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6500);
  }

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
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var next = tabs[(n + d + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // opening status today (ma-za 17-23, zo 14-23, 24 dec gesloten)
  var el = document.getElementById('today');
  var now = new Date();
  var day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var openAt = day === 0 ? 14 : 17;
  var txt;
  if (now.getMonth() === 11 && now.getDate() === 24) txt = 'Vandaag (24 december) gesloten';
  else if (h < openAt) txt = 'Vandaag open vanaf ' + openAt + '.00 uur';
  else if (h < 23) txt = 'Nu open, tot 23.00 uur';
  else txt = 'Morgen weer open vanaf ' + (day === 6 ? '14' : '17') + '.00 uur';
  el.textContent = txt;

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
