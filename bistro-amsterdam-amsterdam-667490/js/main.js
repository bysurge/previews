// Menukaarten van bistroamsterdam.nl (lunchkaart-2026, dinerkaart-2026, drankkaart april 2025).
// Groep = [kop, prijsregel of '', items]; item = [naam, omschrijving, prijs of '']
const LUNCH_PDF = 'https://www.bistroamsterdam.nl/docs/nl/lunchkaart-2026.pdf';
const MENU = [
  { id: 'lunch', t: 'Lunch', groups: [
    ['Lunchgerechten', '', [
      ['Tosti kaas', '', ''],
      ['Tosti ham-kaas', '', ''],
      ['Tosti Amsterdam', 'Kaas, grillworst en honingmosterdsaus', ''],
      ['Broodje warm vlees', 'Met satésaus', ''],
      ['Patat in een puntzak', 'Met mayo en ketchup', ''],
      ['Broodje bal', 'Met satésaus', ''],
      ['Broodje rookworst', 'Met mosterd', ''],
      ['Broodje kroket', 'Met mosterd', ''],
      ['Patatje stoof', 'Met het zachtste en lekkerste stoofvlees van Amsterdam', ''],
      ['Uitsmijter', 'Ei, brood, kaas, ham en spek', ''],
    ], 'lunchnote'],
    ['Salade met toast', '16,50', [
      ['Boerensalade', 'Oude kaas, ei, spek, komkommer, tomaat en dressing', ''],
      ['Kipsalade', 'Gerookte kip, ei, spek, komkommer, tomaat, kaas en dressing', ''],
      ['Geitenkaassalade', 'Spek, kaas, komkommer, ei, tomaat en honingmosterdsaus', ''],
    ]],
    ["Chef's burgers & chips", '18,50', [
      ['Hamburger', 'Met sla, friet, tomaat, augurk en ui', ''],
      ['Kipburger', 'Met sla, friet, tomaat, augurk en ui', ''],
      ['Cheeseburger', 'Met sla, friet, tomaat, augurk en ui', ''],
      ['Baconburger', 'Met sla, friet, tomaat, augurk en ui', ''],
      ['Veggieburger', 'Met sla, friet, tomaat, augurk en ui', ''],
    ]],
  ]},
  { id: 'diner', t: 'Diner', groups: [
    ['Voorgerechten', '', [
      ['Stokbrood met kruidenboter', '', '6'],
      ['Groentesoep', 'Met balletjes en stokbrood', '7'],
      ['Tomatensoep', 'Met room en stokbrood', '7'],
      ['Champignons', 'Gebakken in knoflookboter', '8'],
    ]],
    ['Hoofdgerechten', '', [
      ['Stamppot', 'Met spekjes, jus en een bal gehakt of rookworst', '17'],
      ['Stamppot met sudder of hachee', 'Stoofvlees, of hachee met kruiden en ui', '20'],
      ['Raasdonders', 'Kapucijners met gebakken spek en uien, Amsterdams zuur en piccalilly', '17'],
      ['Mam’s suddervlees', 'Met rodekool, aardappelpuree en appelmoes', '22,50'],
      ['Kipschnitzel', 'Met sla en dikke frieten', '22'],
      ['Boeren kipschnitzel', 'Met champignons, ui, spek, sla en dikke frieten', '23'],
      ['Kipsaté', 'Met huisgemaakte pindasaus, sla en dikke frieten', '21,50'],
      ['Burger naar keuze', 'Hamburger, kipburger, cheeseburger, baconburger of veggieburger, met sla en friet', '18,50'],
    ]],
    ['Salade met toast', '16,50', [
      ['Boerensalade', 'Kaas, ei, spek en dressing', ''],
      ['Kipsalade', 'Kip, ei, spek, geraspte kaas en dressing', ''],
      ['Geitenkaassalade', 'Spek, honingmosterdsaus en geraspte kaas', ''],
    ]],
  ]},
  { id: 'chef', t: "Chef's specials", groups: [
    ["Chef's specials", '', [
      ['Stamppot proeverij', 'Drie Hollandse stamppotjes in mini-pannetjes, met spekjes, jus, worst en gehakt, en mama’s suddervlees', '23'],
      ['Grachtenpandje', 'Verse Hollandse biefstuk, gevuld met huisgemaakte knoflookboter, met sla en dikke frieten', '25'],
      ['Hachee van je oma', 'Met rodekool en aardappelpuree', '22,50'],
      ['Mosselen', 'Gebakken met uien, kerrie en witte wijn, met sla en dikke frieten', 'ask'],
      ['2 slibtongen', 'Met sla en dikke frieten', 'ask'],
      ['Verse biefstuk 200 gr', 'Met sla en dikke frieten', '24'],
      ['Boerenbiefstuk 200 gr', 'Met champignons, ui en spekjes, sla en dikke frieten', '25'],
    ]],
  ]},
  { id: 'borrel', t: 'Borrel & erbij', groups: [
    ['Borrelhapjes en bijgerechten', '', [
      ['Borrelplankje', 'Bitterballen, kaassoufflés en kip', '17'],
      ['Portie bitterballen', '', '9'],
      ['Portie kaassoufflé', '', '9'],
      ['Stokbrood met kruidenboter', '', '6'],
      ['Groentesoep met balletjes en stokbrood', '', '7'],
      ['Tomatensoep met room en stokbrood', '', '7'],
      ['Poffertjes', '', '7'],
    ]],
  ]},
  { id: 'toetjes', t: 'Toetjes', groups: [
    ['Toetjes', '', [
      ['Oma’s advocaatje', 'Met slagroom', '6'],
      ['Johnny Jordaan', 'Roomijs met aardbeiensaus en slagroom', '7'],
      ['Tante Leen', 'Roomijs met chocoladesaus en advocaat-slagroom', '7'],
      ['Manke Nelis', 'Roomijs met karamel, lange vingers en slagroom', '7'],
      ['Poffertjes', 'Met poedersuiker en roomboter', '7'],
      ['Mama’s warme appeltaart', 'Met slagroom', '8'],
    ]],
  ]},
  { id: 'drank', t: 'Drankjes', groups: [
    ['Koffie & thee', '', [
      ['Koffie of thee', '', '2,90'],
      ['Espresso', '', '2,90'],
      ['Cappuccino', '', '3,30'],
      ['Koffie verkeerd / caffè latte', '', '3,50'],
      ['Muntthee', '', '3,50'],
      ['Warme chocolademelk', '', '4'],
      ['Warme chocolademelk met slagroom', '', '4,50'],
      ['Irish koffie', '', '9,50'],
    ]],
    ['Frisdranken', '3,50', [
      ['Cola, cola light, Fanta, Sprite, ice tea, ginger ale', '', ''],
      ['Water, bruisend water, jus d’orange, appelsap, tonic, bitter lemon', '', ''],
    ]],
    ['Bier & wijn', '', [
      ['Bier van de tap', '', '3,75'],
      ['Bier, pint', '', '7'],
      ['Speciaalbier', '', '4,75'],
      ['Speciaalbier, pint', '', '9'],
      ['Huiswijn wit, rood of rosé', 'Per glas', '5'],
      ['Fles huiswijn', '', '24'],
    ]],
    ['Sterk & cocktails', '', [
      ['Wodka, whisky, Bacardi, likeur, cognac, jenever', '', 'ask'],
      ['Sambuca', '', '5,50'],
      ['Mojito, Aperol spritz, limoncello spritz', '', 'ask'],
      ['Gin-tonic', '', '9,50'],
    ]],
  ]},
];

