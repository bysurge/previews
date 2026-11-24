(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* Tabs */
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });
  [].forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-tab'));
      if (t) select(t);
    });
  });

  /* Vandaag in de openingstijden */
  var row = document.querySelector(".hours [data-day=\"" + new Date().getDay() + "\"]");
  if (row) row.classList.add("today");

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById("form");
  if (form) form.addEventListener("submit", function (e) { e.preventDefault(); document.getElementById("form-msg").hidden = false; });

  /* Rustige wisseling van de hero-foto's */
  var imgs = document.querySelectorAll('.hero-bg img');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var k = 0;
    setInterval(function () {
      imgs[k].classList.remove('on');
      k = (k + 1) % imgs.length;
      imgs[k].classList.add('on');
    }, 6000);
  }
})();
