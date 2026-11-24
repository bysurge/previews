(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      select(n); n.focus();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-tab'))); });
  });

  // demo forms: nothing is sent
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.demo-msg').hidden = false;
    });
  });

  // calm hero crossfade
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 7000);
  }

  // open now (hours in minutes; closing after midnight counted past 24:00)
  var hours = { 0: [900, 1440], 3: [930, 1440], 4: [930, 1440], 5: [840, 1500], 6: [840, 1500] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); }
  var now = new Date();
  var day = now.getDay();
  var min = now.getHours() * 60 + now.getMinutes();
  var el = document.getElementById('openNow');
  var yest = hours[(day + 6) % 7];
  var today = hours[day];
  var text, open = false;
  if (yest && yest[1] > 1440 && min < yest[1] - 1440) { open = true; text = 'Nu open tot ' + fmt(yest[1]); }
  else if (today && min >= today[0] && min < today[1]) { open = true; text = 'Nu open tot ' + fmt(today[1]); }
  else if (today && min < today[0]) { text = 'Vandaag open vanaf ' + fmt(today[0]); }
  else {
    for (var k = 1; k <= 7; k++) {
      var d = (day + k) % 7;
      if (hours[d]) { text = (k === 1 ? 'Morgen' : 'Weer open op ' + names[d]) + ' vanaf ' + fmt(hours[d][0]); break; }
    }
  }
  if (el && text) { el.textContent = text; el.classList.toggle('is-open', open); }
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
})();
