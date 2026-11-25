// Dakrenovatie Midden Nederland. Geen eigen site (domein geparkeerd): alles van hun Google-profiel (5,0 / 5, 25-11-2026).
// Diensten alleen zoals ze in de reviews en op de foto's staan. Geen logo: tekst-woordmerk. Zie content.md.
window.SITE = {
  naam: "Dakrenovatie Midden Nederland",
  kortNaam: "Dakrenovatie MN",
  plaats: "Midden-Nederland",
  vak: "Dakdekker",
  titelExtra: "Dakrenovatie en lekkages in Midden-Nederland",
  logo: "img/logo.svg",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoHoogte: 40,
  kleuren: { brand: "#1e2229", accent: "#b5462f" },
  telefoon: "06 14 96 90 48",
  telefoonIntl: "31614969048",
  waTekst: "Stuur een appje",
  google: { score: "5,0", aantal: "5" },
  ctaTekst: "Vrijblijvende offerte",
  navCta: "Offerte",
  voetTekst: "Pannendaken vernieuwen, lekkages en stormschade. Vakwerk in Midden-Nederland.",

  hero: {
    regels: ["Uw dak weer", "als nieuw."],
    tekst: "Van een lekkage na een storm tot een compleet nieuw pannendak: we pakken het snel en vakkundig aan, en denken met u mee.",
    foto: "img/hero.jpg", fotoPos: "50% 62%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "40% 50%",
    fotoAlt: "Dakdekkers aan het werk op een pannendak",
    donker: true,
    punten: ["5,0 op Google", "Stormschade snel opgelost", "Afspraak is afspraak"]
  },

  marquee: ["Dakrenovatie", "Pannendaken", "Nieuwe folie en panlatten", "Lekkages", "Stormschade", "Kilgoten", "Schoorstenen"],

  spoed: {
    titel: "Stormschade of lekkage?",
    tekst: "Stuur een foto via WhatsApp of bel. We komen zo snel mogelijk."
  },

  intro: {
    kicker: "Dakrenovatie Midden Nederland",
    tekst: "Een dak dat lekt of op is, vraagt om een vakman die het in één keer goed doet. Snel, kundig en met heldere afspraken.",
    stats: [
      { getal: "5,0", label: "Op Google, 5 reviews" },
      { getal: "Snel", label: "Stormschade snel verholpen" },
      { getal: "Compleet", label: "Pannen, latten, folie en kilgoot" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat wij doen",
    tekst: "Van één lekkage tot een compleet nieuw pannendak.",
    items: [
      { naam: "Dakrenovatie", foto: "img/latten.jpg", pos: "50% 60%", soort: "Compleet vernieuwd",
        tekst: "We halen het dak helemaal kaal: oude pannen, latten en folie eraf. Daarna nieuwe waterdichte folie, nieuwe panlatten en nieuwe dakpannen.",
        punten: ["Nieuwe folie", "Nieuwe panlatten", "Nieuwe dakpannen"] },
      { naam: "Lekkages en stormschade", foto: "img/lekkage.jpg", pos: "50% 60%", soort: "Snel geholpen",
        tekst: "Meerdere lekkages of schade na een storm? We sporen het op en lossen het snel en vakkundig op.",
        punten: ["Lekkages opsporen", "Stormschade", "Snel ter plaatse"] },
      { naam: "Kilgoten en schoorstenen", foto: "img/nieuw-dak.jpg", pos: "50% 55%", soort: "De details",
        tekst: "Een lekke of verzakte kilgoot vervangen we, inclusief alles eromheen. Ook een oude schoorsteen verwijderen we netjes.",
        punten: ["Nieuwe kilgoot", "Schoorsteen verwijderen", "Netjes afgewerkt"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze daken.",
    items: [
      { foto: "img/rij.jpg", label: "Nieuw pannendak", sub: "Rijtjeswoningen", pos: "50% 55%" },
      { foto: "img/woning.jpg", label: "Pannendak", sub: "Woning", pos: "50% 45%" },
      { foto: "img/pannen.jpg", label: "Renovatie", sub: "Nieuwe latten en pannen", pos: "50% 50%" },
      { foto: "img/bouwplaats.jpg", label: "Voorbereiding", sub: "Nieuwe pannen klaar", pos: "50% 55%" },
      { foto: "img/aan-het-werk.jpg", label: "Aan het werk", sub: "Oude dakbedekking eraf", pos: "50% 60%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Meerdere lekkages in het dak, allemaal vakkundig opgelost. Afspraken werden nagekomen en ook werd er flexibel meegedacht over oplossingen.", naam: "B. S." },
      { tekst: "Na een storm hadden we schade aan ons dak, hij heeft dit diezelfde dag nog voor ons gerepareerd. Snel en kundig werk! Nogmaals dank!", naam: "Maaike J." },
      { tekst: "Ze werkten snel, dachten goed mee en waren gedurende het hele proces erg behulpzaam.", naam: "Soufiane" },
      { tekst: "… nieuwe waterdichte folie aangebracht, nieuwe dak latten geplaatst waarop nieuwe dakpannen … Sindsdien geen druppeltje meer gehad. Een zeer tevreden klant hier in Almere.", naam: "Gerrie R." }
    ]
  },

  over: {
    kicker: "Werkwijze", navNaam: "Werkwijze",
    titel: "Afspraak is afspraak",
    rol: "Dakrenovatie Midden Nederland",
    tekst: [
      "We komen kijken, vertellen eerlijk wat er nodig is en denken mee over de beste oplossing. Daarna voeren we het werk uit zoals afgesproken.",
      "Of het nu gaat om één lekkage of een compleet nieuw dak: we werken snel, netjes en houden u op de hoogte."
    ],
    foto: "img/hero-m.jpg", fotoPos: "50% 50%", fotoAlt: "Pannendak in renovatie met nieuwe panlatten",
    knop: "Stuur een appje"
  },

  band: {
    foto: "img/rij.jpg", fotoPos: "50% 50%",
    titel: "Is uw dak aan vernieuwing toe?",
    tekst: "Stuur een foto via WhatsApp of vraag een vrijblijvende offerte aan."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort wat er aan de hand is, of stuur direct een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakrenovatie", "Lekkage", "Stormschade", "Kilgoot", "Schoorsteen", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons dak lekt op meerdere plekken en de pannen zijn oud",
    belofte: "Vrijblijvende offerte, geen verplichtingen."
  }
};
