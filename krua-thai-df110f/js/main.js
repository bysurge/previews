(function () {
  var top = document.getElementById('top-bar');
  var onScroll = function () { top.classList.toggle('solid', window.scrollY > 40); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t;
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    t.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
})();
