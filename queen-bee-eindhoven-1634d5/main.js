(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
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
  [].forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-tab'))); });
  });

  // today's opening hours (kitchen hours 1 nov 2026 - 1 apr 2027)
  var hours = { 1: '10.30 tot 19.00', 2: '10.30 tot 19.00', 3: '10.00 tot 19.00', 4: '10.30 tot 19.00', 5: '10.30 tot 20.00', 6: '10.30 tot 19.00' };
  var now = new Date(), d = now.getDay(), el = document.getElementById('today');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (d === 0) {
    var date = now.getDate(), next = new Date(now.getTime() + 7 * 864e5);
    var koop = date <= 7 || next.getMonth() !== now.getMonth();
    el.textContent = koop ? 'Vandaag koopzondag: keuken open van 11.00 tot 19.00 uur' : 'Vandaag gesloten, morgen keuken open vanaf 10.30 uur';
    if (koop && row) row.classList.add('now');
  } else {
    el.textContent = 'Vandaag keuken open van ' + hours[d] + ' uur';
    if (row) row.classList.add('now');
  }

  // demo form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
