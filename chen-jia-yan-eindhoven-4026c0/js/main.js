(function () {
  // mobile menu
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (tab.scrollIntoView) tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // today
  var day = new Date().getDay();
  var hours = { 0: '12:00 tot 21:00', 1: '12:00 tot 21:00', 2: '12:00 tot 21:00', 3: null, 4: '12:00 tot 21:00', 5: '12:00 tot 22:00', 6: '12:00 tot 22:00' };
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var ho = document.getElementById('hero-open');
  ho.innerHTML = hours[day]
    ? '<strong>Vandaag open van ' + hours[day] + '.</strong> Woensdag gesloten.'
    : '<strong>Vandaag (woensdag) zijn we gesloten.</strong> Morgen weer open vanaf 12:00.';
})();
