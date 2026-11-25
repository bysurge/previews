// CW Dakwerken (Christiaan Wijkhuise, Velserbroek / Haarlem). Eigen site = JouwWeb met sjabloontekst en stockfoto's,
// dus foto's van hun Google-profiel (5,0 / 13), 25-11-2026. Logo van hun site (wit weggehaald).
window.SITE = {
  naam: "CW Dakwerken",
  kortNaam: "CW Dakwerken",
  plaats: "Haarlem",
  vak: "Dakdekker",
  logo: "img/logo.png", logoVorm: "breed", logoMetNaam: false,
  logoWit: "img/logo-wit.png", logoOpFoto: "img/logo-op-foto.png", logoHoogte: 46,
  kleuren: { brand: "#14202b", accent: "#3fa3dc" },
  telefoon: "06 37 12 99 80",
  telefoonIntl: "31637129980",
  email: "cwdakwerken@gmail.com",
  waTekst: "Stuur een foto",
  waContact: "Stuur een foto van uw dak",
  google: { score: "5,0", aantal: "13" },
  navCta: "Gratis dakinspectie",
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Dakdekker voor Haarlem en omgeving. Pannendaken, platte daken, leien, lood- en zinkwerk.",

  hero: {
    regels: ["Elk dak", "alsof het", "ons eigen dak is."],
    tekst: "Van een lekkage tot een compleet nieuw dak: pannen, bitumen, leien en lood- en zinkwerk in Haarlem en omgeving. Met een gratis dakinspectie vooraf.",
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    fotoPosMobiel: "62% 50%",
    fotoAlt: "Nieuw plat dak in aanbouw met uitzicht over de polder",
    donker: true,
    punten: ["Gratis dakinspectie", "In het vak sinds 2017", "Duidelijke offerte vooraf"]
  },

  marquee: ["Pannendaken", "Nokvorsten", "Bitumen", "Leien", "Lood- en zinkwerk", "Daklekkage", "Dakreparatie", "Gootreiniging", "Dakinspectie"],

  spoed: {
    titel: "Lekkage? Wacht niet te lang.",
    tekst: "Hoe sneller een lek is verholpen, hoe kleiner de schade. Bel of app gerust een foto."
  },

  intro: {
    kicker: "CW Dakwerken",
    tekst: "We sporen een lekkage snel op, vervangen een versleten pannendak of leggen een nieuw plat dak. Altijd na een eerlijke inspectie, zodat u vooraf precies weet waar u aan toe bent.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "2017", label: "In het dakdekkersvak" },
      { getal: "Gratis", label: "Dakinspectie" },
      { getal: "Haarlem", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Plat dak of pannendak, klein herstel of een complete renovatie. Twijfelt u? Stuur een foto, dan kijken we mee.",
    items: [
      { naam: "Pannendak vervangen", soort: "Pannendak", foto: "img/lood-dakkapel.jpg", pos: "50% 50%",
        tekst: "We halen het oude dak eraf, controleren de draagconstructie en leggen nieuwe pannen. Zo kan uw dak weer tientallen jaren mee.",
        punten: ["Nieuwe dakpannen", "Nokvorsten", "Controle van de constructie"] },
      { naam: "Platte daken", soort: "Plat dak", foto: "img/plat-dak.jpg", pos: "50% 55%",
        tekst: "Bitumen dakbedekking vervangen, strak afgewerkt rond lichtkoepels, afvoeren en dakranden.",
        punten: ["Bitumen vervangen", "Lichtkoepels en afvoeren", "Zinken dakranden"] },
      { naam: "Lood- en zinkwerk", soort: "Lood en zink", foto: "img/zink-schoorsteen.jpg", pos: "50% 55%",
        tekst: "Loodslabben bij schoorstenen en dakkapellen, zinken goten en afdekkappen. Op maat gemaakt en waterdicht.",
        punten: ["Loodslabben", "Zinken goten en regenpijpen", "Afdekkappen in zink"] },
      { naam: "Lekkage en reparatie", soort: "Daklekkage", foto: "img/daktrim.jpg", pos: "50% 50%",
        tekst: "Losse pannen, stormschade of een lekkende aansluiting: we zoeken de oorzaak en lossen het blijvend op.",
        punten: ["Lekkage opsporen", "Stormschade", "Gootreiniging en onderhoud"] }
    ],
    meer: [
      { naam: "Leidekken", tekst: "Natuurleien of kunstleien, voor nieuwbouw en renovatie." },
      { naam: "Onderhoud", tekst: "Gootreiniging, dakkapel reinigen en schoorsteen impregneren." },
      { naam: "Gratis dakinspectie", tekst: "Constructie, dakbedekking en aansluitingen, met eerlijk advies." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent werk",
    tekst: "Een greep uit onze klussen. Meer zien? Volg @cw_dakwerken op Instagram.",
    items: [
      { foto: "img/groot-plat-dak.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 60%" },
      { foto: "img/zinken-goot.jpg", label: "Zinken goot", sub: "Op maat gemaakt", pos: "50% 50%" },
      { foto: "img/lichtkoepel.jpg", label: "Lichtkoepel", sub: "Strak ingewerkt", pos: "50% 50%" },
      { foto: "img/daktrim.jpg", label: "Dakrand", sub: "Netjes afgewerkt", pos: "50% 50%" },
      { foto: "img/lood-dakkapel.jpg", label: "Dakkapel", sub: "Lood en leien", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo gaat het",
    tekst: "Geen verrassingen achteraf.",
    foto: "img/aan-het-werk.jpg", fotoPos: "50% 40%", fotoAlt: "Medewerker van CW Dakwerken aan het werk op een pannendak",
    stappen: [
      { naam: "Stuur een bericht", tekst: "Bel, app of mail. Een foto van uw dak helpt al veel." },
      { naam: "Gratis dakinspectie", tekst: "We bekijken uw dak tot in detail, ook wat je van buiten niet ziet." },
      { naam: "Eerlijk advies en offerte", tekst: "U hoort wat er nodig is en wat het kost, voordat we beginnen." },
      { naam: "Vakkundig uitgevoerd", tekst: "Met goede materialen, en netjes achtergelaten." }
    ]
  },

  over: {
    kicker: "Over Christiaan", navNaam: "Over ons",
    titel: "Christiaan Wijkhuise",
    rol: "Eigenaar van CW Dakwerken, sinds 2024",
    tekst: [
      "Sinds 2017 werkt Christiaan in het dakdekkersvak. In mei 2024 begon hij zijn eigen bedrijf, met één doel: elk dak behandelen alsof het zijn eigen dak is.",
      "Samen met een vast team van vakmensen helpt hij u met reparaties, renovaties en complete nieuwe daken. Betrouwbaar, duurzaam en met oog voor detail."
    ],
    foto: "img/christiaan.jpg", fotoPos: "50% 50%", fotoAlt: "Christiaan Wijkhuise op een dak",
    badge: "img/logo.png", badgeVrij: true,
    knop: "Stuur Christiaan een bericht"
  },

  werkgebied: {
    titel: "Haarlem en omgeving",
    tekst: "Vanuit Velserbroek werken we in Haarlem en de regio, voor particulieren en bedrijven. Twijfelt u of we bij u in de buurt komen? Stuur gerust een berichtje."
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Twijfelt u over uw dak?",
    tekst: "Vraag een gratis dakinspectie aan. U krijgt een duidelijk en eerlijk advies."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel, app of mail ons, of laat hieronder een bericht achter. Bereikbaar van maandag tot en met vrijdag, 8.00 tot 16.30 uur.",
    formTitel: "Aanvraag",
    onderwerpen: ["Daklekkage", "Pannendak", "Plat dak", "Lood en zink", "Dakinspectie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: er lekt water langs de schoorsteen",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
