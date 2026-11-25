// R.P. De Vries Tuinen (Krimpen aan den IJssel). Teksten en portfoliofoto's van hun eigen site; reviews letterlijk van Google (ingekort met …).
window.SITE = {
  naam: "R.P. De Vries Tuinen",
  kortNaam: "R.P. De Vries Tuinen",
  vak: "Hovenier",
  plaats: "Krimpen aan den IJssel",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoHoogte: 34,
  kleuren: { brand: "#253d2c", accent: "#b07a45" },
  telefoon: "06 24 98 00 08",
  telefoonIntl: "31624980008",
  telefoon2: "0180 76 17 68",
  waTekst: "WhatsApp",
  waContact: "Stuur een bericht",
  email: "info@rpdevriestuinen.nl",
  google: { score: "4,8", aantal: 64 },
  adres: ["Olympiade 46", "2924 AM Krimpen aan den IJssel"],
  voetTekst: "Van complete aanleg tot (klein) onderhoud, in de Krimpenerwaard en Rotterdam Rijnmond. Al ruim 20 jaar.",

  hero: {
    regels: ["Van complete", "aanleg tot", "*klein onderhoud.*"],
    tekst: "Hovenier in Krimpen aan den IJssel, de Krimpenerwaard en Rotterdam Rijnmond. Eén partij voor uw hele buitenruimte, van tuinontwerp tot overkapping.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "40% 60%", donker: true,
    fotoAlt: "Aangelegde achtertuin met gazon, stapstenen, plantenbak en overkapping",
    punten: ["Ruim 20 jaar ervaring", "Gratis en vrijblijvende offerte"]
  },

  marquee: ["Tuinaanleg", "Bestrating", "(3D) ontwerp", "Overkappingen en schuren", "Schuttingen", "Beplanting", "Kunstgras en gras", "Verlichting", "Vijvers en zwembaden", "Onderhoud"],

  intro: {
    kicker: "R.P. De Vries Tuinen",
    tekst: "Particulier, VvE of bedrijf: wij nemen al uw *buitenruimte-zorgen* uit handen. Van A tot Z onder één dak, persoonlijk en vertrouwd.",
    stats: [
      { getal: "20+", label: "Jaar ervaring als hovenier" },
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "64", label: "Reviews van klanten" },
      { getal: "A-Z", label: "Alles onder één dak" }
    ]
  },

  keurmerkenTitel: "Geselecteerd vakbedrijf",
  keurmerken: [
    { naam: "MJOP Beheer", sub: "Geselecteerd vakbedrijf", logo: "img/mjop.png" }
  ],

  diensten: {
    titel: "Alles voor *uw buitenruimte*",
    tekst: "Ongeacht de omvang van het werk begeleiden we u bij elke stap. Bel of mail voor een gratis en vrijblijvende offerte.",
    items: [
      { naam: "Tuinaanleg en renovatie", foto: "img/tuin-overkapping.jpg", tekst: "Een complete nieuwe voor- en achtertuin, of uw bestaande tuin helemaal vernieuwd. Ook bij nieuwbouw, inclusief oprit.",
        punten: ["Complete aanleg", "Renovatie", "Nieuwbouwtuinen"] },
      { naam: "Bestrating", foto: "img/terras.jpg", tekst: "Terrassen, paden en opritten, strak gelegd. Voor particulieren, maar ook gemeentebestrating.",
        punten: ["Terrassen", "Opritten", "Stapstenen"] },
      { naam: "(3D) tuinontwerp", foto: "img/stapstenen.jpg", tekst: "Een ontwerp, ook in 3D, zodat u vooraf ziet hoe uw tuin wordt. Heeft u zelf een ontwerp? Dan denken we mee over planten, materialen en budget.",
        punten: ["3D-ontwerp", "Meedenken over budget", "Uw eigen ontwerp uitgevoerd"] },
      { naam: "Houtbouw en overkappingen", foto: "img/vlonder.jpg", tekst: "Overkappingen, schuren, vlonders en schuttingen, op maat gemaakt.",
        punten: ["Overkappingen", "Schuren", "Vlonders", "Schuttingen"] },
      { naam: "Beplanting en gras", foto: "img/plantenbak.jpg", tekst: "Plantenbakken, borders, bomen, gras of kunstgras: groen dat bij uw tuin past.",
        punten: ["Beplanting", "(Kunst)gras", "Boomverzorging"] },
      { naam: "Verlichting, vijvers en zwembaden", foto: "img/zwembad.jpg", tekst: "Sfeervolle tuinverlichting, een (zwem)vijver of zwembad: wij leggen het aan.",
        punten: ["Tuinverlichting", "(Zwem)vijver", "Zwembad"] },
      { naam: "Onderhoud en VvE-groen", foto: "img/vve.jpg", tekst: "Onderhoud voor particulieren, VvE's, bedrijven en instellingen, inclusief meerjarenonderhoudsplan (MJOP).",
        punten: ["Tuinonderhoud", "VvE-groen", "MJOP"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Portfolio",
    titel: "Tuinen van *R.P. De Vries*",
    tekst: "Een greep uit tuinen die ons team de afgelopen tijd aanlegde.",
    items: [
      { foto: "img/verlichting.jpg", label: "Tuin met verlichting en zwembad", sub: "Aanleg en verlichting" },
      { foto: "img/speeltuin.jpg", label: "Gezinstuin met vlonder", sub: "Aanleg" },
      { foto: "img/bank.jpg", label: "Zitbank tussen olijfbomen", sub: "Maatwerk" },
      { foto: "img/grindtuin.jpg", label: "Grindtuin met Japanse invloeden", sub: "Renovatie" },
      { foto: "img/voortuin.jpg", label: "Voortuin met strakke paden", sub: "Bestrating en beplanting", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken *wij*",
    tekst: "Transparant en persoonlijk. Binnen twee werkdagen nemen we contact met u op.",
    stappen: [
      { naam: "Aanvraag", tekst: "Laat uw gegevens achter, bel of app. Binnen twee werkdagen hoort u van ons." },
      { naam: "Kennismaken en offerte", tekst: "We bespreken uw wensen en ontwerp. U krijgt een gratis en vrijblijvende offerte." },
      { naam: "Aanleg", tekst: "Ons team rijdt met modern gereedschap naar u toe en werkt netjes en secuur." },
      { naam: "Onderhoud", tekst: "Ook daarna houden we uw tuin graag mooi, groot of klein." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Ronald Lourens", tekst: "We zijn ontzettend blij met het resultaat – onze tuin is precies geworden zoals we voor ogen hadden, misschien zelfs mooier. … Rob de Vries sprong eruit doordat hij echt meedacht: over ons ontwerp, over de planten en materialen die we zelf zorgvuldig hadden gekozen, én over het budget." },
      { naam: "Frances Hoogenboom", tekst: "De jongens hebben de zware klus uitstekend gedaan: netjes en secuur gewerkt. … Contact met R.P. de Vries-kantoor ook erg prettig en snel - makkelijk via whatsapp. Kortom: een absolute aanrader dit bedrijf." },
      { naam: "Guido de Zeeuw", tekst: "Onlangs een lamellen overkapping laten plaatsen, grindpad rond de schuur aan laten leggen en wat bloembakken rond onze palmbomen. Super resultaat en hele nette, correcte partij om mee samen te werken. Een absolute aanrader!" },
      { naam: "Kwok Hau", tekst: "R.P.De Vries Tuinen Heeft bij onze nieuwbouw woning de voor/achtertuin + oprit aangelegd. … Foto's spreken voor zich! Ben je op zoek naar een goede hovenier, dan is dit zeker het goede adres!" }
    ]
  },

  werkgebied: {
    titel: "Krimpenerwaard en Rotterdam Rijnmond",
    tekst: "Vanuit Krimpen aan den IJssel rijden we dagelijks naar klussen in en rond de Krimpenerwaard en Rotterdam Rijnmond. We werken lokaal en flexibel.",
    plaatsen: ["Krimpen aan den IJssel", "Krimpenerwaard", "Rotterdam", "Rijnmond"]
  },

  faq: [
    { v: "Wat kost een hovenier bij jullie?", a: "We zijn transparant: voor aanleg en onderhoud van tuinen, straatwerk en houtbouw rekenen we een uurtarief van 65 euro (excl. btw)." },
    { v: "Werken jullie ook voor VvE's en bedrijven?", a: "Ja. Naast particulieren werken we voor VvE's, bedrijven en instellingen, ook met een meerjarenonderhoudsplan (MJOP)." },
    { v: "Is de offerte vrijblijvend?", a: "Ja, de offerte is gratis en vrijblijvend. Binnen twee werkdagen nemen we contact met u op." },
    { v: "Ik heb zelf een ontwerp. Kan dat?", a: "Zeker. We denken mee over uw ontwerp, de planten en materialen, en het budget." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 55%",
    titel: "Zin in een tuin *om in te leven?*",
    tekst: "Vraag een gratis en vrijblijvende offerte aan. We denken graag met u mee."
  },

  contact: {
    titel: "Vraag een *gratis offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Binnen twee werkdagen nemen we contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinaanleg", "Tuinonderhoud", "Bestrating", "Overkapping of schuur", "Ontwerp", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: nieuwbouwtuin met terras, gazon en een overkapping"
  }
};
