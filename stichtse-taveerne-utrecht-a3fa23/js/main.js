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

  /* Openingstijden (minuten; einde > 1440 = na middernacht) */
  var H = { 0: [840, 1170], 1: [780, 1500], 2: [780, 1500], 3: [780, 1500], 4: [780, 1500], 5: [780, 1590], 6: [780, 1590] };
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var prev = (d + 6) % 7;
  var el = document.querySelector('[data-today]');
  var end = null;
  if (m >= H[d][0] && m < H[d][1]) end = H[d][1];
  else if (H[prev][1] > 1440 && m < H[prev][1] - 1440) end = H[prev][1] - 1440;
  if (end !== null) {
    if (end >= 1440) end -= 1440;
    var hh = ('0' + Math.floor(end / 60)).slice(-2), mm = ('0' + (end % 60)).slice(-2);
    el.textContent = 'Nu open, tot ' + hh + ':' + mm + ' uur';
    el.classList.add('is-open');
  }
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.getAttribute('data-d').split(',').indexOf(String(d)) > -1) tr.classList.add('today-row');
  });
})();
