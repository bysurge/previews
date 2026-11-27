// B. van de Gevel Dakkapellen-Specialist (Tilburg). Bron: dakkapellen-specialist.nl + Google (4,4 / 117). Zie content.md.
// Foto's: eigen site (slider + projectpagina's) + eigen Google-profiel. Geen 06 gevonden: kanaal e-mail, geen WhatsApp-knoppen.
window.SITE = {
  naam: "B. van de Gevel Dakkapellen-Specialist",
  kortNaam: "Van de Gevel",
  plaats: "Tilburg",
  vak: "Dakkapellen",
  titelExtra: "Dakkapellen-specialist in Tilburg",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 44,
  kleuren: { brand: "#132a4a", accent: "#c8663e" },
  telefoon: "013 535 03 29",
  telBel: "+31135350329",
  whatsapp: false,
  email: "info@dakkapellen-specialist.nl",
  adres: ["Duifstraat 15", "5022 AL Tilburg"],
  google: { score: "4,4", aantal: "117" },
  ctaTekst: "Offerte aanvragen",
  navCta: "Offerte",
  voetTekst: "Al 20 jaar gespecialiseerd in dakkapellen. Ter plaatse opgebouwd, in één dag geplaatst, met 10 jaar garantie.",

  hero: {
    regels: ["Al 20 jaar", "dakkapellen,", "in één dag geplaatst."],
    tekst: "Geen prefab en geen hijskraan: wij bouwen uw dakkapel ter plaatse op, precies op maat van uw dak. 's Avonds is hij glas- en waterdicht.",
    foto: "img/hero.jpg", fotoPos: "55% 45%",
    fotoMobiel: "img/hero-m.jpg", fotoPosMobiel: "50% 50%",
    fotoAlt: "Antraciet dakkapel met witte kozijnen, geplaatst door Van de Gevel",
    donker: true,
    punten: ["10 jaar garantie", "Geen aanbetaling", "Ook in de winter"]
  },

  marquee: ["Dakkapel met plat dak", "Dakkapel met pannendak", "Kunststof of hardhout", "Nokverhoging", "Velux-dakvensters", "Kozijnen hout en kunststof", "HR++ glas", "Gratis afvoer bouwafval"],

  intro: {
    kicker: "Dakkapellen-specialist",
    tekst: "Al twintig jaar doen we één ding: dakkapellen. Onze eigen mensen meten in, bouwen op en werken af. Zo krijgt u een dakkapel die zo veel mogelijk op pannenmaat is gemaakt en mooi aansluit op uw dak.",
    stats: [
      { getal: "20 jaar", tel: 20, label: "Gespecialiseerd in dakkapellen" },
      { getal: "4,4", label: "Gemiddeld op Google, 117 reviews" },
      { getal: "1 dag", tel: 1, label: "Geplaatst, glas- en waterdicht" },
      { getal: "10 jaar", tel: 10, label: "Schriftelijke garantie" }
    ]
  },

  diensten: {
    titel: "Uw dakkapel, helemaal op maat",
    tekst: "Standaard dakkapellen tegen vaste prijzen, en maatwerk op aanvraag.",
    knop: "Offerte aanvragen",
    items: [
      { naam: "Dakkapel met plat dak", soort: "Plat dak", foto: "img/antraciet.jpg", pos: "50% 50%",
        tekst: "De klassieke dakkapel met een strakke dakrand. Aan de buitenkant volledig afgewerkt, in kunststof of hardhout, in de kleur die bij uw huis past.",
        punten: ["Kunststof of hardhout", "Standaard vaste prijs", "Buiten volledig afgewerkt"] },
      { naam: "Dakkapel met pannendak", soort: "Pannendak", foto: "img/rood-dak.jpg", pos: "50% 55%",
        tekst: "Een dakkapel met een schuin dak in dezelfde pannen als uw huis, met een zinken bakgoot. Uw bestaande pannen gebruiken we zo veel mogelijk opnieuw.",
        punten: ["Zinken bakgoot", "Bestaande pannen hergebruikt", "Sluit mooi aan op uw dak"] },
      { naam: "Nokverhoging", soort: "Nokverhoging", foto: "img/opbouw.jpg", pos: "50% 50%",
        tekst: "Nog meer ruimte onder het dak? Een nokverhoging in combinatie met een dakkapel maken we op maat. De prijs is op aanvraag.",
        punten: ["Op maat", "In combinatie met dakkapel", "Prijs op aanvraag"] },
      { naam: "Kozijnen en dakvensters", soort: "Extra werk", foto: "img/ramen.jpg", pos: "50% 50%",
        tekst: "Samen met uw dakkapel vernieuwen we ook kozijnen, ramen en deuren in hout of kunststof met HR++ glas, plaatsen we Velux-dakvensters of maken we een trap.",
        punten: ["Kozijnen hout en kunststof", "Velux-dakvensters", "Trappen op maat"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Dakkapellen in Brabant en Zuid-Holland",
    tekst: "Een greep uit de dakkapellen die we plaatsten.",
    items: [
      { foto: "img/wit.jpg", label: "Breed en licht", sub: "Witte dakkapel op een rood pannendak", pos: "50% 22%" },
      { foto: "img/tilburg.jpg", label: "Tilburg", sub: "Pannendak met antraciet zijwangen", pos: "50% 50%" },
      { foto: "img/hoekhuis.jpg", label: "Hoekwoning", sub: "Dakkapel met pannendak", pos: "50% 40%" },
      { foto: "img/breda.jpg", label: "Breda", sub: "Over bijna de hele breedte", pos: "50% 45%" },
      { foto: "img/avond.jpg", label: "Antraciet", sub: "Strak en donker afgewerkt", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    kicker: "Zo werken we",
    titel: "Ter plaatse gebouwd, in één dag klaar",
    tekst: "Alles in eigen beheer, door onze eigen mensen.",
    foto: "img/binnen.jpg", fotoPos: "50% 50%", fotoAlt: "Binnenkant van een dakkapel in opbouw, met nieuwe kozijnen en houten constructie",
    stappen: [
      { naam: "Inmeten", tekst: "We komen bij u langs, meten de dakkapel persoonlijk in en zetten de offerte op papier. Die mailen we u toe." },
      { naam: "Constructie", tekst: "Het dak passen we vakkundig aan, met nieuwe gordingen en slapers of, bij een sporenkap, aan de buitenzijde." },
      { naam: "Plaatsing", tekst: "Op één dag bouwen we de dakkapel op. 's Avonds is hij glas- en waterdicht, ook in de winter." },
      { naam: "Opleveren", tekst: "Buiten volledig afgewerkt. Het bouwafval nemen we gratis mee, en u betaalt pas op de dag van plaatsing." }
    ]
  },

  garantie: {
    kicker: "Zekerheid", navNaam: "Garantie",
    titel: "10 jaar garantie, zwart op wit",
    tekst: "Op elke dakkapel krijgt u schriftelijk tien jaar garantie, op de constructie én op lekkage. Ook op een houten dakkapel, mits het schilderwerk goed wordt onderhouden.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Geen aanbetaling: betalen op de dag van plaatsing",
        "Persoonlijk ingemeten door onze eigen mensen",
        "Geen hijskraan nodig",
        "Kozijnen van Gealan, standaard HR++ glas",
        "Isolatie met PIR-platen van Unilin",
        "Bouwafval gratis afgevoerd"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Binnen 5 uur hebben ze de oude afgebroken, en een nieuwe geplaatst, incl. koffie en een Zeeuwse bolus.", naam: "Sander L." },
      { tekst: "Onze dakkapel van Van de Gevel staat al weer 15 jaar op het dak. … Ook na 15 jaar verlenen zij gewoon nog top service!", naam: "Eric v. d. L." },
      { tekst: "De mannen hebben zo snel gewerkt dat ze zowel voor als achter binnen 1 dag hebben geplaatst. … ze leveren goed en snel werk.", naam: "Inez S." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Specialist, geen alleskunner",
    rol: "B. van de Gevel, Duifstraat 15 in Tilburg",
    tekst: [
      "Al twintig jaar richten we ons op dakkapellen. Daardoor weten we precies hoe een dakkapel goed op uw dak aansluit, of het nu om een rijtjeshuis gaat of om een vrijstaande woning.",
      "We plaatsen standaard dakkapellen tegen vaste prijzen, en maken net zo graag iets bijzonders op maat. Een vrijblijvend advies? Bel ons op werkdagen tussen 9:00 en 17:00 uur."
    ],
    foto: "img/hero-m.jpg", fotoPos: "50% 50%", fotoAlt: "Dakkapel met pannendak en witte kozijnen, geplaatst door Van de Gevel",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Noord-Brabant en Zuid-Holland",
    tekst: "We werken niet door heel Nederland, maar in Noord-Brabant en Zuid-Holland. Twijfelt u of uw adres binnen ons werkgebied valt? Bel of mail ons gerust.",
    plaatsen: ["Tilburg", "Breda", "Den Bosch", "Oss", "Rotterdam", "Roosendaal", "Best", "Oosterhout", "Gorinchem", "Bergen op Zoom", "Oisterwijk"]
  },

  faq: [
    { v: "Wat is het verschil met een prefab dakkapel?", a: "Wij bouwen uw dakkapel ter plaatse op, zodat hij zo veel mogelijk op pannenmaat is en goed aansluit op uw dak. Een hijskraan is niet nodig." },
    { v: "Moet ik een aanbetaling doen?", a: "Nee. U betaalt op de dag dat de dakkapel geplaatst wordt." },
    { v: "Kunnen jullie de tekening voor de vergunning maken?", a: "Ja, een tekening voor de vergunningsaanvraag kunnen wij voor u verzorgen (exclusief constructieberekening)." },
    { v: "Plaatsen jullie ook in de winter?", a: "Ja. Ook in de winter plaatsen we uw dakkapel in één dag, glas- en waterdicht." },
    { v: "Wat gebeurt er met het bouwafval?", a: "Dat nemen we gratis mee. Alleen dakpannen en grind voeren we niet af." }
  ],

  band: {
    foto: "img/zwart-dak.jpg", fotoPos: "50% 45%",
    titel: "Meer ruimte op zolder?",
    tekst: "Vraag een vrijblijvend advies aan. We komen graag bij u langs om in te meten."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Laat een bericht achter of bel ons op 013 535 03 29 (werkdagen 9:00 - 17:00 uur). We nemen zo snel mogelijk contact met u op.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakkapel plat dak", "Dakkapel pannendak", "Nokverhoging", "Kozijnen", "Velux-dakvenster", "Overige vraag"],
    voorbeeld: "Bijvoorbeeld: we willen een dakkapel van 3 meter aan de achterkant, tussenwoning in Tilburg",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
