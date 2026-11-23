(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // Hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.slide');
  if (!reduce && slides.length > 1) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6500);
  }

  // Opening hours (as in the footer of their current site). Minutes from midnight; close > 1440 = after midnight.
  var hours = { 0: [840, 1440], 1: [720, 1440], 2: null, 3: null, 4: [840, 1440], 5: [840, 1500], 6: [720, 1500] };
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hhmm(m) { m = m % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
  function closeLabel(m) { return m === 1440 ? '24:00' : hhmm(m); }
  var now = new Date();
  var d = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var today = document.getElementById('today');
  var prev = hours[(d + 6) % 7];
  var h = hours[d];
  var text = '', closed = false;
  if (prev && prev[1] > 1440 && mins < prev[1] - 1440) {
    text = 'Nu open, tot ' + hhmm(prev[1]);
  } else if (h && mins >= h[0] && mins < h[1]) {
    text = 'Nu open, tot ' + closeLabel(h[1]);
  } else if (h && mins < h[0]) {
    text = 'Vandaag open vanaf ' + hhmm(h[0]);
  } else {
    closed = true;
    for (var i = 1; i <= 7; i++) {
      var nd = (d + i) % 7;
      if (hours[nd]) { text = 'Nu gesloten. Weer open ' + (i === 1 ? 'morgen' : 'op ' + dayNames[nd]) + ' vanaf ' + hhmm(hours[nd][0]); break; }
    }
  }
  today.textContent = text;
  if (closed) today.classList.add('closed');
  var row = document.querySelector('#hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');

  // Monday theme: highlight this week's Monday (1st..5th Monday of the month)
  var monday = new Date(now);
  monday.setDate(now.getDate() - ((d + 6) % 7));
  var nth = Math.floor((monday.getDate() - 1) / 7);
  var mItems = document.querySelectorAll('.monday-list li');
  if (monday.getMonth() === now.getMonth() && mItems[nth]) mItems[nth].classList.add('is-today');

  // Agenda: dim past events, mark the next one
  var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  var marked = false;
  document.querySelectorAll('#events li').forEach(function (li) {
    if (li.dataset.date < todayStr) li.classList.add('past');
    else if (!marked) { li.classList.add('next'); marked = true; }
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    var bar = tab.parentNode;
    var left = tab.offsetLeft - bar.offsetLeft - 16;
    if (left < bar.scrollLeft || tab.offsetLeft + tab.offsetWidth - bar.offsetLeft > bar.scrollLeft + bar.clientWidth) bar.scrollLeft = Math.max(0, left);
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  // Start on the lunch or dinner card depending on the time of day
  if (mins >= 17 * 60 && mins < 20 * 60) select(document.getElementById('t-diner'));
  else if (d === 6 && mins >= 12 * 60 && mins < 17 * 60) select(document.getElementById('t-za'));
  document.querySelectorAll('[data-goto]').forEach(function (b) {
    b.addEventListener('click', function () { select(document.getElementById(b.dataset.goto), true); });
  });

  // Form: preview only, nothing is sent
  var form = document.getElementById('partyForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').hidden = false;
  });
})();
