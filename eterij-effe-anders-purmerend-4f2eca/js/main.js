(function () {
  // Kop krijgt een achtergrond zodra je scrolt
  var kop = document.querySelector('.kop');
  function opScroll() { kop.classList.toggle('gescrold', window.scrollY > 40); }
  window.addEventListener('scroll', opScroll, { passive: true });
  opScroll();

  // Mobiel menu
  var knop = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  function zetMenu(open) {
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  }
  knop.addEventListener('click', function () { zetMenu(knop.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) zetMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // Kaarten: tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function kies(tab, focus) {
    tabs.forEach(function (t) {
      var aan = t === tab;
      t.setAttribute('aria-selected', aan ? 'true' : 'false');
      t.tabIndex = aan ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Vandaag in de openingstijden
  var rij = document.querySelector('.tijden tr[data-dag="' + new Date().getDay() + '"]');
  if (rij) rij.classList.add('vandaag');

  // Rustige wissel van sfeerbeelden in de hero
  var beelden = document.querySelectorAll('.hero-beelden img');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (beelden.length > 1 && !stil) {
    var n = 0;
    setInterval(function () {
      beelden[n].classList.remove('actief');
      n = (n + 1) % beelden.length;
      beelden[n].classList.add('actief');
    }, 6000);
  }
})();
