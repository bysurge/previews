// Keijzer Dakbedekking b.v. (Ter Aar). Bron: keijzerdakbedekking.nl (site zelf offline op 25-11; tekst via Wayback-snapshot 05-03-2026,
// foto's via Wayback 2014, dezelfde bestanden staan nog op de site) + Google (4,2 / 24, geen reviewteksten). Zie content.md.
window.SITE = {
  naam: "Keijzer Dakbedekking",
  plaats: "Ter Aar",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 44,
  kleuren: { brand: "#1d1a1c", accent: "#d0213b" },
  telefoon: "0172 498 467",
  telBel: "+31172498467",
  telefoon2: "06 40 89 98 47",
  telefoonIntl: "31640899847",
  waTekst: "WhatsApp",
  waContact: "06 40 89 98 47",
  email: "info@keijzerdakbedekking.nl",
  adres: ["Oostkanaalweg 44", "2461 ES Ter Aar"],
  kvk: "27355115",
  google: { score: "4,2", aantal: "24" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekkersbedrijf in de derde generatie. Platte daken, pannendaken, VELUX en onderhoud, vanuit Ter Aar door heel Nederland. Showroom op afspraak.",

  hero: {
    regels: ["Voor alle", "soorten daken."],
    tekst: "Al meer dan 45 jaar ervaring, nu in de derde generatie. Platte daken en pannendaken, gelegd door eigen vakmensen en met 10 jaar schriftelijke garantie.",
    foto: "img/hero-pannendak.jpg", fotoPos: "50% 40%", fotoPosMobiel: "70% 50%",
    fotoAlt: "Rood pannendak met een VELUX-dakraam tegen een blauwe lucht",
    donker: true,
    punten: ["10 jaar schriftelijke garantie", "Eigen vakmensen met vakdiploma", "Showroom in Ter Aar"]
  },

  marquee: ["Platte daken", "Pannendaken", "VELUX dakramen", "Dakgoten", "Zink- en loodwerk", "Schoorstenen", "Dakbeschot en boeidelen", "Witte daken", "Onderhoud en beheer"],

  spoed: {
    titel: "Lekkage? We staan voor u paraat.",
    tekst: "Bel de dakservice of stuur een foto via WhatsApp. Met een onderhoudsabonnement heeft u altijd voorrang."
  },

  intro: {
    kicker: "Over Keijzer",
    tekst: "Een familiebedrijf in de derde generatie, gevestigd in het hart van de Randstad. Voor particulieren, VvE's, woningcorporaties, scholen en gemeenten: een waterdicht dak waar u jarenlang plezier van heeft.",
    stats: [
      { getal: "45+ jaar", label: "Ervaring met alle soorten daken" },
      { getal: "3e", label: "Generatie dakdekkers" },
      { getal: "10 jaar", label: "Schriftelijke garantie" },
      { getal: "4,2", label: "Gemiddeld op Google" }
    ]
  },

  diensten: {
    titel: "Plat, hellend en alles erop en eraan",
    tekst: "Van een kleine reparatie tot een complete renovatie, en het onderhoud daarna.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 40%", tekst: "Bitumineuze en kunststof dakbedekking, nieuw of als renovatie. Ook witte dakbedekking die de warmte terugkaatst.",
        punten: ["Renovatie en reparatie", "Isoleren in één keer mee", "Witte, koele daken"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 50%", tekst: "Pannenkappen renoveren of compleet vernieuwen, met folie en waar nodig een nieuwe onderconstructie.",
        punten: ["O.a. Tuile du Nord, VHV en OVH", "Dakfolie en isolatie", "Nokken en aansluitingen"] },
      { naam: "Onderhoud en beheer", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Eén keer per jaar een inspectie: we reinigen het dak, maken de afvoeren schoon en doen kleine reparaties direct.",
        punten: ["Onderhoudsabonnement op maat", "Voorrang bij een melding", "Na afloop een duidelijk overzicht"] }
    ],
    meer: [
      { naam: "VELUX dakramen", tekst: "Het complete VELUX-assortiment, van dakraam tot daglichtsysteem of lichtkoepel, geleverd en geplaatst." },
      { naam: "Dakgoten, zink en lood", tekst: "Goten repareren of vervangen, en al het zink- en loodwerk rond uw dak." },
      { naam: "Schoorstenen en timmerwerk", tekst: "Schoorstenen herstellen of vervangen, dakbeschot en boeidelen vernieuwen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van woonhuis tot luchthaven",
    tekst: "Een greep uit ons werk voor particulieren, scholen, kerken en bedrijven.",
    items: [
      { foto: "img/ichtuskerk.jpg", label: "Ichtuskerk, Rotterdam", sub: "Dakwerk aan de kerk", pos: "50% 50%", alt: "Bus van Keijzer Dakbedekking bij de Ichtuskerk in Rotterdam" },
      { foto: "img/woning.jpg", label: "Woonhuis", sub: "Pannendak met dakkapellen", pos: "50% 40%" },
      { foto: "img/airport-werk.jpg", label: "Rotterdam Airport", sub: "Bitumen branden op het platte dak van een bedrijfspand", pos: "50% 50%" },
      { foto: "img/school.jpg", label: "Schoolgebouw", sub: "Dakwerk aan de pannenkap", pos: "50% 45%" },
      { foto: "img/winkel.jpg", label: "Winkel en woning", sub: "Onderhoud en renovatie", pos: "50% 35%" }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie, zwart op wit",
    tekst: "We werken volgens de richtlijnen van de branche. Op dakbedekking én pannendaken krijgt u 10 jaar schriftelijke garantie, met een garantiecertificaat.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "10 jaar garantie op materiaal en werk",
        "Garantie gaat mee bij verkoop van uw woning",
        "Al het werk door eigen vakmensen met vakdiploma",
        "Meer dan 45 jaar ervaring, derde generatie",
        "Showroom in Ter Aar, op afspraak",
        "Vrijblijvende offerte"
      ]
    }
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Familiebedrijf, derde generatie",
    rol: "Keijzer Dakbedekking b.v., Ter Aar",
    tekst: [
      "Al meer dan 45 jaar werken we aan alle soorten daken. Inmiddels zit de derde generatie in de dakbedekking en de pannendaken.",
      "Vanuit het hart van de Randstad werken we door heel Nederland: voor particulieren, VvE's, woningcorporaties, scholen, gemeenten en overheidsinstellingen. De Ichtuskerk in Rotterdam, een bedrijfspand op Rotterdam Airport of uw eigen huis: we leveren het met dezelfde zorg op."
    ],
    foto: "img/over-logo.jpg", fotoPos: "50% 50%", fotoAlt: "Logo van Keijzer Dakbedekking met de handtekening van R. Keijzer",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Vanuit Ter Aar, door heel Nederland",
    tekst: "We zitten in het hart van de Randstad, vlak bij Alphen aan den Rijn. Onze showroom aan de Oostkanaalweg kunt u op afspraak bezoeken."
  },

  faq: [
    { v: "Wat houdt een onderhoudsabonnement in?", a: "Eén keer per jaar inspecteren onze specialisten het hele dak. We reinigen het, maken de hemelwaterafvoeren schoon en doen kleine, direct nodige reparaties. Daarna krijgt u een duidelijk overzicht. Bij een melding heeft u altijd voorrang." },
    { v: "Is de garantie overdraagbaar?", a: "Ja. U krijgt 10 jaar schriftelijke garantie met een certificaat, en die gaat mee als u uw woning of pand verkoopt." },
    { v: "Waarom een wit dak?", a: "Witte dakbedekking kaatst de warmte terug in plaats van die op te nemen. Daardoor blijft het onder het dak een stuk koeler en hoeft u minder te koelen. Zonnepanelen op een wit dak leveren ook meer op." },
    { v: "Kan ik langskomen?", a: "Graag, maar wel op afspraak. Onze showroom zit aan de Oostkanaalweg 44 in Ter Aar." }
  ],

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Vertel kort wat er aan uw dak moet gebeuren.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Pannendak", "Lekkage", "Onderhoud", "VELUX dakraam", "Dakgoot of zinkwerk", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons platte dak lekt bij de dakkapel, of de pannen zijn aan vervanging toe",
    belofte: "We nemen zo spoedig mogelijk contact met u op."
  }
};
