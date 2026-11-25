// Bollen Daksystemen B.V. (Tilburg). Bron: bollen.nl + Google (4,2 / 6, geen reviewteksten). Zie content.md.
// Alleen eigen foto's (allemaal klein: stroken 900x200, luchtfoto's 640x480). Geen stockfoto's.
window.SITE = {
  naam: "Bollen Daksystemen",
  plaats: "Tilburg",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1d2733", accent: "#a3226e" },
  telefoon: "013 590 0950",
  telBel: "+31135900950",
  whatsapp: false,
  email: "info@bollen.nl",
  adres: ["Rheastraat 12", "5047 TL Tilburg"],
  kvk: "18032512",
  google: { score: "4,2", aantal: "6" },
  ctaTekst: "Vraag een aanbieding aan",
  navCta: "Aanbieding",
  voetTekst: "Geteste daksystemen voor platte daken: kunststof, bitumen, daktuinen en valbeveiliging. Vanuit Tilburg, voor nieuwbouw en renovatie.",

  hero: {
    regels: ["Een plat dak", "dat blijft", "liggen."],
    tekst: "Kunststof en bitumen daksystemen, daktuinen en valbeveiliging. Elk systeem dat we leggen is getest op windbelasting en levensduur.",
    foto: "img/hero-luchtfoto.jpg", fotoPos: "50% 55%", fotoPosMobiel: "30% 60%",
    fotoAlt: "Luchtfoto van een groot bedrijfsdak bij zonsondergang",
    donker: true,
    punten: ["Ruim 40 jaar ervaring", "Getest op windbelasting", "Liefst zonder open vuur"]
  },

  marquee: ["Kunststof dakbedekking", "PVC", "TPO", "EPDM", "Bitumen", "Vloeibare systemen", "Daktuinen", "Valbeveiliging", "Dakinspectie", "Onderhoudscontracten"],

  intro: {
    kicker: "Over Bollen",
    tekst: "We denken niet in losse onderdelen maar in complete daksystemen. Zo begint de garantie op kwaliteit al vóór uw aanvraag.",
    stats: [
      { getal: "40+", label: "Jaar ervaring met platte daken" },
      { getal: "Getest", label: "Op windbelasting en levensduur" },
      { getal: "Eén", label: "Aanspreekpunt, korte lijnen" }
    ]
  },

  keurmerkenTitel: "Onze daksystemen zijn getest door",
  keurmerken: [
    { naam: "BDA Dakadvies", sub: "Gorinchem" },
    { naam: "FM Global", sub: "Boston (VS)" }
  ],

  diensten: {
    titel: "Daksystemen voor elk plat dak",
    tekst: "Voor nieuwbouw en renovatie, van bedrijfshal tot appartementencomplex. Bij uw aanvraag bepalen we welk systeem en welke bevestiging het beste past.",
    knop: "Aanbieding aanvragen",
    items: [
      { naam: "Kunststof dakbedekking", foto: "img/dakrand2.jpg", pos: "50% 50%", tekst: "Vooral PVC, TPO en EPDM van toonaangevende merken, gekozen op bewezen levensduur en geteste systemen.",
        punten: ["PVC, TPO en EPDM", "TPO en PVC in bijna elke kleur", "Nieuwbouw en renovatie"] },
      { naam: "Bitumen dakbedekking", foto: "img/bitumen.jpg", pos: "70% 50%", tekst: "Vooral APP, SBS en POCB. We werken waar het kan zonder open vuur, dat neemt veel brandrisico weg.",
        punten: ["APP, SBS en POCB", "Ook vloeibare systemen", "Liefst zonder open vuur"] },
      { naam: "Daktuinen", foto: "img/daktuin.jpg", pos: "62% 50%", tekst: "Een van onze specialismen. We verzorgen een groendak of daktuin van het eerste ontwerp tot de oplevering.",
        punten: ["Ontwerp in eigen hand", "Groendaken en dakterrassen", "Van ontwerp tot oplevering"] },
      { naam: "Valbeveiliging", foto: "img/valbeveiliging.jpg", pos: "65% 50%", tekst: "Permanente valbeveiliging van topkwaliteit. We zijn gecertificeerd voor de aanleg én de keuring ervan.",
        punten: ["Aanleg en keuring", "Inclusief PBM's", "Te combineren met onderhoud"] }
    ],
    meer: [
      { naam: "Dakinspectie en onderhoud", tekst: "Op gezette tijden inspecteren we uw dak, met bij elk bezoek een korte conditiemeting. Zo komt u niet voor verrassingen te staan." },
      { naam: "Onderhoudscontract", tekst: "Waterdicht dakonderhoud voor de korte en lange termijn. U weet precies wat 1 m² per jaar aan onderhoud kost." },
      { naam: "Meerjarenplanning", tekst: "Inspectie, rapportage en een meerjarenplanning met budget voor al uw daken." },
      { naam: "Zinkwerk", tekst: "Samen met gespecialiseerde installateurs, met één aanspreekpunt voor de hele installatie." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van Den Helder tot Maastricht",
    tekst: "Kunststof dakbedekkingen voor woningbouw, utiliteitsbouw en industrie, in alle sectoren.",
    items: [
      { foto: "img/project-luchtfoto.jpg", label: "Groot bedrijfsdak van boven", pos: "50% 45%" },
      { foto: "img/zonnepanelen.jpg", label: "Plat dak met zonnepanelen", pos: "40% 50%" },
      { foto: "img/installaties.jpg", label: "Ballastdak met grind", pos: "30% 50%" },
      { foto: "img/plat-dak.jpg", label: "Dak met installaties", pos: "78% 50%" }
    ]
  },

  werkwijze: {
    titel: "Eerst rekenen, dan pas leggen",
    tekst: "De kwaliteit begint al vóór uw aanvraag. U krijgt een duidelijke, bondige aanbieding.",
    stappen: [
      { naam: "Uw aanvraag", tekst: "U vertelt ons om welk dak het gaat: nieuwbouw of renovatie, groot of klein." },
      { naam: "Het juiste systeem", tekst: "We bepalen welk daksysteem en welk bevestigingssysteem past, getest op windbelasting en levensduur." },
      { naam: "Isolatie gecontroleerd", tekst: "We controleren of de gevraagde isolatiewaarden kloppen met het materiaal en de dikte volgens de geldende richtlijnen." },
      { naam: "Duidelijke aanbieding", tekst: "U krijgt een heldere, bondige en scherpe aanbieding. Daarna leggen onze vakmensen uw dak." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Korte lijnen, persoonlijke service",
    rol: "Ramòn van Hoof, directeur",
    tekst: [
      "Bollen Daksystemen is van oorsprong gespecialiseerd in hoogwaardige kunststof daksystemen. Op vraag van onze opdrachtgevers deden we er bitumen dakbedekking en permanente valbeveiliging bij.",
      "We werken voor vastgoedmaatschappijen, VvE-beheerders, aannemers, gebouweigenaren, gemeenten en particulieren. Onze platte organisatie zorgt voor directe, persoonlijke service."
    ],
    foto: "img/pand.jpg", fotoPos: "64% 50%", fotoAlt: "Het pand van Bollen Daksystemen aan de Rheastraat in Tilburg",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Vanuit Tilburg, door heel Nederland",
    tekst: "Onze daken liggen in woningbouw, utiliteitsbouw en industrie, van Den Helder tot Maastricht en tot over de grens in België."
  },

  faq: [
    { v: "Werken jullie met open vuur?", a: "We streven ernaar zonder open vuur te werken. Dat neemt veel brandrisico weg, zeker bij bitumen dakbedekking." },
    { v: "Kan ik mijn dak in een andere kleur krijgen?", a: "Ja. Vooral bij TPO- en PVC-dakbedekking is er veel ontwerpvrijheid: praktisch elke kleur kan geleverd worden." },
    { v: "Bieden jullie een onderhoudscontract?", a: "Ja. Met een dakinspectie- en onderhoudscontract heeft u geen omkijken naar uw dak en weet u precies wat het onderhoud per m² per jaar kost." },
    { v: "Werken jullie ook voor particulieren?", a: "Ja. Naast vastgoedmaatschappijen, VvE's, aannemers en gemeenten leggen we ook daken voor particulieren." }
  ],

  band: {
    foto: "img/dakrand.jpg", fotoPos: "50% 50%",
    titel: "Een dak waar u geen omkijken naar hebt?",
    tekst: "Vraag een aanbieding aan. We bepalen samen welk daksysteem bij uw gebouw past."
  },

  contact: {
    titel: "Vraag een aanbieding aan",
    tekst: "Vertel kort om welk dak het gaat. We nemen snel contact met u op, of bel ons direct.",
    formTitel: "Aanbieding aanvragen",
    voorbeeld: "Bijvoorbeeld: renovatie van een plat dak van een bedrijfspand, ongeveer 400 m²",
    onderwerpen: ["Kunststof dakbedekking", "Bitumen dakbedekking", "Daktuin of groendak", "Valbeveiliging", "Inspectie en onderhoud", "Iets anders"]
  }
};
