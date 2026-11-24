(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
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
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // day strip: open the matching menu tab
  document.querySelectorAll('[data-open]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-open'));
      if (t) select(t);
    });
  });

  // what is it now at BUUV.?
  var close = { 0: 1200, 1: null, 2: 1320, 3: 1320, 4: 1320, 5: 1380, 6: 1380 };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var label = document.getElementById('dayNow');
  var c = close[day];
  if (c === null) {
    label.textContent = 'Vandaag (maandag) zijn we gesloten. Morgen vanaf 09:30 weer welkom!';
  } else if (min < 570) {
    label.textContent = 'Vandaag open vanaf 09:30';
  } else if (min >= c) {
    label.textContent = 'Voor vandaag zitten de deuren dicht, tenzij het nog gezellig is';
  } else {
    var hh = String(Math.floor(c / 60)) + ':00';
    label.textContent = 'Nu open, ' + names[day] + ' tot ' + hh + ' (twg)';
    var cur = null;
    document.querySelectorAll('.day-parts a').forEach(function (a) {
      if (min >= +a.getAttribute('data-from') && min < +a.getAttribute('data-to')) cur = a;
    });
    if (cur) cur.classList.add('is-now');
  }

  // demo form
  var form = document.getElementById('groepForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
  });
})();
