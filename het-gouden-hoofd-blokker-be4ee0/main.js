(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // Openingstijden: [open, dicht] in uren; dicht > 24 = na middernacht
  var uren = { 0: [16, 24], 1: null, 2: null, 3: [20, 24], 4: [20, 24], 5: [20, 26], 6: [20, 26] };
  var dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function t(h) { h = h % 24; return (h < 10 ? '0' : '') + h + '.00'; }
  var nu = new Date();
  var d = nu.getDay(), h = nu.getHours() + nu.getMinutes() / 60;
  var row = document.querySelector('.week tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var tekst;
  var gisteren = uren[(d + 6) % 7];
  if (gisteren && gisteren[1] > 24 && h < gisteren[1] - 24) {
    tekst = 'Nu open, tot ' + t(gisteren[1]) + ' uur';
  } else if (uren[d]) {
    var u = uren[d];
    if (h < u[0]) tekst = 'Open van ' + t(u[0]) + ' tot ' + t(u[1]) + ' uur';
    else if (h < u[1]) tekst = 'Nu open, tot ' + t(u[1]) + ' uur';
    else tekst = 'Gesloten';
    if (d === 0 && h < 21) tekst += ', keuken vanaf 17.00';
  } else {
    tekst = 'Gesloten, woensdag vanaf 20.00 uur weer open';
  }
  if (tekst === 'Gesloten') {
    for (var i = 1; i <= 7; i++) { var nd = (d + i) % 7; if (uren[nd]) { tekst = 'Gesloten, ' + dagen[nd] + ' vanaf ' + t(uren[nd][0]) + ' uur weer open'; break; } }
  }
  document.getElementById('vandaag').textContent = tekst;

  // Agenda: voorbije items verbergen, eerste 6 tonen
  var vandaag = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate());
  var items = [].slice.call(document.querySelectorAll('#events li'));
  var komend = items.filter(function (li) {
    var p = li.getAttribute('data-date').split('-');
    var eind = new Date(+p[0], +p[1] - 1, +p[2]);
    if (eind < vandaag) { li.classList.add('voorbij'); return false; }
    return true;
  });
  var maanden = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  var volg = document.getElementById('volgende');
  if (komend.length) {
    var eerste = komend[0];
    var dt = eerste.querySelector('time').getAttribute('datetime').split('-');
    volg.textContent = eerste.querySelector('h3').textContent + ', ' + (+dt[2]) + ' ' + maanden[+dt[1] - 1];
  } else {
    document.getElementById('volgende-wrap').style.display = 'none';
  }
  var meer = document.getElementById('meer');
  var LIMIET = 6;
  if (komend.length > LIMIET) {
    komend.slice(LIMIET).forEach(function (li) { li.classList.add('verborgen'); });
    meer.addEventListener('click', function () {
      var open = meer.getAttribute('aria-expanded') === 'true';
      komend.slice(LIMIET).forEach(function (li) { li.classList.toggle('verborgen', open); });
      meer.setAttribute('aria-expanded', String(!open));
      meer.textContent = open ? 'Toon de hele agenda' : 'Toon minder';
    });
  } else {
    meer.hidden = true;
  }
})();
