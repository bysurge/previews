// Mobiel menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  }));
}

// Menukaart-tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
const show = (tab, focus) => {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (focus) tab.focus();
};
if (tabs.length) {
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') show(tabs[(i + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') show(tabs[(i - 1 + tabs.length) % tabs.length], true);
    });
  });
  show(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
}

// Voorbeeldformulieren: versturen niets
document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const msg = f.querySelector('.form-msg');
  if (msg) msg.hidden = false;
}));
