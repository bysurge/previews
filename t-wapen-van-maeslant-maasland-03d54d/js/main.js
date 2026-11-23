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

// Contact form: preview only, nothing is sent
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').hidden = false;
});

// Opening hours: highlight today, show open/closed (some closing times run past midnight)
const HOURS = { 1: [12, 24], 2: [10, 24], 3: [10, 24], 4: [10, 24], 5: [10, 25], 6: [10, 25], 0: [9.5, 22] };
const now = new Date();
const h = now.getHours() + now.getMinutes() / 60;
const today = now.getDay();
const row = document.querySelector(`#hours tr[data-d="${today}"]`);
if (row) row.classList.add('today');
const yesterday = (today + 6) % 7;
const fmt = x => { x = x % 24; return String(Math.floor(x)).padStart(2, '0') + ':' + String(Math.round((x % 1) * 60)).padStart(2, '0'); };
let msg;
if (h < HOURS[yesterday][1] - 24) msg = `Nu open, tot ${fmt(HOURS[yesterday][1])}`;
else if (h >= HOURS[today][0] && h < HOURS[today][1]) msg = `Nu open, tot ${fmt(HOURS[today][1])}`;
else if (h < HOURS[today][0]) msg = `Vandaag open vanaf ${fmt(HOURS[today][0])}`;
else msg = `Morgen open vanaf ${fmt(HOURS[(today + 1) % 7][0])}`;
const el = document.getElementById('openNow');
if (el) { el.textContent = msg; el.hidden = false; }
