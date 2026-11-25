// Hoffdak (Haarlem). Eigen domein hoffdak.nl geeft een foutmelding (Cloudflare 520/525, 25-11-2026): alles uit het Google-profiel.
// Google 5,0 uit 14 reviews. Logo zelf gemaakt (dakje + H). Foto's: hun Google-foto's. Geen voornaam bekend ("familie Hoff" in review).
window.SITE = {
  naam: "Hoffdak",
  plaats: "Haarlem",
  vak: "Dakdekker",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  logoOpFoto: "img/logo.svg",
  logoWit: "img/logo.svg",
  logoHoogte: 34,
  kleuren: { brand: "#1b2a2f", accent: "#d8894a" },
  telefoon: "06 20 01 96 43",
  telefoonIntl: "31620019643",
  waTekst: "Stuur een WhatsApp",
  adres: ["Conradkade 4c", "2031 CL Haarlem"],
  google: { score: "5,0", aantal: "14" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Familiebedrijf uit Haarlem. Bitumen daken, pannendaken, zinkwerk en dakrenovatie.",

  hero: {
    regels: ["Uw dak in", "goede handen,", "boven Haarlem."],
    tekst: "Familiebedrijf in daken. Van een nieuw bitumen dak tot een compleet vervangen pannendak, met een vrijblijvende offerte vooraf.",
    foto: "img/hero-dak-haarlem.jpg", fotoPos: "50% 40%", donker: true,
    fotoMobiel: "img/pannendak-werk.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Nieuw plat dak met uitzicht over Haarlem, gelegd door Hoffdak",
    punten: ["Familiebedrijf", "Vrijblijvende offerte", "Bitumen, pannen en zink"]
  },

  marquee: ["Bitumen daken", "Pannendaken", "Dakrenovatie", "Zinkwerk", "Schoorsteen-aansluitingen", "Houtrot herstellen", "Dakgoten"],

  intro: {
    kicker: "Over Hoffdak",
    tekst: "Een familiebedrijf dat elke dag op tijd op het dak staat. We leggen uit wat er nodig is, maken een duidelijke offerte en lossen onderweg problemen op in overleg met u.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "14", tel: 14, label: "Reviews op Google" },
      { getal: "Haarlem", label: "Thuisbasis" }
    ]
  },

  diensten: {
    titel: "Plat, schuin of zink",
    tekst: "Kleine reparatie of een compleet nieuw dak. U hoort vooraf eerlijk wat er mogelijk is.",
    items: [
      { naam: "Bitumen daken", soort: "Bitumen dak", foto: "img/plat-dak.jpg", pos: "50% 50%", tekst: "Platte daken gerenoveerd met nieuwe bitumen dakbedekking, strak gelegd met nette overlappen.",
        punten: ["Renovatie plat dak", "Nieuwe dakbedekking", "Nette overlappen"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak-werk.jpg", pos: "50% 40%", tekst: "Oude pannen eraf, het dak nagelopen en nieuwe pannen erop. Houtrot dat we tegenkomen herstellen we in overleg.",
        punten: ["Pannendak vervangen", "Houtrot vervangen", "In overleg met u"] },
      { naam: "Schoorstenen en aansluitingen", soort: "Schoorsteen / aansluiting", foto: "img/schoorsteen-bitumen.jpg", pos: "50% 55%", tekst: "Schoorstenen en dakdoorvoeren waterdicht ingewerkt in de nieuwe dakbedekking.",
        punten: ["Schoorsteen inwerken", "Dakdoorvoeren", "Waterdicht"] },
      { naam: "Zink en goten", soort: "Zink / goten", foto: "img/pannendak-goot.jpg", pos: "50% 50%", tekst: "Zinkwerk en goten langs het pannendak, netjes aangesloten op de rest van het dak.",
        punten: ["Zinkwerk", "Dakgoten", "Aansluitingen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk in Haarlem",
    tekst: "Platte daken boven de stad, pannendaken en de details die het verschil maken.",
    items: [
      { foto: "img/hero-dak-haarlem.jpg", label: "Plat dak", sub: "Met uitzicht over de stad", pos: "50% 45%" },
      { foto: "img/schoorsteen-aansluiting.jpg", label: "Schoorsteen", sub: "Ingewerkt in nieuwe bitumen", pos: "50% 40%" },
      { foto: "img/pannendak-goot.jpg", label: "Pannendak", sub: "Met nieuwe goot", pos: "50% 40%" },
      { foto: "img/dakrand-pannen.jpg", label: "Renovatie", sub: "Bitumen tot aan de pannen", pos: "50% 50%" },
      { foto: "img/dakrand.jpg", label: "Detail", sub: "Strakke dakrand", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Goed contact, elke dag",
    tekst: "Klanten op Google noemen het vaakst: duidelijke uitleg, elke ochtend op tijd en een oplossing voor elk probleem.",
    foto: "img/pannendak-werk.jpg", fotoPos: "50% 40%", fotoAlt: "Dakdekker van Hoffdak aan het werk op een pannendak",
    stappen: [
      { naam: "Stuur een bericht", tekst: "Vertel via WhatsApp wat er met uw dak is, het liefst met een paar foto's." },
      { naam: "Vrijblijvende offerte", tekst: "We komen langs, leggen de opties uit en maken een offerte met uw wensen." },
      { naam: "Elke dag op tijd", tekst: "Tijdens de klus houden we goed contact en bespreken we wat we tegenkomen." },
      { naam: "Strak opgeleverd", tekst: "Een dak dat er weer jaren tegen kan, netjes achtergelaten." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Na de vrijblijvende offerte en uitleg over onze 59 jaar oude dak zijn wij akkoord gegaan. Het team stond iedere dag klaar in de ochtend, hielden goed contact met ons. Voor elk probleem hadden ze een goede oplossing …", naam: "Samuel A." },
      { tekst: "Hoffdak heeft onze bitumen dak gerenoveerd. Super blij met het resultaat! Had goed contact met meneer, legde me alles goed en soepeltjes uit.", naam: "Jennifer v.d. P." },
      { tekst: "Onze dak laten doen met zink en dakpannen, wat een vakmanschap en een snelheid. Echt een familiebedrijf …", naam: "Sloopgigant" }
    ]
  },

  werkgebied: {
    titel: "Thuis in Haarlem",
    tekst: "We werken vanuit Haarlem. Twijfelt u of we bij u in de buurt komen? Stuur gerust een bericht."
  },

  band: {
    foto: "img/schoorsteen-bitumen.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Stuur een paar foto's via WhatsApp. Dan komen we langs voor een vrijblijvende offerte."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in of stuur direct een WhatsApp met een paar foto's.",
    formTitel: "Aanvraag",
    onderwerpen: ["Bitumen / plat dak", "Pannendak", "Zink / goten", "Schoorsteen", "Lekkage", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: ons platte dak is oud en moet gerenoveerd worden",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
