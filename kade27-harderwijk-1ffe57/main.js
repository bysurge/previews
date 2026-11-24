(function () {
  // mobiel menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function sluit() { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Menu openen'); }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', sluit); });

  // tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  // links die direct een tab openen (koffie / lunch / borrel / wijn)
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) kies(t);
    });
  });

  // vandaag open?
  var dag = new Date().getDay();
  var rij = document.querySelector('.uren tr[data-d="' + dag + '"]');
  if (rij) rij.classList.add('vandaag');
  var uren = { 0: [9, 17], 3: [9, 16], 4: [9, 16], 5: [9, 16], 6: [9, 17] };
  var v = document.getElementById('vandaag');
  if (v) {
    var u = uren[dag];
    var nu = new Date().getHours() + new Date().getMinutes() / 60;
    if (!u) v.textContent = 'Vandaag gesloten. Woensdag zijn we er weer vanaf 09:00.';
    else if (nu < u[0]) v.textContent = 'Vandaag open van 0' + u[0] + ':00 tot ' + u[1] + ':00.';
    else if (nu < u[1]) v.textContent = 'Nu open, tot ' + u[1] + ':00.';
    else v.textContent = 'Voor vandaag zijn we dicht. Wo t/m vr 09:00 tot 16:00, za en zo tot 17:00.';
  }

  // formulier (voorbeeld, verstuurt niets)
  var f = document.getElementById('formulier');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
