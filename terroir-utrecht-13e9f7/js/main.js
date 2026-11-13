(function () {
  'use strict';

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Openingstijden: vandaag open? */
  var HOURS = { 1: [1050, 1380], 4: [1050, 1380], 5: [1050, 1380], 6: [1050, 1380], 0: [840, 1260] };
  var now = new Date();
  var day = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var fmt = function (m) { return Math.floor(m / 60) + '.' + String(m % 60).padStart(2, '0'); };
  var todayEl = document.querySelector('[data-today]');
  var row = document.querySelector('#hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  if (todayEl) {
    var h = HOURS[day];
    if (h && mins < h[1]) {
      todayEl.textContent = (mins >= h[0] ? 'Nu open, tot ' + fmt(h[1]) : 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1])) + ' uur';
      todayEl.classList.add('is-open');
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (HOURS[d]) {
          var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
          todayEl.textContent = 'Weer open ' + (i === 1 ? 'morgen' : 'op ' + names[d]) + ' vanaf ' + fmt(HOURS[d][0]) + ' uur';
          break;
        }
      }
    }
  }

  /* Volgende open proeverij: iedere derde zaterdag van de maand */
  var nextEl = document.querySelector('[data-next-tasting]');
  if (nextEl) {
    var third = function (y, m) { var d = new Date(y, m, 1); var off = (6 - d.getDay() + 7) % 7; return new Date(y, m, 1 + off + 14, 16); };
    var t = third(now.getFullYear(), now.getMonth());
    if (t < now) t = third(now.getFullYear(), now.getMonth() + 1);
    var months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
    nextEl.textContent = 'Volgens dit ritme is de eerstvolgende op zaterdag ' + t.getDate() + ' ' + months[t.getMonth()] + '.';
  }

  /* Reserveren: voorbeeldformulier, verstuurt niets */
  var form = document.getElementById('res-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });

  /* De wijnkaart */
  var W = window.WIJNEN || [];
  var list = document.getElementById('wine-list');
  var chipsEl = document.getElementById('wine-countries');
  var note = document.getElementById('wine-note');
  var q = document.getElementById('wine-q');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.cellar-tabs button'));
  var state = { tab: 'selectie', country: null, query: '' };

  var TAB_NAMES = { selectie: 'Onze selectie', halve: 'Halve flessen (0,375 l)', mousserend: 'Mousserend en cider', wit: 'Wit', orange: 'Orange', rose: 'Rosé', rood: 'Rood', zoet: 'Zoet' };
  var COL_NAMES = { mousserend: 'Mousserend', wit: 'Wit', orange: 'Orange', rose: 'Rosé', rood: 'Rood', versterkt: 'Versterkt', zoet: 'Zoet' };
  var NOTES = {
    selectie: 'Een greep uit onze favorieten, die ook goed bij onze keuken passen. Vraag gerust naar advies.',
    halve: 'Geen zin in een hele fles? Deze halve flessen (0,375 l) zijn er ook.'
  };
  var norm = function (s) { return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  W.forEach(function (w) { w._s = norm([w.y, w.p, w.n, w.r, w.k, w.g, w.t].join(' ')); });

  function subOf(w) {
    if (!w.g) return null;
    var parts = w.g.split(/\s+-\s+/);
    if (parts[0] === 'Champagne') return 'Champagne, ' + parts[1];
    if (parts.length > 1) return parts[1].replace(/\s*\|\s*/, ', ');
    if (/^Overig/.test(parts[0])) return parts[0] === 'Overig' ? 'Overig' : 'Overig mousserend';
    return null;
  }

  function rowHtml(w) {
    var sw = w.c === 'versterkt' ? 'zoet' : w.c;
    var extra = '';
    if (w.t) extra += '<span class="tag">' + esc(w.t) + '</span>';
    if (w.v) extra += '<span class="tag">' + esc(w.v.replace('l', ' l')) + '</span>';
    return '<li class="wine"><i class="sw sw-' + sw + '" title="' + esc(COL_NAMES[w.c] || '') + '"></i>' +
      '<span class="y">' + esc(w.y) + '</span>' +
      '<span class="who">' + esc(w.p) + '</span>' +
      '<span class="what">' + esc(w.n || '') + extra + '</span>' +
      '<span class="where">' + esc(w.r ? w.r + (w.k ? ', ' + w.k : '') : (w.k || '')) + '</span>' +
      '<span class="e">' + w.e + '</span></li>';
  }

  function groupsFor(items, by) {
    var order = [], map = {};
    items.forEach(function (w) {
      var key = by(w);
      if (!map[key]) { map[key] = []; order.push(key); }
      map[key].push(w);
    });
    return order.map(function (k) { return { name: k, items: map[k] }; });
  }

  function groupHtml(g, open, subLabel, useSubs) {
    var body = '';
    if (useSubs) {
      var subs = groupsFor(g.items, function (w) { return subOf(w) || ''; });
      subs.forEach(function (s) {
        if (s.name && (subs.length > 1 || s.name !== g.name)) body += '<p class="sub-h">' + esc(s.name) + '</p>';
        body += '<ul class="wines">' + s.items.map(rowHtml).join('') + '</ul>';
      });
    } else {
      body = '<ul class="wines">' + g.items.map(rowHtml).join('') + '</ul>';
    }
    return '<details class="grp"' + (open ? ' open' : '') + '><summary><h3>' + esc(g.name) + '</h3>' +
      (subLabel ? '<span class="sub">' + esc(subLabel) + '</span>' : '') +
      '<span class="n">' + g.items.length + (g.items.length === 1 ? ' wijn' : ' wijnen') + '</span></summary>' + body + '</details>';
  }

  function renderChips(items) {
    var countries = [];
    items.forEach(function (w) { if (w.k && countries.indexOf(w.k) < 0) countries.push(w.k); });
    if (countries.length < 2) { chipsEl.innerHTML = ''; return; }
    chipsEl.innerHTML = '<button type="button" aria-pressed="' + (!state.country) + '" data-c="">Alle landen</button>' +
      countries.map(function (c) { return '<button type="button" aria-pressed="' + (state.country === c) + '" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }).join('');
  }

  function render() {
    var html = '';
    if (state.query) {
      var terms = norm(state.query).split(/\s+/).filter(Boolean);
      var hits = W.filter(function (w) { return terms.every(function (t) { return w._s.indexOf(t) > -1; }); });
      chipsEl.innerHTML = '';
      note.textContent = hits.length ? hits.length + (hits.length === 1 ? ' wijn' : ' wijnen') + ' gevonden in de hele kaart.' : '';
      if (!hits.length) {
        list.innerHTML = '<p class="empty">Niets gevonden voor “' + esc(state.query) + '”. Probeer een wijnmaker, streek, druif of land.</p>';
        return;
      }
      groupsFor(hits, function (w) { return TAB_NAMES[w.b]; }).forEach(function (g) { html += groupHtml(g, true, null, false); });
      list.innerHTML = html;
      return;
    }
    var items = W.filter(function (w) { return w.b === state.tab; });
    renderChips(items);
    note.textContent = NOTES[state.tab] || '';
    if (state.country) items = items.filter(function (w) { return w.k === state.country; });
    var groups;
    if (state.tab === 'selectie' || state.tab === 'halve') {
      groups = groupsFor(items, function (w) { return COL_NAMES[w.c]; });
      groups.forEach(function (g, i) { html += groupHtml(g, true, null, false); });
    } else if (state.tab === 'orange' || state.tab === 'rose') {
      html = groupHtml({ name: TAB_NAMES[state.tab], items: items }, true, null, false);
    } else {
      groups = groupsFor(items, function (w) { return w.k || 'Overig'; });
      groups.forEach(function (g, i) { html += groupHtml(g, state.country || i === 0, null, true); });
    }
    list.innerHTML = html;
  }

  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t); });
      state.tab = t.dataset.tab; state.country = null; state.query = ''; q.value = '';
      render();
    });
  });
  chipsEl.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    state.country = b.dataset.c || null;
    render();
  });
  var timer;
  q.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { state.query = q.value.trim(); render(); }, 120);
  });

  render();
})();
