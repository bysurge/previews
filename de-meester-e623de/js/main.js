(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-tab'))); });
  });

  // open now (vr-zo 16-24, apr-sep zondag vanaf 12)
  var now = new Date(), day = now.getDay(), h = now.getHours(), m = now.getMonth();
  var start = (day === 0 && m >= 3 && m <= 8) ? 12 : 16;
  var el = document.querySelector('[data-now]');
  if (el && (day === 5 || day === 6 || day === 0)) {
    el.textContent = h >= start ? 'Vandaag open tot 24.00 uur' : 'Vandaag open vanaf ' + start + '.00 uur';
    el.hidden = false;
  }

  // form: preview only
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
