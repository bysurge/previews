// Het Klooster preview: tapbord, fles-tabs, menu, openingstijden van vandaag.
const TAP = [
  ['Hertog Jan', 'Pilsner', '5,1%', 'Pilsner'],
  ['Leffe', 'Blond', '6,6%', 'Blond'],
  ['', 'La Chouffe', '8,0%', 'Zwaar blond'],
  ['Bosteels', 'Karmeliet', '8,4%', 'Tripel'],
  ['Kasteel', 'Rouge', '8,0%', 'Kriek'],
  ['De Koninck', 'Bolleke', '5,2%', 'Amber'],
  ['Val-Dieu', 'Grand Cru', '10,5%', 'Belgian quadrupel'],
  ['Moersleutel', '10 Year Exploration', '6,5%', 'West Coast IPA'],
  ['Piraat', 'Rum BA', '10,5%', 'Tripel BA'],
  ['Hertog Jan', 'Bockbier 2024', '6,5%', 'Bockbier'],
  ['Kompaan', 'Smoked Wheat Everyday', '8,4%', 'Smoked weizenbock'],
  ['Doerakker', 'Wit', '6,0%', 'Witbier'],
  ['Gulden Draak', 'Stout', '12%', 'Imperial stout'],
  ['Kompaan', 'Levensgenieter', '4,5%', 'NEIPA'],
  ['Lupulus', 'Malificus', '10,0%', 'Strong blond'],
  ['Siren', 'Every Minute Matters', '7,2%', 'IPA'],
  ['BrewDog', 'Hazy Jane', '5,0%', 'NEIPA'],
  ['St. Bernardus', 'Tripel', '7,5%', 'Tripel'],
  ['Hopalaa!', 'Mango Mirage', '6,8%', 'Hazy IPA'],
  ['Weihenstephan', 'Weihenstephaner', '5,4%', 'Hefeweizen'],
  ['Kompaan', 'Tonka Bok', '6,5%', 'Bock'],
  ['Põhjala', 'Limoncello IPA', '5,5%', 'IPA'],
  ['Maisel', 'Hopfenreiter 2026', '8,5%', 'DIPA'],
  ['Lupulus', 'Brune', '8,5%', 'Dark ale'],
  ['Kinnegar', 'Big Bunny IPA', '6,0%', 'IPA'],
  ['', 'Guinness', '4,2%', 'Irish dry stout'],
  ['Moersleutel', 'Wolfhound', '4,5%', 'Stout'],
  ['Kompaan', 'Golden Brown', '4,5%', 'Brown ale'],
  ['Troubadour', 'Go Skinny Dipping', '4,2%', 'Berliner weisse'],
  ['Wilderen', 'X', '6%', 'Blond'],
];

const FLES = [
  ['Blond', [['La Trappe Blonde', '4,20'], ['Orval', '4,60']]],
  ['Dubbel', [['Westmalle Dubbel', '4,40']]],
  ['Tripel & zwaar blond', [['Delirium Tremens', '4,60'], ['Westmalle Tripel', '4,60'], ['Duvel', '4,20']]],
  ['IPA', [['Kees Double Haze', '5,80'], ['Vandestreek Hopart', '4,80'], ['To Øl DIPA', '8,00', '44 cl'], ['BrewDog Hazy Jane', '4,80']]],
  ['Stout & porter', [['Põhjala Must Kuld', '5,80'], ['Kees Caramel Fudge Stout', '6,00'], ['De Molen Hel & Verdoemenis', '6,00']]],
  ['Quadrupel', [['La Trappe Quadrupel', '5,80']]],
  ['Kriek & geuze', [['Boon Kriek', '4,20'], ['Boon Geuze', '4,20']]],
  ['Cider', [['Magners', '4,20']]],
  ['Alcoholarm & -vrij', [['Vandestreek Playground', '4,20'], ['Vandestreek Funhouse NEIPA', '4,50'], ['Lowlander Wit 0.0', '3,80'], ['Hertog Jan', '3,50'], ['Leffe 0.0', '3,80']]],
];

const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

// tap board
const taps = document.getElementById('taps');
TAP.forEach(([brouwer, bier, abv, stijl], i) => {
  const li = el('li');
  li.append(
    el('span', 'nr', String(i + 1)),
    el('span', 'bier', bier + (brouwer ? `<span class="brouwer">${brouwer}</span>` : '')),
    el('span', 'stijl', `<b>${abv}</b>${stijl}`)
  );
  taps.append(li);
});

// fles & blik: alle stijlen als groepen
const panel = document.getElementById('fles-panel');
FLES.forEach(([cat, items]) => {
  const g = el('div', 'fles-groep');
  g.append(el('h3', '', cat));
  items.forEach(([naam, prijs, extra]) => {
    const row = el('div', 'fles-item');
    row.append(el('span', '', naam + (extra ? ` <small>${extra}</small>` : '')), el('span', 'dots'), el('span', 'prijs', '€ ' + prijs));
    g.append(row);
  });
  panel.append(g);
});

// menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

// vandaag
const d = new Date().getDay();
const row = document.querySelector(`#hours tr[data-d="${d}"]`);
if (row) {
  row.classList.add('is-today');
  document.getElementById('today').innerHTML = `Vandaag open <b>${row.querySelector('td').textContent}</b> · Vlamingstraat 2, Delft`;
}
