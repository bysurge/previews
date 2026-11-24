// Menukaart Efeze Zutphen (letterlijk van efezezutphen.nl/menu, 23-11-2026)
const MENU = [
  { id: 'lunch', label: 'Lunch', groups: [
    { t: "Broodjes en pizza's", d: [
      ['Broodje tonno', 'Tonijn, komkommer, tomaat, rode ui, olijven, kappertjes en knoflooksaus', '14,25'],
      ['Broodje Mario gezond', 'Jonge kaas, ham, tomaat, komkommer, ei en ijsbergsla', '13,25'],
      ['Broodje zalm', 'Gerookte zalm, honing-mosterddressing, tomaat, sla, kappertjes en rode ui', '15,25'],
      ['Broodje brie', 'Brie, walnoten, sla en honing', '13,25'],
      ['Denizli tavuğu', 'Broodje met kipreepjes, sla, tomaat, ui en knoflooksaus', '14,25'],
      ['Broodje carpaccio', 'Broodje carpaccio met tomaat, rucola, pijnboompitten, Parmezaanse kaas', '16,00'],
      ['Köfte ekmek', 'Broodje gevuld met gekruid schaapsgehakt, salade, tomaat en knoflooksaus', '14,25'],
      ['Bonfile parçası', 'Broodje gevuld met pittig gebakken ossenhaaspuntjes, tomaat, ui en knoflooksaus', '17,25'],
      ['Lunch pizza', 'Een iets kleinere pizza dan normaal met tomatensaus, kaas en 2 ingrediënten naar keuze', '13,25'],
    ]},
    { t: 'Warme lunchgerechten', d: [
      ['Sigara böreği', 'Rolletjes van bladerdeeg gevuld met verse spinazie, feta en peterselie', '8,90'],
      ['Kalamar tava', 'Gepaneerde inktvisringen met knoflooksaus', '13,25'],
      ['Mantar kaymaklı', 'Pittig gebakken champignons met knoflook, ui, paprika en roomsaus', '13,50'],
      ['Rundvleeskroketten', '2 kroketten met brood, boter, mosterd en garnituur', '12,75'],
      ['Vegetarische kroketten', '2 groentekroketten met brood, boter, mosterd en garnituur', '12,95'],
      ['Mezeler', 'Verschillende warme en koude Turkse en Italiaanse hapjes voor twee personen', '35,95'],
      ['Minik ela (voor de bambino’s)', 'Keuze uit een kipspies of kipnuggets met frietjes en mayonaise', '13,25'],
    ]},
    { t: 'Soepen', d: [
      ['Tomatensoep', 'Vers gemaakte zoete Italiaanse tomatensoep met room en croutons', '8,90'],
      ['Mercimek çorbası', 'Verse linzensoep met Turkse kruiden', '9,50'],
    ]},
    { t: 'Salades', d: [
      ['Caesar salade', 'Gemengde salade met gegrilde kip, ansjovis, olijven, paprika, Parmezaanse kaas, croutons en een huisgemaakte saus', '15,50'],
      ['Çoban salatası', 'Herdersalade met tomaten, komkommer, paprika, fetakaas en ui', '14,25'],
      ['Carpaccio', 'Zeer dun gesneden rauwe ossenhaas met pijnboompitten, Parmezaanse kaas en zwarte truffelmayonaise', '16,25'],
      ['Tzatziki', 'Turkse yoghurt met komkommer en knoflook', '10,80'],
      ['Surf & turf salatası', 'Gegrilde garnalen en ossenhaas op een bedje van gemengde sla met cherrytomaten, rode ui, olijven, Parmezaanse kaas en een huisgemaakte dressing', '19,95'],
      ['Burrata salatası', 'Gemengde salade met burrata, tomaat, rode ui, pesto en rucola', '16,25'],
    ]},
    { t: 'Omeletten', d: [
      ['Vegetarische omelet', 'Omelet rijkelijk gevuld met verse groenten en jonge kaas', '14,50'],
      ['Italiaanse omelet', 'Omelet met champignons, ham, salami, ui en jonge kaas', '14,50'],
      ['Turkse omelet', 'Omelet met pittige Turkse worst, champignons, ui en jonge kaas', '14,50'],
      ['Hollandse uitsmijter', 'Ham, kaas en 3 eitjes', '13,50'],
    ]},
    { t: 'Tosti’s', d: [
      ['Tosti kaas', '', '8,00'],
      ['Tosti ham', '', '8,00'],
      ['Tosti ham-kaas', '', '8,25'],
      ['Tosti Hawaï', 'Ham, kaas en ananas', '8,50'],
      ['Tosti mozzarella', 'Mozzarella, tomaat en pesto', '8,50'],
      ['Tosti Turkse worst en kaas', '', '8,50'],
    ]},
    { t: 'Gebak', d: [
      ['Appelgebak met slagroom', '', '6,25'],
      ['Kersenvlaai met slagroom', '', '6,50'],
    ]},
    { t: 'Voor erbij', d: [
      ['Mandje stokbrood', '', '7,50'],
      ['Portie gemengde kalamata-olijven met stokbrood', '', '7,50'],
      ['Bruschetta traditioneel', 'Geroosterd brood belegd met tomaat, knoflook, rode ui, rucola en basilicum', '9,50'],
      ['Bruschetta salmone', 'Geroosterd brood belegd met zalm, roomkaas, cherrytomaten en rucola', '10,50'],
      ['Bitterballen (Kwekkeboom, 6 stuks)', '', '6,95'],
      ['Bitterballen (Kwekkeboom, 12 stuks)', '', '12,95'],
      ['Bittergarnituur (10 stuks)', '', '8,95'],
      ['Kaasrolletjes (8 stuks)', '', '8,95'],
      ['Tempura garnalen (8 stuks)', '', '8,95'],
      ['Kipnuggets (10 stuks)', '', '8,50'],
    ]},
  ]},
  { id: 'diner', label: 'Voorgerechten', groups: [
    { t: 'Koude voorgerechten', d: [
      ['Mandje stokbrood', 'Keuze uit olijventapenade, kruidenboter en knoflooksaus', '7,50'],
      ['Bruschetta traditioneel', 'Geroosterd brood belegd met tomaat, knoflook, rode ui, rucola en basilicum', '9,50'],
      ['Bruschetta salmone', 'Geroosterd brood belegd met zalm, roomkaas, cherrytomaten en rucola', '10,50'],
      ['Portie gemengde kalamata-olijven', 'Geserveerd met stokbrood', '7,50'],
      ['Carpaccio', 'Zeer dun gesneden rauwe ossenhaas met groene pesto, pijnboompitten, kappertjes en Grana Padano', '16,25'],
      ['Vitello tonnato', 'Dungesneden kalfsvlees met tonijnsaus, rucola en kappertjes', '17,50'],
      ['Tzatziki', 'Turkse yoghurt met komkommer en knoflook, met stokbrood', '10,80'],
      ['Surf en turf salatası', 'Gegrilde garnalen en ossenhaas op een bedje van gemengde sla met cherrytomaten, rode ui, olijven, Parmezaanse kaas en een huisgemaakte dressing', '19,95'],
      ['Burrata salatası', 'Gemengde salade met burrata, tomaat, rode ui, pesto en rucola', '16,25'],
      ['Çoban salatası', 'Herdersalade met tomaten, komkommer, paprika, fetakaas, ui en olijven', '14,25'],
      ['Caesar salata', 'Gemengde salade met gegrilde kip, olijven, paprika, Parmezaanse kaas, croutons en een huisgemaakte saus', '15,50'],
    ]},
    { t: 'Warme voorgerechten', d: [
      ['Karides güveç', 'Grote en kleine garnalen uit de oven, met verse groente, kaas en knoflook in een wittewijn-tomatensaus', '16,95'],
      ['Mantar kaymaklı', 'Pittig gebakken champignons met knoflook, ui, paprika en roomsaus', '13,50'],
      ['Sigara böreği', 'Rolletjes van bladerdeeg gevuld met spinazie, fetakaas en peterselie', '8,90'],
      ['Kalamar tava', 'Gepaneerde inktvisringen met knoflooksaus', '13,25'],
      ['Domates çorbası', 'Vers gemaakte zoete Italiaanse tomatensoep met room en croutons', '8,90'],
      ['Mercimek çorbası', 'Linzensoep met Turkse kruiden', '9,50'],
      ['Mezeler', 'Verschillende warme en koude Turkse & Italiaanse hapjes voor twee personen', '35,95'],
    ]},
  ]},
  { id: 'pizza', label: "Pizza's", groups: [
    { t: "Pizza's", d: [
      ['Margherita', 'Tomatensaus, extra kaas en oregano', '15,50'],
      ['Salami', 'Tomatensaus, kaas, salami en oregano', '16,80'],
      ['Funghi', 'Tomatensaus, kaas, champignons en oregano', '16,80'],
      ['Roman', 'Tomatensaus, verse tomaten, mozzarella, rucola en oregano', '18,00'],
      ['Hawaï', 'Tomatensaus, kaas, ham, ananas en oregano', '18,25'],
      ['Mediterraneo', 'Tomatensaus, kaas, gerookte zalm, spinazie, ui en oregano', '19,95'],
      ['Gorgonzola', 'Tomatensaus, kaas, Italiaanse schimmelkaas en oregano', '19,90'],
      ['Salami pikant', 'Tomatensaus, kaas, salami, paprika, ui en oregano', '19,80'],
      ['Spinaci', 'Tomatensaus, kaas, spinazie, spek, ei en oregano', '19,90'],
      ['Marinara', 'Tomatensaus, kaas, tonijn, mosselen, grote en kleine garnalen en oregano', '19,85'],
      ['Vegetaria', 'Tomatensaus, kaas, artisjokken, paprika, ui en oregano', '19,95'],
      ['Capricciosa', 'Tomatensaus, kaas, champignons, paprika, ui en oregano', '18,50'],
      ['Salmone', 'Tomatensaus, kaas, gerookte zalm, garnalen, ui en oregano', '19,85'],
      ['Borromea', 'Tomatensaus, kaas, ham, spek, ei en oregano', '19,90'],
      ['Quattro stagioni', 'Tomatensaus, kaas, salami, ham, champignons, paprika en oregano', '19,80'],
      ['Inverno', 'Tomatensaus, kaas, spek, ham, salami, ui en oregano', '19,80'],
      ['Quattro formaggi', 'Tomatensaus, vier verschillende kaassoorten en oregano', '19,95'],
      ['Siciliana', 'Tomatensaus, kaas, olijven, ansjovis, kappertjes en oregano', '19,90'],
      ['Di pollo', 'Tomatensaus, kaas, reepjes kipfilet, ui, paprika en oregano', '19,90'],
      ['Al tonno', 'Tomatensaus, kaas, tonijn, ui en oregano', '19,80'],
      ['Calzone', 'Gevulde pizza met tomatensaus, kaas, ui, ham, salami, champignons en oregano', '19,85'],
      ['Pizza döner', 'Tomatensaus, kaas, oregano en keuze uit kip- of kalfsdöner', '19,95'],
      ['Cello', 'Tomatensaus, kaas, verse mozzarella, parmaham, zongedroogde tomaten', '19,80'],
      ['Ark van Noach', 'Een bootvormige pizza met tomatensaus, kaas, gekruid gehakt, ei en oregano', '19,90'],
      ['Efeze pizza', 'Gevulde pizza met tomatensaus, kaas, Turkse worst, kip, paprika, artisjokken, champignons en oregano', '19,95'],
    ]},
  ]},
  { id: 'pasta', label: 'Pasta & vega', groups: [
    { t: 'Pasta’s en vegetarische gerechten', d: [
      ['Türlü (*)', 'Verschillende soorten groenten in tomatenroomsaus, geserveerd met tarwerijst en aardappels', '21,95'],
      ['İmam bayıldı (*) (flauwgevallen imam)', 'Aubergine uit de oven gevuld met groente, knoflook, olijfolie, kaas en yoghurt', '23,25'],
      ['Efeze vejitarya (*)', 'Pasta uit de oven met verschillende soorten groenten en gorgonzola', '22,50'],
      ['Salmone pesto', 'Pasta met gerookte zalm, zongedroogde tomaten en rode pesto in tomatenroomsaus', '23,90'],
      ['Pasta ai gamberi', 'Pasta met kleine en grote garnalen in roomsaus', '22,90'],
      ['Pasta aglio e olio', 'Pasta met knoflook, Spaanse peper en olijfolie', '16,50'],
      ['Bolognese', 'Pasta met bolognesesaus en Parmezaanse kaas', '19,50'],
      ['Siciliano pasta (*)', 'Pasta met cherrytomaatjes, olijven, fetakaas, rucola en pijnboompitten', '19,50'],
      ['Alla Marco pollo', 'Pasta met gegrilde kipfilet, champignons en paprika in tomatenroomsaus', '19,50'],
      ['Lasagna', 'Dunne laagjes deeg afgewisseld met kaas, ham en rundergehakt in tomatenroomsaus (geserveerd met stokbrood, 20 min in de oven)', '19,75'],
      ['Lasagna vegetariana (*)', 'Dunne laagjes deeg afgewisseld met verse groenten in tomatenroomsaus (geserveerd met stokbrood, 20 min in de oven)', '19,50'],
      ['Tortellini (*)', 'Kleine stukjes deeg gevuld met kaas, verse spinazie, gorgonzolaroomsaus en Parmezaanse kaas', '21,50'],
      ['Mantı', 'Deegbolletjes gevuld met gehakt, overgoten met tomatensaus, roomboter en knoflookyoghurt', '20,50'],
    ]},
  ]},
  { id: 'vlees', label: 'Vlees', groups: [
    { t: 'Vleesgerechten', d: [
      ['Efeze burger', 'Rundergehakt burger met gekarameliseerde ui, sla, plakjes runderrookvlees, cheddar en huisgemaakte saus (geserveerd met friet)', '21,90'],
      ['Bonfile tava 250 gr', 'Pittig gebakken ossenhaas met champignonroomsaus', '34,50'],
      ['Tavuk şiş (twee spiesen)', 'Gegrilde kipfilet op de lavasteengrill met champignonroomsaus (apart)', '26,90'],
      ['Pirzola', 'Gegrilde lamskoteletten op een bedje van champignons, spinazie en tomaten, met een vleugje witte wijn', '32,90'],
      ['Şiş kebab (twee spiesen)', 'Kalfsvlees gegrild op de lavasteengrill met champignonroomsaus', '30,50'],
      ['İskender kebab', 'Stukjes dun gesneden ossenhaas op een bedje van geroosterd brood, overgoten met yoghurtsaus', '33,50'],
      ['Efeze közlü kebab', 'Excellente kwaliteit lamshaas, pittig gebakken in knoflook met roomsaus en geroosterde amandelen', '35,00'],
      ['Yoğurtlu kebab', 'Pikant gekruid schapengehakt met champignons, roomsaus en Turkse yoghurt', '28,95'],
      ['Çerkez tavuğu', 'Pittig gebakken stukjes kipfilet met spinazie, uien, knoflook en cashewnoten', '28,95'],
      ['Adana şiş (twee spiesen)', 'Licht pittig gekruide lamskebab op een spies van de grill, geserveerd op durumbrood', '29,95'],
      ['Pollo al limone cremoso', 'Malse kipfilet in een romige citroensaus, afgewerkt met boter en verse kruiden', '28,95'],
      ['Karışık ızgara', 'Verschillende gegrilde vleessoorten: kalfsvlees, lamskotelet, kipfilet en köfte met saus', '35,95'],
      ['Romantica (voor 2 personen)', 'Een speciale vleesschotel voor twee personen, voor de echte vleesliefhebbers', '88,00'],
    ]},
  ]},
  { id: 'vis', label: 'Vis & kids', groups: [
    { t: 'Visgerechten', d: [
      ['Alabalık tava', 'Zalmforel gebakken met garnalen, kappertjes en amandelen', '30,25'],
      ['Karides tava', 'Grote gepelde scampi’s met verschillende soorten groenten, gebakken in witte wijn met tomatensaus en knoflook', '31,95'],
      ['Salmone balık', 'Gebakken zalmfilet met verse spinazie en roomsaus', '31,25'],
    ]},
    { t: 'Kindermenu’s', d: [
      ['Pizza bambino', 'Kleine pizza naar wens van de bambini (tot en met 12 jaar)', '13,25'],
      ['Bolognese bambino', 'Spaghetti met bolognesesaus en Parmezaanse kaas', '13,25'],
      ['Minik ela', 'Keuze uit een kipspies of kipnuggets met frietjes en mayonaise', '13,25'],
    ]},
  ]},
  { id: 'dessert', label: 'Nagerechten', groups: [
    { t: 'Nagerechten', d: [
      ['Baklava', 'Zoet Turks gebak met ijs en slagroom (warm of koud)', '8,95'],
      ['Yayla', 'Turkse yoghurt met een bolletje ijs, walnoten, honing en slagroom', '8,95'],
      ['IJs trio', 'Verschillende soorten ijs met vers fruit en slagroom', '8,90'],
      ['Tiramisu', 'Huisgemaakte tiramisu met een bolletje ijs en slagroom', '9,50'],
      ['Crème brûlée', 'Huisgemaakte crème brûlée met een bolletje vanille-ijs', '8,90'],
      ['Dame blanche', 'Drie bolletjes stracciatella-ijs met chocoladesaus en slagroom', '8,90'],
      ['Bambini', 'Bolletje ijs met slagroom (keuze uit aardbei, vanille of stracciatella)', '5,50'],
      ['Künefe', 'Turks dessert geserveerd met een bolletje ijs', '9,50'],
    ]},
  ]},
  { id: 'koffie', label: 'Koffie & thee', groups: [
    { t: 'Koffie & thee', d: [
      ['Koffie', '', '3,60'],
      ['Koffie met slagroom', '', '3,85'],
      ['Cappuccino', '', '3,90'],
      ['Latte macchiato', '', '4,40'],
      ['Espresso', '', '3,60'],
      ['Dubbele espresso', '', '4,90'],
      ['Thee (diverse smaken)', '', '3,50'],
      ['Verse muntthee met honing', '', '4,35'],
      ['Verse gemberthee met honing', '', '4,50'],
      ['Warme chocolademelk', '', '4,40'],
      ['Warme chocolademelk met slagroom', '', '4,65'],
      ['Turkse koffie', '', '4,75'],
    ]},
    { t: 'Speciale koffie', d: [
      ['Irish coffee', 'Koffie met Ierse whisky, slagroom en basterdsuiker', '9,90'],
      ['Italian coffee', 'Koffie met amaretto, slagroom en basterdsuiker', '9,50'],
      ['Spanish coffee', 'Koffie met Licor 43, slagroom en basterdsuiker', '10,50'],
      ['French coffee', 'Koffie met Grand Marnier, slagroom en basterdsuiker', '10,50'],
      ['Efeze koffie', 'Turkse koffie met mokkalikeur', '9,90'],
    ]},
  ]},
  { id: 'borrel', label: 'Borrel', groups: [
    { t: 'Borrel', d: [
      ['Mezeplank', 'Sigara böreği, inktvisringen, sucuk, olijven met feta, tapenade en cacık', '17,50'],
      ['Borrelplank', 'Bitterballen, kaasblokjes, parmaham, olijven met feta, nootjes en inktvisringen', '19,50'],
      ['Bruschetta traditioneel', 'Geroosterd brood belegd met tomaat, knoflook, rode ui, rucola en basilicum', '9,50'],
      ['Bruschetta salmone', 'Geroosterd brood belegd met zalm, roomkaas, cherrytomaten en rucola', '10,50'],
      ['Mandje stokbrood', 'Met één dip naar keuze: huisgemaakte olijventapenade, kruidenboter of knoflooksaus', '7,50'],
      ['Portie gemengde kalamata-olijven met stokbrood', '', '7,50'],
      ['Bitterballen (6 stuks)', '', '6,95'],
      ['Bitterballen (12 stuks)', '', '12,95'],
      ['Bittergarnituur (10 stuks)', '', '8,95'],
      ['Kaasrolletjes (8 stuks)', '', '8,95'],
      ['Tempura garnalen (8 stuks)', '', '8,95'],
      ['Kipnuggets (10 stuks)', '', '8,50'],
    ]},
  ]},
];

