(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-btn');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); });
  });

  // openingstijden van vandaag
  var hours = { 0: null, 1: ['15.00', '23.00'], 2: ['16.30', '23.00'], 3: ['16.30', '23.00'], 4: ['16.30', '23.00'], 5: ['15.00', '00.00'], 6: ['15.00', '00.00'] };
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var t = document.querySelector('[data-today]');
  if (t) t.textContent = hours[d] ? 'Vandaag open van ' + hours[d][0] + ' tot ' + hours[d][1] : 'Vandaag gesloten, maandag weer open vanaf 15.00';

  // wijnkaart
  var W = window.WIJNEN || [];
  var list = document.getElementById('wines'), count = document.getElementById('count');
  var land = document.getElementById('land'), zoek = document.getElementById('zoek');
  var types = ['Mousserend', 'Wit', 'Oranje', 'Rosé', 'Rood'];
  var cls = { 'Mousserend': 'mousserend', 'Wit': 'wit', 'Oranje': 'oranje', 'Rosé': 'rose', 'Rood': 'rood' };
  var type = '';
  var landen = [];
  W.forEach(function (w) { if (landen.indexOf(w.c) < 0) landen.push(w.c); });
  landen.sort(function (a, b) { return a.localeCompare(b, 'nl'); }).forEach(function (c) {
    var o = document.createElement('option'); o.value = c; o.textContent = c; land.appendChild(o);
  });
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function render() {
    var q = norm(zoek.value.trim()), c = land.value, html = '', n = 0;
    types.forEach(function (ty) {
      if (type && type !== ty) return;
      var rows = W.filter(function (w) {
        return w.t === ty && (!c || w.c === c) && (!q || norm(w.n + ' ' + w.g + ' ' + w.r + ' ' + w.c).indexOf(q) > -1);
      });
      if (!rows.length) return;
      n += rows.length;
      html += '<div class="wgroup"><h3><i class="dot ' + cls[ty] + '"></i>' + ty + ' <small>' + rows.length + '</small></h3>';
      rows.forEach(function (w) {
        html += '<div class="wine"><span class="n">' + esc(w.n) + '</span><span class="d">' + esc([w.g, w.r].filter(Boolean).join(', ')) + ' · ' + esc(w.c) + '</span><span class="p">€ ' + esc(w.p) + '</span></div>';
      });
      html += '</div>';
    });
    list.innerHTML = html || '<p class="empty">Niets gevonden. Probeer een andere druif of streek, of vraag het onze sommeliers.</p>';
    count.textContent = n + (n === 1 ? ' wijn' : ' wijnen') + ' per fles';
    list.scrollTop = 0;
  }
  document.querySelectorAll('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      type = b.getAttribute('data-type');
      document.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      render();
    });
  });
  land.addEventListener('change', render);
  zoek.addEventListener('input', render);
  render();

  // formulier: voorbeeld
  var f = document.getElementById('res-form');
  f.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
