// Menu van merdane.nl/menu-2/ (overgenomen nov 2026). [naam, omschrijving, prijs, pittig]
const MENU = [
  { id: 'hoofd', t: 'Hoofdgerechten', note: 'Van de houtskoolgrill, tenzij anders vermeld.', items: [
    ['Kuzu Mix', 'Op houtskool gegrild: 2 lamskoteletten en 2 lamshaasjes', '32,50'],
    ['Tournedos Steak', 'Ossenhaas van de houtskoolgrill met rode wijnsaus', '34,50'],
    ['Pirzola', 'Lamskoteletten van de houtskoolgrill', '32,50'],
    ['Küşleme', 'Lamshaas van de houtskoolgrill', '32,50'],
    ['Grill Speciale', 'Lamskotelet, lamshaas, een stukje ossenhaas, kofte en kipfilet', '32,50'],
    ['Adana Kebap', 'Lamsgehaktspies met rode uien', '27,50', 1],
    ['Bifteki', 'Lamsgehakt gevuld met kaas', '28,50', 1],
    ['Gegrilde Kipfilet', 'Met champignon-roomsaus', '26,50'],
    ['Bonfile Tava', 'Gebakken ossenhaas op champignonroomsaus', '32,50'],
    ['Sebze Güveç', 'Gebakken groenten met tomatensaus, eventueel met kaas', '22,50'],
  ]},
  { id: 'koud', t: 'Koude mezze & salades', items: [
    ['Mozzarella Caprese', 'Buffelmozzarella, rucola, tomaat, basilicum, pesto en pijnboompitjes', '9,50'],
    ['Carpaccio di Filetto', 'Ossenhaas, rucola, kappertjes, pijnboompitjes en Parmezaan', '13,50'],
    ['Cacik / Tzatziki', 'Griekse yoghurt, knoflook, komkommer en dille', '6,50'],
    ['Çerkez Tavuğu', 'Kipfilet, mayonaise, walnoten, knoflook en kruiden', '9,50'],
    ['Humus', 'Kikkererwten, sesampasta, komijn, knoflook en olijfolie', '7,50'],
    ['Patlican Salatasi', 'Gegrilde aubergine, rode puntpaprika, tomaat, peterselie, knoflook en olijfolie', '7,50'],
    ['Choriatiki / Herdersalade', 'Tomaat, rode ui, komkommer, peterselie, paprika, feta en olijven', '7,50'],
    ['Rucolasalade', 'Met pijnboompitten, Parmezaan en granaatappel', '6,50'],
    ['Kavun & Peynir', 'Suikermeloen met feta', '11,50'],
    ['Olijf & Feta', 'Gekruide zwarte en groene olijven, feta en extra vierge olijfolie', '5,50'],
  ]},
  { id: 'warm', t: 'Warme mezze & tapas', items: [
    ['Pomodorisoep', 'Huisgemaakte tomatensoep met Parmezaan en room', '7,00'],
    ['Çingene Köftesi', 'Pittige gipsy gehaktballetjes met rode ui', '14,50', 1],
    ['Lomo de Cordero', 'Gegrilde lamshaasjes met honing-tijmsaus', '17,50'],
    ['Albondigas', 'Gekruide rundergehaktballetjes in tomatensaus', '11,50'],
    ['Arnavut Ciğeri', 'Gebakken lamslever met rode ui en peterselie', '16,50'],
    ['Chuletas de Cordero', 'Gegrilde lamskoteletjes met honing-tijmsaus', '17,50'],
    ['Sigara Böreği', 'Krokant filodeeg met feta', '7,00'],
    ['Funghi Trifolati', 'Champignons met paprika, knoflook, ui, peterselie en witte wijn', '12,50'],
    ['Funghi al Gorgonzola', 'Champignons in roomsaus met knoflook en gorgonzola', '12,50'],
    ['Parmigiana di Melanzane', 'Aubergines uit de oven met tomatensaus, Parmezaan en basilicum', '13,50'],
  ]},
  { id: 'vis', t: 'Vis', items: [
    ['Levrek Pan', 'Zeebaarsfilet gebakken in roomboter, met gebakken groenten, rucola en rode uien', '28,50'],
    ['Levrek Grill', 'Zeebaarsfilet van de houtskoolgrill, met gebakken groenten, rucola en rode uien', '28,50'],
    ['Zalm', 'Zalmfilet van de houtskoolgrill, met gebakken groenten, rucola en rode uien', '28,50'],
    ['Zeetong', 'Gebakken in roomboter, met groenten, rucola en rode uien', 'dagprijs'],
  ]},
  { id: 'pizza', t: "Pizza's", items: [
    ['Margherita', 'Mozzarella en Italiaanse kruiden', '12,50'],
    ['Funghi', 'Champignons', '13,50'],
    ['Bufala', 'Verse tomaten, buffelmozzarella, rucola en pesto', '16,50'],
    ['Vegetariana', 'Champignon, ui, paprika, olijven en kappertjes', '16,50'],
    ['ai 4 Formaggi', 'Vier kazen', '16,50'],
    ['Tonno', 'Tonijn, rode ui en kappertjes', '16,50'],
    ['Pollo', 'Pikante kipfilet, ui en champignons', '17,50'],
    ['Peperoni', 'Pikante worst', '17,50', 1],
    ['Gamberi', "Gamba's, Spaanse peper en knoflook", '19,50', 1],
    ['Carpaccio', 'Runderhaas, Parmezaan, pijnboompitten, kappertjes en rucola', '19,50'],
  ]},
  { id: 'pasta', t: "Pasta's & manti", note: "Alle pasta's met penne.", items: [
    ['Funghi en Gorgonzola', '', '16,50'],
    ['Vegetariana', 'Seizoensgroenten in tomatensaus', '17,50'],
    ['Pollo', 'Kipfilet, champignons en roomsaus', '18,50'],
    ['Salmone', 'Verse zalmfilet in roomsaus', '21,50'],
    ['Gamberi', "Gamba's, paprika, knoflook en tomatensaus", '22,50'],
    ['Ossenhaas', 'Ossenhaaspuntjes, champignon, knoflook en tomatensaus', '22,50'],
    ['Pesto', 'Basilicumpesto, room en knoflook', '16,50'],
    ['Caprese', 'Tomatensaus, buffelmozzarella, tomaat en basilicum', '16,50'],
    ['Polpette', 'Gekruide rundergehaktballetjes in tomatensaus', '18,50'],
    ['Arrabiata', 'Tomatensaus, Spaanse peper en basilicum', '16,50', 1],
    ['Etli Manti', 'Turkse raviolibuideltjes met rundergehakt, yoghurt, knoflook en tomatensaus', '17,50'],
    ['Patatesli Manti', 'Turkse raviolibuideltjes met aardappelpuree, yoghurt, knoflook en tomatensaus', '14,50'],
  ]},
  { id: 'kids', t: 'Kinderen & extra', items: [
    ['Gegrilde kipfilet', 'Voor de kleine gasten: met frietjes, mayonaise en ketchup', '14,50'],
    ['Gegrilde lamshaas-stukjes', 'Voor de kleine gasten: met frietjes', '18,50'],
    ['Portie friet', 'Met tomatenketchup en mayonaise', '5,50'],
    ['Mandje brood', '', '1,50'],
    ['Gebakken aardappel', '', '3,50'],
    ['Gebakken dagverse groenten', '', '4,50'],
    ['Bulgur rijst', '', '3,50'],
    ['Gemengde salade', '', '3,50'],
  ]},
  { id: 'dessert', t: 'Nagerechten', items: [
    ['Baklava', 'Filodeeg met pistache en suikersiroop, met een bol vanille-ijs', '8,50'],
    ['Tiramisu', 'Huisgemaakt', '8,50'],
    ['Dame Blanche', '', '8,50'],
    ['IJs Special', 'Vanille, aardbei en chocolade met slagroom en chocoladesaus', '8,50'],
    ['Kinderijs', '', '4,50'],
    ['Extra bol ijs', '', '2,50'],
  ]},
];

