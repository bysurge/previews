// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

// Highlight today in the week strip
const today = document.querySelector(`.days li[data-day="${new Date().getDay()}"]`);
if (today) today.classList.add('today');

// Menu tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab, focus) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') select(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') select(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});

// Arrangement buttons preselect the reservation type
document.querySelectorAll('[data-arr]').forEach(a => a.addEventListener('click', () => {
  const r = document.querySelector('input[name="soort"][value="Arrangement"]');
  if (r) r.checked = true;
}));

// Closed on Wednesday and Thursday
const date = document.querySelector('input[name="datum"]');
const warn = document.querySelector('.date-warn');
if (date && warn) {
  date.min = new Date().toISOString().slice(0, 10);
  date.addEventListener('change', () => {
    const d = new Date(date.value + 'T12:00');
    warn.hidden = !(d.getDay() === 3 || d.getDay() === 4);
  });
}

// Example forms: never send anything
document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const m = f.querySelector('.form-msg');
  if (m) m.hidden = false;
}));
