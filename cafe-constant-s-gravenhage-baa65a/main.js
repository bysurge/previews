(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Dish names: the part before the first comma is set as the dish title
  document.querySelectorAll('.dishes .d').forEach(function (el) {
    var t = el.textContent;
    var i = t.indexOf(',');
    var name = i > -1 ? t.slice(0, i) : t;
    var rest = i > -1 ? t.slice(i) : '';
    var strong = document.createElement('span');
    strong.className = 'dn';
    strong.textContent = name;
    el.textContent = '';
    el.appendChild(strong);
    if (rest) el.appendChild(document.createTextNode(rest));
  });

  // Menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      p.hidden = !on;
      if (on) { p.classList.remove('is-in'); void p.offsetWidth; p.classList.add('is-in'); }
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { var next = tabs[(i + n + tabs.length) % tabs.length]; select(next); next.focus(); }
    });
  });

  // Today: open / closed, highlight in the hours table, marker on the day line
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var today = document.querySelector('[data-today]');
  var isOpenDay = day !== 1;
  var openNow = isOpenDay && mins >= 600 && mins < 1380;
  if (today) {
    if (openNow) {
      today.textContent = 'Nu open, vandaag tot 23:00';
      today.classList.add('is-open');
    } else if (!isOpenDay) {
      today.textContent = 'Maandag gesloten. Dinsdag t/m zondag open van 10:00 tot 23:00';
    } else if (mins < 600) {
      today.textContent = 'Vandaag open van 10:00 tot 23:00';
    } else {
      today.textContent = (day === 0 ? 'Maandag gesloten, dinsdag' : 'Morgen') + ' weer open vanaf 10:00';
    }
  }
  var marker = document.querySelector('[data-now]');
  if (marker && openNow) {
    marker.style.setProperty('--pos', ((mins - 600) / 780 * 100).toFixed(2) + '%');
    marker.hidden = false;
  }
})();
