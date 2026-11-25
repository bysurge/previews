// Hoveniersbedrijf de Groene M (Dordrecht). Bron: www.degroenem.nl + Google (4,9 / 34), 25-11-2026. Zie content.md.
// Foto's: eigen projectfoto's van hun site + hun Google-profiel. Geen stock.
window.SITE = {
  naam: "Hoveniersbedrijf de Groene M",
  kortNaam: "De Groene M",
  vak: "Hovenier",
  plaats: "Dordrecht",
  logo: "img/blad.png",
  logoOpFoto: "img/blad.png",
  logoHoogte: 40,
  kleuren: { brand: "#2c3a24", accent: "#7fa035" },
  telefoon: "06 52 49 96 01",
  telefoonIntl: "31652499601",
  waTekst: "Stuur een appje",
  email: "info@degroenem.nl",
  adres: ["Jacobus Lipsweg 23", "3316 BR Dordrecht"],
  kvk: "61642983",
  google: { score: "4,9", aantal: "34" },
  voetTekst: "Hoveniersbedrijf in Dordrecht. Tuinontwerp, aanleg, bestrating, houtwerk en onderhoud, voor particulieren en bedrijven.",

  hero: {
    regels: ["Van ontwerp", "tot de laatste", "*steen.*"],
    tekst: "Een jong hoveniersteam uit Dordrecht. We ontwerpen, bestraten, timmeren en planten, tot de tuin helemaal naar uw zin is.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "45% 60%",
    fotoAlt: "Terras met keramische tegels, gemetselde plantenbak met olijfboom en tuinverlichting in de avond",
    badge: "Vrijblijvend langs voor advies",
    punten: ["Ontwerp, aanleg en onderhoud", "Bestrating en houtwerk"]
  },

  marquee: ["Tuinontwerp", "Tuinaanleg", "Sierbestrating", "Opritten", "Schuttingen", "Overkappingen", "Beplanting", "Tuinonderhoud"],

  intro: {
    kicker: "Over de Groene M",
    tekst: "Een *betrokken team* dat goed op elkaar is ingespeeld. Daardoor staat er in korte tijd een tuin waar u jaren plezier van heeft, met zo min mogelijk afval en overlast.",
    stats: [
      { getal: "4,9", label: "Gemiddeld op Google" },
      { getal: "3D", label: "Ontwerp van uw tuin, op aanvraag" },
      { getal: "VCA", label: "Alle medewerkers gecertificeerd" }
    ]
  },

  diensten: {
    titel: "Alles voor de tuin, *uit één hand*",
    tekst: "Van het eerste ontwerp tot het jaarlijkse snoeiwerk. Vraag gerust wat er mogelijk is.",
    items: [
      { naam: "Tuinontwerp", foto: "img/tuinhuis.jpg", tekst: "We luisteren naar uw wensen en maken een plan dat praktisch haalbaar en betaalbaar is. Op aanvraag als 3D-ontwerp, met beplanting, bestrating en verlichting.",
        punten: ["3D-ontwerp op aanvraag", "Beplantings- en verlichtingsplan", "Haalbaar en betaalbaar"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", tekst: "Compleet of gedeeltelijk, voor- of achtertuin. Door slim materiaal te leveren blijft er weinig afval over, en we houden de overlast voor de buurt klein.",
        punten: ["Voor- en achtertuinen", "Weinig afval", "Beplanting erbij"] },
      { naam: "(Sier)bestrating", foto: "img/oprit.jpg", pos: "50% 60%", tekst: "Terrassen, paden en opritten in keramiek, natuursteen of klinkers. Een oprit vraagt een andere fundering dan een terras, en dat weten we.",
        punten: ["Keramische tegels", "Opritten", "Projectbestrating"] },
      { naam: "Houtwerk", foto: "img/overkapping.jpg", tekst: "Een schutting op maat, een overkapping om heerlijk onder te zitten of een vlonder aan het water. Alles op maat gemaakt.",
        punten: ["Schuttingen", "Overkappingen", "Vlonders"] },
      { naam: "Tuinonderhoud", foto: "img/border.jpg", tekst: "Wekelijks onderhoud van gras en beplanting, of de jaarlijkse snoeibeurt. Voor particulieren en bedrijven.",
        punten: ["Gras en beplanting", "Snoeibeurten", "Ook zakelijk"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Tuinen van *de Groene M*",
    tekst: "Een greep uit tuinen die we ontwierpen en aanlegden in en rond Dordrecht.",
    items: [
      { foto: "img/flagstones.jpg", label: "Landelijke tuin", sub: "Terras van flagstones", pos: "50% 60%" },
      { foto: "img/avond.jpg", label: "Tuin met verlichting", sub: "Aanleg en verlichting" },
      { foto: "img/water.jpg", label: "Tuin aan het water", sub: "Vlonder en beplanting" },
      { foto: "img/staptegels.jpg", label: "Staptegelpad", sub: "Door het gazon" },
      { foto: "img/schutting.jpg", label: "Schutting met leibomen", sub: "Houtwerk en beplanting" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot stand*",
    tekst: "Snel een offerte, werken volgens afspraak en altijd in overleg. Dat zeggen klanten op Google.",
    foto: "img/werk.jpg", fotoPos: "50% 60%", fotoAlt: "Tuin in aanleg met kruiwagen en nieuwe bestrating",
    stappen: [
      { naam: "Vrijblijvend kijken", tekst: "We komen langs, bekijken uw tuin en horen wat u wilt." },
      { naam: "Ontwerp en offerte", tekst: "Een plan dat past bij u en uw budget, op aanvraag in 3D." },
      { naam: "Aanleg", tekst: "Met ervaren hoveniers en goede materialen, altijd in overleg met u." },
      { naam: "Onderhoud, als u wilt", tekst: "Wij houden de tuin bij, wekelijks of met een jaarlijkse snoeibeurt." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { tekst: "Wij zijn ontzettend blij met de kennis, kunde en uitvoering van het team van de Groene M. Ze hebben onze kleine stadstuin getransformeerd tot een enorm fijne en groene plek. …", naam: "Samira H." },
      { tekst: "We hebben een achtertuin aan het water, zonder achterom. … Een groot deel van de materialen en bigbags met zand zijn met een kraan over het dak heen en weer gehesen. …", naam: "Tamara B." },
      { tekst: "Vlotte, nette werkers. Goede communicatie, denkt goed mee en komt zelf met ideeën en oplossingen.", naam: "Kees" },
      { tekst: "Keurig werk geleverd bij de bestrating van onze oprit. Strak vakwerk, prettige communicatie.", naam: "Bommes1978" }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Jong, vlot en *vakkundig*",
    rol: "Hoveniersbedrijf de Groene M, Dordrecht",
    tekst: [
      "Bij de Groene M werken mensen met een passie voor tuinen: bedrijfsleiding, een tuinontwerper, hoveniers en aankomend hoveniers. Een hechte groep die goed op elkaar is ingespeeld.",
      "Alle medewerkers zijn VCA-gecertificeerd, dus we werken veilig, ook op bouwplaatsen. Naast tuinen doen we ook groen- en infraprojecten, zoals watergangen graven en bedrijventerreinen bestraten."
    ],
    foto: "img/gazon.jpg", fotoPos: "50% 50%", fotoAlt: "Gazon met tuinhuis en border in de zon",
    knop: "Stuur ons een bericht"
  },

  band: {
    foto: "img/band.jpg", fotoPos: "50% 60%",
    titel: "Zin in een tuin *om in te leven?*",
    tekst: "We komen vrijblijvend kijken wat er mogelijk is. Bel of app 06 52 49 96 01."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u voor ogen heeft. We nemen snel contact met u op, of stuur direct een WhatsApp met een foto van uw tuin.",
    onderwerpen: ["Tuinontwerp", "Tuinaanleg", "Bestrating of oprit", "Houtwerk", "Tuinonderhoud", "Iets anders"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 6 bij 10 meter, nieuw terras en een schutting langs de zijkant"
  }
};
