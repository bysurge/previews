(function () {
  // mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
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
      if (d) { var n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus(); }
    });
  });

  // hero photos: calm crossfade
  var imgs = document.querySelectorAll('.hero-photos img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (imgs.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      imgs[cur].classList.remove('is-on');
      cur = (cur + 1) % imgs.length;
      imgs[cur].classList.add('is-on');
    }, 6500);
  }

  // opening hours (0 = zondag). [open, close] in minutes; close after midnight > 1440
  var hours = { 0: null, 1: null, 2: [900, 1440], 3: [900, 1500], 4: [900, 1560], 5: [900, 1560], 6: [900, 1560] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function fmt(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); }
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('[data-hours] tr[data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var today = document.querySelector('[data-today]');
  if (today) {
    var y = hours[(day + 6) % 7];
    var h = hours[day];
    var text;
    if (y && y[1] > 1440 && mins < y[1] - 1440) {
      text = 'Nu open, tot ' + fmt(y[1]);
      today.classList.add('is-open');
    } else if (h && mins >= h[0] && mins < h[1]) {
      text = 'Nu open, tot ' + fmt(h[1]);
      today.classList.add('is-open');
    } else if (h && mins < h[0]) {
      text = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]);
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (hours[d]) { text = (i === 1 ? 'Morgen' : 'Weer open op ' + names[d]) + ' vanaf ' + fmt(hours[d][0]); break; }
      }
    }
    if (text) today.textContent = text;
  }

  // pop-up dates
  var todayIso = now.getFullYear() + '-' + ('0' + (now.getMonth() + 1)).slice(-2) + '-' + ('0' + now.getDate()).slice(-2);
  var next = null;
  document.querySelectorAll('[data-dates] li').forEach(function (li) {
    var d = li.getAttribute('data-date');
    if (d < todayIso) li.classList.add('is-past');
    else if (!next) { next = li; li.classList.add('is-next'); }
  });
  var link = document.querySelector('[data-next-popup]');
  if (link && next) link.textContent = 'Pop-up op ' + next.textContent.trim();
})();
