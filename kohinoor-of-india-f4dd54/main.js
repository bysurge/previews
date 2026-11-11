(function () {
  var K = window.KOH, reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // nav
  var btn = $('.menu-btn'), nav = $('#nav');
  btn.addEventListener('click', function () { var o = btn.getAttribute('aria-expanded') !== 'true'; btn.setAttribute('aria-expanded', o); nav.classList.toggle('open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

  // hero slides
  var sl = document.querySelectorAll('.arch-frame img'), si = 0;
  if (!reduce && sl.length > 1) setInterval(function () { sl[si].classList.remove('on'); si = (si + 1) % sl.length; sl[si].classList.add('on'); }, 5500);

  // tabs helper
  function tabs(tabEl, panelEl, list, render, prefix) {
    tabEl.innerHTML = list.map(function (t, i) {
      return '<button role="tab" id="' + prefix + 't-' + t.id + '" aria-controls="' + prefix + 'p-' + t.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(t.tab) + '</button>';
    }).join('');
    panelEl.innerHTML = list.map(function (t, i) {
      return '<div class="panel" role="tabpanel" id="' + prefix + 'p-' + t.id + '" aria-labelledby="' + prefix + 't-' + t.id + '"' + (i ? ' hidden' : '') + '>' + render(t) + '</div>';
    }).join('');
    var bs = tabEl.querySelectorAll('button');
    function sel(b, focus) {
      bs.forEach(function (x) { var on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $('#' + x.getAttribute('aria-controls')).hidden = !on; });
      if (focus) b.focus();
      if (tabEl.scrollWidth > tabEl.clientWidth) tabEl.scrollTo({ left: b.offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth' });
    }
    bs.forEach(function (b, i) {
      b.addEventListener('click', function () { sel(b); });
      b.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (n) { e.preventDefault(); sel(bs[(i + n + bs.length) % bs.length], true); }
      });
    });
    return function (id) { var b = $('#' + prefix + 't-' + id); if (b) sel(b); };
  }

  function item(i) {
    return '<div class="item"><div class="row"><span class="nm">' + esc(i[0]) + '</span><span class="dots"></span><span class="pr">€ ' + esc(i[1]) + '</span></div>' + (i[2] ? '<p class="ds">' + esc(i[2]) + '</p>' : '') + '</div>';
  }

  function heat(n, label) {
    var s = '<span class="heat h' + n + '" title="' + esc(label) + '">';
    for (var k = 1; k <= 4; k++) s += '<i class="' + (k <= n ? 'on' : '') + '"></i>';
    return s + ' ' + esc(label) + '</span>';
  }

  function builder() {
    var g = '', last = '';
    K.bases.forEach(function (b, i) {
      if (b.g !== last) { g += '<p class="bg">' + b.g + '</p>'; last = b.g; }
      g += '<button type="button" class="base" data-i="' + i + '" aria-pressed="' + (i === 0) + '">' + esc(b.n) + '<span>€ ' + b.p + '</span></button>';
    });
    return '<div class="builder"><div><p class="step-t">1. Kies vlees, vis of vegetarisch</p><div class="bases">' + g + '</div>' +
      '<div class="result" aria-live="polite"><p class="small" style="color:#a9c3c4">Jouw curry</p><p class="r-name" id="r-name"></p><p class="r-price" id="r-price"></p><p class="r-note">Geserveerd met basmatirijst</p></div></div>' +
      '<div><p class="step-t">2. Kies je curry</p><div class="curries">' + K.curries.map(function (c, i) {
        return '<button type="button" class="curry" data-i="' + i + '" aria-pressed="' + (i === 0) + '"><span class="c-top"><b>' + esc(c[0]) + '</b>' + heat(c[1], c[2]) + '</span><p>' + esc(c[3]) + '</p></button>';
      }).join('') + '</div></div></div>';
  }

  function chef() {
    return '<div class="chef"><div class="chef-prices"><p>Vlees <b>€ 32,50</b></p><p>Vis <b>€ 34,50</b></p><p>Vegetarisch <b>€ 30,00</b></p></div>' +
      '<dl><dt>Voorgerecht</dt><dd>Een samenstelling van meerdere voorgerechten</dd><dt>Hoofdgerecht</dt><dd>Een culinaire reis door de Indiase keuken: beleef de smaken van India</dd><dt>Nagerecht</dt><dd>Indiaas dessert of koffie/thee</dd></dl></div>';
  }

  var openMenu = tabs($('#menu-tabs'), $('#menu-panels'), K.menu, function (t) {
    var body = t.builder ? builder() : t.chef ? chef() :
      '<div class="p-groups">' + t.groups.map(function (g) {
        return '<div class="p-group' + (g.items.length > 7 || !g.name ? ' wide' : '') + '">' + (g.name ? '<h3>' + esc(g.name) + '</h3>' : '') + '<div class="items">' + g.items.map(item).join('') + '</div></div>';
      }).join('') + '</div>';
    return (t.intro ? '<p class="p-intro">' + esc(t.intro) + '</p>' : '') + body;
  }, 'm');

  // curry builder state
  var bi = 0, ci = 0;
  function upd() {
    var b = K.bases[bi], c = K.curries[ci];
    $('#r-name').textContent = c[0] + ' met ' + b.n.toLowerCase();
    $('#r-price').textContent = '€ ' + b.p;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.base'), c = e.target.closest('.curry');
    if (b) { bi = +b.dataset.i; document.querySelectorAll('.base').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); upd(); }
    if (c) { ci = +c.dataset.i; document.querySelectorAll('.curry').forEach(function (x) { x.setAttribute('aria-pressed', x === c); }); upd(); }
    var k = e.target.closest('[data-tab]'); if (k) openMenu(k.dataset.tab);
  });
  upd();

  tabs($('#drink-tabs'), $('#drink-panels'), K.drinks, function (t) {
    var huis = t.id === 'huis';
    return (t.intro ? '<p class="d-intro">' + esc(t.intro) + '</p>' : '') + '<div class="' + (t.items.length > 6 ? 'd-grid' : '') + '">' + t.items.map(function (i) {
      return '<div class="d-item"><div class="row"><span class="nm">' + esc(i[0]) + '</span><span class="dots"></span><span class="pr">' + esc(i[1]) + '</span></div>' + (i[2] ? '<p class="ds">' + esc(i[2]) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
  }, 'd');

  // demo forms
  ['#res', '#bday'].forEach(function (s) {
    var f = $(s); f.addEventListener('submit', function (e) { e.preventDefault(); $('.demo-msg', f).hidden = false; });
  });
})();
