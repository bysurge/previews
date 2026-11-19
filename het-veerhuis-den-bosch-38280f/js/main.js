(function () {
  var top = document.getElementById('top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');

  // header: dicht kleuren na de hero
  function onScroll() { top.classList.toggle('vast', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobiel menu
  function sluit() {
    document.body.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Menu openen');
  }
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) sluit(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') sluit(); });

  // hero-slideshow (rustig, stopt bij reduced motion)
  var slides = document.querySelectorAll('.slides picture');
  var dots = document.querySelectorAll('.stippen button');
  var i = 0, timer;
  function toon(n) {
    slides[i].classList.remove('aan'); dots[i].classList.remove('aan');
    i = n; slides[i].classList.add('aan'); dots[i].classList.add('aan');
  }
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function start() { if (!stil) timer = setInterval(function () { toon((i + 1) % slides.length); }, 6500); }
  dots.forEach(function (d, n) { d.addEventListener('click', function () { clearInterval(timer); toon(n); start(); }); });
  start();

  // menukaart-tabs
  var tabs = document.querySelectorAll('[role=tab]');
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var nt = tabs[(n + d + tabs.length) % tabs.length]; nt.focus(); kies(nt); }
    });
  });
  function kies(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      var p = document.getElementById(x.getAttribute('aria-controls'));
      p.hidden = !on; p.classList.toggle('aan', on);
    });
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  // openingstijden: vandaag + nu open?
  var uren = { 0: [9, 21], 3: [11.5, 21], 4: [11.5, 21], 5: [11.5, 22], 6: [11.5, 22] };
  var nu = new Date(), dag = nu.getDay(), h = nu.getHours() + nu.getMinutes() / 60;
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag');
  var st = document.getElementById('status');
  var u = uren[dag];
  var open = u && h >= u[0] && h < u[1];
  st.hidden = false;
  st.classList.toggle('open', !!open);
  st.querySelector('span').textContent = open
    ? 'Nu open, tot ' + u[1] + '.00 uur'
    : 'Nu gesloten';
})();
