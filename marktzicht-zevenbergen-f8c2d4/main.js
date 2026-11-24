(function () {
  var top = document.getElementById('top');
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.menu-toggle');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40 || nav.classList.contains('open')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? 'Sluiten' : 'Menu';
    onScroll();
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) toggle.click();
  });

  // Tabs
  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    });
  });

  // Hero slideshow (calm crossfade)
  var slides = [].slice.call(document.querySelectorAll('.slides img'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 6000);
  }

  // Opening hours per season (from their own site)
  // day: 0 = zondag ... 6 = zaterdag; null = gesloten
  var seasons = [
    { months: [10, 11, 12, 1, 2, 3], days: [['12:00', '21:30'], null, null, ['12:00', '21:30'], ['12:00', '21:30'], ['12:00', '00:00'], ['12:00', '00:00']] },
    { months: [4, 5, 6, 9], days: [['12:00', '21:30'], ['12:00', '21:30'], null, ['12:00', '21:30'], ['12:00', '21:30'], ['12:00', '01:00'], ['12:00', '01:00']] },
    { months: [7, 8], days: [['12:00', '23:00'], ['12:00', '23:00'], ['12:00', '23:00'], ['12:00', '23:00'], ['12:00', '23:00'], ['12:00', '01:00'], ['12:00', '01:00']] }
  ];
  var dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  var now = new Date();
  var m = now.getMonth() + 1;
  var s = seasons.filter(function (x) { return x.months.indexOf(m) > -1; })[0];
  var today = document.getElementById('today');
  if (s && today) {
    var h = s.days[now.getDay()];
    today.textContent = h
      ? 'Vandaag (' + dayNames[now.getDay()] + ') open van ' + h[0] + ' tot ' + h[1] + ' uur'
      : 'Vandaag (' + dayNames[now.getDay()] + ') gesloten';
  }
  [].forEach.call(document.querySelectorAll('.season'), function (el) {
    var ms = el.getAttribute('data-months').split(',').map(Number);
    if (ms.indexOf(m) > -1) {
      el.classList.add('now');
      el.querySelector('.flag').textContent = 'Nu van toepassing';
    }
  });
})();
