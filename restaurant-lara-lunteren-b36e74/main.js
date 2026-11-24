// Menu: letterlijk van restaurantlara.nl. [naam, prijs, omschrijving]
const MENU = {
  turks: [
    { t: 'Voorgerechten', items: [
      ['Soep van de dag', '8,50', 'linzen- of tomatensoep'],
      ['Feta salade', '9,00'], ['Tonijnsalade', '9,50'], ['Zalmsalade', '10,00'],
      ['Kipsalade', '10,00', 'met gegrilde kip'], ['Stokbrood Lara', '4,00'], ['Carpaccio', '12,00']]},
    { t: 'Hoofdgerechten', note: 'Geserveerd met naar keuze aardappelschijfjes, friet of rijst en salade.', items: [
      ['Sis kebab', '24,00', 'spies van kip- of rundvlees, 3 stuks'],
      ['Pirzola', '24,50', 'gemarineerde lamskotelet'],
      ['Köfte', '20,00', 'Turks gekruid gehakt'],
      ['Karisik sis', '25,50', 'lamsvlees, kip, gehaktballetjes, ossenhaas met groente'],
      ['Tavuk steak', '21,50', 'kip met seizoengroente en speciale saus'],
      ['Steak Lara', '23,00', 'lamsvlees met roerbakgroente en speciale saus'],
      ['Kip Lara', '24,50', 'kipreepjes met paprika, ui, cashewnoten en sojasaus'],
      ['T-bone steak', '28,00', 'met roerbakgroente en wijnsaus'],
      ['Bonfile', '27,00', 'biefstuk met roerbakgroente en champignonsaus'],
      ['Entrecote', '26,00', 'met roerbakgroente en champignonsaus'],
      ['Ossenhaas', '27,00', 'met roerbakgroente in rode wijnsaus'],
      ['Spareribs', '26,00', 'kalfsvlees, heet of zoet gemarineerd'],
      ['Hotwings', '17,00', '8 stuks'],
      ['Shoarma schotel', '17,00'], ['Döner schotel', '17,00'], ['Kipdöner schotel', '17,00'],
      ['Kipschnitzel klein', '17,50', 'met champignonsaus'],
      ['Kipschnitzel groot', '20,00', 'met champignonsaus'],
      ['Falafel', '18,00', 'met roerbakgroente'],
      ['Kipfilet', '19,50', 'met champignons en roomsaus'],
      ['Lunteren', '19,50', 'kip, champignons, ui, paprika en kaas uit de oven'],
      ['Kapsalon', '13,00', 'aardappelschijfjes of friet, vlees naar keuze, kaas en saus'],
      ['Kapsalon groot', '17,00', 'aardappelschijfjes of friet, vlees naar keuze, kaas en saus'],
      ['Kindermenu', '10,00', 'frietjes, kipnuggets, frikandel of kroket, appelmoes, mayonaise en drinken']]}
  ],
  pizza: [
    { t: "Pasta's", note: 'Keuze uit spaghetti of penne.', items: [
      ['Pollo', '17,00', 'kip, paprika, ui, champignons en roomsaus'],
      ['Carbonara', '17,00', 'ham, champignons, ei en koksroom'],
      ['Bolognese', '17,00', 'gehakt, tomatensaus en parmezaanse kaas'],
      ['Denniz', '17,00', 'kip, paprika, ui, champignons en tomatensaus'],
      ['Tonno', '17,00', 'tonijn, champignons, ui, knoflook en tomatensaus'],
      ['Vega', '17,00', 'paprika, champignons, ui, courgette, olijven en tomatensaus']]},
    { t: "Pizza's met vlees", items: [
      ['Salami', '13,50', 'tomatensaus, kaas en salami'],
      ['Borromea', '13,00', 'tomatensaus, kaas en ham'],
      ['Pepperoni', '14,50', 'tomatensaus, kaas, pepperoni en Turkse peper'],
      ['Fantasia', '14,50', 'tomatensaus, kaas, ham en champignons'],
      ['Carbonara', '15,50', 'tomatensaus, kaas, ham, ei en champignons'],
      ['Bolognese', '15,50', 'tomatensaus, kaas en bolognesesaus'],
      ['Hawaii', '15,00', 'tomatensaus, kaas, ham en ananas'],
      ['Bingo', '16,00', 'tomatensaus, kaas, ham, salami, champignons en Turkse peper'],
      ['Denniz', '17,50', 'tomatensaus, kaas, ham, Turkse worst, champignons, paprika en ui'],
      ['Shoarma', '17,50', 'tomatensaus, kaas, shoarma, champignons, paprika en ui'],
      ['Döner', '17,50', 'tomatensaus, kaas, döner en ui'],
      ['Pollo', '17,50', 'tomatensaus, kaas, kip, champignons, paprika en ui'],
      ['Quattro Stagioni', '17,00', 'tomatensaus, kaas, ham, salami, champignons en paprika'],
      ['Mix', '19,50', 'tomatensaus, kaas, vier soorten vlees, champignons, paprika en ui'],
      ['Linling', '19,00', 'tomatensaus, kaas, ham, salami, kip, champignons, paprika en ui'],
      ['Half-half', '19,00', 'tomatensaus, kaas, ingrediënten naar keuze']]},
    { t: "Pizza's met vis", items: [
      ['Tonno', '16,00', 'tomatensaus, kaas, tonijn en ui'],
      ['Ansjovis', '16,00', 'tomatensaus, kaas en ansjovis'],
      ['Salmon', '16,00', 'tomatensaus, kaas, zalm en gorgonzola'],
      ['Frutti di mare', '17,00', 'tomatensaus, kaas en zeevruchten']]},
    { t: "Vegetarische pizza's", items: [
      ['Margherita', '11,00', 'tomatensaus en kaas'],
      ['Funghi', '12,50', 'tomatensaus, kaas en champignons'],
      ['Vegetariana', '15,00', 'tomatensaus, kaas, paprika, ui, champignons, olijven en knoflook'],
      ['Quattro Formaggi', '15,00', 'tomatensaus, gorgonzola, feta, parmezaanse kaas en mozzarella'],
      ['Mozzarella', '14,00', 'tomatensaus, kaas en mozzarella'],
      ['Caprese', '15,00', 'tomatensaus, kaas, pesto, mozzarella en verse tomaten']]},
    { t: 'Calzones', note: "Dubbelgevouwen pizza's.", items: [
      ['Calzone Quattro Stagioni', '17,50', 'tomatensaus, kaas, ham, salami, champignons, paprika en ui'],
      ['Calzone shoarma', '17,50', 'tomatensaus, kaas, shoarma, champignons, paprika en ui'],
      ['Calzone döner', '17,50', 'tomatensaus, kaas, döner, champignons, paprika en ui'],
      ['Calzone pollo', '17,50', 'tomatensaus, kaas, kip, champignons, paprika en ui'],
      ['Calzone tonno', '17,50', 'tomatensaus, kaas, tonijn, champignons, paprika en ui'],
      ['Calzone Lara', '18,50', 'tomatensaus, kaas, shoarma, döner, champignons, paprika en ui'],
      ['Calzone mix', '19,00', 'tomatensaus, kaas, 4 soorten vlees, champignons, paprika en ui']]}
  ],
  broodjes: [
    { t: 'Broodjes', note: 'Keuze uit Turks brood of pitabrood.', items: [
      ['Broodje döner', '12,00', 'met salade en saus'], ['Broodje shoarma', '12,00', 'met salade en saus'],
      ['Broodje kipdöner', '12,00', 'met salade en saus'], ['Broodje döner groot', '15,00', 'met salade en saus'],
      ['Broodje shoarma groot', '15,00', 'met salade en saus'], ['Broodje kipdöner groot', '15,00', 'met salade en saus'],
      ['Broodje döner speciaal', '13,00', 'met groente, salade en saus'], ['Broodje shoarma speciaal', '13,00', 'met groente, salade en saus'],
      ['Broodje kipdöner speciaal', '13,00', 'met groente, salade en saus'], ['Broodje döner speciaal groot', '16,00', 'met groente, salade en saus'],
      ['Broodje shoarma speciaal groot', '16,00', 'met groente, salade en saus'], ['Broodje kipdöner speciaal groot', '16,00', 'met groente, salade en saus']]},
    { t: 'Pita', items: [['Pita kaas', '3,50'], ['Pita ham/kaas', '4,00'], ['Pita hawaii', '4,50']]},
    { t: 'Dürüm', items: [['Dürüm met döner', '11,50'], ['Dürüm met shoarma', '11,50'], ['Dürüm met kipdöner', '11,50']]},
    { t: 'Turkse pizza', items: [
      ['Turkse pizza met döner', '12,50', 'met salade en saus'], ['Turkse pizza met shoarma', '12,50', 'met salade en saus'],
      ['Turkse pizza met kipdöner', '12,50', 'met salade en saus'], ['Turkse pizza met kaas', '7,50'], ['Turkse pizza met groente', '7,50']]}
  ],
  lunch: [
    { t: 'Boerenbrood', note: 'Met naar keuze bruin of wit brood.', items: [
      ['Gerookte zalm', '14,00', 'roomkaas, rucola, komkommer, kappertjes en ui'],
      ['Brie', '12,00', 'rucola, komkommer, honing en walnoten'],
      ['Gezond ham/kaas', '13,00', 'sla, tomaat, komkommer en ei'],
      ['Carpaccio', '13,00', 'rucola, pesto, mozzarella, tomaat, basilicum en truffelmayonaise'],
      ['Caprese', '12,00', 'rucola, pesto, mozzarella, tomaat en basilicum'],
      ['Makreel', '13,00', 'roomkaas, rucola, komkommer en ui']]},
    { t: 'Lunch', items: [
      ['Soep van de dag met brood', '8,50', 'tomaten- of linzensoep'],
      ['Uitsmijter', '12,00', 'ei, ham, kaas'], ['Boerenomelet', '13,00'], ['Tosti', '4,50', 'kaas, ham']]},
    { t: 'Snacks', items: [
      ['Bitterballen 6 stuks', '5,50'], ['Kipnuggets 6 stuks', '6,00'], ['Hotwings 6 stuks', '6,50'],
      ['Borrelgarnituur 6 stuks', '6,00'], ['Loempia', '3,00'], ['Friet zonder', '5,00'], ['Friet met', '5,50'],
      ['Friet speciaal', '6,00'], ['Kroket', '3,50'], ['Frikandel', '3,50'], ['Kaassoufflé', '3,50'],
      ['Broodje kroket', '4,50'], ['Broodje frikandel', '4,50']]}
  ],
  na: [
    { t: 'Nagerechten', items: [
      ['Baklava met ijs', '7,50'], ['Baklava met raki', '9,50'], ['Dame blanche', '7,00'],
      ['Tiramisu met slagroom', '6,50'], ['Appeltaart met slagroom', '5,00'], ['Div. soorten taart met slagroom', '5,00']]},
    { t: 'IJs', note: 'Hoorntje of bakje, bolletjes naar keuze.', items: [
      ['1 bolletje', '2,25'], ['2 bolletjes', '3,75'], ['3 bolletjes', '4,50'], ['Extra slagroom', '0,75']]}
  ]
};
const GRILL = { meats: ['sis kip', 'sis rund', 'döner', 'shoarma', 'spareribs', 'kipfilet', 'biefstuk'],
  items: [['Met twee soorten vlees', '21,00'], ['Met drie soorten vlees', '24,50'], ['Met vier soorten vlees', '27,00'],
    ['Familie mixed grill', 'p.p. 36,00', 'vanaf twee personen, 6 soorten vlees']] };
