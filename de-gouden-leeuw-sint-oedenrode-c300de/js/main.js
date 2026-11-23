(function () {
  var top = document.getElementById('top'), burger = document.getElementById('burger'), nav = document.getElementById('nav');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || document.body.classList.contains('menu-open')); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function setMenu(open) {
    nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    document.body.classList.toggle('menu-open', open); onScroll();
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var slides = document.querySelectorAll('.hero-slides img'), si = 0;
  if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(function () { slides[si].classList.remove('on'); si = (si + 1) % slides.length; slides[si].classList.add('on'); }, 6000);
  }

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var egg = '<svg class="egg" role="img" aria-label="van de Big Green Egg"><use href="#egg"/></svg>';
  var tabsEl = document.getElementById('tabs'), panelsEl = document.getElementById('panels');
  var mobile = matchMedia('(max-width: 860px)').matches;
  window.MENU.forEach(function (tab, ti) {
    var b = document.createElement('button');
    b.className = 'tab'; b.type = 'button'; b.setAttribute('role', 'tab');
    b.id = 'tab-' + tab.id; b.setAttribute('aria-controls', 'panel-' + tab.id); b.setAttribute('aria-selected', ti === 0);
    b.textContent = tab.title; tabsEl.appendChild(b);
    var html = tab.id === 'extra' ? '<p class="panel-intro">Taste the moment. Onze extra kaart van november, naast de vaste kaart.</p>' : '';
    html += '<div class="cats">';
    tab.cats.forEach(function (c, ci) {
      html += '<details class="cat"' + (!mobile || ci === 0 ? ' open' : '') + '><summary><h3>' + esc(c.title) + '</h3></summary>';
      c.notes.forEach(function (n) { html += '<p class="note">' + esc(n) + '</p>'; });
      c.items.forEach(function (it) {
        var name = esc(it.n), sub = '';
        if (tab.id === 'wijn' && it.n.indexOf(', ') > 0) { var k = it.n.indexOf(', '); name = esc(it.n.slice(0, k)); sub = '<span class="origin">' + esc(it.n.slice(k + 2)) + '</span>'; }
        html += '<div class="item' + (tab.id === 'wijn' ? ' wine' : '') + '"><span class="n">' + name + (it.bge ? ' ' + egg : '') + (it.v ? ' <span class="veg" aria-label="vegetarisch">V</span>' : '') + '</span>' +
          '<span class="p">' + esc(it.p) + '</span>' + sub + (it.d ? '<span class="d">' + esc(it.d) + '</span>' : '') + '</div>';
      });
      html += '</details>';
    });
    html += '</div>';
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + tab.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    p.hidden = ti !== 0; p.innerHTML = html; panelsEl.appendChild(p);
  });
  if (!mobile) panelsEl.addEventListener('click', function (e) { if (e.target.closest('summary')) e.preventDefault(); });
  tabsEl.addEventListener('click', function (e) {
    var t = e.target.closest('.tab'); if (!t) return;
    tabsEl.querySelectorAll('.tab').forEach(function (x) { x.setAttribute('aria-selected', x === t); });
    panelsEl.querySelectorAll('.panel').forEach(function (p) { p.hidden = p.id !== 'panel-' + t.id.slice(4); });
  });

  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); f.querySelector('.demo-msg').hidden = false; });
  });
})();
