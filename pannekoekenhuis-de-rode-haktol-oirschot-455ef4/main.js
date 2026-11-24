(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.menu-tabs [role=tab]'));
  var panels = [].slice.call(document.querySelectorAll('.menu-panel'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
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
      select(n); n.focus(); e.preventDefault();
    });
  });

  // search across the whole menu
  var input = document.getElementById('zoek');
  var info = document.getElementById('search-info');
  var empty = document.getElementById('search-empty');
  var menu = document.getElementById('menukaart');
  var items = [].slice.call(document.querySelectorAll('.dishes li'));
  items.forEach(function (li) { li._t = li.textContent.toLowerCase(); });
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      menu.classList.remove('searching');
      items.forEach(function (li) { li.hidden = false; });
      document.querySelectorAll('.mcat').forEach(function (c) { c.hidden = false; });
      var cur = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
      select(cur);
      info.textContent = '';
      empty.hidden = true;
      return;
    }
    menu.classList.add('searching');
    var words = q.split(/\s+/);
    var count = 0;
    items.forEach(function (li) {
      var hit = words.every(function (w) { return li._t.indexOf(w) > -1; });
      li.hidden = !hit;
      if (hit) count++;
    });
    document.querySelectorAll('.mcat').forEach(function (c) {
      c.hidden = !c.querySelector('li:not([hidden])');
    });
    panels.forEach(function (p) { p.hidden = !p.querySelector('.mcat:not([hidden])'); });
    info.textContent = count ? count + (count === 1 ? ' gerecht gevonden' : ' gerechten gevonden') : '';
    empty.hidden = count > 0;
  });

  // open today? (regular hours + holiday dates from their own site)
  var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var regular = { 4: [16, 19], 5: [16, 19], 6: [12, 19], 0: [12, 19] };
  var special = { '2026-12-24': null, '2026-12-25': null, '2026-12-26': [16, 19], '2026-12-27': [12, 19], '2026-12-31': null, '2027-01-01': null };
  function key(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function hoursFor(d) { var k = key(d); return k in special ? special[k] : (regular[d.getDay()] || null); }
  function hh(h) { return ('0' + h).slice(-2) + ':00'; }
  var now = new Date();
  var today = hoursFor(now);
  var el = document.getElementById('today');
  var h = now.getHours() + now.getMinutes() / 60;
  if (today && h >= today[0] && h < today[1]) {
    el.textContent = 'Nu open, tot ' + hh(today[1]);
    el.classList.add('is-open');
  } else if (today && h < today[0]) {
    el.textContent = 'Vandaag open van ' + hh(today[0]) + ' tot ' + hh(today[1]);
    el.classList.add('is-open');
  } else {
    for (var i = 1; i < 15; i++) {
      var d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      var o = hoursFor(d);
      if (o) {
        el.textContent = (today ? 'Nu gesloten' : 'Vandaag gesloten') + ', ' + (i === 1 ? 'morgen' : days[d.getDay()]) + ' open vanaf ' + hh(o[0]);
        el.classList.add('is-closed');
        break;
      }
    }
  }
  var row = document.querySelector('.hours-table tr[data-days*="' + now.getDay() + '"]');
  if (row) row.classList.add('now');
})();
