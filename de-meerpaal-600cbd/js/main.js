(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Tabs van de menukaart */
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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

  /* Vandaag open? (do t/m zo 17.00 - 22.00) */
  var open = { 4: 1, 5: 1, 6: 1, 0: 1 };
  var el = document.querySelector('[data-today]');
  if (el) {
    var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    if (open[d] && m < 1320) {
      el.textContent = m >= 1020 ? 'Nu open, tot 22.00 uur' : 'Vandaag open vanaf 17.00 uur';
      if (m >= 1020) el.classList.add('is-open');
    } else {
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      for (var i = 1; i <= 7; i++) {
        var nd = (d + i) % 7;
        if (open[nd]) { el.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[nd]) + ' vanaf 17.00 uur'; break; }
      }
    }
  }

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
  });
})();
