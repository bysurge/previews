// Mobile menu
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

// Beer tabs
const tabs = [...document.querySelectorAll('.tabs [role=tab]')];
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
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    select(n); n.focus();
  });
});

// Opening hours: highlight today, show status in hero
const hours = { 0: [16, 24], 1: null, 2: [17, 24], 3: [17, 24], 4: [17, 25], 5: [16, 25.5], 6: [16, 25.5] };
const fmt = h => { const hh = Math.floor(h) % 24, mm = Math.round((h % 1) * 60); return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0'); };
const now = new Date();
const day = now.getDay();
const t = now.getHours() + now.getMinutes() / 60;
const row = document.querySelector(`.hours tr[data-d="${day}"]`);
if (row) row.classList.add('is-today');
const todayEl = document.getElementById('today');
const yest = hours[(day + 6) % 7];
let msg, open = false;
if (yest && yest[1] > 24 && t < yest[1] - 24) { msg = 'Nu open tot ' + fmt(yest[1]); open = true; }
else if (!hours[day]) msg = 'Vandaag gesloten, morgen open vanaf ' + fmt(hours[(day + 1) % 7][0]);
else if (t < hours[day][0]) msg = 'Vandaag open van ' + fmt(hours[day][0]) + ' tot ' + fmt(hours[day][1]);
else if (t < hours[day][1]) { msg = 'Nu open tot ' + fmt(hours[day][1]); open = true; }
else msg = 'Nu gesloten';
todayEl.textContent = msg;
todayEl.classList.toggle('closed', !open && msg === 'Nu gesloten' || msg.startsWith('Vandaag gesloten'));
todayEl.hidden = false;

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
let last;
document.querySelectorAll('.g').forEach(g => g.addEventListener('click', () => {
  const im = g.querySelector('img');
  lbImg.src = im.src; lbImg.alt = im.alt; last = g;
  lb.hidden = false; lb.querySelector('.lb-close').focus();
}));
function closeLb() { lb.hidden = true; if (last) last.focus(); }
lb.addEventListener('click', e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });
