(function () {
  var body = document.body;
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  function onScroll() { body.classList.toggle('at-top', window.scrollY < window.innerHeight * 0.6); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Opening status (regular hours; holidays not taken into account)
  var hours = { 0: [12, 21], 1: null, 2: [16, 21], 3: [16, 21], 4: [16, 21], 5: [16, 21], 6: [12, 21] };
  var names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var st = document.getElementById('status'), t = hours[d], msg;
  function pad(n) { return (n < 10 ? '0' : '') + n + ':00'; }
  if (t && h >= t[0] && h < t[1]) { msg = 'Nu open tot ' + pad(t[1]) + ', bel uw bestelling door'; st.classList.add('open'); }
  else if (t && h < t[0]) { msg = 'Vandaag open van ' + pad(t[0]) + ' tot ' + pad(t[1]); }
  else {
    var n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
    msg = 'Nu gesloten, ' + (n === (d + 1) % 7 ? 'morgen' : names[n]) + ' weer open vanaf ' + pad(hours[n][0]);
  }
  st.textContent = msg;
  var row = document.querySelector('.uren tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');

  // Afhaalkaart: search by name or number
  var input = document.getElementById('zoek');
  var cats = Array.prototype.slice.call(document.querySelectorAll('.cat'));
  var geen = document.getElementById('geen');
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  input.addEventListener('input', function () {
    var q = norm(input.value.trim()), any = false;
    cats.forEach(function (c) {
      var shown = 0;
      c.querySelectorAll('li').forEach(function (li) {
        var nr = norm(li.querySelector('.nr').textContent);
        var ok = !q || (/^\d+[a-z]?$/.test(q) ? nr === q || nr.indexOf(q) === 0 : norm(li.textContent).indexOf(q) > -1);
        li.hidden = !ok; if (ok) shown++;
      });
      c.hidden = !shown; if (shown) any = true;
    });
    geen.hidden = any;
  });
})();
