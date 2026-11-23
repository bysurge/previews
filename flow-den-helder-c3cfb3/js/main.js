(function () {
  'use strict';

  /* Kop: mobiel menu + vaste achtergrond na scrollen */
  var top = document.getElementById('top');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  function closeNav() { nav.classList.remove('open'); top.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    top.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeNav(); });
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Menukaarten opbouwen */
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  document.querySelectorAll('[data-menu]').forEach(function (el) {
    var data = window.FLOW_KAART[el.getAttribute('data-menu')] || [];
    el.innerHTML = data.map(function (g) {
      return '<div class="group"><h3>' + esc(g[0]) + '</h3>' +
        (g[1] ? '<p class="group-note">' + esc(g[1]) + '</p>' : '') +
        g[2].map(function (it) {
          return '<div class="item"><span class="item-name">' + esc(it[0]) + '</span><span class="item-price">' + esc(it[2]) + '</span>' +
            (it[1] ? '<span class="item-desc">' + esc(it[1]) + '</span>' : '') + '</div>';
        }).join('') + '</div>';
    }).join('');
  });

  /* Tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(id) {
    tabs.forEach(function (t) {
      var on = t.id === 't-' + id;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t.id.slice(2)); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); n.click();
    });
  });
  document.querySelectorAll('[data-goto]').forEach(function (a) {
    a.addEventListener('click', function () { select(a.getAttribute('data-goto')); });
  });

  /* De dag bij Flow: markeer het moment van nu en open de passende kaart */
  var now = new Date();
  var mins = now.getHours() * 60 + now.getMinutes();
  var moments = Array.prototype.slice.call(document.querySelectorAll('.dag li'));
  var current = null;
  moments.forEach(function (li) { if (mins >= Number(li.getAttribute('data-from'))) current = li; });
  if (current) {
    current.classList.add('now');
    var g = current.querySelector('[data-goto]');
    if (g) select(g.getAttribute('data-goto'));
  }

  /* Reserveren: voorbeeldformulier, verstuurt niets */
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
  });
})();

/* Wildweekend (27-29 november 2026) verbergen zodra het voorbij is */
(function () {
  if (new Date() > new Date(2026, 10, 30, 3)) {
    var w = document.getElementById('wildweekend');
    if (w) w.hidden = true;
  }
})();
