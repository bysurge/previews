(function () {
  // mobile menu
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // menu tabs
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  (window.TROJE_MENU || []).forEach(function (g, gi) {
    var b = document.createElement('button');
    b.className = 'tab'; b.type = 'button'; b.setAttribute('role', 'tab');
    b.id = 'tab-' + gi; b.setAttribute('aria-controls', 'panel-' + gi);
    b.setAttribute('aria-selected', gi === 0 ? 'true' : 'false');
    b.textContent = g.g;
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + gi; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (gi) p.hidden = true;
    p.innerHTML = g.cats.map(function (c) {
      return '<div class="cat"><h3>' + esc(c.name) + '<small>' + c.items.length + ' keuzes</small></h3>' +
        (c.note ? '<p class="note">' + esc(c.note) + '</p>' : '') +
        c.items.map(function (i) {
          return '<div class="item"><span class="n">' + esc(i[0]) + '</span><span class="p">€ ' + esc(i[2]) + '</span>' + (i[1] ? '<span class="d">' + esc(i[1]) + '</span>' : '') + '</div>';
        }).join('') + '</div>';
    }).join('');
    panels.appendChild(p);
    b.addEventListener('click', function () {
      tabs.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      panels.querySelectorAll('.panel').forEach(function (x) { x.hidden = true; });
      b.setAttribute('aria-selected', 'true'); p.hidden = false;
      b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      var top = document.getElementById('menu').getBoundingClientRect().top;
      if (top < -200) document.getElementById('tabs').scrollIntoView();
    });
  });

  // open / delivery status (times from their own site)
  var open = { 0: [14, 22], 1: [12, 22], 2: [12, 22], 3: [12, 22], 4: [12, 22], 5: [12, 24], 6: [12, 24] };
  var del = { 0: [15, 21.75], 1: [13, 21.75], 2: [15, 21.75], 3: [15, 21.75], 4: [15, 21.75], 5: [12, 23.75], 6: [15, 23.75] };
  var fmt = function (h) { var hh = Math.floor(h), mm = Math.round((h - hh) * 60); return (hh === 24 ? '24' : hh) + ':' + (mm < 10 ? '0' : '') + mm; };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var st = document.getElementById('status');
  if (h >= open[d][0] && h < open[d][1]) {
    st.textContent = (h >= del[d][0] && h < del[d][1]) ? 'Nu open, bezorgen tot ' + fmt(del[d][1]) : 'Nu open tot ' + fmt(open[d][1]);
  } else {
    var nd = h < open[d][0] ? d : (d + 1) % 7;
    st.textContent = 'Nu gesloten, ' + (nd === d ? 'vandaag' : 'morgen') + ' open vanaf ' + fmt(open[nd][0]);
    st.classList.add('closed');
  }
  st.hidden = false;
  document.querySelectorAll('.hours tr[data-d="' + d + '"]').forEach(function (r) { r.classList.add('today'); });

  // demo form
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: het bericht is niet verstuurd.';
  });
})();
