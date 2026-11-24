(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  });

  // Prijzen van de site van Mallejan (per persoon)
  var P = {
    week:    { '2': { wok: '41,95', fondue: '44,95', k1: '6,50', k4: '19,50', k8: '22,50', k10: '25,50' },
               '3': { wok: '46,95', fondue: '49,95', k1: '6,50', k4: '22,00', k8: '25,00', k10: '28,00' } },
    weekend: { '2': { wok: '43,95', fondue: '46,95', k1: '7,50', k4: '21,50', k8: '24,50', k10: '27,50' },
               '3': { wok: '48,95', fondue: '51,95', k1: '7,50', k4: '24,00', k8: '27,00', k10: '30,00' } }
  };
  var state = { day: 'week', dur: '2' };
  function render() {
    var row = P[state.day][state.dur];
    document.querySelectorAll('[data-k]').forEach(function (el) {
      el.textContent = '€' + row[el.dataset.k];
      el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
    });
  }
  document.querySelectorAll('.seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      var key = b.dataset.day ? 'day' : 'dur';
      state[key] = b.dataset[key];
      b.parentNode.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-selected', x === b); });
      render();
    });
  });
})();
