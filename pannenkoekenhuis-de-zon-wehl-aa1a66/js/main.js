(function () {
  var t = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  function setNav(open) { nav.classList.toggle('open', open); t.setAttribute('aria-expanded', open); t.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen'); document.body.style.overflow = open ? 'hidden' : ''; }
  t.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (b) {
      var on = b === tab; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n === null) return; e.preventDefault(); n = (n + tabs.length) % tabs.length; tabs[n].focus(); select(tabs[n]);
    });
  });

  var hours = { 0: [12, 20], 3: [16, 20], 4: [16, 20], 5: [16, 20], 6: [12, 20] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60, el = document.getElementById('today');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]'); if (row) row.classList.add('now');
  if (el) {
    var x = hours[d];
    if (x && h >= x[0] && h < x[1]) el.innerHTML = '<b>Nu open</b>, vandaag tot 20:00 uur';
    else if (x && h < x[0]) el.innerHTML = '<b>Vandaag open</b> van ' + x[0] + ':00 tot 20:00 uur';
    else {
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      for (var i = 1; i < 8; i++) { var nd = (d + i) % 7; if (hours[nd]) { el.innerHTML = '<b>Nu gesloten</b>, ' + (i === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + hours[nd][0] + ':00 uur'; break; } }
    }
  }
})();
