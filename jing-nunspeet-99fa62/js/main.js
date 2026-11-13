(function () {
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // menukaart-tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // afhaalmenu zoeken op nummer of naam
  var input = document.getElementById('af-search'), none = document.getElementById('af-none');
  var groups = document.querySelectorAll('.agroup');
  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase(), total = 0;
    var isNum = /^\d+[a-z]?$/.test(q);
    groups.forEach(function (g) {
      var shown = 0;
      g.querySelectorAll('li').forEach(function (li) {
        var s = li.getAttribute('data-s');
        var hit = !q || (isNum ? s.split(' ')[0] === q || s.split(' ')[0].indexOf(q) === 0 : s.indexOf(q) > -1);
        li.hidden = !hit; if (hit) shown++;
      });
      g.hidden = !shown; total += shown;
    });
    none.hidden = total > 0;
  });

  // vandaag in openingstijden
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
})();
(function () {
  var hero = document.querySelector('.hero');
  var f = function () { document.body.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - 200); };
  window.addEventListener('scroll', f, { passive: true }); f();
})();
