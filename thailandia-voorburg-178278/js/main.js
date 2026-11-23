(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });

  // today (0 = Sunday); kitchen closes 21:00, Sunday 20:00
  var d = new Date().getDay();
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-day') === String(d)) tr.classList.add('is-today');
  });
  var el = document.getElementById('today');
  if (el) {
    if (d === 1 || d === 2) el.textContent = 'Vandaag gesloten · woensdag t/m zondag open vanaf 17:00';
    else el.textContent = 'Vandaag open vanaf 17:00 · keuken tot ' + (d === 0 ? '20:00' : '21:00');
    el.hidden = false;
  }
})();
