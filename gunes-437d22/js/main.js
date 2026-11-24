(function () {
  // mobile menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // generic tablists (kaart switch + rubrieken)
  function select(tab) {
    var list = tab.parentElement;
    var tabs = list.querySelectorAll('[role=tab]');
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !on;
    });
  }
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    list.addEventListener('click', function (e) {
      var t = e.target.closest('[role=tab]');
      if (!t) return;
      select(t);
      if (list.classList.contains('cats') && window.innerWidth < 600) {
        t.scrollIntoView({ block: 'nearest', inline: 'center' });
      }
    });
    list.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      n.focus(); select(n);
    });
  });
  // "naar de afhaalkaart" opens the takeaway menu
  document.querySelectorAll('[data-kaart]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById('k-' + a.getAttribute('data-kaart'))); });
  });

  // today in opening hours
  var row = document.querySelector('.hours tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');

  // demo form
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
