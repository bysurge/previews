(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault(); }
    });
  });

  // Today: open status, today's column in the week, today's row in the hours
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var openDay = day === 0 || day >= 3;
  var el = document.getElementById('open-now');
  if (!openDay) {
    el.textContent = 'Vandaag gesloten. Woensdag vanaf 11:00 weer verse focaccia.';
    el.classList.add('closed');
  } else if (mins < 11 * 60) {
    el.textContent = 'Vandaag open van 11:00 tot 17:00, of tot alles op is';
  } else if (mins < 17 * 60) {
    el.textContent = 'Nu open tot 17:00, of tot alles op is';
  } else {
    el.textContent = 'Nu gesloten. ' + (day === 0 ? 'Woensdag vanaf 11:00 weer open.' : 'Morgen vanaf 11:00 weer open.');
    el.classList.add('closed');
  }
  var li = document.querySelector('#week li[data-day="' + day + '"]');
  if (li) li.classList.add('is-today');
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('is-today');
  });

  // Preview form: never sends anything
  var form = document.getElementById('cform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
