(function () {
  // mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // tabs menukaart
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on) document.querySelector('.bord').classList.toggle('breed', /snacks|drinken/.test(t.id));
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus(); e.preventDefault();
    });
  });

  // open / dicht (tijden in Nederlandse tijd)
  var uren = { // [van, tot] in minuten
    0: [[960, 1260]],
    1: [],
    2: [[720, 810], [990, 1260]],
    3: [[720, 810], [990, 1260]],
    4: [[720, 810], [990, 1260]],
    5: [[720, 810], [960, 1260]],
    6: [[720, 810], [960, 1260]]
  };
  var dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hm(m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); }
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = (+get('hour') % 24) * 60 + (+get('minute'));
    var row = document.querySelector('.uren tr[data-dag="' + d + '"]');
    if (row) row.classList.add('vandaag');
    var el = document.getElementById('status'), txt = el.querySelector('.status-txt');
    var open = uren[d].filter(function (r) { return now >= r[0] && now < r[1]; })[0];
    if (open) {
      el.classList.add('open'); txt.textContent = 'Nu open, tot ' + hm(open[1]);
    } else {
      el.classList.add('dicht');
      var later = uren[d].filter(function (r) { return r[0] > now; })[0];
      if (later) { txt.textContent = 'Nu gesloten, vandaag weer open om ' + hm(later[0]); }
      else {
        for (var k = 1; k <= 7; k++) {
          var dd = (d + k) % 7;
          if (uren[dd].length) { txt.textContent = 'Nu gesloten, ' + (k === 1 ? 'morgen' : dagen[dd]) + ' weer open om ' + hm(uren[dd][0][0]); break; }
        }
      }
    }
  } catch (e) { /* tekst blijft 'Bekijk de openingstijden' */ }
})();
