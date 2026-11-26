// Tuingroen, Mike van den Berg (Overdinkel, Twente). Bronnen: tuingroen.nl (home, werkwijze, ontwerp, aanleg, onderhoud,
// machines, contact). Alle foto's van hun eigen site (projectfoto's + foto van Mike). Geen stockfoto's.
// Google: profiel "Tuingroen" (Borne, zelfde 06) zonder zichtbare reviews -> geen Google-badge, geen reviews.
window.SITE = {
  naam: "Tuingroen",
  kortNaam: "Tuingroen",
  vak: "Hovenier",
  titelExtra: "Hovenier in Twente",
  plaats: "Overdinkel",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 58,
  kleuren: { brand: "#26352a", accent: "#86a832" },
  telefoon: "06 44 56 00 66",
  telefoonIntl: "31644560066",
  waTekst: "App Mike",
  email: "info@tuingroen.nl",
  adres: ["Hoofdstraat 277", "7586 BS Overdinkel"],
  kvk: "55225802",
  voetTekst: "Tuinontwerp, tuinaanleg en tuinonderhoud in Twente en omgeving. Sinds 2012, voor particulieren, bedrijven en gemeentes.",

  hero: {
    regels: ["Uw tuin,", "door Mike", "*gemaakt.*"],
    tekst: "Tuingroen ontwerpt, legt aan en onderhoudt tuinen in Twente en omgeving. Van een kleine stadstuin tot een complete buitenruimte, met eigen machines.",
    donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "40% 50%",
    fotoAlt: "Terras met trap, houten plantenbakken en borders",
    punten: ["Sinds 2012", "VCA-gecertificeerd", "Vrijblijvend langs"]
  },

  marquee: ["Tuinontwerp", "3D-visualisaties", "Tuinaanleg", "Bestrating", "Schuttingen en overkappingen", "Vijvers", "Graszoden en kunstgras", "Tuinonderhoud"],

  intro: {
    kicker: "Tuingroen",
    tekst: "Een nieuwe tuin, een oude tuin vernieuwen of juist een tuin *zonder omkijken.* Bij Tuingroen is alles mogelijk, van eerste schets tot onderhoud.",
    stats: [
      { getal: "2012", label: "Opgericht door Mike van den Berg" },
      { getal: "VCA", label: "Gecertificeerd, ook voor gemeentes" },
      { getal: "3D", label: "Ontwerpen en visualisaties" }
    ]
  },

  diensten: {
    titel: "Ontwerp, aanleg *en onderhoud*",
    tekst: "Alles voor uw tuin, met eigen shovel, minikraan en trekker.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "Tuinadvies bij u thuis, en van een kleine schets tot een gedetailleerde tekening. Ook beplantingsplannen en 3D-visualisaties, met oog voor zichtlijnen en bloei in elk seizoen.",
        punten: ["Advies ter plaatse", "Beplantingsplan", "3D-visualisatie"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Een compleet of gedeeltelijk nieuwe tuin. Tuingroen ruimt de oude tuin op en legt alles aan, van grondwerk tot de laatste plant.",
        punten: ["Bestrating", "Schuttingen en pergola's", "Overkappingen", "Vijvers en waterpartijen", "Tuinverlichting", "Beregening"] },
      { naam: "Graszoden en kunstgras", foto: "img/machines.jpg", pos: "50% 60%", tekst: "Een nieuw gazon van graszoden, of kunstgras dat het hele jaar groen blijft. Grond ontgraven en verzetten hoort erbij.",
        punten: ["Graszoden", "Kunstgras", "Grondwerk"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Van een voorjaarsbeurt tot het winterklaar maken van uw tuin. Met een onderhoudscontract blijft uw tuin het hele jaar mooi. Of kies voor een onderhoudsvrije tuin.",
        punten: ["Onderhoudscontract", "Voorjaarsbeurt", "Winterklaar maken", "Onderhoudsvrije tuinen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *Tuingroen*",
    tekst: "Een greep uit tuinen die Mike ontwierp en aanlegde.",
    items: [
      { foto: "img/lounge.jpg", label: "Loungeterras met houten wand", sub: "Aanleg en beplanting", pos: "50% 55%" },
      { foto: "img/overkapping.jpg", label: "Overkapping met vlonder", sub: "Aanleg" },
      { foto: "img/borders.jpg", label: "Borders met hortensia's", sub: "Aanleg en beplanting" },
      { foto: "img/tuinpad.jpg", label: "Gazon met pad naar het tuinhuis", sub: "Aanleg" },
      { foto: "img/cirkel.jpg", label: "Cirkelterras in klinkers", sub: "Bestrating" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt *Tuingroen*",
    tekst: "Persoonlijk contact, van het eerste gesprek tot de nazorg.",
    stappen: [
      { naam: "Kennismaken", tekst: "Mike komt vrijblijvend langs om uw wensen voor de tuin te bespreken." },
      { naam: "Maten en ontwerp", tekst: "We meten de tuin in en maken, als dat nodig is, een ontwerp." },
      { naam: "Offerte en uitvoering", tekst: "U krijgt een offerte. Na uw akkoord gaan we aan de slag." },
      { naam: "Oplevering en nazorg", tekst: "We kijken samen of alles naar wens is. Daarna kan Tuingroen het onderhoud doen." }
    ]
  },

  over: {
    kicker: "Over Tuingroen", navNaam: "Over Mike",
    titel: "Mike van den Berg, *hovenier*",
    rol: "Tuingroen, Overdinkel",
    tekst: [
      "Mike richtte Tuingroen op in 2012. Sindsdien werkte hij aan gemeentetuinen, bedrijfstuinen, kleine en grote tuinen, landschappen en klassieke tuinen.",
      "Tuingroen werkt voor particulieren, bedrijven en gemeentes, en is VCA-gecertificeerd. Mike volgt de nieuwste trends en ontwikkelingen in tuinen, en komt graag bij u thuis langs."
    ],
    foto: "img/mike.jpg", fotoPos: "50% 30%", fotoAlt: "Mike van den Berg met helm en gehoorbescherming",
    knop: "Stuur Mike een bericht"
  },

  werkgebied: {
    titel: "Twente *en omgeving*",
    tekst: "Tuingroen werkt vanuit Overdinkel in heel Twente. Twijfelt u of Mike bij u langskomt? Vraag het gerust.",
    plaatsen: ["Twente", "En omgeving"]
  },

  faq: [
    { v: "Komen jullie vrijblijvend langs?", a: "Ja. Mike komt graag bij u thuis om de mogelijkheden voor uw tuin te bespreken." },
    { v: "Kan ik een 3D-ontwerp krijgen?", a: "Ja. Van een kleine schets tot een gedetailleerde tekening, en ook 3D-visualisaties, zodat u uw nieuwe tuin al voor u ziet." },
    { v: "Kan mijn tuin onderhoudsvrij worden?", a: "Zeker. Tuingroen legde al meerdere onderhoudsvrije tuinen aan." },
    { v: "Werken jullie ook voor bedrijven en gemeentes?", a: "Ja. Tuingroen is VCA-gecertificeerd en werkt voor particulieren, bedrijven en gemeentes." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Zin in een *nieuwe tuin?*",
    tekst: "Mike komt vrijblijvend langs en denkt met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt. Mike neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Graszoden of kunstgras", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw aanleggen met terras, overkapping en borders"
  }
};
