(function () {
  // mobiel menu
  var t = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  if (t && nav) {
    t.addEventListener('click', function () {
      var open = t.getAttribute('aria-expanded') !== 'true';
      t.setAttribute('aria-expanded', open);
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { t.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // tabs menukaart
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (b) {
      var on = b === tab;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });

  // openingstijden: vandaag + nu open
  var H = { 1: [600, 1080], 2: [570, 1080], 3: [570, 1080], 4: [570, 1080], 5: [510, 1110], 6: [510, 1080] };
  var fmt = function (m) { return String(Math.floor(m / 60)).padStart(2, '0') + '.' + String(m % 60).padStart(2, '0'); };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('open-now');
  if (el) {
    var h = H[d];
    if (h && m >= h[0] && m < h[1]) { el.textContent = 'Nu open, vandaag tot ' + fmt(h[1]) + ' uur'; el.classList.add('is-open'); }
    else if (h && m < h[0]) { el.textContent = 'Vandaag open vanaf ' + fmt(h[0]) + ' uur'; }
    else {
      var nd = (d + 1) % 7; if (!H[nd]) nd = (nd + 1) % 7;
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      el.textContent = 'Nu gesloten, ' + (nd === (d + 1) % 7 ? 'morgen' : names[nd]) + ' open vanaf ' + fmt(H[nd][0]) + ' uur';
    }
  }

  // voorbeeldformulier
  var f = document.getElementById('res-form');
  if (f) f.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
