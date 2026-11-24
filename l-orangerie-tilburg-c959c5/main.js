(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Menu samenstellen: 3 gangen = 45,00, 4 gangen = 52,50
  var courses = Array.prototype.slice.call(document.querySelectorAll('.course'));
  var label = document.getElementById('price-label');
  var value = document.getElementById('price-value');
  var note = document.getElementById('builder-note');
  var woorden = ['geen', 'één', 'twee', 'drie', 'vier'];
  function update() {
    var n = courses.filter(function (c) { return c.getAttribute('aria-pressed') === 'true'; }).length;
    if (n === 4) { label.textContent = '4-gangenmenu'; value.textContent = '€ 52,50'; }
    else if (n === 3) { label.textContent = '3-gangenmenu'; value.textContent = '€ 45,00'; }
    else { label.textContent = 'Kies 3 of 4 gangen'; value.textContent = '–'; }
    note.textContent = n >= 3
      ? 'U heeft ' + woorden[n] + ' gangen gekozen. Per gang kiest u een van de gerechten.'
      : 'U heeft ' + woorden[n] + (n === 1 ? ' gang' : ' gangen') + ' gekozen. Het L’Orangerie menu is er met 3 of 4 gangen.';
  }
  courses.forEach(function (c) {
    c.addEventListener('click', function () {
      c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      update();
    });
  });
  update();

  // À la carte tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
})();
