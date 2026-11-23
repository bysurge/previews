// [naam, prijs, omschrijving]
const MENU = {
  ontbijt: [
    ['Ontbijt, all day', '', [
      ['Ontbijtplank (vanaf 2 pers.)', '€ 12,50 p.p.', 'croissant | vloerbrood | 6-minuten-eitje | boerenkaas & ham | mini yoghurtbowl | scone met jam | pancake Nutella'],
      ['Yoghurtbowl mango', '€ 8,75', 'Griekse yoghurt | mango | gedroogde banaan | granola | maplesiroop'],
      ['Pancake Nutella', '€ 10,00', 'Nutella | blauwe bes | slagroom | maplesiroop'],
      ['Kids pancakes', '€ 7,50', '2 pancakes | Smarties | marshmallows | Nutella | slagroom']]],
    ['12-uurtjes', 'Met aardappelsalade, keuze uit wit of bruin vloerbrood · glutenvrij + € 1,50', [
      ['12-uurtje deluxe', '€ 16,00', 'kaaskroket | soepje | carpaccio | gerookte zalm'],
      ['12-uurtje vlees', '€ 15,25', 'rundvleeskroket | soepje | gebakken ei | ham | kaas'],
      ['12-uurtje vis', '€ 15,25', 'garnalenkroket | soepje | gekookt ei | gerookte zalm']]]
  ],
  tosti: [
    ['Luxe tosti\'s', 'Met huisgemaakte Smaaksaus', [
      ['Smaak', '€ 10,00', 'rendang | lente-ui | chilimayo'],
      ['Pulled chicken', '€ 10,00', 'kaas | rucola | truffelmayo'],
      ['Boerenham & kaas', '€ 9,75', 'mosterdmayo | prei'],
      ['Mix & match tosti', '€ 10,50', 'kies 2 verschillende halve tosti\'s']]],
    ['Soepen', 'Met brood & kruidenboter', [
      ['Tomatensoep', '€ 8,25', ''],
      ['Momentsoep', '€ 8,00', '']]],
    ['Kids', '', [
      ['Pancakes', '€ 7,50', '2 pancakes | Smarties | marshmallows | Nutella | slagroom'],
      ['Kids tosti', '€ 5,00', 'wit casinobrood | ham | kaas'],
      ['Kidsplank koud', '€ 9,25', '2 minibroodjes | kaas | jam | Nutella | pancake | donut'],
      ['Kidsplank warm', '€ 9,75', '2 bitterballen | 2 mini frikandellen | 2 kipnuggets | friet | appelmoes | ijsmuntje']]]
  ],
  brood: [
    ['Flatbread uit de oven', '', [
      ['Stracciatella', '€ 16,00', 'pomodorisaus | tomaten | groene pesto | balsamico | geraspte Goudse kaas | rucola (parmaham + € 2,50)'],
      ['Pulled chicken', '€ 16,50', 'pomodorisaus | pulled chicken | zontomaten | geraspte Goudse kaas | rode ui | truffelmayo | rucola'],
      ['Rendang', '€ 17,50', 'tafelzuurtjes | gemengde sla | geraspte Goudse kaas | rode ui | chilimayo']]],
    ['Wraps', 'Warm geserveerd · glutenvrij + € 1,00', [
      ['Wrap kip bacon truffel', '€ 13,50', 'pulled chicken | geraspte kaas | bacon | truffelmayo | chilisaus | tomaat | komkommer | rucola'],
      ['Wrap tuna melt', '€ 16,00', 'tonijnsalade | geraspte kaas | groene pesto | zontomaat | rode ui | rucola | pestomayo']]],
    ['Sandwiches', 'Op vikingbrood met twisterfriet en saus naar keuze', [
      ['Club', '€ 16,50', 'gerookte kip | sla | komkommer | tomaat | gekookt ei | spek | Smaaksaus'],
      ['Vis', '€ 16,00', 'gerookte zalm | krabsalade | gekookt ei | dille delight | rucola'],
      ['Carpaccio', '€ 15,50', 'oude kaas | tomaat | pesto | truffelmayo | rucola'],
      ['Smaak', '€ 16,50', 'eiersalade | spek | mosterdmayo | rosbief | rucola'],
      ['Mix & match sandwich', '€ 16,75', 'kies 4 kwart sandwiches']]],
    ['Italiaans brood', 'Italiaanse bol naturel, tomaat of volkoren · glutenvrij + € 1,00', [
      ['Surf & turf', '€ 19,50', 'biefreepjes | gamba\'s | dille delight | pestomayo | rucola | rode ui'],
      ['Carpaccio', '€ 16,50', 'truffelmayo | Parmezaanse kaas | zontomaat | broadbeans | rucola'],
      ['Tonijn', '€ 13,50', '6-minuten-eitje | tafelzuurtjes | zontomaat | lente-ui | sla'],
      ['Gebakken champignons', '€ 14,00', 'rode ui | paprika | Parmezaanse kaas | rucola'],
      ['Chicken', '€ 17,00', 'guacamole-spread | rode ui | gegrilde kip | chilimayo | rucola']]]
  ],
  warm: [
    ['Uitsmijters', 'Op bruin of wit vloerbrood · glutenvrij + € 1,50', [
      ['Uitsmijter ham/kaas', '€ 13,00', '3 eieren | gemengde salade (spek + € 2,00)'],
      ['Uitsmijter Smaak', '€ 14,00', '3 eieren | ham | tomatentapenade | champignons | paprika | rode ui | aardappelsalade']]],
    ['Kroketten', '', [
      ['Ambachtelijke rundvleeskroketten', '€ 12,50', '2 kroketten | mosterdmayo'],
      ['Garnalenkroketten', '€ 14,50', '3 kroketten | chilimayo'],
      ['Kaaskroketten', '€ 12,00', '2 kroketten | mosterdmayo']]],
    ['Frietjes erbij?', '', [
      ['Frietje Smaak', '€ 4,75', 'rendang | lente-ui | chilimayo'],
      ['Frietje truffel', '€ 4,75', 'truffelmayo | Parmezaanse kaas'],
      ['Portie twisterfriet', '€ 4,25', 'met saus naar keuze']]]
  ],
  salade: [
    ['Salades', '', [
      ['Carpaccio', '€ 17,50', 'Parmezaanse kaas | olijven | zontomaat | broadbeans | truffelmayo | rucola'],
      ['Oosters', '€ 19,50', 'biefreepjes | gamba\'s | champignons | paprika | rode ui | ketjap | sesamzaadjes'],
      ['Mexicaanse kip', '€ 18,50', 'mango | nacho-crumbs | rode ui | chilimayo | guacamole']]],
    ['Borrelen', '', [
      ['Borrelplank warm (2 à 3 personen)', '€ 19,50', 'nacho\'s | bitterballen | gemengde snacks | twisterfriet'],
      ['Nacho\'s', '€ 16,00', 'pulled chicken | kaas | zure room | guacamole | tomaat'],
      ['Broodplank', '€ 9,00', 'Italiaanse bol | 3 smeersels'],
      ['Gyoza kip (6 st.)', '€ 9,50', ''],
      ['Chorizokroketjes (6 st.)', '€ 9,50', ''],
      ['Portie bitterballen (8 st.)', '€ 9,50', ''],
      ['Portie kaasstengels (8 st.)', '€ 9,50', ''],
      ['Portie gemengde snacks (8 st.)', '€ 9,75', ''],
      ['Portie friet met saus naar keuze', '€ 4,00', ''],
      ['Portie twisterfriet met saus naar keuze', '€ 4,25', ''],
      ['Friet Parmezaanse kaas & truffelmayo', '€ 4,75', '']]]
  ],
  koffie: [
    ['Warme specials', '', [
      ['Koffie van het moment', '€ 4,85', 'vraag het onze medewerkers'],
      ['Speculoos (nieuw!)', '€ 4,85', 'koffie | speculooscrème | slagroom'],
      ['Café brûlée', '€ 4,85', 'koffie | vanille-karamelsiroop | kletskop | slagroom'],
      ['Chai latte', '€ 4,60', 'dirty chai latte + € 1,00'],
      ['Verse muntthee met honing', '€ 4,20', ''],
      ['Verse gemberthee met honing', '€ 4,20', ''],
      ['Kindercappuccino', '€ 3,00', 'vanillesiroop | marshmallows | melkschuim'],
      ['Warme chocolademelk-bom met slagroom', '€ 4,75', 'zeezout-karamel, speculaas of witte chocolade'],
      ['Warme chocolademelk met slagroom', '€ 4,60', '']]],
    ['Warme dranken', 'Liever met havermelk? + € 0,50', [
      ['Koffie | espresso', '€ 3,10', ''],
      ['Thee', '€ 3,10', 'English blend, earl grey, rooibos, green tea jasmine, green sencha, green tea lemon, black red fruits, Marocco mint, ginger citrus, golden chai'],
      ['Cappuccino', '€ 3,70', ''],
      ['Flat white', '€ 4,50', ''],
      ['Koffie verkeerd', '€ 3,80', ''],
      ['Dubbele espresso', '€ 5,00', ''],
      ['Latte macchiato', '€ 4,20', '']]],
    ['Lekker bij de koffie', '', [
      ['Appeltaart met slagroom', '€ 5,00', ''],
      ['Monchou met kersen', '€ 5,00', ''],
      ['Smaak progress', '€ 5,50', 'ook klein: - € 1,50'],
      ['Meringue caramel', '€ 4,50', ''],
      ['Mini donut', '€ 2,25', ''],
      ['Worstenbrood', '€ 3,50', '']]]
  ],
  drinks: [
    ['Koude specials', '', [
      ['Homemade limonade', '€ 5,70', 'rood fruit | bruiswater | munt'],
      ['Homemade sinaasappel-kaneel', '€ 5,70', 'kaneel | bruiswater | sinaasappel'],
      ['Homemade ice tea lemon', '€ 5,70', 'homemade ice tea | lemon | munt'],
      ['Frozen cappuccino ijskoffie', '€ 5,75', 'topping naar keuze: chocolade, Bueno hazelnoot, witte chocolade of karamel · slagroom? + € 1,00'],
      ['Frozen smoothie (100% fruit, zonder toegevoegde suikers)', '€ 6,75', 'aardbei-banaan, ananas-mango, framboos-aardbei, banaan-ananas-mango-spinazie, spinazie-broccoli-pastinaak-appel']]],
    ['Cocktails', '', [
      ['Pornstar Martini', '€ 10,50', ''],
      ['Pink gin-tonic', '€ 10,50', ''],
      ['Aperol spritz', '€ 9,50', ''],
      ['Alcoholvrije pink gin-tonic', '€ 8,00', ''],
      ['Alcoholvrije Pornstar Martini', '€ 8,00', '']]],
    ['Frisdranken', '', [
      ['Coca-Cola', '€ 3,60', ''],
      ['Fanta Orange zero | cassis', '€ 3,60', ''],
      ['Fuze Tea sparkling lemon | green | peach', '€ 3,75', ''],
      ['Sprite zero', '€ 3,60', ''],
      ['Royal Bliss ginger ale', '€ 4,25', ''],
      ['Royal Bliss tonic | bitter lemon', '€ 3,60', ''],
      ['Chaudfontaine blauw | rood', '€ 3,50', ''],
      ['Appelsap', '€ 3,70', ''],
      ['Melk', '€ 3,00', ''],
      ['Verse jus d\'orange', 'klein € 4,75 | groot € 7,00', '']]],
    ['Bieren', '', [
      ['Hertog Jan 0,25 l', '€ 3,80', ''],
      ['Hertog Jan 0,45 l', '€ 6,80', ''],
      ['Hertog Jan Weizener', '€ 6,10', ''],
      ['Leffe blond | bruin', '€ 6,10', ''],
      ['Tripel Karmeliet', '€ 6,50', ''],
      ['Duvel', '€ 6,10', ''],
      ['Liefmans', '€ 5,00', ''],
      ['Corona', '€ 6,10', ''],
      ['IJwit', '€ 6,10', ''],
      ['Bier van het moment', '€ 6,10', '']]],
    ['Alcoholvrije bieren', '', [
      ['Hertog Jan 0,0%', '€ 4,00', ''],
      ['Hoegaarden Radler Lemon 0,0%', '€ 4,20', ''],
      ['Leffe blond 0,0%', '€ 5,50', ''],
      ['Liefmans 0,0%', '€ 5,00', '']]],
    ['Wijnen', 'Per glas / per fles', [
      ['Zoete witte wijn', '€ 5,25 / € 27,00', ''],
      ['Sauvignon blanc', '€ 5,50 / € 29,00', ''],
      ['Chardonnay', '€ 5,75 / € 29,00', ''],
      ['Pinot grigio', '€ 5,75 / € 29,00', ''],
      ['Merlot (rood)', '€ 5,75 / € 29,00', ''],
      ['Pinot grigio blush (rosé)', '€ 5,50 / € 28,00', '']]],
    ['Bubbels', '', [
      ['Prosecco 0,2 l', '€ 7,00', ''],
      ['Prosecco 0,75 l', '€ 26,00', ''],
      ['0,0 bubbel', '€ 6,75', '']]]
  ]
};

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
for (const [key, groups] of Object.entries(MENU)) {
  let html = '<div class="cols">';
  for (const [title, sub, items] of groups) {
    html += `<div class="grp"><h4>${esc(title)}</h4>${sub ? `<p>${esc(sub)}</p>` : ''}`;
    for (const [n, p, d] of items) html += `<div class="item"><div class="item-top"><span>${esc(n)}</span><span class="pr">${esc(p)}</span></div>${d ? `<div class="d">${esc(d)}</div>` : ''}</div>`;
    html += '</div>';
  }
  document.getElementById('p-' + key).innerHTML = html + '</div>';
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.setAttribute('aria-selected', x === t));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === 'p-' + t.dataset.p));
}));

const tog = document.querySelector('.nav-toggle');
tog.addEventListener('click', () => tog.setAttribute('aria-expanded', document.body.classList.toggle('nav-open')));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  tog.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.f-msg').classList.add('on');
}));
