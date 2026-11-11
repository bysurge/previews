(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MENU = window.MENU || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var euro = function (n) { return '€ ' + n.toFixed(2).replace('.', ','); };
  var num = function (p) { return parseFloat(String(p).replace(',', '.')) || 0; };

  // mobile nav
  var btn = $('.menu-btn'), nav = $('#nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

  // hero slideshow
  var slides = document.querySelectorAll('.slides img'), si = 0;
  if (!reduce && slides.length > 1) setInterval(function () {
    slides[si].classList.remove('on'); si = (si + 1) % slides.length; slides[si].classList.add('on');
  }, 5200);

  // today + hours
  var HOURS = { 0: [12, 22], 1: [16, 22], 2: [16, 22], 3: null, 4: [16, 22], 5: [16, 22], 6: [16, 22] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('now');
  var t = $('#today'), hr = HOURS[d];
  if (!hr) t.textContent = 'Vandaag (woensdag) gesloten, behalve op feestdagen.';
  else if (h >= hr[0] && h < hr[1]) { t.textContent = 'Nu open tot 22.00 uur, keuken tot 21.00 uur.'; t.classList.add('open'); }
  else if (h < hr[0]) t.textContent = 'Vandaag open van ' + hr[0] + '.00 tot 22.00 uur.';
  else t.textContent = 'Nu gesloten. Bekijk de openingstijden onderaan.';

  // menu render
  var cats = $('#cats'), dishes = $('#dishes'), byNr = {};
  function dishHtml(i) {
    byNr[i.nr] = i;
    var extra = '';
    if (i.lines) extra += '<ul class="lines">' + i.lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul>';
    if (i.groups) extra += i.groups.map(function (g) { return '<div class="grp"><b>' + esc(g[0]) + '</b>' + g[1].map(esc).join(' · ') + '</div>'; }).join('');
    if (i.choices) extra += '<ol class="choices">' + i.choices.map(function (c, k) { return '<li><span>' + String(k + 1).padStart(2, '0') + '</span>' + esc(c) + '</li>'; }).join('') + '</ol>';
    return '<div class="dish" data-nr="' + esc(i.nr) + '" data-s="' + esc((i.nr + ' ' + i.name + ' ' + (i.desc || '') + ' ' + (i.lines || []).join(' ')).toLowerCase()) + '">' +
      '<span class="nr">' + esc(i.nr) + '</span>' +
      '<span class="nm">' + esc(i.name) + (i.desc ? '<span class="ds">' + esc(i.desc) + '</span>' : '') + extra + '</span>' +
      '<span class="pr">€ ' + esc(i.price) + '</span>' +
      '<button class="add-btn" type="button" data-nr="' + esc(i.nr) + '" aria-label="' + esc(i.name) + ' op bestellijst">+</button></div>';
  }
  cats.innerHTML = MENU.map(function (c) { return '<a href="#cat-' + c.id + '" data-id="' + c.id + '">' + esc(c.name) + '<small>' + c.items.length + '</small></a>'; }).join('');
  dishes.innerHTML = MENU.map(function (c) {
    return '<div class="cat-block" id="cat-' + c.id + '"><h3>' + esc(c.name) + (c.rice ? '<small>met witte rijst</small>' : '') + '</h3>' + c.items.map(dishHtml).join('') + '</div>';
  }).join('') + '<p class="no-res" hidden>Geen gerecht gevonden. Probeer een ander woord of nummer.</p>';

  // keep the current category visible in the list
  var links = cats.querySelectorAll('a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('cur', 'cat-' + a.dataset.id === e.target.id); });
        var cur = cats.querySelector('.cur');
        if (cur && cats.scrollWidth > cats.clientWidth) cats.scrollTo({ left: cur.offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth' });
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    document.querySelectorAll('.cat-block').forEach(function (b) { io.observe(b); });
  }

  // search
  var q = $('#q');
  q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase(), any = false;
    document.querySelectorAll('.cat-block').forEach(function (b) {
      var vis = 0;
      b.querySelectorAll('.dish').forEach(function (el) {
        var ok = !v || el.dataset.s.indexOf(v) > -1 || el.dataset.nr.toLowerCase() === v;
        el.hidden = !ok; el.classList.toggle('hit', !!v && ok); if (ok) vis++;
      });
      b.hidden = !vis; if (vis) any = true;
    });
    $('.no-res').hidden = any;
  });

  // order list (stays in this browser only)
  var KEY = 'jg-bestellijst', list = {};
  try { list = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { list = {}; }
  var tray = $('#tray'), panel = $('#list');
  function save() { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} }
  function render() {
    var nrs = Object.keys(list).filter(function (n) { return byNr[n] && list[n] > 0; }), count = 0, total = 0;
    $('#list-items').innerHTML = nrs.map(function (n) {
      var i = byNr[n], q = list[n]; count += q; total += q * num(i.price);
      return '<li><span class="nr">' + esc(n) + '</span><span>' + esc(i.name) + '<span class="qty"><button type="button" data-d="-1" data-nr="' + esc(n) + '" aria-label="Eén minder">−</button><span>' + q + '×</span><button type="button" data-d="1" data-nr="' + esc(n) + '" aria-label="Eén meer">+</button></span></span><span class="lp">' + euro(q * num(i.price)) + '</span></li>';
    }).join('');
    $('#list-empty').hidden = nrs.length > 0;
    $('#list-total').textContent = euro(total);
    $('#tray-n').textContent = count; $('#tray-t').textContent = euro(total);
    tray.hidden = count === 0;
  }
  function add(nr) {
    list[nr] = (list[nr] || 0) + 1; save(); render();
    tray.classList.remove('bump'); void tray.offsetWidth; tray.classList.add('bump');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.add-btn, .month .add');
    if (a) { add(a.dataset.nr); a.classList.add('done'); setTimeout(function () { a.classList.remove('done'); }, 600); }
    var qb = e.target.closest('.qty button');
    if (qb) { list[qb.dataset.nr] = Math.max(0, (list[qb.dataset.nr] || 0) + +qb.dataset.d); if (!list[qb.dataset.nr]) delete list[qb.dataset.nr]; save(); render(); }
    if (e.target.closest('#tray, .open-list')) openList();
    if (e.target.closest('.x') || e.target === panel) closeList();
  });
  var last;
  function openList() { last = document.activeElement; panel.hidden = false; $('.x', panel).focus(); }
  function closeList() { panel.hidden = true; if (last) last.focus(); }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) closeList(); });
  $('#print').addEventListener('click', function () { window.print(); });
  $('#clear').addEventListener('click', function () { list = {}; save(); render(); });
  render();

  // demo form
  $('#res').addEventListener('submit', function (e) { e.preventDefault(); $('#res .demo-msg').hidden = false; });
})();
