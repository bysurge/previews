// Dikkenberg Tuinvormgeving (Lunteren / Ede). Bron: tuin-vormgeving.nl (26-11-2026) + eigen Google-profiel (5,0 uit 3, zonder reviewtekst).
// Foto's: allemaal eigen projectfoto's van hun site (max 1000px, hero 1000x523). Geen stockfoto's.
// LET OP adres: site zegt Klomperweg 163, 6741 PH Lunteren; Google zegt Meikade 34, 6718 VK Ede -> geen straatadres getoond.
window.SITE = {
  naam: "Dikkenberg Tuinvormgeving",
  kortNaam: "Dikkenberg",
  vak: "Hovenier",
  plaats: "Ede",
  titelExtra: "Hovenier in Ede, Lunteren en omgeving",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 30,
  kleuren: { brand: "#2e3a24", accent: "#8fa62a" },
  telefoon: "06 54 35 43 37",
  telefoonIntl: "31654354337",
  waTekst: "App Gert-Jan",
  email: "info@tuin-vormgeving.nl",
  google: { score: "5,0", aantal: 3 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinontwerp en advies, aanleg en onderhoud in Ede, Lunteren en omgeving. Alles onder één dak voor uw tuingemak.",

  hero: {
    regels: ["Een tuin", "die bij u", "*past.*"],
    tekst: "Tuinontwerp en advies, aanleg en onderhoud in Ede, Lunteren en omgeving. Wij hanteren een speciale stijl: uw stijl.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 55%", donker: true,
    fotoAlt: "Betonnen traptreden tussen hortensia's en strak geknipte hagen",
    punten: ["Gratis advies", "Binnen 48 uur reactie"]
  },

  marquee: ["Tuinontwerp", "Advies", "Tuinaanleg", "Bestrating", "Schuttingen op maat", "Hagen knippen", "Bomen snoeien", "Tuinonderhoud"],

  intro: {
    kicker: "Dikkenberg Tuinvormgeving",
    tekst: "Wij hanteren een speciale stijl. *Namelijk uw stijl.* Groot of klein, landelijk of modern: we gaan met u in gesprek over uw wensen, de omgeving en uw budget.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "48 uur", label: "Reactie op uw aanvraag" },
      { getal: "Gratis", label: "Advies bij uw tuin" },
      { getal: "Eén dak", label: "Ontwerp, aanleg en onderhoud" }
    ]
  },

  diensten: {
    titel: "Alles onder *één dak*",
    tekst: "Dikkenberg Tuinvormgeving geeft tuinen vorm. Van ontwerp en advies tot aanleg, en het onderhoud gedeeltelijk of helemaal.",
    items: [
      { naam: "Tuinontwerp en advies", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "Wat is het doel van uw tuin? Genieten, zonnen of de kinderen vrij laten spelen? Gert-Jan houdt rekening met de omgeving en de architectuur van uw huis, en geeft tips waar nodig.",
        punten: ["Ontwerp op maat", "Gratis advies", "Landelijk of modern"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Van grondverbetering tot gazon, hagen en borders. Ook kindvriendelijke en onderhoudsarme tuinen, met veel privacy als u dat wilt.",
        punten: ["Gazon en hagen", "Vaste planten en rozen", "Grond verbeteren"] },
      { naam: "Bestrating", foto: "img/bestrating.jpg", pos: "50% 60%", tekst: "Keramische tegels, gebakken waaltjes of oude gebakken klinkers, ingeveegd met basaltsplit. Gebakken stenen zijn heel duurzaam.",
        punten: ["Keramische tegels", "Gebakken klinkers", "Opritten en paden"] },
      { naam: "Schuttingen en houtwerk", foto: "img/schutting.jpg", pos: "50% 55%", tekst: "Elke soort schutting op maat, in alle houtsoorten, ook in halfrond model. We maken en leveren ook veranda's en tuinhuisjes.",
        punten: ["Schutting op maat", "Veranda's", "Tuinhuisjes"] },
      { naam: "Onderhoud en hagen", foto: "img/hagen.jpg", pos: "50% 55%", tekst: "Eenmalig of periodiek: we springen graag bij. Strakke lijnen in de tuin, of een prachtig geknipte bolbuxus. Wij maken het zoals u het wilt.",
        punten: ["Periodiek onderhoud", "Hagen knippen", "Buxus in vorm"] },
      { naam: "Bomen snoeien", foto: "img/snoeien.jpg", pos: "50% 55%", tekst: "Ook grote bomen, zoals een hoge eik, snoeien we snel en vakkundig, zo nodig met een hoogwerker.",
        punten: ["Grote bomen", "Zuilbeuken en leibomen", "Afvoeren"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Impressies",
    titel: "Tuinen van *Dikkenberg*",
    tekst: "Een greep uit ons werk in Ede, Lunteren, Ederveen, Veenendaal, Wageningen en verder. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/landelijk.jpg", label: "Landelijke tuin met gazon", sub: "Aanleg" },
      { foto: "img/fontein.jpg", label: "Fontein in een buxusrand", sub: "Aanleg en onderhoud" },
      { foto: "img/corten.jpg", label: "Plantvak van cortenstaal", sub: "Aanleg" },
      { foto: "img/tuinhuis.jpg", label: "Gazon met tuinhuis", sub: "Aanleg" },
      { foto: "img/bloei.jpg", label: "Bloeiende border", sub: "Beplanting" },
      { foto: "img/laan.jpg", label: "Tuin met laanbomen", sub: "Aanleg" },
      { foto: "img/border.jpg", label: "Vaste planten bij de veranda", sub: "Beplanting" },
      { foto: "img/terras.jpg", label: "Terras met zithoek", sub: "Bestrating" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Hovenier *Gert-Jan Dikkenberg*",
    rol: "Eigenaar, Dikkenberg Tuinvormgeving",
    tekst: [
      "Ons doel is niet onze stijl, maar uw stijl en wensen terug te laten komen in uw tuin. Dàt is pas tuinvormgeving zoals het hoort.",
      "U houdt niet van torenhoge tarieven? Wij ook niet. We maken heldere afspraken, rekenen normale tarieven en houden van eerlijkheid. Zo hopen we nog eens vaker langs te mogen komen."
    ],
    foto: "img/werk.jpg", fotoPos: "50% 45%", fotoAlt: "Een schutting wordt op maat geplaatst",
    knop: "Stuur Gert-Jan een bericht"
  },

  werkgebied: {
    titel: "Ede, Lunteren *en omgeving*",
    tekst: "Hier werkten we onder meer:",
    plaatsen: ["Ede", "Lunteren", "Ederveen", "Veenendaal", "Wageningen", "Barneveld", "Amersfoort"]
  },

  faq: [
    { v: "Wat kost een tuin?", a: "Dat hangt af van uw wensen. We bieden u gratis advies en een vrijblijvende offerte, met heldere afspraken en normale tarieven." },
    { v: "Hoe snel reageren jullie?", a: "Binnen 48 uur nemen we contact met u op (op werkdagen)." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Ja. Eenmalig of periodiek, gedeeltelijk of helemaal. We springen graag bij." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. Zo verzorgen we bijvoorbeeld het onderhoud van bestrating, grind, bakken en olijfbomen bij een bedrijf in Veenendaal." }
  ],

  band: {
    foto: "img/hortensia.jpg", fotoPos: "50% 55%",
    titel: "Benieuwd *wat het kost?*",
    tekst: "Vraag vrijblijvend een offerte aan. We gaan graag met u in gesprek en bieden u gratis advies."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Bent u op zoek naar een veelzijdige hovenier voor onderhoud of aanleg, of naar een gedegen tuinontwerp? Binnen 48 uur nemen we contact met u op (op werkdagen).",
    onderwerpen: ["Tuinontwerp en advies", "Tuinaanleg", "Bestrating", "Schuttingen en houtwerk", "Onderhoud en hagen", "Bomen snoeien"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw aanleggen met gazon, borders en een schutting"
  }
};
