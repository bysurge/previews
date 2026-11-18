(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var norm = function (t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };

  // mobiel menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });

  // menu
  var data = window.MENU || [], cats = document.getElementById('cats'), list = document.getElementById('menu-list'), q = document.getElementById('q'), cur = 0;
  var row = function (it) {
    var pr = (it.u ? '<span class="u">' + esc(it.u) + '</span> ' : '') + '€ ' + esc(it.p);
    return '<li><span class="body"><span class="nm">' + esc(it.n) + '</span>' + (it.d ? '<span class="ds">' + esc(it.d) + '</span>' : '') + '</span><span class="pr">' + pr + '</span></li>';
  };
  data.forEach(function (c, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'pill'; b.textContent = c.t; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', function () { cur = i; q.value = ''; render(); });
    cats.appendChild(b);
  });
  function render() {
    var term = norm(q.value.trim()), html = '';
    Array.prototype.forEach.call(cats.children, function (x, j) { x.setAttribute('aria-pressed', !term && j === cur); });
    if (!term) {
      var c = data[cur];
      html = '<h3 class="cat-title">' + esc(c.t) + '</h3>' + (c.note ? '<p class="cat-note">' + esc(c.note) + '</p>' : '') + '<ul class="items">' + c.items.map(row).join('') + '</ul>';
    } else {
      data.forEach(function (c) {
        var h = c.items.filter(function (it) { return norm(it.n + ' ' + it.d).indexOf(term) > -1; });
        if (h.length) html += '<h3 class="cat-title">' + esc(c.t) + '</h3><ul class="items">' + h.map(row).join('') + '</ul>';
      });
      if (!html) html = '<p class="empty">Niets gevonden. Probeer een ander woord, bijvoorbeeld kip, saté of soto.</p>';
    }
    list.innerHTML = html;
  }
  q.addEventListener('input', render); render();

  // reserveren
  var n = document.getElementById('res-n'), t = document.getElementById('res-t');
  for (var i = 1; i <= 10; i++) n.insertAdjacentHTML('beforeend', '<option>' + i + '</option>');
  for (var m = 13 * 60; m <= 20 * 60; m += 15) { var s = ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2); t.insertAdjacentHTML('beforeend', '<option>' + s + '</option>'); }

  Array.prototype.forEach.call(document.querySelectorAll('.demo-form'), function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.form-msg').hidden = false; });
  });
})();
