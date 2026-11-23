(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Openingstijden: [open, dicht] in minuten; dicht na middernacht = > 1440
  var H = { 0: [780, 1260], 1: null, 2: [900, 1440], 3: [900, 1470], 4: [900, 1470], 5: [780, 1530], 6: [780, 1530] };
  var now = new Date();
  var d = now.getDay();
  var m = now.getHours() * 60 + now.getMinutes();
  function fmt(x) { x = x % 1440; return ('0' + Math.floor(x / 60)).slice(-2) + ':' + ('0' + (x % 60)).slice(-2); }
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
  var status = document.querySelector('[data-status]');
  var prev = H[(d + 6) % 7];
  var text;
  if (prev && prev[1] > 1440 && m < prev[1] - 1440) {
    text = '<b>Nu open</b> tot ' + fmt(prev[1]) + '. Appelmarkt 18, Amersfoort';
  } else if (H[d] && m >= H[d][0] && m < H[d][1]) {
    text = '<b>Nu open</b> tot ' + fmt(H[d][1]) + '. Appelmarkt 18, Amersfoort';
  } else if (H[d] && m < H[d][0]) {
    text = 'Vandaag open vanaf <b>' + fmt(H[d][0]) + '</b>. Appelmarkt 18, Amersfoort';
  } else {
    var nd = (d + 1) % 7; if (!H[nd]) nd = (nd + 1) % 7;
    var dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    text = 'Nu gesloten. Weer open ' + (nd === (d + 1) % 7 ? 'morgen' : dagen[nd]) + ' vanaf <b>' + fmt(H[nd][0]) + '</b>. Appelmarkt 18, Amersfoort';
  }
  if (status) status.innerHTML = text;

  // Formulieren: dit is een voorbeeld, er wordt niets verstuurd
  ['res-form', 'news-form'].forEach(function (id) {
    var f = document.getElementById(id);
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
