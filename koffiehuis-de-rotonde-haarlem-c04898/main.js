(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Menu openen'); }
  });

  // Menu tabs
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var next = tabs[(i + n + tabs.length) % tabs.length]; select(next); next.focus(); }
    });
  });

  // Open now (Amsterdam time)
  var hours = { 1: [7, 17], 2: [7, 17], 3: [7, 17], 4: [7, 17], 5: [6, 19] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date());
    var get = function (type) { return parts.filter(function (p) { return p.type === type; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = parseInt(get('hour'), 10) % 24 + parseInt(get('minute'), 10) / 60;
    var status = document.getElementById('status');
    var text = document.getElementById('status-text');
    var h = hours[day];
    if (h && now >= h[0] && now < h[1]) {
      status.classList.add('is-open');
      text.textContent = 'Nu open, vandaag tot ' + h[1] + '.00 uur';
    } else {
      status.classList.add('is-closed');
      var d = day, label;
      for (var i = 0; i < 7; i++) {
        if (i === 0 && h && now < h[0]) { label = 'vandaag om ' + h[0] + '.00 uur'; break; }
        d = (d + 1) % 7;
        if (hours[d]) { label = (i === 0 ? 'morgen' : names[d]) + ' om ' + hours[d][0] + '.00 uur'; break; }
      }
      text.textContent = 'Nu gesloten, we zijn weer open ' + label;
    }
    var row = document.querySelector('.hours tr[data-days*="' + day + '"]');
    if (row) row.classList.add('is-today');
  } catch (e) { /* keep static hours text */ }
})();
