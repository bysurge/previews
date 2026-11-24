(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on ? 'true' : 'false');
      o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var nt = tabs[(i + n + tabs.length) % tabs.length];
      select(nt); nt.focus();
    });
  });
  // links elsewhere on the page that open a specific menu tab
  document.querySelectorAll('a[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  var row = document.querySelector('.uren tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('today');

  var form = document.getElementById('cform');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('demo').hidden = false;
  });
})();
