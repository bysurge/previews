(function () {
  // mobile menu
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Menu openen');
    });
  });

  // opening hours: today
  var hours = { 0: [17, 22], 1: null, 2: [17, 22], 3: [17, 22], 4: [17, 22], 5: [17, 22.5], 6: [17, 22.5] };
  var now = new Date();
  var d = now.getDay();
  var h = now.getHours() + now.getMinutes() / 60;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
  var t = document.getElementById('today');
  var fmt = function (x) { return Math.floor(x) + ':' + (x % 1 ? '30' : '00'); };
  if (hours[d] && h >= hours[d][0] && h < hours[d][1]) {
    t.textContent = 'Nu open tot ' + fmt(hours[d][1]);
    t.classList.add('open');
  } else if (hours[d] && h < hours[d][0]) {
    t.textContent = 'Vandaag open van 17:00 tot ' + fmt(hours[d][1]) + ', afhalen vanaf 16:00';
  } else {
    var n = (d + 1) % 7;
    while (!hours[n]) n = (n + 1) % 7;
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    t.textContent = (n === (d + 1) % 7 ? 'Morgen' : 'Weer open op ' + names[n] + ',') + ' vanaf 17:00 open';
    if (n !== (d + 1) % 7) t.textContent = 'Weer open op ' + names[n] + ' vanaf 17:00';
  }

  // menu tabs
  var tabs = document.querySelectorAll('.tabs [role=tab]');
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (o) {
        o.setAttribute('aria-selected', o === b ? 'true' : 'false');
        document.getElementById(o.getAttribute('aria-controls')).hidden = o !== b;
      });
    });
  });

  // sharing selection
  var sel = {};
  var tray = document.getElementById('tray');
  var euro = function (c) { return '€ ' + (c / 100).toFixed(2).replace('.', ','); };
  function update() {
    var n = 0, sum = 0;
    Object.keys(sel).forEach(function (k) { n += sel[k].n; sum += sel[k].n * sel[k].c; });
    tray.hidden = n === 0;
    document.getElementById('tray-count').textContent = n + (n === 1 ? ' gerecht' : ' gerechten');
    document.getElementById('tray-sum').textContent = euro(sum);
  }
  document.querySelectorAll('.menu li').forEach(function (li, i) {
    var name = li.querySelector('b').textContent;
    var cents = Math.round(parseFloat(li.querySelector('i').textContent.replace(',', '.')) * 100);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'add';
    btn.textContent = '+';
    btn.setAttribute('aria-label', name + ' toevoegen aan uw selectie');
    btn.addEventListener('click', function () {
      if (!sel[i]) sel[i] = { n: 0, c: cents };
      sel[i].n += 1;
      if (sel[i].n > 9) { sel[i].n = 0; }
      btn.dataset.n = sel[i].n;
      btn.textContent = sel[i].n ? sel[i].n + '×' : '+';
      update();
    });
    li.appendChild(btn);
  });
  document.getElementById('tray-clear').addEventListener('click', function () {
    sel = {};
    document.querySelectorAll('.add').forEach(function (b) { b.dataset.n = 0; b.textContent = '+'; });
    update();
  });

  // demo form
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Mail of bel ons gerust.';
  });
})();
