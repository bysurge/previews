(function () {
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

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('.mk-tabs [role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (tab.scrollIntoView && tab.parentNode.scrollWidth > tab.parentNode.clientWidth) {
      tab.parentNode.scrollLeft = tab.offsetLeft - 20;
    }
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
  // links elsewhere that open a specific tab
  [].forEach.call(document.querySelectorAll('[data-open-tab]'), function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-open-tab'));
      if (t) select(t);
    });
  });

  // open today (Wed-Sun 17-22)
  var open = { 0: 1, 3: 1, 4: 1, 5: 1, 6: 1 };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-days="' + d + '"]');
  if (row) row.classList.add('now');
  var el = document.querySelector('[data-today]');
  if (el) {
    if (open[d] && h >= 17 && h < 22) {
      el.innerHTML = '<span class="dot"></span>Nu open, vandaag tot <b>22.00</b> uur';
    } else if (open[d] && h < 17) {
      el.innerHTML = '<span class="dot shut"></span>Vandaag open vanaf <b>17.00</b> uur';
    } else {
      var n = 1; while (!open[(d + n) % 7]) n++;
      el.innerHTML = '<span class="dot shut"></span>Nu gesloten, ' + (n === 1 ? 'morgen' : names[(d + n) % 7]) + ' weer open vanaf <b>17.00</b> uur';
    }
  }
})();
