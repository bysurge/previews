(function () {
  document.documentElement.classList.add('js');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  function show(id) {
    tabs.forEach(function (t) { t.setAttribute('aria-selected', t.getAttribute('aria-controls') === id ? 'true' : 'false'); });
    panels.forEach(function (p) { p.hidden = p.id !== id; });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      show(t.getAttribute('aria-controls'));
      t.scrollIntoView({ block: 'nearest', inline: 'center' });
    });
  });
  if (tabs.length) show(tabs[0].getAttribute('aria-controls'));
})();
