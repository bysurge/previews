(function () {
  var top = document.getElementById('top');
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  var call = document.querySelector('.float-call');

  function onScroll() {
    var y = window.scrollY;
    top.classList.toggle('solid', y > 60);
    if (call) call.classList.toggle('show', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a') && burger.getAttribute('aria-expanded') === 'true') burger.click();
  });

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
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

  // restaurant / afhaal
  var sws = [].slice.call(document.querySelectorAll('.sw'));
  var note = document.getElementById('mode-note');
  function mode(m) {
    sws.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === m); });
    document.body.classList.toggle('afhaal', m === 'afhaal');
    note.textContent = m === 'afhaal'
      ? 'U kijkt naar de afhaalkaart: dezelfde gerechten en prijzen, op een paar restaurantgerechten na. Afhalen? Bel 0341-556 868.'
      : 'U kijkt naar de restaurantkaart.';
  }
  sws.forEach(function (b) { b.addEventListener('click', function () { mode(b.dataset.mode); }); });
  document.getElementById('show-afhaal').addEventListener('click', function () {
    mode('afhaal');
    document.getElementById('menu').scrollIntoView();
  });

  // vandaag open?
  var d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
  var row = document.querySelector('.hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('is-today');
  var t = document.getElementById('today');
  if (day === 1 || day === 2) t.textContent = 'Vandaag gesloten, woensdag weer open';
  else if (h < 17) t.textContent = 'Vandaag open vanaf 17:00';
  else if (h < 22) { t.textContent = 'Nu open tot 22:00'; t.classList.add('open'); }
  else t.textContent = day === 0 ? 'Woensdag vanaf 17:00 weer open' : 'Morgen open vanaf 17:00';
})();
