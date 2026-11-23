(function () {
  var nav = document.getElementById('nav');
  var btn = document.querySelector('.menu-btn');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Vandaag open?
  var d = new Date().getDay();
  var today = document.querySelector('[data-today]');
  if (today) today.innerHTML = d === 1 ? 'Vandaag (maandag) zijn we gesloten. Morgen vanaf <b>17:00</b> weer open.' : 'Vandaag open van <b>17:00</b> tot <b>23:00</b> uur';
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');

  // Menu-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
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

  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