const tabs = document.getElementById('tabs');
const panels = document.getElementById('panels');
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
  let h = `<h3 class="panel-t">${cat.t}</h3>` + (cat.note ? `<p class="panel-note">${cat.note}</p>` : '') + '<ul class="dishes">';
  cat.items.forEach(([n, d, pr, hot]) => {
    h += `<li><div class="dish-top"><span class="dish-n">${n}${hot ? ' <em class="hot" title="pittig">pittig</em>' : ''}</span><span class="dish-p">${pr === 'dagprijs' ? 'vraag naar de prijs' : '€ ' + pr}</span></div>${d ? `<p class="dish-d">${d}</p>` : ''}</li>`;
  });
  p.innerHTML = h + '</ul>';
  panels.appendChild(p);
});

function show(id) {
  document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.id === 'tab-' + id ? 'true' : 'false'));
  document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== 'p-' + id);
  const t = document.getElementById('tab-' + id);
  if (t) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}
document.querySelectorAll('.pillar[data-tab]').forEach(a => a.addEventListener('click', () => show(a.dataset.tab)));

// Mobiel menu
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

// Header vult zich na het scrollen
const hdr = document.getElementById('top');
const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Formulier: voorbeeld, verstuurt niets
document.getElementById('resForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').hidden = false;
});
