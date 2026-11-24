// Menukaart Eethuis Eekterzicht (menukaart juni 2026)
var MENU = [
  { t: 'Ontbijt & lunch', groups: [
    { h: 'Vaassens ontbijt', note: 'Te bestellen tot 12 uur', box: true, price: '13,95',
      list: ['Koffie of thee', "Verse jus d'orange", 'Yoghurt met granola', 'Vers fruit', 'Ambachtelijk wit- en bruin brood', 'Ham & kaas', 'Roerei'] },
    { h: 'Soepen', note: 'Geserveerd met ambachtelijk brood en kruidenboter', items: [
      ['Huisgemaakte tomatensoep', '', '7,75'], ['Soep van de chef', '', '7,75']] },
    { h: 'Lunch specials', note: 'Keuze uit flatbread, oerwit of ambachtelijk bruin brood', items: [
      ['Miss Piggy', 'Geldersche beenham met honingmosterdsaus', '14,25'],
      ['Platte koe', 'Carpaccio met geraspte kaas, zongedroogde tomaten, crunchy beans & truffelmayonaise', '14,50'],
      ['Vis Duo', 'Gerookte zalm, huisgemaakte tonijnsalade, rode ui & crunchy beans', '14,50']] },
    { h: 'Warme broodjes', note: 'Geserveerd op flatbread', items: [
      ['Hete kip, chilisaus & gesmolten kaas', '', '12,75'],
      ['Tuna melt', 'Met huisgemaakte tonijnsalade & gesmolten kaas', '12,50'],
      ['Roomkaas, brie & honing', '', '12,50']] },
    { h: "Tosti's", note: 'Keuze uit wit of bruin', items: [
      ['Ham en/of kaas', '', '7,95'], ['Met ananas', '', '+ 0,50']] },
    { h: 'Uitsmijters', items: [
      ['Ham en/of kaas', '', '11,75'], ['Speciaal', 'Met ham, champignon, ui, spek en paprika', '12,95']] },
    { h: 'Toppers', items: [
      ['2 kroketten op brood', 'Vega mogelijk', '10,95'],
      ['12 uurtje', 'Twee sneetjes ambachtelijk brood met ham, kaas, gebakken ei, kroket & een soepje (vega mogelijk)', '14,50', true],
      ['Gehaktbal met brood of friet', '', '11,50']] },
    { h: 'Lunch plank', box: true, price: '21,25',
      list: ['Klein soepje met brood', 'Ambachtelijk brood met ham, kaas, brie & tonijnsalade', 'Kleine carpaccio salade', 'Ambachtelijke bitterbal', 'Kleine flatbread tosti met ham & kaas', 'Aardbeien met slagroom', 'Koffie of thee'] }
  ]},
  { t: 'Salades & plates', groups: [
    { h: 'Salades', note: 'Al onze salades worden gegarneerd met komkommer, tomaat, rode ui en crunchy beans en geserveerd met friet of brood', items: [
      ['Carpaccio', 'Met geraspte kaas, zongedroogde tomaat, crunchy beans & truffelmayonaise', '18,95'],
      ['Avocado', 'Krokante avocado met gekookt ei en chilimayonaise', '18,95'],
      ['Kip', 'Ananas & honing-mosterd dressing', '18,95'],
      ['Vis', 'Met gerookte zalm, huisgemaakte tonijnsalade, rode ui & crunchy beans', '18,95']] },
    { h: 'Plates', note: 'Geserveerd met friet en salade', items: [
      ['Saté van malse kippendij', 'Met atjar, gefrituurde uitjes & satésaus', '19,50'],
      ['Veluwse schnitzel van Slagerij Ter Weele', 'Met champignon, ui, paprika & spek', '23,50'],
      ['Garnalen burger', 'Met sla, relish van gekarameliseerde rode ui & heerlijke dressing', '22,50'],
      ['Smashed Burger', 'Twee dunne Irish Beef burgers met sla, kaas, spek & BBQ saus', '22,50'],
      ['Avocado Burger', 'Met guacamole, relish van gekarameliseerde rode ui, sla & tomaat', '22,50']] },
    { h: 'Wisselend gerecht van de chef', items: [['Informeer bij de bediening naar ons gerecht', '', '']] },
    { h: 'Dinsdag: diner', items: [['Elke dinsdag is onze keuken geopend voor diner. Vraag naar onze dinerkaart.', '', '']] }
  ]},
  { t: 'Trek & zoet', groups: [
    { h: 'Lekkere trek', items: [
      ['Borrelmaatjes', 'Met crispy chili mayo, 12 stuks', '11,75'],
      ['Ambachtelijke bitterballen', '10 stuks', '10,00'],
      ['Brood', 'Met smeersels', '7,95'],
      ["Nacho's", 'Met paprika, rode ui, chilisaus, guacamole & kaas', '7,95'],
      ['Mandje friet', 'Met mayo', '4,50'],
      ['Loaded fries', 'Met hete kip, gesmolten kaas en chilisaus', '10,75', true],
      ['Topking Kaastengels', 'Met chilisaus, 8 stuks', '7,95'],
      ['Borrelplank', "Met 6 borrelmaatjes, nacho's, 6 kaasstengels, borrelbroodje, mandje friet met mayo", '22,50'],
      ['Poffertjes', '12 stuks', '7,00']] },
    { h: 'Lekker voor bij de koffie', items: [
      ['Huisgemaakte monchou taart', '', '4,75'], ['Appelgebak', '', '4,75'], ['Divers gebak', '', '4,75'],
      ['Cake met aardbeien en slagroom', '', '4,50'], ['Saucijzenbroodje', '15 min', '3,95']] },
    { h: 'IJskaart', items: [
      ['Drie bolletjes vanille ijs', 'Met karamel-, chocolade- of aardbeiensaus', '8,95'],
      ['Aardbeien met vanille ijs en slagroom', '', '8,95'],
      ['Warme kersen met vanille ijs en slagroom', '', '8,95'],
      ['Kinder ijsje', 'Twee bolletjes vanille ijs met aardbeiensaus, slagroom en spikkels', '6,50']] }
  ]},
  { t: 'Dranken', groups: [
    { h: 'Warme dranken', items: [
      ['Koffie', '', '2,95'], ['Espresso', '', '2,95'], ['Cappuccino', '', '3,20'], ['Koffie verkeerd', '', '3,95'],
      ['Latte macchiato', '', '3,95'], ['Chai latte', '', '4,75'], ['Dirty chai latte', '', '5,50'], ['Matcha latte', '', '5,50'],
      ['Karamel- of vanillesiroop erbij', '', '+ 0,50'], ['Warme chocomel', '', '3,25'], ['Slagroom', '', '0,75'], ['Havermelk i.p.v. koemelk', '', '0,25']] },
    { h: 'Koffie specialiteiten', items: [
      ['IJskoffie met karamelsaus & slagroom', '', '7,50'], ['Iced chai latte', '', '4,75'], ['Iced matcha latte', '', '5,50'],
      ['Baileys latte', 'Met koude melk, ijsklontjes & slagroom', '8,25'],
      ['Spanish coffee met licor 43', '', '8,95'], ['Italian coffee met amaretto', '', '8,95'], ['Irish coffee met whisky', '', '8,95']] },
    { h: 'Thee', items: [
      ['Verse losse thee', '', '2,95'], ['Munt of gember', '', '4,00'], ['Gember & sinaasappel', '', '4,25'],
      ['Munt, gember, sinaasappel & citroen', '', '4,50'], ['Roots gember & bosvruchten', 'Verse gember en bosvruchten, zonder toegevoegde ingrediënten', '4,50']] },
    { h: 'Frisdranken', items: [
      ['Coca cola, Coca cola zero', '', '3,35'], ['Fanta, Cassis, Sprite', '', '3,35'], ['Bitter lemon, Tonic', '', '3,35'],
      ['Fuze tea Sparkling & Green', '', '3,50'], ['Rivella, Ginger Ale', '', '3,35'], ['Appelsap', '', '3,00'],
      ["Verse jus d'orange", '', '4,25'], ['Chocolademelk, Fristi', '', '3,25'], ['Melk, karnemelk', '', '3,25'],
      ['Smoothie', 'Vraag naar onze smoothie', '7,75']] },
    { h: 'Soof Sparkling (ice tea)', note: '100% natuurlijk, 0% zooi', items: [
      ['Blauwe bes', 'Lavendel, zwarte bes & appel', '4,85'], ['Lemon', 'Munt & appel', '4,85']] },
    { h: 'Bieren', items: [
      ['Hertog Jan tap 0,25 l', '', '3,25'], ['Seizoenstap', '', '5,00'], ['Radler 2.0', '', '4,25'],
      ['Leffe Blond / Bruin', '', '4,95'], ['Tripel Karmeliet', '', '6,00'], ['Liefmans', '', '4,50']] },
    { h: '0,0%', items: [
      ['Radler', '', '4,00'], ['Witte, rode, rosé & zoete wijn', '', '4,75'], ['Leffe Blond 0,0', '', '4,75'],
      ['Hertog Jan', '', '3,25'], ['Aperol', '', '7,50']] },
    { h: 'Cocktails', items: [
      ['Aperol Spritz', '', '8,95'], ['Limoncello Spritz', '', '8,95'], ['Pink Gin Tonic', '', '8,95']] },
    { h: 'Wijnen', items: [
      ['Finca San Carlos Malbec Organic (rood)', 'Volfruitig, zwarte bessen, zacht kruidig, soepele tannines, biologisch', '4,95'],
      ['Diletto Pinot Grigio (wit droog)', 'Fris, licht fruitig, citrus, droog, appel', '4,95'],
      ["Ca'vescovado Pinot Grigio Blush (rosé)", 'Elegant, aardbei, friszuur, licht, zomers', '4,95'],
      ['Mola Rosato (rosé)', 'Fruitig, framboos, soepel, fris, licht kruidig', '4,95'],
      ['Klet Brda Chardonnay (wit droog)', 'Vol, tropisch fruit, zacht, rond, licht hout', '4,95'],
      ['Quercus Sparkling 0,2 l', 'Mousserend, fris, appel, feestelijk', '6,95'],
      ['Kaisershoppen (wit zoet)', 'Zoet, honingachtig, rijp fruit, zacht, toegankelijk', '4,95']] }
  ]}
];

