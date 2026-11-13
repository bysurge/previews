// Menu tabs, a button that opens the drinks tab, and preview forms that send nothing.
(function () {
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
  document.querySelectorAll('[data-open-tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      select(document.getElementById(b.getAttribute('data-open-tab')));
      document.getElementById('menus').scrollIntoView();
    });
  });
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
// Phone navigation toggle.
(function () {
  var b = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  if (!b || !nav) return;
  function set(open) { b.setAttribute('aria-expanded', open); nav.classList.toggle('open', open); }
  b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
