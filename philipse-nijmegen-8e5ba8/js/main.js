(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Menu openen');
        nav.classList.remove('open');
      }
    });
  }

  // Openingstijden: vandaag markeren en een korte regel in de hero
  var uren = { 0: [12, 0], 1: [10.5, 0], 2: null, 3: [10.5, 0], 4: [10.5, 0], 5: [10.5, 0], 6: [10.5, 0] };
  var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('.uren tr[data-day="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var el = document.getElementById('today');
  if (!el) return;
  var h = now.getHours() + now.getMinutes() / 60;
  var open = uren[d];
  var tekst;
  if (!open) {
    tekst = 'Vandaag (dinsdag) zijn we gesloten. Morgen vanaf 10.30 weer open.';
  } else {
    var start = open[0] === 12 ? '12.00' : '10.30';
    if (h < open[0]) tekst = 'Vandaag open vanaf ' + start + ' tot 17.00.';
    else if (h < 17) tekst = 'Nu open, vandaag tot 17.00.';
    else {
      var m = (d + 1) % 7;
      tekst = uren[m] ? 'Nu gesloten. Morgen (' + namen[m] + ') open vanaf ' + (m === 0 ? '12.00' : '10.30') + '.'
                      : 'Nu gesloten. Woensdag vanaf 10.30 weer open.';
    }
  }
  el.textContent = tekst;
})();
