(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Tabs */
  var tabs = document.querySelectorAll('.tabs [role=tab]');
  function show(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + 1) % tabs.length]; show(n); n.focus();
      }
    });
  });

  /* Openingstijden: vandaag + nu open? (minuten sinds middernacht, einde > 1440 = na middernacht) */
  var H = { 0: [660, 1410], 1: [600, 1410], 2: [600, 1410], 3: [600, 1410], 4: [600, 1410], 5: [600, 1500], 6: [600, 1500] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var prev = (d + 6) % 7;
  var open = (m >= H[d][0] && m < Math.min(H[d][1], 1440)) || (H[prev][1] > 1440 && m < H[prev][1] - 1440);
  var el = document.querySelector('[data-today]');
  if (open) {
    var end = (m >= H[d][0]) ? H[d][1] : H[prev][1] - 1440;
    if (end >= 1440) end -= 1440;
    var hh = ('0' + Math.floor(end / 60)).slice(-2), mm = ('0' + (end % 60)).slice(-2);
    el.textContent = 'Nu open, tot ' + hh + '.' + mm + ' uur';
    el.classList.add('is-open');
  }
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-d').split(',').indexOf(String(d)) > -1) tr.classList.add('today-row');
  });

  /* Formulier: voorbeeld, verstuurt niets */
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
