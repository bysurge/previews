(function () {
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // opening hours today
  var hours = { 0: null, 1: null, 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 18], 6: [8, 17] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var label = document.getElementById('today'), dot = document.getElementById('dot');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) {
    label.textContent = 'Nu open, vandaag tot ' + t[1] + '.00';
  } else {
    dot.classList.add('closed');
    var k = d, add = 0;
    do { k = (k + 1) % 7; add++; } while (!hours[k] && add < 7);
    if (t && h < t[0]) label.textContent = 'Nu gesloten, vandaag open vanaf ' + t[0] + '.00';
    else label.textContent = 'Nu gesloten, ' + (add === 1 ? 'morgen' : names[k]) + ' weer open vanaf 8.00';
  }

  // calm hero crossfade
  var slides = [].slice.call(document.querySelectorAll('#slides img'));
  if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    slides[0].classList.add('on');
    document.getElementById('slides').classList.add('started');
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 5500);
  }
})();
