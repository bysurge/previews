(function () {
  var body = document.body;
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function closeNav() { body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Menu openen'); }
  burger.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  // Vandaag open?
  var uren = { 0: [12, 0, 21, 0], 2: [16, 0, 20, 30], 3: [16, 0, 20, 30], 4: [16, 0, 20, 30], 5: [16, 0, 21, 0], 6: [16, 0, 21, 0] };
  var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function tijd(h, m) { return h + ':' + (m < 10 ? '0' : '') + m; }
  var nu = new Date(), dag = nu.getDay(), min = nu.getHours() * 60 + nu.getMinutes();
  var el = document.getElementById('vandaag');
  var u = uren[dag];
  if (el) {
    if (!u) {
      el.textContent = 'Vandaag gesloten. Dinsdag zijn we er weer vanaf 16:00.';
      el.classList.add('is-dicht');
    } else if (min < u[0] * 60 + u[1]) {
      el.textContent = 'Vandaag open van ' + tijd(u[0], u[1]) + ' tot ' + tijd(u[2], u[3]);
    } else if (min < u[2] * 60 + u[3]) {
      el.textContent = 'Nu open, tot ' + tijd(u[2], u[3]) + ' vandaag';
      el.classList.add('is-open');
    } else {
      var d = (dag + 1) % 7; if (!uren[d]) d = (d + 1) % 7;
      el.textContent = 'Voor vandaag gesloten. ' + namen[d].charAt(0).toUpperCase() + namen[d].slice(1) + ' open vanaf ' + tijd(uren[d][0], uren[d][1]);
      el.classList.add('is-dicht');
    }
  }
  var rij = document.querySelector('.uren tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag-rij');

  // Zoeken in de afhaallijst
  var zoek = document.getElementById('zoek');
  var dishes = Array.prototype.slice.call(document.querySelectorAll('.dish'));
  var cats = Array.prototype.slice.call(document.querySelectorAll('.cat'));
  var geen = document.getElementById('geen');
  if (zoek) zoek.addEventListener('input', function () {
    var q = zoek.value.trim().toLowerCase();
    var any = false;
    dishes.forEach(function (d) {
      var hay = d.getAttribute('data-zoek');
      var match = !q || (/^\d+[a-z]?$/.test(q) ? hay.split(' ')[0] === q : hay.indexOf(q) !== -1);
      d.hidden = !match;
      d.classList.toggle('hit', !!q && match);
      if (match) any = true;
    });
    cats.forEach(function (c) { c.hidden = !c.querySelector('.dish:not([hidden])'); });
    geen.hidden = any;
  });

  // Rijsttafel: prijs per aantal personen
  document.querySelectorAll('.tafel').forEach(function (t) {
    var out = t.querySelector('.tafel-prijs');
    t.querySelectorAll('.pp').forEach(function (b) {
      b.addEventListener('click', function () {
        t.querySelectorAll('.pp').forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
        out.textContent = b.getAttribute('data-prijs');
      });
    });
  });
})();
