(function () {
  document.documentElement.classList.add('js');

  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); });
  });

  // tabs (per group)
  document.querySelectorAll('.tabs[data-group]').forEach(function (bar) {
    var group = bar.dataset.group;
    var panel = document.querySelector('[data-group="' + group + '"]:not(.tabs)');
    var buttons = bar.querySelectorAll('button');
    function show(cat) {
      buttons.forEach(function (b) { b.setAttribute('aria-selected', String(b.dataset.cat === cat)); });
      panel.querySelectorAll(':scope > .cat').forEach(function (c) { c.classList.toggle('show', c.dataset.cat === cat); });
    }
    buttons.forEach(function (b) { b.addEventListener('click', function () { show(b.dataset.cat); }); });
    show(buttons[0].dataset.cat);
  });

  // open now; times in minutes from midnight, closing after midnight = more than 1440
  var hours = { 0: [780, 1380], 1: null, 2: null, 3: [900, 1440], 4: [1140, 1440], 5: [840, 1560], 6: [840, 1560] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hm(x) { x = x % 1440; return ('0' + Math.floor(x / 60)).slice(-2) + '.' + ('0' + (x % 60)).slice(-2); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var el = document.getElementById('openNow'), txt = null, closed = false;
  var prev = hours[(d + 6) % 7];
  if (prev && prev[1] > 1440 && m < prev[1] - 1440) txt = 'Nu open tot ' + hm(prev[1]);
  else if (hours[d] && m >= hours[d][0] && m < hours[d][1]) txt = 'Nu open tot ' + hm(hours[d][1]);
  else if (hours[d] && m < hours[d][0]) { txt = 'Vandaag open vanaf ' + hm(hours[d][0]); closed = true; }
  else {
    closed = true;
    var nd = (d + 1) % 7; while (!hours[nd]) nd = (nd + 1) % 7;
    txt = 'Nu gesloten, ' + (nd === (d + 1) % 7 ? 'morgen' : names[nd]) + ' open vanaf ' + hm(hours[nd][0]);
  }
  el.textContent = txt; el.hidden = false; el.classList.toggle('closed', closed);
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');

  // agenda: only show events from today on
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var left = 0;
  document.querySelectorAll('.event').forEach(function (ev) {
    var p = ev.dataset.date.split('-');
    var date = new Date(+p[0], +p[1] - 1, +p[2]);
    if (date < today) ev.remove(); else left++;
  });
  if (!left) document.getElementById('evEmpty').hidden = false;
})();