const DRINKS = [
  { t: 'Warme dranken', items: [['Thee', '3,00'], ['Muntthee', '4,00'], ['Gemberthee', '4,00'], ['Koffie', '3,25'], ['Café latte', '4,25'],
    ['Koffie verkeerd', '3,50'], ['Cappuccino', '3,75'], ['Espresso', '3,25'], ['IJskoffie', '5,00'], ['Warme chocomel', '4,00'], ['Extra slagroom', '0,75']]},
  { t: 'Speciale koffies', items: [['Irish coffee', '8,00', 'met whisky'], ['Spanish coffee', '8,00', 'met Tia Maria'], ['Italian coffee', '8,00', 'met amaretto'],
    ['French coffee', '8,00', 'met Grand Marnier'], ['Russian coffee', '8,00', 'met wodka']]},
  { t: 'Frisdranken', items: [['Coca-Cola', '3,00'], ['Coca-Cola zero', '3,00'], ['Seven Up', '3,00'], ['Fanta', '3,00'], ['Cassis', '3,00'], ['Spa blauw', '3,00'],
    ['Spa rood', '3,00'], ['Bitter lemon', '3,50'], ['Tonic', '3,50'], ["Verse jus d'orange", '4,00'], ['Ice tea', '3,50'], ['Ice tea green', '3,50'],
    ['Red Bull', '3,75'], ['Red Bull speciaal', '4,50'], ['Appelsap', '3,00'], ['Sinaasappelsap', '3,00'], ['Fristi', '3,00'], ['Chocomel', '3,00'], ['Rivella', '3,50']]},
  { t: 'Bieren', items: [['Heineken', '3,50'], ['Hertog Jan', '3,50'], ['Radler', '3,50'], ['Tapbier fluitje', '3,25'], ['Tapbier pul', '6,50'],
    ['Desperado', '4,75'], ['Corona', '4,75'], ['Hoegaarden witbier', '4,75'], ['Efes', '4,75'], ['Stëlz', '5,00'],
    ['Lara speciaalbier Blond', '6,50'], ['Lara speciaalbier Tripel', '6,50'], ['Lara speciaalbier IPA', '6,50']]},
  { t: 'Wijnen', items: [['Rode wijn', '5,00'], ['Witte wijn zoet', '5,00'], ['Witte wijn droog', '5,00'], ['Rosé', '5,00']]},
  { t: 'Sterke dranken', items: [['Jonge jenever', '4,25'], ['Stroh 80', '4,25'], ['Jägermeister', '4,25'], ['Bacardi', '4,25'], ['Martini Bianco', '4,25'],
    ['Licor 43', '4,25'], ['Raki', '4,25'], ['Wodka', '4,25'], ['Whisky', '4,25'], ['Mixdrankjes', '8,00'], ['Cocktails', '9,50']]}
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const dish = ([n, p, d]) => `<div class="dish"><b>${esc(n)}</b><i>${p.startsWith('p.p.') ? p : '€ ' + p}</i>${d ? `<small>${esc(d)}</small>` : ''}</div>`;
const group = g => `<div class="group"><h3>${esc(g.t)}</h3>${g.note ? `<p class="gnote">${esc(g.note)}</p>` : ''}${g.items.map(dish).join('')}</div>`;

const panels = document.getElementById('panels');
let html = '';
for (const key of ['turks', 'grill', 'pizza', 'broodjes', 'lunch', 'na']) {
  let inner;
  if (key === 'grill') {
    inner = `<div class="grill-box"><div><h3>Mixed grill</h3><p class="gnote">Voor de mixed grill heeft u de keuze uit:</p><ul class="meats">${GRILL.meats.map(m => `<li>${m}</li>`).join('')}</ul></div><div>${GRILL.items.map(dish).join('')}</div></div>`;
  } else {
    inner = `<div class="cols">${MENU[key].map(group).join('')}</div>`;
  }
  html += `<div class="panel" role="tabpanel" id="p-${key}" aria-labelledby="t-${key}"${key === 'turks' ? '' : ' hidden'}>${inner}</div>`;
}
panels.innerHTML = html;
document.getElementById('drinks').innerHTML = DRINKS.map(group).join('');

// tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(key) {
  tabs.forEach(b => {
    const on = b.id === 't-' + key;
    b.setAttribute('aria-selected', on);
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach(b => b.addEventListener('click', () => select(b.id.slice(2))));
document.querySelectorAll('[data-goto]').forEach(a => a.addEventListener('click', () => select(a.dataset.goto)));

// mobiel menu
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
});
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', false);
}));

// nu open?
const HOURS = { 0: [13, 23], 1: [14, 22], 2: [14, 22], 3: [14, 22], 4: [14, 22], 5: [13, 23], 6: [13, 23] };
const d = new Date(), day = d.getDay(), h = d.getHours() + d.getMinutes() / 60, [o, c] = HOURS[day];
const now = document.getElementById('now');
if (h >= o && h < c) { now.textContent = `Nu open, vandaag tot ${c}:00`; now.classList.add('open'); }
else if (h < o) now.textContent = `Vandaag open vanaf ${o}:00 tot ${c}:00`;
else { const [no] = HOURS[(day + 1) % 7]; now.textContent = `Morgen weer open vanaf ${no}:00`; }
const row = document.querySelector(`#hours tr[data-d="${day}"]`); if (row) row.classList.add('today');

// formulier verstuurt niets
document.getElementById('ask').addEventListener('submit', e => { e.preventDefault(); document.getElementById('form-note').hidden = false; });
