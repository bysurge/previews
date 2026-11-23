// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
});

// Menu tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    select(n); n.focus();
  });
});

// Pancake builder
const builder = document.getElementById('samenstellen');
const pan = document.getElementById('pan');
const sum = document.getElementById('sum');
const fmt = n => '€ ' + n.toFixed(2).replace('.', ',');
const boxes = [...builder.querySelectorAll('input[type=checkbox]')];
// fixed spots for toppings on the pancake
const spots = [[30,28],[58,22],[70,48],[44,52],[22,58],[52,74],[74,70],[34,38],[62,36],[40,70],[26,42],[66,60],[48,30],[56,58],[36,24],[72,34],[30,72]];
boxes.forEach((b, i) => {
  for (let k = 0; k < 3; k++) {
    const dot = document.createElement('i');
    const s = spots[(i * 3 + k) % spots.length];
    dot.style.left = (s[0] + (k * 7) % 11 - 5) + '%';
    dot.style.top = (s[1] + (i * 5) % 9 - 4) + '%';
    dot.style.background = b.dataset.c;
    dot.dataset.for = i;
    pan.appendChild(dot);
  }
});
function update() {
  let total = parseFloat(builder.querySelector('input[name=base]:checked').value);
  boxes.forEach((b, i) => {
    if (b.checked) total += parseFloat(b.value);
    pan.querySelectorAll(`i[data-for="${i}"]`).forEach(d => d.classList.toggle('on', b.checked));
  });
  sum.textContent = fmt(total);
}
builder.addEventListener('change', update);
document.getElementById('reset').addEventListener('click', () => {
  boxes.forEach(b => (b.checked = false));
  builder.querySelector('input[name=base]').checked = true;
  update();
});
update();

// Opening periods: highlight the current one and show today's hours
const now = new Date();
const md = (now.getMonth() + 1) * 100 + now.getDate();
const day = now.getDay(); // 0 = zondag
const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
let period, hours = null;
if (md >= 1102 || md < 221) { period = 0; if (day === 0 || day >= 3) hours = ['09.30', '17.00']; }
else if (md < 1005) { period = 1; if (day >= 2 && day <= 5) hours = ['09.30', '17.00']; else if (day === 0 || day === 6) hours = ['09.30', '18.00']; }
else { period = 2; if (day !== 1) hours = ['09.30', '17.00']; }
document.querySelectorAll('.period')[period].classList.add('now');
document.getElementById('today-day').textContent = 'Vandaag, ' + names[day];
const line = document.getElementById('today-line');
if (hours) {
  line.innerHTML = '<span class="dot"></span>Open ' + hours[0] + ' - ' + hours[1] + ' uur';
  document.getElementById('today-note').textContent = 'De keuken sluit een half uur eerder. Rond feestdagen en in de vakanties van regio Noord kan het anders zijn.';
} else {
  line.innerHTML = '<span class="dot closed"></span>Vandaag gesloten';
  document.getElementById('today-note').textContent = 'Behalve in de vakanties van regio Noord: dan zijn wij 7 dagen per week open.';
}

// Demo forms: send nothing
document.querySelectorAll('.demo-form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  f.querySelector('.form-msg').hidden = false;
}));
