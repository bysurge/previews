// Los Latinos preview: header state, mobile menu, menu tabs, steak board, sample form.
(function () {
  var top = document.getElementById('top');
  var onScroll = function () { top.classList.toggle('solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var burger = document.querySelector('.burger'), nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) burger.click();
  });

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(t) {
    tabs.forEach(function (b) {
      var on = b === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // steak board: tap a weight row to highlight it
  var rows = document.querySelectorAll('.pizarra tbody tr');
  Array.prototype.forEach.call(rows, function (r) {
    r.tabIndex = 0;
    var pick = function () { Array.prototype.forEach.call(rows, function (x) { x.classList.toggle('on', x === r); }); };
    r.addEventListener('click', pick);
    r.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
  });

  // sample form: never sends
  var form = document.getElementById('resForm'), msg = document.getElementById('resMsg');
  form.addEventListener('submit', function (e) { e.preventDefault(); msg.hidden = false; msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
})();
