(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  var bar = document.getElementById('top-bar');

  function closeNav() { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });

  function onScroll() { bar.classList.toggle('is-solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // hero: calm crossfade between their own photos
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }

  // demo form: never sends anything
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