(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var money = function (p) { return p ? (p.charAt(0) === '+' ? '+ € ' + p.slice(2) : '€ ' + p) : ''; };

  // Menu tabs
  var tt = document.getElementById('menu-tabs'), tp = document.getElementById('menu-panels');
  MENU.forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'mt' + i; b.setAttribute('aria-controls', 'mp' + i);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); b.tabIndex = i ? -1 : 0; b.textContent = s.t;
    tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'menu-panel'; p.id = 'mp' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'mt' + i); p.hidden = i !== 0;
    p.innerHTML = s.groups.map(function (g) {
      if (g.box) {
        return '<div class="m-group m-box"><div class="m-box-head"><h3>' + esc(g.h) + '</h3><span class="pr">' + money(g.price) + '</span></div>' +
          (g.note ? '<p class="m-note">' + esc(g.note) + '</p>' : '') +
          '<ul class="m-box-list">' + g.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }
      return '<div class="m-group"><h3>' + esc(g.h) + '</h3>' + (g.note ? '<p class="m-note">' + esc(g.note) + '</p>' : '') +
        '<ul class="m-list">' + g.items.map(function (it) {
          return '<li' + (it[3] ? ' class="hl"' : '') + '><span class="nm">' + esc(it[0]) + (it[3] ? ' <em class="topper">topper</em>' : '') +
            (it[1] ? '<span class="ds">' + esc(it[1]) + '</span>' : '') + '</span><span class="pr">' + money(it[2]) + '</span></li>';
        }).join('') + '</ul></div>';
    }).join('');
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

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // Vandaag open
  var HOURS = { 0: null, 1: ['9.30', '17.00'], 2: ['9.30', '20.00'], 3: ['9.30', '17.00'], 4: ['9.30', '17.00'], 5: ['9.30', '17.00'], 6: ['9.30', '17.00'] };
  var d = new Date().getDay(), h = HOURS[d], el = document.getElementById('today');
  if (el) el.textContent = h ? 'Vandaag open van ' + h[0] + ' tot ' + h[1] + ' uur' + (d === 2 ? ', met diner' : '') : 'Vandaag gesloten (wel open voor besloten feestjes)';
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('is-today');
})();
