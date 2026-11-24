(function () {
  var top = document.querySelector('.top');
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');

  function onScroll() { top.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Opening hours (from their own site). Times in minutes; day 0 = sunday.
  var hours = { 1: [510, 960], 2: [510, 960], 3: [510, 960], 4: [510, 1200], 5: [510, 1200], 6: [570, 1080] };
  function fmt(m) { var h = Math.floor(m / 60), mm = m % 60; return h + '.' + (mm < 10 ? '0' : '') + mm; }
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    var get = function (t) { return (parts.find(function (p) { return p.type === t; }) || {}).value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    var now = parseInt(get('hour'), 10) % 24 * 60 + parseInt(get('minute'), 10);
    var status = document.getElementById('status');
    var today = hours[day];
    var dot = document.createElement('span');
    dot.className = 'dot';
    var text;
    if (today && now >= today[0] && now < today[1]) {
      text = 'Nu open, tot ' + fmt(today[1]) + ' uur';
    } else if (today && now < today[0]) {
      text = 'Vandaag open vanaf ' + fmt(today[0]) + ' uur';
      dot.className = 'dot dicht';
    } else {
      text = 'Weteringschans 118, Amsterdam';
      dot = null;
    }
    if (dot) { status.textContent = ''; status.appendChild(dot); status.appendChild(document.createTextNode(text)); }
    document.querySelectorAll('.uren tr[data-days]').forEach(function (tr) {
      if (tr.getAttribute('data-days').split(',').indexOf(String(day)) > -1) tr.classList.add('vandaag');
    });
  } catch (e) { /* keep the address */ }

  var form = document.getElementById('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
