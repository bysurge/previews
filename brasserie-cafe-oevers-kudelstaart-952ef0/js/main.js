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

// Tabs van de menukaart
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab, focus) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// Open of dicht (wo t/m zo 11.00-23.00)
const now = new Date();
const d = now.getDay();
const h = now.getHours() + now.getMinutes() / 60;
const openDay = d === 0 || d >= 3;
const row = document.querySelector(`.hours tr[data-d="${d}"]`);
if (row) row.classList.add('today');
const line = document.querySelector('[data-open]');
if (line) {
  if (openDay && h >= 11 && h < 23) { line.textContent = 'Nu open, vandaag tot 23.00 uur'; line.classList.add('is-open'); }
  else if (openDay && h < 11) line.textContent = 'Vandaag open van 11.00 tot 23.00 uur';
  else line.textContent = 'Wo t/m zo open, 11.00 tot 23.00 uur';
}

// Arrangement voorinvullen vanuit de knoppen
document.querySelectorAll('[data-arr]').forEach(a => a.addEventListener('click', () => {
  const sel = document.getElementById('arr-select');
  if (sel) sel.value = a.dataset.arr;
}));

// Formulieren: voorbeeld, er wordt niets verstuurd
document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const msg = f.querySelector('.form-msg');
  if (msg) msg.hidden = false;
}));
