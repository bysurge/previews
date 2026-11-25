// Leerssen Dakwerken (Maasbracht). Bron: leerssendakwerken.nl (alle menupagina's) + Google (4,5 / 11). Zie content.md.
// Alle foto's zijn eigen projectfoto's van hun site (2014, max 800px). Logo uitgeknipt uit hun headerbanner (header.jpg).
window.SITE = {
  naam: "Leerssen Dakwerken",
  kortNaam: "Leerssen",
  plaats: "Maasbracht",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#0e1f33", accent: "#2f7fc4" },
  telefoon: "06 55 52 08 20",
  telefoonIntl: "31655520820",
  telefoon2: "0475 568 495",
  email: "info@leerssendakwerken.nl",
  adres: ["Stationsweg 70", "6051 KL Maasbracht"],
  google: { score: "4,5", aantal: "11" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  waTekst: "App ons",
  voetTekst: "Allround dakdekkersbedrijf uit Maasbracht. Sinds 2002 voor realisatie, reparatie en onderhoud van alle soorten daken. Als kwaliteit telt.",

  hero: {
    regels: ["Als kwaliteit", "telt."],
    tekst: "Sinds 2002 uw allround dakdekker uit Maasbracht. Platte daken, dakkapellen, zink- en loodwerk, boeiboorden en terrasoverkappingen: van nieuwbouw tot reparatie en onderhoud.",
    foto: "img/hero-dakkapel-bus.jpg", fotoPos: "50% 40%", fotoPosMobiel: "40% 50%",
    fotoAlt: "Dakkapel met nieuw pannendak, met de bus van Leerssen Dakwerken ervoor",
    donker: true,
    punten: ["Sinds 2002", "Vrijblijvende offerte", "4,5 op Google"]
  },

  marquee: ["Platte daken", "Bitumen", "EPDM", "Dakkapellen", "Zinkwerk", "Loodwerk", "Boeiboorden", "Dakgoten", "Terrasoverkappingen", "Lichtkoepels"],

  intro: {
    kicker: "Leerssen Dakwerken",
    tekst: "Een allround dakdekkersbedrijf dat sinds 2002 zelfstandig werkt. Voor realisatie, reparatie en onderhoud van alle soorten daken, met deskundig advies vooraf.",
    stats: [
      { getal: "2002", label: "Zelfstandig sinds" },
      { getal: "4,5", label: "Gemiddeld op Google" },
      { getal: "30 jaar", label: "Bewezen levensduur dakbedekking" },
      { getal: "Allround", label: "Alle soorten daken" }
    ]
  },

  diensten: {
    titel: "Alles voor een goed dak",
    tekst: "Van dakkapel tot loods: we denken mee en geven eerlijk advies over wat bij uw dak past. Vraag gerust naar de mogelijkheden.",
    items: [
      { naam: "Platte daken", foto: "img/plat-dak-koepels.jpg", pos: "50% 55%",
        tekst: "Van dakkapel tot aanbouw, van garage tot loods. Nieuwbouw en renovatie, helemaal naar uw wens.",
        punten: ["Bitumineuze dakbedekking", "Kunststof EPDM", "Bewezen levensduur van 30 jaar"] },
      { naam: "Zink- en loodwerk", foto: "img/zink-dakkapel.jpg", pos: "50% 50%",
        tekst: "Zinkwerk en loodbewerking op maat, strak afgewerkt en waterdicht aangesloten.",
        punten: ["Bak- en mastgoten", "Hemelwaterafvoeren en afdeklijsten", "Lood inslijpen bij schoorsteen en gevel"] },
      { naam: "Boeiboorden", foto: "img/boeiboorden.jpg", pos: "50% 40%",
        tekst: "Houten boeiboorden vernieuwen of voorgoed onderhoudsarm bekleden.",
        punten: ["Volkern-kunststof (HPL, Trespa)", "Plastisol op staalplaat, op maat gezet", "Geschroefd of verlijmd"] },
      { naam: "Terrasoverkappingen", foto: "img/overkapping.jpg", pos: "50% 50%",
        tekst: "Uw terras overkappen? We maken het compleet, van fundering tot en met dakbedekking.",
        punten: ["Van fundering tot dakbedekking", "Met lichtstraat of lichtkoepel", "Op maat voor uw terras"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk", navNaam: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Platte daken, dakkapellen, zinkwerk en overkappingen in de regio.",
    items: [
      { foto: "img/pannendak.jpg", label: "Nieuw pannendak", sub: "Met dakraam", pos: "50% 50%" },
      { foto: "img/zink-dakkapellen.jpg", label: "Zinkwerk", sub: "Dakkapellen bekleed", pos: "50% 50%" },
      { foto: "img/plat-dak-grind.jpg", label: "Plat dak", sub: "Met lichtkoepels", pos: "50% 60%" },
      { foto: "img/overkapping-tuin.jpg", label: "Terrasoverkapping", sub: "Met plat dak", pos: "50% 50%" },
      { foto: "img/dakkapel.jpg", label: "Dakkapel", sub: "Strak afgewerkt", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Persoonlijk en duidelijk, van eerste contact tot een dak waar u weer jaren mee vooruit kunt.",
    foto: "img/plat-dak-epdm.jpg", fotoPos: "50% 60%", fotoAlt: "Dakdekker brengt dakbedekking aan op een plat dak",
    stappen: [
      { naam: "Bel, app of mail", tekst: "Vertel wat er aan uw dak speelt. Langskomen kan ook: bel dan even van tevoren." },
      { naam: "Deskundig advies", tekst: "We adviseren eerlijk over het pakket dat bij uw dak past, bijvoorbeeld bitumen of EPDM." },
      { naam: "Vrijblijvende offerte", tekst: "U krijgt een duidelijke offerte, zonder verplichtingen." },
      { naam: "Vakkundig uitgevoerd", tekst: "Realisatie, reparatie of onderhoud: netjes en volgens afspraak." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Wij zijn zeer tevreden over de werkzaamheden. Een aanrader!", naam: "Carool G." },
      { tekst: "Hele goede dakdekker", naam: "Nicola G." },
      { tekst: "Goed en betrouwbaar", naam: "Wesley" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker uit Maasbracht",
    rol: "Leerssen Dakwerken, Stationsweg 70",
    tekst: [
      "Leerssen Dakwerken is een allround dakdekkersbedrijf dat sinds 2002 zelfstandig werkzaamheden uitvoert. U kunt bij ons terecht voor realisatie, reparatie en onderhoud van alle soorten daken.",
      "Wilt u langskomen om uw plannen te bespreken? Geen probleem, bel dan even van tevoren. We horen graag van u."
    ],
    foto: "img/bus.jpg", fotoPos: "30% 60%", fotoAlt: "De bus van Leerssen Dakwerken bij een klus",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/dakkapel-2.jpg", fotoPos: "50% 50%",
    titel: "Plannen met uw dak?",
    tekst: "Vraag een vrijblijvende offerte aan. We denken graag mee."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel, app of mail, of laat hieronder een bericht achter. We nemen zo snel mogelijk contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Plat dak", "Zink- en loodwerk", "Boeiboorden", "Terrasoverkapping", "Reparatie of onderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de dakbedekking van onze aanbouw is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
