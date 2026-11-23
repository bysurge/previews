(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // tabs (every [role=tablist] on the page)
  function select(list, btn) {
    list.querySelectorAll('[role=tab]').forEach(function (b) {
      var on = b === btn;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    btn.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    tabs.forEach(function (b, i) {
      b.addEventListener('click', function () { select(list, b); });
      b.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (j === null) return;
        var t = tabs[(j + tabs.length) % tabs.length];
        select(list, t); t.focus(); e.preventDefault();
      });
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var btn = document.getElementById('t-' + a.getAttribute('data-open-tab'));
      if (btn) select(btn.closest('[role=tablist]'), btn);
    });
  });

  // hero crossfade (skipped when reduced motion is preferred)
  var slides = document.querySelectorAll('.hero-slides img');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var k = 0;
    setInterval(function () {
      slides[k].classList.remove('is-on');
      k = (k + 1) % slides.length;
      slides[k].classList.add('is-on');
    }, 6000);
  }
})();

// example forms never send anything
document.querySelectorAll('form').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = f.parentNode.querySelector('.nb-msg');
    if (m) m.hidden = false;
  });
});
