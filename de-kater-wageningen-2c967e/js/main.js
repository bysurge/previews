(function () {
  'use strict';
  var K = window.KAART;
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var price = function (p) { return p.replace(/\d+(\.\d+)?/g, function (n) { return Number(n).toFixed(2).replace('.', ','); }); };

  /* Mobiel menu */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  /* Kaart opbouwen */
  function itemHtml(it, beer) {
    var own = beer && it[4];
    var h = '<li class="item' + (own ? ' own' : '') + '"><div class="item-row"><span class="item-name">' + esc(it[0]) + '</span><span class="item-price">' + price(it[1]) + '</span></div>';
    if (it[2]) h += '<p class="item-desc">' + esc(it[2]) + '</p>';
    if (beer && it[3]) h += '<p class="item-brew">' + esc(it[3]) + '</p>';
    return h + '</li>';
  }
  function groupsHtml(groups, beer) {
    return '<div class="groups">' + groups.map(function (g) {
      return '<div class="group"><h3>' + esc(g.t) + '</h3><ul class="items' + (g.compact ? ' compact' : '') + '">' +
        g.items.map(function (it) { return itemHtml(it, beer); }).join('') + '</ul>' +
        (g.after ? '<p class="after">' + esc(g.after) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
  }
  function topHtml(panel, note) {
    return '<div class="panel-top"><p>' + esc(note || '') + '</p><a class="pdf" href="' + panel.dataset.pdf + '" target="_blank" rel="noopener">' + panel.dataset.pdfname + ' (PDF)</a></div>';
  }
  document.querySelectorAll('.panel[data-kaart]').forEach(function (p) {
    var d = K[p.dataset.kaart];
    p.innerHTML = topHtml(p, d.note) + groupsHtml(d.groups, false);
  });

  /* Drankkaart met eigen tabjes */
  var dp = document.getElementById('p-drinks');
  var subBar = dp.querySelector('.subtabs');
  var subWrap = dp.querySelector('.drink-panels');
  dp.insertAdjacentHTML('afterbegin', topHtml(dp, 'Koffie, wijn, fris, cocktails, shots en ruim vijftig bieren.'));
  K.drinks.forEach(function (c, i) {
    subBar.insertAdjacentHTML('beforeend', '<button role="tab" id="st-' + c.id + '" aria-controls="sp-' + c.id + '" aria-selected="' + (i === 0) + '"' + (i ? ' tabindex="-1"' : '') + '>' + esc(c.t) + '</button>');
    subWrap.insertAdjacentHTML('beforeend', '<div role="tabpanel" id="sp-' + c.id + '" aria-labelledby="st-' + c.id + '"' + (i ? ' hidden' : '') + '>' + groupsHtml(c.groups, c.beer) + '</div>');
  });

  /* Tabs (hoofdkaart en drankkaart) */
  function wire(list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll(':scope > [role=tab]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
      var bar = tab.parentNode;
      if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.offsetWidth / 2, behavior: calm ? 'auto' : 'smooth' });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  }
  wire(document.querySelector('.tabs'));
  wire(subBar);

  /* Nu open? Dagelijks 10:00-00:00, vr en za tot 01:00 */
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var closeOf = function (d) { return (d === 5 || d === 6) ? 25 * 60 : 24 * 60; };
  var st = document.querySelector('[data-status]');
  var label = function (m) { m = m % (24 * 60); return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
  var prev = (day + 6) % 7;
  if (mins < closeOf(prev) - 24 * 60) {
    st.textContent = 'Nu open, tot ' + label(closeOf(prev)); st.classList.add('is-open');
  } else if (mins >= 600) {
    var kitchen = mins >= 660 && mins < 1290 ? ', keuken tot 21:30' : '';
    st.textContent = 'Nu open, tot ' + label(closeOf(day)) + kitchen; st.classList.add('is-open');
  } else {
    st.textContent = 'Vandaag open vanaf 10:00';
  }
  document.querySelectorAll('#hours [data-days]').forEach(function (r) {
    if (r.dataset.days.split(',').indexOf(String(day)) > -1) r.classList.add('is-today');
  });

  /* Reserveren: tijdsloten zoals op hun huidige site (18:00 t/m 21:30) */
  var sel = document.getElementById('res-time');
  for (var m = 18 * 60; m <= 21 * 60 + 30; m += 15) sel.insertAdjacentHTML('beforeend', '<option>' + label(m) + '</option>');
  var dateIn = document.querySelector('#res-form [type=date]');
  var iso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateIn.min = iso; dateIn.value = iso;

  /* Formulieren: voorbeeld, verstuurt niets */
  ['res-form', 'job-form', 'ask-form'].forEach(function (id) {
    var f = document.getElementById(id);
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('.form-msg');
      msg.hidden = false;
      msg.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' });
    });
  });
})();
