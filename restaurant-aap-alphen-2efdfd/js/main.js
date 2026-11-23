(function () {
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var tagHtml = { p: '<span class="tag tag-p" title="plantaardig">plantaardig</span>', v: '<span class="tag tag-v" title="vegetarisch">vegetarisch</span>' };

  var cards = (window.AAP_MENU || []).slice();
  cards.push({ id: 'allergenen', tab: 'Allergenen' });
  var tabsEl = document.getElementById('menu-tabs'), panelsEl = document.getElementById('menu-panels');

  function itemHtml(it) {
    return '<li class="dish"><div class="dish-top"><span class="dish-n">' + esc(it[0]) + '</span>' + (it[3] ? tagHtml[it[3]] : '') +
      (it[2] ? '<span class="dish-x">' + esc(it[2]) + '</span>' : '') + '</div>' + (it[1] ? '<p class="dish-d">' + esc(it[1]) + '</p>' : '') + '</li>';
  }
  function cardHtml(c) {
    if (c.id === 'allergenen') {
      var a = window.AAP_ALLERGEEN;
      return '<div class="all-intro"><p>Allergenen zijn componenten in voeding waar gasten allergisch op kunnen reageren. Het gaat niet om e-nummers. Er zijn 14 allergenen benoemd:</p>' +
        '<ul class="chips">' + a.lijst.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        a.groepen.map(function (g, i) {
          return '<details class="all-group"' + (i === 0 ? ' open' : '') + '><summary>' + esc(g.t) + '</summary><dl class="all-dl">' +
            g.rows.map(function (r) { return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl></details>';
        }).join('') +
        '<p class="pdf-link"><a href="' + a.pdf + '" target="_blank" rel="noopener">Allergenendeclaratie 2026 (PDF)</a></p>';
    }
    var h = '<div class="card-head"><p class="card-big">' + esc(c.head.big) + '</p><p class="card-small">' + esc(c.head.small) + '</p>' +
      (c.prices ? '<p class="card-prices">Los: ' + c.prices.map(esc).join(' <span aria-hidden="true">/</span> ') + '</p>' : '') + '</div>';
    h += '<div class="groups">' + c.groups.map(function (g) {
      return '<section class="group"><h3>' + esc(g.t) + '</h3>' + (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
        '<ul class="dishes">' + g.items.map(itemHtml).join('') + '</ul></section>';
    }).join('') + '</div>';
    if (c.pdf) h += '<p class="pdf-link"><a href="' + c.pdf + '" target="_blank" rel="noopener">Originele kaart (PDF)</a></p>';
    return h;
  }

  cards.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab-' + c.id; b.setAttribute('aria-controls', 'panel-' + c.id);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = c.tab;
    tabsEl.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel panel-' + c.id; p.id = 'panel-' + c.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'tab-' + c.id);
    p.hidden = i !== 0; p.innerHTML = cardHtml(c);
    panelsEl.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role=tab]'));
  function sel(t) {
    tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-open-tab]'), function (b) {
    b.addEventListener('click', function () {
      var t = document.getElementById('tab-' + b.getAttribute('data-open-tab'));
      sel(t); document.getElementById('menu').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });

  // Formulier (alleen voorbeeld)
  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('form-msg').hidden = false; });

  // Navigatie
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () { var o = tg.getAttribute('aria-expanded') !== 'true'; tg.setAttribute('aria-expanded', o); document.body.classList.toggle('nav-open', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); } });
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 30); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
})();
