(function () {
  var M = window.MENU;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function row(it) {
    return '<li class="dish"><span class="dish-name">' + esc(it[0]) + '</span><span class="dish-dots" aria-hidden="true"></span><span class="dish-price">€ ' + it[1] + '</span>' +
      (it[2] ? '<span class="dish-desc">' + esc(it[2]) + '</span>' : '') + '</li>';
  }
  function groups(list) {
    return list.map(function (g) {
      return '<div class="group"><h3>' + esc(g.t) + '</h3>' + (g.n ? '<p class="group-note">' + esc(g.n) + '</p>' : '') +
        '<ul class="dishes">' + g.items.map(row).join('') + '</ul></div>';
    }).join('');
  }
  function fill(id, html) { var el = document.getElementById(id); if (el) el.insertAdjacentHTML('afterbegin', html); }

  fill('p-pannenkoeken', '<div class="cols">' + groups(M.pannenkoeken) + '</div>');
  fill('ing-hartig', M.hartig.map(function (i) { return row([i[0], i[1]]); }).join(''));
  fill('ing-zoet', M.zoet.map(function (i) { return row([i[0], i[1]]); }).join(''));
  fill('p-kinderen', '<div class="cols">' + groups(M.kinderen) + '</div>');
  fill('p-meer', '<div class="cols">' + groups(M.meer) + '</div>');
  fill('p-ijs', '<div class="cols">' + groups(M.ijs) + '</div>');
  fill('p-dranken', '<div class="cols">' + groups(M.dranken) + '</div>');

  // Tabs
  var tabs = [].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-open-tab'));
      if (t) select(t);
    });
  });

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); document.body.classList.remove('nav-open'); }
  });

  // Header state
  var head = document.querySelector('.top');
  function onScroll() { head.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Open today?
  var st = document.getElementById('today');
  if (st) {
    var d = new Date().getDay(); // 0 zo .. 6 za
    var open = d === 0 || d >= 3;
    st.textContent = open ? 'Vandaag open van 12.00 tot 20.00 uur' : 'Vandaag gesloten, woensdag weer open vanaf 12.00 uur';
    st.classList.toggle('closed', !open);
  }

  // Form: preview only
  var form = document.getElementById('reserveer-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    msg.hidden = false;
    msg.focus();
  });
})();
