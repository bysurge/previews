document.documentElement.classList.add('js');

// mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') !== 'true';
  btn.setAttribute('aria-expanded', open);
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', e => {
  if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
});

// menu tabs
const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
const panels = [...document.querySelectorAll('.panel')];
const menu = document.getElementById('menu');
const tablist = document.querySelector('.tabs');
function show(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => { show(t); t.scrollIntoView({ block: 'nearest', inline: 'center' }); });
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    n.focus(); show(n);
  });
});
show(tabs[0]);

// search across the whole menu
const zoek = document.getElementById('zoek');
const noHit = document.getElementById('no-hit');
zoek.addEventListener('input', () => {
  const q = zoek.value.trim().toLowerCase();
  if (!q) {
    menu.classList.remove('searching');
    tablist.hidden = false;
    panels.forEach(p => p.querySelectorAll('li').forEach(li => li.hidden = false));
    show(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
    noHit.hidden = true;
    return;
  }
  menu.classList.add('searching');
  tablist.hidden = true;
  let total = 0;
  panels.forEach(p => {
    let n = 0;
    p.querySelectorAll('li').forEach(li => {
      const hit = li.textContent.toLowerCase().includes(q);
      li.hidden = !hit; if (hit) n++;
    });
    p.hidden = n === 0; total += n;
  });
  noHit.hidden = total > 0;
});

// demo form
const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').hidden = false;
});
