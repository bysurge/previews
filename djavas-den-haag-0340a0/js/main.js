// D'Javas preview: menukaart (tabs), mobiel menu, open/dicht-status, demo-formulieren.
const MENU = [
  { id: 'hapjes', tab: 'Hapjes', groups: [
    { h: 'Hapjes & voorgerechten', items: [
      ['Sate Ayam', '7,50', '3 satestokjes van kippendij'],
      ['Sate Kambing', '8,50', '3 satestokjes van lamsvlees'],
      ['Pangsit Goreng', '5,50', '5 krokante pakketjes gevuld met kip'],
      ['Bakwan Jagung', '5,50', '2 gefrituurde maiskoeken'],
      ['Frikandel Lombok', '5,50', '2 pikante aardappelkoeken'],
      ['Martabak Telor', '5,50', '2 deegpakketjes gevuld met ei en rundergehakt'],
      ['Loempia Semarang', '5,50', '2 loempia\'s met kip en groenten, gerold in knapperig deeg'],
      ['Pastei', '5,50', '2 gefrituurde deegjes gevuld met kip en groenten'],
      ['Risoles', '5,50', '2 gefrituurde deegjes gevuld met kipragout'],
      ['Lemper', '5,50', '2 kleefrijstrolletjes gevuld met kip'],
      ['Aardappelkroket', '5,50', '2 aardappelkroketten gevuld met rundergehakt'],
      ['Tempe Mendoan', '4,50', '2 knapperig gefrituurde tempe in een krokant laagje'],
      ['Otak-Otak', '5,50', '3 gegrilde visdeegjes in bananenblad'],
      ['Tahu Isi', '5,50', '2 gevulde tofu met groenten in een krokant laagje'],
    ]},
  ]},
  { id: 'soepen', tab: 'Soepen & streetfood', groups: [
    { h: 'Soepen & streetfood', items: [
      ['Soto Babat', '8,50', 'Gekruide soep met kokosmelk en kalfspens'],
      ['Bubur Ayam Komplit', '9,50', 'Warme rijstepap met bouillon, kroepoek, gebakken ui, stukjes kip, bosuitjes en selderij'],
      ['Soto Ayam', '7,50', 'Gekruide kippensoep met groenten en ei'],
      ['Soto Betawi', '8,50', 'Gekruide soep met kokosmelk en rundvlees'],
      ['Sop Buntut', '8,50', 'Heldere soep met groenten en ossenstaart'],
      ['Rawon', '8,50', 'Gekruide soep met rundvlees'],
      ['Gule Kambing', '8,50', 'Pittige soep van geitenvlees met kokoscurry'],
      ['Bakso', '7,50', 'Noedelsoep met Indonesische runderballetjes'],
      ['Bakso Malang', '8,50', 'Diverse kleine hapjes in runderbouillon'],
      ['Bakso Beranak', '9,50', 'Grote runderbal gevuld met kleine runderballetjes'],
      ['Mie Ayam Speciaal', '9,50', 'Noedels met als topping kip, groenten, pangsit en runderballetjes'],
      ['Batagor', '7,50', 'Krokant gefrituurd visdeeg en tofu met pindasaus'],
      ['Siomay', '8,50', 'Gestoomde groenten, tofu en ei gevuld met visdeeg, met pindasaus'],
      ['Pempek Kapal Selam', '8,50', 'Gefrituurd visdeeg met noedels, komkommer en pittige tamarindesaus'],
      ['Pempek Lenjer', '8,50', 'Omelet met visdeeg, geserveerd met noedels, komkommer en pittige tamarindesaus'],
      ['Tahu Telor Lontong', '9,50', 'Omelet met tofu, geserveerd met rijstcake, taugé en petissaus'],
      ['Gado-Gado Lontong', '8,50', 'Gestoomde groentemix, tofu, tempe en ei met lontong en pindasaus'],
      ['Rudjak Cingur', '12,50', 'Heel pittige mix van groenten, lontong, fruit en kalfsschenkel in petissaus'],
      ['Ketoprak', '8,50', 'Tofu, taugé, lontong en vermicelli in pindasaus'],
    ]},
  ]},
  { id: 'grill', tab: 'Van de grill', groups: [
    { h: 'Geroosterde schotels', note: 'met rijst en serundeng', items: [
      ['Sate Schotel', '15,00', 'Geroosterde sate van 2x kip en 2x lam, met groenten'],
      ['Bebek Bakar', '12,50', 'Geroosterde eend met groenten'],
      ['Iga Bakar', '12,50', 'Geroosterde kalfsspareribs met groenten'],
      ['Dorade Bakar', '18,50', 'Geroosterde hele dorade met groenten'],
      ['Pepes Ikan', '12,50', 'Gekruide makreel in bananenblad met groenten'],
      ['Ayam Bakar', '12,50', 'Geroosterde stukken kip met groenten'],
    ]},
  ]},
  { id: 'special', tab: 'Specialiteiten', groups: [
    { h: 'Specialiteiten', note: 'met rijst en serundeng', items: [
      ['Ikan Bumbu Bali', '15,00', 'Hele tilapia met pittige saus en groenten'],
      ['Bebotok Daging', '12,50', 'Gestoomd en gekruid gehakt met kokos in bananenblad (otak-otak daging)'],
      ['Dorade Penyet', '18,50', 'Gefrituurde hele dorade met tahu, tempe, rauwkost en sambal terasi'],
      ['Nasi Rames Speciaal', '15,00', '2 soorten groenten, 2 soorten vlees/kip, ei, sate en garnituren'],
      ['Nasi Gudeg', '15,00', 'Zoet-pittig gekruide jonge jackfruit, kalfsspek, tempe, tofu en ei'],
      ['Ikan Penyet', '12,50', 'Gefrituurde zoetwatervis met tofu, tempe, rauwkost en sambal'],
      ['Empal & Babat Penyet', '15,00', 'Gefrituurde sucadelap en pens met tempe, tahu en sambal terasi'],
      ['Pecel Lele', '12,50', 'Gefrituurde meerval met tempe, tahu, rauwkost en sambal terasi'],
      ['Bebek Penyet', '12,50', 'Gefrituurde eend met tempe, tahu, rauwkost en sambal terasi'],
      ['Ayam Penyet', '12,50', 'Gefrituurde kip met tahu, tempe, rauwkost en sambal terasi'],
    ]},
  ]},
  { id: 'los', tab: 'Losse gerechten', groups: [
    { h: 'Losse gerechten', note: 'rijst los te bestellen', items: [
      ['Plecing Daun Singkong', '9,50', 'Cassaveblad met pittige kokossambal'],
      ['Daging Semoor', '15,00', 'Rundvlees gestoofd in zoet gekruide sojasaus'],
      ['Ayam Cashew', '15,00', 'Roerbak van kip met cashewnoten'],
      ['Urap Sayur', '8,50', 'Salade van gestoomde groenten met gekruide kokos'],
      ['Karedok', '8,50', 'Rauwkostsalade met een zachte pindasaus'],
      ['Petjel', '8,50', 'Gestoomde groentemix met pittige pindasaus'],
      ['Tumis Tauge met Tahu', '8,50', 'Roerbak van taugé en tofu'],
      ['Sambal Goreng Boontjes', '8,50', 'Sperziebonen in kokoscurry'],
      ['Sambal Goreng Udang Peteh', '15,00', 'Pittige roerbak van garnalen met petehbonen'],
      ['Plecing Kangkoeng', '9,50', 'Indonesische waterspinazie met sambal terasi'],
      ['Sayur Asam', '9,50', 'Tamarindesoep met groentemix'],
      ['Belado Terong', '9,50', 'Pittige roerbak van aubergine'],
      ['Sambal Goreng Tempe Peteh', '9,50', 'Pittige roerbak van tempe met petehbonen'],
      ['Rendang Kalio', '15,00', 'Rundvlees gekookt in kokoscurry'],
    ]},
  ]},
  { id: 'wok', tab: 'Wok', groups: [
    { h: 'Wokschotels', items: [
      ['Nasi of Bami Goreng Cumi', '15,00', 'Gebakken rijst of noedels met inktvis en ei'],
      ['Nasi of Bami Goreng Djawa', '12,50', 'Gebakken rijst of noedels met geroosterd kipstuk en ei'],
      ['Nasi of Bami Goreng Udang', '15,00', 'Gebakken rijst of noedels met garnalen en ei'],
      ['Nasi Goreng Teri Peteh', '15,00', 'Gebakken rijst met ansjovis, petehbonen en ei'],
      ['Nasi Goreng Babat', '12,50', 'Gebakken rijst met kalfspens en ei'],
      ['Nasi of Bami Goreng Vegetarisch', '12,50', 'Gebakken rijst of noedels met groenten en ei'],
    ]},
  ]},
  { id: 'dessert', tab: 'Desserts', groups: [
    { h: 'Speciale Indonesische warme desserts', items: [
      ['Kacang Hijau', '5,50', 'Mungbonen in kokos en Javaanse suiker'],
      ['Kolak', '5,50', 'Cassave, banaan, pompoen en jackfruit in kokosmelk'],
      ['Bubur Ketan Hitam', '5,50', 'Zoete pap van zwarte kleefrijst met kokosmelk'],
      ['Klepon', '5,50', '6 balletjes van kleefrijstmeel met kokos, gevuld met Javaanse suiker'],
      ['Lupis', '5,50', '2 gestoomde kleefrijstjes met kokos en Javaanse suiker'],
    ]},
    { h: 'Desserts met ijs', items: [
      ['Pandan sponscake & vanille-ijs', '5,50', 'Zachte cake van pandan met vanille-ijs'],
      ['Dadar Gulung & vanille-ijs', '5,50', 'Pandanpannenkoek gevuld met kokos en palmsuiker, met vanille-ijs'],
      ['Pisang Goreng & vanille-ijs', '5,50', 'Gebakken banaan in deeg met vanille-ijs'],
      ['Tape Goreng & vanille-ijs', '5,50', 'Gebakken gefermenteerde cassave in deeg met vanille-ijs'],
      ['Spekkoek & vanille-ijs', '5,50', 'Indische speculaascake met vanille-ijs'],
      ['Dame Blanche', '5,50', 'Vanille-ijs met chocoladesaus'],
      ['Lava cake & vanille-ijs', '5,50', 'Chocoladecake gevuld met gesmolten chocolade, met vanille-ijs'],
    ]},
  ]},
  { id: 'drinken', tab: 'Drinken', groups: [
    { h: 'Indonesische dessertdrankjes', items: [
      ['Es Kelapa Muda', '4,50'], ['Es Tjendol', '4,00'], ['Es Dawet', '4,00'], ['Es Soda Gembira', '4,00'],
      ['Es Kopi Jelly', '4,00'], ['Es Tjampoer', '4,50'], ['Es Shanghai', '4,50'], ['Es Cincau', '4,00'],
      ['Es Tjendol Durian', '5,50'], ['Es Teller Durian', '5,50'], ['Es Teller Tape', '5,50'],
    ]},
    { h: 'Jus buah', note: 'vers', items: [
      ['Jus Alpukat', '4,50', 'Verse avocadosmoothie'], ['Jus Jeruk', '4,50', 'Verse sinaasappelsap'],
      ['Jus Mangga', '4,50', 'Verse mangosap'], ['Jus Nanas', '4,50', 'Verse ananassap'],
    ]},
    { h: 'Warme dranken', items: [
      ['Thee', '2,50'], ['Teh tawar / manis', '2,50'], ['Verse limoen', '3,50'], ['Verse gember', '3,50'],
      ['Verse munt', '3,50'], ['Verse mix', '4,50'], ['Koffie', '2,50'], ['Cappuccino', '3,00'],
      ['Latte macchiato', '4,00'], ['Koffie latte', '3,00'], ['Kopi tubruk', '2,50'], ['Warme choco', '3,00'], ['Teh tarik', '3,00'],
    ]},
    { h: 'Speciale koffies', items: [
      ['Irish Coffee', '6,50', 'Koffie met whiskey en slagroom'],
      ['Spanish Coffee', '6,50', 'Koffie met Tia Maria en slagroom'],
      ['Italian Coffee', '6,50', 'Koffie met Disaronno en slagroom'],
    ]},
    { h: 'Frisdranken', items: [
      ['Pepsi Cola', '2,75'], ['Pepsi Cola Max', '2,75'], ['7up', '2,75'], ['Sisi', '2,75'], ['Cassis', '2,75'],
      ['Bitter Lemon', '2,75'], ['Ginger Ale', '2,75'], ['Tonic', '2,75'], ['Sourcy rood', '2,50'], ['Sourcy blauw', '2,50'],
      ['Lipton Ice', '2,75'], ['Lipton Ice Green', '2,75'], ['Appelsap', '2,75'], ['Fristi', '2,75'], ['Chocomel', '2,75'],
      ['Teh Botol', '3,00'], ['Heineken 0.0', '2,75'],
    ]},
    { h: 'Bier & wijn', items: [
      ['Bintang', '4,00', 'Fles bier uit Indonesië'], ['Heineken', '3,00', 'Tapbier'], ['Radler', '4,00', 'Fles'],
      ['Affligem Dubbel', '4,00', 'Fles'], ['Wieckse Witte', '4,00', 'Fles witbier'],
      ['Chardonnay', '4,75', 'Glas witte wijn'], ['Cabernet Sauvignon', '4,75', 'Glas rode wijn'],
      ['Prosecco', '4,75', 'Glas mousserende wijn'], ['Rosé', '4,75', 'Glas roséwijn'], ['Fles wijn', '19,50'],
    ]},
    { h: 'Cocktails', items: [
      ['Mojito', '7,50', 'Rum, limoen, verse munt en sodawater'],
      ['Gin Tonic', '7,50', 'Gordon\'s gin, tonic en limoen'],
      ['Aperol Spritz', '7,50', 'Aperol met prosecco'],
    ]},
  ]},
];

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const tabs = document.getElementById('tabs');
const panels = document.getElementById('panels');
MENU.forEach((sec, i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.role = 'tab'; b.id = 'tab-' + sec.id;
  b.setAttribute('aria-controls', 'p-' + sec.id);
  b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  b.tabIndex = i === 0 ? 0 : -1;
  b.textContent = sec.tab;
  tabs.appendChild(b);
  const p = document.createElement('div');
  p.className = 'panel'; p.id = 'p-' + sec.id; p.setAttribute('role', 'tabpanel');
  p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
  p.innerHTML = sec.groups.map(g => `
    <div class="mgroup${g.items.every(it => !it[2]) ? ' compact' : ''}">
      <h3>${esc(g.h)}${g.note ? ` <small>${esc(g.note)}</small>` : ''}</h3>
      <ul>${g.items.map(([n, pr, d]) => `<li><span class="mn">${esc(n)}</span><span class="dots" aria-hidden="true"></span><span class="mp">€ ${pr}</span>${d ? `<span class="md">${esc(d)}</span>` : ''}</li>`).join('')}</ul>
    </div>`).join('');
  panels.appendChild(p);
});
const allTabs = [...tabs.children];
function select(t) {
  allTabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
  t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}
