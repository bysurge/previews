// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
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
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    let n = null;
    if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
    if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
    if (n) { n.focus(); select(n); }
  });
});

// Opening hours: highlight today, show open/closed in the hero
const hours = { 1: [17, 22], 2: null, 3: [16, 22], 4: [16, 22], 5: [12, 24], 6: [11, 24], 0: [12, 21] };
const pad = h => (h === 24 ? '00' : String(h).padStart(2, '0')) + ':00';
const now = new Date();
const day = now.getDay();
const row = document.querySelector(`#hours tr[data-day="${day}"]`);
if (row) row.classList.add('now');
const el = document.getElementById('today');
const h = hours[day];
const t = now.getHours() + now.getMinutes() / 60;
if (h && t >= h[0] && t < h[1]) {
  el.textContent = `Nu open, vandaag tot ${pad(h[1])}`;
  el.classList.add('open');
} else if (h && t < h[0]) {
  el.textContent = `Vandaag open vanaf ${pad(h[0])}`;
} else {
  let d = (day + 1) % 7, guard = 0;
  while (!hours[d] && guard++ < 7) d = (d + 1) % 7;
  const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  el.textContent = `Nu gesloten, ${names[d]} weer open vanaf ${pad(hours[d][0])}`;
}

// Agenda items disappear the day after their date
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
document.querySelectorAll('[data-until]').forEach(ev => {
  const [y, m, d] = ev.dataset.until.split('-').map(Number);
  if (today > new Date(y, m - 1, d)) ev.remove();
});
const events = document.querySelector('.events');
if (events && !events.children.length) events.remove();

// Demo form: never sends anything
document.getElementById('resform').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formmsg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Reserveer gerust via 020-221 06 88 of contact@eighty-four.nl.';
});
