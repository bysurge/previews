(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Vandaag open? wo-vr vanaf 17.00, za-zo vanaf 12.00, ma-di gesloten.
     Feestdagen: 23-24 dec en 27 dec t/m 7 jan gesloten, 25-26 dec kerstdiner (vol). */
  var START = { 3: 17, 4: 17, 5: 17, 6: 12, 0: 12 };
  
  var now = new Date(), day = now.getDay();
  var m = now.getMonth(), d = now.getDate();
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.querySelector('[data-today]');
  if (el) {
    var txt;
    if ((m === 11 && d >= 23) || (m === 0 && d <= 7)) {
      txt = (m === 11 && (d === 25 || d === 26)) ? 'Vandaag kerstdiner (vol)' : 'Gesloten rond de feestdagen, vrijdag 8 januari vanaf 17.00 uur weer open';
    } else if (START[day] !== undefined) {
      txt = 'Vandaag open vanaf ' + START[day] + '.00 uur';
      el.classList.add('is-open');
    } else {
      txt = 'Woensdag weer open vanaf 17.00 uur';
    }
    el.textContent = txt;
  }

  /* Tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (k) { var n = tabs[(i + k + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  /* Voorbeeldformulier: verstuurt niets */
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
