// Menu op de telefoon
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Openingstijden: vandaag
const close = { 0: '20:00', 1: '20:00', 2: '20:00', 3: '20:00', 4: '20:00', 5: '21:00', 6: '21:00' };
const day = new Date().getDay();
const row = document.querySelector(`#hours tr[data-day="${day}"]`);
if (row) row.classList.add('is-today');
const today = document.getElementById('today');
if (today) today.innerHTML = `Vandaag open van <b>12:00</b> tot <b>${close[day]}</b>`;

// Tabs menukaart
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
  t.tabIndex = i === 0 ? 0 : -1;
  t.addEventListener('click', () => show(t));
  t.addEventListener('keydown', e => {
    let n = null;
    if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
    if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
    if (n) { e.preventDefault(); show(n); n.focus(); n.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
  });
});

// Bestelknop op de telefoon pas tonen na de hero
const fab = document.querySelector('.order-fab');
const hero = document.querySelector('.hero');
if (fab && hero && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => fab.classList.toggle('show', !e.isIntersecting)).observe(hero);
}
