document.documentElement.classList.add('js');

// Mobiel menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  btn.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

// Tabs van de kaart
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
function kies(i, focus) {
  tabs.forEach((t, j) => {
    const on = i === j;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    panels[j].hidden = !on;
  });
  if (focus) tabs[i].focus();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(i));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') kies((i + 1) % tabs.length, true);
    if (e.key === 'ArrowLeft') kies((i - 1 + tabs.length) % tabs.length, true);
  });
});
kies(0);
