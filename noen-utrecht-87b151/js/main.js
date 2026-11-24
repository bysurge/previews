(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // Open now (hours from their own site)
  var hours = { 0: [9, 16], 1: null, 2: [8.5, 17], 3: [8.5, 17], 4: [8.5, 17], 5: [8.5, 17], 6: [9, 16] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var box = document.querySelector('[data-open]'), txt = document.querySelector('[data-open-text]');
  function fmt(x) { var hh = Math.floor(x), mm = Math.round((x - hh) * 60); return (hh < 10 ? '0' : '') + hh + '.' + (mm < 10 ? '0' : '') + mm; }
  if (box && txt) {
    var t = hours[d];
    if (t && h >= t[0] && h < t[1]) txt.textContent = 'Nu open, vandaag tot ' + fmt(t[1]) + ' uur';
    else {
      box.classList.add('closed');
      var nd = d, k = 0;
      if (t && h < t[0]) txt.textContent = 'Nu gesloten, vandaag open vanaf ' + fmt(t[0]) + ' uur';
      else {
        do { nd = (nd + 1) % 7; k++; } while (!hours[nd] && k < 7);
        var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        txt.textContent = 'Nu gesloten, ' + (k === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + fmt(hours[nd][0]) + ' uur';
      }
    }
  }

  // Demo form
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg');
      if (m) m.hidden = false;
    });
  });
})();
