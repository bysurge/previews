(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Today
  var now = new Date(), d = now.getDay(), el = document.querySelector('[data-today]');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var nyd = (now.getMonth() === 11 && now.getDate() === 31) || (now.getMonth() === 0 && now.getDate() === 1);
  if (el) el.textContent = nyd ? 'Vandaag gesloten' : (d === 1 ? 'Vandaag gesloten, dinsdag vanaf 17.00 uur weer open' : 'Vandaag open vanaf 17.00 uur');

  // Example form
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
