document.documentElement.classList.add('js');

// Header: transparant boven de foto, roomkleurig zodra je scrolt
const kop = document.querySelector('.top');
const zetVast = () => kop.classList.toggle('vast', window.scrollY > 40);
zetVast();
window.addEventListener('scroll', zetVast, { passive: true });

// Mobiel menu
const knop = document.querySelector('.menu-knop');
const nav = document.getElementById('nav');
const sluit = () => {
  nav.classList.remove('open'); kop.classList.remove('menu-open');
  knop.setAttribute('aria-expanded', 'false'); knop.setAttribute('aria-label', 'Menu openen');
  document.body.style.overflow = '';
};
knop.addEventListener('click', () => {
  const open = !nav.classList.contains('open');
  if (!open) return sluit();
  nav.classList.add('open'); kop.classList.add('menu-open');
  knop.setAttribute('aria-expanded', 'true'); knop.setAttribute('aria-label', 'Menu sluiten');
  document.body.style.overflow = 'hidden';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', sluit));
document.addEventListener('keydown', e => { if (e.key === 'Escape') sluit(); });

// Tabs op de kaart
const tabs = [...document.querySelectorAll('[role="tab"]')];
const kies = (tab, focus) => {
  tabs.forEach(t => {
    const actief = t === tab;
    t.setAttribute('aria-selected', String(actief));
    t.tabIndex = actief ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !actief;
  });
  if (focus) tab.focus();
};
tabs.forEach((t, i) => {
  t.addEventListener('click', () => kies(t));
  t.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') kies(tabs[(i + 1) % tabs.length], true);
    if (e.key === 'ArrowLeft') kies(tabs[(i - 1 + tabs.length) % tabs.length], true);
  });
});
kies(tabs[0]);

// Openingstijden van vandaag (zo-do tot 01:00, vr-za tot 02:00)
const sluitUur = d => (d === 5 || d === 6) ? 2 : 1;
const nu = new Date();
let dag = nu.getDay();
const vorige = (dag + 6) % 7;
if (nu.getHours() < sluitUur(vorige)) dag = vorige; // na middernacht hoort nog bij gisteren
const tot = sluitUur(dag) === 2 ? '02:00' : '01:00';
const vandaag = document.getElementById('vandaag');
if (vandaag) vandaag.textContent = `Vandaag open van 10:00 tot ${tot}`;
document.querySelectorAll('.tijden tr').forEach(tr => {
  if (tr.dataset.dagen.split(',').map(Number).includes(dag)) tr.classList.add('nu');
});
