(function () {
  var bar = document.getElementById('top-bar');
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.menu-toggle');

  // Header shadow after scrolling
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.m-tabs [role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  // Links from "Onze keuken" open the matching tab
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById('tab-' + a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  // Hero slideshow in the arch (calm crossfade, off with reduced motion)
  var slides = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var n = 0;
    setInterval(function () {
      slides[n].classList.remove('is-on');
      n = (n + 1) % slides.length;
      slides[n].classList.add('is-on');
    }, 5500);
  }
})();
