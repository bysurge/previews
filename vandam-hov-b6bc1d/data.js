// Hoveniersbedrijf M. van Dam (Harmelen / Woerden). Bron: hoveniersbedrijfvandam.nl + Google (4,7 / 16), 25-11-2026. Zie content.md.
// Foto's: hun Google-profiel + vlonder en ontwerptekening van hun site. Geen stock.
window.SITE = {
  naam: "Hoveniersbedrijf M. van Dam",
  kortNaam: "Van Dam",
  vak: "Hovenier",
  plaats: "Woerden",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false, logoOpFoto: "img/logo.png", logoWit: "img/logo.png",
  logoHoogte: 54,
  kleuren: { brand: "#26402b", accent: "#a9773f" },
  telefoon: "06 52 63 45 25",
  telefoonIntl: "31652634525",
  waTekst: "App Mathijs",
  email: "info@hoveniersbedrijfvandam.nl",
  adres: ["Dorpeldijk 6", "3481 GW Harmelen"],
  google: { score: "4,7", aantal: "16" },
  voetTekst: "Allround hovenier in Woerden en omstreken. Tuinontwerp, aanleg, vlonders, onderhoud en boomsnoei.",

  hero: {
    regels: ["Het hele jaar", "genieten van", "*uw tuin.*"],
    tekst: "Allround hovenier in Woerden en omstreken. Mathijs van Dam en zijn team ontwerpen, leggen aan en onderhouden, voor particulieren en bedrijven.",
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 60%",
    fotoAlt: "Nieuwe tuin met houten pergola, strak gemaaid gazon en haag",
    badge: "Vrijblijvend tuinadvies",
    punten: ["20 jaar ervaring", "Ontwerp, aanleg en onderhoud"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Bestrating", "Vijvers", "Vlonders en steigers", "Schuttingen", "Tuinonderhoud", "Bomen snoeien en kappen"],

  intro: {
    kicker: "Over Van Dam",
    tekst: "Eerst samen kijken: naar uw wensen, de *grond en de zon.* Pas dan maken we een schets, en daarna de tuin. Tot in de puntjes uitgewerkt.",
    stats: [
      { getal: "20", label: "Jaar ervaring" },
      { getal: "4,7", label: "Gemiddeld op Google" }
    ]
  },

  keurmerkenTitel: "Erkend",
  keurmerken: [
    { naam: "SBB", sub: "Erkend leerbedrijf", logo: "img/sbb.png" }
  ],

  diensten: {
    titel: "Een echte *allround* hovenier",
    tekst: "Van ontwerpschets tot snoeiwerk in hoge bomen. Vraag gerust vrijblijvend advies.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 40%", tekst: "We luisteren naar uw wensen, keuren de grond, kijken waar de zon opkomt en ondergaat, en maken een ontwerpschets die bij u en uw woning past.",
        punten: ["Persoonlijk gesprek", "Schets of ontwerp", "Ook voor bedrijfstuinen"] },
      { naam: "Tuinaanleg", foto: "img/voortuin.jpg", tekst: "We maken de tuin leeg, leggen bestrating en paden, graven de vijver, plaatsen schuttingen en overkappingen en planten tot slot alles in.",
        punten: ["Bestrating en paden", "Vijvers", "Schuttingen en overkappingen"] },
      { naam: "Vlonders en steigers", foto: "img/vlonder.jpg", pos: "50% 60%", tekst: "Houten vlonders en steigers van hardhout, zoals Bankirai. Op een stevige fundering van vlonderpalen, dus ze gaan lang mee.",
        punten: ["Hardhout", "Stevige fundering", "Ook boven het water"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", tekst: "Onderhoudspakketten op maat, voor particulieren en bedrijven. Ook om de tuin winterklaar te maken.",
        punten: ["Onderhoudspakket", "Particulier en zakelijk", "Winterklaar maken"] },
      { naam: "Snoeien en kappen", foto: "img/villa.jpg", tekst: "Snoeien en kappen van kleine en hoge bomen, met klimgereedschap en waar nodig een hoogwerker.",
        punten: ["Hoge bomen", "Klimgereedschap", "Hoogwerker"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Van Dam*",
    tekst: "Een greep uit tuinen die we aanlegden en onderhouden in Woerden en omgeving.",
    items: [
      { foto: "img/staptegels.jpg", label: "Tuin aan het water", sub: "Gazon met staptegels", pos: "50% 60%" },
      { foto: "img/vijver.jpg", label: "Vijvertuin", sub: "Aanleg en beplanting" },
      { foto: "img/border.jpg", label: "Ronde border", sub: "Beplanting" },
      { foto: "img/potten.jpg", label: "Terras met potten", sub: "Bestrating en beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot leven*",
    tekst: "Goede afspraken, snel uitgevoerd en alles netjes opgeruimd. Zo omschrijven klanten ons op Google.",
    foto: "img/vijver.jpg", fotoPos: "50% 55%", fotoAlt: "Vijver met waterlelies en beplanting",
    stappen: [
      { naam: "Kennismaken", tekst: "We komen langs en bespreken uw wensen voor de tuin." },
      { naam: "Ontwerpschets", tekst: "We kijken naar grond, zon en ruimte en maken een schets." },
      { naam: "Aanleg", tekst: "Met professionele apparatuur en kennis van planten en materialen." },
      { naam: "Onderhoud", tekst: "Een onderhoudspakket op maat, zodat u het hele jaar geniet." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Mathijs is een supervriendelijke, rustige en kundige hovenier die flexibel meebeweegt als een planning erom vraagt. Denkt mee en lost zaken snel op wanneer dat nodig is.", naam: "Familie uit Nederland" },
      { tekst: "Hier werk je met de mens Mathijs van Dam en zijn team. Enorm persoonlijk, creatief en vriendelijk. Service is top. Het moet goed zijn en anders zorgen ze dat het goed wordt. …", naam: "KICKTHIS Vleuten/De Meern" },
      { tekst: "Flexibel, creatief en erg hardwerkend. Waren onder de indruk van de kwaliteit van het opgeleverde werk en het meedenken tijdens het proces. Aanrader!", naam: "J. Zwg" },
      { tekst: "Goede afspraken, snel uitgevoerd en heel goed gedaan. Alles ook netjes afgevoerd en opgeruimd. Top!", naam: "Marga A." }
    ]
  },

  over: {
    kicker: "Over Mathijs", navNaam: "Over ons",
    titel: "Mathijs *van Dam*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Mathijs van Dam maakte van zijn passie zijn werk. Met zijn team ontwerpt, legt aan en onderhoudt hij particuliere tuinen en bedrijfstuinen in Woerden en omstreken.",
      "Klanten noemen hem rustig, creatief en kundig. Wilt u kennismaken? Stuur gerust een bericht."
    ],
    foto: "img/onderhoud.jpg", fotoPos: "55% 45%", fotoAlt: "Hovenier van Van Dam aan het werk bij een vijver",
    knop: "Stuur Mathijs een bericht"
  },

  band: {
    foto: "img/staptegels.jpg", fotoPos: "50% 55%",
    titel: "Zin in een tuin om *van te genieten?*",
    tekst: "Vraag vrijblijvend tuinadvies aan. Bel of app 06 52 63 45 25."
  },

  contact: {
    titel: "Vraag *tuinadvies* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Mathijs neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Vlonder of steiger", "Tuinonderhoud", "Snoeien of kappen", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin aan het water, nieuw terras en een vlonder"
  }
};
