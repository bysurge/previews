(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };

  var top = document.querySelector('.top');
  function onScroll() { top.classList.toggle('solid', window.scrollY > 30); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', open); nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  function row(it) {
    var o = it[3] || {};
    return (o.group ? '<li class="group">' + esc(o.group) + '</li>' : '') +
      '<li class="item"><div class="it-top"><h4>' + esc(it[0]) +
      (o.v ? ' <span class="leaf" title="vegetarisch" aria-label="vegetarisch"></span>' : '') +
      (o.tag ? ' <span class="tag">' + esc(o.tag) + '</span>' : '') +
      '</h4><span class="dots" aria-hidden="true"></span><b class="pr">' + esc(it[2]) + '</b></div>' +
      (it[1] ? '<p>' + esc(it[1]) + '</p>' : '') + '</li>';
  }

  function build(data, tabsId, panelsId) {
    var tabsEl = document.getElementById(tabsId), panelsEl = document.getElementById(panelsId);
    data.forEach(function (cat, c) {
      var t = document.createElement('button');
      t.type = 'button'; t.setAttribute('role', 'tab'); t.id = 't-' + cat.id;
      t.setAttribute('aria-controls', 'p-' + cat.id); t.setAttribute('aria-selected', c === 0);
      t.tabIndex = c === 0 ? 0 : -1; t.textContent = cat.tab;
      tabsEl.appendChild(t);
      var p = document.createElement('div');
      p.className = 'panel'; p.id = 'p-' + cat.id; p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', t.id); p.hidden = c !== 0;
      p.innerHTML = (cat.note ? '<p class="note">' + esc(cat.note) + '</p>' : '') +
        '<ul class="items">' + cat.items.map(row).join('') + '</ul>';
      panelsEl.appendChild(p);
    });
    var tabs = tabsEl.querySelectorAll('[role=tab]');
    function select(t, focus) {
      tabs.forEach(function (o) {
        var on = o === t;
        o.setAttribute('aria-selected', on); o.tabIndex = on ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) t.focus();
    }
    tabs.forEach(function (t, n) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (d) select(tabs[(n + d + tabs.length) % tabs.length], true);
      });
    });
  }
  build(LUNCH, 'lunchTabs', 'lunchPanels');
  build(DRANK, 'drankTabs', 'drankPanels');

  document.getElementById('vitList').innerHTML = VITRINE.map(function (v) {
    return '<li><div class="it-top"><h4>' + esc(v[0]) + '</h4><span class="dots" aria-hidden="true"></span><b class="pr">' + v[2] +
      (v[3] ? ' <small>' + v[3] + '</small>' : '') + '</b></div>' + (v[1] ? '<p>' + esc(v[1]) + '</p>' : '') + '</li>';
  }).join('');

  document.getElementById('taartLijst').innerHTML = TAARTEN.map(function (t) {
    return '<li><h4>' + esc(t[0]) + '</h4><p>' + esc(t[1]) + '</p></li>';
  }).join('');

  var r = document.querySelector('#tijden tr[data-d="' + new Date().getDay() + '"]');
  if (r) r.classList.add('vandaag');

  // One entrance moment: the hero photos settle in
  if (!reduce) document.body.classList.add('anim');
})();
