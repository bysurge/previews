(function () {
  // mobiel menu
  var knop = document.getElementById('menuknop');
  var nav = document.getElementById('nav');
  function zetMenu(open) {
    nav.classList.toggle('open', open);
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    knop.querySelector('b').textContent = open ? 'Sluiten' : 'Menu';
  }
  knop.addEventListener('click', function () { zetMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') zetMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zetMenu(false); });

  // vandaag open?
  var tijden = { 0: [12, 21.5], 1: [16, 21.5], 2: null, 3: null, 4: [16, 21.5], 5: [16, 21.5], 6: [12, 21.5] };
  var nu = new Date(), dag = nu.getDay(), uur = nu.getHours() + nu.getMinutes() / 60;
  var rij = document.querySelector('#tijden tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag');
  var v = document.getElementById('vandaag');
  var t = tijden[dag];
  if (!t) v.textContent = 'Vandaag gesloten. Hinthamereinde 34, Den Bosch';
  else if (uur >= t[0] && uur < t[1]) { v.textContent = 'Nu open tot 21.30 uur. Hinthamereinde 34, Den Bosch'; v.classList.add('open'); }
  else if (uur < t[0]) v.textContent = 'Vandaag open vanaf ' + (t[0] === 12 ? '12.00' : '16.00') + ' uur. Hinthamereinde 34, Den Bosch';
  else v.textContent = 'Vandaag open tot 21.30 uur. Hinthamereinde 34, Den Bosch';

  // kaart
  var K = window.KAART;
  var modus = 'restaurant', tafelIdx = 2, rubriek = null;
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };

  function tekenTafels(alleenPaneel) {
    var lijst = K[modus].rijsttafels;
    var keuze = document.getElementById('rijst-keuze');
    if (alleenPaneel) keuze.querySelectorAll('.rijst-tab').forEach(function (b) { b.setAttribute('aria-selected', +b.dataset.i === tafelIdx ? 'true' : 'false'); });
    else keuze.innerHTML = lijst.map(function (r, i) {
      return '<button type="button" class="rijst-tab" role="tab" id="rt-' + i + '" aria-selected="' + (i === tafelIdx) + '" data-i="' + i + '">' +
        '<span><b>' + esc(r.naam) + '</b><small>' + esc(r.extra) + '</small></span><span>€ ' + r.prijs + '</span></button>';
    }).join('');
    var r = lijst[tafelIdx];
    var paneel = document.getElementById('rijst-tafel');
    paneel.setAttribute('aria-labelledby', 'rt-' + tafelIdx);
    paneel.innerHTML = '<h3>Rijsttafel ' + esc(r.naam) + '</h3>' +
      '<p class="tafel-prijs">€ ' + r.prijs + ' <small>' + esc(r.extra) + (modus === 'afhalen' ? ', afhaalprijs' : '') + '</small></p>' +
      '<ul class="schaaltjes">' + r.items.map(function (it) { return '<li><b>' + esc(it[0]) + '</b><span>' + esc(it[1]) + '</span></li>'; }).join('') + '</ul>';
  }
  document.getElementById('rijst-keuze').addEventListener('click', function (e) {
    var b = e.target.closest('.rijst-tab'); if (!b) return;
    tafelIdx = +b.dataset.i; tekenTafels(true);
  });

  function tekenKaart(alleenPaneel) {
    var rubs = K[modus].rubrieken;
    if (!rubriek || !rubs.some(function (r) { return r.id === rubriek; })) rubriek = rubs[0].id;
    if (alleenPaneel) document.querySelectorAll('#kaart-tabs .tab').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.id === rubriek ? 'true' : 'false'); });
    else document.getElementById('kaart-tabs').innerHTML = rubs.map(function (r) {
      return '<button type="button" class="tab" role="tab" id="tab-' + r.id + '" aria-selected="' + (r.id === rubriek) + '" data-id="' + r.id + '">' + esc(r.naam) + '</button>';
    }).join('');
    var r = rubs.filter(function (x) { return x.id === rubriek; })[0];
    var p = document.getElementById('kaart-paneel');
    p.setAttribute('aria-labelledby', 'tab-' + r.id);
    p.innerHTML = (r.noot ? '<p class="kaart-noot">' + esc(r.noot) + '</p>' : '') +
      '<ul class="gerechten">' + r.items.map(function (it) {
        return '<li><b>' + esc(it[0]) + '</b><span class="prijs">€ ' + it[1] + '</span>' + (it[2] ? '<span class="oms">' + esc(it[2]) + '</span>' : '') + '</li>';
      }).join('') + '</ul>';
    document.getElementById('kaart-intro').textContent = modus === 'afhalen'
      ? 'De afhaalkaart, met afhaalprijzen. Bel vooraf, dan staat uw bestelling klaar.'
      : 'Alle gerechten van de kaart in het restaurant. Prijzen in euro’s.';
  }
  document.getElementById('kaart-tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    rubriek = b.dataset.id; tekenKaart(true);
  });

  function zetModus(m) {
    modus = m;
    document.querySelectorAll('.schakel-knop').forEach(function (b) {
      var aan = b.dataset.modus === m;
      b.classList.toggle('is-aan', aan); b.setAttribute('aria-pressed', aan ? 'true' : 'false');
    });
    tekenTafels(); tekenKaart();
  }
  document.querySelectorAll('[data-modus]').forEach(function (b) {
    b.addEventListener('click', function () {
      zetModus(b.dataset.modus);
      if (b.dataset.naar) document.getElementById(b.dataset.naar).scrollIntoView();
    });
  });

  tekenTafels(); tekenKaart();
})();
