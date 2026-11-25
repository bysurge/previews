(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // tabs
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    function select(t) {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', String(on));
        o.tabIndex = on ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        e.preventDefault();
        var next = tabs[(n + tabs.length) % tabs.length];
        select(next); next.focus();
      });
    });
  });

  // hero slideshow
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('on');
    }, 6500);
  }

  // opening hours: minutes from midnight; close > 1440 means after midnight
  var H = { 0: [660, 1530], 1: [660, 1560], 2: [660, 1560], 3: [660, 1560], 4: [660, 1560], 5: [660, 1560], 6: [600, 1560] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  function fmt(x) { x = x % 1440; return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0'); }
  var el = document.getElementById('open-now');
  if (el) {
    var y = (d + 6) % 7, msg, open = false;
    if (m < H[y][1] - 1440) { open = true; msg = 'Nu open, tot ' + fmt(H[y][1]); }
    else if (m >= H[d][0]) { open = true; msg = 'Nu open, vandaag tot ' + fmt(H[d][1]); }
    else msg = 'Vandaag open vanaf ' + fmt(H[d][0]);
    el.textContent = msg;
    el.classList.toggle('is-open', open);
  }

  // demo form
  var form = document.getElementById('apply-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
