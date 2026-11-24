(function () {
  // mobile menu
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // opening hours: highlight today
  var hours = { 0: '14.00 tot 22.00', 1: '16.00 tot 21.00', 2: '14.00 tot 22.00', 3: '14.00 tot 22.00', 4: '14.00 tot 22.00', 5: '14.00 tot 22.00', 6: '16.00 tot 22.00' };
  var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var d = new Date().getDay();
  var t = document.getElementById('today');
  if (t) t.textContent = 'Vandaag (' + days[d] + ') geopend van ' + hours[d] + ' uur';
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  var menu = document.querySelector('.menu');
  function show(id, focus) {
    tabs.forEach(function (b) {
      var on = b.getAttribute('aria-controls') === 'p-' + id;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
      if (on && focus) b.focus();
      if (on) { var l = b.parentNode; l.scrollLeft = Math.max(0, b.offsetLeft - l.offsetLeft - 16); }
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { show(b.getAttribute('aria-controls').slice(2)); });
    b.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      n = (n + tabs.length) % tabs.length;
      show(tabs[n].getAttribute('aria-controls').slice(2), true);
    });
  });
  // dish photos jump to a tab
  [].forEach.call(document.querySelectorAll('.dish-card'), function (c) {
    c.addEventListener('click', function () {
      zoek.value = ''; filter();
      show(c.dataset.tab);
      document.getElementById('menukaart').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // search
  var zoek = document.getElementById('zoek'), nohit = document.getElementById('nohit');
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function filter() {
    var q = norm(zoek.value.trim());
    menu.classList.toggle('searching', !!q);
    var hits = 0;
    [].forEach.call(document.querySelectorAll('.panel'), function (p) {
      var pHits = 0;
      [].forEach.call(p.querySelectorAll('.grp'), function (g) {
        var gHits = 0;
        [].forEach.call(g.querySelectorAll('li'), function (li) {
          var nr = norm(li.querySelector('.nr').textContent);
          var ok = !q || nr === q || norm(li.textContent).indexOf(q) > -1;
          li.classList.toggle('hide', !ok);
          if (ok) gHits++;
        });
        g.classList.toggle('hide', !gHits);
        pHits += gHits;
      });
      p.classList.toggle('hide', !!q && !pHits);
      hits += pHits;
    });
    nohit.hidden = !q || hits > 0;
  }
  zoek.addEventListener('input', filter);
})();
