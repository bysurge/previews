(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // item: [naam, omschrijving, prijs]
  var ETEN = [
    { id: 'lunch', t: 'Lunch', note: 'Van 12:00 tot 17:00', groups: [
      { h: 'Sandwiches', s: 'Op zuurdesembrood met salade garnituur', items: [
        ['Het Wapen', 'Gerookte kip, spek, komkommer, tomaat en een gebakken ei', '11,20'], ['Hete Kip', 'Pittige kippendijen', '10,25'], ['Club', 'Jonge kaas, achterham, gerookte kip en spek', '10,25'] ] },
      { h: 'Broodjes', items: [
        ['Jonge kaas (V)', '', '5,95'], ['Boerenham', '', '5,95'], ['Pasham met pesto', '', '7,95'], ['12 uurtje', 'Soep van het moment, plakje kaas, gebakken ei en een "de Jong" kroket', '13,50'], ['Gezond (V)', 'Komkommer, tomaat, kaas, ei en boerenham', '9,50'], ['Geitenkaas (V)', 'Warm, met honing en walnoten', '10,50'], ['Carpaccio', 'Vers gesneden met pecorino, rucola, pitten en truffelmayonaise', '14,50'], ['Kroket "de Jong"', '2 rundvleeskroketten met mayonaise en mosterd', '10,75'] ] },
      { h: 'Tosti\'s', items: [
        ['Het Wapen', 'XL tosti met gerookte kip, spek en kaas', '9,95'], ['Ham en/of kaas XL', '', 'vanaf 6,95'], ['Ham-kaas-ei XL', '', 'vanaf 7,95'], ['Ham-kaas-spek XL', '', 'vanaf 7,95'], ['Tomaat-paprika-kaas XL', '', 'vanaf 7,95'] ] },
      { h: 'Uitsmijters & omeletten', items: [
        ['Het Wapen', 'Rode ui, champignons, spek, tomaat en tijm', '11,25'], ['Ham en kaas', '', '9,50'], ['Extra ingrediënt', 'Tomaat, spek, rode ui of champignons', '+ 0,95'], ['XXL', '4 eieren in plaats van 3', '+ 1,50'] ] },
      { h: 'Lekker bij de koffie', items: [
        ['Choco brownie met slagroom', '', '3,50'], ['Warm appelgebak met slagroom', '', '4,75'], ['Warme wafel met chocoladesaus en slagroom', '', '4,95'], ['New York cheesecake met frambozensaus', '', '6,25'] ] }
    ] },
    { id: 'salades', t: 'Salades & soepen', groups: [
      { h: 'Salades', s: 'Medium / large', items: [
        ['Carpaccio', 'Met pecorino, rucola, pitten en truffelmayonaise', '16,00 / 21,00'], ['Geitenkaas (V)', 'Getoast, met vijgenjam en walnoten', '13,50 / 17,50'], ['Kip', 'Met spek, pecorino en pesto', '13,50 / 17,50'] ] },
      { h: 'Soepen', s: 'Met een snee zuurdesembrood', items: [
        ['Soep van \'t moment (V)', 'Zie het krijtbord of vraag de bediening', '7,50'], ['Uiensoep', 'Met kaascrouton', '7,95'] ] }
    ] },
    { id: 'diner', t: 'Diner', groups: [
      { h: 'Lekker vooraf of erbij', items: [
        ['Zuurdesembrood', 'Met kruidenboter, pesto en aioli', '6,95'], ['Plenkske', 'Pasham, Spaanse fuet en boerenworst', '11,25'] ] },
      { h: 'Voorgerechten', items: [
        ['Carpaccio', 'Met pecorino, rucola, pitten en truffelmayonaise', '13,50'], ['Gamba\'s', '8 stuks in sambalroom met zuurdesembrood (+ 4 gamba\'s € 4,50)', '13,50'], ['Gyoza', '6 Japanse kipdumplings (of vega) met soja', '9,95'], ['Oesterzwam (V)', '6 stuks, krokant, met srirachamayo', '8,95'], ['Calamaris', 'Met aioli en limoen', '9,50'], ['Proeverij het Wapen', 'Selectie warme en koude voorgerechten, vanaf 2 personen', '14,95 p.p.'] ] },
      { h: 'Hoofdgerechten', s: 'Met roerbakgroenten', items: [
        ['Biefstuk', 'Met pepersaus en seizoensgroenten, 180 of 250 gram', '24,95 / 31,50'], ['Buikspek', 'Met BBQ-saus en seizoensgroenten', '21,50'], ['Zalm', '200 gram, teriyaki, sesam en seizoensgroenten', '26,00'], ['Fried rice', 'Oosters, met gamba\'s en groenten', '21,50'], ['Cannelloni (V)', 'Spinazie-ricotta in kruidige tomaten-paprikasaus', '18,50'], ['Pasta pesto (V)', 'Penne en rucola (+ kippendij € 3,00, + gamba\'s € 4,50)', '17,50'] ] },
      { h: '3 gangen maandmenu', items: [ ['Maandmenu', 'Wisselend per maand, zie "Nu bij Het Wapen"', '32,50'] ] },
      { h: 'Bijgerechten', items: [
        ['Frietjes met mayonaise', '', '+ 4,00'], ['Aardappelkroketjes met mayonaise', '', '+ 4,50'], ['Zoete aardappelfrietjes met mayonaise', '', '+ 5,00'], ['Groene salade', '', '+ 5,00'], ['Extra warme saus', '', '+ 2,50'], ['Truffelmayonaise', '', '+ 0,75'], ['Aioli', '', '+ 0,75'] ] },
      { h: 'Nagerechten', items: [
        ['Dame blanche', 'Met Belgische Callebaut-chocolade', '8,50'], ['Chocolate mess', 'Mousse, brownie en frambozensaus', '9,25'], ['New York cheesecake', 'Met frambozensaus', '6,95'], ['Chocolade lava cake', 'Met karamel en vanille-ijs', '8,25'], ['Espresso martini', '', '9,50'], ['Proeverij', 'Selectie zoetigheden', '8,75'], ['Kaasplankje', '3 kazen met kletzenbrood', '9,95'] ] }
    ] },
    { id: 'herberghap', t: 'Herberghap', note: 'De hele dag te bestellen. Met frietjes en salade; burger en schnitzel zijn er ook vega.', groups: [
      { h: 'Herberghap', items: [
        ['Schnitzel', 'Met paddenstoelensaus (+ kaas en spek € 1,00, + gebakken ei € 1,00, + pulled chicken € 3,50)', '21,50'], ['Saté van kippendijen', 'Met satésaus, kroepoek en gefrituurde uitjes', '21,50'], ['Burger', '100% rundvlees met spek, kaas, tomaat en komkommer (+ gebakken ei € 1,00, + pulled chicken € 3,50)', '21,50'], ['Fish & chips', 'Met remouladesaus', '21,50'] ] },
      { h: 'Loaded fries', s: 'XL + € 3,50', items: [
        ['Truffle', 'Friet, spekjes, pecorino en truffel', '12,50'], ['BBQ chicken', 'Friet, pulled chicken, BBQ-saus en cheddar', '12,50'] ] }
    ] },
    { id: 'borrel', t: 'Borrel', groups: [
      { h: 'Borrelkaart', items: [
        ['Borrelnootjes', 'Borrelmix, 150 gram', '1,00'], ['Zuurdesembrood', 'Met kruidenboter, pesto en aioli', '6,95'], ['Plenkske', 'Pasham, Spaanse fuet en boerenworst', '11,25'], ['Calamaris', 'Met aioli en limoen', '9,25'], ['Nacho\'s', 'Gegratineerd, met tomatensalsa (+ pulled chicken € 3,50)', '8,50'], ['Gyoza', '6 Japanse kipdumplings (of vega) met soja', '9,95'], ['Oesterzwam (V)', '6 stuks, krokant, met srirachamayo', '8,95'] ] },
      { h: 'Bittergarnituur', items: [ ['12 stuks', '', '12,50'], ['18 stuks', '', '18,50'], ['24 stuks', '', '22,50'] ] },
      { h: '"De Jong" bitterballen', s: 'Per stuk, met mosterd of aioli', items: [
        ['Rundvlees', '', '1,10'], ['Goulash', '', '1,10'], ['La Trappe quadrupel', '', '1,25'], ['La Trappe Isid\'or kaas', '', '1,25'] ] }
    ] },
    { id: 'kerst', t: 'Kerstmenu 2026', note: '1e en 2e kerstdag, uitsluitend op reservering. Een kerstmenu van 4 of 5 gangen; vraag bij het reserveren naar de prijs.', groups: [
      { h: 'Carpaccio', items: [ ['Rund', 'Truffelmayonaise, rucola, pecorino en pitten', ''], ['Pompoen', 'Burrata, pitten en rucola', ''], ['Tonijn', 'Wasabimayonaise, sesam en soja', ''] ] },
      { h: 'Soep', items: [ ['Pompoensoep', 'Met geitenkaas', ''], ['Uiensoep', 'Met kaascrouton', ''] ] },
      { h: 'Hoofdgerecht', items: [ ['Biefstuk', 'Gratin, truffeljus en groene asperge', ''], ['Ravioli gevuld met pompoen', 'Pecorino en chili-olie', ''], ['Sukade', 'Mousseline, groene asperge, rodewijnjus en beukenzwammetjes', ''], ['Parelhoen', 'Filet en pootje, groene asperge en jus de veau', ''] ] },
      { h: 'Nagerecht', items: [ ['Chocolade lava cake', 'Karamelsaus en vanille-ijs', ''], ['Kaasplankje', '3 kazen, kletzenbrood, rode-portstroop, walnoot en druif', ''] ] },
      { h: 'Friandises', items: [ ['Iets lekkers uit de keuken', 'Met koffie of thee en een likeur naar keuze', ''] ] }
    ] }
  ];

  var DRANK = [
    { id: 'bier', t: 'Bier', groups: [
      { h: 'Van de tap', items: [ ['Hertog Jan Pilsner (5,1%)', 'klein / groot', '4,00 / 7,75'], ['Hertog Jan Weizener (5,7%)', 'klein / groot', '4,75 / 8,75'], ['Hertog Jan Herfstbock (6,5%)', '', '5,50'], ['Tripel Karmeliet (8,4%)', '', '5,95'] ] },
      { h: 'Wit & weizen', items: [ ['Franziskaner Hefe-Weissbier', '50 cl', '7,50'], ['La Trappe Witte Trappist', '', '5,25'], ['Texels Skuumkoppe', '', '5,25'], ['IJwit', '', '5,50'], ['Bikse Wit', '', '5,50'] ] },
      { h: 'Blond & goudblond', items: [ ['Leffe Blond', '', '5,25'], ['Oerpils', '', '5,25'], ['Bikse Blond', '', '5,50'], ['Strandgaper', '', '5,25'], ['La Trappe Isid\'or', '', '5,50'], ['Chimay Sterk Blond (Green)', '', '5,95'], ['Lamme Goedzak', '', '5,95'], ['Magners Irish Cider', '', '4,75'], ['Corona Extra', '', '5,00'], ['Bucket Corona Extra', '5 flesjes voor de prijs van 4', '20,00'] ] },
      { h: 'IPA', items: [ ['Mooie Nel', '', '5,75'], ['Low Sun', '', '5,75'], ['EOS DDH Thiolized IPA', '', '6,50'], ['Bikse IPA', '', '5,95'], ['Krab IPA', '', '5,95'] ] },
      { h: 'Bruin, bock & quadrupel', items: [ ['Leffe Dubbel/Bruin', '', '5,25'], ['La Trappe Dubbel', '', '5,25'], ['Bikse Dubbel', '', '5,50'], ['Guinness Draught', '50 cl', '7,50'], ['Chimay Grande Réserve (Blue)', '', '6,25'], ['La Trappe Quadrupel', '', '6,25'], ['Bikse Quadrupel', '', '6,25'], ['Hertog Jan Grand Prestige', '', '5,95'], ['Bockrammer', '', ''], ['Barbar Bock', '', '6,75'] ] },
      { h: 'Tripel', items: [ ['Leffe Tripel', '', '5,95'], ['Tripel Karmeliet', '', '5,95'], ['Chimay Tripel (White)', '', '5,95'], ['Maredsous 10', '', '5,95'], ['Zeezuiper', '', '5,95'], ['Bikse Tripel', '', '5,95'] ] },
      { h: 'Duvel', items: [ ['Duvel', '', '6,25'], ['Duvel 666', '', '6,75'], ['Duvel Triple Hop Citra', '', '6,95'], ['Duvel Triple Hop Cashmere', '', ''], ['Duvel Triple Hop Krush', '', ''] ] },
      { h: 'Fruit', items: [ ['Liefmans Fruitesse', '', '4,95'] ] },
      { h: 'Alcoholvrij', items: [ ['Hertog Jan 0.0', '', '3,75'], ['Franziskaner Alkoholfrei', '50 cl', '6,50'], ['Liefmans Fruitesse 0.0', '', '4,25'], ['Leffe Blond 0.0', '', '4,75'], ['Corona Cero', '', '4,50'], ['La Trappe Nillis', '', '4,75'], ['La Trappe Epos', '', '4,75'] ] }
    ] },
    { id: 'wijn', t: 'Wijn & bubbels', note: 'Wijn per glas / fles', groups: [
      { h: 'Rood', items: [ ['Merlot', 'Frankrijk, Croix d\'or', '6,00 / 26,00'], ['Shiraz Pinotage', 'Zuid-Afrika, Diepe Gronde', '6,00 / 26,00'] ] },
      { h: 'Rosé', items: [ ['Syrah', 'Croix d\'or', '6,00 / 26,00'] ] },
      { h: 'Wit', items: [ ['Sauvignon Blanc', '', '6,00 / 26,00'], ['Chardonnay-Viognier', '', '6,00 / 26,00'], ['Celeste Verdejo', 'Spanje, Torres', '7,00 / 34,50'], ['Mainzer Domherr Cabinet', 'Zoet', '6,00 / 26,00'] ] },
      { h: 'Prosecco', items: [ ['Frizzante', '0,25 l, Scavi & Ray', '9,95'], ['Fles Veneto brioso', '', '29,50'] ] },
      { h: 'Port', items: [ ['Fonseca Tawny', '', '5,00'], ['Fonseca Late Bottled Vintage 2014', '', '7,50'] ] }
    ] },
    { id: 'cocktails', t: 'Cocktails', groups: [
      { h: 'Cocktails', items: [ ['Mojito', '', '7,95'], ['Tequila Sunrise', '', '8,95'], ['Pornstar Martini', '', '11,00'], ['Moscow Mule', '', '9,50'], ['Long Island Iced Tea', '', '11,95'], ['Cuba Libre', '', '7,00'], ['Bloody Mary', '', '9,50'], ['Espresso Martini', '', '9,50'], ['Margarita', '', '9,50'], ['Limoncello Spritz', '', '9,95'], ['Aperol Spritz', '', '9,95'], ['Mojito 0.0', '', '7,50'] ] }
    ] },
    { id: 'koffie', t: 'Koffie & thee', groups: [
      { h: 'Koffie', items: [ ['Espresso', '', '3,00'], ['Espresso macchiato', '', '3,25'], ['Lungo / koffie', '', '3,00'], ['Doppio', '', '5,50'], ['Ice coffee', '', '6,00'], ['Cappuccino', '', '3,50'], ['Koffie verkeerd', '', '3,50'], ['Latte macchiato', '', '3,75'], ['Siroopje', 'Karamel, hazelnoot, kaneel of pumpkin spice', '+ 0,75'], ['Speciale koffie', 'Irish, French of Spanish', '9,50'] ] },
      { h: 'Thee & choco', items: [ ['Bradley\'s Tea', 'Earl Grey, English Blend, Rooibos, Green Tea Lemon, Ginger Citrus, Black Tea Red Fruits', '3,00'], ['Verse muntthee', '', '4,00'], ['Verse gemberthee', '', '4,00'], ['Jasili blooming tea', 'Pot van 750 ml', '8,50'], ['Warme chocolademelk', '+ slagroom € 0,75', '4,25'] ] }
    ] },
    { id: 'fris', t: 'Fris & sap', groups: [
      { h: 'Fris', items: [ ['Coca-Cola / Zero', '', '3,30'], ['Fanta Orange Zero / Cassis / Sprite', '', '3,30'], ['Royal Bliss Bitter Lemon / Tonic', '', '3,30'], ['Royal Bliss Ginger Beer / Ginger Ale', '', '3,75'], ['Fuze Tea Sparkling Black Tea / Peach Hibiscus', '', '3,75'], ['Fuze Tea Green Tea / Mango Chamomile', '', '3,75'], ['Rivella Light', '', '3,75'], ['Chaudfontaine still / sparkling', '', '3,30'], ['Chaudfontaine 0,75 l', '', '6,50'] ] },
      { h: 'Vruchtensappen', items: [ ['Verse jus', '', '4,75'], ['Appelsap', '', '4,00'], ['Big Tom Spiced Tomato Juice', '', '4,75'] ] }
    ] },
    { id: 'sterk', t: 'Whisky & sterk', groups: [
      { h: 'Whisky', items: [ ['Jameson', '', '5,50'], ['The Glenlivet 12', '', '6,30'], ['Aberlour 12 Double Cask', '', '7,30'], ['Glenmorangie 12', '', '8,50'], ['Finlaggan Old Reserve', '', '6,00'], ['Laphroaig 10', '', '7,00'], ['Laphroaig Quarter Cask', '', '8,50'], ['Laphroaig Oak Select', '', '7,30'], ['Ardbeg Wee Beastie', '', '7,50'], ['Ardbeg The Ultimate', '', '9,50'], ['Glengoyne 12', '', '8,50'] ] },
      { h: 'Sterke dranken', items: [ ['Havana Club 3 Years', '', '4,25'], ['Schrobbeler', '', '3,50'], ['Malibu', '', '4,50'], ['Absolut Vodka', '', '4,00'], ['Tequila Olmeca Reposado', '', '4,50'], ['Beefeater 24 Premium Gin', '', '4,00'], ['Ramazzotti Sambuca', '', '4,50'], ['Ketel 1 jonge jenever', '', '3,50'], ['Salmari', '', '3,50'] ] },
      { h: 'Likeur', items: [ ['Tia Maria, Cuarenta y Tres, Disaronno, Baileys, Cointreau, Grand Marnier, Frangelico', '', '4,50'], ['Schrobbeler', '', '3,50'], ['Jägermeister', '', '3,50'], ['Limoncello', '', '5,00'] ] }
    ] }
  ];

  function item(i) {
    return '<li><span class="nm">' + esc(i[0]) + (i[1] ? '<span class="ds">' + esc(i[1]) + '</span>' : '') + '</span>' + (i[2] ? '<span class="pr">' + esc(i[2]).replace(/^(\d)/, '€ $1').replace(/^\+ /, '+ € ').replace(/^vanaf /, 'vanaf € ') + '</span>' : '<span class="pr"></span>') + '</li>';
  }
  function build(data, tabsId, panelsId, prefix) {
    var tabs = document.getElementById(tabsId), panels = document.getElementById(panelsId);
    data.forEach(function (c, n) {
      var b = document.createElement('button');
      b.setAttribute('role', 'tab'); b.id = prefix + '-t-' + c.id; b.setAttribute('aria-controls', 'kaart-' + c.id);
      b.setAttribute('aria-selected', n === 0); b.tabIndex = n ? -1 : 0; b.textContent = c.t; tabs.appendChild(b);
      var p = document.createElement('div');
      p.className = 'panel'; p.id = 'kaart-' + c.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id); p.hidden = n !== 0;
      p.innerHTML = (c.note ? '<p class="panel-note">' + esc(c.note) + '</p>' : '') + '<div class="groups">' + c.groups.map(function (g) {
        return '<div class="group"><h3>' + esc(g.h) + '</h3>' + (g.s ? '<p class="gsub">' + esc(g.s) + '</p>' : '') + '<ul class="items">' + g.items.map(item).join('') + '</ul></div>';
      }).join('') + '</div>';
      panels.appendChild(p);
    });
    var list = Array.prototype.slice.call(tabs.querySelectorAll('[role=tab]'));
    list.forEach(function (t, i) {
      t.addEventListener('click', function () { select(list, t); });
      t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var nx = list[(i + k + list.length) % list.length]; select(list, nx); nx.focus(); e.preventDefault(); });
    });
    return list;
  }
  function select(list, t) { list.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; }); }
  var etenTabs = build(ETEN, 'eten-tabs', 'eten-panels', 'e');
  build(DRANK, 'drank-tabs', 'drank-panels', 'd');

  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.getElementById('e-t-' + a.getAttribute('data-tab'));
      if (!t) return; e.preventDefault(); select(etenTabs, t);
      document.getElementById('eten').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // nav
  var btn = document.querySelector('.nav-toggle');
  btn.addEventListener('click', function () { var o = document.body.classList.toggle('nav-open'); btn.setAttribute('aria-expanded', o); });
  document.querySelectorAll('.nav a').forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }); });

  // vandaag
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('now');
  var from = { 0: '15:00', 2: '15:00', 3: '15:00', 4: '15:00', 5: '11:00', 6: '11:00' };
  var el = document.getElementById('today');
  if (from[d]) { el.textContent = 'Vandaag open vanaf ' + from[d]; el.classList.add('open'); }
  else el.textContent = 'Vandaag (maandag) gesloten, dinsdag vanaf 15:00 weer open';

  document.getElementById('cform').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
