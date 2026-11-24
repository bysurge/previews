(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
    t.addEventListener('click', function () {
      select(t);
      var menu = document.getElementById('menukaart');
      var bar = document.querySelector('.tabbar');
      if (bar.getBoundingClientRect().top <= 70) window.scrollTo({ top: bar.offsetTop - 68 + 1 });
    });
    t.addEventListener('keydown', function (e) {
      var k = e.key, n = null;
      if (k === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (k === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (k === 'Home') n = tabs[0];
      if (k === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  // today: highlight day + open/closed chip (pickup hours)
  var open = { 0: ['16:30', '20:15'], 3: ['16:00', '20:15'], 4: ['15:00', '20:15'], 5: ['13:00', '20:45'], 6: ['13:00', '20:45'] };
  var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay();
  document.querySelectorAll('.hours dl > div[data-d="' + d + '"]').forEach(function (el) { el.classList.add('is-today'); });
  var hm = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
  var txt = document.getElementById('today-txt'), chip = document.getElementById('today');
  if (!open[d]) txt.textContent = 'Vandaag (' + days[d] + ') gesloten. Woensdag t/m zondag open.';
  else if (hm < open[d][0]) txt.textContent = 'Vandaag open vanaf ' + open[d][0] + ' tot ' + open[d][1];
  else if (hm < open[d][1]) { txt.textContent = 'Nu open, afhalen tot ' + open[d][1]; chip.classList.add('is-open'); }
  else txt.textContent = 'Vandaag gesloten vanaf ' + open[d][1];
})();
