(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header */
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    top.classList.toggle('nav-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); top.classList.remove('nav-open'); }
  });

  /* hero slideshow */
  var slides = document.querySelectorAll('.hero-slides img'), si = 0;
  if (!reduce && slides.length > 1) {
    setInterval(function () {
      slides[si].classList.remove('on'); si = (si + 1) % slides.length; slides[si].classList.add('on');
    }, 6000);
  }

  /* open / closed (ma gesloten, di-vr 16-20, za-zo 12-20:30) */
  var hours = { 0: [12, 0, 20, 30], 1: null, 2: [16, 0, 20, 0], 3: [16, 0, 20, 0], 4: [16, 0, 20, 0], 5: [16, 0, 20, 0], 6: [12, 0, 20, 30] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmt(h) { return pad(h[0]) + ':' + pad(h[1]); }
  var now = new Date(), d = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var st = document.getElementById('status'), stt = document.getElementById('statusText');
  var h = hours[d];
  if (h && mins >= h[0] * 60 + h[1] && mins < h[2] * 60 + h[3]) {
    st.classList.add('open'); stt.textContent = 'Nu open, tot ' + fmt([h[2], h[3]]);
  } else if (h && mins < h[0] * 60 + h[1]) {
    stt.textContent = 'Vandaag open vanaf ' + fmt(h);
  } else {
    for (var i = 1; i < 8; i++) {
      var nd = (d + i) % 7;
      if (hours[nd]) { stt.textContent = 'Gesloten, ' + (i === 1 ? 'morgen' : names[nd]) + ' weer open vanaf ' + fmt(hours[nd]); break; }
    }
  }
  var row = document.querySelector('#hoursTable tr[data-day="' + d + '"]');
  if (row) row.classList.add('today');

  /* menu */
  var M = window.SUUS_MENUS, current = 'restaurant', currentCat = null;
  var chips = document.getElementById('chips'), panel = document.getElementById('menuPanel');
  var intro = document.getElementById('menuIntro'), foot = document.getElementById('menuFoot'), pdf = document.getElementById('menuPdf');
  var search = document.getElementById('menuSearch');

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function hl(s, q) {
    s = esc(s); if (!q) return s;
    var i = s.toLowerCase().indexOf(esc(q).toLowerCase());
    return i < 0 ? s : s.slice(0, i) + '<mark>' + s.slice(i, i + q.length) + '</mark>' + s.slice(i + q.length);
  }
  function dishHtml(it, q) {
    if (it[0] === 'h') return '<li class="dish-h"><b>' + esc(it[1]) + '</b>' + (it[2] ? '<p>' + esc(it[2]) + '</p>' : '') + '</li>';
    var price = it[3] ? '€ ' + it[3] : '';
    return '<li class="dish"><span class="nr">' + hl(it[0], q) + '</span><span class="nm">' + hl(it[1], q) + '</span><span class="pr">' + price + '</span>' +
      (it[2] ? '<span class="ds">' + hl(it[2], q) + '</span>' : '') + '</li>';
  }
  function catHtml(c, items, q) {
    return '<div class="cat-block"><div class="cat-title"><h3>' + esc(c.name) + '</h3></div>' +
      (c.note ? '<p class="cat-note">' + esc(c.note) + '</p>' : '') +
      '<ul class="dishes-list">' + items.map(function (it) { return dishHtml(it, q); }).join('') + '</ul></div>';
  }
  function renderChips() {
    chips.innerHTML = M[current].cats.map(function (c) {
      return '<button role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === currentCat) + '">' + esc(c.name) + '</button>';
    }).join('');
  }
  function renderCat() {
    var c = M[current].cats.filter(function (x) { return x.id === currentCat; })[0];
    panel.innerHTML = catHtml(c, c.items, '');
  }
  function renderSearch(q) {
    var ql = q.toLowerCase(), out = '';
    M[current].cats.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return it[0] !== 'h' && (it[0].toLowerCase() === ql || (it[1] + ' ' + (it[2] || '')).toLowerCase().indexOf(ql) > -1);
      });
      if (hits.length) out += catHtml(c, hits, q);
    });
    panel.innerHTML = out || '<p class="no-hits">Geen gerecht gevonden met "' + esc(q) + '". Probeer een ander woord of nummer.</p>';
    Array.prototype.forEach.call(chips.children, function (b) { b.setAttribute('aria-selected', 'false'); });
  }
  function setMenu(key, cat) {
    current = key;
    currentCat = cat || M[key].cats[0].id;
    document.querySelectorAll('.switch button').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.menu === key); });
    intro.textContent = M[key].intro;
    foot.textContent = M[key].foot;
    pdf.href = M[key].pdf;
    search.value = '';
    renderChips(); renderCat();
  }
  document.querySelectorAll('.switch button').forEach(function (b) {
    b.addEventListener('click', function () { setMenu(b.dataset.menu); });
  });
  chips.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    currentCat = b.dataset.cat; search.value = '';
    Array.prototype.forEach.call(chips.children, function (x) { x.setAttribute('aria-selected', x === b); });
    renderCat();
    var y = panel.getBoundingClientRect().top + window.scrollY - 140;
    if (window.scrollY > y) window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  });
  search.addEventListener('input', function () {
    var q = search.value.trim();
    if (q.length) renderSearch(q); else { renderChips(); renderCat(); }
  });
  document.querySelectorAll('a[data-menu]').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(a.dataset.menu, a.dataset.cat); });
  });
  setMenu('restaurant');

  /* form: preview only */
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Dit is een voorbeeld: het formulier verstuurt niets. Op de echte site komt uw bericht direct bij Suus’ Garden binnen.';
  });
})();
