(function () {
  var body = document.body;
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');

  // mobile menu
  toggle.addEventListener('click', function () {
    var open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
    }
  });

  // header + sticky button on scroll
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('solid', y > 40);
    body.classList.toggle('scrolled', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
  document.querySelectorAll('[data-goto]').forEach(function (b) {
    b.addEventListener('click', function () {
      select(document.getElementById(b.getAttribute('data-goto')), true);
    });
  });

  // links that preset the form subject
  var subject = document.getElementById('onderwerp');
  document.querySelectorAll('[data-subject]').forEach(function (a) {
    a.addEventListener('click', function () {
      var v = a.getAttribute('data-subject');
      for (var i = 0; i < subject.options.length; i++) {
        if (subject.options[i].text === v) subject.selectedIndex = i;
      }
    });
  });

  // opening hours: today
  var d = new Date().getDay();
  var rows = document.querySelectorAll('.hours tr');
  rows.forEach(function (r) {
    if (r.getAttribute('data-days').split(',').indexOf(String(d)) > -1) r.classList.add('today');
  });
  var state = document.querySelector('.today-state');
  var hrs = document.querySelector('.today-hours');
  if (d === 1) { state.textContent = 'Vandaag gesloten'; hrs.textContent = 'Dinsdag vanaf 17:00 weer open'; }
  else if (d === 0 || d === 6) { state.textContent = 'Vandaag open 12:00 – 23:00'; hrs.textContent = 'Keuken tot 21:30 · gratis parkeren voor de deur'; }
  else { state.textContent = 'Vandaag open 17:00 – 23:00'; hrs.textContent = 'Keuken tot 21:30 · gratis parkeren voor de deur'; }
  var now = new Date(), md = (now.getMonth() + 1) + '-' + now.getDate();
  if (md === '12-24' || md === '12-31' || md === '1-1') { state.textContent = 'Vandaag eerder gesloten'; hrs.textContent = 'Aangepaste openingstijden rond de feestdagen'; }
  if (md === '12-25' || md === '12-26') { state.textContent = 'Vandaag op reservering geopend'; hrs.textContent = 'Reserveer uw kersttafel op tijd'; }

  // form: preview only
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
