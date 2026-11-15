(function () {
  // ---- mobile nav ----
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
    });
  }

  // ---- menu tabs ----
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.getElementById(a.getAttribute('data-open-tab'));
      if (!t) return;
      e.preventDefault();
      select(t);
      document.getElementById('kaart').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });

  // ---- time in Huissen ----
  var CLOSE = { 0: 20, 1: 18, 2: 18, 3: 24, 4: 24, 5: 24, 6: 24 };
  var DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now;
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (k) { return parts.filter(function (p) { return p.type === k; })[0].value; };
    now = { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')), h: (+get('hour') % 24) + (+get('minute')) / 60 };
  } catch (e) {
    var d = new Date(); now = { day: d.getDay(), h: d.getHours() + d.getMinutes() / 60 };
  }
  var close = CLOSE[now.day];
  var fmt = function (h) { return h >= 24 ? '00.00' : (h < 10 ? '0' : '') + Math.floor(h) + '.' + (h % 1 ? '30' : '00'); };

  var row = document.querySelector('[data-hours] tr[data-day="' + now.day + '"]');
  if (row) row.classList.add('today');

  var openEl = document.querySelector('[data-open-now]');
  if (openEl) {
    var span = openEl.querySelector('span');
    if (now.h >= 10 && now.h < close) {
      span.textContent = 'Nu open, vandaag tot ' + fmt(close) + ' uur';
    } else if (now.h < 10) {
      openEl.classList.add('closed');
      span.textContent = 'Vandaag open van 10.00 tot ' + fmt(close) + ' uur';
    } else {
      openEl.classList.add('closed');
      var next = (now.day + 1) % 7;
      span.textContent = 'Nu gesloten, ' + DAYS[next] + ' weer open vanaf 10.00 uur';
    }
  }

  // ---- timeline: today's closing time and a 'now' marker ----
  var tl = document.querySelector('[data-timeline]');
  if (tl) {
    var pos = function (h) { return Math.max(0, Math.min(100, (h - 10) / 14 * 100)); };
    tl.querySelectorAll('.tl-bar').forEach(function (b) {
      var from = parseFloat(b.getAttribute('data-from'));
      var toAttr = b.getAttribute('data-to');
      var to = toAttr === 'close' ? close : toAttr === 'close-0.5' ? close - 0.5 : parseFloat(toAttr);
      b.style.left = pos(from) + '%';
      b.style.width = (pos(to) - pos(from)) + '%';
    });
    var cl = tl.querySelector('[data-close-label]');
    if (cl) cl.textContent = fmt(close);
    var cl2 = tl.querySelector('[data-close-label2]');
    if (cl2) cl2.textContent = fmt(close);
    var note = document.querySelector('[data-tl-note]');
    if (note) note.textContent = 'Getoond voor vandaag (' + DAYS[now.day] + ', open tot ' + fmt(close) + ' uur). Maandag en dinsdag tot 18.00 uur, woensdag tot en met zaterdag tot 00.00 uur, zondag tot 20.00 uur.';
    var marker = document.querySelector('[data-tl-now]');
    if (marker && now.h >= 10 && now.h < close) {
      marker.style.left = pos(now.h) + '%';
      marker.setAttribute('data-label', 'nu ' + Math.floor(now.h) + '.' + ('0' + Math.round((now.h % 1) * 60)).slice(-2));
      marker.hidden = false;
    }
  }

  // ---- demo forms ----
  document.querySelectorAll('[data-demo-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg');
      if (m) { m.hidden = false; m.focus && m.setAttribute('tabindex', '-1'); m.focus(); }
    });
  });
})();
