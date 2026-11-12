(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Mobile menu
  const burger = $('.burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

  // Menu tabs
  const tabs = $('#menu-tabs'), panels = $('#menu-panels');
  const marks = t => (t.includes('v') ? '<span class="mark mark-v">vega</span>' : '') + (t.includes('g') ? '<span class="mark mark-g">glutenvrij</span>' : '');
  window.MENU.forEach((cat, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.role = 'tab'; b.id = 'tab-' + cat.id; b.textContent = cat.label;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'panel-' + cat.id); b.setAttribute('aria-selected', i === 0);
    b.tabIndex = i === 0 ? 0 : -1;
    tabs.appendChild(b);
    const p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + cat.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (i) p.hidden = true;
    p.innerHTML = cat.groups.map(g => `<div class="group"><h3>${esc(g.title)}</h3>${g.note ? `<p class="group-note">${esc(g.note)}</p>` : ''}` +
      g.items.map(([n, d, pr, t]) => `<div class="dish"><span class="dish-name">${esc(n)}${marks(t)}</span>` +
        `<span class="dish-price">${pr === 'dagprijs' ? 'dagprijs' : '€ ' + esc(pr)}</span>${d ? `<span class="dish-desc">${esc(d)}</span>` : ''}</div>`).join('') + '</div>').join('');
    panels.appendChild(p);
  });
  const select = btn => {
    tabs.querySelectorAll('[role=tab]').forEach(t => { const on = t === btn; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; $('#' + t.getAttribute('aria-controls')).hidden = !on; });
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('[role=tab]'); if (b) select(b); });
  tabs.addEventListener('keydown', e => {
    const all = [...tabs.querySelectorAll('[role=tab]')], i = all.indexOf(document.activeElement);
    if (i < 0 || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const n = all[(i + (e.key === 'ArrowRight' ? 1 : all.length - 1)) % all.length]; n.focus(); select(n);
  });

  // Opening hours table
  const now = new Date(), today = now.getDay();
  const order = [1, 2, 3, 4, 5, 6, 0];
  $('#hours-table').insertAdjacentHTML('beforeend', order.map(d => {
    const u = window.UREN[d];
    return `<tr class="${d === today ? 'today' : ''}"><th scope="row">${u.dag}</th><td>${u.dicht ? `${u.open} tot ${u.dicht} uur<span>keuken tot ${u.keuken} uur</span>` : 'Gesloten'}</td></tr>`;
  }).join(''));
  $('#deviate-list').innerHTML = window.AFWIJKEND.map(b => `<h3>${esc(b.periode)}</h3><ul>${b.regels.map(([d, t]) => `<li><span>${esc(d)}</span><span>${esc(t)}</span></li>`).join('')}</ul>`).join('');

  // Hang tag: today's hours, including known deviating days
  const DEV = {
    '2026-12-05': ['open tot 17:00', 'keuken tot 16:00'], '2026-12-24': ['open tot 16:00', 'keuken tot 15:00'],
    '2026-12-25': ['gesloten', '1e Kerstdag'], '2026-12-26': ['gesloten', '2e Kerstdag'], '2026-12-31': ['open tot 16:00', 'keuken tot 15:00'],
    '2027-01-17': ['gesloten', ''], '2027-01-18': ['gesloten', ''], '2027-01-20': ['gesloten', ''], '2027-01-21': ['gesloten', ''],
    '2027-02-06': ['open tot 16:00', 'keuken tot 15:00'], '2027-02-07': ['gesloten', 'carnaval'], '2027-02-08': ['gesloten', 'carnaval'],
    '2027-03-28': ['gesloten', '1e Paasdag'], '2027-03-29': ['gesloten', '2e Paasdag'], '2027-05-17': ['gesloten', '2e Pinksterdag']
  };
  const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const u = window.UREN[today];
  let hours, kitchen;
  if (DEV[iso]) [hours, kitchen] = DEV[iso];
  else if (u.dicht) { hours = `${u.open} – ${u.dicht}`; kitchen = `keuken tot ${u.keuken}`; }
  else { hours = 'gesloten'; kitchen = 'dinsdag rustdag'; }
  $('#tag-label').textContent = 'Vandaag';
  $('#tag-hours').textContent = hours;
  $('#tag-kitchen').textContent = kitchen;

  // Demo form
  $('#note-form').addEventListener('submit', e => { e.preventDefault(); $('#form-msg').hidden = false; });
})();
