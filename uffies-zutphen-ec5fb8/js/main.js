(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t, focus) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  [].forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () { select(document.getElementById('t-' + a.getAttribute('data-tab'))); });
  });

  // Today
  var hours = { 3: ['10.00', '17.00'], 4: ['10.00', '22.00'], 5: ['10.00', '00.00'], 6: ['10.00', '00.00'], 0: ['10.00', '22.00'] };
  var d = new Date().getDay(), el = document.querySelector('[data-today]');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  if (el && hours[d]) el.textContent = 'Vandaag open van ' + hours[d][0] + ' tot ' + hours[d][1];
  else if (el) el.textContent = 'Woensdag t/m zondag geopend vanaf 10.00';

  // Example form
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
