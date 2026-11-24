(function () {
  // Mobile menu
  var tg = document.querySelector('.burger'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var o = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Today in the opening hours
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
  var rest = document.querySelector('[data-hours="rest"]');
  if (rest) rest.textContent = 'vandaag ' + (d === 0 || d === 6 ? '16:00' : '17:00') + ' - 22:00';

  // Takeaway menu
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderMenu(panel, cats) {
    var id = panel.id;
    var chips = '<div class="cats" role="tablist" aria-label="Categorieën">' + cats.map(function (c, i) {
      return '<button type="button" role="tab" id="' + id + '-t' + i + '" aria-controls="' + id + '-c' + i + '" aria-selected="' + (i === 0) + '">' + esc(c.t) + '</button>';
    }).join('') + '</div>';
    var lists = cats.map(function (c, i) {
      return '<div class="cat-list" role="tabpanel" id="' + id + '-c' + i + '" aria-labelledby="' + id + '-t' + i + '"' + (i ? ' hidden' : '') + '>' +
        '<h3>' + esc(c.t) + '</h3>' + (c.note ? '<p class="cl-note">' + esc(c.note) + '</p>' : '') +
        '<ul>' + c.items.map(function (it) {
          var veg = / \(V\)$/.test(it[1]); var name = it[1].replace(/ \(V\)$/, '');
          return '<li><span class="nr">' + it[0] + '</span><span class="dish"><span class="dn">' + esc(name) + (veg ? ' <abbr class="v" title="vegetarisch">V</abbr>' : '') + '</span>' +
            (it[2] ? '<span class="dd">' + esc(it[2]) + '</span>' : '') + '</span><span class="pr">€ ' + it[3] + '</span></li>';
        }).join('') + '</ul></div>';
    }).join('');
    panel.innerHTML = chips + lists;
    var btns = panel.querySelectorAll('.cats [role=tab]');
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () {
        btns.forEach(function (x, j) { x.setAttribute('aria-selected', i === j); document.getElementById(id + '-c' + j).hidden = i !== j; });
        b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      });
    });
  }
  if (window.PAUW_MENU) {
    document.querySelectorAll('[data-menu]').forEach(function (p) { renderMenu(p, window.PAUW_MENU[p.getAttribute('data-menu')]); });
  }
  var sw = document.querySelectorAll('.kaart-switch [role=tab]'), note = document.querySelector('[data-note]');
  sw.forEach(function (b) {
    b.addEventListener('click', function () {
      sw.forEach(function (x) { var on = x === b; x.setAttribute('aria-selected', on); document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
      note.hidden = b.id !== 'tab-chinees';
    });
  });
})();
