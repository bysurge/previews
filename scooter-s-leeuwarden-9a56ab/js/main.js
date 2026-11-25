(function () {
  var top = document.querySelector('.top');
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.menu-toggle');

  function onScroll() { top.classList.toggle('solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // Today: highlight the day in the week list and opening hours.
  var now = new Date();
  var dow = now.getDay();
  var iso = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  var set = document.querySelector('.set[data-day="' + dow + '"]');
  if (set) set.classList.add('is-today');
  var hr = document.querySelector('.hours tr[data-d="' + dow + '"]');
  if (hr) hr.classList.add('is-today');

  // Agenda: hide past dates, show the first few, toggle the rest.
  var items = [].slice.call(document.querySelectorAll('[data-gigs] li'));
  var upcoming = items.filter(function (li) {
    if (li.dataset.date < iso) { li.remove(); return false; }
    return true;
  });
  var SHOW = 8;
  var more = document.querySelector('[data-more]');
  function collapse(c) {
    upcoming.forEach(function (li, i) { li.classList.toggle('is-hidden', c && i >= SHOW); });
    more.setAttribute('aria-expanded', String(!c));
    more.textContent = c ? 'Toon de hele agenda' : 'Toon minder';
  }
  if (upcoming.length > SHOW) {
    collapse(true);
    more.addEventListener('click', function () { collapse(more.getAttribute('aria-expanded') === 'true'); });
  } else {
    more.remove();
  }
  if (!upcoming.length) document.querySelector('[data-gigs-empty]').hidden = false;

  // "Vanavond" strip in the hero.
  var regular = { 3: 'Pub Quiz Night, 20.00 uur', 4: 'Karaoke, 19.00 uur', 5: 'Live muziek, 21.00 uur', 6: 'Live muziek, 21.00 uur', 0: 'Open van 16.00 tot 00.00 uur' };
  var todayGig = upcoming.filter(function (li) { return li.dataset.date === iso; })[0];
  var when = document.querySelector('.tonight-when');
  var what = document.querySelector('.tonight-what');
  if (todayGig) {
    var title = todayGig.querySelector('.g-title').textContent;
    var kind = todayGig.querySelector('.g-kind').textContent;
    var t = (kind.match(/\d\d\.\d\d/) || [''])[0];
    if (todayGig.classList.contains('closed')) { when.textContent = 'Vandaag'; what.textContent = title; }
    else { when.textContent = 'Vanavond'; what.textContent = title + (t ? ', ' + t + ' uur' : ''); }
  } else if (dow === 1 || dow === 2) {
    when.textContent = 'Vandaag gesloten';
    what.textContent = 'Woensdag vanaf 16.00 weer open, om 20.00 de Pub Quiz';
  } else if (regular[dow] !== undefined) {
    when.textContent = 'Vanavond';
    what.textContent = regular[dow];
  }

  // Demo form: nothing is sent.
  var form = document.querySelector('[data-demo-form]');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('[data-form-msg]').hidden = false;
  });
})();
