(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus(); }
    });
  });

  // opening hours: highlight today + open now
  var hours = { 0: [12, 16], 1: null, 2: [10, 16], 3: [10, 16], 4: [10, 16], 5: [10, 16.5], 6: [10, 17] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#tijden tr[data-d="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var el = document.getElementById('openNow');
  function fmt(x) { var m = Math.round((x % 1) * 60); return Math.floor(x) + ':' + (m < 10 ? '0' : '') + m; }
  if (el) {
    var t = hours[d];
    if (t && h >= t[0] && h < t[1]) { el.textContent = 'Nu open, vandaag tot ' + fmt(t[1]); el.classList.add('is-open'); }
    else if (t && h < t[0]) { el.textContent = 'Vandaag open van ' + fmt(t[0]) + ' tot ' + fmt(t[1]); }
    else {
      for (var i = 1; i <= 7; i++) {
        var nd = (d + i) % 7;
        if (hours[nd]) {
          var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
          el.textContent = 'Nu gesloten, ' + (i === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + fmt(hours[nd][0]);
          break;
        }
      }
    }
  }

  // preview form
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: je bericht is niet verstuurd.';
  });
})();
