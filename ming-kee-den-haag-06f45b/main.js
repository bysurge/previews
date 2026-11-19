// Ming Kee preview: numbered menu with tabs + search, opening status, nav.
(function () {
  const M = [
    { id: 'soep', t: 'Soep', items: `1|Rundvleesballetjes soep|6,00
2|Sui kau soep|5,00
3|Wantan soep|5,00
4|Groente soep|4,50
5|Szechuan soep|6,00
7|Kippensoep|5,00
8|Visballetje soep|6,00
9|Saoto soep|5,00
10|Saoto soep (met witte rijst)|6,00` },
    { id: 'noedelsoep', t: 'Mihoen, bami soep', items: `11|Wantan noedelsoep|9,50
12|Sui kau noedelsoep|10,00
13|Geroosterd eend noedelsoep|10,50
14|Cha sieuw noedelsoep|9,50
15|Kip met sojasaus noedelsoep|9,50
16|Geroosterd spek noedelsoep|10,00
17|Twee soorten vlees noedelsoep|11,00
18|Visballetje noedelsoep|10,00
19|Rundvlees balletje noedelsoep|10,00
20|Mix Chinese groenten|9,50` },
    { id: 'gebakken', t: 'Gebakken nasi, bami & mihoen', items: `21|Ming Kee nasi|10,50
212|Ming Kee bami|10,50
22|met kip|9,00
23|met cha sieuw|9,00
24|met rundvlees|9,00
25|met garnalen|9,00
26|Suriname|9,00
270|Vegetarische rijststick|11,00
271|Rijststick met kip|12,00
272|Rijststick rundvlees|12,00
28|Thaise style|9,00
29|Nasi pete bone|9,00
30|Nasi met kip en gezouten vis|9,00
312|Singapore mihoen met kip|10,00
313|Mihoen Singapore|10,00
36|Kippenvleugels met gekruide peper (5 st.)|5,00` },
    { id: 'rijstschotels', t: 'Rijstschotels', note: 'Gerechten boven op de rijst', items: `37|met geroosterde eend (met botten)|9,50
38|met champignons eend|9,50
39|met zwarte peper en honing eend|9,50
40|met zwarte bonensaus eend|9,50
41|met cha sieuw|9,00
42|met spek|9,00
43|met sojasaus kip|9,00
44|met 2 soorten vlees|10,00
45|met 3 soorten vlees|11,00
46|Rundvlees met zwarte bonensaus|9,50
47|Kip met zwarte bonensaus|9,50
48|Foe yong hai|9,50
49|Rundvlees met honing en peper|9,50
50|Rijstschotel kip met honing en peper|9,50
51|Gevulde tahoe|10,50
53|met lams stoofvlees|10,00
54|met runder stoofvlees|10,00
55|Japanse udon kip of rundvlees|9,50
56|Rundvlees met zwarte peper|9,50
57|Rijststick met gemengd vlees|12,50` },
    { id: 'gerechten', t: 'Gerechten', note: 'Met rijst apart. Nasi, bami of mihoen € 3,50 extra.', items: `58|Kipfilet met peper en zout|12,00
59|Garnalen met cashewnoten|12,00
60|Garnalen met peper en zout|12,00
61|Garnalen met honing en peper|12,00
62|Inktvis met peper en zout|12,00
64|Garnalen met mix Chinese groenten|11,00
65|Kogelbiefstuk Chinese style|15,00
66|Kipblokjes met cashewnoten|11,00
67|Schotel rundvlees met mix Chinese groenten|11,00
68|Schotel rundvlees gember en bosuien|12,00
69|Koe lo yuk|12,00
71|Kang kong met trassie|11,00
72|Rundvlees zoetzure groenten|11,00
73|Koe lo kai|11,00
74|Koe lo vis|11,00
75|Thaise kerrie kip|11,00
76|Garnalen met knoflook en uitje|12,00
77|Kipstukjes met peper en zout|11,00
78|Mapo tahoe|11,00
79|Mix Chinese groenten|10,00
81|Visfilet met knoflook en peper|12,00
82|Tahoe met babi pangang|11,00
83|Kouseband met kip, spek of rund|12,00
84|Kogelbiefstuk met honing en peper|15,00
85|met 2 soorten vlees|12,00
86|Mix Chinese groenten met tahoe|11,00
89|met 3 soorten vlees|14,00` },
    { id: 'geroosterd', t: 'Geroosterd', items: `90|Halve geroosterde eend (A)|15,00
91|Hele geroosterde eend (A)|26,00
92|Halve sojasaus kip (A)|9,00
93|Hele sojasaus kip (A)|15,00` },
    { id: 'populair', t: 'Populaire gerechten', items: `96|Aubergine in peper en zout met spek of kip|12,00
97|Gebakken egg tahoe met knoflook en uitjes|13,00
98|Spareribstukjes in zoetzure saus|11,00
149|Vis met knoflook en uitje|12,00
102|Singapore noedelsoep kip of vis|10,50
104|Yakitori Japanse saté (4 stuks)|6,00
105|Aubergine met Chinese pikante saus (spek of kip)|12,00
107|Visfilet met zoetzure groenten|11,00
108|Tjap tjoy kipfilet speciaal|11,00
109|Gevulde tahoe (varkensvlees)|14,00
113|Vegetarische mihoen|8,50
116|Babi pangang spek|13,00
117|Cha sieuw|13,00
124|Kip in soja met knoflook en peper|12,00
125|“Sichuan” pittige kip|11,00
126|Nasi kip met trassie|9,00
127|Nasi trassie met cha sieuw|9,50
128|Nasi trassie met spek|9,00
150|Seafood met kerrie|15,00
152|Foe yong hai met garnalen|14,00
161|Japanse udon soep met vlees, rund of kip|10,00
163|Aubergine met gezouten vis|12,00
166|Indische kerrie kip nasi|9,00
168|Vegetarische Japanse udon|9,00
169|Gebakken udon met garnalen|10,00
171|Geroosterde spareribs (8 stuks)|10,50
222|Kip bami|9,00
223|Kip mihoen|9,00
252|Bami met garnalen|9,00
253|Mihoen met garnalen|9,00
282|Thaise style bami|9,00
391|Eend met zwarte peper- en honingsaus|15,00
401|Eend met zwarte bonensaus|15,00` },
    { id: 'nieuw', t: 'Nieuwe schotels', items: `131|Schotel petehbonen met trassie en rund|12,00
132|Schotel kip met Chinese champignons|12,00
133|Schotel broccoli met rund of kip|12,00
134|Schotel broccoli met oestersaus of knoflook|11,00
135|Schotel foe yong hai met kip|12,00
136|Rijststick met garnalen|12,00
137|Nasi goreng trassie garnalen (heet)|9,50
138|Gon bao kip|11,00
139|Cha sieuw tahoe|12,00
140|Mihoen Singapore garnalen|10,00
141|Tahoe met zwarte bonensaus|11,00
142|Tahoe met gezouten groenten|11,00
143|Rundvlees met zwarte bonensaus|12,00
144|Kip met zwarte bonensaus|12,00
146|Kip met honing en peper|12,00
147|Rundvlees met zwarte peper|15,00
149|Vis met knoflook en uitje|12,00
151|Thaise kerrie garnalen|13,00
153|Koe lo ha|13,00
154|“Sichuan” pittige garnalen|13,00
541|Beef stew|15,00
531|Lamb stew|15,00
671|Seizoensgroenten met spek|15,00
961|Aubergine met garnalen|15,00
831|Kouseband met garnalen|15,00` },
  ].map(c => ({ ...c, items: c.items.split('\n').map(l => l.split('|')) }));

  const cats = document.getElementById('cats');
  const list = document.getElementById('list');
  const q = document.getElementById('q');
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const row = i => `<div class="row"><span class="no">${i[0]}</span><span class="nm">${esc(i[1])}</span><span class="pr">€ ${i[2]}</span></div>`;
  const group = c => `<div class="group"><h3>${c.t}</h3>${c.note ? `<p class="note">${c.note}</p>` : ''}<div class="rows">${c.items.map(row).join('')}</div></div>`;
  let current = M[0].id;

  cats.innerHTML = M.map((c, i) => `<button role="tab" data-id="${c.id}" aria-selected="${i === 0}" aria-controls="list" ${i ? 'tabindex="-1"' : ''}>${c.t}</button>`).join('');
  const btns = [...cats.querySelectorAll('button')];
  function show(id) {
    current = id; q.value = '';
    btns.forEach(b => { const on = b.dataset.id === id; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    list.innerHTML = group(M.find(c => c.id === id));
  }
  btns.forEach((b, i) => {
    b.addEventListener('click', () => show(b.dataset.id));
    b.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = btns[(i + (e.key === 'ArrowRight' ? 1 : btns.length - 1)) % btns.length];
      n.focus(); show(n.dataset.id);
    });
  });
  q.addEventListener('input', () => {
    const v = q.value.trim().toLowerCase();
    if (!v) { show(current); return; }
    btns.forEach(b => b.setAttribute('aria-selected', 'false'));
    const hits = M.map(c => ({ ...c, items: c.items.filter(i => /^\d+$/.test(v) ? i[0] === v || i[0].startsWith(v) : i[1].toLowerCase().includes(v)) })).filter(c => c.items.length);
    list.innerHTML = hits.length ? hits.map(group).join('') : `<p class="empty">Niets gevonden voor “${esc(q.value)}”. Probeer een ander nummer of woord.</p>`;
  });
  show(current);

  // opening status: every day 11:00-21:00
  const now = new Date(), m = now.getHours() * 60 + now.getMinutes();
  const tr = document.querySelector(`#hours tr[data-d="${now.getDay()}"]`); if (tr) tr.classList.add('today');
  const st = document.getElementById('status');
  if (m >= 660 && m < 1260) { st.textContent = 'Nu open, vandaag tot 21:00'; st.classList.add('is-open'); }
  else if (m < 660) st.textContent = 'Vandaag open van 11:00 tot 21:00';
  else st.textContent = 'Nu gesloten, morgen weer open vanaf 11:00';

  // mobile nav
  const btn = document.querySelector('.nav-toggle');
  btn.addEventListener('click', () => btn.setAttribute('aria-expanded', document.body.classList.toggle('nav-open')));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }));
})();
