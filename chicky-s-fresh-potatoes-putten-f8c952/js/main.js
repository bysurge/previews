// Menu Chicky's Fresh Potatoes (overgenomen van de menu-afbeeldingen op allyoucankluif.nl)
var MENU = [
  { t: 'Voorgerechten', items: [
    ['Stokbroodje kruidenboter', '', '4,75'],
    ['Grootmoeders kippensoep', 'Grootmoeders vragen hier het recept van onze heerlijke huisgemaakte kippensoep.', '5,95'],
    ['Sticky chicken wings', '4 van onze beroemde crispy chicken wings overgoten met piri-piri saus.', '4,75'],
    ['Crispy kip haasjes', '3 krokante kiphaasjes geserveerd met piri-piri saus.', '4,75'],
    ['Uienringen', 'Uit broodbeslag gefrituurde uienringen met smokey barbecuesaus.', '5,95'],
    ['Loaded frites', 'Onze verse frites getopt met piri-piri saus, fritessaus, gebakken uitjes, komkommer en natuurlijk stukjes crispy kip.', '5,95'],
    ["XL Nacho's American style", "Warme nacho's met 2 soorten gesmolten kaas, pulled chicken, guacamole, jalapeño pepers en smokey barbecuesaus. Geserveerd met een milde salsa. Kleine portie € 7,75.", '10,50'],
    ['Carpaccio', 'Rundercarpaccio geserveerd met frisse rucola, Parmezaanse kaas, pijnboompitjes, pestodressing en truffelmayonaise.', '12,50'],
    ['Kaastengels', 'De enige echte. 6 heerlijke kaastengels geserveerd met chilisaus.', '5,50']
  ]},
  { t: 'Hoofdgerechten', note: 'Al onze hoofdgerechten worden standaard geserveerd met onze huisgemaakte verse frites, fritessaus, appelcompote en coleslaw.', items: [
    ['All You Can Kluif', 'Voor één persoon onbeperkt kluiven van wings, drumsticks en dijen. Original of spicy, u mag het zeggen.', '20,50'],
    ['Halve Gare schotel', 'Een flinke halve Veluwse kip die na de bereiding onder hoge druk nog eens wordt gemarineerd met onze kruidige Australian marinade.', '20,50', 'onze topper'],
    ["Chicky's Geeft Je Vleugels", '7 heerlijke, onder hoge druk bereide crispy kipvleugels.', '11,25'],
    ['Chicken en Ribs', 'Heerlijke combi van malse spareribs gemarineerd met piri-piri saus, samen met 7 crispy chicken wings.', '20,50', 'top combinatie'],
    ['Spare-Ribs', 'Een hele streng malse spareribs, gemarineerd met piri-piri of smokey BBQ saus. Halve streng € 18,50.', '20,50'],
    ['Smikkel Schnitzel', 'Een overheerlijke crispy kipschnitzel gemaakt van kipfilet.', '16,50'],
    ['Hoezo Lekker', '5 overheerlijke kiphaasjes. Keuze uit crispy haasjes of haasjes van de grill.', '16,25'],
    ["Chicky's Piri Piri", 'Voor de pittige liefhebber! Stukjes supermals kipvlees gewokt in onze eigen piri-piri kruidensaus.', '18,25'],
    ['Kip op Stok', 'De inmiddels beroemde huisgemaakte saté van dijenvlees, met onze huisgemaakte satésaus en afgetopt met gebakken uitjes.', '17,95'],
    ["Chicky's Burger", 'Een heerlijke homemade kipburger op een zachte brioche bol met burger relish, sla, tomaat, ui en onze burgersaus. Keuze uit: normaal, spicy of cheeseburger.', '17,25'],
    ['American Style Chicken Hotdog', 'Een chicken hotdog op Amerikaanse wijze met cheddar cheese, American mosterd, sweet pickle relish, ketchup en als topping salted tortilla chips.', '16,95'],
    ['Mexican Style Chicken Hotdog', 'Een chicken hotdog op Mexicaanse wijze met 2 verschillende soorten kaas, BBQ saus, guacamole en als topping salted tortilla chips.', '16,95']
  ]},
  { t: 'Planken', planks: true },
  { t: 'Salades', items: [
    ['Maaltijdsalade gerookte kip', 'Frisse mix van 4 soorten sla, winterpeen, croutons, zonnebloempitjes, tomaat, pulled chicken en natuurlijk gerookte kip. Met een heerlijke honing-mosterddressing.', '14,95'],
    ['Maaltijdsalade Piri Piri kip', 'Frisse mix van 2 soorten sla, winterpeen, croutons, zonnebloempitjes, tomaat, pulled chicken en natuurlijk onze heerlijke malse stukjes piri piri kip. Met een zoet-pittige piri-piri saus.', '15,95']
  ]},
  { t: 'Voor de kids', items: [
    ['Kids box kakeltje', 'Je eigen box met frietjes, fritessaus, appelcompote en keuze uit: 5 nuggets, 5 chicken wings of een frikandel. Met een vet cool kado!', '7,95'],
    ['Snack plankje', 'Een mix van 2 nuggets, 2 crispy kiphaasjes en 2 mini frikandellen. Geserveerd met frietjes, fritessaus en appelcompote.', '7,95']
  ]},
  { t: 'Desserts', items: [
    ['IJsproeverij', 'Vanille room soft-ijs met 3 verschillende toppings.', '5,95'],
    ['Affogato', 'Typisch Italiaans ijsdessert. Een flinke toef vanille room soft-ijs overgoten met koffie.', '5,95'],
    ['Monchou ijs dessert', 'Monchou taart, maar dan net even anders!', '5,75'],
    ['Appeltaart ijs dessert', "Een heerlijk toetje gebaseerd op oma's appeltaart.", '5,75'],
    ["Chicky's vrolijke sorbet", 'Coupe vanille room soft-ijs met tropisch fruit in een zacht-zoete saus en een topping van aardbeiensaus. Uiteraard doen we er ook slagroom op.', '5,50'],
    ['Sorbet rum-rozijn-likeur', 'Coupe met vanille room soft-ijs met onderin de bekende boerenjongens en als topping een scheutje Licor 43. Afgemaakt met slagroom en stukjes stroopwafel.', '5,50'],
    ['Coupe Sundae', 'Coupe vanille room soft-ijs met een topping naar keuze: aardbei, kers, mango-passievrucht, advocaat, room caramel, chocolade, cheesecake, bueno, cookie dough, pistache, spicy orange, rood fruit, lemon curd of koffie.', '4,25'],
    ['Sundae Speciaal', 'Coupe vanille room soft-ijs met een topping van cookie dough en speculooskruimels.', '4,95'],
    ['Sundae koffie speciaal', 'Coupe vanille room soft-ijs met een topping van koffiesiroop en een koffiecrunch. Uiteraard met slagroom. Met of zonder Licor 43.', '4,95'],
    ['Churros', '5 heerlijke churros met kaneelsuiker, room caramelsaus en vanille room soft-ijs.', '6,50'],
    ['Lekker simpel', 'Heel simpel maar erg lekker: een krokante oubliehoorn met een flinke toren vanille room soft-ijs.', '3,00'],
    ['Kinderijsje', 'Hoorntje met vanille room soft-ijs met een druppelvanger eronder.', '1,50']
  ]}
];

