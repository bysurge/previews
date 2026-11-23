(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var FRIO = [
    ['Aceitunas', 'Olijfjes', '4,00'],
    ['Almendras', 'Gezouten amandelen', '4,00'],
    ['Boquerones', 'In zuur gemarineerde ansjovis', '4,50'],
    ['Plato de quesos', '3 Spaanse kazen', '11,50'],
    ['Jamón Ibérico 100%', 'Spaanse Ibericoham', '18,50'],
    ['Pan con salsa o alioli', 'Stokbrood met tomatensalsa of alioli', '4,50'],
    ['Salmón o atún rebozado', 'Gemarineerde rauwe zalm of tonijn', '12,50'],
    ['Postres dulces', 'Wisselende desserts', '']
  ];
  var CALIENTE = [
    ['Croquetas espinacas o jamón o chorizo', 'Spaanse spinazie/kaas-, ham- of chorizokroketjes', '5,50'],
    ['Patatas bravas o alioli', 'Aardappeltjes met bravassaus of alioli', '5,50'],
    ['Calamares', 'Gefrituurde inktvisringen', '8,50'],
    ['Nachos con salsa de ají y queso', 'Nachos met chilisaus en kaas', '6,00'],
    ['Aros de cebolla', 'Gefrituurde uienringen', '5,20'],
    ['Pintxo secreto Ibérico', 'Gebakken Ibericovlees', '9,00'],
    ['Presa Ibérico', 'Een bijzonder stukje botermals vlees', '11,50'],
    ['Albóndigas', 'Spaanse gehaktballetjes in tomatensaus', '6,50'],
    ['Chorizo al vino', 'Chorizo afgeblust met rode wijn', '8,50'],
    ['Queso con miel', 'Warme geitenkaas met honing en walnoten', '4,80'],
    ['Berenjenas a la plancha', 'Aubergines van de bakplaat met honing', '6,00'],
    ['Gambas al ajillo picantes', 'Garnalen in knoflookolie met een pepertje', '8,50'],
    ['Champiñones a la plancha', 'Gemarineerde champignons van de bakplaat', '4,50'],
    ['Dátiles con bacon', 'Dadels omwikkeld met spek', '5,00'],
    ['Pintxo pollo', 'Spiesjes van kippendijen', '7,50']
  ];
  var TEMP = ['Tapas temporales', 'Er zijn altijd wisselende tapas buiten het menu om, kijk op de borden of vraag het ons.', ''];

  var DRINKS = [
    { h: 'Cervezas', s: 'bierkes van de tap', note: 'klein / groot', items: [
      ['Cruz Campo (4,8%)', '3,20 / 6,00', 'Voor de stevige dorst'], ['Brand Weizen (5,1%)', '5,50 / 8,50', 'Smaakt het lekkerst in de zon'], ['Texels Skuumkoppe (6%)', '5,50 / 8,50'] ] },
    { h: 'Botellín de cerveza', s: 'flesjes', items: [
      ['Alhambra Reserva Roja (7,2%)', '7,50'], ['Estrella Galicia Especial (5,5%)', '4,50'], ['San Miguel Fresca (4,4%)', '6,00'], ['IJwit (6,5%)', '6,50'], ['Duvel (8,5%)', '6,50'], ['Mahou Sessions IPA (4,5%)', '8,50'], ['De Eeuwige Jeugd Lellebel (5,7%)', '5,50'], ['Tripel Karmeliet (8,4%)', '6,50'], ['Liefmans (3,8%)', '5,00'] ] },
    { h: 'Sin alcohol', s: 'alcoholvrij', items: [
      ['Mahou Tostada (0,0%)', '6,50'], ['Estrella Galicia (0,0%)', '4,50'], ['Vrijwit (0,5%)', '6,00'], ['Crodino (0,0%)', '5,50'], ['Cava (0,0%)', '5,50'], ['Mojito (0,0%)', '5,50'], ['Aperol Spritz (0,0%)', '9,50'], ['Gin Tonic (0,0%)', '9,50'] ] },
    { h: 'Vinos', s: 'glòske of fleske', note: 'glas / fles', items: [
      ['Cava: L\'Arboc Cava', '6,00 / 30,00'], ['Rosado: Terra de Touros', '5,50 / 27,50'], ['Blanco: Briza del Mar Verdejo', '5,80 / 29,00'], ['Blanco: Jose Galo Sauvignon', '6,00 / 30,00'], ['Blanco: Hacienda El Espino Chardonnay', '7,00 / 35,00'], ['Tinto: Faustino Garcia Martinez', '5,50 / 27,50'], ['Tinto: Quinta Do Casal Monteiro', '6,00 / 30,00'], ['Tinto: Rondan Crianza Tempranillo', '7,00 / 35,00'] ] },
    { h: 'Sangría', s: 'kannetje vol', items: [ ['Sangría blanca Cava', '26,50'], ['Sangría roja', '26,50'] ] },
    { h: 'Oporto y jerez', items: [ ['Port Tawny', '5,50'], ['Sherry Manzanilla', '5,50'], ['Sherry Pedro Ximenez', '6,50'] ] },
    { h: 'Cócteles', items: [
      ['Mojito', '9,50'], ['Spritz', '9,50', 'Aperol, Limoncello, Limecello, Orangecello, Amaretto of Licor 43'], ['Dark \'n Stormy', '9,50'], ['Moscow Mule', '9,50'], ['Espresso Martini', '9,50'], ['Calimocho', '7,50'], ['Rebujito', '7,50'], ['Clara con Limón', '4,00'], ['Agua de Valencia (kannetje)', '26,50'], ['Tinto de Verano', '7,50 / 24,50', 'glas / kannetje'] ] },
    { h: 'Gin tonic', s: 'met Fever-Tree Mediterranean Tonic', items: [ ['Pink Gin (Fever-Tree Rhubarb Raspberry)', '11,00'], ['Bobby\'s', '11,00'], ['Bombay Sapphire', '10,00'] ] },
    { h: 'Refrescos', s: 'fris', items: [
      ['Coca-Cola (regular, zero sugar)', '3,10'], ['Fanta Orange', '3,10'], ['Sprite (zero sugar)', '3,10'], ['Fuze Tea (sparkling, green)', '3,10'], ['Royal Bliss Ginger beer', '3,50'], ['Royal Bliss Bitter lemon', '3,50'], ['Fever-Tree (Mediterranean tonic, ginger ale)', '4,50'], ['Chaudfontaine (plat, bruisend)', '3,00 / 6,00', 'klein / fles'] ] },
    { h: 'Bebidas calientes', s: 'wèèrm', items: [ ['Café', '3,00'], ['Café carajillo', '4,80'], ['Espresso', '3,00'], ['Espresso doble', '4,50'], ['Cappuccino', '3,50'], ['Té', '3,00'] ] },
    { h: 'Licores', s: 'likeuren', items: [
      ['Sambuca Isolabella', '4,50'], ['Licor 43', '4,50'], ['Cointreau', '4,50'], ['Disaronno Originale', '4,50'], ['Grand Marnier Liquor', '4,50'], ['Caballero', '5,00'], ['Hierbas', '5,00'], ['Limoncello / Limecello / Orangecello', '5,00'], ['Frangelico', '4,50'], ['Cognac Joseph Guy V.S.O.P.', '6,50'], ['Overige shots', '4,50'] ] },
    { h: 'Ron', s: 'rum', items: [ ['Bacardi Carta Blanca', '4,50'], ['Bacardi Carta Oro', '4,50'], ['Bacardi Añejo Cuatro', '4,50'], ['Bacardi Reserva Ocho', '5,00'], ['Bacardi Gran Reserva Diez', '10,50'], ['Don Papa Masskara', '7,00'] ] },
    { h: 'Whiskey', items: [ ['Chivas Regal 12', '5,60'], ['Jack Daniels', '4,50'], ['Johnnie Walker Red Label', '4,50'], ['Johnnie Walker Black Label', '6,50'], ['Jim Beam White', '4,50'], ['Cardhu 12 Single Malt', '8,00'] ] }
  ];

  function dish(d, note) {
    return '<li class="dish' + (note ? ' note' : '') + '"><span class="es">' + esc(d[0]) + '</span><span class="nl">' + esc(d[1]) + '</span>' + (d[2] ? '<span class="pr">' + esc(d[2]) + '</span>' : '') + '</li>';
  }
  document.querySelector('[data-list=frio]').innerHTML = FRIO.map(function (d) { return dish(d); }).join('') + dish(TEMP, true);
  document.querySelector('[data-list=caliente]').innerHTML = CALIENTE.map(function (d) { return dish(d); }).join('') + dish(TEMP, true);
  document.getElementById('drinks').innerHTML = DRINKS.map(function (g) {
    return '<div class="dgroup"><h4>' + esc(g.h) + (g.s ? '<small>' + esc(g.s) + '</small>' : '') + '</h4><ul>' + g.items.map(function (i) {
      return '<li><span>' + esc(i[0]) + (i[2] ? '<i>' + esc(i[2]) + '</i>' : '') + '</span><span>' + esc(i[1]) + '</span></li>';
    }).join('') + '</ul>' + (g.note ? '<p class="dnote">Prijzen: ' + esc(g.note) + '</p>' : '') + '</div>';
  }).join('');

  // tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function sel(t) { tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; }); }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });

  // nav
  var btn = document.querySelector('.nav-toggle');
  btn.addEventListener('click', function () { var o = document.body.classList.toggle('nav-open'); btn.setAttribute('aria-expanded', o); });
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }); });

  // today
  var HOURS = { 1: [15, 23, '15:00 – 23:00'], 4: [15, 23, '15:00 – 23:00'], 5: [15, 25, '15:00 – 01:00'], 6: [15, 25, '15:00 – 01:00'], 0: [14, 23, '14:00 – 23:00'] };
  var now = new Date(), d = now.getDay(), m = now.getMonth(), day = now.getDate();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var holiday = (m === 11 && day >= 25) || (m === 0 && day === 1);
  var el = document.getElementById('today'), h = HOURS[d];
  if (holiday) el.textContent = 'Gesloten t/m 1 januari, vanaf 2 januari weer open';
  else if (h) { el.textContent = 'Vandaag open ' + h[2]; el.classList.add('open'); }
  else el.textContent = 'Vandaag gesloten, donderdag weer open';

  // tijden select 14:00-23:00
  var sT = document.getElementById('tijd'), html = '';
  for (var t = 14 * 60; t <= 23 * 60; t += 30) { var hh = Math.floor(t / 60), mm = t % 60; var v = hh + ':' + (mm ? '30' : '00'); html += '<option' + (v === '18:00' ? ' selected' : '') + '>' + v + '</option>'; }
  sT.innerHTML = html;

  // demo form
  document.getElementById('res-form').addEventListener('submit', function (e) { e.preventDefault(); var msg = document.getElementById('form-msg'); msg.hidden = false; msg.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); });
})();
