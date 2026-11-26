// De Beuk er in! (Tilburg). Bron: de-beuk-er-in.nl + Google (5,0 / 3), 26-11-2026.
// Foto's: alleen hun eigen projectfoto's (de JouwWeb-sfeerfoto's van Pexels NIET gebruikt). Reviews: Google + reacties op hun eigen site.
window.SITE = {
  naam: "De Beuk er in!",
  kortNaam: "De Beuk er in!",
  vak: "Hovenier",
  plaats: "Tilburg",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoHoogte: 38,
  kleuren: { brand: "#2a3b2c", accent: "#b46f2e" },
  telefoon: "06 39 20 80 93",
  telefoonIntl: "31639208093",
  waTekst: "App Loyd",
  email: "info@de-beuk-er-in.nl",
  google: { score: "5,0", aantal: "3" },
  voetTekst: "Hoveniersbedrijf in Tilburg. Specialist in sierbestrating en groen: aanleg, ontwerp, grondwerk, onderhoud en herstel.",

  hero: {
    regels: ["De juiste balans", "tussen grijs", "*en groen.*"],
    tekst: "Loyd van Beukering en zijn team leggen tuinen aan in Tilburg: strakke sierbestrating, beplanting die bij u past en alles daartussen. Van begin tot eind.",
    foto: "img/hero.jpg", fotoPos: "50% 75%", fotoPosMobiel: "40% 70%",
    fotoAlt: "Ronde staptegels in grind met gazon en een vuurschaal",
    donker: true,
    punten: ["Sinds 2012 in het vak", "Van ontwerp tot onderhoud"]
  },

  marquee: ["Sierbestrating", "Tuinaanleg", "Ontwerp", "Grondwerk", "Tuinonderhoud", "Herstel", "Pergola's", "Beplanting"],

  intro: {
    kicker: "Over De Beuk er in!",
    tekst: "Een tuin is een *verlengstuk* van uw huis. Bestrating die tientallen jaren meegaat, beplanting die past bij u en bij de plek. Zo geniet u nog jaren van uw tuin zoals hij bedoeld is.",
    stats: [
      { getal: "5,0", label: "Op Google" },
      { getal: "2012", label: "Tuinen aanleggen sinds" },
      { getal: "2023", label: "Eigen bedrijf" }
    ]
  },

  diensten: {
    titel: "Van ontwerp tot *herstel*",
    tekst: "Wij zijn veelzijdig inzetbaar. Van de eerste schets tot het onderhoud, en ook als er iets hersteld moet worden.",
    items: [
      { naam: "Sierbestrating", foto: "img/terras.jpg", tekst: "Strakke (sier)bestrating van hoge kwaliteit. Goed uitmeten, goed grondwerk en nauwkeurig werken zijn de basis, voor een egaal resultaat met goede afwatering.",
        punten: ["Terrassen en paden", "Keramische tegels", "Goede afwatering"] },
      { naam: "Tuinaanleg", foto: "img/staptegels.jpg", tekst: "We luisteren naar uw wensen en bespreken de mogelijkheden. Van concept tot realisatie, zonder dat u lang in een bouwplaats zit.",
        punten: ["Complete tuinen van a tot z", "Beplanting die bij u past", "Hout- en tegelwerk"] },
      { naam: "Ontwerp", foto: "img/tegelpad.jpg", tekst: "Waar bouw en natuur samenkomen, kijken we naar alle aspecten zodat er harmonie ontstaat. In samenwerking met Kei Groen.",
        punten: ["Balans tussen grijs en groen", "Weersbestendig", "Groeiwijze op lange termijn"] },
      { naam: "Grondwerk", foto: "img/team.jpg", tekst: "Bodem is basis. Elke tuin is anders, dus we kijken naar de beste opbouw voor uw situatie.",
        punten: ["Goede ondergrond", "Uitmeten en egaliseren", "Opbouw per situatie"] },
      { naam: "Tuinonderhoud en herstel", foto: "img/pergola.jpg", pos: "50% 40%", tekst: "We kijken wat uw planten nodig hebben om gezond oud te worden. En is een tuin niet naar wens of versleten? Dan herstellen we het.",
        punten: ["Onderhoud op maat", "Herstelwerk", "Alles schoon opgeleverd"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Portfolio",
    titel: "Werk van *De Beuk er in!*",
    tekst: "Een greep uit tuinen die we aanlegden en bestraatten in Tilburg en omgeving.",
    items: [
      { foto: "img/tuin-vuurschaal.jpg", label: "Tuin met staptegels en vuurschaal", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/pergola.jpg", label: "Pergola van boomstammen", sub: "Aanleg", pos: "50% 35%" },
      { foto: "img/tegelpad.jpg", label: "Tegelpad naar de voordeur", sub: "Sierbestrating" },
      { foto: "img/terras.jpg", label: "Verhoogd terras", sub: "Sierbestrating" },
      { foto: "img/team.jpg", label: "Het team aan het werk", sub: "Grondwerk", pos: "60% 50%" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Loyd heeft onze tuin prachtig aangelegd, veel meer groen én een hele mooie pergola als eyecatcher. De communicatie verliep erg goed en vlot. We waren erg blij met Loyds enthousiasme en zijn brede kennis van zowel beplanting als hout- en tegelwerk.", naam: "Sophie K." },
      { tekst: "Zeer blij met onze nieuwe bestrating, Loyd is vriendelijk en uiterst secuur in zijn werk, weet waar hij het over heeft, ook de mensen die met hem werken zijn vriendelijk en prettig in de omgang.", naam: "Lauran G." },
      { tekst: "Met kennis, kracht en altijd goeie zin wordt mijn tuin met bomen al jaren zeer goed verzorgd!", naam: "Alice V." },
      { tekst: "Absolute aanrader, allround hovenier. Fijne kundige vakman. … Heeft prachtig werk geleverd en oh ja werkt met toffe ontspannen muziek lekker door.", naam: "Niels" }
    ]
  },

  over: {
    kicker: "Over Loyd", navNaam: "Over ons",
    titel: "Loyd van *Beukering*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Loyds liefde voor tuinieren begon al jong, toen hij zijn oma hielp in de tuin. Sinds 2012 legt hij complete tuinen aan en onderhoudt hij ze, van a tot z.",
      "In 2023 begon hij voor zichzelf, om zijn eigen visie en kwaliteit uit te dragen. Persoonlijk en eerlijk: u moet zich gehoord voelen. En bij De Beuk er in! doen de dames niet onder voor de mannen."
    ],
    foto: "img/team.jpg", fotoPos: "60% 50%", fotoAlt: "Het team van De Beuk er in! tijdens het grondwerk",
    knop: "Stuur Loyd een bericht"
  },

  band: {
    foto: "img/tuin-vuurschaal.jpg", fotoPos: "50% 70%",
    titel: "Tijd voor uw *droomtuin?*",
    tekst: "Neem contact op en ontdek wat we voor uw tuin kunnen doen."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. Loyd neemt snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Sierbestrating", "Tuinaanleg", "Ontwerp", "Grondwerk", "Onderhoud of herstel", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: nieuwe bestrating in de achtertuin en een border langs de schutting"
  }
};
