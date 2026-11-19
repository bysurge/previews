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
    if (tab.parentNode.scrollWidth > tab.parentNode.clientWidth) {
      tab.parentNode.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
    }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById(a.getAttribute('data-tab')); if (t) kies(t); });
  });

  // Vandaag open?
  var d = new Date(), dag = d.getDay(), min = d.getHours() * 60 + d.getMinutes();
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag-rij');
  var v = document.querySelector('[data-vandaag]');
  if (v) {
    var start = (dag === 0 || dag === 6) ? 720 : 960;
    var label = (dag === 0 || dag === 6) ? '12:00' : '16:00';
    if (dag === 2) { v.textContent = 'Vandaag (dinsdag) gesloten. Morgen open vanaf 16:00 uur'; v.classList.add('dicht'); }
    else if (min >= start && min < 1320) v.textContent = 'Nu open, vandaag tot 22:00 uur';
    else if (min < start) v.textContent = 'Vandaag open van ' + label + ' tot 22:00 uur';
    else { v.textContent = dag === 1 ? 'Nu gesloten. Woensdag weer open vanaf 16:00 uur' : 'Nu gesloten. Morgen weer open vanaf ' + ((dag === 5 || dag === 6) ? '12:00' : '16:00') + ' uur'; v.classList.add('dicht'); }
  }
})();
