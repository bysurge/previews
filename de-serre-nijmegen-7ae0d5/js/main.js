(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menu openen');
    }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(name, focus) {
    tabs.forEach(function (t) {
      var on = t.id === 't-' + name;
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
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n.id.slice(2), true);
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(a.getAttribute('data-tab')); });
  });
  document.querySelectorAll('[data-goto]').forEach(function (b) {
    b.addEventListener('click', function () {
      select(b.getAttribute('data-goto'), true);
    });
  });

  // today's hours
  var hours = { 0: [12, 17], 1: [12, 16], 2: [11, 16], 3: [11, 16], 4: [11, 16], 5: [11, 16], 6: [10, 17] };
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var h = now.getHours() + now.getMinutes() / 60;
  var el = document.getElementById('vandaag');
  var span = hours[d];
  if (h >= span[0] && h < span[1]) {
    el.textContent = 'Nu open, vandaag tot ' + span[1] + '.00 uur';
  } else if (h < span[0]) {
    el.textContent = 'Vandaag open van ' + span[0] + '.00 tot ' + span[1] + '.00 uur';
    el.classList.add('closed');
  } else {
    var nd = (d + 1) % 7;
    el.textContent = 'Nu gesloten, morgen open vanaf ' + hours[nd][0] + '.00 uur';
    el.classList.add('closed');
  }

  // form: preview only
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: het bericht is niet verstuurd. Mail gerust naar info@deserrenijmegen.com.';
  });
})();
