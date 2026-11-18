document.documentElement.classList.add('js');
(function () {
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav');
  function set(o) { n.classList.toggle('open', o); t.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; }
  t.addEventListener('click', function () { set(!n.classList.contains('open')); });
  n.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });

  var tabs = [].slice.call(document.querySelectorAll('[role=tab]'));
  function show(tab) {
    tabs.forEach(function (b) {
      var on = b === tab;
      b.setAttribute('aria-selected', on);
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (b) { b.addEventListener('click', function () { show(b); }); });
  if (tabs.length) show(tabs[0]);


  var f = document.getElementById('form');
  f.addEventListener('submit', function (e) { e.preventDefault(); document.getElementById('msg').hidden = false; });
})();
