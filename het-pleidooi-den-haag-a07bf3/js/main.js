(function () {
  var K = window.KAART;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function eur(p) { return p ? '<span class="price">' + p + '</span>' : ''; }

  function groups(list) {
    return list.map(function (g) {
      return '<section class="grp"><h3>' + esc(g.t) + '</h3>' + (g.note ? '<p class="grp-note">' + esc(g.note) + '</p>' : '') +
        '<ul>' + g.items.map(function (i) {
          return '<li><span class="dish"><span class="name">' + esc(i[0]) + (i[3] ? ' <abbr class="tag" title="' + (i[3] === 'V' ? 'vegetarisch' : 'vegan') + '">' + i[3] + '</abbr>' : '') + '</span>' +
            (i[2] ? '<span class="desc">' + esc(i[2]) + '</span>' : '') + '</span>' + eur(i[1]) + '</li>';
        }).join('') + '</ul></section>';
    }).join('');
  }

  document.getElementById('p-lunch').innerHTML = '<div class="cols">' + groups(K.lunch) + '</div><p class="panel-note">' + esc(K.lunchNote) + '</p>';
  document.getElementById('p-diner').innerHTML = '<div class="cols">' + groups(K.diner) + '</div><p class="panel-note">' + esc(K.dinerNote) + '</p>';
  document.getElementById('p-dranken').innerHTML = '<div class="cols cols-3">' + groups(K.dranken) + '</div>';

  var wijn = K.wijn.map(function (g) {
    return '<section class="grp wine"><h3>' + esc(g.t) + '<span class="wh">' + (g.glas ? 'glas' : 'glas <span>fles</span>') + '</span></h3><ul>' +
      g.items.map(function (w) {
        return '<li><span class="dish"><span class="name">' + esc(w[0]) + '</span>' +
          (w[1] ? '<span class="origin">' + esc(w[1]) + '</span>' : '') +
          '<span class="desc">' + esc(w[2]) + '</span></span>' +
          '<span class="price">' + w[3] + (w[4] ? '<span>' + w[4] + '</span>' : '') + '</span></li>';
      }).join('') + '</ul></section>';
  }).join('');
  var bier = '<section class="grp beer"><h3>Bier Pleidooi <span class="wh">33 cl</span></h3><ul>' + K.bier.map(function (b) {
    return '<li><span class="dish"><span class="name">' + esc(b[0]) + ' <span class="origin-inline">' + esc(b[1]) + '</span></span><span class="desc">' + esc(b[2]) + '</span></span>' + eur(b[3]) + '</li>';
  }).join('') + '</ul></section>';
  document.getElementById('p-wijn').innerHTML = '<div class="cols">' + wijn + bier + '</div>';

  // tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var nt = tabs[(i + n + tabs.length) % tabs.length]; select(nt); nt.focus();
    });
  });
  // dinner tab by default in the evening
  var h = new Date().getHours();
  if (h >= 16) select(document.getElementById('t-diner'));

  // hero slides
  var slides = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6000);
  }

  // today
  var d = new Date().getDay();
  var row = document.querySelector('#hours [data-d="' + d + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  if (d === 0 || d === 6) today.textContent = 'Vandaag gesloten. Maandag t/m vrijdag open vanaf 11.00 uur';
  else today.textContent = 'Vandaag open vanaf 11.00 uur, keuken tot 21.00 uur';

  // nav
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = tog.getAttribute('aria-expanded') === 'true';
    tog.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });
  document.getElementById('nav').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tog.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // form
  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
