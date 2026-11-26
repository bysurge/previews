// Johan Vos Tuinen (Rotterdam). Bron: johanvostuinen.nl (26-11-2026, PerfectManage) + Google (4,0 uit 4).
// Foto's: eigen projectfoto's van hun site + eigen Google-foto's. Hun stockfoto's (bloesem, blauwe druifjes) NIET gebruikt.
window.SITE = {
  naam: "Johan Vos Tuinen",
  kortNaam: "Johan Vos",
  vak: "Hovenier",
  plaats: "Rotterdam",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 36,
  kleuren: { brand: "#2a3b2c", accent: "#5f9b45" },
  telefoon: "06 14 80 99 99",
  telefoonIntl: "31614809999",
  waTekst: "App Johan",
  email: "info@johanvostuinen.nl",
  adres: ["Kamgras 44", "3068 CC Rotterdam"],
  google: { score: "4,0", aantal: 4 },
  voetTekst: "Tuinaanleg en hovenierswerk in de regio Rotterdam. Grondwerk, bestrating, keramische tegels, schuttingen, vlonders, verlichting en kunstgras.",

  hero: {
    regels: ["Tuinaanleg", "in de regio", "*Rotterdam.*"],
    tekst: "Gespecialiseerd in het realiseren van particuliere tuinen, en in aanleg en onderhoud van bedrijfsterreinen. Van grondwerk tot de laatste tegel.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "40% 60%", donker: true,
    fotoAlt: "Houten vlonder met plantenbak, olijfboom en schutting",
    punten: ["Ervaren specialisten", "Vrijblijvende offerte"]
  },

  marquee: ["Grondwerk", "(Sier)bestrating", "Keramische tegels", "Schuttingen", "Vlonders en pergola's", "Blokhutten", "Beregening", "Tuinverlichting", "Kunstgras"],

  intro: {
    kicker: "Johan Vos Tuinen",
    tekst: "Uitsluitend *ervaren specialisten,* met allround kennis van alle voorkomende werkzaamheden. Zo bouwen we uw tuin op, vanaf de grond.",
    stats: [
      { getal: "4,0", label: "Op Google" },
      { getal: "Allround", label: "Van grondwerk tot verlichting" },
      { getal: "Zakelijk", label: "Ook bedrijfsterreinen" },
      { getal: "4 soorten", label: "Schuttingen: hout, hardhout, composiet, beton" }
    ]
  },

  diensten: {
    titel: "Uw tuin, *vanaf de grond*",
    tekst: "Voor particuliere tuinen en bedrijfsterreinen. Bekijk hieronder wat we doen.",
    items: [
      { naam: "Grondwerk", foto: "img/grondwerk.jpg", pos: "50% 55%", tekst: "Bouwgrond afgraven en afvoeren, goed bemeste tuinaarde voor een vruchtbaar resultaat, en een opritfundering die spoorvorming voorkomt.",
        punten: ["Afgraven en afvoeren", "Tuinaarde aanvoeren", "Fundering voor opritten"] },
      { naam: "(Sier)bestrating", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Terrassen, paden en opritten, ook machinaal gelegd voor grotere oppervlakken.",
        punten: ["Terrassen en paden", "Opritten", "Machinaal bestraten"] },
      { naam: "Keramische tegels", foto: "img/keramisch.jpg", pos: "50% 55%", tekst: "Bij keramische tegels komt nogal wat kijken. Afhankelijk van locatie en ondergrond kiezen we de juiste manier van leggen, zodat u jarenlang plezier heeft van uw terras.",
        punten: ["Advies over legwijze", "Strakke afwerking", "Ook met waterpartij"] },
      { naam: "Schuttingen", foto: "img/schutting.jpg", pos: "50% 55%", tekst: "Geïmpregneerde delen, hardhout, composietschermen of betonschuttingen. Ook bij stormschade maken we graag een vrijblijvende offerte voor vervanging of reparatie.",
        punten: ["Hout en hardhout", "Composiet en beton", "Herstel na stormschade"] },
      { naam: "Vlonders, verlichting en kunstgras", foto: "img/vlonder.jpg", pos: "50% 55%", tekst: "Vlonders, pergola's en blokhutten, beregeningsinstallaties, tuinverlichting en kunstgras: alles om de tuin af te maken.",
        punten: ["Vlonders en pergola's", "Beregening en verlichting", "Kunstgras"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Johan Vos*",
    tekst: "Een greep uit onze projecten in Rotterdam en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/waterpartij.jpg", label: "Strakke moderne tuin met waterpartij", sub: "Renovatie" },
      { foto: "img/lounge.jpg", label: "Terras met loungehoek", sub: "Keramische tegels" },
      { foto: "img/border.jpg", label: "Borders en schermen", sub: "Beplanting" },
      { foto: "img/vijver.jpg", label: "Stapstenen over het water", sub: "Aanleg" },
      { foto: "img/terras.jpg", label: "Terras met plantenbakken", sub: "Aanleg" },
      { foto: "img/oprit.jpg", label: "Oprit in Park Zestienhoven", sub: "Grondwerk en bestrating" },
      { foto: "img/trap.jpg", label: "Trap en pad langs het huis", sub: "Bestrating" },
      { foto: "img/beplanting.jpg", label: "Nieuwe beplanting", sub: "Aanleg" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Sofjen B.", tekst: "Johan is een professionele en ervaren vakman. Verstaat zijn vak goed, communicatie is geweldig en tot slot een hele oprechte vriendelijke man." },
      { naam: "Colin G.", sterren: 4, tekst: "Meedenkende mannen die op een gezellige manier de tuin aanleggen. … verder niets meer dan lof!" },
      { naam: "Ineke R.", tekst: "Zeer prettige ervaring, veel knowhow." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Ervaren *specialisten*",
    rol: "Johan Vos Tuinen, Rotterdam",
    tekst: [
      "Johan Vos Tuinen is gespecialiseerd in het realiseren van particuliere tuinen. Ook voor de aanleg en het onderhoud van uw bedrijfsterrein bent u bij ons aan het juiste adres.",
      "We leveren uitsluitend ervaren specialisten met allround kennis van alle voorkomende werkzaamheden, van grondwerk met eigen machines tot het leggen van keramische tegels."
    ],
    foto: "img/machine.jpg", fotoPos: "50% 55%", fotoAlt: "Graafmachine aan het werk bij een nieuwbouwtuin",
    knop: "Stuur Johan een bericht"
  },

  werkgebied: {
    titel: "Rotterdam en omgeving",
    tekst: "Vanuit Rotterdam werken we in de regio, onder meer in Park Zestienhoven en Capelle aan den IJssel.",
    plaatsen: ["Rotterdam", "Capelle aan den IJssel", "en omgeving"]
  },

  faq: [
    { v: "Doen jullie ook bedrijfsterreinen?", a: "Ja. Naast particuliere tuinen verzorgen we ook de aanleg en het onderhoud van bedrijfsterreinen." },
    { v: "Welke schuttingen kan ik kiezen?", a: "Geïmpregneerde delen, hardhout, composietschermen of betonschuttingen. We adviseren u graag." },
    { v: "Mijn schutting heeft stormschade. Kunnen jullie helpen?", a: "Zeker. We maken graag een vrijblijvende offerte voor vervanging of reparatie." },
    { v: "Is een keramisch terras lastig te leggen?", a: "Er komt nogal wat bij kijken. Afhankelijk van locatie en ondergrond zijn er verschillende opties. Neem gerust contact op voor informatie." }
  ],

  band: {
    foto: "img/waterpartij.jpg", fotoPos: "50% 55%",
    titel: "Een *strakke, moderne* tuin?",
    tekst: "Bel of app Johan voor een vrijblijvende offerte."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft, of bel direct: 06 14 80 99 99.",
    onderwerpen: ["Tuinaanleg", "Bestrating", "Keramische tegels", "Schutting", "Vlonder of blokhut", "Bedrijfsterrein"],
    voorbeeld: "Bijvoorbeeld: nieuw terras van keramische tegels en een hardhouten schutting"
  }
};
