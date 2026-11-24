(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        document.body.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // opening hours: today
  var hours = { 0: [12 * 60, 17 * 60], 3: [18 * 60 + 15, 23 * 60], 4: [18 * 60 + 15, 23 * 60], 5: [12 * 60, 23 * 60], 6: [12 * 60, 23 * 60] };
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  document.querySelectorAll('[data-hours] [data-days]').forEach(function (row) {
    if (row.getAttribute('data-days').split(',').indexOf(String(day)) > -1) row.classList.add('is-today');
  });
  var el = document.querySelector('[data-today]');
  if (el) {
    var h = hours[day], f = function (m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); };
    if (h && min < h[1]) el.textContent = min < h[0] ? 'Vandaag open vanaf ' + f(h[0]) + ', Dorpsstraat 9' : 'Nu open tot ' + f(h[1]) + ', Dorpsstraat 9';
    else el.textContent = 'Woensdag t/m zondag open, Dorpsstraat 9';
  }

  // demo form
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelector('.demo-msg').hidden = false;
    });
  });
})();
