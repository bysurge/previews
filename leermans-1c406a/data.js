// Leermans Dakwerk & Onderhoud (Oss). Bron: leermansdakwerkonderhoud.nl (incl. fotogalerij) + Google (5,0 / 9, opgehaald 25-11-2026).
// Alleen eigen galerijfoto's gebruikt (sfeerbeeld "eyecatcher", duif en Adobe-stockfoto van hun site niet). Voor/na geknipt uit hun eigen collages.
// Voornaam "Gradus" staat alleen in Google-reviews, niet op de eigen site: daarom bedrijfsnaam + jullie.
window.SITE = {
  naam: "Leermans Dakwerk & Onderhoud",
  kortNaam: "Leermans",
  plaats: "Oss",
  vak: "Dakdekker",
  titelExtra: "Dakdekker in Oss",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-wit.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 44,
  kleuren: { brand: "#14212d", accent: "#2f88cc" },
  telefoon: "06 36 33 56 77",
  telefoonIntl: "31636335677",
  waTekst: "WhatsApp",
  waContact: "App ons, ook voor een foto van uw dak",
  email: "info@leermansdakwerkonderhoud.nl",
  adres: ["Van Galenstraat 1", "5342 VJ Oss"],
  kvk: "92638325",
  google: { score: "5,0", aantal: "9" },
  ctaTekst: "Gratis dakinspectie",
  navCta: "Dakinspectie",
  voetTekst: "Pannendaken, bitumen, loodwerk, schoorstenen en onderhoud in Oss en omgeving. Gratis dakinspectie, tot 10 jaar garantie.",

  hero: {
    regels: ["Wij werken", "bij u zoals", "bij ons thuis."],
    tekst: "Platte daken en pannendaken: van gratis inspectie tot spoedreparatie en complete renovatie. Eerlijk advies, A-kwaliteit materialen.",
    foto: "img/hero.jpg", fotoPos: "50% 50%",
    fotoMobiel: "img/hero-mobiel.jpg", fotoPosMobiel: "50% 40%",
    fotoAlt: "Pannendak met zonnepanelen, gezien vanaf het dak",
    donker: true,
    punten: ["Tot 10 jaar garantie", "Gratis dakinspectie", "Ruim 10 jaar ervaring"]
  },

  marquee: ["Dakinspectie", "Stormschade", "Daklekkage", "Pannendaken", "Bitumen", "Loodwerk", "Schoorsteenrenovatie", "Dakkapellen", "Vogelwering", "Sedumdaken"],

  spoed: {
    titel: "Lekkage of stormschade?",
    tekst: "Lekkages vragen om directe actie. We sporen het probleem snel op en zorgen voor een duurzame reparatie."
  },

  intro: {
    kicker: "Leermans Dakwerk & Onderhoud",
    tekst: "Een hecht team van ervaren dakdekkers. Eerlijk, no-nonsense, en u hoort bij elke stap hoe het ervoor staat.",
    stats: [
      { getal: "5,0", label: "Gemiddeld uit 9 Google-reviews" },
      { getal: "10+", label: "Jaar ervaring in het dakdekkersvak" },
      { getal: "10 jaar", label: "Garantie op veel werkzaamheden" },
      { getal: "Gratis", label: "Dakinspectie en vrijblijvende offerte" }
    ]
  },

  diensten: {
    knop: "Offerte aanvragen",
    titel: "Alles voor uw dak",
    tekst: "Voor particulieren en bedrijven: van preventief onderhoud en spoedreparaties tot complete renovaties.",
    items: [
      { naam: "Pannendaken", foto: "img/pannendak.jpg", pos: "50% 50%", soort: "Pannendak",
        tekst: "Vervanging, reparatie of een compleet nieuw pannendak, altijd met A-kwaliteit materialen.",
        punten: ["Losse of kapotte pannen", "Nieuwe nokvorsten", "Vogelwering onder de pannen"] },
      { naam: "Platte daken", foto: "img/plat-en-pannen.jpg", pos: "50% 50%", soort: "Bitumen / plat dak",
        tekst: "Hoogwaardige bitumen dakbedekking: duurzaam, waterdicht en makkelijk te onderhouden. Ook sedum- en groendaken.",
        punten: ["Bitumen", "Dakkapel renovatie", "Sedum / groendak"] },
      { naam: "Lood en schoorstenen", foto: "img/schoorsteen-na.jpg", pos: "50% 40%", soort: "Schoorsteen / loodwerk",
        tekst: "Goed geplaatst lood voorkomt lekkage rond schoorstenen en dakkapellen. Scheuren of lekkage? We renoveren uw schoorsteen netjes.",
        punten: ["Loodwerk", "Schoorsteenrenovatie", "Boeidelen vervangen"] }
    ],
    meer: [
      { naam: "Dakinspectie", tekst: "Gratis en grondig: dakbedekking, constructie, afvoeren, schoorstenen en aansluitingen." },
      { naam: "Dakisolatie", tekst: "Advies en isolatie op maat, voor minder energie en meer comfort." },
      { naam: "Onderhoud", tekst: "Periodiek onderhoud houdt uw dak in topconditie. Ook gevelreiniging." }
    ]
  },

  voorNa: {
    titel: "Het verschil zie je meteen",
    tekst: "Twee klussen uit onze fotogalerij. Schuif om voor en na te vergelijken.",
    items: [
      { naam: "Schoorsteen", voor: "img/schoorsteen-voor.jpg", na: "img/schoorsteen-na.jpg" },
      { naam: "Plat dak", voor: "img/dak-voor.jpg", na: "img/dak-na.jpg" }
    ]
  },

  galerij: {
    vorm: "mozaiek", navNaam: "Werk", kicker: "Ons werk",
    titel: "Uit onze fotogalerij",
    tekst: "Een indruk van ons werk in Oss en omgeving.",
    items: [
      { foto: "img/pannen-oranje.jpg", label: "Pannendak hersteld", sub: "Strak in lijn gelegd", pos: "50% 50%" },
      { foto: "img/goot.jpg", label: "Dakgoot en aansluiting", pos: "50% 50%" },
      { foto: "img/zonnepanelen.jpg", label: "Dak met zonnepanelen", pos: "50% 50%" },
      { foto: "img/ladderlift.jpg", label: "Ladderlift op locatie", pos: "50% 50%" },
      { foto: "img/loodwerk.jpg", label: "Nieuw loodwerk", pos: "50% 50%" }
    ]
  },

  werkwijze: {
    titel: "Van inspectie tot oplevering",
    tekst: "Wij doen wat we beloven en houden u bij elke stap op de hoogte.",
    stappen: [
      { naam: "Aanvraag", tekst: "Vul het formulier in of app ons. Binnen 24 uur nemen we contact op." },
      { naam: "Gratis inspectie", tekst: "We controleren uw dak op alle essentiële punten." },
      { naam: "Eerlijke offerte", tekst: "Vrijblijvend, zonder verrassingen." },
      { naam: "Strakke uitvoering", tekst: "Volgens planning, met minimale overlast en tot 10 jaar garantie." }
    ]
  },

  reviews: {
    titel: "Wat klanten zeggen",
    items: [
      { tekst: "Dit bedrijf is een echte aanrader. Snelle, professionele ondersteuning: van de offerte en de bezichtiging tot de uitvoering verliep alles perfect. Werk van zeer hoge kwaliteit tegen een eerlijke prijs.", naam: "Frank J. K." },
      { tekst: "Gradus geeft open en eerlijk advies en denkt met je mee. … Ze hebben net werk geleverd, deden zelfs nog even een stap extra door als service onze zonnepanelen na afloop nog even schoon te maken.", naam: "Gemma S." },
      { tekst: "Zeer positieve ervaring met deze dakdekker. Het contact verliep prettig en professioneel, en de afspraken waren duidelijk. De prijs-kwaliteitverhouding is uitstekend.", naam: "Naomi B." },
      { tekst: "Van begin tot eind prettig contact gehad met Leermans Dakwerk & Onderhoud. Dakwerk is vakkundig uitgevoerd en alles netjes achtergelaten, bedankt!", naam: "Denise" }
    ]
  },

  over: {
    kicker: "Ons bedrijf", navNaam: "Over ons",
    titel: "Vakmanschap, betrouwbaarheid en persoonlijke service",
    tekst: [
      "We zijn een hecht team van ervaren dakdekkers en inspecteurs met meer dan 10 jaar ervaring. Gespecialiseerd in pannendaken en bitumen daken, voor nieuwbouw, renovatie en reparatie.",
      "Naast dakwerk kunt u bij ons ook terecht voor ander onderhoud aan uw woning. Geen klus is te groot of te klein: we denken in oplossingen."
    ],
    foto: "img/vakman.jpg", fotoPos: "50% 30%", fotoAlt: "Dakdekker van Leermans aan het werk bij een pannendak",
    knop: "Stuur een bericht"
  },

  band: {
    foto: "img/hero.jpg", fotoPos: "50% 70%",
    titel: "Laat uw dak controleren vóór het te laat is",
    tekst: "Zeker bij oudere woningen of na een storm. Gratis en volledig vrijblijvend."
  },

  contact: {
    titel: "Vraag een gratis dakinspectie aan",
    tekst: "Vul het formulier in, dan nemen we binnen 24 uur contact met u op om een afspraak te plannen.",
    formTitel: "Dakinspectie aanvragen",
    onderwerpen: ["Dakinspectie", "Daklekkage", "Stormschade", "Pannendak", "Plat dak", "Schoorsteen / lood", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: na de storm liggen er een paar pannen los",
    belofte: "Binnen 24 uur contact, inspectie gratis."
  }
};
