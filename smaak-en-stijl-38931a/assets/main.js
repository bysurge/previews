(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('span').textContent = open ? 'Sluiten' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.querySelector('span').textContent = 'Menu'; }
    });
  }

  // Header border on scroll
  var head = document.querySelector('.site-head');
  var onScroll = function () { head && head.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Menu tabs
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
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // Opening hours (homepage version): 0 = Sunday
  var hours = { 0: [12, 19], 1: null, 2: null, 3: [12, 18], 4: [12, 18], 5: [12, 19], 6: [12, 19] };
  var now = new Date(); var d = now.getDay(); var h = now.getHours() + now.getMinutes() / 60;
  document.querySelectorAll('.hours tr[data-day="' + d + '"]').forEach(function (r) { r.classList.add('is-today'); });
  var today = document.querySelector('[data-today]');
  if (today) {
    var t = hours[d]; var txt;
    if (!t) { txt = 'Vandaag gesloten'; today.classList.add('is-closed'); }
    else if (h < t[0]) { txt = 'Vandaag open van ' + t[0] + ':00 tot ' + t[1] + ':00'; }
    else if (h < t[1]) { txt = 'Nu open, tot ' + t[1] + ':00'; }
    else { txt = 'Vandaag open tot ' + t[1] + ':00, nu gesloten'; today.classList.add('is-closed'); }
    today.querySelector('[data-today-text]').textContent = txt;
  }

  // Sample forms never send anything
  document.querySelectorAll('form.sample').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      if (msg) { msg.hidden = false; msg.focus(); }
    });
  });

  var y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
})();
