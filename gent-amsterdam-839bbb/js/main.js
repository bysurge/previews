(function () {
  var top = document.querySelector('.top');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || nav.classList.contains('open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
    onScroll();
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Tabs
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
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
  });

  // Open now (hours from their site footer)
  var close = { 0: 24, 1: 25, 2: 25, 3: 25, 4: 25, 5: 26, 6: 26 };
  var label = { 24: '00.00', 25: '01.00', 26: '02.00' };
  var now = new Date();
  var d = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours-table tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('open-nu');
  var prev = (d + 6) % 7;
  if (h >= 10) {
    el.textContent = 'Nu open, vandaag tot ' + label[close[d]] + ' uur';
  } else if (h + 24 < close[prev]) {
    el.textContent = 'Nu open tot ' + label[close[prev]] + ' uur';
  } else {
    el.textContent = 'Vandaag open vanaf 10.00 uur';
    el.classList.add('closed');
  }
})();
