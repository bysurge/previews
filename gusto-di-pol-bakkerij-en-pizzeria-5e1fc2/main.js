// Gusto di Pol preview: mobiel menu + menukaart-tabs.
(function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // Regels: "naam|omschrijving|prijs|v"  -  "# kop|script-onderschrift"  -  "! notitie"  -  "@ foto.jpg"
  var MENU = [
    ['Ontbijt', [
      '# Ontbijt|tot 11.00 uur',
      'Ontbijtje van Pol|mandje met desembrood van bakker Pol, croissant of chocoladebroodje, ham, kaas, jam, yoghurt met granola en vers fruit, jus d\'orange en keuze uit koffie of thee (roerei + 2,00)|14,50',
      'Ontbijtje van Pol de luxe|mandje met desembrood, croissant of chocoladebroodje, ham, kaas, jam, yoghurt met granola en vers fruit, Mimosa, gerookte zalm en keuze uit koffie of thee (roerei + 2,00)|19,50',
      'Yoghurt|yoghurt met granola en vers fruit|8,50',
      'Croissant|met chocoladepasta of jam|3,75',
      'Chocoladebroodje||3,00',
      'Gevulde croissant|met pistache crème|4,00',
      '@ stock-focaccia.jpg']],
    ['Lunch', [
      '# Lunch|11.30 - 15.00 uur',
      '! * Keuze uit focaccia, desem wit of desem bruin van bakker Pol',
      'Carpaccio di Manzo*|dun gesneden rundvlees, cherry tomaat, pijnboompit, truffel-mayo, parmezaan, sla|13,00',
      'Club Gusto*|gegrilde kippendij, guanciale, eiersalade, rode ui, sla|13,50',
      'Pastrami*|runder pastrami, mosterd ricotta, fontina, tomaat, pijnboompitten, ingelegde rode ui, rucola|13,85',
      'Vitello Tonnato*|dun gesneden kalfsvlees, tonijnsaus, olijven, gefrituurde kappertjes en sla|13,00',
      'Italian Steak Sandwich*|rib-eye, paprika, rode ui, jalapeñomayo, provolone|13,75',
      'Bruschetta pesto di barbabietola|getoast brood met rode biet pesto, geitenkaas, walnoten|11,75|v',
      'Bruschetta pesto di finocchio con carne cruda|getoast brood met venkel pesto, rundertartaar, amandelen, rucola|13,00',
      'Salmone*|gerookte zalm, radijs, kruiden ricotta, citroenmayo, gefrituurde kappertjes, sla|13,85',
      'Tuna Melt*|tonijnsalade, mozzarella, paprika, sla|13,00',
      'Mozzarella di Bufala*|buffelmozzarella, pesto, cherry tomaat, basilicum, balsamico, sla|12,00|v',
      'Oesterzwamkroketten|getoast brood met oesterzwamkroketten, truffelmayo|12,75|v',
      'Soep van de dag||7,50',
      '# Tosti|wit of bruin desembrood',
      'Tosti kaas||5,50|v', 'Tosti ham/kaas||6,50', 'Tosti Caprese|tomaat, buffelmozzarella, basilicum, pesto|6,75|v', 'Tosti Ventricina|pikante salami, tomatensalsa en kaas|7,50',
      '# Lunch|Bambini',
      'Boterham|met jam of chocoladepasta|3,25', 'Croissant|met jam of chocoladepasta|3,75',
      '! Wist je dat onze salades ook te bestellen zijn als lunchgerecht?']],
    ['Antipasti', [
      '# Antipasti|vanaf 15.00 uur',
      '! Om heerlijk te delen of lekker bij een borrel.',
      'Pane met kruidenboter|brood van Pol|5,75|v', 'Pane met olijfolie en gerookt zeezout|brood van Pol|6,00|v', 'Pane met pesto|brood van Pol|6,00|v',
      'Olive|Nocellara del Belice, kruidenolie|5,00|v',
      'Focaccia|olijven, rozemarijn, tijm, zeezout|7,50|v',
      'Borrelplank|charcuterie, kaas, gegrilde groenten, taralli, olijven|19,75',
      'Bruschetta Tomaat (2 stuks)|tomaten salsa, basilicum, buffel mozzarella, pesto|6,50|v',
      'Bruschetta pesto di barbabietola (2 stuks)|rode biet pesto, geitenkaas, walnoten|7,00|v',
      'Bruschetta pesto di finocchio con carne cruda (2 stuks)|venkel pesto, rundertartaar, amandel|8,50',
      'Carpaccio di Manzo|dun gesneden rundvlees, truffelmayo, pijnboompit, cherry tomaat, rucola en parmezaan|13,00',
      'Arancini Tartufo (4 stuks)|gefrituurde truffel risotto balletjes met parmezaan, pecorino, kervel, truffel mayo|12,50|v',
      'Arancini Gamberi (4 stuks)|gefrituurde saffraan risotto balletjes met parmezaan, gamba\'s, citrusmayo|12,50',
      'Calamari fritti|gefrituurde calamari, aioli, kombu, citroen|9,75',
      'Vitello tonnato|dun gesneden kalfsvlees, olijven, gefrituurde kappertjes, tonijnmayonaise, rucola|13,75',
      'Tonno|gegrilde tonijn, paprika, artisjok, rucola, fregola|15,75',
      'Polpette di melanzane (4 stuks)|gefrituurde aubergineballetjes met parmezaan, puttanesca saus|11,00|v',
      'Burrata e pane Carasau|burrata, cherry tomaat, rucola, pesto, pane Carasau (met Parmaham + 2,50)|15,75',
      'Italian fried Chicken|gefrituurde kippendij, pikante saus|9,75',
      'Italian Fries|frietjes, truffel-mayo, parmezaan|6,75',
      'Soep van de dag||7,50',
      '@ stock-antipasti.jpg']],
    ['Pizza', [
      '! Pizza vanaf 16.00 uur te bestellen. Ons pizzadeeg wordt gemaakt door de ambachtelijke bakkers van Pol: desem, met 48 uur de tijd. De mozzarella is fior di latte, romige melk.',
      '# Pizza|Classics',
      'Margherita|tomatensaus, fior di latte, basilicum|9,95|v',
      'Salami|tomatensaus, fior di latte, salami Milano|12,25',
      'Quattro Stagioni|tomatensaus, fior di latte, paddenstoel, artisjok, prosciutto cotto, paprika|14,50',
      'Napoletana|tomatensaus, fior di latte, ansjovis, kappertjes, zwarte olijf, rode ui|13,25',
      'Diavola|tomatensaus, fior di latte, N\'duja, salami Ventricina, salami Milano, chili-jam|15,25',
      'Formaggi|taleggio, gorgonzola piccante, pecorino, fior di latte, rucola|15,00|v',
      'Tonno|tomatensaus, fior di latte, tonijn, rode ui, kappertjes|14,75',
      'Prosciutto di Parma|tomatensaus, fior di latte, prosciutto di Parma, cherry, rucola, parmezaan|16,00',
      'Vegetariana|tomatensaus, fior di latte, aubergine, paprika, courgette, olijf|14,75|v',
      '# Pizza|Calzone',
      'Classic|tomatensaus, fior di latte, prosciutto cotto, paddenstoel, salami Milano, courgette, rode ui|15,75',
      '# Pizza|Specials',
      'Gorgonzola e pere|gorgonzola, peer, rucola, fior di latte, balsamico|14,00|v',
      'Pollo|tomatensaus, fior di latte, kip, pesto, courgette, parmezaan|15,25',
      'Matteo|tomatensaus, piccante salami, n\'duja, gorgonzola, fior di latte, gekonfijte ui|16,75',
      'Burrata (kan vega)|tomatensaus, burrata, prosciutto di Parma, truffelolie, cherry tomaat, rucola|17,75',
      'Bresaola|tomatensaus, fior di latte, bresaola, geitenkaas, cherry tomaat, pijnboompitten, rucola|16,75',
      'Pumpkin Jack|pompoensaus, geitenkaas, pompoenpitten, spicy honing|16,50',
      'Tartufo|paddenstoelen, taleggio, fior di latte, truffelsalami, truffel olie, rucola|17,50|v',
      'Patate|truffelaardappelen, room, taleggio, guanciale, rozemarijn, rode ui, truffelaardappelchips|16,50',
      '# Pizza/Pasta|Bambini',
      'Pasta bolognese|pasta met tomatensaus met gehakt|8,75', 'Pizza Margherita|tomatensaus, fior di latte|8,25|v', 'Pizza Salami|tomatensaus, salami Milano, fior di latte|8,75',
      '@ stock-deegbal.jpg']],
    ['Pasta & insalate', [
      '# Pasta|',
      'Pasta alla Bolognese|ragu alla Bolognese, parmezaan, basilicum|17,50',
      'Rode biet pesto-geitenkaas|rode biet pesto, geitenkaas, walnoten|16,50|v',
      'Gamberi (kan vega)|gamba, pittige aioli, cherry tomaat, courgette|19,00',
      'Puttanesca con tonno alla griglia|tomaten, ansjovis, olijven, chilli, kappertjes, peterselie, gegrilde tonijn|19,00',
      'Wildstoof|wild zwijn en hert stoof, Parmezaan|19,00',
      '# Insalate|met brood van bakker Pol',
      'Capra|geitenkaas, paddestoelen, guanciale, croutons, mix sla, honing mosterd dressing|18,50|v',
      'Pesce|gegrilde tonijn, gamba\'s, artisjok, paprika, olijven, mix sla, citroen-kappertjes dressing|19,50',
      'Burrata|burrata, gegrilde rode biet, sinaasappel, pistachenoten, sla|18,50|v',
      'Side salad|gegrilde groenten, mix sla|8,50|v',
      '@ stock-oven.jpg']],
    ['Dolce', [
      '# Il Dolce|',
      'Cannoli||2,50', 'Affogato|vanille ijs overgoten met een espresso|5,75',
      'Baileys affogato|vanille ijs, baileys, espresso, hazelnoot crunch|6,75',
      'Meringue ijscoupe|vanille ijs, kaneel ijs, stoofpeer, huisgemaakte meringue, slagroom|9,00',
      'IJsgebak||5,50', 'Pol\'s favorites (min. 2 personen)|selectie van Pol\'s favoriete taartjes en desserts|9,75 p.p.',
      'Macaron al pistacchio|grote macaron gevuld met huisgemaakt pistache ijs|7,50',
      'Brownie|met karamelijs, peer en witte chocoladesaus|9,00', 'Tiramisu||7,00',
      'Coupe bambino|bolletje ijs naar keuze met discodip en slagroom|3,00',
      '# Liquid|desserts',
      'Scroppino|citroen sorbet, limoncello, prosecco|8,75', 'Vin Santo & cantuccini||9,50', 'Espresso Martini|espresso, vanille wodka, Tia Maria|9,50',
      '@ stock-tiramisu.jpg']],
    ['Koffie & fris', [
      '# Koffie/thee|',
      'Koffie||3,25', 'Koffie verkeerd||3,75', 'Espresso||3,00', 'Dubbele espresso||3,50', 'Espresso macchiato||3,25', 'Cappuccino||3,60',
      'Latte macchiato||3,75', 'Flat White||3,75', 'Babyccino||2,50', 'Chai latte||4,00', 'Matcha latte||4,00', 'Dirty chai latte||4,25',
      'Koffie speciaal|keuze uit vanille, amaretto of karamel|4,25', 'Italian Coffee||7,50',
      'Warme chocomelk|+ slagroom 0,50 / + marshmallow 0,25|3,75', 'Thee||3,25', 'Verse munt thee||3,75', 'Verse gember thee||3,75',
      'Verse gember thee met sinaasappel||4,00', 'Verse gember thee met sinaasappel, kaneel||4,25', 'Verse munt thee met sinaasappel, kaneel||4,25',
      '# Voor bij de koffie|',
      'Taartje van Pol|dagelijks wisselend assortiment gebakjes van Pol|4,75', 'IJsgebak|dagelijks wisselend huisgemaakt ijsgebak|5,50',
      'Cannoli|keuze uit verschillende smaken|2,50', 'Muffin||3,00', 'Brownie||3,00', 'Gevulde croissant|met pistache crème|4,00',
      '! Wist je dat... wij in onze winkel ook Italiaans brood, croissantjes en taartjes verkopen voor thuis?',
      '# Lekker fris|',
      'Cola||3,50', 'Cola zero||3,50', 'San Pellegrino aranciata||3,75', 'San Pellegrino aranciata rossa||3,75', 'San Pellegrino tonica||3,75',
      'San Pellegrino limonata||3,75', 'Cassis||3,50', 'Ranja||1,25', 'Fuze tea sparkling||3,50', 'Fuze tea green||3,50', 'Chocomel||3,50',
      'Fristi||3,50', 'Appelsap||3,50', 'Rivella||3,50', 'Ginger beer||3,75', 'Crodino||4,00', 'Verse jus d\'orange||4,25',
      'Milkshake|slagroom + 0,50|4,50', 'Smoothies|aardbei/banaan of ananas/mango|5,00',
      '# Water|',
      'San Pellegrino frizzante 0,75 L||6,00', 'San Pellegrino frizzante 0,25 L||3,00', 'Acqua Panna 0,75 L||6,00', 'Acqua Panna 0,25 L||3,00',
      '@ stock-latte.jpg']],
    ['Wijn & bar', [
      '! Wijnprijzen: per glas / per fles.',
      '# Vino|bianco',
      'Pinot grigio||5,00 / 24,00', 'Vermentino||5,00 / 24,00', 'Chardonnay||5,50 / 25,00', 'Gavi di Gavi||7,00 / 34,00',
      'La Pruina Non T\'aspetti Negroamaro Bianco||7,25 / 35,00', 'Poggio le Volpi Donnaluce||7,25 / 35,00',
      '# Vino|rosato',
      'Pinot grigio blush||5,50 / 27,00',
      '# Vino|rosso',
      'Montepulciano d\'Abruzzo||5,00 / 24,00', 'Primitivo||5,50 / 26,00', 'Salice Salentino||5,75 / 27,50', 'Ruota Libera appassimento||6,25 / 30,00',
      'Cantine Povero Barbera d\'Asti Marida||6,75 / 33,00',
      '# Bollicine & dessertwijn|',
      'Prosecco||6,75 / 33,00', 'Tawny reserve port||6,50', 'Sensi Vin Santo del Chianti||6,75',
      '# Cocktails|& aperitivo',
      'Pornstar martini||11,50', 'Aperol spritz||8,25', 'Limoncello Fizz||9,25', 'Espresso Martini||9,50', 'Scroppino||8,75',
      'Gin tonic|Bombay gin, San Pellegrino tonica|9,75', 'Virgin Gin tonic|alcoholvrij|8,50', 'Crodino|alcoholvrij|3,50',
      '# Birra|',
      'Peroni van de tap 25 cl||3,75', 'Peroni van de tap 50 cl||6,50', 'Brugse Zot blond||5,00', 'Boschdal extra||4,95', 'Boschdal wit||5,25',
      'Boschdal tripel||6,75', 'Boschdal quadrupel||8,50', 'Rosé de Bruges||4,25', 'Jopen Blurred Lines NEIPA||6,75', 'Jopen Mooie Nel IPA||6,25',
      'Peroni 0,0%|alcoholvrij|3,50', 'Jopen Non IPA|alcoholvrij|5,50',
      '# Liquori|',
      'Grappa||4,75', 'Amaretto||4,50', 'Tia Maria||4,50', 'Limoncello Koremans|bekroond in 2021 met een gouden medaille tijdens de International Wine and Spirit Competition|4,75',
      '@ stock-wijn.jpg']]
  ];

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function render(lines) {
    var html = '', pic = '';
    lines.forEach(function (l) {
      if (l.charAt(0) === '@') { pic = l.slice(2); return; }
      if (l.charAt(0) === '!') { html += '<p class="m-note">' + esc(l.slice(2)) + '</p>'; return; }
      if (l.charAt(0) === '#') {
        var h = l.slice(2).split('|');
        html += '<h3 class="m-head">' + esc(h[0]) + (h[1] ? ' <span class="m-script">' + esc(h[1]) + '</span>' : '') + '</h3>';
        return;
      }
      var p = l.split('|');
      html += '<div class="m-item"><div class="m-line"><span class="m-name">' + esc(p[0]) + (p[3] ? ' <span class="v" title="vegetarisch">v</span>' : '') +
        '</span><span class="m-dots"></span><span class="m-price">' + p[2] + '</span></div>' +
        (p[1] ? '<p class="m-desc">' + esc(p[1]) + '</p>' : '') + '</div>';
    });
    return '<div class="m-cols">' + html + '</div>' + (pic ? '<div class="m-pic"><img src="img/' + pic + '" alt=""></div>' : '');
  }

  var tabs = document.getElementById('tabs');
  var panel = document.getElementById('panel');
  function show(i) {
    [].forEach.call(tabs.children, function (t, k) { t.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
    panel.innerHTML = render(MENU[i][1]);
  }
  MENU.forEach(function (m, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.setAttribute('role', 'tab'); b.textContent = m[0];
    b.addEventListener('click', function () { show(i); });
    tabs.appendChild(b);
  });
  show(3); // pizza eerst: het hart van de kaart
})();
