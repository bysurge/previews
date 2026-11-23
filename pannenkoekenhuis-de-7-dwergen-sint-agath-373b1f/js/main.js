(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); select(tabs[(i + 1) % tabs.length], true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length], true); }
    });
  });
})();

// "Vandaag" line from the opening hours on this page
(function () {
  var el = document.getElementById('today');
  if (!el) return;
  var now = new Date();
  var m = now.getMonth(), d = now.getDate(), wd = now.getDay();
  var rows = document.querySelectorAll('.hours tr');
  var rowIdx = (wd + 6) % 7; // monday = 0
  // Christmas holiday (21 Dec - 3 Jan): extra opening days, others not stated -> point to the table
  var inXmas = (m === 11 && d >= 21) || (m === 0 && d <= 3);
  if (inXmas) {
    var extra = (m === 11 && [21, 22, 23, 27, 28, 29, 30].indexOf(d) > -1) || (m === 0 && (d === 2 || d === 3));
    if (extra) { el.textContent = 'Vandaag open van 12.00 tot 20.00 uur'; el.hidden = false; }
    return;
  }
  var times = [null, null, '16.00 tot 20.00', '16.00 tot 20.00', '16.00 tot 20.00', '12.00 tot 20.00', '12.00 tot 20.00'][rowIdx];
  if (rows[rowIdx]) rows[rowIdx].classList.add('is-today');
  el.textContent = times ? 'Vandaag open van ' + times + ' uur' : 'Vandaag gesloten, woensdag weer open vanaf 16.00 uur';
  if (!times) el.classList.add('closed');
  el.hidden = false;
})();
