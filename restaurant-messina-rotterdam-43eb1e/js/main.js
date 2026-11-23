// Messina preview. Kaart letterlijk overgenomen van restaurantmessina.nl (22-11-2026).
(function () {
  // [naam, omschrijving, prijs]
  const MENU = [
    { id: 'antipasti', img: 'img/stock-antipasti.webp', groups: [
      { t: 'Aperitivi vari', items: [
        ['Pane burro e olive', '', '7,50'], ['Bruschette', '', '9,50'], ['Focacce varie', '', 'v.a. 13,50']
      ] },
      { t: 'Insalate', nl: 'Salade', items: [
        ['Insalata mista', 'Gemengde salade', '8,50'],
        ['Insalata rucola e pecorino', 'Rucola met pecorino en cherrytomaten', '13,00'],
        ['Insalata caprese di bufala', 'Buffelmozzarella met tomaat en verse basilicum', '15,50']
      ] },
      { t: 'Antipasti freddi', nl: 'Koude voorgerechten', items: [
        ['Vitello tonnato', 'Dungesneden kalfsvlees met tonijnsaus en kappertjes', '15,50'],
        ['Carpaccio di salmone', 'Carpaccio van zalmfilet', '16,50'],
        ['Carpaccio di manzo tartufato', 'Dungesneden ossenhaas met truffelolie', '17,00'],
        ['Antipasto mediterraneo', 'Selectie van kleine Italiaanse gerechten', '19,50']
      ] },
      { t: 'Antipasti caldi', nl: 'Warme voorgerechten', items: [
        ['Parmigiana classica', 'Gegratineerde aubergine met mozzarella in Siciliaanse tomatensaus', '17,50'],
        ['Funghi saltati', 'Gebakken paddenstoelen en knoflook in witte wijn', '15,50'],
        ['Polpette al sugo', 'Italiaanse gehaktballetjes in gebonden Siciliaanse tomatensaus', '16,00'],
        ['Gamberoni al vino bianco e ciliegino', 'Grote gebakken garnalen met cherrytomaten in witte wijnsaus', '18,00']
      ] }
    ] },
    { id: 'paste', img: 'img/stock-pasta.webp', groups: [
      { t: 'Paste', nl: 'Pasta', items: [
        ['Spaghetti bolognese', 'Klassieke spaghetti bolognese', '14,50'],
        ['Spaghetti alla carbonara', 'Pancetta, Parmezaanse kaas en ei in romige saus', '14,50'],
        ['Pennette al tonno', 'Tonijn met ui en cherrytomaten', '14,50'],
        ['Pennette al salmone', 'Gerookte zalm in romige saus', '16,00'],
        ['Linguine con gamberi', 'Garnalen met cherrytomaten', '18,50'],
        ['Tagliatelle ai frutti di mare', 'Diverse zeevruchten van de chef', '20,00']
      ] },
      { t: 'Paste al forno', nl: 'Pasta uit de oven', items: [
        ['Cannelloni', 'Pastapijpjes gevuld met gekruid rundergehakt', '16,50'],
        ['Lasagna popeye', 'Lasagne met spinazie en mozzarella', '17,50'],
        ['Lasagna tradizionale', 'Lasagne bereid op klassieke wijze', '19,00'],
        ['Tortellini all\'emiliana', 'Ragoutsaus met mozzarella', '16,00']
      ] }
    ] },
    { id: 'pizze', img: 'img/stock-pizza.webp', note: 'Alle pizza\'s met tomatensaus, mozzarella en oregano, tenzij anders vermeld.', groups: [
      { t: 'Pizze', nl: 'Pizza\'s', wide: true, items: [
        ['Margherita', 'Tomatensaus, mozzarella en oregano', '14,00'],
        ['Funghi', 'Champignons', '14,50'], ['Napoletana', 'Ansjovis', '14,50'], ['Salami', '', '14,50'],
        ['Prosciutto', 'Ham', '14,50'], ['Leccese', 'Champignons, pikante salami', '15,50'],
        ['Trinacria', 'Olijven, ansjovis, kappertjes', '15,50'], ['Diavola', 'Ham, paprika, Spaanse peper', '15,50'],
        ['Gorgonzola', '', '15,50'], ['Melanzana', 'Aubergine, Parmezaanse kaas, verse basilicum', '16,00'],
        ['Salmone', 'Zalm', '16,00'], ['Quattro formaggi', 'Vier soorten Italiaanse kaas', '16,50'],
        ['Genovese', 'Pestosaus, mozzarella, cherrytomaat, Parmezaanse kaas, oregano, verse basilicum', '17,00'],
        ['Irresistibile', 'Dubbelgevouwen: spek, mozzarella, gorgonzola, champignons, venkelzaad', '17,00'],
        ['Etna', 'Dubbelgevouwen: mozzarella, pikante salami, ansjovis, ui, Spaanse peper, oregano', '17,00'],
        ['Calabrese', 'Tomaat, mozzarella, spek, rode ui, Spaanse peper, verse rucola', '17,00'],
        ['Quattro stagioni', 'Ham, salami, paprika, champignons', '17,50'],
        ['Capricciosa', 'Salami, olijven, champignons, kappertjes', '17,50'],
        ['Vegetale', 'Tomatensaus met diverse groenten en oregano', '17,50'],
        ['Tonno e cipolla', 'Tonijn, ui', '17,50'],
        ['Calzone', 'Dubbelgevouwen: tomaat, mozzarella, ham, salami, champignons, paprika, oregano', '17,50'],
        ['Marinara', 'Tomatensaus met diverse soorten vis, mozzarella en Italiaanse kruiden', '17,50'],
        ['Messina', 'Aubergine, spek, gorgonzola', '17,50'],
        ['Crudo e rucola', 'Parmaham, verse rucola', '17,50']
      ] }
    ] },
    { id: 'secondi', img: 'img/stock-gamberi.webp', groups: [
      { t: 'Pesce', nl: 'Visgerechten', sub: 'Met aardappelen en een garnituur van verse groente', items: [
        ['Trancia di spada', 'Zwaardvisfilet van de grill (griglia) of op traditionele Siciliaanse wijze (Siciliana)', '28,00'],
        ['Branzino al limone o vino bianco', 'Zeebaarsfilet in citroen- of wittewijnsaus', '28,00'],
        ['Gamberoni fantasia dello chef', 'Grote garnalen van de chef', '29,50'],
        ['Grigliata mista di pesce', 'Compositie van diverse soorten gegrilde vis', '33,50']
      ] },
      { t: 'Carni', nl: 'Vleesgerechten', sub: 'Met aardappelen en een garnituur van verse groente', items: [
        ['Scaloppine a scelta', 'Kalfsmedaillons in wittewijnsaus, marsalasaus of met porcini', '27,00'],
        ['Costolette d\'agnello alla griglia', 'Lamskoteletten van de grill', '31,00'],
        ['Filetto ai porcini', 'Ossenhaas met porcini', '31,00'],
        ['Grigliata di carne', 'Verschillende soorten vlees van de grill', '34,00']
      ] }
    ] },
    { id: 'dolci', img: 'img/stock-tiramisu.webp', groups: [
      { t: 'Gelati & dolci', nl: 'IJs en nagerechten', items: [
        ['Tartufo', 'Vanille- of chocoladetruffelijs', '9,00'],
        ['Tiramisu', 'Taartje van in espresso gedoopte lange vingers met Tia Maria en mascarpone', '10,00'],
        ['Sorbetto al limone', 'Sorbet van echt Italiaans citroenijs', '9,50'],
        ['Dama bianca', 'Vanille-ijs met slagroom en warme chocoladesaus', '9,50'],
        ['Mango mono', 'Yoghurt-mango-ijs', '9,50'],
        ['Zabaione', 'Luchtige warme crème van eigeel en marsala (2 personen)', '16,00'],
        ['Formaggio misto', 'Diverse Italiaanse kaassoorten', '17,50']
      ] },
      { t: 'Caffè', nl: 'Koffie', items: [
        ['Espresso', '', '3,00'], ['Caffè lungo', 'Gewone koffie', '3,50'], ['Cappuccino', '', '4,50'],
        ['Panna montata', 'Koffie met slagroom', '4,50'], ['Doppio espresso', '', '4,50'],
        ['Irish coffee', '', '10,00'], ['French coffee', 'Met Grand Marnier', '10,00'],
        ['Caffè Messina', 'Met Tia Maria', '10,00'], ['Caffè Italiano', 'Met amaretto', '11,00']
      ] }
    ] },
    { id: 'bevande', groups: [
      { t: 'Bevande', nl: 'Frisdranken', items: [
        ['Coca-Cola (zero)', '', '3,50'], ['7-Up', '', '3,50'], ['Sinas', '', '3,50'], ['Tonic', '', '3,50'],
        ['Cassis', '', '3,50'], ['Spa rood', '', '3,50'], ['Spa blauw', '', '3,50'], ['Bitter Lemon', '', '4,00'],
        ['Appelsap', '', '4,00'], ['Ice-Tea', '', '4,00'], ['Chocomel', '', '4,50'], ['Fristi', '', '4,50'],
        ['Crodino', '', '5,50'], ['Vers geperste jus d\'orange', '', '5,50'], ['San Pellegrino bronwater', '', '7,00']
      ] },
      { t: 'Aperitivi', items: [
        ['Port', 'Wit of rood', '6,00'], ['Martini', 'Wit of rood', '6,00'], ['Campari', '', '7,00'],
        ['Cynar', '', '7,00'], ['Prosecco', '', '7,00'], ['Aperol Spritz', '', '11,00']
      ] },
      { t: 'Vino della casa', nl: 'Huiswijn', items: [
        ['Glas huiswijn', 'Wit of rood, droog', '5,50'], ['Glas Lambrusco', 'Wit of rood, zoet', '5,50'],
        ['Karaf huiswijn ¼ liter', 'Droog', '8,50'], ['Karaf huiswijn ½ liter', 'Droog', '13,00'], ['Karaf huiswijn 1 liter', 'Droog', '24,00']
      ] },
      { t: 'Birra', nl: 'Bier', items: [
        ['Birra Moretti van de tap', 'Klein 3,50 · medium 5,50 · groot 9,50', ''],
        ['Birra Moretti Zero', '', '5,50'], ['Amstel Radler 0.0', '', '5,50'], ['Heineken', '', '5,50'],
        ['Kriek', '', '5,00'], ['Texels Skuumkoppe', '', '7,00'], ['Affligem Blond', '', '7,50']
      ] }
    ] }
  ];

  const panels = document.getElementById('panels');
  MENU.forEach((p, i) => {
    let h = '';
    if (p.img) h += `<div class="p-img"><img src="${p.img}" alt="" width="1000" height="666" loading="lazy"></div>`;
    h += '<div class="p-body">';
    if (p.note) h += `<p class="p-note">${p.note}</p>`;
    p.groups.forEach(g => {
      h += `<div class="grp${g.wide ? ' grp-wide' : ''}"><h3>${g.t}${g.nl ? `<span>${g.nl}</span>` : ''}</h3>`;
      if (g.sub) h += `<p class="grp-sub">${g.sub}</p>`;
      h += '<ul>';
      g.items.forEach(([n, d, pr]) => {
        h += `<li><div class="ln"><span class="nm">${n}</span><span class="pr">${pr}</span></div>${d ? `<p>${d}</p>` : ''}</li>`;
      });
      h += '</ul></div>';
    });
    h += '</div>';
    const el = document.createElement('div');
    el.className = 'panel' + (p.img ? '' : ' no-img');
    el.id = 'p-' + p.id; el.setAttribute('role', 'tabpanel'); el.setAttribute('aria-labelledby', 't-' + p.id); el.tabIndex = 0;
    if (i) el.hidden = true;
    el.innerHTML = h;
    panels.appendChild(el);
  });

  const tabs = [...document.querySelectorAll('[role=tab]')];
  const select = t => tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length]; select(n); n.focus();
    });
  });

  const btn = document.getElementById('menuBtn');
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); document.body.classList.toggle('nav-open', open);
  });
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open');
  }));

  document.getElementById('rvForm').addEventListener('submit', e => {
    e.preventDefault(); e.target.querySelector('.demo-msg').hidden = false;
  });
})();
