(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // tabs lunchkaart
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // vandaag open? ma-do + zo 10-24, vr/za 10-01
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#tijden tr[data-d="' + day + '"]');
  if (row) row.classList.add('nu');
  var late = function (d) { return d === 5 || d === 6; };
  var el = document.getElementById('today');
  var open = h >= 10 || (h < 1 && late((day + 6) % 7));
  if (open) {
    var sluit = h < 1 ? '01.00' : (late(day) ? '01.00' : '24.00');
    el.textContent = 'Nu open, vandaag tot ' + sluit + ' uur';
  } else {
    el.textContent = 'Nu gesloten, vandaag open vanaf 10.00 uur';
    el.classList.add('dicht');
  }
})();
