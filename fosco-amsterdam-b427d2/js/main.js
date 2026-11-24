(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

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

  // open now / today (Amsterdam hours: ma-do & zo 16-24, vr-za 16-01)
  var close = { 0: 24, 1: 24, 2: 24, 3: 24, 4: 24, 5: 25, 6: 25 };
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var st = document.getElementById('status');
  var prev = (day + 6) % 7;
  var label = function (c) { return c === 25 ? '01:00' : '00:00'; };
  if (h < 1 && close[prev] === 25) {
    st.textContent = 'Nu open tot 01:00'; st.classList.add('is-open');
  } else if (h >= 16) {
    st.textContent = 'Nu open tot ' + label(close[day]); st.classList.add('is-open');
  } else {
    st.textContent = 'Vandaag open vanaf 16:00';
  }
})();
