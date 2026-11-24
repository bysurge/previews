(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // highlight today on the board
  var d = new Date().getDay();
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var rows = document.querySelectorAll('.board-rows li[data-day="' + d + '"]');
  rows.forEach(function (r) { r.classList.add('today'); });
  var t = document.getElementById('board-today');
  if (t) t.textContent = 'Vandaag: ' + names[d] + (d === 1 ? ', gesloten' : '');

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  function select(tab) {
    tabs.forEach(function (x) {
      var on = x === tab;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab); });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // demo form
  var form = document.getElementById('res-form');
  var msg = document.getElementById('form-msg');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.hidden = false;
  });
})();
