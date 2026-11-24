(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (j === null) return;
      var n = tabs[(j + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });

  // today's opening status (wo-zo 17:00-21:00)
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('[data-hours] tr[data-day="' + day + '"]');
  if (row) row.classList.add('now');
  var el = document.querySelector('[data-today]');
  if (el) {
    var openDay = day >= 3 || day === 0;
    if (openDay && min >= 1020 && min < 1260) { el.textContent = 'Nu open, tot 21:00'; el.classList.add('open'); }
    else if (openDay && min < 1020) { el.textContent = 'Vandaag open van 17:00 tot 21:00'; }
    else if (day === 1 || day === 2) { el.textContent = 'Maandag en dinsdag gesloten, woensdag vanaf 17:00 weer open'; }
  }
})();
