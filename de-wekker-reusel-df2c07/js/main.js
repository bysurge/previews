(function () {
  // mobiel menu
  var knop = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  function zet(open) {
    document.body.classList.toggle('menu-open', open);
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  knop.addEventListener('click', function () { zet(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) zet(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zet(false); });

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); kies(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  document.querySelectorAll('a[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) kies(t);
    });
  });

  // held: rustige wissel van foto's
  var beelden = document.querySelectorAll('.held-beeld img');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (beelden.length > 1 && !stil) {
    var n = 0;
    setInterval(function () {
      beelden[n].classList.remove('actief');
      n = (n + 1) % beelden.length;
      beelden[n].classList.add('actief');
    }, 6000);
  }

  // openingstijden van vandaag
  var tijden = {
    0: ['zondag', 'vandaag open van 11.30 tot 00.00 uur'],
    1: ['maandag', 'vandaag open van 12.00 tot 00.00 uur'],
    2: ['dinsdag', 'vandaag alleen op afspraak'],
    3: ['woensdag', 'vandaag alleen op afspraak'],
    4: ['donderdag', 'vandaag open van 11.30 tot 00.00 uur'],
    5: ['vrijdag', 'vandaag open van 11.30 tot 00.00 uur'],
    6: ['zaterdag', 'vandaag open van 16.00 tot 00.00 uur']
  };
  var dag = new Date().getDay();
  var v = document.getElementById('vandaag');
  if (v) {
    var t = tijden[dag][1];
    v.textContent = t.charAt(0).toUpperCase() + t.slice(1) + '.';
    if (dag === 2 || dag === 3) v.classList.add('dicht');
  }
  var rij = document.querySelector('#tijden [data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag-rij');

  // voorbeeldformulier: verstuurt niets
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-melding').hidden = false;
  });
})();
