// Stichtse Vecht Daktechniek (Maarssen). Bron: eigen site (1 pagina) + Google-profiel (5,0 / 2), 25-11-2026. Zie content.md.
// Weinig info op de eigen site: alleen wat aantoonbaar is (foto's en reviews). Geen adres, e-mail of KvK bekend.
window.SITE = {
  naam: "Stichtse Vecht Daktechniek",
  kortNaam: "Stichtse Vecht Daktechniek",
  plaats: "Maarssen",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 58,
  kleuren: { brand: "#101638", accent: "#d8a24a" },
  telefoon: "06 42 81 00 13",
  telefoonIntl: "31642810013",
  google: { score: "5,0", aantal: "2" },
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  navCta: "Bel of app",
  ctaTekst: "Vraag een prijs aan",
  voetTekst: "Puur vakmanschap. Dakdekker in Stichtse Vecht: platte daken, garagedaken en zinken dakgoten.",

  hero: {
    regels: ["Puur", "vakmanschap."],
    tekst: "Voor als uw dak écht goed moet zijn. Snel, verzorgd en betaalbaar. Platte daken, garagedaken en dakgoten in Maarssen en de rest van Stichtse Vecht.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "50% 50%",
    fotoAlt: "Nieuw plat dak met strakke kilgoot, gelegd door Stichtse Vecht Daktechniek",
    donker: true,
    punten: ["Snel, verzorgd en betaalbaar", "5,0 op Google", "Platte daken en dakgoten"]
  },

  marquee: ["Platte daken", "Garagedaken", "Bitumen", "Zinken dakgoten", "Regenwaterafvoer", "Lichtstraten", "Dakranden"],

  intro: {
    kicker: "Over Stichtse Vecht Daktechniek",
    tekst: "Een dak moet gewoon goed zijn. Daarom werken we strak tot in de hoeken, en communiceren we helder. Zo goed dat klanten ons doorgeven aan de buren.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "2 van 2", label: "Reviews met 5 sterren" }
    ]
  },

  diensten: {
    titel: "Waar we goed in zijn",
    tekst: "Stuur een paar foto's van uw dak via WhatsApp. Voor een snelle reactie kunt u ook gewoon bellen.",
    knop: "Vraag een prijs aan",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/schuin.jpg", pos: "50% 50%", tekst: "Nieuwe bitumen dakbedekking op woningen, schuren en bedrijfspanden. Strak gelegd, ook rond kilgoten en hoeken.",
        punten: ["Bitumen dakbedekking", "Strakke kilgoten", "Nette dakranden"] },
      { naam: "Garagedaken", soort: "Garagedak", foto: "img/garage.jpg", pos: "50% 55%", tekst: "Uw garagedak in één keer vernieuwd. Met fijne communicatie vooraf en een mooi strak resultaat.",
        punten: ["Oud dak vervangen", "Ook voor de buren", "Mooi afgewerkt"] },
      { naam: "Dakgoten en lichtstraten", soort: "Dakgoot", foto: "img/koepel.jpg", pos: "50% 50%", tekst: "Oude zinken goten vervangen, en waar nodig een omleiding voor overtollig regenwater. Super strak afgewerkt.",
        punten: ["Zinken goten", "Regenwaterafvoer", "Lichtstraten ingewerkt"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk",
    tekst: "Een greep uit onze daken in en rond Stichtse Vecht.",
    items: [
      { foto: "img/hero.jpg", label: "Plat dak met kilgoot", sub: "Nieuwe bitumen, strak tot in de hoeken", pos: "50% 55%" },
      { foto: "img/koepel.jpg", label: "Lichtstraat ingewerkt", sub: "Waterdicht aangesloten", pos: "50% 45%" },
      { foto: "img/garage.jpg", label: "Garagedak vernieuwd", sub: "Met nette dakrand", pos: "50% 55%" },
      { foto: "img/groot.jpg", label: "Groot bedrijfsdak", sub: "Bitumen in lange banen", pos: "50% 60%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ons garagedak hebben wij vorig jaar laten vernieuwen door Stichtse Vecht Daktechniek. Fijne communicatie en een erg mooi resultaat! Zo goed dat onze buren dit jaar ook hun dak … hebben laten vervangen, wederom top!", naam: "R. van den Heuvel" },
      { tekst: "Top werk! Zeer oude goten (zink) vervangen en een omleiding gemaakt voor overtollig regenwater. Super strak. Zeker een aanrader!", naam: "O.O." }
    ]
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Voor als uw dak écht goed moet zijn",
    tekst: "Bel of app 06 42 81 00 13. Voor een snelle reactie kunt u het beste bellen."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Prijs aanvragen",
    onderwerpen: ["Plat dak", "Garagedak", "Dakgoot", "Lekkage", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: garagedak van zo'n 18 m2, de dakbedekking is oud en begint te scheuren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
