// Xotus Maduratna preview: menu, tabs, opening status, nav, demo form.
(function () {
  // [naam, prijs, omschrijving]
  const REST = [
    { id: 'r-voor', t: 'Voorgerechten', items: [
      ['Soto Ayam', '6,95', 'Kleine portie Indonesische kippensoep met taugé en ei'],
      ['Gepaneerde Garnalen', '6,45', '4 stuks gefrituurde garnalen met paneermeel'],
      ['Pangsit Goreng', '6,45', '6 stuks gevouwen flensjes met gekruide kipvulling'],
      ['Vegetarische Mini Loempia', '5,95', '6 stuks kleine loempiahapjes met vegetarische vulling'],
      ['Loempia Semarang', '3,95', 'Loempia gevuld met jonge bamboestrips, kip en groente'],
      ['Lemper Kip', '3,95', 'Kleefrijst met gekruide kipvulling']]},
    { id: 'r-bij', t: 'Bijgerechten', items: [
      ['Portie Pindasaus', '3,00'],
      ['Krupuk Udang', '4,50', 'Borel garnalenkrupuk'],
      ['Cassave Krupuk', '4,50', 'Pikante cassavekrupuk'],
      ['Emping', '4,50', 'Geplet, gebakken belindjo-nootje'],
      ['Rempeyek', '4,95', 'Gekruid gebakken bloembeslag met pinda’s'],
      ['Krupuk Speciaal', '5,50', 'Krupuk met extra garnalensmaak']]},
    { id: 'r-soep', t: 'Soepen maaltijd', note: 'Geserveerd met witte rijst of lontong', items: [
      ['Soto Ayam', '13,75', 'Indonesische kippensoep met taugé & ei'],
      ['Soto Babat Madura', '15,95', 'Indonesische runderpenssoep & ei']]},
    { id: 'r-sate', t: 'Saté portie', note: '3 stokjes saté', items: [
      ['Saté Ayam (kip)', '8,95'], ['Saté Babi (varkens)', '8,95'], ['Saté Kambing (lams)', '11,95'], ['Saté Udang (garnalen)', '13,95']]},
    { id: 'r-satem', t: 'Saté maaltijd', note: '3 stokjes saté met lontong, atjar en krupuk', items: [
      ['Saté Ayam (kip)', '12,95'], ['Saté Babi (varkens)', '12,95'], ['Saté Kambing (lams)', '14,95']]},
    { id: 'r-hoofd', t: 'Hoofdgerechten', items: [
      ['Rames Maduratna', '19,95', 'Keuze uit lontong, witte rijst, nasi goreng of bami goreng. Met rendang, kip cashew, boontjes, orak-arik en ei'],
      ['Rames Jawa (pittig)', '19,95', 'Keuze uit nasi goreng Jawa of bami goreng Jawa (pittig). Met daging Bali, hete kip, boontjes, orak-arik en sambal goreng telor'],
      ['Mihoen Istimewa', '20,95', 'Rijstvermicelli met rendang, 1 stokje kipsaté, boontjes, orak-arik en sambal goreng telor'],
      ['Nasi Kuning Xotus', '20,95', 'Gele rijst gekookt in kokosmelk met rendang, kip cashew, tempe basah, boontjes en sambal goreng telor'],
      ['Lontong Cap Go Meh', '22,50', 'Blokjes rijst met kip opor, udang peté, tahoe tempe peté, lodeh, sambal goreng hati (kiplever) en ei']],
      extra: 'Extra 1 stokje saté € 2,95. Speciaal (2 stokjes saté) € 5,25.' },
    { id: 'r-vega', t: 'Vegetarisch speciaal', items: [
      ['Rames Sayoer', '19,95', 'Lontong, witte rijst, nasi goreng of bami goreng met orak-arik, tahoe tempe peté, boontjes, sambal goreng terong en ei'],
      ['Gado-Gado', '14,75', 'Groenteschotel, blokjes rijst (lontong), stukjes emping & pindasaus'],
      ['Tahoe Petis', '15,95', 'Gebakken tahoe, blokjes rijst (lontong), taugé in garnalenpastasaus, atjar & stukjes krupuk'],
      ['Tahoe Telor', '16,95', 'Tahoe-omelet, blokjes rijst (lontong), taugé in soja-pindasaus, atjar & stukjes krupuk']]},
    { id: 'r-portie', t: 'Portie gerechten', groups: [
      { h: 'Basis', items: [['Nasi Putih (witte rijst)', '4,00'], ['Lontong (blokjes rijst)', '4,00'], ['Nasi Kuning (gele rijst)', '5,95'], ['Nasi Goreng (gebakken rijst)', '5,95'], ['Nasi Goreng Jawa (pittig)', '5,95'], ['Bami Goreng (gebakken bami)', '5,95'], ['Bami Goreng Jawa (pittig)', '5,95'], ['Mihoen (rijstvermicelli)', '5,95']]},
      { h: 'Groenten', items: [['Atjar Ketimun', '5,50', 'Zoetzure komkommer'], ['Sayoer Lodeh', '8,50', 'Gemengde groente in kokossaus'], ['Orak-arik', '8,50', 'Gemengde groente, kruiden en ei'], ['Tja Tahu Taugé', '8,50', 'Tahoe en taugé'], ['Tja Broccoli', '8,50', 'Broccoli en peentjes'], ['Oerap', '8,50', 'Gemengde groente met pittige kokos'], ['Sambal Goreng Boontjes', '8,50', 'Boontjes in gekruide saus'], ['Sambal Goreng Tempé Basah', '8,50', 'Tempé in natte saus'], ['Sambal Goreng Terong', '8,95', 'Aubergine in gekruide saus'], ['Sambal Goreng Tempé Kering', '8,95', 'Tempé droog, pittig zoet gekruid'], ['Sambal Goreng Tahu Tempé Peté', '8,95']]},
      { h: 'Kip', items: [['Kip Cashew', '11,00', 'Zoete kip met cashewnoten'], ['Ayam Ketjap', '11,00', 'Kippendijvlees in ketjapsaus'], ['Ayam Pedis', '11,00', 'Kippendijvlees in pikante saus'], ['Opor Ayam', '11,00', 'Kippendijvlees in gekruide kokossaus'], ['Sambal Goreng Hati', '11,00', 'Kippenlever, pikant gekruid'], ['Indische Kip Balletjes (4 st.)', '4,50', 'Kipgehakt in zoete saus'], ['Sambal Goreng Telor (2 st.)', '5,50', 'Ei in pikante saus']]},
      { h: 'Rund', items: [['Rendang', '11,00', 'Rundvlees in gekruide kokossaus'], ['Semoer Daging', '11,00', 'Rundvlees in zoete sojasaus'], ['Daging Bali', '11,00', 'Rundvlees in gekruide pikante saus']]},
      { h: 'Varkens', items: [['Babi Ketjap', '11,00', 'Varkensvlees in zoete sojasaus']]},
      { h: 'Vis', items: [['Ikan Bali', '12,50', 'Makreel in pikante saus'], ['Sambal Goreng Udang Peté', '13,50', 'Pikante garnalen & petébonen']]}]},
  ];

  const AFHAAL = [
    { id: 'a-snack', t: 'Snacks & dessert', items: [
      ['Pangsit Goreng Kip', '4,95', '6 st. gevouwen flensjes met gekruide kipvulling'], ['Vegetarische Mini Loempia (6 st.)', '3,65'], ['Gepaneerde Garnalen (5 st.)', '4,75'], ['Spekkoek', '2,75'], ['Loempia Semarang', '3,00'], ['Lemper Kip', '3,00', 'Kleefrijst met kipvulling'], ['Risoles Kip', '3,00', 'Gekruide kipragoutvulling'], ['Pastei Kip', '3,25', 'Kip, groente, vermicelli en ei'], ['Pisang Goreng (2 stukjes)', '3,50'], ['Es Tjendol', '4,50', 'Palmsuiker, maizenapuddinkjes, kokosmelk'], ['Es Kelapa Muda', '4,50', 'Rode siroop, jonge kokos, kokosmelk']]},
    { id: 'a-spec', t: 'Specialiteit', items: [
      ['Gado-gado', '9,45', 'Groenteschotel & pindasaus'], ['Speciaal (+ 2 stokjes kipsaté)', '13,95'], ['Vega Maaltijd', '14,75', 'Witte rijst, 4 groentegerechten, ei'], ['Tahoe Petis', '11,00', 'Tahoe, taugé in garnalenpastasaus'], ['Tahoe Telor', '11,00', 'Tahoe-omelet, taugé in soja-pindasaus'], ['Lontong Opor', '17,45', 'Blokjes rijst, kip, kiplever, -maagjes, bamboe, ei']]},
    { id: 'a-soep', t: 'Soepen', note: 'Geserveerd met lontong of rijst', items: [
      ['Soto Ayam', '9,75', 'Indonesische kippensoep met taugé & ei'], ['Soto Babat', '12,45', 'Indonesische runderpenssoep & ei']]},
    { id: 'a-sate', t: 'Saté', note: '3 stokjes per portie', items: [
      ['Saté Ayam (kip)', '6,75'], ['Saté Babi (varkens)', '6,75'], ['Saté Kambing (lams)', '9,45']]},
    { id: 'a-mini', t: 'Mini rames', note: 'Basis + 1 vlees, 1 groente naar keuze & ½ ei', items: [
      ['Witte Rijst / Lontong', '11,45'], ['Nasi / Bami Goreng', '11,45'], ['Nasi / Bami Jawa (pittig)', '11,45'], ['Mihoen Rames', '12,45'], ['Nasi Koening Rames', '12,45']],
      extra: 'Speciaal: rames menu + 2 st. saté € 4,50' },
    { id: 'a-rames', t: 'Rames', note: 'Basis + 2 vlees, 2 groente naar keuze & 1 ei', items: [
      ['Witte Rijst / Lontong', '14,75'], ['Nasi / Bami Goreng', '14,75'], ['Nasi / Bami Jawa (pittig)', '14,75'], ['Mihoen Rames', '15,75'], ['Nasi Koening Rames', '15,75']],
      extra: 'Speciaal: rames menu + 2 st. saté € 4,50' },
    { id: 'a-gewicht', t: 'Per 100 gram', note: 'Stel zelf uw bakjes samen', groups: [
      { h: 'Basis', items: [['Nasi Putih', '1,25'], ['Lontong', '1,75'], ['Nasi Kuning', '2,10'], ['Nasi Goreng', '1,95'], ['Nasi Goreng Jawa (pittig)', '1,95'], ['Bami Goreng', '1,95'], ['Bami Goreng Jawa (pittig)', '1,95'], ['Mihoen', '2,50']]},
      { h: 'Groenten', items: [['Atjar Ketimun', '2,50'], ['Sayoer Lodeh', '2,75'], ['Orak-arik', '2,75'], ['Tja Tahu Taugé', '2,75'], ['Tja Broccoli', '2,75'], ['Oerap', '2,75', 'Gemengde groente met pittige kokos'], ['S.G. Boontjes', '2,75'], ['S.G. Tempé Basah', '2,75'], ['S.G. Terong', '2,95', 'Aubergine in gekruide saus'], ['S.G. Tahu Tempé Peté', '2,95', 'Tahoe, tempé met petébonen in gekruide saus']]},
      { h: 'Kip', items: [['Kip Cashew', '3,25'], ['Ayam Ketjap', '3,25'], ['Ayam Pedis', '3,25'], ['Opor Ayam', '3,25'], ['S.G. Hati', '3,25', 'Lever, pikant gekruid'], ['Indische Kip Balletjes (per stuk)', '0,80'], ['S.G. Telor (1 st.)', '1,70', 'Ei in pikante saus']]},
      { h: 'Rund', items: [['Rendang', '3,25'], ['Semoer Daging', '3,25'], ['Daging Bali', '3,25']]},
      { h: 'Varkens', items: [['Babi Ketjap', '3,25']]},
      { h: 'Vis', items: [['Ikan Bali', '3,75', 'Makreel in pikante saus'], ['S.G. Udang Peté', '4,25', 'Garnalen & peté']]}]},
    { id: 'a-bij', t: 'Bijgerechten', items: [
      ['Krupuk Udang', '3,25'], ['Cassave Krupuk', '3,25'], ['Emping', '3,65'], ['Bakje Pindasaus 250 cc', '2,75'], ['Bakje Pindasaus 350 cc', '3,75'], ['Bakje Pindasaus 500 cc', '5,75'], ['Bakje Tempé Kering', '3,75', 'Gedroogde tempé'], ['Pot Sambal Badjak', '5,50'], ['Rempeyek Kacang', '4,50'], ['Emping Balado (pittig)', '4,50']]},
  ];

  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const dish = d => `<div class="dish"><span class="dish-name">${esc(d[0])}</span><span class="dish-price">€ ${d[1]}</span>${d[2] ? `<span class="dish-desc">${esc(d[2])}</span>` : ''}</div>`;
  function render(el, data, rijstLabel) {
    const chips = data.map(c => `<li><a href="#${c.id}">${c.t}</a></li>`).join('') + `<li><a href="#rijsttafel">${rijstLabel}</a></li>`;
    const cats = data.map(c => {
      if (c.groups) {
        // groups render as separate column blocks so they flow nicely
        return c.groups.map((g, i) => `<div class="cat"${i === 0 ? ` id="${c.id}"` : ''}>${i === 0 ? `<h3>${c.t}</h3>${c.note ? `<p class="cat-note">${c.note}</p>` : ''}` : ''}<h4>${g.h}</h4>${g.items.map(dish).join('')}</div>`).join('');
      }
      return `<div class="cat" id="${c.id}"><h3>${c.t}</h3>${c.note ? `<p class="cat-note">${c.note}</p>` : ''}${c.items.map(dish).join('')}${c.extra ? `<p class="extra">${c.extra}</p>` : ''}</div>`;
    }).join('');
    el.innerHTML = `<ul class="chips">${chips}</ul><div class="cats">${cats}</div>`;
  }
  render(document.querySelector('[data-menu="rest"]'), REST, 'Rijsttafel Madura & Nusantara');
  render(document.querySelector('[data-menu="afhaal"]'), AFHAAL, 'Afhaalrijsttafel voor 2');

  // tabs
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function select(tab) {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      }
    });
  });

  // opening status (Ma/Di gesloten, Wo-Za 16:00-20:30, Zo 16:00-20:00)
  const HOURS = { 0: [960, 1200], 3: [960, 1230], 4: [960, 1230], 5: [960, 1230], 6: [960, 1230] };
  const now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  const row = document.querySelector(`#hours tr[data-d="${d}"]`); if (row) row.classList.add('today');
  const st = document.getElementById('status');
  const fmt = x => `${String(Math.floor(x / 60)).padStart(2, '0')}:${String(x % 60).padStart(2, '0')}`;
  const h = HOURS[d];
  if (h && m >= h[0] && m < h[1]) { st.textContent = `Nu open, vandaag tot ${fmt(h[1])}`; st.classList.add('is-open'); }
  else if (h && m < h[0]) st.textContent = `Vandaag open van ${fmt(h[0])} tot ${fmt(h[1])}`;
  else {
    let k = 1; while (!HOURS[(d + k) % 7]) k++;
    const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    const nd = (d + k) % 7;
    st.textContent = `Nu gesloten, weer open ${k === 1 ? 'morgen' : names[nd]} om ${fmt(HOURS[nd][0])}`;
  }

  // mobile nav
  const btn = document.querySelector('.nav-toggle');
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false');
  }));

  // demo form
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Mail of bel ons gerust.';
  });
})();
