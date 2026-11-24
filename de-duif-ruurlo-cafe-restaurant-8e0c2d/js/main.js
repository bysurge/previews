(function () {
  var body = document.body;
  var kop = document.querySelector('.kop');
  var toggle = document.querySelector('.menu-toggle');

  function scrolled() { kop.classList.toggle('vast', window.scrollY > 40 || body.classList.contains('menu-open')); }
  window.addEventListener('scroll', scrolled, { passive: true });
  scrolled();

  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('span').textContent = open ? 'Sluiten' : 'Menu';
    scrolled();
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('span').textContent = 'Menu';
      scrolled();
    });
  });

  // Hero: rustige wissel van foto's
  var fotos = document.querySelectorAll('.hero-foto img');
  var stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fotos.length > 1 && !stil) {
    var i = 0;
    setInterval(function () {
      fotos[i].classList.remove('aan');
      i = (i + 1) % fotos.length;
      fotos[i].classList.add('aan');
    }, 6500);
  }

  // Menukaart-tabs
  var tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var sel = t === tab;
        t.setAttribute('aria-selected', sel ? 'true' : 'false');
        t.tabIndex = sel ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !sel;
      });
    });
    tab.addEventListener('keydown', function (e) {
      var list = Array.prototype.slice.call(tabs);
      var n = list.indexOf(tab);
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var next = list[(n + (e.key === 'ArrowRight' ? 1 : -1) + list.length) % list.length];
        next.focus(); next.click();
      }
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-tab'));
      if (t) t.click();
    });
  });

  // Vandaag markeren in de openingstijden
  var dag = new Date().getDay();
  var rij = document.querySelector('.tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('nu');

  // Voorbeeldformulier: verstuurt niets
  var form = document.querySelector('.res-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.querySelector('.res-melding').hidden = false;
    });
  }
})();
