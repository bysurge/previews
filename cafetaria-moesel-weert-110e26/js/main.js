(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
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

  // opening hours: today + open status
  var hours = { 0: [16, 20], 1: [12, 20], 2: null, 3: [12, 20], 4: [12, 20], 5: [12, 20], 6: [12, 20] };
  var now = new Date();
  var day = now.getDay();
  var li = document.querySelector('#hours li[data-day="' + day + '"]');
  if (li) li.classList.add('today');
  var st = document.getElementById('status');
  var h = now.getHours() + now.getMinutes() / 60;
  var today = hours[day];
  var txt, closed = false;
  if (today && h >= today[0] && h < today[1]) {
    txt = 'Nu open, tot ' + today[1] + ':00';
  } else if (today && h < today[0]) {
    txt = 'Vandaag open van ' + today[0] + ':00 tot ' + today[1] + ':00'; closed = true;
  } else {
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    var n = 1;
    while (!hours[(day + n) % 7]) n++;
    var nd = (day + n) % 7;
    txt = 'Nu gesloten, ' + (n === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + hours[nd][0] + ':00';
    closed = true;
  }
  st.textContent = txt;
  st.classList.toggle('is-closed', closed);
  st.hidden = false;
})();
