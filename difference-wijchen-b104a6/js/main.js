(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return;
      var next = tabs[(n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // opening status (wo-zo 17:00-00:00)
  var now = new Date(), day = now.getDay(), h = now.getHours();
  var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var openDay = day === 0 || day >= 3;
  var status = document.querySelector('[data-status]');
  if (status) {
    if (openDay && h >= 17) { status.textContent = 'Nu open, vandaag tot 00:00'; status.classList.add('is-open'); }
    else if (openDay) { status.textContent = 'Vandaag open vanaf 17:00'; }
    else { status.textContent = 'Vandaag gesloten, woensdag weer open'; }
  }

  // example form
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
