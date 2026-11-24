document.documentElement.classList.add('js');

// mobiel menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });
})();

// menukaart tabs
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  if (tabs.length) select(tabs[0]);
})();

// openingstijden: vandaag markeren + status in de hero
(function () {
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var month = now.getMonth() + 1; // 1-12
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function t(m) { var h = Math.floor(m / 60), mm = m % 60; return h + '.' + (mm < 10 ? '0' : '') + mm; }

  document.querySelectorAll('.hours > div').forEach(function (row) {
    if (+row.getAttribute('data-day') === day) row.classList.add('today');
  });

  // bar: alleen begintijden bekend
  var dartSeason = month >= 9 || month <= 4;
  var bar = { 2: dartSeason ? 19 * 60 + 30 : null, 4: 20 * 60, 5: 15 * 60 + 30, 6: 15 * 60 + 30, 0: 15 * 60 + 30 };
  // snackbar: blokken [van, tot]
  var snack = {
    3: [[720, 810], [1020, 1200]], 4: [[720, 810], [1020, 1200]],
    5: [[690, 810], [1020, 1260]], 6: [[720, 810], [960, 1320]], 0: [[960, 1200]]
  };

  function nextBarDay() {
    for (var i = 1; i <= 7; i++) { var d = (day + i) % 7; if (bar[d] != null) return [d, bar[d]]; }
  }
  var barEl = document.querySelector('[data-status="bar"]');
  if (barEl) {
    var s;
    if (bar[day] != null && mins >= bar[day]) { s = 'Bar: vandaag open vanaf ' + t(bar[day]) + ' uur'; barEl.classList.add('is-open'); }
    else if (bar[day] != null) s = 'Bar: vandaag open vanaf ' + t(bar[day]) + ' uur';
    else { var n = nextBarDay(); s = 'Bar: weer open op ' + names[n[0]] + ' vanaf ' + t(n[1]) + ' uur'; }
    barEl.textContent = s;
  }

  var snackEl = document.querySelector('[data-status="snack"]');
  if (snackEl) {
    var blocks = snack[day] || [], txt = null;
    for (var i = 0; i < blocks.length; i++) {
      if (mins >= blocks[i][0] && mins < blocks[i][1]) { txt = 'Nu open tot ' + t(blocks[i][1]) + ' uur'; snackEl.classList.add('is-open'); break; }
      if (mins < blocks[i][0]) { txt = 'Vandaag weer open om ' + t(blocks[i][0]) + ' uur'; break; }
    }
    if (!txt) {
      for (var k = 1; k <= 7; k++) { var d = (day + k) % 7; if (snack[d]) { txt = 'Weer open op ' + names[d] + ' om ' + t(snack[d][0][0]) + ' uur'; break; } }
    }
    snackEl.textContent = txt;
  }
})();
