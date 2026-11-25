(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // tabs
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
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.querySelector('[aria-controls="' + a.getAttribute('data-tab') + '"]');
      if (t) select(t);
    });
  });

  // open now (Europe/Amsterdam)
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var mins = (+get('hour') % 24) * 60 + (+get('minute'));
    var close = function (d) { return (d >= 1 && d <= 4) ? 20 : 21; };
    var el = document.getElementById('status'), txt = document.getElementById('status-text');
    if (mins >= 720 && mins < close(day) * 60) {
      el.classList.add('is-open');
      txt.textContent = 'Nu open, vandaag tot ' + close(day) + ':00';
    } else if (mins < 720) {
      txt.textContent = 'Vandaag open van 12:00 tot ' + close(day) + ':00';
    } else {
      txt.textContent = 'Nu gesloten, morgen weer open vanaf 12:00';
    }
    document.querySelectorAll('.hours__list [data-days]').forEach(function (row) {
      if (row.getAttribute('data-days').split(',').indexOf(String(day)) > -1) row.classList.add('is-today');
    });
  } catch (e) {}

  // preview form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
  });
})();
