(function () {
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // today's opening status (regular hours from their site; holidays shown separately)
  var hrs = { 0: [12, 19], 1: null, 2: [12, 19], 3: [12, 19], 4: [12, 20], 5: [12, 20], 6: [12, 20] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var m = now.getMonth(), day = now.getDate();
  var holiday = (m === 11 && (day === 25 || day === 26 || day === 31)) || (m === 0 && day === 1);
  var st = document.getElementById('status');
  if (!holiday && hrs[d] && h >= hrs[d][0] && h < hrs[d][1]) {
    st.textContent = 'Vandaag open tot ' + hrs[d][1] + '.00 uur';
  } else {
    var nd = d, guard = 0;
    if (hrs[d] && h < hrs[d][0] && !holiday) { st.textContent = 'Vandaag open vanaf ' + hrs[d][0] + '.00 uur'; }
    else {
      do { nd = (nd + 1) % 7; guard++; } while (!hrs[nd] && guard < 8);
      st.textContent = 'Nu gesloten, ' + (guard === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + hrs[nd][0] + '.00 uur';
      st.classList.add('closed');
    }
  }
  st.hidden = false;
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: het bericht is niet verstuurd.';
  });
})();
