// Hoveniersbedrijf Van den Esschert (Amersfoort). Bron: esscherttuinen.nl (26-11-2026, WordPress) + eigen Google-profiel (5,0 uit 2).
// Foto's: allemaal eigen projectfoto's van hun site. Geen e-mailadres op hun site (alleen formulier) -> bellen/WhatsApp.
// Voornaam "Oscar" staat alleen in een Google-review, niet op hun site -> niet gebruikt in teksten.
window.SITE = {
  naam: "Hoveniersbedrijf Van den Esschert",
  kortNaam: "Van den Esschert",
  vak: "Hovenier",
  plaats: "Amersfoort",
  logo: "img/icoon.png",
  logoOpFoto: "img/icoon-wit.png",
  logoWit: "img/icoon-wit.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 40,
  kleuren: { brand: "#2f4a2c", accent: "#7a9a3c" },
  telefoon: "06 51 81 37 64",
  telefoonIntl: "31651813764",
  telefoon2: "033 472 17 70",
  waTekst: "App ons",
  adres: ["Curiestraat 7", "3822 XJ Amersfoort"],
  kvk: "32141121",
  google: { score: "5,0", aantal: 2 },
  ctaTekst: "Vraag een voorstel aan",
  voetTekst: "Creatief tuinontwerp, professionele tuinaanleg en zorgeloos onderhoud in alle seizoenen. Voor particulieren en bedrijven in Amersfoort en omgeving.",

  hero: {
    regels: ["Buitengewoon", "in groene", "*ruimte.*"],
    tekst: "Uw hovenier voor creatief tuinontwerp, professionele tuinaanleg en zorgeloos onderhoud in alle seizoenen. Voor particulieren en bedrijven.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", donker: true,
    fotoAlt: "Tuinpad tussen bloeiende borders met verbena, salie en rode bloemen",
    punten: ["30 jaar ervaring", "Erkend VHG-hovenier", "Erkend leerbedrijf"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Bestrating en terrassen", "Borders en beplanting", "Buitenkamers", "Zakelijk groen"],

  intro: {
    kicker: "In groene handen",
    tekst: "Met 30 jaar ervaring kunt u ons bijna *geen groentje* meer noemen. Iedere dag willen we iets bijzonders maken, met inspiratie uit de natuur, designtrends en duurzame mogelijkheden.",
    stats: [
      { getal: "30", label: "Jaar ervaring", tel: 30 },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "VHG", label: "Erkende hovenier" }
    ]
  },

  keurmerkenTitel: "Erkend en aangesloten",
  keurmerken: [
    { naam: "Lid van de VHG", sub: "Koninklijke Vereniging van Hoveniers en Groenvoorzieners", logo: "img/vhg.png" },
    { naam: "Erkend leerbedrijf", sub: "We leiden vakmensen op", logo: "img/leerbedrijf.png" }
  ],

  diensten: {
    titel: "Van wens tot *realisatie*",
    tekst: "Ontwerp, aanleg en onderhoud uit één hand. Bij u thuis of op het werk.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 50%", tekst: "Uw keuze voor materialen, planten en tuinaccessoires vertalen we naar een detailtekening: de blauwdruk waarmee u zich al op het resultaat kunt verheugen.",
        punten: ["Uw wensen centraal", "Exacte maten en ligging", "Detailtekening als basis"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Van compleet nieuwe tuinen en terreinen tot aanpassingen en renovatie. Met heldere afspraken en een plan van aanpak tot de oplevering.",
        punten: ["Nieuwe tuinen en renovatie", "Duurzame materialen", "Vast plan van aanpak"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Periodiek onderhoud houdt uw groene omgeving in optimale conditie. Een tuin waar u geen omkijken naar heeft, in alle seizoenen.",
        punten: ["Periodiek onderhoud", "Borders en gazon", "Alle seizoenen"] },
      { naam: "Zakelijk groen", foto: "img/zakelijk.jpg", pos: "50% 50%", tekst: "Een goed verzorgde groenvoorziening is het visitekaartje van uw bedrijf. Zo legden we de binnentuin aan van het duurzame Astellas-kantoor.",
        punten: ["Bedrijfstuinen", "Binnentuinen", "Aanleg en onderhoud"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Gerealiseerde projecten",
    titel: "Tuinen van *Van den Esschert*",
    tekst: "Een greep uit tuinen die we ontwierpen en aanlegden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/p7.jpg", label: "Luxe buitenkamer met buitenhaard", sub: "Ontwerp en aanleg" },
      { foto: "img/p2.jpg", label: "Gazon met cortenstaal border", sub: "Aanleg" },
      { foto: "img/p8.jpg", label: "Binnenstadstuin met granieten trap", sub: "Binnenstad Amersfoort" },
      { foto: "img/p5.jpg", label: "Waterelement in cortenstaal", sub: "Aanleg" },
      { foto: "img/p10.jpg", label: "Zakelijke binnentuin", sub: "Astellas" },
      { foto: "img/p6.jpg", label: "Terras met rijke bloei", sub: "Beplanting" },
      { foto: "img/p1.jpg", label: "Terras met pergola", sub: "Aanleg" },
      { foto: "img/p9.jpg", label: "Tegelpad met groen", sub: "Aanleg" },
      { foto: "img/p4.jpg", label: "Border langs het terras", sub: "Beplanting" },
      { foto: "img/p11.jpg", label: "Plantenbak in cortenstaal", sub: "Aanleg" }
    ]
  },

  werkwijze: {
    titel: "Zo gaan we *te werk*",
    tekst: "Een scherp oog voor kwaliteit en detail, van het eerste gesprek tot de oplevering.",
    stappen: [
      { naam: "Kennismaken", tekst: "In een eerste gesprek bespreken we uw wensen en de mogelijkheden van uw tuin." },
      { naam: "Voorstel", tekst: "U krijgt een voorstel, met of zonder exclusief ontwerp. Heeft u een architect? Dan is diens ontwerp ons uitgangspunt." },
      { naam: "Aanleg", tekst: "We houden u op de hoogte van de voortgang en betrekken u bij keuzes die dan nog gemaakt kunnen worden." },
      { naam: "Oplevering", tekst: "Altijd een mooi moment. En daarna houden we uw tuin graag in conditie." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Lisanne K.", tekst: "Oscar heeft in het voorjaar een prachtige hout/beton schutting voor ons geplaatst in de tuin. Na wat overleg heeft hij hem precies zo gemaakt zoals wij dat wilde. En wat zijn we er blij mee! Ik zou Oscar aan iedereen aanbevelen." },
      { naam: "Wouter van der S.", tekst: "Snel, accuraat, erg mooi resultaat en klantvriendelijk." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Echte *tuinliefhebbers*",
    rol: "Hoveniersbedrijf Van den Esschert, Amersfoort",
    tekst: [
      "We zijn gedreven om klanten, particulier of zakelijk, een positieve verrassing te bezorgen. We investeren in kwaliteit, werken professioneel en denken met u mee over hoe uw nieuwe groene omgeving het beste bij u past.",
      "We gebruiken hoogwaardige en duurzame materialen en adviseren graag over milieubewuste toepassingen. Als erkende hovenier, aangesloten bij de VHG, kunt u rekenen op hoge kwaliteit en garantie op ons werk."
    ],
    foto: "img/over.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde tuin met gazon, borders en terras aan huis",
    badge: "img/badge.png",
    knop: "Neem contact op"
  },

  faq: [
    { v: "Werken jullie voor particulieren én bedrijven?", a: "Ja. We ontwerpen, leggen aan en onderhouden particuliere tuinen en zakelijk groen, van stadstuin tot bedrijfstuin." },
    { v: "Moet ik een ontwerp laten maken?", a: "Dat hoeft niet. U krijgt een voorstel met of zonder exclusief ontwerp. Heeft u al een ontwerp van een architect, dan is dat ons uitgangspunt." },
    { v: "Krijg ik garantie op het werk?", a: "Als erkende hovenier en lid van de VHG werken we met de algemene voorwaarden en garantiebepalingen van de vereniging." },
    { v: "Kunnen jullie de tuin daarna ook onderhouden?", a: "Ja. Met periodiek onderhoud blijft uw tuin in alle seizoenen in optimale conditie." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Uw buitenruimte *buitengewoon* maken?",
    tekst: "Bel of app ons met uw wensen. We denken graag met u mee."
  },

  contact: {
    titel: "Stel uw *vraag*",
    tekst: "We helpen u met plezier. Bel of app ons, of laat hieronder kort weten wat u zoekt.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Zakelijk groen"],
    voorbeeld: "Bijvoorbeeld: nieuwe achtertuin met terras, borders en een plek voor de buitenhaard"
  }
};
