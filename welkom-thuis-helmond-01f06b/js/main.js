// Mobiel menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  btn.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Tabs van de menukaart
const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
function kies(t) {
  tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on);
    x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    kies(n); n.focus();
  });
});
document.querySelectorAll('[data-tab]').forEach(a => a.addEventListener('click', () => {
  const t = document.getElementById(a.dataset.tab);
  if (t) kies(t);
}));

// Voorbeeldformulier: verstuurt niets
const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});

// Vandaag
const dag = new Date().getDay();
const rij = document.querySelector(`.hours tr[data-d="${dag}"]`);
if (rij) rij.classList.add('vandaag');
const tijden = { 2: '9:30 tot 17:00', 3: '9:30 tot 17:00', 4: '9:30 tot 17:00', 5: '9:30 tot 20:30', 6: '9:30 tot 17:00' };
const open = document.querySelector('[data-open]');
if (open) open.textContent = tijden[dag]
  ? `Vandaag open van ${tijden[dag]}`
  : 'Dinsdag t/m zaterdag open vanaf 9:30';
