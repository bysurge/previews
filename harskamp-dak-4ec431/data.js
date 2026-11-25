// Harskamp Dakdekkers (Meppel). Bron: harskampdakdekkers.nl (JouwWeb, druk, veel stock/sponsorlogo's) + Google 5,0 uit 3 (25-11-2026, helper p11).
// Alleen eigen projectfoto's gebruikt (geen Velux-/stockfoto's van hun site). Voornaam Harrie staat op hun site.
window.SITE = {
  naam: "Harskamp Dakdekkers",
  kortNaam: "Harskamp",
  plaats: "Meppel",
  vak: "Dakdekker",
  logo: "img/logo.png",
  logoVorm: "breed",
  logoWit: "img/logo-wit.png",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#1d1f22", accent: "#c8452f" },
  telefoon: "06 52 67 06 60",
  telefoonIntl: "31652670660",
  telefoon2: "0522 70 02 39",
  waTekst: "App Harrie",
  email: "info@harskampbouw.nl",
  adres: ["Oeverlandenweg 34", "Meppel / Staphorst"],
  kvk: "01130707",
  google: { score: "5,0", aantal: "3" },
  ctaTekst: "Vraag een offerte aan",
  navCta: "Offerte",
  voetTekst: "Dakwerk, zinkwerk en isolatie voor particulier en MKB in Meppel, Staphorst en omgeving. Sinds 1995.",

  hero: {
    regels: ["Uw dakpartner", "in de regio,", "sinds 1995."],
    tekst: "Platte en hellende daken, zinkwerk, dakkapellen en isolatie. Voor particulieren en het MKB, van renovatie tot nieuwbouw.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", donker: true,
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "55% 50%",
    fotoAlt: "Boerderij met een nieuw pannendak",
    punten: ["Sinds 1995", "Dak en zonnepanelen: één garantie", "Lekkage? Vandaag teruggebeld"]
  },

  marquee: ["Bitumen", "EPDM", "PVC", "Dakpannen", "Shingles", "Zinkwerk", "Dakkapellen", "Dakvensters", "Sedumdaken", "Isolatie"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Meld het via WhatsApp met een foto. We bellen u dezelfde dag terug om een afspraak te maken.",
    knop: "Bel Harrie"
  },

  intro: {
    kicker: "Over Harskamp",
    tekst: "Al sinds 1995 zijn we de dakpartner in Meppel en omgeving. We denken mee over de mooiste en beste oplossing, en leggen u onderweg alles helder uit. Ook als dat betekent dat een klus wat langer duurt.",
    stats: [
      { getal: "1995", label: "Dakpartner sinds" },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "R 7,2", label: "Isolatiewaarde bij een recent plat dak" }
    ]
  },

  diensten: {
    titel: "Wat we voor u doen",
    tekst: "Plat of hellend, renovatie of nieuwbouw. U krijgt advies dat past bij uw dak.",
    items: [
      { naam: "Platte daken", soort: "Plat dak", foto: "img/bitumen.jpg", pos: "50% 50%", tekst: "Bitumen, EPDM of PVC, met afschotisolatie zodat het water goed wegloopt. Voor woningen, bedrijfspanden en sportzalen.",
        punten: ["Bitumen, EPDM en PVC", "Afschotisolatie", "Noodoverlopen en afvoeren"] },
      { naam: "Pannendaken", soort: "Pannendak", foto: "img/pannendak.jpg", pos: "50% 40%", tekst: "Nieuwe dakpannen of sneldekkers, inclusief alle hulpstukken. Isolatie en extra hemelwaterafvoeren nemen we mee.",
        punten: ["Dakpannen en shingles", "Isolatie meenemen", "Alle hulpstukken"] },
      { naam: "Dakkapellen en dakvensters", soort: "Dakkapel / dakraam", foto: "img/dakkapel.jpg", pos: "50% 45%", tekst: "Vergunningsvrije dakkapellen en dakvensters van Velux, Fakro, Roto en Ubbink, netjes afgetimmerd.",
        punten: ["Dakkapellen en lichtkoepels", "Velux, Fakro, Roto, Ubbink", "Strak afgetimmerd"] },
      { naam: "Zinkwerk en dakgoten", soort: "Zinkwerk", foto: "img/zinkgoot.jpg", pos: "50% 50%", tekst: "Zinken dakgoten en afdekkappen. Dakgootbetimmering in onderhoudsarm Keralit, zodat schilderen verleden tijd is.",
        punten: ["Zinken dakgoten", "Keralit-betimmering", "Boeidelen en windveren"] },
      { naam: "Zonnepanelen en dakwerk", soort: "Zonnepanelen", foto: "img/zonnepanelen.jpg", pos: "50% 50%", tekst: "Dak en zonnepanelen in één hand, dus één garantie. Lekt er iets, dan wijst niemand naar een ander. Met advies over brandveiligheid.",
        punten: ["Eén garantiepartij", "Brandrisico-advies", "Ook voor het MKB"] },
      { naam: "Kleinbouw en onderhoud", soort: "Kleinbouw", foto: "img/overkapping.jpg", pos: "50% 50%", tekst: "Boeidelen, schoorstenen, loodwerk, isolatie en ook overkappingen en tuinhuizen.",
        punten: ["Schoorsteen en lood", "Overkappingen en tuinhuizen", "Onderhoud en valveiligheid"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Recent opgeleverd",
    tekst: "Van een boerderij in Staphorst tot een sportzaal in Drachten.",
    items: [
      { foto: "img/drone-boerderij.jpg", label: "Pannendak", sub: "Nieuw dak, gelegd met steiger rondom", pos: "50% 50%" },
      { foto: "img/plat-groot.jpg", label: "Plat dak", sub: "Nieuwe dakbedekking", pos: "50% 50%" },
      { foto: "img/boerderij-steiger.jpg", label: "Boerderij", sub: "Renovatie pannendak", pos: "50% 50%" },
      { foto: "img/drone-boven.jpg", label: "Van bovenaf", sub: "Pannen vervangen, zonnepanelen ernaast", pos: "50% 50%" },
      { foto: "img/overkapping.jpg", label: "Overkapping", sub: "Met plat dak en glazen wanden", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken we",
    tekst: "Klanten noemen het vaakst: alles in overleg, en een vakman die meedenkt.",
    foto: "img/hero-mobiel.jpg", fotoPos: "50% 50%", fotoAlt: "Dakdekkers van Harskamp leggen nieuwe dakpannen",
    stappen: [
      { naam: "Bel of app", tekst: "Vertel wat er speelt, het liefst met een paar foto's." },
      { naam: "Op het dak", tekst: "Harrie beoordeelt het dak en legt u uit wat hij ziet." },
      { naam: "Advies en offerte", tekst: "De beste oplossing, in overleg met u." },
      { naam: "Uitvoering", tekst: "Van inspectie tot laatste afwerking, alles geregeld." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Hary heeft de werkzaamheden beoordeeld en ons dak helemaal nagelopen. … Hij heeft mij continu meegenomen in zijn bevindingen waardoor het mij als leek ook allemaal duidelijk werd.", naam: "Henkjan L." },
      { tekst: "Een Super bedrijf met top personeel. Alles in overleg mogelijk en zijn bereid om mee te denken naar de mooiste, en beste oplossing.", naam: "Terrence S." }
    ]
  },

  over: {
    kicker: "Over Harskamp", navNaam: "Over ons",
    titel: "Harrie Harskamp",
    rol: "Dakdekker in Meppel, sinds 1995",
    tekst: [
      "Harskamp Daken is al sinds 1995 de dakpartner in de regio Meppel, voor particulieren en het MKB.",
      "Naast het dakwerk zijn we bekend van eigen vindingen, zoals de zonne-dakpan en het ankerpunt 'de Dakhaas'."
    ],
    foto: "img/bus.jpg", fotoPos: "50% 60%", fotoAlt: "De bus van Harskamp voor een woning met nieuw dak",
    knop: "Stuur Harrie een bericht"
  },

  werkgebied: {
    titel: "Meppel, Staphorst en verder",
    tekst: "Vanuit Meppel werken we in de hele regio, en soms verder weg.",
    plaatsen: ["Meppel", "Staphorst", "Zwolle", "Drachten"]
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    titel: "Toe aan een nieuw dak?",
    tekst: "Bel of app Harrie. Hij komt kijken en denkt met u mee."
  },

  contact: {
    titel: "Vertel wat er met uw dak is",
    tekst: "Vul het formulier in, of bel of app Harrie direct. Ma t/m vr van 8.00 tot 17.00 uur.",
    formTitel: "Aanvraag",
    onderwerpen: ["Plat dak", "Pannendak", "Zinkwerk / goten", "Dakkapel / dakraam", "Zonnepanelen", "Lekkage"],
    voorbeeld: "Bijvoorbeeld: ons pannendak is aan vervanging toe en we willen meteen isoleren",
    belofte: "We nemen zo snel mogelijk contact met u op."
  }
};
