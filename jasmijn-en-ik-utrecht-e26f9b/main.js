(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  var filters = [];
  function applyFilter() {
    var panel = document.querySelector('[role=tabpanel]:not([hidden])');
    var shown = 0, total = 0;
    [].forEach.call(panel.querySelectorAll('.dishes li[data-d]'), function (li) {
      var d = ' ' + li.getAttribute('data-d') + ' ';
      var ok = filters.every(function (f) { return d.indexOf(' ' + f + ' ') > -1 || (f === 'vegan' && d.indexOf(' vegan-opt ') > -1); });
      li.hidden = !ok; total++; if (ok) shown++;
    });
    document.querySelector('.empty').hidden = !(total && !shown);
  }
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    applyFilter();
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1;
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (k) { var n = tabs[(i + k + tabs.length) % tabs.length]; n.focus(); select(n); }
    });
  });
  [].forEach.call(document.querySelectorAll('.chip'), function (c) {
    c.addEventListener('click', function () {
      var on = c.getAttribute('aria-pressed') !== 'true';
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
      var f = c.getAttribute('data-diet');
      filters = filters.filter(function (x) { return x !== f; });
      if (on) filters.push(f);
      applyFilter();
    });
  });
})();
