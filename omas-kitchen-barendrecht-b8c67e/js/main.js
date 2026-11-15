(function () {
  // mobile nav
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  // tabs (menu card + hours)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        var n = tabs[(i + d + tabs.length) % tabs.length];
        select(n); n.focus(); n.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      });
    });
  });

  // rijsttafel picker: price is 20 per person, 2 saté / 1 half egg / 1 rempah per person
  var out = document.getElementById('rt-out');
  var btns = document.querySelectorAll('.persons button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var n = Number(b.dataset.n);
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      out.querySelector('[data-rt=price]').textContent = '€ ' + (n * 20) + ',00';
      out.querySelector('[data-rt=label]').textContent = 'rijsttafel voor ' + n + ' personen';
      out.querySelector('[data-rt=sate]').textContent = n * 2;
      out.querySelector('[data-rt=ei]').textContent = n;
      out.querySelector('[data-rt=rempah]').textContent = n;
    });
  });

  // today in opening hours
  var d = new Date().getDay();
  document.querySelectorAll('.hours tr[data-d="' + d + '"]').forEach(function (r) { r.classList.add('today'); });

  // demo forms
  document.querySelectorAll('form.demo').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg');
      m.hidden = false;
    });
  });
})();
