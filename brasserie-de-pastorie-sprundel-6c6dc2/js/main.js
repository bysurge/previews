(function () {
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  });

  // open today: wo t/m zo vanaf 12.00, ma + di gesloten
  var d = new Date().getDay(), el = document.querySelector('[data-today]');
  document.querySelectorAll('.hours tr')[(d + 6) % 7].classList.add('is-today');
  if (d === 1 || d === 2) el.textContent = 'Vandaag gesloten, woensdag vanaf 12.00 uur open';
  else { el.textContent = 'Vandaag open vanaf 12.00 uur'; el.classList.add('open'); }

  var tabs = document.querySelectorAll('[role=tab]');
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (j === null) return;
      j = (j + tabs.length) % tabs.length; tabs[j].focus(); select(tabs[j]);
    });
  });
})();
