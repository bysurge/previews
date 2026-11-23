(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Mobiel menu
  var toggle = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', function (e) {
    var a = e.target.closest('a'); if (!a) return;
    document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false');
    if (a.dataset.tab) sel(tabs[+a.dataset.tab]);
  });

  // Menukaart in tabs
  var tt = document.getElementById('kaart-tabs'), tp = document.getElementById('kaart-panels');
  (window.KAART || []).forEach(function (s, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'kt' + i; b.setAttribute('aria-controls', 'kp' + i);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = s.t; tt.appendChild(b);
    var p = document.createElement('div');
    p.id = 'kp' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'kt' + i); p.hidden = i !== 0;
    p.innerHTML = s.groups.map(function (g) {
      return '<div class="k-group"><h3>' + esc(g.h) + '</h3>' + (g.note ? '<p class="k-note">' + esc(g.note) + '</p>' : '') +
        '<ul class="k-list">' + g.items.map(function (it) {
          return '<li><span class="k-line"><span class="k-name">' + esc(it[0]) + '</span>' +
            (it[2] ? '<span class="k-dots"></span><span class="k-price">€ ' + esc(it[2]) + '</span>' : '') + '</span>' +
            (it[1] ? '<span class="k-desc">' + esc(it[1]) + '</span>' : '') + '</li>';
        }).join('') + '</ul></div>';
    }).join('');
    tp.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tt.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    if (t.scrollIntoView && window.innerWidth < 600) t.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });

  // Rustige hero-diavoorstelling
  var slides = document.querySelectorAll('.hero-slides img');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('on'); cur = (cur + 1) % slides.length; slides[cur].classList.add('on');
    }, 6000);
  }

  // Formulier: voorbeeld, verstuurt niets
  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });
})();
