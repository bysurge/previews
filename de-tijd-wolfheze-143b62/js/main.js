(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';
  var ROMAN = ['XII', 'I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];

  /* Header + mobile menu */
  var bar = document.getElementById('top-bar');
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.nav-toggle');
  function onScroll() { bar.classList.toggle('solid', window.scrollY > 40 || nav.classList.contains('open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); onScroll(); }
  });

  /* Hero slideshow */
  var slides = document.querySelectorAll('.hero-media img');
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 5500);
  }

  /* Clock helpers */
  function el(name, attrs, parent) {
    var n = document.createElementNS(NS, name);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function pt(r, deg) { var a = deg * Math.PI / 180; return [r * Math.sin(a), -r * Math.cos(a)]; }
  function arc(r, a1, a2) {
    var s = pt(r, a1), e = pt(r, a2), sweep = ((a2 - a1) % 360 + 360) % 360;
    return 'M' + s[0].toFixed(2) + ' ' + s[1].toFixed(2) + ' A' + r + ' ' + r + ' 0 ' + (sweep > 180 ? 1 : 0) + ' 1 ' + e[0].toFixed(2) + ' ' + e[1].toFixed(2);
  }
  function hourDeg(h) { return (h % 12) * 30; }
  function face(svg, o) {
    el('circle', { r: o.r, fill: o.fill || 'none', stroke: o.ring, 'stroke-width': o.rw }, svg);
    el('circle', { r: o.r - 44, fill: 'none', stroke: o.ring, 'stroke-width': 1, opacity: .45 }, svg);
    for (var i = 0; i < 60; i++) {
      var big = i % 5 === 0, a = pt(o.r - 4, i * 6), b = pt(o.r - (big ? 13 : 8), i * 6);
      el('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: o.tick, 'stroke-width': big ? 2 : 1 }, svg);
    }
    ROMAN.forEach(function (n, i) {
      var p = pt(o.r - 28, i * 30);
      var t = el('text', { x: p[0], y: p[1], 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': o.fs, fill: o.num }, svg);
      t.textContent = n;
    });
  }

  /* Decorative dial in the hero */
  var hd = document.querySelector('.dial-hero');
  if (hd) face(hd, { r: 100, ring: 'currentColor', rw: 2, tick: 'currentColor', num: 'currentColor', fs: 15 });

  /* Opening hours dial: today's hours as arcs, hands on the current time */
  var DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function openFrom(day) { return (day === 0 || day === 6) ? 10 : 12; }
  function fmt(h) { return (h < 10 ? '0' : '') + h + '.00'; }
  var dial = document.getElementById('dial-hours');
  var nowEl = document.getElementById('now');
  var heroOpen = document.getElementById('hero-open');
  function drawHours() {
    var d = new Date(), day = d.getDay(), t = d.getHours() + d.getMinutes() / 60;
    var from = openFrom(day);
    while (dial.firstChild) dial.removeChild(dial.firstChild);
    el('circle', { r: 116, fill: '#fffaf2' }, dial);
    face(dial, { r: 100, ring: '#6a2430', rw: 2.5, tick: '#6a2430', num: '#6a2430', fs: 13 });
    el('path', { d: arc(111, hourDeg(from), hourDeg(21)), stroke: '#e6ac70', 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' }, dial);
    el('path', { d: arc(100, hourDeg(12), hourDeg(21)), stroke: '#2e4a3d', 'stroke-width': 4, fill: 'none', 'stroke-linecap': 'round' }, dial);
    var lab = el('text', { y: 30, 'text-anchor': 'middle', 'font-size': 9, fill: '#6f5d55', style: 'font-family:Mulish,sans-serif;font-weight:700' }, dial);
    lab.textContent = 'vandaag, ' + DAYS[day];
    var hp = pt(44, (t % 12) * 30), mp = pt(66, d.getMinutes() * 6);
    // Put the day label on the half of the dial with the fewest hands.
    if ((hp[1] > 0) + (mp[1] > 0) > (hp[1] < 0) + (mp[1] < 0)) lab.setAttribute('y', -24);
    el('line', { x1: 0, y1: 0, x2: hp[0], y2: hp[1], stroke: '#3b151b', 'stroke-width': 5, 'stroke-linecap': 'round' }, dial);
    el('line', { x1: 0, y1: 0, x2: mp[0], y2: mp[1], stroke: '#3b151b', 'stroke-width': 3, 'stroke-linecap': 'round' }, dial);
    el('circle', { r: 5, fill: '#e6ac70', stroke: '#3b151b', 'stroke-width': 2 }, dial);

    var msg, open = t >= from && t < 21;
    if (open) msg = t < 12 ? 'Nu open · keuken vanaf 12.00' : 'Nu open · keuken tot 21.00';
    else if (t < from) msg = 'Vandaag open vanaf ' + fmt(from);
    else msg = 'Nu gesloten · morgen open vanaf ' + fmt(openFrom((day + 1) % 7));
    nowEl.textContent = msg;
    if (heroOpen) { heroOpen.textContent = msg; heroOpen.classList.toggle('is-open', open); }
  }
  if (dial) { drawHours(); setInterval(drawHours, 60000); }

  /* Menu: lunch / diner switch + category pills */
  var K = window.KAART, pills = document.getElementById('pills'), panel = document.getElementById('panel');
  var menu3 = document.getElementById('menu3');
  var sw = document.querySelectorAll('.switch button');
  var card = 'lunch', cat = 0;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderPanel() {
    var c = K[card].cats[cat], h = '';
    c.groups.forEach(function (g) {
      var simple = g.items.length > 6 && g.items.every(function (i) { return !i[1]; });
      h += '<div class="grp' + (simple ? ' grid2' : '') + '"><div class="grp-h"><h3>' + esc(g.title) + '</h3>' +
        (g.price ? '<span class="gp">€ ' + g.price + '</span>' : '') + '</div>';
      if (g.note) h += '<p class="grp-note">' + esc(g.note) + '</p>';
      h += '<div class="its">';
      g.items.forEach(function (i) {
        h += '<div class="it"><div class="it-row' + (i[2] ? '' : ' nop') + '"><span class="it-n">' + esc(i[0]) +
          (i[3] ? '<span class="v" title="vegetarisch">V</span>' : '') + '</span>' +
          (i[2] ? '<span class="it-p">' + i[2] + '</span>' : '') + '</div>' +
          (i[1] ? '<p class="it-d">' + esc(i[1]) + '</p>' : '') + '</div>';
      });
      h += '</div></div>';
    });
    panel.innerHTML = h;
    panel.setAttribute('aria-labelledby', 'pill-' + card + '-' + cat);
  }
  function renderPills() {
    pills.innerHTML = '';
    K[card].cats.forEach(function (c, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'pill-' + card + '-' + i;
      b.setAttribute('aria-selected', i === cat); b.textContent = c.name;
      b.addEventListener('click', function () {
        cat = i;
        pills.querySelectorAll('button').forEach(function (x, j) { x.setAttribute('aria-selected', j === i); });
        renderPanel();
      });
      pills.appendChild(b);
    });
    menu3.hidden = card !== 'diner';
  }
  sw.forEach(function (b) {
    b.addEventListener('click', function () {
      card = b.dataset.card; cat = 0;
      sw.forEach(function (x) { x.setAttribute('aria-selected', x === b); });
      renderPills(); renderPanel();
    });
  });
  // In the evening the dinner card opens first.
  if (new Date().getHours() >= 17) { card = 'diner'; sw.forEach(function (x) { x.setAttribute('aria-selected', x.dataset.card === 'diner'); }); }
  renderPills(); renderPanel();

  /* Form: preview only */
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
