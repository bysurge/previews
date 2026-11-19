(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // tabs (menu + route), each tablist on its own
  Array.prototype.forEach.call(document.querySelectorAll('[role="tablist"]'), function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
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
  });

  // opening status (winter okt-apr: za/zo 10-17; zomer mei-sep: dagelijks 10-17, terras tot 18;
  // gesloten 19 dec t/m 1 jan)
  var now = new Date();
  var m = now.getMonth(), d = now.getDate(), wd = now.getDay();
  var t = now.getHours() + now.getMinutes() / 60;
  var summer = m >= 4 && m <= 8;
  var label = document.getElementById('status-label');
  var main = document.getElementById('status-main');
  var sub = document.getElementById('status-sub');
  var box = document.getElementById('status');
  var card = document.querySelector('.season[data-season="' + (summer ? 'zomer' : 'winter') + '"]');
  if (card) {
    card.classList.add('now');
    var tag = document.createElement('span');
    tag.className = 'now-tag'; tag.textContent = 'nu';
    card.querySelector('h3').appendChild(tag);
  }
  if ((m === 11 && d >= 19) || (m === 0 && d === 1)) {
    label.textContent = 'Kerstsluiting';
    main.textContent = 'Gesloten t/m 1 januari';
    sub.textContent = 'Daarna weer open op zaterdag en zondag, 10.00 – 17.00.';
    box.classList.add('closed');
  } else if (summer) {
    label.textContent = 'Zomer';
    if (t < 18) { main.textContent = 'Vandaag open 10.00 – 17.00'; sub.textContent = 'Keuken tot 17.00, terras tot 18.00.'; }
    else { main.textContent = 'Morgen weer open vanaf 10.00'; sub.textContent = 'In de zomer elke dag open.'; box.classList.add('closed'); }
  } else {
    label.textContent = 'Winter (oktober t/m april)';
    if ((wd === 6 || wd === 0) && t < 17) { main.textContent = 'Vandaag open 10.00 – 17.00'; sub.textContent = 'Gesloten van 19 december t/m 1 januari.'; }
    else { main.textContent = 'Open op zaterdag & zondag, 10.00 – 17.00'; sub.textContent = 'Doordeweeks gesloten. Van 19 december t/m 1 januari dicht.'; box.classList.add('closed'); }
  }

  // demo forms
  Array.prototype.forEach.call(document.querySelectorAll('form[data-demo]'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
    });
  });
})();
