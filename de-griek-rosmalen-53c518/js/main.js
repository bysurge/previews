(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var zin = function (t) { var s = t.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1); };
  var prijs = function (p) { return p.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join(''); };
  var rij = function (it) {
    return '<li class="gerecht"><span class="nr">' + esc(it.nr || '') + '</span><span class="gerecht-naam">' + esc(it.n) + '</span><span class="prijs">' + prijs(it.p) + '</span>' +
      (it.d ? '<p class="gerecht-ds">' + esc(it.d) + '</p>' : '') + '</li>';
  };

  // Menukaart (restaurant + desserts)
  var delen = (window.KAART || []).concat((window.DESSERT || []).map(function (c) { return { t: 'Desserts', items: c.items, note: c.note }; }));
  var gangen = document.getElementById('gangen'), panel = document.getElementById('kaart-panel');
  var knoppen = delen.map(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'gang-' + i; b.setAttribute('aria-controls', 'kaart-panel');
    b.textContent = zin(c.t).replace(/ \(vanaf 2 personen\)/, '');
    b.addEventListener('click', function () { kies(i, true); });
    b.addEventListener('keydown', function (e) {
      var d = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
      if (!d) return; e.preventDefault(); var n = (i + d + delen.length) % delen.length; kies(n, true); knoppen[n].focus();
    });
    gangen.appendChild(b); return b;
  });
  function kies(i, user) {
    var c = delen[i];
    knoppen.forEach(function (b, j) { b.setAttribute('aria-selected', j === i); b.tabIndex = j === i ? 0 : -1; });
    panel.setAttribute('aria-labelledby', 'gang-' + i);
    panel.innerHTML = '<h3 class="panel-titel">' + esc(zin(c.t)) + '</h3>' + (c.note ? '<p class="panel-noot">' + esc(c.note) + '</p>' : '') +
      '<ul class="gerechten">' + c.items.map(rij).join('') + '</ul>';
    if (user && window.innerWidth < 760) {
      knoppen[i].scrollIntoView({ block: 'nearest', inline: 'center' });
      var top = panel.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + top - 140, behavior: 'smooth' });
    }
  }
  if (delen.length) kies(0, false);

  // Dranken
  var DR = window.DRANK || [];
  var wijnHtml = '', restHtml = '';
  DR.forEach(function (g) {
    var titel = zin(g.t).replace(/ - /g, ', ');
    if (g.table) {
      wijnHtml += '<div class="wijn-groep karaf"><h3>Wijnen per glas en karaf</h3><table><thead><tr><th scope="col">Wijn</th><th scope="col">Glas</th><th scope="col">0,5 liter</th><th scope="col">Liter</th></tr></thead><tbody>' +
        g.items.map(function (it) {
          var p = it.p[0].match(/€ [\d,]+/g) || [];
          return '<tr><td><strong>' + esc(it.n) + '</strong>' + (it.d ? '<span>' + esc(it.d) + '</span>' : '') + '</td>' + p.map(function (x) { return '<td>' + esc(x) + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
    } else if (/WIJNEN/.test(g.t)) {
      wijnHtml += '<div class="wijn-groep"><h3>' + esc(titel) + '</h3>' + g.items.map(function (it) {
        return '<div class="wijn"><div class="wijn-kop"><span>' + esc(it.n) + '</span><span>' + esc(it.p.join(' / ')) + '</span></div>' + (it.d ? '<p>' + esc(it.d) + '</p>' : '') + '</div>';
      }).join('') + '</div>';
    } else {
      restHtml += '<div class="drank-groep"><h3>' + esc(titel) + '</h3><ul>' + g.items.map(function (it) {
        return '<li><span>' + esc(it.n) + (it.d ? '<small>' + esc(it.d) + '</small>' : '') + '</span><span class="pr">' + esc(it.p.join(' / ')) + '</span></li>';
      }).join('') + '</ul></div>';
    }
  });
  document.getElementById('wijnen').innerHTML = wijnHtml;
  document.getElementById('drank-rest').innerHTML = restHtml;

  // Afhaalkaart
  var A = window.AFHAAL || [], lijst = document.getElementById('afh-lijst'), cats = document.getElementById('afh-cats');
  var q = document.getElementById('afh-q'), count = document.getElementById('afh-count'), cur = 0;
  A.forEach(function (c, i) {
    var b = document.createElement('button'); b.type = 'button'; b.textContent = zin(c.t); b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () { cur = i; q.value = ''; render(); Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); }); });
    cats.appendChild(b);
  });
  var norm = function (t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  function render() {
    var term = norm(q.value.trim());
    if (!term) {
      var c = A[cur];
      lijst.innerHTML = '<h3>' + esc(zin(c.t)) + '</h3><ul class="gerechten">' + c.items.map(rij).join('') + '</ul>';
      count.textContent = ''; cats.classList.remove('dim'); return;
    }
    cats.classList.add('dim');
    var html = '', n = 0, num = /^\d+$/.test(term);
    A.forEach(function (c) {
      var hits = c.items.filter(function (it) { return num ? it.nr.indexOf(term) === 0 || String(+it.nr) === term : norm(it.n + ' ' + it.d).indexOf(term) > -1; });
      if (hits.length) { n += hits.length; html += '<h3>' + esc(zin(c.t)) + '</h3><ul class="gerechten">' + hits.map(rij).join('') + '</ul>'; }
    });
    lijst.innerHTML = html || '<p class="afh-leeg">Geen gerecht gevonden. Zoek op een nummer (bijv. 207) of een woord (bijv. gyros).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  q.addEventListener('input', render);
  if (A.length) render();

  // Navigatie
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  var zet = function (o) { tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); };
  tg.addEventListener('click', function () { zet(tg.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') zet(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zet(false); });
})();
