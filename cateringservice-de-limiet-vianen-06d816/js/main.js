// Mobiel menu
const knop = document.getElementById('menuknop');
const nav = document.getElementById('nav');
knop.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  knop.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  knop.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// Tabs van het menubord
const tabs = [...document.querySelectorAll('[role="tab"]')];
function kies(tab, focus) {
  tabs.forEach(t => {
    const aan = t === tab;
    t.setAttribute('aria-selected', aan);
    t.tabIndex = aan ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !aan;
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
document.querySelectorAll('[data-tab]').forEach(a => a.addEventListener('click', () => {
  kies(document.getElementById('t-' + a.dataset.tab));
}));

// Open of dicht (openingstijden van hun eigen site)
const uren = { 0: [16, 20], 1: null, 2: [11.5, 20], 3: [11.5, 20], 4: [11.5, 20], 5: [11.5, 20], 6: [12, 20] };
const nu = new Date();
const dag = nu.getDay();
const t = nu.getHours() + nu.getMinutes() / 60;
const rij = document.querySelector(`#tijdtabel tr[data-dag="${dag}"]`);
if (rij) rij.classList.add('vandaag');
const status = document.getElementById('status');
const vandaag = uren[dag];
const fmt = h => `${Math.floor(h)}.${h % 1 ? '30' : '00'}`;
if (vandaag && t >= vandaag[0] && t < vandaag[1]) {
  status.textContent = `Nu open, tot ${fmt(vandaag[1])} uur`;
  status.classList.add('is-open');
} else if (vandaag && t < vandaag[0]) {
  status.textContent = `Vandaag open vanaf ${fmt(vandaag[0])} uur`;
} else {
  let d = (dag + 1) % 7;
  while (!uren[d]) d = (d + 1) % 7;
  const namen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  status.textContent = `Nu gesloten, ${d === (dag + 1) % 7 ? 'morgen' : namen[d]} weer open vanaf ${fmt(uren[d][0])} uur`;
  status.classList.add('is-dicht');
}
