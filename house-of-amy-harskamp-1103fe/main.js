const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const dish = ([n, name, p, d]) => {
  const price = /p\.p\./.test(p) ? '€ ' + p : '€ ' + p;
  return `<div class="dish${n === '' ? ' nonum' : ''}">${n === '' ? '' : `<span class="n">${n}</span>`}<b>${esc(name)}</b><i>${price}</i>${d ? `<small>${esc(d)}</small>` : ''}</div>`;
};
const group = g => `<div class="group"><h3>${esc(g.t)}</h3>${g.note ? `<p class="gnote">${esc(g.note)}</p>` : ''}${g.items.map(dish).join('')}</div>`;

const tabsEl = document.getElementById('tabs'), panelsEl = document.getElementById('panels');
tabsEl.innerHTML = AMY_MENU.map((s, i) => `<button role="tab" id="t-${s.id}" aria-controls="p-${s.id}" aria-selected="${i === 0}">${esc(s.tab)}</button>`).join('');
panelsEl.innerHTML = AMY_MENU.map((s, i) => `<div class="panel" role="tabpanel" id="p-${s.id}" aria-labelledby="t-${s.id}"${i ? ' hidden' : ''}>${s.groups.map(group).join('')}</div>`).join('');
const tabs = [...tabsEl.querySelectorAll('[role="tab"]')];
tabs.forEach(b => b.addEventListener('click', () => {
  tabs.forEach(x => { const on = x === b; x.setAttribute('aria-selected', on); document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
}));

// mobiel menu
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
});
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', false);
}));

// vandaag open?
const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60;
const now = document.getElementById('now');
if (day === 2) now.textContent = 'Vandaag (dinsdag) gesloten, morgen weer open vanaf 12:00';
else if (h >= 12 && h < 22) { now.textContent = 'Nu open, vandaag tot 22:00'; now.classList.add('open'); }
else if (h < 12) now.textContent = 'Vandaag open van 12:00 tot 22:00';
else now.textContent = day === 1 ? 'Woensdag weer open vanaf 12:00' : 'Morgen weer open vanaf 12:00';
const row = document.querySelector(`#hours tr[data-d="${day}"]`); if (row) row.classList.add('today');

document.getElementById('ask').addEventListener('submit', e => { e.preventDefault(); document.getElementById('form-note').hidden = false; });
