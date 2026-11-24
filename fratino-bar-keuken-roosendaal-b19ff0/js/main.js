(function () {
  var btn = document.getElementById('nav-btn');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // hero slideshow (calm crossfade)
  var imgs = document.querySelectorAll('.hero-photos img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var k = 0;
    setInterval(function () {
      imgs[k].classList.remove('is-on');
      k = (k + 1) % imgs.length;
      imgs[k].loading = 'eager';
      imgs[k].classList.add('is-on');
    }, 6000);
  }

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
