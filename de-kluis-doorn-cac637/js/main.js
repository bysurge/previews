(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // today's opening line + highlight in hours table (same hours every day)
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  if (today) {
    var h = new Date().getHours() + new Date().getMinutes() / 60;
    if (h >= 22) today.textContent = 'Morgen weer open vanaf 10:00';
    else if (h < 10) today.textContent = 'Vandaag open van 10:00 tot 22:00';
  }

  // reservation times
  var tijd = document.getElementById('tijd');
  if (tijd) {
    for (var m = 11 * 60; m <= 20 * 60; m += 30) {
      var o = document.createElement('option');
      o.textContent = String(Math.floor(m / 60)).padStart(2, '0') + ':' + (m % 60 ? '30' : '00');
      if (m === 18 * 60) o.selected = true;
      tijd.appendChild(o);
    }
  }

  // demo form
  var form = document.getElementById('resform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('formmsg');
      msg.hidden = false;
    });
  }
})();
