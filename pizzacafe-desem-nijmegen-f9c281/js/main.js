(function () {
  var t = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  function setOpen(o) {
    t.setAttribute('aria-expanded', o ? 'true' : 'false');
    t.setAttribute('aria-label', o ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', o);
    document.body.style.overflow = o ? 'hidden' : '';
  }
  t.addEventListener('click', function () { setOpen(t.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (b) {
      var on = b === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
})();
