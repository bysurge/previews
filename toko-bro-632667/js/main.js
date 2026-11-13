(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var euro = function (n) { return '€ ' + n.toFixed(2).replace('.', ','); };

  /* Header + nav */
  var top = $('#top');
  var onScroll = function () { top.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('is-open', open);
    top.classList.add('is-solid');
  });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }); });

  /* Hero slideshow */
  var slides = $$('.hero-slides img');
  if (!reduce && slides.length > 1) {
    var si = 0;
    setInterval(function () { slides[si].classList.remove('is-on'); si = (si + 1) % slides.length; slides[si].classList.add('is-on'); }, 5500);
  }

  /* Opening status (Amsterdam time) */
  var sched = { 0: [], 1: [[720, 780], [990, 1200]], 2: [[720, 780]], 3: [[720, 780], [990, 1200]], 4: [[720, 780], [990, 1200]], 5: [[720, 780], [990, 1200]], 6: [[960, 1200]] };
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var hhmm = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = +get('hour') * 60 + +get('minute');
    var text = '', open = false;
    sched[day].forEach(function (s) { if (now >= s[0] && now < s[1]) { open = true; text = 'Nu open, tot ' + hhmm(s[1]); } });
    if (!open) {
      var later = sched[day].filter(function (s) { return s[0] > now; })[0];
      if (later) text = 'Gesloten, vandaag weer open om ' + hhmm(later[0]);
      else {
        for (var k = 1; k <= 7; k++) {
          var d = (day + k) % 7;
          if (sched[d].length) { text = 'Gesloten, ' + (k === 1 ? 'morgen' : dayNames[d]) + ' open vanaf ' + hhmm(sched[d][0][0]); break; }
        }
      }
    }
    var st = $('#status'); $('#status-text').textContent = text; st.classList.toggle('is-open', open); st.hidden = false;
    var row = $('#hours tr[data-day="' + day + '"]'); if (row) row.classList.add('today');
  } catch (e) { /* status is a nicety */ }

  /* Tabs */
  var tabs = $$('[role="tab"]');
  var select = function (tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
      $('#' + t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
  };
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var menuTop = $('.panels').getBoundingClientRect().top + window.scrollY - 140;
      if (window.scrollY > menuTop) window.scrollTo({ top: menuTop, behavior: reduce ? 'auto' : 'smooth' });
    });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (n) { e.preventDefault(); select(tabs[(i + n + tabs.length) % tabs.length], true); }
    });
  });

  /* Bestelbon */
  var lines = [];
  var fab = $('#bon-fab'), bon = $('#bon'), backdrop = $('#backdrop'), builder = $('#builder');
  var render = function () {
    var ul = $('#bon-lines'); ul.innerHTML = '';
    var total = 0, count = 0;
    lines.forEach(function (l, idx) {
      total += l.price * l.qty; count += l.qty;
      var li = document.createElement('li');
      li.innerHTML = '<span class="q"><button aria-label="Minder">−</button><b>' + l.qty + '</b><button aria-label="Meer">+</button></span>' +
        '<span class="nm"></span><span class="lp">' + euro(l.price * l.qty) + '</span>';
      $('.nm', li).textContent = l.name;
      if (l.detail) { var sm = document.createElement('small'); sm.textContent = l.detail; $('.nm', li).appendChild(sm); }
      var b = $$('button', li);
      b[0].addEventListener('click', function () { l.qty -= 1; if (l.qty < (l.min || 1)) lines.splice(idx, 1); render(); });
      b[1].addEventListener('click', function () { l.qty += 1; render(); });
      ul.appendChild(li);
    });
    $('#bon-empty').hidden = lines.length > 0;
    $('#bon-total').textContent = euro(total);
    $('#bon-count').textContent = count;
    $('#bon-sum').textContent = euro(total);
    fab.hidden = count === 0 && bon.hidden;
  };
  var addLine = function (name, price, detail, min) {
    var key = name + '|' + (detail || '');
    var hit = lines.filter(function (l) { return l.key === key; })[0];
    if (hit) hit.qty += 1; else lines.push({ key: key, name: name, price: price, detail: detail, qty: min || 1, min: min });
    render();
    fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump');
  };
  $$('.dish[data-price]').forEach(function (d) {
    var btn = document.createElement('button');
    btn.className = 'add'; btn.type = 'button'; btn.textContent = '+';
    btn.setAttribute('aria-label', d.dataset.name + ' op de bestelbon zetten');
    btn.addEventListener('click', function () {
      addLine(d.dataset.name, parseFloat(d.dataset.price), '', d.dataset.min ? +d.dataset.min : 0);
      btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
    });
    d.appendChild(btn);
  });

  var lastFocus = null;
  var openSheet = function (el) {
    lastFocus = document.activeElement;
    el.hidden = false; backdrop.hidden = false; fab.setAttribute('aria-expanded', el === bon);
    var f = $('button, input', el); if (f) f.focus();
  };
  var closeSheets = function () {
    bon.hidden = true; builder.hidden = true; backdrop.hidden = true; fab.setAttribute('aria-expanded', 'false');
    $('#bon-msg').hidden = true; render();
    if (lastFocus) lastFocus.focus();
  };
  fab.addEventListener('click', function () { openSheet(bon); });
  backdrop.addEventListener('click', closeSheets);
  $$('[data-close]').forEach(function (b) { b.addEventListener('click', closeSheets); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !backdrop.hidden) closeSheets(); });

  $('#bon-send').addEventListener('click', function () {
    var msg = $('#bon-msg');
    msg.textContent = lines.length
      ? 'Dit is een voorbeeld. Op de echte site opent nu WhatsApp met je bestelling al ingevuld, klaar om naar Toko Bro te sturen.'
      : 'Je bestelbon is nog leeg. Tik op + bij een gerecht om te beginnen.';
    msg.hidden = false;
  });

  /* Nasi rames samensteller */
  var cur = null;
  var groups = $$('fieldset', builder);
  var validate = function () {
    var ok = true;
    groups.forEach(function (g) {
      var need = +cur.dataset[g.dataset.group];
      var have = $$('[aria-pressed="true"]', g).length;
      $('.count', g).textContent = '(' + have + ' van ' + need + ')';
      $$('button', g).forEach(function (b) { b.disabled = have >= need && b.getAttribute('aria-pressed') !== 'true'; });
      if (have !== need) ok = false;
    });
    $('#builder-add').disabled = !ok;
  };
  $$('.chips button', builder).forEach(function (b) {
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); validate(); });
  });
  $$('.btn-build').forEach(function (b) {
    b.addEventListener('click', function () {
      cur = b.closest('.size');
      $('#builder-title').textContent = cur.dataset.size + ', ' + euro(+cur.dataset.price);
      $('#builder-sub').textContent = $('p', cur).textContent + '. Kies hieronder je gerechten.';
      $('#builder-extra').textContent = 'Komt met ei, atjar, seroendeng, gebakken uitjes en kroepoek' + (cur.dataset.extra ? ', plus ' + cur.dataset.extra : '') + '.';
      $$('.chips button', builder).forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      validate(); openSheet(builder);
    });
  });
  $('#builder-add').addEventListener('click', function () {
    var picks = groups.map(function (g) { return $$('[aria-pressed="true"]', g).map(function (c) { return c.textContent; }).join(' + '); });
    addLine('Nasi rames ' + cur.dataset.size, +cur.dataset.price, picks.join(' / '));
    builder.hidden = true; openSheet(bon);
  });

  /* Catering form: preview only */
  $('#quote').addEventListener('submit', function (e) {
    e.preventDefault();
    var m = $('#quote-msg');
    m.textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt je aanvraag direct bij Toko Bro binnen.';
    m.hidden = false;
  });

  /* Sfeerimpressie: load YouTube only after a tap */
  var vb = $('#video-btn');
  vb.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/OpphXdRRQ3w?autoplay=1';
    f.title = 'Sfeerimpressie Toko Bro';
    f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    vb.replaceWith(f);
  });

  render();
})();
