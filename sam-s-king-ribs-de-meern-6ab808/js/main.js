(function () {
  // mobile menu
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn) {
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { document.body.classList.remove('nav-open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }

  // menu tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function select(t) {
    tabs.forEach(function (x) {
      var on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!k) return;
      var n = tabs[(i + k + tabs.length) % tabs.length];
      select(n); n.focus(); e.preventDefault();
    });
  });

  // click-to-load videos (their own YouTube videos)
  Array.prototype.forEach.call(document.querySelectorAll('.video[data-yt]'), function (v) {
    var b = v.querySelector('.play');
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + v.getAttribute('data-yt') + '?autoplay=1&rel=0&modestbranding=1';
      f.title = b.getAttribute('aria-label').replace('Speel de video', 'Video');
      f.allow = 'autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      v.innerHTML = '';
      v.appendChild(f);
    });
  });

  // today in opening hours
  var d = new Date().getDay();
  var row = document.querySelector('.hours tr[data-d="' + d + '"]');
  if (row) row.classList.add('today');
  var line = document.getElementById('today-line');
  if (line) {
    var h = new Date().getHours();
    if (d === 1 || d === 2) line.textContent = 'Vandaag gesloten. Woensdag t/m zondag open van 17:00 tot 22:00';
    else if (h < 22) line.textContent = 'Vandaag open van 17:00 tot 22:00';
  }

  // example form
  var form = document.getElementById('form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
