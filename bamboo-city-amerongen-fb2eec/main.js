(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // Show the phone order bar once the hero buttons are out of view
  var hero = document.querySelector('.hero .cta');
  function onScroll() { document.body.classList.toggle('past-hero', hero.getBoundingClientRect().bottom < 0); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Today's opening hours (Monday closed, Tue-Sun 16:00-21:00)
  var d = new Date().getDay(); // 0 = Sunday
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var el = document.getElementById('today');
  if (el) el.textContent = d === 1 ? 'Vandaag (maandag) gesloten, morgen weer open vanaf 16:00 uur' : 'Vandaag (' + names[d] + ') open van 16:00 tot 21:00 uur';
  var rows = document.querySelectorAll('.hours tr');
  var idx = (d + 6) % 7; // Monday first
  if (rows[idx]) rows[idx].classList.add('is-today');
})();
