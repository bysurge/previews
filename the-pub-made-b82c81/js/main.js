(function () {
  // mobile menu
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // tabs
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        var nt = tabs[(n + tabs.length) % tabs.length]; select(nt); nt.focus(); e.preventDefault();
      });
    });
  });

  // open now (pub hours). [open, close] in minutes; 1440 = "laat"
  var H = { 0: [840, 1440, 'laat'], 1: null, 2: [1020, 1440, 'laat'], 3: [840, 1440, 'laat'], 4: [840, 1440, 'laat'], 5: [840, 1500, '01.00'], 6: [840, 1500, '01.00'] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var el = document.getElementById('openNow'), txt;
  var prev = H[(d + 6) % 7];
  if (prev && prev[1] > 1440 && m < prev[1] - 1440) txt = 'Nu open tot ' + prev[2];
  else if (H[d] && m >= H[d][0] && m < Math.min(H[d][1], 1440)) txt = H[d][2] === 'laat' ? 'Nu open, tot laat' : 'Nu open tot ' + H[d][2];
  else {
    for (var i = 0; i < 7; i++) {
      var dd = (d + i) % 7, h = H[dd];
      if (h && (i > 0 || m < h[0])) {
        var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        txt = 'Nu gesloten. We gaan ' + (i === 0 ? 'vandaag' : i === 1 ? 'morgen' : names[dd]) + ' om ' + (h[0] / 60) + '.00 uur open';
        el.classList.add('dicht');
        break;
      }
    }
  }
  if (txt) { el.textContent = txt; el.hidden = false; }
  var row = document.querySelector('.hours-t tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');

  // form: preview only
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('formMsg').hidden = false; });
})();
