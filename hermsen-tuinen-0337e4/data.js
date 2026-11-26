// Hermsen Tuinen (Amersfoort). Bron: hermsentuinen.nl (26-11-2026, MyWebsite NOW) + eigen Google-profiel (5,0 uit 1).
// Foto's: eigen werkfoto's van hun site ("ons werk in beeld") + hun Google-profiel. Geen stockfoto's (hun site-hero met bloesem is stock: niet gebruikt).
// Geen logo op hun site (placeholder) -> eenvoudig H-monogram als SVG. Voornaam Jeroen staat op hun eigen site.
window.SITE = {
  naam: "Hermsen Tuinen",
  kortNaam: "Hermsen Tuinen",
  vak: "Hovenier",
  plaats: "Amersfoort",
  logo: "img/logo.svg",
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoVorm: "icoon",
  logoHoogte: 36,
  kleuren: { brand: "#2e4a30", accent: "#b07a45" },
  telefoon: "06 13 80 47 82",
  telefoonIntl: "31613804782",
  waTekst: "App Jeroen",
  email: "info@hermsentuinen.nl",
  adres: ["Leeuwendalersplein 26", "3813 LE Amersfoort"],
  google: { score: "5,0", aantal: 1 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinontwerp, tuinaanleg, onderhoud, boomverzorging en houtwerk in Amersfoort en omgeving. Van ontwerp tot realisatie.",

  hero: {
    regels: ["Uw tuin,", "met passie", "*tot leven.*"],
    tekst: "Tuinaanleg, onderhoud, boomverzorging en houtwerk in de regio Amersfoort. Van ontwerp tot realisatie: Jeroen denkt graag met u mee.",
    foto: "img/hero.jpg", fotoPos: "50% 88%", fotoPosMobiel: "40% 60%", donker: true,
    fotoAlt: "Tuin met gebogen gazon, klinkerpad en strakke haag",
    punten: ["17 jaar ervaring", "Vrijblijvende offerte"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Boomverzorging", "Snoeien en kappen", "Schuttingen", "Vlonders", "Overkappingen en schuren"],

  intro: {
    kicker: "Hermsen Tuinen",
    tekst: "Alles wat met uw tuin te maken heeft, *uit één hand.* Of het nu gaat om een nieuwbouwtuin, een renovatie of een boom die te groot is geworden.",
    stats: [
      { getal: "17", label: "Jaar ervaring in het vak", tel: 17 },
      { getal: "250+", label: "Tuinprojecten" },
      { getal: "100+", label: "Tevreden klanten" },
      { getal: "5,0", label: "Op Google" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *realisatie*",
    tekst: "Tuinaanleg, onderhoud, boomverzorging en houtwerk. Vertel wat u zoekt, dan denkt Jeroen met u mee.",
    items: [
      { naam: "Tuinontwerp en aanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Een nieuwe tuin bij uw nieuwbouwwoning of een complete renovatie. Uw wensen en behoeften vertalen we naar een prachtig eindresultaat.",
        punten: ["Nieuwbouwtuinen", "Tuinrenovatie", "Bestrating en gazon"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 45%", tekst: "Regulier onderhoud voor een weelderige en gezonde tuin, zodat u er het hele jaar van kunt genieten.",
        punten: ["Snoeien en hagen", "Borders en beplanting", "Regulier onderhoud"] },
      { naam: "Boomverzorging", foto: "img/bomen.jpg", pos: "50% 40%", tekst: "Bomen op de juiste manier snoeien, voor de gezondheid, de groei en een mooie vorm. Te groot, ziek of dood? Dan kappen of rooien we de boom, en helpen we met de vergunning.",
        punten: ["Bomen snoeien", "Kappen en rooien", "Hulp bij de vergunning"] },
      { naam: "Houtwerk", foto: "img/houtwerk.jpg", pos: "50% 50%", tekst: "Montage van overkappingen, schuren, tuinhuizen, schuttingen, pergola's, veranda's, vlonders en tuinmeubels. Vakmanschap en jarenlange ervaring.",
        punten: ["Schuttingen en vlonders", "Overkappingen en veranda's", "Schuren en tuinhuizen"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Ons werk in beeld",
    titel: "Tuinen van *Hermsen*",
    tekst: "Een greep uit het werk in en rond Amersfoort. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/vlonder.jpg", label: "Vlonder rond de boom", sub: "Houtwerk" },
      { foto: "img/p1.jpg", label: "Tegelpad met grind en beplanting", sub: "Aanleg" },
      { foto: "img/p3.jpg", label: "Border met tulpen", sub: "Beplanting" },
      { foto: "img/p4.jpg", label: "Overkapping in aanbouw", sub: "Houtwerk" },
      { foto: "img/p2.jpg", label: "Voortuin met zitelement", sub: "Aanleg" },
      { foto: "img/p6.jpg", label: "Gazon met ingegraven trampoline", sub: "Aanleg" },
      { foto: "img/p9.jpg", label: "Achtertuin met pad en border", sub: "Aanleg" },
      { foto: "img/p5.jpg", label: "Voortuin met bestrating", sub: "Aanleg" },
      { foto: "img/p8.jpg", label: "Containerberging en haag", sub: "Houtwerk" },
      { foto: "img/p7.jpg", label: "Nieuw terras", sub: "Bestrating" },
      { foto: "img/p11.jpg", label: "Nieuwe beplanting voor de deur", sub: "Beplanting" },
      { foto: "img/p10.jpg", label: "Schutting onder de overkapping", sub: "Houtwerk" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Sonja de G.", tekst: "Goede ervaring met dit bedrijf, alles gaat in goed overleg en Jeroen is erg vakkundig en vriendelijk. Er is een nieuwe schutting geplaatst, terras gelegd en een vlonder gelegd." }
    ]
  },

  over: {
    kicker: "Over Jeroen", navNaam: "Over ons",
    titel: "Jouw partner in *tuinontwikkeling*",
    rol: "Eigenaar Hermsen Tuinen",
    tekst: [
      "Ik ben Jeroen. Mijn passie ligt bij tuinaanleg, tuinonderhoud, boomverzorging en houtwerk. Na ruim 17 jaar in het vak ben ik in 2022 mijn eigen bedrijf begonnen.",
      "Een mooie tuin begint met een goed plan. Uw wensen en ideeën staan centraal, ik ben transparant in mijn communicatie en denk graag mee over de beste oplossing voor uw tuin."
    ],
    foto: "img/over.jpg", fotoPos: "60% 40%", fotoAlt: "Aan het werk bij een plantenbak",
    knop: "Stuur Jeroen een bericht"
  },

  faq: [
    { v: "Wat kost een offerte?", a: "Niets. U ontvangt snel een vrijblijvende offerte op maat." },
    { v: "Mag ik zomaar een boom kappen?", a: "Niet altijd. Voor veel bomen is een vergunning nodig. We helpen u graag met de aanvraag." },
    { v: "Plaatsen jullie ook schuttingen en overkappingen?", a: "Ja. Van schutting en vlonder tot overkapping, schuur, tuinhuis, pergola of veranda." },
    { v: "Komen jullie ook voor gewoon onderhoud?", a: "Zeker. Regulier onderhoud houdt uw tuin weelderig en gezond." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Uw tuin *tot leven* laten komen?",
    tekst: "Vraag vandaag nog een vrijblijvende offerte aan, of app Jeroen met een foto van uw tuin."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Jeroen reageert binnen 3 werkdagen, of app direct met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp en aanleg", "Tuinonderhoud", "Boomverzorging", "Houtwerk"],
    voorbeeld: "Bijvoorbeeld: nieuwe schutting en een vlonder in de achtertuin"
  }
};
