// Mobiel menu
const knop = document.getElementById('menu-knop');
const nav = document.getElementById('nav');
knop.addEventListener('click', () => {
  const open = knop.getAttribute('aria-expanded') !== 'true';
  knop.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  knop.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Tabs menukaart
const tabs = [...document.querySelectorAll('[role="tab"]')];
function kies(tab, focus) {
  tabs.forEach(t => {
    const actief = t === tab;
    t.setAttribute('aria-selected', actief);
    t.tabIndex = actief ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !actief;
  });
  if (focus) tab.focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// Vandaag open? (tijden in minuten; sluiting na middernacht = 24:00 of 25:00)
const tijden = { 0: [14 * 60, 21 * 60], 2: [495, 1440], 3: [495, 1440], 4: [495, 1440], 5: [495, 1500], 6: [495, 1500] };
const fmt = m => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
const nu = new Date();
const dag = nu.getDay();
const min = nu.getHours() * 60 + nu.getMinutes();
const regel = document.getElementById('vandaag');
const rij = document.querySelector(`.tijden tr[data-dag="${dag}"]`);
if (rij) rij.classList.add('nu');
const gisteren = tijden[(dag + 6) % 7];
if (gisteren && gisteren[1] > 1440 && min < gisteren[1] - 1440) {
  regel.textContent = `Nu open, tot ${fmt(gisteren[1])}`;
} else if (tijden[dag]) {
  const [van, tot] = tijden[dag];
  if (min >= van && min < tot) regel.textContent = `Nu open, vandaag tot ${fmt(tot)}`;
  else if (min < van) regel.textContent = `Vandaag open vanaf ${fmt(van)}`;
  else regel.classList.add('dicht');
} else {
  regel.textContent = 'Maandag gesloten · dinsdag vanaf 08:15 weer open';
  regel.classList.add('dicht');
}

// Voorbeeldformulier
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
