// Tabs, mobile nav and hero slideshow. No data is sent anywhere.
document.querySelectorAll('[data-tabs]').forEach(box => {
  const tabs = [...box.querySelectorAll('[role="tab"]')];
  const show = t => {
    tabs.forEach(b => {
      const on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => show(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); show(n); n.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
  });
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', false); } });
}

const slides = [...document.querySelectorAll('.slides img')];
if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('on');
    i = (i + 1) % slides.length;
    slides[i].classList.add('on');
  }, 5000);
}
