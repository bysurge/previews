(function () {
  var top = document.querySelector('.top');
  var nav = document.getElementById('nav');
  var btn = document.querySelector('.menu-btn');

  // Header wordt donker zodra je scrolt
  function onScroll() { top.classList.toggle('is-solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobiel menu
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
    top.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Rustige wisseling van de hero-foto's
  var slides = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }

  // Vandaag open
  var hours = { 0: ['12:00', '23:00'], 1: ['11:00', '23:00'], 2: ['11:00', '23:00'], 3: ['11:00', '23:00'], 4: ['11:00', '00:00'], 5: ['11:00', '00:00'], 6: ['11:00', '00:00'] };
  var d = new Date().getDay();
  var today = document.querySelector('[data-today]');
  if (today) today.innerHTML = 'Vandaag open van <b>' + hours[d][0] + '</b> tot <b>' + hours[d][1] + '</b> uur, keuken tot 21:00';
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');

  // Boekenplank: kies een kaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.spine'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(n + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(n - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Formulieren sturen niets (voorbeeld)
  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      if (msg) msg.hidden = false;
    });
  });
})();
