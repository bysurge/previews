(function () {
  // mobile menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    tg.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); tg.setAttribute('aria-expanded', 'false'); }
  });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // opening hours: today + open/closed (times from their own site)
  var hours = { 0: [12, 20], 3: [12, 20], 4: [12, 20], 5: [12, 21], 6: [12, 21] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), day = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  document.querySelectorAll('#hours tr').forEach(function (tr) {
    var d = +tr.getAttribute('data-d');
    if (!hours[d]) tr.classList.add('closed');
    if (d === day) tr.classList.add('today');
  });
  var st = document.getElementById('status'), txt, closed = false, today = hours[day];
  if (today && h >= today[0] && h < today[1]) txt = 'Nu open, tot ' + today[1] + ':00';
  else if (today && h < today[0]) txt = 'Vandaag open vanaf 12:00';
  else {
    closed = true;
    for (var i = 1; i <= 7; i++) { var nd = (day + i) % 7; if (hours[nd]) { txt = 'Nu gesloten. Weer open ' + (i === 1 ? 'morgen' : names[nd]) + ' om 12:00'; break; } }
  }
  st.innerHTML = '<span class="dot" aria-hidden="true"></span>' + txt;
  if (closed) st.classList.add('closed');
})();
