(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Tabs van de kaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
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

  // Vandaag open?
  var hours = { 0: [12, 18], 1: null, 2: [10, 18], 3: [10, 18], 4: [10, 18], 5: [10, 24], 6: [10, 18] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var t = hours[d], el = document.getElementById('today');
  if (el) {
    var fmt = function (x) { return x === 24 ? '00:00' : (x < 10 ? '0' : '') + x + ':00'; };
    if (!t) el.textContent = 'Vandaag gesloten, dinsdag vanaf 10:00 weer open';
    else if (h < t[0]) el.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]);
    else if (h < t[1]) { el.textContent = 'Nu open, tot ' + fmt(t[1]); el.classList.add('open'); }
    else el.textContent = 'Vandaag open tot ' + fmt(t[1]) + ', nu gesloten';
  }

  // Voorbeeldformulier
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
