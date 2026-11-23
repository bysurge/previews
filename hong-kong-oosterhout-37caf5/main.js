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
    a.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });

  // open now (Europe/Amsterdam is assumed to be the visitor's local time)
  var hours = { 0: [16 * 60, 21 * 60], 1: null, 2: [960, 1230], 3: [960, 1230], 4: [960, 1230], 5: [960, 1230], 6: [960, 1230] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var el = document.getElementById('openNow');
  function hm(x) { return Math.floor(x / 60) + ':' + ('0' + (x % 60)).slice(-2); }
  var t = hours[d], txt, closed = false;
  if (t && m >= t[0] && m < t[1]) txt = 'Nu open, bestellen kan tot ' + hm(t[1]);
  else if (t && m < t[0]) { txt = 'Vandaag open vanaf ' + hm(t[0]); closed = true; }
  else {
    closed = true;
    var nd = (d + 1) % 7; while (!hours[nd]) nd = (nd + 1) % 7;
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    txt = (d === 1 ? 'Maandag gesloten' : 'Nu gesloten') + ', ' + (nd === (d + 1) % 7 ? 'morgen' : names[nd]) + ' weer open vanaf ' + hm(hours[nd][0]);
  }
  el.textContent = txt; el.hidden = false; el.classList.toggle('closed', closed);
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');

  // menu tabs + search
  var tabs = document.querySelectorAll('.tabs button');
  var cats = document.querySelectorAll('.cat');
  var search = document.getElementById('menuSearch');
  var noHit = document.getElementById('noHit');
  function show(cat) {
    tabs.forEach(function (b) { b.setAttribute('aria-selected', String(b.dataset.cat === cat)); });
    cats.forEach(function (c) {
      c.classList.toggle('show', c.dataset.cat === cat);
      c.querySelectorAll('li').forEach(function (li) { li.hidden = false; });
    });
    noHit.hidden = true;
  }
  tabs.forEach(function (b) {
    b.addEventListener('click', function () { search.value = ''; show(b.dataset.cat); });
  });
  show('soep');
  search.addEventListener('input', function () {
    var q = search.value.trim().toLowerCase();
    if (!q) { var sel = document.querySelector('.tabs button[aria-selected="true"]'); show(sel ? sel.dataset.cat : 'soep'); return; }
    tabs.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
    var any = false;
    cats.forEach(function (c) {
      var hit = false;
      c.querySelectorAll('li').forEach(function (li) {
        var ok = li.textContent.toLowerCase().indexOf(q) > -1;
        li.hidden = !ok; if (ok) hit = true;
      });
      c.classList.toggle('show', hit); if (hit) any = true;
    });
    noHit.hidden = any;
  });

  // contact form: preview only
  var form = document.getElementById('mailForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').hidden = false;
  });

  // floating call button on phones after the hero
  var fab = document.querySelector('.call-fab');
  var hero = document.querySelector('.hero');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { fab.classList.toggle('show', !en[0].isIntersecting); }).observe(hero);
  }
})();
