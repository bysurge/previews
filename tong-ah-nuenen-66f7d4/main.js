(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('nav-open'); }
  });

  // tabs (each tablist controls the panels that follow it)
  document.querySelectorAll('.tabs').forEach(function (list) {
    var tabs = list.querySelectorAll('[role=tab]');
    function select(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on);
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.tabIndex = i ? -1 : 0;
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
      });
    });
  });

  // calm hero crossfade (own photos), off for reduced motion
  var imgs = document.querySelectorAll('.slides img');
  if (imgs.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var k = 0;
    setInterval(function () { imgs[k].classList.remove('on'); k = (k + 1) % imgs.length; imgs[k].classList.add('on'); }, 6000);
  }

  // demo form
  var f = document.getElementById('cform');
  f.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
