(function () {
  'use strict';
  var K = window.KAART || {};

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var TAGS = { v: '<b class="tag v" title="vegetarisch">v</b>', vg: '<b class="tag vg" title="veganistisch">vg</b>', huis: '<b class="tag huis">huisbier</b>' };

  function item(it) {
    var naam = it[0], oms = it[1], prijs = it[2], tag = it[3], abv = it[4];
    var h = '<div class="item"><div class="naam">' + esc(naam) + (tag ? TAGS[tag] || '' : '') +
      (abv ? '<span class="abv">' + esc(abv) + '</span>' : '') + '</div>';
    if (typeof prijs === 'string' && prijs) h += '<div class="prijs">' + esc(prijs) + '</div>';
    if (oms) h += '<div class="oms">' + esc(oms) + '</div>';
    if (Array.isArray(prijs)) {
      h += '<div class="maten">' + prijs.map(function (p) {
        return '<span><i>' + esc(p[0]) + '</i> <b>' + esc(p[1]) + '</b></span>';
      }).join('') + '</div>';
    }
    return h + '</div>';
  }

  function groep(g) {
    var h = '<div class="groep"><h3>' + esc(g.t) + '</h3>';
    if (g.when) h += '<p class="when">' + esc(g.when) + '</p>';
    if (g.intro) h += '<p class="intro">' + esc(g.intro) + '</p>';
    return h + g.items.map(item).join('') + '</div>';
  }

  function render(el) {
    var key = el.getAttribute('data-render');
    var data = K[key];
    if (!data) return;
    if (key === 'tap') { el.innerHTML = data.map(item).join(''); return; }
    if (key === 'fles') {
      el.innerHTML = data.map(function (g, i) {
        return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(g.t) +
          '<small>' + g.items.length + ' bieren</small></summary>' + g.items.map(item).join('') + '</details>';
      }).join('');
      return;
    }
    el.innerHTML = data.map(groep).join('');
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-render]'), render);

  /* Tabs */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function kies(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Open of dicht, in Nederlandse tijd. [open, dicht] in minuten; dicht na middernacht = > 1440 */
  var UREN = { 0: [840, 1320], 1: null, 2: [900, 1440], 3: [900, 1440], 4: [900, 1500], 5: [900, 1500], 6: [780, 1500] };
  function hm(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2); }
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var dag = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var nu = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    var row = document.querySelector('tr[data-dag="' + dag + '"]');
    if (row) row.classList.add('nu');
    var vandaag = UREN[dag], gisteren = UREN[(dag + 6) % 7], tekst = '', open = false;
    if (gisteren && gisteren[1] > 1440 && nu < gisteren[1] - 1440) { open = true; tekst = 'Nu open, tot ' + hm(gisteren[1]); }
    else if (vandaag && nu >= vandaag[0] && nu < vandaag[1]) { open = true; tekst = 'Nu open, tot ' + hm(vandaag[1]); }
    else if (vandaag && nu < vandaag[0]) { tekst = 'Vandaag open vanaf ' + hm(vandaag[0]); }
    else {
      var d = (dag + 1) % 7; while (!UREN[d]) d = (d + 1) % 7;
      var namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      tekst = (d === (dag + 1) % 7 ? 'Morgen' : 'Weer open op ' + namen[d] + ',') + ' vanaf ' + hm(UREN[d][0]);
      if (d === (dag + 1) % 7) tekst = 'Morgen open vanaf ' + hm(UREN[d][0]);
    }
    var el = document.querySelector('[data-today]');
    el.textContent = tekst; el.hidden = false;
    if (open) el.classList.add('open');
  } catch (e) { /* zonder tijdzone-ondersteuning tonen we gewoon de tabel */ }
})();
