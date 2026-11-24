(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Header + mobile menu
  var bar = document.getElementById('top-bar');
  var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); });
  });

  // Open now? (di t/m zo 16:00-20:30, maandag dicht)
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var dot = document.getElementById('open-dot'), txt = document.getElementById('open-text');
  if (d !== 1) {
    if (m >= 960 && m < 1230) { dot.classList.add('open'); txt.textContent = 'Nu open tot 20:30'; }
    else if (m < 960) { txt.textContent = 'Vandaag open van 16:00 tot 20:30'; }
  }
  var rows = document.querySelectorAll('.hours tr');
  var idx = d === 1 ? 0 : d === 0 ? 2 : 1;
  if (rows[idx]) rows[idx].classList.add('today');

  // Maandmenu: alleen tonen tot en met de laatste dag
  var mm = document.getElementById('maandmenu');
  if (mm && new Date() > new Date(mm.getAttribute('data-until') + 'T23:59:59')) mm.hidden = true;

  // Afhaalkaart
  var data = window.KAART || [], list = document.getElementById('k-list'), cats = document.getElementById('k-cats'), q = document.getElementById('k-q');
  var cur = 0;
  data.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'cat'; b.textContent = c.t; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () {
      cur = i; q.value = ''; render();
      Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); });
    });
    cats.appendChild(b);
  });
  var row = function (it) {
    return '<li class="k-item"><span class="k-nr">' + esc(it[0]) + '</span><span><span class="k-nm">' + esc(it[1]) + '</span>' +
      (it[2] ? '<span class="k-ds">' + esc(it[2]) + '</span>' : '') + '</span><span class="k-pr">€ ' + esc(it[3]) + '</span></li>';
  };
  var block = function (c, items) {
    return '<h3 class="k-cat">' + esc(c.t) + '</h3>' + (c.note ? '<p class="k-note">' + esc(c.note) + '</p>' : '') + '<ul class="k-ul">' + items.map(row).join('') + '</ul>';
  };
  var norm = function (t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  function render() {
    var term = norm(q.value.trim());
    if (!term) { cats.classList.remove('dim'); list.innerHTML = block(data[cur], data[cur].items); return; }
    cats.classList.add('dim');
    var html = '';
    data.forEach(function (c) {
      var hits = c.items.filter(function (it) {
        return norm(it[0]) === term || norm(it[1] + ' ' + it[2]).indexOf(term) > -1;
      });
      if (hits.length) html += block({ t: c.t }, hits);
    });
    list.innerHTML = html || '<p class="k-empty">Geen gerecht gevonden. Zoek op een nummer (bijvoorbeeld 97) of een woord (bijvoorbeeld babi of garnalen).</p>';
  }
  q.addEventListener('input', render);
  render();
})();
