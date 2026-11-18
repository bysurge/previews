(function () {
  var MENU = [
    ['Bieren', [['Carlsberg', '3,50'], ['Corona', '4,80'], ['Desperados', '4,80'], ['Duvel 666', '5,50'], ['Duvel', '5,50'], ['Erdinger 50', '6,-'], ['Fourchette', '5,50'], ['Halve Liter', '5,50'], ['Hertog Jan', '2,80'], ['Jupiler', '2,70'], ['Karmeliet', '5,50'], ['Kriek Max', '4,-'], ['La Chouffe', '5,50'], ['La Trappe Blond', '5,50'], ['La Trappe Dubbel', '5,50'], ['La Trappe Trippel', '5,50'], ['Liefmans', '4,-'], ['Raddler 2.0', '2,70'], ['Sluitje', '2,60'], ['Vaasje', '2,80']]],
    ['0.0% / 0.5%', [['Erdinger AV 0.5', '5,50'], ['Hertog Jan 0.0', '2,60'], ['Raddler 0.0', '2,60']]],
    ['Brood', [['Broodje Frikandel', '4,-'], ['Broodje Kroket', '4,-'], ['Cheeseburger', '4,50'], ['Chickenburger', '4,50'], ['Hamburger', '4,-'], ['Portie Friet', '3,50'], ['Tosti Ham/Kaas', '4,-'], ['Vlam Tosti', '4,50']]],
    ['Snacks', [['Bitterballen 12st', '6,50'], ['Frikandel Stukjes 12st', '6,50'], ['Kipnuggets 12st', '6,50'], ['Snack Mix 12st', '6,50'], ['Snack Mix 25st', '14,-'], ['Snack Mix 40st', '19,50'], ['Vlammetjes 12st', '8,-']]],
    ['Koude dranken', [['AA Drink', '3,50'], ['Appelsap', '2,70'], ['Bitterlemon', '2,70'], ['Chocomel', '2,70'], ['Fris', '2,60'], ['Ice Tea / Green', '2,70'], ["Jus d'orange", '2,70'], ['Red Bull', '4,25'], ['Tonic', '2,70'], ['Tonissteiner', '2,70']]],
    ['Warme dranken', [['Cappuccino', '2,70'], ['Espresso', '2,50'], ['Koffie', '2,40'], ['Thee', '2,40']]],
    ['Wijn', [['Rode wijn', '4,-'], ['Rosé wijn', '4,-'], ['Witte wijn zoet/droog', '4,-']]],
    ['Rum', [['Bacardi Lemon', '5,50'], ['Bacardi Razz', '5,50'], ['Bacardi', '5,50'], ['Captain Morgan', '5,50']]],
    ['Whiskey', [['Ballantines', '6,50'], ['Jack Daniels', '6,50']]],
    ['Diversen', [['Diverse likeuren', '5,50'], ['Mixdranken', '6,-'], ['Shots', '2,90']]]
  ];
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });

  var cats = document.getElementById('cats'), list = document.getElementById('menu-list');
  function show(i) {
    Array.prototype.forEach.call(cats.children, function (b, j) { b.setAttribute('aria-pressed', j === i); });
    var c = MENU[i];
    list.innerHTML = '<h3 class="cat-title">' + esc(c[0]) + '</h3><ul class="items">' + c[1].map(function (it) {
      return '<li><span class="nm">' + esc(it[0]) + '</span><span class="dots"></span><span class="pr">€ ' + esc(it[1]) + '</span></li>';
    }).join('') + '</ul>';
  }
  MENU.forEach(function (c, i) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'pill'; b.textContent = c[0];
    b.addEventListener('click', function () { show(i); }); cats.appendChild(b);
  });
  show(0);

  // open nu? (tijden: ma/wo/vr/zo 18:30, di/do 14:00, za 13:00, alle dagen tot 01:00)
  var start = { 0: 18.5, 1: 18.5, 2: 14, 3: 18.5, 4: 14, 5: 18.5, 6: 13 };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60, open = false, txt = '';
  if (h < 1 && h >= 0) { open = true; txt = 'Nu open, tot 01:00'; }
  else if (h >= start[d]) { open = true; txt = 'Nu open, tot 01:00'; }
  else { var hh = start[d], m = Math.round((hh % 1) * 60); txt = 'Vandaag open vanaf ' + Math.floor(hh) + ':' + (m ? m : '00'); }
  ['open-chip', 'open-chip2'].forEach(function (id) { var e = document.getElementById(id); e.textContent = txt; e.classList.toggle('is-open', open); e.hidden = false; });
  var rowD = (h < 1) ? (d + 6) % 7 : d;
  var tr = document.querySelector('#hours tr[data-d="' + rowD + '"]'); if (tr) tr.classList.add('today');

  document.getElementById('contact-form').addEventListener('submit', function (e) { e.preventDefault(); e.target.querySelector('.form-msg').hidden = false; });
})();
