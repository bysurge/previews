// Yang's Garden preview: navigation, card switch (restaurant / afhalen), tabs, opening hours today.
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // Card switch
  var switches = [].slice.call(document.querySelectorAll('.switch button'));
  function showCard(name) {
    switches.forEach(function (b) {
      var on = b.dataset.card === name;
      b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1;
      document.getElementById('kaart-' + b.dataset.card).hidden = !on;
    });
  }
  switches.forEach(function (b) { b.addEventListener('click', function () { showCard(b.dataset.card); }); });
  [].forEach.call(document.querySelectorAll('[data-show]'), function (a) {
    a.addEventListener('click', function () { showCard(a.dataset.show); });
  });

  // Tabs, per card
  [].forEach.call(document.querySelectorAll('.tabs'), function (list) {
    var tabs = [].slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () {
        select(t);
        var top = list.parentNode.getBoundingClientRect().top;
        if (top < 0) window.scrollTo({ top: window.scrollY + top - 64, behavior: 'smooth' });
      });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
      });
    });
  });

  // Today
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var line = document.getElementById('vandaag');
  if (line) {
    var t = { 1: '16:00 tot 21:00', 4: '16:00 tot 21:00', 5: '16:00 tot 21:00', 6: '15:00 tot 21:00', 0: '15:00 tot 21:00' }[d];
    line.innerHTML = t ? 'Vandaag open van <b>' + t + '</b>. Bestellen en reserveren gaat telefonisch.'
      : 'Vandaag gesloten (dinsdag en woensdag). Donderdag weer open vanaf <b>16:00</b>.';
  }
})();
