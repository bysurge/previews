(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Tabs (each tablist on its own)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role=tab]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (n) { e.preventDefault(); select(n); n.focus(); }
      });
    });
  });

  // Shared dining: rounds and price
  var plans = {
    3: ['voor', 'hoofd', 'dessert'],
    4: ['voor', 'keuze', 'hoofd', 'dessert'],
    5: ['voor', 'voor', 'hoofd', 'hoofd', 'dessert']
  };
  var names = { voor: 'Voorgerechtjes', keuze: 'Naar keuze', hoofd: 'Hoofdgerechtjes', dessert: 'Desserts' };
  var prices = { week: { 3: '38,50', 4: '41,50', 5: '44,50' }, weekend: { 3: '41,50', 4: '43,50', 5: '46,50' } };
  var dayNames = { week: 'ma, do en zo', weekend: 'vr en za' };
  var state = { gangen: 4, dag: 'week' };
  var wd = new Date().getDay();
  if (wd === 5 || wd === 6) state.dag = 'weekend';

  var rondes = document.getElementById('rondes');
  function render() {
    if (!rondes) return;
    var plan = plans[state.gangen];
    var lastHoofd = plan.lastIndexOf('hoofd');
    rondes.innerHTML = plan.map(function (k, i) {
      var extra = i === lastHoofd ? '<span class="extra">met friet en gebakken aardappels op tafel</span>' : '';
      return '<li class="' + (k === 'keuze' ? 'keuze' : '') + '"><span class="nr">Ronde ' + (i + 1) + '</span>' +
        '<span class="wat">' + names[k] + '</span>' +
        '<span class="bordjes" aria-label="3 gerechtjes per persoon"><i></i><i></i><i></i></span>' + extra + '</li>';
    }).join('');
    document.getElementById('prijs-label').textContent = state.gangen + ' gangen, ' + dayNames[state.dag];
    document.getElementById('prijs-bedrag').textContent = '€ ' + prices[state.dag][state.gangen];
    document.querySelectorAll('[data-gangen]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.gangen === state.gangen)); });
    document.querySelectorAll('.seg-dag [data-dag]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.dag === state.dag)); });
  }
  document.querySelectorAll('[data-gangen]').forEach(function (b) {
    b.addEventListener('click', function () { state.gangen = +b.dataset.gangen; render(); });
  });
  document.querySelectorAll('.seg-dag [data-dag]').forEach(function (b) {
    b.addEventListener('click', function () { state.dag = b.dataset.dag; render(); });
  });
  render();

  // Opening hours: mark today, short line in the hero
  var hours = { 0: ['12:00', '22:00'], 1: ['11:30', '22:00'], 2: null, 3: null, 4: ['11:30', '22:00'], 5: ['11:30', '23:00'], 6: ['11:30', '23:00'] };
  var full = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var row = document.querySelector('#uren tr[data-dag="' + wd + '"]');
  if (row) row.classList.add('vandaag');
  var today = document.getElementById('today');
  if (today) {
    var h = hours[wd];
    if (h) {
      today.textContent = 'Vandaag open van ' + h[0] + ' tot ' + h[1] + ' uur';
    } else {
      var n = wd, i = 0;
      do { n = (n + 1) % 7; i++; } while (!hours[n] && i < 7);
      today.textContent = 'Vandaag gesloten. ' + full[n].charAt(0).toUpperCase() + full[n].slice(1) + ' weer open vanaf ' + hours[n][0] + ' uur';
    }
    today.hidden = false;
  }
})();
