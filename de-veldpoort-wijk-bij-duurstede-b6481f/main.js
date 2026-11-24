(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // tabs
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
  [].forEach.call(document.querySelectorAll('[data-open]'), function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-open'));
      if (t) select(t);
    });
  });

  // today
  var hours = { 0: '22.00', 1: null, 2: '22.00', 3: '22.00', 4: '22.00', 5: '00.00', 6: '00.00' };
  var day = new Date().getDay();
  var row = document.querySelector('[data-hours] tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var badge = document.querySelector('[data-today]');
  if (badge) {
    if (hours[day]) { badge.textContent = 'Vandaag open van 11.00 tot ' + hours[day] + ' uur'; badge.classList.add('is-open'); }
    else { badge.textContent = 'Maandag gesloten, dinsdag vanaf 11.00 uur weer open'; }
  }
})();
