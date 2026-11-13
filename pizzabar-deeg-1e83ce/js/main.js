// DEEG preview: header, mobile nav, menu tabs, demo forms that send nothing.
(function () {
  var body = document.body;
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
