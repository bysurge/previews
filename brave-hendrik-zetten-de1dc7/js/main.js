(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });
  // dinner after 16:00
  if (new Date().getHours() >= 16) select(document.getElementById('t-diner'));

  // open today
  var hours = { 0: [12, 22], 3: [12, 22], 4: [12, 22], 5: [12, 23], 6: [12, 23] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('open-now');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) { el.textContent = 'Nu open, vandaag tot ' + t[1] + ':00'; el.classList.add('is-open'); }
  else if (t && h < t[0]) { el.textContent = 'Vandaag open van ' + t[0] + ':00 tot ' + t[1] + ':00'; }
  else { el.textContent = 'Woensdag t/m zondag open vanaf 12:00'; }
})();
