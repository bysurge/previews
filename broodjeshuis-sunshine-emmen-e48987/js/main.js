(function () {
  // mobile menu
  var toggle = document.querySelector('.menu-toggle');
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('#nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // tabs
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

  // opening hours: today
  var hours = { 1: [600, 870], 2: [600, 930], 3: [600, 930], 4: [600, 930], 5: [600, 930], 6: [600, 870] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  function hm(m) { return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2); }
  var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('.hours [data-day="' + day + '"]');
  if (row) row.classList.add('is-today');
  var el = document.getElementById('today'), h = hours[day];
  if (h && mins >= h[0] && mins < h[1]) el.textContent = 'Nu open, tot ' + hm(h[1]);
  else {
    for (var k = 0; k < 8; k++) {
      var d = (day + k) % 7, hh = hours[d];
      if (hh && (k > 0 || mins < hh[0])) {
        el.textContent = 'Nu gesloten · ' + (k === 0 ? 'vandaag' : k === 1 ? 'morgen' : names[d]) + ' open vanaf ' + hm(hh[0]);
        el.classList.add('is-closed'); break;
      }
    }
  }

  // demo order basket (sends nothing)
  var basket = {}, order = [];
  var btn = document.querySelector('.basket-btn'), drawer = document.getElementById('basket');
  var euro = function (n) { return '€ ' + n.toFixed(2).replace('.', ','); };
  function render() {
    var count = 0, total = 0, list = document.getElementById('b-list');
    list.innerHTML = '';
    order.forEach(function (name) {
      var it = basket[name]; if (!it.q) return;
      count += it.q; total += it.q * it.p;
      var li = document.createElement('li');
      li.innerHTML = '<span class="q"></span><span class="n"></span><span class="p"></span><button type="button" aria-label="Eén minder">−</button>';
      li.querySelector('.q').textContent = it.q + '×';
      li.querySelector('.n').textContent = name;
      li.querySelector('.p').textContent = euro(it.q * it.p);
      li.querySelector('button').addEventListener('click', function () { it.q--; render(); });
      list.appendChild(li);
    });
    document.getElementById('b-count').textContent = count;
    document.getElementById('b-total').textContent = euro(total);
    document.getElementById('b-total2').textContent = euro(total);
    btn.hidden = count === 0;
    if (!count) close();
  }
  document.querySelectorAll('[data-name][data-price]').forEach(function (b) {
    b.addEventListener('click', function () {
      var n = b.getAttribute('data-name');
      if (!basket[n]) { basket[n] = { q: 0, p: parseFloat(b.getAttribute('data-price')) }; order.push(n); }
      basket[n].q++;
      b.classList.add('done');
      setTimeout(function () { b.classList.remove('done'); }, 500);
      render();
    });
  });
  function open() { drawer.hidden = false; btn.setAttribute('aria-expanded', 'true'); }
  function close() { drawer.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
  btn.addEventListener('click', function () { drawer.hidden ? open() : close(); });
  document.querySelector('.basket-close').addEventListener('click', close);
  drawer.addEventListener('click', function (e) { if (e.target === drawer) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.querySelector('.form-msg').hidden = false;
  });
})();
