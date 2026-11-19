(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // mobile menu
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', false); });
  });

  // menukaart
  var tt = document.getElementById('kaart-tabs'), tp = document.getElementById('kaart-panels');
  var dish = function (d) {
    var veg = d[3] ? (d[3] === 'v' ? ' <span class="v" title="vegetarisch (mogelijk)">V</span>' : ' <span class="v" title="vegetarische variant">V ' + esc(d[3]) + '</span>') : '';
    return '<div class="dish"><div class="dish-top"><span class="dish-nm">' + esc(d[0]) + veg + '</span><span class="dish-pr">' + esc(d[1]) + '</span></div>' +
      (d[2] ? '<span class="dish-ds">' + esc(d[2]) + '</span>' : '') + '</div>';
  };
  (window.KAART || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.setAttribute('role', 'tab'); b.id = 'tab-' + s.id; b.setAttribute('aria-controls', 'p-' + s.id);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = s.t;
    tt.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel' + (s.img ? '' : ' no-img'); p.id = 'p-' + s.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', 'tab-' + s.id); p.hidden = i !== 0;
    p.innerHTML = (s.intro ? '<p class="panel-intro">' + esc(s.intro) + '</p>' : '') +
      (s.note ? '<p class="panel-note">' + esc(s.note) + '</p>' : '') +
      '<div class="groups">' + s.groups.map(function (g) {
        return '<div class="group"><h3>' + esc(g.t) + '</h3>' + g.items.map(dish).join('') + '</div>';
      }).join('') + '</div>' +
      (s.img ? '<div class="panel-img"><figure class="framed"><img src="' + s.img + '" alt="" loading="lazy"></figure></div>' : '');
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { var t = document.getElementById('tab-' + a.getAttribute('data-tab')); if (t) sel(t); });
  });

  // bier
  document.getElementById('bier-list').innerHTML = (window.BIER || []).map(function (b) {
    return '<li><span><span class="nm">' + esc(b[0]) + '</span><span class="ds">' + esc(b[1]) + '</span></span><span class="pr">' + esc(b[2]) + '</span></li>';
  }).join('');

  // vandaag open
  var d = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var tot = (d === 5 || d === 6) ? '02.00' : '00.00';
  document.getElementById('vandaag').textContent = 'Vandaag open van 10.00 tot ' + tot + ' uur';

  // faq
  var faq = document.querySelector('.faq'), more = document.getElementById('faq-more');
  faq.classList.add('short');
  more.addEventListener('click', function () { faq.classList.remove('short'); more.hidden = true; });

  // formulier (voorbeeld)
  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); document.getElementById('form-msg').hidden = false;
  });
})();
