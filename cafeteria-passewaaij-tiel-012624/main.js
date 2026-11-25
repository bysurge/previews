(function () {
  var top = document.querySelector('.top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setNav(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.menu-tabs [role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // open/dicht vandaag (di-zo 11:30-20:30)
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var st = document.querySelector('[data-status]');
  if (st) {
    var openDay = day !== 1;
    if (openDay && mins >= 690 && mins < 1230) st.textContent = 'Nu open, tot 20:30';
    else if (openDay && mins < 690) st.textContent = 'Vandaag open van 11:30 tot 20:30';
    else { st.textContent = day === 1 ? 'Maandag gesloten, dinsdag vanaf 11:30 weer open' : (day === 0 ? 'Nu gesloten, dinsdag vanaf 11:30 weer open' : 'Nu gesloten, morgen vanaf 11:30 weer open'); st.classList.add('closed'); }
  }
})();
