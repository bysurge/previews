(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var euro = function (n) { return n.toFixed(2).replace('.', ','); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var LABEL = { kip: 'kip', varken: 'varken', krab: 'krab', biefstuk: 'biefstuk', ossenhaas: 'ossenhaas', inktvis: 'inktvis', vis: 'vis', eend: 'eend', gamba: 'gamba' };

  // Header solid after scrolling
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); document.body.classList.toggle('scrolled', window.scrollY > window.innerHeight * .8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Mobile menu
  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); document.body.classList.remove('nav-open'); }
  });

  // Hero slideshow
  var slides = document.querySelectorAll('.slides img');
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on');
    }, 5500);
  }

  // Menu
  var tabsEl = document.getElementById('menuTabs'), panelsEl = document.getElementById('menuPanels');
  MENU.forEach(function (cat, c) {
    var t = document.createElement('button');
    t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 'tab-' + cat.id;
    t.setAttribute('aria-controls', 'p-' + cat.id); t.setAttribute('aria-selected', c === 0);
    t.tabIndex = c === 0 ? 0 : -1; t.textContent = cat.tab;
    tabsEl.appendChild(t);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', t.id); p.hidden = c !== 0;
    var html = cat.intro ? '<p class="panel-intro">' + esc(cat.intro) + '</p>' : '';
    html += '<ol class="dishes">' + cat.items.map(function (d) {
      var price = '';
      if (d.price != null) price = '<span class="price">' + euro(d.price) + '</span>';
      var chips = '';
      if (d.opts) chips = d.opts.map(function (o) { return '<li>' + LABEL[o] + ' <b>' + euro(PRIJS[o]) + '</b></li>'; }).join('');
      if (d.prices) chips = d.prices.map(function (o) { return '<li>' + esc(o[0]) + ' <b>' + euro(o[1]) + '</b></li>'; }).join('');
      return '<li class="dish' + (d.n ? '' : ' no-n') + '">' +
        (d.n ? '<span class="num">' + d.n + '</span>' : '') +
        '<div class="dish-body"><div class="dish-top"><h4>' + esc(d.name) + '</h4>' + price + '</div>' +
        (d.desc ? '<p>' + esc(d.desc) + '</p>' : '') +
        (chips ? '<ul class="chips" aria-label="Keuze en prijs">' + chips + '</ul>' : '') +
        '</div></li>';
    }).join('') + '</ol>';
    p.innerHTML = html;
    panelsEl.appendChild(p);
  });

  var tabs = tabsEl.querySelectorAll('[role=tab]');
  function select(t, focus) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduce ? 'auto' : 'smooth' });
  }
  tabs.forEach(function (t, n) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) select(tabs[(n + d + tabs.length) % tabs.length], true);
    });
  });

  // Catering
  document.getElementById('catGrid').innerHTML = CATERING.map(function (m) {
    var list = function (arr) { return arr.map(function (x) { return '<li><b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></li>'; }).join(''); };
    return '<article class="cat' + (m.veg ? ' veg' : '') + '">' +
      '<header><h3>' + m.naam + (m.veg ? ' <em>vegetarisch</em>' : '') + '</h3><p class="pp"><b>' + euro(m.pp) + '</b> p.p.</p></header>' +
      '<h4>Voorgerecht</h4><ul>' + list(m.voor) + '</ul>' +
      '<h4>Hoofdgerecht</h4><ul>' + list(m.hoofd) + '</ul></article>';
  }).join('');

  // Highlight today in the opening hours
  var row = document.querySelector('#tijden tr[data-d="' + new Date().getDay() + '"]');
  if (row) row.classList.add('vandaag');
})();
