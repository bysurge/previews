(function () {
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var price = function (p) { return p == null ? '' : '€ ' + p.replace('.', ','); };
  function item(it) {
    return '<div class="item"><b>' + esc(it[0]) + '</b><span class="p">' + price(it[2]) + '</span>' +
      (it[1] ? '<span class="d">' + esc(it[1]) + '</span>' : '') + '</div>';
  }
  function cat(c) {
    return '<section class="cat' + (c.special ? ' special' : '') + '"><h3>' + esc(c.cat) + '</h3>' +
      (c.note ? '<p class="cat-note">' + esc(c.note) + '</p>' : '') + c.items.map(item).join('') + '</section>';
  }

  // Kaarten
  document.querySelectorAll('.panel').forEach(function (p) {
    var data = window.KAART[p.dataset.kaart] || [];
    p.innerHTML = '<div class="panel-grid"><div class="panel-photo"><img src="' + p.dataset.img + '" alt="" loading="lazy"></div>' +
      '<div class="cats">' + data.map(cat).join('') + '</div></div>';
  });

  // Steppegras
  var sl = document.getElementById('steppe-list');
  if (sl && window.STEPPEGRAS) {
    sl.innerHTML = window.STEPPEGRAS.items.map(function (it) {
      return '<li><b>' + esc(it[0].replace('Steppegras ', '')) + '</b><span class="p">' + price(it[2]) + '</span><span class="d">' + esc(it[1]) + '</span></li>';
    }).join('');
    document.getElementById('steppe-note').textContent = window.STEPPEGRAS.note;
  }

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
      var k = document.getElementById('kaart');
      if (k.getBoundingClientRect().top < 0) document.querySelector('.tabs').scrollIntoView({ block: 'start' });
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
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) {
    row.classList.add('now');
    document.getElementById('today').textContent = 'Open van ' + row.querySelector('td').textContent.replace(' - ', ' tot ');
  }

  // Cadeaupas-formulier tonen
  document.querySelectorAll('[data-open]').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = document.getElementById(b.dataset.open);
      f.hidden = !f.hidden;
      if (!f.hidden) f.querySelector('input').focus();
    });
  });
  // Formulieren versturen niets
  document.querySelectorAll('form').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.querySelector('.form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd.';
    });
  });
})();
