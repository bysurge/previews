(function () {
  var bar = document.getElementById('top-bar');
  var toggle = document.querySelector('.nav-toggle');
  function onScroll() { bar.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // a la carte tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = i ? -1 : 0;
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); select(n);
    });
  });

  // takeaway: open/close all categories
  var all = document.querySelector('.toggle-all');
  var cats = document.querySelectorAll('.cat');
  all.addEventListener('click', function () {
    var open = all.getAttribute('data-open') !== '1';
    cats.forEach(function (c) { c.open = open; });
    all.setAttribute('data-open', open ? '1' : '0');
    all.textContent = open ? 'Alles dichtklappen' : 'Alles openklappen';
  });

  // demo form
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
