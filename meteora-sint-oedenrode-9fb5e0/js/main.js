(function () {
  // Header: solid after scrolling
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    top.classList.toggle('solid', open || window.scrollY > 40);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); onScroll(); }
  });

  // Opening hours: today
  var hours = { 0: '22:00', 1: '21:30', 2: null, 3: '21:30', 4: '21:30', 5: '22:00', 6: '22:00' };
  var now = new Date(), d = now.getDay();
  var row = document.querySelector('.uren tr[data-day="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var t = document.querySelector('[data-today]');
  if (t) {
    if (!hours[d]) { t.textContent = 'Vandaag (dinsdag) zijn we gesloten'; t.classList.add('dicht'); }
    else { t.textContent = 'Vandaag open van 16:00 tot ' + hours[d]; }
  }

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (b) {
      var on = b === tab;
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Demo form
  var form = document.querySelector('.res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
