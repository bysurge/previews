// Dak & Bouw (Emmen). Bron: dakbouw24.nl + Google (4,9 / 31, opgehaald 25-11-2026).
// Geen adres/KvK/voornaam op eigen site (Google-reviews noemen "Damian", niet gebruikt). Team- en kantoorfoto's op hun site
// lijken AI-gemaakt -> niet gebruikt; deuren/ramen-catalogus weggelaten.
window.SITE = {
  naam: "Dak & Bouw",
  kortNaam: "Dak & Bouw",
  plaats: "Emmen",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Drenthe, Groningen, Friesland en Gelderland",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo.png",
  logoWit: "img/logo.png",
  logoHoogte: 50,
  kleuren: { brand: "#17150f", accent: "#b08a43" },
  telefoon: "06 87 64 84 88",
  telefoonIntl: "31687648488",
  waTekst: "App ons",
  email: "dakbouw.dp@gmail.com",
  google: { score: "4,9", aantal: "31" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf in dakwerken: pannendaken, platte daken, isolatie en lood- en zinkwerk. 24/7 spoedservice.",

  hero: {
    regels: ["Daken gebouwd", "met hart", "en trots."],
    tekst: "Dak & Bouw is een familiebedrijf met meer dan 10 jaar ervaring. U spreekt direct met de mensen die uw dak leggen.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "45% 60%",
    fotoAlt: "Pannendak halverwege vernieuwd: nieuwe zwarte pannen naast de oude rode",
    donker: true,
    punten: ["Tot 10 jaar garantie", "24/7 spoedservice", "Géén voorrijkosten"]
  },

  marquee: ["Pannendaken", "Dakrenovatie", "Platte daken", "Isolatie", "Lood- en zinkwerk", "Stormschade", "Dakinspectie", "Zonnepanelen herplaatsen"],

  spoed: {
    titel: "Stormschade? Wij komen snel.",
    tekst: "24/7 spoedservice: we dekken af, herstellen waar mogelijk en maken een fotodossier voor uw verzekeraar."
  },

  intro: {
    kicker: "Dak & Bouw",
    tekst: "Vakmanschap zonder verkooppraatjes: een vaste ploeg, strak werk en heldere afspraken.",
    stats: [
      { getal: "10+", label: "Jaar ervaring in dakwerken" },
      { getal: "10 jaar", label: "Garantie op dakwerk en materialen" },
      { getal: "4,9", label: "Gemiddeld uit 31 Google-reviews" },
      { getal: "24/7", label: "Spoedservice bij stormschade" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Van nok tot goot",
    tekst: "Een transparante offerte met duidelijke materialen en planning: u weet precies waar u voor betaalt.",
    items: [
      { naam: "Dakrenovatie", foto: "img/pannen-leggen.jpg", pos: "50% 50%", soort: "Hellende daken",
        tekst: "Complete vernieuwing van uw pannendak: nieuwe panlatten en onderdak, goede ventilatie en duurzame dakpannen in een kleur die bij uw woning past.",
        punten: ["Panlatten en onderdak volgens norm", "Precisie bij nokken en hoekkepers", "Schone oplevering"] },
      { naam: "Platte daken", foto: "img/steiger.jpg", pos: "50% 40%", soort: "Renovatie en onderhoud",
        tekst: "Renovatie en onderhoud van platte daken, inclusief afschot, isolatie en doorvoeren, met strak afgewerkte randen.",
        punten: ["Inspectie afschot en afvoer", "Correcte dakopbouw", "Onderhoudsplan op maat"] },
      { naam: "Dakinspectie", foto: "img/dakraam.jpg", pos: "50% 50%", soort: "Rapport met foto's",
        tekst: "Wij controleren pannen, panlatten, onderdak, doorvoeren en lood- en zinkwerk. U krijgt een kort rapport met foto's en advies.",
        punten: ["Kleine herstelacties direct", "Prioriteiten op een rij", "Indicatie van de kosten"] }
    ],
    meer: [
      { naam: "Isolatie", tekst: "Meer wooncomfort en lagere energiekosten, zonder koudebruggen." },
      { naam: "Lood- en zinkwerk", tekst: "Schoorsteenlood, kilgoten en doorvoeren, netjes en waterdicht." },
      { naam: "Zonnepanelen", tekst: "Veilig demonteren voor het dakwerk en daarna terugplaatsen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken in de regio",
    tekst: "Een greep uit ons werk in Drenthe, Groningen, Overijssel en Gelderland.",
    items: [
      { foto: "img/dakkapel.jpg", label: "Nieuw pannendak, Hoogeveen", sub: "Inclusief dakkapel", pos: "50% 50%" },
      { foto: "img/nok.jpg", label: "Nok strak afgewerkt, Emmen", pos: "50% 50%" },
      { foto: "img/rijtjeshuizen.jpg", label: "Renovatie, Meppel", pos: "50% 60%" },
      { foto: "img/bungalow.jpg", label: "Bungalow, Apeldoorn", pos: "50% 50%" },
      { foto: "img/aan-het-werk.jpg", label: "Aan het werk, Hoogeveen", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "U spreekt direct met de uitvoerders, van de eerste inspectie tot de laatste nokpan.",
    foto: "img/betonpannen.jpg", fotoPos: "50% 30%", fotoAlt: "Nieuwe betonpannen op een hellend dak",
    stappen: [
      { naam: "Contact", tekst: "Bel, app of stuur een foto van uw dak. Géén voorrijkosten." },
      { naam: "Inspectie en advies", tekst: "We bekijken uw dak en adviseren eerlijk: nu herstellen of later plannen." },
      { naam: "Transparante offerte", tekst: "Duidelijke scope, materialen en planning. Betalen in termijnen kan ook." },
      { naam: "Netjes uitgevoerd", tekst: "We beschermen tuin en gevel en ruimen elke dag op." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Na lekkage door stormschade op zoek gegaan naar een dakdekker. Waar we door andere bedrijven niet geholpen werden … was Dak&Bouw erg behulpzaam en was dezelfde dag nog ter plekke.", naam: "Tim O." },
      { tekst: "Super service en afhandeling tegen een zeer goede prijs. … De uitvoering vlot, snel en zeer professioneel. Blij mee en zeker een aanrader!", naam: "Gezina F." },
      { tekst: "Wij zijn snel geholpen nadat we een lekkage hadden gemeld. Professionele aanpak en de prijs viel ook mee.", naam: "Joke V." }
    ]
  },

  werkgebied: {
    titel: "Dakdekker in het noorden en oosten",
    tekst: "Vanuit Emmen werken we in Drenthe, Groningen, Friesland en Gelderland.",
    plaatsen: ["Emmen", "Assen", "Hoogeveen", "Coevorden", "Meppel", "Groningen", "Leek", "Zwolle", "Apeldoorn"]
  },

  band: {
    foto: "img/kerk.jpg", fotoPos: "50% 50%",
    titel: "Dak aan vervanging toe?",
    tekst: "Vraag een vrijblijvende offerte aan. We komen langs en adviseren eerlijk."
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Vertel kort om wat voor dak het gaat, of app direct een foto.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Dakrenovatie", "Lekkage / stormschade", "Plat dak", "Dakinspectie", "Isolatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons pannendak is 40 jaar oud en lekt bij de schoorsteen",
    belofte: "Vrijblijvend en zonder voorrijkosten."
  }
};
