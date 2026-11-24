(function () {
  // Menukaarten opbouwen
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  function renderPanel(id, sections) {
    var el = document.getElementById('p-' + id);
    if (!el || !window.MENU) return;
    var html = '<div class="m-cols">';
    sections.forEach(function (s) {
      html += '<section class="m-sec">';
      html += '<h3 class="m-title"><span>' + esc(s.title) + '</span></h3>';
      if (s.hand) html += '<p class="hand m-hand">' + esc(s.hand) + '</p>';
      if (s.sub) html += '<p class="m-sub">' + esc(s.sub) + '</p>';
      if (s.wine) html += '<p class="m-sub">' + (s.title === 'Mousserend' ? 'Glas / fles' : 'Glas / karaf / fles') + '</p>';
      if (s.items) {
        html += '<ul class="m-list">';
        s.items.forEach(function (it) {
          html += '<li><div class="m-row"><span class="m-name">' + esc(it[0]) +
            (it[3] ? ' <em class="m-tag">Markt klassieker</em>' : '') +
            '</span><span class="m-dots"></span><span class="m-price">' + esc(it[2]) + '</span></div>' +
            (it[1] ? '<p class="m-desc">' + esc(it[1]) + '</p>' : '') + '</li>';
        });
        html += '</ul>';
      }
      if (s.plain) {
        html += '<ul class="m-plain">';
        s.plain.forEach(function (p) { html += '<li>' + esc(p) + '</li>'; });
        html += '</ul>';
      }
      if (s.after) html += '<p class="hand m-after">' + esc(s.after) + '</p>';
      html += '</section>';
    });
    el.innerHTML = html + '</div>';
  }
  if (window.MENU) Object.keys(window.MENU).forEach(function (k) { renderPanel(k, window.MENU[k]); });

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!n) return;
      var next = tabs[(i + n + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });
  // Weekdag: na 16.00 standaard de dinerkaart tonen
  if (new Date().getHours() >= 16) select(document.getElementById('tab-diner'));
  document.querySelectorAll('[data-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById('tab-' + a.getAttribute('data-tab'))); });
  });

  // Mobiel menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  btn.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Header vast kleuren na de hero
  var top = document.getElementById('top');
  function onScroll() { top.classList.toggle('is-solid', window.scrollY > 60); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Vandaag open
  var today = document.getElementById('today');
  if (today) {
    var d = new Date().getDay();
    var now = new Date(), ymd = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    var t = (d === 5 || d === 6 || (ymd >= 20261221 && ymd <= 20270103)) ? '11.00' : '12.00';
    var msg = (ymd === 20261225 || ymd === 20270101) ? 'Vandaag gesloten' : 'Vandaag open vanaf ' + t + ' uur';
    today.textContent = msg + ' · Drieharingstraat 27, Utrecht';
  }

  // Rustige hero-wissel (niet bij reduced motion)
  var slides = document.querySelectorAll('.hero-slides img');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('is-on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('is-on');
    }, 6500);
  }
})();
