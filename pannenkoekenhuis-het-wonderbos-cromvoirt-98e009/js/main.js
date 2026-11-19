(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // mobiel menu
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); });
  });

  // menukaart
  var dish = function (d) {
    return '<div class="dish"><div class="dish-top"><span class="dish-nm">' + esc(d[0]) + '</span><span class="dish-pr">' + esc(d[1]) + '</span></div>' +
      (d[2] ? '<span class="dish-ds">' + esc(d[2]) + '</span>' : '') + '</div>';
  };
  var group = function (g) {
    var body = g.sub
      ? '<div class="subgrid">' + g.sub.map(function (s) { return '<div class="subcard">' + s.map(dish).join('') + '</div>'; }).join('') + '</div>'
      : g.items.map(dish).join('');
    return '<div class="group' + (g.wide ? ' wide' : '') + '"><h3>' + esc(g.t) + '</h3>' +
      (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') + body +
      (g.extra ? '<p class="extra">' + esc(g.extra) + '</p>' : '') + '</div>';
  };
  var tt = document.getElementById('kaart-tabs'), tp = document.getElementById('kaart-panels');
  (window.KAART || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'tab-' + s.id; b.setAttribute('aria-controls', 'p-' + s.id);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = s.short || s.t;
    tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + s.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'tab-' + s.id); p.hidden = i !== 0;
    p.innerHTML = (s.short ? '<h3 class="sr">' + esc(s.t) + '</h3>' : '') + '<div class="groups">' + s.groups.map(group).join('') + '</div>';
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });

  // vandaag
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var T = { 0: [720, 1230], 2: [960, 1200], 3: [960, 1200], 4: [960, 1200], 5: [720, 1200], 6: [720, 1230] };
  var f = function (x) { return Math.floor(x / 60) + '.' + ('0' + x % 60).slice(-2); };
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var el = document.getElementById('vandaag');
  if (!T[d]) el.textContent = 'Vandaag (maandag) op afspraak geopend. Dinsdag vanaf 16.00 uur.';
  else if (m < T[d][1]) {
    el.textContent = (m >= T[d][0] ? 'Nu open, tot ' : 'Vandaag open van ' + f(T[d][0]) + ' tot ') + f(T[d][1]) + ' uur';
    if (m >= T[d][0]) el.classList.add('is-open');
  } else el.textContent = 'Vandaag geopend tot ' + f(T[d][1]) + ' uur. Dinsdag t/m zondag open.';
})();
