// Vatan Dakbedekking & Isolatie (Den Haag). Bron: vatandak.nl (3 pagina's) + Google (4,9 / 12), opgehaald 25-11-2026. Zie content.md.
// Foto's: alleen eigen foto's (WhatsApp-foto's op hun site, Facebook-foto, eigen Google-profiel). Mogelijke stockfoto's van hun site
// (dakbedekking-bitumen1, Dakbedekking-op-opbouw, rubber-dak-epdm) bewust niet gebruikt. Weinig foto's: sommige herhaald.
window.SITE = {
  naam: "Vatan Dak",
  plaats: "Den Haag",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#1d2128", accent: "#c99a4b" },
  telefoon: "06 24 44 01 00",
  telefoonIntl: "31624440100",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht of foto",
  email: "info@vatandak.nl",
  google: { score: "4,9", aantal: "12" },
  ctaTekst: "Vrijblijvende offerte",
  navCta: "Offerte",
  voetTekst: "Vatan Dakbedekking & Isolatie. Gediplomeerde dakdekkers voor nieuwbouw, renovatie en onderhoud van daken, in heel Nederland.",

  hero: {
    regels: ["Wij houden", "uw dak droog."],
    tekst: "Dakbedekking en isolatie voor ver- en aanbouw, renovatie en onderhoud. Gediplomeerde dakdekkers met 20 jaar ervaring.",
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 55%",
    fotoAlt: "Nieuw plat dak met lichtkoepels, gelegd door Vatan Dak",
    donker: true,
    punten: ["20 jaar ervaring", "10 jaar garantie", "Gediplomeerde dakdekkers"]
  },

  marquee: ["Bitumen", "PVC", "Dakisolatie", "Nieuwbouw", "Renovatie", "Onderhoud", "Reparatie", "Ver- en aanbouw", "Groot en klein"],

  intro: {
    kicker: "Vatan Dakbedekking & Isolatie",
    tekst: "Het droog houden van gebouwen is ons vak. Met hoogwaardige dakbedekking zoals bitumen en PVC, en goede isolatie. Groot of klein: wij doen alle daken.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "20", tel: 20, label: "Jaar ervaring" },
      { getal: "10", tel: 10, label: "Jaar garantie" },
      { getal: "NL", label: "Werkgebied: heel Nederland" }
    ]
  },

  diensten: {
    titel: "Dakbedekking en isolatie",
    tekst: "Nieuwbouw, renovatie, onderhoud en beheer. Voor woningen en bedrijven.",
    items: [
      { naam: "Nieuwe dakbedekking", soort: "Nieuwe dakbedekking", foto: "img/p-bedrijfsdak.jpg", pos: "50% 60%",
        tekst: "Bezig met een ver- of aanbouw? Wij leggen de dakbedekking en isolatie, in allerlei vormen en maten.",
        punten: ["Bitumen en PVC", "Ver- en aanbouw", "Nieuwbouwprojecten"] },
      { naam: "Dakbedekking vervangen", soort: "Dakbedekking vervangen", foto: "img/p-ontluchting.jpg", pos: "50% 50%",
        tekst: "Is uw huidige dakbedekking aan vervanging toe? We denken met u mee over de beste oplossing en isoleren het dak meteen goed.",
        punten: ["Eerlijk advies", "Renovatie met isolatie", "10 jaar garantie"] },
      { naam: "Onderhoud en reparatie", soort: "Onderhoud / reparatie", foto: "img/p-grijs.jpg", pos: "50% 50%",
        tekst: "Een lekkage of een dak dat onderhoud nodig heeft? We komen snel en maken het netjes en waterdicht, ook de randen en aansluitingen.",
        punten: ["Daklekkage verhelpen", "Onderhoud en beheer", "Snel geregeld"] }
    ],
    meer: [
      { naam: "Dakisolatie", tekst: "Een goed geïsoleerd dak houdt de warmte binnen. We isoleren bij nieuwbouw en renovatie." },
      { naam: "Groot en klein", tekst: "Van een schuur of aanbouw tot een groot bedrijfsdak: wij doen alle daken." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Ons werk",
    titel: "Een paar van onze projecten",
    tekst: "Strak gelegd en netjes afgewerkt.",
    items: [
      { foto: "img/p-lichtkoepels.jpg", label: "Plat dak met lichtkoepels", sub: "Nieuwe bitumen dakbedekking", pos: "50% 55%" },
      { foto: "img/p-bedrijfsdak.jpg", label: "Groot plat dak", sub: "Bitumen", pos: "50% 60%" },
      { foto: "img/p-grijs.jpg", label: "Renovatie", sub: "Nieuwe dakbedekking", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Wij zijn pas tevreden als u tevreden bent.",
    stappen: [
      { naam: "U neemt contact op", tekst: "Bel, app of mail. Stuur gerust een foto van uw dak mee." },
      { naam: "We denken mee", tekst: "We bekijken uw dak en adviseren wat er nodig is." },
      { naam: "Vrijblijvende offerte", tekst: "U krijgt een heldere offerte, zonder verplichtingen." },
      { naam: "Strak uitgevoerd", tekst: "Netjes en waterdicht afgewerkt, met 10 jaar garantie." }
    ]
  },

  garantie: {
    kicker: "Onze belofte", navNaam: "Garantie",
    titel: "10 jaar garantie",
    tekst: "Gediplomeerde dakdekkers met 20 jaar ervaring. Hoge kwaliteit is wat we leveren, en daar staan we tien jaar voor in.",
    lijst: {
      titel: "Waarom Vatan Dak?",
      punten: [
        "Gediplomeerde dakdekkers",
        "20 jaar ervaring",
        "10 jaar garantie",
        "Hoogwaardige dakbedekking: bitumen en PVC",
        "Alle daken, groot en klein"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Ik ben behoorlijk kritisch als het om dakdekkers gaat … De kwaliteit is echt super. Alles is netjes afgewerkt en zorgvuldig waterdicht gemaakt, ook de randen en aansluitingen. … Ook de service vind ik uitstekend. Ze geven een lange garantie en nemen opmerkingen serieus.", naam: "Ronald P" },
      { tekst: "Erg vriendelijk personeel en fantastisch werk geleverd.", naam: "Hakan Altun" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Alle daken, groot en klein",
    rol: "Vatan Dakbedekking & Isolatie",
    tekst: [
      "Het droog houden van gebouwen is onze passie. Dat doen we met hoogwaardige dakbedekking zoals bitumen en PVC, en met goede isolatie.",
      "Vanuit Den Haag werken we in heel Nederland, aan nieuwbouw- en renovatieprojecten. Nieuwbouw, renovatie, onderhoud en beheer zijn onze kernactiviteiten. Hoe groot uw project ook is: wij gaan met uw dak aan de slag."
    ],
    foto: "img/hero-mobiel.jpg", fotoPos: "50% 50%", fotoAlt: "Plat dak met lichtkoepels door Vatan Dak",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Welke dakbedekking gebruiken jullie?", a: "Hoogwaardige dakbedekking, zoals bitumen en PVC. We adviseren wat het beste past bij uw dak." },
    { v: "Krijg ik garantie?", a: "Ja, u krijgt 10 jaar garantie." },
    { v: "Werken jullie alleen in Den Haag?", a: "Nee, we werken in heel Nederland, aan nieuwbouw en renovatie." },
    { v: "Doen jullie ook kleine klussen?", a: "Zeker. Wij doen alle daken, groot en klein." }
  ],

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. We beantwoorden uw vraag zo snel mogelijk.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Nieuwe dakbedekking", "Dakbedekking vervangen", "Dakisolatie", "Lekkage", "Onderhoud", "Anders"],
    voorbeeld: "Bijvoorbeeld: we bouwen een aanbouw en zoeken iemand voor de dakbedekking en isolatie",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
