(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Mobile menu
  var tg = document.querySelector('.nav-toggle'), nav = document.getElementById('nav');
  tg.addEventListener('click', function () {
    var open = tg.getAttribute('aria-expanded') !== 'true';
    tg.setAttribute('aria-expanded', open); document.body.classList.toggle('menu-open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { tg.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
  });
  var bar = document.getElementById('top-bar');
  var onScroll = function () { bar.classList.toggle('scrolled', window.scrollY > 20); document.body.classList.toggle('past-hero', window.scrollY > 650); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Menukaart tabs
  var SHORT = { 'Surinaamse en Javaanse gerechten': 'Surinaams & Javaans', 'Chinese gerechten': 'Chinees', 'Vegetarische gerechten': 'Vegetarisch', 'Belegde broodjes': 'Broodjes' };
  var data = window.MENU || [], tabs = document.getElementById('tabs'), panels = document.getElementById('panels');
  data.forEach(function (c, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab' + i; b.setAttribute('aria-controls', 'pan' + i);
    b.setAttribute('aria-selected', i === 0); b.tabIndex = i ? -1 : 0; b.textContent = SHORT[c.t] || c.t;
    b.dataset.name = c.t;
    tabs.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'pan' + i; p.setAttribute('role', 'tabpanel'); p.setAttribute('aria-labelledby', 'tab' + i); p.hidden = i !== 0;
    p.innerHTML = '<h3>' + esc(c.t) + '</h3><ul class="items">' + c.items.map(function (it) {
      var pr = it[1].replace(/^vanaf /, '<small>vanaf</small> ');
      return '<li><span class="nm">' + esc(it[0]) + '</span><span class="lead-dots" aria-hidden="true"></span><span class="pr">' + pr + '</span></li>';
    }).join('') + '</ul>';
    panels.appendChild(p);
  });
  var all = Array.prototype.slice.call(tabs.querySelectorAll('[role=tab]'));
  function sel(t) {
    all.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    if (t.scrollIntoView && tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: t.offsetLeft - 20, behavior: 'smooth' });
  }
  all.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return;
      var n = all[(i + k + all.length) % all.length]; sel(n); n.focus(); e.preventDefault();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-tab]'), function (a) {
    a.addEventListener('click', function () {
      var t = all.filter(function (x) { return x.dataset.name === a.getAttribute('data-tab'); })[0];
      if (t) sel(t);
    });
  });

  // Video: load YouTube only after a click
  var play = document.getElementById('video-play');
  play.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/IdleSaZr7KE?autoplay=1';
    f.title = 'Surinaams-Chinees eethuis De Surinees';
    f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    document.getElementById('video-frame').replaceChildren(f);
  });

  // Today's hours
  var d = new Date().getDay();
  var tr = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (tr) { tr.classList.add('today'); tr.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="vandaag">vandaag</span>'); }
})();
