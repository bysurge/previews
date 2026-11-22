// Neda Dakwerken (Capelle aan den IJssel). Bron: neda-dakwerken.nl + Google (4,9 / 55). Foto's: eigen site + Google. Zie content.md.
window.SITE = {
  naam: "Neda Dakwerken",
  plaats: "Capelle aan den IJssel",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  kleuren: { brand: "#10232f", accent: "#72c4e2" },
  telefoon: "06 34 05 20 03",
  telefoonIntl: "31634052003",
  waTekst: "App Justin",
  email: "info@neda-dakwerken.nl",
  adres: ["Rivium Westlaan 2/8", "2909 LD Capelle aan den IJssel"],
  kvk: "96931205",
  google: { score: "4,9", aantal: "55" },
  ctaTekst: "Gratis dakcontrole",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf sinds 2014. Platte daken, pannendaken, lekkages, dakgoten en gevels, vanuit Capelle aan den IJssel door heel Nederland.",

  hero: {
    regels: ["Vakwerk op", "elk dak."],
    tekst: "Familiebedrijf uit Capelle aan den IJssel, sinds 2014. Platte daken, pannendaken, lekkages en reparaties, met 10 jaar garantie op ons werk.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 45%", fotoPosMobiel: "58% 50%",
    fotoAlt: "Dakdekker van Neda zet nieuwe panlatten op een dak",
    punten: ["10 jaar garantie", "Gratis dakcontrole", "Spoed: reactie binnen een uur"]
  },

  marquee: ["Bitumen daken", "Pannendaken", "Lekkages", "Stormschade", "Dakgoten", "Nokvorsten", "Schoorstenen", "Vogelwering", "Gevelreiniging"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "We zijn 24/7 bereikbaar. Bij een spoedklus reageren we binnen een uur."
  },

  intro: {
    kicker: "Over Neda",
    tekst: "Een familiebedrijf dat streeft naar perfectie. Eerlijk advies, duidelijke afspraken en een dak waar u jaren niet meer naar om hoeft te kijken.",
    stats: [
      { getal: "2014", label: "Opgericht als familiebedrijf" },
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "55", tel: 55, label: "Reviews op Google" },
      { getal: "10 jaar", label: "Garantie op ons werk" }
    ]
  },

  keurmerkenTitel: "VCA-gecertificeerd, en we werken alleen met A-merken",
  keurmerken: [
    { naam: "VCA", sub: "Veilig werken", logo: "img/merk-vca.png" },
    { naam: "Derbigum", sub: "Bitumen", logo: "img/merk-derbigum.png" },
    { naam: "BMI Icopal", sub: "Dakbedekking", logo: "img/merk-icopal.png" },
    { naam: "Soprema", sub: "Dakbedekking", logo: "img/merk-soprema.png" },
    { naam: "Koramic", sub: "Dakpannen", logo: "img/merk-koramic.png" },
    { naam: "Monier", sub: "Dakpannen", logo: "img/merk-monier.png" },
    { naam: "Zinkunie", sub: "Zinkwerk", logo: "img/merk-zinkunie.png" }
  ],

  diensten: {
    titel: "Plat, schuin en alles daartussen",
    tekst: "Van een kleine reparatie tot een compleet nieuw dak. Kleinere klussen doen we net zo graag.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 60%", tekst: "Bitumen dakbedekking, nieuw of als renovatie. Is het dakbeschot rot, dan bouwen we het dak opnieuw op vanaf de balklaag.",
        punten: ["Gaat 20 tot 25 jaar mee", "Isoleren of lichtkoepel erbij", "Ook reparatie en onderhoud"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 45%", tekst: "Pannen vervangen of nieuw aanbrengen. Vaak volstaan nieuwe pannen en panlatten, met dampdoorlatende folie eronder.",
        punten: ["Keramische en betonnen pannen", "Isoleren bij vervanging", "Reparatie en onderhoud"] },
      { naam: "Lekkage en stormschade", soort: "Lekkage / spoed", foto: "img/reparatie.jpg", pos: "50% 35%", tekst: "Afgewaaide pannen, gescheurde dakbedekking of water binnen: we komen snel en voorkomen gevolgschade.",
        punten: ["Bij spoed reactie binnen een uur", "Eerlijk advies, met foto's", "Snel en vakkundig hersteld"] },
      { naam: "Dakgoten en vogelwering", soort: "Dakgoot", foto: "img/dakgoot.jpg", pos: "50% 55%", tekst: "Een goede goot beschermt uw huis tegen waterschade. We verhelpen verstopping, lekkage en losse bevestiging.",
        punten: ["Reparatie en renovatie", "Corrosie en scheuren", "Diervriendelijke vogelwering"] },
      { naam: "Schoorsteen en nokvorst", soort: "Schoorsteen of nokvorst", foto: "img/schoorsteen.jpg", pos: "50% 45%", tekst: "Scheuren in het metselwerk of een losse nokvorst? Tijdig herstel voorkomt lekkage en houtrot.",
        punten: ["Schoorsteenrenovatie", "Nokvorsten opnieuw vastgezet", "Afdekkingen en aansluitingen"] },
      { naam: "Gevelreiniging", soort: "Gevelreiniging", foto: "img/gevel.jpg", pos: "50% 50%", tekst: "Al 11 jaar werken we aan buitengevels: reinigen, onderhouden en restaureren, zodat uw gevel weer jaren mee kan.",
        punten: ["Stomen, chemisch of stralen", "Mos, aanslag en graffiti", "Voegwerk en gevelrenovatie"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk, van dichtbij",
    tekst: "Strakke nokken, nieuwe panlatten, platte daken met lichtkoepel. Zo laten we elk dak achter.",
    items: [
      { foto: "img/pannen-uitzicht.jpg", label: "Pannendak", sub: "Nieuwe nok, strak in lijn", pos: "50% 60%" },
      { foto: "img/panlatten.jpg", label: "Panlatten en folie", sub: "Klaar voor de nieuwe pannen", pos: "50% 50%" },
      { foto: "img/lichtkoepel.jpg", label: "Plat dak", sub: "Met lichtkoepel en ventilatie", pos: "50% 55%" },
      { foto: "img/zonnepanelen.jpg", label: "Pannendak", sub: "Naast een plat dak met zonnepanelen", pos: "50% 50%" },
      { foto: "img/bus-op-locatie.jpg", label: "Op locatie", sub: "Bus en aanhanger voor de deur", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Eerst kijken, dan pas een offerte",
    tekst: "Geen verrassingen: u hoort eerlijk wat er nodig is, en niet meer dan dat.",
    foto: "img/aan-de-gevel.jpg", fotoPos: "50% 40%", fotoAlt: "Vakman van Neda aan het werk bij een dakrand",
    stappen: [
      { naam: "Gratis dakcontrole", tekst: "We komen langs en inspecteren uw dak, helemaal vrijblijvend." },
      { naam: "Eerlijk advies", tekst: "We bespreken wat we zien, met foto's, en wat er écht moet gebeuren." },
      { naam: "Offerte op maat", tekst: "Een duidelijke offerte, afgestemd op uw wensen en budget." },
      { naam: "Uitvoering en oplevering", tekst: "Vaak kunnen we binnen 24 uur beginnen. We werken netjes en ruimen alles op." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "10 jaar garantie",
    tekst: "Wij staan achter ons vakwerk. Daarom krijgt u 10 jaar garantie op onze dakwerkzaamheden, zwart op wit in uw offerte.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Meer dan 12 jaar ervaring in dakwerk",
        "Honderden daken gerepareerd en gerenoveerd",
        "Specialist in platte en hellende daken",
        "Hoogwaardige materialen van A-merken",
        "Eerlijke prijzen en duidelijke afspraken",
        "Snelle service bij lekkage en spoed"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Neda Dakwerken heeft bij ons de volledige dakrenovatie en isolatie verzorgd, en we zijn ontzettend tevreden over het resultaat. … Het dak ziet er strak uit en alles is keurig opgelost, inclusief het meedenken over de details rondom de dakkapel.", naam: "Erik H." },
      { tekst: "Contact gehad met Neda Dakwerken over een lekkage in het dak van mijn bijkeuken, in de ochtend gebeld zelfde dag waren de mannen van Neda er. Inspectie gedaan, duidelijk verteld en eerlijk geweest over de schade. … dezelfde week is het dak gerepareerd.", naam: "Senna D." },
      { tekst: "Justin reageert altijd snel, is beleefd en denkt goed mee in oplossingen. Komt ook met goede ideeën. Zijn medewerkers zijn (en werken) ook zeer netjes. En het geleverde werk is top!", naam: "Ronald B." },
      { tekst: "Justin belde meteen terug, dacht goed mee en kwam met een scherpe prijs. … Donderdag was de dakgoot al netjes gemaakt, er worden foto's van de werkzaamheden gemaakt en 10 jaar garantie meegekregen.", naam: "Astrid H." }
    ]
  },

  over: {
    kicker: "Over Neda", navNaam: "Over ons",
    titel: "Justin",
    rol: "Eigenaar van Neda Dakwerken, familiebedrijf sinds 2014",
    tekst: [
      "Al van jongs af aan werk ik graag met mijn handen. Buiten werken, problemen oplossen en iets moois achterlaten bij de klant: daar krijg ik energie van.",
      "Wat ik belangrijk vind? Betrouwbaarheid, eerlijkheid en kwaliteit. Geen half werk, maar een duurzaam resultaat waar ik zelf trots op ben. En u natuurlijk ook."
    ],
    foto: "img/bus.jpg", fotoPos: "60% 40%", fotoAlt: "Bij de bus en aanhanger van Neda Dakwerken",
    knop: "Stuur Justin een bericht"
  },

  werkgebied: {
    titel: "Capelle aan den IJssel en heel Nederland",
    tekst: "Vanuit ons kantoor in Capelle aan den IJssel werken we door heel Nederland."
  },

  faq: [
    { v: "Hoe lang duurt het vervangen van een dak?", a: "Dat hangt af van het type dak en het weer. Een gemiddeld pannendak is vaak binnen een week klaar. Bij een plat dak gaan we uit van zo'n 50 m² per dag." },
    { v: "Kunnen jullie dakdekken als het regent?", a: "Een kleine lekkage verhelpen we vaak tussen de buien door. Moet het hele dak vervangen worden, dan wachten we liever op een droge periode." },
    { v: "Kan er in de winter gewerkt worden?", a: "Ja, maar niet elk materiaal kan bij vorst verwerkt worden. EPDM brengen we bijvoorbeeld niet aan onder de 5 graden. Het beste is uw dak vóór de winter te laten doen." },
    { v: "Hoe vaak heeft een dak onderhoud nodig?", a: "Minimaal één keer per jaar, en ons advies is twee keer per jaar. Wat er precies nodig is, verschilt per type dak." }
  ],

  band: {
    foto: "img/band-dak.jpg", fotoPos: "50% 40%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakcontrole aan. We komen langs en vertellen eerlijk wat er nodig is."
  },

  contact: {
    titel: "Vraag een gratis dakcontrole aan",
    tekst: "Laat een bericht achter, bel of stuur een WhatsApp. Bij spoed reageren we binnen een uur.",
    formTitel: "Aanvraag",
    onderwerpen: ["Gratis dakcontrole", "Lekkage / spoed", "Plat dak", "Pannendak", "Dakgoot", "Schoorsteen of nokvorst", "Gevelreiniging"],
    voorbeeld: "Bijvoorbeeld: er komt water binnen bij de schoorsteen, of de pannen zijn aan vervanging toe",
    belofte: "Bij spoed reageren we binnen een uur."
  }
};
