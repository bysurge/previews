(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Menukaart: gangen als tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.courses [role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // Openingstijden: vandaag markeren en status in de hero
  var hours = { 2: [1050, 1260], 3: [1050, 1260], 4: [1050, 1260], 5: [1050, 1290], 6: [1050, 1290] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  document.querySelectorAll('#hours > div').forEach(function (row) {
    var d = +row.getAttribute('data-day');
    if (!hours[d]) row.classList.add('closed');
    if (d === day) row.classList.add('is-today');
  });
  var el = document.getElementById('today');
  function fmt(m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); }
  if (el) {
    var h = hours[day], text;
    if (h && min < h[0]) text = 'Vandaag open van 17:30 tot ' + fmt(h[1]);
    else if (h && min < h[1]) text = 'Nu open, vandaag tot ' + fmt(h[1]);
    else {
      var n = day; do { n = (n + 1) % 7; } while (!hours[n]);
      text = (h ? 'Nu gesloten' : 'Vandaag gesloten') + ', ' + (n === (day + 1) % 7 ? 'morgen' : names[n]) + ' weer open vanaf 17:30';
      el.classList.add('closed');
    }
    el.textContent = text;
  }

  // Rustige wisseling van hero-foto's
  var imgs = document.querySelectorAll('.hero-photos img');
  if (imgs.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      imgs[i].classList.remove('on');
      i = (i + 1) % imgs.length;
      imgs[i].classList.add('on');
    }, 6000);
  }
})();
