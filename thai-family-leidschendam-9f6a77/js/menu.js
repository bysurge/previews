// Menu Thai Family, letterlijk uit Menu2024.pdf (NL + EN).
(function () {
  var V = [ // varianten voor wok, curry, rijst en noedels
    { k: 'Tofu', nl: 'tofu, vegetarisch', p: '15,25' },
    { k: 'Pak', nl: 'groenten, vegetarisch', p: '15,25' },
    { k: 'Kai', nl: 'kip', p: '16,75' },
    { k: 'Moo', nl: 'varkenshaas', p: '17,50' },
    { k: 'Pla', nl: 'vis', p: '17,50' },
    { k: 'Nua', nl: 'ossenhaas', p: '19,95' },
    { k: 'Kung', nl: 'garnalen', p: '19,95' }
  ];
  var NASI = 'In plaats van witte rijst kunt u ook Thaise nasi of bami bestellen voor € 4,50.';

  var M = {
    voor: { title: 'Voorgerechten', en: 'Starters', items: [
      [1, 'Thai Pangsit', 'Krokante wontons van kip', 'Crispy wonton from chicken', '6,50'],
      [2, 'Satay Kai', 'Kipsaté met huisgemaakte pindasaus', 'Chicken skewer with fresh homemade peanut sauce', '7,50'],
      [3, 'Tod Man Pla', 'Viskoekjes met zoete chilisaus', 'Fishcakes with sweet chili sauce', '7,50'],
      [4, 'Kung Tempura', 'Garnalen in tempura met zoete chilisaus', 'Shrimps in tempura with sweet chili sauce', '7,50'],
      [5, 'Po Pia Kai', "Huisgemaakte kip loempia's met zoete chilisaus", 'Chicken springrolls with sweet chili sauce', '6,50'],
      [6, 'Po Pia Pak', "Huisgemaakte vegetarische loempia's met zoete chilisaus", 'Vegetarian springrolls with sweet chili sauce', '6,50'],
      [7, 'Ruam Mit Thai Family', 'Diverse voorgerechten voor 2 personen: Thai Pangsit, Satay Kai, Tod Man Pla, Po Pia Pak', 'Combination of starters (2 persons)', '15,50']
    ]},
    soep: { title: 'Soepen', en: 'Soups', groups: [
      { name: 'Tom Yam', nl: 'Fris zure heldere bouillon met champignons, tomaat en koriander', en: 'Light sweet & sour soup with mushrooms, tomato and coriander', items: [
        [8, 'Tom Yam Tofu of Extra Groente', 'vegetarisch', 'vegetarian', '6,50'],
        [9, 'Tom Yam Kai', 'met kip', 'with chicken', '7,00'],
        [10, 'Tom Yam Kung', 'met garnalen', 'with shrimps', '7,50']
      ]},
      { name: 'Tom Kha', nl: 'Zacht romige kokossoep met champignons, tomaat en koriander', en: 'Creamy coconut soup with mushrooms, tomato and coriander', items: [
        [11, 'Tom Kha Tofu of Extra Groente', 'vegetarisch', 'vegetarian', '6,50'],
        [12, 'Tom Kha Kai', 'met kip', 'with chicken', '7,00'],
        [13, 'Tom Kha Kung', 'met garnalen', 'with shrimps', '7,50']
      ]}
    ]},
    salade: { title: 'Salades', en: 'Salads', groups: [
      { name: 'Laap', nl: 'Lauwwarme salade van fijngehakt vlees, chilipeper, verse munt, geroosterde rijst, limoensap en koriander', en: 'Lukewarm salad of chopped meat, chili pepper, fresh mint, roasted rice, lime and lots of cilantro', items: [
        [14, 'Laap Kai', 'met kip', 'with chicken', '13,50'],
        [15, 'Laap Moo', 'met varkenshaas', 'with pork', '13,75'],
        [16, 'Laap Nua', 'met ossenhaas', 'with beef', '14,50']
      ]},
      { name: 'Som Tam', nl: "Een heerlijke frisse salade van jonge papaya, tomaat, chili, citroen en pinda's", en: 'Delicious fresh salad with young papaya, tomato, chili, lime and peanut', items: [
        [17, 'Som Tam Thai Family', 'met gedroogde garnalen', 'with dried shrimp', '15,50'],
        [18, 'Som Tam Kung Sod', 'met verse garnalen', 'with fresh shrimp', '15,50']
      ]}
    ]},
    wok: { title: 'Uit de wok', en: 'Stir fried', variants: true, items: [
      [19, 'Pad Kratiam Prik Thai', 'Wokgerecht met verse knoflook, zwarte pepersaus, Chinese kool en diverse groenten', 'Stir fried dish with garlic, black pepper sauce and mixed vegetables'],
      [20, 'Pad Nam Man Hoi', 'Wokgerecht met oester- en sojasaus, knoflook en diverse groenten', 'Stir fried dish with oyster and soy sauce, garlic and mixed vegetables'],
      [21, 'Pad Nam Prik Pow', 'Licht pittig wokgerecht met chili-knoflook en diverse groenten', 'Stir fried dish with light spicy chili-garlic and mixed vegetables', 1],
      [22, 'Pad Krapao', 'Licht pittig wokgerecht met Thaise basilicum en groenten', 'Stir fried dish with light spicy Thai basil, chili pepper and mixed vegetables', 1],
      [23, 'Pad Med Mamuang', 'Licht pittig wokgerecht met cashewnoten, knoflook, diverse groenten, oester- en sojasaus', 'Stir fried dish with cashew nuts, garlic, oyster and soy sauce and vegetables', 1],
      [24, 'Pad Khing', 'Wokgerecht met verse gember, sojasaus en groenten', 'Stir fried dish with fresh ginger, soy sauce and mixed vegetables'],
      [25, 'Pad Priow Wan', 'Wokgerecht met tomaat, komkommer en ananas in een zoetzure saus', 'Stir fried dish with tomato, cucumber and pineapple in a sweet and sour sauce'],
      [26, 'Pad Pak Ruam Mit', 'Wokgerecht met gemengde wokgroenten in soja- en oestersaus en knoflook', 'Stir fried dish with mixed vegetables in soy and oyster sauce and garlic']
    ]},
    curry: { title: 'Kerrie', en: 'Curry', variants: true, items: [
      [27, 'Keng Khiao Wan', 'Groene curry met Thaise basilicum, bamboe, aubergines en groenten in kokosmelk', 'Green curry with Thai basil, bamboo, eggplant and vegetables in coconut milk'],
      [28, 'Keng Panaeng', 'Licht zoete zachte rode curry met Chinese kool en citroenblad', 'Light sweet red curry with Chinese cabbage and lime leaves'],
      [29, 'Keng Massaman', 'Zachte rode curry met aardappel, ui en cashewnoten in kokosmelk', 'Light sweet red curry with potato, onion and cashew nuts in coconut milk'],
      [30, 'Keng Ped', 'Licht pittige rode curry met Thaise basilicum, bamboe en diverse groenten', 'Light spicy red curry with Thai basil, bamboo and mixed vegetables', 1],
      [31, 'Keng Karie', 'Zachte licht zoetige gele curry met aardappelen, tomaat, cashewnoten en ui', 'Light sweet yellow curry with potato, tomato, cashew nuts and onion'],
      [32, 'Keng Kua Sapparot', 'Rode curry met tomaat, ananas en Thaise basilicum', 'Red curry with tomato, pineapple and Thai basil']
    ]},
    rijst: { title: 'Rijst en noedels', en: 'Rice and noodles', variants: true, items: [
      [33, 'Pad Thai', "Gebakken rijstnoedels met ei, pinda's, taugé, prei en limoen", 'Stir fried rice noodles with egg, peanut, bean sprouts, leek and lime'],
      [34, 'Pad Noodle', 'Gebakken noedels met groenten', 'Fried noodles with vegetables'],
      [35, 'Kaw Pad', 'Gebakken rijst met ui, ei en diverse groenten', 'Fried rice with onion, egg and mixed vegetables'],
      [36, 'Kaw Pad Krapao', 'Gebakken rijst met ei, Thaise basilicum en gemengde groenten', 'Fried rice with chopped vegetables and egg with Thai basil and chili'],
      [37, 'Kaw Pad Khiao Wan', 'Gebakken rijst met groene curry, Thaise basilicum en gemengde groente', 'Fried rice with green curry, Thai basil and mixed vegetables']
    ]},
    chef: { title: 'Specialiteiten van de chef', en: 'Special dishes', items: [
      [38, 'Panaeng Nua Stew', 'Gesmoord rundvlees met Chinese kool in een milde, licht zoetige curry', 'Smothered beef with Chinese cabbage in a light sweet red curry', '19,95'],
      [39, 'Keng Phed Ped Yang', 'Geroosterde eend in licht pittige rode curry, gemengde groenten en lychees', 'Roasted duck in red curry with lychee and mixed vegetables', '19,95', 1],
      [40, 'Phed Yang Krapao', 'Geroosterde eend met Thaise basilicum en diverse groenten', 'Roasted duck with Thai basil and mixed vegetables', '19,95'],
      [41, 'Hoo Mok Talay', 'Gestoomde zeevruchten in rode curry met Chinese kool en ui', 'Steamed seafood in a red curry with Chinese cabbage and onion', '19,95'],
      [42, 'Chu Chi Pla of Kung', 'Visfilet (Pla) of garnalen (Kung) in rode curry met Thaise basilicum en Chinese kool in kokosmelk', 'Red curry with fish fillet or shrimp, Thai basil and Chinese cabbage in coconut milk', '19,95'],
      [43, 'Kai Cashew', 'Wokgerecht met kip, cashewnoten, gemengde wokgroenten in soja- en oestersaus en knoflook', 'Stir fried chicken with cashew nuts, mixed vegetables in soy and oyster sauce and garlic', '16,75'],
      [44, 'Kaw Pad Sapparot Kung', 'Gebakken rijst met garnalen in een halve ananas met rozijnen, cashewnoten, bosui, paprika, tomaten en ui', 'Fried rice with shrimp in half a pineapple with raisins, cashew nuts, spring onion, paprika and tomato', '19,95'],
      [45, 'Massaman Nua Stew', 'Zachte rode curry met gesmoord rundvlees, aardappel, ui en cashewnoten in kokosmelk', 'Light sweet red curry with smothered beef, potato, onion and cashew nuts in coconut milk', '19,95']
    ]}
  };

  var MENUS = [
    { n: 'Menu 1', sub: '3 gangen', price: '32,50', courses: [
      ['Voorgerecht', [['Tom Kha Kai', 'Zacht romige kokossoep met kip, tomaat, champignons en koriander']]],
      ['Hoofdgerecht', [['Keng Massaman Kai', 'Zachte rode curry met kip, aardappel, ui, cashewnoten in kokosmelk'], ['Pad Krapao Nua', 'Licht pittig wokgerecht met ossenhaas, Thaise basilicum en groenten'], ['Kaw Pad', 'Gebakken rijst met ui en ei'], ['Pad Noodle', 'Gebakken noedels met groenten']]],
      ['Nagerecht', [['Dessert of koffie/thee', '']]]
    ]},
    { n: 'Menu 2', sub: '3 gangen', price: '35,00', courses: [
      ['Voorgerecht', [['Ruam Mit Thai Family', 'Diverse voorgerechten: Thai Pangsit, Satay Kai, Tod Man Pla, Po Pia Pak']]],
      ['Hoofdgerecht', [['Pad Thai Kung', "Gebakken rijstnoedels met garnalen, ei, pinda's, taugé, prei en limoen"], ['Pad Med Mamuang Kai', 'Licht pittig wokgerecht met kip, cashewnoten, knoflook, diverse groenten, oester- en sojasaus'], ['Keng Khiao Wan Nua', 'Groene curry met ossenhaas, Thaise basilicum, bamboe, aubergines, munt en groenten in kokosmelk']]],
      ['Nagerecht', [['Dessert of koffie/thee', '']]]
    ]},
    { n: 'Menu 3', sub: '4 gangen', price: '39,95', courses: [
      ['Voorgerecht', [['Ruam Mit Thai Family', 'Diverse voorgerechten: Thai Pangsit, Satay Kai, Tod Man Pla, Po Pia Pak']]],
      ['Soep', [['Tom Kha Kai', 'Zacht romige kokossoep met kip, tomaat, champignons en koriander']]],
      ['Hoofdgerecht', [['Kai Cashew', 'Wokgerecht met kip, cashewnoten, gemengde wokgroenten in soja- en oestersaus en knoflook'], ['Pad Pak Ruam Mit Nua', 'Wokgerecht met ossenhaas, gemengde wokgroenten in soja- en oestersaus en knoflook'], ['Keng Massaman Moo', 'Zachte rode curry met varkenshaas, aardappel, ui en cashewnoten in kokosmelk']]],
      ['Nagerecht', [['Dessert of koffie/thee', '']]]
    ]},
    { n: 'Menu 4', sub: '3 gangen, vegetarisch', price: '32,50', courses: [
      ['Voorgerecht', [['Tom Kha Tofu', 'Zacht romige kokossoep met tofu, champignons en koriander']]],
      ['Hoofdgerecht', [['Pad Pak Ruam Mit', 'Wokgerecht met gemengde wokgroenten in soja- en oestersaus en knoflook'], ['Som Tam', "Een heerlijke frisse salade met jonge papaya, tomaat, chili, citroen en pinda's"], ['Keng Ped Tofu', 'Licht pittige rode curry met tofu, Thaise basilicum, bamboe en diverse groenten']]],
      ['Nagerecht', [['Dessert of koffie/thee', '']]]
    ]}
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var CHILI = '<span class="chili" title="licht pittig" aria-label="licht pittig"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M11.5 2.5c-.4 1-1 1.4-1.8 1.6C6 5 3.2 8.6 2 13.3c4.6-.4 8.8-3 10.3-6.8.4-1 .3-2-.3-2.8l.8-1z" fill="currentColor"/></svg></span>';

  function dish(d, price) {
    var spicy = (d[5] === 1 || d[4] === 1) ? CHILI : '';
    var p = price || d[4];
    return '<li class="dish"' + (price === null ? ' data-variant' : '') + '>' +
      '<span class="no">' + d[0] + '</span>' +
      '<div class="dish-body"><h4><span class="dn">' + esc(d[1]) + '</span><span class="dv"></span>' + spicy + '</h4>' +
      '<p>' + esc(d[2]) + '</p><p class="en" lang="en">' + esc(d[3]) + '</p></div>' +
      '<span class="price">' + (price === null ? '<span class="from">vanaf</span> 15,25' : esc(p)) + '</span></li>';
  }

  function chooser() {
    var h = '<div class="chooser" role="group" aria-label="Kies uw variant"><p class="chooser-q">Kies uw variant, de prijzen passen zich aan</p><div class="chips">';
    V.forEach(function (v) {
      h += '<button type="button" class="chip" data-k="' + v.k + '" data-p="' + v.p + '" aria-pressed="false"><b>' + v.k + '</b><span>' + v.nl + '</span><em>' + v.p + '</em></button>';
    });
    return h + '</div><p class="chips-legend">Tofu en Pak: vegetarisch (tofu, groenten). Kai: kip. Moo: varkenshaas. Pla: vis. Nua: ossenhaas. Kung: garnalen.</p></div>';
  }

  var html = '';
  Object.keys(M).forEach(function (id, i) {
    var s = M[id];
    html += '<div class="panel" role="tabpanel" id="p-' + id + '" aria-labelledby="t-' + id + '"' + (i ? ' hidden' : '') + '>';
    html += '<h3 class="panel-title">' + s.title + ' <span lang="en">' + s.en + '</span></h3>';
    if (s.variants) html += chooser();
    if (s.groups) {
      s.groups.forEach(function (g) {
        html += '<div class="group"><h4 class="group-name">' + g.name + '</h4><p class="group-desc">' + esc(g.nl) + '</p><p class="en group-desc" lang="en">' + esc(g.en) + '</p><ul class="dishes">';
        g.items.forEach(function (d) { html += dish(d); });
        html += '</ul></div>';
      });
    } else {
      html += '<ul class="dishes">';
      s.items.forEach(function (d) { html += dish(d, s.variants ? null : undefined); });
      html += '</ul>';
    }
    if (s.variants || id === 'chef') html += '<p class="note">' + NASI + '</p>';
    html += '</div>';
  });

  html += '<div class="panel" role="tabpanel" id="p-menus" aria-labelledby="t-menus" hidden>';
  html += '<h3 class="panel-title">Menu\'s <span>prijs per persoon, minimaal 2 personen</span></h3><div class="setmenus">';
  MENUS.forEach(function (m) {
    html += '<article class="setmenu"><header><h4>' + m.n + '</h4><p>' + m.sub + '</p><p class="sm-price">€ ' + m.price + '<small> p.p.</small></p></header>';
    m.courses.forEach(function (c) {
      html += '<div class="course"><h5>' + c[0] + '</h5><ul>';
      c[1].forEach(function (x) { html += '<li><b>' + esc(x[0]) + '</b>' + (x[1] ? '<span>' + esc(x[1]) + '</span>' : '') + '</li>'; });
      html += '</ul></div>';
    });
    html += '</article>';
  });
  html += '</div><p class="note">' + NASI + '</p></div>';

  document.getElementById('panels').innerHTML = html;

  // variantkeuze: prijzen en namen bijwerken binnen het paneel
  document.querySelectorAll('.chooser').forEach(function (ch) {
    var panel = ch.closest('.panel');
    ch.addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      var on = b.getAttribute('aria-pressed') !== 'true';
      ch.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      if (on) b.setAttribute('aria-pressed', 'true');
      panel.querySelectorAll('[data-variant]').forEach(function (li) {
        li.querySelector('.dv').textContent = on ? ' ' + b.dataset.k : '';
        li.querySelector('.price').innerHTML = on ? b.dataset.p : '<span class="from">vanaf</span> 15,25';
        li.classList.toggle('picked', on);
      });
    });
  });
})();
