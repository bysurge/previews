(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Tabs (menukaart + catering)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
      if (tab.scrollIntoView && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
      }
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Today's opening hours
  var now = new Date();
  var day = now.getDay();
  var openMin = (day === 0 || day === 6) ? 12 * 60 : 11 * 60 + 30;
  var closeMin = 22 * 60;
  var m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var openStr = (day === 0 || day === 6) ? '12:00' : '11:30';
  var el = document.getElementById('today');
  if (el) {
    if (m >= openMin && m < closeMin) el.textContent = 'Nu open, vandaag tot 22:00';
    else if (m < openMin) { el.textContent = 'Vandaag open van ' + openStr + ' tot 22:00'; el.classList.add('closed'); }
    else { el.textContent = 'Nu gesloten. Morgen weer open vanaf ' + ((day === 5 || day === 6) ? '12:00' : '11:30'); el.classList.add('closed'); }
  }
})();
