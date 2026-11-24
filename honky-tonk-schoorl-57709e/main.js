(function () {
  var body = document.body, btn = document.querySelector('.menu-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
    document.querySelectorAll('#nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Menu openen');
      });
    });
  }
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = [].slice.call(list.querySelectorAll('[role=tab]'));
    function select(t, focus) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
        var p = document.getElementById(x.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
      if (focus) t.focus();
      if (t.scrollIntoView && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: t.offsetLeft - 20, behavior: 'smooth' });
      }
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
        if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
      });
    });
  });
})();
