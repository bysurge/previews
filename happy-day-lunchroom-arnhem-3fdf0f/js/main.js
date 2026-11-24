(function () {
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // menu met tabs
  var data = window.MENU || [], tabs = document.getElementById('tabs'), body = document.getElementById('menu-body');
  var fotos = { soep: 'schaal-saoto.webp', snacks: 'schaal-bara-kip.webp', broodjes: 'schaal-broodje.webp', maaltijden: 'schaal-salade.webp', koffie: 'schaal-cappuccino.webp', dranken: 'schaal-smoothie.webp' };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function toon(id) {
    [].forEach.call(tabs.children, function (t) { t.setAttribute('aria-selected', t.dataset.id === id ? 'true' : 'false'); });
    var tab = data.filter(function (x) { return x.id === id; })[0];
    var html = tab.groepen.map(function (g) {
      return '<div class="groep"><h3>' + esc(g.naam) + (g.note ? ' <small>' + esc(g.note) + '</small>' : '') + '</h3>' +
        g.items.map(function (i) {
          return '<div class="item"><span class="n">' + esc(i[0]) + '</span><span class="p">€ ' + esc(i[2]) + '</span>' + (i[1] ? '<span class="d">' + esc(i[1]) + '</span>' : '') + '</div>';
        }).join('') + '</div>';
    }).join('');
    if (fotos[id]) html += '<div class="groep"><img class="menu-foto" src="img/' + fotos[id] + '" alt="" width="700" height="700" loading="lazy"></div>';
    body.innerHTML = html;
  }
  data.forEach(function (t) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.id = t.id; b.textContent = t.tab;
    b.addEventListener('click', function () { toon(t.id); });
    tabs.appendChild(b);
  });
  if (data.length) toon(data[0].id);

  // formulieren versturen niets
  [].forEach.call(document.querySelectorAll('form'), function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.form-msg').hidden = false; });
  });

  // vandaag + nu open
  var uren = { 0: null, 1: [12.5, 19], 2: [11, 19], 3: [11, 19], 4: [11, 19], 5: [11, 19], 6: [11, 19] };
  var nu = new Date(), d = nu.getDay(), h = nu.getHours() + nu.getMinutes() / 60, m = nu.getMonth(), dag = nu.getDate();
  var rij = document.querySelector('#uren tr[data-d="' + d + '"]');
  if (rij) rij.classList.add('vandaag');
  var feest = (m === 11 && (dag === 25 || dag === 26)) || (m === 0 && (dag === 1 || dag === 2));
  var u = feest ? null : uren[d], el = document.getElementById('now');
  function t(x) { return Math.floor(x) + ':' + (x % 1 ? '30' : '00'); }
  if (!u) el.textContent = 'Vandaag gesloten';
  else if (h < u[0]) el.textContent = 'Vandaag open vanaf ' + t(u[0]) + ' uur';
  else if (h < u[1]) el.textContent = 'Nu open, tot ' + t(u[1]) + ' uur';
  else el.textContent = 'Nu gesloten, vandaag open tot ' + t(u[1]) + ' uur';
  el.hidden = false;
})();
