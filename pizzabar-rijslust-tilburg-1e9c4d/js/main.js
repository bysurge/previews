(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      // Als je al verder in de kaart was, spring naar het begin van het gekozen onderdeel
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      var top = panel.getBoundingClientRect().top;
      if (top < 140) window.scrollBy(0, top - 140);
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Tijden van vandaag
  var day = new Date().getDay();
  ['rest', 'bez'].forEach(function (k) {
    var row = document.querySelector('[data-hours="' + k + '"] tr[data-day="' + day + '"]');
    if (!row) return;
    row.classList.add('is-today');
    var out = document.querySelector('[data-today="' + k + '"]');
    if (out) out.textContent = row.querySelector('td').textContent;
  });
})();
