(function () {
  // Mobiel menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  // Header schaduw na scrollen
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Open-status (vaste weektijden; dinsdag gesloten)
  var hours = { 0: ['11:00', '21:00'], 1: ['11:00', '21:30'], 3: ['11:00', '21:30'], 4: ['11:00', '21:30'], 5: ['11:00', '22:00'], 6: ['11:00', '22:00'] };
  var days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function mins(t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var st = document.getElementById('status'), h = hours[d], txt, open = false;
  if (h && m >= mins(h[0]) && m < mins(h[1])) { txt = 'Nu open, vandaag tot ' + h[1]; open = true; }
  else if (h && m < mins(h[0])) { txt = 'Vandaag open van ' + h[0] + ' tot ' + h[1]; }
  else {
    var n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
    txt = (d === 2 && !h ? 'Dinsdag gesloten. ' : 'Nu gesloten. ') + (n === (d + 1) % 7 ? 'Morgen' : days[n].charAt(0).toUpperCase() + days[n].slice(1)) + ' weer open vanaf ' + hours[n][0];
  }
  st.textContent = txt; st.classList.toggle('is-open', open);
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('today');

  // Prijslijst met tabs
  var tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function tag(o) { return (o && o.indexOf('v') > -1 ? ' <span class="veg">vega</span>' : '') + (o && o.indexOf('n') > -1 ? ' <span class="new">nieuw</span>' : ''); }
  window.MENU.forEach(function (cat, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.id = 't-' + cat.id; b.textContent = cat.tab;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'p-' + cat.id); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.addEventListener('click', function () { show(cat.id); });
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 't-' + cat.id);
    if (i !== 0) p.hidden = true;
    var html = cat.intro ? '<p class="panel__intro">' + esc(cat.intro) + '</p>' : '';
    html += '<div class="groups">';
    cat.groups.forEach(function (g) {
      html += '<div class="group' + (g.wide ? ' group--wide' : '') + '"><h3>' + esc(g.title) + '</h3>';
      if (g.note) html += '<p class="group__note">' + esc(g.note) + '</p>';
      if (g.list) {
        html += '<ul class="plain">' + g.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      } else if (g.cols) {
        html += '<div class="tbl"><table class="pt"><thead><tr><th scope="col"><span class="sr">Product</span></th>' + g.cols.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
        g.rows.forEach(function (r) {
          html += '<tr><th scope="row">' + esc(r[0]) + tag(r[2]) + (r[3] ? '<small>' + esc(r[3]) + '</small>' : '') + '</th>' + r[1].map(function (p) { return '<td>' + (p ? esc(p) : '<span aria-label="niet verkrijgbaar">&ndash;</span>') + '</td>'; }).join('') + '</tr>';
        });
        html += '</tbody></table></div>';
      } else {
        html += '<ul class="items">';
        g.rows.forEach(function (r) {
          html += '<li><span class="it__name">' + esc(r[0]) + tag(r[2]) + (r[3] ? '<small>' + esc(r[3]) + '</small>' : '') + '</span><span class="it__dots" aria-hidden="true"></span><span class="it__price">' + esc(r[1]) + '</span></li>';
        });
        html += '</ul>';
      }
      html += '</div>';
    });
    p.innerHTML = html + '</div>';
    panels.appendChild(p);
  });
  function show(id) {
    window.MENU.forEach(function (c) {
      var on = c.id === id;
      document.getElementById('t-' + c.id).setAttribute('aria-selected', on ? 'true' : 'false');
      document.getElementById('p-' + c.id).hidden = !on;
    });
    var t = document.getElementById('t-' + id);
    if (t && t.scrollIntoView && tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = t.offsetLeft - 16;
  }
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.getAttribute('data-tab')); });
  });

  // Formulier: voorbeeld, verstuurt niets
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formmsg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt uw bericht direct bij Jacco\'s binnen.';
  });
})();
