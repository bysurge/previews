(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // kaart tabs (with matching photo on desktop)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  var img = document.getElementById('kaartImg');
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      p.hidden = !on;
      if (on && img && p.dataset.img && img.getAttribute('src') !== p.dataset.img) {
        img.classList.add('swap');
        setTimeout(function () { img.src = p.dataset.img; img.classList.remove('swap'); }, 200);
      }
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // theatre button preselects the arrangement
  var arr = document.getElementById('arr');
  document.querySelectorAll('[data-arr]').forEach(function (a) {
    a.addEventListener('click', function () { arr.value = a.dataset.arr; });
  });

  // demo form: nothing is sent
  var form = document.getElementById('resForm');
  var msg = document.getElementById('resMsg');
  var date = form.querySelector('input[type="date"]');
  date.min = new Date().toISOString().slice(0, 10);
  form.addEventListener('submit', function (e) { e.preventDefault(); msg.hidden = false; });

  // highlight today
  var row = document.querySelector('.hours tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');
})();
