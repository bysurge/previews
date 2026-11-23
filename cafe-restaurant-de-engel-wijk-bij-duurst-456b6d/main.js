(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); }
  });

  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Hero: rustige wissel van sfeerfoto's
  var slides = document.querySelectorAll('.hero__slides img'), cur = 0;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && slides.length > 1) {
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6000);
  }

  // Vandaag
  var close = { 0: '22.00', 1: '24.00', 2: '24.00', 3: '24.00', 4: '24.00', 5: '01.30', 6: '01.30' };
  var d = new Date().getDay();
  document.getElementById('today').textContent = 'Vandaag geopend van 10.00 tot ' + close[d] + ' uur, keuken tot 21.30 uur';
  var row = document.querySelector('#hours tr[data-d="' + d + '"]'); if (row) row.classList.add('today');

  // Menukaart
  var tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  window.KAART.forEach(function (k, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'tab'; b.id = 't-' + k.id; b.textContent = k.tab;
    b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'p-' + k.id); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.addEventListener('click', function () { show(k.id); });
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'p-' + k.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 't-' + k.id);
    if (i) p.hidden = true;
    var h = k.intro ? '<p class="panel__intro">' + esc(k.intro) + '</p>' : '';
    h += '<div class="cols">';
    k.groups.forEach(function (g) {
      h += '<div class="grp"><h3>' + esc(g.t) + '</h3>' + (g.note ? '<p class="grp__note">' + esc(g.note) + '</p>' : '');
      if (g.list) h += '<p class="grp__list">' + g.list.map(esc).join(', ') + '</p>';
      else {
        h += '<ul class="dishes">';
        g.r.forEach(function (r) {
          h += '<li><div class="dish__top"><span class="dish__name">' + esc(r[0]) + '</span>' + (r[1] ? '<span class="dish__price">' + esc(r[1]) + '</span>' : '') + '</div>' + (r[2] ? '<p class="dish__desc">' + esc(r[2]) + '</p>' : '') + '</li>';
        });
        h += '</ul>';
      }
      h += '</div>';
    });
    p.innerHTML = h + '</div>' + (k.foot ? '<p class="panel__foot">' + esc(k.foot) + '</p>' : '');
    panels.appendChild(p);
  });
  function show(id) {
    window.KAART.forEach(function (k) {
      var on = k.id === id;
      document.getElementById('t-' + k.id).setAttribute('aria-selected', on ? 'true' : 'false');
      document.getElementById('p-' + k.id).hidden = !on;
    });
    var t = document.getElementById('t-' + id);
    if (tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = t.offsetLeft - 16;
  }
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { show(a.getAttribute('data-tab')); });
  });

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('formmsg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Op de echte site komt hier de reserveringsmodule van De Engel.';
  });
})();
