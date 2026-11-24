(function () {
  var body = document.body;
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#nav a').forEach(function (a) {
      a.addEventListener('click', function () { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
    });
  }

  // Tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role=tab]'));
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
      select(n); n.focus(); e.preventDefault();
    });
  });

  // Opening hours: [open, close] in minutes, per weekday (0 = zondag)
  var H = { 0: [840, 1260], 1: null, 2: [690, 1260], 3: [690, 1260], 4: [690, 1260], 5: [690, 1260], 6: [690, 1260] };
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  var st = document.getElementById('status');
  function fmt(m) { return Math.floor(m / 60) + '.' + ('0' + (m % 60)).slice(-2); }
  if (st) {
    var h = H[day];
    if (h && min >= h[0] && min < h[1]) { st.textContent = 'Nu open, vandaag tot ' + fmt(h[1]) + ' uur'; st.classList.add('open'); }
    else if (h && min < h[0]) { st.textContent = 'Vandaag open vanaf ' + fmt(h[0]) + ' uur'; }
    else {
      for (var k = 1; k <= 7; k++) {
        var dd = (day + k) % 7;
        if (H[dd]) { st.textContent = 'Nu gesloten, ' + (k === 1 ? 'morgen' : ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'][dd]) + ' weer open vanaf ' + fmt(H[dd][0]) + ' uur'; break; }
      }
    }
  }

  // Weekmenu: mark the current week and show it in the hero ticket
  var items = document.querySelectorAll('#weeks li');
  var current = null;
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  items.forEach(function (li) {
    var p = li.getAttribute('data-d').split('-');
    var start = new Date(+p[0], +p[1] - 1, +p[2]);
    var end = new Date(start); end.setDate(end.getDate() + 7);
    if (today >= start && today < end) { li.classList.add('now'); current = li; }
    else if (today >= end) li.classList.add('past');
  });
  var dish = document.getElementById('week-dish');
  var M = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
  function label(li, word) {
    var p = li.getAttribute('data-d').split('-');
    return word + ', vanaf ' + (+p[2]) + ' ' + M[+p[1] - 1];
  }
  function dishOf(li) { return li.childNodes[1].textContent.trim(); }
  if (current) {
    if (dish) dish.textContent = dishOf(current);
    var wn = document.getElementById('w-now'), wx = document.getElementById('w-next');
    if (wn) { wn.textContent = dishOf(current); wn.previousElementSibling.textContent = label(current, 'Deze week'); }
    var nx = current.nextElementSibling;
    if (wx) {
      if (nx) { wx.textContent = dishOf(nx); wx.previousElementSibling.textContent = label(nx, 'Volgende week'); }
      else wx.parentNode.hidden = true;
    }
  }
})();
