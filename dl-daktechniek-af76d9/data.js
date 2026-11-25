// D&L Daktechniek (Den Helder). Bron: dldaktechniek.com (home, diensten, verhuur, contact, vacatures) + Google (4,4 / 14). Zie content.md.
// Foto's: hero-plat-dak.jpg en isolatie.jpg staan op hun eigen site maar zijn AI-/stockbeelden (geen eigen werk; alleen als sfeer gebruikt).
// Eigen foto: plat-dak.jpg (plat dak met schoorsteen). Logo uit hun visitekaartje (site).
window.SITE = {
  naam: "D&L Daktechniek",
  plaats: "Den Helder",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoWit: "img/logo-wit.png",
  logoHoogte: 54,
  kleuren: { brand: "#141a17", accent: "#4a9e4f" },
  telefoon: "0223 785 026",
  telBel: "+31223785026",
  whatsapp: false,
  email: "info@dldaktechniek.nl",
  adres: ["C. de Houtmanstraat 18a/18c", "1782 VB Den Helder"],
  google: { score: "4,4", aantal: "14" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakdekkersbedrijf met meer dan 20 jaar ervaring in bitumen dakbedekking, isolatie, zink- en loodwerk. Vanuit Den Helder in heel Noord-Holland.",

  hero: {
    regels: ["Platte daken,", "strak geregeld."],
    tekst: "Al meer dan 20 jaar renoveren we platte daken in de Kop van Noord-Holland: bitumen dakbedekking, isolatie, zink- en loodwerk en het herstellen van lekkages.",
    foto: "img/hero-plat-dak.jpg", fotoPos: "50% 40%", fotoPosMobiel: "62% 50%",
    fotoAlt: "Dakdekkers brengen nieuwe dakbedekking aan op een plat dak",
    donker: true,
    punten: ["Meer dan 20 jaar ervaring", "Reactie binnen 24 uur", "Particulier en zakelijk"]
  },

  marquee: ["Bitumen dakbedekking", "Platte daken", "Isolatie", "Daklekkages", "Zinken dakgoten", "Hemelwaterafvoeren", "Loodwerk", "Kraanverhuur", "Hoogwerker"],

  spoed: {
    titel: "Daklekkage?",
    tekst: "Bel ons direct. Voor dringende vragen zijn we ook in het weekend bereikbaar."
  },

  intro: {
    kicker: "Over D&L",
    tekst: "Een professioneel dakdekkersbedrijf uit Den Helder. Voor particulieren, VvE's, verzekeraars, vastgoedbeheerders en aannemers: kwaliteit en een duurzaam dak staan voorop.",
    stats: [
      { getal: "20+ jaar", label: "Ervaring in daktechniek" },
      { getal: "4,4", label: "Gemiddeld op Google" },
      { getal: "34 m", label: "Eigen kraan, ook te huur" },
      { getal: "24 uur", label: "Streeftijd voor een reactie" }
    ]
  },

  diensten: {
    titel: "Alles voor een waterdicht plat dak",
    tekst: "Vraag gerust een offerte aan. We stellen die op naar uw wensen, voor een kwalitatief en duurzaam dak.",
    items: [
      { naam: "Bitumen dakbedekking", soort: "Bitumen dakbedekking", foto: "img/plat-dak.jpg", pos: "50% 62%", tekst: "Hoogwaardige bitumen dakbedekking voor een duurzaam en waterdicht plat dak, professioneel aangebracht.",
        punten: ["Renovatie van platte daken", "Aansluitingen rond schoorsteen en opstanden", "Herstel van daklekkages"] },
      { naam: "Isolatie", soort: "Isolatie", foto: "img/isolatie.jpg", pos: "50% 45%", tekst: "Dakisolatie die warmteverlies beperkt en uw comfort verhoogt, met de beste materialen.",
        punten: ["Lagere energierekening", "Vaak mee bij een renovatie", "Voor woning en bedrijfspand"] }
    ],
    meer: [
      { naam: "Zink- en loodwerk", tekst: "Zinken dakgoten, hemelwaterafvoeren en loodwerk op maat: functioneel én netjes afgewerkt." },
      { naam: "Daklekkages", tekst: "Lekt uw dak? We sporen de oorzaak op en herstellen het vakkundig." },
      { naam: "Verkoop materiaal", tekst: "Dakbedekkingsmaterialen van goede kwaliteit, voor vakmensen én doe-het-zelvers." }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Duidelijk en zonder gedoe, van eerste contact tot oplevering.",
    stappen: [
      { naam: "Bel of mail", tekst: "Vertel ons wat er aan uw dak speelt. Op werkdagen zijn we bereikbaar van 08:00 tot 17:00." },
      { naam: "Snel antwoord", tekst: "We streven ernaar binnen 24 uur te reageren." },
      { naam: "Offerte op maat", tekst: "Een offerte naar uw wensen, met eerlijk advies over wat er echt nodig is." },
      { naam: "Strak afgeleverd", tekst: "Uitgevoerd door onze eigen specialisten, professioneel afgewerkt." }
    ]
  },

  garantie: {
    kicker: "Verhuur", navNaam: "Verhuur",
    titel: "Kraan en hoogwerker te huur",
    tekst: "Werken op hoogte, veilig en efficiënt. Onze eigen kraan en hoogwerker kunt u ook huren, met flexibele huurvoorwaarden voor de periode die bij uw project past.",
    lijst: {
      titel: "Ons materieel",
      punten: [
        "Kraan van 34 meter, ideaal voor dakrenovaties",
        "Elektrische hoogwerker van 21 meter",
        "Stil en zonder CO2-uitstoot, ook binnen te gebruiken",
        "Flexibel te huren, per project"
      ]
    }
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Fantastische snelle reaktie en kundig personeel voor mij hebben ze de dakpannen terug gelegd die na de laatste stormen waren verschoven. … zeker een aanrader.", naam: "Erik van Reek" },
      { tekst: "Op korte termijn kon D&L Daktechniek het dak vervangen van het dakkapel. Gedreven jongens en mooi en strak afgeleverd. Top!", naam: "Ben en Danies vd Mark" },
      { tekst: "Ik was van mening dat mn dakleer vernieuwd moest worden maar door eerlijke mening van het bedrijf bleek het niet te hoeven dat scheelt geld", naam: "Ron Bregman", sterren: 4 }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Daktechniek uit Den Helder",
    rol: "D&L Daktechniek, C. de Houtmanstraat 18a",
    tekst: [
      "Met meer dan 20 jaar ervaring in bitumen dakbedekking, zink- en loodwerk zijn we gespecialiseerd in het renoveren van platte daken, het isoleren ervan en het herstellen van daklekkages.",
      "We werken voor particulieren, verzekeraars, VvE's, vastgoedbeheerders en aannemingsbedrijven. Komt u liever langs? U bent van harte welkom voor een persoonlijk gesprek over uw dak."
    ],
    foto: "img/over-logo.jpg", fotoPos: "50% 50%", fotoAlt: "Logo van D&L Daktechniek",
    knop: "Neem contact op"
  },

  werkgebied: {
    titel: "Den Helder en heel Noord-Holland",
    tekst: "Vanuit onze vestiging in Den Helder werken we in de Kop van Noord-Holland en de rest van de provincie."
  },

  contact: {
    titel: "Vraag een offerte aan",
    tekst: "Bel, mail of laat hieronder een bericht achter. We streven ernaar binnen 24 uur te reageren.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Bitumen dakbedekking", "Isolatie", "Daklekkage", "Zink- en loodwerk", "Kraan of hoogwerker huren", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: de dakbedekking van onze uitbouw is aan vervanging toe, of het lekt bij de dakgoot",
    belofte: "We streven ernaar binnen 24 uur te reageren."
  }
};
