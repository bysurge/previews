// Dakdekkersbedrijf Bert de Lange (Ommen). GEEN eigen website: alles uit het Google-profiel (4,0 / 1) en de tekst op hun bus (foto g06), 25-11-2026.
// Logo zelf nagemaakt als woordmerk (oranje dakvleugels zoals op de bus). Zie content.md.
window.SITE = {
  naam: "Dakdekkersbedrijf Bert de Lange",
  kortNaam: "Bert de Lange",
  plaats: "Ommen",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-wit.png", logoHoogte: 52,
  kleuren: { brand: "#1d1b19", accent: "#e07a1f" },
  telefoon: "06 20 53 25 39",
  telefoonIntl: "31620532539",
  telefoon2: "0529 455 560",
  adres: ["Van Ruisdaelstraat 23A", "7731 SW Ommen"],
  waTekst: "Stuur een foto",
  waContact: "Stuur Bert een foto van uw dak",
  navCta: "Bel of app",
  ctaTekst: "Vraag een prijs aan",
  voetTekst: "Dakdekkersbedrijf uit Ommen. Pannendaken, kapconstructies, dakramen en timmerwerk.",

  hero: {
    regels: ["Pannendaken", "met vakmanschap."],
    tekst: "Van een nieuwe villa tot een landhuis in de steigers: Bert de Lange legt uw pannendak, met de kap, de dakramen en het timmerwerk erbij.",
    foto: "img/hero.jpg", fotoPos: "40% 50%", fotoPosMobiel: "30% 50%",
    fotoAlt: "Nieuw gelegd pannendak met dakkapellen, van dichtbij",
    donker: true,
    punten: ["Pannendaken", "Kapconstructies", "Dakramen en timmerwerk"]
  },

  marquee: ["Pannendaken", "Kapconstructies", "Dakramen", "Timmerwerken", "Nieuwbouw", "Renovatie", "Dakkapellen", "Landhuizen"],

  intro: {
    kicker: "Over Bert de Lange",
    tekst: "Een pannendak is vakwerk: van de kapconstructie tot de laatste nokpan. Bert de Lange doet het allemaal, voor nieuwbouw en renovatie, van een vrijstaande woning tot een monumentaal landhuis."
  },

  diensten: {
    titel: "Alles voor uw pannendak",
    tekst: "Stuur een paar foto's of een tekening via WhatsApp. Dan hoort u snel wat er kan.",
    knop: "Vraag een prijs aan",
    items: [
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannen.jpg", pos: "50% 50%", tekst: "Nieuwe pannendaken voor nieuwbouw en renovatie. Oranje, zwart of grijs, recht gelegd tot in de nok.",
        punten: ["Nieuwbouw", "Renovatie", "Oranje, zwart of grijs"] },
      { naam: "Kapconstructies", soort: "Kapconstructie", foto: "img/kap.jpg", pos: "50% 50%", tekst: "Ook de kap zelf: van de constructie tot de panlatten. Zo komt het hele dak uit één hand.",
        punten: ["Kapconstructies", "Ook grote daken", "Alles uit één hand"] },
      { naam: "Dakramen en timmerwerk", soort: "Dakraam", foto: "img/woning.jpg", pos: "50% 50%", tekst: "Dakramen netjes ingewerkt in het nieuwe pannendak, en het timmerwerk eromheen erbij.",
        punten: ["Dakramen", "Dakkapellen afgewerkt", "Timmerwerken"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken waar we trots op zijn",
    tekst: "Een greep uit ons werk, van nieuwe villa tot landhuis.",
    items: [
      { foto: "img/villa.jpg", label: "Nieuwe villa", sub: "Oranje pannendak met dakkapellen", pos: "50% 50%" },
      { foto: "img/landhuis.jpg", label: "Landhuis", sub: "Compleet nieuw dak, vanaf de steiger", pos: "50% 35%" },
      { foto: "img/leien.jpg", label: "Vrijstaande woning", sub: "Grijze pannen, strak gelegd", pos: "50% 50%" },
      { foto: "img/nieuwbouw.jpg", label: "Nieuwbouwrij", sub: "Pannendaken voor een hele straat", pos: "50% 50%" },
      { foto: "img/woning.jpg", label: "Nieuwe woning", sub: "Met kapschuur in dezelfde pannen", pos: "50% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Fantastisch werk geleverd. Nieuw pannendak, inclusief dakramen. TOP.", naam: "Alie K.", sterren: 4 }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Bert de Lange",
    rol: "Dakdekkersbedrijf Bert de Lange, Ommen",
    tekst: [
      "Dakdekkersbedrijf Bert de Lange uit Ommen legt pannendaken, bouwt kapconstructies en werkt dakramen netjes in. Ook het timmerwerk hoort erbij.",
      "Plannen voor een nieuw dak? Stuur Bert een bericht met een foto of tekening, of bel 0529 455 560."
    ],
    foto: "img/bus.jpg", fotoPos: "30% 60%", fotoAlt: "De bus van Bert de Lange voor een landhuis in de steigers",
    knop: "Stuur Bert een bericht"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Een nieuw pannendak?",
    tekst: "Bel of app 06 20 53 25 39. Stuur er een foto bij, dan weet u snel waar u aan toe bent."
  },

  contact: {
    titel: "Vertel over uw dak",
    tekst: "Vul het formulier in, bel, of stuur direct een WhatsApp met een foto.",
    formTitel: "Prijs aanvragen",
    onderwerpen: ["Pannendak", "Kapconstructie", "Dakraam", "Timmerwerk", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: nieuwbouw vrijstaande woning, pannendak met twee dakramen",
    belofte: "Bert neemt zo snel mogelijk contact met u op."
  }
};
