(function () {
  // Mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  if (burger && nav) {
    burger.addEventListener('click', function () { setNav(burger.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
  }

  // Open / closed, based on the opening hours (Dutch time)
  // 0 = Sunday ... 6 = Saturday; [open, close] in minutes
  var hours = { 0: [960, 1200], 1: null, 2: [720, 1200], 3: [720, 1200], 4: [720, 1200], 5: [720, 1200], 6: [720, 1200] };
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
  function nowNL() {
    try {
      var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
      var map = {}; parts.forEach(function (p) { map[p.type] = p.value; });
      var d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(map.weekday);
      return { day: d, min: (parseInt(map.hour, 10) % 24) * 60 + parseInt(map.minute, 10) };
    } catch (e) {
      var n = new Date(); return { day: n.getDay(), min: n.getHours() * 60 + n.getMinutes() };
    }
  }
  var now = nowNL();
  var row = document.querySelector('.hours-t tr[data-day="' + now.day + '"]');
  if (row) row.classList.add('today');

  var status = document.querySelector('[data-status]');
  var text = document.querySelector('[data-status-text]');
  if (status && text) {
    var today = hours[now.day];
    if (today && now.min >= today[0] && now.min < today[1]) {
      status.classList.add('is-open');
      text.textContent = 'Nu open, bellen kan tot ' + fmt(today[1]);
    } else {
      status.classList.add('is-closed');
      var label;
      if (today && now.min < today[0]) {
        label = 'Vandaag open vanaf ' + fmt(today[0]);
      } else {
        for (var i = 1; i <= 7; i++) {
          var d = (now.day + i) % 7;
          if (hours[d]) { label = (i === 1 ? 'Morgen' : 'Weer open ' + dayNames[d]) + ' vanaf ' + fmt(hours[d][0]); break; }
        }
      }
      text.textContent = 'Nu gesloten. ' + label;
    }
  }

  // Demo form: nothing is sent
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      if (msg) { msg.hidden = false; msg.focus && msg.setAttribute('tabindex', '-1'); msg.focus(); }
    });
  });
})();
