(function () {
  var top = document.getElementById('top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  var call = document.querySelector('.float-call');

  function onScroll() {
    var y = window.scrollY;
    top.classList.toggle('solid', y > 60);
    if (call) call.classList.toggle('show', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a') && burger.getAttribute('aria-expanded') === 'true') burger.click();
  });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  var row = document.querySelector('.hours tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('is-today');
})();
