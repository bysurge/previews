(function () {
  var top = document.getElementById('top');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); onScroll(); }
  });

  // hero slideshow
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on ? 'true' : 'false');
      o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var nt = tabs[(n + d + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // today in opening hours
  var row = document.querySelector('.hours tr[data-day="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
