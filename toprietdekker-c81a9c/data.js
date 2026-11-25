// Toprietdekker, Kees van Ettekoven (Rhenen). Bron: toprietdekker.nl (alle pagina's) + Google (5,0 / 45). Zie content.md.
// Foto's: eigen site (800px) + hun Google-profiel (hero, Kees aan het werk, huis aan het water). Logo: tekst-woordmerk van hun naam (ze hebben geen logo).
window.SITE = {
  naam: "Toprietdekker",
  kortNaam: "Toprietdekker",
  plaats: "Rhenen",
  vak: "Rietdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 42,
  kleuren: { brand: "#2a1d12", accent: "#c4974a" },
  telefoon: "06 588 17 123",
  telefoonIntl: "31658817123",
  email: "info@toprietdekker.nl",
  adres: ["Zanglijster 115", "3911 ER Rhenen"],
  google: { score: "5,0", aantal: "45" },
  ctaTekst: "Vraag vrijblijvend advies",
  navCta: "Advies",
  waTekst: "App Kees",
  voetTekst: "Rietdekkersbedrijf Kees van Ettekoven. Renovatie, onderhoud en nieuw riet, door het hele land. Al zeven generaties.",

  hero: {
    regels: ["Riet, met de hand", "en met zorg."],
    tekst: "Kees van Ettekoven is rietdekker in de zevende generatie. Gespecialiseerd in renovatie en onderhoud van rieten daken, van villa tot boerderij, tuinhuis of parasol.",
    foto: "img/hero-villa.jpg", fotoPos: "50% 45%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Villa met een nieuw rieten dak",
    donker: true,
    punten: ["Zevende generatie", "5,0 op Google", "Door het hele land"]
  },

  marquee: ["Rieten daken", "Renovatie", "Onderhoud", "Bijvullen", "Dakreiniging", "Villa's", "Boerderijen", "Tuinhuizen", "Parasols", "Brandveiligheid"],

  intro: {
    kicker: "Toprietdekker",
    tekst: "Riet is een sterk, tijdloos en sfeervol natuurproduct. Wij selecteren het zelf bij de riethandel en doen voor elk dak ons uiterste best om uitstekend werk af te leveren.",
    stats: [
      { getal: "7e", label: "Generatie rietdekkers" },
      { getal: "5,0", label: "Uit 45 Google-reviews" },
      { getal: "10-20 jaar", label: "Extra levensduur na goed bijvullen" },
      { getal: "NL", label: "Werkgebied: het hele land" }
    ]
  },

  diensten: {
    titel: "Alles voor uw rieten dak",
    tekst: "Denkt u dat uw dak aan vervanging toe is? Vaak kan het nog goed gerenoveerd worden. Dat scheelt enorm in de kosten.",
    knop: "Advies aanvragen",
    items: [
      { naam: "Renovatie", foto: "img/kees-dekt.jpg", pos: "60% 40%",
        tekst: "Een goed bijgevuld rieten dak kan zo weer 10 tot 20 jaar mee. We kijken eerlijk wat uw dak nodig heeft.",
        punten: ["Bijvullen en herstellen", "Ook als anderen vervanging adviseren", "Riet zelf geselecteerd"] },
      { naam: "Onderhoud", foto: "img/onderhoud-reinigen.jpg", pos: "50% 45%",
        tekst: "Onderhoud rekt de levensduur van uw rieten dak. Met eigen materiaal voor reinigen en inspuiten.",
        punten: ["Onderhoudsbeurt eens per vijf jaar", "Om de twee jaar inspuiten tegen algen", "Ook voor kleine klussen"] },
      { naam: "Nieuw riet", foto: "img/parasols.jpg", pos: "50% 50%",
        tekst: "Alle voorkomende daken dekken we vakkundig: van villa of boerderij tot tuinhuis of parasol.",
        punten: ["Villa's en boerderijen", "Tuinhuizen en overkappingen", "Parasols met eigen techniek"] }
    ],
    meer: [
      { naam: "Brandveiligheid", tekst: "Impregneren, dakplaten, sprinklers, bliksembeveiling of een detectiesysteem: we zetten de mogelijkheden op een rij." },
      { naam: "Rondom het dak", tekst: "Schoorstenen renoveren, loodwerk, koperen dakgoten, dakramen, dakkapellen en timmerwerk." },
      { naam: "Van pannen naar riet", tekst: "Wilt u een rieten dak in plaats van pannen? Wij voeren het hele project in eigen beheer uit, inclusief vergunning." }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten", navNaam: "Projecten",
    titel: "Rieten daken door het hele land",
    tekst: "In 't Gooi mogen we vaak prachtige villa's van een rieten dak voorzien. Ook boerderijen zijn voor ons dankbare objecten.",
    items: [
      { foto: "img/villa-tuin.jpg", label: "Villa", sub: "Nieuw rieten dak", pos: "50% 45%" },
      { foto: "img/villa-3.jpg", label: "Villa", sub: "Met ronde dakkapellen", pos: "50% 50%" },
      { foto: "img/boerderij.jpg", label: "Boerderij", sub: "Lang rieten dak", pos: "50% 50%" },
      { foto: "img/overkapping.jpg", label: "Tuinoverkapping", sub: "Riet op eikenhout", pos: "50% 50%" },
      { foto: "img/villa-2.jpg", label: "Woning", sub: "Strak afgewerkte kap", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijke afspraken, goede communicatie en een schone tuin na afloop.",
    foto: "img/riet-bossen.jpg", fotoPos: "50% 50%", fotoAlt: "Bossen riet klaar voor het dak",
    stappen: [
      { naam: "Vrijblijvend contact", tekst: "Bel of app Kees. We maken een afspraak om uw wensen door te nemen." },
      { naam: "Heldere offerte", tekst: "Aan de hand van uw wensen ontvangt u een geheel vrijblijvende offerte." },
      { naam: "Planning in overleg", tekst: "We plannen het werk samen in en laten u op tijd weten wanneer we beginnen." },
      { naam: "Klaar en opgeruimd", tekst: "Het dak wordt afgedekt met een dik zeil. Als we beginnen, gaan we pas weg als het klaar is, en we ruimen op tot het laatste rietje." }
    ]
  },

  reviews: {
    titel: "Wat klanten over Kees zeggen",
    items: [
      { tekst: "Onderhoud aan rieten dak uit laten voeren, zeer tevreden over. Goed advies, hoge kwaliteit en een scherpe prijs. Super werk geleverd door Kees van Ettekoven!", naam: "Morton G." },
      { tekst: "We zijn enorm blij met het resultaat, maar zeker ook met zijn prettige werkwijze. Alles wordt duidelijk uitgelegd en gaat in overleg, en aan het eind van de dag werd alles netjes opgeruimd.", naam: "Marieke G." },
      { tekst: "Toprietdekker Kees is een echte Toprietdekker! Bekwaam, adviserend, super harde werker en komt zijn afspraken altijd na …", naam: "Joke K." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over Kees",
    titel: "Rietdekker in de zevende generatie",
    rol: "Kees van Ettekoven, eigenaar",
    tekst: [
      "Het rietdekken zit in de familie: we zijn inmiddels de zevende generatie. Die ervaring zie je terug in elk dak, van een klein tuinhuis tot een villa in 't Gooi.",
      "Kees is altijd zelf aanwezig op de bouw. Dankzij goede contacten met de riethandel, een eigen voorraadschuur en andere rietdekbedrijven heeft hij altijd het beste riet en kunnen we ook grotere projecten aan."
    ],
    foto: "img/kees-zw.jpg", fotoPos: "45% 40%", fotoAlt: "Rietdekker aan het werk op een rieten dak",
    knop: "App Kees"
  },

  band: {
    foto: "img/band-water.jpg", fotoPos: "50% 55%",
    titel: "Toe aan onderhoud?",
    tekst: "Laat u vrijblijvend adviseren door Kees. Vaak kan uw dak nog jaren mee."
  },

  contact: {
    titel: "Vraag vrijblijvend advies",
    tekst: "Bel, app of mail Kees, of laat hieronder een bericht achter. Een foto van uw dak meesturen helpt.",
    formTitel: "Advies aanvragen",
    onderwerpen: ["Renovatie", "Onderhoud", "Nieuw rieten dak", "Parasol of tuinhuis", "Brandveiligheid", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons rieten dak is ruim 20 jaar oud en er groeit mos op",
    belofte: "Kees neemt zelf contact met u op."
  }
};
