(function () {
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // mobile menu
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('menu-open'); }
  });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-open-tab'))); });
  });

  // today: opening hours, next Sushi Wednesday, call times
  var now = new Date(), day = now.getDay();
  var hours = { 0: '11:00 tot ± 01:00', 1: null, 2: null, 3: '11:00 tot 23:00', 4: '11:00 tot 23:00', 5: '11:00 tot ± 01:00', 6: '11:00 tot ± 01:00' };
  var th = document.getElementById('today-hours');
  th.textContent = hours[day] ? 'open van ' + hours[day] : 'gesloten, woensdag zijn we er weer vanaf 11:00';
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');

  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var todayIso = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  var found = false;
  document.querySelectorAll('[data-date]').forEach(function (li) {
    var d = li.getAttribute('data-date');
    if (d < todayIso) li.classList.add('past');
    else if (!found) {
      found = true; li.classList.add('next');
      var label = li.textContent.replace(/^woensdag\s*/, '').replace(/\s*2026$/, '');
      document.getElementById('next-sushi').textContent = (d === todayIso ? 'vandaag' : 'woensdag ' + label) + ', vanaf 17:30';
    }
  });

  var mins = now.getHours() * 60 + now.getMinutes();
  var status = document.getElementById('call-status');
  if (hours[day]) {
    if ((mins >= 900 && mins < 1020) || (mins >= 1200 && mins < 1230)) status.textContent = 'Nu kun je ons bellen.';
    else if (mins < 900) status.textContent = 'Vandaag kun je bellen vanaf 15:00.';
    else if (mins < 1200) status.textContent = 'Vanavond kun je weer bellen van 20:00 tot 20:30.';
    var pos = (mins - 660) / 720;
    if (pos >= 0 && pos <= 1) { var m = document.getElementById('now-marker'); m.style.left = (pos * 100) + '%'; m.hidden = false; }
  }
})();
