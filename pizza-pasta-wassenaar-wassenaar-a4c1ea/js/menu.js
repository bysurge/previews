// Menukaart Pizza & Pasta Wassenaar, letterlijk van pizzapastawassenaar.nl (nummers en prijzen behouden).
(function () {
  var M = {
    pizza: { title: "Pizza's", items: [
      [12, 'Pizza kit', 'maak zelf de lekkerste pizza, gewoon thuis', '5,00'],
      [13, 'Bambino', 'tomatensaus, mozzarellakaas (kleine pizza)', '5,50'],
      [14, 'Margherita', 'tomatensaus, mozzarellakaas', '11,00'],
      [15, 'Napoletana', 'tomatensaus, mozzarellakaas en ansjovis', '12,50'],
      [16, 'Tonno', 'tomatensaus, mozzarellakaas, tonijn en knoflook', '12,95'],
      [17, 'Pescatora', 'tomatensaus, mozzarellakaas, zeevruchten, tonijn, dille en knoflook', '13,95'],
      [18, 'Funghi', 'tomatensaus, mozzarellakaas en champignons', '11,50'],
      [19, 'Paprika', 'tomatensaus, mozzarellakaas en paprika', '11,50'],
      [20, 'Cipolla', 'tomatensaus, mozzarellakaas en uien', '11,50'],
      [21, 'Rustica', 'tomatensaus, mozzarellakaas, spek en spinazie', '12,95'],
      [22, 'Vegetaria', 'tomatensaus, mozzarellakaas en verse groenten van de dag', '13,50'],
      [23, 'Prosciutto', 'tomaten, mozzarella en ham', '11,95'],
      [24, 'Salami', 'tomatensaus, mozzarellakaas en salami', '11,95'],
      [25, 'Pancetta', 'tomatensaus, mozzarellakaas en spek', '11,95'],
      [26, 'Stagioni', 'tomatensaus, kaas, ham, salami, champignons en paprika', '13,95'],
      [27, 'Capricciosa', 'tomatensaus, kaas, ham, champignons, paprika en tonijn', '13,95'],
      [28, 'Borromea', 'tomatensaus, kaas, ham, salami en champignons', '12,95'],
      [29, 'Burina', 'tomatensaus, kaas, ham en salami', '12,50'],
      [30, 'Hawaiana', 'tomatensaus, mozzarellakaas, ham en ananas', '12,50'],
      [31, 'Calzone', 'tomatensaus, kaas, ham, salami en champignons in een dichtgevouwen pizza', '14,95'],
      [32, 'Quattro Formaggi', 'tomatensaus en 4 verschillende Italiaanse kazen', '14,95'],
      [33, 'Vesuvio', 'tomatensaus, kaas, spek, tonijn, pepertjes en knoflook', '13,95'],
      [34, 'Pepperoni', 'tomatensaus, kaas, Italiaanse pikante salami', '13,50'],
      [35, 'Diavolaccia', 'tomatensaus, kaas, salami, paprika, ui, pepertjes en knoflook', '13,95'],
      [37, 'Casanova', 'tomatensaus, kaas, ham, champignons, uien en ei', '13,95'],
      [38, 'Gorgonzola', 'tomatensaus, mozzarellakaas en gorgonzolakaas', '12,95'],
      [39, 'Nico', 'tomatensaus, mozzarellakaas, ham en champignons', '12,50'],
      [40, 'Tartara', 'tomatensaus, kaas, tartaar, uien, ei, kappertjes en knoflook', '13,95'],
      [41, 'Broccola', 'tomatensaus, kaas, broccoli, spek en gorgonzolakaas', '13,95'],
      [42, 'Aubergine', 'tomatensaus, kaas, gegrilde aubergine en knoflook', '13,95'],
      [43, 'Courgette', 'tomatensaus, kaas, gegrilde courgette en knoflook', '13,95'],
      [44, 'Mix grill', 'tomatensaus, kaas, gegrilde aubergine, courgette en knoflook', '13,95'],
      [45, 'Kip-pizza', 'tomatensaus, mozzarellakaas, kipreepjes en knoflook', '13,95'],
      [46, 'Parmaham', 'tomatensaus, mozzarellakaas, parmaham en rucola', '13,95']
    ], foot: "Extra toppings op alle pizza's: vanaf € 1" },
    pasta: { title: "Pasta's", items: [
      [60, 'Pasta Napoletana', 'tomatensaus en parmezaanse kaas', '12,95'],
      [61, 'Pasta Bolognese', 'gehaktsaus en parmezaanse kaas', '12,95'],
      [62, 'Pasta al Pesto', 'romige saus met basilicumpesto en parmezaanse kaas', '12,95'],
      [63, 'Tagliatelle 4 formaggi', 'roomsaus met 4 soorten Italiaanse kazen', '14,95'],
      [65, 'Tortelloni Boscaiola', 'roomsaus met champignons, ham en parmezaanse kaas', '14,95'],
      [66, 'Pasta Aglio e Olio', 'knoflook en olijfolie', '12,95'],
      [67, 'Pasta Carbonara', 'roomsaus met hamblokjes, ei en parmezaanse kaas', '12,95'],
      [70, 'Lasagna', 'deegplakjes, gehaktsaus en parmezaanse kaas', '12,95']
    ]},
    voor: { title: 'Voorgerechten', items: [
      [75, 'Pane e Burro', 'stokbrood met ambachtelijke kruidenboter', '5,00'],
      [76, 'Insalata mista', 'gemengde verse sla, olijfolie en wijnazijn', '6,50'],
      [77, 'Insalata al Tonno', 'gemengde verse sla met tonijn en dressing', '10,95'],
      [78, 'Insalata Speciale', 'gemengde verse sla, mozzarellakaas en olijfolie', '10,95'],
      [174, 'Focaccia', 'traditioneel Italiaans rond brood', '6,50']
    ]},
    dessert: { title: 'Desserts', items: [
      [79, 'Tiramisu dessert', 'mascarpone, koffie, cacao (per bakje), 125cc of 250cc', '2,75 / 5,50'],
      [80, 'Tartufo', 'truffelijs choco (per bakje)', '5,50']
    ]}
  };

  var B = [
    ['Voorgerechten', [
      [174, 'Focaccia', 'traditioneel Italiaans rond brood', '6,50'],
      [175, 'Pane e Burro', 'stokbrood met ambachtelijke kruidenboter', '5,00'],
      [176, 'Insalata mista', 'gemengde verse sla, olijfolie en wijnazijn', '6,50']
    ]],
    ["Pizza's", [
      [112, 'Pizza kit', 'maak zelf de lekkerste pizza gewoon thuis', '5,00'],
      [113, 'Bambino', 'tomaten, mozzarella (kleine pizza)', '5,50'],
      [114, 'Margherita', 'tomaten, mozzarella', '10,00'],
      [115, 'Napoletana', 'tomaten, mozzarella en ansjovis', '10,00'],
      [118, 'Funghi', 'tomaten, mozzarella en champignons', '10,00'],
      [119, 'Paprika', 'tomaten, mozzarella en paprika', '10,00'],
      [120, 'Cipolla', 'tomaten, mozzarella en uien', '10,00'],
      [123, 'Prosciutto', 'tomaten, mozzarella en ham', '10,00'],
      [124, 'Salami', 'tomaten, mozzarella en salami', '10,00'],
      [125, 'Pancetta', 'tomaten, mozzarella en spek', '10,00'],
      [129, 'Burina', 'tomaten, mozzarella, ham en salami', '10,00'],
      [130, 'Hawaiana', 'tomaten, mozzarella, ham en ananas', '10,00'],
      [139, 'Nico', 'tomaten, mozzarella, ham en champignons', '10,00']
    ]],
    ["Pasta's", [
      [160, 'Pasta Napoletana', 'tomatensaus en parmezaanse kaas', '10,00'],
      [161, 'Pasta Bolognese', 'gehaktsaus en parmezaanse kaas', '10,00'],
      [162, 'Pasta al Pesto', 'romige saus met basilicumpesto en parmezaanse kaas', '10,00']
    ]],
    ['Desserts', [
      [179, 'Tiramisu dessert', 'mascarpone, koffie, cacao (per bakje), 125cc of 250cc', '2,75 / 5,50'],
      [180, 'Tartufo', 'truffelijs choco (per bakje)', '5,50']
    ]]
  ];

  function row(d) {
    return '<li class="item"><span class="no">' + d[0] + '</span><div><h4>' + d[1] + '</h4><p>' + d[2] + '</p></div><span class="price">€ ' + d[3] + '</span></li>';
  }

  var html = '';
  Object.keys(M).forEach(function (id, i) {
    var s = M[id];
    html += '<div class="panel" role="tabpanel" id="p-' + id + '" aria-labelledby="t-' + id + '"' + (i ? ' hidden' : '') + '>';
    html += '<h3 class="sr">' + s.title + '</h3><ul class="items' + (s.items.length > 10 ? ' cols3' : '') + '">';
    s.items.forEach(function (d) { html += row(d); });
    html += '</ul></div>';
  });
  document.getElementById('panels').innerHTML = html;

  var b = '';
  B.forEach(function (g) {
    b += '<div class="bgroup"><h3>' + g[0] + '</h3><ul class="items">';
    g[1].forEach(function (d) { b += row(d); });
    b += '</ul></div>';
  });
  document.getElementById('budget-list').innerHTML = b;
})();
