(function () {
  var body = document.body;

  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Sluiten' : 'Menu';
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
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
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      e.preventDefault();
      var next = tabs[(n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // catering accordion
  document.querySelectorAll('.acc-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
    });
  });

  // hero photos: calm crossfade
  var imgs = document.querySelectorAll('.hero-photo img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var k = 0;
    setInterval(function () {
      imgs[k].classList.remove('on');
      k = (k + 1) % imgs.length;
      imgs[k].classList.add('on');
    }, 6000);
  }

  // opening hours: today + open now (two kitchens with separate hours)
  // [open, close] in hours; close past midnight is > 24
  var H = {
    cafetaria: { 1: [11, 20], 2: [11, 20], 3: [11, 20], 4: [11, 22], 5: [11, 22], 6: [11, 22] },
    eetcafe: { 1: [16, 25], 2: [11, 25], 3: [11, 25], 4: [11, 25], 5: [11, 26], 6: [11, 26] }
  };
  var DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(h) { h = h % 24; return (h < 10 ? '0' : '') + h + ':00'; }
  var now = new Date();
  var day = now.getDay();
  var t = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');

  Object.keys(H).forEach(function (key) {
    var sched = H[key], out, open = false;
    var today = sched[day];
    var prev = sched[(day + 6) % 7];
    if (prev && prev[1] > 24 && t < prev[1] - 24) { open = true; out = 'Nu open tot ' + fmt(prev[1]); }
    else if (today && t >= today[0] && t < today[1]) { open = true; out = 'Nu open tot ' + fmt(today[1]); }
    else if (today && t < today[0]) { out = 'Gesloten, vandaag open vanaf ' + fmt(today[0]); }
    else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (sched[d]) { out = 'Gesloten, ' + (i === 1 ? 'morgen' : DAYS[d]) + ' open vanaf ' + fmt(sched[d][0]); break; }
      }
    }
    var el = document.querySelector('[data-status="' + key + '"]');
    var dot = document.querySelector('[data-dot="' + key + '"]');
    if (el && out) el.textContent = out;
    if (dot && open) dot.classList.add('is-open');
  });
})();
