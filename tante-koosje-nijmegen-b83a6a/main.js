(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // header schaduw na scrollen
  var head = document.querySelector('.site-head');
  function onScroll() { head.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // menukaart-tabs
  var tabs = [].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });

  // vandaag open?
  var d = new Date().getDay();
  var rows = document.querySelectorAll('.hours > div');
  var idx = d === 1 ? 0 : (d >= 2 && d <= 5) ? 1 : 2;
  if (rows[idx]) rows[idx].classList.add('now');

  // cadeaubon (voorbeeld, verstuurt niets)
  var sel = document.getElementById('bedrag'), tot = document.getElementById('totaal');
  if (sel) sel.addEventListener('change', function () {
    tot.textContent = '€ ' + Number(sel.value).toFixed(2).replace('.', ',');
  });
  var form = document.getElementById('bonform'), msg = document.getElementById('bonmsg');
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); msg.hidden = false; });
})();
