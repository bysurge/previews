(function () {
  // ---------- Menu data (overgenomen van de menukaart, snackkaart en drankkaart van Onder de Ooievaar) ----------
  // Format: [naam, prijs, omschrijving, vegetarisch]
  var M = {
    broodjes: [
      ['Oude kaas van de boer', '7,40', 'Met Amsterdams zuur, gemengde sla en mosterdmayonaise', 1],
      ['Met jong belegen kaas', '6,40', '', 0, 'sub'],
      ['Geitenkaas', '7,80', 'Met appel-perenchutney, walnoot en gemengde sla', 1],
      ['Pittige kip Cajun', '7,80', 'Gebakken kipfilet, spek, tomaat, komkommer en Cajunsaus'],
      ['Kroket op brood', '8,20', '2 kroketten op wit of bruin casinobrood'],
      ['Paddenstoelenkroketjes met homemade saus', '8,90', '4 kroketjes op mais- of oerbrood', 1]
    ],
    special: [
      ['De Gehaktbal Speciaal', '11,00', '325 gram rund/varkensvlees in jus met ’t IJ Natte bier, met Amsterdams zuur, mosterd en brood', 0, 'star'],
      ['Hamburger / Cheeseburger met patat frites', '16,50', '150 gram rundvlees, spek, tomaat, gemengde sla, augurk en whiskey/ketchupsaus, patat frites, mayonaise. Cheeseburger met cheddar kaas'],
      ['Club sandwich', '11,00', 'Gerookte kipfilet, kaas, spek, ei, sla, tomaat en mayonaise'],
      ['Patat frites', '4,20', 'Met mayonaise', 1]
    ],
    tosti: [
      ['Kaas', '3,80', '', 1], ['Oude kaas', '4,00', '', 1], ['Ham', '3,80'], ['Ham/kaas', '4,00'],
      ['Kaas/tomaat', '3,90'], ['Kaas/ui', '3,90', '', 1], ['Kaas/salami', '4,00'],
      ['Kaas/gember', '4,00', '', 1], ['Kaas/ossenworst', '4,30']
    ],
    tostispec: [
      ['Saté tosti', '4,70', 'Kipsaté met satésaus'],
      ['Ei tosti', '4,90', 'Roerei met ham en/of kaas'],
      ['Geitenkaas tosti', '4,70', 'Met honing en walnoten', 1],
      ['Pittige kip Cajun tosti', '4,70', 'Kip met cheddarkaas, ui en jalapeños'],
      ['Vegetarische kip Cajun tosti', '4,70', 'Vega kip met cheddarkaas, ui en jalapeños', 1]
    ],
    warm: [
      ['Bitterballen (6)', '7,70'], ['Kaastengels (8)', '8,20', '', 1], ['Kipnuggets (6)', '7,20'],
      ['Vegetarische bitterballen (6)', '7,70', '', 1], ['Bospaddenstoelenkroketjes (6)', '8,20', '', 1],
      ['Geitenkaaskroketjes (6)', '8,20', '', 1], ['Bekbrandertjes (8)', '7,70'],
      ['Bittergarnituur', '17,70', 'Bitterballen, kaastengels, kipnuggets en bekbrandertjes, van elk 4 stuks'],
      ['Pittige runder-gehaktballetjes (8)', '9,20', 'Huisgemaakt']
    ],
    koud: [
      ['Jong belegen kaas', '6,70', '', 1], ['Oude kaas van de boer', '7,70', '', 1], ['Leverworst', '6,70'],
      ['Ossenworst', '7,90'], ['Combi', '7,70', 'Jonge kaas, leverworst en ossenworst']
    ],
    nuts: [
      ['Gotjé zoute pinda’s', '3,20', '', 1], ['Gotjé pittige mix', '3,70', '', 1], ['Gotjé gemengde nootjes', '4,70', '', 1]
    ],
    risottini: [
      ['Risottini ballen mozzarella-tomaat (6)', '8,20', '', 1], ['Risottini ballen truffel-bospaddenstoel (6)', '8,20', '', 1]
    ],
    uitsmijter: [
      ['Naturel', '9,50', '', 1], ['Naturel klein', '9,00', '', 1], ['Met ham', '+ 1,20'], ['Met kaas', '+ 1,20', '', 1],
      ['Met spek', '+ 1,20'], ['Met salami', '+ 1,20']
    ],
    pannenkoek: [
      ['Naturel', '8,30', '', 1], ['Met Nutella', '+ 1,20', '', 1], ['Met spek', '+ 1,20'], ['Met kaas', '+ 1,20', '', 1]
    ],
    poffertjes: [['Klein', '4,00', '', 1], ['Groot', '5,40', '', 1]],
    koffie: [['Taart', 'v.a. 4,20', '', 1]],
    warmedrank: [
      ['Thee', '3,40'], ['Verse muntthee', '3,80'], ['Verse gemberthee', '3,80'], ['Koffie', '3,60'], ['Grote koffie', '5,10'],
      ['Espresso', '3,40'], ['Dubbele espresso', '4,60'], ['Espresso macchiato', '3,50'], ['Cappuccino', '3,70'],
      ['Koffie verkeerd (latte)', '3,70'], ['Flat white', '4,70'], ['Latte macchiato', '4,50'], ['Extra shot koffie', '2,10'],
      ['Koffie decafé', '3,70'], ['Plantaardige melk in plaats van melk', '+ 0,70'],
      ['Satanskoffie', '4,70', 'Gember, slagroom'], ['Irish coffee', '8,70', 'Jameson, slagroom'], ['Extra slagroom', '0,70'],
      ['Chocolademelk', '4,10'], ['Melk', '2,30']
    ],
    fris: [
      ['Coca-Cola, Zero', '3,70'], ['7-Up, Sisi', '3,70'], ['Sourcy rood/blauw', '3,70'], ['Sourcy rood/blauw (0,75 l)', '6,40'],
      ['Rivella', '4,00'], ['Royal Club tonic, cassis', '3,70'], ['Bitter lemon, tomatensap', '3,70'], ['Bionade vlierbes', '3,90'],
      ['Bionade gember/sinaasappel', '3,90'], ['Red Bull', '5,20'], ['Verse jus', '4,20'], ['Verse jus groot', '6,10'],
      ['Appelsap', '3,80'], ['Perensap', '3,80'], ['Bundaberg Ginger Beer (37,5 cl)', '5,40']
    ]
  };

  // Tap: [naam, %, prijs]
  var TAP = [
    ['Vaasje Brand', '5,0', '4,10'], ['Fluitje Brand', '5,0', '4,00'], ['Pint Brand', '5,0', '7,60'],
    ['Vaasje Amstel', '5,0', '3,90'], ['Fluitje Amstel', '5,0', '3,80'], ['Pint Amstel', '5,0', '7,20'],
    ['Pitcher Amstel', '5,0', '21,00'], ['IJwit, Brouwerij ’t IJ', '6,5', '5,90']
  ];

  var BEERS = [
    ['Weizen / witbier', [['Brand Weizen', '5,0', '4,50'], ['La Trappe Wit', '5,5', '5,50'], ['Paulaner', '5,5', '5,50'], ['Tesselaar Strandstruner', '5,5', '5,80'], ['Texels Skuumkoppe', '6,0', '5,50']]],
    ['Blond', [['Achelse Blond', '8,0', '5,60'], ['Affligem Blond', '6,7', '5,50'], ['Duvel', '8,5', '5,80'], ['La Chouffe', '8,0', '5,70'], ['La Trappe Blond', '6,5', '5,60'], ['Lamme Goedzak', '7,0', '5,60'], ['Lellebel', '5,7', '6,20'], ['Maredsous Blond', '6,5', '5,60'], ['Moinette Blond', '8,5', '5,80'], ['Omer', '8,0', '5,80'], ['Poperings Hommel', '7,5', '5,60'], ['Tesselaar Grombaard', '5,0', '4,60']]],
    ['IPA / pale ale', [['Brand IPA', '7,0', '4,90'], ['Jopen Mooie Nel', '6,5', '5,90'], ['Oedipus Gaia', '7,0', '6,10'], ['IJ IPA', '6,5', '5,50'], ['IJ Calypso session IPA', '4,0', '4,90']]],
    ['Dubbel', [['Achel Brune', '8,0', '5,80'], ['Affligem Dubbel', '6,7', '5,70'], ['Brugse Zot Dubbel', '7,5', '5,70'], ['Chimay Rood', '7,0', '5,70'], ['La Trappe Dubbel', '7,0', '5,70'], ['Maredsous Brune', '8,0', '5,80'], ['Moinette Brune', '8,5', '5,80'], ['Rochefort 6', '7,5', '5,80'], ['IJ Natte', '6,5', '5,70']]],
    ['Tripel', [['Affligem Tripel', '9,0', '6,00'], ['Bruut Gajes', '8,0', '6,00'], ['Chimay Wit', '8,0', '5,80'], ['La Chouffe', '8,0', '5,80'], ['La Trappe Tripel', '8,0', '6,00'], ['Maredsous 10', '10,0', '6,00'], ['Oedipus Thai Thai', '8,0', '6,00'], ['Westmalle Tripel', '9,5', '6,10'], ['Zeezuiper', '8,0', '5,80'], ['Zundert', '8,0', '7,60'], ['Zatte', '8,0', '5,90']]],
    ['Amber', [['Orval', '6,2', '6,20'], ['Rumoerige Roodborst', '5,8', '6,50']]],
    ['Barley wine / quadrupel', [['Chimay Blauw', '9,0', '6,20'], ['La Trappe Quadrupel', '10,0', '6,40'], ['Rochefort 10', '11,3', '7,50'], ['Rochefort 8', '9,2', '6,40']]],
    ['Saison', [['Bruut Saison', '5,5', '5,60'], ['Saison Dupont', '6,5', '5,80'], ['Mannenliefde', '6,0', '5,70']]],
    ['Stout', [['Guinness Origin', '5,0', '5,80'], ['Van Vollenhoven Stout', '7,1', '6,00']]],
    ['Fruitbier', [['Bacchus Frambozen', '5,0', '7,90'], ['Liefmans Fruitesse', '3,8', '5,00'], ['Oedipus Polyamorie', '5,0', '5,80'], ['St. Louis Kriek', '4,0', '4,90']]],
    ['Diversen', [['Cider Apple Bandit', '4,5', '4,60'], ['Cider Magners', '4,5', '5,00'], ['Vedett', '5,2', '5,00'], ['Corona', '4,5', '5,80']]],
    ['Alcoholarm en -vrij', [['Brand Weizen', '0,0', '4,30'], ['Heineken', '0,0', '3,80'], ['Jopen Non IPA', '0,3', '5,30'], ['Radler', '0,0', '3,80'], ['Radler', '2,0', '3,80'], ['IJ Vrijwit', '0,5', '5,30'], ['Juice Punch Neipa', '0,5', '4,90'], ['Affligem Belgisch Wit', '0,0', '4,30']]]
  ];

  // Wijn: [soort, [naam, glas, fles]]
  var WINE = [
    ['Wit', [['Brigantello Grillo Sicilia', '4,90', '23,80'], ['Touraine Sauvignon Blanc', '5,80', '28,80'], ['La Côte Chardonnay', '6,20', '31,00'], ['Prosecco', '5,30', '26,00']]],
    ['Rosé', [['Tiberius Rosé', '5,00', '25,00']]],
    ['Rood', [['Nero d’Avola Oltremare Sicilia', '4,90', '23,80'], ['Rioja Crianza ‘Letargo’', '5,80', '28,80']]]
  ];

  var SPIRITS = [
    ['Jenever', [['Bols Corenwijn', '4,10'], ['Bols Zeer Oud', '4,00'], ['Filliers Oude Graanjenever', '4,10'], ['Ketel 1', '3,50'], ['Zuidam Korenwijn 5 jaar', '4,90']]],
    ['Gin', [['Bombay Sapphire', '6,10'], ['Gordon’s Gin', '5,70']]],
    ['Tequila', [['Cuervo Silver', '5,70'], ['Cuervo Gold', '5,70']]],
    ['Vodka', [['Wyborowa', '5,70'], ['Zubrowka', '5,70']]],
    ['Rum', [['Bacardi', '5,70'], ['Captain Morgan Dark', '5,70'], ['Captain Morgan Spiced', '5,70'], ['Old Captain Brown', '5,70'], ['Havana Club 7 jaar', '6,10'], ['Havana Club Añejo Blanco', '5,70']]],
    ['Port, sherry, vermout', [['Martini Rosso', '4,70'], ['Martini Dry', '4,70'], ['Martini Bianco', '4,70'], ['Kopke Ruby Red Port', '4,70']]],
    ['Cognac en meer', [['Courvoisier', '5,80'], ['Janneau Armagnac VSOP', '6,80'], ['Martell VS', '6,20'], ['Père Magloire VS calvados', '5,70'], ['Rémy Martin VSOP', '6,70']]],
    ['Whisky', [['Bushmills 10 jaar', '7,20'], ['Chivas Regal', '7,20'], ['Famous Grouse', '6,00'], ['Glenfiddich', '7,00'], ['Jack Daniel’s', '7,20'], ['Jameson', '6,00'], ['Johnnie Walker Red', '6,00'], ['Johnnie Walker Black', '7,00']]],
    ['Diversen', [['Beerenburg', '3,70'], ['Campari', '4,70'], ['Coebergh bessen', '3,70'], ['De Kuyper vieux', '3,70'], ['Jägermeister', '4,10'], ['Ricard', '5,40'], ['Underberg', '4,10']]],
    ['Likeuren', [['Amaretto Disaronno', '5,10'], ['Baileys', '5,10'], ['Cachaça 51', '5,50'], ['Cointreau', '5,30'], ['Drambuie', '5,30'], ['Grand Marnier Rouge', '6,50'], ['Kahlúa', '4,50'], ['Licor 43', '4,90'], ['Malibu', '4,70'], ['Passoa', '4,70'], ['Safari', '4,70'], ['Sambuca Molinari', '4,90'], ['Southern Comfort', '5,50'], ['Tia Maria', '5,10'], ['Salmari', '3,90']]]
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function price(p) { return p.charAt(0) === '+' || p.indexOf('v.a.') === 0 ? p.replace('+ ', '+ € ').replace('v.a. ', 'v.a. € ') : '€ ' + p; }

  function itemHTML(it) {
    var cls = 'item' + (it[4] ? ' ' + it[4] : '');
    return '<li class="' + cls + '"><span class="i-name">' + esc(it[0]) +
      (it[3] ? ' <span class="veg" title="vegetarisch">V</span>' : '') + '</span>' +
      '<span class="i-dots" aria-hidden="true"></span><span class="i-price">' + price(it[1]) + '</span>' +
      (it[2] ? '<span class="i-desc">' + esc(it[2]) + '</span>' : '') + '</li>';
  }

  document.querySelectorAll('[data-menu]').forEach(function (el) {
    var key = el.getAttribute('data-menu');
    if (key === 'tap') {
      el.innerHTML = TAP.map(function (b) {
        return '<div class="tap"><span class="tap-name">' + esc(b[0]) + '</span><span class="tap-abv">' + b[1] + '%</span><span class="tap-price">€ ' + b[2] + '</span></div>';
      }).join('');
      return;
    }
    if (!M[key]) return;
    el.insertAdjacentHTML('beforeend', '<ul class="items">' + M[key].map(itemHTML).join('') + '</ul>');
  });

  function beerGroups(data, withAbv) {
    return data.map(function (g) {
      return '<div class="menu-group dark"><h3>' + esc(g[0]) + '</h3><ul class="items">' + g[1].map(function (b) {
        return '<li class="item"><span class="i-name">' + esc(b[0]) + (withAbv ? ' <span class="abv">' + b[1] + '%</span>' : '') + '</span><span class="i-dots" aria-hidden="true"></span><span class="i-price">€ ' + (withAbv ? b[2] : b[1]) + '</span></li>';
      }).join('') + '</ul></div>';
    }).join('');
  }
  var bc = document.querySelector('[data-beers]'); if (bc) bc.innerHTML = beerGroups(BEERS, true);
  var sc = document.querySelector('[data-spirits]'); if (sc) sc.innerHTML = beerGroups(SPIRITS, false);
  var wc = document.querySelector('[data-wine]');
  if (wc) wc.innerHTML = '<table class="wine-table"><thead><tr><th></th><th>Glas</th><th>Fles</th></tr></thead>' + WINE.map(function (g) {
    return '<tbody><tr class="wine-kind"><th colspan="3">' + g[0] + '</th></tr>' + g[1].map(function (w) {
      return '<tr><th>' + esc(w[0]) + '</th><td>€ ' + w[1] + '</td><td>€ ' + w[2] + '</td></tr>';
    }).join('') + '</tbody>';
  }).join('') + '</table>';

  // ---------- Tabs ----------
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = [].slice.call(list.querySelectorAll('[role=tab]'));
    function select(t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (n === null) return;
        var nt = tabs[(n + tabs.length) % tabs.length]; select(nt); nt.focus(); e.preventDefault();
      });
    });
  });

  // ---------- Mobile menu ----------
  var tog = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  tog.addEventListener('click', function () {
    var open = tog.getAttribute('aria-expanded') !== 'true';
    tog.setAttribute('aria-expanded', open); document.body.classList.toggle('nav-open', open);
    tog.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      tog.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); tog.setAttribute('aria-label', 'Menu openen');
    });
  });

  // ---------- Header shade on scroll ----------
  var top = document.querySelector('.top');
  function shade() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', shade, { passive: true }); shade();

  // ---------- Open now ----------
  // [opent, sluit] in minuten; sluiten na middernacht = > 1440
  var H = { 0: [630, 1500], 1: [600, 1500], 2: [600, 1500], 3: [600, 1500], 4: [600, 1500], 5: [600, 1620], 6: [600, 1620] };
  function fmt(m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + m % 60).slice(-2); }
  var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
  var yd = (d + 6) % 7, msg;
  if (m + 1440 < H[yd][1]) msg = 'Nu open, tot ' + fmt(H[yd][1]);
  else if (m >= H[d][0]) msg = 'Nu open, tot ' + fmt(H[d][1]) + (m < 1020 ? ', keuken tot 17:00' : '');
  else msg = 'Vandaag open vanaf ' + fmt(H[d][0]);
  var on = document.getElementById('openNow'); if (on) { on.textContent = msg; on.classList.add('is-live'); }
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('today');

  // ---------- Form (voorbeeld) ----------
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('formMsg').hidden = false; });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
