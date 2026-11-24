(function () {
  // Mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function closeNav() { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  // Menukaart met tabs
  var data = window.KOPI_MENU || [];
  var tabs = document.getElementById('menu-tabs');
  var panels = document.getElementById('menu-panels');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function icons(f) {
    var h = '';
    if (f.v) h += '<svg class="ico ico-v" role="img" aria-label="vegetarisch"><use href="#i-leaf"/></svg>';
    if (f.g) h += '<svg class="ico ico-g" role="img" aria-label="glutenvrij"><use href="#i-gf"/></svg>';
    if (f.p) {
      h += '<span class="chilis" role="img" aria-label="' + (f.p === 2 ? 'pittig' : 'mild pittig') + '">';
      for (var i = 0; i < f.p; i++) h += '<svg class="ico ico-p" aria-hidden="true"><use href="#i-chili"/></svg>';
      h += '</span>';
    }
    return h;
  }
  data.forEach(function (cat, n) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.id = 'tab-' + cat.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'panel-' + cat.id);
    b.setAttribute('aria-selected', n === 0 ? 'true' : 'false');
    b.tabIndex = n === 0 ? 0 : -1;
    b.textContent = cat.naam;
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.className = 'panel';
    p.id = 'panel-' + cat.id;
    p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id);
    if (n !== 0) p.hidden = true;
    var h = '<ul class="dishes">';
    cat.items.forEach(function (it) {
      h += '<li class="dish"><div class="dish-top"><span class="dish-naam">' + esc(it[0]) + '</span>' +
        '<span class="dish-ico">' + icons(it[3] || {}) + '</span>' +
        '<span class="dish-dots" aria-hidden="true"></span><span class="dish-prijs">' + esc(it[1]) + '</span></div>' +
        (it[2] ? '<p class="dish-desc">' + esc(it[2]) + '</p>' : '') + '</li>';
    });
    h += '</ul>';
    if (cat.noot) h += '<p class="panel-noot">' + esc(cat.noot) + '</p>';
    p.innerHTML = h;
    panels.appendChild(p);
  });
  var allTabs = Array.prototype.slice.call(tabs.querySelectorAll('.tab'));
  function select(b, focus) {
    allTabs.forEach(function (t) {
      var on = t === b;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) b.focus();
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) select(b); });
  tabs.addEventListener('keydown', function (e) {
    var i = allTabs.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); select(allTabs[(i + 1) % allTabs.length], true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); select(allTabs[(i - 1 + allTabs.length) % allTabs.length], true); }
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var b = document.getElementById('tab-' + a.getAttribute('data-open-tab'));
      if (b) select(b);
    });
  });

  // Openingstijden: vandaag markeren
  var uren = { 1: [12, 20], 2: [12, 20], 3: [12, 20], 4: [12, 21], 5: [12, 20], 6: [14, 20], 0: null };
  var nu = new Date();
  var dag = nu.getDay();
  var rij = document.querySelector('.uren-tabel tr[data-dag="' + dag + '"]');
  if (rij) rij.classList.add('vandaag');
  var regel = document.querySelector('[data-vandaag]');
  if (regel) {
    var u = uren[dag];
    var uur = nu.getHours() + nu.getMinutes() / 60;
    if (!u) regel.textContent = 'Vandaag (zondag) zijn we gesloten. Morgen vanaf 12.00 weer open.';
    else if (uur < u[0]) regel.textContent = 'Vandaag open van ' + u[0] + '.00 tot ' + u[1] + '.00';
    else if (uur < u[1]) regel.textContent = 'Nu open, vandaag tot ' + u[1] + '.00';
    else regel.textContent = 'Vandaag waren we open tot ' + u[1] + '.00';
  }

  // Voorbeeldformulier
  var form = document.getElementById('vraag');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('.form-melding').hidden = false;
  });
})();
