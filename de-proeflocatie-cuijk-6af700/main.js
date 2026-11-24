(function () {
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Sluiten' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; });
  });

  // Delen / à la carte
  var tabs = [].slice.call(document.querySelectorAll('.wissel [role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); var n = tabs[(i + 1) % tabs.length]; select(n); n.focus(); }
    });
  });
  document.querySelectorAll('[data-alc]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById('t-alc')); });
  });

  // Ronde samenstellen: max 4 gerechten
  var MAX = 4, ronde = 1, gekozen = [];
  var plussen = [].slice.call(document.querySelectorAll('#p-delen .plus'));
  var borden = [].slice.call(document.querySelectorAll('.bord'));
  var teller = document.getElementById('teller'), volgende = document.getElementById('volgende'), titel = document.getElementById('ronde-titel');
  function naamVan(b) { return b.parentNode.querySelector('.naam').firstChild.textContent.trim(); }
  function teken() {
    borden.forEach(function (bord, i) {
      var g = gekozen[i];
      bord.textContent = g ? naamVan(g) : 'bord ' + (i + 1);
      bord.classList.toggle('vol', !!g);
    });
    plussen.forEach(function (p) {
      var on = gekozen.indexOf(p) > -1;
      p.setAttribute('aria-pressed', on ? 'true' : 'false');
      p.textContent = on ? '✓' : '+';
      p.disabled = !on && gekozen.length >= MAX;
    });
    teller.textContent = gekozen.length === MAX ? 'Tafel vol, smakelijk!' : gekozen.length + ' van 4 gekozen';
    volgende.disabled = gekozen.length === 0;
    titel.textContent = 'Ronde ' + ronde;
  }
  plussen.forEach(function (p) {
    p.addEventListener('click', function () {
      var i = gekozen.indexOf(p);
      if (i > -1) gekozen.splice(i, 1); else if (gekozen.length < MAX) gekozen.push(p);
      teken();
    });
  });
  volgende.addEventListener('click', function () { ronde++; gekozen = []; teken(); });
  teken();
})();
