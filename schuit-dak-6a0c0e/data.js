// Dakdekkersbedrijf Schuit (Harderwijk volgens kandidatenlijst; Google-profiel heeft geen adres). GEEN eigen website.
// Alles uit het Google-profiel (5,0 / 2), 25-11-2026. Zie content.md. Logo zelf gemaakt (woordmerk). Foto's: alle 6 van Google.
window.SITE = {
  naam: "Dakdekkersbedrijf Schuit",
  kortNaam: "Dakdekkersbedrijf Schuit",
  plaats: "Harderwijk",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 38,
  kleuren: { brand: "#1a1e24", accent: "#9c3d2e" },
  telefoon: "06 29 80 58 80",
  telefoonIntl: "31629805880",
  google: { score: "5,0", aantal: "2" },
  navCta: "Bel of app",
  ctaTekst: "Vraag een offerte aan",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  voetTekst: "Dakdekker voor platte daken. Nieuwe dakbedekking, lichtkoepels en strakke dakranden.",

  hero: {
    regels: ["Afspraak", "is afspraak."],
    tekst: "Uw platte dak vervangen? Schuit komt snel kijken, stuurt vlot een redelijke offerte en levert het dak netjes op.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoPosMobiel: "40% 55%",
    fotoAlt: "Nieuw plat dak met lichtkoepels en strakke dakrand",
    donker: true,
    punten: ["5,0 op Google", "Snel een offerte", "Netjes achtergelaten"]
  },

  marquee: ["Platte daken", "Bitumen", "Dakvervanging", "Lichtkoepels", "Dakranden", "Daktrims", "Aansluitingen"],

  intro: {
    kicker: "Dakdekkersbedrijf Schuit",
    tekst: "Is uw platte dak aan vervanging toe? We komen snel kijken, u krijgt vlot een redelijke offerte, en zodra het kan staan we op het dak. Daarna laten we alles netjes achter.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "Vlot", label: "Een redelijke offerte" },
      { getal: "Netjes", label: "Alles opgeruimd achtergelaten" }
    ]
  },

  diensten: {
    titel: "Specialist in platte daken",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp. Dan weet u snel waar u aan toe bent.",
    knop: "Vraag een offerte aan",
    items: [
      { naam: "Plat dak vervangen", soort: "Plat dak", foto: "img/platdak-steiger.jpg", pos: "50% 55%",
        tekst: "Het oude dak eraf en een nieuwe bitumen dakbedekking erop. Strak gelegd en waterdicht afgewerkt.",
        punten: ["Nieuwe dakbedekking", "Woningen en uitbouwen", "Strak gelegd"] },
      { naam: "Lichtkoepels", soort: "Lichtkoepel", foto: "img/lichtkoepels.jpg", pos: "50% 50%",
        tekst: "Lichtkoepels netjes ingewerkt in het nieuwe dak, zodat er geen water langs kan.",
        punten: ["Waterdicht ingewerkt", "Nette opstanden", "Meer licht binnen"] },
      { naam: "Dakranden en daktrims", soort: "Dakrand", foto: "img/dakrand.jpg", pos: "50% 50%",
        tekst: "Strakke dakranden en daktrims rondom het platte dak. Mooi om te zien, en het water loopt goed weg.",
        punten: ["Aluminium daktrims", "Strakke randen", "Goede afwatering"] },
      { naam: "Aansluitingen", soort: "Plat dak", foto: "img/aansluiting.jpg", pos: "50% 50%",
        tekst: "Waar het platte dak tegen het pannendak of de gevel komt, werken we de aansluiting zorgvuldig af.",
        punten: ["Tegen het pannendak", "Tegen de gevel", "Zorgvuldig afgewerkt"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit platte daken die we hebben gemaakt.",
    items: [
      { foto: "img/hero.jpg", label: "Plat dak", sub: "Met lichtkoepels", pos: "50% 55%" },
      { foto: "img/pannen.jpg", label: "Pannendak", sub: "Strak gelegd", pos: "50% 50%" },
      { foto: "img/platdak-steiger.jpg", label: "Dak vervangen", sub: "Nieuwe dakbedekking", pos: "50% 55%" },
      { foto: "img/dakrand.jpg", label: "Dakrand", sub: "Strak afgewerkt", pos: "50% 50%" },
      { foto: "img/lichtkoepels.jpg", label: "Uitbouw", sub: "Met twee lichtkoepels", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Schuit",
    tekst: "Snel komen kijken, vlot een offerte en netjes werken. Dat noemen klanten op Google.",
    foto: "img/aansluiting.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw plat dak aangesloten op een pannendak",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er aan de hand is, het liefst met een paar foto's." },
      { naam: "Snel opnemen", tekst: "We komen snel kijken wat er nodig is." },
      { naam: "Vlot een offerte", tekst: "U krijgt snel een duidelijke en redelijke offerte." },
      { naam: "Netjes opgeleverd", tekst: "Zodra het kan gaan we aan de slag, en we laten alles netjes achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ik kan dakbedekkersbedrijf Schuit absoluut aanraden! Ze hebben bij ons een plat dak vervangen. Ze konden snel komen om de boel op te nemen en we kregen vlot de offerte die alleszins redelijk was. … Ze werkten hard en hebben het werk naar volle tevredenheid verricht waarna ze alles netjes hebben achtergelaten.", naam: "Martine v. O." },
      { tekst: "Alles prima geregeld; afspraak is afspraak. Netjes en vlot gewerkt. Zeker aan te bevelen.", naam: "Pieter S." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Hard werken, netjes opleveren",
    rol: "Dakdekkersbedrijf Schuit",
    tekst: [
      "Klanten kennen Dakdekkersbedrijf Schuit als een bedrijf waar afspraak afspraak is: snel komen kijken, vlot een redelijke offerte en hard aan het werk.",
      "Na afloop laten we alles netjes achter. Heeft u een vraag over uw platte dak? Stuur gerust een bericht met een foto."
    ],
    foto: "img/pannen.jpg", fotoPos: "50% 50%", fotoAlt: "Strak gelegd pannendak tegen een blauwe lucht",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/platdak-steiger.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw plat dak?",
    tekst: "Bel of app 06 29 80 58 80. Stuur er een foto bij, dan denken we met u mee."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak vervangen", "Lichtkoepel", "Dakrand", "Lekkage", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van de uitbouw is oud en moet vervangen worden",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};

// Leesbare hero-tekst op de foto (sjabloon niet aanpassen).
(function () {
  const st = document.createElement('style');
  st.textContent = '.hero-side p,.hero-pts{text-shadow:0 1px 14px rgba(0,0,0,.55)}';
  document.head.appendChild(st);
})();
