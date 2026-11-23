(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Menu openen');
      }
    });
  }

  // Opening hours from their own site. Saturday is uncertain (order site differs), so no status that day.
  var uren = { 0: [1020, 1200], 1: [1020, 1200], 2: [690, 1200], 3: [690, 1200], 4: [690, 1200], 5: [690, 1200] };
  var fmt = function (m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
  var nu = new Date();
  var dag = nu.getDay();
  var row = document.querySelector('.uren tr[data-dag="' + dag + '"]');
  if (row) row.classList.add('vandaag');
  var el = document.getElementById('today');
  if (!el || dag === 6) return;
  var u = uren[dag];
  var min = nu.getHours() * 60 + nu.getMinutes();
  if (min < u[0]) el.textContent = 'Vandaag open van ' + fmt(u[0]) + ' tot ' + fmt(u[1]);
  else if (min < u[1]) el.textContent = 'Nu open, tot ' + fmt(u[1]);
  else { el.textContent = 'Voor vandaag gesloten. Bekijk de openingstijden hieronder.'; el.classList.add('dicht'); }
  el.hidden = false;
})();