const tabs = document.getElementById('tabs');
const panels = document.getElementById('panels');
const price = p => p === 'ask' ? '<span class="dish-p ask">vraag ons</span>' : p ? `<span class="dish-p">€ ${p}</span>` : '';
MENU.forEach((cat, i) => {
  const b = document.createElement('button');
  b.className = 'tab'; b.type = 'button'; b.id = 'tab-' + cat.id;
  b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'p-' + cat.id);
  b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  b.textContent = cat.t;
  b.addEventListener('click', () => show(cat.id));
  tabs.appendChild(b);

  const p = document.createElement('div');
  p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel');
  p.setAttribute('aria-labelledby', 'tab-' + cat.id);
  if (i) p.hidden = true;
  let h = '';
  cat.groups.forEach(([title, gp, items, extra]) => {
    h += `<div class="group"><h3 class="group-t">${title}${gp ? `<span>€ ${gp}</span>` : ''}</h3><ul class="dishes">`;
    items.forEach(([n, d, pr]) => {
      h += `<li><div class="dish-top"><span class="dish-n">${n}</span>${price(pr)}</div>${d ? `<p class="dish-d">${d}</p>` : ''}</li>`;
    });
    h += '</ul>';
    if (extra === 'lunchnote') h += `<p class="group-note">De prijzen van de lunchgerechten staan op <a href="${LUNCH_PDF}" target="_blank" rel="noopener">onze lunchkaart (pdf)</a>.</p>`;
    h += '</div>';
  });
  p.innerHTML = h;
  panels.appendChild(p);
});

function show(id) {
  document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.id === 'tab-' + id ? 'true' : 'false'));
  document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== 'p-' + id);
  const t = document.getElementById('tab-' + id);
  if (t) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}

const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  document.body.classList.toggle('nav-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  btn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}));

const hdr = document.getElementById('top');
const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Start op de dinerkaart (lunchprijzen staan alleen op de pdf)
document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.id === 'tab-diner' ? 'true' : 'false'));
document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== 'p-diner');
