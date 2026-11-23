(function () {
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // mobiel menu
  var toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
  });

  // menukaart
  var tabsEl = document.getElementById('menu-tabs'), panelsEl = document.getElementById('menu-panels');
  var tagTxt = { vega: 'vegetarisch', huis: 'specialiteit' };
  (window.MENU || []).forEach(function (sec, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab-' + sec.id;
    b.setAttribute('aria-controls', 'panel-' + sec.id); b.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    b.tabIndex = i ? -1 : 0; b.textContent = sec.tab; tabsEl.appendChild(b);
    var p = document.createElement('div');
    p.className = 'panel'; p.id = 'panel-' + sec.id; p.setAttribute('role', 'tabpanel');
    p.setAttribute('aria-labelledby', b.id); p.hidden = i !== 0;
    p.innerHTML = sec.groups.map(function (g) {
      return '<div class="group"><div class="group-head"><h3>' + esc(g.t) + '</h3><span>' + esc(g.s) + '</span></div>' +
        (g.note ? '<p class="group-note">' + esc(g.note) + '</p>' : '') +
        '<ul class="dishes">' + g.items.map(function (d) {
          return '<li class="dish"><span class="nr">' + esc(d[0]) + '</span><span class="nm">' + esc(d[1]) +
            (d[4] ? '<span class="tag tag-' + d[4] + '">' + tagTxt[d[4]] + '</span>' : '') +
            '</span><span class="pr">€ ' + esc(d[3]) + '</span><span class="ds">' + esc(d[2]) + '</span></li>';
        }).join('') + '</ul></div>';
    }).join('');
    panelsEl.appendChild(p);
  });
  var tabs = Array.prototype.slice.call(tabsEl.querySelectorAll('[role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on ? 'true' : 'false'); x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () {
      select(t);
      var top = tabsEl.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 80 });
    });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length]; select(n); n.focus(); e.preventDefault();
    });
  });

  // openingstijden: vandaag markeren
  var now = new Date(), day = now.getDay(), h = now.getHours();
  document.querySelectorAll('.hours tr[data-days]').forEach(function (tr) {
    if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('today');
  });
  var late = day === 5 || day === 6;
  var line = document.getElementById('today-open');
  if (line) {
    var msg = (h >= 17 && (late || h < 23)) ? 'Nu open, vandaag tot ' + (late ? '01:00' : '23:00') : 'Vandaag open van 17:00 tot ' + (late ? '01:00' : '23:00');
    if (h < 1 && (day === 6 || day === 0)) msg = 'Nu open tot 01:00';
    line.insertAdjacentHTML('beforeend', '<br><span class="now">' + msg + '</span>');
  }

  // hero: rustige wissel tussen twee eigen foto's
  var slides = document.querySelectorAll('.hero-slides img');
  if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('on');
    }, 6500);
  }
})();
