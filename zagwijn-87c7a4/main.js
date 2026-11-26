// Sjabloon hoveniers: bouwt de pagina uit window.SITE (data.js). Zelfde schema als sjabloon-schilder; elke sectie optioneel.
// Extra (optioneel): *woord* in hero.regels / titels = cursief accent, hero.notitie, seizoenen, diensten.vorm 'kaarten'.
(function () {
  const S = window.SITE;
  const e = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const em = s => e(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
  const wa = S.telefoonIntl && S.whatsapp !== false ? `https://wa.me/${S.telefoonIntl}` : null;
  const tel = `tel:${S.telBel || ('+' + S.telefoonIntl)}`;
  const I = {
    ster: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97-.29.19-.54.06a6.7 6.7 0 01-3.34-2.92c-.25-.43.25-.4.72-1.34a.45.45 0 00-.02-.43c-.06-.12-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.92.92 0 00-.67.31 2.8 2.8 0 00-.87 2.08 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.15-1.2c-.06-.1-.23-.17-.48-.29z"/></svg>',
    tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17z M3.5 7l8.5 6 8.5-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-6.1-6.5-11a6.5 6.5 0 0113 0c0 4.9-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    pijl: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    links: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    rechts: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    greep: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    vink: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    blad: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C10 4 4.5 8.5 4.5 15c0 1.6.4 3 1 4.2C7 13 11 9.5 16 7.5 11.5 10.5 8.6 14.4 7.2 19.6 8.5 20 9.8 20 11 20c6 0 9-5.5 9-16z" fill="currentColor"/></svg>',
    g: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 01-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8z"/><path fill="#34A853" d="M12 23c3 0 5.4-1 7.2-2.7l-3.5-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.8A11 11 0 0012 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 010-4.2V7.1H2.2a11 11 0 000 9.8z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.1-3.1A11 11 0 002.2 7.1l3.6 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>'
  };
  const stars = `<span class="stars" aria-hidden="true">${I.ster.repeat(5)}</span>`;
  const H = S.hero, M = S.intro, DI = S.diensten, SZ = S.seizoenen, V = S.voorNa, GA = S.galerij, W = S.werkwijze, GU = S.garantie, R = S.reviews, O = S.over, F = S.faq, B = S.band, C = S.contact;
  const kick = (t, cls = '') => `<p class="kicker ${cls}">${I.blad}<span>${e(t)}</span></p>`;

  document.title = `${S.naam} · ${S.titelExtra || ((S.vak || 'Hovenier') + ' in ' + S.plaats)}`;
  if (S.kleuren) for (const [k, v] of Object.entries(S.kleuren)) document.documentElement.style.setProperty('--' + k, v);
  if (S.logoHoogte) document.documentElement.style.setProperty('--logo-h', S.logoHoogte + 'px');
  const desc = document.createElement('meta'); desc.name = 'description'; desc.content = H.tekst; document.head.appendChild(desc);

  const logoImg = (extra = '') => `<img src="${S.logoKlein || S.logo}" alt=""${S.logoVorm || extra ? ` class="${S.logoVorm || ''} ${extra}"` : ''}>`;
  const brand = (extra) => `${logoImg(extra)}${S.logoMetNaam === false ? '' : `<span>${e(S.kortNaam || S.naam)}</span>`}`;
  const nav = [['#diensten', 'Diensten'], SZ && ['#seizoenen', SZ.navNaam || 'Seizoenen'], V && ['#voor-na', 'Voor en na'], GA && ['#werk', GA.navNaam || 'Projecten'], GU && ['#garantie', GU.navNaam || 'Garantie'], O && ['#over', O.navNaam || 'Over ons'], ['#contact', 'Contact']].filter(Boolean);
  const ctaKnoppen = (light) => `<a class="btn ${light ? 'btn-light' : 'btn-ink'}" href="#contact">${e(S.ctaTekst || 'Vraag een offerte aan')}</a>${wa ? `<a class="btn ${light ? 'btn-ghost' : 'btn-line'}" href="${wa}" target="_blank" rel="noopener">${I.wa} ${e(S.waTekst || 'WhatsApp')}</a>` : `<a class="btn ${light ? 'btn-ghost' : 'btn-line'}" href="${tel}">${I.tel} ${e(S.telefoon)}</a>`}`;
  const words = t => { let inEm = false; return t.split(/\s+/).map(w => {
    const start = w.startsWith('*'), end = /\*[^\w]*$/.test(w) && (w.length > 1 || !start); if (start) inEm = true;
    const html = e(w.replace(/\*/g, '')), out = `<span class="w">${inEm ? `<em>${html}</em>` : html} </span>`; if (end) inEm = false; return out; }).join(''); };
  const rating = S.google ? `<div class="rating"><span class="g">${I.g}</span>${stars}<span><b>${e(S.google.score)}</b> uit ${e(S.google.aantal)} Google-${S.google.aantal == 1 ? "review" : "reviews"}</span></div>` : (H.badge ? `<div class="rating"><span class="g">${I.blad}</span><span>${e(H.badge)}</span></div>` : '');

  // huidig seizoen (voor het seizoenen-blok)
  const mnd = new Date().getMonth();
  const nu = mnd >= 2 && mnd <= 4 ? 'lente' : mnd >= 5 && mnd <= 7 ? 'zomer' : mnd >= 8 && mnd <= 10 ? 'herfst' : 'winter';
  let szStart = 0;
  if (SZ) { const i = SZ.items.findIndex(x => (x.naam || '').toLowerCase().includes(nu)); szStart = SZ.start ?? (i >= 0 ? i : 0); }

  const dienstenLijst = DI.vorm !== 'kaarten';

  document.getElementById('app').innerHTML = `
<header class="nav" id="nav"><div class="wrap nav-in">
  <a class="brand" href="#top" aria-label="${e(S.naam)}">${S.logoOpFoto ? `<img src="${S.logoOpFoto}" alt="" class="${S.logoVorm || ''} op-foto">` : ''}${brand(S.logoOpFoto ? 'niet-op-foto' : 'wit-op-foto')}</a>
  <nav class="menu" aria-label="Menu">${nav.map(n => `<a href="${n[0]}">${e(n[1])}</a>`).join('')}</nav>
  <a class="btn btn-cta" href="#contact">${e(S.navCta || 'Offerte')}</a>
</div></header>

<main id="top">
<section class="hero${H.donker ? ' donker' : ''}"><div class="hero-frame">
  ${H.fotoMobiel ? `<picture><source media="(max-width:699px)" srcset="${H.fotoMobiel}">` : ''}<img class="hero-img" src="${H.foto}" alt="${e(H.fotoAlt)}" fetchpriority="high" style="--pd:${H.fotoPos || '50% 50%'};--pm:${H.fotoPosMobiel || H.fotoPos || '50% 50%'}">${H.fotoMobiel ? '</picture>' : ''}
  <div class="hero-in">
    <div class="hero-main">${rating}<h1>${H.regels.map(r => `<span class="ln"><span>${em(r)}</span></span>`).join('')}</h1></div>
    <div class="hero-side"><p>${e(H.tekst)}</p><div class="btns">${ctaKnoppen(true)}</div>${H.punten ? `<ul class="hero-pts">${H.punten.map(p => `<li>${I.vink}${e(p)}</li>`).join('')}</ul>` : ''}</div>
  </div>
  ${H.notitie ? `<div class="notitie"><small>${I.blad}${e(H.notitie.label || 'Nu in de planning')}</small><b>${e(H.notitie.tekst)}</b></div>` : ''}
</div></section>

${S.marquee ? `<div class="marquee" aria-hidden="true"><div class="marquee-track">${[...S.marquee, ...S.marquee].map(m => `<span>${e(m)}${I.blad}</span>`).join('')}</div></div>` : ''}

${S.spoed ? `<section class="spoed"><div class="wrap spoed-in">
  <div class="spoed-ico" aria-hidden="true">${I.blad}</div>
  <div class="spoed-txt"><b>${e(S.spoed.titel)}</b><span>${e(S.spoed.tekst)}</span></div>
  <div class="spoed-btns"><a class="btn btn-accent" href="${tel}">${I.tel} ${e(S.spoed.knop || ('Bel ' + S.telefoon))}</a>${wa ? `<a class="btn btn-ghost" href="${wa}" target="_blank" rel="noopener">${I.wa} Stuur een foto</a>` : ''}</div>
</div></section>` : ''}

${M ? `<section class="intro"><div class="wrap">
  ${kick(M.kicker)}
  <p class="statement" id="statement">${words(M.tekst)}</p>
  ${M.stats ? `<div class="stats">${M.stats.map(s => `<div class="stat rv"><b${s.tel ? ` data-tel="${s.tel}"` : ''}>${e(s.getal)}</b><span>${e(s.label)}</span></div>`).join('')}</div>` : ''}
</div></section>` : ''}

${S.keurmerken ? `<section class="trust"><div class="wrap trust-in">${kick(S.keurmerkenTitel || 'Erkend en gecertificeerd')}<ul>${S.keurmerken.map(k => `<li class="rv">${k.logo ? `<img src="${k.logo}" alt="${e(k.naam)}" loading="lazy">` : ''}<span>${e(k.naam)}${k.sub ? `<small>${e(k.sub)}</small>` : ''}</span></li>`).join('')}</ul></div></section>` : ''}

<section class="services" id="diensten"><div class="wrap">
  <div class="head"><div>${kick(DI.kicker || 'Diensten')}<h2>${em(DI.titel)}</h2></div><div>${DI.tekst ? `<p class="lede">${e(DI.tekst)}</p>` : ''}</div></div>
  ${dienstenLijst ? `<div class="dl">
    <div class="dl-media" aria-hidden="true">${DI.items.map((d, i) => `<img src="${d.foto}" alt="" loading="lazy" class="${i === 0 ? 'on' : ''}"${d.pos ? ` style="object-position:${d.pos}"` : ''}>`).join('')}<span class="dl-cap">${e(DI.items[0].naam)}</span></div>
    <ol class="dl-list">${DI.items.map((d, i) => `
      <li class="dl-item rv${i === 0 ? ' on' : ''}" data-i="${i}">
        <div class="dl-ph"><img src="${d.foto}" alt="${e(d.naam)}" loading="lazy"${d.pos ? ` style="object-position:${d.pos}"` : ''}></div>
        <span class="dl-n">${String(i + 1).padStart(2, '0')}</span>
        <div class="dl-body"><h3>${e(d.naam)}</h3><p>${e(d.tekst)}</p>
          ${d.punten ? `<ul class="tags">${d.punten.map(p => `<li>${e(p)}</li>`).join('')}</ul>` : ''}
          <a class="link" href="#contact" data-soort="${e(d.soort || d.naam)}">${e(d.knop || DI.knop || 'Offerte aanvragen')} ${I.pijl}</a></div>
      </li>`).join('')}</ol>
  </div>` : `<div class="cards n${DI.items.length === 4 ? 4 : DI.items.length === 2 ? 2 : 3}">${DI.items.map(d => `
    <article class="card rv">
      <div class="card-img"><img src="${d.foto}" alt="${e(d.naam)}" loading="lazy"${d.pos ? ` style="object-position:${d.pos}"` : ''}></div>
      <h3>${e(d.naam)}</h3><p>${e(d.tekst)}</p>
      ${d.punten ? `<ul class="tags">${d.punten.map(p => `<li>${e(p)}</li>`).join('')}</ul>` : ''}
      <a class="link" href="#contact" data-soort="${e(d.soort || d.naam)}">${e(d.knop || DI.knop || 'Offerte aanvragen')} ${I.pijl}</a>
    </article>`).join('')}</div>`}
  ${DI.meer ? `<div class="more">${DI.meer.map(d => `<div class="rv"><b>${e(d.naam)}</b><p>${e(d.tekst)}</p></div>`).join('')}</div>` : ''}
</div></section>

${SZ ? `<section class="seasons" id="seizoenen"><div class="wrap">
  <div class="head"><div>${kick(SZ.kicker || 'Het hele jaar')}<h2>${em(SZ.titel)}</h2></div><div>${SZ.tekst ? `<p class="lede">${e(SZ.tekst)}</p>` : ''}</div></div>
  <div class="sz-tabs" role="tablist">${SZ.items.map((x, i) => `<button class="sz-tab" role="tab" id="szt${i}" aria-controls="szp${i}" aria-selected="${i === szStart}" data-i="${i}"><b>${e(x.naam)}</b>${x.maanden ? `<small>${e(x.maanden)}</small>` : ''}</button>`).join('')}</div>
  <div class="sz-panels">${SZ.items.map((x, i) => `<div class="sz-panel${i === szStart ? ' on' : ''}" role="tabpanel" id="szp${i}" aria-labelledby="szt${i}"${i === szStart ? '' : ' hidden'}>
    <div class="sz-img"><img src="${x.foto}" alt="${e(x.fotoAlt || x.naam)}" loading="lazy"${x.pos ? ` style="object-position:${x.pos}"` : ''}>${i === szStart && SZ.nuLabel !== false ? `<span class="sz-nu">${e(SZ.nuLabel || 'Nu')}</span>` : ''}</div>
    <div class="sz-txt"><h3>${em(x.titel || x.naam)}</h3><p>${e(x.tekst)}</p>${x.punten ? `<ul>${x.punten.map(p => `<li>${I.vink}${e(p)}</li>`).join('')}</ul>` : ''}
      <a class="btn btn-ink" href="#contact"${x.soort ? ` data-soort="${e(x.soort)}"` : ''}>${e(x.knop || SZ.knop || 'Plan het in')} ${I.pijl}</a></div>
  </div>`).join('')}</div>
</div></section>` : ''}

${V ? `<section class="ba" id="voor-na"><div class="wrap ba-grid">
  <div>
    ${kick('Voor en na')}<h2>${em(V.titel)}</h2><p class="lede" style="margin-top:18px">${e(V.tekst)}</p>
    <div class="tabs" role="tablist">${V.items.map((x, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-i="${i}">${e(x.naam)}</button>`).join('')}</div>
    ${V.paar ? `<div class="pair"><figure><img src="${V.paar.voor}" alt="Voor" loading="lazy"><figcaption>Voor</figcaption></figure><figure><img src="${V.paar.na}" alt="Na" loading="lazy"><figcaption>Na</figcaption></figure><p>${e(V.paar.tekst)}</p></div>` : ''}
  </div>
  <div class="slider" id="slider">
    <img class="before" src="${V.items[0].voor}" alt="${e(V.items[0].naam)}, voor">
    <img class="after" src="${V.items[0].na}" alt="${e(V.items[0].naam)}, na">
    <span class="lbl l">Voor</span><span class="lbl r">Na</span><span class="bar"></span><span class="knob">${I.greep}</span>
    <input type="range" min="0" max="100" value="50" aria-label="Schuif tussen voor en na">
  </div>
</div></section>` : ''}

${GA && GA.vorm === 'mozaiek' ? `<section class="mozaiek" id="werk"><div class="wrap">
  <div class="head"><div>${kick(GA.kicker || 'Ons werk')}<h2>${em(GA.titel)}</h2></div><div>${GA.tekst ? `<p class="lede">${e(GA.tekst)}</p>` : ''}</div></div>
  <div class="moz n${Math.min(GA.items.length, 5)}">${GA.items.slice(0, 5).map(d => `<figure class="rv"><img src="${d.foto}" alt="${e(d.alt || d.label)}" loading="lazy"${d.pos ? ` style="object-position:${d.pos}"` : ''}><figcaption><b>${e(d.label)}</b>${d.sub ? `<small>${e(d.sub)}</small>` : ''}</figcaption></figure>`).join('')}</div>
</div></section>` : ''}

${GA && GA.vorm !== 'mozaiek' ? `<section class="gallery ${GA.vorm === 'recht' ? 'recht' : ''}" id="werk">
  <div class="wrap gal-head"><div>${kick(GA.kicker || 'Ons werk')}<h2>${em(GA.titel)}</h2>${GA.tekst ? `<p class="lede" style="margin-top:18px">${e(GA.tekst)}</p>` : ''}</div>
  <div class="gal-nav"><button data-d="-1" aria-label="Vorige">${I.links}</button><button data-d="1" aria-label="Volgende">${I.rechts}</button></div></div>
  <div class="track" id="track">${GA.items.map(d => `<figure><div class="frame"><img src="${d.foto}" alt="${e(d.alt || d.label)}" loading="lazy" draggable="false"${d.pos ? ` style="object-position:${d.pos}"` : ''}></div><figcaption>${d.hex ? `<i style="background:${d.hex}"></i>` : ''}<span>${e(d.label)}${d.sub ? `<small>${e(d.sub)}</small>` : ''}</span></figcaption></figure>`).join('')}</div>
  <div class="progress"><i id="prog"></i></div>
</section>` : ''}

${W ? `<section class="process"><div class="wrap">
  <div class="head"><div>${kick(W.kicker || 'Werkwijze')}<h2>${em(W.titel)}</h2></div><div>${W.tekst ? `<p class="lede">${e(W.tekst)}</p>` : ''}</div></div>
  <div class="pr-grid${W.foto ? ' met-foto' : ''}">
    ${W.foto ? `<div class="pr-img rv-img"><img src="${W.foto}" alt="${e(W.fotoAlt || '')}" loading="lazy"${W.fotoPos ? ` style="object-position:${W.fotoPos}"` : ''}></div>` : ''}
    <ol class="steps">${W.stappen.map(s => `<li class="rv"><b>${e(s.naam)}</b><p>${e(s.tekst)}</p></li>`).join('')}</ol>
  </div>
</div></section>` : ''}

${GU ? `<section class="guarantee" id="garantie"><div class="wrap gu-grid">
  <div>${kick(GU.kicker || 'Garantie')}<h2>${em(GU.titel)}</h2><p class="lede" style="margin-top:18px">${e(GU.tekst)}</p>
    ${GU.jaren ? `<ol class="years">${GU.jaren.map(j => `<li class="rv"><b>${e(j.jaar)}</b><span>${e(j.tekst)}</span></li>`).join('')}</ol>` : ''}</div>
  ${GU.lijst ? `<div class="allin rv"><h3>${e(GU.lijst.titel)}</h3>${GU.lijst.tekst ? `<p>${e(GU.lijst.tekst)}</p>` : ''}<ul>${GU.lijst.punten.map(p => `<li>${I.vink}${e(p)}</li>`).join('')}</ul>${GU.merken ? `<p class="brands">${e(GU.merkenTekst || 'Wij werken met')} <b>${GU.merken.map(e).join('</b> en <b>')}</b>.</p>` : ''}</div>` : ''}
</div></section>` : ''}

${R ? `<section class="reviews" id="reviews"><div class="wrap">
  <div class="rv-head"><div>${kick(R.kicker || 'Reviews')}<h2>${em(R.titel)}</h2></div>
  ${S.google ? `<div class="score"><b>${e(S.google.score)}</b><div>${stars}<small>${e(S.google.aantal)} ${S.google.aantal == 1 ? "review" : "reviews"} op Google</small></div></div>` : ''}</div>
  <div class="quotes${R.items.length > 3 ? ' many' : R.items.length === 1 ? ' one' : R.items.length === 2 ? ' two' : ''}">${R.items.map(r => `<blockquote class="quote rv"><span class="qm" aria-hidden="true">“</span><p>${e(r.tekst)}</p><footer><b>${e(r.naam)}</b><span class="stars" aria-label="${r.sterren || 5} sterren">${I.ster.repeat(r.sterren || 5)}</span></footer></blockquote>`).join('')}</div>
</div></section>` : ''}

${O ? `<section class="about" id="over"><div class="wrap"><div class="ab-card">
  <div class="ab-wrap"><div class="ab-img"><img src="${O.foto}" alt="${e(O.fotoAlt || '')}" loading="lazy"${O.fotoPos ? ` style="object-position:${O.fotoPos}"` : ''}></div>${O.badge ? `<div class="badge${O.badgeVrij ? ' vrij' : ''}"><img src="${O.badge}" alt="" loading="lazy"></div>` : ''}</div>
  <div class="ab-txt">${kick(O.kicker || 'Over ons')}<h2>${em(O.titel)}</h2>${O.rol ? `<p class="role">${e(O.rol)}</p>` : ''}${O.tekst.map(p => `<p>${e(p)}</p>`).join('')}
    ${wa ? `<a class="btn btn-ink" href="${wa}" target="_blank" rel="noopener">${I.wa} ${e(O.knop || 'Stuur een bericht')}</a>` : `<a class="btn btn-ink" href="#contact">${e(O.knop || 'Neem contact op')}</a>`}</div>
</div></div></section>` : ''}

${F || S.werkgebied ? `<section class="faq"><div class="wrap fq-grid">
  <div>${kick(S.werkgebied ? 'Werkgebied' : 'Vragen')}<h2>${em(S.werkgebied ? S.werkgebied.titel : 'Veelgestelde vragen')}</h2>${S.werkgebied ? `<p class="lede" style="margin-top:18px">${e(S.werkgebied.tekst)}</p>${S.werkgebied.plaatsen ? `<ul class="places">${S.werkgebied.plaatsen.map(p => `<li>${e(p)}</li>`).join('')}</ul>` : ''}` : ''}</div>
  ${F ? `<div class="acc">${F.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${e(f.v)}<i></i></summary><p>${e(f.a)}</p></details>`).join('')}</div>` : ''}
</div></section>` : ''}

${B ? `<section class="band"><div class="band-frame"><img src="${B.foto}" alt="" loading="lazy"${B.fotoPos ? ` style="object-position:${B.fotoPos}"` : ''}><div class="band-in"><h2>${em(B.titel)}</h2><p>${e(B.tekst)}</p><div class="btns">${ctaKnoppen(true)}</div></div></div></section>` : ''}

<section class="contact" id="contact"><div class="wrap ct-grid">
  <div>${kick('Contact')}<h2>${em(C.titel)}</h2><p class="lede" style="margin-top:18px">${e(C.tekst)}</p>
    <ul class="ct-list">
      ${wa ? `<li><a href="${wa}" target="_blank" rel="noopener">${I.wa}<span><small>WhatsApp</small>${e(S.waContact || 'Stuur een bericht')}</span></a></li>` : ''}
      <li><a href="${tel}">${I.tel}<span><small>Bellen</small>${e(S.telefoon)}</span></a></li>
      ${S.telefoon2 ? `<li><a href="tel:${S.telefoon2.replace(/\s/g, '')}">${I.tel}<span><small>Of bel</small>${e(S.telefoon2)}</span></a></li>` : ''}
      ${S.email ? `<li><a href="mailto:${e(S.email)}">${I.mail}<span><small>E-mail</small>${e(S.email)}</span></a></li>` : ''}
      ${S.adres ? `<li><div>${I.pin}<span><small>Adres</small>${[].concat(S.adres).map(e).join(', ')}</span></div></li>` : ''}
    </ul></div>
  <form class="form" id="form" novalidate>
    <h3>${e(C.formTitel || 'Offerte aanvragen')}</h3>
    <fieldset class="chips"><legend>Waar kunnen we mee helpen?</legend>${C.onderwerpen.map((o, i) => `<label><input type="radio" name="soort" value="${e(o)}"${i === 0 ? ' checked' : ''}><span>${e(o)}</span></label>`).join('')}</fieldset>
    <div class="row2"><label>Naam<input name="naam" required autocomplete="name"></label><label>Plaats<input name="plaats" autocomplete="address-level2"></label></div>
    <div class="row2"><label>E-mailadres<input type="email" name="email" required autocomplete="email"></label><label>Telefoonnummer<input type="tel" name="tel" autocomplete="tel"></label></div>
    <label>Wat wilt u laten doen?<textarea name="bericht" rows="4" required placeholder="${e(C.voorbeeld || 'Bijvoorbeeld: achtertuin opnieuw bestraten en een border aanleggen')}"></textarea></label>
    <button class="btn btn-ink" type="submit">Verstuur aanvraag ${I.pijl}</button>
    <p class="note" id="note">${e(C.belofte || 'We nemen zo snel mogelijk contact met u op.')}</p>
  </form>
</div></section>
</main>

<footer class="foot"><div class="wrap">
  <div class="ft-top">
    <div><a class="brand" href="#top">${S.logoWit ? `<img src="${S.logoWit}" alt="${e(S.naam)}" class="breed" style="filter:none">` : brand()}</a><p>${e(S.voetTekst || H.tekst)}</p></div>
    <div class="ft-cols">
      <div><h4>Menu</h4>${nav.map(n => `<a href="${n[0]}">${e(n[1])}</a>`).join('')}</div>
      <div><h4>Contact</h4><a href="${tel}">${e(S.telefoon)}</a>${S.email ? `<a href="mailto:${e(S.email)}">${e(S.email)}</a>` : ''}${wa ? `<a href="${wa}" target="_blank" rel="noopener">WhatsApp</a>` : ''}</div>
      ${S.adres || S.kvk ? `<div><h4>Gegevens</h4>${S.adres ? [].concat(S.adres).map(a => `<span>${e(a)}</span>`).join('') : ''}${S.kvk ? `<span>KvK ${e(S.kvk)}</span>` : ''}</div>` : ''}
    </div>
  </div>
  <div class="ft-big" aria-hidden="true" style="--n:${(S.kortNaam || S.naam).length}">${e(S.kortNaam || S.naam)}</div>
  <div class="ft-bot"><span>© ${new Date().getFullYear()} ${e(S.naam)}</span><span>${e(S.plaats)}</span></div>
</div></footer>
${wa ? `<a class="fab" id="fab" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>` : ''}`;

  const nav$ = document.getElementById('nav'), hero = document.querySelector('.hero'), fab = document.getElementById('fab');
  const onScroll = () => { nav$.classList.toggle('solid', scrollY > hero.offsetHeight - 90); if (fab) fab.classList.toggle('show', scrollY > 500); };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.rv,.rv-img,#statement');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(x => {
      if (!x.isIntersecting) return;
      const t = x.target; t.classList.add('in'); io.unobserve(t);
      if (t.id === 'statement') t.querySelectorAll('.w').forEach((w, i) => w.style.transitionDelay = (i * 0.035) + 's');
      const n = t.querySelector('[data-tel]');
      if (n) { const end = +n.dataset.tel, suf = n.textContent.replace(/^[\d.,]+/, ''), t0 = performance.now();
        const step = now => { const p = Math.min(1, (now - t0) / 1400); n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step); }
    }), { threshold: .15 });
    targets.forEach(el => { if (el.classList.contains('rv') && !el.classList.contains('dl-item')) el.style.transitionDelay = Math.min([...el.parentElement.children].indexOf(el), 4) * 0.08 + 's'; io.observe(el); });
  } else targets.forEach(el => el.classList.add('in'));

  // diensten-lijst: grote foto wisselt mee (hover op desktop, en tijdens scrollen)
  const dl = document.querySelector('.dl');
  if (dl) {
    const imgs = dl.querySelectorAll('.dl-media img'), cap = dl.querySelector('.dl-cap'), items = dl.querySelectorAll('.dl-item');
    const act = i => { imgs.forEach((im, j) => im.classList.toggle('on', j === i)); items.forEach((it, j) => it.classList.toggle('on', j === i)); cap.textContent = DI.items[i].naam; };
    items.forEach(it => { it.addEventListener('mouseenter', () => act(+it.dataset.i)); it.addEventListener('focusin', () => act(+it.dataset.i)); });
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting && matchMedia('(min-width:1024px)').matches) act(+x.target.dataset.i); }), { rootMargin: '-45% 0px -45% 0px' });
      items.forEach(it => io2.observe(it));
    }
  }

  // seizoenen
  const tabs = document.querySelectorAll('.sz-tab');
  tabs.forEach(t => t.addEventListener('click', () => {
    tabs.forEach(b => b.setAttribute('aria-selected', b === t));
    document.querySelectorAll('.sz-panel').forEach((p, i) => { const on = i === +t.dataset.i; p.hidden = !on; p.classList.toggle('on', on); });
  }));

  const sl = document.getElementById('slider');
  if (sl) {
    const r = sl.querySelector('input'), set = v => sl.style.setProperty('--pos', v + '%');
    r.addEventListener('input', () => set(r.value));
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      const x = V.items[+t.dataset.i];
      document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-selected', b === t));
      sl.querySelector('.before').src = x.voor; sl.querySelector('.after').src = x.na; r.value = 50; set(50);
    }));
  }

  const tr = document.getElementById('track'), prog = document.getElementById('prog');
  if (tr) {
    const upd = () => { const max = tr.scrollWidth - tr.clientWidth, vis = Math.min(1, tr.clientWidth / tr.scrollWidth); prog.style.transform = `translateX(${max ? (tr.scrollLeft / max) * (1 - vis) / vis * 100 : 0}%) scaleX(1)`; prog.style.width = vis * 100 + '%'; };
    tr.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
    document.querySelectorAll('.gal-nav button').forEach(b => b.addEventListener('click', () => tr.scrollBy({ left: +b.dataset.d * (tr.querySelector('figure').offsetWidth + 14), behavior: 'smooth' })));
    let down = false, sx = 0, s0 = 0;
    tr.addEventListener('pointerdown', ev => { if (ev.pointerType !== 'mouse') return; down = true; sx = ev.clientX; s0 = tr.scrollLeft; tr.classList.add('drag'); });
    addEventListener('pointermove', ev => { if (down) tr.scrollLeft = s0 - (ev.clientX - sx); });
    addEventListener('pointerup', () => { if (down) { down = false; tr.classList.remove('drag'); } });
  }

  document.querySelectorAll('[data-soort]').forEach(a => a.addEventListener('click', () => {
    const r = [...document.querySelectorAll('input[name="soort"]')].find(x => x.value === a.dataset.soort); if (r) r.checked = true;
  }));

  document.getElementById('form').addEventListener('submit', ev => {
    ev.preventDefault();
    const f = ev.target, n = document.getElementById('note');
    const leeg = [...f.querySelectorAll('[required]')].filter(x => !x.value.trim());
    f.querySelectorAll('[required]').forEach(x => x.classList.toggle('err', !x.value.trim()));
    if (leeg.length) { n.textContent = 'Vul uw naam, e-mailadres en vraag in.'; n.className = 'note bad'; leeg[0].focus(); return; }
    n.textContent = 'Bedankt! Dit is een voorbeeld, dus er is nog niets verstuurd.'; n.className = 'note ok';
  });
})();
