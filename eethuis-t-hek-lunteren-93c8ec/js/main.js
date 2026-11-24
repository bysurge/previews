(function () {
  var kop = document.querySelector('.kop');
  var knop = document.getElementById('menuknop');
  var nav = document.getElementById('nav');

  function opScroll() { kop.classList.toggle('vast', window.scrollY > 40 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', opScroll, { passive: true });
  opScroll();

  function zetMenu(open) {
    document.body.classList.toggle('menu-open', open);
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.querySelector('.sr').textContent = open ? 'Menu sluiten' : 'Menu openen';
    document.body.style.overflow = open ? 'hidden' : '';
    opScroll();
  }
  knop.addEventListener('click', function () { zetMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) zetMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // Menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
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

  // Vandaag open?
  var tijden = { 3: [16.5, 20], 4: [16.5, 20], 5: [11, 20], 6: [11, 20] };
  var tekst = { 3: '16:30 – 20:00', 4: '16:30 – 20:00', 5: '11:00 – 20:00', 6: '11:00 – 20:00' };
  var nu = new Date(), dag = nu.getDay(), uur = nu.getHours() + nu.getMinutes() / 60;
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag-rij');
  var el = document.getElementById('vandaag');
  if (el) {
    var t = tijden[dag];
    if (t && uur >= t[0] && uur < t[1]) { el.textContent = 'Nu open, vandaag tot 20:00'; el.classList.add('open'); }
    else if (t && uur < t[0]) { el.textContent = 'Vandaag open ' + tekst[dag]; }
    else {
      var d = (dag + 1) % 7, n = 1; while (!tijden[d] && n < 7) { d = (d + 1) % 7; n++; }
      var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      el.textContent = 'Nu gesloten, ' + (n === 1 ? 'morgen' : namen[d]) + ' weer open vanaf ' + tekst[d].slice(0, 5);
    }
  }

  // Formulier verstuurt niets
  var form = document.getElementById('formulier');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-melding').hidden = false;
  });
})();
