(function () {
  var t = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  t.addEventListener('click', function () {
    var open = t.getAttribute('aria-expanded') !== 'true';
    t.setAttribute('aria-expanded', open); document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { t.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  function onScroll() { document.body.classList.toggle('show-call', window.scrollY > window.innerHeight * 0.8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (x) {
      var on = x === tab;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab); });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
})();
