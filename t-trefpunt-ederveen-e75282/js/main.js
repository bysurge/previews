(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // Today's opening hours
  var hours = { 2: ['10:00', '20:00'], 3: ['10:00', '20:00'], 4: ['10:00', '20:00'], 5: ['10:00', '21:00'], 6: ['10:00', '21:00'] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), hm = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);
  var today = document.getElementById('today'), h = hours[d];
  if (h && hm < h[1]) {
    today.textContent = hm < h[0] ? 'Vandaag open van ' + h[0] + ' tot ' + h[1] : 'Nu open, vandaag tot ' + h[1];
  } else {
    var n = d; do { n = (n + 1) % 7; } while (!hours[n]);
    today.textContent = 'Nu gesloten, ' + (n === (d + 1) % 7 ? 'morgen' : names[n]) + ' weer open vanaf ' + hours[n][0];
    today.classList.add('closed');
  }
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('now');

  // Menu data: [name, price, description]
  var M = {
    lunchroom: [
      { t: 'Warme dranken', n: 'Maak je koffie éxtra lekker met caramel, vanille of chocolade: koffiesiroop + € 1,00.', i: [
        ['Koffie', '3,10'], ['Americano', '3,00'], ['Espresso', '3,10'], ['Dubbele espresso', '4,85'], ['Cappuccino', '3,45'],
        ['Latte macchiato', '3,95'], ['Wiener melange', '3,75'], ['Warme chocolademelk', '3,95'], ['Thee', '3,10'],
        ['Verse munt thee', '3,50'], ['Verse gember thee', '3,50']] },
      { t: 'Koude dranken', i: [
        ['Sourcy', '3,00', 'Blauw of rood'], ['Ice tea', '3,10', 'Sparkling, green of peach'], ['Pepsi', '3,10', 'Regular of zero'],
        ['Sinas', '3,10'], ['Cassis', '3,10'], ['Rivella', '3,10'], ['Ginger ale', '3,25'], ['Bitter lemon', '3,25'], ['Tonic', '3,25'],
        ['Appelsap', '3,10'], ['Fristi', '3,25'], ['Chocomel', '3,25'], ['Verse jus', '4,50'], ['IJskoffie', '5,95', 'Koffiesiroop + € 1,00']] },
      { t: 'SOOF', n: 'Sparkling limonade van 100% natuurlijk fruit.', i: [
        ['Roos, kardemom, peer & appel', '4,50'], ['Citroen, mint & appel', '4,50'],
        ['Blauwe bes, lavendel, zwarte bes & appel', '4,50'], ['Gember, peper, citroen & appel', '4,75']] },
      { t: 'Borreltje?', i: [
        ['Witte wijn', '5,50', 'Droog of zoet'], ['Rode wijn', '5,50'], ['Rosé', '5,50'],
        ['Bier', '3,75', 'Heineken (0.0), Hertog Jan of Radler 0.0'], ['Liefmans', '4,75'], ['Speciaal bier', '5,50']] },
      { t: 'Verwenmomentje', i: [
        ['Appeltaart', '4,50'], ['Gebak', '4,75', 'Vraag naar de opties van de dag'], ['Slagroom', '0,85']] },
      { t: 'Borrelgenot', i: [
        ['Nacho’s', '9,50', 'Geserveerd met guacamole en tomatenrelish'],
        ['Loaded nacho’s', '13,50', 'Geserveerd met pulled pork, guacamole en tomatenrelish'],
        ['Bitterballen', '8,50 / 14,00', '9 of 15 stuks'], ['Bittergarnituur', '9,25 / 14,75', '9 of 15 stuks'],
        ['Vlammetjes', '8,50 / 14,00', '9 of 15 stuks'], ['Kaastengels', '9,25 / 14,75', '9 of 15 stuks'],
        ['Hotwings', '9,25 / 14,75', '9 of 15 stuks'], ['Crispy chicken', '9,25 / 14,75', '9 of 15 stuks']] },
      { t: 'Knapperige klassiekers', n: 'Op bruin of wit brood.', i: [
        ['Bee happy brie', '9,50', 'Brie, honing en walnoten'],
        ['Warme beenham', '9,50', 'Beenham, sla en honing-mosterdsaus'],
        ['Carpaccio', '12,25', 'Carpaccio, rucola, pijnboompitten en truffelmayonaise'],
        ['Noorse verleiding', '14,00', 'Zalm, roomkaas, sla en komkommer'],
        ['Kip ’m d’r op', '11,75', 'Kipstrips, sla, tomaat en truffelmayonaise'],
        ['Vive la France', '9,95', 'Warme brie, pesto en tomaat'],
        ['Gezond & lekker', '8,75', 'Sla, kaas, ham, tomaat, komkommer en ei']] },
      { t: 'Bordje vol', i: [
        ['Smash it', '16,50', 'Een smakelijke smashburger met een portie patat'],
        ['Royale salade', '16,50', 'Een heerlijke salade met de keuze uit forel of krokante kip'],
        ['De scharrel van Ederveen', '12,50', 'Bruin of wit brood met 3 eieren, kaas en een mix van spekjes, champignons en uitjes'],
        ['Veur twaalven vol', '13,50', 'Bruin of wit brood met ham, kaas, een eitje, rundvleessalade, soep en een rundvleeskroket'],
        ['Soep van de dag', '8,50', 'Een kom soep met bruin of wit brood en kruidenboter']] },
      { t: 'Friet escalatie', n: 'Een bord vol friet, maar dan anders.', i: [
        ['’T Veense vuur', '14,50', 'Een bord vol friet met pittige kip en kaas'],
        ['Spektakel', '16,50', 'Een bord vol friet met buikspek en barbecuesaus'],
        ['’T loopt uit de klauwen', '10,50', 'Een bord vol friet met gehakt, gebakken ui en pindasaus'],
        ['Mamma mia', '15,00', 'Een bord vol friet met kip, Parmezaanse kaas, truffelmayonaise en zongedroogde tomaatjes']] }
    ],
    cafetaria: [
      { t: 'Patat', n: 'Woensdag: gezinszak patat voor 5 personen met 5 snacks voor € 15,00 (alleen afhalen).', i: [
        ['Patat normaal', '3,10'], ['Patat groot', '3,90'], ['Boerenpatat normaal', '7,95'], ['Boerenpatat groot', '9,45'],
        ['Patat stoofvlees', '8,25'], ['Twisterfriet', '5,10'], ['Gezinszak friet, 5 personen', '12,50'], ['Gezinszak friet, 10 personen', '24,50']] },
      { t: 'Snacks', i: [
        ['Frikandel', '2,85'], ['XXL frikandel', '5,25'], ['Kroket', '2,85'], ['Kwekkeboom kroket', '3,25'], ['Groentekroket', '3,25'],
        ['Satékroket', '3,25'], ['Berenhap', '3,95'], ['Kaassouflé', '2,90'], ['Ham-kaassouflé', '2,95'], ['Bamischijf', '2,95'],
        ['Nasischijf', '2,95'], ['Pikanto', '3,25'], ['Mexicano', '3,25'], ['Gehaktbal', '3,95'], ['Viandel', '3,00'], ['Kipcorn', '3,10'],
        ['Kikastick', '3,50'], ['Loempia', '5,50'], ['Loempidel', '3,00'], ['Knakworst', '3,10'], ['Shoarmarol', '3,75'],
        ['Satérol', '3,50'], ['Smulrol', '3,50'], ['Kipsaté', '6,95'], ['Kipschnitzel', '8,50'], ['Varkensschnitzel', '8,95'],
        ['Rundvleesslaatje', '3,95']] },
      { t: 'Hartige hapjes', n: 'Per 6 stuks.', i: [
        ['Bitterballen', '5,50'], ['Kipnuggets', '4,50'], ['Kipstrips', '5,95'], ['Kipchunks', '5,95'], ['Bittergarnituur', '6,00'],
        ['Vlammetjes', '5,50'], ['Hotwings', '5,95'], ['Kaastengels', '5,95']] },
      { t: 'Sauzen', n: 'Maak je snack af met een lekkere saus!', i: [
        ['Frietsaus', '0,85'], ['Curry', '0,85'], ['Speciaal', '1,00'], ['Joppie', '1,00'], ['Pindasaus', '1,00'], ['Oorlog', '1,00'],
        ['Appelmoes', '1,50'], ['Champignonsaus', '3,50'], ['Jachtsaus', '3,50']] },
      { t: 'Broodjes', i: [
        ['Ei', '3,95', 'Gebakken of gekookt'], ['Ham of kaas', '4,25'], ['Gezond', '6,50', 'Sla, kaas, ham, tomaat, komkommer en ei'],
        ['Beenham', '5,75', 'Met honing-mosterdsaus'], ['Warm vlees', '5,95'], ['Uitsmijter', '11,50', 'Met ham en/of kaas'],
        ['Broodje frikandel', '3,85'], ['Broodje kroket', '3,85'], ['Broodje gehaktbal', '4,95'],
        ['Kipburger', '5,95', 'Sla, tomaat, kaas, bacon, barbecuesaus en baconsaus'],
        ['Hamburger speciaal', '5,25', 'Sla en speciaalsaus'],
        ['Baconburger', '5,95', 'Hamburger met sla, kaas, bacon, barbecuesaus en baconsaus'],
        ['Joppieburger', '5,50', 'Kipburger met sla, joppiesaus en gebakken uitjes'],
        ['Cheeseburger', '5,50', 'Sla, kaas, wimpiesaus en gebakken uitjes'],
        ['Trefpunt speciaal', '11,50', 'Black angus burger met sla, tomaat, augurk, gebakken ei, bacon, barbecuesaus en baconsaus'],
        ['Trefpunt cheese', '11,50', 'Black angus burger met sla, tomaat, augurk, kaas, bacon, barbecuesaus en baconsaus'],
        ['Hete kip', '7,95', 'Sla, kaas en pittige kip']] },
      { t: 'Menu’s', n: 'Alle menu’s met verse rauwkost, een portie patat, een saus naar keuze en je favoriete frisdrank.', i: [
        ['Bal gehakt menu', '11,50'], ['Kipsaté menu', '14,50'], ['Loempia speciaal menu', '13,50'], ['Hamburger menu', '12,75'],
        ['Kapsalon', '13,50'], ['Kipschnitzel menu', '16,00'], ['Varkensschnitzel menu', '16,50'], ['Trefpunt speciaal menu', '19,00'],
        ['Kidsbox', '7,50', 'Met drinken, patat, appelmoes, mayonaise, een snack naar keuze (frikandel, kroket of kipnuggets) en een verrassing']] },
      { t: 'Drinken', i: [
        ['Blikje frisdrank', '3,50'], ['Sourcy', '3,00', 'Blauw of rood'], ['Ice tea', '3,10', 'Sparkling, green of peach'],
        ['Pepsi', '3,10', 'Regular of zero'], ['Sinas', '3,10'], ['Cassis', '3,10'], ['Rivella', '3,10'], ['Ginger ale', '3,25'],
        ['Bitter lemon', '3,25'], ['Tonic', '3,25'], ['Appelsap', '3,10'], ['Fristi', '3,25'], ['Chocomel', '3,25'], ['Red Bull', '3,75'],
        ['IJskoffie', '5,95', 'Koffiesiroop + € 1,00']] },
      { t: 'Softijs', ice: true, i: [
        ['IJshoorn vierkant', '2,50'], ['IJshoorn klein', '2,00'], ['IJshoorn middel', '2,75'], ['IJshoorn groot', '3,50'],
        ['IJsbeker klein', '3,50'], ['IJsbeker middel', '4,50'], ['IJsbeker groot', '5,50'],
        ['Sundae', '3,50', 'Met een saus naar keuze'], ['Sundae special', '3,75', 'Met een saus en een topping naar keuze'],
        ['Milkshake klein', '3,50'], ['Milkshake middel', '4,50'], ['Milkshake groot', '5,25']] }
    ]
  };
  var ICE = {
    'Smaken': ['Aardbei', 'Ananas', 'Banaan', 'Bokkenpoot', 'Bubbelgum', 'Bueno', 'Caramel', 'Chocolade', 'Cookie dough', 'Framboos', 'Kersen', 'Kikker', 'Koffie', 'Mango passie', 'Rood fruit', 'Smurf', 'Vanille'],
    'Toppings': ['Caramelblokjes', 'Crispy choco’s', 'Gouden parels', 'KitKat', 'Koffiecrunch', 'Lion', 'Lotus', 'Marshmallows', 'Nougatine nootjes', 'Oreo', 'Roodfruit parels', 'Smarties', 'Stroopwafel'],
    'Dips': ['Disco sprinkels', 'Blauwe sprinkels', 'Groene sprinkels', 'Roze sprinkels']
  };
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderCat(c) {
    var h = '<div class="cat-head"><h3>' + esc(c.t) + '</h3>' + (c.n ? '<p>' + esc(c.n) + '</p>' : '') + '</div><ul class="items">';
    c.i.forEach(function (x) {
      h += '<li><div class="it"><span class="it-n">' + esc(x[0]) + '</span><span class="it-p">€ ' + x[1] + '</span></div>' + (x[2] ? '<div class="it-d">' + esc(x[2]) + '</div>' : '') + '</li>';
    });
    h += '</ul>';
    if (c.ice) {
      h += '<div class="flavours">';
      Object.keys(ICE).forEach(function (k) { h += '<div><h4>' + k + '</h4><ul>' + ICE[k].map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('') + '</ul></div>'; });
      h += '</div>';
    }
    return h;
  }
  Object.keys(M).forEach(function (key) {
    var panel = document.getElementById('panel-' + key);
    var chips = '<div class="chips" role="tablist" aria-label="Onderdelen ' + key + '">';
    M[key].forEach(function (c, i) {
      chips += '<button type="button" role="tab" aria-selected="' + (i === 0) + '" aria-controls="' + key + '-cat" data-i="' + i + '">' + esc(c.t) + '</button>';
    });
    chips += '</div><div class="cat" id="' + key + '-cat" role="tabpanel" aria-live="polite"></div>';
    panel.innerHTML = chips;
    var box = panel.querySelector('.cat');
    box.innerHTML = renderCat(M[key][0]);
    panel.querySelectorAll('.chips button').forEach(function (b) {
      b.addEventListener('click', function () {
        panel.querySelectorAll('.chips button').forEach(function (o) { o.setAttribute('aria-selected', o === b ? 'true' : 'false'); });
        box.innerHTML = renderCat(M[key][+b.dataset.i]);
        b.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      });
    });
  });

  // Main menu tabs
  var tabs = document.querySelectorAll('.menu-tabs [role=tab]');
  function showTab(name) {
    tabs.forEach(function (t) {
      var on = t.id === 'tab-' + name;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { showTab(t.id.replace('tab-', '')); }); });
  document.querySelectorAll('[data-menu]').forEach(function (a) { a.addEventListener('click', function () { showTab(a.dataset.menu); }); });

  // Request form (preview only)
  var form = document.getElementById('form'), adres = form.querySelector('.adres');
  function syncType() { adres.hidden = form.soort.value !== 'catering'; }
  form.querySelectorAll('input[name=soort]').forEach(function (r) { r.addEventListener('change', syncType); });
  document.querySelectorAll('[data-type=catering]').forEach(function (a) {
    a.addEventListener('click', function () { form.querySelector('input[value=catering]').checked = true; syncType(); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
