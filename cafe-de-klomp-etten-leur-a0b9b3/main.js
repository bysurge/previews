(function () {
  document.documentElement.classList.add('js');

  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // dates
  var now = new Date();
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var todayIso = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  var DAG = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var MND = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  var gigs = Array.prototype.slice.call(document.querySelectorAll('.gig'));
  var next = null, todayGig = null;
  gigs.forEach(function (g) {
    var d = g.getAttribute('data-date');
    var end = g.getAttribute('data-end') || d;
    if (end < todayIso) g.classList.add('is-past');
    if (d <= todayIso && end >= todayIso) todayGig = g;
    if (!next && d >= todayIso && !g.classList.contains('gig-dicht')) next = g;
  });
  if (next) next.classList.add('is-next');

  // months with both past and upcoming events: fold the past ones away
  Array.prototype.forEach.call(document.querySelectorAll('.month'), function (m) {
    var past = m.querySelectorAll('.gig.is-past').length;
    var all = m.querySelectorAll('.gig').length;
    if (!past || past === all) return;
    m.classList.add('hide-past');
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'past-toggle';
    b.setAttribute('aria-expanded', 'false');
    var label = function () { return m.classList.contains('hide-past') ? 'Eerder deze maand: ' + past + (past === 1 ? ' optreden' : ' optredens') + ' (tonen)' : 'Eerdere optredens verbergen'; };
    b.textContent = label();
    b.addEventListener('click', function () {
      m.classList.toggle('hide-past');
      b.setAttribute('aria-expanded', m.classList.contains('hide-past') ? 'false' : 'true');
      b.textContent = label();
    });
    m.querySelector('.gigs').before(b);
  });

  // month tabs: open on the month of the next event
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var months = Array.prototype.slice.call(document.querySelectorAll('.month'));
  function show(key) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.getAttribute('data-month') === key ? 'true' : 'false'); });
    months.forEach(function (m) { m.classList.toggle('is-on', m.getAttribute('data-month') === key); });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { show(t.getAttribute('data-month')); });
  });
  var startKey = next ? next.getAttribute('data-date').slice(0, 7) : tabs[tabs.length - 1].getAttribute('data-month');
  if (!document.querySelector('.month[data-month="' + startKey + '"]')) startKey = tabs[0].getAttribute('data-month');
  show(startKey);
  var activeTab = document.querySelector('.tab[aria-selected="true"]');
  if (activeTab && activeTab.parentNode.scrollTo) activeTab.parentNode.scrollLeft = activeTab.offsetLeft - 8;

  // hero: next event
  if (next) {
    var box = document.querySelector('[data-next]');
    var d = new Date(next.getAttribute('data-date') + 'T12:00:00');
    var when = d.getTime() === new Date(todayIso + 'T12:00:00').getTime() ? 'Vandaag' : DAG[d.getDay()].charAt(0).toUpperCase() + DAG[d.getDay()].slice(1) + ' ' + d.getDate() + ' ' + MND[d.getMonth()];
    document.querySelector('[data-next-act]').textContent = next.querySelector('.g-act').textContent;
    document.querySelector('[data-next-when]').textContent = when + ', ' + next.querySelector('.g-time').firstChild.textContent.toLowerCase();
    box.hidden = false;
  }

  // opening hours today
  var HOURS = { 0: '14.00 – 23.00', 1: '16.00 – 22.00', 5: '16.00 – 02.00', 6: '14.00 – 02.00' };
  var dow = now.getDay();
  var row = document.querySelector('.hours tr[data-day="' + dow + '"]');
  if (row) row.classList.add('is-today');
  var todayEl = document.querySelector('[data-today]');
  var txt;
  if (todayGig && todayGig.classList.contains('gig-dicht')) txt = 'Vandaag zijn we gesloten. Fijne feestdagen!';
  else if (todayGig) txt = 'Vandaag: <b>' + todayGig.querySelector('.g-act').textContent + '</b>, ' + todayGig.querySelector('.g-time').firstChild.textContent.toLowerCase() + '.';
  else if (HOURS[dow]) txt = 'Vandaag (' + DAG[dow] + ') open van <b>' + HOURS[dow] + '</b>.';
  else txt = 'Vandaag (' + DAG[dow] + ') zijn we gesloten. Vrijdag vanaf 16.00 weer open.';
  todayEl.innerHTML = txt;
})();
