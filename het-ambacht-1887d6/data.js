// Onderhoudsbedrijf het Ambacht (Arnhem). Bron: onderhoudsbedrijfhetambacht.nl + Google (5,0 / 20, opgehaald 25-11-2026).
// Geen voornaam/KvK op eigen site. Generieke sfeerbeelden van hun site (o.a. dakdekker_spoed, dakkapel_renovatie_h1)
// mogelijk stock -> niet gebruikt; alleen hun eigen telefoonfoto's + Google-foto's.
window.SITE = {
  naam: "Onderhoudsbedrijf het Ambacht",
  kortNaam: "Het Ambacht",
  plaats: "Arnhem",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Arnhem en omgeving",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoOpFoto: "img/logo-op-foto.png",
  logoWit: "img/logo-op-foto.png",
  logoHoogte: 40,
  kleuren: { brand: "#17181b", accent: "#e39a17" },
  telefoon: "06 39 05 35 80",
  telefoonIntl: "31639053580",
  waTekst: "App het Ambacht",
  email: "info@onderhoudsbedrijfhetambacht.nl",
  adres: ["Schepen te Boeckoppad 37", "6831 HP Arnhem"],
  google: { score: "5,0", aantal: "20" },
  ctaTekst: "Gratis inspectie aanvragen",
  navCta: "Gratis inspectie",
  voetTekst: "Dakreparatie, onderhoud en renovatie in Arnhem en omgeving. 24/7 bereikbaar, met 10 jaar garantie op ons werk.",

  hero: {
    regels: ["Uw dak", "weer jaren", "waterdicht."],
    tekst: "Lekkage, een verouderd plat dak of een verschoven nok: Onderhoudsbedrijf het Ambacht lost het snel en vakkundig op, in Arnhem en omgeving.",
    foto: "img/hero.jpg", fotoPos: "50% 62%", fotoPosMobiel: "50% 60%",
    fotoAlt: "Nieuw gelegde bitumen dakbedekking op een plat dak in een achtertuin",
    donker: true,
    punten: ["10 jaar garantie", "24/7 bereikbaar", "Binnen 24 uur geholpen"]
  },

  marquee: ["Daklekkage", "Platte daken", "Pannendaken", "Dakkapellen", "Dakgoten", "Schoorstenen", "Dakrenovatie", "Vogeloverlast", "Dakonderhoud"],

  spoed: {
    titel: "Lekkage? Bel direct.",
    tekst: "Wij zijn 24 uur per dag, 7 dagen per week bereikbaar en helpen u binnen 24 uur. Stuur gerust een foto via WhatsApp."
  },

  intro: {
    kicker: "Onderhoudsbedrijf het Ambacht",
    tekst: "Duurzaam onderhoud met de beste materialen. Wij staan garant voor vakmanschap en een langdurig resultaat.",
    stats: [
      { getal: "5,0", label: "Gemiddeld uit 20 Google-reviews" },
      { getal: "10 jaar", label: "Garantie op ons werk" },
      { getal: "24/7", label: "Bereikbaar bij lekkage" },
      { getal: "Gratis", label: "Dakinspectie, binnen 24 uur" }
    ]
  },

  keurmerkenTitel: "Gecertificeerd en gegarandeerd",
  keurmerken: [
    { naam: "Erkende Dakdekker", sub: "Getoetst en gegarandeerd", logo: "img/erkend.png" },
    { naam: "VCA", sub: "Veilig werken", logo: "img/vca.png" },
    { naam: "10 jaar garantie", sub: "Op ons werk", logo: "img/garantie.png" }
  ],

  diensten: {
    knop: "Gratis inspectie",
    titel: "Alles voor uw dak",
    tekst: "Voor particulieren, VvE's, vastgoedbeheerders en ondernemers in Arnhem en omgeving.",
    items: [
      { naam: "Platte daken", foto: "img/plat-uitzicht.jpg", pos: "50% 60%", soort: "Bitumen",
        tekst: "Lekt uw platte dak of is de dakbedekking verouderd? Wij repareren, renoveren en vervangen platte daken met bitumineuze dakbedekking.",
        punten: ["Woning, uitbouw of garage", "Nieuwe ondergrond waar nodig", "Isolatie mee te nemen"] },
      { naam: "Pannendaken", foto: "img/nok-na.jpg", pos: "50% 50%", soort: "Hellende daken",
        tekst: "Wij vervangen kapotte pannen, zetten nokvorsten opnieuw vast en controleren alle aansluitingen.",
        punten: ["Nokvorsten vastzetten", "Pannen herleggen", "Aansluitingen gecontroleerd"] },
      { naam: "Daklekkage", foto: "img/schoorsteen-lood.jpg", pos: "50% 50%", soort: "24/7 spoed",
        tekst: "Wij sporen lekkages snel op en lossen ze duurzaam op, zodat u grotere schade en hoge kosten voorkomt.",
        punten: ["Binnen 24 uur geholpen", "Lood en zink rond schoorstenen", "Duurzaam opgelost"] }
    ],
    meer: [
      { naam: "Dakgoten", tekst: "Reinigen, herstellen en vervangen." },
      { naam: "Dakkapellen", tekst: "Boeidelen, zinken zijwangen, isolatie en lood." },
      { naam: "Vogeloverlast", tekst: "Duivenpinnen en wering, netjes geplaatst." }
    ]
  },

  voorNa: {
    titel: "Voor en na",
    tekst: "Sleep over de foto. Links hoe we het aantroffen, rechts hoe we het achterlieten.",
    items: [
      { naam: "Nok van een pannendak", voor: "img/nok-voor.jpg", na: "img/nok-na.jpg" },
      { naam: "Plat dak vernieuwd", voor: "img/plat-voor.jpg", na: "img/plat-na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Ons werk",
    titel: "Vakwerk in Arnhem en omgeving",
    tekst: "Een greep uit onze klussen, van plat dak tot zinkwerk.",
    items: [
      { foto: "img/plat-avond.jpg", label: "Plat dak vervangen", sub: "Met uitzicht over de regio", pos: "50% 55%" },
      { foto: "img/zink-dakkapel.jpg", label: "Zinkwerk dakkapel", pos: "50% 55%" },
      { foto: "img/uitbouw.jpg", label: "Uitbouw in bitumen", pos: "50% 50%" },
      { foto: "img/zinkwerk.jpg", label: "Zinken goot", pos: "50% 50%" },
      { foto: "img/bitumen.jpg", label: "Nieuwe dakbedekking", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Snel, eerlijk en zonder verrassingen.",
    foto: "img/plat-tijdens.jpg", fotoPos: "50% 50%", fotoAlt: "Nieuwe houten ondergrond op een plat dak",
    stappen: [
      { naam: "Contact", tekst: "Bel, mail of app een foto. Wij zijn 24/7 bereikbaar." },
      { naam: "Gratis inspectie", tekst: "Binnen 24 uur kijken we naar uw dak en geven we eerlijk advies." },
      { naam: "Vakwerk", tekst: "We werken netjes en nemen het afval mee." },
      { naam: "10 jaar garantie", tekst: "We laten het dak netjes achter, met 10 jaar garantie op ons werk." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Het personeel van het Ambacht is 2 dagen bezig geweest met het vernieuwen van 2 platte daken. Men denkt mee, men is vriendelijk, de communicatie is prima en over het eindresultaat zijn wij dik en dik tevreden.", naam: "Eddy B." },
      { tekst: "Wij zijn erg tevreden met de renovatie van onze dakkapel. Boeidelen, zinken zijwangen, isolatie en lood is weer helemaal in orde. … De heren werken zeer netjes, zijn vriendelijk en hebben oog voor detail.", naam: "B. M." },
      { tekst: "Vandaag hadden we met spoed een dakdekker nodig ivm lekkage. Onderhoudsbedrijf het Ambacht was betrouwbaar in het contact en heeft naar tevredenheid geholpen. … Dikke 10 voor service en klantvriendelijkheid.", naam: "Wout D." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Uw dakdekker in Arnhem",
    rol: "Onderhoudsbedrijf het Ambacht, Arnhem-Zuid",
    tekst: [
      "Vanuit Arnhem-Zuid helpen wij particulieren, VvE's, vastgoedbeheerders en ondernemers met alle soorten dakwerk: van een snelle reparatie tot een complete dakrenovatie.",
      "Met een deskundig team en jarenlange ervaring zorgen we voor betrouwbare oplossingen. Eerlijke prijzen, snelle service en 10 jaar garantie op ons werk."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 60%", fotoAlt: "De bus van Onderhoudsbedrijf het Ambacht",
    badge: "img/logo.png", badgeVrij: true,
    knop: "App het Ambacht"
  },

  werkgebied: {
    titel: "Dakdekker in Arnhem en omgeving",
    tekst: "Wij werken vanuit Arnhem-Zuid in Arnhem en de omliggende plaatsen.",
    plaatsen: ["Arnhem", "Velp", "Oosterbeek", "Huissen", "Westervoort", "Duiven", "Zevenaar", "Elst", "Bemmel", "Driel", "Renkum", "Wageningen"]
  },

  band: {
    foto: "img/plat-uitzicht.jpg", fotoPos: "50% 30%",
    titel: "Laat uw dak gratis inspecteren",
    tekst: "Voorkom onverwachte kosten. Plan vandaag een inspectie en u wordt binnen 24 uur geholpen."
  },

  contact: {
    titel: "Vraag een gratis inspectie aan",
    tekst: "Vertel kort wat er aan de hand is, of app direct een foto. Binnen 24 uur helpen we u verder.",
    formTitel: "Inspectie aanvragen",
    onderwerpen: ["Daklekkage", "Plat dak", "Pannendak", "Dakkapel", "Dakgoten", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: er staat water op ons platte dak en er is een vochtplek op het plafond",
    belofte: "Gratis inspectie, binnen 24 uur geholpen."
  }
};
