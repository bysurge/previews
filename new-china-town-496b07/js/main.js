(function () {
  // Mobiel menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // Open of dicht (woensdag gesloten, overige dagen 15:00-21:00)
  var now = new Date();
  var d = now.getDay();
  var mins = now.getHours() * 60 + now.getMinutes();
  var st = document.getElementById('status');
  var stt = document.getElementById('status-text');
  if (d === 3) { stt.textContent = 'Vandaag gesloten (woensdag). Morgen weer open vanaf 15:00'; st.classList.add('dicht'); }
  else if (mins < 900) { stt.textContent = 'Vandaag open van 15:00 tot 21:00'; }
  else if (mins < 1245) { stt.textContent = 'Nu open, de keuken sluit om 20:45'; st.classList.add('open'); }
  else { stt.textContent = (d === 2 ? 'Nu gesloten. Donderdag weer open vanaf 15:00' : 'Nu gesloten. Morgen weer open vanaf 15:00'); st.classList.add('dicht'); }
  var rij = document.querySelector('#uren [data-d="' + d + '"]');
  if (rij) rij.classList.add('vandaag');

  // Afhaalkaart
  var K = window.KAART || [];
  var tabs = document.getElementById('tabs');
  var lijst = document.getElementById('lijst');
  var zoek = document.getElementById('zoek');
  var actief = K[0] ? K[0].id : null;
  var briefje = {}; var volgorde = [];
  var alle = {};
  K.forEach(function (c) { c.items.forEach(function (it) { if (Array.isArray(it)) alle[it[0]] = it; }); });

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function rijHtml(it) {
    var n = briefje[it[0]] || 0;
    return '<li class="gerecht' + (n ? ' gekozen' : '') + '"><span class="nr">' + esc(it[0]) + '</span>' +
      '<span class="g-tekst"><span class="g-naam">' + esc(it[1]) + '</span>' + (it[2] ? '<span class="g-desc">' + esc(it[2]) + '</span>' : '') + '</span>' +
      '<span class="g-prijs">€ ' + esc(it[3]) + '</span>' +
      '<button type="button" class="plus" data-nr="' + esc(it[0]) + '" aria-label="Nummer ' + esc(it[0]) + ' op uw briefje">' + (n ? n + '×' : '+') + '</button></li>';
  }
  function tekenTabs() {
    tabs.innerHTML = K.map(function (c) {
      return '<button type="button" role="tab" id="tab-' + c.id + '" aria-selected="' + (c.id === actief) + '" data-id="' + c.id + '">' + esc(c.naam) + '</button>';
    }).join('');
  }
  function teken() {
    var q = zoek.value.trim().toLowerCase();
    var html = '';
    if (q) {
      var hits = [];
      K.forEach(function (c) { c.items.forEach(function (it) {
        if (!Array.isArray(it)) return;
        var hay = (it[0] + ' ' + it[1] + ' ' + it[2] + ' ' + c.naam).toLowerCase();
        if (it[0].toLowerCase() === q || hay.indexOf(q) !== -1) hits.push(it);
      }); });
      html = hits.length ? '<ul class="g-lijst">' + hits.map(rijHtml).join('') + '</ul>'
        : '<p class="leeg">Geen gerecht gevonden voor "' + esc(q) + '". Probeer een ander woord, of bel ons: onze koks maken graag iets op maat.</p>';
      tabs.classList.add('dim');
    } else {
      tabs.classList.remove('dim');
      var c = K.filter(function (x) { return x.id === actief; })[0];
      var open = false;
      html = '<h3 class="cat-titel">' + esc(c.naam) + '</h3><ul class="g-lijst">';
      c.items.forEach(function (it) {
        if (!Array.isArray(it)) { html += '</ul><h4 class="sub">' + esc(it.h) + '</h4><ul class="g-lijst">'; return; }
        html += rijHtml(it);
      });
      html += '</ul>';
      html = html.replace('<ul class="g-lijst"></ul>', '');
    }
    lijst.innerHTML = html;
  }
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('[role=tab]'); if (!b) return;
    actief = b.getAttribute('data-id'); zoek.value = '';
    [].forEach.call(tabs.children, function (t) { t.setAttribute('aria-selected', String(t === b)); });
    teken();
  });
  zoek.addEventListener('input', teken);

  // Briefje
  var bj = document.getElementById('briefje');
  var bjKnop = document.getElementById('briefje-knop');
  var bjPaneel = document.getElementById('briefje-paneel');
  function prijs(s) { return parseFloat(s.replace(',', '.')); }
  function euro(x) { return '€ ' + x.toFixed(2).replace('.', ','); }
  function tekenBriefje() {
    var aantal = 0, tot = 0;
    volgorde = volgorde.filter(function (nr) { return briefje[nr]; });
    var li = volgorde.map(function (nr) {
      var it = alle[nr]; aantal += briefje[nr]; tot += briefje[nr] * prijs(it[3]);
      return '<li><span class="nr">' + esc(nr) + '</span><span class="b-naam">' + briefje[nr] + '× ' + esc(it[1]) + '</span>' +
        '<button type="button" class="min" data-min="' + esc(nr) + '" aria-label="Eén keer nummer ' + esc(nr) + ' eraf">−</button></li>';
    }).join('');
    document.getElementById('briefje-lijst').innerHTML = li;
    document.getElementById('briefje-sam').textContent = 'Uw briefje: ' + aantal + (aantal === 1 ? ' gerecht' : ' gerechten');
    document.getElementById('briefje-tot').textContent = euro(tot);
    bj.hidden = aantal === 0;
    document.body.classList.toggle('met-briefje', aantal > 0);
    if (!aantal) { bjPaneel.hidden = true; bjKnop.setAttribute('aria-expanded', 'false'); }
  }
  lijst.addEventListener('click', function (e) {
    var b = e.target.closest('.plus'); if (!b) return;
    var nr = b.getAttribute('data-nr');
    if (!briefje[nr]) { briefje[nr] = 0; volgorde.push(nr); }
    briefje[nr]++;
    teken(); tekenBriefje();
  });
  bjKnop.addEventListener('click', function () {
    var open = bjKnop.getAttribute('aria-expanded') === 'true';
    bjKnop.setAttribute('aria-expanded', String(!open));
    bjPaneel.hidden = open;
  });
  bjPaneel.addEventListener('click', function (e) {
    var m = e.target.closest('.min'); if (!m) return;
    var nr = m.getAttribute('data-min'); briefje[nr]--; if (briefje[nr] <= 0) delete briefje[nr];
    teken(); tekenBriefje();
  });
  document.getElementById('briefje-leeg').addEventListener('click', function () {
    briefje = {}; volgorde = []; teken(); tekenBriefje();
  });

  tekenTabs(); teken();
})();
