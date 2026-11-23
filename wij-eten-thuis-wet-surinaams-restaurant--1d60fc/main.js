(function () {
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // vandaag (Europe/Amsterdam). Open wo-zo vanaf 16:30; keuken tot 20:30.
  var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }));
  var d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var close = { 0: '21:30', 3: '21:30', 4: '21:30', 5: '22:30', 6: '22:30' };
  var closeMin = { 0: 1290, 3: 1290, 4: 1290, 5: 1350, 6: 1350 };
  var el = document.getElementById('today');
  if (!close[d]) el.textContent = 'Vandaag gesloten · woensdag weer open vanaf 16:30';
  else if (m < 990) el.textContent = 'Vandaag open van 16:30 tot ' + close[d];
  else if (m < closeMin[d]) { el.dataset.open = '1'; el.textContent = m < 1230 ? 'Nu open · keuken tot 20:30' : 'Nu open tot ' + close[d] + ' · keuken is dicht'; }
  else el.textContent = 'Nu gesloten · open wo t/m zo vanaf 16:30';
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        n.focus(); select(n);
      }
    });
  });

  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
