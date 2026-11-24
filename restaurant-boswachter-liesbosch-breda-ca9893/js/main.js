(function () {
  // Mobiel menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function zet(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { zet(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') zet(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zet(false); });

  // Hero: rustige wissel van eigen foto's
  var fotos = document.querySelectorAll('#heroFotos img');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fotos.length > 1 && !stil) {
    var i = 0;
    setInterval(function () {
      fotos[i].classList.remove('actief');
      i = (i + 1) % fotos.length;
      fotos[i].classList.add('actief');
    }, 6500);
  }

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function kies(tab) {
    tabs.forEach(function (t) {
      var aan = t === tab;
      t.setAttribute('aria-selected', aan ? 'true' : 'false');
      t.tabIndex = aan ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
    });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var nt = tabs[(n + d + tabs.length) % tabs.length];
      kies(nt); nt.focus();
    });
  });

  // Formulier: voorbeeld, verstuurt niets
  var form = document.getElementById('resForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMelding').hidden = false;
  });
})();
