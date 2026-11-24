(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    if (tab.scrollIntoView && window.innerWidth < 760) {
      var bar = tab.parentNode;
      bar.scrollTo({ left: tab.offsetLeft - 16, behavior: 'smooth' });
    }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); select(tabs[(i + 1) % tabs.length], true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length], true); }
    });
  });

  // today's opening hours
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var today = document.getElementById('today');
  var hrs = { 0: '17:00 – 21:30', 1: null, 2: '17:00 – 22:00', 3: '17:00 – 22:00', 4: '17:00 – 22:00', 5: '17:00 – 22:00', 6: '17:00 – 22:00' };
  if (today) {
    today.innerHTML = hrs[d]
      ? 'Vandaag geopend <strong>' + hrs[d] + '</strong> · maandag gesloten'
      : 'Vandaag (maandag) gesloten · dinsdag vanaf <strong>17:00</strong> weer open';
  }

  // party size 1-35
  var sel = document.getElementById('personen');
  for (var n = 1; n <= 35; n++) {
    var o = document.createElement('option');
    o.value = n; o.textContent = n + (n === 1 ? ' persoon' : ' personen');
    if (n === 2) o.selected = true;
    sel.appendChild(o);
  }

  // preview form: sends nothing
  var form = document.getElementById('reserve-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
