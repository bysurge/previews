// Sjabloon vakmensen: bouwt de hele pagina uit window.SITE (data.js).
(function () {
  const S = window.SITE;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const wa = `https://wa.me/${S.telefoonIntl}`;
  const tel = `tel:+${S.telefoonIntl}`;
  const pad = n => String(n).padStart(2, '0');
  const ico = {
    pijl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    vink: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ster: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="currentColor"/></svg>',
    tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" fill="currentColor"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97-.29.19-.54.06a6.7 6.7 0 01-3.34-2.92c-.25-.43.25-.4.72-1.34a.45.45 0 00-.02-.43c-.06-.12-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.92.92 0 00-.67.31 2.8 2.8 0 00-.87 2.08 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.15-1.2c-.06-.1-.23-.17-.48-.29z" fill="currentColor"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  document.title = `${S.naam} · ${S.tagline}`;
  document.documentElement.style.setProperty('--accent', S.accent);

  const google = S.google ? `<span class="g-score">${ico.ster}<b>${esc(S.google.score)}</b> op Google · ${S.google.aantal} reviews</span>` : '';

  const H = S.hero, O = S.over, D = S.diensten, W = S.werkwijze, V = S.vacatures, C = S.contact;

  document.getElementById('app').innerHTML = `
<div class="topbar"><div class="wrap topbar-in">
  <span><i class="dot"></i><span class="hide-xs">${esc(S.topbar)}: </span><span class="show-xs">Lekkage of spoed? </span><a href="${tel}">${esc(S.telefoon)}</a></span>
  <span class="topbar-r">${esc(S.tagline)}</span>
</div></div>

<header class="nav"><div class="wrap nav-in">
  <a href="#top" class="logo"><img src="${S.logo}" alt="${esc(S.naam)}"></a>
  <nav class="links"><a href="#diensten">Diensten</a><a href="#werkwijze">Werkwijze</a><a href="#lekkage">Lekkage</a><a href="#vacatures">Vacatures</a><a href="#contact">Contact</a></nav>
  <a href="#contact" class="btn btn-accent btn-sm">Offerte <span class="hide-xs">aanvragen</span> ${ico.pijl}</a>
</div></header>

<main id="top">
<section class="hero wrap">
  <div class="hero-card">
    <img class="hero-img" src="${H.foto}" alt="${esc(H.fotoAlt)}">
    <div class="hero-shade"></div>
    <div class="hero-word" aria-hidden="true">${esc(S.korteNaam)}</div>
    <div class="hero-content">
      <p class="kicker">${esc(H.kicker)}</p>
      <h1>${H.titel.map(esc).join('<br>')}</h1>
      <div class="hero-side">
        ${google ? `<div class="pill">${google}</div>` : ''}
        <p>${esc(H.tekst)}</p>
        <div class="btns">
          <a href="#contact" class="btn btn-accent">${esc(H.knop)} ${ico.pijl}</a>
          <a href="${wa}" class="btn btn-glass" target="_blank" rel="noopener">${ico.wa} WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
  <ul class="ticks">${H.punten.map(p => `<li>${ico.vink}${esc(p)}</li>`).join('')}</ul>
</section>

<section class="over wrap" id="over">
  <p class="label">(${esc(O.label)})</p>
  <p class="statement">${esc(O.zin)}<span>${esc(O.zinZacht)}</span></p>
  <div class="over-grid">
    <figure><img src="${O.foto}" alt="${esc(O.fotoAlt)}" loading="lazy"><figcaption>${esc(O.fotoOnder)}</figcaption></figure>
    <div class="over-txt"><p>${esc(O.tekst)}</p><a href="#werkwijze" class="btn btn-dark">Onze werkwijze ${ico.pijl}</a></div>
  </div>
</section>

<section class="diensten" id="diensten"><div class="wrap">
  <div class="sec-head"><div><p class="label">(${esc(D.label)})</p><h2>${esc(D.titel)}</h2></div><p class="sec-intro">${esc(D.intro)}</p></div>
  <div class="d-grid">
    <div class="d-photo"><img id="d-img" src="${D.items[0].foto}" alt="" loading="lazy"><span id="d-cap">${esc(D.items[0].naam)}</span><span class="d-count" id="d-count">01 / ${pad(D.items.length)}</span></div>
    <div class="acc">${D.items.map((d, i) => `
      <div class="acc-item${i === 0 ? ' open' : ''}" data-i="${i}">
        <button class="acc-btn" aria-expanded="${i === 0}"><span class="n">${pad(i + 1)}</span><span class="t">${esc(d.naam)}</span><span class="k">${esc(d.kort)}</span><span class="pl">${ico.plus}</span></button>
        <div class="acc-body"><div><p>${esc(d.tekst)}</p><ul>${d.punten.map(p => `<li>${ico.vink}${esc(p)}</li>`).join('')}</ul>
          <a href="#contact" class="lnk" data-onderwerp="${esc(d.naam)}">Vraag een offerte aan ${ico.pijl}</a></div></div>
      </div>`).join('')}
    </div>
  </div>
</div></section>

<section class="werk" id="werkwijze"><div class="wrap">
  <div class="sec-head"><div><p class="label">(${esc(W.label)})</p><h2>${esc(W.titel)}</h2></div></div>
  <div class="werk-grid">
    <ol class="stappen">${W.stappen.map((s, i) => `<li><span class="n">${pad(i + 1)}</span><div><b>${esc(s.naam)}</b><p>${esc(s.tekst)}</p></div></li>`).join('')}</ol>
    <div class="kaart">
      <div class="kaart-top"><span>${esc(W.kaart.kop)}</span><img src="${S.logo}" alt=""></div>
      ${W.kaart.regels.map(r => `<div class="kaart-r"><span class="tag">${esc(r[0])}</span><span>${esc(r[1])}</span></div>`).join('')}
      <div class="kaart-foot"><span>${google || esc(S.naam)}</span></div>
    </div>
  </div>
</div></section>

<section class="spoed wrap" id="lekkage">
  <div class="spoed-card">
    <div><p class="label light">(Lekkage)</p><h2>${esc(S.spoed.titel)}</h2><p>${esc(S.spoed.tekst)}</p></div>
    <div class="spoed-btns">
      <a href="${tel}" class="btn btn-white">${ico.tel} Bel ${esc(S.telefoon)}</a>
      <a href="${wa}" class="btn btn-line" target="_blank" rel="noopener">${ico.wa} App ons</a>
    </div>
  </div>
</section>

<section class="vac wrap" id="vacatures">
  <div><p class="label">(${esc(V.label)})</p><h2>${esc(V.titel)}</h2><p class="muted">${esc(V.tekst)}</p></div>
  <ul class="vac-list">${V.items.map(v => `<li><a href="#contact" data-onderwerp="Vacature">${esc(v)} ${ico.pijl}</a></li>`).join('')}</ul>
</section>

<section class="contact" id="contact"><div class="wrap contact-grid">
  <div>
    <p class="label">(${esc(C.label)})</p><h2>${esc(C.titel)}</h2><p class="muted">${esc(C.tekst)}</p>
    <ul class="c-list">
      <li><a href="${tel}">${ico.tel}<span><small>Bellen, ook bij spoed</small>${esc(S.telefoon)}</span></a></li>
      <li><a href="${wa}" target="_blank" rel="noopener">${ico.wa}<span><small>WhatsApp</small>Stuur ons een bericht</span></a></li>
      <li><a href="mailto:${S.email}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg><span><small>E-mail</small>${esc(S.email)}</span></a></li>
    </ul>
  </div>
  <form class="form" id="form" novalidate>
    <div class="chips" role="radiogroup" aria-label="Waar gaat het over?">${C.onderwerpen.map((o, i) => `<label><input type="radio" name="onderwerp" value="${esc(o)}"${i === 0 ? ' checked' : ''}><span>${esc(o)}</span></label>`).join('')}</div>
    <div class="row2"><label>Voornaam *<input name="voornaam" required autocomplete="given-name"></label><label>Achternaam *<input name="achternaam" required autocomplete="family-name"></label></div>
    <div class="row2"><label>E-mailadres *<input type="email" name="email" required autocomplete="email"></label><label>Telefoonnummer<input type="tel" name="tel" autocomplete="tel"></label></div>
    <label>Bericht<textarea name="bericht" rows="4" placeholder="Vertel kort over uw dak of project"></textarea></label>
    <button class="btn btn-accent btn-full" type="submit">Verstuur aanvraag ${ico.pijl}</button>
    <p class="form-note" id="form-note">* verplichte velden</p>
  </form>
</div></section>
</main>

<footer class="foot"><div class="wrap">
  <div class="foot-top"><img src="${S.logoWit || S.logo}" alt="${esc(S.naam)}"><p>${esc(S.tagline)}.<br>Specialist in nieuwbouw, onderhoud en renovatie.</p></div>
  <div class="foot-bot"><span>© ${new Date().getFullYear()} ${esc(S.naam)}</span><span><a href="${tel}">${esc(S.telefoon)}</a> · <a href="mailto:${S.email}">${esc(S.email)}</a></span></div>
</div></footer>

<a class="fab" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${ico.wa}</a>`;

  // Accordion diensten
  const items = [...document.querySelectorAll('.acc-item')];
  const img = document.getElementById('d-img'), cap = document.getElementById('d-cap'), cnt = document.getElementById('d-count');
  items.forEach(it => it.querySelector('.acc-btn').addEventListener('click', () => {
    const i = +it.dataset.i, wasOpen = it.classList.contains('open');
    items.forEach(x => { x.classList.remove('open'); x.querySelector('.acc-btn').setAttribute('aria-expanded', 'false'); });
    if (!wasOpen) { it.classList.add('open'); it.querySelector('.acc-btn').setAttribute('aria-expanded', 'true'); }
    const d = D.items[i];
    if (img.getAttribute('src') !== d.foto) { img.classList.add('fade'); setTimeout(() => { img.src = d.foto; img.classList.remove('fade'); }, 180); }
    cap.textContent = d.naam; cnt.textContent = `${pad(i + 1)} / ${pad(D.items.length)}`;
  }));

  // Links naar het formulier kiezen het juiste onderwerp
  document.querySelectorAll('[data-onderwerp]').forEach(a => a.addEventListener('click', () => {
    const r = document.querySelector(`input[name="onderwerp"][value="${a.dataset.onderwerp}"]`); if (r) r.checked = true;
  }));

  // Formulier: in de preview niet echt versturen
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, note = document.getElementById('form-note');
    const leeg = [...f.querySelectorAll('[required]')].filter(x => !x.value.trim());
    f.querySelectorAll('[required]').forEach(x => x.classList.toggle('err', !x.value.trim()));
    if (leeg.length) { note.textContent = 'Vul alle verplichte velden in.'; note.className = 'form-note bad'; return; }
    note.textContent = 'Dank u wel! (Dit is een voorbeeld: het formulier verstuurt nog niets.)'; note.className = 'form-note ok';
  });

  // Rustig infaden bij het scrollen (één keer)
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.over, .diensten .wrap, .werk .wrap, .spoed-card, .vac, .contact-grid').forEach(el => { el.classList.add('rv'); io.observe(el); });
  }
})();
