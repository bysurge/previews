(function () {
  'use strict';
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu tabs ---------- */
  var tabs = document.getElementById('menu-tabs'), panels = document.getElementById('menu-panels');
  var TAG = { v: '<span class="tag tag-v" title="vegetarisch">V</span>', h: '<span class="tag tag-h" title="halal">H</span>' };
  function item(i) {
    return '<li><div class="it-line"><span class="it-name">' + esc(i[0]) + (i[3] ? ' ' + TAG[i[3]] : '') + '</span>' +
      '<span class="it-price">' + esc(i[2]) + '</span></div>' + (i[1] ? '<span class="it-desc">' + esc(i[1]) + '</span>' : '') + '</li>';
  }
  function panel(m) {
    var h = m.intro ? '<p class="panel-intro">' + esc(m.intro) + '</p>' : '';
    if (m.grid) {
      var g = m.grid;
      h += '<div class="grid-wrap"><table class="pof"><thead><tr>' + g.head.map(function (c, i) {
        return i ? '<th scope="col">' + c + '<small>' + g.sub[i] + '</small></th>' : '<td></td>';
      }).join('') + '</tr></thead><tbody>' + g.rows.map(function (r) {
        return '<tr><th scope="row">' + esc(r[0]) + (r[4] ? '<small>' + esc(r[4]) + '</small>' : '') + '</th><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td></tr>';
      }).join('') + '</tbody></table><img class="pof-photo" src="img/poffertjes.jpg" alt="Poffertjes met poedersuiker" loading="lazy"></div>';
    }
    h += '<div class="groups-cols' + (m.groups.length === 1 ? ' one' : '') + '">';
    m.groups.forEach(function (g) {
      var compact = g.items.length > 4 && g.items.filter(function (i) { return i[1]; }).length <= 1;
      h += '<div class="m-group' + (g.feature ? ' feature' : '') + (compact ? ' compact' : '') + '"><h3>' + esc(g.title) + '</h3>' +
        (g.note ? '<p class="m-note">' + esc(g.note) + '</p>' : '') + '<ul>' + g.items.map(item).join('') + '</ul></div>';
    });
    return h + '</div>';
  }
  if (tabs && panels && window.MENU) {
    tabs.innerHTML = window.MENU.map(function (m, i) {
      return '<button role="tab" type="button" id="tab-' + m.id + '" aria-controls="p-' + m.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(m.tab) + '</button>';
    }).join('');
    panels.innerHTML = window.MENU.map(function (m, i) {
      return '<div class="panel" role="tabpanel" id="p-' + m.id + '" aria-labelledby="tab-' + m.id + '"' + (i ? ' hidden' : '') + '>' + panel(m) + '</div>';
    }).join('');
    var btns = [].slice.call(tabs.querySelectorAll('[role="tab"]'));
    var select = function (b, focus) {
      btns.forEach(function (x) {
        var on = x === b; x.setAttribute('aria-selected', String(on)); x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) b.focus();
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
    };
    tabs.addEventListener('click', function (e) { var b = e.target.closest('[role="tab"]'); if (b) select(b); });
    tabs.addEventListener('keydown', function (e) {
      var i = btns.indexOf(document.activeElement); if (i < 0) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); select(btns[(i + 1) % btns.length], true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); select(btns[(i - 1 + btns.length) % btns.length], true); }
    });
  }

  /* ---------- Hero slideshow ---------- */
  var slides = document.querySelectorAll('.hero-slides img'), dots = document.querySelectorAll('.hero-dots span');
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on'); if (dots[cur]) dots[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on'); if (dots[cur]) dots[cur].classList.add('is-on');
    }, 6000);
  }

  /* ---------- Open now ---------- */
  var now = new Date(), d = now.getDay(), hr = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours-table tr[data-day="' + d + '"]');
  if (row) row.classList.add('is-today');
  var ot = document.getElementById('open-text'), dot = document.getElementById('open-dot');
  if (ot) {
    var open = d !== 1 && hr >= 10 && hr < 21;
    if (open) ot.textContent = 'Nu open tot 21:00, keuken tot 20:30';
    else if (d === 1) ot.textContent = 'Vandaag gesloten. Dinsdag vanaf 10:00 weer open';
    else if (hr < 10) ot.textContent = 'Vandaag open van 10:00 tot 21:00';
    else ot.textContent = d === 0 ? 'Nu gesloten. Dinsdag vanaf 10:00 weer open' : 'Nu gesloten. Morgen vanaf 10:00 weer open';
    if (dot) dot.classList.toggle('is-open', open);
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle'), mnav = document.getElementById('mobile-nav');
  if (toggle && mnav) {
    toggle.addEventListener('click', function () {
      var o = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!o));
      toggle.setAttribute('aria-label', o ? 'Menu openen' : 'Menu sluiten');
      mnav.hidden = o;
    });
    mnav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { mnav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); } });
  }
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Sample forms: nothing is sent ---------- */
  document.querySelectorAll('.sample-form').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); var m = f.querySelector('.form-msg'); if (m) m.hidden = false; });
  });
})();
