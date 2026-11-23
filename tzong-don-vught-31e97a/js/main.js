(function () {
  var M = window.MENU || {};
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  // turn *, **, *** markers into spice dots
  function spice(s) {
    var lvl = 0;
    s = s.replace(/\s*(\*{1,3})(?!\d)/g, function (m, st) { lvl = Math.max(lvl, st.length); return ''; });
    s = esc(s.replace(/\s+([,.])/g, '$1').trim());
    var titles = ['', 'licht pikant', 'pikant', 'scherp'];
    return lvl ? s + ' <i class="hot h' + lvl + '" role="img" aria-label="' + titles[lvl] + '"></i>' : s;
  }
  function price(p) {
    if (!p) return '';
    p = String(p);
    return /€/.test(p) ? p : '€ ' + p;
  }
  function splitDesc(name) {
    var m = name.match(/^(.*?\))\s+(\d+x .*)$/);
    if (m) return [m[1], m[2]];
    return [name, ''];
  }
  function item(i) {
    var nm = i.name, ds = (i.desc || []).join(' · ');
    if (!ds) { var sp = splitDesc(nm); nm = sp[0]; ds = sp[1]; }
    var pr = price(i.price);
    var multi = /\//.test(pr) ? ' multi' : '';
    return '<li><span class="nr">' + esc(i.nr || '') + '</span><span class="nm">' + spice(nm) +
      (ds ? '<span class="ds">' + spice(ds) + '</span>' : '') + '</span><span class="pr' + multi + '">' + esc(pr) + '</span></li>';
  }
  document.querySelectorAll('[data-menu]').forEach(function (box) {
    var cats = M[box.getAttribute('data-menu')] || [];
    box.innerHTML = cats.map(function (c, k) {
      var note = (c.note ? c.note : '') + (c.price ? ' ' + price(c.price) : '');
      return '<details' + (k === 0 ? ' open' : '') + '><summary>' + esc(c.name) +
        '<span class="cnt">' + c.items.length + '</span></summary>' +
        (note.trim() ? '<p class="cat-note">' + esc(note.trim()) + '</p>' : '') +
        '<ul class="items">' + c.items.map(item).join('') + '</ul></details>';
    }).join('');
  });
  var sl = document.querySelector('[data-list="specials"]');
  if (sl) sl.innerHTML = (M.specials || []).map(function (i) {
    return '<li><span class="nr">' + esc(i.nr) + '</span><span>' + spice(i.name) + '</span><span class="pr">' + esc(price(i.price)) + '</span></li>';
  }).join('');
  var kl = document.querySelector('[data-list="keuze"]');
  if (kl) kl.innerHTML = (M.keuze || []).map(function (s) { return '<li>' + spice(s.replace(/\+ € 6,00/, '(+ € 6,00)')) + '</li>'; }).join('');

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function show(name) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, k) {
    t.addEventListener('click', function () { show(t.getAttribute('data-tab')); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = tabs[(k + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        n.focus(); show(n.getAttribute('data-tab'));
      }
    });
  });
  document.querySelectorAll('a[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.getAttribute('data-tab')); });
  });

  // mobile nav
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var open = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { tg.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); });
  });

  // open status (every day 15:30-22:00; 31 Dec until 20:00)
  var el = document.getElementById('openNow');
  if (el) {
    var d = new Date(), mins = d.getHours() * 60 + d.getMinutes();
    var close = (d.getMonth() === 11 && d.getDate() === 31) ? 20 * 60 : 22 * 60;
    var closeTxt = close === 1200 ? '20:00' : '22:00';
    if (mins >= 930 && mins < close) el.textContent = 'Nu open, vandaag tot ' + closeTxt;
    else if (mins < 930) el.textContent = 'Vandaag open van 15:30 tot ' + closeTxt;
    else el.textContent = 'Morgen weer open vanaf 15:30';
  }
})();
