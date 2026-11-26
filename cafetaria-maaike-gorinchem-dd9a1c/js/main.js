(function () {
  // ---- mobile menu
  var toggle = document.querySelector('.top__toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Menu openen' : 'Menu sluiten');
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
      document.body.classList.remove('nav-open');
    }
  });

  // ---- header shadow after scrolling
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('top--scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ---- open / closed (Tue-Fri 11-20, Sat 12-20, Sun+Mon closed)
  var hours = { 2: [11, 20], 3: [11, 20], 4: [11, 20], 5: [11, 20], 6: [12, 20] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var status = document.getElementById('status');
  var t = hours[d];
  if (t && h >= t[0] && h < t[1]) {
    status.textContent = 'Nu open, tot 20.00 uur';
    status.classList.add('is-open');
  } else {
    var nd = d, guard = 0, label;
    if (t && h < t[0]) { label = 'vandaag om ' + t[0] + '.00 uur'; }
    else {
      do { nd = (nd + 1) % 7; guard++; } while (!hours[nd] && guard < 8);
      var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
      label = (guard === 1 ? 'morgen' : names[nd]) + ' om ' + hours[nd][0] + '.00 uur';
    }
    status.textContent = 'Nu gesloten, weer open ' + label;
  }
  status.hidden = false;
  document.querySelectorAll('.hours tr').forEach(function (tr) {
    if (tr.dataset.d.split(',').indexOf(String(d)) > -1) tr.classList.add('is-today');
  });

  // ---- menu data (from their price list, november 2026)
  var M = [
    { id: 'frites', tab: 'Frites & sauzen', groups: [
      { title: 'Frites', items: [['Frites klein','2,95'],['Frites middel','3,75'],['Frites groot','4,50'],['Twister fries','3,95'],['Truffel Parmezaan','5,50'],['2 personen frites','5,45'],['3 personen frites','7,95'],['5 personen frites','12,95']] },
      { title: 'Sauzen', items: [['Mayonaise / fritessaus','0,85'],['Vlaamse mayonaise','1,00'],['Truffelmayonaise','1,00'],['Ketchup','0,85'],['Pindasaus','1,00'],['Speciaal','1,00'],['Oorlog','1,00'],['Curry','0,85'],['Joppiesaus','1,00'],['Knoflooksaus','0,85'],['Picalilly','1,00'],['Appelmoes','1,25']] }
    ]},
    { id: 'snacks', tab: 'Snacks', groups: [
      { title: 'Snacks', cols: true, items: [['Rundvlees kroket','2,60'],['Vegetarische kroket','2,80'],['Kwekkeboom kroket','2,95'],['Kalfskroket','2,95'],['Goulashkroket','2,95'],['Satékroket','2,95'],['Kaaskroket','2,75'],['Frikandel','2,50'],['Vegetarische frikandel','2,95'],['Kipfrikandel','2,50'],['Frikandel speciaal','3,30'],['Viandel','3,00'],['XXL frikandel','4,45'],['Kaassoufflé','2,75'],['Ham/kaassoufflé','2,85'],['Souflesse','2,95'],['Souflesse pikant','2,95'],['Loempia kip/ham','4,75'],['Loempidel','3,00'],['Halve kip','8,00'],['Bamischijf ketjap','2,95'],['Bamischijf pittig','2,95'],['Nasischijf pittig','2,95'],['Kipschnitzel','6,50'],['Kipcorn','3,00'],['Kipsaté','6,95'],['Lihanboutje','2,95'],['Shoarmarol','3,95'],['Smulrol','3,95'],['Satérol','3,50'],['Mexicano','3,35'],['Boerenbrok','3,20'],['Pikanto','3,25'],['Belcrunch','3,25'],['Gehaktbal jus','3,95'],['Gehaktbal frituur','3,50'],['Bereklauw','3,75'],['Bereklauw pinda','4,65'],['Sitostick','3,95'],['Crizly','3,95'],['Braadworst','3,75'],['Knakworst','3,25'],['Vlampijp','3,95'],['Grillbikkel','3,95','Grillworst gevuld met blokjes kaas, speciaal voor de frituur'],['Loempia kip/ham speciaal','7,25','Gebakken ei, ham, atjar, pindasaus en sambal'],['Damstenen','5,70','2 frikandellen in stukjes, pindasaus en mayonaise'],['Belcanto Crunch','3,75','Gepaneerde Mexicano']] }
    ]},
    { id: 'supertjes', tab: 'Supertjes', groups: [
      { title: 'Supertjes', intro: 'Grote frites met…', cols: true, items: [['Catamaran','8,50','2 frikandellen, mayonaise, curry en uitjes'],['Back in Town','8,95','Kroket, frikandel en mayonaise'],['Duo','9,95','Viandel, kipcorn, mayonaise en pindasaus'],['Kipschnitzel','10,95','Kipschnitzel, 2 gefrituurde uienringen, curry en mayonaise'],['Bali','11,50','Kipsaté, atjar, komkommer, pindasaus en gebakken uitjes'],['Shoarma','10,95','Kipshoarma, knoflooksaus en sambal'],['Pikante kip','10,95','Pikante kippendij, gebakken ui, coleslaw, paprika en chilisaus'],['Pulled pork','10,95','Pulled pork, bacon, gebakken ui, coleslaw en bbq-saus'],['Döner','10,50','Kipdöner, knoflooksaus en sambal'],['Stoofvlees','10,95','Runderstoofvlees volgens Vlaams recept en mayonaise of Vlaamse mayonaise'],['Kapsalon','11,50','Kipdöner, verse salade, gesmolten kaas, knoflooksaus en sambal'],['Mexicano','8,95','Een Mexicano, mayonaise, pindasaus en gebakken uitjes'],['Crizly','8,95','Crizly en pindasaus'],['Chicken strips','9,50','4 chicken strips, joppiesaus of mayonaise'],['Kipkerrie','10,95','Kipkerrie, gekookt eitje en sambal']] }
    ]},
    { id: 'burgers', tab: 'Burgers', groups: [
      { title: 'Rundvleesburgers', items: [['Hamburger speciaal','4,50','Beefburger met mayonaise, curry en uitjes'],['Cheeseburger','5,25','Beefburger met cheddar, augurk, mosterdsaus, ketchup en uitjes'],['Baconburger','5,75','Beefburger met sla, tomaat, augurk, uitjes, ketchup, mosterdsaus, cheddar en bacon'],['Burger Deluxe','6,50','Beefburger met sla, tomaat, augurk, burgersaus, ketchup, uitjes, gebakken ei en cheddar'],['Truffel Burger','6,50','Beefburger met sla, rucola, gebakken ui, gebakken champignons en truffelmayonaise'],['BBQ-Bacon Cheeseburger','6,75','Beefburger met sla, tomaat, mayonaise, 2 gefrituurde uienringen, bacon, cheddar en bbq-saus'],['Bacon-egg Burger','6,50','Beefburger met sla, gebakken ei, bacon, gebakken ui en burgersaus'],['Chili-cheese Burger','5,25','Beefburger met jalapeño pepers, gebakken ui, cheddar en bbq-saus']] },
      { title: 'Kipburgers', items: [['Hot-n-Spicy Burger','5,45','Kipfiletburger met sriracha mayonaise, chilisaus, sla, tomaat en cheddar'],['Rodeo Chicken Burger','6,75','Kipfiletburger met coleslaw, augurk, sriracha mayo, bbq-saus, 2 gefrituurde uienringen, bacon en cheddar'],['Kipburger','5,45','Kipfiletburger met sla, tomaat, augurk, komkommer en burgersaus'],['Chicken C-B-O','5,95','Kipfiletburger met sla, mayonaise, gebakken ui, cheddar en bacon'],['Chicken Saté Burger','4,95','Krokante kipburger met sla, komkommer, pindasaus en gebakken uitjes'],['Chili Chicken Burger','4,95','Krokante kipburger met sla, komkommer en chilisaus'],['Chicken Cheese Burger','5,25','Krokante kipburger met sla, augurk, mayonaise, ketchup, uitjes en cheddar']] },
      { title: 'Vegaburgers', items: [['Vega Chili Chicken','5,75','Vega krokante kipburger met sla, komkommer en chilisaus'],['Vega Chicken Cheese','5,95','Vega krokante kipburger met sla, augurk, mayonaise, ketchup, uitjes en cheddar'],['Vega Kipburger','5,95','Vega krokante kipburger met sla, tomaat, augurk, komkommer en burgersaus']] }
    ]},
    { id: 'broodjes', tab: 'Broodjes', groups: [
      { title: 'Broodjes', items: [['Kipkerrie','5,50'],['Kipketjap','5,50'],['Pikante kip','5,95'],['Pulled pork','5,95'],['Shoarma','5,95'],['Döner','5,95'],['Braadworst','4,95'],['Bal jus','4,95'],['Chicken strips','4,95'],['Saté','5,95','Kipsaté, atjar, komkommer, pindasaus en gefrituurde uitjes']] }
    ]},
    { id: 'fingerfood', tab: 'Fingerfood', groups: [
      { title: 'Fingerfood', cols: true, items: [['5 chili cheese nuggets','3,25'],['8 minisnacks','4,75'],["2 Vietnamese loempia's",'2,95'],['6 mini loempiaatjes','2,95'],['3 hotwings','3,75'],['5 hotwings','4,75'],['7 hotwings','5,75'],['5 mini kaassoufflés','3,50'],['6 uienringen','2,75'],['5 bitterballen','3,95'],['6 kipnuggets','3,75'],['9 kipnuggets','4,95'],['20 kipnuggets','9,95'],['3 chicken strips','4,25'],['6 kipfingers','3,95'],['6 vlammetjes','4,95'],['6 kaasstengels','4,95']] },
      { title: 'Schaal minisnacks', intro: 'Voor feesten, partijen en vrijdagmiddagborrels, inclusief 5 sausjes.', items: [['50 stuks','32,00'],['75 stuks','48,00'],['100 stuks','64,00']] }
    ]},
    { id: 'speciaal', tab: 'Halal, glutenvrij & vega', groups: [
      { title: 'Halal', intro: 'Al onze halal producten zijn gecertificeerd met het logo. Deze snacks kunnen wij in een aparte pan bakken. Geef dit aan als je bestelt.', cols: true, items: [['3 hotwings','3,75'],['5 hotwings','4,75'],['7 hotwings','5,75'],['6 kipnuggets','3,75'],['9 kipnuggets','4,95'],['20 kipnuggets','9,95'],['3 chicken strips','4,25'],['Kipcorn','3,00'],['Hot-n-Spicy Burger','5,45'],['Chili Chicken Burger','4,95'],['Chicken Saté Burger','4,95'],['Chicken Cheese Burger','5,25'],['Kipburger','5,45'],['Kipfrikandel','2,60'],['Kipschnitzel','6,75'],['Supertje Kipschnitzel','10,95'],['Supertje Catamaran','8,50'],['Bucket Maaike','12,95']] },
      { title: 'Glutenvrij', items: [['Frikandel','3,00'],['Kroket','3,75'],['Kaassoufflé','3,95'],['Bamischijf','3,95'],['Kipnuggets 5 stuks','4,95'],['Mayonaise','0,85'],['Ketchup','0,85'],['Pindasaus','1,00'],['Speciaal','1,00'],['Oorlog','1,00'],['Curry','0,85']] },
      { title: 'Vegetarisch', items: [['Vegetarische kroket','2,80'],['Kaaskroket','2,75'],['Vegetarische frikandel','2,95'],['Kaassoufflé','2,75'],['Souflesse','2,95'],['Souflesse pikant','2,95'],['Bamischijf pittig','2,95'],['Nasischijf pittig','2,95'],['5 chili cheese nuggets','3,25'],["2 Vietnamese loempia's",'2,95'],['6 mini loempiaatjes','2,95'],['5 mini kaassoufflés','3,50'],['6 kaastengels','4,95'],['6 uienringen','2,75'],['Chili chicken burger','5,75'],['Chicken cheese burger','6,95'],['Chicken saté burger','5,75'],['Kipburger','5,35']] }
    ]},
    { id: 'drinken', tab: 'Drinken', groups: [
      { title: 'Frisdrank', cols: true, items: [['Coca-Cola','2,75'],['Coca-Cola Zero','2,75'],['Coca-Cola Cherry','2,75'],['Coca-Cola Creamy Vanilla','2,75'],['Fanta Orange','2,75'],['Fanta Orange Zero','2,75'],['Fanta Exotic Zero','2,75'],['Fanta Cassis','2,75'],['Sprite Zero','2,75'],['Slammers Energy','1,75'],['Red Bull','3,50'],['Red Bull Zero','3,50'],['Capri-Sun','2,00'],['Fernandes Cherry','3,00'],['Fernandes Pineapple','3,00'],['Fernandes Green','3,00'],['Spa blauw','3,00'],['Spa rood','3,00'],['Lipton Ice-Tea Sparkling','3,00'],['Lipton Ice-Tea Peach','3,00'],['Lipton Ice-Tea Green','3,00'],['Appelsap','3,95'],['Chocomel','3,60'],['Fristi','3,60'],['AA Drink','3,00'],['Heineken 33cl','3,00']] },
      { title: 'Koffie & thee', items: [['Koffie','2,75'],['Thee','2,75'],['Cappuccino','3,25'],['Latte macchiato','3,25'],['Espresso','2,75'],['Americano','3,25']] }
    ]},
    { id: 'ijs', tab: 'Softijs & shakes', groups: [
      { title: 'Softijs', items: [['Luxe sundae','3,95','Caramello of stroopwafel'],['Sundae','3,50','Aardbei, caramel, chocolade of cookie dough'],['Mini sundae','2,50','Bubblegum spekjes, Smurf of aardbeien disco']] },
      { title: 'Milkshakes', intro: 'Vanille, aardbei, banaan of toffee caramel.', items: [['Small','3,10'],['Medium','3,60'],['Large','4,10']] }
    ]}
  ];

  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  M.forEach(function (sec, i) {
    var b = document.createElement('button');
    b.className = 'tab'; b.type = 'button'; b.setAttribute('role', 'tab');
    b.id = 'tab-' + sec.id; b.setAttribute('aria-controls', 'panel-' + sec.id);
    b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i === 0 ? 0 : -1;
    b.textContent = sec.tab;
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + sec.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
    p.innerHTML = sec.groups.map(function (g) {
      return '<div class="mgroup' + (g.cols ? ' mgroup--cols' : '') + '"><h3>' + esc(g.title) + '</h3>' +
        (g.intro ? '<p class="mgroup__intro">' + esc(g.intro) + '</p>' : '') +
        '<ul class="items">' + g.items.map(function (it) {
          return '<li><span class="items__name">' + esc(it[0]) + '</span><span class="items__dots" aria-hidden="true"></span><span class="items__price">' + it[1] + '</span>' +
            (it[2] ? '<span class="items__desc">' + esc(it[2]) + '</span>' : '') + '</li>';
        }).join('') + '</ul></div>';
    }).join('');
    panels.appendChild(p);
  });
  function select(btn) {
    tabs.querySelectorAll('.tab').forEach(function (t) {
      var on = t === btn;
      t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    select(b);
    b.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  });
  tabs.addEventListener('keydown', function (e) {
    var list = Array.prototype.slice.call(tabs.querySelectorAll('.tab'));
    var i = list.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      var n = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
      n.focus(); select(n);
    }
  });
})();
