(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
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
  [].forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function (e) {
      select(document.getElementById(a.getAttribute('data-tab')));
      if (a.getAttribute('href').indexOf('#p-') === 0) {
        e.preventDefault();
        document.getElementById('kaart').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // today
  var d = new Date().getDay(), el = document.getElementById('today');
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  el.textContent = d === 1
    ? 'Vandaag (maandag) gesloten · dinsdag t/m zondag open vanaf 10.00 uur'
    : 'Vandaag open van 10.00 tot 00.00 uur · keuken 12.00 – 21.00 uur';
})();
