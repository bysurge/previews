(function () {
  var body = document.body;
  var bar = document.getElementById('top-bar');
  var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // hero slideshow (calm crossfade)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var slides = document.querySelectorAll('.hero-slides img');
  if (!reduce && slides.length > 1) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6500);
  }

  // one-time reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // example form
  var form = document.getElementById('msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-note').hidden = false;
  });
})();
