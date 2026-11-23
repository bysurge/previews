(function () {
  var body = document.body;
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  function onScroll() {
    var y = window.scrollY;
    body.classList.toggle('scrolled', y > window.innerHeight * 0.45);
    body.classList.toggle('at-top', y < window.innerHeight * 0.6);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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

  // Today in the opening hours
  var rows = document.querySelectorAll('.uren tr');
  var d = new Date().getDay(); // 0 = zondag
  var idx = d === 0 ? 6 : d - 1;
  if (rows[idx]) rows[idx].classList.add('today');

  // Example form: sends nothing
  var form = document.getElementById('resForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('resMsg').hidden = false;
  });
})();
