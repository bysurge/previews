// Heuvelink Rietdekkers (Lettele), Herbert Heuvelink. Bron: heuvelinkrietdekkers.nl (WordPress: Home, Riet, Nieuwbouw/Vervangen, Onderhoud, Projecten x7, Zonnepanelen, Contact) + Google (5,0 uit 6).
// Alle foto's van hun eigen projectpagina's (src/). Voor/na = hun projectpagina "Onderhoud" (zelfde boerderij, voor en na). Zie content.md.
window.SITE = {
  naam: "Heuvelink Rietdekkers",
  kortNaam: "Heuvelink",
  plaats: "Lettele",
  vak: "Rietdekker",
  titelExtra: "Rietdekker in Lettele",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false, logoHoogte: 42,
  logoOpFoto: "img/logo-wit.png", logoWit: "img/logo-wit.png",
  kleuren: { brand: "#2a2522", accent: "#e9a81c" },
  telefoon: "06 26 28 82 20",
  telefoonIntl: "31626288220",
  waTekst: "App Herbert",
  waContact: "Stuur Herbert een bericht of een foto van uw dak",
  email: "info@heuvelinkrietdekkers.nl",
  adres: ["Bolinksweg 1", "7434 RM Lettele"],
  kvk: "53197836",
  google: { score: "5,0", aantal: "6" },
  ctaTekst: "Vraag een prijsopgave",
  navCta: "Offerte",
  voetTekst: "Jong rietdekkersbedrijf uit Lettele. Nieuwe rieten daken, vervangen en onderhoud, hooibergen, tuinhuisjes en timmer- en gebintwerk.",

  hero: {
    regels: ["Een rieten dak,", "met de hand", "gemaakt."],
    tekst: "Heuvelink Rietdekkers maakt en onderhoudt rieten daken. Van een nieuwe rietkap op uw woning tot een hooiberg of tuinhuisje, met vakmanschap en kwaliteit voorop.",
    foto: "img/hero.jpg", fotoPos: "50% 40%",
    fotoPosMobiel: "35% 50%",
    fotoAlt: "Woning met een nieuw rieten dak en dakkapellen tegen een donkere lucht",
    donker: true,
    punten: ["10 jaar garantie", "Gegarandeerde dikte van het dak", "Aangesloten bij de vakfederatie"]
  },

  marquee: ["Rieten daken", "Nieuwbouw", "Vervangen", "Onderhoud", "Hooibergen", "Tuinhuisjes", "Carports", "Timmer- en gebintwerk", "Indak-zonnepanelen"],

  intro: {
    kicker: "Over Heuvelink",
    tekst: "Een jong rietdekkersbedrijf waar vakmanschap en kwaliteit hoog in het vaandel staan. We zoeken zelf de juiste partij riet uit voor elk dak, en leveren maatwerk.",
    stats: [
      { getal: "10 jaar", label: "Garantie volgens de algemene voorwaarden" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "1e keus", label: "Riet van zoet of brak water" },
      { getal: "> 45°", label: "Ons advies voor de dakhelling" }
    ]
  },

  keurmerkenTitel: "Aangesloten bij",
  keurmerken: [
    { naam: "Vakfederatie Rietdekkers", sub: "Werken volgens de richtlijnen" },
    { naam: "Viridian Solar", sub: "Dealer indak-zonnepanelen" }
  ],

  diensten: {
    titel: "Alles onder riet",
    tekst: "Heeft u speciale wensen? Vraag gerust naar de mogelijkheden, we leveren maatwerk.",
    knop: "Vraag een prijsopgave",
    items: [
      { naam: "Nieuwbouw en vervangen", soort: "Rieten dak", foto: "img/nieuwbouw.jpg", pos: "50% 45%", tekst: "Een nieuwe rietkap op uw woning, of het vervangen van een oud dak. Bij vervangen raden we het schroefdak aan: lagere opstalverzekering en minder stookkosten.",
        punten: ["Nieuwbouw: betrek ons vroeg", "Vervangen volgens het schroefdak-principe", "Dakramen en dakkapellen"] },
      { naam: "Onderhoud", soort: "Onderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Een kleine investering in onderhoud verlengt de levensduur van uw dak. We behandelen tegen algen, verwijderen mos en herstellen storm- en vogelschade.",
        punten: ["Algen behandelen, biologisch", "Mos verwijderen", "Storm- en vogelschade"] },
      { naam: "Hooibergen en tuinhuisjes", soort: "Maatwerk", foto: "img/tuinhuis.jpg", pos: "50% 55%", tekst: "Tuinhuisjes in verschillende maten en vormen, carports, hooibergen en dierenverblijven. Allemaal met een rieten kap.",
        punten: ["Tuinhuisjes en prieeltjes", "Carports", "Hooibergen en dierenverblijven"] },
      { naam: "Timmer- en gebintwerk", soort: "Houtwerk", foto: "img/gebint.jpg", pos: "50% 50%", tekst: "Ook het houtwerk eronder maken we zelf: van gebint tot complete kapconstructie.",
        punten: ["Gebinten", "Kapconstructies", "Maatwerk"] }
    ]
  },

  voorNa: {
    titel: "Wat onderhoud doet",
    tekst: "Schuif over de foto. Uit ons onderhoudsproject: eerst vol mos en algen, daarna weer een schoon rieten dak.",
    items: [
      { naam: "Rieten dak", voor: "img/voor.jpg", na: "img/na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Woningen, boerderijen, hooibergen en tuinhuisjes in Lettele en omgeving.",
    items: [
      { foto: "img/p-boerderij.jpg", label: "Vervangen", sub: "Gedeelte van het dak van een boerderij", pos: "50% 50%" },
      { foto: "img/p-woning.jpg", label: "Rieten dak", sub: "Woning met nieuw riet", pos: "50% 45%" },
      { foto: "img/p-detail.jpg", label: "Detail", sub: "Strak afgewerkt rond de dakkapel", pos: "50% 50%" },
      { foto: "img/p-hooiberg.jpg", label: "Hooiberg", sub: "Kap van een vierroedige hooiberg", pos: "50% 50%" },
      { foto: "img/p-boerderij2.jpg", label: "Onderhoud", sub: "Boerderij in de zon", pos: "50% 50%" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over Herbert",
    titel: "Herbert Heuvelink",
    rol: "Eigenaar en rietdekker",
    tekst: [
      "Heuvelink Rietdekkers is een jong rietdekkersbedrijf uit Lettele. Vakmanschap en kwaliteit staan bij ons voorop.",
      "Riet is een natuurproduct: de kwaliteit verschilt per jaar en per partij. Daarom zoeken we zelf het juiste riet uit voor elk dak, rekening houdend met uw wensen. Zo heeft u jarenlang plezier van uw rieten kap."
    ],
    foto: "img/over.jpg", fotoPos: "50% 45%", fotoAlt: "Rietdekkers aan het werk aan de kap van een hooiberg",
    knop: "Stuur Herbert een bericht"
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Goede kwaliteit en vakwerk!", naam: "Mark J." },
      { tekst: "Hij werk zeer nauwkeurig", naam: "Jos en Marijke S." }
    ]
  },

  faq: [
    { v: "Welke dakhelling is het beste voor riet?", a: "Bij een nieuwbouwwoning raden we altijd een dakhelling van meer dan 45 graden aan. Zo heeft u jarenlang plezier van de rieten kap." },
    { v: "Wat is een schroefdak?", a: "Bij het vervangen van een rieten kap waar onder gewoond wordt, vervangen we de oude rietlatten door plaatmateriaal en schroeven we het riet daarop vast. Dat geeft een lagere opstalverzekering en minder stookkosten door de isolerende werking." },
    { v: "Is fijn riet beter?", a: "Fijn riet geeft een mooi resultaat, maar een fijne stengel slibt eerder dicht dan een grovere. Niet elk riet past bij elk dak; we kiezen zelf de juiste partij voor uw dak." },
    { v: "Kunnen er zonnepanelen op een rieten dak?", a: "Ja. We zijn dealer van Viridian Solar, een indaksysteem dat ook geschikt is voor rieten daken. Vraag naar de mogelijkheden." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 45%",
    titel: "Twijfelt u over de staat van uw dak?",
    tekst: "Bel, app of mail Herbert. We komen graag kijken en geven eerlijk advies."
  },

  werkgebied: {
    titel: "Lettele en omgeving",
    tekst: "Heuvelink Rietdekkers zit aan de Bolinksweg in Lettele (gemeente Deventer) en werkt in de wijde omgeving."
  },

  contact: {
    titel: "Vraag een vrijblijvende prijsopgave",
    tekst: "Vertel kort wat u zoekt. Bel, app, mail of vul het formulier in.",
    formTitel: "Prijsopgave aanvragen",
    onderwerpen: ["Nieuw rieten dak", "Vervangen", "Onderhoud", "Tuinhuisje / hooiberg", "Anders"],
    voorbeeld: "Bijvoorbeeld: er groeit mos op ons rieten dak, of we willen een tuinhuisje met rieten kap",
    belofte: "Herbert neemt zo snel mogelijk contact met u op."
  }
};
