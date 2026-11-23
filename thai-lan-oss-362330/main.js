(function () {
  var body = document.body;
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  burger.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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

  Array.prototype.forEach.call(document.querySelectorAll("[data-tab]"), function (a) {
    a.addEventListener("click", function () { select(document.getElementById(a.getAttribute("data-tab"))); });
  });

  var form = document.querySelector('.form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
