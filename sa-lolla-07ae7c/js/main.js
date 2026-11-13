// Sa Lolla preview: navigation, menu tabs, opening-hours highlight, sample form (sends nothing).
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // Tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var head = document.querySelector('.tabs');
      var y = head.getBoundingClientRect().top;
      if (y < 40 || y > window.innerHeight * 0.6) {
        window.scrollTo({ top: window.scrollY + document.getElementById('menukaart').querySelector('.menu-wrap').getBoundingClientRect().top - 70, behavior: 'smooth' });
      }
    });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });

  // Today in the hours table + hero line
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var line = document.getElementById('vandaag');
  if (line) {
    line.innerHTML = (d === 1 || d === 2)
      ? 'Vandaag gesloten. Woensdag t/m zondag open vanaf <b>17:00</b>'
      : 'Vandaag open van <b>17:00 tot 21:30</b>';
  }

  // Sample form: never sends
  var form = document.getElementById('resform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = form.querySelector('.form-msg');
    msg.hidden = false;
    msg.focus && msg.focus();
  });
})();
