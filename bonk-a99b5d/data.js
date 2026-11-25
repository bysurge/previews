// Bonk Dienstverlening (Meppel, Barend Jan Mulder). Bron: bonkdienstverlening.nl (home + projectpagina's) + Google (5,0 / 1, opgehaald 25-11-2026).
// Hero = foto van Barend Jan van het eigen Google-profiel; overige foto's van de eigen site (projectgalerij).
// Maar 1 Google-review: geen score in de hero, wel de ene review als quote.
window.SITE = {
  naam: "Bonk Dienstverlening",
  kortNaam: "Bonk",
  plaats: "Meppel",
  vak: "Dakdekker",
  titelExtra: "Platte daken en dakonderhoud in Meppel",
  logo: "img/logo.jpg",
  logoOpFoto: "img/logo.jpg",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#1f2223", accent: "#e0281c" },
  telefoon: "06 12 69 63 39",
  telefoonIntl: "31612696339",
  waTekst: "App Barend Jan",
  waContact: "App Barend Jan, ook voor een foto van uw dak",
  email: "info@bonkdienstverlening.nl",
  adres: ["Meppel"],
  kvk: "66030099",
  ctaTekst: "Vrijblijvende offerte",
  navCta: "Offerte",
  voetTekst: "Lekkages, renovatie en vernieuwing van platte daken, voor particulieren en bedrijven in Meppel en omgeving.",

  hero: {
    badge: "Zelfstandig dakdekker sinds 2016",
    regels: ["Uw specialist", "in platte daken."],
    tekst: "Lekkage, renovatie of een compleet nieuw plat dak: Barend Jan Mulder doet het werk zoveel mogelijk zelf. Eerlijk advies, scherpe tarieven.",
    foto: "img/hero.jpg", fotoPos: "50% 30%", fotoPosMobiel: "45% 30%",
    fotoAlt: "Barend Jan Mulder van Bonk Dienstverlening aan het werk op een dak",
    donker: true,
    punten: ["Particulieren en bedrijven", "Gecertificeerd voor asbestsanering", "Duurzame materialen"]
  },

  marquee: ["Platte daken", "Lekkages", "Dakrenovatie", "Isolatie", "Lichtkoepels", "Dakkapellen", "Afdekkappen", "Dakonderhoud"],

  intro: {
    kicker: "Bonk Dienstverlening",
    tekst: "Geboren en getogen in Meppel, met jaren ervaring als dakdekker. Betrouwbaar en vakkundig werk, met eerlijk advies.",
    stats: [
      { getal: "2016", label: "Zelfstandig gestart in Meppel" },
      { getal: "264 m²", label: "Ketelhuisdak overlaagd voor KWS" },
      { getal: "160 m²", label: "Dak geïsoleerd en vernieuwd voor Lantinga" },
      { getal: "08-18", label: "Uur telefonisch bereikbaar" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Wat Bonk voor u doet",
    tekst: "Bonk voert het werk zoveel mogelijk zelf uit. Waar nodig schakelen we vakbekwame collega's uit de regio in.",
    items: [
      { naam: "Lekkages", foto: "img/plat-dak.jpg", pos: "50% 50%", soort: "Lekkage",
        tekst: "Lekt uw platte dak? We zoeken de oorzaak en lossen het vakkundig op.",
        punten: ["Particulier en zakelijk", "Afvoeren en ontluchtingen", "Eerlijk advies"] },
      { naam: "Renovatie en vernieuwing", foto: "img/bitumen-nieuw.jpg", pos: "50% 50%", soort: "Dakrenovatie",
        tekst: "Uw platte dak vernieuwd, in- of exclusief isolatie. Inclusief lichtkoepels, dakkapellen en afdekkappen.",
        punten: ["Met of zonder isolatie", "Lichtkoepels inwerken", "Afdekkappen plaatsen"] },
      { naam: "Dakonderhoud", foto: "img/kws.jpg", pos: "50% 50%", soort: "Dakonderhoud",
        tekst: "Onderhoud aan daken van bedrijven, scholen, sportaccommodaties en instellingen.",
        punten: ["Bedrijfsdaken", "Scholen en instellingen", "Duurzame materialen"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Daken in en rond Meppel",
    tekst: "Onder meer voor Restaurant Zizo, Lantinga Slagerij en Vershuis, KWS en Bouwbedrijf Oort.",
    items: [
      { foto: "img/winkeldak.jpg", label: "Bedrijfsdak", sub: "Nieuwe bitumineuze dakbedekking", pos: "50% 50%" },
      { foto: "img/isolatie.jpg", label: "Isolatie aangebracht", pos: "50% 50%" },
      { foto: "img/dakrand.jpg", label: "Dakrand afgewerkt", pos: "50% 50%" },
      { foto: "img/constructie.jpg", label: "Dakconstructie en isolatie", pos: "50% 50%" },
      { foto: "img/renovatie.jpg", label: "Dak vernieuwd", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werkt Bonk",
    tekst: "Bellen, appen of mailen: we nemen snel contact met u op.",
    foto: "img/afschot.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuw plat dak met afschotisolatie",
    stappen: [
      { naam: "Contact", tekst: "Bel tussen 08 en 18 uur, of stuur een WhatsApp of mail." },
      { naam: "Advies", tekst: "Barend Jan bekijkt uw dak en geeft eerlijk advies." },
      { naam: "Offerte", tekst: "Een vrijblijvende offerte met een scherp tarief." },
      { naam: "Uitvoering", tekst: "Vakkundig en betrouwbaar, met duurzame materialen." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Bonk heeft ons dak super netjes gerenoveerd. Wij zijn erg tevreden over het resultaat!", naam: "Oscar V." }
    ]
  },

  over: {
    kicker: "Wie is Bonk?", navNaam: "Over Bonk",
    titel: "Barend Jan Mulder, uit Meppel",
    rol: "Eigenaar Bonk Dienstverlening",
    tekst: [
      "Sinds 1977 geboren en getogen in het mooie Meppel. Jarenlang werkte ik in de podium- en steigerbouw, als dakdekker (platte daken en pannendaken) en als rioleringsspecialist.",
      "In 2016 haalde ik mijn certificaten voor asbestsanering en startte ik als zzp'er. Bedrijven en particulieren zijn van harte welkom voor renovatie of vernieuwing van hun platte dak."
    ],
    foto: "img/barend-jan.jpg", fotoPos: "50% 75%", fotoAlt: "Barend Jan Mulder op het dak",
    knop: "App Barend Jan"
  },

  contact: {
    titel: "Vraag een vrijblijvende offerte aan",
    tekst: "Bel gerust, of stuur een WhatsApp of mail. Dan nemen we snel contact met u op.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Lekkage", "Dakrenovatie", "Nieuw plat dak", "Dakonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze aanbouw lekt bij harde regen",
    belofte: "We nemen snel contact met u op."
  }
};
