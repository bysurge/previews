(function () {
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var price = function (p) { return p ? '€ ' + p.replace(/\./g, ',') : ''; };
  var slug = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); };

  function item(it) {
    return '<div class="item"><span class="n">' + esc(it[0]) + '</span><b>' + esc(it[1]) + '</b><span class="p">' + price(it[3]) + '</span>' +
      (it[2] ? '<span class="d">' + esc(it[2]) + '</span>' : '') + '</div>';
  }

  document.querySelectorAll('.panel').forEach(function (p) {
    var key = p.dataset.kaart, data = window.KAART[key] || [];
    var chips = '<nav class="chips" aria-label="Onderdelen">' + data.map(function (c) {
      return '<a href="#' + key + '-' + slug(c.cat) + '">' + esc(c.cat) + '</a>';
    }).join('') + '</nav>';
    var cats = '<div class="cats">' + data.map(function (c) {
      return '<section class="cat" id="' + key + '-' + slug(c.cat) + '"><h3>' + esc(c.cat) + '</h3>' +
        (c.note ? '<p class="cat-note">' + esc(c.note) + '</p>' : '') + c.items.map(item).join('') + '</section>';
    }).join('') + '</div>';
    p.insertAdjacentHTML('beforeend', chips + cats);
  });

  // Sushi mix in afhaalblok
  var bl = document.getElementById('box-list');
  if (bl) bl.innerHTML = window.KAART.sushi[0].items.map(function (it) {
    return '<li><b>' + esc(it[1]) + '</b><span class="p">' + price(it[3]) + '</span><span class="d">' + esc(it[2]) + '</span></li>';
  }).join('');

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
  function select(t, focus) {
    tabs.forEach(function (o) {
      var on = o === t;
      o.setAttribute('aria-selected', on);
      o.tabIndex = on ? 0 : -1;
      document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      if (document.getElementById('kaart').getBoundingClientRect().top < 0) document.querySelector('.tabs').scrollIntoView({ block: 'start' });
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });

  // Mobiel menu
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); });
  });

  // Openingstijden vandaag
  var d = new Date().getDay();
  [['r', 'today-r'], ['a', 'today-a']].forEach(function (k) {
    var row = document.querySelector('.hours[data-kind=' + k[0] + '] tr[data-d="' + d + '"]');
    if (!row) return;
    row.classList.add('now');
    var t = row.querySelector('td').textContent;
    document.getElementById(k[1]).textContent = /gesloten/.test(t) ? 'Vandaag gesloten (behalve op feestdagen)' : 'Vandaag ' + t.replace(' - ', ' tot ');
  });
})();
