// P.J. Kooij Hovenier / Peter Kooij Hovenier (Rotterdam). Bron: peterkooijhovenier.nl (26-11-2026) + Google (5,0 uit 6).
// Foto's: eigen foto's van hun site; die bestaan alleen klein (400px breed). Stockfoto's van hun sjabloon (tempel, station) NIET gebruikt.
// Google-profiel heeft geen foto's. Logo op hun site is alleen een tekstlogo (200x14 px); hier een blad-icoon + naam.
window.SITE = {
  naam: "Peter Kooij Hovenier",
  kortNaam: "Peter Kooij",
  vak: "Hovenier",
  plaats: "Rotterdam",
  logo: "img/logo.svg",
  logoVorm: "icoon",
  kleuren: { brand: "#22352b", accent: "#b0603a" },
  telefoon: "06 53 29 56 47",
  telefoonIntl: "31653295647",
  waTekst: "App Peter",
  email: "info@peterkooijhovenier.nl",
  adres: ["Tjonger 52", "3068 LJ Rotterdam"],
  google: { score: "5,0", aantal: 6 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Hovenier in regio Rotterdam met meer dan 35 jaar ervaring. Tuinaanleg, onderhoud, bomen en stormschade. Helder en eerlijk.",

  hero: {
    regels: ["Uw wensen,", "ons *vakmanschap.*"],
    tekst: "Al meer dan 35 jaar hovenier in regio Rotterdam. Moderne tuinen, schuttingen, bestrating, onderhoud en bomen. Helder, eerlijk en no-nonsense.",
    foto: "img/portfolio-15.jpg", fotoPos: "50% 55%",
    fotoMobiel: "img/particulier1.jpg", fotoPosMobiel: "50% 50%", donker: true,
    fotoAlt: "Moderne tuin met waterpartij, stapstenen en Japanse esdoorns",
    punten: ["35+ jaar ervaring", "Stormschade 24/7"]
  },

  spoed: {
    titel: "Stormschade? Wij staan 24/7 klaar",
    tekst: "Omgevallen boom of schutting eruit? We ruimen snel op en maken een offerte voor uw verzekering."
  },

  marquee: ["Tuinaanleg", "Schuttingen", "Sierbestrating", "Waterpartijen", "Tuinverlichting", "Tuinonderhoud", "Bomen snoeien en kappen", "Riolering"],

  intro: {
    kicker: "Peter Kooij Hovenier",
    tekst: "Een helder, eerlijk bedrijf. Geen dure 3D-ontwerpen: *u bent de ontwerper* van uw tuin, wij maken er met raad en daad de mooiste tuin van.",
    stats: [
      { getal: "35+", label: "Jaar ervaring", tel: 35 },
      { getal: "5,0", label: "Op Google" },
      { getal: "24/7", label: "Bij stormschade" },
      { getal: "Eerlijk", label: "Kwaliteit voor een eerlijke prijs" }
    ]
  },

  diensten: {
    titel: "Van schutting tot *droomtuin*",
    tekst: "Al uw wensen zijn bespreekbaar. Het moet wel heel gek gaan wil uw droomtuin niet gerealiseerd kunnen worden.",
    items: [
      { naam: "Particuliere tuinen", foto: "img/portfolio-1.jpg", pos: "50% 55%", tekst: "Vooral moderne, stijlvolle en eigentijdse tuinen, uitgevoerd zoals u het wilt. Uw schets of ideeën werken we uit tot een echte tuin.",
        punten: ["Bestrating en sierbestrating", "Bouwkundige elementen", "Waterpartijen en tuinverlichting"] },
      { naam: "Schuttingen en overkappingen", foto: "img/portfolio-13.jpg", pos: "50% 55%", tekst: "Een nieuwe schutting, poort of afrastering, of een overkapping om ook bij slecht weer buiten te zitten.",
        punten: ["Schuttingen en poorten", "Afrasteringen", "Overkappingen"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud2.jpg", pos: "50% 50%", tekst: "Voor optimale groei en bloei. We weten wat uw heesters, bomen en planten nodig hebben, eenmalig of met een jaarlijks onderhoudscontract op maat.",
        punten: ["Onderhoud op maat", "Jaarlijks onderhoudscontract", "Snoeien en beplanting"] },
      { naam: "Bomen snoeien en kappen", foto: "img/bomenkappen1.jpg", pos: "50% 30%", tekst: "Gecertificeerd en met de juiste machines, ook op lastige plekken. Geen achterom? Met een telekraan tillen we de boom veilig over uw huis.",
        punten: ["Snoeien en rooien", "Boomadvies", "Klim- en afvangtechniek"] },
      { naam: "Bedrijfs- en VvE-tuinen", foto: "img/bedrijf1.jpg", pos: "50% 50%", tekst: "Aanleg en onderhoud van bedrijfstuinen, VvE-tuinen, binnentuinen en daktuinen. Voor grote projecten werken we samen met tuinarchitecten.",
        punten: ["Binnen- en daktuinen", "Onderhoudscontract", "Samen met tuinarchitecten"] },
      { naam: "Riolering", foto: "img/rioleringen1.jpg", pos: "50% 50%", tekst: "Extra service: verstopt of verzakt riool repareren of vernieuwen, doorspuiten en zo nodig met een camera de oorzaak zoeken.",
        punten: ["Vernieuwen en repareren", "Doorspuiten", "Camera-inspectie"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Portfolio",
    titel: "Een greep uit *ons werk*",
    tekst: "Tuinen die we aanlegden in Rotterdam en omgeving. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/portfolio-10.jpg", label: "Gabionmuren en bestrating", sub: "Tuinaanleg" },
      { foto: "img/portfolio-16.jpg", label: "Border langs het terras", sub: "Beplanting" },
      { foto: "img/portfolio-4.jpg", label: "Gazon met stapstenen", sub: "Tuinaanleg" },
      { foto: "img/portfolio-12.jpg", label: "Terras met picknicktafel", sub: "Bestrating" },
      { foto: "img/portfolio-5.jpg", label: "Vlonder met loungehoek", sub: "Tuinaanleg" },
      { foto: "img/overkapping.jpg", label: "Overkapping met verlichting", sub: "Overkapping" },
      { foto: "img/portfolio-9.jpg", label: "Achtertuin met schutting", sub: "Schutting en bestrating" },
      { foto: "img/portfolio-11.jpg", label: "Strak terras", sub: "Bestrating" }
    ]
  },

  werkwijze: {
    titel: "Hoe wij *te werk gaan*",
    tekst: "Uw wensen, ons vakmanschap: samen maken we er het mooiste plaatje van.",
    foto: "img/werkwijze3.jpg", fotoPos: "50% 50%", fotoAlt: "Minigraver aan het werk in een achtertuin",
    stappen: [
      { naam: "Langskomen", tekst: "We bespreken uw wensen en ideeën bij u thuis, en meteen ook welke materialen u kiest." },
      { naam: "Offerte", tekst: "U krijgt een offerte voor werk en materialen, eventueel met een ruwe schets. Liever een echt ontwerp? Dan werken we samen met een architect." },
      { naam: "Aanleg", tekst: "Na akkoord spreken we een datum af en leggen we de tuin aan tot en met de oplevering." },
      { naam: "Onderhoud", tekst: "Als u wilt, houden we de tuin daarna mooi met onderhoud op maat." }
    ]
  },

  reviews: {
    titel: "Wat klanten *zeggen*",
    items: [
      { naam: "Victor", tekst: "Meer dan tevreden met Peter en Wesley! Hardwerkende mannen, denken met je mee, besteden veel zorg en aandacht aan hetgeen zij doen en komen alle afspraken na. … Niets afraffelen, beter een dagje langer en dat alles helemaal top is." },
      { naam: "Bryan", tekst: "Na wat flinke windstoten lag onze oude schutting eruit. Contact gekregen met Peter en zijn zoon en het was zo opgelost met een mooie nieuwe schutting en poort. Zeker aan te raden als je voor kwalitatief goed vakmanschap wilt gaan." },
      { naam: "Leon K.", tekst: "Peter en zijn zoon hebben in 4 dagen tijd een schitterende tuin bij me aangelegd. Er was na een aantal maanden een probleem met de verlichting en dat hebben ze direct opgelost en verholpen." },
      { naam: "Lekkergeheim S.", tekst: "Peter en Wesley hebben zeer vakkundig onze voortuin opgeknapt. Zij hebben een prachtige overkapping van Douglashout en een mooi betegelde tuin met perk gemaakt. Staan open voor ideeën van de klant, maar komen ook zelf met zeer goede ideeën." }
    ]
  },

  over: {
    kicker: "Over ons",
    titel: "Helder, eerlijk en *no-nonsense*",
    rol: "Peter Kooij Hovenier, Rotterdam",
    tekst: [
      "Peter Kooij Hovenier is een begrip in regio Rotterdam, met meer dan 35 jaar ervaring in hovenierswerk en alles wat daarbij komt kijken.",
      "We houden van duidelijkheid en eerlijkheid, en dat geven we door aan onze klanten. Met liefde voor het vak leveren we kwaliteit voor een eerlijke prijs, naar uw wensen en uw budget."
    ],
    foto: "img/about1.jpg", fotoPos: "50% 50%", fotoAlt: "Graszoden leggen in een achtertuin",
    knop: "App Peter"
  },

  werkgebied: {
    titel: "Rotterdam en omgeving",
    tekst: "Vanuit Rotterdam werken we voor particulieren, bedrijven en VvE's in de hele regio. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Rotterdam"]
  },

  faq: [
    { v: "Maken jullie ook een ontwerp?", a: "Dure ontwerpen en 3D-weergaves maken we zelf niet: u bent de ontwerper, wij adviseren en werken uw schets uit. Wilt u toch een ontwerp met beplantingsplan, dan werken we samen met tuinarchitecten." },
    { v: "Wat stuur ik mee met mijn aanvraag?", a: "Stuur alvast 2 à 3 foto's van uw huidige tuin mee, dan krijgen we meteen een goed beeld van de situatie." },
    { v: "Helpen jullie ook bij stormschade?", a: "Ja, 24/7. We verwijderen en voeren omgevallen bomen af en maken een offerte voor uw verzekering. En een nieuwe schutting plaatsen we natuurlijk ook." },
    { v: "Kunnen jullie een boom weghalen zonder achterom?", a: "Ja. Met een telekraan of spinkraan tillen we de boom over uw huis, zodat er niets door het huis hoeft." }
  ],

  band: {
    foto: "img/portfolio-6.jpg", fotoPos: "50% 55%",
    titel: "Klaar voor uw *droomtuin?*",
    tekst: "Bel, app of mail Peter met uw wensen en een paar foto's van uw tuin."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel kort wat u wilt en stuur gerust 2 à 3 foto's van uw tuin mee. Peter neemt snel contact met u op.",
    onderwerpen: ["Tuinaanleg", "Schutting of overkapping", "Tuinonderhoud", "Bomen", "Bedrijf of VvE", "Riolering", "Stormschade"],
    voorbeeld: "Bijvoorbeeld: nieuwe schutting met poort en het terras opnieuw bestraten"
  }
};
