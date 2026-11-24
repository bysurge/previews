(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menu tabs (Kant A / Kant B)
  var tabs = [].slice.call(document.querySelectorAll('.sides [role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // open today
  var hours = { 2: [9, 17], 3: [9, 17], 4: [9, 17], 5: [9, 17], 6: [11, 17] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var el = document.querySelector('[data-today]');
  var row = document.querySelector('.hours tr[data-days*="' + d + '"]');
  if (row) row.classList.add('now');
  if (el) {
    var t = hours[d];
    if (t && h >= t[0] && h < t[1]) {
      el.innerHTML = '<span class="dot"></span>Nu open, vandaag tot <b>' + t[1] + '.00</b> uur';
    } else {
      var n = 1; while (!hours[(d + n) % 7] && n < 7) n++;
      var nd = (d + n) % 7, when = (t && h < t[0]) ? 'vandaag' : (n === 1 ? 'morgen' : names[nd]);
      var nt = (t && h < t[0]) ? t : hours[nd];
      el.innerHTML = '<span class="dot shut"></span>Nu gesloten, ' + when + ' weer open vanaf <b>' + nt[0] + '.00</b> uur';
    }
  }
})();
