(() => {
  const top = document.querySelector('.top');
  const onScroll = () => top.classList.toggle('solid', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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

  // tab groups: [role=tablist] with buttons[aria-controls]
  document.querySelectorAll('[role=tablist]').forEach(list => {
    const tabs = [...list.querySelectorAll('[role=tab]')];
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', on);
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }));
  });

  // hero slideshow
  const slides = [...document.querySelectorAll('.hero-slides img')];
  if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 6000);
  }

  // highlight today in opening hours (0 = sunday)
  const d = new Date().getDay();
  document.querySelectorAll('.hours tr[data-day]').forEach(tr => {
    if (tr.dataset.day.split(',').includes(String(d))) tr.classList.add('today');
  });

  // example forms never send anything
  document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = f.querySelector('.form-msg');
    if (msg) msg.hidden = false;
  }));
})();
