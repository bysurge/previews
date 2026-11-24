(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) { toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); nav.classList.toggle('open', open); }
  toggle.addEventListener('click', function () { setNav(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        select(tabs[n], true); e.preventDefault();
      }
    });
  });
  function openTab(id) {
    var t = document.getElementById('tab-' + id);
    if (t) { select(t); document.getElementById('menu').scrollIntoView(); }
  }
  document.querySelectorAll('[data-open-tab]').forEach(function (b) {
    b.addEventListener('click', function () { openTab(b.getAttribute('data-open-tab')); });
  });
  document.querySelectorAll('a[href="#borrelen"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); openTab('borrel'); });
  });

  var form = document.getElementById('aanvraag');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-msg').hidden = false;
  });
})();
