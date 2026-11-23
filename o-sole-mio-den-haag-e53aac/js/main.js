(function () {
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  sel(tabs[0]);

  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
