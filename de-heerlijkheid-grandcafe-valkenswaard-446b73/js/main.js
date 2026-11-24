(function () {
  // Mobiel menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
  Array.prototype.forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('t-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // Vandaag open?  zo-wo 11-23, do 10-23, vr-za 11-00
  var hours = { 0: [11, 23], 1: [11, 23], 2: [11, 23], 3: [11, 23], 4: [10, 23], 5: [11, 24], 6: [11, 24] };
  var now = new Date();
  var day = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var rows = document.querySelectorAll('.hours tr');
  Array.prototype.forEach.call(rows, function (r) {
    if (r.getAttribute('data-days').split(',').indexOf(String(day)) > -1) r.classList.add('is-today');
  });
  var el = document.querySelector('[data-today]');
  if (el) {
    var t = hours[day];
    var close = t[1] === 24 ? '00:00' : t[1] + ':00';
    var open = (t[0] < 10 ? '0' : '') + t[0] + ':00';
    // na middernacht op za/zo nog open van de vrijdag/zaterdag? (sluit om 00:00, dus niet)
    if (h >= t[0] && h < t[1]) { el.textContent = 'Nu open, vandaag tot ' + close; el.classList.add('open'); }
    else if (h < t[0]) { el.textContent = 'Vandaag open van ' + open + ' tot ' + close; }
    else {
      var n = hours[(day + 1) % 7];
      el.textContent = 'Nu gesloten, morgen weer open vanaf ' + (n[0] < 10 ? '0' : '') + n[0] + ':00';
    }
  }
})();
