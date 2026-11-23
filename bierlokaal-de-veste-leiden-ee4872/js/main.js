// De Veste preview: tapkaart (momentopname 21 nov), menu, vandaag-markering.
const BEERS = [
  { n: 'Second Wind', s: 'IPA, imperial', a: '8%', b: 'Salikatt', p: 'Stavanger', pr: [['25 cl', '6,80']],
    d: 'Smooth and hoppy New England-style Double IPA brewed with Eclipse and Mosaic Cryo hops. Hop-saturated, fruity, and smooth. Cheers!' },
  { n: 'Geitenbreier (2026)', s: 'Bock', a: '6,5%', b: 'Moersleutel Craft Brewery', p: 'Alkmaar', pr: [['25 cl', '6,30']],
    d: 'Autumn is back, and so is Geitenbreier! Bold caramel, roasted malt and spicy rye come together in a smooth, full-bodied bock brewed for cold evenings and long conversations. Tango hops bring a subtle bitterness that keeps every sip balanced and dangerously drinkable.' },
  { n: 'Hruškov zavitek', s: 'Pastry sour ale met peer, walnoot en ahornsiroop', a: '5,3%', b: 'Clef Brewery', p: 'Arja Vas (Slovenië)', pr: [],
    d: 'Pear strudel is a much rarer find than the classic apple version. Clef’s Hruškov Zavitek is a bold, rich, and liquid tribute to this tradition, served in a modern guise.' },
  { n: '10 Years: Liftoff', s: 'IPA, triple New England', a: '9%', b: 'Moersleutel Craft Brewery', p: 'Alkmaar', pr: [['25 cl', '6,30']],
    d: 'A 9% Triple IPA with a body you can almost chew on: thick, plush and built for hop overload. Nectaron and Talus lead the charge with bold notes of nectarine, pineapple, coconut and pink grapefruit. Liftoff is number seven in the 10 Years Anniversary series.' },
  { n: 'Bourbon Barrel Aged Jersey Devil', s: 'Stout, imperial', a: '14,6%', b: 'Tartarus Beers', p: 'Leeds', pr: [['25 cl', '13,00'], ['15 cl', '8,00']],
    d: 'Imperial stout aged in Bourbon barrels for 24 months then conditioned on coffee beans, cocoa & hazelnut essence for one week.' },
  { n: 'Julesjeik 2026', s: 'Pale ale, New England', a: '4,7%', b: 'Salikatt', p: 'Stavanger', pr: [['25 cl', '6,00']],
    d: 'Julesjeik is a full-bodied New England Pale Ale, bursting with flavor and aroma from Krush and Citra hops. A sessionable pale ale with the hop intensity and smooth mouthfeel of bigger India Pale Ales. God Jul!' },
  { n: 'Klapgijp #11', s: 'Eisbock', a: '16%', b: 'Brouwerij Homeland', p: 'Amsterdam', pr: [['25 cl', '12,50'], ['15 cl', '8,00']],
    d: 'A beastly Ice Bock, matured for several months in Maple Syrup Bourbon barrels. Thick caramel, soft vanilla, maple syrup and strong bourbon notes. Warm, syrupy, boozy.' },
  { n: '3 Fonteinen Druivenlambik Riesling', s: 'Lambiek, fruit (gekegd 06/08/2026)', a: '', b: 'Brouwerij 3 Fonteinen', p: 'Beersel', pr: [['15 cl', '8,00'], ['25 cl', '12,50']],
    d: 'Organic Riesling grapes from the family winery Harth + Harth in Rheinhessen, macerated for a year on young lambic and then matured in a wooden barrel for another good two years. 499 grams of grapes per litre.' },
  { n: 'Guinness Draught', s: 'Stout, Irish dry', a: '4,2%', b: 'Guinness', p: 'Dublin', pr: [['½ pint', '4,30'], ['pint', '8,10']],
    d: 'Unmistakeably Guinness, from the first velvet sip to the last, lingering drop.' },
  { n: 'Tripel Karmeliet', s: 'Belgische tripel', a: '8,4%', b: 'Brouwerij Bosteels', p: 'Buggenhout', pr: [['25 cl', '6,20'], ['33 cl', '7,20']],
    d: 'Brewed to an authentic recipe from 1679 from the former Carmelite monastery in Dendermonde, with three kinds of grain: wheat, oats and barley.' },
  { n: 'Hangende Harry IPA', s: 'IPA, white', a: '5,9%', b: 'Ondersteboven', p: 'Enschede', pr: [['25 cl', '5,80'], ['33 cl', '7,00']],
    d: 'Hangende Harry is een bijzonder frisse en volle IPA die lekker doordrinkbaar is. Gebrouwen met een ruime hoeveelheid tarwemout, hierdoor fluweelzacht en vol van smaak.' },
  { n: 'Grimbergen Blonde', s: 'Belgisch blond', a: '6,7%', b: 'Brouwerij Alken-Maes', p: 'Alken', pr: [['25 cl', '5,80']],
    d: 'A pure, smooth, blonde ale with ripe fruit flavours and no cloudiness, first made by the Fathers of Grimbergen Abbey.' },
  { n: 'Delirium Tremens', s: 'Belgian strong golden ale', a: '8,5%', b: 'Delirium – Huyghe Brewery', p: 'Melle', pr: [['33 cl', '7,60'], ['25 cl', '5,80']],
    d: 'Triple fermentation and three different yeast strains. Sweet, biscuit malt backbone, supported by pleasant warmth and spice, finishes well rounded, floral, and dry.' },
  { n: 'Puur Weizen', s: 'Hefeweizen', a: '5,1%', b: 'Koninklijke Grolsch', p: 'Enschede', pr: [['30 cl', '5,40']],
    d: 'Een krachtig volfris bier, gebrouwen volgens het Reinheitsgebot met pure ingrediënten. Kruidig aroma en de frisheid van citroen.' },
  { n: 'Grolsch Premium Lager', s: 'Pilsner', a: '5%', b: 'Koninklijke Grolsch', p: 'Enschede', pr: [['20 cl', '3,60'], ['25 cl', '3,80'], ['50 cl', '7,60']],
    d: 'A traditional Pilsner style beer with a big hoppy flavour and bite owing to dry hopping late in the brewing process. Refreshingly dry finish.' },
  { n: 'Nastro Azzurro', s: 'Lager, pale', a: '5,1%', b: 'Birra Peroni', p: 'Rome', pr: [['25 cl', '4,00']],
    d: 'Crafted with typical Italian care and designed with the Mediterranean palate in mind.' },
];

const box = document.getElementById('beers');
BEERS.forEach(x => {
  const art = document.createElement('article');
  art.className = 'beer';
  const prijzen = x.pr.length
    ? x.pr.map(([m, p]) => `<span>${m}<strong>€ ${p}</strong></span>`).join('')
    : '<span>prijs aan de bar</span>';
  art.innerHTML = `<h3>${x.n}</h3>
    <div class="prijzen">${prijzen}</div>
    <p class="meta">${x.a ? `<b>${x.a}</b> · ` : ''}${x.s}<br>${x.b}, ${x.p}</p>
    <details><summary>Over dit bier</summary><p>${x.d}</p></details>`;
  box.append(art);
});

const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); } });

const d = new Date().getDay();
const li = document.querySelector(`#week li[data-d="${d}"]`);
if (li) {
  li.classList.add('is-today');
  const [van, tot] = [...li.querySelectorAll('span')].map(s => s.textContent);
  document.getElementById('now').innerHTML = `Vandaag open van <b>${van}</b> tot <b>${tot}</b>` + (d === 0 ? ', vanaf 16.00 live muziek' : '') + '<span class="now-adr"> · 2e Binnenvestgracht 15, Leiden</span>';
}