tabs.addEventListener('click', e => { const t = e.target.closest('[role=tab]'); if (t) select(t); });
tabs.addEventListener('keydown', e => {
  const i = allTabs.indexOf(document.activeElement);
  if (i < 0) return;
  let n = null;
  if (e.key === 'ArrowRight') n = allTabs[(i + 1) % allTabs.length];
  if (e.key === 'ArrowLeft') n = allTabs[(i - 1 + allTabs.length) % allTabs.length];
  if (n) { e.preventDefault(); n.focus(); select(n); }
});

// Mobiel menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('nav-open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
});

// Open / gesloten (ma-za 12-20)
(function () {
  const now = new Date(); const d = now.getDay(); const m = now.getHours() * 60 + now.getMinutes();
  const el = document.getElementById('status');
  const row = document.querySelector(`#hours tr[data-d="${d}"]`);
  if (row) row.classList.add('today');
  const open = d !== 0 && m >= 720 && m < 1200;
  if (open) { el.textContent = 'Nu open, tot 20:00'; el.classList.add('is-open'); }
  else if (d !== 0 && m < 720) el.textContent = 'Vandaag open van 12:00 tot 20:00';
  else el.textContent = (d === 6 || d === 0) ? 'Maandag weer open vanaf 12:00' : 'Morgen weer open vanaf 12:00';
})();

// Demo-formulieren
document.querySelectorAll('.demo-form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.demo-msg').hidden = false;
}));

// Header schaduw bij scrollen
const bar = document.getElementById('top-bar');
addEventListener('scroll', () => bar.classList.toggle('scrolled', scrollY > 20), { passive: true });
