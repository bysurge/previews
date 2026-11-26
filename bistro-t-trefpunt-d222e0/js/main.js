(function () {
  // mobiel menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  // menukaart
  var tabs = document.getElementById('kaart-tabs');
  var panels = document.getElementById('kaart-panels');
  var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  window.KAART.forEach(function (k, i) {
    var t = document.createElement('button');
    t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 'tab-' + k.id;
    t.setAttribute('aria-controls', 'pan-' + k.id);
    t.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    t.tabIndex = i === 0 ? 0 : -1;
    t.textContent = k.tab;
    tabs.appendChild(t);
    var p = document.createElement('div');
    p.className = 'pan'; p.id = 'pan-' + k.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', t.id); p.tabIndex = 0;
    if (i) p.hidden = true;
    var h = k.intro ? '<p class="pan-intro">' + esc(k.intro) + '</p>' : '';
    k.groepen.forEach(function (g) {
      h += '<section class="groep' + (g.items.length > 8 ? ' groep-lang' : '') + '"><h3>' + esc(g.kop) + '</h3>';
      if (g.intro) h += '<p class="pan-intro">' + esc(g.intro) + '</p>';
      h += '<ul>' + g.items.map(function (it) {
        return '<li><span class="naam">' + esc(it[0]) + '</span><span class="lijn" aria-hidden="true"></span><span class="prijs">€ ' + it[2] + '</span>' +
          (it[1] ? '<span class="oms">' + esc(it[1]) + '</span>' : '') + '</li>';
      }).join('') + '</ul></section>';
    });
    p.innerHTML = h;
    panels.appendChild(p);
  });
  var all = function () { return [].slice.call(tabs.querySelectorAll('[role=tab]')); };
  function kies(t, focus) {
    all().forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
    t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  tabs.addEventListener('click', function (e) { var t = e.target.closest('[role=tab]'); if (t) kies(t); });
  tabs.addEventListener('keydown', function (e) {
    var l = all(), i = l.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); kies(l[(i + 1) % l.length], true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); kies(l[(i - 1 + l.length) % l.length], true); }
  });

  // hero: rustige wissel van eigen foto's
  var slides = [].slice.call(document.querySelectorAll('.hero-foto img'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var n = 0;
    setInterval(function () {
      slides[n].classList.remove('aan'); n = (n + 1) % slides.length; slides[n].classList.add('aan');
    }, 6000);
  }

  // formulieren: alleen voorbeeld
  [].forEach.call(document.querySelectorAll('form[data-voorbeeld]'), function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.form-msg'); m.hidden = false;
    });
  });
  var d = document.getElementById('datum');
  if (d) { var t = new Date(); d.min = t.toISOString().slice(0, 10); }
})();
