(function () {
  var body = document.body;
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var menu = document.querySelector('.tabs-wrap');
      var r = menu.getBoundingClientRect();
      if (r.top < 69) window.scrollTo({ top: window.scrollY + document.querySelector('.panels').getBoundingClientRect().top - 140 });
    });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });

  // Open now (daily 11.30 - 21.00)
  var now = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  var el = document.querySelector('[data-open]');
  if (el) {
    if (mins >= 690 && mins < 1260) { el.textContent = 'Nu open, vandaag tot 21.00 uur'; el.classList.add('is-open'); }
    else if (mins < 690) { el.textContent = 'Vandaag open vanaf 11.30 uur'; }
    else { el.textContent = 'Morgen weer open vanaf 11.30 uur'; }
  }
  var row = document.querySelector('.hours tr[data-day="' + now.getDay() + '"]');
  if (row) row.classList.add('today');
})();
