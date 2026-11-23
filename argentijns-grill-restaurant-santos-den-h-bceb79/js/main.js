(function () {
  // Mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // Menu-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  sel(tabs[0]);

  // Gewicht kiezen bij de bifes
  document.querySelectorAll('[data-cut]').forEach(function (c) {
    var out = c.querySelector('.cut-price');
    c.querySelectorAll('.grams button').forEach(function (b) {
      b.addEventListener('click', function () {
        c.querySelectorAll('.grams button').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        out.textContent = '€ ' + b.dataset.p;
        out.classList.remove('flash'); void out.offsetWidth; out.classList.add('flash');
      });
    });
  });

  // Vandaag open
  var el = document.getElementById('today');
  var d = new Date(), day = d.getDay(), m = d.getMonth() + 1, dd = d.getDate();
  var txt;
  if (m === 12 && dd === 26) txt = 'Vandaag (26 december) open van <b>12:00 tot 24:00</b>';
  else if (m === 12 && dd === 31) txt = 'Vandaag (31 december) open van <b>12:00 tot 21:00</b>';
  else txt = 'Vandaag open van <b>' + (day === 0 || day >= 5 ? '12.00' : '16.00') + ' tot 24.00 uur</b>';
  el.innerHTML = txt; el.hidden = false;
})();
