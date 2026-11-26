// Hoveniersbedrijf M.C. Veldhuizen (Groenekan, gemeente De Bilt). Bron: hoveniersbedrijfmcveldhuizen.nl (26-11-2026, Divi uit 2019) + Google (5,0 uit 2).
// Foto's: eigen projectfoto's van hun site (max 800px). De blogheaders op hun site (bloemen, insectenhotel e.d.) zijn NIET gebruikt (lijken stock).
// 06 op hun site (Mob: 06 - 54 28 77 85, ook genoemd bij vacatures) -> WhatsApp. Voornaam eigenaar niet op de site.
window.SITE = {
  naam: "Hoveniersbedrijf M.C. Veldhuizen",
  kortNaam: "Veldhuizen",
  vak: "Hovenier",
  plaats: "Groenekan",
  titelExtra: "Hovenier in De Bilt en omgeving",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#24402c", accent: "#b2453a" },
  telefoon: "06 54 28 77 85",
  telefoonIntl: "31654287785",
  telefoon2: "0346 83 31 61",
  waTekst: "App ons",
  email: "info@hoveniersbedrijfmcveldhuizen.nl",
  adres: ["Beukenburgerlaan 2", "3737 MK Groenekan"],
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Sinds 1997 uw hovenier in De Bilt en omgeving. Tuinontwerp, tuinaanleg en tuinonderhoud, TuinKeur-gecertificeerd.",

  hero: {
    regels: ["Veel mensen,", "veel wensen,", "*één hovenier.*"],
    tekst: "Sinds 1997 ontwerpen, leggen aan en onderhouden we tuinen in De Bilt en omgeving. Voor de één een plek van rust, voor de ander een plek vol inspiratie.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 50%", donker: true,
    fotoAlt: "Groene tuin met golvend gazon, borders en hoge heesters",
    punten: ["Sinds 1997", "TuinKeur-gecertificeerd", "Erkend leerbedrijf"],
    notitie: { tekst: "Najaarsonderhoud: kantjes steken, snoeien, mulchen en de tuin winterklaar" }
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinrenovatie", "Tuinonderhoud", "Bomen snoeien en rooien", "Gazononderhoud", "Onderhoudscontracten", "Bedrijfstuinen"],

  intro: {
    kicker: "Hoveniersbedrijf M.C. Veldhuizen",
    tekst: "Een tuin is een kort woord, maar een breed begrip. Ieder mens is uniek, *zo ook iedere tuin.* Wij geven hem samen met u vorm, en houden hem daarna mooi.",
    stats: [
      { getal: "1997", label: "Een begrip in De Bilt en omgeving" },
      { getal: "9,6", label: "Waardering op HovenierNederland" },
      { getal: "2011", label: "TuinKeur-gecertificeerd sinds" },
      { getal: "5,0", label: "Gemiddeld op Google" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en erkend",
  keurmerken: [
    { naam: "TuinKeur", sub: "Gecertificeerd sinds 2011", logo: "img/tuinkeur.png" },
    { naam: "HovenierNederland", sub: "Gewaardeerd met een 9,6" },
    { naam: "SBB", sub: "Erkend leerbedrijf" }
  ],

  diensten: {
    titel: "Van ontwerp tot *onderhoud*",
    tekst: "Voor particuliere tuinen en bedrijfstuinen. Niets is te klein of te groot.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 40%", tekst: "We bespreken uw wensen en de mogelijkheden, en maken een digitaal tuinontwerp. Weet u nog niet precies wat u wilt, dan maken we twee of drie ontwerpen om uit te kiezen.",
        punten: ["Digitaal tuinontwerp", "Landelijk, modern of patio", "Ook Japanse tuinen en rotstuinen"] },
      { naam: "Tuinaanleg en renovatie", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Is het ontwerp naar uw tevredenheid, dan leggen we uw tuin vakkundig aan. Naast nieuwe tuinen renoveren we ook bestaande tuinen, of planten we ze opnieuw aan.",
        punten: ["Nieuwe tuinen", "Renovatie", "Opnieuw aanplanten"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Dankzij de plantenkennis van onze mensen gaat uw tuin na een periode van onderhoud zichtbaar opbloeien. Maandelijks, periodiek of een paar snoeibeurten per jaar.",
        punten: ["Maandelijks of periodiek", "Twee of drie snoeibeurten per jaar", "Onderhoud aan het gazon"] },
      { naam: "Bomen snoeien en rooien", foto: "img/bomen.jpg", pos: "50% 40%", tekst: "Ook grotere bomen snoeien of rooien we vakkundig, met de juiste middelen voor het werk op hoogte.",
        punten: ["Snoeien", "Rooien", "Werk op hoogte"] },
      { naam: "Onderhoudscontract", foto: "img/g-haag.jpg", pos: "50% 55%", tekst: "We verzorgen uw tuin tot in de puntjes zonder dat u er omkijken naar heeft. Meestal voor een jaar, andere looptijden kunnen ook. U weet vooraf wat u betaalt.",
        punten: ["Looptijd in overleg", "Facturatie per kwartaal", "Vooraf duidelijke prijs"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Impressies",
    titel: "Tuinen van *Veldhuizen*",
    tekst: "Een greep uit tuinen die we ontwierpen, aanlegden en onderhouden in De Bilt en omgeving.",
    items: [
      { foto: "img/g-patio.jpg", label: "Patio met cirkelbestrating en borders", sub: "Aanleg en onderhoud", pos: "50% 55%" },
      { foto: "img/g-border.jpg", label: "Nieuwe border langs het pad", sub: "Beplanting" },
      { foto: "img/g-terras.jpg", label: "Terras in een bostuin", sub: "Aanleg" },
      { foto: "img/vijver.jpg", label: "Vijver gerenoveerd", sub: "Renovatie" },
      { foto: "img/g-oprit.jpg", label: "Grindoprit tussen het groen", sub: "Aanleg" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Een begrip in *De Bilt*",
    rol: "Hoveniersbedrijf M.C. Veldhuizen, Groenekan",
    tekst: [
      "Sinds juli 1997 is Hoveniersbedrijf M.C. Veldhuizen een begrip in De Bilt en omgeving. Door onze groeiende klantenkring werken we met een vast team van vakbekwame hoveniers, en als SBB-erkend leerbedrijf leiden we ook nieuwe collega's op.",
      "Sinds 2011 zijn we TuinKeur-gecertificeerd. Dat betekent: servicegericht, betrouwbaar en vakbekwaam, met kwaliteit hoog in het vaandel."
    ],
    foto: "img/g-haag.jpg", fotoPos: "50% 55%", fotoAlt: "Tuin met strakke haag, borders en bestrating",
    knop: "App ons"
  },

  werkgebied: {
    titel: "De Bilt en omgeving",
    tekst: "Ons werkgebied ligt vooral in de gemeente De Bilt en de regio eromheen. Woont u net daarbuiten? We helpen u graag.",
    plaatsen: ["De Bilt", "Bilthoven", "Groenekan", "Utrecht", "Zeist", "Bosch en Duin", "Den Dolder", "Soest", "Amersfoort"]
  },

  faq: [
    { v: "Kost een tuinontwerp geld?", a: "Ja, voor een digitaal tuinontwerp brengen we kosten in rekening. Weet u precies wat u wilt, dan maken we één tekening; anders twee of drie ontwerpen." },
    { v: "Werken jullie ook voor bedrijven?", a: "Zeker. We onderhouden zowel particuliere tuinen als bedrijfstuinen." },
    { v: "Hoe werkt een onderhoudscontract?", a: "U kiest meestal voor één jaar, maar een andere looptijd kan ook. We factureren per kwartaal, dus u weet vooraf wat u betaalt." },
    { v: "Wanneer starten jullie met een grote renovatie?", a: "Bij grote renovaties en nieuwe aanleg beginnen we zodra u de getekende offerte heeft teruggestuurd." }
  ],

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Een tuin die *bij u past?*",
    tekst: "App of bel ons, dan bespreken we graag uw wensen en de mogelijkheden voor uw tuin."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Bel, app of mail ons. U krijgt zo snel mogelijk antwoord.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg en renovatie", "Tuinonderhoud", "Bomen snoeien en rooien", "Onderhoudscontract"],
    voorbeeld: "Bijvoorbeeld: border opnieuw aanplanten en vast onderhoud vier keer per jaar"
  }
};
