// [naam, prijs, omschrijving, vlaggen]  v = vegetarisch, s = ma/wo/do special (15,-)
const MENU = {
  lunch: {
    note: 'Lunch op vrijdag, zaterdag en zondag van 12:00 tot 15:00.',
    groups: [
      ['Soep', 'Geserveerd met brood en boter', [
        ['Tomatensoep', '7,5', 'bieslook | spicy gehakt | geslagen room (ook vegetarisch mogelijk)'],
        ['Seizoensoep', '7,5', 'wisselende soep']]],
      ['Lunch to share', 'Te bestellen vanaf 2 personen', [
        ['Lunch to share', '22,5 p.p.', 'smoothie | salade burrata | runder carpaccio | flatbread salmon melt | red shakshuka eitjes | brood en dips']]],
      ['Classic lunch plankje', '', [
        ['Classic lunch plankje', '14,5', 'tomatensoepje | Uncle Buck\'s uitsmijter: eitjes, runderrosbief uit de Josper, tomaat, truffelmayo, bacon, Parmezaan | bourgondische kroket met brood']]],
      ['Brood en zo', 'Boerenbrood wit of bruin', [
        ['Brood carpaccio', '14', 'runder carpaccio | truffelmayonaise | rucola | Parmezaan | pijnboompitten | gepickelde rode ui'],
        ['Brood gerookte zalm', '13,5', 'tzatziki | sla mix | gepickelde rode ui | komkommer'],
        ['Brood burrata', '13,5', 'pesto mayonaise | sla mix | avocado | tomatensalsa | crispy chili', 'v'],
        ['Brood Spaanse ham', '14', 'serranoham | truffelmayonaise | rucola | Parmezaan | zwarte olijfjes | pesto'],
        ['Kroketten met brood', '13,5', 'naar keuze 2 bourgondische rundvlees- of 2 groentekroketten | mosterdmayonaise | salade | Kesebeke augurk'],
        ['Kroketten met friet', '15,5', 'zoals hierboven, met friet']]],
      ['Flatbread', 'To share or not', [
        ['Flatbread salmon', '19,5', 'gerookte zalm | kruidenmayonaise | kaas mix | gepickelde rode ui | rucola'],
        ['Flatbread chicken', '19,5', 'pulled chicken | chipotle mayonaise | kaas mix | gepickelde rode ui | rucola'],
        ['Flatbread carpaccio', '19,5', 'rundercarpaccio | truffelmayonaise | Parmezaan | rucola | pijnboompitten | gepickelde rode ui']]],
      ['Salade', 'Geserveerd met brood en boter', [
        ['Classic carpaccio', '15,5 / XL 19,8', 'rundercarpaccio | truffelmayonaise | rucola | gepekelde rode ui | Parmezaan | pijnboompitten | truffel krokant'],
        ['Black Stone carpaccio', '16,5 / XL 20,5', 'rundercarpaccio uit de Josper | serranoham | sla mix | knolselderijsalade | appel | truffel | walnoten'],
        ['Salade uit de zee', '19,5 / XL 23,8', 'grote garnalen van de Josper | gerookte zalm | gefrituurde calamares | gemengde salade | avocado | gemarineerde cherrytomaat | cocktailsaus | crispy chiliolie'],
        ['Burrata, one size fits all', '18,5', 'pesto mayo | sla mix | avocado | tomatensalsa | crispy chili | brood krokant · + serranoham 5', 'v'],
        ['Oosterse gamba\'s', '16,5 / XL 21,5', 'in tempura gebakken (5 of 8) | sesamsaus | radijs | komkommer | bosui | krokante ui | furikake | wasabimayonaise']]],
      ['Eieren', '', [
        ['Eggs Benedict zalm', '12,7', 'brioche bol | gerookte zalm | 2 gepocheerde eitjes | hollandaisesaus | kruidensla'],
        ['Eggs Benedict Spaanse ham', '13,5', 'brioche bol | Spaanse ham | 2 gepocheerde eitjes | hollandaisesaus | kruidensla'],
        ['Uncle Buck\'s uitsmijter', '13,5', 'boerenbrood wit of bruin | 3 gebakken eitjes | runderrosbief uit de Josper | tomaat | truffelmayo | bacon | Parmezaan'],
        ['Red shakshuka', '12,5', 'eitjes uit de oven | saus van tomaat | kruiden | paprika | ui | fetakaas | pico de gallo | brood', 'v']]]
    ]
  },
  bites: {
    note: 'Bites enzo van 14:00 tot 22:00.',
    groups: [
      ['Bites enzo', '', [
        ['Brood & dips', '7,5', 'Black Stone boter | truffelmayonaise | tomatentapenade', 'v'],
        ['Nacho classic', '12,5', 'warme tortillachips | rode salsa | kaas mix | crème fraîche | guacamole', 'v'],
        ['Nacho pulled chicken', '15,5', 'zoals classic, met pulled chicken'],
        ['Nacho Mexicaans gehakt', '15,5', 'zoals classic, met Mexicaans gehakt'],
        ['KFC chicken', '10', 'Korean fried chicken | yakitori | furikake | gefrituurde uitjes | chilisaus'],
        ['Moinkballs (8 st.)', '12,5', 'runderballetjes uit de Josper | gerookt spek | BBQ-colasaus'],
        ['Gamba\'s uit de oven', '12,7', '6 grote gepelde gamba\'s | peperknoflookolie'],
        ['Jamaican jerk chicken wings (3 st.)', '8', 'gemarineerd | Josper gegrild | BBQ-saus'],
        ['Mini spareribbetjes', '13,5', '4 ribbetjes | zoetpittige lak | BBQ-saus'],
        ['Mandje friet', '4', 'met mayonaise']]],
      ['Loaded fries', 'Steakhouse friet, of zoete-aardappelfriet + 3,5', [
        ['Truffel & Parmezaan', '11,5', 'truffelmayonaise | Parmezaan | bosui | truffelchips', 'v'],
        ['Pulled pork & honingmosterdsaus', '14,5', 'honingmosterdsaus | kaasmix | bosui | krokante ui'],
        ['Pulled chicken & sriracha', '14,5', 'chipotlemayonaise | kaasmix | bosui | krokante ui']]],
      ['Bitterbal en co', '', [
        ['Bitterballen (8 st.)', '9,8', 'Bourgondiër bitterballen | mosterdmayonaise'],
        ['Bittergarnituur (12 st.)', '11', 'mayo | curry'],
        ['Typical Dutch (10 st.)', '10', 'bitterballen | mini frikandellen | mayonaise']]],
      ['Sushi', '4 of 8 stuks', [
        ['Sushi crispy gamba', '9,5 / 17,5', 'sushirijst | tempura gamba | avocado | komkommer | cressen | krokante ui | tobiko | furikake | sesamsaus | Kewpie mayonaise'],
        ['Sushi Black Stone beef', '9,5 / 17,5', 'sushirijst | tataki beef | avocado | komkommer | cresson | krokante ui | furikake | yakinikusaus | Kewpie mayonaise', 's'],
        ['Sushi teriyaki chicken', '8,5 / 16', 'sushirijst | chicken teriyaki | avocado | komkommer | cressen | krokante ui | furikake | sesamsaus | Kewpie mayonaise'],
        ['Sushi naked rol', '7,5 / 15', 'sushirijst | avocado | komkommer | cresson | krokante ui | furikake | sesamsaus | Kewpie mayonaise', 'v'],
        ['Sushi gerookte zalm', '9,5 / 17,5', 'sushirijst | gerookte zalm | roomkaas | avocado | komkommer | cressen | krokante ui | tobiko | furikake | sesamsaus | Kewpie mayonaise']]]
    ]
  },
  diner: {
    note: 'Diner van 17:00 tot 21:30. Ook \'s avonds op de kaart: de soepen, salades en flatbreads (zie Lunch); de Flatbread salmon, Classic carpaccio XL, Burrata en Oosterse gamba\'s XL doen dan mee met de ma/wo/do-special.',
    special: ['Ma · wo · do specials', 'Iedere maandag, woensdag en donderdag zijn de gerechten met een ★ voor 15,-.'],
    groups: [
      ['Burgers', '', [
        ['Après-ski burger', '17,5', '100% runderburger | Zwitserse raclettekaas | aardappelrösti | gebakken uien | crispy bacon | sla | augurk | mosterdmayonaise', 's'],
        ['Classic burger', '16', '100% runderburger | brioche bun | mosterd | ketchup | lollo verde | augurk | gebakken ui · cheese +2 · bacon +2,5', 's'],
        ['Truffelburger', '16,5', '100% runderburger | brioche bun | Parmezaan | rucola | augurk | gebakken ui | truffelmayonaise | streaky bacon'],
        ['Chicken burger', '16', 'crispy gebakken kiphaasjes | wortel-koolsalade | ranchdressing | jalapeño\'s | sla | honingmosterdsaus', 's'],
        ['Mandje friet', '4', 'mayonaise']]],
      ['Plate', 'Geserveerd met friet en salade', [
        ['Kipsaté', '19,5', 'kippendijenspies | satésaus | krokante uitjes | cassave kroepoek', 's'],
        ['Spareribs', '23,5', 'super malse ribbetjes | zoetpittige lak | 2 koude sauzen'],
        ['Gamba\'s', '24,8', '10 grote gepelde gamba\'s | peperknoflookolie'],
        ['BBQ kippetje', '22,5', 'poussin | citroen | kruiden | BBQ-saus', 's'],
        ['Groentetaartje', '22,8', 'Provençaalse groenten | gepofte cherrytomaatjes | gegrilde groene asperges | rucola | pestoolie', 'vs'],
        ['Mixed grill', '30,8', 'biefstuk | porksteak | spareribs | chickenwing | tzatziki | BBQ-saus'],
        ['Fish & chips', '22', 'gefrituurde witvis | remouladesaus'],
        ['Zalm', '24,8', 'groene kruidenkorst | hollandaisesaus']]],
      ['Kids only', '', [
        ['Boevenbord', '0', 'extra bord om mee te eten'],
        ['Kleine tomatensoep', '5,8', 'tomaat | room | bieslook | gehakt'],
        ['Mini nacho classic', '6,5', 'tortillachips uit de oven | rode salsa | kaas mix | zure room', 'v'],
        ['Cadillac menu', '10,9', 'friet | appelmoes | mayonaise | keuze uit kipnuggets, frikandel of kroket | en ranja of appelsap'],
        ['Schatkist ijsje', '3,75', 'vanille- en chocoladeroomijs']]]
    ]
  },
  steaks: {
    note: 'Bak hem zelf perfect op onze black stone van 350 graden, of laat hem door ons bereiden in onze Spaanse houtskooloven. Alle steaks met saus naar keuze.',
    groups: [
      ['Steaks', '', [
        ['Black Stone steak', '200 gr 24,5 / 300 gr 29,5', 'biefstuk van de kogel'],
        ['Beef tenderloin', '200 gr 36,5 / 300 gr 43,5', 'ossenhaas blonde d\'Aquitaine'],
        ['Ribeye dry aged', '200 gr 27,5 / 300 gr 30,5', 'super mals ribstuk zonder bot'],
        ['NY strip sirloin steak', '300 gr 32,5', 'entrecote met vetrandje'],
        ['Porksteak', '300 gr 24,5', 'met Griekse twist'],
        ['T-bone steak', '500 gr 39,5', 'twee topstukken in één: malse ossenhaas én sappige entrecote, gescheiden door het kenmerkende T-bot']]],
      ['Mix it up', 'Saus naar keuze', [
        ['Tenderloin & Black Stone biefstuk', '400 gr 49,5', ''],
        ['Black Stone biefstuk & porksteak', '400 gr 38,5', ''],
        ['Black Stone biefstuk, tenderloin & porksteak', '600 gr 67', ''],
        ['Upgrade: 3 grote gamba\'s', '9,5', '']]],
      ['Surf it up', 'Saus naar keuze', [
        ['Black Stone steak 200 gr + 3 grote Argentijnse garnalen', '30,5', ''],
        ['Entrecote 300 gr + 3 grote Argentijnse garnalen', '37,5', ''],
        ['Ribeye 200 gr + 3 grote Argentijnse garnalen', '33,5', ''],
        ['Tenderloin 200 gr + 3 grote Argentijnse garnalen', '42,5', '']]],
      ['Josper experience', 'Robuuste plank to share, met salade, friet en saus naar keuze. Voor 2 personen, alleen per tafel te bestellen.', [
        ['Gold', '90', 'Black Stone biefstuk (200 gr) | entrecote (200 gr) | ibérico pork (300 gr) | ½ sparerib'],
        ['Diamond', '105', 'ribeye (200 gr) | Black Stone biefstuk (200 gr) | ibérico pork (300 gr) | 6 grote garnalen | ½ sparerib | chickenwings']]],
      ['Sauzen', 'Keuze uit', [
        ['Rodewijnsaus · pepersaus · chimichurri · BBQ-saus · Black Stone boter · truffelmayonaise', '', '']]],
      ['Sides', '', [
        ['Friet met mayonaise', '4', '', 'v'],
        ['Truffelfriet', '5', 'zoete-aardappelfriet | truffelmayonaise', 'v'],
        ['Patatas bravas', '5', 'rode salsa | spicy mayonaise', 'v'],
        ['Warme groenten', '4,8', '', 'v'],
        ['Maiskolf', '4', 'limoen | honing | chipotlekruiden', 'v'],
        ['Black Stone salade', '4,3', '', 'v'],
        ['Gebakken champignons', '4,5', '', 'v']]]
    ]
  },
  dessert: {
    note: '',
    groups: [
      ['Desserts', '', [
        ['Chocoholic Dubai style', '11,5', 'romige chocolade | knapperige kataifi | geroosterde pistachenoten | Dubai roomijs', 'v'],
        ['IJscoupe Romanoff', '9,5', 'verse aardbeien | marmer roomijs aardbeien | Romanoff-room (bevat alcohol)', 'v'],
        ['Dessertboom', '13,5 p.p.', 'Vanaf 2 personen. Kies 3 desserts en/of cocktails (maximaal 6 verschillende): ijsmacaron framboos, red fruit on a stick, dame blanche, Espresso Martini (18+), Sex on the Beach (18+), Virgin Star mocktail, ijskoffie karamel, ijskoffie', 'v']]],
      ['Koffie & cocktail', '', [
        ['Speciale koffie', '7,5', 'koffie met likeur naar keuze | slagroom'],
        ['Espresso Martini', '11,5', 'Ketel One vodka | Tia Maria | verse espresso'],
        ['IJskoffie', '7,5', 'koffie | vanille-ijs | slagroom · smaakje erin? siroop + 0,7: karamel, hazelnoot of vanille']]]
    ]
  }
};

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
for (const [key, data] of Object.entries(MENU)) {
  const el = document.getElementById('p-' + key);
  let html = data.note ? `<p class="panel-note">${esc(data.note)}</p>` : '';
  html += '<div class="cols">';
  if (data.special) html += `<div class="grp special"><h4>${data.special[0]}</h4><p>${data.special[1]}</p></div>`;
  for (const [title, sub, items] of data.groups) {
    html += `<div class="grp"><h4>${esc(title)}</h4>${sub ? `<p>${esc(sub)}</p>` : ''}`;
    for (const [n, p, d, f = ''] of items) {
      html += `<div class="item"><div class="item-top"><span>${esc(n)}${f.includes('v') ? '<span class="v" title="vegetarisch">V</span>' : ''}${f.includes('s') ? '<span class="star" title="ma/wo/do 15,-">★</span>' : ''}</span><span class="pr">${esc(p)}</span></div>${d ? `<div class="d">${esc(d)}</div>` : ''}</div>`;
    }
    html += '</div>';
  }
  el.innerHTML = html + '</div>';
}

// tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.setAttribute('aria-selected', x === t));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === 'p-' + t.dataset.p));
}));

// mobile nav
const tog = document.querySelector('.nav-toggle');
tog.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  tog.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  tog.setAttribute('aria-expanded', 'false');
}));

// hero slideshow
const slides = document.querySelectorAll('.slides img');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && slides.length > 1) {
  let i = 0;
  setInterval(() => { slides[i].classList.remove('on'); i = (i + 1) % slides.length; slides[i].classList.add('on'); }, 6000);
}

// opening hours today: [open, close] in minutes, close past midnight > 1440
const HOURS = { 0: [720, 1440], 1: [1020, 1440], 2: null, 3: [1020, 1440], 4: [1020, 1440], 5: [720, 1560], 6: [720, 1560] };
const fmt = m => String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
(function () {
  const now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  const prev = HOURS[(d + 6) % 7];
  let open = false, txt;
  if (prev && prev[1] > 1440 && m < prev[1] - 1440) { open = true; txt = 'Nu open tot ' + fmt(prev[1]); }
  else if (HOURS[d] && m >= HOURS[d][0] && m < HOURS[d][1]) { open = true; txt = 'Nu open tot ' + fmt(HOURS[d][1]); }
  else if (HOURS[d] && m < HOURS[d][0]) txt = 'Vandaag open vanaf ' + fmt(HOURS[d][0]);
  else txt = d === 2 ? 'Dinsdag gesloten, woensdag weer open vanaf 17:00' : 'Nu gesloten';
  document.getElementById('today').innerHTML =
    `<span><span class="dot${open ? ' open' : ''}"></span><b>${txt}</b></span><span>Wilhelminaplein 9b, Someren</span><span><a href="tel:+31493843224">0493 - 84 32 24</a></span>`;
  const row = document.querySelector(`#hours tr[data-d="${d}"]`);
  if (row) row.classList.add('now');
})();

// demo forms
document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.f-msg').classList.add('on');
}));
