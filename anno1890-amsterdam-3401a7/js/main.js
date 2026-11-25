(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // open now + today's hours
  var hours = { 0: [11, 23], 1: [9, 23], 2: [9, 23], 3: [9, 23], 4: [9, 23], 5: [9, 24], 6: [9, 24] };
  var d = new Date();
  var day = d.getDay();
  var h = d.getHours() + d.getMinutes() / 60;
  var now = document.getElementById('now');
  var fmt = function (x) { return (x === 24 ? '00' : String(x).padStart(2, '0')) + '.00'; };
  var xmas = d.getMonth() === 11 && d.getDate() === 25;
  var today = hours[day];
  if (xmas) {
    now.textContent = 'Vandaag (eerste kerstdag) gesloten';
    now.classList.add('closed');
  } else if (h >= today[0] && h < today[1]) {
    now.textContent = 'Nu open, vandaag tot ' + fmt(today[1]) + ' uur';
  } else if (h < today[0]) {
    now.textContent = 'Vandaag open vanaf ' + fmt(today[0]) + ' uur';
    now.classList.add('closed');
  } else {
    var tm = hours[(day + 1) % 7];
    now.textContent = 'Nu gesloten, morgen open vanaf ' + fmt(tm[0]) + ' uur';
    now.classList.add('closed');
  }
  document.querySelectorAll('#hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('today');
  });

  // agenda: hide dates that have passed
  var todayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  document.querySelectorAll('#agenda [data-date]').forEach(function (li) {
    if (li.getAttribute('data-date') < todayStr) li.remove();
  });

  // newsletter: preview only
  var form = document.getElementById('nb');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('nb-msg').textContent = 'Dit is een voorbeeld: er wordt niets verstuurd.';
  });
})();
