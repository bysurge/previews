(function () {
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('vast', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Sluiten' : 'Menu';
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; });
  });

  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = [].slice.call(list.querySelectorAll('[role=tab]'));
    function select(t, focus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
      t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); select(tabs[(i + 1) % tabs.length], true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); select(tabs[(i - 1 + tabs.length) % tabs.length], true); }
      });
    });
  });

  var d = new Date().getDay();
  var li = document.querySelector('#uren li[data-d="' + d + '"]');
  if (li) li.classList.add('vandaag');
})();
