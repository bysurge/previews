// Sjabloon schilders: bouwt de pagina uit window.SITE (data.js in de preview-map).
// Elke sectie is optioneel: laat de sleutel weg in data.js en de sectie verdwijnt.
(function () {
  const S = window.SITE;
  const e = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const wa = `https://wa.me/${S.telefoonIntl}`;
  const tel = `tel:+${S.telefoonIntl}`;
  const I = {
    ster: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.6l2.9 6 6.5.8-4.8 4.5 1.2 6.5L12 17.3l-5.8 3.1 1.2-6.5L2.6 9.4l6.5-.8z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97-.29.19-.54.06a6.7 6.7 0 01-3.34-2.92c-.25-.43.25-.4.72-1.34a.45.45 0 00-.02-.43c-.06-.12-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.92.92 0 00-.67.31 2.8 2.8 0 00-.87 2.08 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8c1.6.69 2.23.75 3.03.63a2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.15-1.2c-.06-.1-.23-.17-.48-.29z"/></svg>',
    tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg>',
    greep: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    links: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    rechts: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    vink: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  const sterren = `<span class="sterren" aria-hidden="true">${I.ster.repeat(5)}</span>`;
  const H = S.hero, V = S.voorNa, D = S.galerij, DI = S.diensten, W = S.werkwijze, GA = S.garantie, O = S.over, R = S.reviews, G = S.werkgebied, C = S.contact;

  document.title = `${S.naam} · Schilder in ${S.plaats}`;
  if (S.kleuren) for (const [k, v] of Object.entries(S.kleuren)) document.documentElement.style.setProperty('--' + k, v);

  const merk = `<img src="${S.logoKlein || S.logo}" alt=""${S.logoVorm ? ` class="${S.logoVorm}"` : ''}>${S.logoVorm === 'breed' ? '' : `<span>${e(S.naam)}</span>`}`;
  const proof = S.google
    ? `<a class="proof" href="#reviews">${sterren}<span><b>${e(S.google.score)}</b> op Google, ${e(S.google.aantal)} reviews</span></a>`
    : (H.proof ? `<span class="proof"><span class="sterren">${I.vink}</span><span>${e(H.proof)}</span></span>` : '');
  const nav = [V && ['#voor-na', 'Voor en na'], D && ['#werk', D.navNaam || 'Ons werk'], ['#diensten', 'Diensten'], GA && ['#garantie', 'Garantie'], O && ['#over', `Over ${S.voornaam}`], ['#contact', 'Contact']].filter(Boolean);

  const sec = {
    vn: () => !V ? '' : `
<section class="vn" id="voor-na"><div class="wrap vn-grid">
  <div class="vn-links">
    <h2>${e(V.titel)}</h2>
    <p class="intro">${e(V.tekst)}</p>
    <div class="tabs" role="tablist">${V.items.map((x, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-i="${i}">${e(x.naam)}</button>`).join('')}</div>
    ${V.gevel ? `<div class="gevel"><figure><img src="${V.gevel.voor}" alt="Voor de klus" loading="lazy"><figcaption>Voor</figcaption></figure><figure><img src="${V.gevel.na}" alt="Na de klus" loading="lazy"><figcaption>Na</figcaption></figure><p class="gevel-tekst">${e(V.gevel.tekst)}</p></div>` : ''}
  </div>
  <div class="slider" id="slider">
    <img class="voor" src="${V.items[0].voor}" alt="${e(V.items[0].naam)} voor de klus">
    <img class="na" src="${V.items[0].na}" alt="${e(V.items[0].naam)} na de klus">
    <span class="tag l">Voor</span><span class="tag r">Na</span>
    <span class="lijn"></span><span class="greep">${I.greep}</span>
    <input type="range" min="0" max="100" value="50" aria-label="Schuif tussen voor en na">
  </div>
</div></section>`,
    galerij: () => !D ? '' : `
<section class="straat ${D.vorm === 'recht' ? 'recht' : ''}" id="werk" aria-labelledby="straat-t">
  <div class="wrap straat-kop">
    <div><h2 id="straat-t">${e(D.titel)}</h2><p class="intro">${e(D.tekst)}</p></div>
    <div class="straat-nav"><button data-d="-1" aria-label="Vorige foto's">${I.links}</button><button data-d="1" aria-label="Volgende foto's">${I.rechts}</button></div>
  </div>
  <div class="straat-rij" id="straat">${D.items.map(d => `<figure><div class="boog"><img src="${d.foto}" alt="${e(d.alt || d.label)}" loading="lazy"></div><figcaption>${d.hex ? `<i style="background:${d.hex}"></i>` : ''}${e(d.label)}</figcaption></figure>`).join('')}</div>
  ${D.vorm === 'recht' ? '' : '<div class="wrap"><div class="stoep"></div></div>'}
</section>`,
    garantie: () => !GA ? '' : `
<section class="garantie" id="garantie"><div class="wrap ga-grid">
  <div>
    <h2>${e(GA.titel)}</h2><p class="intro">${e(GA.tekst)}</p>
    <ol class="ladder">${GA.jaren.map(j => `<li><span class="jr">${e(j.jaar)}</span><span>${e(j.tekst)}</span></li>`).join('')}</ol>
  </div>
  ${GA.allin ? `<div class="allin"><h3>${e(GA.allin.titel)}</h3><p>${e(GA.allin.tekst)}</p><ul>${GA.allin.punten.map(p => `<li>${I.vink}${e(p)}</li>`).join('')}</ul>${GA.merken ? `<p class="merken">Wij werken met <b>${GA.merken.map(e).join('</b> en <b>')}</b>.</p>` : ''}</div>` : ''}
</div></section>`
  };

  document.getElementById('app').innerHTML = `
<header class="kop" id="kop"><div class="wrap kop-in">
  <a class="merk" href="#top">${merk}</a>
  <nav class="nav" aria-label="Menu">${nav.map(n => `<a href="${n[0]}">${e(n[1])}</a>`).join('')}</nav>
  <a class="btn btn-groen" href="#contact">Offerte</a>
</div></header>

<main id="top">
<section class="hero"><div class="wrap hero-grid">
  <div class="h-a">${proof}<h1>${e(H.titel)}</h1></div>
  <div class="h-b">
    <div class="deur${H.vorm === 'recht' ? ' recht' : ''}"><img src="${H.foto}" alt="${e(H.fotoAlt)}" fetchpriority="high"${H.fotoPos ? ` style="object-position:${H.fotoPos}"` : ''}></div>
    <ul class="feiten">${H.feiten.map(f => `<li>${e(f)}</li>`).join('')}</ul>
  </div>
  <div class="h-c">
    <p class="lead">${e(H.tekst)}</p>
    <div class="btns">
      <a class="btn btn-groen" href="#contact">Vraag een offerte aan</a>
      <a class="btn btn-rand" href="${wa}" target="_blank" rel="noopener">${I.wa} App ${e(S.voornaam || 'ons')}</a>
    </div>
  </div>
</div></section>

${S.volgorde === 'galerij-eerst' ? sec.galerij() + sec.vn() : sec.vn() + sec.galerij()}

<section class="diensten" id="diensten"><div class="wrap">
  <h2>${e(DI.titel)}</h2>
  <div class="dienst-lijst">${DI.groot.map(d => `
    <article class="dienst">
      <div class="dienst-foto"><img src="${d.foto}" alt="${e(d.naam)}" loading="lazy"></div>
      <div><h3>${e(d.naam)}</h3><p>${e(d.tekst)}</p><ul>${d.punten.map(p => `<li>${e(p)}</li>`).join('')}</ul></div>
    </article>`).join('')}
  </div>
  ${DI.klein ? `<div class="klein">${DI.klein.map(d => `<div><h3>${e(d.naam)}</h3><p>${e(d.tekst)}</p></div>`).join('')}</div>` : ''}
</div></section>

${W ? `<section class="werk"><div class="wrap">
  <h2>${e(W.titel)}</h2>
  <ol class="stappen">${W.stappen.map(s => `<li><b>${e(s.naam)}</b><p>${e(s.tekst)}</p></li>`).join('')}</ol>
</div></section>` : ''}

${sec.garantie()}

${O ? `<section class="over" id="over"><div class="wrap"><div class="over-kaart">
  <div class="over-foto"><img src="${O.foto}" alt="${e(O.fotoAlt)}" loading="lazy">${O.sticker !== false ? `<div class="sticker"><img src="${S.logo}" alt="Logo ${e(S.naam)}" loading="lazy"></div>` : ''}</div>
  <div class="over-tekst">
    <h2>${e(O.titel)}</h2>
    ${O.rol ? `<p class="rol">${e(O.rol)}</p>` : ''}
    ${O.tekst.map(p => `<p>${e(p)}</p>`).join('')}
    <a class="btn btn-rand" href="${wa}" target="_blank" rel="noopener">${I.wa} ${e(O.knop || 'Stuur ons een bericht')}</a>
  </div>
</div></div></section>` : ''}

<section class="reviews" id="reviews"><div class="wrap rev-grid">
  <div>
    <h2>${e(R.titel)}</h2>
    ${S.google ? `<div class="score"><span class="cijfer">${e(S.google.score)}</span><div>${sterren}<small>${e(S.google.aantal)} reviews op Google</small></div></div>` : (R.sub ? `<p class="intro">${e(R.sub)}</p>` : '')}
  </div>
  <div class="quotes${R.items.length > 3 ? ' veel' : ''}">${R.items.map(r => `<blockquote><p>${e(r.tekst)}</p><footer>${sterren}<span>${e(r.naam)}</span></footer></blockquote>`).join('')}</div>
</div></section>

<section class="gf"><div class="wrap gf-grid">
  ${G ? `<div><h2>${e(G.titel)}</h2><p class="intro">${e(G.tekst)}</p>${G.plaatsen ? `<ul class="plaatsen">${G.plaatsen.map(p => `<li>${e(p)}</li>`).join('')}</ul>` : ''}</div>` : ''}
  ${S.faq ? `<div><h2>Veelgestelde vragen</h2><div class="faq">${S.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${e(f.v)}</summary><p>${e(f.a)}</p></details>`).join('')}</div></div>` : ''}
</div></section>

<section class="contact" id="contact"><div class="wrap c-grid">
  <div>
    <h2>${e(C.titel)}</h2>
    <p class="intro">${e(C.tekst)}</p>
    <div class="c-acties">
      <a class="btn btn-oker" href="${wa}" target="_blank" rel="noopener">${I.wa} WhatsApp${S.voornaam ? ' ' + e(S.voornaam) : ''}</a>
      <a class="btn btn-rand" style="border-color:rgba(255,255,255,.4);color:#fff" href="${tel}">${I.tel} ${e(S.telefoon)}</a>
    </div>
    <div class="c-info"><a href="mailto:${e(S.email)}">${e(S.email)}</a><span>${S.adres.map(e).join(', ')}</span>${S.kvk ? `<span>KvK ${e(S.kvk)}</span>` : ''}</div>
  </div>
  <form class="form" id="form" novalidate>
    <fieldset class="keuze"><legend>Waar kunnen we mee helpen?</legend>${C.onderwerpen.map((o, i) => `<label><input type="radio" name="soort" value="${e(o)}"${i === 0 ? ' checked' : ''}><span>${e(o)}</span></label>`).join('')}</fieldset>
    <div class="twee"><label>Naam<input name="naam" required autocomplete="name"></label><label>Plaats<input name="plaats" autocomplete="address-level2"></label></div>
    <div class="twee"><label>E-mailadres<input type="email" name="email" required autocomplete="email"></label><label>Telefoonnummer<input type="tel" name="tel" autocomplete="tel"></label></div>
    <label>Wat wilt u laten doen?<textarea name="bericht" rows="4" required placeholder="${e(C.voorbeeld || 'Bijvoorbeeld: kozijnen en deuren aan de voorkant schilderen')}"></textarea></label>
    <button class="btn btn-groen" type="submit">Verstuur aanvraag</button>
    <p class="melding" id="melding">Naam, e-mailadres en uw vraag zijn nodig om te reageren.</p>
  </form>
</div></section>
</main>

<footer class="voet"><div class="wrap voet-in">
  <a class="merk" href="#top">${S.logoWit ? `<img src="${S.logoWit}" alt="" class="breed">` : merk}</a>
  <span>${S.adres.map(e).join(', ')}${S.kvk ? ` · KvK ${e(S.kvk)}` : ''} · <a href="${tel}">${e(S.telefoon)}</a></span>
</div></footer>

<a class="fab" href="${wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>`;

  const kop = document.getElementById('kop');
  addEventListener('scroll', () => kop.classList.toggle('scrolled', scrollY > 10), { passive: true });

  const sl = document.getElementById('slider');
  if (sl) {
    const rng = sl.querySelector('input'), zet = v => sl.style.setProperty('--pos', v + '%');
    rng.addEventListener('input', () => zet(rng.value));
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      const x = V.items[+t.dataset.i];
      document.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-selected', b === t));
      sl.querySelector('.voor').src = x.voor; sl.querySelector('.na').src = x.na;
      sl.querySelector('.voor').alt = x.naam + ' voor de klus'; sl.querySelector('.na').alt = x.naam + ' na de klus';
      rng.value = 50; zet(50);
    }));
  }

  const rij = document.getElementById('straat');
  if (rij) document.querySelectorAll('.straat-nav button').forEach(b => b.addEventListener('click', () => rij.scrollBy({ left: +b.dataset.d * 290, behavior: 'smooth' })));

  document.getElementById('form').addEventListener('submit', ev => {
    ev.preventDefault();
    const f = ev.target, m = document.getElementById('melding');
    const leeg = [...f.querySelectorAll('[required]')].filter(x => !x.value.trim());
    f.querySelectorAll('[required]').forEach(x => x.classList.toggle('fout', !x.value.trim()));
    if (leeg.length) { m.textContent = 'Vul uw naam, e-mailadres en vraag in.'; m.className = 'melding nee'; leeg[0].focus(); return; }
    m.textContent = 'Bedankt! Dit is een voorbeeld, dus er is nog niets verstuurd.'; m.className = 'melding ok';
  });
})();
