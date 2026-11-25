// Schlagwein dakwerken (Leiden). Geen eigen website. Bron: Google-profiel (5,0 / 1 review, 25-11-2026) + hun eigen Google-foto's.
// Geen logo bekend: leeg.png als plaatshouder, de naam staat als tekst in de navigatie. Geen eigenaarsnaam, jaartallen of garanties bekend.
// Diensten afgeleid van hun eigen projectfoto's (pannendaken, zink- en leiwerk, platte daken).
// Geen eigen logo: plaatshouder verbergen, alleen de naam tonen.
document.head.insertAdjacentHTML("beforeend", "<style>.brand img{display:none!important}</style>");
window.SITE = {
  naam: "Schlagwein dakwerken",
  kortNaam: "Schlagwein dakwerken",
  plaats: "Leiden",
  vak: "Dakdekker",
  titelExtra: "Dakwerken in Leiden en omgeving",
  logo: "img/leeg.png",
  logoHoogte: 28,
  kleuren: { brand: "#1b2229", accent: "#9aa9b5" },
  telefoon: "06 83 17 30 53",
  telefoonIntl: "31683173053",
  google: { score: "5,0", aantal: "1" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Schlagwein dakwerken: pannendaken, zink- en leiwerk en platte daken in Leiden en omgeving.",

  hero: {
    regels: ["Dakwerk met", "vakmanschap."],
    tekst: "Van een nieuw pannendak tot zinkwerk rond een monumentale dakkapel: Schlagwein dakwerken werkt in Leiden en omgeving, netjes en betrouwbaar.",
    foto: "img/hero.jpg", fotoPos: "50% 45%", fotoPosMobiel: "60% 50%",
    fotoAlt: "Nieuw gelegd pannendak met zinken goot",
    donker: true,
    punten: ["Pannendaken", "Zink- en leiwerk", "Platte daken"]
  },

  marquee: ["Pannendaken", "Zinkwerk", "Leiwerk", "Dakkapellen", "Platte daken", "Goten", "Dakrenovatie"],

  intro: {
    kicker: "Schlagwein dakwerken",
    tekst: "Elk dak verdient vakwerk. Wij werken netjes, snel en laten alles opgeruimd achter.",
    stats: [
      { getal: "5,0", label: "Op Google" },
      { getal: "Leiden", label: "En omgeving" },
      { getal: "Pan, zink & lei", label: "Hellende en platte daken" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat we doen",
    tekst: "Hellend of plat, nieuw of oud: we kijken eerst goed wat uw dak nodig heeft.",
    items: [
      { naam: "Pannendaken", soort: "Hellend dak", foto: "img/pannendak.jpg", pos: "50% 50%",
        tekst: "Een nieuw pannendak of pannen vervangen, strak gelegd en netjes aangesloten op goten en kilgoten.",
        punten: ["Nieuwe pannendaken", "Pannen vervangen", "Goten en aansluitingen"] },
      { naam: "Zink- en leiwerk", soort: "Zinkwerk", foto: "img/dakkapel-zink.jpg", pos: "50% 40%",
        tekst: "Zinkwerk en leien rond dakkapellen, schoorstenen en goten. Ook op oudere en monumentale panden.",
        punten: ["Dakkapellen bekleden", "Zinken goten en randen", "Oud en monumentaal"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/gevel-lei.jpg", pos: "50% 50%",
        tekst: "Nieuwe dakbedekking op platte daken van aanbouw, erker of woning, strak afgewerkt tot in de randen.",
        punten: ["Nieuwe dakbedekking", "Erkers en aanbouwen", "Strakke dakranden"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Recent op het dak",
    tekst: "Een greep uit ons werk in Leiden en omgeving.",
    items: [
      { foto: "img/dakkapel-zink.jpg", label: "Dakkapel met zink en lei", pos: "50% 40%" },
      { foto: "img/hero.jpg", label: "Nieuw pannendak", pos: "50% 50%" },
      { foto: "img/steiger.jpg", label: "Pannendak, vanaf de steiger", pos: "50% 50%" },
      { foto: "img/plat-dakje.jpg", label: "Erker met nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/gevel-lei.jpg", label: "Plat dak, net opgeleverd", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijk vooraf, netjes op het dak.",
    stappen: [
      { naam: "Contact", tekst: "Bel of app ons. Een paar foto's van uw dak helpen al veel." },
      { naam: "Bekijken", tekst: "We komen kijken en vertellen eerlijk wat er nodig is." },
      { naam: "Offerte", tekst: "U krijgt een duidelijke offerte, zonder verrassingen." },
      { naam: "Vakwerk", tekst: "We werken veilig vanaf de steiger en laten alles netjes achter." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Uitstekende dakdekkerservice! Schlagwein dakwerken heeft geweldig werk geleverd met vakmanschap van topkwaliteit, snelheid en professionaliteit. Het team is uiterst betrouwbaar en heeft alles vlekkeloos achtergelaten.", naam: "Lukas L." }
    ]
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Iets aan uw dak?",
    tekst: "App een paar foto's, dan denken we met u mee."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat er aan de hand is, of app een paar foto's van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Pannendak", "Zinkwerk / goten", "Dakkapel", "Plat dak", "Lekkage of reparatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: er liggen een paar pannen scheef en de goot lekt",
    belofte: "We reageren zo snel mogelijk."
  }
};
