(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // menu tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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

  // today: opening status + highlight in table
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var openDay = day >= 3 || day === 0;
  var box = document.getElementById('vandaag'), txt = box && box.querySelector('.today-text');
  if (txt) {
    if (openDay && mins >= 660 && mins < 1260) { box.classList.add('open'); txt.textContent = 'Nu open, tot 21.00 uur'; }
    else if (openDay && mins < 660) { txt.textContent = 'Vandaag open van 11.00 tot 21.00 uur'; }
    else {
      box.classList.add('dicht');
      txt.textContent = (day === 1 || day === 2 || day === 0)
        ? 'Nu gesloten, woensdag weer open'
        : 'Nu gesloten, morgen weer open';
    }
  }

  // themed evenings: hide dates that have passed
  var list = document.querySelector('.thema-list');
  if (list) {
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    [].slice.call(list.children).forEach(function (li) {
      var d = new Date(li.getAttribute('data-date') + 'T23:59:00');
      if (d < today) li.remove();
    });
    if (!list.children.length) {
      var p = document.createElement('p');
      p.className = 'thema-empty';
      p.textContent = 'De nieuwe thema-avonden volgen binnenkort. Vraag ernaar bij uw volgende bezoek.';
      list.replaceWith(p);
    }
  }

  // demo form
  var form = document.getElementById('resform');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
