(function () {
  // Mobiel menu
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.textContent = open ? 'Sluiten' : 'Menu';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.textContent = 'Menu';
      }
    });
  }

  // Tabs (meerdere groepen)
  document.querySelectorAll('[role=tablist]').forEach(function (list) {
    var tabs = list.querySelectorAll('[role=tab]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        });
      });
      tab.addEventListener('keydown', function (e) {
        var arr = Array.prototype.slice.call(tabs), i = arr.indexOf(tab);
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var n = arr[(i + (e.key === 'ArrowRight' ? 1 : -1) + arr.length) % arr.length];
          n.focus(); n.click();
        }
      });
    });
  });

  // Links die direct een tab openen (bv. "Bekijk het kerstmenu")
  document.querySelectorAll('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function () {
      var t = document.getElementById(a.getAttribute('data-open-tab'));
      if (t) t.click();
    });
  });

  // Rustige diavoorstelling in de kop
  var slides = document.querySelectorAll('.slides img');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !reduce) {
    var cur = 0;
    setInterval(function () {
      slides[cur].classList.remove('on');
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add('on');
    }, 6000);
  }

  // Vandaag markeren in de openingstijden
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
})();
