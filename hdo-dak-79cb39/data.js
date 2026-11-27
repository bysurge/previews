// H.D.O. Dakbedekkingen B.V. (Barendrecht). Bron: hdobv.nl + Google (4,3 / 14). Zie content.md.
// Alle foto's van hun eigen site (geen renders gebruikt). Geen 06 gevonden: kanaal e-mail, geen WhatsApp-knoppen.
window.SITE = {
  naam: "H.D.O. Dakbedekkingen",
  kortNaam: "HDO Dakbedekkingen",
  plaats: "Barendrecht",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoWit: "img/logo-wit.png",
  logoHoogte: 40,
  kleuren: { brand: "#1e2619", accent: "#8f9a14" },
  telefoon: "0180 61 96 95",
  telBel: "+31180619695",
  whatsapp: false,
  email: "info@hdobv.nl",
  adres: ["Noldijk 94a", "2991 VL Barendrecht"],
  google: { score: "4,3", aantal: "14" },
  ctaTekst: "Neem contact op",
  navCta: "Contact",
  voetTekst: "Dakbedekkingen sinds 1983, vanuit de vlasboerderij aan de Noldijk in Barendrecht. Voor bedrijven en particulieren.",

  hero: {
    regels: ["Platte daken", "die meer", "kunnen."],
    tekst: "Sinds 1983 vanuit Barendrecht. Van het nieuwe dak van uw kantoorpand tot het dak van de schuur in uw achtertuin: bitumen, EPDM, PVC, groendaken en dakterrassen.",
    foto: "img/groendak-hdo.jpg", fotoPos: "50% 55%", fotoPosMobiel: "40% 60%",
    fotoAlt: "Luchtfoto van een groot gebouw met groendak en zonnepanelen in een park",
    donker: true,
    punten: ["Sinds 1983", "10 jaar Vebidak-garantie", "Dak van het Jaar-winnaar"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Groendaken", "Dakterrassen", "Parkeerdaken", "Valbeveiliging", "Onderhoud", "Circulaire daksystemen"],

  intro: {
    kicker: "Over HDO",
    tekst: "In 1983 begonnen in een schuur aan de Noldijk, nu een vakbedrijf voor alles wat op een plat dak gebeurt. Al 40 jaar denken we met u mee over de beste oplossing voor uw dak.",
    stats: [
      { getal: "1983", label: "Opgericht in Barendrecht" },
      { getal: "10+5", label: "Jaar verzekerde IKO-garantie mogelijk" },
      { getal: "4,3", label: "Gemiddeld op Google" },
      { getal: "2022", label: "Dak van het Jaar, platte daken" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en partner van",
  keurmerken: [
    { naam: "Vebidak", logo: "img/merk-vebidak.png" },
    { naam: "VCA", logo: "img/merk-vca.png" },
    { naam: "ISO 9001", logo: "img/merk-iso.png" },
    { naam: "IKO roof concept partner", logo: "img/merk-iko.png" }
  ],

  diensten: {
    titel: "Alles wat op het dak gebeurt",
    tekst: "Eerst de vraag: waarvoor gaat u het dak gebruiken? Dan kiezen we het systeem dat daar het beste bij past.",
    knop: "Neem contact op",
    items: [
      { naam: "Dakbedekking", soort: "Bitumen, EPDM, PVC", foto: "img/brander.jpg", pos: "50% 50%", tekst: "Bitumen in alle soorten, EPDM met het demonteerbare Hertalan-inductiesysteem of Resitrix, en Alkorplan Smart PVC met een extra lange levensduur.",
        punten: ["Erkend verwerker Hertalan en Resitrix", "APP en SBS, 1- en 2-laags", "Alkorplan Smart PVC"] },
      { naam: "Groendaken", soort: "Groen", foto: "img/groendak-hdo.jpg", pos: "60% 60%", tekst: "Een groendak buffert regenwater, isoleert, dempt geluid en verdubbelt de levensduur van de dakbedekking. Met vegetatiematten is het direct groen.",
        punten: ["Waterbuffering", "Langere levensduur", "Subsidie per gemeente"] },
      { naam: "Dakbestrating", soort: "Dakterrassen en parkeerdaken", foto: "img/pardak.jpg", pos: "50% 50%", tekst: "Benut ruimte die anders verloren gaat: dakterrassen, daktuinen, schoolpleinen, sportdaken en zelfs parkeerdaken.",
        punten: ["Drainagetegels", "Keramische tegels", "Pardak parkeerdaken"] },
      { naam: "Service en onderhoud", soort: "Onderhoud", foto: "img/vakman.jpg", pos: "50% 40%", tekst: "Met een onderhoudscontract inspecteren we jaarlijks uw dak, lopen alle details na en verwijderen vuil. U krijgt een schriftelijk rapport.",
        punten: ["Jaarlijkse inspectie", "Schriftelijk rapport", "Levensduur verlengen"] }
    ],
    meer: [
      { naam: "Valbeveiliging", tekst: "Ankerpunten, kabelsystemen of hekwerk, afgestemd op hoe vaak het dak betreden wordt." },
      { naam: "Brandveiligheid", tekst: "Een brandwerende toplaag zoals IKO Fireproof verkleint de kans op brand van buitenaf." },
      { naam: "Circulaire daksystemen", tekst: "Demonteerbare systemen en dakbanen van gerecyclede grondstoffen." },
      { naam: "Subsidie", tekst: "Bij-isoleren kan in aanmerking komen voor de EIA, ook onze witte Carrara dakrol." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Van Haarlem tot Almere",
    tekst: "Een greep uit onze projecten.",
    items: [
      { foto: "img/wilhelminawerf.jpg", label: "Wilhelminawerf, Utrecht", sub: "PVC met strakke roeven, sinds 2020", pos: "50% 50%" },
      { foto: "img/vierhoek.jpg", label: "De Vierhoek, Haarlem", sub: "EPDM, 2020-2023", pos: "50% 60%" },
      { foto: "img/spoorblok.jpg", label: "Spoorblok Cartesiusdriehoek", sub: "Vegetatiedak, Utrecht 2023", pos: "50% 50%" },
      { foto: "img/lidl.jpg", label: "LIDL, Almere", sub: "EPDM, 2021", pos: "50% 50%" },
      { foto: "img/stebru.jpg", label: "Kantoor Stebru Bouw", sub: "Groendak en luchtzuiverende dakbedekking", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    kicker: "Zo werken we",
    titel: "Eerst meedenken, dan dekken",
    tekst: "Isolatiewaarden, opstandhoogtes, gebruik van het dak: we nemen het allemaal mee.",
    foto: "img/varkenoord.jpg", fotoPos: "50% 40%", fotoAlt: "Een dakdekker van HDO aan het werk op een plat dak naast een sportveld",
    stappen: [
      { naam: "Uw vraag", tekst: "Waarvoor gaat u het dak gebruiken? Opslag, terras, groen of zonnepanelen: dat bepaalt het systeem." },
      { naam: "Advies", tekst: "We adviseren over materialen, isolatie, duurzaamheid en subsidiemogelijkheden." },
      { naam: "Uitvoering", tekst: "Onze dakdekkers voeren het werk uit met hoogwaardige materialen, ook op ronde of bijzondere daken." },
      { naam: "Garantie", tekst: "Na oplevering krijgt u standaard 10 jaar schriftelijke Vebidak-garantie." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar Vebidak-garantie, standaard",
    tekst: "Na uitvoering krijgt u 10 jaar schriftelijke Vebidak-garantie. Wilt u meer zekerheid, dan kan een verzekerde garantie via HDI-Gerling. Als IKO Premium partner verzorgen we ook een verzekerde garantie van 10+5 jaar op het hele dakpakket.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Sinds 1983 in Barendrecht",
        "10 jaar Vebidak-garantie",
        "Verzekerde garantie mogelijk",
        "IKO roof concept partner",
        "ISO 9001 en VCA gecertificeerd",
        "Woningborg- of SKW-richtlijnen op verzoek"
      ]
    }
  },

  band: {
    foto: "img/dak-van-het-jaar.jpg", fotoPos: "50% 40%",
    titel: "Dak van het Jaar",
    tekst: "Met De Groene Kaap in Rotterdam wonnen we in 2022 de prijs voor het beste platte dak. In 2023 waren we genomineerd met een glazen dak als vitrine in Wassenaar."
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Begonnen in de schuur",
    rol: "H.D.O. Dakbedekkingen B.V., sinds 1983",
    tekst: [
      "In september 1983 begon HDO in een schuur aan de Noldijk in Barendrecht, met een onverhard terrein eromheen. We zitten er nog steeds: de markante vlasboerderij is ons kantoor geworden en er staan meerdere loodsen.",
      "We begonnen met bitumen, begin jaren negentig kwam EPDM erbij en niet veel later PVC. Inmiddels zijn ook dakbestrating, dakbegroening en valbeveiliging dagelijkse kost. In HDO INFO, ons eigen informatiecentrum, laten we graag zien en voelen wat er allemaal kan."
    ],
    foto: "img/loods-hdo.jpg", fotoPos: "45% 60%", fotoAlt: "De loods van HDO aan de Noldijk, met groendak",
    knop: "Neem contact op"
  },

  faq: [
    { v: "Werken jullie ook voor particulieren?", a: "Ja. We werken voor bedrijven en particulieren: van nieuwbouw van een kantoorpand tot het dak van de schuur in uw achtertuin." },
    { v: "Welke garantie krijg ik?", a: "Standaard 10 jaar schriftelijke Vebidak-garantie. Daarnaast kan een verzekerde garantie, of een IKO Premium garantie van 10+5 jaar op het hele dakpakket." },
    { v: "Is er subsidie mogelijk?", a: "Ondernemers die een plat dak bij-isoleren kunnen gebruikmaken van de EIA. Voor een groendak geven veel gemeenten subsidie; dat verschilt per gemeente." },
    { v: "Hoe vaak moet mijn dak onderhouden worden?", a: "We adviseren minimaal één keer per jaar. Met een onderhoudscontract inspecteren we jaarlijks het dak en krijgt u een schriftelijk rapport." }
  ],

  contact: {
    titel: "Neem contact op",
    tekst: "Laat een bericht achter of bel 0180 61 96 95. We denken graag met u mee.",
    formTitel: "Aanvraag",
    onderwerpen: ["Nieuw dak", "Dakrenovatie", "Groendak", "Dakterras", "Valbeveiliging", "Onderhoud", "Lekkage"],
    voorbeeld: "Bijvoorbeeld: we willen het platte dak van ons bedrijfspand vernieuwen en denken aan een groendak",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
