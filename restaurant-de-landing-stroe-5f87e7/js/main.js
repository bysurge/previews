(function () {
  var top = document.getElementById('top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || nav.classList.contains('open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      onScroll();
    }
  });

  // Vandaag open?
  var d = new Date().getDay(); // 0 = zondag
  var today = document.getElementById('today');
  var rows = document.querySelectorAll('.hours .week div');
  var idx = d === 0 ? 6 : d - 1;
  if (rows[idx]) rows[idx].classList.add('is-today');
  if (d >= 2 && d <= 6) {
    today.textContent = 'Vandaag open vanaf 12.00 uur';
    today.classList.add('open');
  } else {
    today.textContent = (d === 0 ? 'Zondag' : 'Maandag') + ' gesloten, dinsdag weer open vanaf 12.00 uur';
  }

  // Hero slideshow
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 6000);
  }

  // Menukaart tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!k) return;
      var nt = tabs[(n + k + tabs.length) % tabs.length];
      select(nt); nt.focus();
    });
  });

  // Voorbeeldformulier
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
