(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  function setNav(open) { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); }
  toggle.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setNav(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // opening hours today (Amsterdam time is the visitor's time for this demo)
  var hours = { 1: ['15:30', '23:00'], 3: ['15:30', '23:00'], 4: ['15:30', '23:00'], 5: ['15:30', '23:30'], 6: ['15:30', '23:30'] };
  var now = new Date(), d = now.getDay(), el = document.getElementById('today');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  if (el) {
    var h = hours[d], mins = now.getHours() * 60 + now.getMinutes();
    var toMin = function (s) { var p = s.split(':'); return +p[0] * 60 + +p[1]; };
    if (d === 2) el.textContent = 'Vandaag (dinsdag) zijn we gesloten';
    else if (!h) el.textContent = 'Zondag: bel ons even voor de tijden';
    else if (mins < toMin(h[0])) el.textContent = 'Vandaag open van ' + h[0] + ' tot ' + h[1];
    else if (mins < toMin(h[1])) { el.textContent = 'Nu open, tot ' + h[1]; el.classList.add('open'); }
    else el.textContent = 'Vandaag open tot ' + h[1] + ', nu gesloten';
  }

  // demo form
  var form = document.getElementById('resform'), msg = document.getElementById('formmsg');
  form.addEventListener('submit', function (e) { e.preventDefault(); msg.hidden = false; });
})();
