(function () {
  // Mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // Header wordt donker na de hero
  var bar = document.getElementById('top-bar');
  function onScroll() { bar.classList.toggle('scrolled', window.scrollY > 40); document.body.classList.toggle('past-hero', window.scrollY > window.innerHeight * 0.8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Menukaart: tabs
  function euro(n) { return '€ ' + n.toFixed(2).replace('.', ','); }
  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  MENU.forEach(function (cat, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.role = 'tab'; b.id = 'tab-' + cat.id;
    b.setAttribute('aria-controls', 'p-' + cat.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.textContent = cat.name;
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id);
    if (i !== 0) p.hidden = true;
    var html = '<h3 class="panel-title">' + cat.name + '</h3>';
    if (cat.serve) html += '<p class="serve">' + SERVE + '</p>';
    if (cat.note) html += '<p class="serve">' + cat.note + '</p>';
    html += '<ol class="dishes">';
    cat.items.forEach(function (it) {
      html += '<li><span class="nr' + (it[0] ? '' : ' nr-empty') + '">' + it[0] + '</span>' +
        '<span class="dish"><span class="dish-name">' + it[1] + '</span>' +
        (it[2] ? '<span class="dish-desc">' + it[2] + '</span>' : '') + '</span>' +
        '<span class="price">' + euro(it[3]) + '</span></li>';
    });
    html += '</ol>';
    p.innerHTML = html;
    panels.appendChild(p);
  });
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    tabs.querySelectorAll('button').forEach(function (t) { t.setAttribute('aria-selected', String(t === b)); });
    panels.querySelectorAll('.panel').forEach(function (p) { p.hidden = p.id !== b.getAttribute('aria-controls'); });
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });

  // Open of dicht (di-do 16.00-20.30, vr-zo 12.00-20.30, ma dicht)
  var HOURS = { 0: [1200, 2030], 1: null, 2: [1600, 2030], 3: [1600, 2030], 4: [1600, 2030], 5: [1200, 2030], 6: [1200, 2030] };
  var now = new Date();
  var day = now.getDay();
  var hm = now.getHours() * 100 + now.getMinutes();
  var t = HOURS[day];
  var el = document.getElementById('status');
  function fmt(n) { return Math.floor(n / 100) + '.' + String(n % 100).padStart(2, '0'); }
  var msg, open = false;
  if (!t) msg = 'Vandaag gesloten. Je kunt online alvast vooruit bestellen voor dinsdag.';
  else if (hm < t[0]) msg = 'Vandaag open van ' + fmt(t[0]) + ' tot 20.30 uur';
  else if (hm < t[1]) { msg = 'Nu open, bestellen kan tot 20.30 uur'; open = true; }
  else msg = 'Voor vandaag gesloten. ' + (day === 0 ? 'Dinsdag weer open vanaf 16.00 uur.' : 'Morgen weer open vanaf ' + fmt(HOURS[(day + 1) % 7][0]) + ' uur.');
  el.textContent = msg;
  el.classList.add(open ? 'is-open' : 'is-closed');
  var row = document.querySelector('.hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
})();
