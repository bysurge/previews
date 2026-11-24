(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('nav-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  // Tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
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
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var n = tabs[(i + d + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () { select(document.getElementById('t-' + a.getAttribute('data-open-tab'))); });
  });

  // Opening status + today in hours table
  var hours = { 0: null, 1: [450, 1050], 2: [450, 1050], 3: [450, 1050], 4: [450, 1050], 5: [450, 1140], 6: [450, 1020] };
  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60; return (h < 10 ? '0' : '') + h + '.' + (mm < 10 ? '0' : '') + mm; }
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-d="' + day + '"]');
  if (row) row.classList.add('today');
  var st = document.getElementById('status'), h = hours[day];
  if (h && min >= h[0] && min < h[1]) { st.textContent = 'Nu open, vandaag tot ' + fmt(h[1]); st.classList.add('is-open'); }
  else if (h && min < h[0]) { st.textContent = 'Vandaag open van ' + fmt(h[0]) + ' tot ' + fmt(h[1]); }
  else {
    var nd = (day + 1) % 7; while (!hours[nd]) nd = (nd + 1) % 7;
    var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    st.textContent = 'Gesloten, ' + (nd === (day + 1) % 7 ? 'morgen' : names[nd]) + ' weer open vanaf ' + fmt(hours[nd][0]);
  }

  // Order form (example only, nothing is sent)
  var sel = document.getElementById('o-product');
  var items = [];
  document.querySelectorAll('.panel').forEach(function (p) {
    var g = document.createElement('optgroup');
    g.label = p.getAttribute('data-group');
    p.querySelectorAll('.prices li').forEach(function (li) {
      var name = li.querySelector('span').textContent;
      var cents = Math.round(parseFloat(li.querySelector('b').textContent.replace(/[^0-9,]/g, '').replace(',', '.')) * 100);
      var o = document.createElement('option');
      o.value = items.length; o.textContent = name + ' (' + li.querySelector('b').textContent + ')';
      items.push({ name: name, cents: cents });
      g.appendChild(o);
    });
    sel.appendChild(g);
  });
  var basket = [];
  var list = document.getElementById('basket-list');
  function euro(c) { return '€ ' + (c / 100).toFixed(2).replace('.', ','); }
  function draw() {
    list.innerHTML = '';
    var total = 0;
    basket.forEach(function (b, i) {
      total += b.qty * b.item.cents;
      var li = document.createElement('li');
      var s = document.createElement('span'); s.textContent = b.qty + ' × ' + b.item.name;
      var p = document.createElement('b'); p.textContent = euro(b.qty * b.item.cents);
      var x = document.createElement('button'); x.type = 'button'; x.textContent = 'Weg'; x.setAttribute('aria-label', b.item.name + ' verwijderen');
      x.addEventListener('click', function () { basket.splice(i, 1); draw(); });
      li.appendChild(s); li.appendChild(p); li.appendChild(x); list.appendChild(li);
    });
    document.getElementById('basket-empty').hidden = basket.length > 0;
    document.getElementById('basket-total').hidden = basket.length === 0;
    document.getElementById('basket-sum').textContent = euro(total);
  }
  document.getElementById('o-add').addEventListener('click', function () {
    var q = Math.max(1, Math.min(99, parseInt(document.getElementById('o-qty').value, 10) || 1));
    var item = items[sel.value];
    var found = basket.filter(function (b) { return b.item === item; })[0];
    if (found) found.qty += q; else basket.push({ item: item, qty: q });
    draw();
  });
  function demo(formId, noteId) {
    document.getElementById(formId).addEventListener('submit', function (e) {
      e.preventDefault();
      var n = document.getElementById(noteId); n.hidden = false;
    });
  }
  demo('order-form', 'order-note');
  demo('ask-form', 'ask-note');
})();
