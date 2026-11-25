// LS Daken (Gilze). GEEN eigen website: alles uit het Google-profiel (25-11-2026). Google 4,5 uit 32 reviews.
// Logo nagetekend naar het watermerk op hun dronefoto (g01). Foto's: hun Google-foto's. "Leo" alleen uit reviews (niet als aanhef).
window.SITE = {
  naam: "LS Daken",
  plaats: "Gilze",
  vak: "Dakdekker",
  logo: "img/logo.svg",
  logoVorm: "breed",
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoMetNaam: false,
  logoHoogte: 42,
  kleuren: { brand: "#1e2a33", accent: "#d39a4a" },
  telefoon: "06 26 00 57 16",
  telefoonIntl: "31626005716",
  waTekst: "Stuur een WhatsApp",
  adres: ["Voortstraat 17", "5126 EM Gilze"],
  google: { score: "4,5", aantal: "32" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekker uit Gilze. Platte daken, dakrenovatie, daklichten, isolatie, schoorstenen en loodwerk. Voor particulier en bedrijf.",

  hero: {
    regels: ["Een dak dat", "er weer jaren", "tegen kan."],
    tekst: "Dakdekker uit Gilze. Van inspectie tot oplevering: duidelijke afspraken, strak werk en alles netjes opgeruimd.",
    foto: "img/hero-drone.jpg", fotoPos: "50% 50%", fotoPosMobiel: "62% 50%", donker: true,
    fotoAlt: "Dronefoto van een nieuw plat dak op een woning, gelegd door LS Daken",
    punten: ["Platte en hellende daken", "Particulier en zakelijk", "Netjes opgeruimd"]
  },

  marquee: ["Platte daken", "Dakrenovatie", "Bitumen", "Daklichten", "Dakisolatie", "Schoorstenen", "Loodwerk", "Lekkages"],

  intro: {
    kicker: "Over LS Daken",
    tekst: "Van de inspectie tot het laatste restje dat we opruimen: u weet waar u aan toe bent. Woning, uitbouw of bedrijfspand, we leggen een dak dat er weer jaren tegen kan.",
    stats: [
      { getal: "4,5", label: "Gemiddeld op Google" },
      { getal: "32", tel: 32, label: "Reviews op Google" },
      { getal: "Gilze", label: "Thuisbasis" }
    ]
  },

  diensten: {
    titel: "Van inspectie tot nieuw dak",
    tekst: "Plat of schuin, groot of klein. U krijgt eerlijk advies over wat uw dak echt nodig heeft.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/bungalow.jpg", pos: "50% 45%", tekst: "Nieuwe bitumen dakbedekking op woning, uitbouw, garage of tuinhuis. Strak tot in de randen afgewerkt.",
        punten: ["Bitumen dakbedekking", "Uitbouw en garage", "Strakke dakranden"] },
      { naam: "Dakrenovatie en isolatie", soort: "Dakrenovatie", foto: "img/daklicht.jpg", pos: "50% 50%", tekst: "Het oude dak eraf, betere isolatie erin en een nieuw daklicht erop. Vaak binnen een week na de inspectie geregeld.",
        punten: ["Isolatie vervangen", "Nieuwe daklichten", "Snel ingepland"] },
      { naam: "Schoorstenen en loodwerk", soort: "Schoorsteen / lood", foto: "img/dak-van-boven.jpg", pos: "40% 40%", tekst: "Schoorsteen schoongemaakt en gerepareerd, met nieuwe loodslabben zodat hij weer waterdicht is.",
        punten: ["Schoorsteen herstellen", "Nieuwe loodslabben", "Waterdicht"] },
      { naam: "Zakelijke daken", soort: "Zakelijk dak", foto: "img/plat-dak-bedrijf.jpg", pos: "50% 50%", tekst: "Ook grote platte daken op bedrijfspanden, scholen en paviljoens, inclusief lichtstraten.",
        punten: ["Bedrijfspanden", "Grote oppervlakken", "Lichtstraten"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk, van boven bekeken",
    tekst: "Woningen, uitbouwen en bedrijfsdaken in Gilze en omgeving.",
    items: [
      { foto: "img/hero-drone.jpg", label: "Woning", sub: "Nieuw plat dak op de uitbouw", pos: "50% 50%" },
      { foto: "img/paviljoen.jpg", label: "Paviljoen", sub: "Nieuwe dakbedekking rondom", pos: "50% 50%" },
      { foto: "img/lichtstraat.jpg", label: "Bedrijfsdak", sub: "Met lichtstraat", pos: "50% 50%" },
      { foto: "img/school-dak.jpg", label: "Groot plat dak", sub: "Strak tot in de randen", pos: "50% 50%" },
      { foto: "img/bungalow.jpg", label: "Bungalow", sub: "Plat dak met nieuwe dakrand", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Duidelijk en snel geregeld",
    tekst: "Klanten op Google noemen het vaakst: snelle communicatie, een scherpe prijs en alles keurig opgeruimd.",
    foto: "img/daklicht.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw plat dak met daklicht, gelegd door LS Daken",
    stappen: [
      { naam: "Stuur een bericht", tekst: "Vertel via WhatsApp wat er met uw dak is, het liefst met een paar foto's." },
      { naam: "Inspectie", tekst: "We bekijken het dak en zeggen eerlijk wat nodig is, en wat niet." },
      { naam: "Duidelijke offerte", tekst: "U weet vooraf wat het kost. Vaak kunnen we snel beginnen." },
      { naam: "Opgeruimd opgeleverd", tekst: "Na afloop ruimen we alles op, tot het laatste restje." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Van inspectie tot offerte tot uitvoer. Duidelijke en snelle communicatie, scherpe prijs, stipt, orde en netheid maar vooral vriendelijk en meedenkend. Mijn dak kan er weer jaren tegenaan.", naam: "Fabian K." },
      { tekst: "Ons platte dak was hard aan vervanging toe, en Leo heeft het prachtig in orde gemaakt! Het ziet er nu weer heel strak uit met een nieuw daklicht en nieuwe dakbedekking. …", naam: "Annet N." },
      { tekst: "Leo heeft mijn schoorsteen uit 1960 schoongemaakt, gerepareerd en nieuwe loodslabben geplaatst. Fijn dat ie nu weer waterdicht is én het ziet er heel strak en als nieuw uit.", naam: "Kristel B." }
    ]
  },

  werkgebied: {
    titel: "Thuis in Gilze",
    tekst: "We werken vanuit Gilze. Twijfelt u of we bij u in de buurt komen? Stuur gerust een bericht."
  },

  band: {
    foto: "img/school-dak.jpg", fotoPos: "50% 50%",
    titel: "Lekkage of toe aan een nieuw dak?",
    tekst: "Stuur een paar foto's via WhatsApp. Dan hoort u snel wat we voor u kunnen doen."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in of stuur direct een WhatsApp met een paar foto's.",
    formTitel: "Aanvraag",
    onderwerpen: ["Plat dak", "Dakrenovatie", "Daklicht / isolatie", "Schoorsteen / lood", "Lekkage", "Zakelijk dak"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze uitbouw is aan vervanging toe",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
