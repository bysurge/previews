(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // openingstijden in minuten, index 0 = zondag; null = gesloten; sluiten na middernacht = > 1440
  var H = [[720,1500], null, [960,1500], [960,1500], [960,1500], [960,1560], [960,1560]];
  function fmt(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var today = H[d], yest = H[(d + 6) % 7], el = document.getElementById('today'), msg;
  if (yest && yest[1] > 1440 && m < yest[1] - 1440) msg = 'Nu open tot ' + fmt(yest[1]);
  else if (!today) { msg = 'Vandaag (maandag) gesloten, morgen vanaf 16:00 weer open'; el.classList.add('is-closed'); }
  else if (m >= today[0] && m < today[1]) msg = 'Nu open tot ' + fmt(today[1]);
  else if (m < today[0]) msg = 'Vandaag open van ' + fmt(today[0]) + ' tot ' + fmt(today[1]);
  else msg = '';
  el.textContent = msg;
  var tr = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (tr) tr.classList.add('today');
})();
