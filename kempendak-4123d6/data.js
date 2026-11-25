// Kempendak (Valkenswaard). Bron: kempendak.nl + Google (4,8 / 5, opgehaald 25-11-2026). Eigenaar Patrick de Boer staat op de site.
// Alleen eigen foto's (site + Google-profiel; beschadigde Google-foto's niet gebruikt).
window.SITE = {
  naam: "Kempendak",
  plaats: "Valkenswaard",
  vak: "Dakdekker",
  titelExtra: "Dakdekker voor platte daken in Valkenswaard en omgeving",
  logo: "img/logo.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#16212c", accent: "#2b7cc0" },
  telefoon: "06 57 98 77 28",
  telefoonIntl: "31657987728",
  waTekst: "App Patrick",
  email: "info@kempendak.nl",
  adres: ["Willibrorduslaan 72", "5552 HE Valkenswaard"],
  kvk: "98274813",
  google: { score: "4,8", aantal: "5" },
  ctaTekst: "Vraag een dakofferte aan",
  navCta: "Offerte",
  voetTekst: "Lekkage, renovatie en isolatie van platte daken. Betrouwbaar, vakkundig en transparant, voor bedrijven en particulieren.",

  hero: {
    regels: ["Daklekkage of", "dakrenovatie?"],
    tekst: "Patrick de Boer helpt u met lekkage, renovatie en isolatie van platte daken in Valkenswaard en omgeving.",
    foto: "img/hero.jpg", fotoPos: "50% 50%", fotoPosMobiel: "35% 50%",
    fotoAlt: "Plat dak met nieuwe dakbedekking en grindrand",
    donker: true,
    punten: ["14 jaar ervaring", "Vakdiploma's", "Bij spoed bereikbaar van 6 tot 22 uur"]
  },

  marquee: ["Daklekkage", "Dakrenovatie", "Bitumen dakbedekking", "Kunststof dakbedekking", "Dakisolatie", "Schoorstenen", "Bedrijven en particulieren"],

  spoed: {
    titel: "Daklekkage? Bel Patrick.",
    tekst: "Bij spoed bereikbaar van 06:00 tot 22:00 uur. Bel, of app een foto van de lekkage."
  },

  intro: {
    kicker: "Kempendak",
    tekst: "Betrouwbaar, vakkundig en transparant. We denken met u mee en kiezen voor slimme, praktische en duurzame oplossingen.",
    stats: [
      { getal: "4,8", label: "Gemiddeld op Google" },
      { getal: "14+", label: "Jaar ervaring" },
      { getal: "6-22 uur", label: "Bereikbaar bij spoed" },
      { getal: "A-merk", label: "Alleen A-merk materialen" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Alles voor uw platte dak",
    tekst: "Voor bedrijven en particulieren. Altijd uitgevoerd volgens de vakrichtlijnen.",
    items: [
      { naam: "Bitumen dakbedekking", soort: "Bitumen", foto: "img/branden.jpg", pos: "50% 55%",
        tekst: "Van oudsher bewezen en nog altijd sterk. Gebrand, gelijmd, mechanisch bevestigd of losliggend geballast: we kiezen de juiste methode voor uw dak.",
        punten: ["Alleen A-merk producten", "Volgens de vakrichtlijn", "Volledig opgeleid"] },
      { naam: "Kunststof dakbedekking", soort: "Kunststof", foto: "img/aansluiting.jpg", pos: "50% 60%",
        tekst: "Een sterke, waterdichte laag die lang meegaat, goed bestand is tegen zon, regen en kou, en weinig onderhoud vraagt.",
        punten: ["Lang mee", "Weinig onderhoud", "Gelijmd, geschroefd of geballast"] },
      { naam: "Dakisolatie", soort: "Dakisolatie", foto: "img/dakterras.jpg", pos: "50% 50%",
        tekst: "Isoleren en meteen nieuwe dakbedekking erop. Zo zit u er warmer bij en bent u weer jaren onder dak.",
        punten: ["Isolatie en dakbedekking in één", "Persoonlijk advies", "Duidelijke offerte"] }
    ],
    meer: [
      { naam: "Daklekkage", tekst: "Bij spoed bereikbaar van 06:00 tot 22:00 uur." },
      { naam: "Schoorstenen", tekst: "Netjes ingepakt en waterdicht aangesloten op uw dak." },
      { naam: "Gespecificeerde offerte", tekst: "Opgesteld volgens de huidige vakrichtlijnen." }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Projecten", kicker: "Projecten",
    titel: "Een greep uit ons werk",
    tekst: "Onder meer dakrenovaties in Aalst-Waalre en Eindhoven.",
    items: [
      { foto: "img/plat-dak.jpg", label: "Dakrenovatie", sub: "Nieuwe dakbedekking met grindrand", pos: "50% 50%" },
      { foto: "img/schoorsteen-lood.jpg", label: "Schoorsteen ingepakt", pos: "50% 40%" },
      { foto: "img/aansluiting.jpg", label: "Aansluiting op het pannendak", pos: "50% 50%" },
      { foto: "img/plat-dak-3.jpg", label: "Plat dak", pos: "50% 50%" },
      { foto: "img/branden.jpg", label: "Aan het werk", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Zo werken wij",
    tekst: "Persoonlijk, met maatwerk dat past bij uw dak en uw budget.",
    foto: "img/schoorsteen.jpg", fotoPos: "50% 40%", fotoAlt: "Schoorsteen op een plat dak met grind",
    stappen: [
      { naam: "Contact", tekst: "Bel, app of vul het formulier in." },
      { naam: "Persoonlijk advies", tekst: "Patrick komt kijken en denkt met u mee." },
      { naam: "Duidelijke offerte", tekst: "Eerlijke prijs, desgewenst gespecificeerd volgens de vakrichtlijnen." },
      { naam: "Vakwerk", tekst: "Netjes uitgevoerd en alles keurig opgeruimd." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Patrick (Kempendak) heeft ons dak van isolatie en nieuwe dakbedekking voorzien. Hij heeft prima vakwerk geleverd, hij werkt secuur en is communicatief heel goed. … Heeft alles keurig achtergelaten. Een aanrader!", naam: "A. Peters" },
      { tekst: "Het dakwerk is professioneel en volgens afspraak opgeleverd. Het werk is vakkundig uitgevoerd en alles ziet er weer strak uit. Daarnaast is hij erg vriendelijk in de omgang …", naam: "Perry van V." },
      { tekst: "Wij zijn heel blij met onze nieuwe dakbedekking. Supernetjes gedaan en ook alle rommel opgeruimd en afgevoerd. Patrick maakt duidelijke afspraken en levert vakwerk.", naam: "Ingrid van A." },
      { tekst: "Uitstekende vakman. Heldere afspraken die worden nagekomen. Denkt mee in praktische oplossingen", naam: "Rene W." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Ontstaan uit liefde voor vakwerk",
    rol: "Patrick de Boer, Kempendak",
    tekst: [
      "Kempendak is ontstaan uit een liefde voor vakwerk. Als ervaren en gediplomeerde dakdekker sta ik garant voor kwaliteit, betrouwbaarheid en vakmanschap.",
      "Bij mij staan uw wensen centraal. U krijgt persoonlijk advies, eerlijke prijzen en maatwerk dat past bij uw project en budget. Ik ga voor 100% tevredenheid, bij particulieren en bedrijven."
    ],
    foto: "img/plat-dak-3.jpg", fotoPos: "50% 50%", fotoAlt: "Plat dak met nieuwe dakbedekking",
    knop: "App Patrick"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 60%",
    titel: "Twijfelt u over uw platte dak?",
    tekst: "Patrick komt kijken en geeft eerlijk advies."
  },

  contact: {
    titel: "Vraag een dakofferte aan",
    tekst: "Vertel kort wat er aan de hand is, of app direct een foto van uw dak.",
    formTitel: "Offerte aanvragen",
    onderwerpen: ["Daklekkage (spoed)", "Dakrenovatie", "Bitumen", "Kunststof", "Dakisolatie", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: bij harde regen lekt het bij de schoorsteen",
    belofte: "Bij spoed bereikbaar van 06:00 tot 22:00 uur."
  }
};
