(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
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

  // open today
  var day = new Date().getDay();
  var h = new Date().getHours() + new Date().getMinutes() / 60;
  var today = document.getElementById('today');
  var row = document.querySelector('.hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('now');
  if (day === 1) {
    today.textContent = 'Vandaag (maandag) zijn we gesloten. Dinsdag vanaf 10.00 weer open.';
    today.classList.add('closed');
  } else {
    var keuken = (day === 5 || day === 6) ? '21.00' : '20.00';
    if (h >= 22) { today.textContent = 'We zijn nu gesloten. ' + (day === 0 ? 'Dinsdag' : 'Morgen') + ' vanaf 10.00 weer open.'; today.classList.add('closed'); }
    else today.textContent = 'Vandaag open van 10.00 tot 22.00, keuken tot ' + keuken + '.';
  }

  // calm hero slideshow
  var imgs = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      imgs[i].classList.remove('on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('on');
    }, 5200);
  }
})();
