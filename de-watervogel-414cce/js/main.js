// De Watervogel preview: header state, mobile menu, season gauge, menu tabs.
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
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A' && nav.classList.contains('open')) burger.click(); });

  function tablist(list, onSelect) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(t) {
      tabs.forEach(function (b) { var on = b === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
      onSelect(t);
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
      });
    });
  }

  // season gauge
  var detail = document.getElementById('peil-detail');
  tablist(document.querySelector('.peil'), function (t) {
    var m = window.PEIL[+t.getAttribute('data-i')];
    detail.innerHTML = '<p class="pd-m">' + m[0] + '</p><p class="pd-s">' + m[1] + '</p><p class="pd-d">' + m[2] + '</p>';
  });

  // menu tabs
  var menuTabs = document.querySelector('.menu .tabs');
  tablist(menuTabs, function (t) {
    menuTabs.querySelectorAll('[role="tab"]').forEach(function (b) {
      document.getElementById(b.getAttribute('aria-controls')).hidden = b !== t;
    });
    t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    var panels = document.querySelector('.menu .panels');
    var y = panels.getBoundingClientRect().top;
    if (y < 0) window.scrollTo({ top: window.scrollY + y - 140, behavior: 'smooth' });
  });
})();
