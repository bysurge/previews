(function () {
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  // menukaart
  function price(p) {
    var parts = p.split(',');
    return '€ ' + parts[0] + ',' + (parts[1] ? (parts[1] + '0').slice(0, 2) : '-');
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var tabs = document.getElementById('tabs');
  var panels = document.getElementById('panels');
  (window.RHODOS_MENU || []).forEach(function (sec, i) {
    var t = document.createElement('button');
    t.className = 'tab'; t.type = 'button';
    t.id = 'tab-' + sec.id;
    t.setAttribute('role', 'tab');
    t.setAttribute('aria-controls', 'panel-' + sec.id);
    t.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    t.textContent = sec.tab;
    tabs.appendChild(t);

    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + sec.id;
    p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', t.id);
    if (i !== 0) p.hidden = true;
    var html = sec.intro ? '<p class="panel-intro">' + esc(sec.intro) + '</p>' : '';
    html += '<div class="panel-cols">';
    if (sec.photo) html += '<figure class="grill-photo"><img src="img/eigen-ribeye.webp" alt="Rib-eye van de grill met gegrilde asperges bij Rhodos" loading="lazy"><figcaption>Aanrader van de kok: de rib-eye.</figcaption></figure>';
    sec.groups.forEach(function (g) {
      html += '<div class="group"><h3>' + esc(g.t) + '</h3>';
      g.items.forEach(function (d) {
        html += '<div class="dish' + (d[3] ? ' has-tag' : '') + '"><span class="dish-name">' + (d[3] ? '<span class="dish-tag">' + esc(d[3]) + '</span>' : '') + esc(d[0]) + '</span>' +
          '<span class="dish-price">' + price(d[2]) + '</span>' +
          (d[1] ? '<span class="dish-desc">' + esc(d[1]) + '</span>' : '') + '</div>';
      });
      html += '</div>';
    });
    html += '</div>';
    p.innerHTML = html;
    panels.appendChild(p);
  });
  var allTabs = [].slice.call(tabs.querySelectorAll('.tab'));
  function select(tab) {
    allTabs.forEach(function (x) {
      var on = x === tab;
      x.setAttribute('aria-selected', on ? 'true' : 'false');
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  allTabs.forEach(function (t, i) {
    t.tabIndex = i === 0 ? 0 : -1;
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = allTabs[(i + d + allTabs.length) % allTabs.length];
      select(n); n.focus();
    });
  });

  // vandaag
  var day = new Date().getDay();
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('is-today');
  var today = document.getElementById('today');
  if (today) today.textContent = day === 6 ? 'Vandaag open van 11:30 tot 22:00, lunch tot 15:00' : 'Vandaag open van 15:30 tot 22:00';

  // hero slideshow (rustig, stopt bij reduced motion)
  var slides = document.querySelectorAll('.arch-frame .slide');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var k = 0;
    setInterval(function () {
      slides[k].classList.remove('is-on');
      k = (k + 1) % slides.length;
      slides[k].classList.add('is-on');
    }, 5500);
  }
})();
