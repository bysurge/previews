(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // tabs van de kaart
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // open of dicht vandaag (dinsdag dicht; kerst: 25/26 dec dicht, extra open di 15/22/29 dec)
  var now = new Date(), day = now.getDay(), m = now.getMonth() + 1, d = now.getDate();
  var mins = now.getHours() * 60 + now.getMinutes();
  var closedDay = day === 2;
  if (m === 12 && (d === 15 || d === 22 || d === 29)) closedDay = false;
  if (m === 12 && (d === 25 || d === 26)) closedDay = true;
  var st = document.querySelector('[data-status]');
  if (st) {
    if (closedDay) { st.textContent = 'Vandaag gesloten, morgen weer open vanaf 8.30'; st.classList.add('closed'); }
    else if (mins < 510) { st.textContent = 'Vandaag open van 8.30 tot 23.00'; }
    else if (mins < 1380) { st.textContent = 'Nu open, tot 23.00'; }
    else { st.textContent = 'Nu gesloten, morgen weer open'; st.classList.add('closed'); }
  }
  [].forEach.call(document.querySelectorAll('.hours tr[data-day="' + day + '"]'), function (tr) { tr.classList.add('today'); });

  // roast-kalender: eerstvolgende zondag markeren
  var list = document.querySelector('[data-roast]');
  if (list) {
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()), found = false;
    [].forEach.call(list.children, function (li) {
      var p = li.getAttribute('data-date').split('-'), dt = new Date(+p[0], +p[1] - 1, +p[2]);
      if (dt < today) li.classList.add('past');
      else if (!found) { li.classList.add('next'); found = true; }
    });
  }

  // voorbeeldformulier: verstuurt niets
  [].forEach.call(document.querySelectorAll('form[data-demo]'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.demo-msg').hidden = false;
    });
  });
})();
