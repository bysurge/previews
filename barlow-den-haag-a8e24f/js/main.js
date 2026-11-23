// Barlow preview: kaarten (tabs), arrangementen-tabs, mobiel menu, open-status, demo-formulieren.
// Item: [naam NL, prijs, engels, extra]
const MENU = [
  { id: 'lunch', tab: 'Ontbijt & lunch', groups: [
    { h: 'All day', t: '09:00 - 15:30', items: [
      ['Boerenyoghurt (biologisch), granola, vers fruit, chia pudding, rauwe weidehoning en matcha', '8,50', 'Organic yoghurt with granola, fresh fruit, honey, chia pudding and matcha', 'Extra: kokosvlokken + 1,00'],
    ]},
    { h: 'Toasted & warm', t: '09:00 - 15:30', items: [
      ['Tosti van Menno met belegen boerenkaas, boerenham en ketchup', '6,00', 'Menno\'s grilled sandwich with matured cheese, farmhouse ham and ketchup'],
      ['Tuna melt: focaccia, tonijn, cheddar, gemarineerde rode ui en jalapeño', '11,50', 'Tuna melt with tuna, cheddar, marinated red onion and jalapeño'],
      ['Italian melt: focaccia, mozzarella, tomaat, rucola en pesto', '11,90', 'Italian melt with mozzarella, tomato, arugula and pesto'],
    ]},
    { h: 'Haagse eitjes', t: '09:00 - 15:30', sub: '3 scharreleitjes van Haagse Eitjes', items: [
      ['Uitsmijter naturel', '9,50', 'Fried eggs', 'Extra topping boerenkaas, boerenham of spek: + 1,50 per topping'],
    ]},
    { h: 'Broodjes', t: '11:30 - 15:30', sub: 'Keuze uit meerzaden of spelt (+ 0,50)', items: [
      ['Haagsche weiderund croquetten met grove mosterd (2 st.)', '13,00', 'Local beef croquettes with mustard (2 pcs.)'],
      ['Hollandse garnalencroquetten met citrus-wasabimayonaise (2 st.)', '13,90', 'Dutch shrimp croquettes (2 pcs.) with citrus-wasabi mayonnaise'],
      ['Geroosterde teriyaki kip, sesam, komkommer, lente-ui en cashewnoten', '13,50', 'Roasted teriyaki chicken sandwich with sesame, cucumber, spring onion and cashew nuts'],
      ['Belegen boerenkaas met mosterdmayonaise', '8,50', 'Matured cheese sandwich with mustard mayonnaise'],
      ['Tonijnsalade, wakame, komkommer en furikake', '12,50', 'Tuna salad, wakame, cucumber and furikake'],
      ['Hummus, citroen, olijf, zongedroogde tomaat, granaatappel en pistache', '10,90', 'Hummus sandwich with lemon, olives, sun-dried tomatoes, pomegranate and pistachios'],
      ['Avocado, gekookt eitje, bieslook en tomaat', '10,90', 'Sandwich avocado, boiled egg, chives and tomato', '+ gerookte zalm 4,50'],
      ['Focaccia serranoham, mozzarella, tomaat, pesto en rucola', '13,50', 'Serrano ham, mozzarella, tomato, pesto and arugula'],
    ]},
    { h: 'Soep', t: '11:30 - 15:30', items: [
      ['Romige bloemkoolsoep, cashew, oesterzwammen en bieslook', '9,90', 'Creamy cauliflower soup with cashew, oyster mushrooms and chives'],
      ['Gazpacho van tomaat en watermeloen, basilicumolie, komkommer en rode paprika', '8,90', 'Gazpacho from tomato and watermelon, basil oil, cucumber and bell pepper'],
    ]},
    { h: 'Salads & bowls', t: '11:30 - 15:30', items: [
      ['Caesar salade, langzaam gegaarde kippendij, baby gem, Haags eitje, ansjovis, Parmezaan, croutons, caesardressing', '18,90', 'Caesar salad, baby gem, slowly braised chicken thigh, local egg, anchovy, parmesan, croutons, caesar dressing'],
      ['Chicken teriyaki bowl: teriyaki kip, rijst, sesam, edamame, komkommer, avocado, wortel, gemarineerde rode ui en pinda-limoendressing', '18,90', 'Chicken teriyaki bowl, rice, sesame, edamame, cucumber, avocado, carrot, marinated red onion and peanut-lime'],
      ['Tuna bowl: rijst, edamame, komkommer, avocado, radijs, wakame, sesam, mango-kimchidressing', '19,50', 'Barlow tuna bowl, rice, edamame, cucumber, avocado, radish, wakame, sesame and mango-kimchi dressing'],
      ['Vegan tofu bowl: tofu, rijst, edamame, komkommer, avocado, radijs, wakame, sesam en mango-kimchisaus', '17,50', 'Bowl with tofu, rice, edamame, cucumber, avocado, radish, wakame, sesame and mango-kimchi sauce'],
      ['Gamba\'s salade, avocado, paprika, feta, komkommer, cherrytomaat, mangodressing, croutons', '17,50', 'Prawn salad, avocado, bell pepper, feta, cucumber, cherry tomato, mango dressing, croutons'],
    ]},
    { h: 'Specials', t: '11:30 - 15:30', items: [
      ['Truffelrisotto met gebakken paddenstoelen, Parmezaanse kaas en rucola', '21,90', 'Truffle risotto with sautéed mushrooms, parmesan and arugula'],
      ['Burrata met geroosterde amandelen, perzik, witlof, aceto balsamico, honing-citroendressing en toast van Menno', '13,90', 'Burrata with roasted almonds, peach, chicory, balsamic vinegar, honey-citrus dressing and Menno\'s toast'],
      ['Steak tartaar (rauw), zacht Haags eitje, worcestershiresaus, augurk, Parmezaan, balsamico crumble en toast van Menno', '16,00', 'Steak tartare (raw) with soft local egg yolk, worcestershire sauce, pickle, parmesan, balsamic crumble and Menno\'s toast'],
    ]},
    { h: 'Sweets & pastry', t: '09:00 - 17:00', items: [
      ['Appeltaart', '5,25', 'Apple pie'], ['Raspberry cake', '5,50'], ['Carrot cake', '5,50'], ['Slagroom', '0,70', 'Whipped cream'],
    ]},
  ]},
  { id: 'diner', tab: 'Diner', groups: [
    { h: 'Soep', items: [
      ['Romige bloemkoolsoep, cashew, oesterzwammen en bieslook', '9,90', 'Creamy cauliflower soup with cashew, oyster mushrooms and chives'],
      ['Gazpacho van tomaat en watermeloen, basilicumolie, komkommer en rode paprika', '8,90', 'Gazpacho from tomato and watermelon, basil oil, cucumber and bell pepper'],
    ]},
    { h: 'Voorgerechten', items: [
      ['Burrata met geroosterde amandelen, perzik, witlof, aceto balsamico, honing-citroendressing en toast van Menno', '13,90', 'Burrata with roasted almonds, peach, chicory, balsamic vinegar, honey-citrus dressing and Menno\'s toast'],
      ['Iberico rib fingers, korean style, spicy mayo en bosui', '16,00', 'Iberico rib fingers, korean style with spicy mayo and spring onion'],
      ['Steak tartaar (rauw), zacht Haags eitje, worcestershiresaus, augurk, Parmezaan, balsamico crumble en toast van Menno', '16,00', 'Steak tartare (raw) with soft local egg yolk, worcestershire sauce, pickle, parmesan, balsamic crumble and Menno\'s toast'],
      ['Tonijn tataki, wakame, radijs, wasabi en mayo-sesamdressing', '15,50', 'Tuna tataki, wakame, radish, wasabi, mayonnaise sesame dressing'],
      ['Carpaccio van rode biet, geitenkaas, walnoot en rucola', '12,90', 'Beetroot carpaccio, goat cheese, walnuts, arugula and herb oil'],
      ['Geroosterde bloemkool, tahini-yoghurt, kruidenolie, harissa en pompoenpitten', '12,90', 'Roasted cauliflower with harissa, tahini-yogurt, herb oil and pumpkin seeds'],
    ]},
    { h: 'Salads & bowls', items: [
      ['Caesar salade, langzaam gegaarde kippendij, baby gem, Haags eitje, ansjovis, Parmezaan, croutons, caesardressing', '18,90', 'Caesar salad, baby gem, slowly braised chicken thigh, local egg, anchovy, parmesan, croutons, caesar dressing'],
      ['Chicken teriyaki bowl: teriyaki kip, rijst, sesam, edamame, komkommer, avocado, wortel, gemarineerde rode ui en pinda-limoendressing', '18,90', 'Chicken teriyaki bowl, rice, sesame, edamame, cucumber, avocado, carrot, marinated red onion and peanut-lime'],
      ['Tuna bowl: rijst, edamame, komkommer, avocado, radijs, wakame, sesam, mango-kimchidressing', '19,50', 'Barlow tuna bowl, rice, edamame, cucumber, avocado, radish, wakame, sesame and mango-kimchi dressing'],
      ['Vegan tofu bowl: tofu, rijst, edamame, komkommer, avocado, radijs, wakame, sesam en mango-kimchisaus', '17,50', 'Bowl with tofu, rice, edamame, cucumber, avocado, radish, wakame, sesame and mango-kimchi sauce'],
    ]},
    { h: 'Hoofdgerechten', items: [
      ['US beef burger, bacon, cheddar, Barlow-saus, augurk, rode ui en frites', '23,90', 'US beef burger, bacon, cheddar, Barlow sauce, pickles, red onion and fries'],
      ['Vegetarische Beyond burger, cheddar, tomaat, Barlow-saus, augurk, rode ui en frites', '23,90', 'Vegetarian Beyond burger with cheddar, tomato, Barlow sauce, pickles, red onion and fries'],
      ['Sliptongen meunière, botersaus, citroen, kappertjes en peterselie', '22,50', 'Dover sole meunière with butter sauce, lemon, capers and parsley'],
      ['Kip suprême, dagverse groenten, pastinaak, tomaat-dragonroomsaus', '23,50', 'Chicken suprême, parsnip, fresh seasonal vegetables and a creamy tomato tarragon sauce'],
      ['Ribeye (200 gr.) met dagverse groenten, roseval en beurre de Paris', '25,90', 'Ribeye with fresh seasonal vegetables, roseval potato and beurre de Paris'],
      ['Truffelrisotto met gebakken paddenstoelen, Parmezaanse kaas, rucola', '21,90', 'Truffle risotto with sautéed mushrooms, parmesan and arugula'],
      ['Zeebaars, dagverse groenten, roseval met een antiboise', '25,50', 'Sea bass, roseval potato, fresh seasonal vegetables and antiboise'],
    ]},
    { h: 'Bijgerechten', items: [
      ['Frites met mayo', '5,75', 'Fries with mayonnaise'],
      ['Frites met Parmezaanse kaas en truffelmayonaise', '7,50', 'Fries with parmesan cheese and truffle mayonnaise'],
      ['Gemengde salade', '5,00', 'Side salad'],
    ]},
    { h: 'Desserts', items: [
      ['Frambozen cake', '5,50', 'Vegan raspberry cake'],
      ['Oreo cheesecake met witte-chocolade-ijs', '10,50', 'Oreo cheesecake with white chocolate ice cream'],
      ['Chocoladetaartje met vanille-ijs en karamelsaus', '10,90', 'Chocolate cake with vanilla ice cream and caramel sauce'],
      ['Bolletje ijs', '2,50', 'Ice cream scoop'],
    ]},
  ], foot: 'Wij werken uitsluitend met dagverse producten.' },
  { id: 'borrel', tab: 'Borrelhappen', groups: [
    { h: 'Borrelhappen', items: [
      ['Brood van Menno, aïoli', '6,50', 'Bread with aioli'],
      ['Flatbread, labneh, harissa, amandelen, koriander', '7,50', 'Flatbread, labneh, harissa, almonds, coriander'],
      ['Haagsche bitterballen (6 st.)', '8,90', 'Local made bitterballs (6 pcs.)'],
      ['Kaasstengels (6 st.)', '8,90', 'Fried cheese fingers (6 pcs.)'],
      ['Gamba ringen (5 st.)', '8,90', 'Prawn rings (5 pcs.)'],
      ['Mini frikandellen (8 st.)', '8,00', 'Small frikandels (8 pcs.)'],
      ['Olijven', '6,00', 'Olives'],
      ['Cheddar-jalapeño bitterballen (6 st.)', '8,90', 'Cheddar-jalapeño balls (6 pcs.)'],
      ['Hollandse oude kaas', '8,00', 'Old Dutch cheese'],
      ['Cas & Kas vegan bitterballen (6 st.)', '8,90', 'Local made vegan bitterballs (6 pcs.)'],
      ['Vietnamese loempia\'s (6 st.)', '8,50', 'Vietnamese spring rolls (6 pcs.)'],
      ['Barlow bittergarnituur', '20,90', 'Snack platter, warm and cold snacks'],
      ['Vega garnituur', '22,50', 'Vegetarian snack platter, warm and cold snacks'],
    ]},
  ]},
  { id: 'drank', tab: 'Cocktails & wijn', groups: [
    { h: 'Cocktails', items: [
      ['Rum Punch', '12,50', 'Havana Club, pastis, Angostura bitters, fruit juice'],
      ['Skinny Diva', '11,00', 'Absolut vodka, lime, rose lemonade, cherry bitters'],
      ['Moscow Mule', '12,00', 'Absolut vodka, lime, ginger beer, Angostura bitters'],
      ['Sour', '11,50', 'Amaretto, honey, orange bitters, lime'],
      ['Mojito', '12,00', 'Havana Club, lime, mint, sugar'],
    ]},
    { h: 'Cocktails', sub: 'niet op clubavonden / not available on club nights', items: [
      ['Pineapple Margarita', '12,00', 'Tequila, pineapple, lime'],
      ['Bar Love', '12,00', 'Absolut vodka, Cointreau, strawberry, lime'],
      ['Piña Colada', '11,50', 'Havana Club, coconut, pineapple'],
      ['Espresso Martini', '12,50', 'Absolut vodka, espresso, Kahlúa, vanilla'],
      ['Amaretto Sour 0.0', '10,00', 'Amaretti, orgeat, lime'],
      ['Melon Splash 0.0', '10,00', 'Watermelon, orange, sugar, lime'],
    ]},
    { h: 'Spritz', items: [
      ['Aperol Spritz', '9,90', 'Aperol, prosecco, soda, orange'],
      ['Yuzu Spritz', '11,50', 'Yuzucello, prosecco, soda'],
      ['Ibiza Spritz', '11,50', 'Licor 43, lime, grapefruit soda'],
      ['Limoncello Spritz', '10,50', 'Limoncello, prosecco, soda, lime'],
      ['Italicus Spritz', '11,50', 'Italicus, prosecco, soda'],
      ['Arancia Spritz 0.0', '9,50', 'Ramazzotti Arancia 0.0, tonic'],
    ]},
    { h: 'Gin tonic', items: [
      ['Beefeater', '10,50', 'Indian tonic, lime'],
      ['Mandarin Gold', '12,00', 'Indian tonic, mandarin'],
      ['Malfy Gin', '12,00', 'Mediterranean tonic, juniper'],
      ['Hendrick\'s', '13,50', 'Indian tonic, cucumber'],
      ['Monkey 47', '14,00', 'Indian tonic, grapefruit'],
      ['Bobby\'s', '12,50', 'Indian tonic, cinnamon, orange'],
      ['Seedlip Spice 94 (alcoholvrij)', '9,50', 'Indian tonic, orange, cinnamon'],
    ]},
  ], wine: [
    { h: 'Bubbels', items: [
      ['Casa Gheller prosecco spumante brut, Veneto, Italië', '7,50', '40,00', 'Refreshing and accessible with juicy pineapple and ripe apple'],
      ['Champagne Laurent-Perrier brut, Champagne, Frankrijk', '', '85,00', 'Round and fresh champagne with a fine mousse'],
    ]},
    { h: 'Rosé', items: [
      ['Cinsault, Maison Virginie Ma Cuvée rosé, Languedoc, Frankrijk', '6,00', '33,00', 'Fresh and elegant with refined red fruits and very juicy'],
      ['Domaine Sainte Lucie MIP Classic rosé, Provence, Frankrijk', '8,00', '42,50', 'Light pink, fresh and refined with soft red fruits'],
    ]},
    { h: 'Wit', items: [
      ['Verdejo, Poema, D.O. Rueda, Spanje', '6,00', '33,00', 'Aromatic and refreshing with tropical fruits, grapefruit, peach and gooseberries'],
      ['Chardonnay, Lavilla, Frankrijk', '6,25', '34,00', 'Fresh fragrant wine with citrus fruits, full-bodied on the palate'],
      ['Sauvignon blanc, Son Excellence, Gascogne, Frankrijk', '6,25', '34,00', 'Mildly dry and refined with green apple, boxwood, flowers and lemon'],
      ['Pinot grigio, Veronese, Italië', '6,50', '35,00', 'Fresh, spicy nose, aromatic, soft and supple flavour'],
      ['Chardonnay & viognier Grand Reserve, Chibet, Pays d\'Oc, Frankrijk', '7,00', '37,50', 'Oak-aged; citrus, almond, soft vanilla notes and exotic fruits'],
      ['Viura & malvasia, Barón de Ley, Rioja, Spanje', '7,00', '37,50', 'Fresh, exotic and deliciously juicy fruit aromas'],
    ]},
    { h: 'Rood', items: [
      ['Tempranillo, Criada 3 Meses, barrica, Vino de la Tierra de Castilla, Spanje', '6,00', '33,00', 'Fruity and juicy with blueberries, strawberries, cherries, chocolate and tobacco'],
      ['Cabernet sauvignon, Ramón Roqueta, Catalunya, Spanje', '6,25', '34,00', 'Full-bodied, intense with ripe berry fruits and hints of spices'],
      ['Primitivo, Torre Alta, Puglia, Italië', '6,50', '35,00', 'Scent of ripe red fruits, full-bodied and a soft aftertaste'],
      ['Malbec, La Belle Enseigne, Languedoc, Frankrijk', '6,50', '35,00', 'Aromas of black currants and blackberries with a subtle taste of chocolate'],
      ['Valpolicella, Torre del Falasco, Veneto, Italië', '6,50', '33,00', 'Soft and full of fruity notes with cherry, plums and almond blossom'],
      ['Tempranillo Barón de Ley Reserva, Rioja, Spanje', '', '45,00', 'Powerful, ripe red fruit, herbs, coconut, vanilla'],
    ]},
  ]},
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const groupHTML = g => `
  <div class="mgroup">
    <h3>${esc(g.h)}${g.t ? ` <span class="mt">${g.t}</span>` : ''}</h3>
    ${g.sub ? `<p class="msub">${esc(g.sub)}</p>` : ''}
    <ul>${g.items.map(([n, p, en, x]) => `<li><span class="mn">${esc(n)}</span><span class="mp">€ ${p}</span>${en ? `<span class="en" lang="en">${esc(en)}</span>` : ''}${x ? `<span class="mx">${esc(x)}</span>` : ''}</li>`).join('')}</ul>
  </div>`;
const wineHTML = w => `
  <div class="wine">
    <h3>Wijn</h3>
    <div class="wine-grid">${w.map(g => `
      <div class="wgroup">
        <h4>${esc(g.h)}<span class="wcols"><span>glas</span><span>fles</span></span></h4>
        <ul>${g.items.map(([n, gl, fl, en]) => `<li><span class="mn">${esc(n)}</span><span class="wp">${gl ? '€ ' + gl : ''}</span><span class="wp">€ ${fl}</span><span class="en" lang="en">${esc(en)}</span></li>`).join('')}</ul>
      </div>`).join('')}
    </div>
  </div>`;

const tabs = document.getElementById('tabs');
const panels = document.getElementById('panels');
MENU.forEach((sec, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab-' + sec.id;
  b.setAttribute('aria-controls', 'p-' + sec.id);
  b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  b.tabIndex = i === 0 ? 0 : -1;
  b.textContent = sec.tab;
  tabs.appendChild(b);
  const p = document.createElement('div');
  p.className = 'panel'; p.id = 'p-' + sec.id; p.setAttribute('role', 'tabpanel');
  p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
  p.innerHTML = `<div class="mcols">${sec.groups.map(groupHTML).join('')}</div>${sec.wine ? wineHTML(sec.wine) : ''}${sec.foot ? `<p class="mfoot">${esc(sec.foot)}</p>` : ''}`;
  panels.appendChild(p);
});

function wireTabs(list) {
  const all = [...list.querySelectorAll('[role=tab]')];
  const select = t => {
    all.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  };
  list.addEventListener('click', e => { const t = e.target.closest('[role=tab]'); if (t) select(t); });
  list.addEventListener('keydown', e => {
    const i = all.indexOf(document.activeElement); if (i < 0) return;
    let n = null;
    if (e.key === 'ArrowRight') n = all[(i + 1) % all.length];
    if (e.key === 'ArrowLeft') n = all[(i - 1 + all.length) % all.length];
    if (n) { e.preventDefault(); n.focus(); select(n); }
  });
}
wireTabs(tabs);
wireTabs(document.getElementById('arr-tabs'));

// Mobiel menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('nav-open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
});

