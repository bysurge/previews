// Menukaart HANA: nummers, namen en afhaalprijzen uit het afhaalmenu (maart 2026).
// v = vegetarisch, n = nieuw
(function () {
  var K = [
    { id: 'nigiri', t: 'Nigiri', note: 'Per stuk.', items: [
      [1,'Sake','zalm','2,00'],[2,'Maguro','tonijn','2,10'],[3,'Tamago','zoete omelet','2,00','v'],[4,'Suzuki','zeebaars','2,00'],
      [5,'Ebi','garnaal','2,00'],[6,'Ama Ebi','zoetwatergarnaal','1,90'],[7,'Hokkigai','surfmossel','2,00'],[8,'Kani','krab','2,00'],
      [9,'Avocado','','1,90','v'],[11,'Unagi','gegrilde paling','2,40'],[12,'Tako','octopus','2,10'],[13,'Flamed Sake','gegrilde zalm','2,10'],
      [14,'Sake Cheese','zalm met kaas','2,20'],[15,'Ebi Cheese','garnaal met kaas','2,10'],[16,'Gyu','bief','2,10']]},
    { id: 'maki', t: 'Maki', note: 'Afhalen per 6 stuks, in het restaurant per 3 stuks.', items: [
      [17,'Sake Maki','zalm','4,30'],[18,'Tekka Maki','tonijn','4,40'],[19,'Kappa Maki','komkommer','3,90','v'],[20,'Avocado Maki','','3,90','v'],
      [21,'Tamago Maki','ei','3,80','v'],[22,'California Maki','avocado & krab','9,50'],[23,'Sake Wasabi Maki','avocado & zalm','9,50'],
      [24,'Cream Maki','roomkaas & zalm','9,50'],[25,'Spicy Tuna Maki','avocado & tonijn','11,00'],[26,'Avocado Tuna Maki','tonijnsalade','9,50'],
      [27,'Crunchy Tuna Maki','pikant & tonijn','11,00'],[28,'Ebi Maki','garnaal','11,20'],[29,'Crispy Maki','krokante rol','9,50','v'],
      [30,'Chicken Maki','avocado & kip','10,20'],[31,'Rib Eye Maki','avocado, krab & rundvlees','11,00'],[32,'California Sake Maki','zalm','9,70'],
      [33,'Crispy Asperges Maki','','9,70','v'],[34,'Bief Maki','beef, pikant','11,00'],[35,'Mango Sake Maki','mango & zalm','11,70'],
      [36,'Smoked Sake Maki','zalm','11,70'],[37,'Genki Ebi Maki','garnaal','11,20'],[38,'Flambé Maki','gegrilde zalm','10,70'],[39,'"Hana" Maki','grote rol','11,00']]},
    { id: 'gunkan', t: 'Gunkan & temaki', note: 'Per stuk.', items: [
      [40,'Maguro Gunkan','tonijn','2,20'],[41,'Sake Gunkan','zalm','2,20'],[42,'Mais Gunkan','','2,20','v'],[43,'Chuka Wakame Gunkan','zeewier','2,20','v'],
      [44,'Kani Gunkan','krabsalade','2,20'],[45,'Tobiko Gunkan','viskuit','2,20'],
      [46,'Maguro Temaki','tonijn','3,60'],[47,'Sake Temaki','zalm','3,60'],[48,'Unagi Temaki','gegrilde paling','3,90'],
      [49,'California Temaki','krab','3,60'],[50,'Wakame Temaki','zeewier','3,60','v']]},
    { id: 'rijst', t: 'Rijst & ramen', items: [
      [51,'Yasai Meshi','veggie nasi','7,00','v'],[52,'Tori Yaki Meshi','nasi met kip','9,30'],[53,'Niku Meshi','nasi met bief','9,30'],
      [54,'Yasai Ramen','veggie noodles','7,00','v'],[55,'Niku Ramen','noodles met bief','9,30'],[56,'Tori Yaki Ramen','noodles met kip','9,30']]},
    { id: 'soep', t: 'Soep & salade', items: [
      [57,'Veggie Udon Soep','noodles','7,00','v'],[58,'Udon Soep met beef','','9,30'],[59,'Udon Soep met kip','','9,30'],
      [60,'Seafood Soep','garnaal en kreeft','9,30','n'],[61,'Miso Soep','tofu','5,80','v'],[62,'Tomaten Soep','','5,80','v'],
      [63,'Kani Ebiko Salade','krabsalade','7,50'],[64,'Kip Salade','','7,70'],[65,'Shrimp Salade','garnalen','7,50'],
      [66,'Carpaccio Salade','bief','9,50'],[67,'Sake Salade','zalm','8,50'],[68,'Maguro Salade','tonijn','8,50'],
      [69,'Sashimi Salade','zalm & tonijn','8,80'],[70,'Wakame Salade','zeewier','7,50','v'],[71,'Tsukemono','zoetzure komkommer','6,50','v'],
      [72,'Vers Fruit','','6,00','v'],[73,'Edamame','sojabonen','6,50','v']]},
    { id: 'grill', t: 'Gegrild & gebakken', items: [
      [74,'Saba','makreel, 2 st.','7,80'],[75,'Slip Tong','vis, 1 st.','8,00'],[76,'Sake Teriyaki','zalm, 2 st.','9,30'],[77,'Zeebaars','2 st.','9,00'],
      [78,'UP Ebi','garnaal, 8 st.','10,50'],[79,'Ebi Teppanyaki','garnaal, 8 st.','10,50'],[80,'Mosselen','6 st.','8,60'],[81,'Ahiru','eend, 8 st.','8,50'],
      [82,'Gyoza','kipdumplings, 6 st.','6,50'],[83,'Enoki Mushroom','biefrol met paddenstoelen, 6 st.','9,50'],[84,'Usuyaki Cheese','bief met kaas, 6 st.','9,70'],
      [85,'Kohisuji','lamskoteletten, 3 st.','11,00'],[86,'Lamsspies','lamsvlees, 3 st.','7,50'],[87,'Runderspies','bief en ui, 3 st.','7,50','n'],
      [88,'Yakitori','kipsaté, 6 st.','7,00'],[89,'Tsukune','kipballetjes, 2 st.','6,00'],[90,'Tori Kerrie','kip','9,00'],[91,'Tori Teriyaki','kip','9,00'],
      [92,'Tori Katsu','gefrituurde kip','9,70'],[93,'Tori Teba','kippenvleugeltjes, 6 st.','6,50'],[94,'Teppan Sesam Tori','kip, 200 g','10,50'],
      [95,'Chili Tori','kip','9,50'],[96,'Black Pepper Beef','bief met zwarte peper, 200 g','13,00'],[97,'Beef Teriyaki','bief, 200 g','13,00'],
      [98,'Courgette','','6,50','v'],[99,'Yasai Itame','gebakken verse groenten','6,50','v'],[100,'Yaki Mushroom','gebakken champignons','6,50','v'],
      [101,'Mini Loempia','10 st.','6,50','v'],[102,'Soy Bean Spring Roll','4 st.','6,50','v'],[103,'Shrimp & Crab Spring Roll','4 st.','8,00'],
      [104,'Gebakken Aardappel','','6,00','v'],[105,'Witte Vis','3 st.','8,00'],[106,'Ebi Tempura','garnaal, 6 st.','11,00'],
      [107,'Garnalen Kroketjes','6 st.','7,00'],[108,'Panko Ebi','krokante garnaal, 6 st.','9,50'],[109,'Ika Fried','inktvisringen, 8 st.','7,00'],
      [110,'Yasai Tempura','zoete aardappel, 4 st.','6,50','v'],[111,'Potato Balls','aardappelkoekjes, 8 st.','6,50','v'],[112,'Fried Banana','6 st.','6,00','v'],
      [113,'Sesam Balls','sesamballetjes, 6 st.','6,10','v'],[114,'Tori Karaage','kip, 6 st.','6,50'],[115,'Kipnugget','kip, 6 st.','6,50','n'],
      [116,'Zoete Broodje','brood, 3 st.','7,50','v']]},
    { id: 'sashimi', t: 'Sashimi', sashimi: true,
      note: 'Afhalen: 8 stuks (de sets zoals vermeld). In het restaurant: 5 stuks per bestelling, met een meerprijs bovenop all you can eat.',
      items: [
      [117,'Sake','zalm','14,00','','3,75'],[118,'Maguro','tonijn','15,00','','4,60'],[123,'Sake & Maguro','zalm & tonijn','14,50','',''],
      [119,'Sake Tataki','zalm','15,50','','4,50'],[120,'Tuna Tataki','tonijn','16,00','','5,50'],
      [121,'Kleine Sashimi','13 st.: sake 2, maguro 2, zeebaars 2, ama ebi 4, tamago 1, saba 2','14,50','','6,50'],
      [122,'Grote Sashimi','29 st.: sake 4, maguro 4, zeebaars 4, tako 4, hokkigai 4, ama ebi 5, tamago 1, ebi 3','30,00','','12,00']]},
    { id: 'poke', t: 'Poke bowls', poke: true, items: [
      ['','Sake','zalm','14,00'],['','Maguro','tonijn','15,00'],['','Unagi','paling','16,00'],
      ['','Kip','','14,00'],['','Ebi','garnaal','15,00'],['','Veggie','','14,00','v']]},
    { id: 'menus', t: "Menu's", sets: true, note: 'Samengestelde sets om af te halen.', items: [
      ['M1','Sushi Mix','1 pers. · 13 st.','15,50','','sake 1, maguro 1, ebi 1, tamago 1, sake maki 3, tekka maki 3, California maki 3'],
      ['M2','Sushi Mix','2 pers. · 29 st.','38,00','','sake 2, maguro 2, ebi 2, tamago 2, sake maki 6, tekka maki 6, crispy maki 3, ebi maki 6'],
      ['M3','Sushi Set','2-3 pers. · 56 st.','79,00','','sake 4, maguro 4, ebi 2, tamago 2, kani 4, tamago maki 6, California maki 6, kappa maki 6, sake maki 6, tekka maki 6, crunchy tuna maki 6, "Hana" maki 4, wakame salade 1, kani ebiko salade 1'],
      ['M4','Maki Set','1 pers. · 15 st.','16,40','','avocado, kappa, California, crispy en sake wasabi maki, elk 3'],
      ['M5','Maki Set','2 pers. · 40 st.','39,50','','sake maki 6, tekka 6, kappa 6, avocado 6, California 6, crispy 6, "Hana" 4'],
      ['M6','Sake Set','1 pers. · 16 st.','20,00','','sake nigiri 2, sake maki 6, sake wasabi 3, cream maki 3, sake cheese 2'],
      ['M7','Tonijn Set','1 pers. · 17 st.','23,00','','tekka maki 6, maguro nigiri 2, spicy tuna maki 3, crunchy maki 6'],
      ['M8','"Hana" Set','4-6 pers. · 84 st.','98,00','','sake maki 6, tekka 6, kappa 6, avocado 6, California 6, sake wasabi 6, ebi maki 6, "Hana" maki 6, crispy 6, crunchy 6, wakame salade 1, kani ebiko salade 1, mini loempia 12, yakitori 6, gyoza 6'],
      ['M9','Special Maki','2 pers. · 28 st.','44,50','','crunchy 6, cream 6, California 6, ebi 6, "Hana" 4'],
      ['M10','Nigiri Set','1 pers. · 12 st.','23,50','','sake 6, maguro 6'],
      ['M11','Veggie Maki Set','1 pers. · 18 st.','16,00','v','avocado 6, kappa 6, crispy 3, crispy asperge 3'],
      ['M12','Maki Mix Set','2-3 pers. · 36 st.','59,00','','chicken maki 6, crunchy 6, sake California 6, crispy 6, sake mango 6, genki ebi 6']]},
    { id: 'ijs', t: 'IJs', ijs: true, note: 'In het restaurant, maximaal 2 bollen per persoon.',
      items: ['Vanille','Mango papaya','Chocolade','Zwarte sesam','Groene thee','Citroen'] }
  ];

  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  K.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.role = 'tab'; b.id = 'tab-' + c.id; b.textContent = c.t;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'p-' + c.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    tabs.appendChild(b);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + c.id;
    p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (i !== 0) p.hidden = true;
    var h = '<h3 class="panel-title">' + esc(c.t) + '</h3>';
    if (c.note) h += '<p class="panel-note">' + esc(c.note) + '</p>';

    if (c.ijs) {
      h += '<ul class="ijs">' + c.items.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>';
    } else {
      if (c.sashimi) h += '<div class="col-head"><span>afhalen</span><span>restaurant</span></div>';
      h += '<ul class="dishes' + (c.sets ? ' sets' : '') + (c.sashimi ? ' two' : '') + '">';
      c.items.forEach(function (d) {
        var nr = d[0], veg = d[4] === 'v', nw = d[4] === 'n';
        h += '<li>' + (nr !== '' ? '<span class="nr">' + nr + '</span>' : '<span class="nr nr-bowl" aria-hidden="true"></span>') +
          '<span class="dn"><b>' + esc(d[1]) + (veg ? ' <i class="veg" title="vegetarisch"></i>' : '') + (nw ? ' <em class="new">nieuw</em>' : '') + '</b>' +
          (d[2] ? '<small>' + esc(d[2]) + '</small>' : '') +
          (c.sets && d[5] ? '<small class="inh">' + esc(d[5]) + '</small>' : '') + '</span>' +
          '<span class="pr">&euro;&nbsp;' + d[3] + '</span>' +
          (c.sashimi ? '<span class="pr pr2">' + (d[5] ? '+&nbsp;&euro;&nbsp;' + d[5] : '&ndash;') + '</span>' : '') + '</li>';
      });
      h += '</ul>';
      if (c.poke) h += '<div class="poke-extra"><p><strong>Extra &euro;&nbsp;2,50 per keuze:</strong> zalm, tonijn, garnaal, kip, paling, avocado of wakame.</p><p><strong>Sauzen:</strong> poke, spicy, sesam of unagi.</p></div>';
    }
    p.innerHTML = h;
    panels.appendChild(p);
  });

  var btns = tabs.querySelectorAll('button');
  function show(i, focus) {
    btns.forEach(function (b, j) {
      var on = i === j;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) btns[i].focus();
  }
  btns.forEach(function (b, i) {
    b.tabIndex = i === 0 ? 0 : -1;
    b.addEventListener('click', function () { show(i); });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); show((i + 1) % btns.length, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); show((i - 1 + btns.length) % btns.length, true); }
    });
  });

  // mobiel menu
  var t = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  t.addEventListener('click', function () {
    var open = t.getAttribute('aria-expanded') === 'true';
    t.setAttribute('aria-expanded', open ? 'false' : 'true');
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { t.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });
})();
