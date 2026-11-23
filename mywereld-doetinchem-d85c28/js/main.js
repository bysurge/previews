// Mobile menu
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Price indication (based on the "vanaf" prices on their site)
const state = { adults: 2, seniors: 0, kids: 0 };
const ages = [];
const agesBox = document.getElementById('kid-ages');
const euro = n => '€' + (Number.isInteger(n) ? n + ',-' : n.toFixed(2).replace('.', ','));

function renderAges() {
  while (ages.length < state.kids) ages.push(6);
  ages.length = state.kids;
  agesBox.innerHTML = ages.map((a, i) =>
    `<label>Kind ${i + 1}<select data-i="${i}">${Array.from({ length: 12 }, (_, y) => `<option value="${y}"${y === a ? ' selected' : ''}>${y} jaar</option>`).join('')}</select></label>`
  ).join('');
}
function update() {
  ['adults', 'seniors', 'kids'].forEach(k => document.getElementById(k).textContent = state[k]);
  const base = Number(document.querySelector('input[name=dag]:checked').value);
  let total = state.adults * base - state.seniors * 3;
  ages.forEach(a => { if (a >= 3) total += a * 3; });
  document.getElementById('total').textContent = euro(total);
}
document.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => {
  const k = b.dataset.step;
  state[k] = Math.max(0, Math.min(30, state[k] + Number(b.dataset.d)));
  if (k === 'adults' && state.adults < 1 && state.kids === 0) state.adults = 1;
  if (state.seniors > state.adults) state.seniors = state.adults;
  if (k === 'kids') renderAges();
  update();
}));
agesBox.addEventListener('change', e => { ages[e.target.dataset.i] = Number(e.target.value); update(); });
document.querySelectorAll('input[name=dag]').forEach(r => r.addEventListener('change', update));
update();

// Contact form: preview only
document.getElementById('mail-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
