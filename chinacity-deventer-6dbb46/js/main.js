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

  // Search in the takeaway menu (name, description or number)
  var q = document.getElementById('q');
  var cats = document.querySelectorAll('.mcat');
  var none = document.getElementById('noresult');
  if (q) q.addEventListener('input', function () {
    var v = q.value.trim().toLowerCase();
    var any = false;
    cats.forEach(function (c) {
      var shown = 0;
      c.querySelectorAll('li').forEach(function (li) {
        var s = li.getAttribute('data-s');
        var hit = !v || (/^\d+[a-z]*$/.test(v) ? s.split(' ')[0] === v || s.split(' ')[0].indexOf(v) === 0 : s.indexOf(v) > -1);
        li.hidden = !hit; if (hit) shown++;
      });
      c.hidden = shown === 0; if (shown) any = true;
    });
    none.hidden = any;
  });

  // Opening hours [open, close] in minutes; 0 = zondag
  var H = { 0: [690, 1290], 1: null, 2: [720, 1260], 3: [720, 1260], 4: [720, 1260], 5: [690, 1290], 6: [690, 1290] };
  var now = new Date(), day = now.getDay(), min = now.getHours() * 60 + now.getMinutes();
  var row = document.querySelector('#hours tr[data-day="' + day + '"]');
  if (row) row.classList.add('today');
  function fmt(m) { return Math.floor(m / 60) + '.' + ('0' + (m % 60)).slice(-2); }
  var st = document.getElementById('status');
  if (st) {
    var h = H[day];
    if (h && min >= h[0] && min < h[1]) { st.textContent = 'Nu open, vandaag tot ' + fmt(h[1]) + ' uur'; st.classList.add('open'); }
    else if (h && min < h[0]) st.textContent = 'Vandaag open vanaf ' + fmt(h[0]) + ' uur';
    else {
      for (var k = 1; k <= 7; k++) {
        var d = (day + k) % 7;
        if (H[d]) { st.textContent = 'Nu gesloten, ' + (k === 1 ? 'morgen' : ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'][d]) + ' weer open vanaf ' + fmt(H[d][0]) + ' uur'; break; }
      }
    }
  }

  // Demo form
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
