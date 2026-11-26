(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // tabs
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role=tab]'));
    function select(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        var nt = tabs[(n + tabs.length) % tabs.length];
        select(nt); nt.focus(); e.preventDefault();
      });
    });
  });

  // opening hours: today + open now
  var now = new Date();
  var day = now.getDay();
  var row = document.querySelector('[data-hours] tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var today = document.querySelector('[data-today]');
  if (today) {
    var h = now.getHours();
    var prev = (day + 6) % 7;
    var lateClose = (day === 5 || day === 6) ? 2 : 1;
    var prevClose = (prev === 5 || prev === 6) ? 2 : 1;
    if (h >= 12) {
      today.textContent = 'Nu open, vandaag tot ' + (lateClose === 2 ? '02:00' : '01:00');
      today.classList.add('is-open');
    } else if (h < prevClose) {
      today.textContent = 'Nu open, tot ' + (prevClose === 2 ? '02:00' : '01:00');
      today.classList.add('is-open');
    } else {
      today.textContent = 'Vandaag open van 12:00 tot ' + (lateClose === 2 ? '02:00' : '01:00');
    }
  }

  // agenda: hide past dates
  var ymd = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  document.querySelectorAll('.gig[data-date]').forEach(function (g) {
    if (g.getAttribute('data-date') < ymd) g.classList.add('is-past');
  });
  document.querySelectorAll('.gigs').forEach(function (list) {
    if (!list.querySelector('.gig:not(.is-past)')) {
      list.style.display = 'none';
      var h3 = list.previousElementSibling;
      if (h3) h3.style.display = 'none';
    }
  });

  // hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('[data-slides] img');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }
})();
