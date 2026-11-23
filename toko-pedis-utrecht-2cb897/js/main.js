(function () {
  // mobiel menu
  var body = document.body, toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // vandaag open?
  var hours = { 0: [16 * 60, 19 * 60 + 30], 1: null, 2: null, 3: [16 * 60, 19 * 60 + 30], 4: [15 * 60, 20 * 60], 5: [15 * 60, 20 * 60], 6: [15 * 60, 20 * 60] };
  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60; return h + ':' + (mm < 10 ? '0' : '') + mm; }
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var t = document.getElementById('today-text'), strip = document.getElementById('today');
  var h = hours[d];
  if (h && mins < h[0]) { t.textContent = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]); }
  else if (h && mins < h[1]) { t.textContent = 'Nu open, tot ' + fmt(h[1]); }
  else {
    var n = 1; while (!hours[(d + n) % 7]) n++;
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    var nd = (d + n) % 7;
    t.textContent = 'Nu gesloten. Weer open ' + (n === 1 ? 'morgen' : names[nd]) + ' vanaf ' + fmt(hours[nd][0]);
    strip.classList.add('closed');
  }

  // rames bord
  var C = { base: '#e3a41c', groente: '#5f8a5a', vlees: '#7a3b22', ei: '#f6dc95', tempeh: '#c08a4a' };
  var R = {
    rames: { title: 'Rames', parts: ['groente', 'vlees', 'groente', 'vlees'],
      list: [['base', 'Basis naar keuze: bami, nasi kuning of nasi putih'], ['groente', '2 groentegerechten'], ['vlees', '2 vleesgerechten']],
      prices: [['medium', '€ 14,50'], ['large', '€ 18,95']] },
    compleet: { title: 'Rames Compleet', parts: ['groente', 'vlees', 'ei', 'groente', 'vlees', 'tempeh'],
      list: [['base', 'Basis naar keuze: bami, nasi kuning of nasi putih'], ['groente', '2 groentegerechten'], ['vlees', '2 vleesgerechten'], ['ei', '1 ei'], ['tempeh', 'tempeh']],
      prices: [['medium', '€ 15,50'], ['large', '€ 19,50']] },
    besar: { title: 'Rames Besar', parts: ['groente', 'vlees', 'groente', 'ei', 'vlees', 'groente', 'vlees', 'tempeh'],
      list: [['base', 'Basis naar keuze: bami, nasi kuning of nasi putih'], ['groente', '3 groentegerechten'], ['vlees', '3 vleesgerechten'], ['ei', '1 ei'], ['tempeh', 'tempeh']],
      prices: [['Rames Besar', '€ 19,95']] }
  };
  var NS = 'http://www.w3.org/2000/svg';
  function el(n, a) { var e = document.createElementNS(NS, n); for (var k in a) e.setAttribute(k, a[k]); return e; }
  function draw(key) {
    var r = R[key], g = document.getElementById('plate-parts');
    g.innerHTML = '';
    var n = r.parts.length, rad = n > 6 ? 30 : n > 4 ? 33 : 38, ring = n > 6 ? 90 : 88;
    r.parts.forEach(function (p, i) {
      var a = -Math.PI / 2 + (i / n) * Math.PI * 2;
      var x = 160 + Math.cos(a) * ring, y = 160 + Math.sin(a) * ring;
      var grp = el('g', { 'class': 'part' });
      grp.appendChild(el('circle', { cx: x, cy: y, r: rad, fill: C[p] }));
      var tx = el('text', { x: x, y: y + 4, 'class': 'part-label' + (p === 'vlees' || p === 'groente' ? ' light' : '') });
      tx.textContent = p;
      grp.appendChild(tx);
      g.appendChild(grp);
    });
    var b = el('g', { 'class': 'part' });
    b.appendChild(el('circle', { cx: 160, cy: 160, r: n > 6 ? 48 : 50, fill: C.base }));
    var t1 = el('text', { x: 160, y: 156, 'class': 'part-label' }); t1.textContent = 'rijst';
    var t2 = el('text', { x: 160, y: 172, 'class': 'part-label' }); t2.textContent = 'of bami';
    b.appendChild(t1); b.appendChild(t2); g.appendChild(b);

    document.getElementById('r-title').textContent = r.title;
    var ul = document.getElementById('r-list'); ul.innerHTML = '';
    r.list.forEach(function (it) {
      var li = document.createElement('li');
      li.innerHTML = '<span class="sw" style="background:' + C[it[0]] + '"></span><span>' + it[1] + '</span>';
      ul.appendChild(li);
    });
    var pr = document.getElementById('r-prices'); pr.innerHTML = '';
    r.prices.forEach(function (p) {
      var dv = document.createElement('div');
      dv.innerHTML = '<span>' + p[0] + '</span><b>' + p[1] + '</b>';
      pr.appendChild(dv);
    });
  }
  var rb = document.querySelectorAll('.rames-switch button');
  rb.forEach(function (b) {
    b.addEventListener('click', function () {
      rb.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      draw(b.dataset.r);
    });
  });
  draw('rames');

  // tabs gerechten
  var tabs = document.querySelectorAll('.tabs button');
  tabs.forEach(function (tb) {
    tb.addEventListener('click', function () {
      tabs.forEach(function (x) {
        var on = x === tb;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    });
  });
})();
