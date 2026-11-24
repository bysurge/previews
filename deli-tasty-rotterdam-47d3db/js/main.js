(function () {
  // mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  // nu open?
  try {
    var parts = new Intl.DateTimeFormat('nl-NL', { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var h = 0, m = 0;
    parts.forEach(function (p) { if (p.type === 'hour') h = +p.value; if (p.type === 'minute') m = +p.value; });
    var mins = h * 60 + m;
    var el = document.getElementById('openNu');
    if (mins >= 720 && mins < 1320) el.textContent = 'Nu open, vandaag tot 22:00 (keuken tot 21:30)';
    else { el.textContent = 'Dagelijks open van 12:00 tot 22:00'; el.previousElementSibling.style.display = 'none'; }
  } catch (e) {}

  // voorbeeldformulier
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').hidden = false;
  });
})();
