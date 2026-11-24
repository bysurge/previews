(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // chefsmenu / vegetarisch
  var tabs = document.querySelectorAll('.menu-tabs [role=tab]');
  var gangBtns = document.querySelectorAll('.gang-btn');
  var current = '7';
  function activePanel() { return document.querySelector('.panel:not([hidden])'); }
  function setPrices() {
    var p = (activePanel().getAttribute('data-prices') || '').split(',');
    gangBtns.forEach(function (b, i) { b.querySelector('span').textContent = '€' + p[i]; });
  }
  function setGangen(n) {
    current = n;
    gangBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-n') === n)); });
    document.querySelectorAll('.courses').forEach(function (ol) { ol.setAttribute('data-show', n); });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', String(on));
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      setPrices();
    });
  });
  gangBtns.forEach(function (b) {
    b.addEventListener('click', function () { setGangen(b.getAttribute('data-n')); });
  });
})();
