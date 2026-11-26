// Tuinprojecten Gouda (Jelle de Kruif). Bron: tuinprojectengouda.nl (Strato-sitebouwer, 26-11-2026) + Google (5,0 uit 10, Bosweg 127 Gouda).
// Foto's: eigen projectfoto's van hun site (Projecten 2025/2026), watermerk weggesneden waar het kon. Geen stockfoto's.
// Google-reviews konden niet worden opgehaald -> geen reviews-sectie, wel score.
window.SITE = {
  naam: "Tuinprojecten Gouda",
  kortNaam: "Tuinprojecten Gouda",
  vak: "Hovenier",
  plaats: "Gouda",
  logo: "img/logo.png",
  logoOpFoto: "img/logo-tegel.png",
  logoVorm: "icoon",
  logoMetNaam: false,
  logoHoogte: 46,
  kleuren: { brand: "#2c4a23", accent: "#8bb33a" },
  telefoon: "06 22 54 70 17",
  telefoonIntl: "31622547017",
  waTekst: "App Jelle",
  email: "info@tuinprojectengouda.nl",
  adres: ["Bosweg 127", "2802 NS Gouda"],
  google: { score: "5,0", aantal: 10 },
  ctaTekst: "Vraag een offerte aan",
  voetTekst: "Tuinaanleg, tuinonderhoud en houtwerk in Gouda en omgeving. Meewerkend eigenaar Jelle de Kruif, met meer dan 25 jaar ervaring in het vak.",

  hero: {
    regels: ["Een tuin", "waar u elke dag", "*van geniet.*"],
    tekst: "Tuinaanleg, onderhoud, overkappingen en vlonders in Gouda en omgeving. Jelle denkt met u mee en werkt zelf mee.",
    foto: "img/hero.jpg", fotoPos: "50% 62%", fotoPosMobiel: "62% 50%", donker: true,
    fotoAlt: "Houten overkapping met sfeerverlichting en loungebank in de avond",
    punten: ["Ruim 25 jaar ervaring", "Vrijblijvende kennismaking"],
    notitie: { label: "Nu in de planning", tekst: "Najaarsbeurt: blad ruimen, snoeien en bollen planten" }
  },

  marquee: ["Tuinaanleg", "Tuinonderhoud", "Tuinrenovatie", "Beplanting", "Gazon", "Overkappingen", "Vlonders", "Schuttingen", "Voorjaarsbeurt", "Najaarsbeurt"],

  intro: {
    kicker: "Tuinprojecten Gouda",
    tekst: "Een tuin die past bij *uw huis en uw leven.* Van een slimme oplossing voor een kleine stadstuin tot groot uitpakken als de ruimte dat toestaat.",
    stats: [
      { getal: "25+", label: "Jaar ervaring in het hoveniersvak", tel: 25 },
      { getal: "5,0", label: "Gemiddeld op Google" },
      { getal: "2018", label: "Eigen bedrijf sinds" },
      { getal: "2", label: "Vormen van onderhoud: contract of regie" }
    ]
  },

  diensten: {
    titel: "Alles voor *uw buitenruimte*",
    tekst: "Uw wensen en de mogelijkheden staan centraal. Die vertalen we naar een persoonlijke, unieke tuin.",
    items: [
      { naam: "Tuinaanleg", foto: "img/aanleg.jpg", pos: "50% 60%", tekst: "Een compleet nieuwe tuin: opschonen, verharding, houtwerk, beplanting en gazon. Tijdens de aanleg houden we u op de hoogte van de voortgang.",
        punten: ["Opschonen oude tuin", "Bestrating en terras", "Beplanting en gazon"] },
      { naam: "Overkappingen en pergola's", foto: "img/pergola.jpg", pos: "50% 45%", tekst: "Houtwerk dat de tuin af maakt: overkappingen, pergola's, vlonders en beschoeiing, stevig gefundeerd en strak afgewerkt.",
        punten: ["Overkapping", "Pergola", "Douglas vlonder"] },
      { naam: "Schuttingen en wanden", foto: "img/overkapping.jpg", pos: "50% 50%", tekst: "Een nieuwe schutting of douglas wand die jaren meegaat en privacy geeft waar u het wilt.",
        punten: ["Douglas wanden", "Schuttingen", "Poorten"] },
      { naam: "Terrassen", foto: "img/terras.jpg", pos: "50% 60%", tekst: "Of u nu kiest voor klinkers, tegels, beton of keramiek: het terras waarop u straks van de zon geniet wordt strak gelegd.",
        punten: ["Keramische tegels", "Gefundeerde terrassen", "Opritten"] },
      { naam: "Tuinonderhoud", foto: "img/onderhoud.jpg", pos: "50% 50%", tekst: "Snoeien, hagen knippen, bemesten en grondbewerking, voor particulieren en bedrijven. Op contractbasis of op regiebasis, wanneer u wilt.",
        punten: ["Onderhoudscontract", "Op regiebasis", "Voor- en najaarsbeurt"] },
      { naam: "Gazon", foto: "img/gazon.jpg", pos: "50% 55%", tekst: "Een nieuw gazon van graszoden of ingezaaid, of uw bestaande gras renoveren. Kunstgras kan ook.",
        punten: ["Graszoden", "Gazonrenovatie", "Kunstgras"] }
    ]
  },

  seizoenen: {
    kicker: "Het hele jaar",
    titel: "Een beurt op het *juiste moment*",
    tekst: "Twee keer per jaar een grote beurt houdt uw tuin gezond en mooi.",
    items: [
      { naam: "Lente", maanden: "maart – april", foto: "img/gazon.jpg", pos: "50% 55%", titel: "De *voorjaarsbeurt*",
        tekst: "Als de eerste krokussen opkomen, geven we de tuin een goede start voor het nieuwe seizoen.",
        punten: ["Tuin en gazon bemesten", "Gazon verticuteren", "Snoeien van rozen en siergrassen"] },
      { naam: "Herfst", maanden: "september – november", foto: "img/p-tuin.jpg", pos: "50% 55%", titel: "De *najaarsbeurt*",
        tekst: "De tuin klaar voor de winter, zodat hij in het voorjaar meteen weer mooi is.",
        punten: ["Blad ruimen en gazon bekalken", "Bollen en knollen planten", "Heesters, bomen en hagen snoeien"] }
    ]
  },

  galerij: {
    vorm: "mozaiek", kicker: "Projecten",
    titel: "Recent *opgeleverd*",
    tekst: "Een greep uit onze projecten in Gouda en omgeving.",
    items: [
      { foto: "img/p-overkapping.jpg", label: "Overkapping met pergola", sub: "Houtwerk en gazon", pos: "50% 45%" },
      { foto: "img/p-terras.jpg", label: "Gefundeerd terras", sub: "Terras en beplanting" },
      { foto: "img/p-lounge.jpg", label: "Loungehoek met verlichting", sub: "Houtwerk", pos: "50% 55%" },
      { foto: "img/p-tuin.jpg", label: "Grote tuin met gazon", sub: "Aanleg" },
      { foto: "img/p-pergola.jpg", label: "Pergola met grindpad", sub: "Aanleg", pos: "50% 60%" }
    ]
  },

  werkwijze: {
    titel: "Stap voor stap naar *uw droomtuin*",
    tekst: "Duidelijk vanaf het eerste gesprek.",
    stappen: [
      { naam: "Kennismaken", tekst: "Een vrijblijvend gesprek bij u thuis. We bekijken de tuin, bespreken uw wensen en maken soms een grove schets met maten." },
      { naam: "Offerte", tekst: "Op basis van alle informatie maken we een offerte, die we u per mail sturen." },
      { naam: "Akkoord en planning", tekst: "Tevreden? Stuur de offerte ondertekend terug, dan nemen we de uitvoering op in de planning." },
      { naam: "Aanleg en oplevering", tekst: "We houden u op de hoogte van de voortgang en geven bij oplevering tips voor het onderhoud." }
    ]
  },

  over: {
    kicker: "Over Jelle", navNaam: "Over ons",
    titel: "Een hovenier die *met u meedenkt*",
    rol: "Jelle de Kruif, oprichter en meewerkend eigenaar",
    tekst: [
      "Jelle heeft meer dan 25 jaar ervaring in het hoveniersvak. In 2018 begon hij Tuinprojecten Gouda, eerst alleen op zaterdag met 2 of 3 man. Inmiddels werken we de hele week.",
      "We gaan elke uitdaging aan, met soms creatieve oplossingen en frisse ideeën: tuinen waar u heerlijk ongedwongen kunt ontspannen."
    ],
    foto: "img/over.jpg", fotoPos: "50% 55%", fotoAlt: "Overkapping met eettafel en sfeerverlichting",
    knop: "App Jelle"
  },

  werkgebied: {
    titel: "Gouda en omgeving",
    tekst: "Gevestigd in Gouda. Woont u wat verder weg? We helpen u ook graag.",
    plaatsen: ["Gouda", "Waddinxveen", "Alphen a/d Rijn", "Bodegraven", "Reeuwijk", "Zevenhuizen", "Moordrecht", "Rotterdam", "Den Haag", "Utrecht", "Nieuwegein"]
  },

  faq: [
    { v: "Kan ik online een prijs krijgen?", a: "Meestal moeten we de situatie eerst zien. Stuur een paar duidelijke foto's met uw adres, een omschrijving en de maten, dan nemen we contact met u op." },
    { v: "Wat is het verschil tussen contract en regie?", a: "Bij een contract komen we op vaste, afgesproken momenten. Op regiebasis bepaalt u zelf wanneer we komen en wat we doen." },
    { v: "Mag ik zelf meehelpen?", a: "Ja, geef bij uw aanvraag aan hoe u de taken wilt verdelen: doen wij alles of helpt u zelf ook mee?" },
    { v: "Werken jullie ook voor bedrijven?", a: "Ja. Tuinonderhoud doen we voor particulieren, bedrijven en instellingen." }
  ],

  band: {
    foto: "img/aanleg.jpg", fotoPos: "50% 60%",
    titel: "Zin in een tuin *die klopt?*",
    tekst: "App, bel of mail Jelle voor een vrijblijvende kennismaking bij u thuis."
  },

  contact: {
    titel: "Vraag een *offerte* aan",
    tekst: "Vertel waar u woont, wat u gedaan wilt hebben en ongeveer hoe groot de tuin is. Krijgt u de voicemail? Spreek hem in, dan bellen we zo snel mogelijk terug.",
    onderwerpen: ["Tuinaanleg", "Overkapping of pergola", "Schutting", "Terras", "Tuinonderhoud", "Voorjaars- of najaarsbeurt"],
    voorbeeld: "Bijvoorbeeld: achtertuin van 6 bij 10 meter in Gouda, nieuw terras en een overkapping, liefst in het voorjaar"
  }
};
