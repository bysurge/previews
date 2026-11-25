(function () {
  // mobiel menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menukaart-tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
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

  // vandaag open?
  var box = document.getElementById('today');
  var now = new Date();
  var day = now.getDay(); // 0 zo .. 6 za
  var m = now.getMonth(); // 3..8 = april t/m september
  var mins = now.getHours() * 60 + now.getMinutes();
  var openDay = day === 0 || day >= 3;
  var close = (m >= 3 && m <= 8 && (day === 0 || day === 6)) ? 18 : 17;
  var dd = now.getDate();
  if ((m === 11 && (dd === 25 || dd === 26 || dd === 31)) || (m === 0 && dd === 1)) { openDay = true; close = 16; }
  var html;
  if (!openDay) {
    html = '<strong><span class="dot"></span>Vandaag gesloten</strong><span>Woensdag t/m zondag weer open vanaf 9.00</span>';
  } else if (mins >= 540 && mins < close * 60) {
    box.classList.add('is-open');
    html = '<strong><span class="dot"></span>Nu open tot ' + close + '.00</strong><span>Keuken sluit een half uur eerder. Bij extreem slecht weer eerder dicht.</span>';
  } else {
    html = '<strong><span class="dot"></span>Vandaag open 9.00 – ' + close + '.00</strong><span>Woensdag t/m zondag, het hele jaar door</span>';
  }
  box.innerHTML = html;
})();
