// Hoveniersbedrijf Sjak de Roos (Tilburg). Bronnen: sjakderoos.nl (home, diensten, referenties, contact). Alle foto's van hun
// eigen site (referentiepagina). Geen stockfoto's. Google: 5,0 uit 1 review (inhoudsloos), daarom geen reviews en geen Google-badge.
// Adres: site zegt Kap. Hatterastraat 1-28, Google zegt Van Goorstraat 51 -> geen adres getoond.
window.SITE = {
  naam: "Hoveniersbedrijf Sjak de Roos",
  kortNaam: "Sjak de Roos",
  vak: "Hovenier en boomverzorger",
  titelExtra: "Hovenier en boomverzorging in Tilburg",
  plaats: "Tilburg",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#2d3833", accent: "#6a9d2a" },
  telefoon: "06 21 65 47 37",
  telefoonIntl: "31621654737",
  waTekst: "App Sjak",
  email: "info@sjakderoos.nl",
  kvk: "18090550",
  voetTekst: "Boomverzorging, tuinaanleg en tuinonderhoud in Tilburg en omgeving. Sinds 2007, voor particulieren, bedrijven en gemeenten.",

  hero: {
    regels: ["Bomen en tuinen", "in goede", "*handen.*"],
    tekst: "Boomverzorging, tuinaanleg en tuinonderhoud in Tilburg en omgeving. Van het begin tot het eind, door eigen vakmensen.",
    donker: true,
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 55%",
    fotoAlt: "Stadstuin met nieuw gazon, pad en strakke haag",
    punten: ["Sinds 2007", "European Tree Worker"]
  },

  marquee: ["Boomverzorging", "Bomen rooien", "Stobben frezen", "Boomveiligheidscontrole (VTA)", "Tuinaanleg", "Tuinonderhoud", "Bestrating", "Schuttingen"],

  intro: {
    kicker: "Hoveniersbedrijf Sjak de Roos",
    tekst: "Van een *gezonde boom* tot een complete nieuwe tuin. Sjak de Roos doet het allemaal zelf, voor particulieren, bedrijven en gemeenten.",
    stats: [
      { getal: "2007", label: "Opgericht" },
      { getal: "ETW", label: "Gecertificeerd European Tree Worker" },
      { getal: "VTA", label: "Bomen controleren op veiligheid" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd",
  keurmerken: [
    { naam: "European Tree Worker (ETW)", sub: "Gecertificeerd boomverzorger", logo: "img/etw.jpg" }
  ],

  diensten: {
    titel: "Van boom *tot tuin*",
    tekst: "Alles van begin tot eind, of alleen een deel. Sjak geeft u graag het juiste advies.",
    items: [
      { naam: "Boomverzorging", foto: "img/boom.jpg", pos: "50% 40%", tekst: "Goed onderhoud begint al in de jeugdfase van een boom. Later blijft het nodig: laaghangende takken en dood hout weg. Met hoogwerker, of klimmend waar weinig ruimte is.",
        punten: ["Begeleidingssnoei", "Dood hout verwijderen", "Klimmend of met hoogwerker"] },
      { naam: "Bomen rooien en stobben frezen", foto: "img/rooien.jpg", pos: "50% 55%", tekst: "Ook voor het verwijderen van bomen, met telescoopkraan of speciale klimtechniek. De stobbe frezen we eruit, zelfs in smalle paadjes en achtertuinen. Het hout voeren we af.",
        punten: ["Rooien en vellen", "Stobben frezen", "Hout afvoeren"] },
      { naam: "Boomveiligheidscontrole", foto: "img/stam.jpg", pos: "50% 50%", tekst: "Sjak controleert en inspecteert bomen op veiligheid (VTA), voor particulieren, bedrijven en gemeenten.",
        punten: ["VTA-inspectie", "Eerlijk advies"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Ontwerpen, aanleggen en renoveren: van een grasmat tot een complete buitenruimte. Ook de aanleg van een bestaand tuinontwerp.",
        punten: ["Grondwerk", "Straatwerk", "Schuttingen en vlonders", "Beplanting en gazons"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 60%", tekst: "Een tuin vraagt om vakkundig onderhoud. Sjak houdt hem bij en geeft advies, voor het beste resultaat en een betaalbare prijs.",
        punten: ["Snoeien", "Hagen", "Advies"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Referenties",
    titel: "Werk van *Sjak de Roos*",
    tekst: "Een greep uit tuinen en bomen waar Sjak aan werkte.",
    items: [
      { foto: "img/vijver.jpg", label: "Strakke tuin met vijver", sub: "Tuinaanleg", pos: "50% 50%" },
      { foto: "img/plantvak.jpg", label: "Verhoogd plantvak met schutting", sub: "Tuinaanleg" },
      { foto: "img/terras.jpg", label: "Nieuw terras en borders", sub: "Tuinaanleg" },
      { foto: "img/vellen.jpg", label: "Boom geveld", sub: "Boomverzorging" },
      { foto: "img/shovel.jpg", label: "Grondwerk met eigen shovel", sub: "Tuinaanleg", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt *Sjak*",
    tekst: "Het hele traject, of alleen het deel dat u nodig heeft.",
    stappen: [
      { naam: "Kennismaken", tekst: "Sjak komt kijken naar uw tuin of boom en hoort wat u wilt." },
      { naam: "Advies en offerte", tekst: "U krijgt eerlijk advies en een duidelijke prijs." },
      { naam: "Uitvoering", tekst: "Eigen vakmensen en eigen machines, van klimtechniek tot stobbenfrees." },
      { naam: "Netjes opgeleverd", tekst: "Hout en groenafval nemen we mee. Daarna kan Sjak het onderhoud doen." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Hovenier *en boomverzorger*",
    rol: "Hoveniersbedrijf Sjak de Roos, Tilburg",
    tekst: [
      "Hoveniersbedrijf Sjak de Roos is gestart in 2007. Het werk is heel divers: bomen snoeien en rooien, en tuinen aanleggen en onderhouden. Voor particulieren, bedrijven en gemeenten.",
      "Sjak is gecertificeerd European Tree Worker (ETW) en controleert bomen ook op veiligheid. Alles wordt uitgevoerd door eigen vakmensen."
    ],
    foto: "img/over.jpg", fotoPos: "50% 50%", fotoAlt: "Gevelde boom in een tuin",
    badge: "img/etw.jpg",
    knop: "Stuur Sjak een bericht"
  },

  werkgebied: {
    titel: "Tilburg *en omgeving*",
    tekst: "Hoveniersbedrijf Sjak de Roos werkt in Tilburg en omgeving. Twijfelt u of Sjak bij u langskomt? Vraag het gerust.",
    plaatsen: ["Tilburg", "En omgeving"]
  },

  faq: [
    { v: "Kunt u ook een boom in een kleine achtertuin weghalen?", a: "Ja. Waar weinig ruimte is werkt Sjak klimmend, en de stobbe frezen we eruit met een minifrees die ook door smalle paadjes past." },
    { v: "Nemen jullie het hout mee?", a: "Ja, het hout dat vrijkomt voeren we op verzoek af." },
    { v: "Kunnen jullie een bestaand tuinontwerp aanleggen?", a: "Zeker. U kunt kiezen voor het complete traject of alleen een deel, ook de aanleg van een al gemaakt ontwerp." },
    { v: "Werken jullie ook voor bedrijven en gemeenten?", a: "Ja, voor bedrijven, particulieren en gemeenten, inclusief veiligheidscontroles van bomen (VTA)." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 30%",
    titel: "Een boom of tuin *die aandacht nodig heeft?*",
    tekst: "Sjak komt vrijblijvend kijken en geeft u het juiste advies."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt. Sjak neemt snel contact met u op, of stuur direct een WhatsApp met een foto.",
    onderwerpen: ["Boomverzorging", "Boom rooien", "Tuinaanleg", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: grote boom in de achtertuin moet weg, inclusief stobbe"
  }
};
