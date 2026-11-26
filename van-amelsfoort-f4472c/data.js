// Hoveniersbedrijf Van Amelsfoort V.O.F. (Goirle). Bron: hoveniervanamelsfoort.nl (26-11-2026) + Google (4,5 uit 2).
// Foto's: eigen projectfoto's en banners van hun site (vierkant uitgesneden op hun site). Geen stockfoto's.
// Google-reviews: geen tekst opgehaald -> geen reviews-sectie. WhatsApp = 06 van Theo (op hun site), vast nummer 013 als tweede.
window.SITE = {
  naam: "Hoveniersbedrijf Van Amelsfoort",
  kortNaam: "Van Amelsfoort",
  vak: "Hovenier",
  plaats: "Goirle",
  logo: "img/logo.png",
  logoWit: "img/logo-wit.png",
  logoVorm: "breed",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#2b4220", accent: "#8a6a3a" },
  telefoon: "06 50 29 80 62",
  telefoonIntl: "31650298062",
  telefoon2: "013 534 60 23",
  waTekst: "App Theo",
  email: "theo@hoveniervanamelsfoort.nl",
  adres: ["Poppelseweg 11", "5051 PL Goirle"],
  kvk: "18026758",
  google: { score: "4,5", aantal: 2 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Sinds 1984 uw hovenier in Goirle en omgeving Tilburg: advies, ontwerp, aanleg en onderhoud, voor particulieren en bedrijven.",

  hero: {
    regels: ["Uw tuin", "in rust en", "*balans.*"],
    tekst: "Al sinds 1984 ontwerpen, leggen we aan en onderhouden we tuinen in Goirle en rond Tilburg. Iedere tuin is anders, daarom denken we graag met u mee.",
    foto: "img/hero.jpg", fotoPos: "50% 55%", fotoPosMobiel: "45% 50%", donker: true,
    fotoAlt: "Tuin met strakke buxushagen, gazon en bloeiende borders",
    punten: ["Sinds 1984", "Vrijblijvend adviesgesprek"],
    notitie: { label: "Nu in de planning", tekst: "Plantseizoen: bomen, hagen en heesters aanplanten" }
  },

  marquee: ["Tuinadvies", "Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Bedrijfstuinen", "Energetische tuinen", "Vijvers en water", "Grote bomen planten"],

  intro: {
    kicker: "Hoveniersbedrijf Van Amelsfoort",
    tekst: "Rust, harmonie en balans: *daar draait het om.* Een tuin waarin u helemaal kunt ontspannen, met oog voor uw wensen én voor de natuur.",
    stats: [
      { getal: "1984", label: "Hovenier sinds" },
      { getal: "30+", label: "Jaar onderhoud bij vaste klanten", tel: 30 },
      { getal: "2014", label: "Eerste energetische tuin" },
      { getal: "1", label: "Aanspreekpunt voor uw hele project" }
    ]
  },

  diensten: {
    titel: "Praktisch alles *voor uw tuin*",
    tekst: "Particulieren en bedrijven zijn van harte welkom. En vrijblijvend is bij ons ook écht vrijblijvend.",
    items: [
      { naam: "Tuinadvies", foto: "img/advies.jpg", pos: "50% 50%", tekst: "Advies op maat: voor een nieuwe tuin, achterstallig onderhoud, bomen bij harde wind of beplanting die niet goed bloeit. We kijken samen naar de mogelijkheden.",
        punten: ["Advies op maat", "Problemen oplossen", "Nieuwe tuinaanleg"] },
      { naam: "Tuinontwerp", foto: "img/ontwerp.jpg", pos: "50% 55%", tekst: "We komen bij u langs, meten op en zetten uw wensen op papier. Daarna een eerste schets, die we samen bijschaven tot hij helemaal klopt. Modern, landelijk, onderhoudsvrij of energetisch.",
        punten: ["Opmeten bij u thuis", "Schets en ontwerp", "Beplantingsplan"] },
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 55%", tekst: "Met ontwerp, beplantingsplan, werkomschrijving en offerte op tafel gaan we aan de slag. Waar nodig werken we samen met andere specialisten, maar u houdt één aanspreekpunt.",
        punten: ["Van ontwerp tot oplevering", "Één aanspreekpunt", "Garantie"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 55%", tekst: "Wekelijks gras maaien of eenmalig snoeien: op contractbasis of incidenteel. Bij veel klanten onderhouden we de tuin al ruim dertig jaar.",
        punten: ["Snoeien en bemesten", "Bloembollen planten", "Onderhoudscontract"] },
      { naam: "Energetische tuinen", foto: "img/energetisch.jpg", pos: "50% 55%", tekst: "Sinds 2014 ontwerpen en leggen we energetische tuinen aan: materialen, planten, vormen en kleuren in balans, voor optimale rust en ontspanning.",
        punten: ["Water, vuur, aarde en lucht", "Ontwerp op gevoel", "Rust en harmonie"] },
      { naam: "Bedrijfstuinen", foto: "img/bedrijven.jpg", pos: "50% 50%", tekst: "Een verzorgde bedrijfstuin is een visitekaartje en zorgt voor een fijne werkomgeving. We ontwerpen, leggen aan en onderhouden, onderhoudsarm en functioneel.",
        punten: ["Ontwerp en aanleg", "Onderhoud", "Onderhoudsarm"] }
    ]
  },

  galerij: {
    vorm: "recht", kicker: "Projecten",
    titel: "Tuinen van *Van Amelsfoort*",
    tekst: "Een greep uit tuinen die we ontwierpen en aanlegden. Sleep of gebruik de pijlen.",
    items: [
      { foto: "img/p-water.jpg", label: "Tuin met waterpartij", sub: "Ontwerp en aanleg" },
      { foto: "img/p-beek.jpg", label: "Waterval, beekje en vijver", sub: "Ontwerp en aanleg" },
      { foto: "img/p-rozen.jpg", label: "Pergola met rozen", sub: "Aanleg" },
      { foto: "img/p-strak.jpg", label: "Strakke tuin met gazon", sub: "Ontwerp en aanleg" },
      { foto: "img/p-vijver.jpg", label: "Stadstuin met vijver", sub: "Ontwerp en aanleg" },
      { foto: "img/p-boerderij.jpg", label: "Binnenplaats woonboerderij", sub: "Aanleg" },
      { foto: "img/p-schutting.jpg", label: "Tuin met ronde borders", sub: "Aanleg" },
      { foto: "img/p-gabion.jpg", label: "Borders met gabions", sub: "Bedrijfstuin" },
      { foto: "img/palen.jpg", label: "Zitplek tussen eiken palen", sub: "Energetische tuin" }
    ]
  },

  werkwijze: {
    titel: "Zo komt uw tuin *tot stand*",
    tekst: "Een ontwerp is zelden klaar na één gesprek. We nemen de tijd tot het helemaal klopt.",
    stappen: [
      { naam: "Eerste gesprek", tekst: "We komen bij u langs, bespreken ideeën, wensen en budget en meten de tuin op." },
      { naam: "Ontwerp", tekst: "Een eerste schets die we samen bespreken en aanpassen tot hij helemaal naar wens is." },
      { naam: "Plan en offerte", tekst: "Ontwerp, beplantingsplan, werkomschrijving en offerte. U keurt alles eerst goed." },
      { naam: "Aanleg", tekst: "We leggen de tuin aan en houden zelf de regie. Garantie geven we uiteraard." }
    ]
  },

  over: {
    kicker: "Over ons", navNaam: "Over ons",
    titel: "Persoonlijk, betrouwbaar *en vakkundig*",
    rol: "Theo & Monique van Amelsfoort en Martijn Vermeer",
    tekst: [
      "In 1984 begonnen Theo en Monique van Amelsfoort het hoveniersbedrijf vanuit een woonwijk. Sinds 1988 zitten we net buiten de bebouwde kom van Goirle.",
      "Persoonlijk contact vinden we essentieel. Daarom komen we eerst bij u langs: de woning, het interieur en de tuin in zijn omgeving zijn de basis voor een goed tuinplan."
    ],
    foto: "img/over.jpg", fotoPos: "50% 45%", fotoAlt: "Aanplanten van een border met gabions",
    knop: "App Theo"
  },

  werkgebied: {
    titel: "Goirle, Tilburg en omgeving",
    tekst: "Uw hovenier uit Brabant. Twijfelt u of we bij u komen? Vraag het gerust.",
    plaatsen: ["Goirle", "Tilburg", "Breda"]
  },

  faq: [
    { v: "Is een adviesgesprek echt vrijblijvend?", a: "Ja. Wij hechten waarde aan het woord vrijblijvend, dus bij ons is vrijblijvend ook echt vrijblijvend." },
    { v: "Wat is een energetische tuin?", a: "Een tuin waarin materialen, planten, vormen en kleuren in balans zijn, uitgaand van de vier elementen water, vuur, aarde en lucht. Voor meer rust en harmonie." },
    { v: "Kan ik alleen onderhoud afnemen?", a: "Ja. We werken vaak op contractbasis, maar zijn ook incidenteel inzetbaar: van wekelijks maaien tot eenmalig snoeien." },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. We ontwerpen, leggen aan en onderhouden bedrijfstuinen, functioneel en onderhoudsarm." }
  ],

  band: {
    foto: "img/band.jpg", fotoPos: "50% 50%",
    titel: "Iedere tuin *is anders*",
    tekst: "Vraag een offerte of een vrijblijvend adviesgesprek aan. We komen graag bij u langs."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Offerte of vrijblijvend adviesgesprek? Vertel kort wat u voor ogen heeft, dan nemen we zo snel mogelijk contact met u op.",
    onderwerpen: ["Tuinadvies", "Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Energetische tuin", "Bedrijfstuin"],
    voorbeeld: "Bijvoorbeeld: nieuwe achtertuin met een zitplek en een waterpartij, liefst onderhoudsarm"
  }
};
