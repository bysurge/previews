(function () {
  // mobiel menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // menukaart tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // vandaag open?
  var hours = { 0: [10, 18], 1: [9, 17.5], 2: [9, 17.5], 3: [9, 17.5], 4: [9, 17.5], 5: [9, 17.5], 6: [9, 18] };
  var fmt = function (h) { var m = Math.round((h % 1) * 60); return ('0' + Math.floor(h)).slice(-2) + '.' + ('0' + m).slice(-2); };
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60, today = hours[day];
  var el = document.getElementById('today');
  if (h >= today[0] && h < today[1]) { el.textContent = 'Nu open, vandaag tot ' + fmt(today[1]) + ' uur'; el.classList.add('open'); }
  else if (h < today[0]) { el.textContent = 'Vandaag open van ' + fmt(today[0]) + ' tot ' + fmt(today[1]) + ' uur'; }
  else { var t = hours[(day + 1) % 7]; el.textContent = 'Nu gesloten, morgen weer open vanaf ' + fmt(t[0]) + ' uur'; }
  var row = document.querySelector('.uren tr[data-d="' + day + '"]');
  if (row) row.classList.add('now');

  // knoppen die een keuze voorinvullen
  var sel = document.getElementById('waarvoor');
  document.querySelectorAll('[data-pick]').forEach(function (a) {
    a.addEventListener('click', function () { sel.value = a.getAttribute('data-pick'); });
  });

  // voorbeeldformulier: verstuurt niets
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest' });
  });
})();
