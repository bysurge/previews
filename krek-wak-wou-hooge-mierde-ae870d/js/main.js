(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // hide agenda items that have passed
  var today = new Date(); today.setHours(0, 0, 0, 0);
  document.querySelectorAll('.ev[data-date]').forEach(function (li) {
    var d = new Date(li.getAttribute('data-date') + 'T00:00:00');
    if (d < today) li.remove();
  });

  // opening hours: highlight today + status in hero
  var hours = { 0: [630, 1080], 1: [720, 1080], 2: null, 3: [720, 1080], 4: [720, 1080], 5: [720, 1080], 6: [630, 1080] };
  var now = new Date();
  var day = now.getDay();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today');
  if (el) {
    var h = hours[day];
    var mins = now.getHours() * 60 + now.getMinutes();
    var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
    if (!h) { el.textContent = 'Vandaag (dinsdag) zijn we gesloten'; el.classList.add('is-closed'); }
    else { el.textContent = 'Vandaag geopend van ' + fmt(h[0]) + ' tot ' + fmt(h[1]) + ' uur'; }
    el.hidden = false;
  }
})();
