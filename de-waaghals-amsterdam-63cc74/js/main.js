(function () {
  var top = document.getElementById('top-bar');
  var onScroll = function () { top.classList.toggle('solid', window.scrollY > 20); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });
})();
