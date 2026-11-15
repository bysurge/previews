(() => {
  const top = document.getElementById('top-bar');
  const burger = document.querySelector('.burger');
  const nav = document.getElementById('nav');
  const float = document.querySelector('.float-call');
  const hero = document.querySelector('.hero');

  const onScroll = () => {
    top.classList.toggle('scrolled', scrollY > 40);
    if (float) float.classList.toggle('hide', scrollY < hero.offsetHeight * 0.7);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // hero slideshow
  const slides = [...document.querySelectorAll('.hero-slides img')];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (slides.length > 1 && !still) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('is-on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-on');
    }, 6000);
  }

  // tabs
  const tabs = [...document.querySelectorAll('[role=tab]')];
  const select = t => {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((t, n) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      const next = tabs[(n + d + tabs.length) % tabs.length];
      next.focus(); select(next);
    });
  });

  // open now (zo-do 12-22, vr-za 12-01)
  const now = new Date();
  const d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  const late = (d === 6 || d === 0) && h < 1; // vrijdag-/zaterdagnacht tot 01:00
  const close = (d === 5 || d === 6) ? 25 : 22;
  const isOpen = late || (h >= 12 && h < close);
  const badge = document.getElementById('open-now');
  if (badge) {
    badge.textContent = isOpen ? `Nu open tot ${close === 25 ? '01:00' : '22:00'}` : (h < 12 ? 'Vandaag open vanaf 12:00' : 'Morgen weer open vanaf 12:00');
    badge.classList.toggle('is-open', isOpen);
  }
  document.querySelectorAll('.uren tr').forEach(tr => {
    if (tr.dataset.d.split(' ').includes(String(d))) tr.classList.add('today');
  });

  // form
  const form = document.getElementById('form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-msg').hidden = false;
  });
})();
