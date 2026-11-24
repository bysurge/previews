(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function zet(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { zet(!document.body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { zet(false); }); });

  // prijslijst-tabs
  var tabs = document.querySelectorAll('[role=tab]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
    });
  });

  // vandaag open?
  var tijden = { 0: [15 * 60, 19 * 60 + 30], 2: [690, 1170], 3: [690, 1170], 4: [690, 1170], 5: [690, 1170], 6: [690, 1170] };
  var nu = new Date(), d = nu.getDay(), m = nu.getHours() * 60 + nu.getMinutes();
  var rij = document.querySelector('#tijden tr[data-d="' + d + '"]');
  if (rij) rij.classList.add('vandaag');
  var el = document.getElementById('nuOpen');
  if (el) {
    var t = tijden[d], txt;
    if (t && m >= t[0] && m < t[1]) { el.classList.add('open'); txt = 'Nu open, vandaag tot 19.30 uur'; }
    else if (t && m < t[0]) { txt = 'Vandaag open vanaf ' + (d === 0 ? '15.00' : '11.30') + ' uur'; }
    else { var morgen = (d + 1) % 7; txt = 'Nu gesloten · ' + (morgen === 1 ? 'dinsdag weer open vanaf 11.30' : 'morgen open vanaf ' + (morgen === 0 ? '15.00' : '11.30')); }
    el.querySelector('span').textContent = txt;
  }
})();
