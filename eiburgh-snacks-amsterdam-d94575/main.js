(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function setOpen(o) {
    document.body.classList.toggle('nav-open', o);
    btn.setAttribute('aria-expanded', o ? 'true' : 'false');
    btn.setAttribute('aria-label', o ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { setOpen(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Vandaag + open/dicht
  var now = new Date();
  var row = document.querySelector('tr[data-d="' + now.getDay() + '"]');
  if (row) row.classList.add('is-today');
  var mins = now.getHours() * 60 + now.getMinutes();
  var t = document.getElementById('today');
  if (t) {
    if (mins >= 630 && mins < 1125) t.textContent = 'Nu open, tot 18:45';
    else if (mins < 630) t.textContent = 'Vandaag open vanaf 10:30';
    else t.textContent = 'Nu gesloten, morgen weer open vanaf 10:30';
  }

  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-note').hidden = false;
  });
})();
