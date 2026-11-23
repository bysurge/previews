(function () {
  var bar = document.getElementById('top-bar');
  var toggle = document.querySelector('.nav-toggle');
  function onScroll() { bar.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.tabIndex = i ? -1 : 0;
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); select(n);
    });
  });

  // gallery lightbox
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img');
  document.querySelectorAll('.g').forEach(function (b) {
    b.addEventListener('click', function () {
      lbImg.src = b.getAttribute('data-full');
      lbImg.alt = b.querySelector('img').alt;
      if (lb.showModal) lb.showModal();
    });
  });
  lb.querySelector('.lb-close').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
})();
