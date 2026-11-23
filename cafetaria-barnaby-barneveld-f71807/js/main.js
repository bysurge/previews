(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // Menu from the text block
  var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var lines = document.getElementById('menu-data').textContent.split('\n');
  var cats = [], cur = null, list = null;
  lines.forEach(function (raw) {
    var l = raw.trim();
    if (!l) return;
    if (l.indexOf('## ') === 0) { list = { h: l.slice(3), items: [] }; cur.groups.push(list); return; }
    if (l.indexOf('# ') === 0) { cur = { name: l.slice(2), groups: [], tip: '' }; list = { h: '', items: [] }; cur.groups.push(list); cats.push(cur); return; }
    if (l.indexOf('! ') === 0) { cur.tip = l.slice(2); return; }
    var parts = l.split('|').map(function (s) { return s.trim(); });
    list.items.push({ n: parts[0], d: parts[1] || '', p: parts[2] || '' });
  });
  var tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
  cats.forEach(function (c, i) {
    var id = 'mk-' + i;
    var b = document.createElement('button');
    b.className = 'tab' + ('');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = id + '-tab';
    b.setAttribute('aria-controls', id); b.setAttribute('aria-selected', i === 0);
    b.textContent = c.name;
    tabs.appendChild(b);
    var html = '<h3>' + esc(c.name) + '</h3>';
    c.groups.forEach(function (g) {
      if (!g.items.length) return;
      html += '<div class="items">' + (g.h ? '<h4>' + esc(g.h) + '</h4>' : '') + g.items.map(function (it) {
        return '<div class="item"><span class="n">' + esc(it.n) + '</span><span class="p">' + esc(it.p) + '</span>' + (it.d ? '<span class="d">' + esc(it.d) + '</span>' : '') + '</div>';
      }).join('') + '</div>';
    });
    if (c.tip) html += '<p class="tip">' + esc(c.tip) + '</p>';
    var p = document.createElement('div');
    p.className = 'panel'; p.id = id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', id + '-tab');
    p.hidden = i !== 0; p.innerHTML = html;
    panels.appendChild(p);
    b.addEventListener('click', function () {
      tabs.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', t === b); });
      panels.querySelectorAll('.panel').forEach(function (x) { x.hidden = x !== p; });
    });
  });

  // Category tiles open the matching tab
  document.querySelectorAll('[data-tab]').forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.querySelectorAll('.tab').forEach(function (x) { if (x.textContent === t.getAttribute('data-tab')) x.click(); });
    });
  });

  // Open now?
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var start = d === 0 ? 960 : 690, end = 1200;
  var el = document.getElementById('today');
  var rows = document.querySelectorAll('.tijden tr');
  var rowIdx = (d + 6) % 7; if (rows[rowIdx]) rows[rowIdx].classList.add('vandaag');
  var t = d === 0 ? '16:00 - 20:00' : '11:30 - 20:00';
  if (m >= start && m < end) { el.textContent = 'Nu open, vandaag tot 20:00'; el.classList.add('open'); }
  else if (m < start) el.textContent = 'Vandaag open ' + t;
  else el.textContent = 'Nu gesloten. Morgen open ' + (d === 6 ? '16:00 - 20:00' : '11:30 - 20:00');

  // Example form
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); document.getElementById('form-msg').hidden = false;
  });
})();
