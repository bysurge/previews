(function () {
  // Mobiel menu
  var knop = document.querySelector('.menu-knop');
  var nav = document.getElementById('hoofdnav');
  if (knop && nav) {
    knop.addEventListener('click', function () {
      var open = knop.getAttribute('aria-expanded') === 'true';
      knop.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        knop.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function kies(tab, focus) {
    tabs.forEach(function (t) {
      var actief = t === tab;
      t.setAttribute('aria-selected', String(actief));
      t.tabIndex = actief ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !actief;
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
  var uren = { 0: [11, 22], 1: [11, 22], 2: [10.5, 22], 3: null, 4: null, 5: [11, 23], 6: [10.5, 23] };
  var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function tijd(u) { var h = Math.floor(u), m = Math.round((u - h) * 60); return h + ':' + (m < 10 ? '0' : '') + m; }
  var nu = new Date();
  var dag = nu.getDay();
  var uur = nu.getHours() + nu.getMinutes() / 60;
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('nu');
  var el = document.getElementById('vandaag');
  if (el) {
    var v = uren[dag], tekst, open = false;
    if (v && uur >= v[0] && uur < v[1]) { tekst = 'Nu open, vandaag tot ' + tijd(v[1]); open = true; }
    else if (v && uur < v[0]) { tekst = 'Vandaag open vanaf ' + tijd(v[0]); }
    else {
      var d = dag, stap = 0;
      do { d = (d + 1) % 7; stap++; } while (!uren[d] && stap < 7);
      tekst = 'Nu gesloten, ' + (stap === 1 ? 'morgen' : namen[d]) + ' weer open vanaf ' + tijd(uren[d][0]);
    }
    el.textContent = tekst;
    el.classList.toggle('open', open);
  }

  // Formulier (voorbeeld)
  var form = document.getElementById('formulier');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('melding').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Mail of bel gerust direct.';
    });
  }
})();
