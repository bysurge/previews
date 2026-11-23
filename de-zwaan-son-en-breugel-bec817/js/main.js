(function () {
  // header + mobile menu
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

  // hero slideshow (first photo visible immediately)
  var slides = document.querySelectorAll('.hero-slides img'), si = 0;
  if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(function () { slides[si].classList.remove('on'); si = (si + 1) % slides.length; slides[si].classList.add('on'); }, 6000);
  }

  // menu
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var tabsEl = document.getElementById('tabs'), panelsEl = document.getElementById('panels');
  var mobile = matchMedia('(max-width: 860px)').matches;
  var extra = {
    wild: '<div class="wildmenu"><h3>Wildmenu, 3 gangen <span>49,50</span></h3><ol>' +
      '<li><b>Wildproeverij</b><span>Combinatie van diverse luxe wild lekkernijen, een echte aanrader!</span></li>' +
      '<li><b>Wild trio</b><span>Een combinatie van hazenpeper, hertenbiefstuk en parelhoenfilet</span></li>' +
      '<li><b>Apfelstrudel</b><span>Geserveerd met een vanillesaus, vanille ijs en slagroom</span></li></ol></div>',
    dessert: '<p class="panel-note">Koffie, thee en likeuren voor bij het dessert staan onder Dranken.</p>'
  };
  window.MENU.forEach(function (tab, ti) {
    var b = document.createElement('button');
    b.className = 'tab' + (tab.id === 'wild' ? ' wild' : ''); b.type = 'button'; b.role = 'tab';
    b.id = 'tab-' + tab.id; b.setAttribute('aria-controls', 'panel-' + tab.id); b.setAttribute('aria-selected', ti === 0);
    b.textContent = tab.title; tabsEl.appendChild(b);
    var html = '<div class="cats">' + (tab.id === 'wild' ? extra.wild : '');
    tab.cats.forEach(function (c, ci) {
      html += '<details class="cat"' + (!mobile || ci === 0 ? ' open' : '') + '><summary><h3>' + esc(c.title) + '</h3>' +
        (c.cols ? '<span class="cols">' + c.cols.map(esc).join(' / ') + '</span>' : '') + '</summary>';
      c.notes.forEach(function (n) { html += '<p class="note">' + esc(n) + '</p>'; });
      c.items.forEach(function (it) {
        html += '<div class="item' + (it.add ? ' add' : '') + '"><span class="n">' + esc(it.n) + '</span><span class="p">' + esc(it.p) + '</span>' +
          (it.d ? '<span class="d">' + esc(it.d.replace(/ — /g, '. ')) + '</span>' : '') + '</div>';
      });
      html += '</details>';
    });
    html += '</div>' + (extra[tab.id] && tab.id !== 'wild' ? extra[tab.id] : '');
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + tab.id; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', b.id);
    p.hidden = ti !== 0; p.innerHTML = html; panelsEl.appendChild(p);
  });
  // on desktop keep categories open (summary is a heading only)
  if (!mobile) panelsEl.addEventListener('click', function (e) { if (e.target.closest('summary')) e.preventDefault(); });
  function showTab(id) {
    tabsEl.querySelectorAll('.tab').forEach(function (t) { t.setAttribute('aria-selected', t.id === 'tab-' + id); });
    panelsEl.querySelectorAll('.panel').forEach(function (p) { p.hidden = p.id !== 'panel-' + id; });
  }
  tabsEl.addEventListener('click', function (e) { var t = e.target.closest('.tab'); if (t) showTab(t.id.slice(4)); });
  document.querySelectorAll('[data-tab]').forEach(function (a) { a.addEventListener('click', function () { showTab(a.dataset.tab); }); });
  document.querySelectorAll('.tile:not([data-tab])').forEach(function (a) { a.addEventListener('click', function () { showTab('lunch'); }); });

  // demo forms
  document.querySelectorAll('.demo-form').forEach(function (f) {
    f.addEventListener('submit', function (e) { e.preventDefault(); var m = f.querySelector('.demo-msg'); m.hidden = false; });
  });
})();
