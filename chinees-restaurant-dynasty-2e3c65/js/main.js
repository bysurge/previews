(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Header krijgt achtergrond na scrollen
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Openingstijden vandaag
  var hours = { 0: [15, 21], 1: null, 2: [16, 21], 3: [16, 21], 4: [15, 21], 5: [15, 21], 6: [15, 21] };
  var now = new Date();
  var d = now.getDay();
  var row = document.querySelector('#uren tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var today = document.getElementById('vandaag');
  if (today) {
    var h = hours[d];
    var t = now.getHours() + now.getMinutes() / 60;
    if (!h) today.textContent = 'Vandaag (maandag) zijn wij gesloten. Morgen vanaf 16:00 uur weer open.';
    else if (t < h[0]) today.textContent = 'Vandaag open van ' + h[0] + ':00 tot ' + h[1] + ':00 uur.';
    else if (t < h[1]) today.textContent = 'Nu open, vandaag tot ' + h[1] + ':00 uur.';
    else today.textContent = 'Vandaag waren wij open tot ' + h[1] + ':00 uur.';
    today.classList.add('live');
  }

  // Afhaalkaart
  var data = window.KAART || [];
  var tabs = document.getElementById('kaart-tabs');
  var box = document.getElementById('kaart');
  var zoek = document.getElementById('zoek');
  var current = data.length ? data[0].id : null;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function priceHtml(p) {
    if (p.indexOf('pers.') > -1) {
      return '<span class="price price-multi">' + p.split(' · ').map(function (x) {
        var m = x.match(/^(.*pers\.)\s+(.*)$/);
        return m ? '<span><small>' + esc(m[1]) + '</small> € ' + esc(m[2]) + '</span>' : esc(x);
      }).join('') + '</span>';
    }
    if (p.indexOf('vanaf') === 0) return '<span class="price"><small>vanaf</small> € ' + esc(p.replace('vanaf ', '')) + '</span>';
    return '<span class="price">€ ' + esc(p) + '</span>';
  }

  function itemHtml(it) {
    return '<li class="dish"><span class="nr">' + esc(it[0]) + '</span><span class="dish-body"><span class="dish-name">' + esc(it[1]) + '</span>' +
      (it[2] ? '<span class="dish-desc">' + esc(it[2]) + '</span>' : '') + '</span>' + priceHtml(it[3]) + '</li>';
  }

  function renderTabs() {
    tabs.innerHTML = data.map(function (c) {
      return '<button type="button" role="tab" id="tab-' + c.id + '" aria-controls="kaart" aria-selected="' + (c.id === current) + '" data-id="' + c.id + '">' + esc(c.name) + '</button>';
    }).join('');
  }

  function markTabs() {
    [].forEach.call(tabs.querySelectorAll('[role=tab]'), function (b) { var on = b.getAttribute('data-id') === current; b.setAttribute('aria-selected', on ? 'true' : 'false'); b.tabIndex = on ? 0 : -1; });
  }

  function renderCat() {
    var c = data.filter(function (x) { return x.id === current; })[0];
    if (!c) return;
    box.setAttribute('aria-labelledby', 'tab-' + c.id);
    box.innerHTML = '<h3 class="cat-title">' + esc(c.name) + '</h3><ul class="dishes">' + c.items.map(itemHtml).join('') + '</ul>';
  }

  function renderSearch(q) {
    var ql = q.toLowerCase();
    var hits = [];
    data.forEach(function (c) {
      c.items.forEach(function (it) {
        if (it[0].toLowerCase() === ql || (it[1] + ' ' + it[2]).toLowerCase().indexOf(ql) > -1) hits.push(it);
      });
    });
    box.removeAttribute('aria-labelledby');
    box.innerHTML = hits.length
      ? '<h3 class="cat-title">' + hits.length + (hits.length === 1 ? ' gerecht' : ' gerechten') + ' met "' + esc(q) + '"</h3><ul class="dishes">' + hits.map(itemHtml).join('') + '</ul>'
      : '<p class="none">Geen gerecht gevonden met "' + esc(q) + '". Probeer een ander woord, of bel ons: 0315-681011.</p>';
  }

  if (tabs && box) {
    renderTabs();
    markTabs();
    renderCat();
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('[role=tab]');
      if (!b) return;
      current = b.getAttribute('data-id');
      if (zoek) zoek.value = '';
      tabs.classList.remove('dim');
      markTabs();
      renderCat();
      var nb = document.getElementById('tab-' + current);
      if (nb && nb.scrollIntoView) nb.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    tabs.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var ids = data.map(function (c) { return c.id; });
      var i = ids.indexOf(current) + (e.key === 'ArrowRight' ? 1 : -1);
      current = ids[(i + ids.length) % ids.length];
      markTabs(); renderCat();
      document.getElementById('tab-' + current).focus();
    });
    if (zoek) zoek.addEventListener('input', function () {
      var q = zoek.value.trim();
      if (q.length) { tabs.classList.add('dim'); renderSearch(q); }
      else { tabs.classList.remove('dim'); renderCat(); }
    });
  }
})();
