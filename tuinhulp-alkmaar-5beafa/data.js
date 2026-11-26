// Tuinhulp Alkmaar (dhr. K. van Oort). Bron: tuinhulpalkmaar.nl (26-11-2026, Strato-sitebouwer) + eigen Google-profiel (4,6 uit 9).
// Foto's: alleen van hun Google-profiel (hun site heeft geen werkfoto's, alleen meubels van Meubelmaker Alkmaar). Logo = hun favicon (196px).
// Google-reviewteksten konden niet worden opgehaald -> geen reviewsectie, alleen de score.
// LET OP: hun site heeft ook een belknop naar 06 51797133; het genoemde nummer is 06-19446479 (ook op Google) -> dat gebruikt.
window.SITE = {
  naam: "Tuinhulp Alkmaar",
  kortNaam: "Tuinhulp Alkmaar",
  vak: "Hovenier",
  titelExtra: "Tuinman in Alkmaar en omstreken",
  plaats: "Alkmaar",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "icoon",
  logoMetNaam: true,
  logoHoogte: 42,
  kleuren: { brand: "#2f4a26", accent: "#8a6440" },
  telefoon: "06 19 44 64 79",
  telefoonIntl: "31619446479",
  waTekst: "App ons",
  email: "info@tuinhulpalkmaar.nl",
  kvk: "83830154",
  google: { score: "4,6", aantal: 9 },
  ctaTekst: "Maak een afspraak",
  voetTekst: "Uw betrouwbare tuinhulp in Alkmaar en omstreken. Tuinonderhoud, tuinaanleg en houtwerk, met eerlijke afspraken.",

  hero: {
    regels: ["Uw betrouwbare", "tuinhulp in", "*Alkmaar.*"],
    tekst: "Voor al uw klussen in en om de tuin: onderhoud, aanleg, vlonders, schuttingen en overkappingen. Afspraak is afspraak.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "35% 50%", donker: true,
    fotoAlt: "Dakterras met houten vlonder, pergola met schaduwdoek en loungeset",
    punten: ["Afspraak is afspraak", "Eerlijk en transparant"]
  },

  marquee: ["Tuinonderhoud", "Tuinaanleg", "Straatwerk", "Vlonders", "Schuttingen", "Plantenbakken op maat", "Overkappingen en pergola's", "Gazon"],

  intro: {
    kicker: "Zoekt u een tuinman?",
    tekst: "Een tuin heeft onderhoud nodig, maar u heeft er *niet altijd tijd* voor. Of u kunt het niet meer zelf. Dan helpen wij u graag, van een onderhoudsbeurt tot een compleet nieuwe tuin.",
    stats: [
      { getal: "4,6", label: "Gemiddeld op Google" },
      { getal: "Vooraf", label: "Weet u hoe lang we bezig zijn" },
      { getal: "Op maat", label: "Plantenbakken van eigen timmerman" }
    ]
  },

  diensten: {
    titel: "Alles voor *in en om* de tuin",
    tekst: "Van een snoeibeurt tot een complete tuinrenovatie. We adviseren én realiseren.",
    items: [
      { naam: "Tuinonderhoud", foto: "img/schutting.jpg", pos: "50% 70%", tekst: "Geen zin of tijd voor de tuin? Wij nemen het werk uit handen, van snoeien en maaien tot de tuin winterklaar maken.",
        punten: ["Snoeien en winterklaar maken", "Maaien, verticuteren en zaaien", "Terrassen en paden schoonspuiten"] },
      { naam: "Tuinaanleg en straatwerk", foto: "img/terras.jpg", pos: "50% 60%", tekst: "Een compleet nieuwe tuin, een renovatie of alleen een gedeelte op de schop. Ontwerp kunt u zelf aanleveren of aan ons uitbesteden. Verzakt straatwerk herstellen we.",
        punten: ["Ontwerp en advies", "Straatwerk en terrassen", "Gazon en plantenadvies"] },
      { naam: "Vlonders en plantenbakken", foto: "img/vlonder.jpg", pos: "50% 55%", tekst: "Een vlonderterras geeft uw tuin een luxe uitstraling, in een houtsoort die past bij de sfeer. Plantenbakken op maat maakt onze timmerman van Meubelmaker Alkmaar.",
        punten: ["Vlonderterrassen", "Plantenbakken op maat", "Verschillende houtsoorten"] },
      { naam: "Schuttingen en poorten", foto: "img/poort.jpg", pos: "50% 50%", tekst: "De schutting bepaalt voor een groot deel de sfeer in uw tuin. We adviseren over privacy en duurzaamheid en plaatsen verschillende schuttingen.",
        punten: ["Advies en plaatsing", "Houten schuttingen", "Poorten"] },
      { naam: "Overkappingen en schuren", foto: "img/schuur.jpg", pos: "50% 55%", tekst: "Een overkapping voor beschutting, een pergola voor klimplanten, een carport of een schuur voor extra opbergruimte.",
        punten: ["Overkappingen en pergola's", "Carports", "Schuren"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Ons werk",
    titel: "Klussen in *Alkmaar* en omstreken",
    tekst: "Een greep uit vlonders, schuttingen en houtwerk die we maakten.",
    items: [
      { foto: "img/vlonder.jpg", label: "Vlonder aan het water", sub: "Vlonder en schutting", pos: "50% 55%" },
      { foto: "img/trap.jpg", label: "Houten trap en wand", sub: "Houtwerk" },
      { foto: "img/schuur.jpg", label: "Tuinhuis", sub: "Schuur" },
      { foto: "img/schutting.jpg", label: "Schutting met klimplanten", sub: "Schutting en terras", pos: "50% 60%" },
      { foto: "img/gevel.jpg", label: "Overkapping aan de gevel", sub: "Houtwerk" }
    ]
  },

  werkwijze: {
    titel: "Afspraak is *afspraak*",
    tekst: "Wij staan voor eerlijkheid, hard werken en transparantie.",
    stappen: [
      { naam: "Contact", tekst: "App, bel of mail ons met uw vraag of een foto van uw tuin." },
      { naam: "Duidelijke afspraak", tekst: "Vooraf bespreken we wat er moet gebeuren en hoe lang we denken bezig te zijn." },
      { naam: "Aan de slag", tekst: "We komen onze afspraken na en werken hard en netjes door." },
      { naam: "Genieten", tekst: "U geniet weer van uw tuin. Ook voor vast onderhoud kunt u bij ons terecht." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Eerlijk, hard werken en *transparant*",
    rol: "Tuinhulp Alkmaar, dhr. K. van Oort",
    tekst: [
      "Tuinhulp Alkmaar helpt u met alle klussen in en om de tuin. Ook als u door lichamelijke beperkingen uw tuin niet meer zelf kunt onderhouden.",
      "Komt er bij het werk bruikbaar hout uit uw tuin vrij? Dan kan Meubelmaker Alkmaar er een mooi meubel of plantenbak van maken. Zo werkt u ook in de tuin duurzaam en circulair."
    ],
    foto: "img/terras.jpg", fotoPos: "50% 60%", fotoAlt: "Nieuw vlonderterras met loungeset en plantenbak",
    badge: "img/logo.png",
    knop: "Stuur ons een bericht"
  },

  faq: [
    { v: "Kunnen jullie mijn tuin vast onderhouden?", a: "Ja. Van snoeien en maaien tot bemesten, verpotten en de tuin winterklaar maken." },
    { v: "Moet ik zelf een tuinontwerp hebben?", a: "Nee. U kunt zelf een ontwerp aanleveren of het aan ons uitbesteden. We informeren u graag over de mogelijkheden." },
    { v: "Mijn bestrating is verzakt. Kunnen jullie dat herstellen?", a: "Ja. Verzakt straatwerk geeft vaak problemen met afwatering. We herstellen het en adviseren ook bij een nieuw terras." },
    { v: "Herstellen jullie ook tuinmeubelen?", a: "Ja, we reinigen en herstellen tuinmeubelen en schuren en schilderen houten delen in de tuin." }
  ],

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Uw tuin de uitstraling geven *die u wilt?*",
    tekst: "Maak een afspraak via WhatsApp, bel of mail ons. We horen graag van u."
  },

  contact: {
    titel: "Wij horen *graag* van u",
    tekst: "Vertel kort wat u zoekt. Een foto van uw tuin via WhatsApp helpt ons om u snel een goed beeld te geven.",
    onderwerpen: ["Tuinonderhoud", "Tuinaanleg en straatwerk", "Vlonders en plantenbakken", "Schuttingen en poorten", "Overkappingen en schuren"],
    voorbeeld: "Bijvoorbeeld: achtertuin snoeien en winterklaar maken, en het terras schoonspuiten"
  }
};
