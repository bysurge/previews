(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); });
  });

  // open today
  var now = new Date(), d = now.getDay(), m = now.getMonth(), dt = now.getDate();
  var mins = now.getHours() * 60 + now.getMinutes();
  var start = (m === 11 && (dt === 25 || dt === 26)) ? 15 * 60 + 30 : 16 * 60 + 30, end = 22 * 60;
  var startTxt = start === 930 ? '15:30' : '16:30';
  var row = document.querySelector('#tijden tr[data-d="' + d + '"]');
  if (row) row.classList.add('vandaag');
  var label = document.getElementById('open-now'), sub = document.getElementById('open-sub'), dot = document.getElementById('open-dot');
  if (d === 2) { label.textContent = 'Vandaag gesloten'; sub.textContent = 'morgen weer open vanaf 16:30'; }
  else if (mins < start) { label.textContent = 'Vandaag open ' + startTxt + ' - 22:00'; sub.textContent = 'telefonisch bereikbaar vanaf 11:30'; }
  else if (mins < end) { label.textContent = 'Nu open tot 22:00'; sub.textContent = 'dinsdag gesloten'; dot.classList.add('open'); }
  else { label.textContent = 'Dagelijks 16:30 - 22:00'; sub.textContent = 'dinsdag gesloten'; }

  // price calculator (prices from wokofking.nl, 2026)
  var P = {
    week:       { volw: 38,   extraV: [0, 3, 5], extraK: [0, 2, 3] },
    weekend:    { volw: 40,   extraV: [0, 3, 5], extraK: [0, 2, 3] },
    kerstavond: { volw: 45,   klein: 3, perJaar: 3.5 },
    kerstdag:   { volw: 53.5, klein: 5, perJaar: 3.8 }
  };
  var euro = function (n) { return '€ ' + n.toFixed(2).replace('.', ','); };
  var volw = 2, kids = [];
  var volwOut = document.getElementById('rek-volw'), lijst = document.getElementById('kids-lijst');
  var regels = document.getElementById('bon-regels'), totaalEl = document.getElementById('rek-totaal');
  var duurWrap = document.getElementById('rek-duur-wrap'), kerstDuur = document.getElementById('kerst-duur');
  if (d === 5 || d === 6 || d === 0) document.querySelector('input[name="dag"][value="weekend"]').checked = true;

  function dag() { return document.querySelector('input[name="dag"]:checked').value; }
  function duur() { return +document.querySelector('input[name="duur"]:checked').value; }
  function kindPrijs(age, p, kerst, extra) {
    if (kerst) {
      if (age === 0) return null; // niet vermeld op hun site
      return age <= 2 ? p.klein : age * p.perJaar;
    }
    if (age <= 2) return 0;
    return age * 2.8 + extra;
  }
  function render() {
    var k = dag(), p = P[k], kerst = k.indexOf('kerst') === 0, du = kerst ? 0 : duur();
    duurWrap.hidden = kerst; kerstDuur.hidden = !kerst;
    var vPrijs = p.volw + (kerst ? 0 : p.extraV[du]);
    var tot = volw * vPrijs, html = '', onbekend = false;
    html += '<p><span>' + volw + ' × volwassene</span><span>' + euro(volw * vPrijs) + '</span></p>';
    lijst.innerHTML = '';
    kids.forEach(function (age, i) {
      var pr = kindPrijs(age, p, kerst, kerst ? 0 : p.extraK[du]);
      var li = document.createElement('li');
      var sel = '<select aria-label="Leeftijd kind ' + (i + 1) + '">';
      for (var a = 0; a <= 11; a++) sel += '<option value="' + a + '"' + (a === age ? ' selected' : '') + '>' + a + ' jaar</option>';
      sel += '</select>';
      var txt = pr === null ? 'navragen' : (pr === 0 ? 'gratis' : euro(pr));
      li.innerHTML = 'Kind ' + (i + 1) + ' ' + sel + '<span class="kp">' + txt + '</span><button type="button" class="kid-del" aria-label="Kind ' + (i + 1) + ' verwijderen">×</button>';
      li.querySelector('select').addEventListener('change', function (e) { kids[i] = +e.target.value; render(); });
      li.querySelector('.kid-del').addEventListener('click', function () { kids.splice(i, 1); render(); });
      lijst.appendChild(li);
      if (pr === null) onbekend = true; else tot += pr;
    });
    if (kids.length) html += '<p><span>' + kids.length + ' × kind</span><span>' + euro(tot - volw * vPrijs) + '</span></p>';
    html += '<p><span>' + (kerst ? '2,5 uur' : ['2 uur', '2,5 uur', '3 uur'][du]) + ', inclusief drank</span><span></span></p>';
    if (onbekend) html += '<p><span>Prijs voor kinderen van 0 jaar met kerst: even navragen.</span></p>';
    regels.innerHTML = html;
    volwOut.textContent = volw;
    totaalEl.textContent = euro(tot);
  }
  document.querySelectorAll('.stepper button').forEach(function (b) {
    b.addEventListener('click', function () { volw = Math.max(0, Math.min(60, volw + +b.dataset.step)); render(); });
  });
  document.getElementById('kind-plus').addEventListener('click', function () { if (kids.length < 15) { kids.push(6); render(); } });
  document.querySelectorAll('input[name="dag"], input[name="duur"]').forEach(function (r) { r.addEventListener('change', render); });
  render();

  // demo form
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
