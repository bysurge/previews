// Mobile menu
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Menu tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    select(n); n.focus();
  });
});

// Today's hours
const hours = { 0: [16, 21], 1: [14, 21], 2: [14, 21], 3: null, 4: [12, 21], 5: [12, 21], 6: null };
const now = new Date();
const d = now.getDay();
const row = document.querySelector(`#week li[data-d="${d}"]`);
if (row) row.classList.add('is-today');
const today = document.getElementById('today');
const h = hours[d];
const t = now.getHours() + now.getMinutes() / 60;
if (!h) {
  today.textContent = 'Vandaag gesloten';
  today.classList.add('is-closed');
} else if (t < h[0]) {
  today.textContent = `Vandaag open vanaf ${h[0]}.00 tot 21.00`;
} else if (t < h[1]) {
  today.textContent = 'Nu open, tot 21.00';
} else {
  today.textContent = 'Voor vandaag gesloten';
  today.classList.add('is-closed');
}
today.hidden = false;
