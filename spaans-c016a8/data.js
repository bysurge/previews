// Hoveniersbedrijf Spaans (Delft). Bron: hoveniersbedrijfspaans.nl (2015) + Google (4,6 / 35, 25-11-2026).
// Eigen foto's van hun site en Google-profiel. Eigenaar Rik Spaans staat op de site. Postadres: Sionsweg 10, Rijswijk.
window.SITE = {
  naam: "Hoveniersbedrijf Spaans",
  kortNaam: "Spaans Hovenier",
  vak: "Hovenier",
  plaats: "Delft",
  logo: "img/logo-icoon.png",
  logoVorm: "icoon",
  logoWit: "img/logo-wit.png",
  logoHoogte: 36,
  kleuren: { brand: "#2f4a2c", accent: "#8bb33a" },
  telefoon: "06 214 94 099",
  telefoonIntl: "31621494099",
  waTekst: "App Rik",
  email: "info@hoveniersbedrijfspaans.nl",
  adres: ["Sionsweg 10", "2286 KK Rijswijk"],
  google: { score: "4,6", aantal: "35" },
  voetTekst: "Ontwerp, aanleg en onderhoud in Delft en omgeving. Een tuin van kwaliteit, voor jaren van tuinplezier.",

  hero: {
    regels: ["Een tuin", "voor jaren van", "*tuinplezier.*"],
    tekst: "Ontwerp, aanleg en onderhoud in Delft en omgeving. Rik Spaans denkt met u mee, van de eerste tekening tot de laatste plant.",
    foto: "img/hero.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 55%",
    fotoAlt: "Nieuwe overkapping met houten vlonder in een tuin",
    badge: "Vrijblijvend langs voor een gesprek",
    donker: true,
    punten: ["Hovenier sinds 2012", "Ontwerp, aanleg en onderhoud"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Bestrating en terrassen", "Schuren en overkappingen", "Vlonders en schuttingen", "Tuinmeubels op maat"],

  intro: {
    kicker: "Hoveniersbedrijf Spaans",
    tekst: "Uw tuin is een *verlengstuk van uw huis.* Daarom betrek ik u bij elke stap, zodat het echt úw tuin wordt.",
    stats: [
      { getal: "2012", label: "Eigen bedrijf sinds" },
      { getal: "4,6", label: "Op Google, 35 reviews" },
      { getal: "1", label: "Vaste hovenier: Rik zelf" },
      { getal: "2 dagen", label: "Altijd binnen twee dagen reactie" }
    ]
  },

  diensten: {
    titel: "Van tekening tot *tuinplezier*",
    tekst: "Alles in en om de tuin uit één hand, ook als de tuin niet door mij is aangelegd.",
    items: [
      { naam: "Tuinontwerp", foto: "img/border.jpg", pos: "50% 60%", tekst: "Een tuin ontwerpen is maatwerk. Ik maak altijd eerst een tekening, afgestemd op uw wensen, uw huis en uw budget.",
        punten: ["Persoonlijk gesprek aan huis", "Conceptontwerp en offerte", "Voor elk budget"] },
      { naam: "Tuinaanleg", foto: "img/aanleg-water.jpg", pos: "50% 55%", tekst: "Van tekening naar praktijk: een nieuwe tuin of een complete renovatie, netjes en met kwalitatieve materialen.",
        punten: ["Bestrating en paden", "Borders en beplanting", "Vijvers en waterelementen"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Snoeiwerk, maaiwerk en onkruid wieden. Ook als uw tuin niet door mij is gemaakt.",
        punten: ["Snoeien", "Maaien", "Onkruid wieden"] },
      { naam: "Bouwprojecten in de tuin", foto: "img/overkapping.jpg", pos: "50% 50%", tekst: "Schuurtjes, schuttingen, terrassen, veranda's, pergola's, hekken, tuindeuren en muurtjes, in overleg op maat.",
        punten: ["Schuren en overkappingen", "Schuttingen en hekken", "Vlonders en terrassen"] },
      { naam: "Tuinmeubels op maat", foto: "img/meubilair.jpg", pos: "50% 50%", tekst: "Uniek tuinmeubilair, nergens te koop en met de hand gemaakt. Vooral in hout, maar ook andere materialen.",
        punten: ["Banken met bergruimte", "Tafels en stoelen", "Opbergkisten"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen waar ik *trots op ben*",
    tekst: "Een greep uit tuinen die ik ontwierp, aanlegde of onderhoud.",
    items: [
      { foto: "img/achtertuin.jpg", label: "Groene achtertuin", sub: "Aanleg en beplanting", pos: "50% 60%" },
      { foto: "img/terras.jpg", label: "Terras in gebakken klinkers", sub: "Bestrating", pos: "50% 60%" },
      { foto: "img/vijver.jpg", label: "Vijver met natuursteen", sub: "Aanleg", pos: "50% 50%" },
      { foto: "img/grindpad.jpg", label: "Grindpad langs de border", sub: "Aanleg", pos: "50% 60%" },
      { foto: "img/zijpad.jpg", label: "Zijpad met beplanting", sub: "Aanleg", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "In 3 stappen naar *een nieuwe tuin*",
    tekst: "Uw wensen staan centraal, aangevuld met mijn professionele kijk op tuinen.",
    foto: "img/tuinhuis.jpg", fotoPos: "50% 60%", fotoAlt: "Tuin met tuinhuis en picknicktafel",
    stappen: [
      { naam: "Kennismaken bij u thuis", tekst: "We maken een afspraak en ik kom vrijblijvend bij u langs." },
      { naam: "Ontwerp en offerte", tekst: "We bespreken uw wensen, daarna maak ik een conceptontwerp en een offerte." },
      { naam: "Aan de slag", tekst: "Na uw akkoord leg ik de tuin aan. Netjes, met zo min mogelijk overlast voor u en de buren." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Rik heeft onze wensen mooi kunnen omzetten in een ontwerp voor voor- en achtertuin. … Het is allemaal netjes afgewerkt met kwalitatief mooie materialen. Rik heeft veel verstand van zaken, is betrouwbaar en heeft ons heel fijn geadviseerd.", naam: "Amy v. B." },
      { tekst: "Rik is een echte vakman. Hij levert goed werk af, denkt mee, is vriendelijk en communicatief sterk. Ik heb niet eerder iemand meegemaakt die zo netjes werkt.", naam: "Floor" },
      { tekst: "Supervriendelijke, hardwerkende en kundige hoveniers, met een persoonlijke touch. Delen graag hun kennis als je dat wilt en werken graag vanuit duurzame gedachte.", naam: "Patricia G." }
    ]
  },

  over: {
    kicker: "Over Rik", navNaam: "Over Rik",
    titel: "Rik *Spaans*",
    rol: "Hovenier en eigenaar",
    tekst: [
      "Al van kleins af aan wilde Rik hovenier worden. Na de tuinbouwschool en het mbo Tuin, Park en Landschap werkte hij vijf jaar als meewerkend voorman bij een erkend hoveniersbedrijf bij Delft.",
      "Op 1 april 2012 begon hij zijn eigen bedrijf. Hij woont en werkt in Delft en gaat altijd voor oprechte aandacht voor uw wensen en kwaliteit in materialen. Uw tuin is zijn belangrijkste visitekaartje."
    ],
    foto: "img/rik.jpg", fotoPos: "50% 30%", fotoAlt: "Rik Spaans",
    knop: "Stuur Rik een bericht"
  },

  band: {
    foto: "img/aanleg-water.jpg", fotoPos: "50% 50%",
    titel: "Bijzondere tuinprojecten? *Daag Rik uit.*",
    tekst: "Rik komt graag vrijblijvend bij u langs voor een goed gesprek over uw tuin."
  },

  contact: {
    titel: "Maak een *afspraak*",
    tekst: "Laat uw gegevens en vraag achter, of app Rik direct een foto van uw tuin. U krijgt altijd binnen twee dagen reactie.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Schuur, schutting of terras", "Tuinmeubels op maat", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw aanleggen, met een overkapping en meer groen"
  }
};
