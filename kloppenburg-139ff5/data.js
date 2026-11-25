// Kloppenburg Dakwerken (Zwartemeer, Drenthe). Bron: kloppenburgdakwerken.nl (Odoo-sjabloonsite) + Google-profiel (25-11-2026).
// Google 4,9 uit 13 reviews. Logo nagetekend naar hun sticker (g06). Foto's: eigen site + Google.
// NIET gebruikt: de sjabloon-cijfers (90% / 95% / 75%) en de testimonials van hun site (lijken sjabloontekst, niet te controleren).
window.SITE = {
  naam: "Kloppenburg Dakwerken",
  kortNaam: "Kloppenburg",
  plaats: "Zwartemeer",
  vak: "Dakdekker",
  logo: "img/logo.svg",
  logoVorm: "breed",
  logoOpFoto: "img/logo-wit.svg",
  logoWit: "img/logo-wit.svg",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#1c1d20", accent: "#d9343a" },
  telefoon: "06 51 35 44 26",
  telefoonIntl: "31651354426",
  waTekst: "Stuur een WhatsApp",
  email: "g.kloppenburg2@hotmail.com",
  adres: ["De Blokken 30", "7894 CL Zwartemeer"],
  google: { score: "4,9", aantal: "13" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Bitumineuze dakwerken in Drenthe en omgeving Zwartemeer. Renovatie, lekkages, onderhoud en isolatie.",

  hero: {
    regels: ["Uw dak,", "ons vak."],
    tekst: "Bitumineuze dakbedekking voor particulieren, bedrijven en aannemers in Drenthe. Nieuwbouw, renovatie, onderhoud en isolatie.",
    foto: "img/hero-dak.jpg", fotoPos: "50% 50%", donker: true,
    fotoMobiel: "img/hero-zonsondergang.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Plat dak in aanbouw met rollen bitumen, door Kloppenburg Dakwerken",
    punten: ["Specialist in bitumen", "Tot 10 jaar garantie", "Particulier en zakelijk"]
  },

  marquee: ["Bitumen dakbedekking", "Dakrenovatie", "Lekkage en reparatie", "Dakonderhoud", "Dakisolatie", "Nieuwbouw", "Drenthe"],

  intro: {
    kicker: "Over Kloppenburg",
    tekst: "Wij zijn gespecialiseerd in bitumineuze dakbedekking, voor nieuwbouw en renovatie. Voor aannemers, fabrieken en particulieren, met heldere offertes en duidelijke afspraken.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "10 jaar", label: "Garantie, bij goed onderhoud" },
      { getal: "Drenthe", label: "Werkgebied" }
    ]
  },

  voorNa: {
    titel: "Zie het verschil",
    tekst: "Sleep over de foto. Links het oude dak, rechts de nieuwe bitumen dakbedekking.",
    items: [
      { naam: "Plat dak aanbouw", voor: "img/voor.jpg", na: "img/na.jpg" }
    ]
  },

  diensten: {
    titel: "Alles voor uw platte dak",
    tekst: "Met onze ervaring in bitumen dakbedekking zorgen we dat uw dak weer jaren waterdicht is.",
    items: [
      { naam: "Dakrenovatie", soort: "Dakrenovatie", foto: "img/renovatie-bezig.jpg", pos: "50% 50%", tekst: "Verouderde of beschadigde daklagen eraf en een sterke, waterdichte opbouw erop. Voor woning, bedrijfspand of fabriek.",
        punten: ["Oude lagen verwijderd", "Waterdichte opbouw", "Woning en bedrijf"] },
      { naam: "Lekkage en reparatie", soort: "Lekkage", foto: "img/doorvoeren.jpg", pos: "50% 50%", tekst: "Last van een lekkage of vochtplekken? We sporen het lek op en herstellen het, klein of groot.",
        punten: ["Lek opsporen", "Snel hersteld", "Verdere schade voorkomen"] },
      { naam: "Onderhoud", soort: "Onderhoud", foto: "img/dak-lang.jpg", pos: "50% 50%", tekst: "We controleren uw dak op scheuren, slijtage en verstoppingen en doen kleine reparaties direct.",
        punten: ["Periodieke controle", "Kleine reparaties", "Langere levensduur"] },
      { naam: "Isolatie", soort: "Isolatie", foto: "img/uitbouw-nieuw.jpg", pos: "50% 50%", tekst: "Dakisolatie in combinatie met bitumen dakbedekking, voor een comfortabel binnenklimaat en minder energieverlies.",
        punten: ["Isolatie + dakbedekking", "Minder energieverlies", "Advies op maat"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Ons werk in Drenthe",
    tekst: "Van garage en aanbouw tot het dak van een bedrijfspand.",
    items: [
      { foto: "img/groot-plat-dak.jpg", label: "Bedrijfsdak", sub: "Nieuwe bitumen dakbedekking", pos: "50% 50%" },
      { foto: "img/dak-lucht.jpg", label: "Plat dak", sub: "Strak tot aan de rand", pos: "50% 70%" },
      { foto: "img/dakrand.jpg", label: "Dakrand", sub: "Met nieuwe daktrim", pos: "50% 50%" },
      { foto: "img/garage.jpg", label: "Garage", sub: "Klein dak, zelfde zorg", pos: "50% 50%" },
      { foto: "img/bedrijfsdak.jpg", label: "In uitvoering", sub: "Laag voor laag waterdicht", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Laag voor laag waterdicht",
    tekst: "Geen snelle lapmiddelen, maar secuur werk met goede materialen.",
    foto: "img/hero-zonsondergang.jpg", fotoPos: "50% 40%", fotoAlt: "Nieuw plat dak bij zonsondergang",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er met uw dak is, het liefst met een paar foto's." },
      { naam: "Heldere offerte", tekst: "U krijgt inzicht in werkzaamheden, kosten en voorwaarden." },
      { naam: "Oud eraf, nieuw erop", tekst: "Een kaal dak is het beste begin. Daarna bouwen we het laag voor laag weer op." },
      { naam: "Strak opgeleverd", tekst: "Lekvrij en sterk, met tot 10 jaar garantie bij goed onderhoud." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Voor mooi en goed waterdicht dak is dit het bedrijf...", naam: "Dennis V." },
      { tekst: "Perfecte dak-reparatie en het kostte… niets. Alle lof!", naam: "Frank O." },
      { tekst: "Top bedrijf, goede service en kwaliteit.", naam: "Richard H." }
    ]
  },

  werkgebied: {
    titel: "Thuis in Drenthe",
    tekst: "We werken vanuit Zwartemeer, in Drenthe en omgeving. Twijfelt u of we bij u in de buurt komen? Stuur gerust een bericht."
  },

  band: {
    foto: "img/groot-plat-dak.jpg", fotoPos: "50% 50%",
    titel: "Lekt uw dak of is het toe aan vervanging?",
    tekst: "Stuur een paar foto's via WhatsApp. Dan hoort u snel wat we voor u kunnen doen."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in of stuur direct een WhatsApp met een paar foto's.",
    formTitel: "Aanvraag",
    onderwerpen: ["Dakrenovatie", "Lekkage", "Onderhoud", "Isolatie", "Nieuwbouw", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: het platte dak van onze garage lekt",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
