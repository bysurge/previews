(function () {
  // header background after scrolling
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 6000);
  }

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(n + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(n - 1 + tabs.length) % tabs.length], true);
    });
  });

  // opening hours today (restaurant hours)
  var hours = { 0: [16, 22], 2: [17, 22], 3: [17, 22], 4: [17, 22], 5: [17, 22.5], 6: [17, 22.5] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var fmt = function (x) { return Math.floor(x) + ':' + (x % 1 ? '30' : '00'); };
  var el = document.getElementById('today');
  if (el) {
    var t = hours[d];
    var next = function () { var n = (d + 1) % 7; return hours[n] ? 'morgen vanaf ' + fmt(hours[n][0]) : 'dinsdag vanaf 17:00'; };
    if (!t) el.textContent = 'Vandaag gesloten, morgen vanaf 17:00 weer open';
    else if (h < t[0]) el.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]);
    else if (h < t[1]) { el.textContent = 'Nu open, tot ' + fmt(t[1]); el.classList.add('open'); }
    else el.textContent = 'Weer open ' + next();
  }

  // example form: nothing is sent
  var form = document.getElementById('job-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
