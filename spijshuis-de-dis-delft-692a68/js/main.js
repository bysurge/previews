(function () {
  // Mobiel menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o);
    document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // Tabs (kaart + dranken)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role=tab]');
    function pick(t, focus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on);
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
      t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pick(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); pick(tabs[(i + n + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Vandaag + open/dicht (di t/m za 17:00-22:00)
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');
  var st = document.querySelector('.status');
  if (st) {
    var openDay = d >= 2 && d <= 6;
    var txt;
    if (openDay && h >= 17 && h < 22) txt = 'Nu open, tot 22:00 uur';
    else if (openDay && h < 17) txt = 'Vandaag open vanaf 17:00 uur';
    else { txt = 'Dinsdag t/m zaterdag open van 17:00 tot 22:00 uur'; st.classList.add('closed'); }
    st.querySelector('span').textContent = txt;
  }

  // Formulieren versturen niets
  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').hidden = false;
    });
  });
})();
