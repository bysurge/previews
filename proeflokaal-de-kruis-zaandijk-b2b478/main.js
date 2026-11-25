(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function zetMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { zetMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) zetMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // Tabs (bierkaart en menukaart)
  function kies(tab) {
    var lijst = tab.closest('[role=tablist]');
    lijst.querySelectorAll('[role=tab]').forEach(function (t) {
      var aan = t === tab;
      t.setAttribute('aria-selected', aan ? 'true' : 'false');
      t.tabIndex = aan ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
    });
    if (tab.scrollIntoView && lijst.scrollWidth > lijst.clientWidth) {
      lijst.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
    }
  }
  document.querySelectorAll('[role=tablist]').forEach(function (lijst) {
    var tabs = Array.prototype.slice.call(lijst.querySelectorAll('[role=tab]'));
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { kies(tab); });
      tab.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        e.preventDefault();
        var doel = tabs[(n + tabs.length) % tabs.length];
        kies(doel); doel.focus();
      });
    });
  });

  // Tegels openen het juiste deel van de menukaart
  document.querySelectorAll('.tegel[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('kt-' + a.getAttribute('data-tab'));
      if (t) kies(t);
    });
  });

  // Taal van de menukaart
  var taalKnoppen = document.querySelectorAll('.taal-knop');
  taalKnoppen.forEach(function (k) {
    k.addEventListener('click', function () {
      var en = k.getAttribute('data-lang') === 'en';
      document.body.classList.toggle('en', en);
      taalKnoppen.forEach(function (x) { x.setAttribute('aria-pressed', x === k ? 'true' : 'false'); });
    });
  });

  // Vandaag open?
  var tijden = { 0: [11, 20], 1: [11, 20], 2: null, 3: [11, 22], 4: [11, 23], 5: [11, 24], 6: [11, 24] };
  var nu = new Date();
  var dag = nu.getDay();
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('nu');
  var t = tijden[dag];
  var uur = nu.getHours() + nu.getMinutes() / 60;
  var el = document.getElementById('vandaag');
  function fmt(h) { return (h === 24 ? '00' : h) + '.00'; }
  if (el) {
    if (!t) { el.textContent = 'Vandaag (dinsdag) zijn we gesloten. Morgen vanaf 11.00 uur weer open.'; el.classList.add('dicht'); }
    else if (uur < t[0]) { el.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]) + ' uur.'; }
    else if (uur < t[1]) { el.textContent = 'Nu open, tot ' + fmt(t[1]) + ' uur. Keuken tot 20.00 uur.'; }
    else { el.textContent = 'Vandaag zijn we weer dicht. Bekijk hieronder de openingstijden.'; el.classList.add('dicht'); }
  }
})();
