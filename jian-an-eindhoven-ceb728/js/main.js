(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Mobiel menu
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  // Menukaart
  var K = window.KAART || {}, kaart = 'afhaal', cur = 0;
  var body = document.getElementById('kaart-body'), cats = document.getElementById('kaart-cats');
  var q = document.getElementById('kaart-q'), count = document.getElementById('kaart-count');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.kaart-tabs [role=tab]'));

  function norm(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function item(it) {
    return '<li class="k-item"><span class="k-nr">' + esc(it[0]) + '</span><span><span class="k-nm">' + esc(it[1]) + '</span>' + (it[2] ? '<span class="k-ds">' + esc(it[2]) + '</span>' : '') + '</span></li>';
  }
  function block(c, items) {
    var wide = items.some(function (it) { return it[2].length > 120; });
    return '<h3 class="k-cat">' + esc(c.t) + '</h3>' + (c.note ? '<p class="k-note">' + esc(c.note) + '</p>' : '') + '<ul class="k-list' + (wide ? ' wide' : '') + '">' + items.map(item).join('') + '</ul>';
  }
  function buildCats() {
    cats.innerHTML = '';
    K[kaart].forEach(function (c, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'pill'; b.textContent = c.t; b.setAttribute('aria-pressed', i === cur);
      b.addEventListener('click', function () {
        cur = i; q.value = ''; render();
        Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', j === i); });
      });
      cats.appendChild(b);
    });
  }
  function render() {
    var data = K[kaart], term = norm(q.value.trim());
    if (!term) {
      body.innerHTML = block(data[cur], data[cur].items);
      count.textContent = ''; cats.classList.remove('dim'); return;
    }
    cats.classList.add('dim');
    var html = '', n = 0, isNum = /^\d+$/.test(term);
    data.forEach(function (c) {
      var hits = c.items.filter(function (it) { return isNum ? it[0] === term || it[0].indexOf(term) === 0 : norm(it[1] + ' ' + it[2]).indexOf(term) > -1; });
      if (hits.length) { n += hits.length; html += block(c, hits); }
    });
    body.innerHTML = html || '<p class="k-empty">Geen gerecht gevonden. Zoek op een nummer (bijv. 86) of een woord (bijv. babi, garnalen).</p>';
    count.textContent = n ? (n === 1 ? '1 gerecht gevonden' : n + ' gerechten gevonden') : '';
  }
  function pick(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; });
    body.setAttribute('aria-labelledby', t.id);
    kaart = t.getAttribute('data-k'); cur = 0; buildCats(); render();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { pick(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; pick(n); n.focus(); e.preventDefault();
    });
  });
  q.addEventListener('input', render);
  if (K.afhaal) { buildCats(); render(); }

  // Formulier verstuurt niets
  var form = document.getElementById('form'), msg = document.getElementById('form-msg');
  form.addEventListener('submit', function (e) { e.preventDefault(); msg.hidden = false; });
})();
