(function () {
  document.documentElement.classList.add('js');

  // header colour on scroll
  var top = document.getElementById('top-bar');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function show(id) {
    tabs.forEach(function (t) {
      var on = t.id === 't-' + id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t.id.slice(2)); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); show(n.id.slice(2));
    });
  });
  show('lunch');
  Array.prototype.forEach.call(document.querySelectorAll('[data-open-tab]'), function (el) {
    el.addEventListener('click', function () {
      show(el.getAttribute('data-open-tab'));
      if (el.tagName === 'BUTTON') document.getElementById('kaart').scrollIntoView();
    });
  });

  // today's opening hours
  var day = new Date().getDay();
  var close = { 0: '00:00', 1: '00:00', 2: '00:00', 3: '00:00', 4: '01:00', 5: '02:00', 6: '02:00' }[day];
  var today = document.getElementById('today');
  if (today) today.textContent = 'Vandaag open van 11:00 tot ' + close;
  Array.prototype.forEach.call(document.querySelectorAll('.hours tr[data-days]'), function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('now');
  });
})();
