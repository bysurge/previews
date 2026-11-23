(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }
  var top = document.querySelector('.top');
  function onScroll() { if (top) top.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
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
  });

  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg');
      if (m) m.hidden = false;
    });
  });
})();
(function () {
  var imgs = document.querySelectorAll('.slides img');
  if (imgs.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var i = 0;
  setInterval(function () {
    imgs[i].classList.remove('on');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('on');
  }, 6000);
})();
