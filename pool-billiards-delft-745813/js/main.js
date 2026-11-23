(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });

  // vestiging-tabs
  var tabs = document.querySelectorAll('.venue-tabs [role="tab"]');
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
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // openingstijden: [open, dicht] in minuten; dicht na middernacht = > 1440. Index 0 = zondag.
  var H = {
    delft:    [[960,1380],[960,1440],[780,1440],[780,1440],[960,1440],[780,1500],[960,1500]],
    rijswijk: [[960,1440],[960,1440],[960,1440],[960,1440],[960,1440],[960,1500],[960,1500]]
  };
  function fmt(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  Object.keys(H).forEach(function (v) {
    var row = document.querySelector('.status-row[data-venue="' + v + '"]');
    var txt = row.querySelector('.status-txt');
    var today = H[v][d], yest = H[v][(d + 6) % 7], msg;
    if (yest[1] > 1440 && m < yest[1] - 1440) msg = 'Nu open tot ' + fmt(yest[1]);
    else if (m >= today[0] && m < today[1]) msg = 'Nu open tot ' + fmt(today[1]);
    else if (m < today[0]) msg = 'Vandaag open vanaf ' + fmt(today[0]);
    else msg = 'Morgen open vanaf ' + fmt(H[v][(d + 1) % 7][0]);
    if (msg.indexOf('Nu open') === 0) row.classList.add('is-open');
    var dot = document.createElement('span'); dot.className = 'dot'; row.insertBefore(dot, row.firstChild);
    txt.textContent = msg;
    var tr = document.querySelector('[data-hours="' + v + '"] tr[data-day="' + d + '"]');
    if (tr) tr.classList.add('today');
  });
})();
