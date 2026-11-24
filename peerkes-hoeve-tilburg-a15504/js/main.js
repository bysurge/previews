(function () {
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('main-nav');
  var toggle = document.querySelector('.menu-toggle');

  function onScroll() { header.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('open', open);
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Hero slideshow
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, idx) {
    t.addEventListener('click', function () { selectTab(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(idx + n + tabs.length) % tabs.length];
      selectTab(next); next.focus();
    });
  });
  document.querySelectorAll('.moment[data-tab]').forEach(function (m) {
    m.addEventListener('click', function () {
      var t = document.getElementById('tab-' + m.getAttribute('data-tab'));
      if (t) selectTab(t);
    });
  });

  // Kerst button preselects the form
  document.querySelectorAll('[data-pick]').forEach(function (b) {
    b.addEventListener('click', function () {
      var s = document.getElementById('res-wat');
      if (s) s.value = b.getAttribute('data-pick');
    });
  });

  // Demo forms: never send
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      if (msg) msg.hidden = false;
    });
  });

  // Opening hours: today + open now
  var hours = { 0: [12, 22], 1: null, 2: null, 3: [12, 23], 4: [12, 23], 5: [12, 24], 6: [12, 24] };
  var now = new Date();
  var d = now.getDay();
  var m = now.getMonth(); // 0 = jan
  if (d === 2 && m >= 3 && m <= 9) hours[2] = 'onbekend'; // dinsdag apr t/m okt: tijden niet vermeld
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  var h = hours[d];
  if (el && h !== 'onbekend') {
    var hr = now.getHours() + now.getMinutes() / 60;
    if (!h) { el.textContent = 'Vandaag gesloten'; el.style.setProperty('--dot', '#c98b6b'); }
    else if (hr >= h[0] && hr < h[1]) { el.textContent = 'Nu open, vandaag tot ' + (h[1] === 24 ? '24:00' : h[1] + ':00'); }
    else if (hr < h[0]) { el.textContent = 'Vandaag open vanaf 12:00'; }
    else { el.textContent = 'Nu gesloten'; el.style.setProperty('--dot', '#c98b6b'); }
  }
})();
