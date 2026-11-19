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

  // opening hours: highlight today, show status in hero
  var H = { 0: [10, 24], 1: [10, 24], 2: [9, 24], 3: [9, 24], 4: [9, 25], 5: [9, 25], 6: [9, 25] };
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours [data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var el = document.querySelector('[data-today]');
  var fmt = function (x) { x = x % 24; return (x < 10 ? '0' : '') + x + '.00'; };
  var prev = H[(day + 6) % 7];
  if (el) {
    if (prev[1] > 24 && h < prev[1] - 24) el.textContent = 'Nu open tot ' + fmt(prev[1]) + ' uur';
    else if (h < H[day][0]) el.textContent = 'Vandaag open vanaf ' + fmt(H[day][0]) + ' uur';
    else el.textContent = 'Vandaag open tot ' + fmt(H[day][1]) + ' uur';
  }

  var form = document.getElementById('g-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
