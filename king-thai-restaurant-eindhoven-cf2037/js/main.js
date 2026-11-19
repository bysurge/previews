(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var kroon = function (cls) { return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' aria-hidden="true"><use href="#kroon"/></svg>'; };

  // Kroonbanden: goud, met een enkele rode kroon (zoals in hun eigen motief)
  Array.prototype.forEach.call(document.querySelectorAll('.kronen'), function (b) {
    var n = 70, html = '';
    for (var i = 0; i < n; i++) html += kroon(i === 7 ? 'rood' : '');
    b.innerHTML = html;
  });

  // Menukaart
  var K = window.KAART || {};
  var uitleg = {
    restaurant: '',
    afhaal: 'Bel je bestelling door op 040-7370207. Op elke bestelling boven de 20 euro krijg je 10% korting.',
    snack: 'Thaise snacks in ons Take Away Café, St. Bonifaciuslaan 7.'
  };
  var namen = function (t) { var s = t.toLowerCase(); return s.charAt(0).toUpperCase() + s.slice(1); };
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.kaart-tabs [role=tab]'));
  var gangen = document.getElementById('gangen'), panel = document.getElementById('kaart-panel'), ul = document.getElementById('kaart-uitleg');
  var huidig = 'restaurant', gang = 0;

  function toonGang() {
    var c = K[huidig][gang];
    panel.innerHTML = '<h3 class="gang-titel">' + kroon() + esc(namen(c.t)) + '</h3><ul class="gerechten">' + c.items.map(function (it) {
      return '<li class="gerecht"><div class="gerecht-kop"><span class="gerecht-naam">' + esc(it.n) + '</span><span class="gerecht-prijs">€ ' + esc(it.p) + '</span></div>' +
        (it.d ? '<p class="gerecht-ds">' + esc(it.d) + '</p>' : '') + (it.f ? '<p class="gerecht-noot">* ' + esc(it.f) + '</p>' : '') + '</li>';
    }).join('') + '</ul>';
    Array.prototype.forEach.call(gangen.children, function (b, j) { b.setAttribute('aria-pressed', j === gang); });
  }
  function kies(k) {
    huidig = k; gang = 0;
    tabs.forEach(function (t) { var on = t.dataset.kaart === k; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; if (on) panel.setAttribute('aria-labelledby', t.id); });
    ul.textContent = uitleg[k] || '';
    gangen.innerHTML = '';
    gangen.hidden = K[k].length < 2;
    K[k].forEach(function (c, i) {
      var b = document.createElement('button'); b.type = 'button'; b.textContent = namen(c.t);
      b.addEventListener('click', function () { gang = i; toonGang(); });
      gangen.appendChild(b);
    });
    toonGang();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { kies(t.dataset.kaart); });
    t.addEventListener('keydown', function (e) { var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return; var n = tabs[(i + d + tabs.length) % tabs.length]; kies(n.dataset.kaart); n.focus(); e.preventDefault(); });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-open]'), function (a) {
    a.addEventListener('click', function () { kies(a.getAttribute('data-open')); });
  });
  if (K.restaurant) kies('restaurant');

  // Reserveren (voorbeeld)
  var f = document.getElementById('res-form');
  f.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('res-msg').hidden = false; });

  // Navigatie
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  var zet = function (o) { tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); };
  tg.addEventListener('click', function () { zet(tg.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') zet(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zet(false); });
})();
