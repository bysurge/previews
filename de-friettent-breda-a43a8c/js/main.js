(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  var kop = document.querySelector('.kop');
  window.addEventListener('scroll', function () { kop.classList.toggle('gescrold', window.scrollY > 10); }, { passive: true });

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function kies(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Vandaag open?
  var d = new Date(), dag = d.getDay(), min = d.getHours() * 60 + d.getMinutes();
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag-rij');
  var v = document.querySelector('[data-vandaag]');
  if (v) {
    var opendag = dag !== 1 && dag !== 2;
    if (opendag && min >= 720 && min < 1200) v.textContent = 'Nu open, vandaag tot 20:00 uur';
    else if (opendag && min < 720) v.textContent = 'Vandaag open van 12:00 tot 20:00 uur';
    else { v.textContent = 'Nu gesloten. Open woensdag t/m zondag, 12:00 tot 20:00 uur'; v.classList.add('dicht'); }
  }

  // Formulier: alleen voorbeeld
  var f = document.querySelector('[data-voorbeeld]');
  if (f) f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.melding').hidden = false; });
})();
