(function () {
  var K = window.KAART || [];
  var sheet = document.getElementById('sheet');
  var cats = document.getElementById('cats');
  var q = document.getElementById('q');
  var count = document.getElementById('count');
  var active = 'alle';

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // category buttons
  var all = document.createElement('button');
  all.type = 'button'; all.textContent = 'Alles'; all.dataset.cat = 'alle'; all.setAttribute('aria-pressed', 'true');
  cats.appendChild(all);
  K.forEach(function (c) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = c.t; b.dataset.cat = c.id; b.setAttribute('aria-pressed', 'false');
    cats.appendChild(b);
  });

  // sheet
  sheet.innerHTML = K.map(function (c) {
    return '<section class="cat" data-cat="' + c.id + '"><h3>' + esc(c.t) + '</h3><ul>' +
      c.items.map(function (d) {
        return '<li data-s="' + esc((d[0] + ' ' + d[1] + ' ' + d[3]).toLowerCase()) + '">' +
          '<span class="nr">' + d[0] + '</span>' +
          '<span class="dish"><span class="name">' + esc(d[1]) + '</span>' +
          (d[3] ? '<span class="desc">' + esc(d[3]) + '</span>' : '') + '</span>' +
          '<span class="price">€ ' + d[2] + '</span></li>';
      }).join('') + '</ul></section>';
  }).join('');

  function apply() {
    var term = (q.value || '').trim().toLowerCase();
    var shown = 0;
    sheet.querySelectorAll('.cat').forEach(function (sec) {
      var catOk = active === 'alle' || sec.dataset.cat === active;
      // when searching across "alles", skip the "populair" duplicates
      if (term && active === 'alle' && sec.dataset.cat === 'populair') catOk = false;
      var any = 0;
      sec.querySelectorAll('li').forEach(function (li) {
        var ok = catOk && (!term || li.dataset.s.indexOf(term) !== -1 || li.querySelector('.nr').textContent.toLowerCase() === term);
        li.hidden = !ok; if (ok) any++;
      });
      sec.hidden = !any; shown += any;
    });
    count.textContent = term ? (shown ? shown + ' gerecht' + (shown === 1 ? '' : 'en') + ' gevonden' : 'Niets gevonden. Probeer een ander woord of nummer.') : '';
  }

  function setCat(id) {
    active = id;
    cats.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.cat === id)); });
    apply();
  }
  cats.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    setCat(b.dataset.cat);
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
  q.addEventListener('input', apply);
  document.querySelectorAll('a[data-cat]').forEach(function (a) {
    a.addEventListener('click', function () { q.value = ''; setCat(a.dataset.cat); });
  });
  apply();

  // gluten table
  var R = { S: 'Sojasaus en oestersaus', O: 'Kruisbesmetting gluten door olie', B: 'Babi pangang saus bevat gluten', F: 'Foe Yong Hai saus bevat gluten' };
  var rows = document.getElementById('gluten-rows');
  rows.innerHTML = (window.GLUTEN || []).map(function (g) {
    var why = g[2].split('').map(function (k) { return R[k]; }).join('<br>') || '&nbsp;';
    return '<tr><td>' + g[0] + '</td><td>' + esc(g[1]) + '</td><td>' + why + '</td></tr>';
  }).join('');

  // today
  var d = new Date().getDay();
  var today = document.getElementById('today');
  var row = document.querySelector('#hours [data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  if (today) today.textContent = d === 2 ? 'Vandaag (dinsdag) zijn wij gesloten. Morgen weer open vanaf 16.00 uur.' : 'Vandaag open van 16.00 tot 21.00 uur';

  // nav
  var tog = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  tog.addEventListener('click', function () {
    var open = tog.getAttribute('aria-expanded') === 'true';
    tog.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tog.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // floating call button after the hero
  function onScroll() { document.body.classList.toggle('scrolled', window.scrollY > 520); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // form
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
