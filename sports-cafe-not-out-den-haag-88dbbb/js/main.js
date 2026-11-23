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
const tabs = [...document.querySelectorAll('[role="tab"]')];
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
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    select(next); next.focus();
  });
});
document.querySelectorAll('[data-tab]').forEach(a => a.addEventListener('click', () => {
  const t = document.getElementById(a.dataset.tab);
  if (t) { select(t); t.scrollIntoView({ inline: 'center', block: 'nearest' }); }
}));

// Opening hours: highlight today, show open/closed (closing times run past midnight)
const HOURS = { 1: [14, 25.5], 2: [14, 25.5], 3: [14, 25.5], 4: [14, 26], 5: [14, 26], 6: [12, 26], 0: [12, 25.5] };
const now = new Date();
const h = now.getHours() + now.getMinutes() / 60;
const today = now.getDay();
const row = document.querySelector(`#hours tr[data-d="${today}"]`);
if (row) row.classList.add('today');
const yesterday = (today + 6) % 7;
const fmt = x => { x = x % 24; return String(Math.floor(x)).padStart(2, '0') + ':' + String(Math.round((x % 1) * 60)).padStart(2, '0'); };
let msg, open = false;
if (h < HOURS[yesterday][1] - 24) { open = true; msg = `Nu open, tot ${fmt(HOURS[yesterday][1])}`; }
else if (h >= HOURS[today][0]) { open = true; msg = `Nu open, tot ${fmt(HOURS[today][1])}`; }
else msg = `Vandaag open vanaf ${fmt(HOURS[today][0])}`;
const el = document.getElementById('openNow');
if (el) { el.textContent = msg; el.classList.toggle('closed', !open); el.hidden = false; }
