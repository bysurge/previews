(function () {
  // mobile menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });

  // today's hours (feestdagen are not known here, so only the normal week)
  var hours = { 0: ['11:30', '20:00'], 4: ['16:00', '20:00'], 5: ['16:00', '20:00'], 6: ['16:00', '20:00'] };
  var now = new Date(), d = now.getDay(), h = hours[d], el = document.getElementById('today');
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
  if (el) {
    if (h) {
      var mins = now.getHours() * 60 + now.getMinutes(), t = function (s) { var p = s.split(':'); return +p[0] * 60 + +p[1]; };
      var open = mins >= t(h[0]) && mins < t(h[1]);
      el.innerHTML = '<b>' + (open ? 'Nu open' : 'Vandaag open') + '</b> ' + (open ? 'tot ' + h[1] + ' uur' : h[0] + ' - ' + h[1] + ' uur');
    } else {
      el.classList.add('closed');
      el.innerHTML = '<b>Vandaag gesloten</b> Donderdag t/m zaterdag 16:00 - 20:00, zondag 11:30 - 20:00';
    }
  }

  // search in the afhaalkaart
  var q = document.getElementById('zoek'), cats = document.querySelectorAll('.cat'), none = document.getElementById('none');
  q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase(), shown = 0;
    cats.forEach(function (c) {
      var n = 0;
      c.querySelectorAll('li').forEach(function (li) {
        var hit = !v || (/^\w?\d+\w?$/.test(v) ? li.querySelector('.nr').textContent.toLowerCase() === v : li.getAttribute('data-s').indexOf(v) > -1);
        li.hidden = !hit; if (hit) n++;
      });
      c.hidden = n === 0; shown += n;
    });
    none.hidden = shown > 0;
  });

  // floating call button after the hero
  var hero = document.querySelector('.hero');
  addEventListener('scroll', function () { document.body.classList.toggle('scrolled', scrollY > hero.offsetHeight * .8); }, { passive: true });
})();
