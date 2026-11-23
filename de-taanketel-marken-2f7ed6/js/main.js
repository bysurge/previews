(function () {
  'use strict';

  /* Header: transparant op de foto, groen zodra je scrolt */
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

  /* Kaart-tabs */
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

  /* Openingstijden per seizoen; vandaag open? */
  var now = new Date();
  var m = now.getMonth(); // 0 = januari
  var day = now.getDay(); // 0 = zondag
  var season = m <= 2 ? 'winter' : m <= 9 ? 'zomer' : 'najaar';
  var el = document.querySelector('.season[data-season="' + season + '"]');
  if (el) el.classList.add('is-now');
  var open = season === 'zomer' ? 9 * 60 : 10 * 60;
  var close = season === 'zomer' && (day === 5 || day === 6) ? 21 * 60 : 20 * 60;
  var mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (x) { return String(Math.floor(x / 60)).padStart(2, '0') + '.' + String(x % 60).padStart(2, '0'); };
  var today = document.querySelector('[data-today]');
  if (today) {
    if (mins < open) today.textContent = 'Vandaag open van ' + fmt(open) + ' tot ' + fmt(close) + ' uur';
    else if (mins < close) { today.textContent = 'Nu open, tot ' + fmt(close) + ' uur'; today.classList.add('is-open'); }
    else today.textContent = 'Morgen weer open, of op reservering';
  }

  /* Voorbeeldformulier: verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
  });
})();
