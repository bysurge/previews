(function () {
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var o = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', o);
    document.body.style.overflow = o ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function show(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + tabs.length) % tabs.length;
      tabs[n].focus(); show(tabs[n]); e.preventDefault();
    });
  });

  // Open nu? (Nederlandse tijd)
  var H = { 0: [16, 19], 1: null, 2: [11, 19], 3: [11, 20], 4: [11, 20], 5: [10, 20], 6: [12, 19] };
  var DN = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  try {
    var p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var g = function (t) { return p.filter(function (x) { return x.type === t; })[0].value; };
    var d = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[g('weekday')];
    var m = (+g('hour') % 24) * 60 + (+g('minute'));
    var h = H[d], b = document.getElementById('open-badge');
    var row = document.querySelector('#hours tr[data-d="' + d + '"]');
    if (row) row.className = 'today';
    var open = h && m >= h[0] * 60 && m < h[1] * 60;
    b.hidden = false;
    if (open) { b.textContent = 'Nu open, tot ' + h[1] + '.00 uur'; }
    else {
      b.className = 'open-badge is-closed';
      var txt = 'Nu gesloten';
      for (var i = 0; i < 8; i++) {
        var dd = (d + i) % 7, hh = H[dd];
        if (!hh) continue;
        if (i === 0 && m >= hh[0] * 60) continue;
        if (i === 0) txt += ', vandaag open vanaf ' + hh[0] + '.00 uur';
        else if (i === 1) txt += ', morgen open vanaf ' + hh[0] + '.00 uur';
        else txt += ', open op ' + DN[dd] + ' vanaf ' + hh[0] + '.00 uur';
        break;
      }
      b.textContent = txt;
    }
  } catch (e) {}
})();
