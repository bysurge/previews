/* Mobiel menu */
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function close() { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();

/* Rustige diavoorstelling in de hero */
(function () {
  var imgs = document.querySelectorAll('.hero-slides img');
  if (imgs.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var i = 0;
  setInterval(function () {
    imgs[i].classList.remove('on');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('on');
  }, 6000);
})();

/* Tabs (ruimtes en menukaort) */
document.querySelectorAll('[role="tablist"]').forEach(function (list) {
  var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var d = e.key === 'ArrowRight' ? 1 : -1;
        select(tabs[(n + d + tabs.length) % tabs.length], true);
        e.preventDefault();
      }
    });
  });
});

/* Vandaag: openingstijden en keuken */
(function () {
  var open = { 0: '9.00 – 22.00', 1: '9.00 – 19.00', 2: '9.00 – 19.00', 3: '9.00 – 19.00', 4: '9.00 – 19.00', 5: '9.00 – 00.00', 6: '9.00 – 00.00' };
  var keuken = { 0: '9.00 – 20.00', 1: '10.00 – 18.00', 2: '10.00 – 18.00', 3: '10.00 – 18.00', 4: '10.00 – 18.00', 5: '10.00 – 20.00', 6: '9.00 – 20.00' };
  var d = new Date().getDay();
  var el = document.getElementById('today');
  if (el) el.innerHTML = '<strong>Vandaag open ' + open[d] + '</strong>, keuken ' + keuken[d];
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
})();

/* Voorbeeldformulier: verstuurt niets */
(function () {
  var f = document.getElementById('vergForm');
  if (!f) return;
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('vergMsg').hidden = false;
  });
})();
