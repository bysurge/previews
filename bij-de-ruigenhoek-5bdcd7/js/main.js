(function () {
  var top = document.getElementById('top');
  var burger = top.querySelector('.burger');
  var callbar = document.getElementById('callbar');

  function onScroll() {
    var y = window.scrollY;
    top.classList.toggle('solid', y > 40);
    if (callbar) callbar.classList.toggle('show', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = top.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  top.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      top.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Tabs (menukaart en vijvers)
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on);
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
  });

  // Nu open? Wo t/m zo 9-17 (tijd in Nederland)
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var mins = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    var openDay = day === 0 || day >= 3;
    var isOpen = openDay && mins >= 540 && mins < 1020;
    var st = document.getElementById('status');
    var txt = st.querySelector('span');
    if (isOpen) { st.classList.add('is-open'); txt.textContent = 'Nu open, tot 17:00'; }
    else if (openDay && mins < 540) { txt.textContent = 'Vandaag open vanaf 9:00'; }
    else { txt.textContent = 'Nu gesloten. Open woensdag t/m zondag, 9 - 17'; }
    var row = document.querySelector('#hours tr[data-d="' + day + '"]');
    if (row) row.classList.add('today');
  } catch (e) {}

  // Formulier: voorbeeld, verstuurt niets
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').classList.add('show');
  });
})();
