document.documentElement.classList.add('js');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header turns solid after scrolling
const head = document.querySelector('.site-head');
const cta = document.querySelector('.mobile-cta');
const onScroll = () => {
  const y = window.scrollY;
  if (head) head.classList.toggle('solid', y > 40);
  if (cta) cta.classList.toggle('show', y > window.innerHeight * 0.6);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));
}

// Hero slideshow
document.querySelectorAll('[data-slides]').forEach(box => {
  const imgs = [...box.querySelectorAll('img')];
  const dots = box.parentElement.querySelector('.slide-dots');
  let i = 0, timer;
  const btns = imgs.map((_, n) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Foto ' + (n + 1));
    b.addEventListener('click', () => { show(n); restart(); });
    dots && dots.appendChild(b);
    return b;
  });
  const show = n => {
    imgs[i].classList.remove('on'); btns[i].classList.remove('on');
    i = n;
    imgs[i].classList.add('on'); btns[i].classList.add('on');
  };
  const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => show((i + 1) % imgs.length), 5500); };
  imgs[0].classList.add('on'); btns[0] && btns[0].classList.add('on');
  restart();
});

// Image reveal on scroll (checked on scroll, so it never leaves content hidden)
const pending = [...document.querySelectorAll('.reveal')];
const check = () => {
  const lim = window.innerHeight * 0.95;
  for (let k = pending.length - 1; k >= 0; k--) {
    if (reduce || pending[k].getBoundingClientRect().top < lim) { pending[k].classList.add('in'); pending.splice(k, 1); }
  }
};
window.addEventListener('scroll', check, { passive: true });
window.addEventListener('resize', check);
check();

// "Open now" line, from the hours on their site
const today = document.querySelector('[data-today]');
if (today) {
  const d = new Date(), day = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
  const lunch = day >= 2 && day <= 5 && m >= 720 && m < 960;
  const diner = day >= 2 && day <= 6 && m >= 1020 && m < 1410;
  const names = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
  let txt;
  if (lunch) txt = 'Nu open voor lunch, tot 16:00';
  else if (diner) txt = 'Nu open voor diner, tot 23:30';
  else if (day === 0 || day === 1) txt = 'Vandaag (' + names[day] + ') gesloten, dinsdag weer open';
  else if (m < 720 && day <= 5) txt = 'Vandaag lunch vanaf 12:00, diner vanaf 17:00';
  else if (m < 1020) txt = 'Vandaag diner vanaf 17:00';
  else txt = 'Keuken gesloten voor vandaag';
  today.querySelector('span').textContent = txt;
  if (!lunch && !diner) today.classList.add('shut');
}

// Forms: preview only, nothing is sent
document.querySelectorAll('form[data-preview]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault();
  const msg = f.querySelector('.form-msg');
  if (msg) { msg.classList.add('show'); msg.focus(); }
}));

// Tabs (menu and wine list). Without JS every panel simply shows.
document.querySelectorAll('[data-tabs]').forEach(box => {
  const tabs = [...box.querySelectorAll('[role="tab"]')];
  const select = (t, focus) => {
    tabs.forEach(b => {
      const on = b === t;
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) t.focus();
  };
  tabs.forEach((t, n) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') select(tabs[(n + 1) % tabs.length], true);
      if (e.key === 'ArrowLeft') select(tabs[(n - 1 + tabs.length) % tabs.length], true);
    });
  });
  const fromHash = tabs.find(t => '#' + t.getAttribute('aria-controls') === location.hash);
  select(fromHash || tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
  if (fromHash) window.addEventListener('load', () => document.getElementById(fromHash.getAttribute('aria-controls')).scrollIntoView());
});
