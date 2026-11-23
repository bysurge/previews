// Blokker Daksystemen BV (Ede). Bron: blokkerdaksystemen.nl (dakdenker.nl) + Google (4,9 / 15). Zie content.md.
// Eigen foto's: alleen logo, bus (Google) en twee oude, kleine foto's van hun vorige site (reparatie, kraan).
// Stock (Wikimedia Commons, CC0 / publiek domein, geen naamsvermelding nodig): hero-dak.jpg ("Commercial Roofing Process"),
// plat-dak.jpg ("Flat roof roofing"), renovatie.jpg ("Roofing contractors"), band-plat-dak.jpg ("FinishedEPDMcoveredRoof").
window.SITE = {
  naam: "Blokker Daksystemen",
  plaats: "Ede",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoHoogte: 38,
  kleuren: { brand: "#1c1d20", accent: "#e8592a" },
  telefoon: "0318 61 49 91",
  telBel: "+31318614991",
  whatsapp: false,
  email: "info@blokkerdaksystemen.nl",
  adres: ["Darwinstraat 7c", "6718 XR Ede"],
  google: { score: "4,9", aantal: "15" },
  ctaTekst: "Gratis offerte op maat",
  navCta: "Offerte",
  voetTekst: "Specialist in dakbedekking voor platte en hellende daken. Vanuit Ede, voor particulieren, bedrijven en instellingen in de hele regio.",

  hero: {
    regels: ["Ga voor", "zekerheid."],
    tekst: "Dakspecialist uit Ede voor platte en hellende daken. We komen vrijblijvend langs en geven 5 jaar garantie op ons dakwerk.",
    foto: "img/band-plat-dak.jpg", fotoPos: "50% 60%", fotoPosMobiel: "45% 60%",
    fotoAlt: "Dakdekker aan het werk op een plat dak",
    donker: true,
    punten: ["5 jaar garantie", "VCA-gecertificeerd", "KOMO-materialen"]
  },

  marquee: ["Platte daken", "Hellende daken", "Bitumen dakbedekking", "Lekkage en reparatie", "Dakisolatie", "Witte daken", "Groendaken", "Lichtkoepels", "Onderhoud"],

  spoed: {
    titel: "Lekkage? Bel ons direct.",
    tekst: "Bij nood of stormschade belt u eerst de brandweer. Wij komen daarna voor het definitieve herstel."
  },

  intro: {
    kicker: "Over Blokker",
    tekst: "Eerlijk advies, duidelijke afspraken en alleen materialen met KOMO-keurmerk. Zo leggen we een dak waar u jaren zeker van bent.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "15", tel: 15, label: "Reviews op Google" },
      { getal: "5 jaar", label: "Garantie op ons dakwerk" },
      { getal: "6000 m²", label: "Eco-dak in één project in Ede" }
    ]
  },

  keurmerkenTitel: "Veilig werken en gecertificeerde materialen",
  keurmerken: [
    { naam: "VCA", sub: "Gecertificeerde medewerkers", logo: "img/merk-vca.png" },
    { naam: "KOMO", sub: "Gecertificeerde dakmaterialen", logo: "img/merk-komo.png" }
  ],

  diensten: {
    titel: "Van een lekkage tot een compleet nieuw dak",
    tekst: "Plat of hellend, groot of klein. Voor particulieren, bedrijven en instellingen.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "25% 60%", tekst: "Nieuwe dakbedekking of een compleet vervangen dak, met materialen die KOMO-gecertificeerd zijn en volgens de laatste stand der techniek aangebracht.",
        punten: ["Bitumen dakbedekking", "Isoleren in één keer mee", "5 jaar garantie"] },
      { naam: "Lekkage en reparatie", soort: "Lekkage (spoed)", foto: "img/reparatie.jpg", pos: "50% 60%", tekst: "Water binnen of pannen van het dak? We komen kijken en zeggen eerlijk of repareren genoeg is, of dat er meer moet gebeuren.",
        punten: ["Bij spoed: bel ons direct", "Eerlijk advies, geen verkooppraatjes", "Stormschade definitief hersteld"] },
      { naam: "Duurzame daken", soort: "Eco-dak / groendak", foto: "img/renovatie.jpg", pos: "50% 50%", tekst: "Een wit dak houdt het binnen koel en laat zonnepanelen meer opbrengen. Ook groendaken, dakisolatie en lichtkoepels.",
        punten: ["Witte afwerking", "Groendak en isolatie", "Lichtkoepels en Solatube"] }
    ],
    meer: [
      { naam: "Hellende daken", tekst: "Ook voor uw pannendak of hellende dak bent u bij ons aan het juiste adres." },
      { naam: "Garantie en onderhoud", tekst: "Na de oplevering blijven we bereikbaar voor onderhoud en vragen over uw garantie." },
      { naam: "Dakafval gerecycled", tekst: "Oude bitumen dakbedekking voeren we af voor recycling." }
    ]
  },

  werkwijze: {
    titel: "Eerst langskomen, dan pas een prijs",
    tekst: "U weet vooraf precies waar u aan toe bent.",
    foto: "img/kraan.jpg", fotoPos: "50% 50%", fotoAlt: "Materiaal wordt met een kraan het dak op gehesen",
    stappen: [
      { naam: "Vrijblijvend langs", tekst: "We komen bij u langs en bekijken het dak, zonder kosten." },
      { naam: "Prijsvoorstel op maat", tekst: "U krijgt een uitgebreide, duidelijke offerte. Liever eerst bellen? Dan bellen we u terug." },
      { naam: "Vakkundig uitgevoerd", tekst: "Door VCA-gecertificeerde vakmensen, met KOMO-gecertificeerde materialen." },
      { naam: "Garantie op papier", tekst: "5 jaar garantie op ons dakwerk, zwart op wit bevestigd." }
    ]
  },

  garantie: {
    kicker: "Garantie", navNaam: "Garantie",
    titel: "5 jaar garantie",
    tekst: "We werken alleen met KOMO-gecertificeerde dakbedekking, aangebracht volgens de laatste stand der techniek, door mensen die we continu bijscholen. Daarom geven we 5 jaar garantie op ons dakwerk. Let op: op reparaties en lekkages geven we geen garantie.",
    lijst: {
      titel: "Waar u op kunt rekenen",
      punten: [
        "Gratis en vrijblijvende offerte",
        "Garantie zwart op wit bevestigd",
        "Medewerkers VCA-gecertificeerd",
        "Alleen KOMO-gecertificeerde materialen",
        "Voor particulieren, bedrijven en instellingen",
        "Ook buiten de regio, door heel Nederland"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Er waaiden een aantal pannen van het dak … Diezelfde dag nog bevestiging dat ik gebeld zou worden. Afspraak gemaakt voor de volgende dag en de volgende ochtend 2 vriendelijke heren op bezoek. Ze kwamen met goede tips, dachten netjes mee zonder verkooppraatjes, echt super fijn!", naam: "Tim K." },
      { tekst: "Uitermate tevreden. Goede communicatie. Alles volgens afspraak en echt vakwerk geleverd. Meedenkend en altijd overal een oplossing voor. TOP", naam: "Rene van B." },
      { tekst: "Coen van Blokker Daksystemen is naar ons dak komen kijken en heeft ons een eerlijk advies gegeven om het dak eerst te laten repareren. … Zijn eerlijkheid hebben wij erg gewaardeerd en we raden hem zeker aan!", naam: "Fam. Versteegh, Amersfoort" },
      { tekst: "Wij hadden helaas een lekkage. Contact opgenomen met de dhr. Blokker en ik kan u zeggen, dat andere bedrijven van Blokker kunnen leren. … Ik raad dit bedrijf zeker aan!", naam: "Davy van A." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Coen Blokker en team",
    rol: "Blokker Daksystemen BV, Ede",
    tekst: [
      "Vanuit ons bedrijfspand in Ede werken we elke dag aan daken in de regio: van particuliere woningen tot bedrijfspanden. Zo legden we bij R&W Batterijen in Ede een eco-dak van meer dan 6000 m², met een witte afwerking die het pand koel houdt.",
      "We doen ook iets terug. Elk jaar gaat een deel van onze omzet naar goede doelen, zoals het Leger des Heils en Stichting Stop Pesten NU, en we sponsoren sport voor jongeren in de buurt."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 70%", fotoAlt: "Bus van Blokker Daksystemen bij een project in de steigers",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Van Arnhem tot Amersfoort",
    tekst: "Vanuit Ede zijn we dagelijks in de regio te vinden, en alles daartussenin. Ook voor een dak buiten de regio kunt u bij ons terecht.",
    plaatsen: ["Ede", "Arnhem", "Nijmegen", "Nieuwegein", "Amersfoort", "Apeldoorn"]
  },

  faq: [
    { v: "Kost een offerte iets?", a: "Nee. We komen vrijblijvend langs en maken een prijsvoorstel op maat, zonder kosten." },
    { v: "Hoe zit het met garantie?", a: "Op onze dakwerkzaamheden krijgt u 5 jaar garantie, zwart op wit. Op reparaties en lekkages geven we geen garantie." },
    { v: "Wat doe ik bij stormschade?", a: "Is er acuut gevaar, bel dan eerst de brandweer. Daarna komen wij voor het definitieve herstel van uw dak." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. We werken voor particulieren, bedrijven en instellingen, van een garagedak tot een bedrijfsdak van duizenden vierkante meters." }
  ],

  band: {
    foto: "img/plat-dak.jpg", fotoPos: "50% 55%",
    titel: "Twijfelt u over uw dak?",
    tekst: "We komen vrijblijvend kijken en vertellen eerlijk wat er nodig is. Soms is repareren genoeg."
  },

  contact: {
    titel: "Vraag een gratis offerte aan",
    tekst: "Laat een bericht achter of bel ons. We komen vrijblijvend langs voor een prijsvoorstel op maat.",
    formTitel: "Aanvraag",
    onderwerpen: ["Vrijblijvende offerte", "Lekkage (spoed)", "Plat dak", "Hellend dak", "Eco-dak / groendak", "Garantie / onderhoud"],
    voorbeeld: "Bijvoorbeeld: ons platte dak is aan vervanging toe, of er komt water binnen bij de dakkapel",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
