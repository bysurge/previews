// Hoveniersbedrijf van Harn (Ede). Bron: vanharnhoveniers.nl (26-11-2026) + Google (4,5 uit 2, geen reviewteksten -> niet getoond).
// Foto's: alleen eigen projectfoto's van hun site (800x600, uit "Gerealiseerd werk"). Geen stockfoto's.
// Voornaam onbekend (alleen "A. van Harn") -> bedrijfsnaam + "jullie". Logo is klein (230px breed).
window.SITE = {
  naam: "Hoveniersbedrijf van Harn",
  kortNaam: "Van Harn",
  vak: "Hovenier",
  plaats: "Ede",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoOpFoto: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#17463a", accent: "#2f9a6e" },
  telefoon: "06 50 29 27 93",
  telefoonIntl: "31650292793",
  telefoon2: "0318 46 22 15",
  email: "a.van.harn@hetnet.nl",
  adres: ["Gerard Doustraat 136", "6717 MN Ede"],
  voetTekst: "Sinds 1996 hoveniersbedrijf in de regio Ede. Tuinontwerp, tuinaanleg, tuinonderhoud en renovatie voor particulieren en bedrijven.",

  hero: {
    regels: ["Sinds 1996", "uw hovenier", "in *Ede.*"],
    tekst: "Ontwerpen, aanleggen en onderhouden van tuinen voor particulieren en bedrijven. Kwaliteit en een persoonlijke aanpak staan altijd centraal.",
    foto: "img/hero.jpg", fotoPos: "50% 60%", fotoPosMobiel: "58% 55%", donker: true,
    fotoAlt: "Terras met tuinset, vijver en volle borders voor een tuinhuis",
    punten: ["Sinds 1996", "Alle werkzaamheden in één hand"]
  },

  marquee: ["Tuinontwerp", "Beplantingsplan", "Bestrating", "Vijvers en vlonders", "Schuttingen en pergola's", "Beregening", "Tuinverlichting", "Tuinonderhoud", "Renovatie"],

  intro: {
    kicker: "Van Harn",
    tekst: "Een doordacht plan is *de basis* voor een goed resultaat. Sinds 1996 ontwerpen, leggen en onderhouden we tuinen in Ede en omgeving, met een persoonlijke aanpak.",
    stats: [
      { getal: "1996", label: "Hovenier in de regio Ede" },
      { getal: "1 hand", label: "Ontwerp, aanleg en onderhoud" },
      { getal: "Accu", label: "Stil gereedschap bij onderhoud" },
      { getal: "DCM", label: "Volledig organische bemesting" }
    ]
  },

  diensten: {
    titel: "Alle werkzaamheden *in één hand*",
    tekst: "U kunt bij ons terecht voor de hele tuin, of voor een deel. Wij spelen zo flexibel mogelijk in op uw wensen.",
    items: [
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "Een goed tuinplan is praktisch én mooi om naar te kijken. Met een beplantingsplan geniet u het hele jaar van bloeiende planten, en u weet vooraf precies wat de aanleg kost.",
        punten: ["Tuinplan op maat", "Beplantingsplan", "Beregening en verlichting"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "We verzorgen de gehele aanleg volgens een gedetailleerd plan, met moderne gereedschappen en machines. Of alleen een deel, en de rest doet u zelf.",
        punten: ["Grondwerk en bestrating", "Schutting, tuinhuis of pergola", "Vijvers, vlonders en beplanting"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Op contract of op afroep: borders en gazon onkruidvrij, heesters en bomen snoeien, de vijver reinigen of de tuin winterklaar maken. We werken waar het kan met stille accu-heggenscharen en -bladblazers.",
        punten: ["Vast onderhoud of op afroep", "Eenmalige snoeibeurt", "Organische DCM-bemesting"] },
      { naam: "Renovatie", foto: "img/renovatie.jpg", pos: "50% 55%", tekst: "Voldoet uw tuin niet meer, maar wilt u niet alles vernieuwen? Door planten te herschikken, uit te dunnen of deels te vervangen en de bestrating op te halen, krijgt uw tuin een tweede leven.",
        punten: ["Borders vernieuwen", "Verzakkingen ophalen", "Opsluitbanden rechtzetten"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Gerealiseerd werk",
    titel: "Tuinen in *Ede en Bennekom*",
    tekst: "Een greep uit tuinen die we aanlegden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/vijver.jpg", label: "Terras met vijver", sub: "Aanleg" },
      { foto: "img/kronkelpad.jpg", label: "Kronkelpad in gebakken klinkers", sub: "Bestrating" },
      { foto: "img/voortuin.jpg", label: "Voortuin met hardhouten borders", sub: "Aanleg" },
      { foto: "img/pad-vijver.jpg", label: "Pad langs de vijver", sub: "Aanleg" },
      { foto: "img/visgraat.jpg", label: "Pad in visgraatverband", sub: "Bestrating" },
      { foto: "img/achtertuin.jpg", label: "Gazon en terras", sub: "Aanleg" },
      { foto: "img/border.jpg", label: "Verhoogde border", sub: "Beplanting" },
      { foto: "img/terras.jpg", label: "Terras met plantenbakken", sub: "Bestrating" },
      { foto: "img/plantenbak.jpg", label: "Plantenbak met verlichting", sub: "Aanleg" }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Kwaliteit en een *persoonlijke* aanpak",
    rol: "Hoveniersbedrijf van Harn, Ede",
    tekst: [
      "Sinds 1996 zijn wij als hoveniersbedrijf actief in de regio Ede. We ontwerpen, leggen aan en onderhouden tuinen voor particulieren en bedrijven.",
      "Bestrating, beplanting, een vijver, beregening of een schutting of pergola: voor alle voorkomende tuinwerkzaamheden kunt u bij ons terecht. We denken mee, ook als u een deel liever zelf doet."
    ],
    foto: "img/achtertuin.jpg", fotoPos: "50% 55%", fotoAlt: "Aangelegde achtertuin met gazon en terras",
    knop: "Stuur ons een bericht"
  },

  werkgebied: {
    titel: "Ede en omgeving",
    tekst: "Vanuit Ede werken we in de regio, onder meer in Bennekom. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Ede", "Bennekom"]
  },

  faq: [
    { v: "Kan ik een deel van de aanleg zelf doen?", a: "Ja. We kunnen ook maar een deel van de aanleg verzorgen. U maakt dan gebruik van onze kennis en houdt een deel van het werk in eigen hand." },
    { v: "Waarom eerst een tuinplan?", a: "Met een tuinplan weet u vooraf precies wat de aanleg kost, kunt u offertes makkelijk vergelijken en voorkomt u verrassingen tijdens het werk." },
    { v: "Doen jullie ook eenmalig onderhoud?", a: "Zeker. Naast vast onderhoud op contract kunt u ons ook inschakelen voor een eenmalige snoeibeurt of om de tuin winterklaar te maken." },
    { v: "Is het onderhoud erg lawaaiig?", a: "Waar mogelijk werken we met accu-heggenscharen en accu-bladblazers, zodat u en uw buren zo min mogelijk last hebben." }
  ],

  band: {
    foto: "img/vijver.jpg", fotoPos: "50% 55%",
    titel: "Plannen voor *uw tuin?*",
    tekst: "Aarzel niet om contact op te nemen. We denken graag met u mee."
  },

  contact: {
    titel: "Neem *contact* op",
    tekst: "Vertel kort wat u voor ogen heeft. Bellen kan ook: 0318 46 22 15 of 06 50 29 27 93.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Renovatie"],
    voorbeeld: "Bijvoorbeeld: nieuwe bestrating en een border langs de schutting"
  }
};
