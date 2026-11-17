(function () {
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('.nav-toggle');
  function setNav(open) { document.body.classList.toggle('nav-open', open); toggle.setAttribute('aria-expanded', open); }
  toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // Hero-slideshow (rustig, stopt bij reduced motion)
  var slides = document.querySelectorAll('.slides img');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); }, 6500);
  }

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role=tab]'));
    function sel(t) {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    }
    tabs.forEach(function (t, k) {
      t.addEventListener('click', function () { sel(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return;
        var n = tabs[(k + d + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
      });
    });
  });

  // Voorbeeldformulieren versturen niets
  document.querySelectorAll('form.demo').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.msg').hidden = false; });
  });
  var h = document.querySelector('#hours li[data-d="' + new Date().getDay() + '"]'); if (h) h.classList.add('today');
})();
