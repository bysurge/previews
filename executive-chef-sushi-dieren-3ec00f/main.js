(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // menu tabs
  var tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (window.innerWidth <= 960) tab.scrollIntoView({ block: 'nearest', inline: 'center' });
    });
  });

  // today's hours
  var hours = { 0: '15:00 tot 20:00', 1: 'gesloten', 2: 'gesloten', 3: '16:00 tot 20:00', 4: '16:00 tot 20:00', 5: '16:00 tot 20:00', 6: '15:00 tot 20:00' };
  var d = new Date().getDay();
  var el = document.getElementById('today');
  if (el) el.textContent = hours[d] === 'gesloten' ? 'gesloten, woensdag weer open vanaf 16:00' : 'open van ' + hours[d];
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('now');
})();
