(function () {
  'use strict';

  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('solid', window.scrollY > 40); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  var setMenu = function (open) {
    nav.classList.toggle('open', open);
    top.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

  /* Tabs lunch / diner */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  var select = function (tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var next = tabs[(i + n + tabs.length) % tabs.length]; select(next); next.focus(); }
    });
  });

  /* Broodje of salade: prijzen wisselen */
  var modeBtns = Array.prototype.slice.call(document.querySelectorAll('.switch button'));
  var prices = Array.prototype.slice.call(document.querySelectorAll('#bs-list .price'));
  modeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var mode = b.getAttribute('data-mode');
      modeBtns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      prices.forEach(function (p) {
        var v = p.getAttribute('data-' + mode);
        p.textContent = v;
        p.classList.toggle('na', !/\d/.test(v));
        p.classList.remove('flip'); void p.offsetWidth; p.classList.add('flip');
      });
    });
  });

  /* Vandaag in de openingstijden */
  var row = document.querySelector('#hours tr[data-day="' + new Date().getDay() + '"]');
  if (row) row.classList.add('is-today');

  /* Voorbeeldformulier: verstuurt niets */
  document.getElementById('res-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
