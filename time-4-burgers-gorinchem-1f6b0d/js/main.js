(function () {
  // mobile menu
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // clock: ticks + hands at the visitor's current time, status from opening hours
  var ns = 'http://www.w3.org/2000/svg';
  var ticks = document.querySelector('.ticks');
  for (var i = 0; i < 12; i++) {
    var l = document.createElementNS(ns, 'line');
    l.setAttribute('x1', 50); l.setAttribute('y1', 11); l.setAttribute('x2', 50); l.setAttribute('y2', i % 3 ? 15 : 18);
    l.setAttribute('transform', 'rotate(' + i * 30 + ' 50 50)');
    ticks.appendChild(l);
  }
  var hh = document.getElementById('hand-h'), mm = document.getElementById('hand-m');
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function openAt(day) { return (day === 0 || day === 6) ? 12 * 60 : 11 * 60; }
  function update() {
    var d = new Date(), m = d.getHours() * 60 + d.getMinutes(), day = d.getDay();
    hh.style.transform = 'rotate(' + ((d.getHours() % 12) * 30 + d.getMinutes() / 2) + 'deg)';
    mm.style.transform = 'rotate(' + d.getMinutes() * 6 + 'deg)';
    var o = openAt(day), close = 23 * 60 + 45;
    var box = document.querySelector('.now'), t = document.getElementById('now-title'), s = document.getElementById('now-sub');
    var label = function (x) { return pad(Math.floor(x / 60)) + ':' + pad(x % 60); };
    box.classList.remove('is-open');
    if (m < o) { t.textContent = 'Het is ' + label(m) + ', vandaag open vanaf ' + label(o); s.textContent = 'Daarna bezorgen, afhalen en aanschuiven tot laat.'; }
    else if (m < close) { box.classList.add('is-open'); t.textContent = 'Het is ' + label(m) + ', we zijn open'; s.textContent = 'Bezorgen en aanschuiven tot 23:45, afhalen tot 23:30.'; }
    else { t.textContent = 'Het is ' + label(m) + ', we zijn net dicht'; s.textContent = 'Morgen weer open vanaf ' + label(openAt((day + 1) % 7)) + '.'; }
    var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
    document.querySelectorAll('.hours-table tr.today').forEach(function (r) { r.classList.remove('today'); });
    if (row) row.classList.add('today');
  }
  // start at 12:00, then swing once to the real time
  requestAnimationFrame(function () { requestAnimationFrame(update); });
  setInterval(update, 30000);

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      var next = tabs[(n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // form: preview only
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
