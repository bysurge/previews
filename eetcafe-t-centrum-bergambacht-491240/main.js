(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // Tabs (main tabs and sub tabs)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.filter.call(list.children, function (c) { return c.getAttribute('role') === 'tab'; });
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        var n = tabs[(i + d + tabs.length) % tabs.length];
        select(n); n.focus();
      });
    });
  });

  // Calm hero slideshow
  var slides = document.querySelectorAll('.hero-photo .slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }
})();
