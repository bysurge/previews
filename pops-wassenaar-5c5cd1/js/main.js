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

  // Menukaart
  var tabs = document.getElementById('menu-tabs');
  var panels = document.getElementById('menu-panels');
  var wide = window.matchMedia('(min-width: 561px)').matches;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  KAART.forEach(function (k, n) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.id = 'tab-' + k.id;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'panel-' + k.id);
    b.setAttribute('aria-selected', n === 0 ? 'true' : 'false');
    b.tabIndex = n === 0 ? 0 : -1;
    b.textContent = k.label;
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + k.id;
    p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (n !== 0) p.hidden = true;
    var html = k.intro ? '<p class="panel-intro">' + esc(k.intro) + '</p>' : '';
    html += '<div class="groups">';
    k.groups.forEach(function (g, gi) {
      var open = wide || gi < 2;
      html += '<details class="group"' + (open ? ' open' : '') + '><summary><h3>' + esc(g.t) + '</h3><span class="count">' + g.i.length + '</span></summary>';
      if (g.note) html += '<p class="g-note">' + esc(g.note) + '</p>';
      html += '<ul>';
      g.i.forEach(function (it) {
        html += '<li><div class="it-name">' + esc(it[0]) + (it[3] ? ' <span class="v" title="Zonder vlees of vega mogelijk">V</span>' : '') +
          '</div><span class="dots" aria-hidden="true"></span><div class="it-price">' + esc(it[2]) + '</div>' +
          (it[1] ? '<p class="it-desc">' + esc(it[1]) + '</p>' : '') + '</li>';
      });
      html += '</ul></details>';
    });
    html += '</div>';
    p.innerHTML = html;
    panels.appendChild(p);
  });
  var allTabs = [].slice.call(tabs.querySelectorAll('[role=tab]'));
  function select(b) {
    allTabs.forEach(function (t) {
      var on = t === b;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  allTabs.forEach(function (b, i) {
    b.addEventListener('click', function () { select(b); });
    b.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var nb = allTabs[(i + d + allTabs.length) % allTabs.length];
      select(nb); nb.focus();
    });
  });

  // Vandaag open?
  var day = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var times = { 2: '21:00', 3: '21:00', 4: '21:00', 5: '21:30', 6: '21:30' };
  var el = document.getElementById('vandaag');
  if (el) el.textContent = times[day] ? 'Vandaag open van 10:00 tot ' + times[day] + ', Langstraat 121' : 'Vandaag gesloten. Dinsdag t/m zaterdag open vanaf 10:00';

  // Formulier (voorbeeld)
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
