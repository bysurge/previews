(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const burger = $('.burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

  // Hero slideshow (stops when reduced motion is preferred)
  const slides = [...document.querySelectorAll('.slides img')];
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1) {
    let i = 0;
    setInterval(() => { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); }, 5500);
  }

  // Menu tabs
  const tabs = $('#menu-tabs'), panels = $('#menu-panels');
  window.MENU.forEach((cat, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.id = 'tab-' + cat.id; b.textContent = cat.label;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'panel-' + cat.id); b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0;
    tabs.appendChild(b);
    const p = document.createElement('div');
    const count = cat.groups.reduce((n, g) => n + g.items.length, 0);
    p.className = 'panel' + (cat.groups.length === 1 && count < 6 ? ' single' : '');
    p.id = 'panel-' + cat.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (i) p.hidden = true;
    p.innerHTML = cat.groups.map(g => `<div class="group"><h3>${esc(g.title)}</h3>${g.note ? `<p class="group-note">${esc(g.note)}</p>` : ''}` +
      g.items.map(([n, d, pr, v]) => `<div class="dish"><span class="dish-name">${esc(n)}${v ? '<span class="v" title="vegetarisch">V</span>' : ''}</span>` +
        `<span class="dish-price">${pr.startsWith('p.p.') ? 'p.p. € ' + esc(pr.slice(5)) : '€ ' + esc(pr)}</span>${d ? `<span class="dish-desc">${esc(d)}</span>` : ''}</div>`).join('') + '</div>').join('');
    panels.appendChild(p);
  });
  const select = btn => tabs.querySelectorAll('[role=tab]').forEach(t => {
    const on = t === btn; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; $('#' + t.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.addEventListener('click', e => { const b = e.target.closest('[role=tab]'); if (b) select(b); });
  tabs.addEventListener('keydown', e => {
    const all = [...tabs.querySelectorAll('[role=tab]')], i = all.indexOf(document.activeElement);
    if (i < 0 || !['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const n = all[(i + (e.key === 'ArrowRight' ? 1 : all.length - 1)) % all.length]; n.focus(); select(n);
  });

  // Hours
  const d = new Date().getDay();
  $('#hours-table').insertAdjacentHTML('beforeend', [1, 2, 3, 4, 5, 6, 0].map(k => {
    const [dag, o, c] = window.UREN[k];
    return `<tr class="${k === d ? 'today' : ''}"><th scope="row">${dag}</th><td>${o ? `${o} – ${c}` : 'Gesloten'}</td></tr>`;
  }).join(''));
  const [, o, c] = window.UREN[d];
  $('#today').textContent = o ? `Vandaag open van ${o} tot ${c}` : 'Vandaag (woensdag) gesloten';

  $('#note-form').addEventListener('submit', e => { e.preventDefault(); $('#form-msg').hidden = false; });
})();
