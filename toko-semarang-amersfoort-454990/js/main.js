document.documentElement.classList.add('js');

// mobiel menu
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// tabs afhaalmenu
const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
function select(i) {
  tabs.forEach((t, j) => {
    t.setAttribute('aria-selected', i === j);
    t.tabIndex = i === j ? 0 : -1;
    panels[j].hidden = i !== j;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(i));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(n); tabs[n].focus();
    }
  });
});
select(0);

// vandaag open? (vaste tijden + feestdagen 2026 van hun site)
const special = {
  '2026-10-27': null,
  '2026-12-25': null,
  '2026-12-26': ['16.00', '20.00'],
  '2026-12-31': ['12.00', '19.00'],
  '2027-01-01': null
};
(function today() {
  const el = document.querySelector('[data-today]');
  if (!el) return;
  const d = new Date();
  const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  let hours = d.getDay() === 1 ? null : ['16.00', '20.00'];
  if (key in special) hours = special[key];
  if (hours) {
    el.textContent = 'Vandaag open: ' + hours[0] + ' – ' + hours[1] + ' uur';
  } else {
    el.textContent = 'Vandaag gesloten';
    el.classList.add('closed');
  }
  el.hidden = false;
})();

// formulier: voorbeeld, verstuurt niets
const form = document.getElementById('bestelform');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.querySelector('.form-msg').hidden = false;
});
