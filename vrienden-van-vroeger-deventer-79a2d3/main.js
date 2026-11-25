(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function closeNav() { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  btn.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  // Hero slideshow (calm crossfade)
  var slides = document.querySelectorAll('.slide');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 5500);
  }

  // Opening hours: minutes since midnight, close may pass midnight
  var summer = { 0: [600, 1080], 1: [600, 1080], 2: [600, 1080], 3: [600, 1080], 4: [600, 1380], 5: [600, 1500], 6: [600, 1500] };
  var winter = { 0: [600, 1080], 1: [660, 1080], 2: [660, 1080], 3: null, 4: [660, 1380], 5: [660, 1500], 6: [600, 1500] };
  function sched(d) { var m = d.getMonth(); return (m >= 10 || m <= 2) ? winter : summer; }
  function fmt(min) { min = min % 1440; var h = Math.floor(min / 60), m = min % 60; return (h < 10 ? '0' : '') + h + '.' + (m < 10 ? '0' : '') + m; }
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var s = sched(now);
  var y = new Date(now.getTime() - 864e5);
  var ys = sched(y)[y.getDay()];
  var el = document.getElementById('today');
  var txt = document.getElementById('today-txt');
  var slot = s[day];
  var state;
  if (ys && ys[1] > 1440 && mins < ys[1] - 1440) state = ['open', 'Nu open, tot ' + fmt(ys[1]) + ' uur'];
  else if (slot && mins >= slot[0] && mins < slot[1]) state = ['open', 'Nu open, vandaag tot ' + fmt(slot[1]) + ' uur'];
  else if (slot && mins < slot[0]) state = ['closed', 'Vandaag open vanaf ' + fmt(slot[0]) + ' uur'];
  else {
    var t = new Date(now.getTime() + 864e5), ts = sched(t)[t.getDay()];
    state = ['closed', ts ? 'Nu gesloten, morgen open vanaf ' + fmt(ts[0]) + ' uur' : 'Nu gesloten'];
  }
  el.classList.add(state[0]);
  txt.textContent = state[1];

  var row = document.querySelector('.hours tr[data-d="' + day + '"]');
  if (row) {
    row.classList.add('is-today');
    var col = s === winter ? 2 : 1;
    row.children[col].classList.add('now');
  }
})();
