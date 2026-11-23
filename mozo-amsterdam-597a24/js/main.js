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

// Vandaag open?
const tijden = { 0: [17, 22], 2: [17, 22], 3: [17, 22], 4: [17, 22], 5: [17, 23], 6: [17, 23] };
const nu = new Date();
const dag = nu.getDay();
const regel = document.getElementById('vandaag');
const rij = document.querySelector(`.tijden tr[data-dag="${dag}"]`);
if (rij) rij.classList.add('nu');
if (tijden[dag]) {
  const [van, tot] = tijden[dag];
  const uur = nu.getHours() + nu.getMinutes() / 60;
  if (uur >= van && uur < tot) regel.textContent = `Nu open, vandaag tot ${tot}:00`;
  else if (uur < van) regel.textContent = `Vandaag open van ${van}:00 tot ${tot}:00`;
  else { regel.textContent = 'Dinsdag t/m zondag open vanaf 17:00'; regel.classList.add('dicht'); }
} else {
  regel.classList.add('dicht');
}

// Voorbeeldformulier
document.getElementById('res-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
