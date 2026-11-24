(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(id, focus) {
    tabs.forEach(function (t) {
      var on = t.id === 't-' + id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on && focus) t.focus();
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t.id.slice(2)); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      select(tabs[(i + d + tabs.length) % tabs.length].id.slice(2), true);
    });
  });
  document.querySelectorAll('.lane[data-tab]').forEach(function (l) {
    l.addEventListener('click', function () { select(l.getAttribute('data-tab')); });
  });

  // what is on now (Amsterdam time)
  var parts = {};
  try {
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
  } catch (e) { return; }
  var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  var dow = days[parts.weekday];
  var h = (parseInt(parts.hour, 10) % 24) + parseInt(parts.minute, 10) / 60;
  if (isNaN(h) || dow === undefined) return;

  // after midnight counts as the previous evening
  var night = h < 11;
  var evDow = night ? (dow + 6) % 7 : dow;
  var t = night ? h + 24 : h;
  var close = (evDow === 5 || evDow === 6) ? 25 : 24;
  var open = t >= 11 && t < close;

  var today = document.querySelector('.hours tr[data-d="' + evDow + '"]');
  if (today && open) today.classList.add('today');
  else { var d = document.querySelector('.hours tr[data-d="' + dow + '"]'); if (d) d.classList.add('today'); }

  var now = document.getElementById('now');
  var txt = document.getElementById('now-t');
  var closeTxt = close === 25 ? '01:00' : '00:00';
  if (!open) {
    now.classList.add('closed');
    txt.textContent = 'Nu gesloten, vandaag open vanaf 11:00';
  } else if (t < 16) {
    txt.textContent = 'Nu open · lunch tot 16:00';
  } else if (t < 18) {
    txt.textContent = 'Nu open · borrel tot 22:00, diner vanaf 18:00';
  } else if (t < 22) {
    txt.textContent = 'Nu open · diner en borrel tot 22:00';
  } else {
    txt.textContent = 'Nu open · bar tot ' + closeTxt;
  }

  // default tab follows the time of day
  if (open) select(t < 16 ? 'lunch' : t < 18 ? 'borrel' : t < 22 ? 'diner' : 'drank');

  // "now" marker on the day strip
  var marker = document.getElementById('day-now');
  var lanes = document.querySelector('.day-lanes');
  function place() {
    if (!open) { marker.hidden = true; return; }
    var x = lanes.offsetLeft + lanes.offsetWidth * Math.min(t - 11, 14) / 14;
    marker.style.left = x + 'px';
    marker.hidden = false;
  }
  place();
  window.addEventListener('resize', place);
})();
