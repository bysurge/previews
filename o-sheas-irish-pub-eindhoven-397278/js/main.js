(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function rows(items, food) {
    return '<ul class="rows">' + items.map(function (it) {
      return '<li><span class="r-main"><span class="r-name">' + it[0] +
        (food && it[3] ? ' <span class="vega-dot" title="vegetarisch"></span>' : '') + '</span>' +
        (it[1] ? '<span class="r-desc">' + it[1] + '</span>' : '') + '</span>' +
        '<span class="r-price">' + it[2] + '</span></li>';
    }).join('') + '</ul>';
  }
  function build(data, key, food) {
    var tabs = document.querySelector('.tabs[data-for="' + key + '"]');
    var panels = document.getElementById(key);
    data.forEach(function (cat, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.role = 'tab'; b.id = key + '-t-' + cat.id;
      b.setAttribute('aria-controls', key + '-p-' + cat.id);
      b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      b.textContent = cat.name; tabs.appendChild(b);
      var p = document.createElement('div');
      p.className = 'panel'; p.id = key + '-p-' + cat.id; p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', b.id); if (i) p.hidden = true;
      var h = '<h3 class="panel-title">' + cat.name + '</h3>';
      if (cat.note) h += '<p class="note">' + cat.note + '</p>';
      if (cat.items) h += rows(cat.items, food);
      if (cat.groups) h += '<div class="groups">' + cat.groups.map(function (g) {
        return '<div class="group"><h4>' + g[0] + '</h4>' + rows(g[1], false) + '</div>';
      }).join('') + '</div>';
      p.innerHTML = h; panels.appendChild(p);
    });
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      tabs.querySelectorAll('button').forEach(function (t) { t.setAttribute('aria-selected', String(t === b)); });
      panels.querySelectorAll('.panel').forEach(function (p) { p.hidden = p.id !== b.getAttribute('aria-controls'); });
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });
  }
  build(FOOD, 'food', true);
  build(DRINKS, 'drinks', false);

  // Open nu? Tijden lopen door na middernacht.
  var H = { 0: [1200, 2400], 1: [1600, 2600], 2: [1600, 2600], 3: [1600, 2600], 4: [1600, 2600], 5: [1300, 2800], 6: [1200, 2800] };
  var now = new Date(), d = now.getDay(), hm = now.getHours() * 100 + now.getMinutes();
  function f(n) { n = n % 2400; return String(Math.floor(n / 100)).padStart(2, '0') + ':' + String(n % 100).padStart(2, '0'); }
  var y = (d + 6) % 7, msg, open = false;
  if (hm + 2400 < H[y][1]) { msg = 'Nu open tot ' + f(H[y][1]); open = true; }
  else if (hm >= H[d][0] && hm < H[d][1]) { msg = 'Nu open tot ' + f(H[d][1]); open = true; }
  else if (hm < H[d][0]) msg = 'Vandaag open vanaf ' + f(H[d][0]) + ', tot ' + f(H[d][1]);
  else msg = 'Morgen open vanaf ' + f(H[(d + 1) % 7][0]);
  var el = document.getElementById('status');
  el.textContent = msg; el.classList.add(open ? 'is-open' : 'is-closed');
  var row = document.querySelector('.hours tr[data-day="' + (hm < 600 && hm + 2400 < H[y][1] ? y : d) + '"]');
  if (row) row.classList.add('today');
})();
