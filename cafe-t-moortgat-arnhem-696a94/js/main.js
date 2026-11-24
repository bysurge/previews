(function () {
  // mobiel menu
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // bierkaart
  var data = window.BIERKAART || [], tabs = document.getElementById('tabs'), lijst = document.getElementById('lijst'), zoek = document.getElementById('zoek');
  var actief = data.length ? data[0].id : null;
  function pct(s) { return parseFloat(String(s).replace(',', '.')) || 0; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function rij(b) {
    var w = Math.max(4, Math.min(100, pct(b[2]) / 12 * 100));
    return '<div class="bier"><span class="n">' + esc(b[0]) + '</span><span class="s">' + esc(b[1]) + '</span>' +
      '<span class="p"><span class="meter" aria-hidden="true"><span style="width:' + w + '%"></span></span>' + esc(b[2]) + '%</span></div>';
  }
  data.forEach(function (g) {
    var t = document.createElement('button');
    t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 'tab-' + g.id;
    t.innerHTML = esc(g.naam) + ' <small>' + g.bieren.length + '</small>';
    t.addEventListener('click', function () { actief = g.id; zoek.value = ''; teken(); });
    tabs.appendChild(t);
  });
  function teken() {
    var q = zoek.value.trim().toLowerCase();
    [].forEach.call(tabs.children, function (t) { t.setAttribute('aria-selected', !q && t.id === 'tab-' + actief ? 'true' : 'false'); });
    if (!q) {
      var g = data.filter(function (x) { return x.id === actief; })[0];
      lijst.innerHTML = g.bieren.map(rij).join('');
      return;
    }
    var html = '';
    data.forEach(function (g) {
      var hits = g.bieren.filter(function (b) { return (b[0] + ' ' + b[1]).toLowerCase().indexOf(q) > -1; });
      if (hits.length) html += '<h3 class="groep-kop">' + esc(g.naam) + '</h3>' + hits.map(rij).join('');
    });
    lijst.innerHTML = html || '<p class="leeg">Geen bier gevonden met "' + esc(q) + '". Probeer een andere naam of soort.</p>';
  }
  zoek.addEventListener('input', teken);
  if (data.length) teken();

  // vandaag + nu open
  var uren = { 0: [14, 25], 1: [15, 25], 2: [15, 25], 3: [15, 25], 4: [14, 25], 5: [14, 26], 6: [12, 25] };
  var nu = new Date(), d = nu.getDay(), h = nu.getHours() + nu.getMinutes() / 60;
  var rijVandaag = document.querySelector('#uren tr[data-d="' + d + '"]');
  if (rijVandaag) rijVandaag.classList.add('vandaag');
  var gister = (d + 6) % 7, open = false, tot = '';
  if (h < uren[gister][1] - 24) { open = true; tot = (uren[gister][1] - 24) + ':00'; }
  else if (h >= uren[d][0]) { open = true; tot = '0' + (uren[d][1] - 24) + ':00'; }
  if (h < uren[gister][1] - 24) tot = '0' + tot;
  var el = document.getElementById('now');
  el.textContent = open ? 'Nu open, tot ' + tot + ' uur' : 'Vandaag open vanaf ' + uren[d][0] + ':00 uur';
  if (!open) el.classList.add('dicht');
  el.hidden = false;
})();
