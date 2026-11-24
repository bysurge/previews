(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('menu-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (n) { e.preventDefault(); select(n); n.focus(); }
    });
  });

  // Weegschaal: EUR 4,19 per 100 g, minimaal 400 g
  var range = document.getElementById('gram');
  var gOut = document.getElementById('gram-out');
  var pOut = document.getElementById('prijs-out');
  function update() {
    var g = Math.max(400, parseInt(range.value, 10));
    gOut.textContent = g;
    pOut.textContent = (g / 100 * 4.19).toFixed(2).replace('.', ',');
    range.style.setProperty('--fill', ((g - 400) / 400 * 100) + '%');
  }
  range.addEventListener('input', update);
  update();
})();
