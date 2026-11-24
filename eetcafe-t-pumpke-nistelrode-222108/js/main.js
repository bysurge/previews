(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Tabs menukaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // Hero: rustige wissel tussen eigen foto's
  var slides = document.querySelectorAll('.hero-slides img');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !calm) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6500);
  }

  // Vandaag in de openingstijden
  var d = new Date().getDay();
  var row = document.querySelector('.uren tr[data-day="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var today = document.querySelector('[data-today]');
  if (today) today.textContent = 'Vandaag open';

  // Voorbeeldformulier
  var form = document.getElementById('offerte');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
