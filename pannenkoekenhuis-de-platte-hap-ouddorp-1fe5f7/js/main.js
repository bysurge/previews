// Mobile menu
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Menu tabs
document.querySelectorAll('[role=tablist]').forEach(list => {
  const tabs = [...list.querySelectorAll('[role=tab]')];
  const select = t => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const n = tabs[(i + d + tabs.length) % tabs.length];
      n.focus(); select(n);
    });
  });
});

// Example forms: never send anything
document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const msg = f.querySelector('.form-msg');
  if (msg) { msg.hidden = false; msg.textContent = 'Dit is een voorbeeld: het formulier verstuurt nog niets.'; }
}));

// Header shade after scrolling
const head = document.querySelector('.top');
const shade = () => head && head.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', shade, { passive: true }); shade();
