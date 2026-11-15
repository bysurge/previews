// Don Nino preview: header, mobile nav, menu tabs, hero slideshow, today's hours, demo form.
(function () {
  var body = document.body;
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  // Links like "Lunch" open the right tab
  document.querySelectorAll('a[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById(a.getAttribute('data-tab'))); });
  });

  // Hero slideshow (own photos)
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var n = 0;
    setInterval(function () {
      slides[n].classList.remove('is-on');
      n = (n + 1) % slides.length;
      slides[n].classList.add('is-on');
    }, 5000);
  }

  // Today's hours, from the main opening-hours table
  // 1 May - 30 Sep: every day 12:00-20:30. 1 Oct - 30 Apr: Tue-Sun 16:00-20:00, Monday closed (open on holidays).
  var el = document.getElementById('today');
  if (el) {
    var now = new Date(), m = now.getMonth() + 1, day = now.getDay();
    var summer = m >= 5 && m <= 9;
    var open = summer ? [12, 0] : [16, 0], close = summer ? [20, 30] : [20, 0];
    var mins = now.getHours() * 60 + now.getMinutes();
    var o = open[0] * 60 + open[1], c = close[0] * 60 + close[1];
    function t(a) { return a[0] + ':' + (a[1] < 10 ? '0' : '') + a[1]; }
    if (!summer && day === 1) {
      el.innerHTML = 'Vandaag (maandag) gesloten. Op feestdagen zijn we wel open.';
    } else if (mins >= o && mins < c) {
      el.classList.add('open');
      el.innerHTML = '<strong>Nu open</strong>, vandaag tot ' + t(close) + ' uur';
    } else if (mins < o) {
      el.innerHTML = 'Vandaag open van <strong>' + t(open) + ' tot ' + t(close) + '</strong> uur';
    } else {
      el.innerHTML = 'Voor vandaag gesloten. Open van ' + t(open) + ' tot ' + t(close) + ' uur';
    }
  }

  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
