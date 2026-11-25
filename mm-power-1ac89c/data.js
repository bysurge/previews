// M&M Power Team (Brunssum). Geen eigen website. Bron: Google-profiel (5,0 / 7, categorie Dakdekker) + Google-foto's
// (pannendaken, dakkapel, zink/boeidelen, zonnepanelen reinigen). Logo (leeuw) uitgeknipt uit hun eigen Google-foto. Zie content.md.
window.SITE = {
  naam: "M&M Power Team",
  plaats: "Brunssum",
  vak: "Dakdekker",
  logo: "img/logo.jpg",
  logoOpFoto: "img/logo.jpg",
  logoVorm: "rond", // geen eigen CSS; nodig zodat niet-op-foto-klasse wordt gezet (anders logo 2x in hero-nav)
  kleuren: { brand: "#17171a", accent: "#c9a46a" },
  telefoon: "06 15 65 50 87",
  telefoonIntl: "31615655087",
  waTekst: "WhatsApp ons",
  waContact: "Stuur een foto van uw dak",
  adres: ["De Negristraat 25", "6441 TK Brunssum"],
  google: { score: "5,0", aantal: "7" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakwerk in Brunssum en omgeving: pannendaken, dakkapellen, zinkwerk en boeidelen. Ook zonnepanelen reinigen.",

  hero: {
    regels: ["Sterk", "dakwerk,", "als team."],
    tekst: "Pannendaken, dakkapellen, zinkwerk en boeidelen in Brunssum en omgeving. Ook voor het reinigen van uw zonnepanelen.",
    foto: "img/pannendak-team.jpg", fotoPos: "50% 30%", fotoPosMobiel: "50% 30%",
    fotoAlt: "Het team aan het werk op een nieuw pannendak",
    donker: true,
    punten: ["5,0 op Google", "Pannendaken en dakkapellen", "Zink en boeidelen"]
  },

  marquee: ["Pannendaken", "Dakkapellen", "Zinkwerk", "Boeidelen", "Schoorstenen", "Zonnepanelen reinigen", "Reparaties"],

  intro: {
    kicker: "M&M Power Team",
    tekst: "Een team dat precies weet wat het doet. Van een nieuw pannendak tot een strak afgewerkte boeidelen: we pakken het samen aan.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "7", label: "Reviews, allemaal 5 sterren" },
      { getal: "Brunssum", label: "En omgeving" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Hellende daken, dakkapellen en alles eromheen.",
    items: [
      { naam: "Pannendaken", foto: "img/nok-werk.jpg", pos: "50% 40%", tekst: "Nieuwe dakpannen leggen of uw pannendak herstellen, van de goot tot de nok.",
        punten: ["Nieuwe dakpannen", "Nokken en randen", "Reparaties"] },
      { naam: "Dakkapellen", foto: "img/dakkapel-frame.jpg", pos: "50% 50%", tekst: "Een dakkapel plaatsen of vernieuwen, inclusief het pannenwerk eromheen.",
        punten: ["Plaatsen en vernieuwen", "Netjes ingewerkt", "Pannenwerk eromheen"] },
      { naam: "Zink en boeidelen", foto: "img/boeidelen.jpg", pos: "50% 50%", tekst: "Strakke boeidelen en zinkwerk langs dakranden en gevels.",
        punten: ["Boeidelen", "Zinken goten", "Dakranden en gevels"], soort: "Zink of boeidelen" },
      { naam: "Zonnepanelen reinigen", foto: "img/zonnepanelen-huis.jpg", pos: "50% 30%", tekst: "Schone panelen leveren meer op. We reinigen uw zonnepanelen veilig vanaf het dak.",
        punten: ["Veilig vanaf het dak", "Voor meer opbrengst", "Te combineren met dakwerk"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Aan het werk",
    tekst: "Een greep uit onze klussen in Brunssum en omgeving.",
    items: [
      { foto: "img/pannendak-team.jpg", label: "Nieuw pannendak", sub: "Samen het dak op", pos: "50% 35%" },
      { foto: "img/schoorsteen.jpg", label: "Schoorsteen", sub: "Aan het werk", pos: "50% 40%" },
      { foto: "img/gevel-zink.jpg", label: "Boeidelen en zink", sub: "Strak afgewerkt", pos: "50% 50%" },
      { foto: "img/dakkapel-frame.jpg", label: "Dakkapel", sub: "In aanbouw", pos: "50% 50%" },
      { foto: "img/poster.jpg", label: "Zonnepanelen reinigen", sub: "M&M Power Team", pos: "50% 75%" }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Goed gedaan, het lijkt wel alsof ze precies weten wat ze doen.", naam: "Krystian A." },
      { tekst: "Toppers", naam: "Rocco" }
    ]
  },

  band: {
    foto: "img/nok-werk.jpg", fotoPos: "50% 50%",
    titel: "Klus aan uw dak?",
    tekst: "Stuur een foto via WhatsApp of vraag een offerte aan. U hoort snel van ons."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Vertel kort wat u wilt laten doen, of stuur direct een WhatsApp met een foto van uw dak.",
    voorbeeld: "Bijvoorbeeld: een paar dakpannen kapot na de storm",
    onderwerpen: ["Pannendak", "Dakkapel", "Zink of boeidelen", "Zonnepanelen reinigen", "Iets anders"]
  }
};
