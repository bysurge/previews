// Mobiel menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  btn.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.style.overflow = '';
}));

// Tabs van het menu
const tabs = [...document.querySelectorAll('[role="tab"]')];
function show(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => show(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    show(n); n.focus();
  });
});
// De drie blokken openen het juiste tabblad
document.querySelectorAll('[data-tab]').forEach(a => a.addEventListener('click', () => {
  const t = document.getElementById('b-' + a.dataset.tab);
  if (t) show(t);
}));

// Openingstijden: vandaag markeren
const hours = { 3: ['11.30', '20.00'], 4: ['11.30', '20.00'], 5: ['11.30', '20.00'], 6: ['12.00', '20.00'], 0: ['14.00', '20.00'] };
const d = new Date().getDay();
const row = document.querySelector(`.hours tr[data-day="${d}"]`);
if (row) row.classList.add('is-today');
const today = document.querySelector('[data-today]');
if (today) {
  today.textContent = hours[d]
    ? `Vandaag open van ${hours[d][0]} tot ${hours[d][1]} uur`
    : 'Woensdag tot en met zondag open';
}
