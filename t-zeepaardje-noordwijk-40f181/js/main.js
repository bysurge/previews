(() => {
// Menu button
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  };
  burger.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

// Tabs (each tablist controls its own panels)
document.querySelectorAll('[role=tablist]').forEach((list) => {
  const tabs = [...list.querySelectorAll('[role=tab]')];
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) { e.preventDefault(); select(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
});

// Highlight today in the opening hours
const today = new Date().getDay();
document.querySelectorAll(`.uren tr[data-dag="${today}"]`).forEach((tr) => tr.classList.add('vandaag'));

// Demo forms: never send anything
document.querySelectorAll('form[data-demo]').forEach((f) => {
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = f.querySelector('.form-msg');
    if (msg) msg.hidden = false;
  });
});

// Sticky header background after scrolling
const header = document.querySelector('.top');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
})();
