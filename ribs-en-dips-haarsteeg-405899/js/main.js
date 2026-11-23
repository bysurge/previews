// Mobiel menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  btn.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Smaken en welk speciaalbier erbij past (uit hun drankkaart)
const bieren = [
  ['St. Bernardus Abt 12', '6,75', ['gember', 'bbq']],
  ['La Chouffe Cherry', '6,75', ['gember', 'knoflook']],
  ['La Chouffe Blond', '6,50', ['zoet', 'bbq']],
  ['Tripel Karmeliet', '6,25', ['gember', 'hot']],
  ['Wilderen Goud', '6,00', ['zoet', 'bbq']],
  ['Duvel', '5,50', ['knoflook', 'hot']],
  ['Desperados', '5,00', ['naturel', 'zoet']],
  ['Grimbergen tripel', '5,50', ['gember', 'bbq']],
  ['Grimbergen dubbel', '5,50', ['gember', 'bbq']],
  ['Grimbergen blond', '5,00', ['zoet', 'bbq']],
  ['Hoegaarden wit', '4,50', ['naturel', 'zoet']],
  ['Liefmans Fruitesse', '4,75', ['zoet', 'sweetchili']],
  ['Palm speciaal bier', '4,00', ['zoet', 'sweetchili']],
];
const chips = document.querySelectorAll('.chip');
const panel = document.getElementById('lak-panel');
function toon(chip) {
  chips.forEach(c => c.setAttribute('aria-selected', c === chip));
  const s = chip.dataset.smaak;
  panel.querySelector('.lak-name').textContent = chip.textContent.trim();
  const ul = panel.querySelector('.lak-beers');
  const intro = panel.querySelector('.lak-beer-intro');
  ul.innerHTML = '';
  if (s === 'wisselend') {
    intro.textContent = 'Steeds een andere smaak. Vraag ernaar in het restaurant.';
    return;
  }
  intro.textContent = 'Lekker met:';
  bieren.filter(b => b[2].includes(s)).forEach(b => {
    const li = document.createElement('li');
    li.innerHTML = `<b>${b[0]}</b><span>${b[1]}</span>`;
    ul.appendChild(li);
  });
}
chips.forEach(c => c.addEventListener('click', () => toon(c)));
toon(document.querySelector('.chip[aria-selected="true"]'));

// Tabs van de kaart
const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
function kies(t) {
  tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on);
    x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(t));
  t.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    kies(n); n.focus();
  });
});

// Vandaag open?
const dag = new Date().getDay();
const rij = document.querySelector(`.hours tr[data-d="${dag}"]`) || ([1, 2, 3].includes(dag) && document.querySelector('.hours tr[data-d="1"]'));
if (rij) rij.classList.add('vandaag');
const open = document.querySelector('[data-open]');
if (open) open.textContent = [4, 5, 6, 0].includes(dag)
  ? 'Vandaag open vanaf 16:30, reserveren en afhalen tot 19:30'
  : 'Donderdag t/m zondag open vanaf 16:30';
