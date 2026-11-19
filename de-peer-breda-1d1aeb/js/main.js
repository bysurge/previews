(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); document.body.style.overflow = ''; }
  });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // today
  var el = document.querySelector('[data-today]');
  if (el) {
    var now = new Date(), m = now.getMonth() + 1, d = now.getDate(), y = now.getFullYear();
    var closed = (m === 12 && (d === 25 || d === 26)) || (y === 2027 && m === 2 && d >= 6 && d <= 9);
    el.textContent = closed ? 'Vandaag gesloten' : 'Vandaag open van 10.30 tot 22.00 uur';
  }

  // hero photos
  var imgs = document.querySelectorAll('.pear img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var k = 0;
    setInterval(function () {
      imgs[k].classList.remove('on');
      k = (k + 1) % imgs.length;
      imgs[k].classList.add('on');
    }, 5200);
  }

  // form (preview only)
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
