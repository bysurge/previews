(function () {
  // Header turns solid after the hero
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('solid', window.scrollY > 60 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.querySelector('.mt-label').textContent = open ? 'Sluiten' : 'Menu';
    onScroll();
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Tabs (one tab set may have several tab rows)
  document.querySelectorAll('[data-tabs]').forEach(function (set) {
    var tabs = set.querySelectorAll('[role=tab]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          var p = document.getElementById(t.getAttribute('aria-controls'));
          if (p) p.hidden = !on;
        });
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      });
      tab.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var list = Array.prototype.slice.call(tabs);
        var i = list.indexOf(tab) + (e.key === 'ArrowRight' ? 1 : -1);
        var next = list[(i + list.length) % list.length];
        next.focus(); next.click();
      });
    });
  });

  // Opening hours: today and "open now"
  var hours = { 0: [11, 25], 1: [11, 25], 2: [11, 25], 3: [11, 25], 4: [11, 25], 5: [11, 26], 6: [10, 26] };
  var closedDates = ['12-24', '12-25', '12-26', '12-31'];
  var now = new Date();
  var d = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#otable tr[data-d~="' + d + '"]');
  if (row) row.classList.add('today');
  var md = String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  var yd = (d + 6) % 7;
  var el = document.getElementById('open-now');
  var fmt = function (x) { x = x % 24; return String(Math.floor(x)).padStart(2, '0') + ':00'; };
  if (el) {
    if (closedDates.indexOf(md) > -1) { el.textContent = 'Vandaag gesloten'; el.classList.add('closed'); }
    else if (h < hours[yd][1] - 24) { el.textContent = 'Nu open tot ' + fmt(hours[yd][1]); }
    else if (h >= hours[d][0]) { el.textContent = 'Vandaag open tot ' + fmt(hours[d][1]); }
    else { el.textContent = 'Vandaag open vanaf ' + fmt(hours[d][0]); }
  }

  // Reservation form: preview only
  var sel = document.getElementById('tijd');
  if (sel) {
    for (var t = 10; t <= 21; t += 0.5) {
      var o = document.createElement('option');
      o.textContent = String(Math.floor(t)).padStart(2, '0') + ':' + (t % 1 ? '30' : '00');
      sel.appendChild(o);
    }
  }
  var form = document.getElementById('res-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel 015-214 14 60 om te reserveren.';
  });
})();
