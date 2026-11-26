// Doen met Groen (Leeuwarden). Bron: doen-met-groen.nl (One.com-sitebouwer, 26-11-2026) + Google (5,0 uit 8, Koekoekstraat 9 Leeuwarden).
// Foto's: eigen foto's van hun site (boom, schutting, shovel) + foto's van hun Google-profiel. De stock-hero van hun site (bouwtekening) NIET gebruikt.
// Geen logo op hun site -> eenvoudig woordmerk gemaakt met hun eigen slogan. Voornaam (Jeroen) staat alleen in Google-reviews, niet op hun site -> bedrijfsnaam.
window.SITE = {
  naam: "Doen met Groen",
  kortNaam: "Doen met Groen",
  vak: "Hovenier",
  plaats: "Leeuwarden",
  logo: "img/logo.svg",
  logoWit: "img/logo-wit.svg",
  logoOpFoto: "img/logo-wit.svg",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 40,
  kleuren: { brand: "#38431f", accent: "#8f9a3a" },
  telefoon: "06 12 39 92 08",
  telefoonIntl: "31612399208",
  waTekst: "Stuur een app",
  email: "info@doen-met-groen.nl",
  adres: ["Koekoekstraat 9", "8916 BK Leeuwarden"],
  google: { score: "5,0", aantal: 8 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Werken in het groen voor mens en natuur. Tuinaanleg, onderhoud, boomverzorging en grondverzet in Leeuwarden en omgeving.",

  hero: {
    regels: ["Werken in het groen", "voor mens", "*en natuur.*"],
    tekst: "Tuinaanleg, onderhoud, boomverzorging en grondverzet in Leeuwarden. Met vakmanschap, persoonlijke aandacht en oog voor klimaat en duurzaamheid.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "70% 50%", donker: true,
    fotoAlt: "Tuin met houten vlonder, loungebank en beplanting",
    punten: ["5,0 op Google", "Vrijblijvende offerte"],
    notitie: { label: "Nu in de planning", tekst: "Bomen snoeien en kappen, nu het blad eraf is" }
  },

  marquee: ["Tuinaanleg", "Boomverzorging", "Grondverzet", "Tuinonderhoud", "Schuttingen", "Pergola's", "Drainage", "Klussen rond het huis"],

  intro: {
    kicker: "Doen met Groen",
    tekst: "Groenprojecten met precisie aangelegd en onderhouden *met respect voor de natuur.* Vriendelijk, duidelijk, betrouwbaar en gedreven.",
    stats: [
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "8", label: "Reviews op Google" },
      { getal: "110 cm", label: "Doorgang is genoeg voor de mini shovel" },
      { getal: "Ma–vr", label: "Van 8 tot 17 uur" }
    ]
  },

  diensten: {
    titel: "Wat ik *voor u doe*",
    tekst: "Van een nieuwe tuin tot een boom die eruit moet. Vraag gerust een offerte op maat.",
    items: [
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Tuinen aanleggen waarbij kwaliteit vanzelfsprekend is. Ook voor pergola's, schuttingen, bloembakken en tuinpaden kunt u bij mij terecht.",
        punten: ["Nieuwe tuin of renovatie", "Schuttingen en pergola's", "Tuinpaden en drainage"] },
      { naam: "Boomverzorging", foto: "img/boom.jpg", pos: "50% 35%", tekst: "Snoeien, kappen en verwijderen van bomen, met aandacht voor de gezondheid van de boom en de omgeving. Op moeilijk bereikbare plekken snoei ik klimmend.",
        punten: ["Snoeien", "Kappen en verwijderen", "Klimmend snoeien"] },
      { naam: "Grondverzet", foto: "img/shovel.jpg", pos: "50% 55%", tekst: "Met mijn compacte mini shovel werk ik in de meeste achtertuinen met een doorgang van 110 cm. Waar nodig huur ik een minigraafmachine van 80 cm breed.",
        punten: ["Mini shovel", "Minigraver", "Ook in achtertuinen"] },
      { naam: "Onderhoud", foto: "img/gazon.jpg", pos: "50% 55%", tekst: "Onderhoud van uw tuin, park of bosperceel: eenmalig, als tuinrenovatie of in een vaste, terugkerende onderhoudscyclus.",
        punten: ["Eenmalig of vast", "Tuinrenovatie", "Tuin, park en bos"] },
      { naam: "Klussen rond het huis", foto: "img/bestrating.jpg", pos: "50% 55%", tekst: "Een bloembak ophangen, een lamp of luxaflex, of de dakgoten schoonmaken: ook voor klussen in en om het huis bied ik passende hulp.",
        punten: ["Dakgoten", "Ophangen en monteren", "Kleine klussen"] },
      { naam: "Begeleiding en leerbedrijf", foto: "img/zwaan.jpg", pos: "50% 55%", tekst: "Voor mensen met een afstand tot de arbeidsmarkt bied ik een werk- en leerplek, met aandacht voor ieders beperkingen en altijd op zoek naar talent.",
        punten: ["(Stage)begeleiding", "Werk- en leerplek", "Talent ontdekken"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Werk",
    titel: "Recent *in het groen*",
    tekst: "Een greep uit tuinen en klussen in Leeuwarden en omgeving.",
    items: [
      { foto: "img/hero.jpg", label: "Tuin met vlonder en loungehoek", sub: "Tuinaanleg", pos: "50% 60%" },
      { foto: "img/schutting.jpg", label: "Kaarsrechte schutting", sub: "Schuttingen" },
      { foto: "img/gazon.jpg", label: "Nieuw gazon met verlichting", sub: "Tuinrenovatie" },
      { foto: "img/speeltuin.jpg", label: "Speeltoestel en pad", sub: "Tuinaanleg" },
      { foto: "img/aanleg.jpg", label: "Tuin in aanleg", sub: "Grondwerk" }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Germainenl", tekst: "Echt als je van een allegaartje van een tuin … een mooie tuin kan maken ben je een vakman! Jeroen weet met de klant op een lijn te komen met ideeën. … De schutting die hij kaarsrecht heeft geplaatst." },
      { naam: "Lucia V.", tekst: "Jeroen heeft onze tuin compleet gerenoveerd wat een hele klus was … Het was fijn dat er meegedacht werd en we goede adviezen kregen, afspraken werden nagekomen. Er werd snel gereageerd op mail of app." },
      { naam: "Pris S.", tekst: "Jeroen heeft ons zeer goed geholpen van ons oerwoud weer een tuin te maken. Komt altijd zijn afspraken na, is op tijd, denkt mee en heeft humor." },
      { naam: "Brenda", tekst: "Jeroen heeft mijn tuin een mooie upgrade gegeven. Hij is netjes en komt afspraken na. … Ik raad Doen met Groen ten zeerste aan." }
    ]
  },

  over: {
    kicker: "Waarom Doen met Groen", navNaam: "Over ons",
    titel: "Vakmanschap *in het groen*",
    rol: "Doen met Groen, Leeuwarden",
    tekst: [
      "Ik combineer groenwerk met het begeleiden van mensen. Met aandacht voor mens, klimaat en duurzaamheid leg ik groenprojecten aan en onderhoud ik ze met respect voor de natuur.",
      "Waar het kan werk ik met duurzame methoden, zoals regenwater opvangen en waterdoorlatende verharding. Elke klant krijgt persoonlijke aandacht, en veiligheid gaat altijd voor."
    ],
    foto: "img/schutting2.jpg", fotoPos: "50% 55%", fotoAlt: "Nieuwe houten schutting langs een gazon",
    knop: "Stuur een app"
  },

  faq: [
    { v: "Past de shovel door mijn poort?", a: "Met een doorgang van 110 cm kan de mini shovel in de meeste achtertuinen werken. Is het smaller, dan huur ik waar nodig een minigraafmachine van 80 cm breed." },
    { v: "Werkt u duurzaam?", a: "Zo veel als mogelijk: bijvoorbeeld met het opvangen van regenwater en waterdoorlatende verharding." },
    { v: "Doet u ook kleine klussen?", a: "Ja. Een bloembak ophangen, een lamp of luxaflex, of de dakgoten schoonmaken: vraag het gerust." },
    { v: "Wanneer bent u bereikbaar?", a: "Maandag tot en met vrijdag van 8:00 tot 17:00 uur. Een app of mail kan altijd." }
  ],

  band: {
    foto: "img/zwaan.jpg", fotoPos: "50% 50%",
    titel: "Zorg voor *mens en natuur*",
    tekst: "Laat weten hoe ik u kan helpen, dan ontvangt u snel een offerte op maat."
  },

  contact: {
    titel: "Vraag een *vrijblijvende offerte* aan",
    tekst: "Laat me weten hoe ik u kan helpen en ontvang snel een offerte op maat voor uw project. Een foto van uw tuin via WhatsApp helpt al veel.",
    onderwerpen: ["Tuinaanleg", "Boomverzorging", "Grondverzet", "Onderhoud", "Klus rond het huis"],
    voorbeeld: "Bijvoorbeeld: achtertuin opnieuw inrichten, nieuwe schutting en de oude coniferen eruit"
  }
};
