(function () {
  // mobiel menu
  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('menu-open'); }
  });

  // tabs menukaart
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // foto's in de kop, rustig wisselen
  var imgs = document.querySelectorAll('.slides img'), cur = 0;
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && imgs.length > 1) {
    setInterval(function () { imgs[cur].classList.remove('on'); cur = (cur + 1) % imgs.length; imgs[cur].classList.add('on'); }, 6000);
  }

  // formulier: voorbeeld
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });

  // vandaag open?
  var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function isOpenDay(d) {
    var wd = d.getDay(), y = d.getFullYear(), m = d.getMonth(), dt = d.getDate();
    if (wd === 1 || wd === 2) return false;
    if ((y === 2026 && m === 11 && dt >= 21) || (y === 2027 && m === 0 && dt === 1)) return false;
    if (m === 11 && (wd === 3 || wd === 4)) return false;
    return true;
  }
  var now = new Date(), el = document.getElementById('today'), mins = now.getHours() * 60 + now.getMinutes();
  if (isOpenDay(now) && mins >= 600 && mins < 1230) {
    el.textContent = 'Nu open tot 20.30 uur, keuken tot 20.00 uur. Loop gewoon binnen.';
    el.classList.add('open');
  } else if (isOpenDay(now) && mins < 600) {
    el.textContent = 'Vandaag open van 10.00 tot 20.30 uur. Loop gewoon binnen.';
  } else {
    var n = new Date(now);
    for (var i = 1; i < 15; i++) { n.setDate(n.getDate() + 1); if (isOpenDay(n)) break; }
    var when = i === 1 ? 'morgen' : 'op ' + days[n.getDay()] + (i > 6 ? ' ' + n.getDate() + ' ' + ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'][n.getMonth()] : '');
    el.textContent = 'Nu gesloten. We zijn ' + when + ' weer open vanaf 10.00 uur.';
  }
})();
