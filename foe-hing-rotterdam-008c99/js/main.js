(function () {
  // mobile menu
  var burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function setNav(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setNav(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });

  // open / closed today (Europe/Amsterdam approximated by local time)
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var st = document.getElementById('status');
  if (d === 1) st.textContent = 'Vandaag (maandag) gesloten, behalve op feestdagen';
  else if (mins < 750) st.textContent = 'Vandaag open van 12:30 tot 21:00';
  else if (mins < 1260) { st.textContent = 'Nu open, tot 21:00'; st.classList.add('open'); }
  else st.textContent = (d === 0 ? 'Dinsdag' : 'Morgen') + ' weer open vanaf 12:30';
  var row = document.querySelector('.hours tr[data-dag="' + d + '"]');
  if (row) row.classList.add('vandaag');

  // highlight current month menu
  var m = document.querySelector('.month[data-maand="' + now.getMonth() + '"]');
  if (m && now.getFullYear() === 2026) m.classList.add('nu');

  // keuzemenu list
  function chili(n) { var s = ''; for (var i = 0; i < n; i++) s += '<i class="chili">pikant</i>'; return s; }
  document.getElementById('keuze-list').innerHTML = window.KEUZE.maandmenu.map(function (x) {
    var p = x.split('|'); return '<li>' + p[0] + (p[1] ? ' ' + chili(+p[1]) : '') + '</li>';
  }).join('');

  // menukaart
  var K = window.KAART, R = window.RIJSTTAFELS;
  var tabs = document.getElementById('tabs'), panel = document.getElementById('panel'), zoek = document.getElementById('zoek');
  var cats = K.map(function (c) { return { id: c.id, naam: c.naam }; });
  cats.push({ id: 'rijsttafels', naam: 'Rijsttafels' });
  tabs.innerHTML = cats.map(function (c, i) {
    return '<button class="tab" role="tab" id="t-' + c.id + '" aria-selected="' + (i === 0) + '" data-id="' + c.id + '">' + c.naam + '</button>';
  }).join('');

  function itemHtml(it) {
    return '<li class="item"><span class="nr">' + it[0] + '</span><span class="nm">' + it[1] + (it[4] ? ' ' + chili(it[4]) : '') +
      (it[2] ? '<span class="ds">' + it[2] + '</span>' : '') + '</span><span class="pr">€ ' + it[3] + '</span></li>';
  }
  function catHtml(c, items) {
    return '<div class="cat"><h3>' + c.naam + '</h3>' + (c.sub ? '<p class="sub">' + c.sub + '</p>' : '') +
      '<ul class="items">' + items.map(itemHtml).join('') + '</ul></div>';
  }
  function rtHtml() {
    return '<div class="cat"><h3>Rijsttafels</h3><p class="sub">Indisch en Chinees</p><div class="rt">' + R.map(function (r) {
      return '<article><h4>' + r.naam + '</h4><p class="rtp"><span>nr. ' + r.nr + '</span><b>€ ' + r.prijs + '</b></p><ul>' +
        r.items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></article>';
    }).join('') + '</div></div>';
  }
  function show(id) {
    tabs.querySelectorAll('.tab').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.id === id ? 'true' : 'false'); });
    panel.setAttribute('aria-labelledby', 't-' + id);
    if (id === 'rijsttafels') { panel.innerHTML = rtHtml(); return; }
    var c = K.filter(function (x) { return x.id === id; })[0];
    panel.innerHTML = catHtml(c, c.items);
  }
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    zoek.value = ''; show(b.dataset.id);
  });
  zoek.addEventListener('input', function () {
    var q = zoek.value.trim().toLowerCase();
    if (!q) { var sel = tabs.querySelector('[aria-selected="true"]'); show(sel ? sel.dataset.id : K[0].id); return; }
    var out = '';
    K.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return it[0].toLowerCase() === q || (q.length > 1 && (it[1] + ' ' + it[2]).toLowerCase().indexOf(q) > -1);
      });
      if (hits.length) out += catHtml(c, hits);
    });
    panel.innerHTML = out || '<p class="leeg">Geen gerecht gevonden voor "' + zoek.value.replace(/</g, '&lt;') + '". Probeer een nummer, zoals 28, of een naam, zoals babi.</p>';
  });
  show(K[0].id);
})();
