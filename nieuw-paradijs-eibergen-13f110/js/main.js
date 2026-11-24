(function () {
  var bar = document.getElementById('top-bar');
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.menu-toggle');

  function onScroll() { bar.classList.toggle('solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeNav() {
    nav.classList.remove('open'); bar.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open); bar.classList.toggle('menu-open', open);
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  var panels = [].slice.call(document.querySelectorAll('[role=tabpanel]'));
  var menu = document.getElementById('menu');
  var search = document.getElementById('dish-search');
  var empty = document.getElementById('search-empty');

  function select(tab, focus) {
    if (search.value) { search.value = ''; runSearch(); }
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var top = document.getElementById('panels').getBoundingClientRect().top + window.scrollY - 140;
      if (window.scrollY > top) window.scrollTo({ top: top });
    });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      e.preventDefault();
      select(tabs[(n + tabs.length) % tabs.length], true);
    });
  });

  // search across all categories
  function runSearch() {
    var q = search.value.trim().toLowerCase();
    var hits = 0;
    menu.classList.toggle('searching', !!q);
    panels.forEach(function (p) {
      var any = false;
      [].forEach.call(p.querySelectorAll('.dish'), function (d) {
        var ok = !q || (/^\d+$/.test(q) ? d.querySelector('.nr').textContent === q || d.querySelector('.nr').textContent.indexOf(q) === 0 : d.getAttribute('data-s').indexOf(q) > -1);
        d.hidden = !ok; if (ok) { any = true; hits++; }
      });
      if (q) p.hidden = !any;
    });
    if (!q) {
      var cur = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
      panels.forEach(function (p) { p.hidden = p.id !== cur.getAttribute('aria-controls'); });
    }
    empty.hidden = !q || hits > 0;
  }
  search.addEventListener('input', runSearch);

  // today's hours
  var hours = { 0: [12, 20.5], 1: [16, 20], 2: null, 3: [16, 20], 4: [16, 20], 5: [16, 20.5], 6: [16, 20.5] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var fmt = function (h) { return (Math.floor(h) < 10 ? '0' : '') + Math.floor(h) + '.' + (h % 1 ? '30' : '00'); };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  var t = hours[d];
  if (!t) {
    today.textContent = 'Vandaag (dinsdag) zijn wij gesloten. Morgen weer open vanaf 16.00 uur.';
  } else if (h < t[0]) {
    today.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]) + ' uur.';
  } else if (h < t[1]) {
    today.textContent = 'Nu open, vandaag tot ' + fmt(t[1]) + ' uur.';
    today.classList.add('open');
  } else {
    var n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
    var day = n === (d + 1) % 7 ? 'Morgen' : names[n].charAt(0).toUpperCase() + names[n].slice(1);
    today.textContent = 'Nu gesloten. ' + day + ' weer open vanaf ' + fmt(hours[n][0]) + ' uur.';
  }

  // demo form
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
