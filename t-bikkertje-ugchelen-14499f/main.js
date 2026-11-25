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

  // open/dicht vandaag (di-za 11-21, zo 12-21)
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var st = document.querySelector('[data-status]');
  if (st) {
    var openAt = day === 0 ? 720 : 660, openTxt = day === 0 ? '12:00' : '11:00';
    if (day !== 1 && mins >= openAt && mins < 1260) st.textContent = 'Nu open, tot 21:00';
    else if (day !== 1 && mins < openAt) st.textContent = 'Vandaag open van ' + openTxt + ' tot 21:00';
    else { st.textContent = (day === 1 ? 'Maandag gesloten' : 'Nu gesloten') + ', ' + (day === 0 || day === 1 ? 'dinsdag' : day === 6 ? 'zondag vanaf 12:00' : 'morgen') + (day === 6 ? '' : ' vanaf 11:00') + ' weer open'; st.classList.add('closed'); }
  }

  // formulier: voorbeeld, verstuurt niets
  var form = document.querySelector('.form');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); form.querySelector('.form-msg').hidden = false; });
})();
