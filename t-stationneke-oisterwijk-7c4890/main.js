(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
      if (j !== null) { e.preventDefault(); select(tabs[j], true); }
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.querySelector('[data-tab="' + a.getAttribute('data-open-tab') + '"]');
      if (t) select(t);
    });
  });

  // Open / closed now (di-za 09.30-16.00, Amsterdam time)
  var el = document.getElementById('status');
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    var day = get('weekday'); var mins = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    var openDay = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(day) > -1;
    var isOpen = openDay && mins >= 570 && mins < 960;
    var text;
    if (isOpen) text = 'Nu open, tot 16.00 uur';
    else if (openDay && mins < 570) text = 'Gesloten, vandaag open vanaf 09.30 uur';
    else if (day === 'Sun' || day === 'Mon') text = 'Gesloten, dinsdag weer open vanaf 09.30 uur';
    else if (day === 'Sat') text = 'Gesloten, dinsdag weer open vanaf 09.30 uur';
    else text = 'Gesloten, morgen weer open vanaf 09.30 uur';
    el.innerHTML = '<span class="dot"></span>' + text + ' (feestdagen uitgezonderd)';
    if (isOpen) el.classList.add('open');
  } catch (e) { el.textContent = 'Uitgezonderd feestdagen'; }
})();