// Open-status (ma-do 08:30-01:00, vr-za 08:30-03:00, zo 10:00-01:00; keuken 09:00-22:00)
(function () {
  const OPEN = { 0: [600, 1500], 1: [510, 1500], 2: [510, 1500], 3: [510, 1500], 4: [510, 1500], 5: [510, 1620], 6: [510, 1620] };
  const now = new Date(); const d = now.getDay(); const m = now.getHours() * 60 + now.getMinutes();
  const prev = (d + 6) % 7;
  const fmt = x => { x %= 1440; return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0'); };
  const el = document.getElementById('status');
  const row = document.querySelector(`#hours tr[data-d="${d}"]`); if (row) row.classList.add('today');
  let txt;
  if (m + 1440 < OPEN[prev][1]) txt = `Nu open, tot ${fmt(OPEN[prev][1])}`;
  else if (m >= OPEN[d][0] && m < OPEN[d][1]) txt = `Nu open, tot ${fmt(OPEN[d][1])}` + (m >= 540 && m < 1320 ? ' · keuken tot 22:00' : '');
  else txt = `Vandaag open vanaf ${fmt(OPEN[d][0])}`;
  el.textContent = txt;
  if (txt.startsWith('Nu')) el.classList.add('is-open');
})();

// Demo-formulieren
document.querySelectorAll('.demo-form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault(); f.querySelector('.demo-msg').hidden = false;
}));

const bar = document.getElementById('top-bar');
addEventListener('scroll', () => bar.classList.toggle('scrolled', scrollY > 30), { passive: true });
