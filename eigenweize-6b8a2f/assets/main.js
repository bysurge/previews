(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Slideshow in de hero
  var slides = document.querySelectorAll('.slide');
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 5500);
  }

  // Navigatie op telefoon
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? 'Sluiten' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      }
    });
  }

  // Tabs van de menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(n + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(n - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Voorbeeld-melding: er wordt niets verstuurd
  var dlg = document.getElementById('voorbeeld');
  document.querySelectorAll('[data-voorbeeld]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (dlg && dlg.showModal) dlg.showModal(); else alert('Dit is een voorbeeld. Er wordt niets verstuurd.');
    });
  });
  document.querySelectorAll('form[data-voorbeeld-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (dlg && dlg.showModal) dlg.showModal();
    });
  });
  if (dlg) dlg.querySelector('[data-sluit]').addEventListener('click', function () { dlg.close(); });
})();

// Markeer de dag van vandaag in de openingstijden
(function () {
  var rows = document.querySelectorAll('.uren tbody tr');
  if (rows.length !== 7) return;
  var idx = (new Date().getDay() + 6) % 7; // maandag = 0
  rows[idx].classList.add('vandaag-rij');
})();