var AFHAAL = [
  { t: 'Verse Frites', items: [['Puntzak klein', '', '3,00'], ['Puntzak middel', '', '3,50'], ['Puntzak groot', '', '4,00'], ['Bucket (3 à 4 pers.)', '', '9,00'], ['Bucket (4 à 5 pers.)', '', '12,00']] },
  { t: 'Sauzen', items: [['Fritessaus', '', '0,80'], ['Mayonaise eigen keuken', '', '0,90'], ['Satésaus eigen keuken', '', '0,90'], ['Curry', '', '0,80'], ['Ketchup', '', '0,80'], ['Crispy chicken saus', '', '0,80'], ['BBQ saus', '', '0,80'], ['Piri Piri saus', '', '0,80'], ['Speciaal', '', '0,90'], ['Oorlog', '', '0,90']] },
  { t: 'Snacks', items: [['Van Dobben kroket', '', '2,80'], ['Satékroket', '', '2,80'], ['Groentekroket', '', '2,80'], ['Frikandel', '', '2,30'], ['Kaassoufflé', '', '2,60'], ['Nuggets 5 st.', '', '3,25'], ['Nuggets 10 st.', '', '6,25'], ['Kipcorn', '', '2,90'], ['Loempia kip', '', '4,50']] },
  { t: 'Buckets', items: [['Kidsbox (met cadeau!)', 'Frites + 5 nuggets + fritessaus + appelmoes', '7,50'], ['Family Bucket', '4 pers. frites + 30 chickenwings', '28,50'], ['Combi Bucket', '4 drumsticks + 20 chickenwings + 8 crispy haasjes', '29,95'], ['Party Bucket', '4 frikandellen + 4 drumsticks + 10 chicken wings + 10 nuggets', '28,95'], ['Wings Bucket', '30 crispy chickenwings', '23,95'], ['Drum Bucket', '15 crispy drumsticks', '29,95']] },
  { t: "Chicky's Deal", items: [["Chicky's Wingdeal", '10 chickenwings + frites + appelmoes + fritessaus', '10,25'], ["Chicky's Smulpakket", '2 drumsticks + frites + appelmoes + fritessaus', '10,25'], ["Chicky's Ribpakket", 'Halve spareribs + frites + appelmoes + fritessaus', '10,25'], ["Chicky's Satépakket", '3 stokjes kipsaté + frites + appelmoes + fritessaus', '10,25'], ["Chicky's Nacho's XL", 'Kip + BBQ saus + guacamole + salsa + jalapeños', '9,95']] },
  { t: 'Chicken', items: [['Crispy Drumsticks 1 st.', '', '2,30'], ['Crispy Drumsticks 3 st.', '', '6,75'], ['Crispy Kippendij 1 st.', '', '2,50'], ['Crispy Kippendij 3 st.', '', '7,25'], ['Crispy Chickenwings 4 st.', '', '3,25'], ['Crispy Chickenwings 10 st.', '', '8,25'], ['Crispy Filethaasjes 3 st.', '', '3,30'], ['Crispy Filethaasjes 6 st.', '', '6,50'], ['Crispy Halve Kip', '+/- 500 gr', '8,95'], ['Grilled Filethaasjes 3 st.', '', '3,50'], ['Grilled Filethaasjes 6 st.', '', '6,75'], ['Homemade Kipsaté', '3 stokjes incl. satésaus', '7,95'], ['Kipschnitzel XL', '', '5,95']] },
  { t: 'Broodjes', items: [["Chicky's Burger", '', '6,50'], ["Chicky's Cheese Burger", '', '6,50'], ["Chicky's Spicy Burger", '', '6,50'], ['Broodje Hete Kip', '', '6,50'], ['Broodje Pulled Chicken', '', '6,50'], ['Broodje Frikandel', '', '2,95'], ['Broodje Kroket', '', '3,30'], ['American Chickendog', '', '6,95'], ['Mexican Chickendog', '', '6,95'], ['Italiaanse bol', '', '+ 1,00']] },
  { t: 'Drinks', items: [['Milkshake', 'O.a. aardbei, banaan, cookie dough', '3,50'], ['Smoothies', 'Aardbei/banaan, mango/ananas, framboos/mango', '3,50'], ['Diverse frisdranken', '', '2,90']] }
];

