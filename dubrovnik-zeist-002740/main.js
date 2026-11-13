(function () {
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
    if (open) top.classList.add('solid'); else onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById('t-' + a.dataset.tab); if (t) select(t); });
  });

  // highlight today in opening hours
  var rows = document.querySelectorAll('.hours tr');
  var day = (new Date().getDay() + 6) % 7;
  if (rows[day]) rows[day].classList.add('today');

  // preview form
  var form = document.getElementById('contact');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
