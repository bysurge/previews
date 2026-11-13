(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onScroll() { document.body.classList.toggle('scrolled', window.scrollY > 220); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function itemHtml(it) {
    if (it[0] === 'h') return '<div class="item-h"><b>' + esc(it[1]) + '</b>' + (it[2] ? '<p>' + esc(it[2]) + '</p>' : '') + '</div>';
    return '<div class="item"><div class="item-top"><span class="item-name">' + esc(it[0]) +
      (it[3] ? '<span class="v" title="vegetarisch" aria-label="vegetarisch">V</span>' : '') + '</span>' +
      (it[2] ? '<span class="item-price">' + esc(it[2]) + '</span>' : '') + '</div>' +
      (it[1] ? '<p class="item-desc">' + esc(it[1]) + '</p>' : '') + '</div>';
  }
  function groupHtml(g, cls) {
    return '<div class="' + cls + '"><h3>' + esc(g.name) + '</h3>' + (g.note ? '<p class="note">' + esc(g.note) + '</p>' : '') +
      g.items.map(itemHtml).join('') + '</div>';
  }

  /* menukaart */
  var tabs = document.getElementById('tabs'), body = document.getElementById('menuBody');
  if (tabs && window.ROBUUST_MENU) {
    var M = window.ROBUUST_MENU;
    tabs.innerHTML = M.map(function (s, i) {
      return '<button role="tab" aria-selected="' + (i === 0) + '" aria-controls="menuBody" data-id="' + s.id + '">' + esc(s.name) + '</button>';
    }).join('');
    function show(id) {
      var s = M.filter(function (x) { return x.id === id; })[0];
      body.innerHTML = '<div class="groups-cols">' + s.groups.map(function (g) { return groupHtml(g, 'mgroup'); }).join('') + '</div>';
      Array.prototype.forEach.call(tabs.children, function (b) { b.setAttribute('aria-selected', b.dataset.id === id); });
    }
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      show(b.dataset.id);
      b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
      var y = body.getBoundingClientRect().top + window.scrollY - 140;
      if (window.scrollY > y) window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    });
    show(M[0].id);
  }

  /* rib express */
  var rib = document.getElementById('ribMenu');
  if (rib && window.RIB_EXPRESS) rib.innerHTML = window.RIB_EXPRESS.map(function (g) { return groupHtml(g, 'rgroup'); }).join('');

  /* formulier: preview */
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: het formulier verstuurt niets. Op de echte site komt je bericht direct bij Robuust binnen.';
  });
})();
