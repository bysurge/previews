// China Garden preview: menu, afhaallijst, openingstijden vandaag.
(function () {
  // ---------- mobiel menu ----------
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // ---------- vandaag open ----------
  var d = new Date().getDay();
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var hours = { 0: '14:00 - 21:00', 1: '16:00 - 21:00', 2: null, 3: '16:00 - 21:00', 4: '16:00 - 21:00', 5: '16:00 - 21:00', 6: '14:00 - 21:00' };
  var t = document.getElementById('todayText');
  var dot = document.querySelector('.today-dot');
  if (hours[d]) {
    t.textContent = 'Vandaag open ' + hours[d];
  } else {
    t.textContent = 'Vandaag gesloten (behalve op feestdagen)';
    dot.classList.add('closed');
  }
  var row = document.querySelector('.hours-table tr[data-d="' + d + '"]');
  if (row) row.classList.add('is-today');

  // ---------- afhaallijst ----------
  // nr|naam|omschrijving|prijs
  var CATS = [
    ['Soepen', 'stock-wok.jpg', [
      '1|Kippensoep||5,80', '2|Tomatensoep||5,80', '3|Haaievinnensoep||5,80', '4|Chilisoep|Pekingsoep|9,30',
      '5|Champignonsoep||6,90', '6|Groentensoep||6,90', '7|Wan Tan soep||9,30', '8|"China Garden" soep||9,30']],
    ['Voor- en bijgerechten', 'stock-loempia.jpg', [
      '9|Kroepoek||5,00', '10|Loempia speciaal||8,80', '10C|Loempia "China Garden"|met Babi Pangang en saté|15,30',
      '11|Chinese vlees-loempia\'s|4 stuks|8,50', '12|Mini-Loempia\'s|10 stuks|7,20', '13|Saté Ajam|4 stokjes, kippenvlees|9,00',
      '14|Saté Babi|4 stokjes, varkensvlees|9,60', '15|Saté Oedang|4 stokjes, garnalen|17,00', '16|Pisang Goreng|gebakken bananen, 8 stuks|9,20',
      '17|Pangsit Goreng|8 stuks|9,50', '18|Witte rijst||4,90', '19|Atjar||4,90', '20|Pikante saus||4,90', '21|Saté saus||4,90',
      '22|Kippenboutje in pikante saus||5,20', '23|Sajor|Indische groenten|6,90', '24|Daging smoor|pittig gestoofd rundvlees|17,80',
      '25|Daging roedjak|zoet gestoofd rundvlees|17,80']],
    ['Nasi', 'stock-nasi-sate.jpg', [
      '26|Nasi Goreng gewoon|met ei en ham|9,80', '27|Kleine Nasi Goreng gewoon||7,20', '28|Nasi Goreng speciaal|met kip en saté|16,20',
      '29|Nasi Goreng met Babi Pangang|in één bak|16,20', '30|Nasi Goreng met saté|3 stokjes|16,20', '31|Nasi Goreng met gesneden kip en groenten||18,30',
      '32|Nasi Goreng met ossenhaas en groenten||24,00', '33|Nasi Goreng met varkenshaas en groenten||18,30', '34|Nasi Goreng met Chinese garnalen en groenten||26,20',
      '35|Nasi Goreng Kai Yo Fang|kip, Babi Pangang en saté|26,50', '36|Nasi Goreng Foe Yoe Fang|Foe Yong Hai, Babi Pangang en saté|26,50',
      '37|Nasi Goreng Ko Yo Fang|Koe Loe Yok, Babi Pangang en saté|26,50', '38|Nasi Goreng Tjap Yo Fang|Tjap Tjoy, Babi Pangang en saté|26,50',
      '39|Nasi Goreng Teh Yo Fang|Babi Pangang en 3 stokjes saté|26,50', '40|Nasi Goreng Ma Yo Fang|Daging Roedjak, Babi Pangang en saté|26,50',
      '42|Nasi Goreng Ha Yo Fang|gepaneerde Chinese garnalen, Babi Pangang en saté|26,50', '44|Tjau Fang|nasi met garnalen, Cha Siu, krab en groenten|26,50',
      '45|Nasi Goreng "China Garden"|met Koe Loe Yok, Babi Pangang, kip, Foe Yong Hai en saté|28,80']],
    ['Bami', 'stock-bami.jpg', [
      '46|Bami Goreng gewoon|met ei en ham|9,80', '47|Kleine Bami Goreng gewoon||7,20', '48|Bami Goreng speciaal|met kip en saté|16,20',
      '49|Bami Goreng met Babi Pangang|in één bak|16,20', '50|Bami Goreng met saté|3 stokjes|16,20', '51|Bami Goreng met gesneden kip en groenten||18,30',
      '52|Bami Goreng met ossenhaas en groenten||24,00', '53|Bami Goreng met varkenshaas en groenten||18,30', '54|Bami Goreng met Chinese garnalen en groenten||26,20',
      '55|Bami Goreng Kai Yo Ming|kip, Babi Pangang en saté|26,50', '56|Bami Goreng Foe Yo Ming|Foe Yong Hai, Babi Pangang en saté|26,50',
      '57|Bami Goreng Ko Yo Ming|Koe Loe Yok, Babi Pangang en saté|26,50', '58|Bami Goreng Tjap Yo Ming|Tjap Tjoy, Babi Pangang en saté|26,50',
      '59|Bami Goreng Teh Yo Ming|Babi Pangang en 3 stokjes saté|26,50', '60|Bami Goreng Ma Yo Ming|Daging Roedjak, Babi Pangang en saté|26,50',
      '62|Bami Goreng Ha Yo Ming|gepaneerde Chinese garnalen, Babi Pangang en saté|26,50',
      '63|Bami Goreng "China Garden"|met Koe Loe Yok, Babi Pangang, kip, Foe Yong Hai en saté|28,80']],
    ['Mihoen', 'stock-bami.jpg', [
      '64|Mihoen Goreng met gesneden kip en groenten||18,00', '65|Mihoen Goreng met varkensvlees en groenten||18,00',
      '66|Mihoen Goreng met ossenhaas en groenten||27,50', '67|Mihoen Goreng met Chinese garnalen en groenten||29,00',
      '68|Mihoen Goreng met Ajam Pangang|in één bak|22,50', '69|Mihoen Goreng met Babi Pangang|in één bak|22,50', '70|Mihoen Goreng met kerrie||22,50',
      '#|Speciale combinatie met mihoen',
      '71|Mihoen Goreng met kip, Babi Pangang en saté||33,00', '72|Mihoen Goreng met Foe Yong Hai, Babi Pangang en saté||33,00',
      '73|Mihoen Goreng met Koe Loe Yok, Babi Pangang en saté||33,00', '74|Mihoen Goreng met Tjap Tjoy, Babi Pangang en saté||33,00',
      '75|Mihoen Goreng met Babi Pangang en 3 stokjes saté||33,00', '76|Mihoen Goreng met Daging Roedjak, Babi Pangang en saté||33,00',
      '78|Mihoen Goreng met gepaneerde Chinese garnalen, Babi Pangang en saté||33,00',
      '79|Mihoen Goreng "China Garden"|met Koe Loe Yok, Babi Pangang, kip, Foe Yong Hai en saté|35,30']],
    ['Varkensvlees', 'stock-wokvuur.jpg', [
      '80|Kleine Babi Pangang|met pikante saus|18,50', '81|Babi Pangang|met pikante saus|23,50', '82|Babi Pangang speciaal|met ananas en pikante saus|25,30',
      '83|Babi Ketjap||25,30', '84|Babi Pangang|met ketjapsaus|25,30', '85|Varkenshaas met champignons||22,80', '86|Varkenshaas met paprika||22,80',
      '87|Varkenshaas met zwarte bonen||22,80', '90|Varkenshaas met kerriesaus||22,80', '91|Varkenshaas met tomatensaus||22,80',
      '92|Varkenshaas met pikante saus||22,80', '93|Varkenshaas met ketjapsaus||22,80', '94|Koe Loe Yok|gepaneerde vleesballetjes met zoetzure saus|22,80']],
    ['Ossenhaas', 'stock-wokvuur.jpg', [
      '95|Ossenhaas met champignons||28,50', '96|Ossenhaas met paprika||28,50', '97|Ossenhaas met zwarte bonen||28,50',
      '98|Ossenhaas met Chinese champignons||29,50', '100|Ossenhaas met kerriesaus||28,50', '101|Ossenhaas met oestersaus||28,50',
      '102|Ossenhaas met pikante saus||28,50', '103|Ossenhaas met ketjapsaus||28,50']],
    ['Kip', 'stock-wok.jpg', [
      '104|Gesneden kip met champignons||22,80', '105|Gesneden kip met ananas||22,80', '106|Kip "China Garden"|kipfilet in botersaus|24,50',
      '107|Gesneden kip met zwarte bonen||22,80', '109|Gesneden kip met kerriesaus||22,80', '110|Gesneden kip met tomatensaus||22,80',
      '111|Gesneden kip met pikante saus||22,80', '112|Gesneden kip met ketjapsaus||22,80', '113|Koe Loe Kay|gepaneerde kipballetjes met zoetzure saus|22,80']],
    ['Garnalen', 'stock-wok.jpg', [
      '114|Chinese garnalen met champignons||29,50', '115|Chinese garnalen met ananas||29,50', '116|Chinese garnalen met Chinese champignons||30,50',
      '117|Chinese garnalen met zwarte bonen||29,50', '118|Chinese garnalen met kerriesaus||29,50', '120|Chinese garnalen met pikante saus||29,50',
      '121|Koe Loe Ha|gepaneerde garnalen met zoetzure saus|29,50', '122|Gepaneerde Chinese garnalen|10 stuks met pikante saus|29,50']],
    ['Ei & groenten', 'stock-wok.jpg', [
      '#|Eiergerechten',
      '123|Foe Yong Hai met ham en champignons||17,30', '124|Foe Yong Hai met gesneden kip||19,30', '125|Foe Yong Hai met ossenhaas||24,30',
      '126|Foe Yong Hai met Chinese garnalen||28,50', '127|Foe Yong Hai "China Garden"|met Babi Pangang en kip|28,50',
      '128|Vegetarische Foe Yong Hai met champignons||17,30',
      '#|Groentengerechten',
      '129|Vegetarische Tjap Tjoy||17,30', '130|Tjap Tjoy met varkensvlees||17,30', '131|Tjap Tjoy met kippenvlees||17,30',
      '132|Tjap Tjoy speciaal met gebakken kip||20,40', '133|Tjap Tjoy met ossenhaas||25,30', '134|Tjap Tjoy met Chinese garnalen||28,80',
      '135|Tjap Tjoy "China Garden"|met Babi Pangang en kip|28,80', '136|Gado Gado|Indonesische groente, vegetarisch|17,30']],
    ['Indisch & Hollands', 'stock-nasi-sate.jpg', [
      '#|Indische gerechten',
      '141|Nasi of Bami Rames||16,50', '142|Nasi of Bami Rames speciaal|met kip en saté|20,90', '143|Nasi of Bami Rames compleet|met Babi Pangang en saté|22,00',
      '144|Nasi of Bami Rames "China Garden"|Babi Pangang, Foe Yong Hai, kip en saté|29,20', '146|Ajam Pangang met pikante saus||25,30',
      '#|Hollandse gerechten',
      '137|Friet met mayonaise||7,00', '138|Friet met Saté|2 stokjes|10,80', '139|Friet met kippenboutje||10,80', '140|Friet met 2 frikandellen||10,80']],
    ['Rijsttafels', 'stock-tafel.jpg', [
      '148|Chinese rijsttafel (1 pers.)|kroepoek, Foe Yong Hai, Tjap Tjoy, Babi Pangang, Koe Loe Yok, kip en saté|33,00',
      '149|Chinese rijsttafel (2 pers.)|kroepoek, Foe Yong Hai, Tjap Tjoy, Babi Pangang, gepaneerde Chinese garnalen (2 stuks), Koe Loe Yok, Gon Bao Kai en 2 stokjes saté|63,50',
      '150|Chinese rijsttafel (4 pers.)|kroepoek, Foe Yong Hai, Tjap Tjoy, Babi Pangang, Koe Loe Yok, gepaneerde Chinese garnalen (4 stuks), Gon Bao Kai en 4 stokjes saté|106,50',
      '151|Indische rijsttafel (1 pers.)|zonder Pisang Goreng en Foe Yong Hai|33,00',
      '152|Indische rijsttafel (2 pers.)|kroepoek, pinda\'s, kokos, Sayor, Gado Gado, Pisang Goreng, Babi Pangang, Ajam Pangang, Daging Roedjak, Daging Smoor, Foe Yong Hai, 4 stokjes saté, ananas en atjar|63,00',
      '153|Chinees-Indische rijsttafel (2 pers.)|kroepoek, Babi Pangang, Foe Yong Hai, Koe Loe Yok, Tjap Tjoy, Daging Roedjak, Daging Smoor, Sajor, 2 stokjes saté en Pisang Goreng|65,00',
      '154|Rijsttafel "China Garden" (6 pers.)|combinatie van de Chinese en Indische rijsttafel: kroepoek, Cha Siu, Babi Pangang, Tjap Tjoy, Gon Bao Kai, Foe Yong Hai, gepaneerde Chinese garnalen (6 stuks), Koe Loe Yok, Gado Gado, Daging Smoor, Daging Roedjak, ananas en atjar, 6 stokjes saté, Sayor, witte rijst, Bami of Nasi Goreng|148,00']],
    ['Keukenspecialiteiten', 'stock-eend.jpg', [
      '#|Kantonese keuken',
      '155|Fo Nam|gebakken magere spek|28,00', '156|Cha Siu|geroosterd varkensvlees|28,00', '157|Ye Ko You Ting|cashewnoten met varkenshaas|26,50',
      '158|Ye Ko Kai Ting|cashewnoten met kipfilet|26,50', '159|Ye Ko Ha Ting|cashewnoten met Chinese garnalen|33,00',
      '160|Babi "China Garden" voor 2 personen|Cha Siu, Babi Pangang en Fo Nam|53,50',
      '#|Szechuan keuken',
      '161|Gon Bao You|varkenshaas met Gon-Bao saus|26,50', '162|Gon Bao Kai|kipfilet met Gon-Bao saus|26,50', '163|Gon Bao Ngau|ossenhaas met Gon-Bao saus|32,80',
      '164|Gon Bao Ha|Chinese garnalen met Gon-Bao saus|34,50', '165|Hui Kuo You|varkenshaas met Hui-Kuo saus|26,50', '166|Hui Kuo Kai|kipfilet met Hui-Kuo saus|26,50',
      '#|Peking keuken',
      '167|Peking eend||31,50', '168|Chen Pi Ah|eend met sinaasappelsmaak|31,50', '169|Chen Pi Ngau|ossenhaas met sinaasappelsmaak|31,50',
      '170|King Do You|varkenshaas met zoetzure saus|27,00', '171|King Do Kai|kipfilet met zoetzure saus|27,00', '172|King Do Ha|garnalen met zoetzure saus|34,50',
      '#|Shanghai keuken',
      '173|San Shing|groenten met garnalen, vlees, ossenhaas en kippenvlees|28,50', '174|Ha Lok|gepelde Chinese garnalen met cognac en pikante saus|34,50',
      '175|Chou Yu Ping|tongfilet met garnalen, krab en groenten|34,50', '176|Gebakken vis|10 stuks, met pikante saus|30,00']]
  ];

  var chips = document.getElementById('chips');
  var list = document.getElementById('list');
  var q = document.getElementById('q');
  var sideImg = document.getElementById('sideImg');
  var current = 0;

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function rowHtml(line) {
    var p = line.split('|');
    if (p[0] === '#') return '<h4 class="sub">' + esc(p[1]) + '</h4>';
    var house = p[1].indexOf('China Garden') > -1;
    return '<div class="dish' + (house ? ' house' : '') + '">' +
      '<span class="nr">' + p[0] + '</span>' +
      '<span class="dn"><span class="name">' + esc(p[1]) + '</span>' + (p[2] ? '<span class="desc">' + esc(p[2]) + '</span>' : '') + '</span>' +
      '<span class="pr">€ ' + p[3] + '</span></div>';
  }
  function show(i) {
    current = i;
    [].forEach.call(chips.children, function (c, k) { c.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
    list.innerHTML = '<h3 class="cat-title">' + CATS[i][0] + '</h3>' + CATS[i][2].map(rowHtml).join('');
    sideImg.src = 'img/' + CATS[i][1];
  }
  CATS.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'chip'; b.setAttribute('role', 'tab'); b.textContent = c[0];
    b.addEventListener('click', function () { q.value = ''; show(i); });
    chips.appendChild(b);
  });
  q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase();
    if (!v) { show(current); return; }
    var out = [];
    CATS.forEach(function (c) {
      c[2].forEach(function (line) {
        var p = line.split('|');
        if (p[0] === '#') return;
        if (p[0].toLowerCase() === v || (p[1] + ' ' + p[2]).toLowerCase().indexOf(v) > -1) out.push(line);
      });
    });
    [].forEach.call(chips.children, function (c) { c.setAttribute('aria-selected', 'false'); });
    list.innerHTML = out.length
      ? '<h3 class="cat-title">' + out.length + (out.length === 1 ? ' gerecht' : ' gerechten') + ' gevonden</h3>' + out.map(rowHtml).join('')
      : '<p class="none">Geen gerecht gevonden voor "' + esc(q.value) + '". Probeer een ander woord of een nummer.</p>';
  });
  show(0);
})();
