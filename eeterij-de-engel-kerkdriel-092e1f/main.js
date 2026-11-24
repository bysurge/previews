document.documentElement.classList.add('js');

// mobile menu
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('.menu-label').textContent = open ? 'Sluiten' : 'Menu';
  }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();

// menu tabs
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
  function select(i, focus) {
    tabs.forEach(function (t, j) {
      var on = i === j;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
    });
    if (focus) tabs[i].focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select((i + 1) % tabs.length, true);
      if (e.key === 'ArrowLeft') select((i - 1 + tabs.length) % tabs.length, true);
    });
  });
  if (tabs.length) select(0);
})();

// today in opening hours
(function () {
  var rows = document.querySelectorAll('.hours tr');
  var out = document.getElementById('today');
  if (rows.length !== 7 || !out) return;
  var day = (new Date().getDay() + 6) % 7; // 0 = maandag
  rows[day].classList.add('is-today');
  out.textContent = day < 2 ? 'Vandaag zijn we gesloten. Woensdag vanaf 17:00 bent u weer welkom.' : 'Vandaag zijn we open van 17:00 tot 21:30.';
  out.hidden = false;
})();

// demo forms: nothing is sent
document.querySelectorAll('form[data-demo]').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = f.querySelector('.form-msg');
    if (msg) msg.hidden = false;
  });
});