(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var money = function (p) { return p.charAt(0) === '+' ? '+ € ' + p.slice(2) : '€ ' + p; };
  var li = function (it) {
    return '<li><span class="nm">' + esc(it[0]) + (it[3] ? ' <em class="tag">' + esc(it[3]) + '</em>' : '') +
      (it[1] ? '<span class="ds">' + esc(it[1]) + '</span>' : '') + '</span><span class="pr">' + money(it[2]) + '</span></li>';
  };

  var planks = '<div class="planks">' +
    '<p class="plank-price">Onze planken zijn <b>€ 20,50 p.p.</b> en te bestellen vanaf 2 personen.</p>' +
    '<div class="plank"><h3>De Smulplank</h3><p class="plank-sub">Ons meest bestelde gerecht</p><ul><li>Diverse soorten kip</li><li>Spareribs</li><li>Verse frites</li><li>Sausjes</li><li>Appelcompote</li><li>Coleslaw</li></ul></div>' +
    '<div class="plank"><h3>De Smikkelplank</h3><p class="plank-sub">Nieuw sinds juli 2025</p><ul><li>Diverse soorten kip</li><li>Nacho\'s</li><li>Verse frites</li><li>Sausjes</li><li>Appelcompote</li><li>Coleslaw</li></ul></div>' +
    '</div>';

  var tt = document.getElementById('menu-tabs'), tp = document.getElementById('menu-panels');
  MENU.forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'mt' + i; b.setAttribute('aria-controls', 'mp' + i);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); b.tabIndex = i ? -1 : 0; b.textContent = s.t;
    tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'menu-panel'; p.id = 'mp' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'mt' + i); p.hidden = i !== 0;
    p.innerHTML = s.planks ? planks : (s.note ? '<p class="m-note">' + esc(s.note) + '</p>' : '') + '<ul class="m-list">' + s.items.map(li).join('') + '</ul>';
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) {
      var on = x === t; x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });

  // Afhaalbord
  document.getElementById('afhaal-board').innerHTML = AFHAAL.map(function (g) {
    return '<div class="board-box"><h3>' + esc(g.t) + '</h3><ul>' + g.items.map(li).join('') + '</ul></div>';
  }).join('');

  // Mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // Vandaag
  var H = { 0: null, 1: null, 2: ['17.00', '20.00'], 3: ['17.00', '20.00'], 4: ['17.00', '20.00'], 5: ['17.00', '20.00'], 6: ['12.30', '20.00'] };
  var d = new Date().getDay(), el = document.getElementById('today');
  if (el) el.textContent = H[d] ? 'Vandaag open van ' + H[d][0] + ' tot ' + H[d][1] + ' uur' : 'Vandaag gesloten, dinsdag zijn we er weer vanaf 17.00 uur';
  var r = document.querySelector('#hours tr[data-d="' + d + '"]'); if (r) r.classList.add('is-today');
})();
