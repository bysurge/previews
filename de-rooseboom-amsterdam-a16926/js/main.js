// menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// open nu? (di-za 15-24, zo 15-21, ma dicht)
const hours = { 0: [15, 21], 1: null, 2: [15, 24], 3: [15, 24], 4: [15, 24], 5: [15, 24], 6: [15, 24] };
const now = new Date();
const d = now.getDay();
const h = now.getHours() + now.getMinutes() / 60;
const st = document.getElementById('status');
const t = hours[d];
if (t && h >= t[0] && h < t[1]) {
  st.textContent = 'Nu open, tot ' + (t[1] === 24 ? '00:00' : t[1] + ':00') + ' uur';
  st.classList.add('open');
} else if (t && h < t[0]) {
  st.textContent = 'Vandaag open vanaf 15:00 uur';
} else {
  let n = (d + 1) % 7; while (!hours[n]) n = (n + 1) % 7;
  const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  st.textContent = 'Nu gesloten, ' + (n === (d + 1) % 7 ? 'morgen' : names[n]) + ' weer open vanaf 15:00 uur';
}
st.hidden = false;
const today = document.querySelector('.day[data-day="' + d + '"]');
if (today) today.classList.add('today');

// kaart tabs
const tabs = [...document.querySelectorAll('[role=tab]')];
function select(tab) {
  tabs.forEach(b => {
    const on = b === tab;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
    document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((b, i) => {
  b.addEventListener('click', () => select(b));
  b.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(n); n.focus();
    }
  });
});

// formulier: voorbeeld
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