(function () {
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const tabs = document.getElementById('tabs');
  const panels = document.getElementById('panels');
  MENU.forEach((m, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.id = 'tab-' + m.id; b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'p-' + m.id); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i === 0 ? 0 : -1; b.textContent = m.label;
    tabs.appendChild(b);
    const p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + m.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    if (i) p.hidden = true;
    p.innerHTML = m.groups.map(g => `<div class="group"><h3>${esc(g.t)}</h3><ul class="dishes">${g.d.map(([n, d, pr]) =>
      `<li class="dish"><div class="dish-top"><span class="dish-name">${esc(n)}</span><span class="dish-price">€ ${pr}</span></div>${d ? `<div class="dish-desc">${esc(d)}</div>` : ''}</li>`).join('')}</ul></div>`).join('');
    panels.appendChild(p);
  });
  const all = [...tabs.querySelectorAll('[role=tab]')];
  function select(b, focus) {
    all.forEach(x => { const on = x === b; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    if (focus) b.focus();
    b.scrollIntoView({ block: 'nearest', inline: 'center' });
    const tabsTop = tabs.getBoundingClientRect().top;
    if (tabsTop < 60) window.scrollTo({ top: window.scrollY + panels.getBoundingClientRect().top - 140 });
  }
  all.forEach((b, i) => {
    b.addEventListener('click', () => select(b));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const n = all[(i + (e.key === 'ArrowRight' ? 1 : all.length - 1)) % all.length];
        select(n, true);
      }
    });
  });

  // mobiel menu
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', 'false');
  }));

  // hero foto's wisselen
  const imgs = [...document.querySelectorAll('.hero-arch img')];
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && imgs.length > 1) {
    let k = 0;
    setInterval(() => { imgs[k].classList.remove('on'); k = (k + 1) % imgs.length; imgs[k].classList.add('on'); }, 5500);
  }

  // vandaag markeren
  const d = new Date().getDay();
  const row = document.querySelector(`#hours tr[data-d="${d}"]`);
  if (row) row.classList.add('now');
  const today = document.getElementById('today');
  if (today && row) today.textContent = 'Keuken vandaag open: ' + row.querySelector('td').textContent;

  // voorbeeldformulier
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formMsg').hidden = false;
  });
})();
