// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  nav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (nav.classList.contains('open')) burger.click();
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
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    n.focus(); select(n);
  });
});

// Opening hours: Thu-Sat 9-18, Sun 12-17, Mon-Wed closed
const hours = { 0: [720, 1020], 4: [540, 1080], 5: [540, 1080], 6: [540, 1080] };
const now = new Date();
const day = now.getDay();
const min = now.getHours() * 60 + now.getMinutes();
document.querySelectorAll('.hours tr').forEach(tr => {
  const d = Number(tr.dataset.d);
  if (!hours[d]) tr.classList.add('dicht');
  if (d === day) tr.classList.add('today');
});
const status = document.getElementById('open-status');
const fmt = m => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const h = hours[day];
if (h && min >= h[0] && min < h[1]) {
  status.innerHTML = `<span class="now">Nu open</span>vandaag tot ${fmt(h[1])}`;
} else if (h && min < h[0]) {
  status.textContent = `Vandaag open vanaf ${fmt(h[0])}`;
} else {
  const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (hours[d]) { status.textContent = `Nu gesloten, ${i === 1 ? 'morgen' : names[d]} weer open vanaf ${fmt(hours[d][0])}`; break; }
  }
}

// Demo form
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Stuur ons gerust een WhatsApp of mail.';
});
