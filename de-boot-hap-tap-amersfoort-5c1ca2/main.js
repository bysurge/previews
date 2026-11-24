(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? 'Sluiten' : 'Menu';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; }
  });

  // Hap / Tap
  var tabs = [].slice.call(document.querySelectorAll('.switch [role=tab]'));
  function show(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { var n = tabs[(i + 1) % tabs.length]; show(n); n.focus(); }
    });
  });

  // vandaag open?
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var close = { 0: 17, 3: 17, 4: 22, 5: 22, 6: 22 };
  var st = document.getElementById('status');
  if (close[day] !== undefined) {
    if (h >= 10 && h < close[day]) st.textContent = 'Nu open, vandaag tot ' + close[day] + '.00';
    else if (h < 10) st.textContent = 'Vandaag open vanaf 10.00';
    else { st.textContent = 'Woensdag t/m zondag open vanaf 10.00'; st.classList.add('closed'); }
  } else { st.textContent = 'Ma en di op aanvraag, wo t/m zo open vanaf 10.00'; st.classList.add('closed'); }
  var row = document.querySelector('#hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');

  // Hap&Tap-avonden: voorbij en eerstvolgende
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()), found = false;
  [].forEach.call(document.querySelectorAll('#dates li'), function (li) {
    var p = li.getAttribute('data-d').split('-'), d = new Date(+p[0], +p[1] - 1, +p[2]);
    if (d < today) li.classList.add('past');
    else if (!found) {
      found = true; li.classList.add('upcoming');
      var nx = document.getElementById('next');
      nx.textContent = (+d === +today ? 'Vanavond' : 'Eerstvolgende: donderdag ' + li.textContent) + ', vanaf 17.00';
      nx.hidden = false;
    }
  });
})();
