// Shibui preview: header, menu tabs, promo pop-up, open/closed status, postcode check. Nothing is sent anywhere.
(function () {
  var body = document.body;

  // Header background on scroll + mobile nav
  var bar = document.getElementById('top-bar');
  var cta = document.querySelector('.float-cta');
  function onScroll() {
    var y = window.scrollY;
    bar.classList.toggle('scrolled', y > 40);
    cta.classList.toggle('show', y > 520);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  var tog = document.querySelector('.nav-toggle');
  tog.addEventListener('click', function () {
    var open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    tog.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-open'); tog.setAttribute('aria-expanded', 'false'); });
  });

  // Menu tabs, with the photo following the chosen tab
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  var img = document.getElementById('menu-img');
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (img && img.getAttribute('src') !== tab.dataset.img) {
      img.classList.add('fade');
      setTimeout(function () { img.src = tab.dataset.img; img.alt = tab.dataset.alt; }, 180);
      img.onload = function () { img.classList.remove('fade'); };
    }
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });

  // Promo pop-up: opens once per visit, can be reopened from the hero and the menu
  var dlg = document.getElementById('promo');
  function openPromo() { if (dlg.showModal && !dlg.open) dlg.showModal(); }
  function closePromo() { if (dlg.open) dlg.close(); }
  document.querySelectorAll('[data-open-promo]').forEach(function (b) { b.addEventListener('click', openPromo); });
  document.querySelectorAll('[data-close-promo]').forEach(function (b) { b.addEventListener('click', closePromo); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closePromo(); });
  dlg.addEventListener('close', function () { try { sessionStorage.setItem('shibui-promo', '1'); } catch (e) {} });
  var seen = false;
  try { seen = sessionStorage.getItem('shibui-promo') === '1'; } catch (e) {}
  if (!seen && !/[?&]nopromo/.test(location.search)) setTimeout(openPromo, 900);

  // Opening status, hours as on their main site
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var open = (d === 5 || d === 6 || d === 0) ? 12 : 14, close = 21;
  var st = document.getElementById('status');
  if (h >= open && h < close) { st.textContent = 'Nu open tot 21.00'; }
  else if (h < open) { st.textContent = 'Vandaag open vanaf ' + open + '.00'; st.classList.add('closed'); }
  else {
    var nd = (d + 1) % 7, no = (nd === 5 || nd === 6 || nd === 0) ? 12 : 14;
    st.textContent = 'Gesloten, morgen open vanaf ' + no + '.00'; st.classList.add('closed');
  }
  st.hidden = false;
  var row = document.querySelector('#hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');

  // Postcode check (only compares with the list on the page)
  var form = document.getElementById('pc');
  var codes = form.dataset.codes.split(',');
  var out = document.getElementById('pc-out');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = (document.getElementById('pc-in').value.match(/\d{4}/) || [''])[0];
    document.querySelectorAll('.codes li').forEach(function (li) { li.classList.toggle('hit', li.textContent === v); });
    out.classList.remove('yes');
    if (!v) { out.textContent = 'Vul de vier cijfers van je postcode in, bijvoorbeeld 6511.'; return; }
    if (codes.indexOf(v) > -1) { out.textContent = 'Ja, we bezorgen in ' + v + '.'; out.classList.add('yes'); }
    else { out.textContent = 'In ' + v + ' bezorgen we helaas niet. Afhalen kan wel.'; }
  });
})();
