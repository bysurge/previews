(function () {
  // Header shadow after scrolling
  var top = document.querySelector('.top');
  function onScroll() { if (top) top.classList.toggle('solid', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = box.querySelectorAll('[role=tab]');
    function select(t) {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { var nx = tabs[(n + d + tabs.length) % tabs.length]; select(nx); nx.focus(); }
      });
    });
  });

  // Highlight today in the hours table
  var row = document.querySelector('[data-hours] tr[data-d="' + new Date().getDay() + '"]');
  if (row) {
    row.classList.add('is-today');
    var t = document.getElementById('today');
    if (t) { t.textContent = 'Vandaag: ' + row.querySelector('td').firstChild.textContent.trim(); t.hidden = false; }
  }

  // Demo forms never send anything
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.demo-msg'); if (m) m.hidden = false;
    });
  });
})();
