(function () {
  var nav = document.getElementById('nav');
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    tog.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var tb = document.querySelector('.tabs');
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (tb.getBoundingClientRect().top <= 70) window.scrollTo(0, window.scrollY + p.getBoundingClientRect().top - 66 - tb.offsetHeight);
    });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // keuzemenu filter
  var menuSec = document.getElementById('menukaart');
  var only = document.getElementById('only-k');
  only.addEventListener('change', function () { menuSec.classList.toggle('only-k', only.checked); });
  document.querySelectorAll('[data-only-k]').forEach(function (a) {
    a.addEventListener('click', function () {
      only.checked = true; menuSec.classList.add('only-k');
      if (tabs[0]) select(tabs[0]);
    });
  });

  // reservation times 16:30-20:00, every 15 min
  var tijd = document.getElementById('tijd');
  if (tijd) {
    for (var m = 16 * 60 + 30; m <= 20 * 60; m += 15) {
      var o = document.createElement('option');
      o.textContent = Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2);
      tijd.appendChild(o);
    }
  }

  // demo forms
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
