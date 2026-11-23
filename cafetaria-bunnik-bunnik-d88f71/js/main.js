// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  nav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  if (nav.classList.contains('open')) burger.click();
}));

// Menu tabs
const tabs = [...document.querySelectorAll('[role="tab"]')];
const boardImg = document.getElementById('board-img');
function select(tab) {
  tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  if (boardImg && tab.dataset.img && boardImg.getAttribute('src') !== tab.dataset.img) {
    boardImg.style.opacity = 0;
    setTimeout(() => { boardImg.src = tab.dataset.img; boardImg.style.opacity = 1; }, 180);
  }
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t));
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = tabs[(i + d + tabs.length) % tabs.length];
    n.focus(); select(n);
  });
});

// Open now? Daily 11:30 - 21:00
const status = document.getElementById('open-status');
if (status) {
  const now = new Date();
  const m = now.getHours() * 60 + now.getMinutes();
  const open = m >= 690 && m < 1260;
  status.textContent = open ? 'Nu open, vandaag tot 21:00' : (m < 690 ? 'Vandaag open vanaf 11:30' : 'Morgen weer open vanaf 11:30');
  if (!open) document.querySelector('.hero-open .dot').classList.add('dicht');
}

// Demo form
const form = document.getElementById('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-msg').textContent = 'Dit is een voorbeeld: er is niets verstuurd. Bel of mail ons gerust direct.';
});
