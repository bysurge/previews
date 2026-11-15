(function () {
  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Seizoen en "vandaag open?" volgens de tijden op de site:
     winter 1 okt t/m 31 mrt: vr t/m zo 09.00-17.00; zomer 1 apr tot 1 okt: wo t/m zo 09.00-17.00 */
  var now = new Date();
  var m = now.getMonth(); // 0 = januari
  var zomer = m >= 3 && m <= 8;
  var openDays = zomer ? [3, 4, 5, 6, 0] : [5, 6, 0];
  var dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var seasonEl = document.querySelector('.season[data-season="' + (zomer ? 'zomer' : 'winter') + '"]');
  if (seasonEl) seasonEl.classList.add('now');

  var el = document.getElementById('today');
  var d = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var openToday = openDays.indexOf(d) !== -1;
  function nextOpen() {
    for (var i = 1; i <= 7; i++) {
      var nd = (d + i) % 7;
      if (openDays.indexOf(nd) !== -1) return i === 1 ? 'morgen' : dagen[nd];
    }
  }
  if (openToday && mins < 17 * 60) {
    el.textContent = mins < 9 * 60 ? 'Vandaag open van 09.00 tot 17.00' : 'Nu open, tot 17.00 uur';
  } else {
    el.classList.add('closed');
    el.textContent = (openToday ? 'Voor vandaag gesloten' : 'Vandaag gesloten') + ', ' + nextOpen() + ' weer open vanaf 09.00';
  }

  /* Reserveren: voorbeeldformulier, verstuurt niets */
  var form = document.getElementById('res-form');
  var msg = document.getElementById('form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.hidden = false;
    msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
})();
