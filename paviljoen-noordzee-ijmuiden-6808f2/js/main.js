(function () {
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // winteropeningstijden (1 nov 2026 - 1 mrt 2027): vandaag op het gele label
  var hours = { 4: [12, 18], 5: [11, 20], 6: [11, 21], 0: [11, 21] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var winter = now >= new Date(2026, 10, 1) && now < new Date(2027, 2, 2);
  var el = document.querySelector('[data-today]');
  if (el && winter) {
    var t = hours[day];
    if (t && h < t[1]) {
      el.textContent = (h >= t[0] ? 'Nu open, tot ' : 'Vandaag open ' + t[0] + ':00 tot ') + t[1] + ':00';
    } else {
      var n = (day + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
      el.textContent = 'Vandaag gesloten. Weer open op ' + names[n] + ' vanaf ' + hours[n][0] + ':00';
    }
  }
  [].forEach.call(document.querySelectorAll('.hours tr[data-days]'), function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('today');
  });

  [].forEach.call(document.querySelectorAll('form[data-demo]'), function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.demo-msg').hidden = false; });
  });
})();
