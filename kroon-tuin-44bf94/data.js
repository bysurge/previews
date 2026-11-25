// Kroon Tuinverzorging v.o.f. (Den Haag). Bron: kroon-tuin.com (25-11-2026, Wix) + eigen Google-profiel (4,8 uit 18).
// Foto's: eigen projectfoto's van hun site (grote versies via Wix). Stockfoto's op hun site (luchtfoto's, "gardener") NIET gebruikt.
// LET OP: hun site zegt "Via whatsapp nemen we geen nieuwe aanvragen meer aan" -> geen WhatsApp-knoppen, bellen/mailen.
window.SITE = {
  naam: "Kroon Tuinverzorging",
  kortNaam: "Kroon",
  vak: "Hovenier",
  plaats: "Den Haag",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 34,
  kleuren: { brand: "#1d3b2a", accent: "#2f9a4a" },
  telefoon: "06 24 99 19 09",
  telefoonIntl: "31624991909",
  telBel: "+31624991909",
  telefoon2: "06 22 08 83 88",
  whatsapp: false,
  email: "info@kroon-tuin.com",
  adres: ["Zilverschoonstraat 1", "2555 NH Den Haag"],
  google: { score: "4,8", aantal: 18 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Al 26 jaar uw hovenier in Den Haag, Rijswijk, Voorburg en Zoetermeer. Tuinontwerp, tuinaanleg en tuinonderhoud, met volledige service.",

  hero: {
    regels: ["Al 26 jaar", "uw hovenier in", "*Den Haag.*"],
    tekst: "Tuinontwerp, tuinaanleg en al het onderhoud, van ontwerp tot oplevering. Wij zijn pas tevreden als u tevreden bent.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "45% 50%", donker: true,
    fotoAlt: "Houten terras met loungebank, planten en een palmboompje",
    punten: ["Lid van de VHG", "Erkend leerbedrijf"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Schuttingen", "Vlonders en terrassen", "Sierbestrating", "Tuinverlichting", "Dakterrassen en balkons"],

  intro: {
    kicker: "Kroon Tuinverzorging",
    tekst: "De juiste kennis en kwaliteit, met *volledige service.* Van het eerste ontwerp tot de oplevering, en daarna al het onderhoud dat uw tuin nodig heeft.",
    stats: [
      { getal: "26", label: "Jaar hovenier in Den Haag", tel: 26 },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "10%", label: "Korting bij 2 onderhoudsbeurten" },
      { getal: "VHG", label: "Lid van de vereniging" }
    ]
  },

  keurmerkenTitel: "Aangesloten en erkend",
  keurmerken: [
    { naam: "Vereniging Hoveniers en Groenvoorzieners", sub: "Lid van de VHG" },
    { naam: "Erkend leerbedrijf" }
  ],

  diensten: {
    titel: "Van ontwerp tot *oplevering*",
    tekst: "Aanleg van uw tuin, van ontwerp tot oplevering, én alle voorkomende onderhoudswerkzaamheden.",
    items: [
      { naam: "Tuinontwerp", foto: "img/japans.jpg", pos: "50% 55%", tekst: "Iets unieks van uw tuin, dakterras of balkon. We denken mee over stijl, vormgeving, materialen en beplanting, en werken samen met ontwerpers die we van harte aanbevelen.",
        punten: ["Tuin, dakterras of balkon", "Stijl en materialen", "Beplantingskeuze"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Aanleggen en renoveren van uw tuin, van A tot Z: van volledige tuinrenovatie tot drainage en beregening.",
        punten: ["Volledige tuinrenovatie", "Beplantingsplan", "Drainage en beregening"] },
      { naam: "Schuttingen, vlonders en terrassen", foto: "img/schutting.jpg", pos: "50% 50%", tekst: "Alle soorten schuttingen, vlonders en terrassen, (sier)bestrating, plantenbakken, pergola's en overkappingen.",
        punten: ["Schuttingen", "Vlonder en terras", "(Sier)bestrating"] },
      { naam: "Tuinhuisjes en verlichting", foto: "img/schuur.jpg", pos: "50% 55%", tekst: "Een fietsenschuur, tuinhuisje of blokhut, tuinverlichting en een vijver of waterornament: alles wat een tuin compleet maakt.",
        punten: ["Fietsenschuur", "Tuinverlichting", "Vijver en water"] },
      { naam: "Tuinonderhoud", foto: "img/border.jpg", pos: "50% 55%", tekst: "Onderhoud aan beplanting en gazon, wieden en bemesten, snoeien en kandelaberen, en hogedruk reinigen. Bij 2 onderhoudsbeurten krijgt u 10% korting.",
        punten: ["Snoeien en kandelaberen", "Gazon en borders", "10% korting bij 2 beurten"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Kroon*",
    tekst: "Een greep uit tuinen die we aanlegden in Den Haag en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/achtertuin.jpg", label: "Stadstuin met gazon en bank", sub: "Aanleg" },
      { foto: "img/verlichting.jpg", label: "Vlonderpad met verlichting", sub: "Tuinverlichting" },
      { foto: "img/hangmat.jpg", label: "Tuin met pergola en hangmat", sub: "Aanleg" },
      { foto: "img/dakterras.jpg", label: "Dakterras", sub: "Ontwerp en aanleg" },
      { foto: "img/bloemen.jpg", label: "Kleurrijke border", sub: "Beplanting" },
      { foto: "img/terras.jpg", label: "Terras met plantenbakken", sub: "Bestrating" },
      { foto: "img/hottub.jpg", label: "Hottub op het terras", sub: "Aanleg" },
      { foto: "img/balkon.jpg", label: "Balkon met vlonder", sub: "Balkon" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Amanda C.", tekst: "Zij hebben onze betonnen schutting vervangen door een prachtige houten schutting, en het resultaat mag er zeker zijn. Wat ons vooral opviel is dat Kroon echt meedenkt in oplossingen en niet zomaar standaard te werk gaat." },
      { naam: "Roel K.", tekst: "Wil je een tuin laten maken? Dan ben je bij Kroon Hoveniers in goede handen. Niet alleen zijn ze erg goed, Thomas en zijn team zijn ook ontzettend vriendelijk en fijn. …" },
      { naam: "Robert van A.", tekst: "Kroon pakte dit snel op, kwam direct kijken. … het werk aan de heg (en treurberk) is zeer goed uitgevoerd. En door zeer vriendelijke vaklui die alles netjes opruimden. Zeer tevreden!" },
      { naam: "Melissa van K.", tekst: "Goede ideeën, gezellige mannen en mooi resultaat. Er wordt mee gedacht en samen gekeken naar een passend ontwerp. … Harde werkers en 200% waar voor je geld!" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Pas tevreden als *u tevreden* bent",
    rol: "Kroon Tuinverzorging v.o.f., Den Haag",
    tekst: [
      "Kroon Tuinverzorging is al 26 jaar uw hoveniersbedrijf in Den Haag en omstreken, met volledige service: van ontwerp tot oplevering én al het onderhoud.",
      "We zijn lid van de Vereniging Hoveniers en Groenvoorzieners en een erkend leerbedrijf. Voor vragen of een afspraak zijn Thomas en Rowena bereikbaar per telefoon en e-mail."
    ],
    foto: "img/gazon.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met gazon, pad en pergola",
    knop: "Mail ons"
  },

  werkgebied: {
    titel: "Den Haag en omstreken",
    tekst: "Op zoek naar een vakbekwame hovenier in Den Haag, Rijswijk, Voorburg of Zoetermeer? We helpen u graag.",
    plaatsen: ["Den Haag", "Rijswijk", "Voorburg", "Zoetermeer"]
  },

  faq: [
    { v: "Hoe vraag ik iets aan?", a: "Nieuwe aanvragen graag per e-mail of telefoon. Via WhatsApp nemen we geen nieuwe aanvragen aan." },
    { v: "Krijg ik korting op onderhoud?", a: "Ja, bij 2 onderhoudsbeurten krijgt u 10% korting. Stuur een e-mail met uw aanvraag." },
    { v: "Maken jullie ook een ontwerp?", a: "Ja. We maken graag een ontwerp voor uw tuin, dakterras of balkon, en werken samen met ontwerpers die we van harte aanbevelen." },
    { v: "Waar vind ik jullie voorwaarden?", a: "Als lid van de VHG werken we met de algemene voorwaarden van de vereniging, voor consumenten en voor bedrijven." }
  ],

  band: {
    foto: "img/aanleg.jpg", fotoPos: "50% 60%",
    titel: "Iets *unieks* van uw tuin maken?",
    tekst: "Mail of bel ons met uw wensen, dan denken we graag met u mee."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Mail ons via info@kroon-tuin.com of bel Thomas of Rowena. Het kan door de drukte voorkomen dat u niet direct antwoord krijgt, maar we reageren zo snel mogelijk.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Schuttingen, vlonders en terrassen", "Tuinhuisjes en verlichting", "Tuinonderhoud"],
    voorbeeld: "Bijvoorbeeld: nieuwe houten schutting en het terras opnieuw bestraten"
  }
};
