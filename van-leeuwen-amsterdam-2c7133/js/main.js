(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Open of dicht? Elke dag vanaf 08:30; zo-do tot 01:00, vr-za tot 03:00 */
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var yesterday = (day + 6) % 7;
  var lateNight = yesterday === 5 || yesterday === 6;
  var open = false, until = '';
  if (mins >= 510) { open = true; until = (day === 5 || day === 6) ? '03:00' : '01:00'; }
  else if (mins < (lateNight ? 180 : 60)) { open = true; until = lateNight ? '03:00' : '01:00'; }

  var todayEl = document.querySelector('[data-today]');
  if (todayEl) {
    todayEl.textContent = open ? 'Nu open, tot ' + until + ' uur' : 'Vandaag open vanaf 08:30 uur';
    if (open) todayEl.classList.add('is-open');
  }

  var nowEl = document.querySelector('[data-now]');
  if (nowEl && open) {
    var t = mins < 510 ? mins + 1440 : mins;
    var f = (t - 510) / 1110;
    if (f >= 0 && f <= 1) { nowEl.style.setProperty('--now', f.toFixed(3)); nowEl.hidden = false; }
  }

  var rows = document.querySelectorAll('#hours [data-days]');
  var serviceDay = mins < 180 ? yesterday : day;
  Array.prototype.forEach.call(rows, function (r) {
    if (r.getAttribute('data-days').split(',').indexOf(String(serviceDay)) > -1) r.classList.add('is-today');
  });

  /* Tabs voor de kaart */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  /* Reserveren: voorbeeldformulier, verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
})();
